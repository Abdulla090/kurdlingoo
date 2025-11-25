import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../data/translations';

type Language = 'en' | 'ckb';

// Kurdish font options - Rabar font family
export const kurdishFonts = [
    { id: 'Rabar_016', name: 'Rabar 016' },
    { id: 'Rabar_017', name: 'Rabar 017' },
    { id: 'Rabar_018', name: 'Rabar 018' },
    { id: 'Rabar_019', name: 'Rabar 019' },
    { id: 'Rabar_020', name: 'Rabar 020' },
    { id: 'Rabar_021', name: 'Rabar 021' },
    { id: 'Rabar_022', name: 'Rabar 022' },
    { id: 'Rabar_023', name: 'Rabar 023' },
    { id: 'Rabar_024', name: 'Rabar 024' },
    { id: 'Rabar_025', name: 'Rabar 025' },
    { id: 'Rabar_026', name: 'Rabar 026' },
    { id: 'Rabar_027', name: 'Rabar 027' },
    { id: 'Rabar_028', name: 'Rabar 028' },
    { id: 'Rabar_029', name: 'Rabar 029' },
    { id: 'Rabar_030', name: 'Rabar 030' },
    { id: 'Rabar_031', name: 'Rabar 031' },
    { id: 'Rabar_032', name: 'Rabar 032' },
    { id: 'Rabar_033', name: 'Rabar 033' },
    { id: 'Rabar_034', name: 'Rabar 034' },
    { id: 'Rabar_035', name: 'Rabar 035' },
    { id: 'Rabar_036', name: 'Rabar 036' },
    { id: 'Rabar_037', name: 'Rabar 037' },
    { id: 'Rabar_038', name: 'Rabar 038' },
    { id: 'Rabar_039', name: 'Rabar 039' },
    { id: 'Rabar_040', name: 'Rabar 040' },
    { id: 'Rabar_041', name: 'Rabar 041' },
    { id: 'Rabar_042', name: 'Rabar 042' },
    { id: 'Rabar_043', name: 'Rabar 043' },
    { id: 'Rabar_044', name: 'Rabar 044' },
    { id: 'Rabar_045', name: 'Rabar 045' },
    { id: 'Rabar_046', name: 'Rabar 046' },
    { id: 'Rabar_047', name: 'Rabar 047' },
    { id: 'Rabar_048', name: 'Rabar 048' },
    { id: 'Rabar_049', name: 'Rabar 049' },
    { id: 'Rabar_050', name: 'Rabar 050' },
    { id: 'Rabar_051', name: 'Rabar 051' },
    { id: 'Rabar_052', name: 'Rabar 052' },
    { id: 'Rabar_053', name: 'Rabar 053' },
    { id: 'Rabar_054', name: 'Rabar 054' },
    { id: 'Rabar_055', name: 'Rabar 055' },
    { id: 'Rabar_056', name: 'Rabar 056' },
    { id: 'Rabar_057', name: 'Rabar 057' },
    { id: 'Rabar_058', name: 'Rabar 058' },
    { id: 'Rabar_059', name: 'Rabar 059' },
    { id: 'Rabar_060', name: 'Rabar 060' },
    { id: 'Rabar_061', name: 'Rabar 061' },
    { id: 'Rabar_062', name: 'Rabar 062' },
    { id: 'Rabar_063', name: 'Rabar 063' },
    { id: 'Rabar_064', name: 'Rabar 064' },
    { id: 'Rabar_065', name: 'Rabar 065' },
    { id: 'Rabar_066', name: 'Rabar 066' },
    { id: 'Rabar_067', name: 'Rabar 067' },
    { id: 'Rabar_068', name: 'Rabar 068' },
    { id: 'Rabar_069', name: 'Rabar 069' },
    { id: 'Rabar_070', name: 'Rabar 070' },
    { id: 'Rabar_071', name: 'Rabar 071' },
    { id: 'Rabar_072', name: 'Rabar 072' },
];

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
    isRTL: boolean;
    kurdishFont: string;
    setKurdishFont: (font: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('ckb'); // Default to Sorani (ckb)
    const [kurdishFont, setKurdishFont] = useState<string>(() => {
        // Load saved font from localStorage
        return localStorage.getItem('kurdlingo-kurdish-font') || 'Rabar_039';
    });
    const isRTL = language === 'ckb';

    // Save font preference to localStorage
    useEffect(() => {
        localStorage.setItem('kurdlingo-kurdish-font', kurdishFont);
        // Update CSS custom property
        document.documentElement.style.setProperty('--font-kurdish', kurdishFont);
    }, [kurdishFont]);

    // Dynamically load the font
    useEffect(() => {
        const fontFace = new FontFace(kurdishFont, `url(/ku-font/${kurdishFont}.ttf)`);
        fontFace.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
        }).catch((error) => {
            console.error('Error loading Kurdish font:', error);
        });
    }, [kurdishFont]);

    const t = (key: string): string => {
        // @ts-ignore - translations structure might be complex to type fully rigidly right now
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ckb' : 'en');
    };

    useEffect(() => {
        const dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.body?.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', language);
    }, [isRTL, language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL, kurdishFont, setKurdishFont }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
