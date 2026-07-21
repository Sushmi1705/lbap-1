import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
