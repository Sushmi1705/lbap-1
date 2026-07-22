import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Layers, PenTool, Cpu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Products', 
      path: '/product',
      isMega: true,
      dropdownItems: [
        { 
          name: 'Automotive Press Components', 
          path: '/products/automotive-press-components',
          desc: 'High-precision stamped parts for tier-1 automotive systems.',
          icon: <Settings className="w-5 h-5 text-[#00A7FF]" />
        },
        { 
          name: 'Automotive Fabrication Components', 
          path: '/products/automotive-fabrication-components',
          desc: 'Fabricated metal parts and sheet metal components for automobile manufacturers.',
          icon: <Layers className="w-5 h-5 text-[#FF5C00]" />
        },
        { 
          name: 'Non Automotive Parts', 
          path: '/products/non-automotive-parts',
          desc: 'Precision turned components for non-automotive industrial applications.',
          icon: <Cpu className="w-5 h-5 text-[#1B3F8F]" />
        },
        { 
          name: 'Press Tools', 
          path: '/products/press-tools',
          desc: 'High-quality press tools for varied industries and diverse applications.',
          icon: <PenTool className="w-5 h-5 text-[#00A7FF]" />
        }
      ]
    },
    { name: 'Machineries', path: '/machineries' },
    { name: 'CSR', path: '/csr' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-[100] transition-shadow duration-300 bg-white/95 backdrop-blur-md border-b py-3 ${
      scrolled ? 'border-slate-200/80 shadow-md' : 'border-slate-200/40 shadow-sm'
    }`}>
      <div className="container-custom flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center shrink-0 h-14 w-28">
            <img src="/logo.png" alt="LAB Automotive Logo" className="h-full w-full object-contain" />
          </div>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-bold tracking-wider">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `uppercase transition-all duration-300 pb-1 border-b-2 flex items-center gap-1 ${
                    isActive || (link.dropdownItems && location.pathname.includes(link.path))
                      ? 'text-[#1B3F8F] border-[#1B3F8F]' 
                      : 'text-slate-500 border-transparent hover:text-[#1B3F8F] hover:border-slate-300'
                  }`
                }
              >
                {link.name}
                {link.dropdownItems && (
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>

              {/* Dropdown / Mega Menu */}
              {link.dropdownItems && (
                <div className={`absolute top-[100%] pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50 ${link.isMega ? '-left-[350px] w-[1050px]' : 'left-0 w-[280px]'}`}>
                  <div className={`bg-white/95 backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(0,0,0,0.15)] overflow-hidden text-left rounded-[2rem] border border-slate-200/50 ${link.isMega ? 'p-3 flex flex-row gap-0' : 'flex flex-col p-2'}`}>
                    
                    {link.isMega && (
                      <div className="w-[35%] bg-gradient-to-br from-[#00A7FF] to-[#1B3F8F] p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group/featured shadow-inner border border-white/10">
                        {/* Decorative background grids and circles */}
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover/featured:bg-white/20 transition-colors duration-700"></div>
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <span className="text-[#FF5C00] text-xs font-bold uppercase tracking-widest mb-4 block">
                            Platform Solutions
                          </span>
                          <h4 className="text-3xl font-extrabold text-white mb-4 tracking-tight leading-[1.1]">
                            Precision <br/>Engineering
                          </h4>
                          <p className="text-sm text-white/80 leading-relaxed font-medium mb-10">
                            Explore our comprehensive range of high-precision tier-1 components and heavy structural automotive assemblies.
                          </p>
                          <div className="mt-auto flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest group-hover/featured:translate-x-3 transition-transform duration-500">
                            <span className="bg-white/10 p-2 rounded-full backdrop-blur-md">
                              <ArrowRight className="w-4 h-4 text-[#FF5C00]" />
                            </span>
                            Discover More
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className={link.isMega ? "w-[65%] grid grid-cols-2 gap-x-6 gap-y-4 p-8" : "flex flex-col"}>
                      {link.dropdownItems.map((item: any) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={`group/item flex items-start transition-all duration-300 ${link.isMega ? 'gap-5 p-4 rounded-2xl hover:bg-slate-50 hover:translate-x-1' : 'px-4 py-3 hover:bg-slate-50 rounded-xl'}`}
                        >
                          {link.isMega && item.icon && (
                            <div className="shrink-0 w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm text-slate-400 group-hover/item:text-[#00A7FF] group-hover/item:shadow-md group-hover/item:border-[#00A7FF]/20 group-hover/item:-translate-y-2 transition-all duration-500">
                              {item.icon}
                            </div>
                          )}
                          <div className={`flex flex-col ${link.isMega ? 'pt-1' : ''}`}>
                            <span className={link.isMega ? "text-base font-extrabold text-slate-900 group-hover/item:text-[#00A7FF] transition-colors leading-tight mb-1.5" : "text-sm font-bold text-slate-700 group-hover/item:text-[#00A7FF]"}>{item.name}</span>
                            {link.isMega && item.desc && (
                              <span className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</span>
                            )}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Request Quote Button */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden lg:block">
          <Link
            to="/contact"
            className="block bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 text-sm font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-sm shadow-brand-500/15 hover:shadow-brand-600/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Request Quote
          </Link>
        </motion.div>

        {/* Mobile Hamburger toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-800 focus:outline-none p-2 border border-slate-200/50 rounded bg-slate-50/50 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden w-full absolute top-[100%] left-0 bg-white border-b border-slate-200/80 shadow-md z-[99] overflow-hidden"
          >
            {/* Scrollable inner container with max height */}
            <div className="overflow-y-auto max-h-[calc(100vh-80px)] py-4 px-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path} className="flex flex-col">
                  {link.dropdownItems ? (
                    /* Products — tap to toggle expand/collapse, does not navigate */
                    <button
                      onClick={() => setOpenMobileDropdown(
                        openMobileDropdown === link.path ? null : link.path
                      )}
                      className={`transition-all duration-300 py-3 border-b border-slate-100 font-bold text-xs uppercase tracking-wider flex justify-between items-center w-full text-left ${
                        location.pathname.startsWith('/product')
                          ? 'text-[#1B3F8F]'
                          : 'text-slate-700 hover:text-[#1B3F8F]'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openMobileDropdown === link.path ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `transition-all duration-300 py-3 border-b border-slate-100 font-bold text-xs uppercase tracking-wider flex justify-between items-center ${
                          isActive
                            ? 'text-[#1B3F8F]'
                            : 'text-slate-700 hover:text-[#1B3F8F]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {/* Mobile Dropdown Items — animated collapsible */}
                  <AnimatePresence>
                    {link.dropdownItems && openMobileDropdown === link.path && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 flex flex-col border-l-2 border-[#00A7FF]/30 ml-1 mb-1">
                          {link.dropdownItems.map((item) => (
                            <NavLink
                              key={item.path}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="py-2.5 text-xs font-semibold text-slate-600 hover:text-[#00A7FF] block"
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-3 pb-2">
                <motion.div whileTap={{ scale: 0.96 }}>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block text-center bg-brand-500 hover:bg-brand-600 text-white w-full py-3.5 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-sm shadow-brand-500/15"
                  >
                    Request Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
