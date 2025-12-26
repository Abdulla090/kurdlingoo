// Space Typing Game - Word and Sentence Data

export interface SpaceWord {
    id: string;
    text: string;           // Word or sentence to type (English)
    translation: string;    // Kurdish translation
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'word' | 'sentence';
}

export interface GameLevel {
    id: string;
    name: string;
    nameKu: string;
    words: SpaceWord[];
    speed: number;          // Fall speed multiplier (1 = normal)
    spawnRate: number;      // Seconds between spawns
    description: string;
    descriptionKu: string;
}

// Easy words - single simple words
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
    { id: 'e15', text: 'Woman', translation: 'ژن', difficulty: 'easy', type: 'word' },
    { id: 'e16', text: 'One', translation: 'یەک', difficulty: 'easy', type: 'word' },
    { id: 'e17', text: 'Two', translation: 'دوو', difficulty: 'easy', type: 'word' },
    { id: 'e18', text: 'Three', translation: 'سێ', difficulty: 'easy', type: 'word' },
    { id: 'e19', text: 'Milk', translation: 'شیر', difficulty: 'easy', type: 'word' },
    { id: 'e20', text: 'Tea', translation: 'چا', difficulty: 'easy', type: 'word' },
];

// Medium words - longer words
const mediumWords: SpaceWord[] = [
    { id: 'm1', text: 'Morning', translation: 'بەیانی', difficulty: 'medium', type: 'word' },
    { id: 'm2', text: 'Evening', translation: 'ئێوارە', difficulty: 'medium', type: 'word' },
    { id: 'm3', text: 'School', translation: 'قوتابخانە', difficulty: 'medium', type: 'word' },
    { id: 'm4', text: 'Teacher', translation: 'مامۆستا', difficulty: 'medium', type: 'word' },
    { id: 'm5', text: 'Student', translation: 'قوتابی', difficulty: 'medium', type: 'word' },
    { id: 'm6', text: 'Beautiful', translation: 'جوان', difficulty: 'medium', type: 'word' },
    { id: 'm7', text: 'Goodbye', translation: 'خوات لەگەڵ', difficulty: 'medium', type: 'word' },
    { id: 'm8', text: 'Please', translation: 'تکایە', difficulty: 'medium', type: 'word' },
    { id: 'm9', text: 'Thank you', translation: 'سوپاس', difficulty: 'medium', type: 'word' },
    { id: 'm10', text: 'Welcome', translation: 'بەخێربێیت', difficulty: 'medium', type: 'word' },
    { id: 'm11', text: 'Friend', translation: 'هاوڕێ', difficulty: 'medium', type: 'word' },
    { id: 'm12', text: 'Family', translation: 'خێزان', difficulty: 'medium', type: 'word' },
    { id: 'm13', text: 'Yellow', translation: 'زەرد', difficulty: 'medium', type: 'word' },
    { id: 'm14', text: 'Green', translation: 'سەوز', difficulty: 'medium', type: 'word' },
    { id: 'm15', text: 'Black', translation: 'ڕەش', difficulty: 'medium', type: 'word' },
];

// Hard - sentences
const hardSentences: SpaceWord[] = [
    { id: 'h1', text: 'Good morning', translation: 'بەیانی باش', difficulty: 'hard', type: 'sentence' },
    { id: 'h2', text: 'How are you', translation: 'چۆنیت', difficulty: 'hard', type: 'sentence' },
    { id: 'h3', text: 'I am fine', translation: 'من باشم', difficulty: 'hard', type: 'sentence' },
    { id: 'h4', text: 'Nice to meet you', translation: 'خۆشحاڵم بە ناسینت', difficulty: 'hard', type: 'sentence' },
    { id: 'h5', text: 'What is your name', translation: 'ناوت چییە', difficulty: 'hard', type: 'sentence' },
    { id: 'h6', text: 'My name is', translation: 'ناوم...', difficulty: 'hard', type: 'sentence' },
    { id: 'h7', text: 'I love you', translation: 'خۆشم دەوێیت', difficulty: 'hard', type: 'sentence' },
    { id: 'h8', text: 'Good night', translation: 'شەو باش', difficulty: 'hard', type: 'sentence' },
    { id: 'h9', text: 'See you later', translation: 'دواتر دەتبینمەوە', difficulty: 'hard', type: 'sentence' },
    { id: 'h10', text: 'I am hungry', translation: 'برسیمە', difficulty: 'hard', type: 'sentence' },
];

// Game Levels
export const gameLevels: GameLevel[] = [
    {
        id: 'level-1',
        name: 'Asteroid Field',
        nameKu: 'کێڵگەی ئەستێرۆید',
        description: 'Easy words - Perfect for beginners!',
        descriptionKu: 'وشە ئاسانەکان - تەواو بۆ دەستپێکەران!',
        words: easyWords.slice(0, 10),
        speed: 0.5,
        spawnRate: 3,
    },
    {
        id: 'level-2',
        name: 'Meteor Shower',
        nameKu: 'باران باران',
        description: 'More easy words - Keep practicing!',
        descriptionKu: 'وشەی ئاسانی زیاتر - بەردەوام بە!',
        words: easyWords.slice(10, 20),
        speed: 0.6,
        spawnRate: 2.5,
    },
    {
        id: 'level-3',
        name: 'Planet Defense',
        nameKu: 'بەرگری هەسارە',
        description: 'Medium difficulty words',
        descriptionKu: 'وشەی ناوەندی قورسی',
        words: mediumWords.slice(0, 8),
        speed: 0.7,
        spawnRate: 2.5,
    },
    {
        id: 'level-4',
        name: 'Solar Storm',
        nameKu: 'ڕەشەبا هەتاوی',
        description: 'More challenging words',
        descriptionKu: 'وشەی چەتینتر',
        words: mediumWords.slice(8, 15),
        speed: 0.8,
        spawnRate: 2,
    },
    {
        id: 'level-5',
        name: 'Galaxy Quest',
        nameKu: 'گەڕانی کەهکەشان',
        description: 'Sentences - The ultimate challenge!',
        descriptionKu: 'ڕستەکان - گرنگترین چالاکی!',
        words: hardSentences,
        speed: 0.6,
        spawnRate: 4,
    },
];

// Get all words combined for quick play
export const allWords: SpaceWord[] = [...easyWords, ...mediumWords, ...hardSentences];

// Utility function to get random words
export const getRandomWords = (count: number, difficulty?: 'easy' | 'medium' | 'hard'): SpaceWord[] => {
    let pool = allWords;
    if (difficulty) {
        pool = allWords.filter(w => w.difficulty === difficulty);
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};
