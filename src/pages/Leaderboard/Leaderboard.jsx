import React from 'react';
import { Trophy, User } from 'lucide-react';

const Leaderboard = () => {
    const users = [
        { name: "You", xp: 450, rank: 1, avatar: "👤" },
        { name: "Ali", xp: 420, rank: 2, avatar: "👨" },
        { name: "Sara", xp: 380, rank: 3, avatar: "👩" },
        { name: "KurdLearner", xp: 300, rank: 4, avatar: "🧑" },
        { name: "Azad", xp: 250, rank: 5, avatar: "👱" },
    ];

    return (
        <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Leaderboard</h1>
            <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                {users.map((user, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.5rem',
                        borderBottom: index < users.length - 1 ? '2px solid var(--color-border)' : 'none',
                        background: user.rank === 1 ? '#f0fdf4' : 'white'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontWeight: 'bold', color: user.rank <= 3 ? 'var(--color-gold)' : 'var(--color-text-light)', width: '20px' }}>{user.rank}</span>
                            <div style={{ width: '40px', height: '40px', background: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                {user.avatar}
                            </div>
                            <span style={{ fontWeight: 'bold', color: user.name === "You" ? 'var(--color-primary)' : 'var(--color-text)' }}>{user.name}</span>
                        </div>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-text-secondary)' }}>{user.xp} XP</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
