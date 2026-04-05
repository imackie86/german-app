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
  },

  // ── FOOD & DRINK ───────────────────────────────────────────────────────
  {
    id: 63, german: "das Brot", english: "the bread",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Ich kaufe jeden Morgen frisches Brot.",
    exampleEN: "I buy fresh bread every morning."
  },
  {
    id: 64, german: "die Milch", english: "the milk",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Möchten Sie Milch in Ihren Kaffee?",
    exampleEN: "Would you like milk in your coffee?"
  },
  {
    id: 65, german: "das Fleisch", english: "the meat",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Er isst kein Fleisch, er ist Vegetarier.",
    exampleEN: "He doesn't eat meat, he is a vegetarian."
  },
  {
    id: 66, german: "das Gemüse", english: "the vegetables",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Frisches Gemüse ist sehr gesund.",
    exampleEN: "Fresh vegetables are very healthy."
  },
  {
    id: 67, german: "das Obst", english: "the fruit",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Ich esse täglich viel Obst.",
    exampleEN: "I eat a lot of fruit every day."
  },
  {
    id: 68, german: "der Käse", english: "the cheese",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Deutschland ist bekannt für seinen Käse.",
    exampleEN: "Germany is famous for its cheese."
  },
  {
    id: 69, german: "der Wein", english: "the wine",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Darf ich ein Glas Wein bestellen?",
    exampleEN: "May I order a glass of wine?"
  },
  {
    id: 70, german: "das Bier", english: "the beer",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Ein kühles Bier schmeckt im Sommer sehr gut.",
    exampleEN: "A cold beer tastes very good in summer."
  },
  {
    id: 71, german: "bestellen", english: "to order",
    partOfSpeech: "verb", category: "food",
    exampleDE: "Was möchten Sie bestellen?",
    exampleEN: "What would you like to order?"
  },
  {
    id: 72, german: "lecker", english: "delicious / tasty",
    partOfSpeech: "adjective", category: "food",
    exampleDE: "Die Suppe ist wirklich lecker!",
    exampleEN: "The soup is really delicious!"
  },

  // ── TRAVEL & TRANSPORT ─────────────────────────────────────────────────
  {
    id: 73, german: "der Zug", english: "the train",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Der Zug nach Berlin fährt um acht Uhr ab.",
    exampleEN: "The train to Berlin departs at eight o'clock."
  },
  {
    id: 74, german: "das Flugzeug", english: "the aeroplane",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Das Flugzeug landet in zwei Stunden.",
    exampleEN: "The aeroplane lands in two hours."
  },
  {
    id: 75, german: "der Bahnhof", english: "the train station",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Der Bahnhof ist nicht weit von hier.",
    exampleEN: "The train station is not far from here."
  },
  {
    id: 76, german: "das Hotel", english: "the hotel",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Wir haben ein Zimmer im Hotel reserviert.",
    exampleEN: "We have reserved a room at the hotel."
  },
  {
    id: 77, german: "die Reise", english: "the trip / journey",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Die Reise nach Wien war wunderbar.",
    exampleEN: "The trip to Vienna was wonderful."
  },
  {
    id: 78, german: "ankommen", english: "to arrive",
    partOfSpeech: "verb", category: "travel",
    exampleDE: "Wann kommen Sie in München an?",
    exampleEN: "When do you arrive in Munich?"
  },
  {
    id: 79, german: "abfahren", english: "to depart / to leave",
    partOfSpeech: "verb", category: "travel",
    exampleDE: "Der Bus fährt in zehn Minuten ab.",
    exampleEN: "The bus departs in ten minutes."
  },

  // ── USEFUL VERBS ───────────────────────────────────────────────────────
  {
    id: 80, german: "brauchen", english: "to need",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich brauche Hilfe mit dieser Aufgabe.",
    exampleEN: "I need help with this task."
  },
  {
    id: 81, german: "helfen", english: "to help",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Können Sie mir bitte helfen?",
    exampleEN: "Can you please help me?"
  },
  {
    id: 82, german: "wissen", english: "to know (a fact)",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich weiß nicht, wie man das sagt.",
    exampleEN: "I don't know how to say that."
  },
  {
    id: 83, german: "verstehen", english: "to understand",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich verstehe diese Regel nicht ganz.",
    exampleEN: "I don't quite understand this rule."
  },
  {
    id: 84, german: "lesen", english: "to read",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Sie liest jeden Abend vor dem Schlafen.",
    exampleEN: "She reads every evening before sleeping."
  },

  // ── MORE ADJECTIVES ────────────────────────────────────────────────────
  {
    id: 85, german: "teuer", english: "expensive",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Restaurant ist leider sehr teuer.",
    exampleEN: "The restaurant is unfortunately very expensive."
  },
  {
    id: 86, german: "billig", english: "cheap",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Ticket ist erstaunlich billig.",
    exampleEN: "The ticket is surprisingly cheap."
  },
  {
    id: 87, german: "müde", english: "tired",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich bin heute sehr müde.",
    exampleEN: "I am very tired today."
  },

  // ── COLOURS (FARBEN) ───────────────────────────────────────────────────
  {
    id: 88, german: "rot", english: "red",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Sie trägt heute ein rotes Kleid.",
    exampleEN: "She is wearing a red dress today."
  },
  {
    id: 89, german: "blau", english: "blue",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Der Himmel ist heute strahlend blau.",
    exampleEN: "The sky is bright blue today."
  },
  {
    id: 90, german: "grün", english: "green",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Im Frühling wird alles wieder grün.",
    exampleEN: "In spring everything turns green again."
  },
  {
    id: 91, german: "gelb", english: "yellow",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Die Bananen sind noch nicht reif, sie sind zu gelb.",
    exampleEN: "The bananas are not ripe yet, they are too yellow."
  },
  {
    id: 92, german: "schwarz", english: "black",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Er trägt immer schwarze Schuhe zur Arbeit.",
    exampleEN: "He always wears black shoes to work."
  },
  {
    id: 93, german: "weiß", english: "white",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Der Schnee ist weiß und sehr tief.",
    exampleEN: "The snow is white and very deep."
  },

  // ── FAMILY (FAMILIE) ───────────────────────────────────────────────────
  {
    id: 94, german: "die Mutter", english: "the mother",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Meine Mutter kocht sehr gut.",
    exampleEN: "My mother cooks very well."
  },
  {
    id: 95, german: "der Vater", english: "the father",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Mein Vater arbeitet als Ingenieur.",
    exampleEN: "My father works as an engineer."
  },
  {
    id: 96, german: "die Schwester", english: "the sister",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Meine Schwester wohnt in Hamburg.",
    exampleEN: "My sister lives in Hamburg."
  },
  {
    id: 97, german: "der Bruder", english: "the brother",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Mein Bruder ist zwei Jahre jünger als ich.",
    exampleEN: "My brother is two years younger than me."
  },
  {
    id: 98, german: "die Tochter", english: "the daughter",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Ihre Tochter lernt gerade Klavierspielen.",
    exampleEN: "Her daughter is currently learning to play piano."
  },
  {
    id: 99, german: "der Sohn", english: "the son",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Ihr Sohn studiert Medizin in Wien.",
    exampleEN: "Her son is studying medicine in Vienna."
  },
  {
    id: 100, german: "die Oma", english: "the grandmother",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Meine Oma backt die besten Kuchen.",
    exampleEN: "My grandmother bakes the best cakes."
  },
  {
    id: 101, german: "der Opa", english: "the grandfather",
    partOfSpeech: "noun", category: "family",
    exampleDE: "Mein Opa erzählt gerne alte Geschichten.",
    exampleEN: "My grandfather likes to tell old stories."
  },

  // ── HOME (ZUHAUSE) ─────────────────────────────────────────────────────
  {
    id: 102, german: "die Wohnung", english: "the flat / apartment",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Ich suche eine günstige Wohnung in der Stadt.",
    exampleEN: "I am looking for an affordable flat in the city."
  },
  {
    id: 103, german: "die Küche", english: "the kitchen",
    partOfSpeech: "noun", category: "home",
    exampleDE: "In der Küche riecht es nach frischem Kaffee.",
    exampleEN: "The kitchen smells of fresh coffee."
  },
  {
    id: 104, german: "das Schlafzimmer", english: "the bedroom",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Das Schlafzimmer ist ruhig und dunkel.",
    exampleEN: "The bedroom is quiet and dark."
  },
  {
    id: 105, german: "das Wohnzimmer", english: "the living room",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Wir sitzen abends gern im Wohnzimmer zusammen.",
    exampleEN: "We like to sit together in the living room in the evenings."
  },
  {
    id: 106, german: "das Badezimmer", english: "the bathroom",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Das Badezimmer ist leider sehr klein.",
    exampleEN: "The bathroom is unfortunately very small."
  },

  // ── BODY (KÖRPER) ──────────────────────────────────────────────────────
  {
    id: 107, german: "der Kopf", english: "the head",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Ich habe Kopfschmerzen und brauche Ruhe.",
    exampleEN: "I have a headache and need rest."
  },
  {
    id: 108, german: "der Arm", english: "the arm",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Er hat sich den Arm gebrochen.",
    exampleEN: "He has broken his arm."
  },
  {
    id: 109, german: "das Bein", english: "the leg",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Nach dem Wandern tun mir die Beine weh.",
    exampleEN: "After hiking my legs are aching."
  },
  {
    id: 110, german: "die Hand", english: "the hand",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Schreib das bitte mit der Hand.",
    exampleEN: "Please write that by hand."
  },
  {
    id: 111, german: "der Fuß", english: "the foot",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Mir tut der linke Fuß seit gestern weh.",
    exampleEN: "My left foot has been hurting since yesterday."
  },

  // ── HEALTH (GESUNDHEIT) ────────────────────────────────────────────────
  {
    id: 112, german: "krank", english: "ill / sick",
    partOfSpeech: "adjective", category: "health",
    exampleDE: "Ich bin krank und bleibe heute zu Hause.",
    exampleEN: "I am ill and staying home today."
  },
  {
    id: 113, german: "gesund", english: "healthy",
    partOfSpeech: "adjective", category: "health",
    exampleDE: "Sport und gutes Essen halten einen gesund.",
    exampleEN: "Sport and good food keep you healthy."
  },
  {
    id: 114, german: "das Krankenhaus", english: "the hospital",
    partOfSpeech: "noun", category: "health",
    exampleDE: "Er liegt seit einer Woche im Krankenhaus.",
    exampleEN: "He has been in hospital for a week."
  },
  {
    id: 115, german: "die Apotheke", english: "the pharmacy / chemist",
    partOfSpeech: "noun", category: "health",
    exampleDE: "Ich kaufe die Tabletten in der Apotheke.",
    exampleEN: "I buy the tablets at the pharmacy."
  },

  // ── PROFESSIONS (BERUFE) ───────────────────────────────────────────────
  {
    id: 116, german: "der Arzt / die Ärztin", english: "the doctor",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Ich habe morgen einen Termin beim Arzt.",
    exampleEN: "I have a doctor's appointment tomorrow."
  },
  {
    id: 117, german: "der Lehrer / die Lehrerin", english: "the teacher",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Unser Lehrer erklärt die Grammatik sehr gut.",
    exampleEN: "Our teacher explains grammar very well."
  },
  {
    id: 118, german: "der Kellner / die Kellnerin", english: "the waiter / waitress",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Der Kellner bringt uns die Speisekarte.",
    exampleEN: "The waiter brings us the menu."
  },
  {
    id: 119, german: "der Koch / die Köchin", english: "the cook / chef",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Der Koch in diesem Restaurant ist ausgezeichnet.",
    exampleEN: "The chef at this restaurant is excellent."
  },
  {
    id: 120, german: "der Polizist / die Polizistin", english: "the police officer",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Der Polizist hilft uns, den Weg zu finden.",
    exampleEN: "The police officer helps us find the way."
  },
  {
    id: 121, german: "der Bäcker / die Bäckerin", english: "the baker",
    partOfSpeech: "noun", category: "professions",
    exampleDE: "Der Bäcker öffnet jeden Morgen um sechs Uhr.",
    exampleEN: "The baker opens every morning at six o'clock."
  },

  // ── MORE VERBS ─────────────────────────────────────────────────────────
  {
    id: 122, german: "schreiben", english: "to write",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Sie schreibt jeden Abend in ihr Tagebuch.",
    exampleEN: "She writes in her diary every evening."
  },
  {
    id: 123, german: "kennen", english: "to know (a person / place)",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Kennst du dieses Restaurant hier?",
    exampleEN: "Do you know this restaurant here?"
  },
  {
    id: 124, german: "denken", english: "to think",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich denke, wir sollten früher aufbrechen.",
    exampleEN: "I think we should set off earlier."
  },
  {
    id: 125, german: "fragen", english: "to ask",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Darf ich Sie etwas fragen?",
    exampleEN: "May I ask you something?"
  },
  {
    id: 126, german: "antworten", english: "to answer / to reply",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Er hat auf meine E-Mail noch nicht geantwortet.",
    exampleEN: "He has not yet replied to my email."
  },
  {
    id: 127, german: "bezahlen", english: "to pay",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Kann ich mit Karte bezahlen?",
    exampleEN: "Can I pay by card?"
  },
  {
    id: 128, german: "suchen", english: "to look for / to search",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich suche meinen Schlüssel — hast du ihn gesehen?",
    exampleEN: "I am looking for my key — have you seen it?"
  },
  {
    id: 129, german: "warten", english: "to wait",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir warten schon seit einer Stunde auf den Bus.",
    exampleEN: "We have been waiting for the bus for an hour already."
  },

  // ── MORE ADJECTIVES ────────────────────────────────────────────────────
  {
    id: 130, german: "warm", english: "warm",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Im Sommer ist es hier sehr warm.",
    exampleEN: "It is very warm here in summer."
  },
  {
    id: 131, german: "kalt", english: "cold",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Im Winter sind die Nächte sehr kalt.",
    exampleEN: "In winter the nights are very cold."
  },
  {
    id: 132, german: "richtig", english: "correct / right",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Alle deine Antworten waren richtig!",
    exampleEN: "All your answers were correct!"
  },
  {
    id: 133, german: "falsch", english: "wrong / incorrect",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Leider ist diese Antwort falsch.",
    exampleEN: "Unfortunately this answer is wrong."
  },
  {
    id: 134, german: "wichtig", english: "important",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Es ist wichtig, jeden Tag zu üben.",
    exampleEN: "It is important to practise every day."
  },
  {
    id: 135, german: "interessant", english: "interesting",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Buch ist sehr interessant.",
    exampleEN: "The book is very interesting."
  },
  {
    id: 136, german: "einfach", english: "easy / simple",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Diese Aufgabe ist einfacher als ich dachte.",
    exampleEN: "This task is easier than I thought."
  },
  {
    id: 137, german: "glücklich", english: "happy",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich bin sehr glücklich, hier zu sein.",
    exampleEN: "I am very happy to be here."
  },

  // ── WEATHER (WETTER) ───────────────────────────────────────────────────
  {
    id: 138, german: "das Wetter", english: "the weather",
    partOfSpeech: "noun", category: "weather",
    exampleDE: "Wie ist das Wetter heute bei euch?",
    exampleEN: "What is the weather like with you today?"
  },
  {
    id: 139, german: "die Sonne", english: "the sun",
    partOfSpeech: "noun", category: "weather",
    exampleDE: "Die Sonne scheint und es ist sehr warm.",
    exampleEN: "The sun is shining and it is very warm."
  },
  {
    id: 140, german: "der Regen", english: "the rain",
    partOfSpeech: "noun", category: "weather",
    exampleDE: "Bei so viel Regen bleibe ich lieber zu Hause.",
    exampleEN: "With so much rain I prefer to stay at home."
  },
  {
    id: 141, german: "der Schnee", english: "the snow",
    partOfSpeech: "noun", category: "weather",
    exampleDE: "Im Winter liegt hier oft viel Schnee.",
    exampleEN: "In winter there is often a lot of snow here."
  },
  {
    id: 142, german: "der Wind", english: "the wind",
    partOfSpeech: "noun", category: "weather",
    exampleDE: "Heute weht ein starker Wind.",
    exampleEN: "There is a strong wind blowing today."
  },
  {
    id: 143, german: "heiß", english: "hot",
    partOfSpeech: "adjective", category: "weather",
    exampleDE: "Im August ist es hier sehr heiß.",
    exampleEN: "It is very hot here in August."
  },
  {
    id: 144, german: "regnen", english: "to rain",
    partOfSpeech: "verb", category: "weather",
    exampleDE: "Es regnet seit heute Morgen ohne Pause.",
    exampleEN: "It has been raining without a break since this morning."
  },

  // ── MORE COLOURS ───────────────────────────────────────────────────────
  {
    id: 145, german: "grau", english: "grey",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Der Himmel ist heute grau und bewölkt.",
    exampleEN: "The sky is grey and cloudy today."
  },
  {
    id: 146, german: "braun", english: "brown",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Er hat braune Augen und dunkles Haar.",
    exampleEN: "He has brown eyes and dark hair."
  },
  {
    id: 147, german: "orange", english: "orange",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Sie trägt eine auffällig orange Jacke.",
    exampleEN: "She is wearing a strikingly orange jacket."
  },
  {
    id: 148, german: "lila", english: "purple / violet",
    partOfSpeech: "adjective", category: "colours",
    exampleDE: "Die Blumen im Garten sind lila.",
    exampleEN: "The flowers in the garden are purple."
  },

  // ── EVERYDAY OBJECTS (GEGENSTÄNDE) ────────────────────────────────────
  {
    id: 149, german: "das Auto", english: "the car",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Mein Auto steht vor dem Haus.",
    exampleEN: "My car is parked in front of the house."
  },
  {
    id: 150, german: "das Fahrrad", english: "the bicycle",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Ich fahre bei gutem Wetter mit dem Fahrrad zur Arbeit.",
    exampleEN: "In good weather I cycle to work."
  },
  {
    id: 151, german: "das Handy", english: "the mobile phone",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Ich habe mein Handy zu Hause vergessen.",
    exampleEN: "I forgot my mobile phone at home."
  },
  {
    id: 152, german: "der Schlüssel", english: "the key",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Haben Sie zufällig meinen Schlüssel gesehen?",
    exampleEN: "Have you by any chance seen my key?"
  },
  {
    id: 153, german: "die Tasche", english: "the bag",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Meine Tasche ist zu schwer für die Reise.",
    exampleEN: "My bag is too heavy for the trip."
  },
  {
    id: 154, german: "die Uhr", english: "the clock / watch",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Wie viel Uhr ist es? Ich habe keine Uhr dabei.",
    exampleEN: "What time is it? I don't have a watch on me."
  },
  {
    id: 155, german: "die Flasche", english: "the bottle",
    partOfSpeech: "noun", category: "objects",
    exampleDE: "Ich kaufe immer eine Flasche Wasser für unterwegs.",
    exampleEN: "I always buy a bottle of water for the journey."
  },

  // ── SHOPPING (EINKAUFEN) ───────────────────────────────────────────────
  {
    id: 156, german: "der Supermarkt", english: "the supermarket",
    partOfSpeech: "noun", category: "shopping",
    exampleDE: "Der Supermarkt um die Ecke hat bis 22 Uhr geöffnet.",
    exampleEN: "The supermarket around the corner is open until 10 pm."
  },
  {
    id: 157, german: "der Preis", english: "the price",
    partOfSpeech: "noun", category: "shopping",
    exampleDE: "Der Preis für dieses Modell ist sehr hoch.",
    exampleEN: "The price for this model is very high."
  },
  {
    id: 158, german: "die Kasse", english: "the checkout / till",
    partOfSpeech: "noun", category: "shopping",
    exampleDE: "Bitte zahlen Sie an der Kasse.",
    exampleEN: "Please pay at the checkout."
  },
  {
    id: 159, german: "das Angebot", english: "the offer / deal / special",
    partOfSpeech: "noun", category: "shopping",
    exampleDE: "Diese Jacke ist im Angebot — 30% günstiger!",
    exampleEN: "This jacket is on offer — 30% cheaper!"
  },
  {
    id: 160, german: "der Markt", english: "the market",
    partOfSpeech: "noun", category: "shopping",
    exampleDE: "Am Samstag gehe ich immer auf den Markt.",
    exampleEN: "I always go to the market on Saturday."
  },

  // ── LEISURE (FREIZEIT) ─────────────────────────────────────────────────
  {
    id: 161, german: "das Kino", english: "the cinema",
    partOfSpeech: "noun", category: "leisure",
    exampleDE: "Gehen wir heute Abend ins Kino?",
    exampleEN: "Shall we go to the cinema this evening?"
  },
  {
    id: 162, german: "das Konzert", english: "the concert",
    partOfSpeech: "noun", category: "leisure",
    exampleDE: "Das Konzert gestern war wirklich fantastisch.",
    exampleEN: "The concert yesterday was really fantastic."
  },
  {
    id: 163, german: "der Park", english: "the park",
    partOfSpeech: "noun", category: "leisure",
    exampleDE: "Wir machen heute ein Picknick im Park.",
    exampleEN: "We are having a picnic in the park today."
  },
  {
    id: 164, german: "das Schwimmbad", english: "the swimming pool",
    partOfSpeech: "noun", category: "leisure",
    exampleDE: "Im Sommer gehe ich oft ins Schwimmbad.",
    exampleEN: "I often go to the swimming pool in summer."
  },
  {
    id: 165, german: "das Hobby", english: "the hobby",
    partOfSpeech: "noun", category: "leisure",
    exampleDE: "Mein Hobby ist Kochen und ich probiere gerne neue Rezepte.",
    exampleEN: "My hobby is cooking and I like trying new recipes."
  },
  {
    id: 166, german: "spielen", english: "to play",
    partOfSpeech: "verb", category: "leisure",
    exampleDE: "Mein Sohn spielt jeden Nachmittag Fußball.",
    exampleEN: "My son plays football every afternoon."
  },

  // ── MORE TIME ADVERBS ──────────────────────────────────────────────────
  {
    id: 167, german: "jetzt", english: "now",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Ich bin jetzt fertig — wir können gehen.",
    exampleEN: "I am ready now — we can go."
  },
  {
    id: 168, german: "dann", english: "then / after that",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Zuerst kaufen wir ein, und dann kochen wir.",
    exampleEN: "First we go shopping, and then we cook."
  },
  {
    id: 169, german: "später", english: "later",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Ich rufe dich später an, okay?",
    exampleEN: "I will call you later, okay?"
  },
  {
    id: 170, german: "bald", english: "soon",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Der Zug kommt bald — noch fünf Minuten.",
    exampleEN: "The train is coming soon — five more minutes."
  },
  {
    id: 171, german: "früh", english: "early",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Ich stehe am Wochenende nicht gern früh auf.",
    exampleEN: "I don't like getting up early at the weekend."
  },
  {
    id: 172, german: "spät", english: "late",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Es ist schon so spät — ich muss jetzt nach Hause.",
    exampleEN: "It is already so late — I have to go home now."
  },
  {
    id: 173, german: "schon", english: "already",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Hast du schon gegessen?",
    exampleEN: "Have you already eaten?"
  },
  {
    id: 174, german: "noch", english: "still / yet",
    partOfSpeech: "adverb", category: "time",
    exampleDE: "Ich bin noch nicht fertig mit der Aufgabe.",
    exampleEN: "I am not yet finished with the task."
  },

  // ── MORE VERBS ─────────────────────────────────────────────────────────
  {
    id: 175, german: "aufstehen", english: "to get up",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich stehe normalerweise um sieben Uhr auf.",
    exampleEN: "I usually get up at seven o'clock."
  },
  {
    id: 176, german: "kochen", english: "to cook",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Heute Abend koche ich Pasta für alle.",
    exampleEN: "This evening I am cooking pasta for everyone."
  },
  {
    id: 177, german: "treffen", english: "to meet",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir treffen uns um drei Uhr am Bahnhof.",
    exampleEN: "We are meeting at three o'clock at the station."
  },
  {
    id: 178, german: "vergessen", english: "to forget",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Vergiss nicht, deinen Ausweis mitzunehmen!",
    exampleEN: "Don't forget to take your ID with you!"
  },
  {
    id: 179, german: "beginnen", english: "to begin / to start",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Der Kurs beginnt nächsten Montag.",
    exampleEN: "The course begins next Monday."
  },
  {
    id: 180, german: "nehmen", english: "to take",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich nehme lieber den Zug als das Flugzeug.",
    exampleEN: "I prefer to take the train rather than the plane."
  },
  {
    id: 181, german: "duschen", english: "to shower",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich dusche jeden Morgen kalt — das weckt mich auf.",
    exampleEN: "I shower cold every morning — it wakes me up."
  },
  {
    id: 182, german: "gefallen", english: "to like / to please",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Die Stadt gefällt mir wirklich sehr gut.",
    exampleEN: "I really like the city very much."
  },

  // ── MORE ADJECTIVES ────────────────────────────────────────────────────
  {
    id: 183, german: "jung", english: "young",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Sie ist noch sehr jung, aber schon sehr talentiert.",
    exampleEN: "She is still very young but already very talented."
  },
  {
    id: 184, german: "dunkel", english: "dark",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Im Winter wird es sehr früh dunkel.",
    exampleEN: "In winter it gets dark very early."
  },
  {
    id: 185, german: "hell", english: "bright / light",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Zimmer ist sehr hell — es hat große Fenster.",
    exampleEN: "The room is very bright — it has large windows."
  },
  {
    id: 186, german: "laut", english: "loud / noisy",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Die Musik im Restaurant war zu laut zum Reden.",
    exampleEN: "The music in the restaurant was too loud to talk."
  },
  {
    id: 187, german: "leise", english: "quiet / soft",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Bitte sprich leiser — das Baby schläft.",
    exampleEN: "Please speak more quietly — the baby is sleeping."
  },
  {
    id: 188, german: "voll", english: "full",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Der Bus war so voll, dass ich nicht einsteigen konnte.",
    exampleEN: "The bus was so full that I could not get on."
  },
  {
    id: 189, german: "leer", english: "empty",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Glas ist schon leer — möchten Sie noch etwas?",
    exampleEN: "The glass is already empty — would you like some more?"
  },
  {
    id: 190, german: "sauber", english: "clean",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Das Hotel war sehr sauber und ordentlich.",
    exampleEN: "The hotel was very clean and tidy."
  },

  // ── PREPOSITIONS (PRÄPOSITIONEN) ───────────────────────────────────────
  {
    id: 191, german: "mit", english: "with",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Ich fahre mit dem Zug nach München.",
    exampleEN: "I am travelling to Munich by train."
  },
  {
    id: 192, german: "ohne", english: "without",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Ich trinke meinen Kaffee ohne Zucker.",
    exampleEN: "I drink my coffee without sugar."
  },
  {
    id: 193, german: "für", english: "for",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Ich habe ein Geschenk für dich.",
    exampleEN: "I have a gift for you."
  },
  {
    id: 194, german: "nach", english: "after / to (a place)",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Nach der Arbeit gehe ich ins Fitnessstudio.",
    exampleEN: "After work I go to the gym."
  },
  {
    id: 195, german: "vor", english: "before / in front of",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Wir treffen uns vor dem Kino um acht.",
    exampleEN: "We are meeting in front of the cinema at eight."
  },
  {
    id: 196, german: "neben", english: "next to / beside",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Darf ich mich neben Sie setzen?",
    exampleEN: "May I sit down next to you?"
  },
  {
    id: 197, german: "zwischen", english: "between",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Das Café liegt zwischen der Bank und der Post.",
    exampleEN: "The café is between the bank and the post office."
  },
  {
    id: 198, german: "durch", english: "through",
    partOfSpeech: "preposition", category: "prepositions",
    exampleDE: "Wir gehen durch den Park nach Hause.",
    exampleEN: "We walk home through the park."
  },

  // ── COMMON EXPRESSIONS (AUSDRÜCKE) ─────────────────────────────────────
  {
    id: 199, german: "Entschuldigung", english: "excuse me / sorry",
    partOfSpeech: "phrase", category: "expressions",
    exampleDE: "Entschuldigung, wie komme ich zum Bahnhof?",
    exampleEN: "Excuse me, how do I get to the train station?"
  },
  {
    id: 200, german: "bitte", english: "please / you're welcome",
    partOfSpeech: "phrase", category: "expressions",
    exampleDE: "Können Sie das bitte wiederholen?",
    exampleEN: "Could you please repeat that?"
  },
  {
    id: 201, german: "danke", english: "thank you",
    partOfSpeech: "phrase", category: "expressions",
    exampleDE: "Vielen Dank für Ihre Hilfe!",
    exampleEN: "Thank you very much for your help!"
  },
  {
    id: 202, german: "gerne", english: "gladly / with pleasure",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Ich helfe Ihnen gerne beim Umzug.",
    exampleEN: "I am happy to help you with the move."
  },
  {
    id: 203, german: "vielleicht", english: "maybe / perhaps",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Vielleicht kommen wir nächste Woche vorbei.",
    exampleEN: "Maybe we will come by next week."
  },
  {
    id: 204, german: "natürlich", english: "of course / naturally",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Natürlich kannst du mein Fahrrad ausleihen.",
    exampleEN: "Of course you can borrow my bicycle."
  },
  {
    id: 205, german: "genau", english: "exactly / precisely",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Genau das habe ich gemeint!",
    exampleEN: "That is exactly what I meant!"
  },
  {
    id: 206, german: "leider", english: "unfortunately",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Leider kann ich heute nicht kommen.",
    exampleEN: "Unfortunately I cannot come today."
  },
  {
    id: 207, german: "eigentlich", english: "actually / really",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Ich wollte eigentlich heute zu Hause bleiben.",
    exampleEN: "I actually wanted to stay at home today."
  },
  {
    id: 208, german: "deshalb", english: "therefore / that's why",
    partOfSpeech: "adverb", category: "expressions",
    exampleDE: "Es regnet, deshalb nehme ich einen Regenschirm.",
    exampleEN: "It is raining, that's why I am taking an umbrella."
  },

  // ── MEALS & MORE FOOD ──────────────────────────────────────────────────
  {
    id: 209, german: "der Kaffee", english: "the coffee",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Guten Morgen! Möchten Sie einen Kaffee?",
    exampleEN: "Good morning! Would you like a coffee?"
  },
  {
    id: 210, german: "der Tee", english: "the tea",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Wenn ich krank bin, trinke ich viel Tee mit Honig.",
    exampleEN: "When I am ill I drink a lot of tea with honey."
  },
  {
    id: 211, german: "das Frühstück", english: "breakfast",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Das Frühstück im Hotel war sehr reichhaltig.",
    exampleEN: "The breakfast at the hotel was very generous."
  },
  {
    id: 212, german: "das Mittagessen", english: "lunch",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Wir machen eine Pause und gehen zusammen zum Mittagessen.",
    exampleEN: "We are taking a break and going for lunch together."
  },
  {
    id: 213, german: "das Abendessen", english: "dinner / supper",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Das Abendessen ist um sieben Uhr fertig.",
    exampleEN: "Dinner is ready at seven o'clock."
  },
  {
    id: 214, german: "die Suppe", english: "the soup",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Im Winter esse ich sehr gerne eine warme Suppe.",
    exampleEN: "In winter I really like eating a warm soup."
  },
  {
    id: 215, german: "der Kuchen", english: "the cake",
    partOfSpeech: "noun", category: "food",
    exampleDE: "Zum Geburtstag backe ich immer einen Kuchen.",
    exampleEN: "I always bake a cake for birthdays."
  },

  // ── MORE BODY PARTS ────────────────────────────────────────────────────
  {
    id: 216, german: "das Auge", english: "the eye",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Meine Augen sind müde vom langen Lesen.",
    exampleEN: "My eyes are tired from reading for a long time."
  },
  {
    id: 217, german: "das Ohr", english: "the ear",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Ich habe Ohrenschmerzen und brauche einen Arzt.",
    exampleEN: "I have earache and need a doctor."
  },
  {
    id: 218, german: "die Nase", english: "the nose",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Wenn man erkältet ist, läuft die Nase.",
    exampleEN: "When you have a cold, your nose runs."
  },
  {
    id: 219, german: "der Mund", english: "the mouth",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Bitte öffnen Sie den Mund, sagt der Zahnarzt.",
    exampleEN: "Please open your mouth, says the dentist."
  },
  {
    id: 220, german: "der Rücken", english: "the back",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Ich habe starke Rückenschmerzen vom langen Sitzen.",
    exampleEN: "I have bad back pain from sitting for a long time."
  },
  {
    id: 221, german: "der Bauch", english: "the stomach / belly",
    partOfSpeech: "noun", category: "body",
    exampleDE: "Mir tut der Bauch weh — ich habe zu viel gegessen.",
    exampleEN: "My stomach hurts — I ate too much."
  },

  // ── FEELINGS & MOODS ───────────────────────────────────────────────────
  {
    id: 222, german: "hungrig", english: "hungry",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich bin so hungrig — haben wir etwas zu essen?",
    exampleEN: "I am so hungry — do we have something to eat?"
  },
  {
    id: 223, german: "durstig", english: "thirsty",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Nach dem Sport bin ich immer sehr durstig.",
    exampleEN: "After sport I am always very thirsty."
  },
  {
    id: 224, german: "traurig", english: "sad",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Der Film war so traurig, dass ich geweint habe.",
    exampleEN: "The film was so sad that I cried."
  },
  {
    id: 225, german: "aufgeregt", english: "excited / nervous",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich bin sehr aufgeregt vor meiner Prüfung.",
    exampleEN: "I am very excited before my exam."
  },
  {
    id: 226, german: "nervös", english: "nervous",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Er wirkt heute sehr nervös — was ist passiert?",
    exampleEN: "He seems very nervous today — what has happened?"
  },
  {
    id: 227, german: "froh", english: "glad / pleased",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ich bin froh, dass du endlich hier bist!",
    exampleEN: "I am glad that you are finally here!"
  },
  {
    id: 228, german: "sicher", english: "sure / safe / certain",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Bist du sicher, dass der Zug um neun fährt?",
    exampleEN: "Are you sure that the train leaves at nine?"
  },
  {
    id: 229, german: "möglich", english: "possible",
    partOfSpeech: "adjective", category: "adjectives",
    exampleDE: "Ist es möglich, ein Zimmer zu reservieren?",
    exampleEN: "Is it possible to reserve a room?"
  },

  // ── EVERYDAY NOUNS ─────────────────────────────────────────────────────
  {
    id: 230, german: "der Termin", english: "the appointment",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich habe morgen früh einen Termin beim Zahnarzt.",
    exampleEN: "I have a dentist's appointment tomorrow morning."
  },
  {
    id: 231, german: "die Nachricht", english: "the message / the news",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich habe ihr eine Nachricht geschickt, aber keine Antwort.",
    exampleEN: "I sent her a message but got no reply."
  },
  {
    id: 232, german: "der Brief", english: "the letter",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich schreibe meiner Großmutter noch immer Briefe.",
    exampleEN: "I still write letters to my grandmother."
  },
  {
    id: 233, german: "das Geschenk", english: "the gift / present",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Was schenkst du ihr zum Geburtstag?",
    exampleEN: "What are you giving her for her birthday?"
  },
  {
    id: 234, german: "der Geburtstag", english: "the birthday",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Herzlichen Glückwunsch zum Geburtstag!",
    exampleEN: "Happy birthday! (Congratulations on your birthday!)"
  },
  {
    id: 235, german: "die Einladung", english: "the invitation",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich habe eine Einladung zur Hochzeit bekommen.",
    exampleEN: "I received an invitation to the wedding."
  },
  {
    id: 236, german: "die Nummer", english: "the number",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Können Sie mir Ihre Telefonnummer geben?",
    exampleEN: "Could you give me your telephone number?"
  },
  {
    id: 237, german: "die Adresse", english: "the address",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Ich brauche Ihre Adresse für die Lieferung.",
    exampleEN: "I need your address for the delivery."
  },
  {
    id: 238, german: "das Problem", english: "the problem",
    partOfSpeech: "noun", category: "nouns",
    exampleDE: "Kein Problem — ich helfe dir gerne dabei.",
    exampleEN: "No problem — I am happy to help you with it."
  },

  // ── MORE VERBS (SEPARABLE & COMMON) ────────────────────────────────────
  {
    id: 239, german: "anrufen", english: "to call / to phone",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich rufe dich heute Abend an.",
    exampleEN: "I will call you this evening."
  },
  {
    id: 240, german: "aufmachen", english: "to open",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Kannst du bitte das Fenster aufmachen?",
    exampleEN: "Can you please open the window?"
  },
  {
    id: 241, german: "zumachen", english: "to close / to shut",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Mach bitte die Tür zu — es zieht.",
    exampleEN: "Please close the door — there is a draught."
  },
  {
    id: 242, german: "aufräumen", english: "to tidy up",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich muss heute noch mein Zimmer aufräumen.",
    exampleEN: "I still need to tidy up my room today."
  },
  {
    id: 243, german: "einkaufen", english: "to go shopping / to shop",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich gehe jeden Samstag auf dem Markt einkaufen.",
    exampleEN: "I go shopping at the market every Saturday."
  },
  {
    id: 244, german: "einladen", english: "to invite",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir möchten euch zum Abendessen einladen.",
    exampleEN: "We would like to invite you to dinner."
  },
  {
    id: 245, german: "schicken", english: "to send",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Ich schicke dir morgen die Unterlagen.",
    exampleEN: "I will send you the documents tomorrow."
  },
  {
    id: 246, german: "besuchen", english: "to visit",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir besuchen meine Eltern jedes Weihnachten.",
    exampleEN: "We visit my parents every Christmas."
  },
  {
    id: 247, german: "zeigen", english: "to show",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Kannst du mir zeigen, wie das funktioniert?",
    exampleEN: "Can you show me how that works?"
  },
  {
    id: 248, german: "mieten", english: "to rent",
    partOfSpeech: "verb", category: "verbs",
    exampleDE: "Wir möchten ein Auto für die Reise mieten.",
    exampleEN: "We would like to rent a car for the trip."
  },

  // ── MORE TRAVEL ────────────────────────────────────────────────────────
  {
    id: 249, german: "der Flughafen", english: "the airport",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Wir müssen zwei Stunden vor dem Flug am Flughafen sein.",
    exampleEN: "We need to be at the airport two hours before the flight."
  },
  {
    id: 250, german: "die Fahrkarte", english: "the ticket (transport)",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Ich kaufe die Fahrkarte am Automaten.",
    exampleEN: "I am buying the ticket from the machine."
  },
  {
    id: 251, german: "der Koffer", english: "the suitcase",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Mein Koffer ist zu schwer — ich muss etwas rausnehmen.",
    exampleEN: "My suitcase is too heavy — I need to take something out."
  },
  {
    id: 252, german: "das Gepäck", english: "the luggage / baggage",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Darf ich mein Gepäck hier kurz stehen lassen?",
    exampleEN: "May I leave my luggage here for a moment?"
  },
  {
    id: 253, german: "die Verspätung", english: "the delay",
    partOfSpeech: "noun", category: "travel",
    exampleDE: "Der Zug hat zwanzig Minuten Verspätung.",
    exampleEN: "The train is twenty minutes late."
  },
  {
    id: 254, german: "reservieren", english: "to reserve / to book",
    partOfSpeech: "verb", category: "travel",
    exampleDE: "Ich möchte einen Tisch für zwei Personen reservieren.",
    exampleEN: "I would like to reserve a table for two people."
  },

  // ── MORE HOME & FURNITURE ──────────────────────────────────────────────
  {
    id: 255, german: "das Fenster", english: "the window",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Ich sitze gern am Fenster und schaue nach draußen.",
    exampleEN: "I like sitting by the window and looking outside."
  },
  {
    id: 256, german: "die Tür", english: "the door",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Es klopft an der Tür — kannst du aufmachen?",
    exampleEN: "Someone is knocking at the door — can you open it?"
  },
  {
    id: 257, german: "der Garten", english: "the garden",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Im Sommer essen wir oft draußen im Garten.",
    exampleEN: "In summer we often eat outside in the garden."
  },
  {
    id: 258, german: "der Tisch", english: "the table",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Setz dich bitte an den Tisch — das Essen ist fertig.",
    exampleEN: "Please sit down at the table — the food is ready."
  },
  {
    id: 259, german: "der Stuhl", english: "the chair",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Dieser Stuhl ist leider kaputt.",
    exampleEN: "This chair is broken unfortunately."
  },
  {
    id: 260, german: "das Bett", english: "the bed",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Ich mache morgens immer zuerst das Bett.",
    exampleEN: "I always make the bed first thing in the morning."
  },
  {
    id: 261, german: "der Schrank", english: "the wardrobe / cupboard",
    partOfSpeech: "noun", category: "home",
    exampleDE: "Meine Kleider hängen alle im Schrank.",
    exampleEN: "All my clothes are hanging in the wardrobe."
  },

  // ── NATURE (NATUR) ─────────────────────────────────────────────────────
  {
    id: 262, german: "der Berg", english: "the mountain",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Im Urlaub wandern wir gern in den Bergen.",
    exampleEN: "On holiday we like hiking in the mountains."
  },
  {
    id: 263, german: "der Fluss", english: "the river",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Der Rhein ist der längste Fluss in Deutschland.",
    exampleEN: "The Rhine is the longest river in Germany."
  },
  {
    id: 264, german: "der See", english: "the lake",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Im Sommer schwimmen wir gern im See.",
    exampleEN: "In summer we like swimming in the lake."
  },
  {
    id: 265, german: "der Wald", english: "the forest / wood",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Ein Spaziergang im Wald ist sehr erholsam.",
    exampleEN: "A walk in the forest is very relaxing."
  },
  {
    id: 266, german: "die Blume", english: "the flower",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Er hat ihr einen Strauß Blumen mitgebracht.",
    exampleEN: "He brought her a bunch of flowers."
  },
  {
    id: 267, german: "der Baum", english: "the tree",
    partOfSpeech: "noun", category: "nature",
    exampleDE: "Der alte Baum im Garten ist über hundert Jahre alt.",
    exampleEN: "The old tree in the garden is over a hundred years old."
  },

  // ── DIRECTIONS (RICHTUNGEN) ────────────────────────────────────────────
  {
    id: 268, german: "links", english: "left",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Biegen Sie an der Ampel links ab.",
    exampleEN: "Turn left at the traffic lights."
  },
  {
    id: 269, german: "rechts", english: "right",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Das Hotel ist rechts, direkt nach der Brücke.",
    exampleEN: "The hotel is on the right, just after the bridge."
  },
  {
    id: 270, german: "geradeaus", english: "straight ahead",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Gehen Sie immer geradeaus, dann sehen Sie den Bahnhof.",
    exampleEN: "Keep going straight ahead, then you will see the station."
  },
  {
    id: 271, german: "oben", english: "above / upstairs / up",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Dein Zimmer ist oben, die zweite Tür links.",
    exampleEN: "Your room is upstairs, the second door on the left."
  },
  {
    id: 272, german: "unten", english: "below / downstairs / down",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Die Küche ist unten, gleich neben dem Eingang.",
    exampleEN: "The kitchen is downstairs, right next to the entrance."
  },
  {
    id: 273, german: "hier", english: "here",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Warte hier — ich bin in fünf Minuten zurück.",
    exampleEN: "Wait here — I will be back in five minutes."
  },
  {
    id: 274, german: "dort", english: "there / over there",
    partOfSpeech: "adverb", category: "directions",
    exampleDE: "Die Apotheke ist dort drüben, hinter der Kirche.",
    exampleEN: "The pharmacy is over there, behind the church."
  },

  // ── QUANTITIES & AMOUNTS ───────────────────────────────────────────────
  {
    id: 275, german: "viel", english: "much / a lot / many",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Ich habe heute leider nicht viel Zeit.",
    exampleEN: "Unfortunately I do not have much time today."
  },
  {
    id: 276, german: "wenig", english: "little / few / not much",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Er schläft leider sehr wenig und ist immer müde.",
    exampleEN: "He sleeps very little unfortunately and is always tired."
  },
  {
    id: 277, german: "alle", english: "all / everyone / every",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Alle Karten für das Konzert sind schon verkauft.",
    exampleEN: "All the tickets for the concert are already sold."
  },
  {
    id: 278, german: "einige", english: "some / a few / several",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Ich habe einige Fragen zu diesem Thema.",
    exampleEN: "I have some questions about this topic."
  },
  {
    id: 279, german: "genug", english: "enough",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Hast du genug geschlafen heute Nacht?",
    exampleEN: "Did you sleep enough last night?"
  },
  {
    id: 280, german: "mehr", english: "more",
    partOfSpeech: "adjective", category: "quantities",
    exampleDE: "Ich brauche mehr Zeit, um das zu verstehen.",
    exampleEN: "I need more time to understand that."
  }
];


// ════════════════════════════════════════════════════════════
// COURSES — one lesson per vocabulary category
// ════════════════════════════════════════════════════════════

const COURSES = [
  {
    id: 'verbs',
    title: 'German Verbs',
    emoji: '🏃',
    intro: 'Verbs are the engine of every German sentence. They change their endings depending on who is doing the action — this is called conjugation. For example, <strong>gehen</strong> (to go) becomes: <em>ich gehe, du gehst, er/sie geht, wir gehen</em>. Many everyday German verbs are "separable" — they split in two when used in a sentence. <strong>Anrufen</strong> (to call) becomes <em>Ich rufe dich an</em> — the <strong>an</strong> travels to the end.',
    grammarNote: 'Modal verbs (können, müssen, wollen) pair with a second verb in the infinitive at the very end of the sentence: <em>"Ich kann gut Deutsch sprechen."</em> The modal takes position 2, the infinitive goes to the end. This structure is one of the most important patterns in German.',
    tip: 'When learning a new verb, always practise it with <strong>ich</strong> (I) first — that\'s the form you\'ll use most in real conversation.'
  },
  {
    id: 'adjectives',
    title: 'Describing Things',
    emoji: '📝',
    intro: 'Adjectives make your German much more expressive. The good news: when you use an adjective <em>after</em> a noun with <strong>sein</strong> (to be), it never changes. <em>"Das Essen ist lecker"</em> (The food is delicious), <em>"Die Aufgabe ist einfach"</em> (The task is easy). This covers most everyday situations perfectly.',
    grammarNote: 'When placed directly <em>before</em> a noun, adjectives take an ending that agrees with the noun\'s gender: <em>"leckeres Essen"</em> (neuter), <em>"eine einfache Aufgabe"</em> (feminine). At A2 level, focus on using adjectives <em>after</em> sein — it\'s natural and avoids the complex endings.',
    tip: 'Learn adjectives in opposite pairs — they\'re twice as easy to remember: groß/klein, gut/schlecht, warm/kalt, laut/leise, voll/leer, dunkel/hell.'
  },
  {
    id: 'nouns',
    title: 'Core Nouns',
    emoji: '📦',
    intro: 'These high-frequency nouns come up in almost every conversation — time, money, work, questions and answers. They are the building blocks you\'ll reach for constantly. Every German noun has a grammatical gender (masculine, feminine or neuter) which affects the article and adjective endings used with it.',
    grammarNote: 'Always learn nouns WITH their article — not just <em>Haus</em> but <em>das Haus</em>. Some patterns help: nouns ending in <strong>-ung</strong> are always feminine (die Wohnung, die Einladung, die Zeitung). Nouns ending in <strong>-ment</strong> or <strong>-um</strong> are usually neuter (das Dokument, das Museum).',
    tip: 'When you\'re unsure of a gender, <em>die</em> is statistically the most common article — but learning them properly from the start will save you a lot of confusion later!'
  },
  {
    id: 'food',
    title: 'Food & Drink',
    emoji: '🍽️',
    intro: 'German meal words you\'ll use every day: <strong>das Frühstück</strong> (breakfast), <strong>das Mittagessen</strong> (lunch), <strong>das Abendessen</strong> (dinner). In a restaurant, <em>"Ich hätte gern..."</em> (I would like...) is the most polite way to order. To get the bill: <em>"Die Rechnung, bitte!"</em>',
    grammarNote: 'A useful gender pattern for drinks: most are masculine — <em>der Kaffee, der Tee, der Wein, der Saft</em> (the juice). Learn the article with each new food word as a habit — it\'ll save a lot of guessing later.',
    tip: '<em>"Ich nehme..."</em> (I\'ll have / I\'ll take...) is another very natural way to order, and sounds just as polite as <em>"Ich hätte gern"</em>. You\'ll hear both constantly in cafés and restaurants.'
  },
  {
    id: 'time',
    title: 'Time & When',
    emoji: '⏰',
    intro: 'German time adverbs often come in useful opposite pairs: <strong>heute/gestern</strong> (today/yesterday), <strong>jetzt/später</strong> (now/later), <strong>früh/spät</strong> (early/late), <strong>immer/nie</strong> (always/never). These are the words that tell you <em>when</em> something happens and they appear in almost every sentence.',
    grammarNote: 'Watch out: <strong>morgen</strong> means BOTH "tomorrow" AND "morning" — context tells you which. <em>"Morgen früh"</em> = tomorrow morning. Also: <strong>schon</strong> (already) and <strong>noch</strong> (still/yet) completely flip the meaning — <em>"Bist du fertig?"</em> — <em>"Schon!"</em> (Already!) vs. <em>"Noch nicht"</em> (Not yet).',
    tip: 'Use <strong>um</strong> for clock times: <em>"um drei Uhr"</em> (at three o\'clock). Use <strong>im</strong> for months and seasons: <em>"im Januar"</em>, <em>"im Winter"</em>. These two little words cover most time-of-day situations.'
  },
  {
    id: 'travel',
    title: 'Travel & Transport',
    emoji: '✈️',
    intro: 'Germans are precise about travel — they\'ll tell you the exact platform, time, and whether the train is on time (<em>pünktlich</em>) or delayed (<em>Verspätung hat</em>). Key question: <em>"Von welchem Gleis fährt der Zug?"</em> (Which platform does the train leave from?). And the dreaded sentence: <em>"Der Zug hat zwanzig Minuten Verspätung."</em>',
    grammarNote: 'To say you\'re travelling BY a vehicle, use <strong>mit dem/der</strong>: <em>"mit dem Zug"</em> (by train), <em>"mit dem Bus"</em> (by bus), <em>"mit dem Flugzeug"</em> (by plane). The article after <strong>mit</strong> always becomes <em>dem</em> — this is the dative case.',
    tip: '<em>Die Fahrkarte</em> is specifically for transport tickets. For event tickets (cinema, concert) use <em>die Eintrittskarte</em> or just <em>das Ticket</em>. Mixing them up won\'t cause confusion, but knowing the difference sounds more natural.'
  },
  {
    id: 'home',
    title: 'Home & Rooms',
    emoji: '🏠',
    intro: 'Many Germans live in flats (<em>Wohnungen</em>) rather than houses. Key rooms to know: <strong>das Wohnzimmer</strong> (living room), <strong>die Küche</strong> (kitchen), <strong>das Schlafzimmer</strong> (bedroom), <strong>das Badezimmer</strong> (bathroom). Notice the pattern — most room names end in <strong>-zimmer</strong>, which simply means "room".',
    grammarNote: 'To say something is IN a room, use <strong>im</strong> (= in + dem, dative): <em>"Das Bett steht im Schlafzimmer"</em> (The bed is in the bedroom). To say you\'re going INTO a room, use <strong>ins</strong> (= in + das): <em>"Ich gehe ins Wohnzimmer"</em>.',
    tip: 'Once you know <strong>-zimmer</strong> means room, you can decode new words: <em>Esszimmer</em> (dining room), <em>Kinderzimmer</em> (children\'s room), <em>Gästezimmer</em> (guest room). German compound nouns are your friend!'
  },
  {
    id: 'body',
    title: 'The Body',
    emoji: '🫀',
    intro: 'Body vocabulary is essential for health situations. The most useful construction is <strong>Mir tut ... weh</strong> (My ... hurts): <em>"Mir tut der Kopf weh"</em> (My head hurts), <em>"Mir tut der Rücken weh"</em> (My back hurts). You can also say <em>"Ich habe Kopfschmerzen"</em> (I have a headache) — literally "head-pains".',
    grammarNote: 'German uses the definite article <em>der/die/das</em> where English says "my" for body parts: <em>"Ich wasche mir die Hände"</em> (I wash my hands) — literally "I wash myself the hands". The dative reflexive pronoun <em>mir</em> shows it\'s your own hands.',
    tip: 'Learn <strong>Schmerzen</strong> (pain/ache) and you can express discomfort anywhere by combining it: <em>Kopf + Schmerzen = Kopfschmerzen</em> (headache), <em>Rücken + Schmerzen = Rückenschmerzen</em> (backache), <em>Bauch + Schmerzen = Bauchschmerzen</em> (stomachache).'
  },
  {
    id: 'colours',
    title: 'Colours',
    emoji: '🎨',
    intro: 'German colour words are adjectives, so they behave like other adjectives: after <strong>sein</strong> (to be) they never change — <em>"Das Auto ist rot"</em> (The car is red). When placed directly before a noun they take an ending — <em>"ein rotes Auto"</em> (a red car). For now, focus on the after-sein form — it\'s completely natural in conversation.',
    grammarNote: 'A simple rule for colours before nouns: when there is NO article before the noun, add <strong>-es</strong> for neuter, <strong>-e</strong> for feminine, <strong>-er</strong> for masculine. So: <em>roter Wein, rote Rose, rotes Bier</em>. But don\'t stress — just saying the colour without an ending is understood perfectly at A2 level.',
    tip: 'Practise colours by describing things around you in German: <em>"das blaue Sofa"</em>, <em>"die grüne Lampe"</em>, <em>"der schwarze Stuhl"</em>. This connects the words to real objects and makes them stick much faster.'
  },
  {
    id: 'expressions',
    title: 'Useful Phrases',
    emoji: '💬',
    intro: 'These connector words and expressions are what make your German sound natural rather than textbook. <strong>Eigentlich</strong> (actually) softens statements. <strong>Leider</strong> (unfortunately) is endlessly useful. <strong>Natürlich</strong> and <strong>Genau</strong> dropped into conversation signal confidence and fluency immediately.',
    grammarNote: '<strong>Deshalb</strong> (that\'s why) and similar adverbs cause verb inversion — the verb comes immediately after them: <em>"Es regnet, deshalb nehme ich einen Schirm"</em> (It\'s raining, that\'s why I\'m taking an umbrella). Notice how <em>nehme</em> comes straight after <em>deshalb</em>. The same rule applies to <em>dann, danach, trotzdem</em>.',
    tip: 'Drop <em>"Natürlich!"</em> and <em>"Genau!"</em> into conversations — they\'re the German equivalents of "Of course!" and "Exactly!" and immediately make you sound more fluent.'
  },
  {
    id: 'family',
    title: 'Family',
    emoji: '👨‍👩‍👧',
    intro: 'German uses possessive adjectives to talk about family: <strong>mein</strong> (my, masc./neuter), <strong>meine</strong> (my, fem.). So: <em>mein Vater, meine Mutter, mein Kind</em>. To introduce family: <em>"Das ist meine Schwester Anna"</em> (This is my sister Anna) or <em>"Ich habe zwei Brüder"</em> (I have two brothers).',
    grammarNote: 'Watch out for double meanings: <strong>die Frau</strong> = "the woman" OR "the wife". <strong>der Mann</strong> = "the man" OR "the husband". Context makes it clear: <em>"meine Frau"</em> (my wife) vs. <em>"eine Frau"</em> (a woman).',
    tip: 'Germans use <strong>Oma</strong> and <strong>Opa</strong> in everyday speech — even adults talking about their elderly grandparents. These are perfectly normal, not childish. The formal versions are <em>die Großmutter</em> and <em>der Großvater</em>.'
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    emoji: '📍',
    intro: 'Prepositions are small but powerful words that show relationships between things. The key challenge in German: they affect the case of the noun that follows. At A2 level, start with two groups: <strong>Accusative</strong>: für, ohne, durch (think of them as a set). <strong>Dative</strong>: mit, nach, von, bei, seit, zu.',
    grammarNote: 'The prepositions <em>an, auf, in, über, unter, vor, neben, hinter, zwischen</em> can take EITHER dative or accusative. Moving towards a place → Accusative: <em>"Ich gehe in die Küche"</em>. Already there, not moving → Dative: <em>"Ich bin in der Küche"</em>. This moving/stationary distinction is the key.',
    tip: 'Learn prepositions in set phrases rather than in isolation: <em>"mit dem Bus"</em>, <em>"nach Hause"</em>, <em>"vor dem Kino"</em>. The case patterns will become automatic through repeated exposure.'
  },
  {
    id: 'weather',
    title: 'The Weather',
    emoji: '🌤️',
    intro: 'Weather is a classic conversation starter! The core structure is <strong>Es ist...</strong> + adjective: <em>"Es ist kalt / warm / heiß / sonnig / bewölkt"</em>. For specific conditions: <em>"Es regnet"</em> (it\'s raining), <em>"Es schneit"</em> (it\'s snowing), <em>"Es ist windig"</em> (it\'s windy). The question: <em>"Wie ist das Wetter?"</em>',
    grammarNote: 'Weather verbs use <strong>es</strong> as an impersonal subject — exactly like English "it": <em>"Es regnet"</em> literally means "it rains". This impersonal <em>es</em> never refers to a thing — it\'s just a grammatical placeholder, the same as "it\'s raining" in English.',
    tip: 'Germany uses Celsius. If someone says <em>"Es sind 30 Grad"</em> — that\'s 86°F and very hot! <em>"Es sind 0 Grad"</em> = freezing (32°F). Knowing this scale helps you react appropriately to weather small talk.'
  },
  {
    id: 'objects',
    title: 'Everyday Objects',
    emoji: '🎒',
    intro: 'These are the nouns you\'ll reach for when describing daily life — what you\'ve left behind, what you need to buy, what you\'re looking for. Key phrase: <em>"Ich habe mein Handy vergessen"</em> (I\'ve forgotten my phone). Also useful: <em>"Haben Sie ... gesehen?"</em> (Have you seen my ...?)',
    grammarNote: 'Notice <strong>das Handy</strong> — a German word that looks English! It comes from "handheld device" and is the standard German word for mobile phone. These "false friends" are common. Another one: <em>das Handy</em> ≠ "handy" (convenient). The German word for convenient is <em>praktisch</em>.',
    tip: 'When shopping for an object, <em>"Ich suche..."</em> (I\'m looking for...) is your key phrase. Follow it with the accusative form of the noun — but for most nouns you can\'t go wrong just using the standard dictionary form at A2 level.'
  },
  {
    id: 'directions',
    title: 'Directions',
    emoji: '🗺️',
    intro: 'The essential question for directions: <em>"Wie komme ich zum/zur...?"</em> (How do I get to...?). Use <strong>zum</strong> before masculine and neuter places: <em>zum Bahnhof, zum Hotel</em>. Use <strong>zur</strong> before feminine places: <em>zur Apotheke, zur Post</em>. Then listen for <em>links</em> (left), <em>rechts</em> (right), and <em>geradeaus</em> (straight ahead).',
    grammarNote: '<strong>Oben</strong> (upstairs/above) and <strong>unten</strong> (downstairs/below) are very versatile. You\'ll also hear <strong>da drüben</strong> or <strong>dort drüben</strong> (over there) constantly — Germans point and say this all the time when giving directions.',
    tip: 'German directions often use landmarks: <em>"Das zweite Haus auf der linken Seite"</em> (the second house on the left side). Listen for <em>"auf der linken/rechten Seite"</em> — it\'s more common than just <em>links/rechts</em> in full directions.'
  },
  {
    id: 'professions',
    title: 'Jobs & Professions',
    emoji: '👨‍⚕️',
    intro: 'German job titles almost always have a masculine and a feminine form. The feminine almost always adds <strong>-in</strong>: Lehrer → Lehrerin, Kellner → Kellnerin, Polizist → Polizistin. To ask someone\'s job: <em>"Was sind Sie von Beruf?"</em> (formal) or <em>"Was machst du beruflich?"</em> (informal).',
    grammarNote: 'This is a key difference from English: when stating your profession after <strong>sein</strong>, you drop the article. Say <em>"Ich bin Arzt"</em> (I am a doctor) — NOT <em>"Ich bin ein Arzt"</em>. The article is omitted. This rule applies after <em>sein, werden, bleiben</em> + profession.',
    tip: 'The word <strong>Beruf</strong> (profession/job) appears in many useful phrases: <em>"Was ist Ihr Beruf?"</em>, <em>"Ich bin von Beruf Lehrer"</em>, <em>"beruflich"</em> (professionally). Learning this one word unlocks a whole cluster of job-related conversation.'
  },
  {
    id: 'leisure',
    title: 'Hobbies & Leisure',
    emoji: '🎭',
    intro: 'To talk about things you enjoy, use <strong>gerne</strong> after the verb: <em>"Ich spiele gerne Fußball"</em> (I like playing football), <em>"Ich gehe gerne ins Kino"</em> (I like going to the cinema). Add <em>sehr gerne</em> for emphasis, or <em>am liebsten</em> (I love most of all). The question to ask anyone: <em>"Was machst du in deiner Freizeit?"</em> (What do you do in your free time?)',
    grammarNote: 'After <strong>gehen</strong> + leisure activity, use <em>in + article</em>: <em>"ins Kino"</em> (= in das Kino), <em>"ins Schwimmbad"</em>, <em>"in den Park"</em> (masculine → den). Note how the article changes: neuter Kino uses <em>ins</em>, masculine Park uses <em>in den</em>.',
    tip: '<strong>Freizeit</strong> literally means "free time" and is used constantly in German conversation. A related word worth knowing: <em>der Urlaub</em> (holiday/vacation) — <em>"Ich bin im Urlaub"</em> (I\'m on holiday).'
  },
  {
    id: 'nature',
    title: 'Nature',
    emoji: '🌳',
    intro: 'Germany has stunning natural landscapes: the Black Forest (<em>Schwarzwald</em>), the Rhine (<em>Rhein</em>), Lake Constance (<em>Bodensee</em>), and the Bavarian Alps (<em>Bayerische Alpen</em>). Nature vocabulary lets you describe places, talk about outdoor activities like hiking (<em>wandern</em>), and make small talk about the landscape around you.',
    grammarNote: 'German loves compound nouns — you can build new words by combining ones you already know: <em>der Berg</em> + <em>die Tour</em> = <em>die Bergtour</em> (mountain hike), <em>der Wald</em> + <em>der Weg</em> = <em>der Waldweg</em> (forest path). The gender of the compound is always the gender of the last word.',
    tip: 'A tricky one: <em>der See</em> (masculine) = lake, but <em>die See</em> (feminine) = the sea. Same word, different meaning depending on the gender! In practice, <em>das Meer</em> is more common for the sea/ocean, so this rarely causes confusion.'
  },
  {
    id: 'quantities',
    title: 'Quantities & Amounts',
    emoji: '🔢',
    intro: 'These small words carry a lot of weight. <strong>Viel</strong> (much/many) and <strong>wenig</strong> (little/few) are key opposites. <strong>Genug</strong> (enough): <em>"Ich habe genug"</em>. <strong>Mehr</strong> (more) appears constantly: <em>"Noch mehr?"</em> (Even more?), <em>"Nicht mehr"</em> (no more / not anymore). And <strong>alle</strong> (all/everyone) — <em>"Alle sind eingeladen!"</em> (Everyone is invited!)',
    grammarNote: '<strong>Viel</strong> and <strong>wenig</strong> work as adjectives (with noun endings) or as adverbs (unchanged): Adverb: <em>"Ich schlafe viel"</em> (I sleep a lot — no change). Adjective: <em>"viele Menschen"</em> (many people — plural ending -e). <em>"viel Geld"</em> (a lot of money — no ending with uncountable nouns).',
    tip: '<strong>Noch</strong> shifts meaning with context: <em>"Ich bin noch hier"</em> (I\'m still here), <em>"Noch etwas?"</em> (Anything else?). You\'ll hear <em>"Noch etwas?"</em> in every restaurant and shop — knowing it saves an awkward moment.'
  },
  {
    id: 'connectors',
    title: 'Conjunctions',
    emoji: '🔗',
    intro: 'Conjunctions let you build longer, more interesting sentences. There are two types in German. <strong>Coordinating</strong> (und, aber, oder, denn) — these join clauses without changing word order. <strong>Subordinating</strong> (weil, obwohl, wenn, dass) — these send the verb to the very end of the clause.',
    grammarNote: 'The verb-to-end rule is one of the most important in German: <em>"Ich lerne Deutsch"</em> → <em>"..., weil ich Deutsch lerne."</em> After <em>weil, dass, obwohl, wenn</em>, the conjugated verb goes to the END. Coordinating conjunctions (aber, und, oder) do NOT change word order.',
    tip: 'Practise the verb-to-end rule by taking any sentence and adding <em>"weil..."</em>: <em>"Ich bin müde, weil ich nicht gut geschlafen habe"</em> (because I didn\'t sleep well). Do this daily and the pattern becomes automatic within a week.'
  },
  {
    id: 'shopping',
    title: 'Shopping',
    emoji: '🛒',
    intro: 'Essential shopping phrases: <em>"Was kostet das?"</em> (How much does this cost?), <em>"Ich suche..."</em> (I\'m looking for...), <em>"Haben Sie...?"</em> (Do you have...?). At the checkout: <em>"Zahlen Sie bar oder mit Karte?"</em> (Cash or card?). Respond with <em>"Mit Karte, bitte"</em> or <em>"Bar, bitte"</em>.',
    grammarNote: 'A cultural note worth knowing: in Germany, most shops are closed on Sundays (<em>Ladenschluss</em>). Many supermarkets close by 20:00-22:00 on weekdays. So <em>"Hat der Supermarkt noch geöffnet?"</em> (Is the supermarket still open?) is a genuinely useful sentence.',
    tip: 'You\'ll often hear <em>"Haben Sie eine Kundenkarte?"</em> (Do you have a loyalty card?) at the checkout. A simple <em>"Nein, danke"</em> is all you need. Also useful: <em>"Ich brauche eine Tüte"</em> (I need a bag) — bags usually cost extra in Germany.'
  },
  {
    id: 'health',
    title: 'Health',
    emoji: '💊',
    intro: 'The most important health phrase: <em>"Ich fühle mich nicht wohl"</em> (I don\'t feel well). To describe pain: <em>"Mir tut ... weh"</em> — <em>"Mir tut der Kopf weh"</em> (My head hurts). In Germany, you need an appointment (<em>einen Termin</em>) for non-emergencies. For minor ailments, a <em>Apotheke</em> (pharmacy) is always an excellent first stop.',
    grammarNote: '<strong>Sich fühlen</strong> (to feel) is a reflexive verb — <em>"Ich fühle mich"</em> (I feel). Other useful reflexive verbs: <em>sich erkälten</em> (to catch a cold), <em>sich erholen</em> (to recover), <em>sich setzen</em> (to sit down). The reflexive pronoun <em>mich/dich/sich</em> always refers back to the subject.',
    tip: 'Germany has compulsory health insurance (<em>Krankenversicherung</em>). Visitors from the UK can use their GHIC card for emergency care. The <em>Apotheke</em> (pharmacy) — identifiable by the red "A" symbol — is always a great first stop for advice and over-the-counter medicine.'
  }
];