import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Mail, Globe, MapPin, Phone, ArrowUp, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // Monitor scroll height to show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 glass-panel-dark text-white border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           {/* Company Bio */}
           <div className="md:col-span-4 space-y-6">
              <div className="flex items-center">
                 <div className="bg-white/95 hover:bg-white px-3.5 py-1.5 rounded border border-white/10 shadow-sm transition-all duration-300 flex items-center justify-center h-12">
                    <img src="/logo.png" alt="LAB Automotive Logo" className="h-full w-auto object-contain" />
                 </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
                We are a premier automotive metal stamping, precision fabrication, and modular assembly manufacturer. Delivering high-quality tier-1 components that exceed standard performance benchmarks for top-tier automotive global brands.
              </p>
              
              {/* WhatsApp direct connection and Mail link */}
              <div className="flex gap-3">
                 <a href="mailto:jotheeslbap@gmail.com" className="w-8 h-8 bg-[#0F1319] border border-white/5 rounded flex items-center justify-center hover:bg-[#0B96AC] hover:border-[#0B96AC] transition-all" title="Mail Us">
                    <Mail className="w-4 h-4 text-white" />
                 </a>
                 <a href="https://api.whatsapp.com/send?phone=+919790005516&text=Hi%20Sir,%20Please%20share%20Me%20More%20Details" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#0F1319] border border-white/5 rounded flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all" title="Connect on WhatsApp">
                    <Send className="w-4 h-4 text-white" />
                 </a>
              </div>
           </div>
           
           {/* Navigation Quick Links */}
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

           {/* Contact & Operations (Reference Site Details) */}
           <div className="md:col-span-3">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Contact & Operations</h4>
              <ul className="space-y-4 text-xs font-medium text-slate-400 font-sans">
                 <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#0B96AC] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Plot No. 16-C, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu, India</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0B96AC] shrink-0" />
                    <span className="font-semibold">jotheeslbap@gmail.com</span>
                 </li>
                 <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#0B96AC] shrink-0 mt-0.5" />
                    <div className="flex flex-col font-mono text-[11px] font-semibold text-slate-300">
                      <span>+91 99943 97522</span>
                      <span>+91 97900 05516</span>
                    </div>
                 </li>
              </ul>
           </div>

           {/* Certifications and QR */}
           <div className="md:col-span-2 space-y-6">
              <div>
                 <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Certifications</h4>
                 <div className="flex flex-col gap-1.5 text-[9px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                       <Check className="w-3 h-3 text-[#0B96AC]" />
                       <span>IATF 16949 COMPLIANT</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <Check className="w-3 h-3 text-[#0B96AC]" />
                       <span>ISO 9001:2015 REGISTERED</span>
                    </div>
                 </div>
              </div>

              <div className="w-28 h-28 bg-[#0F1319] border border-white/5 rounded flex flex-col items-center justify-center p-2 hover:border-[#0B96AC] transition-colors group">
                 <div className="w-full h-full border border-white/5 bg-slate-950 flex flex-col items-center justify-center text-[8px] font-mono uppercase text-white/30 tracking-widest select-none">
                    <QrCodeIcon />
                    <span className="mt-2 font-sans font-bold text-[7px] text-[#0B96AC] group-hover:text-white transition-colors">SCAN TO CALL</span>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest text-center">
           COPYRIGHT © 2026 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* --- Floating Back-to-Top Button --- */}
      <AnimatePresence>
         {showScrollBtn && (
           <motion.button
             initial={{ opacity: 0, scale: 0.8, y: 15 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.8, y: 15 }}
             onClick={scrollToTop}
             className="fixed bottom-8 right-8 z-[90] bg-[#0B96AC] text-white p-3 rounded-full shadow-lg shadow-[#0B96AC]/25 hover:bg-[#097b8d] hover:scale-105 transition-all border border-[#0B96AC]/20"
             title="Scroll to Top"
           >
              <ArrowUp className="w-5 h-5 animate-pulse" />
           </motion.button>
         )}
      </AnimatePresence>
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
