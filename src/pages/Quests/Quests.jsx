import React from 'react';
import { Target, CheckCircle, Lock } from 'lucide-react';

const Quests = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Daily Quests</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Target size={40} color="var(--color-primary)" />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>Earn 50 XP</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px', overflow: 'hidden' }}>
                            <div style={{ width: '40%', height: '100%', background: 'var(--color-gold)' }}></div>
                        </div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-gold)' }}>20/50</span>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
                    <CheckCircle size={40} color="var(--color-text-light)" />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>Complete 1 Lesson</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px' }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>0/1</span>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
                    <Lock size={40} color="var(--color-text-light)" />
                    <div style={{ flex: 1 }}>
                        <h3 style={{ margin: 0 }}>Score 90% in a lesson</h3>
                        <div style={{ height: '10px', background: '#e5e5e5', borderRadius: '5px', marginTop: '8px' }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-text-light)' }}>Locked</span>
                </div>
            </div>
        </div>
    );
};

export default Quests;
