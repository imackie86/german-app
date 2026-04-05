// ════════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════════

let state = {
  wordProgress: {},
  streak: { current: 0, lastSessionDate: null, longest: 0 },
  sessionHistory: [],
  settings: { apiKey: '' }
};

// Active session data
let session = {
  cards: [],
  currentIndex: 0,
  timerInterval: null,
  timeLeft: 900,
  correct: 0,
  revealed: false,
  mode: 'normal' // 'normal' or 'listen'
};

let sessionMode = 'normal'; // selected before session starts
let slowMode = false;

// ════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════

function initApp() {
  loadState();
  ensureAllWordsHaveProgress();
  showScreen('home');
}

function loadState() {
  const saved = localStorage.getItem('deutschLernen');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    } catch (e) {
      console.warn('Failed to load saved state', e);
    }
  }
}

function saveState() {
  localStorage.setItem('deutschLernen', JSON.stringify(state));
}

function ensureAllWordsHaveProgress() {
  const today = getTodayStr();
  VOCABULARY.forEach(word => {
    if (!state.wordProgress[word.id]) {
      state.wordProgress[word.id] = {
        confidence: 0,
        nextReview: today,
        lastSeen: null,
        correct: 0,
        wrong: 0
      };
    }
  });
  saveState();
}

// ════════════════════════════════════════════════════════════
// DATE HELPERS
// ════════════════════════════════════════════════════════════

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// Days between two date strings (b - a)
function daysBetween(a, b) {
  return Math.floor((new Date(b) - new Date(a)) / 86400000);
}

// ════════════════════════════════════════════════════════════
// SCREEN NAVIGATION
// ════════════════════════════════════════════════════════════

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) screen.classList.add('active');

  // Bottom nav visibility
  const nav = document.getElementById('bottom-nav');
  const hideNav = (name === 'session' || name === 'settings' || name === 'lesson');
  nav.classList.toggle('hidden', hideNav);
  // Lesson screen is part of the Courses tab
  const navName = (name === 'lesson') ? 'courses' : name;

  // Update active nav button (lesson screen highlights the Courses button)
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === navName);
  });

  // Per-screen setup
  if (name === 'home') renderHome();
  if (name === 'words') renderWordList('all');
  if (name === 'ask') setupAskScreen();
  if (name === 'courses') renderCourses();
}

// ════════════════════════════════════════════════════════════
// HOME SCREEN
// ════════════════════════════════════════════════════════════

function renderHome() {
  const today = getTodayStr();

  let learned = 0, reviewing = 0, newWords = 0, dueToday = 0;

  VOCABULARY.forEach(word => {
    const p = state.wordProgress[word.id];
    if (!p) return;
    if (p.confidence === 0) {
      newWords++;
    } else if (p.confidence >= 4) {
      learned++;
    } else {
      reviewing++;
    }
    if (p.nextReview <= today && p.confidence < 4) dueToday++;
  });

  document.getElementById('stat-learned').textContent = learned;
  document.getElementById('stat-review').textContent = reviewing;
  document.getElementById('stat-new').textContent = newWords;
  document.getElementById('streak-count').textContent = state.streak.current;

  const longestEl = document.getElementById('streak-longest');
  if (longestEl) longestEl.textContent = 'Best: ' + state.streak.longest + ' days';

  const noteEl = document.getElementById('session-note');
  if (noteEl) noteEl.textContent = '~15 minutes · ' + VOCABULARY.length + ' words to learn';

  // Check if already did a session today
  const doneToday = state.streak.lastSessionDate === today;
  const startBtn = document.getElementById('start-btn');
  const doneTodayMsg = document.getElementById('done-today-msg');

  if (doneToday) {
    startBtn.textContent = 'Practice Again';
    startBtn.classList.remove('disabled');
    if (doneTodayMsg) doneTodayMsg.classList.remove('hidden');
  } else {
    startBtn.textContent = 'Start Today\'s Session';
    startBtn.classList.remove('disabled');
    if (doneTodayMsg) doneTodayMsg.classList.add('hidden');
  }
}

// ════════════════════════════════════════════════════════════
// SESSION
// ════════════════════════════════════════════════════════════

let activeCategoryFilter = null; // set by startCategorySession()

function startNormalSession() {
  // Always reset the category filter so home sessions use all words
  activeCategoryFilter = null;
  startSession();
}

function startSession() {
  const today = getTodayStr();
  const pool = activeCategoryFilter
    ? VOCABULARY.filter(w => w.category === activeCategoryFilter)
    : VOCABULARY;

  // Build card queue
  let reviewCards = [];
  let newCards = [];

  pool.forEach(word => {
    const p = state.wordProgress[word.id];
    if (!p) return;
    if (p.confidence > 0 && p.confidence < 4 && p.nextReview <= today) {
      reviewCards.push(word);
    } else if (p.confidence === 0) {
      newCards.push(word);
    }
  });

  reviewCards = shuffle(reviewCards);
  newCards = shuffle(newCards);

  // Mix: up to 15 reviews + 5 new = 20 cards max
  let cards = [...reviewCards.slice(0, 15), ...newCards.slice(0, 5)];

  // If nothing due, revise all words in the pool to keep sharp
  if (cards.length === 0) {
    cards = shuffle([...pool]).slice(0, activeCategoryFilter ? pool.length : 10);
  }

  session.cards = cards;
  session.currentIndex = 0;
  session.timeLeft = 900;
  session.correct = 0;
  session.revealed = false;
  session.mode = sessionMode;

  showScreen('session');
  startTimer();
  renderCard();
}

function startCategorySession() {
  // activeCategoryFilter was already set by showLesson()
  showScreen('session');
  startSession();
}

function renderCard() {
  document.getElementById('session-complete').classList.add('hidden');
  document.getElementById('flashcard-area').classList.remove('hidden');
  document.getElementById('feedback-bar').classList.add('hidden');

  const total = session.cards.length;
  const idx = session.currentIndex;

  if (idx >= total) {
    showSessionComplete();
    return;
  }

  const word = session.cards[idx];
  const pct = total > 0 ? (idx / total) * 100 : 0;
  const isListenMode = session.mode === 'listen';

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = idx + ' / ' + total;

  document.getElementById('card-tag').textContent = isListenMode ? '👂 LISTENING' : word.partOfSpeech.toUpperCase();

  const germanEl = document.getElementById('card-german');
  if (isListenMode) {
    germanEl.textContent = '— tap 🔊 to hear, then choose —';
    germanEl.classList.add('listen-hidden');
  } else {
    germanEl.textContent = word.german;
    germanEl.classList.remove('listen-hidden');
  }

  // Build 3 options: correct + 2 random wrong answers
  const options = buildOptions(word);
  const optionsArea = document.getElementById('options-area');
  optionsArea.innerHTML = options.map(opt => `
    <button class="option-btn" data-word-id="${opt.id}" onclick="selectOption(${opt.id})">
      ${opt.english}
    </button>
  `).join('');
}

function buildOptions(correctWord) {
  const others = VOCABULARY.filter(w => w.id !== correctWord.id);
  const wrong = shuffle(others).slice(0, 2);
  return shuffle([correctWord, ...wrong]);
}

function selectOption(selectedId) {
  const correctWord = session.cards[session.currentIndex];
  const isCorrect = selectedId === correctWord.id;
  const today = getTodayStr();

  // Disable all buttons and colour them
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const btnId = parseInt(btn.dataset.wordId);
    if (btnId === correctWord.id) {
      btn.classList.add('correct');
    } else if (btnId === selectedId) {
      btn.classList.add('wrong');
    }
  });

  // Update word progress
  const p = state.wordProgress[correctWord.id];
  if (isCorrect) {
    p.confidence = Math.min(5, (p.confidence || 0) + 1);
    p.correct = (p.correct || 0) + 1;
    session.correct++;
  } else {
    p.confidence = Math.max(1, (p.confidence || 1) - 1);
    p.wrong = (p.wrong || 0) + 1;
  }

  const intervals = [0, 1, 3, 7, 14, 30];
  p.nextReview = addDays(today, intervals[p.confidence] ?? 1);
  p.lastSeen = today;
  saveState();

  // Reveal the German word if we were in listen mode
  if (session.mode === 'listen') {
    const germanEl = document.getElementById('card-german');
    germanEl.textContent = correctWord.german;
    germanEl.classList.remove('listen-hidden');
  }

  // Show feedback with example sentence + audio button
  const bar = document.getElementById('feedback-bar');
  const safeExample = correctWord.exampleDE.replace(/"/g, '&quot;');
  if (isCorrect) {
    bar.className = 'feedback-bar correct';
    bar.innerHTML = `✓ Correct! &nbsp;<em>${correctWord.exampleDE}</em> <button class="feedback-audio-btn" onclick="speakText(this.dataset.text)" data-text="${safeExample}">🔊</button>`;
  } else {
    bar.className = 'feedback-bar wrong';
    bar.innerHTML = `✗ It was: <strong>${correctWord.english}</strong> &nbsp;·&nbsp; <em>${correctWord.exampleDE}</em> <button class="feedback-audio-btn" onclick="speakText(this.dataset.text)" data-text="${safeExample}">🔊</button>`;
  }
  bar.classList.remove('hidden');

  // Auto-play the example sentence so you hear it in context every time
  speakText(correctWord.exampleDE);

  // Longer delay to let the sentence play before advancing
  setTimeout(() => {
    session.currentIndex++;
    renderCard();
  }, 3500);
}

// ── Timer ─────────────────────────────────────────────────

function startTimer() {
  clearInterval(session.timerInterval);
  updateTimerDisplay();
  session.timerInterval = setInterval(() => {
    session.timeLeft--;
    updateTimerDisplay();
    if (session.timeLeft <= 0) {
      clearInterval(session.timerInterval);
      showSessionComplete();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(session.timeLeft / 60);
  const s = session.timeLeft % 60;
  const el = document.getElementById('session-timer');
  el.textContent = m + ':' + String(s).padStart(2, '0');
  el.classList.toggle('urgent', session.timeLeft <= 60);
}

function endSessionEarly() {
  clearInterval(session.timerInterval);
  if (session.currentIndex > 0) {
    recordSessionAndStreak();
  }
  showScreen('home');
}

function showSessionComplete() {
  clearInterval(session.timerInterval);
  recordSessionAndStreak();

  const studied = session.currentIndex;
  const pct = studied > 0 ? Math.round((session.correct / studied) * 100) : 0;

  document.getElementById('complete-studied').textContent = studied;
  document.getElementById('complete-correct').textContent = session.correct;
  document.getElementById('complete-pct').textContent = pct + '%';
  document.getElementById('complete-streak').textContent = state.streak.current + ' day' + (state.streak.current !== 1 ? 's' : '');

  document.getElementById('flashcard-area').classList.add('hidden');
  document.getElementById('session-complete').classList.remove('hidden');
}

function recordSessionAndStreak() {
  const today = getTodayStr();

  // Only record once per day
  if (state.streak.lastSessionDate !== today) {
    const last = state.streak.lastSessionDate;
    if (last && daysBetween(last, today) === 1) {
      state.streak.current++;
    } else if (last !== today) {
      state.streak.current = 1;
    }
    if (state.streak.current > state.streak.longest) {
      state.streak.longest = state.streak.current;
    }
    state.streak.lastSessionDate = today;

    state.sessionHistory.push({
      date: today,
      cardsStudied: session.currentIndex,
      correct: session.correct
    });
  }

  saveState();
}

// ════════════════════════════════════════════════════════════
// SPEECH
// ════════════════════════════════════════════════════════════

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('Audio is not supported in this browser. Try Chrome or Safari.');
    return;
  }
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'de-DE';
  utt.rate = slowMode ? 0.5 : 0.85;

  // On mobile, voices may load late — try to pick a German voice
  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find(v => v.lang.startsWith('de'));
  if (germanVoice) utt.voice = germanVoice;

  window.speechSynthesis.speak(utt);
}

function speakCurrentWord() {
  const word = session.cards[session.currentIndex];
  if (word) speakText(word.german);
}

function speakCurrentExample() {
  const word = session.cards[session.currentIndex];
  if (word) speakText(word.exampleDE);
}

function speakWordItem(german) {
  speakText(german);
}

function setSessionMode(mode) {
  sessionMode = mode;
  document.getElementById('mode-normal').classList.toggle('active', mode === 'normal');
  document.getElementById('mode-listen').classList.toggle('active', mode === 'listen');
}

function toggleSlowMode() {
  slowMode = !slowMode;
  const btn = document.getElementById('slow-mode-btn');
  if (btn) btn.classList.toggle('active', slowMode);
}

// ════════════════════════════════════════════════════════════
// COURSES SCREEN
// ════════════════════════════════════════════════════════════

function renderCourses() {
  const container = document.getElementById('courses-list');
  if (!container) return;

  container.innerHTML = COURSES.map(course => {
    const words = VOCABULARY.filter(w => w.category === course.id);
    const wordCount = words.length;
    const learned = words.filter(w => (state.wordProgress[w.id]?.confidence || 0) >= 4).length;
    const pct = wordCount > 0 ? Math.round((learned / wordCount) * 100) : 0;

    return `
      <div class="course-card" onclick="showLesson('${course.id}')">
        <div class="course-card-left">
          <span class="course-emoji">${course.emoji}</span>
          <div class="course-card-info">
            <div class="course-card-title">${course.title}</div>
            <div class="course-card-meta">${wordCount} word${wordCount !== 1 ? 's' : ''} · ${pct}% mastered</div>
          </div>
        </div>
        <div class="course-progress-ring">
          <svg viewBox="0 0 36 36" class="ring-svg">
            <circle cx="18" cy="18" r="15" class="ring-bg"/>
            <circle cx="18" cy="18" r="15" class="ring-fill"
              style="stroke-dasharray: ${Math.round(pct * 0.942)} 94.2;"/>
          </svg>
          <span class="ring-label">${pct}%</span>
        </div>
      </div>
    `;
  }).join('');
}

function showLesson(categoryId) {
  const course = COURSES.find(c => c.id === categoryId);
  if (!course) return;

  activeCategoryFilter = categoryId;

  const words = VOCABULARY.filter(w => w.category === categoryId);
  const wordCount = words.length;
  const learned = words.filter(w => (state.wordProgress[w.id]?.confidence || 0) >= 4).length;

  document.getElementById('lesson-title').textContent = course.emoji + ' ' + course.title;

  const wordPills = words.map(w =>
    `<span class="word-pill">${w.german}</span>`
  ).join('');

  document.getElementById('lesson-body').innerHTML = `
    <div class="lesson-section lesson-intro">
      <p>${course.intro}</p>
    </div>
    <div class="lesson-section lesson-grammar">
      <div class="lesson-section-label">📐 Grammar note</div>
      <p>${course.grammarNote}</p>
    </div>
    <div class="lesson-section lesson-tip">
      <div class="lesson-section-label">💡 Tip</div>
      <p>${course.tip}</p>
    </div>
    <div class="lesson-section lesson-words">
      <div class="lesson-section-label">📖 Words in this topic (${wordCount})</div>
      <div class="word-pills">${wordPills}</div>
      <div class="lesson-mastered">${learned} of ${wordCount} mastered</div>
    </div>
  `;

  showScreen('lesson');
}

// ════════════════════════════════════════════════════════════
// WORDS SCREEN
// ════════════════════════════════════════════════════════════

let currentFilter = 'all';

function renderWordList(filter) {
  currentFilter = filter;
  const today = getTodayStr();

  // Update filter tab styles
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === filter);
  });

  let words = [...VOCABULARY];

  if (filter === 'learning') {
    words = words.filter(w => {
      const c = state.wordProgress[w.id]?.confidence ?? 0;
      return c > 0 && c < 4;
    });
  } else if (filter === 'learned') {
    words = words.filter(w => (state.wordProgress[w.id]?.confidence ?? 0) >= 4);
  } else if (filter === 'new') {
    words = words.filter(w => (state.wordProgress[w.id]?.confidence ?? 0) === 0);
  }

  const container = document.getElementById('words-list');

  if (words.length === 0) {
    container.innerHTML = '<p class="empty-msg">No words in this category yet.</p>';
    return;
  }

  container.innerHTML = words.map(word => {
    const p = state.wordProgress[word.id];
    const conf = p?.confidence ?? 0;
    const stars = buildStars(conf);
    const safeGerman = word.german.replace(/"/g, '&quot;');
    const safeExample = word.exampleDE.replace(/"/g, '&quot;');
    return `
      <div class="word-item">
        <div class="word-item-top">
          <span class="word-german">${word.german}</span>
          <span class="word-stars">${stars}</span>
          <div class="word-audio-group">
            <button class="word-audio-btn" onclick="speakWordItem(this.dataset.german)" data-german="${safeGerman}" title="Hear word">🔊 Word</button>
            <button class="word-sentence-btn" onclick="speakText(this.dataset.text)" data-text="${safeExample}" title="Hear sentence">🔊 Sentence</button>
          </div>
        </div>
        <div class="word-english">${word.english}</div>
        <div class="word-example">${word.exampleDE}</div>
        <div class="word-example-en">${word.exampleEN}</div>
      </div>
    `;
  }).join('');
}

function buildStars(confidence) {
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += i < confidence ? '★' : '○';
  }
  return out;
}

// ════════════════════════════════════════════════════════════
// ASK SCREEN (Claude API)
// ════════════════════════════════════════════════════════════

function setupAskScreen() {
  const hasKey = !!(state.settings?.apiKey);
  document.getElementById('no-key-banner').classList.toggle('hidden', hasKey);
  document.getElementById('chat-input-bar').classList.toggle('hidden', !hasKey);
}

function handleAskKeypress(e) {
  if (e.key === 'Enter') sendQuestion();
}

async function sendQuestion() {
  const input = document.getElementById('ask-input');
  const question = input.value.trim();
  if (!question) return;

  const apiKey = state.settings?.apiKey;
  if (!apiKey) { setupAskScreen(); return; }

  addChatBubble(question, 'user');
  input.value = '';

  // Scroll to bottom
  const chatArea = document.getElementById('chat-area');
  chatArea.scrollTop = chatArea.scrollHeight;

  // Show loading
  const loadingBubble = addChatBubble('...', 'assistant loading');
  loadingBubble.id = 'loading-bubble';

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: `You are a friendly German language tutor. The student is an English speaker at approximately A2/B1 level.

Always answer in English, explaining German grammar or vocabulary clearly.
Structure your answers like this:
- Start with a clear, simple explanation
- Give 2-3 German example sentences, each followed by the English translation in brackets
- Add a tip or memory trick at the end if helpful

Keep answers concise but complete. Use **bold** to highlight key German words or rules.`,
        messages: [{ role: 'user', content: question }]
      })
    });

    document.getElementById('loading-bubble')?.remove();

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || 'API error ' + response.status);
    }

    const data = await response.json();
    const answer = data.content[0].text;
    addChatBubble(formatAnswer(answer), 'assistant');

  } catch (err) {
    document.getElementById('loading-bubble')?.remove();
    addChatBubble('Something went wrong: ' + err.message + '. Please check your API key in Settings.', 'assistant');
    console.error(err);
  }

  chatArea.scrollTop = chatArea.scrollHeight;
}

function addChatBubble(html, classes) {
  const chatArea = document.getElementById('chat-area');
  const div = document.createElement('div');
  div.className = 'chat-bubble ' + classes;
  div.innerHTML = html;
  chatArea.appendChild(div);
  chatArea.scrollTop = chatArea.scrollHeight;
  return div;
}

function formatAnswer(text) {
  // Convert **bold** to <strong>
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');
}

// ════════════════════════════════════════════════════════════
// SETTINGS
// ════════════════════════════════════════════════════════════

function saveApiKey() {
  const key = document.getElementById('api-key-input').value.trim();
  const statusEl = document.getElementById('key-status');

  if (!key) {
    statusEl.textContent = 'Please enter a key.';
    statusEl.className = 'key-status err';
    return;
  }

  if (!state.settings) state.settings = {};
  state.settings.apiKey = key;
  saveState();

  document.getElementById('api-key-input').value = '';
  statusEl.textContent = 'API key saved!';
  statusEl.className = 'key-status ok';
  setTimeout(() => { statusEl.textContent = ''; }, 3000);
}

function clearApiKey() {
  if (!confirm('Remove your saved API key?')) return;
  state.settings.apiKey = '';
  saveState();
  document.getElementById('key-status').textContent = 'Key removed.';
  document.getElementById('key-status').className = 'key-status err';
}

// ════════════════════════════════════════════════════════════
// UTILS
// ════════════════════════════════════════════════════════════

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ════════════════════════════════════════════════════════════
// BOOT
// ════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', initApp);
