import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Star, ChatCircle, Hash, Palette, Clock, UsersThree, ShoppingCart,
    MapPin, CloudSun, ForkKnife, Lock, CheckCircle, Crown, Trophy,
    BookOpenText, Lightning, Rocket
} from '@phosphor-icons/react';
import { useLanguage } from '../../context/LanguageContext';
import { unit3 } from '../../data/courses/unit3';
import { unit4 } from '../../data/courses/unit4';
import { unit5 } from '../../data/courses/unit5';
import {
    isLessonCompleted,
    isLessonUnlocked,
    isUnitCompleted
} from '../../utils/progressManager';
import './ElementaryLearn.css';
import '../Learn/Learn.css'; // Share the core path styles
import { Unit } from '../../types';

// Green / teal theme for Elementary level
const UNIT_THEMES = [
    { gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#10b981', shadow: '#065f46' },
    { gradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)', color: '#06b6d4', shadow: '#155e75' },
    { gradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#22c55e', shadow: '#14532d' },
];

const ElementaryLearn: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useLanguage();
    const [units, setUnits] = React.useState<Unit[]>([]);

    const getLessonIcon = (title: string) => {
        if (!title) return Star;
        const lower = title.toLowerCase();
        if (lower.includes('basics') || lower.includes('بنەڕەت')) return Star;
        if (lower.includes('greeting') || lower.includes('سڵاو')) return ChatCircle;
        if (lower.includes('number') || lower.includes('ژمار')) return Hash;
        if (lower.includes('color') || lower.includes('ڕەنگ')) return Palette;
        if (lower.includes('time') || lower.includes('کات')) return Clock;
        if (lower.includes('family') || lower.includes('خێزان')) return UsersThree;
        if (lower.includes('shop') || lower.includes('بازاڕ')) return ShoppingCart;
        if (lower.includes('direction') || lower.includes('ئاڕاستە')) return MapPin;
        if (lower.includes('weather') || lower.includes('کەش')) return CloudSun;
        if (lower.includes('food') || lower.includes('dish') || lower.includes('خواردن')) return ForkKnife;
        return Star;
    };

    React.useEffect(() => {
        const loadUnits = () => {
            const savedUnits = localStorage.getItem('kurdlingo-elementary-units');
            if (savedUnits) {
                try {
                    const parsed = JSON.parse(savedUnits);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setUnits(parsed);
                        return;
                    }
                } catch (e) {
                    console.error('Error parsing saved elementary units:', e);
                }
            }
            setUnits([unit3, unit4, unit5]);
        };

        loadUnits();

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') loadUnits();
        };
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'kurdlingo-elementary-units') loadUnits();
        };
        const handleFocus = () => loadUnits();

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleFocus);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleFocus);
        };
    }, [location.key]);

    return (
        <div className="elem-page">
            {/* Level Toggle Header */}
            <div className="elem-level-header">
                <div className="elem-level-tabs">
                    <button
                        className="elem-level-tab"
                        onClick={() => navigate('/learn')}
                    >
                        <Star size={18} weight="fill" />
                        Beginner
                    </button>
                    <button className="elem-level-tab active">
                        <Lightning size={18} weight="fill" />
                        Elementary
                    </button>
                    <button
                        className="elem-level-tab"
                        onClick={() => navigate('/intermediate')}
                    >
                        <Rocket size={18} weight="fill" />
                        Intermediate
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="elem-main">
                {units.map((unit, unitIndex) => {
                    const theme = UNIT_THEMES[unitIndex % UNIT_THEMES.length];

                    return (
                        <div className="elem-unit-section" key={unit.id}>
                            {/* Unit Header */}
                            <div
                                className="unit-header"
                                style={{ background: theme.gradient }}
                            >
                                <div className="unit-info">
                                    <h2 style={{color: '#ffffff'}}>{unit.title}</h2>
                                    <p style={{color: '#ffffff'}}>{unit.description}</p>
                                </div>
                                <button
                                    className="btn-guidebook"
                                    onClick={() => navigate(`/guidebook/${unit.id}`)}
                                >
                                    <BookOpenText size={20} weight="fill" />
                                    <span style={{color: '#ffffff'}}>{t('guidebook') || 'GUIDEBOOK'}</span>
                                </button>
                            </div>

                            {/* Learning Path */}
                            <div className="learning-path">
                                {unit.lessons.map((lesson, index) => {
                                    const Icon = getLessonIcon(lesson.title);
                                    const completed = isLessonCompleted(lesson.id);
                                    const unlocked = isLessonUnlocked(lesson.id, unit.lessons);
                                    const isCurrent = unlocked && !completed;
                                    const isLocked = !unlocked;

                                    let positionClass = '';
                                    if (index % 4 === 1) positionClass = 'right';
                                    if (index % 4 === 3) positionClass = 'left';

                                    const nextIndex = index + 1;
                                    let nextPositionClass = '';
                                    if (nextIndex < unit.lessons.length) {
                                        if (nextIndex % 4 === 1) nextPositionClass = 'right';
                                        else if (nextIndex % 4 === 3) nextPositionClass = 'left';
                                        else nextPositionClass = 'center';
                                    }

                                    const handleClick = (e: React.MouseEvent) => {
                                        if (isLocked) e.preventDefault();
                                    };

                                    const lessonPath = `/lesson/${lesson.id}`;
                                    const isLastLesson = index === unit.lessons.length - 1;

                                    return (
                                        <React.Fragment key={lesson.id}>
                                            <Link
                                                to={isLocked ? '#' : lessonPath}
                                                className={`path-node ${positionClass} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
                                                onClick={handleClick}
                                                aria-disabled={isLocked}
                                            >
                                                <div
                                                    className="node-circle"
                                                    style={{
                                                        '--node-bg': isCurrent || completed ? theme.gradient : '#e5e7eb',
                                                        '--node-shadow': isCurrent || completed ? theme.shadow : '#d1d5db',
                                                        '--node-text': isCurrent || completed ? '#ffffff' : '#9ca3af',
                                                        '--node-accent': theme.color
                                                    } as React.CSSProperties}
                                                >
                                                    {isLocked ? (
                                                        <Lock size={32} weight="fill" color="var(--node-text)" />
                                                    ) : (
                                                        <Icon size={36} weight="fill" color="var(--node-text)" />
                                                    )}

                                                    {isCurrent && (
                                                        <div className="start-bubble" style={{ color: theme.shadow, borderColor: theme.shadow }}>
                                                            <span style={{color: '#ffffff'}}>{t('start') || 'START'}</span>
                                                        </div>
                                                    )}

                                                    {isCurrent && (
                                                        <div className="crown-badge">
                                                            <Crown size={42} weight="fill" color="#fbbf24" style={{ filter: 'drop-shadow(0 2px 0 #b45309)' }} />
                                                        </div>
                                                    )}

                                                    {completed && (
                                                        <div className="completed-badge">
                                                            <CheckCircle size={24} weight="fill" color={theme.color} />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="node-tooltip">{lesson.title}</div>
                                            </Link>

                                            {/* Snake connector */}
                                            {!isLastLesson && (() => {
                                                const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
                                                const flip = isRTL ? -1 : 1;
                                                const fromX = (positionClass === 'right' ? 70 : positionClass === 'left' ? -70 : 0) * flip;
                                                const toPos = nextPositionClass || 'center';
                                                const toX = (toPos === 'right' ? 70 : toPos === 'left' ? -70 : 0) * flip;
                                                const x1 = 100 + fromX;
                                                const x2 = 100 + toX;
                                                const svgH = 60;
                                                const d = `M ${x1},0 C ${x1},${svgH * 0.55} ${x2},${svgH * 0.45} ${x2},${svgH}`;

                                                return (
                                                    <svg
                                                        className={`path-snake ${completed ? 'path-snake--active' : ''}`}
                                                        viewBox="0 0 200 60"
                                                        preserveAspectRatio="none"
                                                        style={{ '--snake-color': theme.color } as React.CSSProperties}
                                                    >
                                                        <path d={d} fill="none" stroke="#d1d5db" strokeWidth="5" strokeLinecap="round" />
                                                        {completed && (
                                                            <path d={d} fill="none" stroke={theme.color} strokeWidth="5" strokeLinecap="round" />
                                                        )}
                                                    </svg>
                                                );
                                            })()}
                                        </React.Fragment>
                                    );
                                })}

                                {/* Trophy */}
                                <div className={`path-node trophy-node ${isUnitCompleted(unit.lessons) ? 'completed' : ''}`}>
                                    <div className="node-circle">
                                        <Trophy
                                            size={56}
                                            weight="fill"
                                            color={isUnitCompleted(unit.lessons) ? '#fbbf24' : '#d4d4d4'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right Sidebar */}
            <div className="elem-sidebar-right">
                <div className="elem-glass-panel elem-info-card">
                    <div className="elem-info-icon">🌱</div>
                    <h3>Elementary Level</h3>
                    <p>
                        Build on your beginner skills! Learn vocabulary for everyday situations
                        like food, shopping, weather, directions, and more.
                    </p>
                    <div className="elem-difficulty-badge">
                        <span>⚡ Intermediate Difficulty</span>
                    </div>
                </div>

                <div
                    className="elem-glass-panel elem-back-card"
                    onClick={() => navigate('/learn')}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '';
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, #ff9600 0%, #cc7800 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Star size={28} weight="fill" color="#fff" />
                        </div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Beginner Level</h3>
                            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                                Go back to basics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElementaryLearn;
