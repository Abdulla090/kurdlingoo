// @ts-nocheck
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Volume2,
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

const ENTRIES_PER_PAGE = 8;

const BookDictionary: React.FC = () => {
    const navigate = useNavigate();
    const { speak } = useTextToSpeech();

    const [activeCategory, setActiveCategory] = useState<DictionaryCategory>(bookDictionaryData[0]);
    const [currentPage, setCurrentPage] = useState(0);
    const [speakingId, setSpeakingId] = useState<string | null>(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDirection, setFlipDirection] = useState<'prev' | 'next' | null>(null);

    // Calculate pagination
    const totalPages = Math.ceil(activeCategory.entries.length / ENTRIES_PER_PAGE);
    const startIndex = currentPage * ENTRIES_PER_PAGE;
    const currentEntries = activeCategory.entries.slice(startIndex, startIndex + ENTRIES_PER_PAGE);

    // Handle category change
    const handleCategoryChange = (category: DictionaryCategory) => {
        if (category.id !== activeCategory.id) {
            setActiveCategory(category);
            setCurrentPage(0);
        }
    };

    // Handle page navigation with flip animation
    // When going NEXT: flip the right page (Kurdish) towards left
    // When going PREV: flip back (previous page slides in from left)
    const handlePageChange = useCallback((direction: 'prev' | 'next') => {
        if (isFlipping) return;

        const newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
        if (newPage < 0 || newPage >= totalPages) return;

        setIsFlipping(true);
        // 'next' = animate right page, 'prev' = animate left page
        setFlipDirection(direction);

        setTimeout(() => {
            setCurrentPage(newPage);
            setIsFlipping(false);
            setFlipDirection(null);
        }, 400);
    }, [currentPage, totalPages, isFlipping]);

    // Handle text-to-speech
    const handleSpeak = useCallback((text: string, id: string) => {
        setSpeakingId(id);
        speak(text, () => setSpeakingId(null));
    }, [speak]);

    // Get icon component
    const CategoryIcon = iconMap[activeCategory.icon] || Hand;

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
            <div className="category-tabs">
                {bookDictionaryData.map((category) => {
                    const Icon = iconMap[category.icon] || Hand;
                    return (
                        <button
                            key={category.id}
                            className={`category-tab ${activeCategory.id === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                            style={{ '--tab-gradient': category.gradient } as React.CSSProperties}
                        >
                            <Icon size={18} />
                            <span>{category.name.kurdish}</span>
                        </button>
                    );
                })}
            </div>

            {/* The Book */}
            <div className="book-container">
                <div className="book-wrapper">
                    <div className="book-spine" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory.id}-${currentPage}`}
                            className="book-pages"
                            initial={{ opacity: 0.8, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.8, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                '--category-color': activeCategory.color,
                                '--category-dark': activeCategory.color + 'cc',
                            } as React.CSSProperties}
                        >
                            {/* Left Page - English */}
                            <div className={`book-page page-left ${flipDirection === 'prev' ? 'flipping-left' : ''}`}>
                                <div className="page-header">
                                    <h2>
                                        <CategoryIcon size={24} style={{ color: activeCategory.color }} />
                                        {activeCategory.name.english}
                                    </h2>
                                    <span className="page-number">Page {currentPage + 1}</span>
                                </div>

                                <div className="entries-list">
                                    {currentEntries.map((entry, index) => (
                                        <div key={entry.id} className="entry-item">
                                            <span className="entry-number">{startIndex + index + 1}</span>
                                            <span className="entry-text">{entry.english}</span>
                                            <button
                                                className={`speak-button ${speakingId === entry.id ? 'speaking' : ''}`}
                                                onClick={() => handleSpeak(entry.english, entry.id)}
                                                title="Listen"
                                            >
                                                <Volume2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Corner curl effect */}
                                <div
                                    className="page-corner page-corner-left"
                                    onClick={() => handlePageChange('prev')}
                                />
                            </div>

                            {/* Right Page - Kurdish */}
                            <div className={`book-page page-right ${flipDirection === 'next' ? 'flipping-right' : ''}`}>
                                <div className="page-header">
                                    <h2>
                                        <CategoryIcon size={24} style={{ color: activeCategory.color }} />
                                        {activeCategory.name.kurdish}
                                    </h2>
                                    <span className="page-number">لاپەڕە {currentPage + 1}</span>
                                </div>

                                <div className="entries-list">
                                    {currentEntries.map((entry, index) => (
                                        <div key={entry.id} className="entry-item">
                                            <span className="entry-number">{startIndex + index + 1}</span>
                                            <div style={{ flex: 1 }}>
                                                <span className="entry-text">{entry.kurdish}</span>
                                                {entry.pronunciation && (
                                                    <span className="entry-pronunciation"> ({entry.pronunciation})</span>
                                                )}
                                            </div>
                                            <button
                                                className={`speak-button ${speakingId === entry.id + '-ku' ? 'speaking' : ''}`}
                                                onClick={() => handleSpeak(entry.pronunciation || entry.english, entry.id + '-ku')}
                                                title="گوێ بگرە"
                                            >
                                                <Volume2 size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Corner curl effect */}
                                <div
                                    className="page-corner page-corner-right"
                                    onClick={() => handlePageChange('next')}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Page Navigation */}
            <div className="page-navigation">
                <button
                    className="nav-button"
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 0 || isFlipping}
                >
                    <ChevronLeft size={20} />
                    <span>پێشوو</span>
                </button>

                <div className="page-indicator">
                    <span>{currentPage + 1}</span>
                    <span style={{ opacity: 0.5 }}>/</span>
                    <span>{totalPages}</span>
                </div>

                <button
                    className="nav-button"
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage >= totalPages - 1 || isFlipping}
                >
                    <span>دواتر</span>
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default BookDictionary;
