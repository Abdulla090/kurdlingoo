export type ExerciseType =
    | 'multiple-choice'
    | 'match-pairs'
    | 'sentence-builder'
    | 'fill-blank'
    | 'typing'
    | 'listening'
    | 'conversation'
    | 'image-selection'
    | 'vocabulary-grid'
    | 'cultural-note'
    | 'cultural-timeline'
    | 'image-match'
    | 'story-completion'
    | 'career-path'
    | 'route-planner'
    | 'emergency-phrases'
    | 'app-vocabulary'
    | 'tech-troubleshooting'
    | 'roleplay-chat';

export interface ExerciseOption {
    id?: string;
    text: string;
    image?: string;
    correct?: boolean;  // Made optional
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

export interface ChatMessage {
    sender: 'ai' | 'user';
    text: string;
    avatar?: string;
    name?: string;
}

export interface ImageOption {
    url: string;
    text: string;
    correct: boolean;
}

export interface GuidebookVisual {
    type: string;
    data: any;
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

export interface Exercise {
    id?: number;
    type: ExerciseType;
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
    scenario?: string;
    chatMessages?: ChatMessage[];
    acceptableResponses?: string[];
    keywordsRequired?: string[];
}

export interface Lesson {
    id: string;
    title: string;
    icon?: string;
    type?: 'regular' | 'game'; // Added type property
    gameId?: string;           // Added gameId property
    exercises: Exercise[];
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
