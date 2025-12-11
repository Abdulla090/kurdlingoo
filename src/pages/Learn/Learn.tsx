import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// Phosphor Icons - Modern 2025 icons with fill variants
import {
    Star, ChatCircle, Hash, Palette, Clock, UsersThree, ShoppingCart,
    MapPin, CloudSun, ForkKnife, Airplane, DeviceMobile, Briefcase,
    Stethoscope, CalendarCheck, ChatTeardrop, Bank, MusicNotes,
    GlobeHemisphereWest, Crown, Lock, CheckCircle, BookOpenText,
    Fire, Lightning, Trophy
} from '@phosphor-icons/react';
import { unit1 } from '../../data/courses/unit1';
import { unit2 } from '../../data/courses/unit2';
import { unit3 } from '../../data/courses/unit3';
import { unit4 } from '../../data/courses/unit4';
import { useLanguage } from '../../context/LanguageContext';
import {
    isLessonCompleted,
    isLessonUnlocked,
    getUserStats,
    isUnitCompleted
} from '../../utils/progressManager';
import './Learn.css';

import { Unit } from '../../types';

// Unit color schemes
const UNIT_THEMES = [
    { gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', color: '#22c55e', shadow: '#15803d' },
    { gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#3b82f6', shadow: '#1d4ed8' },
    { gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: '#ef4444', shadow: '#b91c1c' },
    { gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', color: '#a855f7', shadow: '#7c3aed' },
];

const Learn: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Track location changes
    const { t } = useLanguage();
    const [units, setUnits] = React.useState<Unit[]>([]);
    const [userStats, setUserStats] = React.useState(getUserStats());

    // Modern Phosphor Icon mapping
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
        if (lower.includes('food') || lower.includes('dining') || lower.includes('خواردن')) return ForkKnife;
        if (lower.includes('travel') || lower.includes('گەشت')) return Airplane;
        if (lower.includes('tech') || lower.includes('تەکنە')) return DeviceMobile;
        if (lower.includes('business') || lower.includes('work') || lower.includes('کار')) return Briefcase;
        if (lower.includes('health') || lower.includes('تەندروست')) return Stethoscope;
        if (lower.includes('appointment') || lower.includes('مۆڵەت')) return CalendarCheck;
        if (lower.includes('opinion') || lower.includes('بۆچوون')) return ChatTeardrop;
        if (lower.includes('bank') || lower.includes('بانک')) return Bank;
        if (lower.includes('culture') || lower.includes('کەلتوور')) return GlobeHemisphereWest;
        if (lower.includes('holiday') || lower.includes('جەژن')) return MusicNotes;
        return Star;
    };

    React.useEffect(() => {
        // Load units from localStorage OR fallback to default units
        const loadUnits = () => {
            const savedUnits = localStorage.getItem('kurdlingo-units');
            if (savedUnits) {
                try {
                    const parsed = JSON.parse(savedUnits);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setUnits(parsed);
                        console.log('✅ Loaded units from localStorage:', parsed.length, 'units');
                        return;
                    }
                } catch (e) {
                    console.error('Error parsing saved units:', e);
                }
            }
            // Fallback to default units
            setUnits([unit1, unit2, unit3, unit4]);
            console.log('📚 Using default units');
        };

        loadUnits();

        // Update stats
        setUserStats(getUserStats());

        // Listen for visibility change (when user comes back to this tab)
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                loadUnits(); // Reload units when tab becomes visible
                setUserStats(getUserStats());
            }
        };

        // Listen for storage changes (from other tabs)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'kurdlingo-units') {
                loadUnits();
            }
        };

        // Listen for focus (when window gains focus)
        const handleFocus = () => {
            loadUnits();
            setUserStats(getUserStats());
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('focus', handleFocus);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('focus', handleFocus);
        };
    }, [location.key]); // Re-run when navigating back to this page

    return (
        <div className="learn-page">
            {/* ========== MAIN CONTENT ========== */}
            <div className="learn-main">
                {units.map((unit, unitIndex) => {
                    const theme = UNIT_THEMES[unitIndex % UNIT_THEMES.length];

                    return (
                        <div className="unit-section" key={unit.id}>
                            {/* Unit Header */}
                            <div
                                className="unit-header"
                                style={{ background: theme.gradient }}
                            >
                                <div className="unit-info">
                                    <h2>{unit.title}</h2>
                                    <p>{unit.description}</p>
                                </div>
                                <button
                                    className="btn-guidebook"
                                    onClick={() => navigate(`/guidebook/${unit.id}`)}
                                >
                                    <BookOpenText size={20} weight="fill" />
                                    {t('guidebook')}
                                </button>
                            </div>

                            {/* Learning Path */}
                            <div className="learning-path">
                                {/* Lesson Nodes */}
                                {unit.lessons.map((lesson, index) => {
                                    const Icon = getLessonIcon(lesson.title);
                                    const completed = isLessonCompleted(lesson.id);
                                    const unlocked = isLessonUnlocked(lesson.id, unit.lessons);
                                    const isCurrent = unlocked && !completed;
                                    const isLocked = !unlocked;

                                    // Zigzag: 0=center, 1=right, 2=center, 3=left
                                    let positionClass = '';
                                    if (index % 4 === 1) positionClass = 'right';
                                    if (index % 4 === 3) positionClass = 'left';

                                    const handleClick = (e: React.MouseEvent) => {
                                        if (isLocked) e.preventDefault();
                                    };

                                    return (
                                        <Link
                                            to={isLocked ? '#' : `/lesson/${lesson.id}`}
                                            key={lesson.id}
                                            className={`path-node ${positionClass} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
                                            onClick={handleClick}
                                            aria-disabled={isLocked}
                                        >
                                            <div
                                                className="node-circle"
                                                style={completed ? {
                                                    background: theme.gradient,
                                                    boxShadow: `0 8px 0 ${theme.shadow}, 0 12px 24px rgba(0,0,0,0.2)`
                                                } : isCurrent ? {
                                                    borderColor: `${theme.color}40`,
                                                    boxShadow: `0 8px 0 ${theme.shadow}, 0 12px 24px ${theme.color}40, 0 0 0 8px ${theme.color}15`
                                                } : {}}
                                            >
                                                {isLocked ? (
                                                    <Lock size={32} weight="fill" color="#9ca3af" />
                                                ) : (
                                                    <Icon size={36} weight="fill" color={completed ? '#ffffff' : theme.color} />
                                                )}

                                                {/* Crown for current lesson */}
                                                {isCurrent && (
                                                    <div className="crown-badge">
                                                        <Crown size={28} weight="fill" color="#fbbf24" />
                                                    </div>
                                                )}

                                                {/* Checkmark for completed */}
                                                {completed && (
                                                    <div className="completed-badge">
                                                        <CheckCircle size={24} weight="fill" color="#ffffff" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="node-tooltip">{lesson.title}</div>
                                        </Link>
                                    );
                                })}

                                {/* Trophy */}
                                <div className={`path-node trophy-node ${isUnitCompleted(unit.lessons) ? 'completed' : ''}`}>
                                    <div className="node-circle">
                                        <Trophy
                                            size={56}
                                            weight="fill"
                                            color={isUnitCompleted(unit.lessons) ? "#fbbf24" : "#d4d4d4"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ========== RIGHT SIDEBAR ========== */}
            <div className="sidebar-right">
                {/* Stats Card */}
                <div className="glass-panel">
                    <h3>{t('myStats')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <Fire color="#ff9600" weight="fill" size={28} />
                            <span style={{ fontWeight: 700, fontSize: '17px', color: '#1f2937' }}>
                                {userStats.streak} {t('dayStreak')}
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <Lightning color="#ffc800" weight="fill" size={28} />
                            <span style={{ fontWeight: 700, fontSize: '17px', color: '#1f2937' }}>
                                {userStats.totalXp} XP
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <CheckCircle color="#22c55e" weight="fill" size={28} />
                            <span style={{ fontWeight: 700, fontSize: '17px', color: '#1f2937' }}>
                                {userStats.lessonsCompleted} {t('lessonsCompleted') || 'Lessons'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Daily Quests Card */}
                <div className="glass-panel">
                    <h3>{t('dailyQuests')}</h3>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 600, color: '#374151' }}>{t('earnXp')}</span>
                            <span style={{ fontSize: '15px', fontWeight: 800, color: '#fbbf24' }}>
                                {Math.min(userStats.totalXp, 50)}/50
                            </span>
                        </div>
                        <div style={{
                            height: '12px',
                            background: 'rgba(0,0,0,0.06)',
                            borderRadius: '12px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${Math.min((userStats.totalXp / 50) * 100, 100)}%`,
                                height: '100%',
                                background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
                                borderRadius: '12px',
                                transition: 'width 0.3s ease'
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;
