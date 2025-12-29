// @ts-nocheck
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from 'framer-motion';
import {
    ArrowLeft, ChevronLeft, ChevronRight, Volume2,
    Hand, UtensilsCrossed, ShoppingCart, Car, Users,
    Briefcase, Heart, Home, Smile, Clock
} from 'lucide-react';
import useTextToSpeech from '../../hooks/useTextToSpeech';
import { bookDictionaryData, DictionaryCategory } from '../../data/bookDictionaryData';
import './BookDictionary.css';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
    Hand, UtensilsCrossed, ShoppingCart, Car, Users,
    Briefcase, Heart, Home, Smile, Clock
};

// Reduced entries to ensure they fit comfortably on the page without overflow
const ENTRIES_PER_PAGE = 7;

const BookDictionary: React.FC = () => {
    const navigate = useNavigate();
    const { speak } = useTextToSpeech();

    const [activeCategory, setActiveCategory] = useState<DictionaryCategory>(bookDictionaryData[0]);
    const [currentPage, setCurrentPage] = useState(0);
    const [speakingId, setSpeakingId] = useState<string | null>(null);
    const [isFlipping, setIsFlipping] = useState(false);

    // Derived state
    const totalPages = Math.ceil(activeCategory.entries.length / ENTRIES_PER_PAGE);

    // Sound Handling
    const handleSpeak = useCallback((text: string, id: string) => {
        setSpeakingId(id);
        speak(text, () => setSpeakingId(null));
    }, [speak]);

    // Page Change Logic
    const handlePageChange = useCallback((newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    }, [totalPages]);

    // Render a Single Page Face (Front or Back content)
    const renderPageContent = (pageIndex: number, side: 'left' | 'right') => {
        if (pageIndex < 0 || pageIndex >= totalPages) return <div className="empty-page" />;

        const startIndex = pageIndex * ENTRIES_PER_PAGE;
        const entries = activeCategory.entries.slice(startIndex, startIndex + ENTRIES_PER_PAGE);
        const CategoryIcon = iconMap[activeCategory.icon] || Hand;
        const isLeft = side === 'left';

        return (
            <div className={`book-page page-${side} ${isLeft ? 'static-left' : 'static-right'}`}>
                {/* Book Header */}
                <div className="page-header">
                    <div className="header-title-row">
                        <CategoryIcon size={22} style={{ color: activeCategory.color }} />
                        <h3>{isLeft ? activeCategory.name.english : activeCategory.name.kurdish}</h3>
                    </div>
                    <div className="page-number-box">
                        <span className="page-number">{isLeft ? `P. ${pageIndex + 1}` : `${pageIndex + 1}`}</span>
                    </div>
                </div>

                {/* Content List */}
                <div className="entries-list">
                    {entries.map((entry, index) => (
                        <div key={entry.id} className={`entry-item ${isLeft ? 'ltr' : 'rtl'}`}>
                            {/* Number Badge */}
                            <span className="entry-number" style={{ background: activeCategory.color + '20', color: activeCategory.color }}>
                                {startIndex + index + 1}
                            </span>

                            {/* Text Content */}
                            <div className="entry-content">
                                {isLeft ? (
                                    <span className="entry-text english">{entry.english}</span>
                                ) : (
                                    <div className="kurdish-group">
                                        <span className="entry-text kurdish">{entry.kurdish}</span>
                                        {entry.pronunciation && (
                                            <span className="entry-pronunciation">{entry.pronunciation}</span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Speaker Button - ONLY FOR ENGLISH (LEFT PAGE) */}
                            {isLeft ? (
                                <button
                                    className={`speak-button ${speakingId === entry.id ? 'speaking' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSpeak(entry.english, entry.id);
                                    }}
                                    style={{ color: activeCategory.color }}
                                >
                                    <Volume2 size={18} />
                                </button>
                            ) : (
                                /* Placeholder to maintain layout balance */
                                <div style={{ width: 32 }} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Decor */}
                <div className="page-footer-decor" style={{ background: activeCategory.color }} />
            </div>
        );
    };

    return (
        <div className="book-dictionary">
            {/* Header */}
            <header className="book-header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>گەڕانەوە</span>
                </button>
                <div className="book-title">
                    <h1>📖 فەرهەنگی ڕۆژانە</h1>
                    <p>Daily Phrase Dictionary</p>
                </div>
                <div style={{ width: 120 }} />
            </header>

            {/* Category Tabs */}
            <div className="category-tabs-container">
                <div className="category-tabs">
                    {bookDictionaryData.map((category) => {
                        const Icon = iconMap[category.icon] || Hand;
                        return (
                            <button
                                key={category.id}
                                className={`category-tab ${activeCategory.id === category.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setCurrentPage(0);
                                }}
                                style={{ '--tab-gradient': category.gradient } as React.CSSProperties}
                            >
                                <Icon size={18} />
                                <span>{category.name.kurdish}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="book-navigation">
                <button
                    className="nav-btn prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                >
                    <ChevronLeft size={20} />
                    <span>پێشوو</span>
                </button>

                <div className="page-status">
                    <span className="current">{currentPage + 1}</span>
                    <span className="divider">/</span>
                    <span className="total">{totalPages}</span>
                </div>

                <button
                    className="nav-btn next"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages - 1}
                >
                    <span>دواتر</span>
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* THE BOOK STAGE */}
            <div className="book-container">
                <div className="book-wrapper">
                    <div className="book-spine" />

                    <div className="book-pages">
                        {/* BASE LAYER */}
                        <div className="book-pages-layer base-layer" style={{ zIndex: 0 }}>
                            <div className="page-placeholder left">
                                {renderPageContent(currentPage > 0 ? currentPage - 1 : currentPage, 'left')}
                            </div>
                            <div className="page-placeholder right">
                                {renderPageContent(currentPage < totalPages - 1 ? currentPage + 1 : currentPage, 'right')}
                            </div>
                        </div>

                        {/* PREV FLIPPER */}
                        {currentPage > 0 && (
                            <FlippingSheet
                                side="left"
                                frontContent={renderPageContent(currentPage, 'left')}
                                backContent={renderPageContent(currentPage - 1, 'right')}
                                onFlipComplete={() => handlePageChange(currentPage - 1)}
                                onFlipStart={() => setIsFlipping(true)}
                                onFlipCancel={() => setIsFlipping(false)}
                            />
                        )}

                        {/* NEXT FLIPPER */}
                        {currentPage < totalPages - 1 && (
                            <FlippingSheet
                                side="right"
                                frontContent={renderPageContent(currentPage, 'right')}
                                backContent={renderPageContent(currentPage + 1, 'left')}
                                onFlipComplete={() => handlePageChange(currentPage + 1)}
                                onFlipStart={() => setIsFlipping(true)}
                                onFlipCancel={() => setIsFlipping(false)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// =========================================================
// FLIPPING SHEET COMPONENT (Optimized Physics)
// =========================================================
interface FlippingSheetProps {
    side: 'left' | 'right';
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    onFlipComplete: () => void;
    onFlipStart?: () => void;
    onFlipCancel?: () => void;
}

const FlippingSheet: React.FC<FlippingSheetProps> = ({ side, frontContent, backContent, onFlipComplete, onFlipStart, onFlipCancel }) => {
    const isRight = side === 'right';
    const x = useMotionValue(0);
    const controls = useAnimation();
    const [isDragging, setIsDragging] = useState(false);

    // MAPPING
    const rotation = useTransform(
        x,
        isRight ? [0, -300] : [0, 300],
        isRight ? [0, -178] : [0, 178]
    );

    // SHADOWS
    const shadowOpacity = useTransform(rotation, isRight ? [0, -90, -180] : [0, 90, 180], [0, 0.4, 0]);
    const highlightOpacity = useTransform(rotation, isRight ? [0, -90, -180] : [0, 90, 180], [0, 0.2, 0]);

    const handleDragEnd = (event: any, info: PanInfo) => {
        setIsDragging(false);
        const threshold = 80;
        const velocity = info.velocity.x;
        const offset = info.offset.x;

        let shouldFlip = false;
        if (isRight) {
            if (offset < -threshold || velocity < -300) shouldFlip = true;
        } else {
            if (offset > threshold || velocity > 300) shouldFlip = true;
        }

        if (shouldFlip) {
            controls.start({
                x: isRight ? -600 : 600,
                transition: { duration: 0.4, ease: "easeInOut" }
            })
                .then(() => {
                    onFlipComplete();
                    x.set(0);
                });
        } else {
            controls.start({
                x: 0,
                transition: { type: "spring", stiffness: 300, damping: 25 }
            })
                .then(() => onFlipCancel?.());
        }
    };

    const dragHandleStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '20%',
        [isRight ? 'right' : 'left']: 0,
        zIndex: 500,
        cursor: isDragging ? 'grabbing' : 'grab',
        pointerEvents: 'auto',
        x
    };

    const dragConstraints = isRight ? { left: -600, right: 0 } : { left: 0, right: 600 };

    return (
        <div
            className={`book-pages-layer flipping-layer ${side}`}
            style={{
                zIndex: isDragging ? 200 : 50,
                perspective: '2000px',
                pointerEvents: 'none'
            }}
        >
            <motion.div
                className="visual-page-container"
                style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    transformStyle: 'preserve-3d', transformOrigin: isRight ? 'left center' : 'right center',
                    rotateY: rotation, boxShadow: isDragging ? '0 10px 30px rgba(0,0,0,0.2)' : 'none'
                }}
            >
                <div className="face front" style={{
                    background: '#fcfaf7',
                    backfaceVisibility: 'hidden', position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'auto'
                }}>
                    {frontContent}
                    <motion.div style={{ position: 'absolute', top: 0, bottom: 0, width: '15%', right: isRight ? 'auto' : 0, left: isRight ? 0 : 'auto', background: `linear-gradient(${isRight ? 'to right' : 'to left'}, rgba(0,0,0,0.15), transparent)`, opacity: 1, pointerEvents: 'none' }} />
                    <motion.div style={{ position: 'absolute', top: 0, bottom: 0, width: '30%', right: isRight ? 'auto' : 0, left: isRight ? 0 : 'auto', background: `linear-gradient(${isRight ? 'to right' : 'to left'}, rgba(0,0,0,0.3), transparent)`, opacity: shadowOpacity, pointerEvents: 'none' }} />
                    <motion.div style={{ position: 'absolute', inset: 0, background: `linear-gradient(${isRight ? '90deg' : '-90deg'}, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`, opacity: highlightOpacity, pointerEvents: 'none' }} />

                    <div className={`corner-hint corner-${side}`} />
                </div>

                <div className="face back" style={{
                    background: '#fcfaf7',
                    backfaceVisibility: 'hidden', position: 'absolute', inset: 0, overflow: 'hidden', transform: 'rotateY(180deg)'
                }}>
                    {backContent}
                    <motion.div style={{ position: 'absolute', top: 0, bottom: 0, width: '15%', right: isRight ? 0 : 'auto', left: isRight ? 'auto' : 0, background: `linear-gradient(${isRight ? 'to left' : 'to right'}, rgba(0,0,0,0.15), transparent)`, opacity: 1, pointerEvents: 'none' }} />
                    <motion.div style={{ position: 'absolute', top: 0, bottom: 0, width: '30%', right: isRight ? 0 : 'auto', left: isRight ? 'auto' : 0, background: `linear-gradient(${isRight ? 'to left' : 'to right'}, rgba(0,0,0,0.3), transparent)`, opacity: shadowOpacity, pointerEvents: 'none' }} />
                </div>
            </motion.div>

            <motion.div
                className="drag-handle"
                style={dragHandleStyle}
                drag="x" dragConstraints={dragConstraints} dragElastic={0.1}
                onDragStart={() => { setIsDragging(true); onFlipStart?.(); }}
                onDragEnd={handleDragEnd} animate={controls}
                whileHover={{ scale: 1.0, opacity: 1 }}
            />
        </div>
    );
};

export default BookDictionary;
