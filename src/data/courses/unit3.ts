import { Unit } from '../../types';

export const unit3: Unit = {
    id: 'unit-3',
    title: 'سێیەمین یەکە',
    description: 'کەلتوور، کار و گەشت',
    guidebook: {
        introduction: "لەم بەشەدا فێری چەمکە پێشکەوتووەکان دەبیت وەک گەشتکردن، کارکردن و کەلتوور. هەروەها فێردەبیت چۆن باسی داهاتوو بکەیت، داواکاری بە ڕێزەوە پێشکەش بکەیت، و باسی تەکنەلۆژیا بکەیت.",
        sections: [
            {
                id: "grammar",
                title: "📚 ڕێزمانی داهاتوو و داواکاری",
                content: "چۆن باسی داهاتوو بکەین و بە ڕێزەوە داوا بکەین:",
                subsections: [
                    {
                        subtitle: "داهاتوو (Future Tense)",
                        text: "بۆ داهاتوو وشەی 'Will' (دە-) بەکاردێنین:",
                        visual: {
                            type: "sentence-structure",
                            data: {
                                english: [
                                    { word: "I", label: "Subject", color: "#3b82f6" },
                                    { word: "Will", label: "Future", color: "#f59e0b" },
                                    { word: "Go", label: "Verb", color: "#ef4444" }
                                ],
                                kurdish: [
                                    { word: "من", label: "بکەر", color: "#3b82f6" },
                                    { word: "دە", label: "داهاتوو", color: "#f59e0b" },
                                    { word: "ڕۆم", label: "کردار", color: "#ef4444" }
                                ]
                            }
                        }
                    },
                    {
                        subtitle: "داواکاری بە ڕێزەوە (Polite Requests)",
                        text: "لە جیاتی 'I want' (دەمەوێت)، باشترە بڵێیت 'I would like' (حەز دەکەم/دەمەوێت بە ڕێزەوە):",
                        list: [
                            "I would like tea (چام دەوێت)",
                            "I would like to order (دەمەوێت داوا بکەم)",
                            "Could you help me? (دەتوانیت یارمەتیم بدەیت؟)"
                        ]
                    }
                ]
            },
            {
                id: "vocabulary",
                title: "💼 کار و پیشەکان",
                content: "وشە گرنگەکانی شوێنی کار:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Doctor", kurdish: "پزیشک", icon: "👨‍⚕️" },
                        { english: "Engineer", kurdish: "ئەندازیار", icon: "👷" },
                        { english: "Teacher", kurdish: "مامۆستا", icon: "👩‍🏫" },
                        { english: "Lawyer", kurdish: "پارێزەر", icon: "⚖️" },
                        { english: "Office", kurdish: "نووسینگە", icon: "🏢" },
                        { english: "Meeting", kurdish: "کۆبوونەوە", icon: "🤝" }
                    ]
                }
            },
            {
                id: "idioms",
                title: "💡 پەندی پێشینان (Idioms)",
                content: "دەستەواژە باوەکان کە مانای تایبەتیان هەیە:",
                visual: {
                    type: "comparison",
                    data: [
                        { english: "You're welcome", kurdish: "سەر چاو", icon: "👁️" },
                        { english: "Good job / Hello", kurdish: "ماندوو نەبیت", icon: "💪" },
                        { english: "My dear", kurdish: "قوربان", icon: "❤️" }
                    ]
                }
            },
            {
                id: "culture",
                title: "🎉 جەژن و بۆنەکان",
                content: "کوردستان چەندین بۆنەی تایبەتی هەیە:",
                visual: {
                    type: "timeline",
                    data: [
                        { label: "Newroz", sub: "نەورۆز (٢١ی ئازار)" },
                        { label: "Eid", sub: "جەژن" },
                        { label: "Wedding", sub: "زەماوەند" },
                        { label: "Picnic", sub: "سەیران" }
                    ]
                }
            },
            {
                id: "travel",
                title: "✈️ گەشت و هۆتێل",
                content: "وشەکانی فڕۆکەخانە و مانەوە:",
                visual: {
                    type: "dialogue",
                    data: [
                        { speaker: "A", avatar: "💁‍♂️", english: "Do you have a reservation?", kurdish: "ئایا حجزت هەیە؟" },
                        { speaker: "B", avatar: "🧔", english: "Yes, under the name Azad.", kurdish: "بەڵێ، بە ناوی ئازاد." },
                        { speaker: "A", avatar: "💁‍♂️", english: "Here is your key.", kurdish: "فەرموو کلیلەکەت." },
                        { speaker: "B", avatar: "🧔", english: "Thank you.", kurdish: "سوپاس." }
                    ]
                }
            },
            {
                id: "emergency",
                title: "🚨 ژمارە فریاگوزارییەکان",
                content: "ژمارە گرنگەکان لە کاتی پێویستدا:",
                visual: {
                    type: "pronoun-grid",
                    data: [
                        { english: "Police (104)", kurdish: "پۆلیس", icon: "👮" },
                        { english: "Ambulance (122)", kurdish: "فریاکەوتن", icon: "🚑" },
                        { english: "Fire (115)", kurdish: "ئاگرکوژێنەوە", icon: "🚒" }
                    ]
                }
            },
            {
                id: "tech",
                title: "📱 تەکنەلۆژیا و سۆشیال میدیا",
                content: "وشەکانی ڕۆژانە بۆ مۆبایل و ئینتەرنێت:",
                list: [
                    "Download (داگرتن)",
                    "Upload (بارکردن)",
                    "Password (وشەی نهێنی)",
                    "Screen (شاشە)",
                    "Battery (پاتری)",
                    "Follow (فۆڵۆ)",
                    "Like (لایك)",
                    "Share (شێر)"
                ]
            }
        ],
        keyPhrases: [
            { english: "I would like...", kurdish: "دەمەوێت... (بە ڕێزەوە)", pronunciation: "ئای وود لایک..." },
            { english: "The bill, please", kurdish: "حیسابەکە، تکایە", pronunciation: "زە بیڵ، پلیز" },
            { english: "Where is the airport?", kurdish: "فڕۆکەخانەکە لە کوێیە؟", pronunciation: "وێر ئز زە ئێرپۆرت؟" },
            { english: "My battery is dead", kurdish: "شەحنم نەماوە", pronunciation: "مای باتری ئز دێد" },
            { english: "Happy Newroz!", kurdish: "نەورۆزتان پیرۆز!", pronunciation: "هاپی نەورۆز" },
            { english: "Can you help me?", kurdish: "دەتوانیت یارمەتیم بدەیت؟", pronunciation: "کان یو هێڵپ می؟" }
        ]
    },
    lessons: [
        {
            id: 'unit3-lesson1',
            title: 'Food & Dining',
            icon: '🍽️',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'چێشتخانە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Restaurant', image: '🍽️', correct: true },
                        { id: 'opt2', text: 'Cafe', image: '☕', correct: false },
                        { id: 'opt3', text: 'Bakery', image: '🍞', correct: false },
                        { id: 'opt4', text: 'Food', image: '🍴', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'خواردن', english: 'Food' },
                        { kurdish: 'خواردنەوە', english: 'Drink' },
                        { kurdish: 'تام', english: 'Taste' },
                        { kurdish: 'برسییەتی', english: 'Hunger' },
                        { kurdish: 'تینوویەتی', english: 'Thirst' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "دەمەوێت خواردن داوا بکەم"',
                    sourceText: 'دەمەوێت خواردن داوا بکەم',
                    correctSentence: ['I', 'would like', 'to order', 'food'],
                    options: ['I', 'would like', 'to order', 'food', 'eat', 'buy', 'want']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "This food is very ___" (تامدار)',
                    sentenceParts: ['This', 'food', 'is', 'very', '___'],
                    correctOption: 'delicious',
                    options: ['delicious', 'expensive', 'cheap', 'hot']
                },
                {
                    id: 5,
                    type: 'vocabulary-grid',
                    question: 'Learn some popular international foods',
                    items: [
                        { english: 'Burger', kurdish: 'بەرگر', image: '🍔' },
                        { english: 'Pizza', kurdish: 'پیتزا', image: '🍕' },
                        { english: 'Salad', kurdish: 'زەڵاتە', image: '🥗' },
                        { english: 'Soup', kurdish: 'شۆربا', image: '🥣' }
                    ]
                },
                {
                    id: 6,
                    type: 'roleplay-chat',
                    question: 'Order food at a restaurant in English!',
                    scenario: '🍽️ You are at a restaurant. The waiter is taking your order. Order your favorite dish in English!',
                    chatMessages: [
                        { sender: 'ai', text: 'Hello and welcome! Our restaurant is famous for its kebabs. What would you like to order?', avatar: '🧑‍🍳', name: 'Waiter' },
                        { sender: 'ai', text: 'confirm: Very good! I will bring it right away. Enjoy your meal!', avatar: '🧑‍🍳', name: 'Waiter' }
                    ],
                    acceptableResponses: [
                        'I want kebab and biryani',
                        'I would like a kebab',
                        'I want to eat kebab',
                        'I want dolma',
                        'I want biryani and salad'
                    ],
                    keywordsRequired: ['want'],
                    hints: ['kebab', 'biryani', 'dolma', 'want'],
                    speechLang: 'en-US'
                },
                {
                    id: 7,
                    type: 'conversation',
                    question: 'Complete the restaurant dialogue',
                    dialogue: [
                        { speaker: 'Waiter', text: 'Hello! What would you like to eat?' },
                        { speaker: 'You', text: '___', options: ['I would like kebab and biryani', 'I am fine', 'Thank you'] },
                        { speaker: 'Waiter', text: 'Okay, what would you like to drink?' },
                        { speaker: 'You', text: '___', options: ['I would like ayran', 'No', 'Goodbye'] }
                    ],
                    correctOptions: ['I would like kebab and biryani', 'I would like ayran']
                },
                {
                    id: 8,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "حیسابەکە تکایە"',
                    correctAnswer: 'The bill please',
                    hints: ['The', 'bill', 'please']
                },
                {
                    id: 9,
                    type: 'multiple-choice',
                    question: "'نانی بەیانی' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Breakfast', image: '🍳', correct: true },
                        { id: 'opt2', text: 'Lunch', image: '🍱', correct: false },
                        { id: 'opt3', text: 'Dinner', image: '🍽️', correct: false },
                        { id: 'opt4', text: 'Food', image: '🍴', correct: false }
                    ]
                },
                {
                    id: 10,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'چای', english: 'Tea' },
                        { kurdish: 'قاوە', english: 'Coffee' },
                        { kurdish: 'شیر', english: 'Milk' },
                        { kurdish: 'ئاو', english: 'Water' },
                        { kurdish: 'دۆغ', english: 'Yogurt drink' }
                    ]
                },
                {
                    id: 11,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من ڕووەکخۆرم"',
                    sourceText: 'من ڕووەکخۆرم',
                    correctSentence: ['I', 'am', 'vegetarian'],
                    options: ['I', 'am', 'vegetarian', 'meat', 'hungry', 'full']
                },
                {
                    id: 12,
                    type: 'fill-blank',
                    question: 'Complete: "Do you have ___ food?" (تیژ)',
                    sentenceParts: ['Do', 'you', 'have', '___', 'food?'],
                    correctOption: 'spicy',
                    options: ['spicy', 'sweet', 'red', 'sour']
                },
                {
                    id: 13,
                    type: 'cultural-note',
                    question: 'Learn about Kurdish tea culture',
                    content: 'In Kurdish culture, tea (چای) is served throughout the day and is a symbol of hospitality. It is typically served in small glasses with sugar cubes.',
                    quiz: {
                        question: 'What does tea symbolize in Kurdish culture?',
                        options: ['Hospitality', 'Wealth', 'Power', 'Youth'],
                        correct: 'Hospitality'
                    }
                },
                {
                    id: 14,
                    type: 'multiple-choice',
                    question: "'حیساب (ئەژمار)' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Bill', image: '🧾', correct: true },
                        { id: 'opt2', text: 'Money', image: '💵', correct: false },
                        { id: 'opt3', text: 'Table', image: '🪑', correct: false }
                    ]
                },
                {
                    id: 15,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "چایەکە گەرمە"',
                    sourceText: 'چایەکە گەرمە',
                    correctSentence: ['The', 'tea', 'is', 'hot'],
                    options: ['The', 'tea', 'is', 'hot', 'cold', 'good']
                },
                {
                    id: 16,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'کەوچک', english: 'Spoon' },
                        { kurdish: 'چەتاڵ', english: 'Fork' },
                        { kurdish: 'چەقۆ', english: 'Knife' },
                        { kurdish: 'قاپ', english: 'Plate' }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson2',
            title: 'Holidays & Traditions',
            icon: '🎉',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'سەری ساڵی کوردی' چ جەژنێکە؟",
                    options: [
                        { id: 'opt1', text: 'Newroz', image: '🔥', correct: true },
                        { id: 'opt2', text: 'Festival', image: '🎊', correct: false },
                        { id: 'opt3', text: 'Party', image: '🎉', correct: false },
                        { id: 'opt4', text: 'Holiday', image: '🎈', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'نەورۆز', english: 'Kurdish New Year' },
                        { kurdish: 'جەژن', english: 'Festival' },
                        { kurdish: 'ئاهەنگ', english: 'Party' },
                        { kurdish: 'ڕێز', english: 'Respect' },
                        { kurdish: 'نەریت', english: 'Tradition' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "نەورۆزتان پیرۆز بێت!"',
                    sourceText: 'نەورۆزتان پیرۆز بێت!',
                    correctSentence: ['Happy', 'Newroz!'],
                    options: ['Happy', 'Newroz!', 'Good', 'Festival!']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "We celebrate Newroz on ___ 21st" (ئازار)',
                    sentenceParts: ['We', 'celebrate', 'Newroz', 'on', '___', '21st'],
                    correctOption: 'March',
                    options: ['March', 'April', 'May', 'June']
                },
                {
                    id: 5,
                    type: 'cultural-timeline',
                    question: 'Order these Kurdish celebrations chronologically',
                    events: [
                        { name: 'Newroz', date: 'March 21', order: 1 },
                        { name: 'Ramadan', date: 'Variable', order: 2 },
                        { name: 'Eid al-Adha', date: 'Variable', order: 3 }
                    ]
                },
                {
                    id: 6,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "هەڵپەڕکێ"',
                    correctAnswer: 'Traditional dance',
                    hints: ['Traditional', 'dance']
                },
                {
                    id: 7,
                    type: 'multiple-choice',
                    question: "'زەماوەند' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Wedding', image: '💒', correct: true },
                        { id: 'opt2', text: 'Festival', image: '🎉', correct: false },
                        { id: 'opt3', text: 'Party', image: '🎊', correct: false },
                        { id: 'opt4', text: 'Engagement', image: '💍', correct: false }
                    ]
                },
                {
                    id: 8,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'زەماوەند', english: 'Wedding' },
                        { kurdish: 'خوازبێنی', english: 'Engagement' },
                        { kurdish: 'بووک', english: 'Bride' },
                        { kurdish: 'زاوا', english: 'Groom' }
                    ]
                },
                {
                    id: 9,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من مۆسیقای کوردیم خۆشدەوێت"',
                    sourceText: 'من مۆسیقای کوردیم خۆشدەوێت',
                    correctSentence: ['I', 'love', 'Kurdish', 'music'],
                    options: ['I', 'love', 'Kurdish', 'music', 'hate', 'song']
                },
                {
                    id: 10,
                    type: 'fill-blank',
                    question: 'Complete: "Kurdish clothes are very ___" (ڕەنگاوڕەنگ)',
                    sentenceParts: ['Kurdish', 'clothes', 'are', 'very', '___'],
                    correctOption: 'colorful',
                    options: ['colorful', 'black', 'white', 'expensive']
                },
                {
                    id: 11,
                    type: 'image-match',
                    question: 'Match Kurdish cultural items with English',
                    pairs: [
                        { image: '🎵', kurdish: 'Music' },
                        { image: '💃', kurdish: 'Dance' },
                        { image: '👗', kurdish: 'Clothes' },
                        { image: '🔥', kurdish: 'Fire' }
                    ]
                },
                {
                    id: 12,
                    type: 'story-completion',
                    question: 'Complete the Newroz story',
                    story: 'Newroz is the Kurdish New Year. Kurdish people light ___ and ___ together.',
                    blanks: ['fire', 'dance'],
                    options: ['fire', 'water', 'dance', 'sing']
                },
                {
                    id: 13,
                    type: 'match-pairs',
                    question: 'Match traditional clothes',
                    pairs: [
                        { kurdish: 'کەوا و سەڵتە', english: 'Women\'s Suit' },
                        { kurdish: 'شەرواڵ و مرادخانی', english: 'Men\'s Suit' },
                        { kurdish: 'کڵاش', english: 'Traditional Shoes' },
                        { kurdish: 'مێزەر', english: 'Turban' }
                    ]
                },
                {
                    id: 14,
                    type: 'fill-blank',
                    question: 'Complete: "Newroz is in ___" (بەهار)',
                    sentenceParts: ['Newroz', 'is', 'in', '___'],
                    correctOption: 'Spring',
                    options: ['Spring', 'Summer', 'Winter', 'Autumn']
                },
                {
                    id: 15,
                    type: 'multiple-choice',
                    question: "'سەیران' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Picnic', image: '🌳', correct: true },
                        { id: 'opt2', text: 'Work', image: '💼', correct: false },
                        { id: 'opt3', text: 'Sleep', image: '😴', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson3',
            title: 'Work & Education',
            icon: '💼',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'کار' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Job/Work', image: '💼', correct: true },
                        { id: 'opt2', text: 'School', image: '🏫', correct: false },
                        { id: 'opt3', text: 'University', image: '🎓', correct: false },
                        { id: 'opt4', text: 'Teacher', image: '👨‍🏫', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'مامۆستا', english: 'Teacher' },
                        { kurdish: 'پزیشک', english: 'Doctor' },
                        { kurdish: 'ئەندازیار', english: 'Engineer' },
                        { kurdish: 'پارێزەر', english: 'Lawyer' },
                        { kurdish: 'نووسەر', english: 'Writer' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من وەک مامۆستایەک کار دەکەم"',
                    sourceText: 'من وەک مامۆستایەک کار دەکەم',
                    correctSentence: ['I', 'work', 'as', 'a', 'teacher'],
                    options: ['I', 'work', 'as', 'a', 'teacher', 'doctor', 'student']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "I study at the ___" (زانکۆ)',
                    sentenceParts: ['I', 'study', 'at', 'the', '___'],
                    correctOption: 'university',
                    options: ['university', 'school', 'library', 'shop']
                },
                {
                    id: 5,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "زانکۆ"',
                    correctAnswer: 'University',
                    hints: ['University']
                },
                {
                    id: 6,
                    type: 'multiple-choice',
                    question: "'قوتابی' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Student', image: '👨‍🎓', correct: true },
                        { id: 'opt2', text: 'Teacher', image: '👨‍🏫', correct: false },
                        { id: 'opt3', text: 'Employee', image: '👔', correct: false },
                        { id: 'opt4', text: 'Worker', image: '👷', correct: false }
                    ]
                },
                {
                    id: 7,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'قوتابخانە', english: 'School' },
                        { kurdish: 'زانکۆ', english: 'University' },
                        { kurdish: 'کتێبخانە', english: 'Library' },
                        { kurdish: 'تاقیگە', english: 'Laboratory' }
                    ]
                },
                {
                    id: 8,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "پیشەکەت چییە؟"',
                    sourceText: 'پیشەکەت چییە؟',
                    correctSentence: ['What', 'is', 'your', 'profession?'],
                    options: ['What', 'is', 'your', 'profession?', 'Where', 'name', 'When']
                },
                {
                    id: 9,
                    type: 'fill-blank',
                    question: 'Complete: "I have an ___ tomorrow" (تاقیکردنەوە)',
                    sentenceParts: ['I', 'have', 'an', '___', 'tomorrow'],
                    correctOption: 'exam',
                    options: ['exam', 'job', 'party', 'visit']
                },
                {
                    id: 10,
                    type: 'roleplay-chat',
                    question: 'Answer job interview questions in English!',
                    scenario: '💼 You are in a job interview. The interviewer asks about your profession and experience. Answer professionally in English!',
                    chatMessages: [
                        { sender: 'ai', text: 'Hello and welcome! Please introduce yourself. What is your profession and how many years of experience do you have?', avatar: '👔', name: 'Interviewer' },
                        { sender: 'ai', text: 'confirm: Very good! You have good experience. When can you start working?', avatar: '👔', name: 'Interviewer' }
                    ],
                    acceptableResponses: [
                        'I am an engineer and I have five years experience',
                        'I am a teacher and I have three years experience',
                        'My profession is doctor and I have ten years experience',
                        'I am a programmer and I have four years experience'
                    ],
                    keywordsRequired: ['experience'],
                    hints: ['profession', 'experience', 'years'],
                    speechLang: 'en-US'
                },
                {
                    id: 11,
                    type: 'conversation',
                    question: 'Complete the job interview',
                    dialogue: [
                        { speaker: 'Interviewer', text: 'What is your profession?' },
                        { speaker: 'You', text: '___', options: ['I am an engineer', 'I am fine', 'Thank you'] },
                        { speaker: 'Interviewer', text: 'How many years of experience do you have?' },
                        { speaker: 'You', text: '___', options: ['Five years', 'I do not know', 'Goodbye'] }
                    ],
                    correctOptions: ['I am an engineer', 'Five years']
                },
                {
                    id: 12,
                    type: 'career-path',
                    question: 'Match education levels with Kurdish terms',
                    levels: [
                        { english: 'Elementary', kurdish: 'سەرەتایی', order: 1 },
                        { english: 'Middle School', kurdish: 'ناوەندی', order: 2 },
                        { english: 'High School', kurdish: 'ئامادەیی', order: 3 },
                        { english: 'University', kurdish: 'زانکۆ', order: 4 }
                    ]
                },
                {
                    id: 13,
                    type: 'multiple-choice',
                    question: "'مووچە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Salary', image: '💰', correct: true },
                        { id: 'opt2', text: 'Work', image: '💼', correct: false },
                        { id: 'opt3', text: 'Office', image: '🏢', correct: false },
                        { id: 'opt4', text: 'Boss', image: '👔', correct: false }
                    ]
                },
                {
                    id: 14,
                    type: 'multiple-choice',
                    question: "'نووسینگە (ئۆفیس)' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Office', image: '🏢', correct: true },
                        { id: 'opt2', text: 'House', image: '🏠', correct: false },
                        { id: 'opt3', text: 'Restaurant', image: '🍽️', correct: false }
                    ]
                },
                {
                    id: 15,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من دەچم بۆ سەر کار"',
                    sourceText: 'من دەچم بۆ سەر کار',
                    correctSentence: ['I', 'go', 'to', 'work'],
                    options: ['I', 'go', 'to', 'work', 'home', 'sleep']
                },
                {
                    id: 16,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'بەڕێوەبەر', english: 'Manager' },
                        { kurdish: 'هاوکار', english: 'Colleague' },
                        { kurdish: 'کۆبوونەوە', english: 'Meeting' },
                        { kurdish: 'پشوودان', english: 'Break' }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson4',
            title: 'Travel & Transportation',
            icon: '✈️',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'فڕۆکە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Airplane', image: '✈️', correct: true },
                        { id: 'opt2', text: 'Car', image: '🚗', correct: false },
                        { id: 'opt3', text: 'Bus', image: '🚌', correct: false },
                        { id: 'opt4', text: 'Train', image: '🚂', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'فڕۆکە', english: 'Airplane' },
                        { kurdish: 'ئۆتۆمبێل', english: 'Car' },
                        { kurdish: 'پاس', english: 'Bus' },
                        { kurdish: 'تاکسی', english: 'Taxi' },
                        { kurdish: 'پاسکیل', english: 'Bicycle' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "دەمەوێت بلیتێک حجز بکەم"',
                    sourceText: 'دەمەوێت بلیتێک حجز بکەم',
                    correctSentence: ['I', 'want', 'to book', 'a ticket'],
                    options: ['I', 'want', 'to book', 'a ticket', 'to buy', 'to see']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "The train arrives at ___" (حەوت)',
                    sentenceParts: ['The', 'train', 'arrives', 'at', '___'],
                    correctOption: 'seven',
                    options: ['seven', 'six', 'eight', 'nine']
                },
                {
                    id: 5,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "فڕۆکەخانە"',
                    correctAnswer: 'Airport',
                    hints: ['Airport']
                },
                {
                    id: 6,
                    type: 'multiple-choice',
                    question: "'ئوتێل (میوانخانە)' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Hotel', image: '🏨', correct: true },
                        { id: 'opt2', text: 'House', image: '🏠', correct: false },
                        { id: 'opt3', text: 'Restaurant', image: '🍽️', correct: false },
                        { id: 'opt4', text: 'Shop', image: '🏪', correct: false }
                    ]
                },
                {
                    id: 7,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'فڕۆکەخانە', english: 'Airport' },
                        { kurdish: 'وێستگە', english: 'Station' },
                        { kurdish: 'ئوتێل', english: 'Hotel' },
                        { kurdish: 'پاسپۆرت', english: 'Passport' }
                    ]
                },
                {
                    id: 8,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "وێستگەی پاس لە کوێیە؟"',
                    sourceText: 'وێستگەی پاس لە کوێیە؟',
                    correctSentence: ['Where', 'is', 'the', 'bus station?'],
                    options: ['Where', 'is', 'the', 'bus station?', 'Airport', 'When']
                },
                {
                    id: 9,
                    type: 'fill-blank',
                    question: 'Complete: "I need to check in at the ___" (ئوتێل)',
                    sentenceParts: ['I', 'need', 'to', 'check in', 'at the', '___'],
                    correctOption: 'hotel',
                    options: ['hotel', 'airport', 'station', 'shop']
                },
                {
                    id: 10,
                    type: 'roleplay-chat',
                    question: 'Check into your hotel in English!',
                    scenario: '🏨 You have arrived at a hotel. Talk to the receptionist to check in!',
                    chatMessages: [
                        { sender: 'ai', text: 'Hello and welcome to our hotel! Do you have a reservation?', avatar: '👩‍💼', name: 'Receptionist' },
                        { sender: 'ai', text: 'confirm: Very good! Here is your room key. Room 305.', avatar: '👩‍💼', name: 'Receptionist' }
                    ],
                    acceptableResponses: [
                        'Yes I have a reservation under the name Ahmed',
                        'Yes I have a reservation',
                        'I have a reservation my name is Ahmed',
                        'Hello yes I made a reservation'
                    ],
                    keywordsRequired: ['reservation'],
                    hints: ['reservation', 'name', 'yes'],
                    speechLang: 'en-US'
                },
                {
                    id: 11,
                    type: 'conversation',
                    question: 'Complete the hotel check-in',
                    dialogue: [
                        { speaker: 'Receptionist', text: 'Hello! How can I help you?' },
                        { speaker: 'You', text: '___', options: ['I have a reservation', 'I am fine', 'Goodbye'] },
                        { speaker: 'Receptionist', text: 'What is your name?' },
                        { speaker: 'You', text: '___', options: ['My name is Ahmed', 'I do not know', 'Thank you'] }
                    ],
                    correctOptions: ['I have a reservation', 'My name is Ahmed']
                },
                {
                    id: 12,
                    type: 'route-planner',
                    question: 'Plan your journey',
                    start: 'Home',
                    destination: 'Airport',
                    steps: [
                        { transport: 'Taxi', duration: '15 mins' },
                        { transport: 'Airplane', duration: '2 hours' }
                    ]
                },
                {
                    id: 13,
                    type: 'emergency-phrases',
                    question: 'Learn important travel phrases',
                    phrases: [
                        { kurdish: 'یارمەتیم بدە!', english: 'Help me!', situation: 'Emergency' },
                        { kurdish: 'ونم بووە', english: 'I am lost', situation: 'Navigation' },
                        { kurdish: 'پۆلیس بانگ بکە', english: 'Call the police', situation: 'Emergency' }
                    ],
                    quiz: {
                        question: 'How do you say "ونم بووە"?',
                        options: ['I am lost', 'Help me', 'I am fine'],
                        correct: 'I am lost'
                    }
                },
                {
                    id: 14,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'فڕین', english: 'To Fly' },
                        { kurdish: 'لێخوڕین', english: 'To Drive' },
                        { kurdish: 'ڕۆیشتن', english: 'To Walk' },
                        { kurdish: 'گەیشتن', english: 'To Arrive' }
                    ]
                },
                {
                    id: 15,
                    type: 'fill-blank',
                    question: 'Complete: "The plane is ___" (خێرا)',
                    sentenceParts: ['The', 'plane', 'is', '___'],
                    correctOption: 'fast',
                    options: ['fast', 'slow', 'small']
                },
                {
                    id: 16,
                    type: 'multiple-choice',
                    question: "'بلیت' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Ticket', image: '🎫', correct: true },
                        { id: 'opt2', text: 'Passport', image: '🛂', correct: false },
                        { id: 'opt3', text: 'Bag', image: '🎒', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson5',
            title: 'Technology & Modern Life',
            icon: '📱',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'مۆبایل' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Mobile Phone', image: '📱', correct: true },
                        { id: 'opt2', text: 'Computer', image: '💻', correct: false },
                        { id: 'opt3', text: 'Television', image: '📺', correct: false },
                        { id: 'opt4', text: 'Internet', image: '🌐', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'مۆبایل', english: 'Mobile Phone' },
                        { kurdish: 'کۆمپیوتەر', english: 'Computer' },
                        { kurdish: 'ئینتەرنێت', english: 'Internet' },
                        { kurdish: 'ئیمەیل', english: 'Email' },
                        { kurdish: 'ماڵپەڕ (وێبسایت)', english: 'Website' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من هەموو ڕۆژێک سۆشیال میدیا بەکاردەهێنم"',
                    sourceText: 'من هەموو ڕۆژێک سۆشیال میدیا بەکاردەهێنم',
                    correctSentence: ['I', 'use', 'social', 'media', 'every day'],
                    options: ['I', 'use', 'social', 'media', 'every day', 'see', 'buy']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "Can you send me the ___?" (بەستەر/لینک)',
                    sentenceParts: ['Can', 'you', 'send', 'me', 'the', '___?'],
                    correctOption: 'link',
                    options: ['link', 'email', 'mobile', 'name']
                },
                {
                    id: 5,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "وشەی نهێنی"',
                    correctAnswer: 'Password',
                    hints: ['Password']
                },
                {
                    id: 6,
                    type: 'multiple-choice',
                    question: "'داگرتن' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Download', image: '⬇️', correct: true },
                        { id: 'opt2', text: 'Upload', image: '⬆️', correct: false },
                        { id: 'opt3', text: 'Delete', image: '🗑️', correct: false },
                        { id: 'opt4', text: 'Open', image: '📂', correct: false }
                    ]
                },
                {
                    id: 7,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'داگرتن', english: 'Download' },
                        { kurdish: 'بارکردن', english: 'Upload' },
                        { kurdish: 'سڕینەوە', english: 'Delete' },
                        { kurdish: 'پاشەکەوتکردن', english: 'Save' }
                    ]
                },
                {
                    id: 8,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "شەحنی مۆبایلەکەم نەماوە"',
                    sourceText: 'باتریی مۆبایلەکەم تەواوبووە',
                    correctSentence: ['My', 'phone', 'battery', 'is', 'dead'],
                    options: ['My', 'phone', 'battery', 'is', 'dead', 'full', 'new', 'old']
                },
                {
                    id: 9,
                    type: 'fill-blank',
                    question: 'Complete: "I need to charge my ___" (مۆبایل)',
                    sentenceParts: ['I', 'need', 'to', 'charge', 'my', '___'],
                    correctOption: 'phone',
                    options: ['phone', 'computer', 'card', 'book']
                },
                {
                    id: 10,
                    type: 'app-vocabulary',
                    question: 'Match apps with their English names',
                    apps: [
                        { icon: '💬', english: 'WhatsApp', kurdish: 'واتساپ' },
                        { icon: '📘', english: 'Facebook', kurdish: 'فەیسبووک' },
                        { icon: '📷', english: 'Instagram', kurdish: 'ئینستاگرام' },
                        { icon: '🐦', english: 'X (Twitter)', kurdish: 'ئێکس (تویتەر)' }
                    ]
                },
                {
                    id: 11,
                    type: 'tech-troubleshooting',
                    question: 'Match problems with solutions',
                    problems: [
                        { issue: 'Internet is not working', solution: 'Check WiFi' },
                        { issue: 'Battery is dead', solution: 'Charge it' },
                        { issue: 'Forgot password', solution: 'Reset it' }
                    ]
                },
                {
                    id: 12,
                    type: 'conversation',
                    question: 'Complete the tech support dialogue',
                    dialogue: [
                        { speaker: 'Support', text: 'What is your problem?' },
                        { speaker: 'You', text: '___', options: ['My internet is not working', 'I am fine', 'Thank you'] },
                        { speaker: 'Support', text: 'Did you check the WiFi?' },
                        { speaker: 'You', text: '___', options: ['Yes, but it is not working', 'No', 'I do not know'] }
                    ],
                    correctOptions: ['My internet is not working', 'Yes, but it is not working']
                },
                {
                    id: 13,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "شاشە"',
                    correctAnswer: 'Screen',
                    hints: ['Screen']
                },
                {
                    id: 14,
                    type: 'multiple-choice',
                    question: "'پاتری' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Battery', image: '🔋', correct: true },
                        { id: 'opt2', text: 'Phone', image: '📱', correct: false },
                        { id: 'opt3', text: 'WiFi', image: '📶', correct: false }
                    ]
                },
                {
                    id: 15,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'نامە', english: 'Message' },
                        { kurdish: 'پەیوەندی', english: 'Call' },
                        { kurdish: 'وێنە', english: 'Photo' },
                        { kurdish: 'ڤیدیۆ', english: 'Video' }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson6',
            title: 'Body Parts & Appearance',
            icon: '🧍',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'سەر' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Head', image: '🧠', correct: true },
                        { id: 'opt2', text: 'Hand', image: '🤚', correct: false },
                        { id: 'opt3', text: 'Foot', image: '🦶', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'سەر', english: 'Head' },
                        { kurdish: 'دەست', english: 'Hand' },
                        { kurdish: 'چاو', english: 'Eye' },
                        { kurdish: 'گوێ', english: 'Ear' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "چاوم قاوەییە"',
                    sourceText: 'چاوم قاوەییە',
                    correctSentence: ['I', 'have', 'brown', 'eyes'],
                    options: ['I', 'have', 'brown', 'eyes', 'green', 'blue', 'head']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "She has long ___" (قژ)',
                    sentenceParts: ['She', 'has', 'long', '___'],
                    correctOption: 'hair',
                    options: ['hair', 'short', 'black', 'red']
                },
                {
                    id: 5,
                    type: 'multiple-choice',
                    question: "'بەرز (باڵا)' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Tall', image: '📏', correct: true },
                        { id: 'opt2', text: 'Short', image: '📐', correct: false },
                        { id: 'opt3', text: 'Fat', image: '🔵', correct: false }
                    ]
                },
                {
                    id: 6,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'قژ', english: 'Hair' },
                        { kurdish: 'دەم', english: 'Mouth' },
                        { kurdish: 'لووت', english: 'Nose' },
                        { kurdish: 'پەنجە', english: 'Finger' }
                    ]
                },
                {
                    id: 7,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "شان"',
                    correctAnswer: 'Shoulder',
                    hints: ['Shoulder']
                },
                {
                    id: 8,
                    type: 'fill-blank',
                    question: 'Complete: "He is ___ and strong" (بەرز)',
                    sentenceParts: ['He', 'is', '___', 'and', 'strong'],
                    correctOption: 'tall',
                    options: ['tall', 'short', 'weak', 'old']
                },
                {
                    id: 9,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "دەستم دەئێشێت"',
                    sourceText: 'دەستم دەئێشێت',
                    correctSentence: ['My', 'hand', 'hurts'],
                    options: ['My', 'hand', 'hurts', 'head', 'fine', 'foot']
                },
                {
                    id: 10,
                    type: 'multiple-choice',
                    question: "'ئەژنۆ' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Knee', image: '🦵', correct: true },
                        { id: 'opt2', text: 'Foot', image: '🦶', correct: false },
                        { id: 'opt3', text: 'Neck', image: '🧣', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson7',
            title: 'Nature & Environment',
            icon: '🏔️',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'چیا' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Mountain', image: '🏔️', correct: true },
                        { id: 'opt2', text: 'Sea', image: '🌊', correct: false },
                        { id: 'opt3', text: 'Tree', image: '🌳', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'چیا', english: 'Mountain' },
                        { kurdish: 'ڕووبار', english: 'River' },
                        { kurdish: 'دار', english: 'Tree' },
                        { kurdish: 'دەریاچە', english: 'Lake' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "چیاکە زۆر بەرزە"',
                    sourceText: 'چیاکە زۆر بەرزە',
                    correctSentence: ['The', 'mountain', 'is', 'very', 'high'],
                    options: ['The', 'mountain', 'is', 'very', 'high', 'low', 'big', 'river']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "There are many ___ in Kurdistan" (دار)',
                    sentenceParts: ['There', 'are', 'many', '___', 'in', 'Kurdistan'],
                    correctOption: 'trees',
                    options: ['trees', 'mountains', 'seas', 'skies']
                },
                {
                    id: 5,
                    type: 'multiple-choice',
                    question: "'ئاسمان' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Sky', image: '🌤️', correct: true },
                        { id: 'opt2', text: 'Earth', image: '🌍', correct: false },
                        { id: 'opt3', text: 'Sea', image: '🌊', correct: false }
                    ]
                },
                {
                    id: 6,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'ئاسمان', english: 'Sky' },
                        { kurdish: 'خۆر', english: 'Sun' },
                        { kurdish: 'مانگ', english: 'Moon' },
                        { kurdish: 'ئەستێرە', english: 'Star' }
                    ]
                },
                {
                    id: 7,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "دارستان"',
                    correctAnswer: 'Forest',
                    hints: ['Forest']
                },
                {
                    id: 8,
                    type: 'fill-blank',
                    question: 'Complete: "The ___ is beautiful at night" (ئاسمان)',
                    sentenceParts: ['The', '___', 'is', 'beautiful', 'at', 'night'],
                    correctOption: 'sky',
                    options: ['sky', 'earth', 'sea', 'mountain']
                },
                {
                    id: 9,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من سروشتم خۆشدەوێت"',
                    sourceText: 'من سروشتم خۆشدەوێت',
                    correctSentence: ['I', 'love', 'nature'],
                    options: ['I', 'love', 'nature', 'hate', 'mountain']
                },
                {
                    id: 10,
                    type: 'multiple-choice',
                    question: "'گوڵ' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Flower', image: '🌺', correct: true },
                        { id: 'opt2', text: 'Tree', image: '🌳', correct: false },
                        { id: 'opt3', text: 'Rock', image: '🪨', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson8',
            title: 'Social Media & Communication',
            icon: '💬',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'پەیام / نامە' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Message', image: '💬', correct: true },
                        { id: 'opt2', text: 'Email', image: '📧', correct: false },
                        { id: 'opt3', text: 'Name', image: '📛', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'پەیام', english: 'Message' },
                        { kurdish: 'پۆست', english: 'Post' },
                        { kurdish: 'لایک', english: 'Like' },
                        { kurdish: 'شێر (هاوبەشپێکردن)', english: 'Share' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "نامەیەکم بۆ بنێرە"',
                    sourceText: 'نامەیەکم بۆ بنێرە',
                    correctSentence: ['Send', 'me', 'a', 'message'],
                    options: ['Send', 'me', 'a', 'message', 'write', 'read', 'like']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "I will ___ your photo" (لایک)',
                    sentenceParts: ['I', 'will', '___', 'your', 'photo'],
                    correctOption: 'like',
                    options: ['like', 'share', 'delete', 'block']
                },
                {
                    id: 5,
                    type: 'multiple-choice',
                    question: "'پەیوەندی تەلەفۆنی' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Phone call', image: '📞', correct: true },
                        { id: 'opt2', text: 'Message', image: '💬', correct: false },
                        { id: 'opt3', text: 'Email', image: '📧', correct: false }
                    ]
                },
                {
                    id: 6,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'فۆڵۆکردن', english: 'Follow' },
                        { kurdish: 'بلۆککردن', english: 'Block' },
                        { kurdish: 'کۆمێنت', english: 'Comment' },
                        { kurdish: 'پڕۆفایل', english: 'Profile' }
                    ]
                },
                {
                    id: 7,
                    type: 'typing',
                    question: 'بە ئینگلیزی بنووسە: "ڤیدیۆ کۆڵ"',
                    correctAnswer: 'Video call',
                    hints: ['Video', 'call']
                },
                {
                    id: 8,
                    type: 'fill-blank',
                    question: 'Complete: "I ___ you on Instagram" (فۆڵۆ)',
                    sentenceParts: ['I', '___', 'you', 'on', 'Instagram'],
                    correctOption: 'followed',
                    options: ['followed', 'blocked', 'liked', 'shared']
                },
                {
                    id: 9,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "ئاگادارییەکانت (نۆتیفیکەیشنت) بپشکنە"',
                    sourceText: 'ئاگادارییەکانت بپشکنە',
                    correctSentence: ['Check', 'your', 'notification'],
                    options: ['Check', 'your', 'notification', 'write', 'read', 'messages']
                },
                {
                    id: 10,
                    type: 'multiple-choice',
                    question: "'گروپی گفتوگۆ' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Group chat', image: '👥', correct: true },
                        { id: 'opt2', text: 'Private message', image: '🔒', correct: false },
                        { id: 'opt3', text: 'Story', image: '📸', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson9',
            title: 'Sports & Hobbies',
            icon: '⚽',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'تۆپی پێ' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Football', image: '⚽', correct: true },
                        { id: 'opt2', text: 'Basketball', image: '🏀', correct: false },
                        { id: 'opt3', text: 'Tennis', image: '🎾', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'تۆپی پێ', english: 'Football' },
                        { kurdish: 'مەلەوانی', english: 'Swimming' },
                        { kurdish: 'ڕاکردن', english: 'Running' },
                        { kurdish: 'یاری', english: 'Game' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من حەزم لە یاری تۆپی پێیە"',
                    sourceText: 'من حەزم لە یاری تۆپی پێیە',
                    correctSentence: ['I', 'like', 'playing', 'football'],
                    options: ['I', 'like', 'playing', 'football', 'watching', 'reading']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "I play a ___ every week" (وەرزش)',
                    sentenceParts: ['I', 'play', 'a', '___', 'every', 'week'],
                    correctOption: 'sport',
                    options: ['sport', 'music', 'book', 'job']
                },
                {
                    id: 5,
                    type: 'multiple-choice',
                    question: "'تیم' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Team', image: '👥', correct: true },
                        { id: 'opt2', text: 'Help', image: '🤝', correct: false },
                        { id: 'opt3', text: 'Friend', image: '👫', correct: false }
                    ]
                }
            ]
        },
        {
            id: 'unit3-lesson10',
            title: 'Unit 3 Review',
            icon: '📝',
            exercises: [
                {
                    id: 1,
                    type: 'multiple-choice',
                    question: "'کەلتوور' بە ئینگلیزی چییە؟",
                    options: [
                        { id: 'opt1', text: 'Culture', image: '🎭', correct: true },
                        { id: 'opt2', text: 'Sport', image: '⚽', correct: false },
                        { id: 'opt3', text: 'Work', image: '💼', correct: false }
                    ]
                },
                {
                    id: 2,
                    type: 'match-pairs', question: 'Match the pairs',
                    pairs: [
                        { kurdish: 'چیا', english: 'Mountain' },
                        { kurdish: 'فڕۆکە', english: 'Airplane' },
                        { kurdish: 'مۆبایل', english: 'Mobile Phone' },
                        { kurdish: 'پەیام', english: 'Message' }
                    ]
                },
                {
                    id: 3,
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من سروشتم خۆشدەوێت"',
                    sourceText: 'من سروشتم خۆشدەوێت',
                    correctSentence: ['I', 'love', 'nature'],
                    options: ['I', 'love', 'nature', 'hate', 'my job']
                },
                {
                    id: 4,
                    type: 'fill-blank',
                    question: 'Complete: "My ___ hurts" (سەر)',
                    sentenceParts: ['My', '___', 'hurts'],
                    correctOption: 'head',
                    options: ['head', 'hand', 'foot', 'eye']
                },
                {
                    id: 5,
                    type: 'multiple-choice',
                    question: "پێداچوونەوە: 'فۆڵۆکردن' لە سۆشیال میدیا واتای چییە لە ئینگلیزیدا؟",
                    options: [
                        { id: 'opt1', text: 'Follow', image: '➕', correct: true },
                        { id: 'opt2', text: 'Block', image: '🚫', correct: false },
                        { id: 'opt3', text: 'Like', image: '❤️', correct: false }
                    ]
                }
            ]
        }
    ]
};
