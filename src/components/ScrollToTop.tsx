// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const scroll = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      // fallback: sima scroll to top
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    // Delay scroll to ensure DOM is ready (especially with animations)
    const timeout = setTimeout(scroll, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};

export default ScrollToTop;
