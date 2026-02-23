import { useContext } from 'react';
import { LanguageContext, type Lang } from '../context/languageContext';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within Provider");
  return context as { lang: Lang; setLang: (l: Lang) => void };
};