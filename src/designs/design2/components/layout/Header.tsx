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
    <nav className="sticky top-0 w-full z-[100] py-4 bg-white border-b border-slate-100 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Brand Logo Symbol - Sky Blue outer, Royal Blue core, Orange center */}
          <div className="w-8 h-8 rounded-full border-2 border-[#000EDD] flex items-center justify-center p-1 relative overflow-hidden bg-white shadow-sm">
            <div className="w-full h-full bg-[#00A7FF] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#FF5C00] rounded-full shadow-sm"></div>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight uppercase text-slate-900">Laxmi Balaji</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider">
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

        <button className="bg-[#000EDD] hover:bg-[#00A7FF] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest border border-transparent hover:border-[#FF5C00] transition-all rounded">
          Request Quote
        </button>
      </div>
    </nav>
  );
};

export default Header;
