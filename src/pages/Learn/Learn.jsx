import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Star, BookOpen, Trophy, Plus, Settings, Flame, Zap,
    MessageCircle, Hash, Palette, Clock, Users, ShoppingBag,
    MapPin, Cloud, Utensils, Plane, Smartphone, Briefcase,
    Stethoscope, Calendar, MessageSquare, Landmark, Music,
    Smile, Globe, Crown
} from 'lucide-react';
import Button from '../../components/Button/Button';
import { unit1 } from '../../data/courses/unit1';
import { unit2 } from '../../data/courses/unit2';
import { unit3 } from '../../data/courses/unit3';
import { unit4 } from '../../data/courses/unit4';
import { useLanguage } from '../../context/LanguageContext';
import './Learn.css';

const Learn = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();
    const [customLessons, setCustomLessons] = React.useState([]);
    const [units, setUnits] = React.useState([unit1, unit2, unit3, unit4]);

    // Helper to get modern icon based on title
    const getLessonIcon = (title) => {
        if (!title) return Star;
        const t = title.toLowerCase();
        if (t.includes('basics')) return Star;
        if (t.includes('greeting')) return MessageCircle;
        if (t.includes('number')) return Hash;
        if (t.includes('color')) return Palette;
        if (t.includes('time')) return Clock;
        if (t.includes('family')) return Users;
        if (t.includes('shop')) return ShoppingBag;
        if (t.includes('direction')) return MapPin;
        if (t.includes('weather')) return Cloud;
        if (t.includes('food') || t.includes('dining')) return Utensils;
        if (t.includes('travel')) return Plane;
        if (t.includes('tech')) return Smartphone;
        if (t.includes('business') || t.includes('work')) return Briefcase;
        if (t.includes('health')) return Stethoscope;
        if (t.includes('appointment')) return Calendar;
        if (t.includes('opinion')) return MessageSquare;
        if (t.includes('bank')) return Landmark;
        if (t.includes('culture')) return Globe;
        if (t.includes('holiday')) return Music;
        return Star; // Default
    };

    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('customLessons') || '[]');
        setCustomLessons(saved);

        // Load units from localStorage if they exist (edited in admin)
        const savedUnits = localStorage.getItem('kurdlingo-units');
        if (savedUnits) {
            setUnits(JSON.parse(savedUnits));
        }
    }, []);

    return (
        <div className="learn-page">
            {/* Left Sidebar REMOVED (Handled by Layout) */}

            {/* Main Content (Path) */}
            <div className="main-content">


                {/* Dynamic Units */}
                {units.map((unit, unitIndex) => {
                    const gradients = [
                        'linear-gradient(135deg, #58cc02 0%, #23ac00 100%)',
                        'linear-gradient(135deg, #ce82ff 0%, #a560ff 100%)',
                        'linear-gradient(135deg, #00cd9c 0%, #00a47d 100%)',
                        'linear-gradient(135deg, #ff4b4b 0%, #d33131 100%)'
                    ];
                    const bgGradient = gradients[unitIndex % gradients.length];

                    return (
                        <div className="unit-section" key={unit.id}>
                            <div className="unit-header" style={{ background: bgGradient }}>
                                <div className="unit-info">
                                    <h2>{unit.title}</h2>
                                    <p>{unit.description}</p>
                                </div>
                                <button className="btn-guidebook" onClick={() => navigate(`/guidebook/${unit.id}`)}>
                                    <BookOpen size={18} />
                                    {t('guidebook')}
                                </button>
                            </div>

                            <div className="learning-path">
                                {/* SVG Connector Line - Fixed & Styled */}
                                <svg className="path-connector" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path
                                        d="M50,0 C50,20 80,35 80,50 C80,65 50,80 50,100"
                                        fill="none"
                                        stroke="#e5e7eb"
                                        strokeWidth="4"
                                        strokeDasharray="8 8"
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>

                                {unit.lessons.map((lesson, index) => {
                                    const Icon = getLessonIcon(lesson.title);
                                    const isCurrent = index === 0;
                                    const isLocked = !isCurrent; // Lock others for visual demo

                                    // Calculate position for zig-zag
                                    // 0: center, 1: right, 2: center, 3: left
                                    let positionClass = '';
                                    if (index % 4 === 1) positionClass = 'right';
                                    if (index % 4 === 3) positionClass = 'left';

                                    return (
                                        <Link
                                            to={`/lesson/${lesson.id}`}
                                            key={lesson.id}
                                            className={`path-node ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''} ${positionClass}`}
                                        >
                                            <div className="node-circle">
                                                <Icon size={32} strokeWidth={2.5} />

                                                {/* Crown Badge (Only for unlocked/completed) */}
                                                {!isLocked && (
                                                    <div className="crown-badge">
                                                        <Crown size={16} fill="#fbbf24" color="#b45309" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="node-tooltip">{lesson.title}</div>
                                        </Link>
                                    );
                                })}

                                <div className="path-node trophy-node">
                                    <div className="node-circle">
                                        <Trophy size={40} fill="white" strokeWidth={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right Sidebar (Stats) */}
            <div className="sidebar-right">
                <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>{t('myStats')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Flame color="#ff9600" fill="#ff9600" />
                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>5 {t('dayStreak')}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Zap color="#ffc800" fill="#ffc800" />
                            <span style={{ fontWeight: 'bold', fontSize: '16px' }}>450 XP</span>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>{t('dailyQuests')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontSize: '14px' }}>{t('earnXp')}</span>
                                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>20/50</span>
                            </div>
                            <div style={{ height: '8px', background: '#e5e5e5', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '40%', height: '100%', background: '#ffc800' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;
