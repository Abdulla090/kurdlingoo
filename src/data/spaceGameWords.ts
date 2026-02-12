// Space Typing Game — Word & Phrase Data

export interface SpaceWord {
    id: string;
    text: string;
    translation: string;
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'word' | 'sentence';
}

export interface GameLevel {
    id: string;
    name: string;
    nameKu: string;
    words: SpaceWord[];
    speed: number;
    spawnRate: number;
    description: string;
    descriptionKu: string;
}

const easyWords: SpaceWord[] = [
    { id: 'e1', text: 'Hello', translation: 'سڵاو', difficulty: 'easy', type: 'word' },
    { id: 'e2', text: 'Water', translation: 'ئاو', difficulty: 'easy', type: 'word' },
    { id: 'e3', text: 'Bread', translation: 'نان', difficulty: 'easy', type: 'word' },
    { id: 'e4', text: 'Apple', translation: 'سێو', difficulty: 'easy', type: 'word' },
    { id: 'e5', text: 'Book', translation: 'پەرتووک', difficulty: 'easy', type: 'word' },
    { id: 'e6', text: 'Cat', translation: 'پشیلە', difficulty: 'easy', type: 'word' },
    { id: 'e7', text: 'Dog', translation: 'سەگ', difficulty: 'easy', type: 'word' },
    { id: 'e8', text: 'Red', translation: 'سوور', difficulty: 'easy', type: 'word' },
    { id: 'e9', text: 'Blue', translation: 'شین', difficulty: 'easy', type: 'word' },
    { id: 'e10', text: 'Yes', translation: 'بەڵێ', difficulty: 'easy', type: 'word' },
    { id: 'e11', text: 'No', translation: 'نەخێر', difficulty: 'easy', type: 'word' },
    { id: 'e12', text: 'Boy', translation: 'کوڕ', difficulty: 'easy', type: 'word' },
    { id: 'e13', text: 'Girl', translation: 'کچ', difficulty: 'easy', type: 'word' },
    { id: 'e14', text: 'Man', translation: 'پیاو', difficulty: 'easy', type: 'word' },
    { id: 'e15', text: 'Sun', translation: 'خۆر', difficulty: 'easy', type: 'word' },
    { id: 'e16', text: 'Moon', translation: 'مانگ', difficulty: 'easy', type: 'word' },
    { id: 'e17', text: 'House', translation: 'ماڵ', difficulty: 'easy', type: 'word' },
    { id: 'e18', text: 'Food', translation: 'خواردن', difficulty: 'easy', type: 'word' },
    { id: 'e19', text: 'Milk', translation: 'شیر', difficulty: 'easy', type: 'word' },
    { id: 'e20', text: 'Tea', translation: 'چا', difficulty: 'easy', type: 'word' },
    { id: 'e21', text: 'Door', translation: 'دەرگا', difficulty: 'easy', type: 'word' },
    { id: 'e22', text: 'Name', translation: 'ناو', difficulty: 'easy', type: 'word' },
    { id: 'e23', text: 'Eye', translation: 'چاو', difficulty: 'easy', type: 'word' },
    { id: 'e24', text: 'Fire', translation: 'ئاگر', difficulty: 'easy', type: 'word' },
    { id: 'e25', text: 'Rain', translation: 'باران', difficulty: 'easy', type: 'word' },
    { id: 'e26', text: 'Snow', translation: 'بەفر', difficulty: 'easy', type: 'word' },
    { id: 'e27', text: 'Hand', translation: 'دەست', difficulty: 'easy', type: 'word' },
    { id: 'e28', text: 'Head', translation: 'سەر', difficulty: 'easy', type: 'word' },
    { id: 'e29', text: 'Tree', translation: 'دار', difficulty: 'easy', type: 'word' },
    { id: 'e30', text: 'Bird', translation: 'باڵندە', difficulty: 'easy', type: 'word' },
    { id: 'e31', text: 'Fish', translation: 'ماسی', difficulty: 'easy', type: 'word' },
    { id: 'e32', text: 'Rice', translation: 'برنج', difficulty: 'easy', type: 'word' },
    { id: 'e33', text: 'Egg', translation: 'هێلکە', difficulty: 'easy', type: 'word' },
    { id: 'e34', text: 'Salt', translation: 'خوێ', difficulty: 'easy', type: 'word' },
    { id: 'e35', text: 'Road', translation: 'ڕێگا', difficulty: 'easy', type: 'word' },
    { id: 'e36', text: 'Star', translation: 'ئەستێرە', difficulty: 'easy', type: 'word' },
    { id: 'e37', text: 'Wind', translation: 'با', difficulty: 'easy', type: 'word' },
    { id: 'e38', text: 'Gold', translation: 'زێڕ', difficulty: 'easy', type: 'word' },
    { id: 'e39', text: 'Iron', translation: 'ئاسن', difficulty: 'easy', type: 'word' },
    { id: 'e40', text: 'Nose', translation: 'لووت', difficulty: 'easy', type: 'word' },
    { id: 'e41', text: 'Ear', translation: 'گوێ', difficulty: 'easy', type: 'word' },
    { id: 'e42', text: 'Foot', translation: 'پێ', difficulty: 'easy', type: 'word' },
    { id: 'e43', text: 'Knee', translation: 'ئەژنۆ', difficulty: 'easy', type: 'word' },
    { id: 'e44', text: 'Back', translation: 'پشت', difficulty: 'easy', type: 'word' },
    { id: 'e45', text: 'Oil', translation: 'ڕۆن', difficulty: 'easy', type: 'word' },
    { id: 'e46', text: 'Meat', translation: 'گۆشت', difficulty: 'easy', type: 'word' },
    { id: 'e47', text: 'Soup', translation: 'شۆربا', difficulty: 'easy', type: 'word' },
    { id: 'e48', text: 'Cake', translation: 'کێک', difficulty: 'easy', type: 'word' },
];

const mediumWords: SpaceWord[] = [
    { id: 'm1', text: 'Morning', translation: 'بەیانی', difficulty: 'medium', type: 'word' },
    { id: 'm2', text: 'Evening', translation: 'ئێوارە', difficulty: 'medium', type: 'word' },
    { id: 'm3', text: 'School', translation: 'قوتابخانە', difficulty: 'medium', type: 'word' },
    { id: 'm4', text: 'Teacher', translation: 'مامۆستا', difficulty: 'medium', type: 'word' },
    { id: 'm5', text: 'Student', translation: 'قوتابی', difficulty: 'medium', type: 'word' },
    { id: 'm6', text: 'Beautiful', translation: 'جوان', difficulty: 'medium', type: 'word' },
    { id: 'm7', text: 'Airport', translation: 'فڕۆکەخانە', difficulty: 'medium', type: 'word' },
    { id: 'm8', text: 'Hospital', translation: 'نەخۆشخانە', difficulty: 'medium', type: 'word' },
    { id: 'm9', text: 'Restaurant', translation: 'چێشتخانە', difficulty: 'medium', type: 'word' },
    { id: 'm10', text: 'Welcome', translation: 'بەخێربێیت', difficulty: 'medium', type: 'word' },
    { id: 'm11', text: 'Friend', translation: 'هاوڕێ', difficulty: 'medium', type: 'word' },
    { id: 'm12', text: 'Family', translation: 'خێزان', difficulty: 'medium', type: 'word' },
    { id: 'm13', text: 'Mountain', translation: 'شاخ', difficulty: 'medium', type: 'word' },
    { id: 'm14', text: 'Language', translation: 'زمان', difficulty: 'medium', type: 'word' },
    { id: 'm15', text: 'Country', translation: 'وڵات', difficulty: 'medium', type: 'word' },
    { id: 'm16', text: 'Weather', translation: 'کەش و هەوا', difficulty: 'medium', type: 'word' },
    { id: 'm17', text: 'Market', translation: 'بازاڕ', difficulty: 'medium', type: 'word' },
    { id: 'm18', text: 'Ticket', translation: 'بلیت', difficulty: 'medium', type: 'word' },
    { id: 'm19', text: 'Brother', translation: 'برا', difficulty: 'medium', type: 'word' },
    { id: 'm20', text: 'Sister', translation: 'خوشک', difficulty: 'medium', type: 'word' },
    { id: 'm21', text: 'Mother', translation: 'دایک', difficulty: 'medium', type: 'word' },
    { id: 'm22', text: 'Father', translation: 'باوک', difficulty: 'medium', type: 'word' },
    { id: 'm23', text: 'Children', translation: 'منداڵان', difficulty: 'medium', type: 'word' },
    { id: 'm24', text: 'Flower', translation: 'گوڵ', difficulty: 'medium', type: 'word' },
    { id: 'm25', text: 'Garden', translation: 'باخچە', difficulty: 'medium', type: 'word' },
    { id: 'm26', text: 'Kitchen', translation: 'چێشتخانە', difficulty: 'medium', type: 'word' },
    { id: 'm27', text: 'Bedroom', translation: 'ژووری نوستن', difficulty: 'medium', type: 'word' },
    { id: 'm28', text: 'Clothing', translation: 'جلوبەرگ', difficulty: 'medium', type: 'word' },
    { id: 'm29', text: 'Blanket', translation: 'لێوبەر', difficulty: 'medium', type: 'word' },
    { id: 'm30', text: 'Medicine', translation: 'دەرمان', difficulty: 'medium', type: 'word' },
    { id: 'm31', text: 'History', translation: 'مێژوو', difficulty: 'medium', type: 'word' },
    { id: 'm32', text: 'Science', translation: 'زانست', difficulty: 'medium', type: 'word' },
    { id: 'm33', text: 'Neighbor', translation: 'دراوسێ', difficulty: 'medium', type: 'word' },
    { id: 'm34', text: 'Holiday', translation: 'پشوو', difficulty: 'medium', type: 'word' },
    { id: 'm35', text: 'Journey', translation: 'گەشت', difficulty: 'medium', type: 'word' },
];

const hardSentences: SpaceWord[] = [
    { id: 'h1', text: 'Good morning', translation: 'بەیانی باش', difficulty: 'hard', type: 'sentence' },
    { id: 'h2', text: 'How are you', translation: 'چۆنیت', difficulty: 'hard', type: 'sentence' },
    { id: 'h3', text: 'Thank you', translation: 'سوپاس', difficulty: 'hard', type: 'sentence' },
    { id: 'h4', text: 'I am hungry', translation: 'برسیمە', difficulty: 'hard', type: 'sentence' },
    { id: 'h5', text: 'I am tired', translation: 'من ماندووم', difficulty: 'hard', type: 'sentence' },
    { id: 'h6', text: 'What is your name', translation: 'ناوت چییە', difficulty: 'hard', type: 'sentence' },
    { id: 'h7', text: 'Nice to meet you', translation: 'خۆشحاڵم بە ناسینت', difficulty: 'hard', type: 'sentence' },
    { id: 'h8', text: 'See you later', translation: 'دواتر دەتبینمەوە', difficulty: 'hard', type: 'sentence' },
    { id: 'h9', text: 'Can you help me', translation: 'دەتوانیت یارمەتیم بدەیت', difficulty: 'hard', type: 'sentence' },
    { id: 'h10', text: 'How much is this', translation: 'ئەمە بە چەندە', difficulty: 'hard', type: 'sentence' },
    { id: 'h11', text: 'Where is the market', translation: 'بازاڕ لە کوێیە', difficulty: 'hard', type: 'sentence' },
    { id: 'h12', text: 'It is raining', translation: 'باران دەبارێت', difficulty: 'hard', type: 'sentence' },
    { id: 'h13', text: 'I want to buy', translation: 'دەمەوێت بکڕم', difficulty: 'hard', type: 'sentence' },
    { id: 'h14', text: 'Where is the airport', translation: 'فڕۆکەخانە لە کوێیە', difficulty: 'hard', type: 'sentence' },
    { id: 'h15', text: 'I work as a teacher', translation: 'من وەک مامۆستا کار دەکەم', difficulty: 'hard', type: 'sentence' },
    { id: 'h16', text: 'I love my family', translation: 'من خێزانەکەم خۆش دەوێم', difficulty: 'hard', type: 'sentence' },
    { id: 'h17', text: 'The weather is nice', translation: 'کەشووهەوا خۆشە', difficulty: 'hard', type: 'sentence' },
    { id: 'h18', text: 'I need a doctor', translation: 'پێویستم بە دکتۆرە', difficulty: 'hard', type: 'sentence' },
    { id: 'h19', text: 'Open the door', translation: 'دەرگاکە بکەوە', difficulty: 'hard', type: 'sentence' },
    { id: 'h20', text: 'Good night everyone', translation: 'شەوباش بۆ هەمووان', difficulty: 'hard', type: 'sentence' },
];

// Game Levels — more words per level
export const gameLevels: GameLevel[] = [
    {
        id: 'level-1',
        name: 'Asteroid Field',
        nameKu: 'کێڵگەی ئەستێرۆید',
        description: 'Basic words — warm up your fingers',
        descriptionKu: 'وشە سادەکان — پەنجەکانت گەرم بکەوە',
        words: easyWords.slice(0, 16),
        speed: 0.4,
        spawnRate: 2.5,
    },
    {
        id: 'level-2',
        name: 'Meteor Shower',
        nameKu: 'بارانی ئەستێرە',
        description: 'More words, faster pace',
        descriptionKu: 'وشەی زیاتر، خێراتر',
        words: easyWords.slice(16, 32),
        speed: 0.55,
        spawnRate: 2.2,
    },
    {
        id: 'level-3',
        name: 'Nebula Storm',
        nameKu: 'ڕەشەبای نیبیولا',
        description: 'Body, nature & daily words',
        descriptionKu: 'جەستە، سروشت و وشەی ڕۆژانە',
        words: easyWords.slice(32, 48),
        speed: 0.6,
        spawnRate: 2.3,
    },
    {
        id: 'level-4',
        name: 'Planet Defense',
        nameKu: 'بەرگری هەسارە',
        description: 'Medium difficulty — longer words',
        descriptionKu: 'ناوەندی — وشەی درێژتر',
        words: mediumWords.slice(0, 18),
        speed: 0.6,
        spawnRate: 2.4,
    },
    {
        id: 'level-5',
        name: 'Solar Storm',
        nameKu: 'ڕەشەبای هەتاوی',
        description: 'Advanced vocabulary, higher speed',
        descriptionKu: 'وشەکانی پێشکەوتوو، لەزتر',
        words: mediumWords.slice(18, 35),
        speed: 0.75,
        spawnRate: 2,
    },
    {
        id: 'level-6',
        name: 'Galaxy Quest',
        nameKu: 'گەڕانی کەهکەشان',
        description: 'Full sentences — ultimate test',
        descriptionKu: 'ڕستەکان — تاقیکردنەوەی کۆتایی',
        words: hardSentences,
        speed: 0.5,
        spawnRate: 3,
    },
];

export const allWords: SpaceWord[] = [...easyWords, ...mediumWords, ...hardSentences];

export const getRandomWords = (count: number, difficulty?: 'easy' | 'medium' | 'hard'): SpaceWord[] => {
    let pool = allWords;
    if (difficulty) pool = allWords.filter(w => w.difficulty === difficulty);
    return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
};
