import React from 'react';
import { User, Clock, CheckCircle, Flame, Zap } from 'lucide-react';

const Profile = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ width: '120px', height: '120px', background: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', border: '4px solid white', boxShadow: '0 0 0 4px var(--color-border)' }}>
                    👤
                </div>
                <div>
                    <h1 style={{ margin: 0, fontSize: '2.5rem' }}>You</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>Joined November 2025</p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}><Flame color="#ff9600" fill="#ff9600" /> 5</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}><Zap color="#ffc800" fill="#ffc800" /> 450 XP</span>
                    </div>
                </div>
            </div>

            <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>Statistics</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Flame size={32} color="#ff9600" />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5</div>
                        <div style={{ color: 'var(--color-text-secondary)' }}>Day Streak</div>
                    </div>
                </div>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Zap size={32} color="#ffc800" />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>450</div>
                        <div style={{ color: 'var(--color-text-secondary)' }}>Total XP</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
