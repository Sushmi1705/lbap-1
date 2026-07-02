import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 text-white border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           <div className="md:col-span-4">
              <div className="flex items-center gap-3.5 mb-6">
                 <div className="w-8 h-8 rounded bg-[#0B96AC] flex items-center justify-center">
                    <Factory className="w-4 h-4 text-white" />
                 </div>
                 <div className="flex flex-col">
                   <span className="font-bold text-sm tracking-widest uppercase text-white leading-none">Laxmi Balaji</span>
                   <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#0B96AC] mt-1.5">Automotive Products</span>
                 </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed mb-8 max-w-sm font-medium">
                We are a premier automotive metal stamping, precision fabrication, and modular assembly manufacturer. Delivering high-quality tier-1 components that exceed standard performance benchmarks for top-tier automotive global brands.
              </p>
              
              <div className="flex gap-3">
                 <a href="mailto:jallreellbalaji@gmail.com" className="w-8 h-8 bg-[#0F1319] border border-white/5 rounded flex items-center justify-center hover:bg-[#0B96AC] hover:border-[#0B96AC] transition-all">
                    <Mail className="w-4 h-4 text-white" />
                 </a>
                 <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0F1319] border border-white/5 rounded flex items-center justify-center hover:bg-[#0B96AC] hover:border-[#0B96AC] transition-all">
                    <Globe className="w-4 h-4 text-white" />
                 </a>
              </div>
           </div>
           
           <div className="md:col-span-3">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Explore Navigation</h4>
              <ul className="space-y-3.5 text-xs font-semibold text-slate-400">
                 <li><Link to="/" className="hover:text-[#0B96AC] transition-colors">Homepage Root</Link></li>
                 <li><Link to="/about" className="hover:text-[#0B96AC] transition-colors">Corporate Profile</Link></li>
                 <li><Link to="/product" className="hover:text-[#0B96AC] transition-colors">Product Solutions</Link></li>
                 <li><Link to="/machineries" className="hover:text-[#0B96AC] transition-colors">Production Facilities</Link></li>
                 <li><Link to="/csr" className="hover:text-[#0B96AC] transition-colors">Social Responsibility</Link></li>
                 <li><Link to="/gallery" className="hover:text-[#0B96AC] transition-colors">Facility Gallery</Link></li>
                 <li><Link to="/career" className="hover:text-[#0B96AC] transition-colors">Join Our Team</Link></li>
                 <li><Link to="/contact" className="hover:text-[#0B96AC] transition-colors">Connect Contact</Link></li>
              </ul>
           </div>

           <div className="md:col-span-3">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Contact & Operations</h4>
              <ul className="space-y-4 text-xs font-medium text-slate-400">
                 <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0B96AC] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu, India</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0B96AC] shrink-0" />
                    <span>jallreellbalaji@gmail.com</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0B96AC] shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span>+91 93643 97522</span>
                      <span>+91 97910 85511</span>
                    </div>
                 </li>
              </ul>
           </div>

           <div className="md:col-span-2">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">System Identity</h4>
              <div className="w-28 h-28 bg-[#0F1319] border border-white/5 rounded flex flex-col items-center justify-center p-2 hover:border-[#0B96AC] transition-colors">
                 <div className="w-full h-full border border-white/5 bg-slate-950 flex flex-col items-center justify-center text-[8px] font-mono uppercase text-white/30 tracking-widest select-none">
                    <QrCodeIcon />
                    <span className="mt-2.5 font-sans font-bold text-[7px] text-[#0B96AC]">SCAN FOR CONTACT</span>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
           COPYRIGHT © 2026 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

// Sub-component for QR code placeholder illustration
const QrCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v.01" />
    <path d="M12 7v.01" />
    <path d="M12 12v.01" />
    <path d="M7 12v.01" />
    <path d="M12 17v.01" />
    <path d="M17 12v.01" />
  </svg>
);

export default Footer;
