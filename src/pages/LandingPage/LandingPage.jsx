import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './LandingPage.css';

const LandingPage = () => {
    const { t, language, toggleLanguage } = useLanguage();

    return (
        <div className="landing-page">
            <header className="landing-header">
                <div className="container header-content">
                    <div className="logo">
                        <h1 className="logo-text">KurdLingo</h1>
                    </div>
                    <div className="site-lang-selector" onClick={toggleLanguage}>
                        <span className="lang-text">{t('siteLanguage')}: {language.toUpperCase()}</span>
                        <Globe size={20} />
                    </div>
                </div>
            </header>

            <main className="landing-hero">
                <div className="container hero-content">
                    <div className="hero-image-container">
                        {/* Placeholder for Hero Image - In a real app, this would be a mascot SVG */}
                        <div className="hero-placeholder">
                            <Globe size={120} color="var(--color-primary)" />
                        </div>
                    </div>

                    <div className="hero-text">
                        <h1 className="hero-title">{t('slogan')}</h1>
                        <div className="hero-buttons">
                            <Link to="/learn" style={{ width: '100%' }}>
                                <Button variant="primary" size="lg" fullWidth>
                                    {t('getStarted')}
                                </Button>
                            </Link>
                            <Link to="/login" style={{ width: '100%' }}>
                                <Button variant="secondary" size="lg" fullWidth>
                                    {t('haveAccount')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="landing-footer">
                <div className="container">
                    <p>© 2025 KurdLingo</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
