import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/product' },
    { name: 'Machineries', path: '/machineries' },
    { name: 'CSR', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-[100] transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'top-3 py-2.5 px-6 bg-white/92 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.05)] animate-border-shimmer' 
        : 'top-5 py-4 px-8 bg-white/80 backdrop-blur-lg border border-slate-200/30 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.02)]'
    }`}>
      <div className="flex justify-between items-center w-full relative">
        <div className="flex items-center gap-3">
          {/* Brand Logo Symbol - Official Logo Image */}
          <div className={`transition-all duration-500 flex items-center justify-center bg-white border border-slate-200/10 p-1 rounded-full shadow-sm hover:scale-105 ${
            scrolled ? 'h-10 w-10' : 'h-13 w-13'
          }`}>
            <img src="/logo.png" alt="Laxmi Balaji Logo" className="h-full w-full object-contain" />
          </div>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 border border-slate-200/40 p-1 rounded-full">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `transition-all duration-300 px-4.5 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider relative ${
                  isActive 
                    ? 'text-white bg-[#000EDD] shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Request Quote Button */}
        <button className="hidden lg:flex bg-[#000EDD] hover:bg-[#FF5C00] text-white px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 rounded-full shadow-md shadow-[#000EDD]/15 hover:shadow-[#FF5C00]/25 hover:scale-105 active:scale-95 items-center gap-1.5">
          Request Quote <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Hamburger toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-800 focus:outline-none p-2 border border-slate-200/40 rounded-full bg-slate-50/50 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden w-full absolute top-[115%] left-0 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl py-5 px-5 space-y-3.5 flex flex-col z-[99] animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `transition-all duration-300 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider block ${
                  isActive 
                    ? 'text-white bg-[#000EDD]' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-[#000EDD] hover:bg-[#FF5C00] text-white w-full py-3.5 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-md shadow-[#000EDD]/15"
          >
            Request Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
