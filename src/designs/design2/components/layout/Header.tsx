import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
    <nav className="sticky top-0 w-full z-[100] py-3.5 bg-white/75 backdrop-blur-md border-b border-slate-200/40 shadow-sm">
      <div className="container-custom flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          {/* Brand Logo Symbol - Official Logo Image */}
          <img src="/logo.png" alt="Laxmi Balaji Logo" className="h-24 w-auto object-contain" />
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `transition-all duration-300 pb-1 border-b-2 ${
                  isActive 
                    ? 'text-[#00A7FF] border-[#00A7FF]' 
                    : 'text-slate-400 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Request Quote Button */}
        <button className="hidden lg:block bg-[#000EDD] hover:bg-[#FF5C00] text-white px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-md shadow-[#000EDD]/15 hover:shadow-[#FF5C00]/20">
          Request Quote
        </button>

        {/* Mobile Hamburger toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-800 focus:outline-none p-1.5 border border-slate-200/50 rounded bg-slate-50/50 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden w-full absolute top-[100%] left-0 bg-white/95 backdrop-blur-lg border-b border-slate-200/60 shadow-lg py-5 px-6 space-y-4 flex flex-col z-[99] animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `transition-all duration-300 py-2 border-b border-slate-100 font-bold text-xs uppercase tracking-widest block ${
                  isActive 
                    ? 'text-[#00A7FF]' 
                    : 'text-slate-500 hover:text-slate-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="bg-[#000EDD] hover:bg-[#FF5C00] text-white w-full py-3 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-md shadow-[#000EDD]/15"
          >
            Request Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
