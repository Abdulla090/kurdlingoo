import React from 'react';
import { Heart, Zap, Shield } from 'lucide-react';

const Shop = () => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>Shop</h1>

            <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>Power-ups</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', textAlign: 'center' }}>
                    <Heart size={48} color="#ff4b4b" fill="#ff4b4b" style={{ marginBottom: '1rem' }} />
                    <h3>Heart Refill</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Get full health so you can worry less about making mistakes.</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        <Zap size={16} fill="white" style={{ marginRight: '5px' }} /> 350 Gems
                    </button>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', textAlign: 'center' }}>
                    <Shield size={48} color="#1cb0f6" fill="#1cb0f6" style={{ marginBottom: '1rem' }} />
                    <h3>Streak Freeze</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Keep your streak alive for one more day of inactivity.</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        <Zap size={16} fill="white" style={{ marginRight: '5px' }} /> 200 Gems
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
