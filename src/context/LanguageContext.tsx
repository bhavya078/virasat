import React, { createContext, useContext, useState } from 'react';
import { LANGUAGES } from '../data/languages';
import { Language } from '../types';
import { translateStateName, translateCategoryName, translateAdventureLevel } from '../utils/translator';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  languageData: Language;
  t: (key: string, fallback?: string) => string;
  tState: (stateName: string) => string;
  tCategory: (cat: string) => string;
  tAdventure: (level: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<string>(() => {
    return localStorage.getItem('virasat_lang') || 'en';
  });

  const setLanguage = (code: string) => {
    if (LANGUAGES[code]) {
      setCurrentLanguageState(code);
      localStorage.setItem('virasat_lang', code);
    }
  };

  const languageData = LANGUAGES[currentLanguage] || LANGUAGES['en'];

  const t = (key: string, fallback?: string): string => {
    if (languageData.translations && languageData.translations[key]) {
      return languageData.translations[key];
    }
    if (LANGUAGES['en']?.translations?.[key]) {
      return LANGUAGES['en'].translations[key];
    }
    return fallback || key;
  };

  const tState = (stateName: string): string => {
    return translateStateName(stateName, currentLanguage);
  };

  const tCategory = (cat: string): string => {
    return translateCategoryName(cat, currentLanguage);
  };

  const tAdventure = (level: string): string => {
    return translateAdventureLevel(level, currentLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languageData,
        t,
        tState,
        tCategory,
        tAdventure,
      }}
    >
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
