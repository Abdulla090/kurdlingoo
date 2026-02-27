import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Globe, ArrowRight, Brain, Sparkles, LayoutGrid } from 'lucide-react';
import './LandingPage.css';
import { useLanguage } from '../../context/LanguageContext';
import mascotImg from '../../assets/mascot.png';
import appMockup from '../../assets/app_mockup.png';

export default function LandingPage() {
    const { language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Framer Motion Variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 20 }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="lp-wrapper">
            {/* ─── Modern Minimal Header ─── */}
            <header className={`lp-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container-inner">
                    <div className="lp-header-content">
                        <Link to="/" className="brand-logo">
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                                <img src={mascotImg} alt="Logo" style={{ display: 'inline-block' }} />
                            </motion.div>
                            KurdLingo
                        </Link>

                        <nav className="nav-links">
                            <a href="#platform">Platform</a>
                            <a href="#solutions">Solutions</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#company">Company</a>
                        </nav>

                        <div className="nav-actions">
                            <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
                                <Globe size={16} /> {language === 'en' ? 'EN' : 'کوردی'}
                            </button>
                            <Link to="/login" className="login-btn">Log In</Link>
                            <Link to="/learn" className="start-btn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* ─── Hero Section ─── */}
            <section className="hero-section container-inner">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeUp} className="hero-pill">
                        <div className="hero-pill-indicator"></div>
                        KurdLingo 2.0 is now live
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="hero-title">
                        Learn Kurdish.<br />
                        <span>Without the friction.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="hero-subtitle">
                        A beautifully engineered language platform featuring AI-driven lessons, intelligent spaced repetition, and real-time conversation practice. Fluent, fast, and completely free.
                    </motion.p>

                    <motion.div variants={fadeUp} className="hero-ctas">
                        <Link to="/learn" className="btn-large-primary">
                            Start learning for free <ArrowRight size={20} />
                        </Link>
                        <a href="#platform" className="btn-large-outline">
                            Explore platform
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* ─── Grid Showcase ─── */}
            <section id="platform" className="bento-showcase container-inner">
                <motion.div
                    className="bento-grid-clean"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {/* UI Mockup Cell */}
                    <motion.div className="bc-card cell-app-preview" variants={fadeUp}>
                        <img src={appMockup} alt="App Interface" />
                    </motion.div>

                    {/* Stats Cell */}
                    <motion.div className="bc-card cell-stats" variants={fadeUp}>
                        <div className="stat-circle">
                            <strong>AI</strong>
                            <span>Native</span>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>Built for humans.</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>Seamlessly interact with AI tutors that adapt strictly to your pace and vocabulary level.</p>
                        </div>
                    </motion.div>

                    {/* Feature 1 */}
                    <motion.div className="bc-card cell-feature" variants={fadeUp}>
                        <div className="cf-icon">
                            <Brain size={28} />
                        </div>
                        <h3>NeuroMatch Recalls</h3>
                        <p>Our intelligent system tracks every mistake and ensures you practice vocabulary right before you are about to forget it.</p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div className="bc-card cell-feature" variants={fadeUp}>
                        <div className="cf-icon" style={{ color: 'var(--primary)', background: 'var(--primary-glow)', borderColor: 'rgba(16,185,129,0.3)' }}>
                            <Sparkles size={28} />
                        </div>
                        <h3>Voice & Roleplay</h3>
                        <p>Speak confidently in real-world scenarios. Practice ordering coffee, negotiating, or casual talks with a lifelike AI partner.</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div className="bc-card cell-feature" variants={fadeUp}>
                        <div className="cf-icon">
                            <LayoutGrid size={28} />
                        </div>
                        <h3>Gamified Architecture</h3>
                        <p>Stay motivated with perfectly tuned progression systems, leaderboards, and interactive mini-games that make studying addictive.</p>
                    </motion.div>

                </motion.div>
            </section>

            {/* ─── Minimal Footer ─── */}
            <footer className="lp-footer-clean">
                <div className="container-inner">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <img src={mascotImg} alt="KurdLingo" />
                            <p>KurdLingo is modernizing language acquisition through state-of-the-art AI infrastructure and cognitive science principles.</p>
                        </div>

                        <div className="footer-links">
                            <div className="col">
                                <h4>Product</h4>
                                <Link to="/learn">Curriculum</Link>
                                <Link to="/gamification">Gamification</Link>
                                <Link to="/dictionary">Dictionary</Link>
                            </div>
                            <div className="col">
                                <h4>Community</h4>
                                <Link to="/leaderboard">Leaderboards</Link>
                                <a href="#">Discord Server</a>
                                <a href="#">Open Source</a>
                            </div>
                            <div className="col">
                                <h4>Legal</h4>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Service</a>
                                <a href="#">Contact Support</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2026 KurdLingo Inc. All rights reserved.</span>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <span>Made with precision.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
