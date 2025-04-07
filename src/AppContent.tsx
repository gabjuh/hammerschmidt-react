import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { LangRouter } from './App';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const location = useLocation();

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          {/* language-prefixed routes */}
          <Route path="/:lang/*" element={<LangRouter />} />

          {/* fallback: redirect plain "/" to "/en" or system lang */}
          <Route path="/" element={<Navigate to="/en" replace />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
};

export default AppContent;