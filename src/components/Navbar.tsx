import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowRight, Terminal } from 'lucide-react';

interface NavbarProps {
  activePage: 'home' | 'about' | 'products' | 'machineries' | 'csr' | 'gallery' | 'career' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const linkClasses = (page: string) => {
    const base = "transition-all pb-1 border-b-2 font-bold uppercase text-[10px] tracking-[0.2em]";
    if (activePage === page) {
      return `${base} text-white border-[#0B96AC]`;
    }
    return `${base} text-slate-400 border-transparent hover:text-white hover:border-white/20`;
  };

  return (
    <>
      {/* --- Top Industrial Notice/Status Bar --- */}
      <div className="bg-slate-950 border-b border-white/5 py-2 px-6 text-[10px] tracking-[0.2em] font-mono text-slate-400 hidden md:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> SYSTEM: NOMINAL
            </span>
            <span>|</span>
            <span>REGISTRATION: ISO 9001:2015 & IATF 16949</span>
          </div>
          <div className="flex items-center gap-4 text-[#0B96AC]">
            <span>LATENCY: 1.4ms</span>
            <span>•</span>
            <span>SHIELD_GATE: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* --- Sticky Cyber-Industrial Navigation --- */}
      <nav className="bg-slate-950/85 backdrop-blur-lg border-b border-white/5 py-4 px-6 sticky top-0 z-[100] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3.5 group cursor-pointer">
             <div className="relative w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center p-1.5 overflow-hidden transition-all duration-500 group-hover:border-[#0B96AC]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B96AC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full bg-slate-900 rounded border border-white/5 group-hover:bg-[#0B96AC]/25 transition-all duration-300 flex items-center justify-center">
                  <Factory className="w-4 h-4 text-[#0B96AC]" />
                </div>
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-sm tracking-[0.2em] uppercase text-white leading-none">Laxmi Balaji</span>
               <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#0B96AC] mt-1.5">Automotive Products</span>
             </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={linkClasses('home')}>Home</Link>
            <Link to="/about" className={linkClasses('about')}>About Us</Link>
            <Link to="/product" className={linkClasses('products')}>Products</Link>
            <Link to="/machineries" className={linkClasses('machineries')}>Machineries</Link>
            <Link to="/csr" className={linkClasses('csr')}>CSR</Link>
            <Link to="/gallery" className={linkClasses('gallery')}>Gallery</Link>
            <Link to="/career" className={linkClasses('career')}>Careers</Link>
            <Link to="/contact" className={linkClasses('contact')}>Contact Us</Link>
          </div>
          
          {/* CTA Button */}
          <Link to="/contact" className="relative group overflow-hidden bg-slate-900 hover:bg-[#0B96AC] text-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest rounded border border-white/10 hover:border-[#0B96AC] transition-all duration-300 shadow-lg hover:shadow-[#0B96AC]/20">
            <span className="relative z-10 flex items-center gap-2">
              Request Technical Quote <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
