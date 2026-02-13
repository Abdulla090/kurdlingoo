import { Unit } from '../../types';

export const unit2: Unit = {
    id: 'unit-2',
    title: 'دووەمین یەکە',
    description: 'گفتوگۆکان و ژیانی ڕۆژانە',
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
                    question: "'دووشەممە' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Monday', image: '📅', correct: true },
                        { text: 'Tuesday', image: '📅', correct: false },
                        { text: 'Wednesday', image: '📅', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بەیانی', english: 'Morning' },
                        { kurdish: 'نیوەڕۆ', english: 'Noon' },
                        { kurdish: 'ئێوارە', english: 'Evening' },
                        { kurdish: 'شەو', english: 'Night' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'بەیانی باش'",
                    sourceText: 'بەیانی باش',
                    correctSentence: ['Good', 'Morning'],
                    options: ['Good', 'Morning', 'Night', 'Evening', 'Hello']
                },
                {
                    type: 'multiple-choice',
                    question: "'هەینی' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Friday', image: '📅', correct: true },
                        { text: 'Saturday', image: '📅', correct: false },
                        { text: 'Sunday', image: '📅', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'What ___ is it?'",
                    sentenceParts: ['What', '___', 'is it?'],
                    correctOption: 'time',
                    options: ['time', 'day', 'week', 'month']
                },
                {
                    type: 'typing',
                    question: "بە ئینگلیزی بنووسە: 'ئێوارە باش'",
                    correctAnswer: 'Good Evening',
                    hints: ['Good', 'Evening']
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'دووشەممە', english: 'Monday' },
                        { kurdish: 'سێشەممە', english: 'Tuesday' },
                        { kurdish: 'چوارشەممە', english: 'Wednesday' },
                        { kurdish: 'پێنجشەممە', english: 'Thursday' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'کاتژمێر چەندە؟'",
                    sourceText: 'کاتژمێر چەندە؟',
                    correctSentence: ['What', 'time', 'is', 'it?'],
                    options: ['What', 'time', 'is', 'it?', 'day', 'where']
                },
                {
                    type: 'multiple-choice',
                    question: "'دوای نیوەڕۆ' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Afternoon', image: '🌅', correct: true },
                        { text: 'Morning', image: '🌄', correct: false },
                        { text: 'Night', image: '🌙', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'Today is ___' (دووشەممە)",
                    sentenceParts: ['Today is', '___'],
                    correctOption: 'Monday',
                    options: ['Monday', 'Good', 'Hot', 'Cold']
                }
            ]
        },
        {
            id: 'unit2-lesson2',
            title: 'Family Members',
            icon: '👨‍👩‍👧‍👦',
            exercises: [
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'باوک', english: 'Father' },
                        { kurdish: 'دایک', english: 'Mother' },
                        { kurdish: 'برا', english: 'Brother' },
                        { kurdish: 'خوشک', english: 'Sister' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    question: "'باوک' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Father', image: '👨', correct: true },
                        { text: 'Mother', image: '👩', correct: false },
                        { text: 'Brother', image: '👦', correct: false }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'دایکی من'",
                    sourceText: 'دایکی من',
                    correctSentence: ['My', 'mother'],
                    options: ['My', 'mother', 'father', 'Your', 'his']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I have two ___' (خوشک)",
                    sentenceParts: ['I have two', '___'],
                    correctOption: 'sisters',
                    options: ['sisters', 'brothers', 'fathers', 'mothers']
                },
                {
                    type: 'typing',
                    question: "بە ئینگلیزی بنووسە: 'خێزانەکەم'",
                    correctAnswer: 'My family',
                    hints: ['My', 'family']
                },
                {
                    type: 'multiple-choice',
                    question: "'باپیر' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Grandfather', image: '👴', correct: true },
                        { text: 'Father', image: '👨', correct: false },
                        { text: 'Brother', image: '👦', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'باپیر', english: 'Grandfather' },
                        { kurdish: 'داپیر', english: 'Grandmother' },
                        { kurdish: 'مام', english: 'Uncle' },
                        { kurdish: 'پور', english: 'Son' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'خوشکی ئەو'",
                    sourceText: 'خوشکی ئەو',
                    correctSentence: ['His', 'sister'],
                    options: ['His', 'sister', 'brother', 'My', 'Her']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'This is my ___' (برا)",
                    sentenceParts: ['This is my', '___'],
                    correctOption: 'brother',
                    options: ['brother', 'sister', 'friend', 'teacher']
                },
                {
                    type: 'multiple-choice',
                    question: "'کچ' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Daughter', image: '👧', correct: true },
                        { text: 'Son', image: '👦', correct: false },
                        { text: 'Sister', image: '👩', correct: false }
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
                    question: "'گران' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Expensive', image: '💰', correct: true },
                        { text: 'Cheap', image: '💵', correct: false },
                        { text: 'Good', image: '👍', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'گران', english: 'Expensive' },
                        { kurdish: 'هەرزان', english: 'Cheap' },
                        { kurdish: 'پارە', english: 'Money' },
                        { kurdish: 'نرخ', english: 'Price' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'ئەمە بە چەندە؟'",
                    sourceText: 'ئەمە بە چەندە؟',
                    correctSentence: ['How', 'much', 'is', 'this?'],
                    options: ['How', 'much', 'is', 'this?', 'where', 'when']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'This is ___' (گران)",
                    sentenceParts: ['This is', '___'],
                    correctOption: 'expensive',
                    options: ['expensive', 'cheap', 'good', 'bad']
                },
                {
                    type: 'typing',
                    question: "بە ئینگلیزی بنووسە: 'دەمەوێت بکڕم'",
                    correctAnswer: 'I want to buy',
                    hints: ['I', 'want', 'buy']
                },
                {
                    type: 'roleplay-chat',
                    question: 'You are at a market. Respond to the seller.',
                    scenario: '🛒 You are at a Kurdish bazaar looking for a shirt. The seller greets you. Reply naturally in Kurdish!',
                    chatMessages: [
                        { sender: 'ai', text: 'سڵاو! بەخێربێیت بۆ دووکانەکەم. چیت دەوێت؟', avatar: '👨‍💼', name: 'فرۆشیار' },
                        { sender: 'ai', text: 'confirm: زۆر باشە! بەڵێ کراسی جوانمان هەیە.', avatar: '👨‍💼', name: 'فرۆشیار' }
                    ],
                    acceptableResponses: [
                        'سڵاو من کراسێکم دەوێت',
                        'کراسێکم دەوێت',
                        'من دەمەوێت کراس بکڕم',
                        'دەمەوێت کراس بکڕم',
                        'سڵاو کراس دەوێم'
                    ],
                    keywordsRequired: ['کراس'],
                    hints: ['کراس', 'دەوێت', 'سڵاو']
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
                    question: "'بازاڕ' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Market', image: '🏪', correct: true },
                        { text: 'House', image: '🏠', correct: false },
                        { text: 'School', image: '🏫', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بازاڕ', english: 'Market' },
                        { kurdish: 'دووکان', english: 'Shop' },
                        { kurdish: 'کڕین', english: 'Buying' },
                        { kurdish: 'فرۆشتن', english: 'Selling' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I need ___' (پارە)",
                    sentenceParts: ['I need', '___'],
                    correctOption: 'money',
                    options: ['money', 'water', 'bread', 'tea']
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'دەتوانم یارمەتیت بدەم؟'",
                    sourceText: 'دەتوانم یارمەتیت بدەم؟',
                    correctSentence: ['Can', 'I', 'help', 'you?'],
                    options: ['Can', 'I', 'help', 'you?', 'want', 'buy']
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
                    question: "'چەپ' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Left', image: '⬅️', correct: true },
                        { text: 'Right', image: '➡️', correct: false },
                        { text: 'Straight', image: '⬆️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'چەپ', english: 'Left' },
                        { kurdish: 'ڕاست', english: 'Right' },
                        { kurdish: 'ڕێک', english: 'Straight' },
                        { kurdish: 'بوەستە', english: 'Stop' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'بچۆ بۆ چەپ'",
                    sourceText: 'بچۆ بۆ چەپ',
                    correctSentence: ['Turn', 'left'],
                    options: ['Turn', 'left', 'right', 'Go', 'straight']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'Go ___' (ڕێک)",
                    sentenceParts: ['Go', '___'],
                    correctOption: 'straight',
                    options: ['straight', 'left', 'right', 'back']
                },
                {
                    type: 'typing',
                    question: "بە ئینگلیزی بنووسە: 'قوتابخانە لە کوێیە؟'",
                    correctAnswer: 'Where is the school?',
                    hints: ['Where', 'school']
                },
                {
                    type: 'multiple-choice',
                    question: "'نزیک' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Near', image: '📍', correct: true },
                        { text: 'Far', image: '🗺️', correct: false },
                        { text: 'Middle', image: '🎯', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'نزیک', english: 'Near' },
                        { kurdish: 'دوور', english: 'Far' },
                        { kurdish: 'پێش', english: 'Front' },
                        { kurdish: 'دوا', english: 'Back' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'بازاڕ لە کوێیە؟'",
                    sourceText: 'بازاڕ لە کوێیە؟',
                    correctSentence: ['Where', 'is', 'the', 'market?'],
                    options: ['Where', 'is', 'the', 'market?', 'when', 'how']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'It is ___' (نزیک)",
                    sentenceParts: ['It is', '___'],
                    correctOption: 'near',
                    options: ['near', 'far', 'big', 'small']
                },
                {
                    type: 'roleplay-chat',
                    question: 'A tourist asks you for directions. Help them!',
                    scenario: '🗺️ You are on the street and a tourist asks you where the hospital is. Give them directions in Kurdish!',
                    chatMessages: [
                        { sender: 'ai', text: 'ببورە! من نەخۆشخانەم دەوێت. لە کوێیە؟', avatar: '🧑‍🦱', name: 'گەشتیار' },
                        { sender: 'ai', text: 'confirm: زۆر سوپاس! دەست خۆش بیت.', avatar: '🧑‍🦱', name: 'گەشتیار' }
                    ],
                    acceptableResponses: [
                        'بڕۆ ڕاستەوخۆ پاشان بچۆ بۆ چەپ',
                        'بڕۆ ڕێک و پاشان بچۆ چەپ',
                        'ڕاستەوخۆ بڕۆ و بچۆ بۆ چەپ',
                        'بڕۆ ڕێک پاشان چەپ',
                        'ڕێک بڕۆ و چەپ بچۆ'
                    ],
                    keywordsRequired: ['ڕێک', 'چەپ'],
                    hints: ['بڕۆ', 'ڕێک', 'چەپ', 'ڕاست']
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
                    question: "'خۆرەتاو' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Sunny', image: '☀️', correct: true },
                        { text: 'Rainy', image: '🌧️', correct: false },
                        { text: 'Cloudy', image: '☁️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'خۆرەتاو', english: 'Sunny' },
                        { kurdish: 'بارانی', english: 'Rainy' },
                        { kurdish: 'گەرم', english: 'Hot' },
                        { kurdish: 'سارد', english: 'Cold' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'ئەمڕۆ خۆرەتاوە'",
                    sourceText: 'ئەمڕۆ خۆرەتاوە',
                    correctSentence: ['It', 'is', 'sunny', 'today'],
                    options: ['It', 'is', 'sunny', 'today', 'rainy', 'cold']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'Today is ___' (گەرم)",
                    sentenceParts: ['Today is', '___'],
                    correctOption: 'hot',
                    options: ['hot', 'cold', 'good', 'bad']
                },
                {
                    type: 'typing',
                    question: "بە ئینگلیزی بنووسە: 'کەش و هەوا چۆنە؟'",
                    correctAnswer: 'How is the weather?',
                    hints: ['How', 'weather']
                },
                {
                    type: 'roleplay-chat',
                    question: 'Chat about the weather with a friend!',
                    scenario: '☀️ Your Kurdish friend is asking about the weather today. Tell them it is sunny and hot!',
                    chatMessages: [
                        { sender: 'ai', text: 'سڵاو هاوڕێ! کەش و هەوا ئەمڕۆ چۆنە؟', avatar: '👋', name: 'هاوڕێ' },
                        { sender: 'ai', text: 'confirm: ئاهان باشە! دەچمە دەرەوە!', avatar: '👋', name: 'هاوڕێ' }
                    ],
                    acceptableResponses: [
                        'ئەمڕۆ خۆرەتاوە و گەرمە',
                        'خۆرەتاوە و گەرمە',
                        'ئەمڕۆ زۆر گەرمە',
                        'کەشەکە خۆرەتاوە',
                        'هەوا گەرمە'
                    ],
                    keywordsRequired: ['گەرم', 'خۆرەتاو'],
                    hints: ['خۆرەتاو', 'گەرم', 'ئەمڕۆ']
                },
                {
                    type: 'multiple-choice',
                    question: "'بەفر' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Snow', image: '❄️', correct: true },
                        { text: 'Rain', image: '🌧️', correct: false },
                        { text: 'Cloud', image: '☁️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بەفر', english: 'Snow' },
                        { kurdish: 'باران', english: 'Rain' },
                        { kurdish: 'هەور', english: 'Cloud' },
                        { kurdish: 'با', english: 'Wind' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'باران دەبارێت'",
                    sourceText: 'باران دەبارێت',
                    correctSentence: ['It', 'is', 'raining'],
                    options: ['It', 'is', 'raining', 'snowing', 'sunny', 'cold']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'Tomorrow will be ___' (سارد)",
                    sentenceParts: ['Tomorrow will be', '___'],
                    correctOption: 'cold',
                    options: ['cold', 'hot', 'sunny', 'rainy']
                },
                {
                    type: 'multiple-choice',
                    question: "'هەوری' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Cloudy', image: '☁️', correct: true },
                        { text: 'Sunny', image: '☀️', correct: false },
                        { text: 'Rainy', image: '🌧️', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson6',
            title: 'Daily Routine',
            icon: '📅',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: "'لەخەو هەڵسان' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Wake up', image: '🌅', correct: true },
                        { text: 'Sleep', image: '😴', correct: false },
                        { text: 'Eat', image: '🍽️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'لەخەو هەڵسان', english: 'Wake up' },
                        { kurdish: 'دەموچاو شوشتن', english: 'Wash face' },
                        { kurdish: 'نانی بەیانی', english: 'Breakfast' },
                        { kurdish: 'کارکردن', english: 'Work' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'من زوو لەخەو هەڵدەستم'",
                    sourceText: 'من زوو لەخەو هەڵدەستم',
                    correctSentence: ['I', 'wake', 'up', 'early'],
                    options: ['I', 'wake', 'up', 'early', 'late', 'sleep']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I eat ___' (نانی بەیانی)",
                    sentenceParts: ['I eat', '___'],
                    correctOption: 'breakfast',
                    options: ['breakfast', 'dinner', 'lunch', 'nothing']
                },
                {
                    type: 'multiple-choice',
                    question: "'خۆشوشتن' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Shower', image: '🚿', correct: true },
                        { text: 'Wash hands', image: '🧼', correct: false },
                        { text: 'Eat', image: '🍽️', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson7',
            title: 'Clothes & Colors',
            icon: '👕',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: "'کراس' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Shirt', image: '👕', correct: true },
                        { text: 'Pants', image: '👖', correct: false },
                        { text: 'Shoes', image: '👞', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'کراس', english: 'Shirt' },
                        { kurdish: 'پانتۆڵ', english: 'Pants' },
                        { kurdish: 'پێڵاو', english: 'Shoes' },
                        { kurdish: 'عەزی', english: 'Dress' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'کراسی سوور'",
                    sourceText: 'کراسی سوور',
                    correctSentence: ['Red', 'shirt'],
                    options: ['Red', 'shirt', 'Blue', 'pants', 'shoes']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I wear ___' (پێڵاو)",
                    sentenceParts: ['I wear', '___'],
                    correctOption: 'shoes',
                    options: ['shoes', 'shirt', 'hat', 'gloves']
                },
                {
                    type: 'multiple-choice',
                    question: "'عەزی' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Dress', image: '👗', correct: true },
                        { text: 'Jacket', image: '🧥', correct: false },
                        { text: 'Socks', image: '🧦', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson8',
            title: 'At Home',
            icon: '🏠',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: "'ژوور' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Room', image: '🚪', correct: true },
                        { text: 'Kitchen', image: '🍳', correct: false },
                        { text: 'Garden', image: '🌳', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'ماڵ', english: 'House' },
                        { kurdish: 'ژوور', english: 'Room' },
                        { kurdish: 'مەتبەخ', english: 'Kitchen' },
                        { kurdish: 'دەرگا', english: 'Door' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'دەرگاکە بکەوە'",
                    sourceText: 'دەرگاکە بکەوە',
                    correctSentence: ['Open', 'the', 'door'],
                    options: ['Open', 'the', 'door', 'Close', 'window', 'room']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I am in the ___' (مەتبەخ)",
                    sentenceParts: ['I am in the', '___'],
                    correctOption: 'kitchen',
                    options: ['kitchen', 'roof', 'street', 'market']
                },
                {
                    type: 'multiple-choice',
                    question: "'پەنجەرە' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Window', image: '🪟', correct: true },
                        { text: 'Door', image: '🚪', correct: false },
                        { text: 'Wall', image: '🧱', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson9',
            title: 'Feelings',
            icon: '😊',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: "'دڵخۆش' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Happy', image: '😊', correct: true },
                        { text: 'Sad', image: '😢', correct: false },
                        { text: 'Angry', image: '😠', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'دڵخۆش', english: 'Happy' },
                        { kurdish: 'دڵتەنگ', english: 'Sad' },
                        { kurdish: 'ماندوو', english: 'Tired' },
                        { kurdish: 'برسی', english: 'Hungry' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'من ماندووم'",
                    sourceText: 'من ماندووم',
                    correctSentence: ['I', 'am', 'tired'],
                    options: ['I', 'am', 'tired', 'happy', 'sad', 'hungry']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'Are you ___?' (دڵتەنگ)",
                    sentenceParts: ['Are you', '___?'],
                    correctOption: 'sad',
                    options: ['sad', 'happy', 'hungry', 'thirsty']
                },
                {
                    type: 'multiple-choice',
                    question: "'تینوو' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Thirsty', image: '🥤', correct: true },
                        { text: 'Hungry', image: '🍽️', correct: false },
                        { text: 'Full', image: '😋', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit2-lesson10',
            title: 'Unit 2 Review',
            icon: '⭐',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: "'دووشەممە' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Monday', image: '📅', correct: true },
                        { text: 'Tuesday', image: '📅', correct: false },
                        { text: 'Friday', image: '📅', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'باوک', english: 'Father' },
                        { kurdish: 'دایک', english: 'Mother' },
                        { kurdish: 'بازاڕ', english: 'Market' },
                        { kurdish: 'خۆرەتاو', english: 'Sunny' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: "بە ئینگلیزی بنووسە: 'بازاڕ لە کوێیە؟'",
                    sourceText: 'بازاڕ لە کوێیە؟',
                    correctSentence: ['Where', 'is', 'the', 'market?'],
                    options: ['Where', 'is', 'the', 'market?', 'how', 'when']
                },
                {
                    type: 'fill-blank',
                    question: "Complete: 'I am ___' (دڵخۆش)",
                    sentenceParts: ['I am', '___'],
                    correctOption: 'happy',
                    options: ['happy', 'sad', 'tired', 'sick']
                },
                {
                    type: 'multiple-choice',
                    question: "'کراس' بە ئینگلیزی چییە؟",
                    options: [
                        { text: 'Shirt', image: '👕', correct: true },
                        { text: 'Pants', image: '👖', correct: false },
                        { text: 'Shoes', image: '👞', correct: false }
                    ]
                }
            ]
        }
    ]
};
