// Unit 2: Intermediate Kurdish - Conversations & Daily Life
export const unit2 = {
    id: 'unit-2',
    title: 'Conversations & Daily Life',
    description: 'Master everyday conversations, family, shopping, and directions',
    guidebook: {
        introduction: "لەم بەشەدا فێردەبیت چۆن باسی کات بکەیت، لەگەڵ خێزانەکەت قسە بکەیت، لە بازاڕ کڕین و فرۆشتن بکەیت، و ڕێنمایی بۆ شوێنەکان وەربگریت.",
        sections: [
            {
                id: "grammar",
                title: "📚 ڕێزمانی بەسوود",
                content: "یاساکانی پرسیارکردن و خاوەندارێتی:",
                subsections: [
                    {
                        subtitle: "پرسیارکردن (Wh- Questions)",
                        text: "وشە سەرەکییەکانی پرسیارکردن:",
                        list: [
                            "Where (لە کوێ) - بۆ شوێن: Where is the market?",
                            "When (کەی) - بۆ کات: When do you wake up?",
                            "Who (کێ) - بۆ کەس: Who is your brother?",
                            "How much (چەند) - بۆ نرخ: How much is this shirt?"
                        ]
                    },
                    {
                        subtitle: "خاوەندارێتی (Possessives)",
                        text: "چۆن بڵێیت شتێک هی منە یان هی تۆیە:",
                        visual: {
                            type: "pronoun-grid",
                            data: [
                                { english: "My", kurdish: "هی من", icon: "🙋‍♂️" },
                                { english: "Your", kurdish: "هی تۆ", icon: "🫵" },
                                { english: "His", kurdish: "هی ئەو (نێر)", icon: "👨" },
                                { english: "Her", kurdish: "هی ئەو (مێ)", icon: "👩" }
                            ]
                        }
                    }
                ]
            },
            {
                id: "vocabulary",
                title: "🗣️ وشە و دەستەواژەی نوێ",
                content: "وشەکانی پەیوەست بە ژیانی ڕۆژانە:",
                subsections: [
                    {
                        subtitle: "کات و ڕۆژەکان (Time & Days)",
                        visual: {
                            type: "timeline",
                            data: [
                                { label: "Morning", sub: "بەیانی" },
                                { label: "Noon", sub: "نیوەڕۆ" },
                                { label: "Evening", sub: "ئێوارە" },
                                { label: "Night", sub: "شەو" }
                            ]
                        }
                    },
                    {
                        subtitle: "خێزان (Family)",
                        visual: {
                            type: "comparison",
                            data: [
                                { english: "Father", kurdish: "باوک", icon: "👨" },
                                { english: "Mother", kurdish: "دایک", icon: "👩" },
                                { english: "Brother", kurdish: "برا", icon: "👦" },
                                { english: "Sister", kurdish: "خوشک", icon: "👧" }
                            ]
                        }
                    },
                    {
                        subtitle: "ئاڕاستەکان (Directions)",
                        list: [
                            "Left (چەپ)",
                            "Right (ڕاست)",
                            "Straight (ڕاستەوخۆ/ڕێک)",
                            "Stop (بوەستە)"
                        ]
                    }
                ]
            },
            {
                id: "dialogue",
                title: "💬 گفتوگۆی بازاڕ",
                content: "نموونەی کڕین و فرۆشتن:",
                visual: {
                    type: "dialogue",
                    data: [
                        { speaker: "A", avatar: "👨", english: "Excuse me, how much is this?", kurdish: "ببورە، ئەمە بە چەندە؟" },
                        { speaker: "B", avatar: "👩‍💼", english: "It is ten dollars.", kurdish: "ئەوە دە دۆلارە." },
                        { speaker: "A", avatar: "👨", english: "That is expensive!", kurdish: "ئەوە گرانە!" },
                        { speaker: "B", avatar: "👩‍💼", english: "It is good quality.", kurdish: "کوالێتی باشە." }
                    ]
                }
            },
            {
                id: "weather",
                title: "🌤️ کەش و هەوا (Weather)",
                content: "وشەکانی کەش و هەوا:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Sunny", kurdish: "خۆرەتاو", icon: "☀️" },
                        { english: "Rainy", kurdish: "بارانی", icon: "🌧️" },
                        { english: "Hot", kurdish: "گەرم", icon: "🔥" },
                        { english: "Cold", kurdish: "سارد", icon: "❄️" }
                    ]
                }
            }
        ],
        keyPhrases: [
            { english: "What time is it?", kurdish: "کاتژمێر چەندە؟", pronunciation: "وات تایم ئیز ئیت؟" },
            { english: "I have two sisters", kurdish: "دوو خوشکم هەیە", pronunciation: "ئای هاڤ تو سیستەرز" },
            { english: "Turn left", kurdish: "بچۆ بۆ چەپ", pronunciation: "تێرن لێفت" },
            { english: "It is sunny today", kurdish: "ئەمڕۆ خۆرەتاوە", pronunciation: "ئیت ئیز سەنی تودەی" },
            { english: "Can I help you?", kurdish: "دەتوانم یارمەتیت بدەم؟", pronunciation: "کان ئای هێڵپ یو؟" }
        ]
    },
    lessons: [
        {
            id: 'unit2-lesson1',
            title: 'Time & Days',
            icon: '🕐',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Monday" in Kurdish?',
                    options: [
                        { text: 'دووشەممە', image: '📅', correct: true },
                        { text: 'سێشەممە', image: '📅', correct: false },
                        { text: 'چوارشەممە', image: '📅', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'بەیانی', english: 'Morning' },
                        { kurdish: 'نیوەڕۆ', english: 'Noon' },
                        { kurdish: 'ئێوارە', english: 'Evening' },
                        { kurdish: 'شەو', english: 'Night' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Good Morning"',
                    sourceText: 'Good Morning',
                    correctSentence: ['بەیانی', 'باش'],
                    options: ['بەیانی', 'باش', 'شەو', 'خۆش']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Friday" in Kurdish?',
                    options: [
                        { text: 'هەینی', image: '📅', correct: true },
                        { text: 'شەممە', image: '📅', correct: false },
                        { text: 'یەکشەممە', image: '📅', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "What ___ is it?"',
                    sentenceParts: ['What', '___', 'is', 'it', '?'],
                    correctOption: 'time',
                    options: ['time', 'day', 'week', 'month']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "Good Evening"',
                    correctAnswer: 'ئێوارە باش',
                    hints: ['ئێوارە', 'باش']
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'دووشەممە', english: 'Monday' },
                        { kurdish: 'سێشەممە', english: 'Tuesday' },
                        { kurdish: 'چوارشەممە', english: 'Wednesday' },
                        { kurdish: 'پێنجشەممە', english: 'Thursday' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "What time is it?"',
                    sourceText: 'What time is it?',
                    correctSentence: ['کاتژمێر', 'چەندە', '؟'],
                    options: ['کاتژمێر', 'چەندە', '؟', 'ڕۆژ', 'کەی']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Afternoon" in Kurdish?',
                    options: [
                        { text: 'دوای نیوەڕۆ', image: '🌅', correct: true },
                        { text: 'بەیانی', image: '🌄', correct: false },
                        { text: 'شەو', image: '🌙', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Today is ___"',
                    sentenceParts: ['ئەمڕۆ', '___'],
                    correctOption: 'دووشەممەیە',
                    options: ['دووشەممەیە', 'باشە', 'گەرمە', 'ساردە']
                }
            ]
        },
        {
            id: 'unit2-lesson2',
            title: 'Family Members',
            icon: '👨‍👩‍👧‍👦',
            exercises: [
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'باوک', english: 'Father' },
                        { kurdish: 'دایک', english: 'Mother' },
                        { kurdish: 'برا', english: 'Brother' },
                        { kurdish: 'خوشک', english: 'Sister' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Father" in Kurdish?',
                    options: [
                        { text: 'باوک', image: '👨', correct: true },
                        { text: 'دایک', image: '👩', correct: false },
                        { text: 'برا', image: '👦', correct: false }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "My mother"',
                    sourceText: 'My mother',
                    correctSentence: ['دایکی', 'من'],
                    options: ['دایکی', 'من', 'باوکی', 'تۆ']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I have two ___"',
                    sentenceParts: ['دوو', '___', 'م', 'هەیە'],
                    correctOption: 'خوشک',
                    options: ['خوشک', 'برا', 'باوک', 'دایک']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "My family"',
                    correctAnswer: 'خێزانەکەم',
                    hints: ['خێزان']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Grandfather" in Kurdish?',
                    options: [
                        { text: 'باپیر', image: '👴', correct: true },
                        { text: 'باوک', image: '👨', correct: false },
                        { text: 'برا', image: '👦', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'باپیر', english: 'Grandfather' },
                        { kurdish: 'داپیر', english: 'Grandmother' },
                        { kurdish: 'مام', english: 'Uncle' },
                        { kurdish: 'پور', english: 'Son' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "His sister"',
                    sourceText: 'His sister',
                    correctSentence: ['خوشکی', 'ئەو'],
                    options: ['خوشکی', 'ئەو', 'براکەی', 'من']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "This is my ___"',
                    sentenceParts: ['ئەمە', '___', 'ی', 'منە'],
                    correctOption: 'برا',
                    options: ['برا', 'خوشک', 'هاوڕێ', 'مامۆستا']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Daughter" in Kurdish?',
                    options: [
                        { text: 'کچ', image: '👧', correct: true },
                        { text: 'کوڕ', image: '👦', correct: false },
                        { text: 'خوشک', image: '👩', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson3',
            title: 'Shopping & Market',
            icon: '🛒',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Expensive" in Kurdish?',
                    options: [
                        { text: 'گران', image: '💰', correct: true },
                        { text: 'هەرزان', image: '💵', correct: false },
                        { text: 'باش', image: '👍', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'گران', english: 'Expensive' },
                        { kurdish: 'هەرزان', english: 'Cheap' },
                        { kurdish: 'پارە', english: 'Money' },
                        { kurdish: 'نرخ', english: 'Price' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "How much is this?"',
                    sourceText: 'How much is this?',
                    correctSentence: ['ئەمە', 'بە', 'چەندە', '؟'],
                    options: ['ئەمە', 'بە', 'چەندە', '؟', 'کوێیە', 'کەی']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "This is ___" (expensive)',
                    sentenceParts: ['ئەمە', '___'],
                    correctOption: 'گرانە',
                    options: ['گرانە', 'هەرزانە', 'باشە', 'خراپە']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "I want to buy"',
                    correctAnswer: 'دەمەوێت بکڕم',
                    hints: ['دەمەوێت', 'بکڕم']
                },
                {
                    type: 'conversation',
                    question: 'Complete the shopping dialogue',
                    dialogue: [
                        { speaker: 'Seller', text: 'سڵاو! چیت دەوێت؟' },
                        { speaker: 'You', text: '___', options: ['من کراسێکم دەوێت', 'باشم', 'سپاس'] },
                        { speaker: 'Seller', text: 'ئەمە بە چەندە؟' },
                        { speaker: 'You', text: '___', options: ['بە دە دۆلارە', 'نازانم', 'خوا حافیز'] }
                    ],
                    correctOptions: ['من کراسێکم دەوێت', 'بە دە دۆلارە']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Market" in Kurdish?',
                    options: [
                        { text: 'بازاڕ', image: '🏪', correct: true },
                        { text: 'ماڵ', image: '🏠', correct: false },
                        { text: 'قوتابخانە', image: '🏫', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'بازاڕ', english: 'Market' },
                        { kurdish: 'دووکان', english: 'Shop' },
                        { kurdish: 'کڕین', english: 'Buying' },
                        { kurdish: 'فرۆشتن', english: 'Selling' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I need ___"',
                    sentenceParts: ['پێویستیم', 'بە', '___', 'هەیە'],
                    correctOption: 'پارە',
                    options: ['پارە', 'ئاو', 'نان', 'چای']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Can I help you?"',
                    sourceText: 'Can I help you?',
                    correctSentence: ['دەتوانم', 'یارمەتیت', 'بدەم', '؟'],
                    options: ['دەتوانم', 'یارمەتیت', 'بدەم', '؟', 'بکەم', 'بڵێم']
                }
            ]
        },
        {
            id: 'unit2-lesson4',
            title: 'Directions',
            icon: '🧭',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Left" in Kurdish?',
                    options: [
                        { text: 'چەپ', image: '⬅️', correct: true },
                        { text: 'ڕاست', image: '➡️', correct: false },
                        { text: 'ڕێک', image: '⬆️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'چەپ', english: 'Left' },
                        { kurdish: 'ڕاست', english: 'Right' },
                        { kurdish: 'ڕێک', english: 'Straight' },
                        { kurdish: 'بوەستە', english: 'Stop' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Turn left"',
                    sourceText: 'Turn left',
                    correctSentence: ['بچۆ', 'بۆ', 'چەپ'],
                    options: ['بچۆ', 'بۆ', 'چەپ', 'ڕاست', 'ڕێک']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Go ___" (straight)',
                    sentenceParts: ['بڕۆ', '___'],
                    correctOption: 'ڕێک',
                    options: ['ڕێک', 'چەپ', 'ڕاست', 'دواوە']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "Where is the school?"',
                    correctAnswer: 'قوتابخانە لە کوێیە',
                    hints: ['قوتابخانە', 'کوێیە']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Near" in Kurdish?',
                    options: [
                        { text: 'نزیک', image: '📍', correct: true },
                        { text: 'دوور', image: '🗺️', correct: false },
                        { text: 'ناوەڕاست', image: '🎯', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'نزیک', english: 'Near' },
                        { kurdish: 'دوور', english: 'Far' },
                        { kurdish: 'پێش', english: 'Front' },
                        { kurdish: 'دوا', english: 'Back' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Where is the market?"',
                    sourceText: 'Where is the market?',
                    correctSentence: ['بازاڕ', 'لە', 'کوێیە', '؟'],
                    options: ['بازاڕ', 'لە', 'کوێیە', '؟', 'کەی', 'چۆن']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "It is ___" (near)',
                    sentenceParts: ['ئەوە', '___', 'یە'],
                    correctOption: 'نزیک',
                    options: ['نزیک', 'دوور', 'گەورە', 'بچووک']
                },
                {
                    type: 'conversation',
                    question: 'Complete the directions dialogue',
                    dialogue: [
                        { speaker: 'Tourist', text: 'ببورە، بازاڕ لە کوێیە؟' },
                        { speaker: 'You', text: '___', options: ['بڕۆ ڕێک', 'نازانم', 'خوا حافیز'] },
                        { speaker: 'Tourist', text: 'دوورە؟' },
                        { speaker: 'You', text: '___', options: ['نەخێر، نزیکە', 'بەڵێ', 'سپاس'] }
                    ],
                    correctOptions: ['بڕۆ ڕێک', 'نەخێر، نزیکە']
                }
            ]
        },
        {
            id: 'unit2-lesson5',
            title: 'Weather',
            icon: '🌤️',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Sunny" in Kurdish?',
                    options: [
                        { text: 'خۆرەتاو', image: '☀️', correct: true },
                        { text: 'بارانی', image: '🌧️', correct: false },
                        { text: 'هەوری', image: '☁️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'خۆرەتاو', english: 'Sunny' },
                        { kurdish: 'بارانی', english: 'Rainy' },
                        { kurdish: 'گەرم', english: 'Hot' },
                        { kurdish: 'سارد', english: 'Cold' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "It is sunny today"',
                    sourceText: 'It is sunny today',
                    correctSentence: ['ئەمڕۆ', 'خۆرەتاوە'],
                    options: ['ئەمڕۆ', 'خۆرەتاوە', 'بارانیە', 'ساردە']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Today is ___" (hot)',
                    sentenceParts: ['ئەمڕۆ', '___'],
                    correctOption: 'گەرمە',
                    options: ['گەرمە', 'ساردە', 'باشە', 'خراپە']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "How is the weather?"',
                    correctAnswer: 'کەش و هەوا چۆنە',
                    hints: ['کەش', 'هەوا']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Snow" in Kurdish?',
                    options: [
                        { text: 'بەفر', image: '❄️', correct: true },
                        { text: 'باران', image: '🌧️', correct: false },
                        { text: 'هەور', image: '☁️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs',
                    pairs: [
                        { kurdish: 'بەفر', english: 'Snow' },
                        { kurdish: 'باران', english: 'Rain' },
                        { kurdish: 'هەور', english: 'Cloud' },
                        { kurdish: 'با', english: 'Wind' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "It is raining"',
                    sourceText: 'It is raining',
                    correctSentence: ['باران', 'دەبارێت'],
                    options: ['باران', 'دەبارێت', 'بەفر', 'دەکات']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Tomorrow will be ___" (cold)',
                    sentenceParts: ['سبەی', '___', 'دەبێت'],
                    correctOption: 'سارد',
                    options: ['سارد', 'گەرم', 'خۆرەتاو', 'بارانی']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Cloudy" in Kurdish?',
                    options: [
                        { text: 'هەوری', image: '☁️', correct: true },
                        { text: 'خۆرەتاو', image: '☀️', correct: false },
                        { text: 'بارانی', image: '🌧️', correct: false }
                    ]
                }
            ]
        }
    ]
};
