import { Unit } from '../../types';

export const intermediateUnit1: Unit = {
    id: 'int-unit-1',
    title: 'یەکەمین یەکە - ئاستی ناوەندی',
    description: 'Speak like a native! This unit is 100% voice-based. No typing needed.',
    guidebook: {
        introduction: 'Welcome to the Intermediate level! Here you will practice real-life conversations in English using ONLY your voice. Every exercise uses Speech-to-Text (STT). Grab your microphone and get ready to speak naturally!',
        sections: [
            {
                id: 'int-overview',
                title: '📖 Conversational Speech',
                content: 'This unit focuses entirely on practical English speaking. You will physically speak to handle real situations like checking into a hotel, ordering food, visiting a doctor, interviewing for a job, and navigating an airport.'
            },
            {
                id: 'int-tips',
                title: '💡 Tips for Voice STT',
                content: 'Speak clearly into your device. Don\'t rush your words. Pay attention to polite expressions. You don\'t need to type anything!'
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
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the Receptionist using your voice:',
                    targetWord: 'Receptionist: "Good evening! Welcome. Do you have a reservation?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'yes i have a reservation',
                    acceptedAnswers: ['yes i have a reservation', 'yes i have a reservation under', 'i have a reservation', 'yes my name is', 'yes i do'],
                    speechLang: 'en-US',
                    image: '🏨'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Speak the most polite response:',
                    targetWord: 'Your room is on the 5th floor. Here is your key.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'thank you very much what time is breakfast',
                    acceptedAnswers: ['thank you very much what time is breakfast', 'thank you what time is breakfast', 'thanks what time is breakfast'],
                    speechLang: 'en-US',
                    image: '🗣️'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'من جێگام پاراستووە بۆ دوو شەو',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have a reservation for two nights',
                    acceptedAnswers: ['i have a reservation for two nights', 'i booked for two nights', 'i made a reservation for two nights'],
                    speechLang: 'en-US',
                    image: '🗣️'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "sea":',
                    targetWord: 'Could I get a room with a ___ view, please?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could i get a room with a sea view please',
                    acceptedAnswers: ['could i get a room with a sea view please', 'can i get a room with a sea view please', 'could i get a room with sea view please'],
                    speechLang: 'en-US',
                    image: '🌊'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Speak the definition of "check-out":',
                    targetWord: 'What does "check-out" mean at a hotel?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'the time you must leave',
                    acceptedAnswers: ['the time you must leave', 'the time you have to leave', 'when you must leave the hotel', 'the time you leave'],
                    speechLang: 'en-US',
                    image: '🕒'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا Wi-Fi لە ژوورەکەدا هەیە؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'is there wi fi in the room',
                    acceptedAnswers: ['is there wifi in the room', 'is there wi-fi in the room', 'do you have wifi in the room'],
                    speechLang: 'en-US',
                    image: '📶'
                },
                {
                    id: 7,
                    type: 'pronunciation',
                    question: 'Reply to the Receptionist using your voice:',
                    targetWord: 'We can upgrade you to a suite. Is that okay?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'that would be great thank you',
                    acceptedAnswers: ['that would be great thank you', 'that sounds wonderful', 'yes please', 'that is great thanks'],
                    speechLang: 'en-US',
                    image: '👩‍💼'
                },
                {
                    id: 8,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "extend":',
                    targetWord: 'I would like to ___ my stay for one night.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i would like to extend my stay for one night',
                    acceptedAnswers: ['i would like to extend my stay for one night', 'i want to extend my stay for one night'],
                    speechLang: 'en-US',
                    image: '📅'
                },
                {
                    id: 9,
                    type: 'pronunciation',
                    question: 'Ask the receptionist using your voice:',
                    targetWord: 'Ask for a wake-up call at 7 AM.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could i get a wake up call at 7 am',
                    acceptedAnswers: ['could i get a wake up call at 7 am', 'could i get a wake up call at seven a m', 'can i have a wake up call at seven'],
                    speechLang: 'en-US',
                    image: '⏰'
                },
                {
                    id: 10,
                    type: 'pronunciation',
                    question: 'Speak the most formal way to ask for towels:',
                    targetWord: 'Request extra towels politely.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'would it be possible to get some extra towels please',
                    acceptedAnswers: ['would it be possible to get some extra towels please', 'could i get some extra towels please', 'can i have some extra towels please'],
                    speechLang: 'en-US',
                    image: '🛁'
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
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the waiter using your voice:',
                    targetWord: 'Waiter: "Are you ready to order?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'yes i am ready to order',
                    acceptedAnswers: ['yes i am ready to order', 'yes i would like to order', 'yes i am ready', 'i am ready to order'],
                    speechLang: 'en-US',
                    image: '🧑‍🍳'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'دەمەوێت شتێکی بێ گۆشت داوا بکەم',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i would like to order something vegetarian',
                    acceptedAnswers: ['i would like to order something vegetarian', 'i want to order something vegetarian', 'i would like something vegetarian'],
                    speechLang: 'en-US',
                    image: '🥗'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Speak the meaning of this question:',
                    targetWord: '"How would you like your steak?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'how cooked do you want it',
                    acceptedAnswers: ['how cooked do you want it', 'what temperature do you want it cooked', 'how do you want it cooked', 'rare medium or well done'],
                    speechLang: 'en-US',
                    image: '🥩'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "bill":',
                    targetWord: 'Could we have the ___, please? We are ready to pay.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could we have the bill please we are ready to pay',
                    acceptedAnswers: ['could we have the bill please we are ready to pay', 'could we have the bill please'],
                    speechLang: 'en-US',
                    image: '🧾'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Reply using your voice:',
                    targetWord: 'The waiter brought chicken instead of fish.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'excuse me i think there has been a mistake',
                    acceptedAnswers: ['excuse me i think there has been a mistake', 'excuse me i ordered the fish', 'i am sorry i think there is a mistake'],
                    speechLang: 'en-US',
                    image: '🍗'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا ئەتوانن ئاوێکی تازەم بۆ بهێنن؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could you bring me a glass of water',
                    acceptedAnswers: ['could you bring me a glass of water', 'can you bring me a glass of water', 'could i have a glass of water'],
                    speechLang: 'en-US',
                    image: '💧'
                },
                {
                    id: 7,
                    type: 'pronunciation',
                    question: 'Speak the meaning of this phrase:',
                    targetWord: '"I have a food allergy"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'some foods make me sick',
                    acceptedAnswers: ['some foods make me sick', 'i get sick from some foods', 'i cannot eat some foods'],
                    speechLang: 'en-US',
                    image: '⚠️'
                },
                {
                    id: 8,
                    type: 'pronunciation',
                    question: 'Politely ask the waiter using your voice:',
                    targetWord: 'Ask for the menu.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'could i see the menu please',
                    acceptedAnswers: ['could i see the menu please', 'can i see the menu please', 'would you bring the menu please'],
                    speechLang: 'en-US',
                    image: '📖'
                },
                {
                    id: 9,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "allergic":',
                    targetWord: 'I am ___ to nuts, so please be careful.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am allergic to nuts so please be careful',
                    acceptedAnswers: ['i am allergic to nuts so please be careful', 'i am allergic to nuts'],
                    speechLang: 'en-US',
                    image: '🥜'
                },
                {
                    id: 10,
                    type: 'pronunciation',
                    question: 'Speak this compliment loudly:',
                    targetWord: 'Leave a big compliment for the chef.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'the food was absolutely delicious please give my compliments to the chef',
                    acceptedAnswers: ['the food was absolutely delicious please give my compliments to the chef', 'the food was delicious give my compliments to the chef'],
                    speechLang: 'en-US',
                    image: '👨‍🍳'
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
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the Doctor using your voice:',
                    targetWord: 'Doctor: "What symptoms are you experiencing?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have had a headache and fever',
                    acceptedAnswers: ['i have had a headache and fever', 'i have a headache and a fever', 'my head hurts and i have a fever'],
                    speechLang: 'en-US',
                    image: '👨‍⚕️'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'سێ ڕۆژە تاو و سەرئێشەم هەیە',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have had a fever and headache for three days',
                    acceptedAnswers: ['i have had a fever and headache for three days', 'i have had a headache and fever for 3 days', 'i am sick for 3 days'],
                    speechLang: 'en-US',
                    image: '🤒'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Speak the meaning aloud:',
                    targetWord: '"Take one pill twice a day." What does it mean?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'take one pill in the morning and one in the evening',
                    acceptedAnswers: ['take one pill in the morning and one in the evening', 'take two pills a day', 'one in the morning one in the evening'],
                    speechLang: 'en-US',
                    image: '💊'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "allergic":',
                    targetWord: 'I am ___ to penicillin, so I cannot take that medicine.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am allergic to penicillin so i cannot take that medicine',
                    acceptedAnswers: ['i am allergic to penicillin so i cannot take that medicine', 'i am allergic to penicillin'],
                    speechLang: 'en-US',
                    image: '🛑'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Ask the Doctor using your voice:',
                    targetWord: 'You need to ask when you can return to work.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'when can i go back to work',
                    acceptedAnswers: ['when can i go back to work', 'when can i return to work', 'when should i go back to work'],
                    speechLang: 'en-US',
                    image: '🏢'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا پێویستە دووبارە بگەڕێمەوە بۆ پشکنین؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'do i need to come back for a follow up',
                    acceptedAnswers: ['do i need to come back for a follow up', 'should i follow up', 'do i need another appointment'],
                    speechLang: 'en-US',
                    image: '📆'
                },
                {
                    id: 7,
                    type: 'pronunciation',
                    question: 'Speak the definition of this term:',
                    targetWord: '"Over-the-counter medicine"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'medicine you can buy without a prescription',
                    acceptedAnswers: ['medicine you can buy without a prescription', 'medicine without a prescription', 'you do not need a prescription for it'],
                    speechLang: 'en-US',
                    image: '🏥'
                },
                {
                    id: 8,
                    type: 'pronunciation',
                    question: 'Tell the doctor your symptoms:',
                    targetWord: 'Tell the doctor you had a sore throat for two days.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have had a sore throat for two days',
                    acceptedAnswers: ['i have had a sore throat for two days', 'my throat has been sore for two days', 'i got a sore throat two days ago'],
                    speechLang: 'en-US',
                    image: '🗣️'
                },
                {
                    id: 9,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "prescription":',
                    targetWord: 'The doctor wrote me a ___ for some pain medication.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'the doctor wrote me a prescription for some pain medication',
                    acceptedAnswers: ['the doctor wrote me a prescription for some pain medication', 'he wrote me a prescription'],
                    speechLang: 'en-US',
                    image: '📝'
                },
                {
                    id: 10,
                    type: 'pronunciation',
                    question: 'Speak the clearest sentence describing your symptoms:',
                    targetWord: 'Describe your sickness well.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have been feeling nauseous and lost my appetite',
                    acceptedAnswers: ['i have been feeling nauseous and lost my appetite', 'i feel nauseous and lost my appetite', 'i have no appetite and feel nauseous'],
                    speechLang: 'en-US',
                    image: '🤢'
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
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the Interviewer using your voice:',
                    targetWord: 'Interviewer: "Tell me a little about yourself."',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am a graduate with experience',
                    acceptedAnswers: ['i am a graduate with experience', 'my name is and i am a graduate', 'i have experience in this field'],
                    speechLang: 'en-US',
                    image: '👩‍💼'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'من پێنج ساڵ ئەزموونم هەیە لەم بوارەدا',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i have five years of experience in this field',
                    acceptedAnswers: ['i have five years of experience in this field', 'i got 5 years of experience in this field', 'i have 5 years experience'],
                    speechLang: 'en-US',
                    image: '📈'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Answer the classic interview question:',
                    targetWord: 'What is your greatest weakness?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i focus too much on details but i am working on it',
                    acceptedAnswers: ['i focus too much on details but i am working on it', 'i sometimes focus too much on details', 'i work too hard on details'],
                    speechLang: 'en-US',
                    image: '🎯'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "team":',
                    targetWord: 'I am a ___ player and I enjoy collaborating with others.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am a team player and i enjoy collaborating with others',
                    acceptedAnswers: ['i am a team player and i enjoy collaborating with others', 'i am a team player'],
                    speechLang: 'en-US',
                    image: '🤝'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Reply using your voice:',
                    targetWord: 'Interviewer: "What are your salary expectations?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am open to discussing a fair compensation',
                    acceptedAnswers: ['i am open to discussing a fair compensation', 'i am open to discuss a fair salary', 'what is the budget for this position'],
                    speechLang: 'en-US',
                    image: '💰'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'من دەتوانم لەژێر فشاردا باش کار بکەم',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i can work well under pressure',
                    acceptedAnswers: ['i can work well under pressure', 'i work well under pressure', 'i am good at working under pressure'],
                    speechLang: 'en-US',
                    image: '⏱️'
                },
                {
                    id: 7,
                    type: 'pronunciation',
                    question: 'Ask a strong question at the end of the interview:',
                    targetWord: 'Show interest in the company!',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'what does a typical day look like for someone in this role',
                    acceptedAnswers: ['what does a typical day look like for someone in this role', 'what does a typical day look like', 'can you tell me about a typical day'],
                    speechLang: 'en-US',
                    image: '❓'
                },
                {
                    id: 8,
                    type: 'pronunciation',
                    question: 'Thank the interviewer politely:',
                    targetWord: 'Say your goodbyes.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'thank you for your time i look forward to hearing from you',
                    acceptedAnswers: ['thank you for your time i look forward to hearing from you', 'thank you for your time', 'thanks for your time i look forward to hearing from you'],
                    speechLang: 'en-US',
                    image: '👋'
                },
                {
                    id: 9,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "excited":',
                    targetWord: 'I am very ___ about this opportunity.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am very excited about this opportunity',
                    acceptedAnswers: ['i am very excited about this opportunity', 'i am excited about this opportunity'],
                    speechLang: 'en-US',
                    image: '😄'
                },
                {
                    id: 10,
                    type: 'pronunciation',
                    question: 'Speak the meaning of this phrase:',
                    targetWord: '"I will follow up with you next week"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'the interviewer will contact you again next week',
                    acceptedAnswers: ['the interviewer will contact you again next week', 'they will contact me next week', 'i will get an email next week'],
                    speechLang: 'en-US',
                    image: '✉️'
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
                    id: 1,
                    type: 'pronunciation',
                    question: 'Reply to the Immigration Officer:',
                    targetWord: 'Officer: "What is the purpose of your visit?"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i am here on vacation for two weeks',
                    acceptedAnswers: ['i am here on vacation for two weeks', 'i am here for business', 'i am visiting family for three weeks', 'i am here for tourism'],
                    speechLang: 'en-US',
                    image: '👮'
                },
                {
                    id: 2,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'فڕۆکەکەم لە تێرمیناڵ B، دەروازەی ١٢ یە',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'my flight is at terminal b gate twelve',
                    acceptedAnswers: ['my flight is at terminal b gate twelve', 'my flight is at terminal b gate 12'],
                    speechLang: 'en-US',
                    image: '🛂'
                },
                {
                    id: 3,
                    type: 'pronunciation',
                    question: 'Speak the correct action to take:',
                    targetWord: 'Flight delayed 3 hours. What do you say?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'i need to ask about rebooking or compensation',
                    acceptedAnswers: ['i need to ask about rebooking or compensation', 'can i ask about rebooking', 'i want to ask about compensation'],
                    speechLang: 'en-US',
                    image: '⏳'
                },
                {
                    id: 4,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "baggage":',
                    targetWord: 'Excuse me, where is the ___ claim area?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'excuse me where is the baggage claim area',
                    acceptedAnswers: ['excuse me where is the baggage claim area', 'where is the baggage claim area'],
                    speechLang: 'en-US',
                    image: '🧳'
                },
                {
                    id: 5,
                    type: 'pronunciation',
                    question: 'Report your lost bag to the counter:',
                    targetWord: 'Your luggage is lost.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'my luggage did not arrive on the belt',
                    acceptedAnswers: ['my luggage did not arrive on the belt', 'i cannot find my suitcase', 'my bag is missing', 'my luggage is missing'],
                    speechLang: 'en-US',
                    image: '👜'
                },
                {
                    id: 6,
                    type: 'pronunciation',
                    question: 'Translate and speak in English:',
                    targetWord: 'ئایا دەتوانم جێگام لە فڕۆکەکەدا بگۆڕم؟',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'can i change my seat on the flight',
                    acceptedAnswers: ['can i change my seat on the flight', 'can i change my seat', 'could i change my seat on the plane'],
                    speechLang: 'en-US',
                    image: '💺'
                },
                {
                    id: 7,
                    type: 'pronunciation',
                    question: 'Speak the definition of this word:',
                    targetWord: '"Boarding pass"',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'the document that allows you to get on the airplane',
                    acceptedAnswers: ['the document that allows you to get on the airplane', 'the pass to get on the plane', 'your flight ticket'],
                    speechLang: 'en-US',
                    image: '🎫'
                },
                {
                    id: 8,
                    type: 'pronunciation',
                    question: 'Ask a worker using your voice:',
                    targetWord: 'Ask where Gate 15 is.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'excuse me could you tell me where gate 15 is',
                    acceptedAnswers: ['excuse me could you tell me where gate 15 is', 'excuse me could you tell me where gate fifteen is', 'where is gate 15 please'],
                    speechLang: 'en-US',
                    image: '🗺️'
                },
                {
                    id: 9,
                    type: 'pronunciation',
                    question: 'Complete the sentence aloud by adding "boarding":',
                    targetWord: 'Passengers are now ___ for Flight KR205.',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'passengers are now boarding for flight k r 2 0 5',
                    acceptedAnswers: ['passengers are now boarding for flight k r 205', 'passengers are now boarding for flight 205', 'passengers are now boarding'],
                    speechLang: 'en-US',
                    image: '🧍'
                },
                {
                    id: 10,
                    type: 'pronunciation',
                    question: 'Speak the meaning of this announcement:',
                    targetWord: '"This is the final call for Flight KR205." What does it mean?',
                    targetTranslation: '',
                    pronunciation: '',
                    expectedAnswer: 'this is the last chance to board',
                    acceptedAnswers: ['this is the last chance to board', 'it is the final chance to board', 'we are about to close the gate'],
                    speechLang: 'en-US',
                    image: '📢'
                }
            ]
        }
    ]
};
