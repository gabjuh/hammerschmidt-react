import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LanguageCode, languages } from '../i18n/languages';

const LANGUAGE_STORAGE_KEY = 'preferredLanguage';

const LanguageContext = createContext<{
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}>({
  lang: 'en',
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const extractLangFromPath = (): LanguageCode | null => {
    const match = location.pathname.match(/^\/(en|hu|de)(\/|$)/);
    return match?.[1] as LanguageCode || null;
  };

  const initialLang = extractLangFromPath() ?? (() => {
    const storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
    const systemLang = navigator.language.split('-')[0] as LanguageCode;
    return storedLang && languages[storedLang]
      ? storedLang
      : languages[systemLang]
      ? systemLang
      : 'en';
  })();

  const [lang, setLangState] = useState<LanguageCode>(initialLang);

  const setLang = (newLang: LanguageCode) => {
    if (newLang === lang) return; // ✅ avoid redundant update

    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    setLangState(newLang);

    const [, currentLang, ...rest] = location.pathname.split('/');

    if (currentLang !== newLang) {
      const newPath = `/${newLang}/${rest.join('/')}`;
      navigate(newPath, { replace: true });
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
