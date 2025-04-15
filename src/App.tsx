import './App.css';

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';

import devSettings from '../dev-settings.json';
import Layout from './components/Layout';
import PageWrapper from './components/PageWrapper';
import PasswordProtectedApp from './components/PasswordProtectedApp';
import ScrollToTop from './components/ScrollToTop';
import { useLanguage } from './context/LanguageContext';
import { LanguageCode } from './i18n/languages';
import AdvertStuff from './pages/AdvertStuff';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import MusicianPortfolio from './pages/MusicianPortfolio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Program from './pages/Program';

const supportedLanguages: LanguageCode[] = ['en', 'hu', 'de'];

export const LangRouter = () => {
  const { lang, setLang } = useLanguage();
  const { lang: routeLang } = useParams<{ lang: LanguageCode }>();

  useEffect(() => {
    if (routeLang && supportedLanguages.includes(routeLang)) {
      setLang(routeLang);
    }
  }, [routeLang, setLang]);

  if (!routeLang || !supportedLanguages.includes(routeLang)) {
    const systemLang = navigator.language.slice(0, 2) as LanguageCode;
    const fallbackLang = supportedLanguages.includes(systemLang) ? systemLang : 'en';
    return <Navigate to={`/${fallbackLang}`} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="impresszum" element={<PageWrapper><Impressum /></PageWrapper>} />
        <Route path="adatvedelmi-nyilatkozat" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="plakatok" element={<PageWrapper><AdvertStuff /></PageWrapper>} />
        <Route path="koncertprogram" element={<PageWrapper><Program /></PageWrapper>} />
        <Route path="portfolio/:name" element={<PageWrapper><MusicianPortfolio /></PageWrapper>} />
        <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
      </Route>
    </Routes>
  );
};

export const AppContent = () => {
  const location = useLocation();

  const app = (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/:lang/*" element={<LangRouter />} />
          <Route path="/" element={<Navigate to="/en" replace />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );

  return devSettings.isDev ? <PasswordProtectedApp>{app}</PasswordProtectedApp> : app;
};

export default AppContent;
