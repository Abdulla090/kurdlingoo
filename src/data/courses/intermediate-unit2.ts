import { Unit } from '../../types';

export const intermediateUnit2: Unit = {
    id: 'int-unit-2',
    title: 'یەکەی دووەم - گفتوگۆی ڕۆژانە',
    description: 'Master casual conversations, making friends, and social situations using only your voice!',
    guidebook: {
        introduction: 'In Unit 2, we focus on casual, everyday roleplaying. You will use your voice to meet new people, order coffee, ask for directions, and make plans! Speak naturally and confidently.',
        sections: [
            {
                id: 'int2-overview',
                title: '🗣️ Casual Socializing',
                content: 'This unit prepares you for relaxed, native-like interactions. Rather than formal settings like a hospital or interview, you are out in the real world making friends and enjoying the city.'
            },
            {
                id: 'int2-tips',
                title: '💡 Small Talk Tips',
                content: 'Small talk is essential in English. Pay attention to friendly greetings ("How is it going?") and polite responses ("I am doing great, thanks!"). Use your voice clearly.'
            }
        ],
        keyPhrases: [
            { english: 'How is it going?', kurdish: 'چۆن دەڕوات؟ (چۆنی)', pronunciation: 'How iz it go-ing' },
            { english: 'What do you like to do?', kurdish: 'حەزت لە چییە بیکەیت؟', pronunciation: 'Wuht do yoo like too doo' },
            { english: 'Can you show me on the map?', kurdish: 'دەتوانیت لەسەر نەخشەکە پیشانم بدەیت؟', pronunciation: 'Can yoo show mee on the map' },
            { english: 'Are you free this weekend?', kurdish: 'ئەم کۆتایی هەفتەیە کاتت هەیە؟', pronunciation: 'Ar yoo free this week-end' },
            { english: 'I will take a large coffee.', kurdish: 'قاوەیەکی گەورە دەبەم.', pronunciation: 'I wil take a larj kaw-fee' }
        ]
    },
    lessons: [
        // ===================== LESSON 1: Meeting New Friends =====================
        {
            id: 'int-u2-lesson1',
            title: 'Meeting New Friends',
            icon: '👋',
            exercises: [
                {
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the friendly stranger:',
                    targetWord: 'Stranger: "Hi there! I don\'t think we\'ve met. I\'m Sarah."',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'hi sarah nice to meet you i am alex',
                    acceptedAnswers: ['hi sarah nice to meet you i am alex', 'nice to meet you my name is alex', 'hello sarah nice to meet you', 'hi nice to meet you'],
                    speechLang: 'en-US',
                    image: '🤝'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا خەڵکی ئێرەیت؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'are you from around here',
                    acceptedAnswers: ['are you from around here', 'are you from here', 'do you live around here'],
                    speechLang: 'en-US',
                    image: '🌍'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Ask about their hobbies:',
                    targetWord: 'Ask Sarah what she does for fun.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'what do you like to do in your free time',
                    acceptedAnswers: ['what do you like to do in your free time', 'what do you do for fun', 'what are your hobbies'],
                    speechLang: 'en-US',
                    image: '🎨'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Respond to: "I love hiking. How about you?"',
                    targetWord: 'Tell her you like reading books.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i really enjoy reading books',
                    acceptedAnswers: ['i really enjoy reading books', 'i like reading books', 'i love reading books', 'i read books'],
                    speechLang: 'en-US',
                    image: '📚'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Complete the casual greeting aloud by adding "going":',
                    targetWord: 'Hey man! How is it ___?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'hey man how is it going',
                    acceptedAnswers: ['hey man how is it going', 'how is it going'],
                    speechLang: 'en-US',
                    image: '😎'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'زۆر خۆشحاڵبووم بە بینینت',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'it was really nice meeting you',
                    acceptedAnswers: ['it was really nice meeting you', 'it was great meeting you', 'nice meeting you'],
                    speechLang: 'en-US',
                    image: '👋'
                }
            ]
        },

        // ===================== LESSON 2: Coffee Shop Chat =====================
        {
            id: 'int-u2-lesson2',
            title: 'Coffee Shop Chat',
            icon: '☕',
            exercises: [
                {
                    id: 1,
                    type: 'pronunciation',
                    question: 'Order your coffee using your voice:',
                    targetWord: 'Barista: "Hi! What can I get for you today?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'can i get a large cappuccino please',
                    acceptedAnswers: ['can i get a large cappuccino please', 'i would like a large cappuccino please', 'a large cappuccino please', 'id like a large cappuccino'],
                    speechLang: 'en-US',
                    image: '☕'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا شیری باوییتان (Almond milk) هەیە؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'do you have almond milk',
                    acceptedAnswers: ['do you have almond milk', 'do you serve almond milk', 'can i get it with almond milk'],
                    speechLang: 'en-US',
                    image: '🥛'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Reply to the Barista:',
                    targetWord: 'Barista: "Is that for here or to go?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i will have it to go please',
                    acceptedAnswers: ['i will have it to go please', 'to go please', 'for here please', 'i will drink it here'],
                    speechLang: 'en-US',
                    image: '🚶‍♂️'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Ask for the Wi-Fi password:',
                    targetWord: 'You want to connect your laptop.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'excuse me what is the wi fi password',
                    acceptedAnswers: ['excuse me what is the wifi password', 'what is the wi-fi password', 'could you tell me the wifi password'],
                    speechLang: 'en-US',
                    image: '📶'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "pastries":',
                    targetWord: 'Do you have any fresh ___ today?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'do you have any fresh pastries today',
                    acceptedAnswers: ['do you have any fresh pastries today', 'do you sell pastries', 'any fresh pastries'],
                    speechLang: 'en-US',
                    image: '🥐'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Pay with a card:',
                    targetWord: 'Tell them you want to pay by credit card.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'can i pay with a card',
                    acceptedAnswers: ['can i pay with a card', 'i will pay by card', 'do you take credit cards'],
                    speechLang: 'en-US',
                    image: '💳'
                }
            ]
        },

        // ===================== LESSON 3: Asking for Directions =====================
        {
            id: 'int-u2-lesson3',
            title: 'Asking for Directions',
            icon: '🗺️',
            exercises: [
                {
                    id: 1,
                    type: 'pronunciation',
                    question: 'Politely stop a stranger:',
                    targetWord: 'You are lost in the city.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'excuse me could you help me please',
                    acceptedAnswers: ['excuse me could you help me please', 'excuse me can you help me', 'sorry to bother you can you help me'],
                    speechLang: 'en-US',
                    image: '🚶‍♂️'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'من بەدوای وێستگەی شەمەندەفەرەکەدا دەگەڕێم',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am looking for the train station',
                    acceptedAnswers: ['i am looking for the train station', 'where is the train station', 'i need to find the train station'],
                    speechLang: 'en-US',
                    image: '🚆'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "blocks":',
                    targetWord: 'Just go straight for two ___ and turn left.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'just go straight for two blocks and turn left',
                    acceptedAnswers: ['just go straight for two blocks and turn left', 'go straight for two blocks'],
                    speechLang: 'en-US',
                    image: '🏙️'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Ask how long it takes:',
                    targetWord: 'You need to know if it is far.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'is it far from here',
                    acceptedAnswers: ['is it far from here', 'how long does it take to walk there', 'how far is it'],
                    speechLang: 'en-US',
                    image: '⏱️'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Ask them to point on the map:',
                    targetWord: 'You have a map on your phone.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could you show me on the map',
                    acceptedAnswers: ['could you show me on the map', 'can you show me on my phone', 'please point it on the map'],
                    speechLang: 'en-US',
                    image: '📱'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'زۆر سوپاس بۆ یارمەتییەکەت',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'thank you so much for your help',
                    acceptedAnswers: ['thank you so much for your help', 'thanks a lot for your help', 'i appreciate your help'],
                    speechLang: 'en-US',
                    image: '🙏'
                }
            ]
        },

        // ===================== LESSON 4: Shopping & Bargaining =====================
        {
            id: 'int-u2-lesson4',
            title: 'Shopping & Bargaining',
            icon: '🛍️',
            exercises: [
                {
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the shop assistant:',
                    targetWord: 'Assistant: "Do you need any help finding something?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'no thanks i am just looking',
                    acceptedAnswers: ['no thanks i am just looking', 'no thank you i am just browsing', 'i am just looking around thanks'],
                    speechLang: 'en-US',
                    image: '👀'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا ئەمەتان بە قەبارەی مامناوەند هەیە؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'do you have this in a medium',
                    acceptedAnswers: ['do you have this in a medium', 'do you have this in medium size', 'do you have a medium'],
                    speechLang: 'en-US',
                    image: '👕'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Ask to try it on:',
                    targetWord: 'You want to wear the shirt to see if it fits.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'can i try this on please',
                    acceptedAnswers: ['can i try this on please', 'where is the fitting room', 'i would like to try this on'],
                    speechLang: 'en-US',
                    image: '🧥'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Politely bargain for a better price:',
                    targetWord: 'Assistant: "This jacket is 150 dollars."',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'that is a bit too expensive can you give me a discount',
                    acceptedAnswers: ['that is a bit too expensive can you give me a discount', 'can you lower the price', 'is there any discount'],
                    speechLang: 'en-US',
                    image: '💵'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "receipt":',
                    targetWord: 'Can I get a ___ just in case I need to return it?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'can i get a receipt just in case i need to return it',
                    acceptedAnswers: ['can i get a receipt just in case i need to return it', 'can i have the receipt please'],
                    speechLang: 'en-US',
                    image: '🧾'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'سپاس، من ئەمە دەبەم',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'thanks i will take it',
                    acceptedAnswers: ['thanks i will take it', 'thank you i will buy this', 'i will take this one'],
                    speechLang: 'en-US',
                    image: '🛍️'
                }
            ]
        },

        // ===================== LESSON 5: Making Plans =====================
        {
            id: 'int-u2-lesson5',
            title: 'Making Plans',
            icon: '📅',
            exercises: [
                {
                    id: 1,
                    type: 'pronunciation',
                    question: 'Invite a friend out:',
                    targetWord: 'Ask them if they are busy on Friday night.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'are you doing anything this friday night',
                    acceptedAnswers: ['are you doing anything this friday night', 'are you busy on friday night', 'do you have plans for friday night'],
                    speechLang: 'en-US',
                    image: '🌙'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'حەزت لێیە بڕۆین بۆ بینینی فیلمێک؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'do you want to go see a movie',
                    acceptedAnswers: ['do you want to go see a movie', 'would you like to see a movie', 'let us go watch a movie'],
                    speechLang: 'en-US',
                    image: '🍿'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Reply to their suggestion:',
                    targetWord: 'Friend: "How about we meet at 7 PM?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'seven sounds perfect to me',
                    acceptedAnswers: ['seven sounds perfect to me', 'seven p m is great', 'that works for me', 'sounds good'],
                    speechLang: 'en-US',
                    image: '⏰'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'You are running late. Leave a voice message:',
                    targetWord: 'Tell them you will be 10 minutes late.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'hey i am really sorry but i will be ten minutes late',
                    acceptedAnswers: ['hey i am really sorry but i will be ten minutes late', 'i am running ten minutes late', 'i will be there in ten minutes'],
                    speechLang: 'en-US',
                    image: '🏃‍♂️'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "catch":',
                    targetWord: 'It was so great to ___ up with you today!',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'it was so great to catch up with you today',
                    acceptedAnswers: ['it was so great to catch up with you today', 'great to catch up with you'],
                    speechLang: 'en-US',
                    image: '☕'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'دواتر نامەت بۆ دەنێرم',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i will text you later',
                    acceptedAnswers: ['i will text you later', 'i will message you later', 'ill text you later'],
                    speechLang: 'en-US',
                    image: '📱'
                }
            ]
        }
    ]
};
