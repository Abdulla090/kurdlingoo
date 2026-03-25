import { Unit } from '../../types';

export const unit1: Unit = {
    id: "unit-1",
    title: "یەکەمین یەکە",
    description: "بنەڕەتییەکان، سڵاوکردن، و ژمارەکان",
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
            icon: "📚",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'ئاو' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Water", image: "💧", correct: true },
                        { id: "opt2", text: "Bread", image: "🍞", correct: false },
                        { id: "opt3", text: "Apple", image: "🍎", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'ئاو و نان'",
                    sourceText: "ئاو و نان",
                    correctSentence: ["Water", "and", "Bread"],
                    options: ["Water", "Bread", "and", "Apple", "Please"]
                },
                {
                    id: 3,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "ئاو", english: "Water" },
                        { kurdish: "نان", english: "Bread" },
                        { kurdish: "سێو", english: "Apple" },
                        { kurdish: "سڵاو", english: "Hello" },
                        { kurdish: "خوات لەگەڵ", english: "Goodbye" }
                    ]
                },
                {
                    id: 4,
                    type: "multiple-choice",
                    question: "'نان' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Water", image: "💧", correct: false },
                        { id: "opt2", text: "Bread", image: "🍞", correct: true },
                        { id: "opt3", text: "Milk", image: "🥛", correct: false }
                    ]
                },
                {
                    id: 5,
                    type: "fill-blank",
                    question: "Complete: 'I eat ___' (نان)",
                    sentenceParts: ["I", "eat", "___"],
                    correctOption: "Bread",
                    options: ["Bread", "Water", "Apple"]
                },
                {
                    id: 6,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من ئاو دەخۆمەوە'",
                    sourceText: "من ئاو دەخۆمەوە",
                    correctSentence: ["I", "drink", "Water"],
                    options: ["I", "drink", "Water", "eat", "Bread"]
                },
                {
                    id: 7,
                    type: "pronunciation",
                    question: "Say the English translation of this Kurdish word:",
                    targetWord: "سڵاو",
                    targetTranslation: "Hello",
                    pronunciation: "həˈloʊ",
                    expectedAnswer: "hello",
                    acceptedAnswers: ["hello", "hi", "hey"],
                    speechLang: "en-US",
                    image: "👋"
                },
                {
                    id: 8,
                    type: "fill-blank",
                    question: "Complete: '___, my name is Sara'",
                    sentenceParts: ["___", ", my name is Sara"],
                    correctOption: "Hello",
                    options: ["Hello", "Goodbye", "Please", "Sorry"]
                },
                {
                    id: 9,
                    type: "match-pairs", question: "Match the pairs",
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
                    question: "'سێو' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Apple", image: "🍎", correct: true },
                        { id: "opt2", text: "Banana", image: "🍌", correct: false },
                        { id: "opt3", text: "Grape", image: "🍇", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l2",
            title: "Basics 2",
            icon: "✏️",
            exercises: [
                {
                    id: 1,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من کوڕم'",
                    sourceText: "من کوڕم",
                    correctSentence: ["I", "am", "a", "boy"],
                    options: ["I", "am", "a", "boy", "girl", "man"]
                },
                {
                    id: 2,
                    type: "multiple-choice",
                    question: "'ژن' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Woman", image: "👩", correct: true },
                        { id: "opt2", text: "Man", image: "👨", correct: false },
                        { id: "opt3", text: "Girl", image: "👧", correct: false }
                    ]
                },
                {
                    id: 3,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "من", english: "I" },
                        { kurdish: "تۆ", english: "You" },
                        { kurdish: "ئەو", english: "He/She" },
                        { kurdish: "ئێمە", english: "We" }
                    ]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: '___ am a girl'",
                    sentenceParts: ["___", "am a girl"],
                    correctOption: "I",
                    options: ["I", "You", "He", "She"]
                },
                {
                    id: 5,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'تۆ پیاویت'",
                    sourceText: "تۆ پیاویت",
                    correctSentence: ["You", "are", "a", "man"],
                    options: ["You", "are", "a", "man", "woman", "I"]
                },
                {
                    id: 6,
                    type: "pronunciation",
                    question: "Say the English translation:",
                    targetWord: "شیر",
                    targetTranslation: "Milk",
                    pronunciation: "mɪlk",
                    expectedAnswer: "milk",
                    acceptedAnswers: ["milk"],
                    speechLang: "en-US",
                    image: "🥛"
                },
                {
                    id: 7,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من ئاو دەخۆمەوە'",
                    sourceText: "من ئاو دەخۆمەوە",
                    correctSentence: ["I", "drink", "water"],
                    options: ["I", "drink", "water", "eat", "milk", "bread"]
                },
                {
                    id: 8,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "دەخۆم", english: "I eat" },
                        { kurdish: "دەخۆمەوە", english: "I drink" },
                        { kurdish: "دەخەوم", english: "I sleep" }
                    ]
                },
                {
                    id: 9,
                    type: "fill-blank",
                    question: "Complete: 'I drink ___' (چا)",
                    sentenceParts: ["I", "drink", "___"],
                    correctOption: "tea",
                    options: ["tea", "milk", "water", "bread"]
                },
                {
                    id: 10,
                    type: "multiple-choice",
                    question: "'چا' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Tea", image: "☕", correct: true },
                        { id: "opt2", text: "Milk", image: "🥛", correct: false },
                        { id: "opt3", text: "Coffee", image: "☕", correct: false }
                    ]
                },
                {
                    id: 11,
                    type: "pronunciation",
                    question: "Speak the full sentence:",
                    targetWord: "من کوڕم",
                    targetTranslation: "I am a boy",
                    pronunciation: "aɪ æm ə bɔɪ",
                    expectedAnswer: "i am a boy",
                    acceptedAnswers: ["i am a boy", "i'm a boy"],
                    speechLang: "en-US",
                    image: "👦"
                }
            ]
        },
        {
            id: "l3",
            title: "Greetings & Introductions",
            icon: "👋",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'بەیانی باش' بە ئینگلیزی چۆن دەوترێت؟",
                    options: [
                        { id: "opt1", text: "Good morning", correct: true },
                        { id: "opt2", text: "Good evening", correct: false },
                        { id: "opt3", text: "Good night", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
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
                    question: "بە ئینگلیزی بنووسە: 'چۆنیت؟'",
                    sourceText: "چۆنیت؟",
                    correctSentence: ["How", "are", "you?"],
                    options: ["How", "are", "you?", "What", "is", "name"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'My ___ is Ahmed'",
                    sentenceParts: ["My", "___", "is Ahmed"],
                    correctOption: "name",
                    options: ["name", "house", "book", "friend"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'سوپاس' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Thank you", correct: true },
                        { id: "opt2", text: "Sorry", correct: false },
                        { id: "opt3", text: "Please", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'خۆشحاڵم بە ناسینت'",
                    sourceText: "خۆشحاڵم بە ناسینت",
                    correctSentence: ["Nice", "to", "meet", "you"],
                    options: ["Nice", "to", "meet", "you", "see", "Hello"]
                },
                {
                    id: 7,
                    type: "match-pairs", question: "Match the pairs",
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
                    question: "Complete: 'I am ___' (باشم)",
                    sentenceParts: ["I", "am", "___"],
                    correctOption: "fine",
                    options: ["fine", "sad", "hungry", "tired"]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "'تکایە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Please", correct: true },
                        { id: "opt2", text: "Thank you", correct: false },
                        { id: "opt3", text: "Sorry", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'ناوت چییە؟'",
                    sourceText: "ناوت چییە؟",
                    correctSentence: ["What", "is", "your", "name?"],
                    options: ["What", "is", "your", "name?", "How", "old"]
                }
            ]
        },
        {
            id: "l4",
            title: "Numbers 1-20",
            icon: "🔢",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'پێنج' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Five", correct: true },
                        { id: "opt2", text: "Four", correct: false },
                        { id: "opt3", text: "Six", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
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
                    question: "بژمێرە بە ئینگلیزی: 'یەک، دوو، سێ'",
                    sourceText: "یەک، دوو، سێ",
                    correctSentence: ["One,", "Two,", "Three"],
                    options: ["One,", "Two,", "Three", "Four", "Five"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'I have ___ apples' (٣)",
                    sentenceParts: ["I have", "___", "apples"],
                    correctOption: "three",
                    options: ["three", "two", "four", "five"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'دە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Ten", correct: true },
                        { id: "opt2", text: "Nine", correct: false },
                        { id: "opt3", text: "Eleven", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "پێنج", english: "Five" },
                        { kurdish: "شەش", english: "Six" },
                        { kurdish: "حەوت", english: "Seven" },
                        { kurdish: "هەشت", english: "Eight" }
                    ]
                },
                {
                    id: 7,
                    type: "fill-blank",
                    question: "Complete: 'Eight, ___, Ten'",
                    sentenceParts: ["Eight,", "___,", "Ten"],
                    correctOption: "Nine",
                    options: ["Nine", "Seven", "Eleven", "Six"]
                },
                {
                    id: 8,
                    type: "multiple-choice",
                    question: "'بیست' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Twenty", correct: true },
                        { id: "opt2", text: "Ten", correct: false },
                        { id: "opt3", text: "Thirty", correct: false }
                    ]
                },
                {
                    id: 9,
                    type: "fill-blank",
                    question: "'پازدە قوتابی هەن' — بە ئینگلیزی: 'There are ___ students'",
                    sentenceParts: ["There are", "___", "students"],
                    correctOption: "fifteen",
                    options: ["fifteen", "ten", "twenty", "eleven"]
                },
                {
                    id: 10,
                    type: "match-pairs", question: "Match the pairs",
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
            icon: "🎨",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'سوور' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Red", image: "🔴", correct: true },
                        { id: "opt2", text: "Blue", image: "🔵", correct: false },
                        { id: "opt3", text: "Green", image: "🟢", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
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
                    question: "بە ئینگلیزی بنووسە: 'سێوەکە سوورە'",
                    sourceText: "سێوەکە سوورە",
                    correctSentence: ["The", "apple", "is", "red"],
                    options: ["The", "apple", "is", "red", "blue", "green"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'The sky is ___' (شین)",
                    sentenceParts: ["The sky is", "___"],
                    correctOption: "blue",
                    options: ["blue", "red", "green", "yellow"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'ڕەش' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Black", image: "⚫", correct: true },
                        { id: "opt2", text: "White", image: "⚪", correct: false },
                        { id: "opt3", text: "Red", image: "🔴", correct: false }
                    ]
                },
                {
                    id: 6,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "ڕەش", english: "Black" },
                        { kurdish: "سپی", english: "White" },
                        { kurdish: "قاوەیی", english: "Brown" },
                        { kurdish: "نارنجی", english: "Orange" }
                    ]
                },
                {
                    id: 7,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من شینم خۆشدەوێت'",
                    sourceText: "من شینم خۆشدەوێت",
                    correctSentence: ["I", "like", "blue"],
                    options: ["I", "like", "blue", "red", "hate", "the"]
                },
                {
                    id: 8,
                    type: "fill-blank",
                    question: "Complete: 'The grass is ___' (سەوز)",
                    sentenceParts: ["The grass is", "___"],
                    correctOption: "green",
                    options: ["green", "yellow", "blue", "red"]
                },
                {
                    id: 9,
                    type: "multiple-choice",
                    question: "'گەورە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Big", correct: true },
                        { id: "opt2", text: "Small", correct: false },
                        { id: "opt3", text: "Medium", correct: false }
                    ]
                },
                {
                    id: 10,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "گەورە", english: "Big" },
                        { kurdish: "بچووک", english: "Small" },
                        { kurdish: "درێژ", english: "Long" },
                        { kurdish: "کورت", english: "Short" }
                    ]
                }
            ]
        },
        {
            id: "l6",
            title: "School Objects",
            icon: "🏫",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'پەرتووک' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Book", image: "📚", correct: true },
                        { id: "opt2", text: "Pen", image: "✏️", correct: false },
                        { id: "opt3", text: "Notebook", image: "📒", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "پەرتووک", english: "Book" },
                        { kurdish: "پێنووس", english: "Pen" },
                        { kurdish: "تێنووس", english: "Notebook" },
                        { kurdish: "جانتا", english: "Bag" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'ئەمە پەرتووکێکە'",
                    sourceText: "ئەمە پەرتووکێکە",
                    correctSentence: ["This", "is", "a", "book"],
                    options: ["This", "is", "a", "book", "pen", "not"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'I have a ___' (پێنووس)",
                    sentenceParts: ["I have a", "___"],
                    correctOption: "pen",
                    options: ["pen", "book", "water", "bread"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'قوتابخانە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "School", image: "🏫", correct: true },
                        { id: "opt2", text: "House", image: "🏠", correct: false },
                        { id: "opt3", text: "Shop", image: "🏪", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l7",
            title: "Animals",
            icon: "🐾",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'پشیلە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Cat", image: "🐱", correct: true },
                        { id: "opt2", text: "Dog", image: "🐶", correct: false },
                        { id: "opt3", text: "Bird", image: "🐦", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "پشیلە", english: "Cat" },
                        { kurdish: "سەگ", english: "Dog" },
                        { kurdish: "باڵندە", english: "Bird" },
                        { kurdish: "ماسی", english: "Fish" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'سەگەکە گەورەیە'",
                    sourceText: "سەگەکە گەورەیە",
                    correctSentence: ["The", "dog", "is", "big"],
                    options: ["The", "dog", "is", "big", "small", "cat"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'The ___ flies' (باڵندە)",
                    sentenceParts: ["The", "___", "flies"],
                    correctOption: "bird",
                    options: ["bird", "dog", "fish", "cat"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'ماسی' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Fish", image: "🐟", correct: true },
                        { id: "opt2", text: "Chicken", image: "🐔", correct: false },
                        { id: "opt3", text: "Cow", image: "🐮", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l8",
            title: "Food Basics",
            icon: "🍽️",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'برنج' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Rice", image: "🍚", correct: true },
                        { id: "opt2", text: "Meat", image: "🥩", correct: false },
                        { id: "opt3", text: "Bread", image: "🍞", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "برنج", english: "Rice" },
                        { kurdish: "گۆشت", english: "Meat" },
                        { kurdish: "مریشک", english: "Chicken" },
                        { kurdish: "زەڵاتە", english: "Salad" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من مریشک دەخۆم'",
                    sourceText: "من مریشک دەخۆم",
                    correctSentence: ["I", "eat", "chicken"],
                    options: ["I", "eat", "chicken", "drink", "rice", "meat"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: '___ is delicious' (گۆشت)",
                    sentenceParts: ["___", "is delicious"],
                    correctOption: "Meat",
                    options: ["Meat", "Water", "Egg", "Pen"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'هێلکە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Egg", image: "🥚", correct: true },
                        { id: "opt2", text: "Cheese", image: "🧀", correct: false },
                        { id: "opt3", text: "Milk", image: "🥛", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l9",
            title: "Common Verbs",
            icon: "🏃",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'ڕاکردن' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Run", image: "🏃", correct: true },
                        { id: "opt2", text: "Walk", image: "🚶", correct: false },
                        { id: "opt3", text: "Sit", image: "🪑", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "ڕاکردن", english: "Run" },
                        { kurdish: "پیاسەکردن", english: "Walk" },
                        { kurdish: "نوستن", english: "Sleep" },
                        { kurdish: "خوێندنەوە", english: "Read" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من دەڕۆم'",
                    sourceText: "من دەڕۆم",
                    correctSentence: ["I", "walk"],
                    options: ["I", "walk", "run", "sleep", "eat"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "'ئەو هەموو شەوێک دەخەوێت' — بە ئینگلیزی: 'He ___ every night'",
                    sentenceParts: ["He", "___", "every night"],
                    correctOption: "sleeps",
                    options: ["sleeps", "eats", "runs", "reads"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'خوێندنەوە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Read", image: "📖", correct: true },
                        { id: "opt2", text: "Write", image: "✍️", correct: false },
                        { id: "opt3", text: "Speak", image: "🗣️", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l10",
            title: "Unit 1 Review",
            icon: "📝",
            exercises: [
                {
                    id: 1,
                    type: "multiple-choice",
                    question: "'ئاو' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Water", image: "💧", correct: true },
                        { id: "opt2", text: "Bread", image: "🍞", correct: false },
                        { id: "opt3", text: "Milk", image: "🥛", correct: false }
                    ]
                },
                {
                    id: 2,
                    type: "match-pairs", question: "Match the pairs",
                    pairs: [
                        { kurdish: "سڵاو", english: "Hello" },
                        { kurdish: "سوپاس", english: "Thank you" },
                        { kurdish: "خوات لەگەڵ", english: "Goodbye" },
                        { kurdish: "تکایە", english: "Please" }
                    ]
                },
                {
                    id: 3,
                    type: "sentence-builder",
                    question: "بە ئینگلیزی بنووسە: 'من باشم'",
                    sourceText: "من باشم",
                    correctSentence: ["I", "am", "fine"],
                    options: ["I", "am", "fine", "sick", "tired", "happy"]
                },
                {
                    id: 4,
                    type: "fill-blank",
                    question: "Complete: 'One, Two, ___'",
                    sentenceParts: ["One, Two,", "___"],
                    correctOption: "Three",
                    options: ["Three", "Four", "Five", "Six"]
                },
                {
                    id: 5,
                    type: "multiple-choice",
                    question: "'سوور' بە ئینگلیزی چییە؟",
                    options: [
                        { id: "opt1", text: "Red", image: "🔴", correct: true },
                        { id: "opt2", text: "Blue", image: "🔵", correct: false },
                        { id: "opt3", text: "Green", image: "🟢", correct: false }
                    ]
                }
            ]
        },
        {
            id: "l11",
            title: "Pronunciation Practice",
            icon: "🎤",
            exercises: [
                {
                    id: 1,
                    type: "pronunciation",
                    question: "Say the English translation of this Kurdish word:",
                    targetWord: "سڵاو",
                    targetTranslation: "Hello",
                    pronunciation: "Slaw",
                    expectedAnswer: "hello",
                    acceptedAnswers: ["hello", "hi", "hey there", "hey"],
                    speechLang: "en-US",
                    image: "👋"
                },
                {
                    id: 2,
                    type: "pronunciation",
                    question: "Say the English translation:",
                    targetWord: "بەیانی باش",
                    targetTranslation: "Good morning",
                    pronunciation: "Bayani bash",
                    expectedAnswer: "good morning",
                    acceptedAnswers: ["good morning"],
                    speechLang: "en-US",
                    image: "🌅"
                },
                {
                    id: 3,
                    type: "pronunciation",
                    question: "How do you say this in English?",
                    targetWord: "ئێوارە باش",
                    targetTranslation: "Good evening",
                    pronunciation: "Ewara bash",
                    expectedAnswer: "good evening",
                    acceptedAnswers: ["good evening"],
                    speechLang: "en-US",
                    image: "🌆"
                },
                {
                    id: 4,
                    type: "pronunciation",
                    question: "Say the English translation:",
                    targetWord: "سوپاس",
                    targetTranslation: "Thank you",
                    pronunciation: "Supas",
                    expectedAnswer: "thank you",
                    acceptedAnswers: ["thank you", "thanks", "thank you very much"],
                    speechLang: "en-US",
                    image: "🙏"
                },
                {
                    id: 5,
                    type: "pronunciation",
                    question: "What color is this in English?",
                    targetWord: "سوور",
                    targetTranslation: "Red",
                    pronunciation: "Soor",
                    expectedAnswer: "red",
                    acceptedAnswers: ["red"],
                    speechLang: "en-US",
                    image: "🔴"
                },
                {
                    id: 6,
                    type: "pronunciation",
                    question: "Say the number in English:",
                    targetWord: "پێنج",
                    targetTranslation: "Five",
                    pronunciation: "Penj",
                    expectedAnswer: "five",
                    acceptedAnswers: ["five", "5"],
                    speechLang: "en-US",
                    image: "5️⃣"
                },
                {
                    id: 7,
                    type: "pronunciation",
                    question: "What animal is this? Say it in English:",
                    targetWord: "پشیلە",
                    targetTranslation: "Cat",
                    pronunciation: "Pshela",
                    expectedAnswer: "cat",
                    acceptedAnswers: ["cat", "a cat", "the cat", "kitty"],
                    speechLang: "en-US",
                    image: "🐱"
                },
                {
                    id: 8,
                    type: "pronunciation",
                    question: "Say this greeting in English:",
                    targetWord: "شەو باش",
                    targetTranslation: "Good night",
                    pronunciation: "Shaw bash",
                    expectedAnswer: "good night",
                    acceptedAnswers: ["good night", "goodnight"],
                    speechLang: "en-US",
                    image: "🌙"
                }
            ]
        }
    ]
};
