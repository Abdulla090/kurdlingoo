import React from 'react';
import { Link } from 'react-router-dom';
import {
    Gamepad2,
    Sparkles,
    Zap,
    CheckCircle2,
    Trophy,
    Globe,
    ChevronDown
} from 'lucide-react';
import mascotImg from '../../assets/mascot.png';
import './LandingPage.css';
import { useLanguage } from '../../context/LanguageContext';

const LandingPage: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="landing-wrapper">
            {/* Background Decorations */}
            <div className="landing-bg-decorations">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-gradient-overlay"></div>
            </div>

            {/* Navbar */}
            <header className="lp-navbar">
                <div className="lp-navbar-content">
                    {/* Logo */}
                    <Link to="/" className="lp-navbar-logo">
                        <div className="lp-logo-icon">
                            <span>🦜</span>
                        </div>
                        <span className="lp-logo-text">KurdLingo</span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="lp-nav-links">
                        <Link to="/learn" className="lp-nav-link">Learn</Link>
                        <Link to="/guidebook" className="lp-nav-link">Guidebook</Link>
                        <Link to="/leaderboard" className="lp-nav-link">Leaderboard</Link>
                    </nav>

                    {/* Right Side */}
                    <div className="lp-navbar-right">
                        <button className="lp-lang-btn" onClick={toggleLanguage}>
                            <Globe size={18} />
                            <span>{language === 'en' ? 'کوردی' : 'English'}</span>
                            <ChevronDown size={14} />
                        </button>
                        <Link to="/learn" className="lp-nav-btn lp-nav-btn-primary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="lp-hero-wrapper">
                <div className="lp-hero-inner">
                    <div className="lp-hero-image-container">
                        <img src={mascotImg} alt="KurdLingo Mascot" className="lp-globe-img" />
                    </div>
                    <div className="lp-hero-content">
                        <h1 className="lp-headline">
                            The free, fun, and effective way to learn Kurdish!
                        </h1>
                        <div className="lp-btn-group">
                            <Link to="/learn" className="btn-3d btn-3d-primary">
                                <span className="btn-3d-shadow"></span>
                                <span className="btn-3d-face">Get Started</span>
                            </Link>
                            <Link to="/login" className="btn-3d btn-3d-secondary">
                                <span className="btn-3d-shadow btn-3d-shadow-secondary"></span>
                                <span className="btn-3d-face btn-3d-face-secondary">I already have an account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section className="lp-section">
                <div className="lp-section-inner">
                    <div className="lp-features-grid">
                        <div className="lp-feature-item">
                            <div className="lp-feature-icon-wrapper">
                                <Gamepad2 size={48} color="#58cc02" />
                            </div>
                            <h3 className="lp-feature-title">Gamified Learning</h3>
                            <p className="lp-feature-desc">
                                Earn points, unlock levels, and compete on the leaderboard. Learning feels like a game!
                            </p>
                        </div>
                        <div className="lp-feature-item">
                            <div className="lp-feature-icon-wrapper">
                                <Sparkles size={48} color="#ce82ff" />
                            </div>
                            <h3 className="lp-feature-title">Effective Methods</h3>
                            <p className="lp-feature-desc">
                                Our courses effectively teach reading, listening, and speaking skills.
                            </p>
                        </div>
                        <div className="lp-feature-item">
                            <div className="lp-feature-icon-wrapper">
                                <Zap size={48} color="#1cb0f6" />
                            </div>
                            <h3 className="lp-feature-title">Stay Motivated</h3>
                            <p className="lp-feature-desc">
                                We make it easy to form a habit of language learning with fun challenges and reminders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Preview Section */}
            <section className="lp-preview-section">
                <div className="lp-preview-inner">
                    <div className="lp-preview-text">
                        <h2 className="lp-preview-heading">free. fun. effective.</h2>
                        <p className="lp-preview-p">
                            Learning with KurdLingo is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
                        </p>
                        <Link to="/learn" className="btn-3d btn-3d-primary" style={{ maxWidth: '220px' }}>
                            <span className="btn-3d-shadow"></span>
                            <span className="btn-3d-face">START LEARNING</span>
                        </Link>
                    </div>
                    <div className="lp-preview-visual">
                        <div className="lp-floating-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <Trophy size={32} color="#ffc800" />
                                <div style={{ fontSize: '18px', fontWeight: '800', color: '#3c3c3c' }}>Daily Streak: 15</div>
                            </div>
                            <div style={{ height: '8px', background: '#e5e5e5', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: '60%', height: '100%', background: '#ffc800' }}></div>
                            </div>
                            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                                <CheckCircle2 size={24} color="#58cc02" />
                                <span style={{ color: '#777' }}>You completed Lesson 3!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="lp-footer">
                <h2 className="lp-footer-title">Learn Kurdish with KurdLingo</h2>
                <div className="lp-footer-links">
                    <span className="lp-footer-link">About</span>
                    <span className="lp-footer-link">School</span>
                    <span className="lp-footer-link">Apps</span>
                    <span className="lp-footer-link">Shop</span>
                    <span className="lp-footer-link">Careers</span>
                    <span className="lp-footer-link">Investors</span>
                    <span className="lp-footer-link">Terms</span>
                    <span className="lp-footer-link">Privacy</span>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
