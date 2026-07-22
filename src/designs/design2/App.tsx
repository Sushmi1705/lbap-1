import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Machineries from './pages/Machineries';
import CSR from './pages/CSR';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import Contact from './pages/Contact';
import AutomotivePressComponents from './pages/AutomotivePressComponents';
import AutomotiveFabricationComponents from './pages/AutomotiveFabricationComponents';
import NonAutomotiveParts from './pages/NonAutomotiveParts';
import PressTools from './pages/PressTools';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';

// 404 page — shown for any unmatched route
const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-6">
    <div className="text-center max-w-md">
      <h1 className="text-8xl font-black text-slate-200 tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Page Not Found</h2>
      <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/product" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/products/automotive-press-components" element={<PageTransition><AutomotivePressComponents /></PageTransition>} />
        <Route path="/products/automotive-fabrication-components" element={<PageTransition><AutomotiveFabricationComponents /></PageTransition>} />
        <Route path="/products/non-automotive-parts" element={<PageTransition><NonAutomotiveParts /></PageTransition>} />
        <Route path="/products/press-tools" element={<PageTransition><PressTools /></PageTransition>} />
        <Route path="/machineries" element={<PageTransition><Machineries /></PageTransition>} />
        <Route path="/csr" element={<PageTransition><CSR /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        {/* Catch-all: any unmatched URL shows the 404 page */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-outfit">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary>
            <AnimatedRoutes />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
