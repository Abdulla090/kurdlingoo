// Core type definitions for KurdLingo

export interface Exercise {
    id?: number;
    type: 'multiple-choice' | 'match-pairs' | 'sentence-builder' | 'fill-blank' | 'typing' | 'listening' | 'conversation' | 'image-selection' | 'vocabulary-grid' | 'cultural-note' | 'cultural-timeline' | 'image-match' | 'story-completion' | 'career-path' | 'route-planner' | 'emergency-phrases' | 'app-vocabulary' | 'tech-troubleshooting';
    question: string;
    options?: ExerciseOption[] | string[];
    pairs?: MatchPair[];
    sourceText?: string;
    correctSentence?: string[];
    sentenceParts?: string[];
    correctOption?: string;
    correctAnswer?: string;
    hints?: string[];
    dialogue?: DialogueLine[];
    correctOptions?: string[];
    audioUrl?: string;
    images?: ImageOption[];
    // New properties for advanced exercises
    items?: any[];
    content?: string;
    quiz?: any;
    events?: any[];
    story?: string;
    blanks?: string[];
    levels?: any[];
    start?: string;
    destination?: string;
    steps?: any[];
    phrases?: any[];
    apps?: any[];
    problems?: any[];
}

export interface ExerciseOption {
    id?: string;
    text: string;
    image?: string;
    correct: boolean;
}

export interface MatchPair {
    kurdish: string;
    english?: string;
    image?: string;
}

export interface DialogueLine {
    speaker: string;
    text: string;
    options?: string[];
}

export interface ImageOption {
    url: string;
    text: string;
    correct: boolean;
}

export interface Lesson {
    id: string;
    title: string;
    icon?: string;
    exercises: Exercise[];
}

export interface GuidebookVisual {
    type: 'sentence-structure' | 'pronoun-grid' | 'timeline' | 'comparison' | 'conjugation' | 'dialogue' | (string & {});
    data: any; // Can be more specific based on type
}

export interface GuidebookSubsection {
    subtitle: string;
    text?: string;
    list?: string[];
    visual?: GuidebookVisual;
    example?: {
        english: string;
        kurdish: string;
        transliteration?: string;
    };
}

export interface GuidebookSection {
    id: string;
    title: string;
    content: string;
    subsections?: GuidebookSubsection[];
    visual?: GuidebookVisual;
    items?: Array<{
        term: string;
        definition: string;
    }>;
    list?: string[];
}

export interface KeyPhrase {
    english: string;
    kurdish: string;
    pronunciation: string;
}

export interface Guidebook {
    introduction: string;
    sections: GuidebookSection[];
    keyPhrases: KeyPhrase[];
}

export interface Unit {
    id: string;
    title: string;
    description: string;
    guidebook: Guidebook;
    lessons: Lesson[];
}

export interface UserProgress {
    unitsProgress: {
        [unitId: string]: {
            lessonsCompleted: number;
            totalLessons: number;
        };
    };
    streak: number;
    xp: number;
    level: number;
}

export interface LanguageContextType {
    language: 'en' | 'ckb';
    setLanguage: (lang: 'en' | 'ckb') => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    isRTL: boolean;
}
