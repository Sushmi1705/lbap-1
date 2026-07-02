import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Machineries from './pages/Machineries';
import Gallery from './pages/Gallery';
import CSR from './pages/CSR';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-lbap-dark flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/machineries" element={<Machineries />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
