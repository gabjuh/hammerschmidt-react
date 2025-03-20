import './App.css';

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import PageWrapper from './components/PageWrapper';
import AdvertStuff from './pages/AdvertStuff';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import MusicianPortfolio from './pages/MusicianPortfolio';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove "#"
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/impresszum" element={<PageWrapper><Impressum /></PageWrapper>} />
          <Route path="/adatvedelmi-nyilatkozat" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="/plakatok" element={<PageWrapper><AdvertStuff /></PageWrapper>} />
          <Route path="/portfolio/:name" element={<PageWrapper><MusicianPortfolio /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
