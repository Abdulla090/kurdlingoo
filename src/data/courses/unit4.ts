import { Unit } from '../../types';

export const unit4: Unit = {
    id: 'unit-4',
    title: 'چوارەمین یەکە',
    description: 'بازرگانی، تەندروستی و کۆمەڵگا',
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
                    "Best wishes (هیوای باشترین)",
                    "Take care (ئاگاداری خۆت بە)",
                    "Keep in touch (لە پەیوەندیدا بە)"
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
                        { english: "Balance", kurdish: "باڵانس", icon: "💰" }
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
            title: 'بازرگانی و نووسینگە (Business & Office)',
            icon: '💼',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'واتای "کۆبوونەوە" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Meeting', image: '🤝', correct: true },
                        { text: 'Office', image: '🏢', correct: false },
                        { text: 'Project', image: '📁', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'کۆبوونەوە', english: 'Meeting' },
                        { kurdish: 'ئیمەیل', english: 'Email' },
                        { kurdish: 'گرێبەست', english: 'Contract' },
                        { kurdish: 'پرۆژە', english: 'Project' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "کۆبوونەوەیەکم هەیە"',
                    sourceText: 'کۆبوونەوەیەکم هەیە',
                    correctSentence: ['I', 'have', 'a', 'meeting'],
                    options: ['I', 'have', 'a', 'meeting', 'an', 'office']
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "ئیمەیلێک بۆ من بنێرە"',
                    sentenceParts: ['Send', 'me', 'an', '___'],
                    correctOption: 'email',
                    options: ['email', 'letter', 'message', 'call']
                },
                {
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "کۆتا کات"',
                    correctAnswer: 'Deadline',
                    hints: ['Dead', 'line']
                },
                {
                    type: 'multiple-choice',
                    question: 'واتای "کڕیار" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Client', image: '🤝', correct: true },
                        { text: 'Employee', image: '👔', correct: false },
                        { text: 'Manager', image: '👨‍💼', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'گفتوگۆ بازرگانییەکە تەواو بکە',
                    dialogue: [
                        { speaker: 'Boss', text: 'When is the project deadline?' },
                        { speaker: 'You', text: '___', options: ['Next week', 'I don\'t know', 'Good'] },
                        { speaker: 'Boss', text: 'Great, thank you.' },
                        { speaker: 'You', text: '___', options: ['You are welcome', 'Goodbye', 'No problem'] }
                    ],
                    correctOptions: ['Next week', 'You are welcome']
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'بەڕێوبەر', english: 'Manager' },
                        { kurdish: 'کارمەند', english: 'Employee' },
                        { kurdish: 'هاوکار', english: 'Colleague' },
                        { kurdish: 'سەرۆک', english: 'Boss' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "کۆتا کات سبەینێیە"',
                    sentenceParts: ['The', '___', 'is', 'tomorrow'],
                    correctOption: 'deadline',
                    options: ['deadline', 'meeting', 'project', 'email']
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "دەتوانین کۆبوونەوەیەک دابنێین؟"',
                    sourceText: 'دەتوانین کۆبوونەوەیەک دابنێین؟',
                    correctSentence: ['Can', 'we', 'schedule', 'a', 'meeting', '?'],
                    options: ['Can', 'we', 'schedule', 'a', 'meeting', '?', 'do', 'make']
                }
            ]
        },
        {
            id: 'unit4-lesson2',
            title: 'تەندروستی و پزیشکی (Health & Medical)',
            icon: '🏥',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'واتای "پزیشک" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Doctor', image: '👨‍⚕️', correct: true },
                        { text: 'Hospital', image: '🏥', correct: false },
                        { text: 'Medicine', image: '💊', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'پزیشک', english: 'Doctor' },
                        { kurdish: 'نەخۆشخانە', english: 'Hospital' },
                        { kurdish: 'دەرمان', english: 'Medicine' },
                        { kurdish: 'نەخۆش', english: 'Sick' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "من نەخۆشم"',
                    sourceText: 'من نەخۆشم',
                    correctSentence: ['I', 'am', 'sick'],
                    options: ['I', 'am', 'sick', 'well', 'healthy']
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "سەرێشەم هەیە"',
                    sentenceParts: ['I', 'have', 'a', '___'],
                    correctOption: 'headache',
                    options: ['headache', 'fever', 'pain', 'disease']
                },
                {
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "پێویستیم بە دەرمان هەیە"',
                    correctAnswer: 'I need medicine',
                    hints: ['I need', 'medicine']
                },
                {
                    type: 'multiple-choice',
                    question: 'واتای "تا" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Fever', image: '🌡️', correct: true },
                        { text: 'Headache', image: '🤕', correct: false },
                        { text: 'Pain', image: '😷', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'گفتوگۆی سەردانی پزیشک تەواو بکە',
                    dialogue: [
                        { speaker: 'Doctor', text: 'How are you feeling today?' },
                        { speaker: 'You', text: '___', options: ['I have a headache', 'I am fine', 'Thank you'] },
                        { speaker: 'Doctor', text: 'Please take this medicine.' },
                        { speaker: 'You', text: '___', options: ['Thank you, doctor', 'No', 'Goodbye'] }
                    ],
                    correctOptions: ['I have a headache', 'Thank you, doctor']
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'سەرێشە', english: 'Headache' },
                        { kurdish: 'سکئێشە', english: 'Stomachache' },
                        { kurdish: 'تا', english: 'Fever' },
                        { kurdish: 'کۆکە', english: 'Cough' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "پێویستە پزیشکێک ببینم"',
                    sentenceParts: ['I', 'need', 'to', 'see', 'a', '___'],
                    correctOption: 'doctor',
                    options: ['doctor', 'medicine', 'hospital', 'nurse']
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "هەستم باش نییە"',
                    sourceText: 'هەستم باش نییە',
                    correctSentence: ['I', 'am', 'not', 'feeling', 'well'],
                    options: ['I', 'am', 'not', 'feeling', 'well', 'good', 'bad']
                }
            ]
        },
        {
            id: 'unit4-lesson3',
            title: 'چاوپێکەوتن و خشتەدانان (Appointments & Scheduling)',
            icon: '📅',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'واتای "چاوپێکەوتن" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Appointment', image: '📅', correct: true },
                        { text: 'Meeting', image: '🤝', correct: false },
                        { text: 'Time', image: '⏰', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'چاوپێکەوتن', english: 'Appointment' },
                        { kurdish: 'کات', english: 'Time' },
                        { kurdish: 'ڕۆژ', english: 'Day' },
                        { kurdish: 'بەردەست', english: 'Available' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "دەتوانم چاوپێکەوتنێک دابنێم؟"',
                    sourceText: 'دەتوانم چاوپێکەوتنێک دابنێم؟',
                    correctSentence: ['Can', 'I', 'make', 'an', 'appointment', '?'],
                    options: ['Can', 'I', 'make', 'an', 'appointment', '?', 'do', 'take']
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "کەی بەردەستیت؟"',
                    sentenceParts: ['When', 'are', 'you', '___', '?'],
                    correctOption: 'available',
                    options: ['available', 'busy', 'sick', 'good']
                },
                {
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "سبەینێ کاتژمێر ٢"',
                    correctAnswer: 'Tomorrow at 2 PM',
                    hints: ['Tomorrow', 'at', '2 PM']
                },
                {
                    type: 'conversation',
                    question: 'دیالۆگی دانانی کات تەواو بکە',
                    dialogue: [
                        { speaker: 'Receptionist', text: 'When would you like to come in?' },
                        { speaker: 'You', text: '___', options: ['Tuesday is good', 'I don\'t know', 'Goodbye'] },
                        { speaker: 'Receptionist', text: 'What time?' },
                        { speaker: 'You', text: '___', options: ['At 3 PM', 'Now', 'Yesterday'] }
                    ],
                    correctOptions: ['Tuesday is good', 'At 3 PM']
                },
                {
                    type: 'multiple-choice',
                    question: 'واتای "هەڵوەشاندنەوە" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Cancel', image: '❌', correct: true },
                        { text: 'Book', image: '✅', correct: false },
                        { text: 'Change', image: '🔄', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'دانان', english: 'Book / Set' },
                        { kurdish: 'هەڵوەشاندنەوە', english: 'Cancel' },
                        { kurdish: 'گۆڕین', english: 'Change' },
                        { kurdish: 'پشتڕاستکردنەوە', english: 'Confirm' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "پێویستە چاوپێکەوتنەکەم هەڵوەشێنمەوە"',
                    sentenceParts: ['I', 'need', 'to', '___', 'my', 'appointment'],
                    correctOption: 'cancel',
                    options: ['cancel', 'book', 'change', 'see']
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "ئەو کاتە دەتبینم"',
                    sourceText: 'ئەو کاتە دەتبینم',
                    correctSentence: ['See', 'you', 'then'],
                    options: ['See', 'you', 'then', 'now', 'yesterday']
                }
            ]
        },
        {
            id: 'unit4-lesson4',
            title: 'ڕاکان و گفتوگۆکان (Opinions & Discussions)',
            icon: '💭',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'چۆن دەڵێیت "من پێموایە" بە ئینگلیزی؟',
                    options: [
                        { text: 'I think', image: '💭', correct: true },
                        { text: 'I know', image: '🧠', correct: false },
                        { text: 'I say', image: '🗣️', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'من پێموایە', english: 'I think' },
                        { kurdish: 'من هاوڕام', english: 'I agree' },
                        { kurdish: 'من هاوڕا نیم', english: 'I disagree' },
                        { kurdish: 'لە ڕای مندا', english: 'In my opinion' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "تۆ چیت پێوایە؟"',
                    sourceText: 'تۆ چیت پێوایە؟',
                    correctSentence: ['What', 'do', 'you', 'think', '?'],
                    options: ['What', 'do', 'you', 'think', '?', 'know', 'say']
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "من لەگەڵت هاوڕام"',
                    sentenceParts: ['I', '___', 'with', 'you'],
                    correctOption: 'agree',
                    options: ['agree', 'disagree', 'say', 'know']
                },
                {
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "لە ڕای مندا"',
                    correctAnswer: 'In my opinion',
                    hints: ['In', 'my', 'opinion']
                },
                {
                    type: 'conversation',
                    question: 'گفتوگۆکە تەواو بکە',
                    dialogue: [
                        { speaker: 'Friend', text: 'What do you think about this idea?' },
                        { speaker: 'You', text: '___', options: ['I think it is good', 'I don\'t know', 'Goodbye'] },
                        { speaker: 'Friend', text: 'I agree with you.' },
                        { speaker: 'You', text: '___', options: ['Very good', 'No', 'Sorry'] }
                    ],
                    correctOptions: ['I think it is good', 'Very good']
                },
                {
                    type: 'multiple-choice',
                    question: 'واتای "باوەڕ" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Believe', image: '🙏', correct: true },
                        { text: 'Think', image: '💭', correct: false },
                        { text: 'Know', image: '🧠', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'باوەڕ', english: 'Believe' },
                        { kurdish: 'بیرۆکە', english: 'Idea' },
                        { kurdish: 'ڕا', english: 'Opinion' },
                        { kurdish: 'گفتوگۆ', english: 'Discussion' }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "ئەوە بیرۆکەیەکی باشە"',
                    sentenceParts: ['That\'s', 'a', 'good', '___'],
                    correctOption: 'idea',
                    options: ['idea', 'opinion', 'word', 'job']
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "من باوەڕت پێدەکەم"',
                    sourceText: 'من باوەڕت پێدەکەم',
                    correctSentence: ['I', 'believe', 'you'],
                    options: ['I', 'believe', 'you', 'know', 'see']
                }
            ]
        },
        {
            id: 'unit4-lesson5',
            title: 'بانک و دارایی (Banking & Finance)',
            icon: '🏦',
            exercises: [
                {
                    type: 'multiple-choice',
                    question: 'واتای "بانک" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Bank', image: '🏦', correct: true },
                        { text: 'Shop', image: '🏪', correct: false },
                        { text: 'Office', image: '🏢', correct: false }
                    ]
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'بانک', english: 'Bank' },
                        { kurdish: 'هەژمار', english: 'Account' },
                        { kurdish: 'پارە', english: 'Money' },
                        { kurdish: 'کارت', english: 'Card' }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "دەمەوێت هەژمارێک بکەمەوە"',
                    sourceText: 'دەمەوێت هەژمارێک بکەمەوە',
                    correctSentence: ['I', 'want', 'to', 'open', 'an', 'account'],
                    options: ['I', 'want', 'to', 'open', 'an', 'account', 'close', 'see']
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "بانکەکە لە کوێیە؟"',
                    sentenceParts: ['Where', 'is', 'the', '___', '?'],
                    correctOption: 'bank',
                    options: ['bank', 'shop', 'home', 'school']
                },
                {
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "ئامێری ڕاکێشانی پارە"', 
                    correctAnswer: 'ATM',
                    hints: ['A', 'T', 'M']
                },
                {
                    type: 'multiple-choice',
                    question: 'واتای "گواستنەوە" بە ئینگلیزی چییە؟',
                    options: [
                        { text: 'Transfer', image: '💸', correct: true },
                        { text: 'Receive', image: '💰', correct: false },
                        { text: 'Give', image: '💵', correct: false }
                    ]
                },
                {
                    type: 'conversation',
                    question: 'دیالۆگی بانکەکە تەواو بکە',
                    dialogue: [
                        { speaker: 'Teller', text: 'How can I help you?' },
                        { speaker: 'You', text: '___', options: ['I want to withdraw money', 'I am fine', 'Goodbye'] },
                        { speaker: 'Teller', text: 'How much?' },
                        { speaker: 'You', text: '___', options: ['One hundred dollars', 'I don\'t know', 'Thank you'] }
                    ],
                    correctOptions: ['I want to withdraw money', 'One hundred dollars']
                },
                {
                    type: 'match-pairs', question: 'وشەکان پەیوەست بکە',
                    pairs: [
                        { kurdish: 'گواستنەوە', english: 'Transfer' },
                        { kurdish: 'کێشانەوە', english: 'Withdraw' },
                        { kurdish: 'دانان (پاشەکەوت)', english: 'Deposit' }, 
                        { kurdish: 'باڵانس (بڕی ماوە)', english: 'Balance' } 
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'ڕستەکە تەواو بکە: "What is my ___?" (باڵانسی من چەندە؟)',
                    sentenceParts: ['What', 'is', 'my', '___', '?'],
                    correctOption: 'balance',
                    options: ['balance', 'account', 'card', 'name']
                },
                {
                    type: 'sentence-builder',
                    question: 'ئەم ڕستەیە وەربگێڕە: "پێویستیم بە کارتەکەم هەیە"',
                    sourceText: 'پێویستیم بە کارتەکەم هەیە',
                    correctSentence: ['I', 'need', 'my', 'card'],
                    options: ['I', 'need', 'my', 'card', 'want', 'don\'t']
                }
            ]
        }
    ]
};
