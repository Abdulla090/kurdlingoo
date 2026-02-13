import { Unit } from '../../types';

export const intermediateUnit1: Unit = {
    id: 'int-unit-1',
    title: 'یەکەمین یەکە - ئاستی ناوەندی',
    description: 'Real-life conversations & challenging dialogue exercises',
    guidebook: {
        introduction: 'Welcome to the Intermediate level! Here you will practice real-life conversations in English. Each lesson focuses on a specific scenario you might encounter in daily life. You will build full sentences, respond to dialogue prompts, and handle challenging situations — all in English!',
        sections: [
            {
                id: 'int-overview',
                title: '📖 Intermediate Overview',
                content: 'This unit focuses on practical English conversations. You will learn how to handle real situations like checking into a hotel, ordering food, visiting a doctor, interviewing for a job, and navigating an airport.'
            },
            {
                id: 'int-tips',
                title: '💡 Tips for Success',
                content: 'Read each conversation carefully. Pay attention to polite expressions, formal vs informal language, and context clues. Try to think about what you would say in each situation before looking at the options.'
            }
        ],
        keyPhrases: [
            { english: 'I would like to...', kurdish: 'دەمەوێت...', pronunciation: 'I wood like too' },
            { english: 'Could you please...', kurdish: 'تکایە دەتوانیت...', pronunciation: 'Kud yoo pleez' },
            { english: 'I have a reservation', kurdish: 'جێگام پاراستووە', pronunciation: 'I hav uh rez-er-VAY-shun' },
            { english: 'How much does it cost?', kurdish: 'چەند دەکات؟', pronunciation: 'How much duz it kawst' },
            { english: 'I need help with...', kurdish: 'پێویستم بە یارمەتییە لەگەڵ...', pronunciation: 'I need help with' }
        ]
    },
    lessons: [
        // ===================== LESSON 1: Hotel Check-in =====================
        {
            id: 'int-u1-lesson1',
            title: 'Hotel Check-in',
            icon: '🏨',
            exercises: [
                {
                    type: 'roleplay-chat',
                    question: 'You arrive at a hotel. Complete the check-in conversation with the receptionist.',
                    scenario: 'Hotel Check-in',
                    chatMessages: [
                        { sender: 'ai', text: 'Good evening! Welcome to Grand Hotel. Do you have a reservation?', name: 'Receptionist', avatar: '👩‍💼' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['Yes, I have a reservation', 'Yes I have a reservation under', 'I have a reservation', 'Yes, my name is'],
                    keywordsRequired: ['reservation', 'yes']
                },
                {
                    type: 'multiple-choice',
                    question: 'The receptionist says: "Your room is on the 5th floor. Here is your key card." What is the most polite response?',
                    options: [
                        { text: 'Thank you very much. What time is breakfast?', correct: true },
                        { text: 'Give me the key.', correct: false },
                        { text: 'OK.', correct: false },
                        { text: 'I already know that.', correct: false }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من جێگام پاراستووە بۆ دوو شەو"',
                    sourceText: 'من جێگام پاراستووە بۆ دوو شەو',
                    correctSentence: ['I', 'have', 'a', 'reservation', 'for', 'two', 'nights'],
                    options: ['I', 'have', 'a', 'reservation', 'for', 'two', 'nights', 'room', 'three', 'morning']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete the sentence: "Could I get a room with a ___ view, please?"',
                    sentenceParts: ['Could I get a room with a', '___', 'view, please?'],
                    correctOption: 'sea',
                    options: ['sea', 'table', 'book', 'chair']
                },
                {
                    type: 'multiple-choice',
                    question: '"What time is check-out?" — What does "check-out" mean?',
                    options: [
                        { text: 'The time you must leave the hotel', correct: true },
                        { text: 'The time breakfast starts', correct: false },
                        { text: 'The price of the room', correct: false },
                        { text: 'The hotel address', correct: false }
                    ]
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "ئایا Wi-Fi لە ژوورەکەدا هەیە؟"',
                    sourceText: 'ئایا Wi-Fi لە ژوورەکەدا هەیە؟',
                    correctSentence: ['Is', 'there', 'Wi-Fi', 'in', 'the', 'room?'],
                    options: ['Is', 'there', 'Wi-Fi', 'in', 'the', 'room?', 'Where', 'has', 'hotel', 'lobby']
                },
                {
                    type: 'roleplay-chat',
                    question: 'The receptionist tells you there is a problem with your room. Respond politely.',
                    scenario: 'Room Issue',
                    chatMessages: [
                        { sender: 'ai', text: 'I\'m sorry, but the room you booked is not available right now. We can upgrade you to a suite at no extra charge. Would that be okay?', name: 'Receptionist', avatar: '👩‍💼' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['That would be great, thank you', 'Yes, that sounds wonderful', 'Sure, I appreciate that', 'That works for me, thanks'],
                    keywordsRequired: ['thank', 'yes']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I would like to ___ my stay for one more night."',
                    sentenceParts: ['I would like to', '___', 'my stay for one more night.'],
                    correctOption: 'extend',
                    options: ['extend', 'delete', 'forget', 'break']
                },
                {
                    type: 'typing',
                    question: 'Type in English: How do you ask for a wake-up call at 7 AM?',
                    correctAnswer: 'Could I get a wake-up call at 7 AM?',
                    hints: ['Could I get a', 'wake-up call', 'at 7 AM?']
                },
                {
                    type: 'multiple-choice',
                    question: 'Which phrase is the MOST formal way to request extra towels?',
                    options: [
                        { text: 'Would it be possible to get some extra towels, please?', correct: true },
                        { text: 'Give me towels.', correct: false },
                        { text: 'I want towels now.', correct: false },
                        { text: 'Towels!', correct: false }
                    ]
                }
            ]
        },

        // ===================== LESSON 2: Restaurant Ordering =====================
        {
            id: 'int-u1-lesson2',
            title: 'Restaurant Ordering',
            icon: '🍽️',
            exercises: [
                {
                    type: 'roleplay-chat',
                    question: 'You are at a restaurant. The waiter approaches your table. Start ordering.',
                    scenario: 'Restaurant Ordering',
                    chatMessages: [
                        { sender: 'ai', text: 'Good evening! Are you ready to order, or would you like a few more minutes?', name: 'Waiter', avatar: '🧑‍🍳' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['Yes, I am ready to order', 'I would like to order please', 'Yes, I\'d like to start with', 'Could I have'],
                    keywordsRequired: ['order', 'like']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "دەمەوێت شتێکی بێ گۆشت داوا بکەم"',
                    sourceText: 'دەمەوێت شتێکی بێ گۆشت داوا بکەم',
                    correctSentence: ['I', 'would', 'like', 'to', 'order', 'something', 'vegetarian'],
                    options: ['I', 'would', 'like', 'to', 'order', 'something', 'vegetarian', 'meat', 'drink', 'expensive']
                },
                {
                    type: 'multiple-choice',
                    question: 'The waiter asks: "How would you like your steak?" What does this mean?',
                    options: [
                        { text: 'How cooked do you want it (rare, medium, well-done)?', correct: true },
                        { text: 'What color plate do you want?', correct: false },
                        { text: 'How many steaks do you want?', correct: false },
                        { text: 'Do you like steak?', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Could we have the ___, please? We are ready to pay."',
                    sentenceParts: ['Could we have the', '___', ', please? We are ready to pay.'],
                    correctOption: 'bill',
                    options: ['bill', 'food', 'table', 'door']
                },
                {
                    type: 'roleplay-chat',
                    question: 'You received the wrong order. Politely tell the waiter.',
                    scenario: 'Wrong Order',
                    chatMessages: [
                        { sender: 'ai', text: 'Here is your grilled chicken with salad. Enjoy your meal!', name: 'Waiter', avatar: '🧑‍🍳' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['Excuse me, I think there has been a mistake', 'Sorry, but I ordered the fish', 'I\'m sorry, this isn\'t what I ordered', 'Excuse me, I believe I ordered something different'],
                    keywordsRequired: ['sorry', 'ordered']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "ئایا ئەتوانن ئاوێکی تازەم بۆ بهێنن؟"',
                    sourceText: 'ئایا ئەتوانن ئاوێکی تازەم بۆ بهێنن؟',
                    correctSentence: ['Could', 'you', 'bring', 'me', 'a', 'glass', 'of', 'water?'],
                    options: ['Could', 'you', 'bring', 'me', 'a', 'glass', 'of', 'water?', 'give', 'take', 'cup', 'milk']
                },
                {
                    type: 'multiple-choice',
                    question: 'What does "I have a food allergy" mean?',
                    options: [
                        { text: 'Some foods make me sick and I cannot eat them', correct: true },
                        { text: 'I do not like the food', correct: false },
                        { text: 'The food is too expensive', correct: false },
                        { text: 'I am not hungry', correct: false }
                    ]
                },
                {
                    type: 'typing',
                    question: 'Type in English: How do you politely ask for the menu?',
                    correctAnswer: 'Could I see the menu, please?',
                    hints: ['Could I', 'see the menu', 'please?']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I am ___ to nuts, so please be careful."',
                    sentenceParts: ['I am', '___', 'to nuts, so please be careful.'],
                    correctOption: 'allergic',
                    options: ['allergic', 'happy', 'friendly', 'going']
                },
                {
                    type: 'multiple-choice',
                    question: 'Which is the correct way to leave a compliment about the food?',
                    options: [
                        { text: 'The food was absolutely delicious! Please give my compliments to the chef.', correct: true },
                        { text: 'The food is OK I guess.', correct: false },
                        { text: 'I ate it.', correct: false },
                        { text: 'Chef, come here!', correct: false }
                    ]
                }
            ]
        },

        // ===================== LESSON 3: Doctor's Visit =====================
        {
            id: 'int-u1-lesson3',
            title: "Doctor's Visit",
            icon: '🏥',
            exercises: [
                {
                    type: 'roleplay-chat',
                    question: 'You are at the doctor\'s office. The doctor asks what is wrong. Describe your symptoms.',
                    scenario: "Doctor's Office",
                    chatMessages: [
                        { sender: 'ai', text: 'Hello! What brings you in today? Can you tell me what symptoms you have been experiencing?', name: 'Doctor', avatar: '👨‍⚕️' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['I have had a headache and fever for three days', 'I have been feeling sick with a sore throat', 'I have been having stomach pain since yesterday', 'I feel dizzy and I have a cough'],
                    keywordsRequired: ['have', 'feel']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "سێ ڕۆژە تاو و سەرئێشەم هەیە"',
                    sourceText: 'سێ ڕۆژە تاو و سەرئێشەم هەیە',
                    correctSentence: ['I', 'have', 'had', 'a', 'fever', 'and', 'headache', 'for', 'three', 'days'],
                    options: ['I', 'have', 'had', 'a', 'fever', 'and', 'headache', 'for', 'three', 'days', 'two', 'cold', 'arm']
                },
                {
                    type: 'multiple-choice',
                    question: 'The doctor says: "I\'m going to prescribe you some antibiotics. Take one pill twice a day." What should you do?',
                    options: [
                        { text: 'Take one antibiotic pill in the morning and one in the evening', correct: true },
                        { text: 'Take two pills at once in the morning', correct: false },
                        { text: 'Take one pill only when you feel sick', correct: false },
                        { text: 'Do not take any pills', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I am ___ to penicillin, so I cannot take that medicine."',
                    sentenceParts: ['I am', '___', 'to penicillin, so I cannot take that medicine.'],
                    correctOption: 'allergic',
                    options: ['allergic', 'addicted', 'attracted', 'attached']
                },
                {
                    type: 'roleplay-chat',
                    question: 'The doctor recommends rest. Ask about when you can return to work.',
                    scenario: 'Recovery Questions',
                    chatMessages: [
                        { sender: 'ai', text: 'You have the flu. I recommend you stay home and rest for at least a week. Drink plenty of fluids.', name: 'Doctor', avatar: '👨‍⚕️' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['When can I go back to work?', 'How long until I recover?', 'Will I need a sick note for my employer?', 'Should I come back for a follow-up?'],
                    keywordsRequired: ['when', 'can']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "ئایا پێویستە دووبارە بگەڕێمەوە بۆ پشکنین؟"',
                    sourceText: 'ئایا پێویستە دووبارە بگەڕێمەوە بۆ پشکنین؟',
                    correctSentence: ['Do', 'I', 'need', 'to', 'come', 'back', 'for', 'a', 'follow-up?'],
                    options: ['Do', 'I', 'need', 'to', 'come', 'back', 'for', 'a', 'follow-up?', 'go', 'leave', 'stay', 'appointment']
                },
                {
                    type: 'multiple-choice',
                    question: 'What does "over-the-counter medicine" mean?',
                    options: [
                        { text: 'Medicine you can buy without a prescription', correct: true },
                        { text: 'Medicine that is on sale', correct: false },
                        { text: 'Medicine you get only in hospitals', correct: false },
                        { text: 'Medicine from another country', correct: false }
                    ]
                },
                {
                    type: 'typing',
                    question: 'Type in English: Tell the doctor you have had a sore throat for two days.',
                    correctAnswer: 'I have had a sore throat for two days.',
                    hints: ['I have had', 'a sore throat', 'for two days']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "The doctor wrote me a ___ for some pain medication."',
                    sentenceParts: ['The doctor wrote me a', '___', 'for some pain medication.'],
                    correctOption: 'prescription',
                    options: ['prescription', 'letter', 'story', 'recipe']
                },
                {
                    type: 'multiple-choice',
                    question: 'Which sentence correctly describes your symptoms?',
                    options: [
                        { text: 'I have been feeling nauseous and I lost my appetite since yesterday.', correct: true },
                        { text: 'My stomach is angry at me since morning.', correct: false },
                        { text: 'I have a broken appetite from yesterday.', correct: false },
                        { text: 'Food does not want me today.', correct: false }
                    ]
                }
            ]
        },

        // ===================== LESSON 4: Job Interview =====================
        {
            id: 'int-u1-lesson4',
            title: 'Job Interview',
            icon: '💼',
            exercises: [
                {
                    type: 'roleplay-chat',
                    question: 'You are in a job interview. The interviewer asks you to introduce yourself.',
                    scenario: 'Job Interview',
                    chatMessages: [
                        { sender: 'ai', text: 'Welcome! Please take a seat. So, tell me a little about yourself and why you are interested in this position.', name: 'Interviewer', avatar: '👩‍💼' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['Thank you. I am a graduate with experience in', 'I have been working in this field for', 'My name is and I have years of experience', 'I am passionate about this role because'],
                    keywordsRequired: ['experience', 'I']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من پێنج ساڵ ئەزموونم هەیە لەم بوارەدا"',
                    sourceText: 'من پێنج ساڵ ئەزموونم هەیە لەم بوارەدا',
                    correctSentence: ['I', 'have', 'five', 'years', 'of', 'experience', 'in', 'this', 'field'],
                    options: ['I', 'have', 'five', 'years', 'of', 'experience', 'in', 'this', 'field', 'three', 'job', 'company', 'like']
                },
                {
                    type: 'multiple-choice',
                    question: '"What is your greatest weakness?" — What is the BEST way to answer this common interview question?',
                    options: [
                        { text: 'I sometimes focus too much on details, but I am working on managing my time better.', correct: true },
                        { text: 'I have no weaknesses.', correct: false },
                        { text: 'I am always late to work.', correct: false },
                        { text: 'I do not like working with other people.', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I am a ___ player and I enjoy collaborating with others."',
                    sentenceParts: ['I am a', '___', 'player and I enjoy collaborating with others.'],
                    correctOption: 'team',
                    options: ['team', 'game', 'ball', 'solo']
                },
                {
                    type: 'roleplay-chat',
                    question: 'The interviewer asks about your salary expectations.',
                    scenario: 'Salary Discussion',
                    chatMessages: [
                        { sender: 'ai', text: 'The position comes with competitive benefits. What are your salary expectations for this role?', name: 'Interviewer', avatar: '👩‍💼' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['Based on my experience and the market rate, I would expect', 'I am open to discussing a fair compensation', 'I believe a salary in the range of', 'Could you share the budget for this position?'],
                    keywordsRequired: ['salary', 'experience']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "من دەتوانم لەژێر فشاردا باش کار بکەم"',
                    sourceText: 'من دەتوانم لەژێر فشاردا باش کار بکەم',
                    correctSentence: ['I', 'can', 'work', 'well', 'under', 'pressure'],
                    options: ['I', 'can', 'work', 'well', 'under', 'pressure', 'over', 'badly', 'play', 'without']
                },
                {
                    type: 'multiple-choice',
                    question: 'At the end of an interview, which question shows genuine interest in the company?',
                    options: [
                        { text: 'What does a typical day look like for someone in this role?', correct: true },
                        { text: 'How many vacation days do I get?', correct: false },
                        { text: 'Can I leave early on Fridays?', correct: false },
                        { text: 'When do I start?', correct: false }
                    ]
                },
                {
                    type: 'typing',
                    question: 'Type in English: Thank the interviewer at the end of the interview.',
                    correctAnswer: 'Thank you for your time. I look forward to hearing from you.',
                    hints: ['Thank you for your time', 'I look forward to', 'hearing from you']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "I am very ___ about this opportunity and eager to contribute."',
                    sentenceParts: ['I am very', '___', 'about this opportunity and eager to contribute.'],
                    correctOption: 'excited',
                    options: ['excited', 'bored', 'confused', 'scared']
                },
                {
                    type: 'multiple-choice',
                    question: 'What does "I will follow up with you next week" mean in an interview context?',
                    options: [
                        { text: 'The interviewer will contact you again next week with updates', correct: true },
                        { text: 'You need to follow the interviewer home', correct: false },
                        { text: 'The job starts next week', correct: false },
                        { text: 'You failed the interview', correct: false }
                    ]
                }
            ]
        },

        // ===================== LESSON 5: Airport & Immigration =====================
        {
            id: 'int-u1-lesson5',
            title: 'Airport & Immigration',
            icon: '✈️',
            exercises: [
                {
                    type: 'roleplay-chat',
                    question: 'You are at immigration control. The officer asks you questions. Answer them.',
                    scenario: 'Immigration Control',
                    chatMessages: [
                        { sender: 'ai', text: 'Passport please. What is the purpose of your visit, and how long will you be staying?', name: 'Immigration Officer', avatar: '👮' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['I am here on vacation for two weeks', 'I am visiting for tourism, staying for ten days', 'I am here for business, I will stay for one week', 'I am visiting family for three weeks'],
                    keywordsRequired: ['here', 'for']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "رێچکەی بالاڕۆکەم لەلایەلای B، دەروازەی ١٢ ـیە"',
                    sourceText: 'ئەم فڕۆکەیە لە تێرمیناڵ B، دەروازەی ١٢ یە',
                    correctSentence: ['My', 'flight', 'is', 'at', 'Terminal', 'B,', 'Gate', '12'],
                    options: ['My', 'flight', 'is', 'at', 'Terminal', 'B,', 'Gate', '12', 'A,', '7', 'bus', 'train', 'car']
                },
                {
                    type: 'multiple-choice',
                    question: '"Your flight has been delayed by 3 hours." What should you do?',
                    options: [
                        { text: 'Go to the airline\'s information desk and ask about rebooking or compensation.', correct: true },
                        { text: 'Leave the airport immediately.', correct: false },
                        { text: 'Ignore the announcement and go to the gate.', correct: false },
                        { text: 'Start arguing loudly at the counter.', correct: false }
                    ]
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Excuse me, where is the ___ claim area? I need to pick up my suitcase."',
                    sentenceParts: ['Excuse me, where is the', '___', 'claim area? I need to pick up my suitcase.'],
                    correctOption: 'baggage',
                    options: ['baggage', 'ticket', 'passport', 'boarding']
                },
                {
                    type: 'roleplay-chat',
                    question: 'Your luggage is lost. Talk to the airline desk to report it.',
                    scenario: 'Lost Luggage',
                    chatMessages: [
                        { sender: 'ai', text: 'Hello, how can I help you today?', name: 'Airline Staff', avatar: '👩‍✈️' },
                        { sender: 'user', text: '', name: 'You', avatar: '🧑' }
                    ],
                    acceptableResponses: ['My luggage did not arrive on the belt', 'I cannot find my suitcase from flight', 'My baggage seems to be missing', 'I have been waiting but my bag has not come'],
                    keywordsRequired: ['luggage', 'missing']
                },
                {
                    type: 'sentence-builder',
                    question: 'بە ئینگلیزی بنووسە: "ئایا دەتوانم جێگام لە فڕۆکەکەدا بگۆڕم؟"',
                    sourceText: 'ئایا دەتوانم جێگام لە فڕۆکەکەدا بگۆڕم؟',
                    correctSentence: ['Can', 'I', 'change', 'my', 'seat', 'on', 'the', 'flight?'],
                    options: ['Can', 'I', 'change', 'my', 'seat', 'on', 'the', 'flight?', 'buy', 'sell', 'take', 'bus', 'room']
                },
                {
                    type: 'multiple-choice',
                    question: 'What does "boarding pass" mean?',
                    options: [
                        { text: 'The document that allows you to get on the airplane', correct: true },
                        { text: 'A type of passport', correct: false },
                        { text: 'A receipt from a restaurant', correct: false },
                        { text: 'A hotel key card', correct: false }
                    ]
                },
                {
                    type: 'typing',
                    question: 'Type in English: Ask someone at the airport where Gate 15 is.',
                    correctAnswer: 'Excuse me, could you tell me where Gate 15 is?',
                    hints: ['Excuse me', 'could you tell me', 'where Gate 15 is?']
                },
                {
                    type: 'fill-blank',
                    question: 'Complete: "Passengers are now ___ for Flight KR205 to London."',
                    sentenceParts: ['Passengers are now', '___', 'for Flight KR205 to London.'],
                    correctOption: 'boarding',
                    options: ['boarding', 'flying', 'driving', 'swimming']
                },
                {
                    type: 'multiple-choice',
                    question: 'The announcement says: "This is the final call for Flight KR205." What does this mean?',
                    options: [
                        { text: 'This is the last chance to board — they are about to close the gate.', correct: true },
                        { text: 'The flight has been cancelled.', correct: false },
                        { text: 'You need to call someone about the flight.', correct: false },
                        { text: 'The flight will depart tomorrow.', correct: false }
                    ]
                }
            ]
        }
    ]
};
