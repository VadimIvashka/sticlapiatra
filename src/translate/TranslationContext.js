import React, { createContext, useContext, useState } from 'react';
import translations from './translations';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState('ro');

  const translate = (key) => translations[lang][key] || key;

  return (
    <TranslationContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};