import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowRight, Menu, X, Shield, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activePage: 'home' | 'about' | 'products' | 'machineries' | 'csr' | 'gallery' | 'career' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const linkClasses = (page: string) => {
    const base = "transition-all pb-1 font-bold uppercase text-[10px] tracking-[0.2em] relative";
    if (activePage === page) {
      return `${base} text-white`;
    }
    return `${base} text-slate-400 hover:text-white`;
  };

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'products', label: 'Products', path: '/product' },
    { id: 'machineries', label: 'Machineries', path: '/machineries' },
    { id: 'csr', label: 'CSR', path: '/csr' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'career', label: 'Careers', path: '/career' },
    { id: 'contact', label: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* --- Top Notice bar --- */}
      <div className="py-20 glass-panel-dark text-white border-t border-white/5 relative py-2 px-6 text-[9px] tracking-[0.2em] font-mono text-slate-500 hidden md:block z-50 relative">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> SYSTEM: NOMINAL
            </span>
            <span>|</span>
            <span className="text-slate-400">CERTIFICATION: IATF 16949 & ISO 9001:2015</span>
          </div>
          <div className="flex items-center gap-4 text-[#0B96AC]">
            <span>LATENCY: 1.4ms</span>
            <span>•</span>
            <span>SHIELD_GATE: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* --- Sticky Cyber-Industrial Navigation --- */}
      <nav className="bg-brand-900/85 backdrop-blur-lg border-b border-white/5 py-4 px-6 sticky top-0 z-[100] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center group cursor-pointer">
             <div className="bg-white/95 hover:bg-white px-3.5 py-1.5 rounded border border-white/10 shadow-sm transition-all duration-300 flex items-center justify-center h-12">
                <img src="/logo.png" alt="LAB Automotive Logo" className="h-full w-auto object-contain" />
             </div>
          </Link>
          
          {/* Navigation Links Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.id} to={link.path} className={linkClasses(link.id)}>
                {link.label}
                {activePage === link.id && (
                  <motion.div 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[#0B96AC]"
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-4">
             <Link to="/contact" className="relative group overflow-hidden bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 hover:border-brand-500 transition-all duration-300 shadow-lg hover:shadow-brand-500/20 hidden sm:inline-flex">
               <span className="relative z-10 flex items-center gap-2">
                 Request Technical Quote <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
               </span>
             </Link>

             {/* Hamburger Toggle Button */}
             <button
               onClick={() => setIsMobileOpen(!isMobileOpen)}
               className="fixed bottom-8 right-8 z-[90] bg-brand-500 text-white p-3 rounded-full shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:scale-105 transition-all border border-brand-500/20"
             >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>

        {/* --- Mobile Navigation Drawer dropdown --- */}
        <AnimatePresence>
           {isMobileOpen && (
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
               className="absolute top-full left-0 right-0 bg-brand-900 border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden"
             >
                <div className="flex flex-col gap-4">
                   {navLinks.map((link) => (
                     <Link 
                       key={link.id} 
                       to={link.path} 
                       onClick={() => setIsMobileOpen(false)}
                       className={`py-2 text-[11px] font-bold uppercase tracking-widest border-b border-white/5 ${
                         activePage === link.id ? 'text-[#0B96AC]' : 'text-slate-400 hover:text-white'
                       }`}
                     >
                        {link.label}
                     </Link>
                   ))}
                </div>

                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full bg-brand-500 text-center text-white py-3 text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-brand-500/15"
                >
                   Request Technical Quote
                </Link>
             </motion.div>
           )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
