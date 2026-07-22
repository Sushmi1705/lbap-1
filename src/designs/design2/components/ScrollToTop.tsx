import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay matches PageTransition exit duration (0.2s) + small buffer
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 220);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
