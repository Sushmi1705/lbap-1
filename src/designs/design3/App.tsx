import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Other pages will be added as we develop them
import About from './pages/About';
import Products from './pages/Products';
import Machineries from './pages/Machineries';
import CSR from './pages/CSR';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-['Outfit'] selection:bg-slate-900 selection:text-white">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/machineries" element={<Machineries />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
