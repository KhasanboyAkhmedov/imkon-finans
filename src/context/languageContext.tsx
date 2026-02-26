import React, { createContext, useState } from 'react';
import i18n from '../i18n';

export type Lang = 'uzb' | 'rus' | 'eng';

interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLangState] = useState<Lang>(() => {
        const saved = localStorage.getItem('appLang');
        return (saved === 'uzb' || saved === 'rus' || saved === 'eng') ? saved : 'uzb';
    });

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('appLang', l);
        i18n.changeLanguage(l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };