export const unit1 = {
    id: 1,
    title: "Unit 1",
    description: "Basics, Greetings, and Numbers",
    guidebook: {
        introduction: "بەخێربێیت بۆ یەکەم هەنگاوی فێربوونی زمانی ئینگلیزی! لەم بەشەدا فێری سڵاوکردن، ناساندنی خۆت و وشە بنچینەییەکان دەبیت. ئامانجەکە ئەوەیە بتوانێت بە سادەیی گفتوگۆ بکەیت.",
        sections: [
            {
                id: "grammar",
                title: "📚 ڕێزمانی سەرەکی (Grammar)",
                content: "گرنگترین جیاوازی لە نێوان کوردی و ئینگلیزیدا ڕیزبەندی وشەکانە لە ڕستەدا.",
                subsections: [
                    {
                        subtitle: "پێکهاتەی ڕستە (Sentence Structure)",
                        text: "لە زمانی کوردیدا کردار دەکەوێتە کۆتایی ڕستە (SOV)، بەڵام لە ئینگلیزیدا کردار دەکەوێتە دوای بکەر (SVO).",
                        visual: {
                            type: "sentence-structure",
                            data: {
                                english: [
                                    { word: "I", label: "Subject", color: "#3b82f6" },
                                    { word: "Drink", label: "Verb", color: "#ef4444" },
                                    { word: "Water", label: "Object", color: "#10b981" }
                                ],
                                kurdish: [
                                    { word: "من", label: "بکەر", color: "#3b82f6" },
                                    { word: "ئاو", label: "بەرکار", color: "#10b981" },
                                    { word: "دەخۆمەوە", label: "کردار", color: "#ef4444" }
                                ]
                            }
                        }
                    },
                    {
                        subtitle: "جێناوەکان (Pronouns)",
                        text: "لە ئینگلیزیدا جێناوەکان زۆر گرنگن. ئەمانە بنەڕەتییەکانن:",
                        visual: {
                            type: "pronoun-grid",
                            data: [
                                { english: "I", kurdish: "من", icon: "👤" },
                                { english: "You", kurdish: "تۆ", icon: "👉" },
                                { english: "He", kurdish: "ئەو (نێر)", icon: "👨" },
                                { english: "She", kurdish: "ئەو (مێ)", icon: "👩" },
                                { english: "We", kurdish: "ئێمە", icon: "👥" },
                                { english: "They", kurdish: "ئەوان", icon: "👫" }
                            ]
                        }
                    },
                    {
                        subtitle: "کرداری 'To Be' (بوون)",
                        text: "گرنگترین کردار لە ئینگلیزیدا. دەگۆڕێت بەپێی جێناوەکە:",
                        visual: {
                            type: "conjugation",
                            data: [
                                { subject: "I", subKurdish: "من", verb: "am" },
                                { subject: "You", subKurdish: "تۆ", verb: "are" },
                                { subject: "He/She", subKurdish: "ئەو", verb: "is" },
                                { subject: "We", subKurdish: "ئێمە", verb: "are" },
                                { subject: "They", subKurdish: "ئەوان", verb: "are" }
                            ]
                        }
                    }
                ]
            },
            {
                id: "learning-path",
                title: "🎯 ڕێگای فێربوون",
                content: "بەم ڕێگایە پێش بکەوە:",
                visual: {
                    type: "timeline",
                    data: [
                        { label: "Alphabet", sub: "پیتەکان" },
                        { label: "Sounds", sub: "دەنگەکان" },
                        { label: "Words", sub: "وشەکان" },
                        { label: "Sentences", sub: "ڕستەکان" }
                    ]
                }
            },
            {
                id: "pronunciation",
                title: "🗣️ دەنگدان (Pronunciation)",
                content: "زمانی ئینگلیزی هەندێک دەنگی تێدایە کە ڕەنگە بۆ کوردێک نوێ بن یان جیاواز بن:",
                items: [
                    { term: "TH (The)", definition: "وەک دەنگی 'ز' دەخوێندرێتەوە بەڵام زمان دەچێتە نێوان ددانەکان." },
                    { term: "TH (Think)", definition: "وەک دەنگی 'س' دەخوێندرێتەوە بەڵام زمان دەچێتە نێوان ددانەکان." },
                    { term: "W (Water)", definition: "وەک پیتی 'و' دەخوێندرێتەوە، وەک لە وشەی 'وا'." },
                    { term: "R (Run)", definition: "پیتی R لە ئینگلیزیدا سووکترە وەک لە کوردی، زمان لە دەمدا ناڵەرێتەوە." }
                ]
            },
            {
                id: "culture",
                title: "🌍 کەلتوور: سڵاوکردن",
                content: "لە وڵاتە ئینگلیزی-زمانەکاندا، سڵاوکردن زۆر باوە. وشەی 'Hello' فەرمییە، بەڵام 'Hi' زیاتر لە نێوان هاوڕێیاندا بەکاردێت. دەست جوڵاندن (Wave) باوترین شێوازی سڵاوە."
            },
            {
                id: "vocabulary",
                title: "📖 وشەسازی بنەڕەتی",
                content: "گرنگترین وشەکان بۆ دەستپێکردن:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Water", kurdish: "ئاو", icon: "💧" },
                        { english: "Bread", kurdish: "نان", icon: "🍞" },
                        { english: "Apple", kurdish: "سێو", icon: "🍎" },
                        { english: "Milk", kurdish: "شیر", icon: "🥛" },
                        { english: "Tea", kurdish: "چای", icon: "☕" },
                        { english: "Coffee", kurdish: "قاوە", icon: "☕" },
                        { english: "Man", kurdish: "پیاو", icon: "👨" },
                        { english: "Woman", kurdish: "ژن", icon: "👩" },
                        { english: "Boy", kurdish: "کوڕ", icon: "👦" },
                        { english: "Girl", kurdish: "کچ", icon: "👧" },
                        { english: "Yes", kurdish: "بەڵێ", icon: "✅" },
                        { english: "No", kurdish: "نەخێر", icon: "❌" }
                    ]
                }
            },
            {
                id: "numbers",
                title: "🔢 ژمارەکان (Numbers 1-10)",
                content: "فێربوونی ژمارەکان زۆر گرنگە بۆ ژیانی ڕۆژانە:",
                visual: {
                    type: "conjugation",
                    data: [
                        { subject: "1", subKurdish: "یەک", verb: "One" },
                        { subject: "2", subKurdish: "دوو", verb: "Two" },
                        { subject: "3", subKurdish: "سێ", verb: "Three" },
                        { subject: "4", subKurdish: "چوار", verb: "Four" },
                        { subject: "5", subKurdish: "پێنج", verb: "Five" },
                        { subject: "6", subKurdish: "شەش", verb: "Six" },
                        { subject: "7", subKurdish: "حەوت", verb: "Seven" },
                        { subject: "8", subKurdish: "هەشت", verb: "Eight" },
                        { subject: "9", subKurdish: "نۆ", verb: "Nine" },
                        { subject: "10", subKurdish: "دە", verb: "Ten" }
                    ]
                }
            },
            {
                id: "greetings-dialogue",
                title: "💬 گفتوگۆی نموونەیی: ناسینەوە",
                content: "چۆن خۆت بناسێنیت بە ئینگلیزی:",
                visual: {
                    type: "dialogue",
                    data: [
                        { speaker: "A", avatar: "👨", english: "Hello! What is your name?", kurdish: "سڵاو! ناوت چییە؟" },
                        { speaker: "B", avatar: "👩", english: "Hi! My name is Sara.", kurdish: "سڵاو! ناوم سارایە." },
                        { speaker: "A", avatar: "👨", english: "Nice to meet you!", kurdish: "خۆشحاڵم بە ناسینت!" },
                        { speaker: "B", avatar: "👩", english: "Nice to meet you too!", kurdish: "منیش خۆشحاڵم!" }
                    ]
                }
            },
            {
                id: "intensity",
                title: "📈 پلەکانی قسەکردن",
                content: "لە ساکارەوە بۆ فەرمی:",
                visual: {
                    type: "comparison",
                    data: [
                        { english: "Hey", kurdish: "هەی (زۆر ساکار)", icon: "👋" },
                        { english: "Hi", kurdish: "سڵاو (ساکار)", icon: "😊" },
                        { english: "Hello", kurdish: "سڵاو (فەرمی)", icon: "🤝" }
                    ]
                }
            },
            {
                id: "colors",
                title: "🎨 ڕەنگەکان (Colors)",
                content: "ڕەنگەکان لە ژیانی ڕۆژانەدا زۆر بەکاردێن:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Red", kurdish: "سوور", icon: "🔴" },
                        { english: "Blue", kurdish: "شین", icon: "🔵" },
                        { english: "Green", kurdish: "سەوز", icon: "🟢" },
                        { english: "Yellow", kurdish: "زەرد", icon: "🟡" },
                        { english: "Black", kurdish: "ڕەش", icon: "⚫" },
                        { english: "White", kurdish: "سپی", icon: "⚪" }
                    ]
                }
            },
            {
                id: "days",
                title: "📅 ڕۆژەکانی هەفتە (Days of the Week)",
                content: "حەوت ڕۆژی هەفتە:",
                visual: {
                    type: "conjugation",
                    data: [
                        { subject: "Monday", subKurdish: "دووشەممە", verb: "مەندەی" },
                        { subject: "Tuesday", subKurdish: "سێشەممە", verb: "تیوزدەی" },
                        { subject: "Wednesday", subKurdish: "چوارشەممە", verb: "وێنزدەی" },
                        { subject: "Thursday", subKurdish: "پێنجشەممە", verb: "سێرزدەی" },
                        { subject: "Friday", subKurdish: "هەینی", verb: "فرایدەی" },
                        { subject: "Saturday", subKurdish: "شەممە", verb: "ساتەردەی" },
                        { subject: "Sunday", subKurdish: "یەکشەممە", verb: "سەندەی" }
                    ]
                }
            },
            {
                id: "common-verbs",
                title: "🏃 کردارە باوەکان (Common Verbs)",
                content: "گرنگترین کردارەکان بۆ دەستپێکردن:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Go", kurdish: "ڕۆیشتن", icon: "🚶" },
                        { english: "Come", kurdish: "هاتن", icon: "🏃" },
                        { english: "Eat", kurdish: "خواردن", icon: "🍽️" },
                        { english: "Drink", kurdish: "خواردنەوە", icon: "🥤" },
                        { english: "Sleep", kurdish: "نوستن", icon: "😴" },
                        { english: "See", kurdish: "بینین", icon: "👁️" },
                        { english: "Speak", kurdish: "قسەکردن", icon: "🗣️" },
                        { english: "Write", kurdish: "نووسین", icon: "✍️" }
                    ]
                }
            }
        ],
        keyPhrases: [
            { english: "Hello", kurdish: "سڵاو", pronunciation: "هەلۆ" },
            { english: "Good morning", kurdish: "بەیانی باش", pronunciation: "گود مۆرنینگ" },
            { english: "How are you?", kurdish: "چۆنیت؟", pronunciation: "هاو ئار یو؟" },
            { english: "I am fine", kurdish: "من باشم", pronunciation: "ئای ئەم فاین" },
            { english: "Thank you", kurdish: "سوپاس", pronunciation: "سانک یو" },
            { english: "Goodbye", kurdish: "خوات لەگەڵ", pronunciation: "گود بای" },
            { english: "Water", kurdish: "ئاو", pronunciation: "واتەر" },
            { english: "Bread", kurdish: "نان", pronunciation: "برێد" },
            { english: "Please", kurdish: "تکایە", pronunciation: "پلیز" },
            { english: "Yes / No", kurdish: "بەڵێ / نەخێر", pronunciation: "یێس / نۆ" }
        ]
    },
    lessons: [
        {
            id: "l1",
            title: "Basics 1",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "Which of these is 'Water'?",
                    options: [
                        { id: "opt1", text: "ئاو (Aw)", image: "💧", correct: true },
                        { id: "opt2", text: "نان (Nan)", image: "🍞", correct: false },
                        { id: "opt3", text: "سێو (Sêw)", image: "🍎", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "sentence-builder",
                    question: "Write this in English",
                    sourceText: "ئاو",
                    correctSentence: ["Water"],
                    options: ["Water", "Bread", "Apple", "Please"]
                },
                {
                    id: 3,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "ئاو", english: "Water" },
                        { kurdish: "نان", english: "Bread" },
                        { kurdish: "سێو", english: "Apple" },
                        { kurdish: "سڵاو", english: "Hello" },
                        { kurdish: "ماڵئاوا", english: "Goodbye" }
                    ]
                },
                {
                    id: 4,
                    type: "multiple-choice",
                    question: "Which of these is 'Bread'?",
                    options: [
                        { id: "opt1", text: "ئاو", image: "💧", correct: false },
                        { id: "opt2", text: "نان", image: "🍞", correct: true },
                        { id: "opt3", text: "شیر", image: "🥛", correct: false }
                    ]
                },
                {
                    id: 5,
                    type: "sentence-builder",
                    question: "Write this in Kurdish",
                    sourceText: "Water and Bread",
                    correctSentence: ["ئاو", "و", "نان"],
                    options: ["ئاو", "نان", "و", "سێو", "بخۆ"]
                },
                {
                    id: 6,
                    type: "fill-blank",
                    question: "Complete the sentence: '___ بخۆ' (Eat ___)",
                    sentenceParts: ["___", "بخۆ"],
                    correctOption: "نان",
                    options: ["نان", "ئاو", "خەو"]
                },
                {
                    id: 7,
                    type: "multiple-choice",
                    question: "How do you say 'Hello'?",
                    options: [
                        { id: "opt1", text: "سڵاو", correct: true },
                        { id: "opt2", text: "سوپاس", correct: false },
                        { id: "opt3", text: "بەڵێ", correct: false }
                    ]
                },
                {
                    id: 8,
                    type: "sentence-builder",
                    question: "Translate: 'Hello, KurdLingo'",
                    sourceText: "Hello, KurdLingo",
                    correctSentence: ["سڵاو", "،", "کوردلینۆ"],
                    options: ["سڵاو", "کوردلینۆ", "،", "نان", "ئاو"]
                },
                {
                    id: 9,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "پیاو", english: "Man" },
                        { kurdish: "ژن", english: "Woman" },
                        { kurdish: "کوڕ", english: "Boy" },
                        { kurdish: "کچ", english: "Girl" }
                    ]
                },
                {
                    id: 10,
                    type: "multiple-choice",
                    question: "Which is 'Apple'?",
                    options: [
                        { id: "opt1", text: "سێو", image: "🍎", correct: true },
                        { id: "opt2", text: "مۆز", image: "🍌", correct: false },
                        { id: "opt3", text: "هەنار", image: "🍇", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l2",
            title: "Basics 2",
            exercises: [
                {
                    id: 1,
                    type: "sentence-builder",
                    question: "Translate: 'I am a boy'",
                    sourceText: "I am a boy",
                    correctSentence: ["من", "کوڕم"],
                    options: ["من", "کوڕم", "کچم", "ئاو"]
                },
                {
                    id: 2,
                    type: "multiple-choice",
                    question: "Select 'Woman'",
                    options: [
                        { id: "opt1", text: "ژن", image: "👩", correct: true },
                        { id: "opt2", text: "پیاو", image: "👨", correct: false }
                    ]
                },
                {
                    id: 3,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "من", english: "I" },
                        { kurdish: "تۆ", english: "You" },
                        { kurdish: "ئەو", english: "He/She" }
                    ]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: '___ کچم' (I am a girl)",
                    sentenceParts: ["___", "کچم"],
                    correctOption: "من",
                    options: ["من", "تۆ", "ئەو"]
                },
                {
                    id: 5,
                    type: "sentence-builder",
                    question: "Translate: 'You are a man'",
                    sourceText: "You are a man",
                    correctSentence: ["تۆ", "پیاویت"],
                    options: ["تۆ", "پیاویت", "ژنیت", "من"]
                },
                {
                    id: 6,
                    type: "multiple-choice",
                    question: "What is 'Milk'?",
                    options: [
                        { id: "opt1", text: "شیر", image: "🥛", correct: true },
                        { id: "opt2", text: "چا", image: "☕", correct: false }
                    ]
                },
                {
                    id: 7,
                    type: "sentence-builder",
                    question: "Translate: 'I drink water'",
                    sourceText: "I drink water",
                    correctSentence: ["من", "ئاو", "دەخۆمەوە"],
                    options: ["من", "ئاو", "دەخۆمەوە", "دەخۆم", "نان"]
                },
                {
                    id: 8,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "دەخۆم", english: "I eat" },
                        { kurdish: "دەخۆمەوە", english: "I drink" },
                        { kurdish: "دەخەوم", english: "I sleep" }
                    ]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "Select 'Tea'",
                    options: [
                        { id: "opt1", text: "چا", image: "☕", correct: true },
                        { id: "opt2", text: "شیر", image: "🥛", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "fill-blank",
                    question: "Complete: 'من ___ دەخۆمەوە' (I drink milk)",
                    sentenceParts: ["من", "___", "دەخۆمەوە"],
                    correctOption: "شیر",
                    options: ["شیر", "چا", "ئاو"]
                }
            ]
        },
        {
            id: "l3",
            title: "Greetings & Introductions",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "How do you say 'Good morning'?",
                    options: [
                        { id: "opt1", text: "بەیانی باش", correct: true },
                        { id: "opt2", text: "ئێوارە باش", correct: false },
                        { id: "opt3", text: "شەو باش", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "سڵاو", english: "Hello" },
                        { kurdish: "بەیانی باش", english: "Good morning" },
                        { kurdish: "ئێوارە باش", english: "Good evening" },
                        { kurdish: "شەو باش", english: "Good night" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "Translate: 'How are you?'",
                    sourceText: "How are you?",
                    correctSentence: ["چۆنیت", "؟"],
                    options: ["چۆنیت", "؟", "باشم", "سڵاو"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'My name is ___'",
                    sentenceParts: ["ناوم", "___"],
                    correctOption: "ئەحمەدە",
                    options: ["ئەحمەدە", "سارایە", "عەلییە", "فاتیمەیە"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "What is 'Thank you'?",
                    options: [
                        { id: "opt1", text: "سوپاس", correct: true },
                        { id: "opt2", text: "ببورە", correct: false },
                        { id: "opt3", text: "تکایە", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "sentence-builder",
                    question: "Translate: 'Nice to meet you'",
                    sourceText: "Nice to meet you",
                    correctSentence: ["خۆشحاڵم", "بە", "ناسینت"],
                    options: ["خۆشحاڵم", "بە", "ناسینت", "بینینت", "قسەکردن"]
                },
                {
                    id: 7,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "سوپاس", english: "Thank you" },
                        { kurdish: "ببورە", english: "Sorry" },
                        { kurdish: "تکایە", english: "Please" },
                        { kurdish: "خوات لەگەڵ", english: "Goodbye" }
                    ]
                },
                {
                    id: 8,
                    type: "fill-blank",
                    question: "Complete: 'I am ___' (fine)",
                    sentenceParts: ["من", "___"],
                    correctOption: "باشم",
                    options: ["باشم", "نەخۆشم", "ماندووم", "خۆشحاڵم"]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "What is 'Please'?",
                    options: [
                        { id: "opt1", text: "تکایە", correct: true },
                        { id: "opt2", text: "سوپاس", correct: false },
                        { id: "opt3", text: "ببورە", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "sentence-builder",
                    question: "Translate: 'What is your name?'",
                    sourceText: "What is your name?",
                    correctSentence: ["ناوت", "چییە", "؟"],
                    options: ["ناوت", "چییە", "؟", "کوێیە", "کەی"]
                }
            ]
        },
        {
            id: "l4",
            title: "Numbers 1-20",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "What is 'Five'?",
                    options: [
                        { id: "opt1", text: "پێنج", correct: true },
                        { id: "opt2", text: "چوار", correct: false },
                        { id: "opt3", text: "شەش", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "یەک", english: "One" },
                        { kurdish: "دوو", english: "Two" },
                        { kurdish: "سێ", english: "Three" },
                        { kurdish: "چوار", english: "Four" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "Count: 'One, Two, Three'",
                    sourceText: "One, Two, Three",
                    correctSentence: ["یەک", "،", "دوو", "،", "سێ"],
                    options: ["یەک", "دوو", "سێ", "،", "چوار", "پێنج"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'I have ___ apples' (3)",
                    sentenceParts: ["___", "سێوم", "هەیە"],
                    correctOption: "سێ",
                    options: ["سێ", "دوو", "چوار", "پێنج"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "What is 'Ten'?",
                    options: [
                        { id: "opt1", text: "دە", correct: true },
                        { id: "opt2", text: "نۆ", correct: false },
                        { id: "opt3", text: "یازدە", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "پێنج", english: "Five" },
                        { kurdish: "شەش", english: "Six" },
                        { kurdish: "حەوت", english: "Seven" },
                        { kurdish: "هەشت", english: "Eight" }
                    ]
                },
                {
                    id: 7,
                    type: "sentence-builder",
                    question: "Count: 'Eight, Nine, Ten'",
                    sourceText: "Eight, Nine, Ten",
                    correctSentence: ["هەشت", "،", "نۆ", "،", "دە"],
                    options: ["هەشت", "نۆ", "دە", "،", "حەوت", "یازدە"]
                },
                {
                    id: 8,
                    type: "fill-blank",
                    question: "Complete: '___ students' (15)",
                    sentenceParts: ["___", "قوتابی"],
                    correctOption: "پازدە",
                    options: ["پازدە", "دە", "بیست", "یازدە"]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "What is 'Twenty'?",
                    options: [
                        { id: "opt1", text: "بیست", correct: true },
                        { id: "opt2", text: "دە", correct: false },
                        { id: "opt3", text: "سی", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "نۆ", english: "Nine" },
                        { kurdish: "دە", english: "Ten" },
                        { kurdish: "یازدە", english: "Eleven" },
                        { kurdish: "دوازدە", english: "Twelve" }
                    ]
                }
            ]
        },
        {
            id: "l5",
            title: "Colors & Descriptions",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "What is 'Red'?",
                    options: [
                        { id: "opt1", text: "سوور", image: "🔴", correct: true },
                        { id: "opt2", text: "شین", image: "🔵", correct: false },
                        { id: "opt3", text: "سەوز", image: "🟢", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "سوور", english: "Red" },
                        { kurdish: "شین", english: "Blue" },
                        { kurdish: "سەوز", english: "Green" },
                        { kurdish: "زەرد", english: "Yellow" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "Translate: 'The apple is red'",
                    sourceText: "The apple is red",
                    correctSentence: ["سێوەکە", "سوورە"],
                    options: ["سێوەکە", "سوورە", "شینە", "سەوزە"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'The sky is ___' (blue)",
                    sentenceParts: ["ئاسمان", "___"],
                    correctOption: "شینە",
                    options: ["شینە", "سوورە", "سەوزە", "زەردە"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "What is 'Black'?",
                    options: [
                        { id: "opt1", text: "ڕەش", image: "⚫", correct: true },
                        { id: "opt2", text: "سپی", image: "⚪", correct: false },
                        { id: "opt3", text: "سوور", image: "🔴", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "ڕەش", english: "Black" },
                        { kurdish: "سپی", english: "White" },
                        { kurdish: "قاوەیی", english: "Brown" },
                        { kurdish: "پەمەیی", english: "Orange" }
                    ]
                },
                {
                    id: 7,
                    type: "sentence-builder",
                    question: "Translate: 'I like blue'",
                    sourceText: "I like blue",
                    correctSentence: ["من", "شینم", "خۆشدەوێت"],
                    options: ["من", "شینم", "خۆشدەوێت", "سوورم", "ناخۆشەوێت"]
                },
                {
                    id: 8,
                    type: "fill-blank",
                    question: "Complete: 'The grass is ___' (green)",
                    sentenceParts: ["گیاکە", "___"],
                    correctOption: "سەوزە",
                    options: ["سەوزە", "زەردە", "شینە", "سوورە"]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "What is 'Big'?",
                    options: [
                        { id: "opt1", text: "گەورە", correct: true },
                        { id: "opt2", text: "بچووک", correct: false },
                        { id: "opt3", text: "مامناوەند", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "match-pairs",
                    pairs: [
                        { kurdish: "گەورە", english: "Big" },
                        { kurdish: "بچووک", english: "Small" },
                        { kurdish: "درێژ", english: "Long" },
                        { kurdish: "کورت", english: "Short" }
                    ]
                }
            ]
        }
    ]
};
