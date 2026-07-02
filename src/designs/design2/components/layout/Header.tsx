import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

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
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Brand Logo Symbol - Sky Blue outer, Royal Blue core, Orange center */}
          <div className="w-8.5 h-8.5 rounded-full border-2 border-[#000EDD] flex items-center justify-center p-1 relative overflow-hidden bg-white shadow-sm">
            <div className="w-full h-full bg-[#00A7FF] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-full shadow-sm"></div>
            </div>
          </div>
          <span className="font-extrabold text-sm tracking-widest uppercase text-slate-900">Laxmi Balaji</span>
        </div>
        
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

        <button className="bg-[#000EDD] hover:bg-[#FF5C00] text-white px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 rounded shadow-md shadow-[#000EDD]/15 hover:shadow-[#FF5C00]/20">
          Request Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
