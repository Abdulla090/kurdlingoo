import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ckb'); // Default to Sorani (ckb)

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ckb' : 'en');
    };

    // Helper to check if current lang is RTL
    const isRTL = language === 'ckb';

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
            <div dir={isRTL ? 'rtl' : 'ltr'} style={{ fontFamily: isRTL ? 'Vazirmatn, sans-serif' : 'inherit' }}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
