import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-slate-50 font-['Inter']">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* ABOUT US */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[11px] tracking-[0.2em] text-[#191C1E] mb-8 uppercase">About Us</h4>
            <p className="text-[11px] text-[#8E99AF] leading-[1.8] pr-10">
              We are pleased to introduce ourselves as one of the leading manufacture and supply Pressed Components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for many leading automotive customers.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] tracking-[0.2em] text-[#191C1E] mb-8 uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-[11px] text-[#191C1E] font-medium uppercase tracking-widest">
              <li><Link to="/" className="hover:text-[#0B96AC] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#0B96AC] transition-colors">About Us</Link></li>
              <li><Link to="/product" className="hover:text-[#0B96AC] transition-colors">Product</Link></li>
              <li><Link to="/career" className="hover:text-[#0B96AC] transition-colors">Career</Link></li>
              <li><Link to="/client" className="hover:text-[#0B96AC] transition-colors">Client</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B96AC] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* QR CODE */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[11px] tracking-[0.2em] text-[#191C1E] mb-8 uppercase">QR Code</h4>
            <div className="w-24 h-24 bg-white border border-slate-100 p-1 flex items-center justify-center">
               <div className="w-full h-full border border-slate-50 flex items-center justify-center relative">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://laxmibalaji.com')}`} 
                    alt="QR Code" 
                    className="w-full h-full grayscale opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-4 h-4 bg-[#0B96AC] rounded-full shadow-[0_0_8px_rgba(11,150,172,0.3)]"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[11px] tracking-[0.2em] text-[#191C1E] mb-8 uppercase">Contact</h4>
            <ul className="flex flex-col gap-5 text-[11px] text-[#8E99AF]">
              <li className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-[#8E99AF] shrink-0 mt-0.5 opacity-60" />
                <span className="leading-relaxed">
                  Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#8E99AF] shrink-0 opacity-60" />
                <span className="hover:text-[#0B96AC] transition-colors cursor-pointer">jotheeslbap@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#8E99AF] shrink-0 opacity-60" />
                <span>+91 99943 97522 / +91 97900 05516</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-4 h-4 text-[#8E99AF] shrink-0 opacity-60" />
                <span>Mon - Sat: 10AM - 6PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 text-center text-[10px] tracking-[0.4em] uppercase text-[#8E99AF] font-bold">
          COPYRIGHT © 2024 <Link to="/" className="text-[#0B96AC] hover:opacity-70 transition-opacity">LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD.</Link> ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
