import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Mail, Settings, Layers, Cpu, PenTool, ArrowRight, Shield, Star, Zap } from 'lucide-react';

const sidebarCategories = [
  { name: 'Automotive Press Components', path: '/products/automotive-press-components', icon: Settings },
  { name: 'Automotive Fabrication Components', path: '/products/automotive-fabrication-components', icon: Layers },
  { name: 'Non Automotive Parts', path: '/products/non-automotive-parts', icon: Cpu },
  { name: 'Press Tools', path: '/products/press-tools', icon: PenTool },
];

const productImages = [
  {
    src: '/automotive_press_components.png',
    alt: 'Automotive Press Component – Stamped Metal Part',
  },
  {
    src: '/automotive_press_components.png',
    alt: 'High-Precision Press Component',
  },
];

const features = ['Corrosion Resistant', 'Easy To Install', 'Reasonable Price'];

const springFast = { type: 'spring', stiffness: 220, damping: 22 };

const AutomotivePressComponents = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const prevSlide = () => setActiveSlide((p) => (p === 0 ? productImages.length - 1 : p - 1));
  const nextSlide = () => setActiveSlide((p) => (p === productImages.length - 1 ? 0 : p + 1));

  return (
    <div className="bg-slate-50 min-h-screen font-['Outfit']">
      {/* Page Hero Banner */}
      <section className="relative bg-[#03072c] py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A7FF]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springFast}
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <span>Products</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#00A7FF]">Automotive Press Components</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Automotive <span className="text-[#00A7FF]">Press Components</span>
            </h1>
            <p className="text-slate-400 mt-3 text-sm font-medium max-w-xl">
              Quality press components manufactured with high-end technology and raw materials — engineered for automotive excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springFast, delay: 0.1 }}
              className="lg:w-72 shrink-0"
            >
              <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm sticky top-28">
                <div className="bg-[#03072c] px-6 py-4">
                  <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest">Product Categories</span>
                </div>
                <ul className="flex flex-col">
                  {sidebarCategories.map((cat) => (
                    <li key={cat.path}>
                      <NavLink
                        to={cat.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-6 py-4 text-sm font-bold border-b border-slate-100 transition-all duration-200 ${
                            isActive
                              ? 'bg-[#FF5C00] text-white'
                              : 'text-slate-700 hover:bg-[#00A7FF] hover:text-white'
                          }`
                        }
                      >
                        <cat.icon className="w-4 h-4 shrink-0" />
                        {cat.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

            {/* Main Product Area */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springFast, delay: 0.15 }}
              className="flex-1 min-w-0"
            >
              {/* Image Carousel */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0a1a3a] shadow-lg mb-8 aspect-[16/7]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide}
                    src={productImages[activeSlide].src}
                    alt={productImages[activeSlide].alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03072c]/60 to-transparent pointer-events-none" />
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/20"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all border border-white/20"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-2 rounded-full transition-all ${i === activeSlide ? 'bg-[#FF5C00] w-5' : 'bg-white/50 w-2'}`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info Card */}
              <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-2 block">Product Overview</span>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        AUTOMOTIVE PRESS COMPONENTS
                      </h2>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className="w-4 h-4 fill-[#FF5C00] text-[#FF5C00]" />
                      ))}
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-[#00A7FF] mb-6 rounded-full" />

                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                    We are experienced manufacturers and traders of quality Automotive Press Components, which are produced using high technological machines and quality raw material. These are light weight components that can be carried easily. The different types of Dies, Press Parts and Sheet Metal Components offered by our company.
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-9 h-9 bg-[#00A7FF]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4 text-[#00A7FF]" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">ISO Certified</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-9 h-9 bg-[#FF5C00]/10 rounded-lg flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-[#FF5C00]" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">High Precision</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-9 h-9 bg-[#000EDD]/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#000EDD]" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Quality Tested</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-[#FF5C00] inline-block rounded" />
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={springFast}
                    onClick={() => setEnquiryOpen(true)}
                    className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-lg shadow-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Send Enquiry
                  </motion.button>
                </div>
              </div>

              {/* Related Products Nav */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sidebarCategories.filter(c => c.path !== '/products/automotive-press-components').map((cat) => (
                  <NavLink
                    key={cat.path}
                    to={cat.path}
                    className="group flex items-center gap-3 p-4 bg-white border border-slate-200/60 rounded-xl hover:border-[#00A7FF]/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 bg-slate-100 group-hover:bg-[#00A7FF]/10 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                      <cat.icon className="w-4 h-4 text-slate-500 group-hover:text-[#00A7FF] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 group-hover:text-[#00A7FF] transition-colors leading-tight">{cat.name}</p>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium mt-0.5 group-hover:text-[#00A7FF]/70 transition-colors">
                        View <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {enquiryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setEnquiryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 24, opacity: 0 }}
              transition={springFast}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-black text-slate-900 mb-1">Send an Enquiry</h3>
              <p className="text-slate-500 text-sm mb-6">Regarding: <span className="font-bold text-[#FF5C00]">Automotive Press Components</span></p>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A7FF] transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A7FF] transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A7FF] transition-colors" />
                <textarea rows={4} placeholder="Your Message or Requirements..." className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00A7FF] transition-colors resize-none" />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setEnquiryOpen(false)}
                  className="flex-1 py-3 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-[#FF5C00] hover:bg-[#00A7FF] text-white rounded-lg text-sm font-bold uppercase tracking-wider transition-colors">
                  Submit Enquiry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AutomotivePressComponents;
