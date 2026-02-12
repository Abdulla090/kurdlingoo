import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { unit1 } from '../../data/courses/unit1';
import { unit2 } from '../../data/courses/unit2';
import { unit3 } from '../../data/courses/unit3';
import { ArrowLeft, Clock, Target, Trophy, Flame, Zap, Heart, Star, RotateCcw, ChevronRight } from 'lucide-react';
import './NeuroMatch.css';

// ===== CONTENT DATABASE =====
// Rich phrase/sentence data for REAL language learning

interface ChallengeItem {
    kurdish: string;
    english: string;
    category: 'phrase' | 'sentence' | 'word';
    difficulty: 1 | 2 | 3;
    context?: string;
}

const CHALLENGE_BANK: ChallengeItem[] = [
    // PHRASES (difficulty 1)
    { kurdish: 'بەیانی باش', english: 'Good morning', category: 'phrase', difficulty: 1 },
    { kurdish: 'ئێوارە باش', english: 'Good evening', category: 'phrase', difficulty: 1 },
    { kurdish: 'خوا حافیز', english: 'Goodbye', category: 'phrase', difficulty: 1 },
    { kurdish: 'زۆر سوپاس', english: 'Thank you very much', category: 'phrase', difficulty: 1 },
    { kurdish: 'سەر چاو', english: "You're welcome", category: 'phrase', difficulty: 1 },
    { kurdish: 'ماندوو نەبیت', english: 'Good job / Hello', category: 'phrase', difficulty: 1 },
    { kurdish: 'نەورۆزتان پیرۆز', english: 'Happy Newroz!', category: 'phrase', difficulty: 1 },
    { kurdish: 'نانی بەیانی', english: 'Breakfast', category: 'phrase', difficulty: 1 },

    // SENTENCES (difficulty 2)
    { kurdish: 'ئەمە بە چەندە؟', english: 'How much is this?', category: 'sentence', difficulty: 2, context: 'Shopping' },
    { kurdish: 'کاتژمێر چەندە؟', english: 'What time is it?', category: 'sentence', difficulty: 2, context: 'Daily life' },
    { kurdish: 'دوو خوشکم هەیە', english: 'I have two sisters', category: 'sentence', difficulty: 2, context: 'Family' },
    { kurdish: 'بازاڕ لە کوێیە؟', english: 'Where is the market?', category: 'sentence', difficulty: 2, context: 'Directions' },
    { kurdish: 'ئەمڕۆ خۆرەتاوە', english: 'It is sunny today', category: 'sentence', difficulty: 2, context: 'Weather' },
    { kurdish: 'من ماندووم', english: 'I am tired', category: 'sentence', difficulty: 2, context: 'Feelings' },
    { kurdish: 'من برسیمە', english: 'I am hungry', category: 'sentence', difficulty: 2, context: 'Feelings' },
    { kurdish: 'باران دەبارێت', english: 'It is raining', category: 'sentence', difficulty: 2, context: 'Weather' },
    { kurdish: 'دەرگاکە بکەوە', english: 'Open the door', category: 'sentence', difficulty: 2, context: 'At home' },
    { kurdish: 'حیسابەکە تکایە', english: 'The bill, please', category: 'sentence', difficulty: 2, context: 'Restaurant' },
    { kurdish: 'چایەکە گەرمە', english: 'The tea is hot', category: 'sentence', difficulty: 2, context: 'Food' },
    { kurdish: 'دەمەوێت بکڕم', english: 'I want to buy', category: 'sentence', difficulty: 2, context: 'Shopping' },

    // HARD SENTENCES (difficulty 3)
    { kurdish: 'فڕۆکەخانە لە کوێیە؟', english: 'Where is the airport?', category: 'sentence', difficulty: 3, context: 'Travel' },
    { kurdish: 'دەتوانیت یارمەتیم بدەیت؟', english: 'Can you help me?', category: 'sentence', difficulty: 3, context: 'Emergency' },
    { kurdish: 'من وەک مامۆستا کار دەکەم', english: 'I work as a teacher', category: 'sentence', difficulty: 3, context: 'Work' },
    { kurdish: 'من دەمەوێت خواردن داوا بکەم', english: 'I would like to order food', category: 'sentence', difficulty: 3, context: 'Restaurant' },
    { kurdish: 'دەتوانم یارمەتیت بدەم؟', english: 'Can I help you?', category: 'sentence', difficulty: 3, context: 'Polite' },
    { kurdish: 'پیشەکەت چییە؟', english: 'What is your profession?', category: 'sentence', difficulty: 3, context: 'Work' },
    { kurdish: 'من دەمەوێت بلیتێک حجز بکەم', english: 'I want to book a ticket', category: 'sentence', difficulty: 3, context: 'Travel' },
    { kurdish: 'من زوو لەخەو هەڵدەستم', english: 'I wake up early', category: 'sentence', difficulty: 3, context: 'Daily routine' },
    { kurdish: 'ئەم خواردنە زۆر تامدارە', english: 'This food is very delicious', category: 'sentence', difficulty: 3, context: 'Food' },
    { kurdish: 'شەحنم نەماوە', english: 'My battery is dead', category: 'sentence', difficulty: 3, context: 'Technology' },
    { kurdish: 'کەش و هەوا چۆنە?', english: 'How is the weather?', category: 'sentence', difficulty: 3, context: 'Weather' },
    { kurdish: 'من حجزم هەیە', english: 'I have a reservation', category: 'sentence', difficulty: 3, context: 'Hotel' },
    { kurdish: 'بڕۆ ڕاستەوخۆ پاشان بچۆ بۆ چەپ', english: 'Go straight then turn left', category: 'sentence', difficulty: 3, context: 'Directions' },
    { kurdish: 'هەموو ڕۆژێک سۆشیال میدیا بەکاردەهێنم', english: 'I use social media every day', category: 'sentence', difficulty: 3, context: 'Technology' },
    { kurdish: 'من مۆسیقای کوردیم خۆشدەوێت', english: 'I love Kurdish music', category: 'sentence', difficulty: 3, context: 'Culture' },
];

// Also extract from existing units dynamically
function buildContentPool(): ChallengeItem[] {
    const pool = [...CHALLENGE_BANK];

    [unit1, unit2, unit3].forEach(unit => {
        if (unit.guidebook?.keyPhrases) {
            unit.guidebook.keyPhrases.forEach(kp => {
                if (!pool.find(p => p.kurdish === kp.kurdish)) {
                    const isPhrase = kp.english.split(' ').length <= 3;
                    pool.push({
                        kurdish: kp.kurdish,
                        english: kp.english,
                        category: isPhrase ? 'phrase' : 'sentence',
                        difficulty: kp.english.split(' ').length > 4 ? 3 : 2,
                    });
                }
            });
        }

        unit.lessons.forEach(lesson => {
            lesson.exercises.forEach(ex => {
                if (ex.type === 'match-pairs' && ex.pairs) {
                    ex.pairs.forEach(p => {
                        if (p.kurdish && p.english && !pool.find(item => item.kurdish === p.kurdish)) {
                            pool.push({
                                kurdish: p.kurdish,
                                english: p.english || '',
                                category: 'word',
                                difficulty: 1,
                            });
                        }
                    });
                }
            });
        });
    });

    return pool;
}

// ===== GAME MODE TYPES =====
type GameMode = 'translation-blitz' | 'sentence-scramble' | 'speed-match';

interface GameModeConfig {
    id: GameMode;
    name: string;
    nameKu: string;
    emoji: string;
    description: string;
    descriptionKu: string;
    color: string;
    rounds: number;
    timePerRound: number;
    lives: number;
}

const GAME_MODES: GameModeConfig[] = [
    {
        id: 'translation-blitz',
        name: 'Translation Blitz',
        nameKu: 'هێرشی وەرگێڕان',
        emoji: '⚡',
        description: 'See a Kurdish phrase — pick the right English fast! Speed is key.',
        descriptionKu: 'دەستەواژەی کوردی ببینە — وەرگێڕانی ڕاست هەڵبژێرە بە خێرایی!',
        color: '#f59e0b',
        rounds: 15,
        timePerRound: 8,
        lives: 3,
    },
    {
        id: 'sentence-scramble',
        name: 'Sentence Builder',
        nameKu: 'دروستکردنی ڕستە',
        emoji: '🧩',
        description: 'Arrange scrambled Kurdish words to form the correct sentence.',
        descriptionKu: 'وشە تێکەڵاوەکان ڕیز بکە بۆ دروستکردنی ڕستەی ڕاست.',
        color: '#8b5cf6',
        rounds: 10,
        timePerRound: 15,
        lives: 3,
    },
    {
        id: 'speed-match',
        name: 'Speed Match',
        nameKu: 'جووتکردنی خێرا',
        emoji: '🔥',
        description: 'Match Kurdish phrases to English meanings before time runs out!',
        descriptionKu: 'دەستەواژەکانی کوردی لەگەڵ واتاکانیان جووت بکەوە!',
        color: '#ef4444',
        rounds: 20,
        timePerRound: 60,
        lives: 3,
    },
];

// ===== COMPONENT =====
const NeuroMatch = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const isKu = language === 'ckb';

    // State
    const [screen, setScreen] = useState<'menu' | 'playing' | 'results'>('menu');
    const [activeMode, setActiveMode] = useState<GameModeConfig>(GAME_MODES[0]);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [round, setRound] = useState(0);
    const [timeLeft, setTimeLeft] = useState(8);
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
    const [highScores, setHighScores] = useState<Record<string, number>>(() => {
        try { return JSON.parse(localStorage.getItem('nm-highscores') || '{}'); }
        catch { return {}; }
    });

    // Translation Blitz state
    const [currentItem, setCurrentItem] = useState<ChallengeItem | null>(null);
    const [options, setOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    // Sentence Scramble state
    const [scrambledWords, setScrambledWords] = useState<string[]>([]);
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [correctSentence, setCorrectSentence] = useState<string[]>([]);

    // Speed Match state
    const [matchCards, setMatchCards] = useState<{ id: string; text: string; pairId: string; type: 'ku' | 'en'; selected: boolean; matched: boolean }[]>([]);
    const [firstSelected, setFirstSelected] = useState<string | null>(null);
    const [matchPairsFound, setMatchPairsFound] = useState(0);
    const [matchPairsTotal, setMatchPairsTotal] = useState(0);

    // Refs
    const timerRef = useRef<number | null>(null);
    const contentPool = useRef<ChallengeItem[]>([]);
    const usedItems = useRef<Set<string>>(new Set());

    // Init pool
    useEffect(() => {
        contentPool.current = buildContentPool();
    }, []);

    // Timer
    useEffect(() => {
        if (screen === 'playing' && activeMode.id !== 'speed-match') {
            timerRef.current = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        handleTimeout();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (screen === 'playing' && activeMode.id === 'speed-match') {
            timerRef.current = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        finishGame();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [screen, round, activeMode.id]);

    // ===== GAME LOGIC =====

    const startGame = useCallback((mode: GameModeConfig) => {
        setActiveMode(mode);
        setScore(0);
        setLives(mode.lives);
        setRound(0);
        setStreak(0);
        setMaxStreak(0);
        setCorrectCount(0);
        setTotalAnswered(0);
        setFeedback(null);
        setSelectedAnswer(null);
        setSelectedWords([]);
        setFirstSelected(null);
        setMatchPairsFound(0);
        usedItems.current = new Set();

        if (mode.id === 'speed-match') {
            setupSpeedMatch(mode);
        } else {
            setScreen('playing');
            setTimeout(() => setupRound(mode, 0), 100);
        }
    }, []);

    const getRandomItems = (difficulty: number, count: number, exclude?: string): ChallengeItem[] => {
        const filtered = contentPool.current.filter(item =>
            item.difficulty <= difficulty &&
            item.english !== exclude &&
            !usedItems.current.has(item.kurdish)
        );
        return filtered.sort(() => Math.random() - 0.5).slice(0, count);
    };

    const getItemForRound = (roundNum: number, mode: GameModeConfig): ChallengeItem | null => {
        // Difficulty scales with rounds
        const difficulty = roundNum < 5 ? 1 : roundNum < 10 ? 2 : 3;
        const minDiff = Math.max(1, difficulty - 1);

        const candidates = contentPool.current.filter(item =>
            item.difficulty >= minDiff &&
            item.difficulty <= difficulty + 1 &&
            !usedItems.current.has(item.kurdish) &&
            (mode.id === 'sentence-scramble' ? item.kurdish.split(' ').length >= 2 : true)
        );

        if (candidates.length === 0) return contentPool.current[Math.floor(Math.random() * contentPool.current.length)];
        const item = candidates[Math.floor(Math.random() * candidates.length)];
        usedItems.current.add(item.kurdish);
        return item;
    };

    const setupRound = (mode: GameModeConfig, roundNum: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setFeedback(null);
        setSelectedAnswer(null);
        setRound(roundNum);

        const item = getItemForRound(roundNum, mode);
        if (!item) { finishGame(); return; }

        setCurrentItem(item);

        if (mode.id === 'translation-blitz') {
            // Generate 4 options, one correct
            const wrongItems = getRandomItems(item.difficulty + 1, 3, item.english);
            const allOptions = [item.english, ...wrongItems.map(w => w.english)];
            setOptions(allOptions.sort(() => Math.random() - 0.5));
            setTimeLeft(mode.timePerRound);
        } else if (mode.id === 'sentence-scramble') {
            const words = item.kurdish.split(/\s+/);
            // Add some decoy words
            const decoys = getDecoyWords(words, item.difficulty);
            const allWords = [...words, ...decoys].sort(() => Math.random() - 0.5);
            setCorrectSentence(words);
            setScrambledWords(allWords);
            setSelectedWords([]);
            setTimeLeft(mode.timePerRound);
        }
    };

    const getDecoyWords = (correctWords: string[], difficulty: number): string[] => {
        // Common Kurdish decoy words by difficulty
        const decoyPool: string[][] = [
            ['من', 'تۆ', 'ئەو', 'باشە', 'نەخێر', 'بەڵێ', 'زۆر'],
            ['دەکەم', 'دەچم', 'هەیە', 'نییە', 'دەوێت', 'بۆ', 'لە'],
            ['دەمەوێت', 'دەتوانم', 'پێویستە', 'هەڵدەستم', 'بکەم', 'بدەم', 'بکڕم'],
        ];
        const pool = decoyPool[Math.min(difficulty - 1, 2)].filter(w => !correctWords.includes(w));
        const count = Math.min(difficulty + 1, pool.length, 3);
        return pool.sort(() => Math.random() - 0.5).slice(0, count);
    };

    const setupSpeedMatch = (mode: GameModeConfig) => {
        const pairCount = 5;
        const items = contentPool.current
            .filter(item => item.difficulty <= 2)
            .sort(() => Math.random() - 0.5)
            .slice(0, pairCount);

        const cards = items.flatMap((item, i) => [
            { id: `ku-${i}`, text: item.kurdish, pairId: `p-${i}`, type: 'ku' as const, selected: false, matched: false },
            { id: `en-${i}`, text: item.english, pairId: `p-${i}`, type: 'en' as const, selected: false, matched: false },
        ]);

        // Separate by type and shuffle each column independently
        const kuCards = cards.filter(c => c.type === 'ku').sort(() => Math.random() - 0.5);
        const enCards = cards.filter(c => c.type === 'en').sort(() => Math.random() - 0.5);

        setMatchCards([...kuCards, ...enCards]);
        setMatchPairsTotal(pairCount);
        setMatchPairsFound(0);
        setFirstSelected(null);
        setTimeLeft(mode.timePerRound);
        setScreen('playing');
    };

    // ===== ANSWER HANDLERS =====

    const handleBlitzAnswer = (answer: string) => {
        if (selectedAnswer || feedback) return;
        if (timerRef.current) clearInterval(timerRef.current);

        setSelectedAnswer(answer);
        setTotalAnswered(t => t + 1);
        const isCorrect = answer === currentItem?.english;

        if (isCorrect) {
            const timeBonus = Math.max(0, timeLeft * 2);
            const streakBonus = Math.min(streak * 5, 50);
            const difficultyBonus = (currentItem?.difficulty || 1) * 10;
            const points = 10 + timeBonus + streakBonus + difficultyBonus;

            setScore(s => s + points);
            setStreak(s => { const n = s + 1; if (n > maxStreak) setMaxStreak(n); return n; });
            setCorrectCount(c => c + 1);
            setFeedback('correct');
        } else {
            setStreak(0);
            setLives(l => l - 1);
            setFeedback('wrong');
        }

        setTimeout(() => {
            if (!isCorrect && lives <= 1) {
                finishGame();
            } else if (round + 1 >= activeMode.rounds) {
                finishGame();
            } else {
                setupRound(activeMode, round + 1);
            }
        }, 1200);
    };

    const handleScrambleWordClick = (word: string, index: number) => {
        // Add word to selected words
        const newSelected = [...selectedWords, word];
        setSelectedWords(newSelected);
        setScrambledWords(prev => prev.filter((_, i) => i !== index));
    };

    const handleRemoveSelectedWord = (index: number) => {
        const word = selectedWords[index];
        setSelectedWords(prev => prev.filter((_, i) => i !== index));
        setScrambledWords(prev => [...prev, word]);
    };

    const handleScrambleSubmit = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setTotalAnswered(t => t + 1);

        const isCorrect = selectedWords.join(' ') === correctSentence.join(' ');

        if (isCorrect) {
            const timeBonus = Math.max(0, timeLeft * 3);
            const points = 20 + timeBonus + (currentItem?.difficulty || 1) * 15;
            setScore(s => s + points);
            setStreak(s => { const n = s + 1; if (n > maxStreak) setMaxStreak(n); return n; });
            setCorrectCount(c => c + 1);
            setFeedback('correct');
        } else {
            setStreak(0);
            setLives(l => l - 1);
            setFeedback('wrong');
        }

        setTimeout(() => {
            if (!isCorrect && lives <= 1) {
                finishGame();
            } else if (round + 1 >= activeMode.rounds) {
                finishGame();
            } else {
                setupRound(activeMode, round + 1);
            }
        }, 1500);
    };

    const handleMatchCardClick = (cardId: string) => {
        const card = matchCards.find(c => c.id === cardId);
        if (!card || card.matched || card.selected) return;

        if (!firstSelected) {
            setFirstSelected(cardId);
            setMatchCards(prev => prev.map(c => c.id === cardId ? { ...c, selected: true } : c));
        } else {
            const firstCard = matchCards.find(c => c.id === firstSelected);
            if (!firstCard) return;

            // Must be different types
            if (firstCard.type === card.type) {
                // Deselect first, select new
                setMatchCards(prev => prev.map(c => {
                    if (c.id === firstSelected) return { ...c, selected: false };
                    if (c.id === cardId) return { ...c, selected: true };
                    return c;
                }));
                setFirstSelected(cardId);
                return;
            }

            setMatchCards(prev => prev.map(c => c.id === cardId ? { ...c, selected: true } : c));

            if (firstCard.pairId === card.pairId) {
                // Match!
                setTimeout(() => {
                    setMatchCards(prev => prev.map(c =>
                        (c.id === cardId || c.id === firstSelected) ? { ...c, matched: true, selected: false } : c
                    ));
                    const newFound = matchPairsFound + 1;
                    setMatchPairsFound(newFound);
                    setScore(s => s + 20 + timeLeft);
                    setStreak(s => { const n = s + 1; if (n > maxStreak) setMaxStreak(n); return n; });
                    setCorrectCount(c => c + 1);
                    setFeedback('correct');
                    setTimeout(() => setFeedback(null), 400);

                    if (newFound >= matchPairsTotal) {
                        // Regenerate new cards
                        setTimeout(() => {
                            const remaining = activeMode.rounds - (round + 5);
                            if (remaining <= 0) {
                                finishGame();
                            } else {
                                setRound(r => r + 5);
                                regenerateMatchCards();
                            }
                        }, 500);
                    }
                    setFirstSelected(null);
                }, 200);
            } else {
                // Wrong
                setFeedback('wrong');
                setStreak(0);
                setLives(l => l - 1);
                setTimeout(() => {
                    setMatchCards(prev => prev.map(c =>
                        (c.id === cardId || c.id === firstSelected) ? { ...c, selected: false } : c
                    ));
                    setFirstSelected(null);
                    setFeedback(null);
                    if (lives <= 1) finishGame();
                }, 600);
            }
        }
    };

    const regenerateMatchCards = () => {
        const pairCount = 5;
        const items = contentPool.current
            .filter(item => !usedItems.current.has(item.kurdish))
            .sort(() => Math.random() - 0.5)
            .slice(0, pairCount);

        items.forEach(item => usedItems.current.add(item.kurdish));

        const cards = items.flatMap((item, i) => [
            { id: `ku-${Date.now()}-${i}`, text: item.kurdish, pairId: `p-${Date.now()}-${i}`, type: 'ku' as const, selected: false, matched: false },
            { id: `en-${Date.now()}-${i}`, text: item.english, pairId: `p-${Date.now()}-${i}`, type: 'en' as const, selected: false, matched: false },
        ]);

        const kuCards = cards.filter(c => c.type === 'ku').sort(() => Math.random() - 0.5);
        const enCards = cards.filter(c => c.type === 'en').sort(() => Math.random() - 0.5);

        setMatchCards([...kuCards, ...enCards]);
        setMatchPairsFound(0);
        setFirstSelected(null);
    };

    const handleTimeout = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setStreak(0);
        setLives(l => l - 1);
        setFeedback('wrong');
        setTotalAnswered(t => t + 1);

        setTimeout(() => {
            if (lives <= 1) {
                finishGame();
            } else if (round + 1 >= activeMode.rounds) {
                finishGame();
            } else {
                setupRound(activeMode, round + 1);
            }
        }, 1000);
    };

    const finishGame = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        // Save high score
        const key = activeMode.id;
        if (score > (highScores[key] || 0)) {
            const newScores = { ...highScores, [key]: score };
            setHighScores(newScores);
            localStorage.setItem('nm-highscores', JSON.stringify(newScores));
        }
        setScreen('results');
    };

    // ===== RENDER: MENU =====
    if (screen === 'menu') {
        return (
            <div className="nm-container nm-menu">
                <div className="nm-bg-grid" />
                <div className="nm-bg-glow glow-1" />
                <div className="nm-bg-glow glow-2" />

                <div className="nm-menu-scroll">
                    <button className="nm-back" onClick={() => navigate('/learn')}>
                        <ArrowLeft size={18} />
                        <span>{isKu ? 'گەڕانەوە' : 'Back'}</span>
                    </button>

                    <div className="nm-hero">
                        <div className="nm-logo-ring">
                            <Zap size={40} className="nm-logo-icon" />
                        </div>
                        <h1 className="nm-title">Challenge Arena</h1>
                        <p className="nm-subtitle">
                            {isKu ? 'چالاکی توانای زمانت تاقی بکەرەوە — ڕستە، دەستەواژە و وەرگێڕان!' : 'Test your language skills — sentences, phrases & translations!'}
                        </p>
                    </div>

                    <div className="nm-modes">
                        {GAME_MODES.map(mode => (
                            <button
                                key={mode.id}
                                className="nm-mode-card"
                                onClick={() => startGame(mode)}
                                style={{ '--mode-color': mode.color } as React.CSSProperties}
                            >
                                <div className="nm-mode-icon">{mode.emoji}</div>
                                <div className="nm-mode-info">
                                    <h3 className="nm-mode-name">{isKu ? mode.nameKu : mode.name}</h3>
                                    <p className="nm-mode-desc">{isKu ? mode.descriptionKu : mode.description}</p>
                                    <div className="nm-mode-meta">
                                        <span><Clock size={12} /> {mode.id === 'speed-match' ? `${mode.timePerRound}s` : `${mode.timePerRound}s/round`}</span>
                                        <span><Heart size={12} /> {mode.lives} {isKu ? 'گیان' : 'lives'}</span>
                                        {highScores[mode.id] ? <span><Trophy size={12} /> {highScores[mode.id]}</span> : null}
                                    </div>
                                </div>
                                <ChevronRight size={20} className="nm-mode-arrow" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ===== RENDER: RESULTS =====
    if (screen === 'results') {
        const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
        const isNewHighScore = score >= (highScores[activeMode.id] || 0) && score > 0;
        const grade = accuracy >= 90 ? 'S' : accuracy >= 75 ? 'A' : accuracy >= 60 ? 'B' : accuracy >= 40 ? 'C' : 'F';
        const gradeColors: Record<string, string> = { S: '#fbbf24', A: '#22c55e', B: '#3b82f6', C: '#f59e0b', F: '#ef4444' };

        return (
            <div className="nm-container nm-results-screen">
                <div className="nm-bg-grid" />

                <div className="nm-results-panel">
                    {isNewHighScore && <div className="nm-new-record">🏆 {isKu ? 'تۆمارێکی نوێ!' : 'New Record!'}</div>}

                    <div className="nm-grade" style={{ color: gradeColors[grade], borderColor: gradeColors[grade] }}>
                        {grade}
                    </div>

                    <h2 className="nm-results-title">
                        {accuracy >= 60
                            ? (isKu ? 'کارت باش بوو!' : 'Great Work!')
                            : (isKu ? 'هەوڵی دیکە بدە!' : 'Try Again!')}
                    </h2>

                    <div className="nm-results-stats">
                        <div className="nm-rstat">
                            <Target size={20} />
                            <span className="nm-rstat-val">{score}</span>
                            <span className="nm-rstat-lbl">{isKu ? 'خاڵ' : 'Score'}</span>
                        </div>
                        <div className="nm-rstat">
                            <Flame size={20} />
                            <span className="nm-rstat-val">{maxStreak}</span>
                            <span className="nm-rstat-lbl">{isKu ? 'باڵاترین زنجیرە' : 'Best Streak'}</span>
                        </div>
                        <div className="nm-rstat">
                            <Star size={20} />
                            <span className="nm-rstat-val">{accuracy}%</span>
                            <span className="nm-rstat-lbl">{isKu ? 'ڕاستی' : 'Accuracy'}</span>
                        </div>
                    </div>

                    <div className="nm-results-actions">
                        <button className="nm-btn nm-btn-primary" onClick={() => startGame(activeMode)}>
                            <RotateCcw size={18} /> {isKu ? 'دووبارە' : 'Play Again'}
                        </button>
                        <button className="nm-btn nm-btn-ghost" onClick={() => setScreen('menu')}>
                            {isKu ? 'مینیو' : 'Menu'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ===== RENDER: PLAYING =====
    const livesArray = Array.from({ length: activeMode.lives }, (_, i) => i < lives);

    return (
        <div className={`nm-container nm-playing ${feedback === 'correct' ? 'flash-green' : ''} ${feedback === 'wrong' ? 'flash-red' : ''}`}>
            {/* Header */}
            <div className="nm-game-hud">
                <button className="nm-hud-back" onClick={() => { if (timerRef.current) clearInterval(timerRef.current); setScreen('menu'); }}>
                    <ArrowLeft size={18} />
                </button>

                <div className="nm-hud-lives">
                    {livesArray.map((alive, i) => (
                        <Heart key={i} size={18} fill={alive ? '#ef4444' : 'none'} color={alive ? '#ef4444' : '#4b5563'} />
                    ))}
                </div>

                {activeMode.id !== 'speed-match' && (
                    <div className="nm-hud-progress">
                        <div className="nm-hud-bar">
                            <div className="nm-hud-fill" style={{ width: `${((round + 1) / activeMode.rounds) * 100}%` }} />
                        </div>
                        <span className="nm-hud-round">{round + 1}/{activeMode.rounds}</span>
                    </div>
                )}

                <div className={`nm-hud-timer ${timeLeft <= 5 ? 'danger' : timeLeft <= 10 ? 'warning' : ''}`}>
                    <Clock size={14} />
                    <span>{timeLeft}</span>
                </div>
            </div>

            {/* Score + Streak */}
            <div className="nm-score-strip">
                <div className="nm-score-num">{score} <span className="nm-score-label">{isKu ? 'خاڵ' : 'pts'}</span></div>
                {streak > 1 && (
                    <div className="nm-streak-badge" key={streak}>
                        <Flame size={14} /> {streak}x {isKu ? 'زنجیرە' : 'streak'}
                    </div>
                )}
            </div>

            {/* ===== TRANSLATION BLITZ ===== */}
            {activeMode.id === 'translation-blitz' && currentItem && (
                <div className="nm-blitz-area">
                    {currentItem.context && (
                        <div className="nm-context-tag">{currentItem.context}</div>
                    )}
                    <div className="nm-question-card">
                        <span className="nm-q-label">{isKu ? 'وەربگێڕە بۆ ئینگلیزی' : 'Translate to English'}</span>
                        <h2 className="nm-q-text">{currentItem.kurdish}</h2>
                    </div>

                    <div className="nm-options-grid">
                        {options.map((opt, i) => {
                            let cls = 'nm-option';
                            if (feedback && selectedAnswer === opt) {
                                cls += opt === currentItem.english ? ' correct' : ' wrong';
                            } else if (feedback && opt === currentItem.english) {
                                cls += ' correct';
                            }
                            return (
                                <button
                                    key={i}
                                    className={cls}
                                    onClick={() => handleBlitzAnswer(opt)}
                                    disabled={!!feedback}
                                >
                                    <span className="nm-opt-num">{i + 1}</span>
                                    <span className="nm-opt-text">{opt}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* ===== SENTENCE SCRAMBLE ===== */}
            {activeMode.id === 'sentence-scramble' && currentItem && (
                <div className="nm-scramble-area">
                    <div className="nm-question-card">
                        <span className="nm-q-label">{isKu ? 'ئەم ڕستەیە بە کوردی دروست بکە' : 'Build this sentence in Kurdish'}</span>
                        <h2 className="nm-q-text nm-q-english">{currentItem.english}</h2>
                    </div>

                    {/* Answer zone */}
                    <div className="nm-answer-zone">
                        {selectedWords.length === 0 && (
                            <span className="nm-answer-placeholder">{isKu ? 'وشەکان لێرە دابنێ...' : 'Tap words to build the sentence...'}</span>
                        )}
                        {selectedWords.map((word, i) => (
                            <button key={`sel-${i}`} className="nm-word-chip selected" onClick={() => handleRemoveSelectedWord(i)}>
                                {word}
                            </button>
                        ))}
                    </div>

                    {/* Word bank */}
                    <div className="nm-word-bank">
                        {scrambledWords.map((word, i) => (
                            <button key={`bank-${i}-${word}`} className="nm-word-chip" onClick={() => handleScrambleWordClick(word, i)}>
                                {word}
                            </button>
                        ))}
                    </div>

                    {selectedWords.length > 0 && !feedback && (
                        <button className="nm-btn nm-btn-submit" onClick={handleScrambleSubmit}>
                            {isKu ? 'بیشکنە' : 'Check'} →
                        </button>
                    )}

                    {feedback && (
                        <div className={`nm-scramble-feedback ${feedback}`}>
                            {feedback === 'correct'
                                ? (isKu ? '✅ ڕاستە!' : '✅ Correct!')
                                : `❌ ${isKu ? 'ڕاست:' : 'Correct:'} ${correctSentence.join(' ')}`
                            }
                        </div>
                    )}
                </div>
            )}

            {/* ===== SPEED MATCH ===== */}
            {activeMode.id === 'speed-match' && (
                <div className="nm-match-area">
                    <div className="nm-match-grid">
                        <div className="nm-match-col">
                            <div className="nm-col-header">{isKu ? 'کوردی' : 'Kurdish'}</div>
                            {matchCards.filter(c => c.type === 'ku').map(card => (
                                <button
                                    key={card.id}
                                    className={`nm-match-card ku ${card.selected ? 'selected' : ''} ${card.matched ? 'matched' : ''}`}
                                    onClick={() => handleMatchCardClick(card.id)}
                                    disabled={card.matched}
                                >
                                    {card.text}
                                </button>
                            ))}
                        </div>
                        <div className="nm-match-col">
                            <div className="nm-col-header">{isKu ? 'ئینگلیزی' : 'English'}</div>
                            {matchCards.filter(c => c.type === 'en').map(card => (
                                <button
                                    key={card.id}
                                    className={`nm-match-card en ${card.selected ? 'selected' : ''} ${card.matched ? 'matched' : ''}`}
                                    onClick={() => handleMatchCardClick(card.id)}
                                    disabled={card.matched}
                                >
                                    {card.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NeuroMatch;
