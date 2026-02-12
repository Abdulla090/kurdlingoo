import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Zap,
    Globe,
    Star,
    Users,
    Menu,
    X,
    MessageCircle,
    BookOpen,
    Trophy,
    ArrowRight
} from 'lucide-react';
import './LandingPage.css';
import { useLanguage } from '../../context/LanguageContext';
import mascotImg from '../../assets/mascot.png';

const LandingPage: React.FC = () => {
    const { language, toggleLanguage, isRTL } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Explicitly handle RTL for the entire page wrapper based on language
    const dir = isRTL ? 'rtl' : 'ltr';

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="landing-page">
            {/* Navbar */}
            <nav className="lp-navbar">
                <div className="lp-navbar-content">
                    <Link to="/" className="lp-logo">
                        <div className="lp-logo-icon">
                            {/* Using mascot as logo icon if small enough, or just emoji/icon */}
                            <img src={mascotImg} alt="KurdLingo" style={{ height: '100%', objectFit: 'contain' }} />
                        </div>
                        <span>KurdLingo</span>
                    </Link>

                    {/* Desktop Ctrls */}
                    <div className="lp-nav-links hidden-mobile">
                        <Link to="/features" className="lp-nav-link">Features</Link>
                        <Link to="/method" className="lp-nav-link">Method</Link>
                        <Link to="/reviews" className="lp-nav-link">Reviews</Link>
                        <Link to="/leaderboard" className="lp-nav-link">Community</Link>
                    </div>

                    <div className="lp-nav-actions">
                        <button className="btn btn-ghost hidden-mobile" onClick={toggleLanguage}>
                            <Globe size={20} style={{ marginInlineEnd: 8 }} />
                            {language === 'en' ? 'EN' : 'CKB'}
                        </button>

                        <Link to="/login" className="btn btn-ghost hidden-mobile" style={{ fontWeight: 800 }}>
                            Log in
                        </Link>
                        <Link to="/learn" className="btn btn-primary">
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="btn btn-ghost md:hidden"
                            style={{ display: 'none' }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="lp-hero">
                <motion.div
                    className="lp-hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="lp-badge">
                        <Star size={16} fill="#ffc800" color="#ffc800" style={{ marginInlineEnd: 8 }} />
                        <span>#1 Kurdish Learning App</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="lp-headline">
                        The free, fun, and effective way to learn Kurdish!
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="lp-subheadline">
                        Learning with KurdLingo is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="lp-hero-buttons">
                        <Link to="/learn" className="btn btn-3d-action" style={{ padding: '0 40px', display: 'flex', alignItems: 'center', height: '60px', fontWeight: '800', textDecoration: 'none', fontSize: '1.2rem', minWidth: '200px', justifyContent: 'center' }}>
                            GET STARTED
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lp-hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Using the Mascot Image prominently like Duolingo */}
                    <img
                        src={mascotImg}
                        alt="KurdLingo Mascot"
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: 'auto',
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                        }}
                    />
                </motion.div>
            </header>

            {/* Features Icons Strip */}
            <div style={{ borderTop: '2px solid var(--lp-border)', borderBottom: '2px solid var(--lp-border)', padding: '60px 0', background: 'white' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', padding: '0 24px' }}>

                    <div style={{ textAlign: 'center', maxWidth: '250px' }}>
                        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <Trophy size={48} color="#ffc800" /> {/* Gold */}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: 'var(--lp-text-title)' }}>Gamified Learning</h3>
                        <p style={{ color: 'var(--lp-text-body)' }}>Earn points, unlock levels, and compete on the leaderboard.</p>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '250px' }}>
                        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <Sparkles size={48} color="#58cc02" /> {/* Green */}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: 'var(--lp-text-title)' }}>Effective Methods</h3>
                        <p style={{ color: 'var(--lp-text-body)' }}>Research-backed lessons to help you retain what you learn.</p>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '250px' }}>
                        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <MessageCircle size={48} color="#1cb0f6" /> {/* Blue */}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: 'var(--lp-text-title)' }}>Speak Confidently</h3>
                        <p style={{ color: 'var(--lp-text-body)' }}>Practice listening and speaking with interactive exercises.</p>
                    </div>
                </div>
            </div>


            {/* Bento / Detailed Features */}
            <section className="lp-section">
                <div className="lp-section-header">
                    <h2 className="lp-section-title">Why you'll love learning with KurdLingo</h2>
                </div>

                <div className="lp-bento-grid">
                    {/* Card 1 */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <Zap size={40} color="#ffc800" />
                        </div>
                        <div className="bento-content">
                            <h3>Effective & Efficient</h3>
                            <p>Our courses effectively and efficiently teach reading, listening, and speaking skills.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <Users size={40} color="#58cc02" />
                        </div>
                        <div className="bento-content">
                            <h3>Personalized Learning</h3>
                            <p>Combining the best of AI and language science, lessons are tailored to help you learn at just the right level.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bento-card">
                        <div className="bento-icon">
                            <BookOpen size={40} color="#1cb0f6" />
                        </div>
                        <div className="bento-content">
                            <h3>Stay Motivated</h3>
                            <p>We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phone Mockup Section (Replaces abstract one) */}
            <section style={{ maxWidth: '1000px', margin: '0 auto 100px', display: 'flex', alignItems: 'center', gap: '80px', padding: '0 24px', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2, color: 'var(--lp-text-title)' }}>
                        Boost your learning with Super KurdLingo
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--lp-text-body)', marginBottom: '32px' }}>
                        Learning a language on KurdLingo is completely free, but you can remove ads and support free education with Super.
                    </p>
                    <Link to="/shop" style={{ color: 'var(--lp-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', textDecoration: 'none' }}>
                        LEARN MORE ABOUT SUPER <ArrowRight size={20} />
                    </Link>
                </div>
                <div style={{ flex: 0.8, display: 'flex', justifyContent: 'center' }}>
                    {/* Simpler graphic representation */}
                    <div style={{ width: '300px', height: '500px', background: 'white', border: '4px solid #e5e5e5', borderRadius: '40px', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <div style={{ height: '60px', background: '#58cc02', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>LESSON COMPLETED!</div>
                        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎯</div>
                            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#3c3c3c' }}>Perfect Lesson!</h3>
                            <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <div style={{ padding: '10px 20px', background: '#ffc800', borderRadius: '12px', color: 'white', fontWeight: 800 }}>
                                    +10 XP
                                </div>
                                <div style={{ padding: '10px 20px', background: '#1cb0f6', borderRadius: '12px', color: 'white', fontWeight: 800 }}>
                                    +5 Gems
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                            <div style={{ background: '#58cc02', color: 'white', padding: '16px', borderRadius: '16px', fontWeight: 800, textAlign: 'center', borderBottom: '4px solid #46a302' }}>CONTINUE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="lp-cta">
                <div className="lp-cta-content">
                    <h2>Ready to start your journey?</h2>
                    <Link to="/learn" className="btn btn-cta-white" style={{ height: '60px', padding: '0 40px', fontSize: '1.2rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', borderRadius: '16px' }}>
                        START LEARNING
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="lp-footer">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="lp-logo" style={{ marginBottom: '16px' }}>
                            <span>KurdLingo</span>
                        </div>
                        <p style={{ color: '#777' }}>The mission of KurdLingo is to make the Kurdish language accessible to everyone.</p>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ fontWeight: 800, marginBottom: '20px', color: '#3c3c3c' }}>About</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><Link to="/courses" style={{ color: '#777', textDecoration: 'none' }}>Courses</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/mission" style={{ color: '#777', textDecoration: 'none' }}>Mission</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/team" style={{ color: '#777', textDecoration: 'none' }}>Team</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ fontWeight: 800, marginBottom: '20px', color: '#3c3c3c' }}>Product</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><Link to="/super" style={{ color: '#777', textDecoration: 'none' }}>Super KurdLingo</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/schools" style={{ color: '#777', textDecoration: 'none' }}>KurdLingo for Schools</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ fontWeight: 800, marginBottom: '20px', color: '#3c3c3c' }}>Help</h4>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><Link to="/guidelines" style={{ color: '#777', textDecoration: 'none' }}>Guidelines</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/faq" style={{ color: '#777', textDecoration: 'none' }}>FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div style={{ textAlign: 'center', marginTop: '60px', color: '#afafaf', fontSize: '0.8rem' }}>© 2024 KurdLingo</div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
