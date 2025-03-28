import './App.css';

import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import PageWrapper from './components/PageWrapper';
// import PasswordProtectedApp from './components/PasswordProtectedApp';
import ScrollToTop from './components/ScrollToTop';
import AdvertStuff from './pages/AdvertStuff';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import MusicianPortfolio from './pages/MusicianPortfolio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Program from './pages/Program';

function App() {
  const location = useLocation();

  return (
    // <PasswordProtectedApp>
    <HelmetProvider>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/impresszum" element={<PageWrapper><Impressum /></PageWrapper>} />
            <Route path="/adatvedelmi-nyilatkozat" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="/plakatok" element={<PageWrapper><AdvertStuff /></PageWrapper>} />
            <Route path="/koncertprogram" element={<PageWrapper><Program /></PageWrapper>} />
            <Route path="/portfolio/:name" element={<PageWrapper><MusicianPortfolio /></PageWrapper>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
    // </PasswordProtectedApp>
  );
}

export default App;
