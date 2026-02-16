import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Menu, X, ArrowRight, Zap, MessageCircle, Gamepad2 } from 'lucide-react';
import './LandingPage.css';
import { useLanguage } from '../../context/LanguageContext';
import mascotImg from '../../assets/mascot.png';
import appMockup from '../../assets/app_mockup.png';
import SpotlightCard from '../../components/ReactBits/SpotlightCard';

const fade = {
    hidden: { opacity: 0, y: 16 },
    show: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d * 0.08, duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } }),
};
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] } },
};

export default function LandingPage() {
    const { language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <div className="lp">
            {/* ─── Nav ─── */}
            <nav className={`lp-nav${scrolled ? ' is-scrolled' : ''}`}>
                <div className="lp-nav-inner">
                    <Link to="/" className="lp-brand">
                        <img src={mascotImg} alt="" className="lp-brand-icon" />
                        <span>KurdLingo</span>
                    </Link>

                    <div className="lp-links">
                        <a href="#features">Features</a>
                        <a href="#product">Product</a>
                        <Link to="/leaderboard">Community</Link>
                    </div>

                    <div className="lp-nav-end">
                        <button className="lp-lang" onClick={toggleLanguage}>
                            <Globe size={14} /> {language === 'en' ? 'EN' : 'کوردی'}
                        </button>
                        <Link to="/login" className="lp-nav-login">Log in</Link>
                        <Link to="/learn" className="lp-nav-start">Start Free →</Link>
                        <button className="lp-burger" onClick={() => setMenuOpen(v => !v)}>
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <motion.div className="lp-mob" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
                        <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
                        <Link to="/leaderboard" onClick={() => setMenuOpen(false)}>Community</Link>
                        <Link to="/learn" className="lp-mob-cta" onClick={() => setMenuOpen(false)}>Start Learning →</Link>
                    </motion.div>
                )}
            </nav>

            {/* ─── Hero ─── */}
            <section className="lp-hero">
                <div className="lp-hero-glow" />

                <motion.div className="lp-hero-content" initial="hidden" animate="show">
                    <motion.p variants={fade} custom={0} className="lp-hero-tag">
                        The free Kurdish learning platform
                    </motion.p>

                    <motion.h1 variants={fade} custom={1} className="lp-hero-h">
                        Learn Kurdish.<br />
                        <span className="lp-hero-dim">Completely free.</span>
                    </motion.h1>

                    <motion.p variants={fade} custom={2} className="lp-hero-sub">
                        AI-powered lessons, real conversations, and gamified progress — all in 5 minutes a day.
                    </motion.p>

                    <motion.div variants={fade} custom={3} className="lp-hero-ctas">
                        <Link to="/learn" className="lp-btn-primary">
                            Get Started <ArrowRight size={16} strokeWidth={2.5} />
                        </Link>
                        <Link to="/learn" className="lp-btn-ghost">See how it works</Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lp-hero-visual"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
                >
                    <img src={mascotImg} alt="KurdLingo mascot" className="lp-hero-mascot" />
                </motion.div>
            </section>

            {/* ─── Metrics ─── */}
            <section className="lp-metrics">
                <div className="lp-metrics-inner">
                    <div className="lp-metric">
                        <span className="lp-metric-val">50+</span>
                        <span className="lp-metric-label">Interactive lessons</span>
                    </div>
                    <div className="lp-metric-sep" />
                    <div className="lp-metric">
                        <span className="lp-metric-val">1,200+</span>
                        <span className="lp-metric-label">Active learners</span>
                    </div>
                    <div className="lp-metric-sep" />
                    <div className="lp-metric">
                        <span className="lp-metric-val">98%</span>
                        <span className="lp-metric-label">Satisfaction</span>
                    </div>
                </div>
            </section>

            {/* ─── Features ─── */}
            <section className="lp-section" id="features">
                <motion.div className="lp-sec-head" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2>Why learners choose KurdLingo</h2>
                    <p>Built for people who actually want to speak Kurdish — not just study it.</p>
                </motion.div>

                <div className="lp-features">
                    {[
                        {
                            icon: <Zap size={22} strokeWidth={2} />,
                            title: 'Adaptive lessons',
                            desc: 'Every session adjusts to your level. You always learn at the right difficulty.',
                        },
                        {
                            icon: <MessageCircle size={22} strokeWidth={2} />,
                            title: 'AI conversations',
                            desc: 'Practice real dialogues with AI roleplay scenarios. Not flashcards — real speech.',
                        },
                        {
                            icon: <Gamepad2 size={22} strokeWidth={2} />,
                            title: 'Learn by playing',
                            desc: 'Space Typing, NeuroMatch, Typing Rush. Games that build real vocabulary fast.',
                        },
                    ].map((f, i) => (
                        <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}>
                            <SpotlightCard className="lp-fcard" spotlightColor="rgba(88, 204, 2, 0.08)">
                                <div className="lp-fcard-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Product ─── */}
            <section className="lp-product" id="product">
                <motion.div className="lp-product-text" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <p className="lp-eyebrow">Product</p>
                    <h2>Designed to keep you going</h2>
                    <p className="lp-product-desc">
                        Streaks, XP, leaderboards, and a guidebook for every lesson.
                        Everything works together so you never lose momentum.
                    </p>
                    <Link to="/learn" className="lp-text-link">
                        Explore the platform <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                </motion.div>

                <motion.div className="lp-product-img" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <img src={appMockup} alt="KurdLingo app" />
                </motion.div>
            </section>

            {/* ─── CTA ─── */}
            <section className="lp-cta">
                <motion.div className="lp-cta-inner" variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <h2>Start learning Kurdish today</h2>
                    <p>Free forever. No credit card. No catch.</p>
                    <Link to="/learn" className="lp-btn-primary lp-btn-lg">
                        Get Started <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                </motion.div>
            </section>

            {/* ─── Footer ─── */}
            <footer className="lp-footer">
                <div className="lp-footer-inner">
                    <div className="lp-footer-brand">
                        <Link to="/" className="lp-brand">
                            <img src={mascotImg} alt="" className="lp-brand-icon" />
                            <span>KurdLingo</span>
                        </Link>
                        <p>Making Kurdish accessible to everyone.</p>
                    </div>
                    <div className="lp-footer-col">
                        <h4>Product</h4>
                        <Link to="/learn">Lessons</Link>
                        <Link to="/dictionary">Dictionary</Link>
                        <Link to="/shop">Shop</Link>
                    </div>
                    <div className="lp-footer-col">
                        <h4>Community</h4>
                        <Link to="/leaderboard">Leaderboard</Link>
                        <Link to="/quests">Quests</Link>
                    </div>
                    <div className="lp-footer-col">
                        <h4>Company</h4>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
                <div className="lp-footer-bot">
                    <span>© 2024 KurdLingo</span>
                </div>
            </footer>
        </div>
    );
}
