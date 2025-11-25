import { Unit } from '../../types';

export const unit4: Unit = {
    id: 'unit-4',
    title: 'Business, Health & Society',
    description: 'Master professional communication, health topics, and social interactions',
    guidebook: {
        introduction: "لەم بەشەدا فێری قسەکردنی پیشەیی، باسکردنی تەندروستی، و کارلێککردنی کۆمەڵایەتی دەبیت. ئەم توانایانە زۆر گرنگن بۆ ژیانی کاری و کۆمەڵایەتی.",
        sections: [
            {
                id: "grammar",
                title: "📚 ڕێزمانی پێشکەوتوو",
                content: "یاساکانی کاتی ئێستا و ڕابردوو:",
                subsections: [
                    {
                        subtitle: "کاتی ئێستای بەردەوام (Present Continuous)",
                        text: "بۆ کارێک کە ئێستا ڕوودەدات، 'am/is/are + -ing' بەکاردێنین:",
                        visual: {
                            type: "sentence-structure",
                            data: {
                                english: [
                                    { word: "I", label: "Subject", color: "#ef4444" },
                                    { word: "am", label: "Be", color: "#f59e0b" },
                                    { word: "working", label: "Verb+ing", color: "#3b82f6" }
                                ],
                                kurdish: [
                                    { word: "من", label: "بکەر", color: "#ef4444" },
                                    { word: "لە", label: "لە", color: "#f59e0b" },
                                    { word: "کارکردنمدا", label: "کردار", color: "#3b82f6" }
                                ]
                            }
                        }
                    },
                    {
                        subtitle: "کاتی ڕابردوو (Past Tense)",
                        text: "بۆ کارێک کە ڕابردوودا ڕوویداوە، زۆربەی کردارەکان '-ed' لە کۆتاییان زیاد دەکرێت:",
                        list: [
                            "I worked (من کارم کرد)",
                            "She visited (ئەو سەردانی کرد)",
                            "They talked (ئەوان قسەیان کرد)"
                        ]
                    }
                ]
            },
            {
                id: "business",
                title: "💼 وشەکانی بازرگانی",
                content: "وشە گرنگەکان بۆ شوێنی کار:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Contract", kurdish: "گرێبەست", icon: "📄" },
                        { english: "Email", kurdish: "ئیمەیل", icon: "📧" },
                        { english: "Presentation", kurdish: "پێشکەشکردن", icon: "📊" },
                        { english: "Deadline", kurdish: "کۆتا کات", icon: "⏰" },
                        { english: "Client", kurdish: "کڕیار", icon: "🤝" },
                        { english: "Project", kurdish: "پرۆژە", icon: "📁" }
                    ]
                }
            },
            {
                id: "health",
                title: "🏥 تەندروستی و نەخۆشخانە",
                content: "وشەکانی پزیشکی و تەندروستی:",
                visual: {
                    type: "comparison",
                    data: [
                        { english: "Headache", kurdish: "سەرێشە", icon: "🤕" },
                        { english: "Fever", kurdish: "تا", icon: "🌡️" },
                        { english: "Medicine", kurdish: "دەرمان", icon: "💊" },
                        { english: "Hospital", kurdish: "نەخۆشخانە", icon: "🏥" }
                    ]
                }
            },
            {
                id: "appointments",
                title: "📅 دانانی چاوپێکەوتن",
                content: "چۆن چاوپێکەوتن دابنێیت:",
                visual: {
                    type: "dialogue",
                    data: [
                        { speaker: "A", avatar: "👔", english: "Can we schedule a meeting?", kurdish: "دەتوانین کۆبوونەوەیەک دابنێین؟" },
                        { speaker: "B", avatar: "👩‍💼", english: "Yes, when are you available?", kurdish: "بەڵێ، کەی بەردەستیت؟" },
                        { speaker: "A", avatar: "👔", english: "How about Tuesday at 2 PM?", kurdish: "سێشەممە لە کاتژمێر ٢ی دوای نیوەڕۆ چۆنە؟" },
                        { speaker: "B", avatar: "👩‍💼", english: "Perfect! See you then.", kurdish: "تەواو! ئەو کاتە دەتبینم." }
                    ]
                }
            },
            {
                id: "social",
                title: "🎭 کارلێککردنی کۆمەڵایەتی",
                content: "دەستەواژەکانی کۆمەڵایەتی:",
                list: [
                    "Congratulations! (پیرۆزە!)",
                    "I'm sorry to hear that (بەداخەوەم)",
                    "Best wishes (خواستی باش)",
                    "Take care (ئاگاداری خۆت بە)",
                    "Keep in touch (پەیوەندی بکە)"
                ]
            },
            {
                id: "opinions",
                title: "💭 دەربڕینی بیرۆکە",
                content: "چۆن بیرۆکە و ڕای خۆت دەربڕیت:",
                visual: {
                    type: "conjugation",
                    data: [
                        { subject: "I think...", subKurdish: "من پێموایە...", verb: "ئای سینک" },
                        { subject: "I believe...", subKurdish: "من باوەڕم وایە...", verb: "ئای بیلیڤ" },
                        { subject: "In my opinion...", subKurdish: "لە ڕای مندا...", verb: "ئین مای ئۆپینیەن" },
                        { subject: "I agree", subKurdish: "من هاوڕام", verb: "ئای ئەگری" },
                        { subject: "I disagree", subKurdish: "من هاوڕا نیم", verb: "ئای دیسەگری" }
                    ]
                }
            },
            {
                id: "banking",
                title: "🏦 بانک و دارایی",
                content: "وشەکانی بانک:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Account", kurdish: "هەژمار", icon: "💳" },
                        { english: "ATM", kurdish: "ئەی تی ئێم", icon: "🏧" },
                        { english: "Transfer", kurdish: "گواستنەوە", icon: "💸" },
                        { english: "Balance", kurdish: "مانەوە", icon: "💰" }
                    ]
                }
            }
        ],
        keyPhrases: [
            { english: "I have a meeting at 3 PM", kurdish: "کۆبوونەوەیەکم هەیە لە کاتژمێر ٣ی دوای نیوەڕۆ", pronunciation: "ئای هاڤ ئە میتینگ ئات سری پی ئێم" },
            { english: "I'm not feeling well", kurdish: "هەستم باش نییە", pronunciation: "ئایم نۆت فیلینگ وێڵ" },
            { english: "Can I make an appointment?", kurdish: "دەتوانم چاوپێکەوتنێک دابنێم؟", pronunciation: "کان ئای مەیک ئەن ئەپۆینتمەنت؟" },
            { english: "What do you think?", kurdish: "تۆ چیت پێوایە؟", pronunciation: "وات دو یو سینک؟" },
            { english: "I'd like to open an account", kurdish: "دەمەوێت هەژمارێک بکەمەوە", pronunciation: "ئایدلایک تو ئۆپن ئەن ئەکاونت" },
            { english: "Congratulations!", kurdish: "پیرۆزە!", pronunciation: "کۆنگراچولەیشنز!" }
        ]
    },
    lessons: [
        {
            id: 'unit4-lesson1',
            title: 'Business & Office',
            icon: '💼',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Meeting" in Kurdish?',
                    options: [
                        { text: 'کۆبوونەوە', image: '🤝', correct: true },
                        { text: 'نووسینگە', image: '🏢', correct: false },
                        { text: 'پرۆژە', image: '📁', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'کۆبوونەوە', english: 'Meeting' },
                        { kurdish: 'ئیمەیل', english: 'Email' },
                        { kurdish: 'گرێبەست', english: 'Contract' },
                        { kurdish: 'پرۆژە', english: 'Project' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I have a meeting"',
                    sourceText: 'I have a meeting',
                    correctSentence: ['کۆبوونەوەیەکم', 'هەیە'],
                    options: ['کۆبوونەوەیەکم', 'هەیە', 'نییە', 'دەوێت']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Send me an ___"',
                    sentenceParts: ['___', 'بۆ', 'بنێرە'],
                    correctOption: 'ئیمەیل',
                    options: ['ئیمەیل', 'نامە', 'پەیام', 'تەلەفۆن']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "Deadline"',
                    correctAnswer: 'کۆتا کات',
                    hints: ['کۆتا', 'کات']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Client" in Kurdish?',
                    options: [
                        { text: 'کڕیار', image: '🤝', correct: true },
                        { text: 'کارمەند', image: '👔', correct: false },
                        { text: 'بەڕێوبەر', image: '👨‍💼', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'Complete the business dialogue',
                    dialogue: [
                        { speaker: 'Boss', text: 'کەی پرۆژەکە تەواو دەبێت؟' },
                        { speaker: 'You', text: '___', options: ['هەفتەی داهاتوو', 'نازانم', 'باشە'] },
                        { speaker: 'Boss', text: 'زۆر باشە، سپاس.' },
                        { speaker: 'You', text: '___', options: ['بەڕێزەوە', 'خوا حافیز', 'نەخێر'] }
                    ],
                    correctOptions: ['هەفتەی داهاتوو', 'بەڕێزەوە']
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بەڕێوبەر', english: 'Manager' },
                        { kurdish: 'کارمەند', english: 'Employee' },
                        { kurdish: 'هاوکار', english: 'Colleague' },
                        { kurdish: 'سەرۆک', english: 'Boss' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "The ___ is tomorrow"',
                    sentenceParts: ['___', 'سبەیە'],
                    correctOption: 'کۆتا کات',
                    options: ['کۆتا کات', 'کۆبوونەوە', 'پرۆژە', 'ئیمەیل']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Can we schedule a meeting?"',
                    sourceText: 'Can we schedule a meeting?',
                    correctSentence: ['دەتوانین', 'کۆبوونەوەیەک', 'دابنێین', '؟'],
                    options: ['دەتوانین', 'کۆبوونەوەیەک', 'دابنێین', '؟', 'بکەین', 'بڵێین']
                }
            ]
        },
        {
            id: 'unit4-lesson2',
            title: 'Health & Medical',
            icon: '🏥',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Doctor" in Kurdish?',
                    options: [
                        { text: 'پزیشک', image: '👨‍⚕️', correct: true },
                        { text: 'نەخۆشخانە', image: '🏥', correct: false },
                        { text: 'دەرمان', image: '💊', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'پزیشک', english: 'Doctor' },
                        { kurdish: 'نەخۆشخانە', english: 'Hospital' },
                        { kurdish: 'دەرمان', english: 'Medicine' },
                        { kurdish: 'نەخۆش', english: 'Sick' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I am sick"',
                    sourceText: 'I am sick',
                    correctSentence: ['من', 'نەخۆشم'],
                    options: ['من', 'نەخۆشم', 'باشم', 'تەندروستم']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I have a ___" (headache)',
                    sentenceParts: ['___', 'م', 'هەیە'],
                    correctOption: 'سەرێشە',
                    options: ['سەرێشە', 'تا', 'دەرد', 'نەخۆشی']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "I need medicine"',
                    correctAnswer: 'پێویستیم بە دەرمان هەیە',
                    hints: ['پێویستیم', 'دەرمان']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Fever" in Kurdish?',
                    options: [
                        { text: 'تا', image: '🌡️', correct: true },
                        { text: 'سەرێشە', image: '🤕', correct: false },
                        { text: 'دەرد', image: '😷', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'Complete the doctor visit',
                    dialogue: [
                        { speaker: 'Doctor', text: 'چیت هەیە؟' },
                        { speaker: 'You', text: '___', options: ['سەرێشەم هەیە', 'باشم', 'سپاس'] },
                        { speaker: 'Doctor', text: 'ئەم دەرمانە بنووسە.' },
                        { speaker: 'You', text: '___', options: ['سوپاس دکتۆر', 'نەخێر', 'خوا حافیز'] }
                    ],
                    correctOptions: ['سەرێشەم هەیە', 'سوپاس دکتۆر']
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'سەرێشە', english: 'Headache' },
                        { kurdish: 'دڵدرد', english: 'Stomachache' },
                        { kurdish: 'تا', english: 'Fever' },
                        { kurdish: 'کۆلێرە', english: 'Cough' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I need to see a ___"',
                    sentenceParts: ['پێویستە', '___', 'ببینم'],
                    correctOption: 'پزیشک',
                    options: ['پزیشک', 'دەرمان', 'نەخۆشخانە', 'کارمەند']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I\'m not feeling well"',
                    sourceText: 'I\'m not feeling well',
                    correctSentence: ['هەستم', 'باش', 'نییە'],
                    options: ['هەستم', 'باش', 'نییە', 'یە', 'خراپە']
                }
            ]
        },
        {
            id: 'unit4-lesson3',
            title: 'Appointments & Scheduling',
            icon: '📅',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Appointment" in Kurdish?',
                    options: [
                        { text: 'چاوپێکەوتن', image: '📅', correct: true },
                        { text: 'کۆبوونەوە', image: '🤝', correct: false },
                        { text: 'کات', image: '⏰', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'چاوپێکەوتن', english: 'Appointment' },
                        { kurdish: 'کاتژمێر', english: 'Time' },
                        { kurdish: 'ڕۆژ', english: 'Day' },
                        { kurdish: 'بەردەست', english: 'Available' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "Can I make an appointment?"',
                    sourceText: 'Can I make an appointment?',
                    correctSentence: ['دەتوانم', 'چاوپێکەوتنێک', 'دابنێم', '؟'],
                    options: ['دەتوانم', 'چاوپێکەوتنێک', 'دابنێم', '؟', 'بکەم', 'بڵێم']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "When are you ___?"',
                    sentenceParts: ['کەی', '___', 'یت', '؟'],
                    correctOption: 'بەردەست',
                    options: ['بەردەست', 'خەریک', 'نەخۆش', 'باش']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "Tomorrow at 2 PM"',
                    correctAnswer: 'سبەی لە کاتژمێر ٢',
                    hints: ['سبەی', 'کاتژمێر']
                },
                {
                    type: 'conversation',
                    question: 'Complete the appointment booking',
                    dialogue: [
                        { speaker: 'Receptionist', text: 'کەی دەتەوێت بێیت؟' },
                        { speaker: 'You', text: '___', options: ['سێشەممە باشە', 'نازانم', 'خوا حافیز'] },
                        { speaker: 'Receptionist', text: 'چ کاتژمێرێک؟' },
                        { speaker: 'You', text: '___', options: ['کاتژمێر ٣', 'ئێستا', 'دوێنێ'] }
                    ],
                    correctOptions: ['سێشەممە باشە', 'کاتژمێر ٣']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Cancel" in Kurdish?',
                    options: [
                        { text: 'هەڵوەشاندنەوە', image: '❌', correct: true },
                        { text: 'دانان', image: '✅', correct: false },
                        { text: 'گۆڕین', image: '🔄', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'دانان', english: 'Set/Book' },
                        { kurdish: 'هەڵوەشاندنەوە', english: 'Cancel' },
                        { kurdish: 'گۆڕین', english: 'Change' },
                        { kurdish: 'پشتڕاستکردنەوە', english: 'Confirm' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I need to ___ my appointment"',
                    sentenceParts: ['پێویستە', 'چاوپێکەوتنەکەم', '___', 'بکەمەوە'],
                    correctOption: 'هەڵوەشێنم',
                    options: ['هەڵوەشێنم', 'دابنێم', 'بگۆڕم', 'ببینم']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "See you then"',
                    sourceText: 'See you then',
                    correctSentence: ['ئەو', 'کاتە', 'دەتبینم'],
                    options: ['ئەو', 'کاتە', 'دەتبینم', 'ئێستا', 'دوێنێ']
                }
            ]
        },
        {
            id: 'unit4-lesson4',
            title: 'Opinions & Discussions',
            icon: '💭',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'How do you say "I think" in Kurdish?',
                    options: [
                        { text: 'من پێموایە', image: '💭', correct: true },
                        { text: 'من دەزانم', image: '🧠', correct: false },
                        { text: 'من دەڵێم', image: '🗣️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'من پێموایە', english: 'I think' },
                        { kurdish: 'من هاوڕام', english: 'I agree' },
                        { kurdish: 'من هاوڕا نیم', english: 'I disagree' },
                        { kurdish: 'لە ڕای مندا', english: 'In my opinion' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "What do you think?"',
                    sourceText: 'What do you think?',
                    correctSentence: ['تۆ', 'چیت', 'پێوایە', '؟'],
                    options: ['تۆ', 'چیت', 'پێوایە', '؟', 'دەزانیت', 'دەڵێیت']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I ___ with you"',
                    sentenceParts: ['من', 'لەگەڵ', 'تۆ', '___'],
                    correctOption: 'هاوڕام',
                    options: ['هاوڕام', 'هاوڕا نیم', 'دەڵێم', 'دەزانم']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "In my opinion"',
                    correctAnswer: 'لە ڕای مندا',
                    hints: ['ڕای', 'مندا']
                },
                {
                    type: 'conversation',
                    question: 'Complete the discussion',
                    dialogue: [
                        { speaker: 'Friend', text: 'تۆ چیت پێوایە دەربارەی ئەم بیرۆکەیە؟' },
                        { speaker: 'You', text: '___', options: ['من پێموایە باشە', 'نازانم', 'خوا حافیز'] },
                        { speaker: 'Friend', text: 'منیش هاوڕام.' },
                        { speaker: 'You', text: '___', options: ['زۆر باشە', 'نەخێر', 'ببورە'] }
                    ],
                    correctOptions: ['من پێموایە باشە', 'زۆر باشە']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Believe" in Kurdish?',
                    options: [
                        { text: 'باوەڕ', image: '🙏', correct: true },
                        { text: 'بیر', image: '💭', correct: false },
                        { text: 'زانین', image: '🧠', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'باوەڕ', english: 'Believe' },
                        { kurdish: 'بیرۆکە', english: 'Idea' },
                        { kurdish: 'ڕا', english: 'Opinion' },
                        { kurdish: 'گفتوگۆ', english: 'Discussion' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "That\'s a good ___"',
                    sentenceParts: ['ئەوە', '___', 'ێکی', 'باشە'],
                    correctOption: 'بیرۆکە',
                    options: ['بیرۆکە', 'ڕا', 'وشە', 'کار']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I believe you"',
                    sourceText: 'I believe you',
                    correctSentence: ['من', 'باوەڕت', 'پێدەکەم'],
                    options: ['من', 'باوەڕت', 'پێدەکەم', 'دەزانم', 'دەبینم']
                }
            ]
        },
        {
            id: 'unit4-lesson5',
            title: 'Banking & Finance',
            icon: '🏦',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'What is "Bank" in Kurdish?',
                    options: [
                        { text: 'بانک', image: '🏦', correct: true },
                        { text: 'دووکان', image: '🏪', correct: false },
                        { text: 'نووسینگە', image: '🏢', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بانک', english: 'Bank' },
                        { kurdish: 'هەژمار', english: 'Account' },
                        { kurdish: 'پارە', english: 'Money' },
                        { kurdish: 'کارت', english: 'Card' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I want to open an account"',
                    sourceText: 'I want to open an account',
                    correctSentence: ['دەمەوێت', 'هەژمارێک', 'بکەمەوە'],
                    options: ['دەمەوێت', 'هەژمارێک', 'بکەمەوە', 'دابخەم', 'ببینم']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Where is the ___?"',
                    sentenceParts: ['___', 'لە', 'کوێیە', '؟'],
                    correctOption: 'بانک',
                    options: ['بانک', 'دووکان', 'ماڵ', 'قوتابخانە']
                },
                {
                    type: 'typing',
                    question: 'Type in Kurdish: "ATM"',
                    correctAnswer: 'ئەی تی ئێم',
                    hints: ['ئەی', 'تی', 'ئێم']
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "Transfer" in Kurdish?',
                    options: [
                        { text: 'گواستنەوە', image: '💸', correct: true },
                        { text: 'وەرگرتن', image: '💰', correct: false },
                        { text: 'دان', image: '💵', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'Complete the bank visit',
                    dialogue: [
                        { speaker: 'Teller', text: 'چۆنم یارمەتیتان بدەم؟' },
                        { speaker: 'You', text: '___', options: ['دەمەوێت پارە بکێشمەوە', 'باشم', 'خوا حافیز'] },
                        { speaker: 'Teller', text: 'چەند؟' },
                        { speaker: 'You', text: '___', options: ['سەد دۆلار', 'نازانم', 'سپاس'] }
                    ],
                    correctOptions: ['دەمەوێت پارە بکێشمەوە', 'سەد دۆلار']
                },
                {
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'گواستنەوە', english: 'Transfer' },
                        { kurdish: 'کێشانەوە', english: 'Withdraw' },
                        { kurdish: 'دانان', english: 'Deposit' },
                        { kurdish: 'مانەوە', english: 'Balance' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "What is my ___?"',
                    sentenceParts: ['___', 'ی', 'من', 'چەندە', '؟'],
                    correctOption: 'مانەوە',
                    options: ['مانەوە', 'هەژمار', 'کارت', 'ناو']
                },
                {
                    type: 'sentence-builder',
                    question: 'Translate: "I need my card"',
                    sourceText: 'I need my card',
                    correctSentence: ['پێویستیم', 'بە', 'کارتەکەم', 'هەیە'],
                    options: ['پێویستیم', 'بە', 'کارتەکەم', 'هەیە', 'نییە', 'دەوێت']
                }
            ]
        }
    ]
};
