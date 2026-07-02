import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Activity, ChevronRight } from 'lucide-react';

const Footer = () => {
  const linkTransition = { type: "spring", stiffness: 300, damping: 20 };

  return (
    <footer className="w-full bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Top 4px Brand Colors Solid Stripe Ribbon */}
      <div className="flex w-full h-[4px]">
        <div className="bg-[#000EDD] flex-1"></div>
        <div className="bg-[#00A7FF] flex-1"></div>
        <div className="bg-[#FF5C00] flex-1"></div>
      </div>
      
      {/* Subtle decorative background blur blobs */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00A7FF]/3 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute top-12 left-10 w-[200px] h-[200px] bg-slate-100 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="bg-slate-50/30 pt-20 pb-10 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Brand & About Us (span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#000EDD] rounded-full"></div>
                <div className="w-1.5 h-6 bg-[#00A7FF] rounded-full"></div>
                <span className="text-lg font-black tracking-wider text-slate-900 font-sans uppercase">
                  LAXMI BALAJI
                </span>
              </div>
              
              <p className="text-[13px] text-slate-550 leading-[1.8] font-medium font-sans max-w-sm">
                Laxmi Balaji Automotive Products Pvt. Ltd. (LBAP) is one of the premier manufacturers and suppliers of heavy-duty Pressed components, Fabricated Parts, and robotic Sub-assemblies matching Tier-1 global quality benchmarks.
              </p>

              <div className="flex items-center gap-2 font-sans text-[10px] text-[#00A7FF] font-bold bg-[#00A7FF]/5 border border-[#00A7FF]/10 w-fit px-3 py-1.5 rounded-md">
                <Activity className="w-3.5 h-3.5 animate-pulse text-[#FF5C00]" />
                ISO 9001:2015 Certified Plant
              </div>
            </div>

            {/* Column 2: Quick Links (span 2) */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[11px] font-bold text-slate-900 tracking-[0.25em] uppercase">
                Quick Navigation
              </h4>
              <ul className="space-y-3">
                {['HOME', 'ABOUT US', 'PRODUCT', 'CAREER', 'CLIENT', 'CONTACT US'].map((link) => (
                  <li key={link}>
                    <motion.a 
                      whileHover={{ x: 6, color: "#00A7FF" }}
                      transition={linkTransition}
                      href="#" 
                      className="text-[12px] text-slate-500 hover:text-[#00A7FF] transition-colors font-bold uppercase tracking-wider flex items-center gap-1 group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Digital QR (span 2) */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-[11px] font-bold text-slate-900 tracking-[0.25em] uppercase">
                Digital ID
              </h4>
              <div className="space-y-3.5">
                <div className="bg-white p-3 border border-slate-200/60 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden w-fit animate-border-shimmer">
                  <img 
                    src="/footer_qr_code_1778314288081.png" 
                    alt="LBAP QR Code" 
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <span className="text-[9px] font-sans font-bold text-slate-500 tracking-wider block uppercase">
                  Scan for Audit Certificate
                </span>
              </div>
            </div>

            {/* Column 4: Contact details (span 4) */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-[11px] font-bold text-slate-900 tracking-[0.25em] uppercase">
                Corporate Office
              </h4>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A7FF]/5 flex items-center justify-center text-[#00A7FF] shrink-0 mt-0.5 border border-[#00A7FF]/10">
                    <MapPin className="w-4 h-4 text-[#000EDD]" />
                  </div>
                  <span className="text-[13px] text-slate-550 leading-relaxed font-medium font-sans">
                    Plot No. 16-C, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu
                  </span>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A7FF]/5 flex items-center justify-center text-[#00A7FF] shrink-0 border border-[#00A7FF]/10">
                    <Mail className="w-4 h-4 text-[#00A7FF]" />
                  </div>
                  <span className="text-[13px] text-slate-550 font-medium font-sans">
                    jotheeslbap@gmail.com
                  </span>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A7FF]/5 flex items-center justify-center text-[#00A7FF] shrink-0 border border-[#00A7FF]/10">
                    <Phone className="w-4 h-4 text-[#FF5C00]" />
                  </div>
                  <span className="text-[13px] text-slate-550 font-medium font-mono font-bold">
                    +91 99943 97522 / +91 97900 05516
                  </span>
                </li>
                
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00A7FF]/5 flex items-center justify-center text-[#00A7FF] shrink-0 border border-[#00A7FF]/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] text-slate-550 font-medium font-sans">
                    Mon - Sat: 10:00 AM - 06:00 PM
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white py-6 border-t border-slate-100 relative z-10">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 tracking-[0.12em] uppercase text-center md:text-left">
            COPYRIGHT © 2026 <span className="text-slate-800 font-extrabold border-b border-slate-200 pb-0.5">LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD.</span> ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#00A7FF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00A7FF] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
