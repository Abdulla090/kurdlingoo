// @ts-nocheck
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    X, Heart, Check,
    // Food & Dining
    UtensilsCrossed, Coffee, Wheat, Utensils, Salad, Sandwich, CircleDot, Egg, Package, Receipt,
    // Business & Work
    Handshake, Building2, FolderOpen, Shirt, Briefcase, Calendar, Clock,
    // Health
    Stethoscope, Hospital, HeartPulse, ShieldAlert, Thermometer,
    // Actions & Symbols
    RefreshCw, MessageCircle, Brain, MessageSquare,
    // Finance
    Landmark, Store, ArrowRightLeft, DollarSign, Banknote,
    // Celebrations
    Flame, PartyPopper, Sparkles, Gift, Church,
    // Travel & Places
    Plane, Hotel, Ticket, Map, Car, Bus, Train, Ship, Mountain,
    // Tech & Apps
    Smartphone, Laptop, Mail, Camera, Battery, Signal, Plug, Settings,
    // Common Objects
    Armchair, Music, Music2, BookOpen, Pencil, Palette,
    // Nature & Weather
    Sun, CloudRain, Snowflake, Wind, CloudSun,
    // People & Family
    User, UserCircle, Baby, Users,
    // Numbers & Time
    Hash, Clock1, Clock2, Clock3,
    // Shapes
    Circle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { unit1 } from '../../data/courses/unit1';
import { unit2 } from '../../data/courses/unit2';
import { unit3 } from '../../data/courses/unit3';
import { unit4 } from '../../data/courses/unit4';
import Button from '../../components/Button/Button';
import './Lesson.css';

// Emoji to Lucide Icon Component Mapping
const emojiToIconComponent = {
    // Food & Dining
    '🍽️': UtensilsCrossed, '☕': Coffee, '🍞': Wheat, '🍴': Utensils,
    '🫑': Salad, '🥙': Sandwich, '🍚': CircleDot, '🍖': CircleDot,
    '🍳': Egg, '🍱': Package, '🧾': Receipt,
    // Business & Work
    '🤝': Handshake, '🏢': Building2, '📁': FolderOpen, '👔': Shirt,
    '👨‍💼': Briefcase, '📅': Calendar, '⏰': Clock,
    // Health
    '👨‍⚕️': Stethoscope, '🏥': Hospital, '💊': CircleDot, '🌡️': Thermometer,
    '🤕': HeartPulse, '😷': ShieldAlert,
    // Actions & Symbols
    '❌': X, '✅': Check, '🔄': RefreshCw, '💭': MessageCircle,
    '🧠': Brain, '🗣️': MessageSquare, '🙏': Heart,
    // Finance
    '🏦': Landmark, '🏪': Store, '💸': ArrowRightLeft,
    '💰': DollarSign, '💵': Banknote,
    // Celebrations
    '🔥': Flame, '🎊': PartyPopper, '🎉': Sparkles,
    '🎈': Gift, '💒': Church,
    // Travel & Places
    '✈️': Plane, '🏨': Hotel, '🎫': Ticket, '🗺️': Map,
    '🚕': Car, '🚌': Bus, '🚂': Train, '⛴️': Ship,
    '🏖️': CircleDot, '🏔️': Mountain, '🏛️': Landmark, '🕌': Church,
    // Tech & Apps
    '📱': Smartphone, '💻': Laptop, '📧': Mail, '📷': Camera,
    '🔋': Battery, '📶': Signal, '🔌': Plug, '⚙️': Settings,
    // Common Objects
    '🪑': Armchair, '🎵': Music, '🎶': Music2, '📚': BookOpen,
    '✏️': Pencil, '🎨': Palette,
    // Nature & Weather
    '🌞': Sun, '🌧️': CloudRain, '❄️': Snowflake,
    '🌬️': Wind, '⛅': CloudSun,
    // People & Family
    '👨': User, '👩': UserCircle, '👶': Baby,
    '👴': Users, '👵': Users, '👪': Users,
    // Numbers & Time
    '🔢': Hash, '🕐': Clock1, '🕑': Clock2, '🕒': Clock3,
    // Colors/Shapes
    '🔴': Circle, '🔵': Circle, '🟢': Circle, '🟡': Circle,
    '🟣': Circle, '🟤': Circle, '⚫': Circle, '⚪': Circle,
};

// Icon Renderer Component
const IconRenderer = ({ emoji, size = 40, className = '' }) => {
    const IconComponent = emojiToIconComponent[emoji];

    if (IconComponent) {
        return <IconComponent size={size} className={className} strokeWidth={2} />;
    }

    // Fallback to emoji if no icon mapping exists
    return <span style={{ fontSize: `${size}px` }}>{emoji}</span>;
};

// Shuffle utility function for randomizing options
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const Lesson = () => {
    const { lessonId } = useParams();
    const navigate = useNavigate();
    const { t } = useLanguage();

    const [lesson, setLesson] = useState(null);
    const [unitColor, setUnitColor] = useState({ primary: '#58cc02', dark: '#46a302', light: '#dcfce7' }); // Default Green
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [lives, setLives] = useState(5);
    const [progress, setProgress] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        // 1. Try to load units from localStorage (Admin edits)
        const savedUnits = JSON.parse(localStorage.getItem('kurdlingo-units') || 'null');

        // 2. Use saved units or fallback to default imports
        const allUnits = savedUnits || [unit1, unit2, unit3, unit4];

        // 3. Find lesson in the determined units
        let foundLesson = null;
        let foundUnitIndex = 0;

        for (let i = 0; i < allUnits.length; i++) {
            const unit = allUnits[i];
            const lesson = unit.lessons.find(l => l.id === lessonId);
            if (lesson) {
                foundLesson = lesson;
                foundUnitIndex = i;
                break;
            }
        }

        // 4. If still not found, check custom lessons (User created)
        if (!foundLesson && lessonId.startsWith('custom-')) {
            const customLessons = JSON.parse(localStorage.getItem('customLessons') || '[]');
            foundLesson = customLessons.find(l => l.id === lessonId);
        }

        if (foundLesson) {
            setLesson(foundLesson);

            // Set Unit Color
            const colors = [
                { primary: '#58cc02', dark: '#46a302', light: '#dcfce7' }, // Unit 1: Green
                { primary: '#3b82f6', dark: '#2563eb', light: '#dbeafe' }, // Unit 2: Blue
                { primary: '#a855f7', dark: '#9333ea', light: '#f3e8ff' }, // Unit 3: Purple
                { primary: '#ef4444', dark: '#dc2626', light: '#fee2e2' }  // Unit 4: Red
            ];

            // Use modulo to cycle through colors if more units exist
            setUnitColor(colors[foundUnitIndex % colors.length]);
        }
    }, [lessonId]);

    if (!lesson) return <div className="lesson-view"><div className="exercise-container"><h2>{t('lessonNotFound')}</h2><Button onClick={() => navigate('/learn')}>{t('backToLearn')}</Button></div></div>;

    const currentExercise = lesson.exercises[currentExerciseIndex];

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
            setLives(prev => prev - 1);
        }
    };

    const handleContinue = () => {
        setFeedback(null);
        if (feedback === 'correct') {
            const nextIndex = currentExerciseIndex + 1;
            setProgress((nextIndex / lesson.exercises.length) * 100);

            if (nextIndex < lesson.exercises.length) {
                setCurrentExerciseIndex(nextIndex);
            } else {
                setIsCompleted(true);
            }
        }
    };

    if (isCompleted) {
        return (
            <div className="lesson-completed">
                <div className="completion-content">
                    <div className="completion-icon"><Sparkles size={80} color="var(--color-gold)" fill="var(--color-gold)" /></div>
                    <h1>{t('lessonComplete')}</h1>
                    <p>{t('earnedXp')}</p>
                    <Button variant="primary" size="lg" onClick={() => navigate('/learn')}>
                        {t('continue')}
                    </Button>
                </div>
            </div>
        );
    }

    if (lives <= 0) {
        return (
            <div className="lesson-completed">
                <div className="completion-content">
                    <div className="completion-icon"><Heart size={80} color="var(--color-secondary)" fill="var(--color-secondary)" /></div>
                    <h1>{t('outOfHearts')}</h1>
                    <Button variant="secondary" size="lg" onClick={() => navigate('/learn')}>
                        {t('quit')}
                    </Button>
                    <Button variant="primary" size="lg" onClick={() => setLives(5)}>
                        {t('refillHearts')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="lesson-view"
            style={{
                '--unit-color': unitColor.primary,
                '--unit-color-dark': unitColor.dark,
                '--unit-color-light': unitColor.light
            }}
            role="main"
        >
            <header className="lesson-header" role="banner">
                <button 
                    className="close-btn" 
                    onClick={() => navigate('/learn')}
                    aria-label="Close lesson and return to learn page"
                >
                    <X size={24} aria-hidden="true" />
                </button>
                <div 
                    className="progress-bar-container"
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Lesson progress: ${Math.round(progress)}%`}
                >
                    <div className="progress-bar-fill" style={{ width: `${progress}%`, background: 'var(--unit-color)' }}></div>
                </div>
                <div className="lives-counter" aria-label={`${lives} lives remaining`}>
                    <Heart fill="#ff4b4b" color="#ff4b4b" size={24} aria-hidden="true" />
                    <span aria-hidden="true">{lives}</span>
                </div>
            </header>

            <main className="lesson-content" aria-live="polite">
                {currentExercise.type === 'multiple-choice' && (
                    <MultipleChoice exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'sentence-builder' && (
                    <SentenceBuilder exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'match-pairs' && (
                    <MatchPairs exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'fill-blank' && (
                    <FillBlank exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'typing' && (
                    <TypingExercise exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'image-selection' && (
                    <ImageSelection exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'conversation' && (
                    <Conversation exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'cultural-note' && (
                    <CulturalNote exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'vocabulary-grid' && (
                    <VocabularyGrid exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'image-match' && (
                    <ImageMatch exercise={currentExercise} onAnswer={handleAnswer} />
                )}
                {currentExercise.type === 'story-completion' && (
                    <StoryCompletion exercise={currentExercise} onAnswer={handleAnswer} />
                )}
            </main>

            {feedback && (
                <div className={`feedback-sheet ${feedback}`}>
                    <div className="feedback-content">
                        <div className="feedback-header">
                            {feedback === 'correct' ? (
                                <div className="feedback-icon correct"><Check size={24} /></div>
                            ) : (
                                <div className="feedback-icon incorrect"><X size={24} /></div>
                            )}
                            <div className="feedback-text">
                                <h3>{feedback === 'correct' ? t('correct') : t('incorrect')}</h3>
                                {feedback === 'incorrect' && (
                                    <p>{t('correctSolution')} {
                                        currentExercise.correctSentence ? JSON.stringify(currentExercise.correctSentence) :
                                            currentExercise.correctOption ? currentExercise.correctOption :
                                                currentExercise.correctAnswer ? currentExercise.correctAnswer : // For typing
                                                    "..."
                                    }</p>
                                )}
                            </div>
                        </div>
                        <Button
                            variant={feedback === 'correct' ? "success" : "danger"}
                            size="lg"
                            onClick={handleContinue}
                        >
                            {t('continue')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

// Exercise Components
const MultipleChoice = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState(() => shuffleArray([...exercise.options]));

    useEffect(() => {
        setShuffledOptions(shuffleArray([...exercise.options]));
        setSelected(null);
    }, [exercise.id, exercise.question]);

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question}</h2>
            <div className="options-grid">
                {shuffledOptions.map((opt, idx) => (
                    <div
                        key={idx}
                        className={`option-card ${selected === opt ? 'selected' : ''}`}
                        onClick={() => setSelected(opt)}
                    >
                        {opt.image && <div className="option-image"><IconRenderer emoji={opt.image} size={48} /></div>}
                        <div className="option-text">{opt.text}</div>
                    </div>
                ))}
            </div>
            <div className="exercise-footer">
                <Button
                    variant={selected ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={() => selected && onAnswer(selected.correct)}
                    disabled={!selected}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};



const ImageSelection = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState(() => shuffleArray([...exercise.options]));

    useEffect(() => {
        setShuffledOptions(shuffleArray([...exercise.options]));
        setSelected(null);
    }, [exercise.id, exercise.question]);

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question}</h2>
            <div className="image-grid">
                {shuffledOptions.map((opt, idx) => (
                    <div
                        key={idx}
                        className={`image-card ${selected === opt ? 'selected' : ''}`}
                        onClick={() => setSelected(opt)}
                    >
                        <div className="image-content"><IconRenderer emoji={opt.image} size={64} /></div>
                        <div className="image-label">{opt.text}</div>
                    </div>
                ))}
            </div>
            <div className="exercise-footer">
                <Button
                    variant={selected ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={() => selected && onAnswer(selected.correct)}
                    disabled={!selected}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

const TypingExercise = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [input, setInput] = useState('');

    const checkAnswer = () => {
        const normalize = (str) => str.trim().toLowerCase();
        const isCorrect = normalize(input) === normalize(exercise.correctAnswer) ||
            (exercise.acceptedAnswers && exercise.acceptedAnswers.some(ans => normalize(ans) === normalize(input)));
        onAnswer(isCorrect);
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question}</h2>
            <div className="typing-prompt">
                {exercise.textToTranslate}
            </div>
            <textarea
                className="typing-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('typeAnswer')}
                rows={3}
            />
            <div className="exercise-footer">
                <Button
                    variant={input.trim().length > 0 ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={checkAnswer}
                    disabled={input.trim().length === 0}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

const SentenceBuilder = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [sentence, setSentence] = useState([]);
    const [availableWords, setAvailableWords] = useState(() => shuffleArray([...exercise.options]));

    useEffect(() => {
        setAvailableWords(shuffleArray([...exercise.options]));
        setSentence([]);
    }, [exercise.id, exercise.question]);

    const addToSentence = (word) => {
        setSentence([...sentence, word]);
        setAvailableWords(availableWords.filter((w, i) => i !== availableWords.indexOf(word)));
    };

    const removeFromSentence = (word) => {
        setSentence(sentence.filter((w, i) => i !== sentence.indexOf(word)));
        setAvailableWords([...availableWords, word]);
    };

    const checkAnswer = () => {
        const isCorrect = JSON.stringify(sentence) === JSON.stringify(exercise.correctSentence);
        onAnswer(isCorrect);
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question}</h2>
            <div className="source-text-bubble">
                {exercise.sourceText}
            </div>

            <div className="sentence-area">
                {sentence.map((word, idx) => (
                    <button key={idx} className="word-chip" onClick={() => removeFromSentence(word)}>
                        {word}
                    </button>
                ))}
            </div>

            <div className="word-bank">
                {availableWords.map((word, idx) => (
                    <button key={idx} className="word-chip bank" onClick={() => addToSentence(word)}>
                        {word}
                    </button>
                ))}
            </div>

            <div className="exercise-footer">
                <Button
                    variant={sentence.length > 0 ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={checkAnswer}
                    disabled={sentence.length === 0}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

const MatchPairs = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState([]);
    const [matched, setMatched] = useState([]);
    
    // Create and shuffle items immediately
    const createShuffledItems = () => {
        const items = exercise.pairs.flatMap(p => [
            { id: p.kurdish, text: p.kurdish, pairId: p.english },
            { id: p.english, text: p.english, pairId: p.kurdish }
        ]);
        return shuffleArray(items);
    };
    
    const [shuffledItems, setShuffledItems] = useState(() => createShuffledItems());

    useEffect(() => {
        setShuffledItems(createShuffledItems());
        setSelected([]);
        setMatched([]);
    }, [exercise.id]);

    const handleSelect = (item) => {
        if (matched.includes(item.id)) return;

        const newSelected = [...selected, item];
        setSelected(newSelected);

        if (newSelected.length === 2) {
            const [first, second] = newSelected;
            if (first.pairId === second.id) {
                setMatched([...matched, first.id, second.id]);
                setSelected([]);
                if (matched.length + 2 === exercise.pairs.length * 2) {
                    setTimeout(() => onAnswer(true), 500);
                }
            } else {
                setTimeout(() => setSelected([]), 1000);
            }
        }
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{t('matchPairs')}</h2>
            <div className="pairs-grid">
                {shuffledItems.map((item, idx) => (
                    <button
                        key={idx}
                        className={`pair-card ${selected.includes(item) ? 'selected' : ''} ${matched.includes(item.id) ? 'matched' : ''} ${selected.length === 2 && selected.includes(item) && !matched.includes(item.id) ? 'wrong' : ''}`}
                        onClick={() => handleSelect(item)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

const FillBlank = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState(null);
    const [shuffledOptions, setShuffledOptions] = useState(() => shuffleArray([...exercise.options]));

    useEffect(() => {
        setShuffledOptions(shuffleArray([...exercise.options]));
        setSelected(null);
    }, [exercise.id, exercise.question]);

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question}</h2>
            <div className="sentence-display">
                {exercise.sentenceParts.map((part, idx) => (
                    <span key={idx} className={part === "___" ? "blank-space" : ""}>
                        {part === "___" && selected ? selected : part}
                    </span>
                ))}
            </div>

            <div className="options-grid">
                {shuffledOptions.map((opt, idx) => (
                    <button
                        key={idx}
                        className={`option-card ${selected === opt ? 'selected' : ''}`}
                        onClick={() => setSelected(opt)}
                    >
                        <div className="option-text">{opt}</div>
                    </button>
                ))}
            </div>

            <div className="exercise-footer">
                <Button
                    variant={selected ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={() => selected && onAnswer(selected === exercise.correctOption)}
                    disabled={!selected}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

// Conversation Exercise Component
const Conversation = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [responses, setResponses] = useState({});
    const dialogue = exercise.dialogue || [];
    const correctOptions = exercise.correctOptions || [];
    
    // Initialize with shuffled dialogue
    const [shuffledDialogue, setShuffledDialogue] = useState(() => 
        dialogue.map(line => ({
            ...line,
            options: line.options ? shuffleArray([...line.options]) : undefined
        }))
    );

    useEffect(() => {
        // Shuffle options within each dialogue line that has options
        const shuffled = dialogue.map(line => ({
            ...line,
            options: line.options ? shuffleArray([...line.options]) : undefined
        }));
        setShuffledDialogue(shuffled);
        setResponses({});
    }, [exercise.id, exercise.question]);

    const handleSelect = (lineIndex, option) => {
        setResponses({ ...responses, [lineIndex]: option });
    };

    const checkAnswers = () => {
        const userResponses = Object.values(responses);
        const isCorrect = correctOptions.every((correct, idx) => userResponses[idx] === correct);
        onAnswer(isCorrect);
    };

    const allAnswered = Object.keys(responses).length === shuffledDialogue.filter(d => d.options).length;

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question || t('completeConversation')}</h2>
            <div className="conversation-container">
                {shuffledDialogue.map((line, idx) => (
                    <div key={idx} className={`dialogue-line ${line.speaker === 'You' ? 'user' : 'other'}`}>
                        <div className="speaker-label">{line.speaker}</div>
                        {line.options ? (
                            <div className="dialogue-options">
                                {line.options.map((opt, optIdx) => (
                                    <button
                                        key={optIdx}
                                        className={`dialogue-option ${responses[idx] === opt ? 'selected' : ''}`}
                                        onClick={() => handleSelect(idx, opt)}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="dialogue-text">{line.text}</div>
                        )}
                    </div>
                ))}
            </div>
            <div className="exercise-footer">
                <Button
                    variant={allAnswered ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={checkAnswers}
                    disabled={!allAnswered}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

// Cultural Note Exercise Component
const CulturalNote = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const quiz = exercise.quiz || {};
    const [shuffledQuizOptions, setShuffledQuizOptions] = useState(() => 
        quiz.options ? shuffleArray([...quiz.options]) : []
    );

    useEffect(() => {
        if (quiz.options) {
            setShuffledQuizOptions(shuffleArray([...quiz.options]));
        }
        setSelectedAnswer(null);
    }, [exercise.id, exercise.question]);

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question || t('culturalNote')}</h2>
            <div className="cultural-note-content">
                <p className="cultural-text">{exercise.content}</p>
                {quiz.question && (
                    <div className="quiz-section">
                        <h3>{quiz.question}</h3>
                        <div className="options-grid">
                            {shuffledQuizOptions.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className={`option-card ${selectedAnswer === opt ? 'selected' : ''}`}
                                    onClick={() => setSelectedAnswer(opt)}
                                >
                                    <div className="option-text">{opt}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="exercise-footer">
                <Button
                    variant={selectedAnswer ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={() => onAnswer(selectedAnswer === quiz.correct)}
                    disabled={!selectedAnswer}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

// Vocabulary Grid Exercise Component
const VocabularyGrid = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const items = exercise.items || [];

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question || t('learnVocabulary')}</h2>
            <div className="vocabulary-grid">
                {items.map((item, idx) => (
                    <div key={idx} className="vocabulary-card">
                        {item.image && <div className="vocab-image"><IconRenderer emoji={item.image} size={48} /></div>}
                        <div className="vocab-kurdish">{item.kurdish}</div>
                        <div className="vocab-english">{item.english}</div>
                    </div>
                ))}
            </div>
            <div className="exercise-footer">
                <Button variant="primary" size="lg" fullWidth onClick={() => onAnswer(true)}>
                    {t('continue')}
                </Button>
            </div>
        </div>
    );
};

// Image Match Exercise Component  
const ImageMatch = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [selected, setSelected] = useState([]);
    const [matched, setMatched] = useState([]);
    const pairs = exercise.pairs || [];

    // Create shuffled items in state to avoid re-shuffling on every render
    const createShuffledItems = () => {
        return shuffleArray(pairs.flatMap(p => [
            { id: `img-${p.image}`, type: 'image', value: p.image, pairId: p.kurdish },
            { id: `text-${p.kurdish}`, type: 'text', value: p.kurdish, pairId: p.image }
        ]));
    };
    
    const [items, setItems] = useState(() => createShuffledItems());

    useEffect(() => {
        setItems(createShuffledItems());
        setSelected([]);
        setMatched([]);
    }, [exercise.id]);

    const handleSelect = (item) => {
        if (matched.includes(item.id)) return;

        const newSelected = [...selected, item];
        setSelected(newSelected);

        if (newSelected.length === 2) {
            const [first, second] = newSelected;
            if (first.pairId === second.value || second.pairId === first.value) {
                const newMatched = [...matched, first.id, second.id];
                setMatched(newMatched);
                setSelected([]);
                if (newMatched.length === pairs.length * 2) {
                    setTimeout(() => onAnswer(true), 500);
                }
            } else {
                setTimeout(() => setSelected([]), 800);
            }
        }
    };

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question || t('matchImages')}</h2>
            <div className="image-match-grid">
                {items.map((item, idx) => (
                    <button
                        key={idx}
                        className={`match-card ${selected.find(s => s.id === item.id) ? 'selected' : ''} ${matched.includes(item.id) ? 'matched' : ''}`}
                        onClick={() => handleSelect(item)}
                    >
                        {item.type === 'image' ? (
                            <IconRenderer emoji={item.value} size={40} />
                        ) : (
                            <span className="match-text">{item.value}</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Story Completion Exercise Component
const StoryCompletion = ({ exercise, onAnswer }) => {
    const { t } = useLanguage();
    const [answers, setAnswers] = useState({});
    const blanks = exercise.blanks || [];
    const options = exercise.options || [];
    const story = exercise.story || '';
    const [shuffledOptions, setShuffledOptions] = useState(() => shuffleArray([...options]));

    useEffect(() => {
        setShuffledOptions(shuffleArray([...options]));
        setAnswers({});
    }, [exercise.id, exercise.question]);

    const storyParts = story.split('_');

    const handleSelect = (blankIndex, option) => {
        setAnswers({ ...answers, [blankIndex]: option });
    };

    const checkAnswers = () => {
        const isCorrect = blanks.every((blank, idx) => answers[idx] === blank);
        onAnswer(isCorrect);
    };

    const allFilled = Object.keys(answers).length === blanks.length;

    return (
        <div className="exercise-container">
            <h2 className="exercise-question">{exercise.question || t('completeStory')}</h2>
            <div className="story-container">
                <div className="story-text">
                    {storyParts.map((part, idx) => (
                        <span key={idx}>
                            {part}
                            {idx < storyParts.length - 1 && (
                                <span className={`story-blank ${answers[idx] ? 'filled' : ''}`}>
                                    {answers[idx] || '___'}
                                </span>
                            )}
                        </span>
                    ))}
                </div>
                <div className="story-options">
                    {shuffledOptions.map((opt, idx) => (
                        <button
                            key={idx}
                            className={`story-option ${Object.values(answers).includes(opt) ? 'used' : ''}`}
                            onClick={() => {
                                const nextBlank = Object.keys(answers).length;
                                if (nextBlank < blanks.length && !Object.values(answers).includes(opt)) {
                                    handleSelect(nextBlank, opt);
                                }
                            }}
                            disabled={Object.values(answers).includes(opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
            <div className="exercise-footer">
                <Button
                    variant={allFilled ? "primary" : "disabled"}
                    size="lg"
                    fullWidth
                    onClick={checkAnswers}
                    disabled={!allFilled}
                >
                    {t('check')}
                </Button>
            </div>
        </div>
    );
};

export default Lesson;
