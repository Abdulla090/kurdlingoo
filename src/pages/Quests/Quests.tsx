import { useEffect, useState } from 'react';
import { Target, CheckCircle, Lock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getUserStats } from '../../utils/progressManager';

const Quests = () => {
    const { t } = useLanguage();
    const [stats, setStats] = useState(getUserStats());

    useEffect(() => {
        const handleFocus = () => setStats(getUserStats());
        window.addEventListener('focus', handleFocus);
        return () => window.removeEventListener('focus', handleFocus);
    }, []);

    const xpGoal = 50;
    const isXpGoalMet = stats.totalXp >= xpGoal;
    const xpProgress = Math.min((stats.totalXp / xpGoal) * 100, 100);

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>{t('dailyQuests')}</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Target size={40} color={isXpGoalMet ? "var(--color-success)" : "var(--color-primary)"} />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>{t('earnXp')}</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px', overflow: 'hidden' }}>
                            <div style={{ width: `${xpProgress}%`, height: '100%', background: 'var(--color-gold)', transition: 'width 0.3s' }}></div>
                        </div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-gold)' }}>{Math.min(stats.totalXp, xpGoal)}/{xpGoal}</span>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
                    <CheckCircle size={40} color="var(--color-text-light)" />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>{t('completeLesson')}</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px' }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>0/1</span>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
                    <Lock size={40} color="var(--color-text-light)" />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>{t('score90')}</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px' }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>{t('locked')}</span>
                </div>
            </div>
        </div>
    );
};

export default Quests;
