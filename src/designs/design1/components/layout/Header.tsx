import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../../../components/Logo';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Machineries', path: '/machineries' },
    { name: 'CSR', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-lbap-border sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-4 md:py-6">
        
        {/* Logo */}
        <Link to="/" className="z-50 relative">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 h-full ml-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path}
                className={`relative text-[12px] font-bold uppercase tracking-widest transition-all py-2 group whitespace-nowrap ${
                  isActive ? 'text-[#0B96AC]' : 'text-[#515F78] hover:text-[#0B96AC]'
                }`}
              >
                {link.name}
                {/* Active Underline */}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0B96AC]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Hover Underline (Subtle) */}
                {!isActive && (
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0B96AC]/30 group-hover:w-full transition-all duration-300"></div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:block">
          <button className="bg-[#0B96AC] text-white px-7 py-3 text-[11px] font-bold uppercase tracking-widest shadow-sm hover:bg-[#097b8e] transition-colors">
            REQUEST QUOTE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-lbap-dark p-2 z-50 relative focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-6 transition-transform duration-300 xl:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-wide uppercase ${
                  isActive ? 'text-lbap-teal' : 'text-lbap-dark'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
          <button className="bg-lbap-teal text-white px-8 py-4 text-lg font-bold rounded hover:bg-[#097b8e] transition-colors mt-4 shadow-md">
            Request Quote
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
