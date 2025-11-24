import React from 'react';
import { Heart, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Shop = () => {
    const { t } = useLanguage();

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>{t('shop')}</h1>

            <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '10px', marginBottom: '20px' }}>{t('powerUps')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', textAlign: 'center' }}>
                    <Heart size={48} color="#ff4b4b" fill="#ff4b4b" style={{ marginBottom: '1rem' }} />
                    <h3>{t('heartRefill')}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>{t('heartRefillDesc')}</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        <Zap size={16} fill="white" style={{ marginRight: '5px' }} /> 350 {t('gems')}
                    </button>
                </div>

                <div style={{ background: 'white', border: '2px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '1.5rem', textAlign: 'center' }}>
                    <Shield size={48} color="#1cb0f6" fill="#1cb0f6" style={{ marginBottom: '1rem' }} />
                    <h3>{t('streakFreeze')}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>{t('streakFreezeDesc')}</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        <Zap size={16} fill="white" style={{ marginRight: '5px' }} /> 200 {t('gems')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
