const VOCABULARY = [
  // ── VERBS ──────────────────────────────────────────────────────────────
  {
    id: 1, german: "gehen", english: "to go",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich gehe jeden Abend spazieren.",
    exampleEN: "I go for a walk every evening."
  },
  {
    id: 2, german: "kommen", english: "to come",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Kommst du heute Abend?",
    exampleEN: "Are you coming tonight?"
  },
  {
    id: 3, german: "machen", english: "to do / to make",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Was machst du gerade?",
    exampleEN: "What are you doing right now?"
  },
  {
    id: 4, german: "haben", english: "to have",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich habe viel Zeit heute.",
    exampleEN: "I have a lot of time today."
  },
  {
    id: 5, german: "sein", english: "to be",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Das Wetter ist heute schön.",
    exampleEN: "The weather is nice today."
  },
  {
    id: 6, german: "werden", english: "to become / will (future)",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Es wird bald Frühling.",
    exampleEN: "It will soon be spring."
  },
  {
    id: 7, german: "können", english: "can / to be able to",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich kann gut Deutsch sprechen.",
    exampleEN: "I can speak German well."
  },
  {
    id: 8, german: "müssen", english: "must / to have to",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich muss morgen früh aufstehen.",
    exampleEN: "I have to get up early tomorrow."
  },
  {
    id: 9, german: "wollen", english: "to want",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich will Deutsch lernen.",
    exampleEN: "I want to learn German."
  },
  {
    id: 10, german: "sehen", english: "to see",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich sehe das Hotel dort drüben.",
    exampleEN: "I can see the hotel over there."
  },
  {
    id: 11, german: "hören", english: "to hear / to listen",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich höre gerne Musik.",
    exampleEN: "I like listening to music."
  },
  {
    id: 12, german: "sprechen", english: "to speak",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Sprechen Sie Englisch?",
    exampleEN: "Do you speak English?"
  },
  {
    id: 13, german: "essen", english: "to eat",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir essen jeden Abend zusammen.",
    exampleEN: "We eat together every evening."
  },
  {
    id: 14, german: "trinken", english: "to drink",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Er trinkt immer Kaffee am Morgen.",
    exampleEN: "He always drinks coffee in the morning."
  },
  {
    id: 15, german: "kaufen", english: "to buy",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich kaufe heute Lebensmittel.",
    exampleEN: "I am buying groceries today."
  },
  {
    id: 16, german: "arbeiten", english: "to work",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Sie arbeitet in einem Büro.",
    exampleEN: "She works in an office."
  },
  {
    id: 17, german: "wohnen", english: "to live (reside)",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich wohne seit drei Jahren in Berlin.",
    exampleEN: "I have been living in Berlin for three years."
  },
  {
    id: 18, german: "fahren", english: "to drive / to travel",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir fahren nächste Woche nach Hamburg.",
    exampleEN: "We are travelling to Hamburg next week."
  },
  {
    id: 19, german: "schlafen", english: "to sleep",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Das Baby schläft schon.",
    exampleEN: "The baby is already sleeping."
  },
  {
    id: 20, german: "lernen", english: "to learn",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Er lernt jeden Tag neue Wörter.",
    exampleEN: "He learns new words every day."
  },

  // ── NOUNS ──────────────────────────────────────────────────────────────
  {
    id: 21, german: "das Haus", english: "the house",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Das Haus ist sehr groß.",
    exampleEN: "The house is very big."
  },
  {
    id: 22, german: "die Stadt", english: "the city / town",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Berlin ist eine interessante Stadt.",
    exampleEN: "Berlin is an interesting city."
  },
  {
    id: 23, german: "der Mann", english: "the man",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Der Mann wartet an der Ecke.",
    exampleEN: "The man is waiting at the corner."
  },
  {
    id: 24, german: "die Frau", english: "the woman / wife",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Die Frau spricht sehr schnell.",
    exampleEN: "The woman speaks very quickly."
  },
  {
    id: 25, german: "das Kind", english: "the child",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Das Kind spielt im Garten.",
    exampleEN: "The child is playing in the garden."
  },
  {
    id: 26, german: "der Freund", english: "the friend (male) / boyfriend",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Mein Freund wohnt in München.",
    exampleEN: "My friend lives in Munich."
  },
  {
    id: 27, german: "die Freundin", english: "the friend (female) / girlfriend",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Meine Freundin kommt aus Österreich.",
    exampleEN: "My friend comes from Austria."
  },
  {
    id: 28, german: "die Arbeit", english: "the work / job",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Die Arbeit beginnt um neun Uhr.",
    exampleEN: "Work starts at nine o'clock."
  },
  {
    id: 29, german: "das Essen", english: "the food / meal",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Das Essen war sehr lecker.",
    exampleEN: "The food was very tasty."
  },
  {
    id: 30, german: "das Wasser", english: "the water",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich trinke jeden Tag viel Wasser.",
    exampleEN: "I drink a lot of water every day."
  },
  {
    id: 31, german: "die Zeit", english: "the time",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich habe leider keine Zeit heute.",
    exampleEN: "Unfortunately I have no time today."
  },
  {
    id: 32, german: "das Geld", english: "the money",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Er hat nicht viel Geld.",
    exampleEN: "He does not have a lot of money."
  },
  {
    id: 33, german: "der Tag", english: "the day",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Heute ist ein schöner Tag.",
    exampleEN: "Today is a beautiful day."
  },
  {
    id: 34, german: "die Woche", english: "the week",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Diese Woche bin ich sehr beschäftigt.",
    exampleEN: "This week I am very busy."
  },
  {
    id: 35, german: "das Jahr", english: "the year",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Letztes Jahr war ich in Deutschland.",
    exampleEN: "Last year I was in Germany."
  },
  {
    id: 36, german: "der Weg", english: "the way / path / route",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Wie ist der Weg zum Bahnhof?",
    exampleEN: "What is the way to the train station?"
  },
  {
    id: 37, german: "die Sprache", english: "the language",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Deutsch ist eine schöne Sprache.",
    exampleEN: "German is a beautiful language."
  },
  {
    id: 38, german: "das Buch", english: "the book",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich lese ein interessantes Buch.",
    exampleEN: "I am reading an interesting book."
  },
  {
    id: 39, german: "die Frage", english: "the question",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich habe eine wichtige Frage.",
    exampleEN: "I have an important question."
  },
  {
    id: 40, german: "die Antwort", english: "the answer",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Die Antwort ist leider falsch.",
    exampleEN: "The answer is unfortunately wrong."
  },

  // ── ADJECTIVES ─────────────────────────────────────────────────────────
  {
    id: 41, german: "groß", english: "big / tall",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das neue Restaurant ist sehr groß.",
    exampleEN: "The new restaurant is very big."
  },
  {
    id: 42, german: "klein", english: "small / little",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Sie wohnt in einer kleinen Wohnung.",
    exampleEN: "She lives in a small flat."
  },
  {
    id: 43, german: "gut", english: "good",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das ist eine wirklich gute Idee!",
    exampleEN: "That is a really good idea!"
  },
  {
    id: 44, german: "schlecht", english: "bad",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Wetter ist heute leider schlecht.",
    exampleEN: "The weather is unfortunately bad today."
  },
  {
    id: 45, german: "neu", english: "new",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich habe ein neues Handy gekauft.",
    exampleEN: "I have bought a new mobile phone."
  },
  {
    id: 46, german: "alt", english: "old",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das ist ein sehr altes Gebäude.",
    exampleEN: "That is a very old building."
  },
  {
    id: 47, german: "schnell", english: "fast / quick",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Der Zug fährt sehr schnell.",
    exampleEN: "The train travels very fast."
  },
  {
    id: 48, german: "langsam", english: "slow / slowly",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Bitte sprechen Sie langsamer.",
    exampleEN: "Please speak more slowly."
  },
  {
    id: 49, german: "schön", english: "beautiful / nice / lovely",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Die Aussicht ist wirklich schön.",
    exampleEN: "The view is really beautiful."
  },
  {
    id: 50, german: "schwierig", english: "difficult",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Diese Aufgabe ist ziemlich schwierig.",
    exampleEN: "This task is quite difficult."
  },

  // ── TIME & FREQUENCY ───────────────────────────────────────────────────
  {
    id: 51, german: "heute", english: "today",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Heute gehe ich ins Kino.",
    exampleEN: "Today I am going to the cinema."
  },
  {
    id: 52, german: "morgen", english: "tomorrow",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Morgen habe ich einen Termin.",
    exampleEN: "Tomorrow I have an appointment."
  },
  {
    id: 53, german: "gestern", english: "yesterday",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Gestern war ich im Museum.",
    exampleEN: "Yesterday I was at the museum."
  },
  {
    id: 54, german: "immer", english: "always",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Er ist immer pünktlich.",
    exampleEN: "He is always on time."
  },
  {
    id: 55, german: "manchmal", english: "sometimes",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Manchmal esse ich im Restaurant.",
    exampleEN: "Sometimes I eat at a restaurant."
  },
  {
    id: 56, german: "nie", english: "never",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Ich trinke nie Alkohol.",
    exampleEN: "I never drink alcohol."
  },
  {
    id: 57, german: "oft", english: "often",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Wir gehen oft zusammen essen.",
    exampleEN: "We often go out to eat together."
  },

  // ── CONNECTORS ─────────────────────────────────────────────────────────
  {
    id: 58, german: "aber", english: "but",
    partOfSpeech: "conjunction", category: "connectors",
    exampleDE: "Das Buch ist gut, aber sehr lang.",
    exampleEN: "The book is good, but very long."
  },
  {
    id: 59, german: "weil", english: "because",
    partOfSpeech: "conjunction", category: "connectors",
    exampleDE: "Ich lerne Deutsch, weil es mir gefällt.",
    exampleEN: "I am learning German because I like it."
  },
  {
    id: 60, german: "obwohl", english: "although / even though",
    partOfSpeech: "conjunction", category: "connectors",
    exampleDE: "Obwohl es regnet, gehe ich spazieren.",
    exampleEN: "Although it is raining, I am going for a walk."
  },
  {
    id: 61, german: "wenn", english: "when / if",
    partOfSpeech: "conjunction", category: "connectors",
    exampleDE: "Wenn ich Zeit habe, lese ich ein Buch.",
    exampleEN: "When I have time, I read a book."
  },
  {
    id: 62, german: "dass", english: "that (conjunction)",
    partOfSpeech: "conjunction", category: "connectors",
    exampleDE: "Ich denke, dass Deutsch schön ist.",
    exampleEN: "I think that German is beautiful."
  }
];
