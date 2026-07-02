import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Globe, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  ShoppingCart, 
  Truck,
  Activity,
  Sparkles,
  CheckCircle2,
  Send
} from 'lucide-react';

const Contact = () => {
  const [queryType, setQueryType] = useState<'rfq' | 'supplier' | 'technical'>('rfq');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const springTransition = { type: "spring", stiffness: 70, damping: 18 };
  const springTransitionFast = { type: "spring", stiffness: 200, damping: 22 };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: springTransition
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned Contact Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Technical Drafting / Blueprint Reviews */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Technical drafting blueprint project review consulting" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00084d]/80 via-[#00084d]/55 to-[#00084d]/25"></div>
          {/* Bottom blend block */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
        </motion.div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-1"></div>
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00A7FF]/10 rounded-full blur-[120px] pointer-events-none z-1"></div>

        <div className="container-custom relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            <div className="lg:col-span-8 space-y-8">
              


              {/* Mixed-Case Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
              >
                <span>Connect with Our</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Sales Engineers
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                Our technical specialists are ready to discuss complex manufacturing requirements, from initial sheet metal prototyping to full-scale press component production.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>RFQ Typical response time: 4.2h</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Direct Technical support access</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Global supplier coordination docks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>12 Regional Logistics Hubs</span>
                </div>
              </motion.div>

              {/* Hero actions */}
              <motion.div 
                variants={fadeInUp} 
                className="flex flex-wrap gap-4 pt-1"
              >
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#inquiry" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#locations"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Find plant coordinates
                </motion.a>
              </motion.div>

            </div>

            {/* Floating SCADA Status Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransition}
                className="p-8 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-md max-w-xs space-y-4 z-10 animate-border-shimmer"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-[#00A7FF] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    INQUIRY NODE
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">ACTIVE</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">Response Speed</span>
                    <span className="text-[#00A7FF] font-bold">&lt; 4 Hours</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">Division Status</span>
                    <span className="text-slate-800">Fully Staffed</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-555">Security Gate</span>
                    <span className="text-slate-800">AES-256 Synced</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>SSL_SECURE</span>
                  <span>NODE_04</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Inquiry Form & Sidebar Section --- */}
      <section id="inquiry" className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Specialized Divisions Card */}
              <div className="bg-white border border-slate-200/60 p-8 rounded-xl shadow-sm animate-border-shimmer relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#00A7FF] mb-8">Specialized Divisions</h4>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#00A7FF] transition-colors group">
                    <span>Technical Support</span> 
                    <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </li>
                  <li className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#00A7FF] transition-colors group">
                    <span>Procurement & Supply</span> 
                    <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </li>
                  <li className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-4 cursor-pointer hover:text-[#00A7FF] transition-colors group">
                    <span>Regulatory Compliance</span> 
                    <ArrowRight className="w-3.5 h-3.5 rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </li>
                </ul>
              </div>

              {/* Global Reach info */}
              <div className="p-8 border border-slate-200/60 bg-slate-50/50 rounded-xl shadow-sm animate-border-shimmer relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Global Reach</h4>
                <p className="text-xs text-slate-505 leading-relaxed font-sans font-medium">
                  LBAP operates from 12 strategic production plants across the Asia-Pacific region. This geographic layout ensures optimal JIT lineside deliveries and zero supply docks bottlenecks.
                </p>
              </div>

            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-8 bg-white border border-slate-200/60 p-12 rounded-xl shadow-sm relative overflow-hidden animate-border-shimmer">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Global Inquiry Hub</h2>
                  <p className="text-slate-400 text-[11px] font-medium font-sans mt-1">Configure your request parameters for immediate dispatch.</p>
                </div>

                {/* Form selector buttons */}
                <div className="flex gap-1.5 bg-slate-50 border border-slate-200 p-0.5 rounded-md relative z-10">
                  {([
                    { id: 'rfq', label: 'RFQ' },
                    { id: 'supplier', label: 'Supplier' },
                    { id: 'technical', label: 'Tech Info' }
                  ] as const).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setQueryType(tab.id)}
                      className="px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider relative transition-all rounded z-10"
                    >
                      <span className={queryType === tab.id ? 'text-white font-extrabold transition-colors' : 'text-slate-500'}>
                        {tab.label}
                      </span>
                      {queryType === tab.id && (
                        <motion.div 
                          layoutId="activeQueryTypeTab"
                          className="absolute inset-0 bg-[#00A7FF] rounded shadow-sm z-[-1]"
                          transition={springTransitionFast}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center text-slate-400 space-y-4"
                >
                  <div className="w-12 h-12 bg-[#00A7FF]/5 border border-[#00A7FF]/15 flex items-center justify-center text-[#00A7FF] rounded-full mx-auto animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Inquiry Submitted Successfully</h3>
                  <p className="text-[11px] font-sans max-w-sm mx-auto leading-relaxed">
                    Our technical sales team has received your parameters and will compile a specialized report within our 4.2-hour limit.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Select Region</label>
                      <select className="w-full bg-slate-50 border border-slate-200 p-4 text-xs font-bold text-slate-700 outline-none focus:border-[#00A7FF]/50 transition-colors rounded-lg appearance-none cursor-pointer">
                        <option>South East Asia (HQ)</option>
                        <option>EMEA Region</option>
                        <option>Americas</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Technical Requirement</label>
                      <select className="w-full bg-slate-50 border border-slate-200 p-4 text-xs font-bold text-slate-700 outline-none focus:border-[#00A7FF]/50 transition-colors rounded-lg appearance-none cursor-pointer">
                        <option>Sheet Metal Fabrication</option>
                        <option>Heavy Pressing (Tool & Die)</option>
                        <option>Robotic Weld Assembly</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                      <input type="text" required placeholder="Engineering Lead / Manager" className="w-full bg-white border border-slate-250 p-4 text-xs font-semibold text-slate-850 outline-none focus:border-[#00A7FF]/50 transition-colors rounded-lg" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Corporate Email</label>
                      <input type="email" required placeholder="sales@company.com" className="w-full bg-white border border-slate-255 p-4 text-xs font-semibold text-slate-855 outline-none focus:border-[#00A7FF]/50 transition-colors rounded-lg" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Technical Specifications / Project Scope</label>
                    <textarea required rows={6} placeholder="Detail the dimensions, material grades, tolerance margins, and estimated annual volume..." className="w-full bg-white border border-slate-255 p-4 text-xs font-semibold text-slate-855 outline-none focus:border-[#00A7FF]/50 transition-colors resize-none rounded-lg"></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                    <button type="submit" className="flex items-center gap-2 bg-[#000EDD] hover:bg-[#00A7FF] text-white px-10 py-4 text-xs font-bold uppercase tracking-wider transition-colors rounded shadow-sm border border-transparent hover:border-[#FF5C00]">
                      Submit RFQ <Send className="w-4 h-4" />
                    </button>
                    <span className="text-[9px] font-mono text-slate-400">
                      Typical response time: <span className="text-[#00A7FF] font-bold">4.2 hours</span>
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* --- 3. World Coordinates Map Section --- */}
      <section id="locations" className="py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              COORDINATES
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Manufacturing HQ & Plant Nodes
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          <div className="relative aspect-[21/9] bg-slate-950 overflow-hidden rounded-xl border border-slate-200/60 shadow-sm animate-border-shimmer">
            <iframe 
              src="https://maps.google.com/maps?q=Plot%20No.%2016-C,%203rd%20Cross,%20SIPCOT%20Industrial%20Complex%20-%20Phase%202,%20Hosur-635126,%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Laxmi Balaji Manufacturing HQ Location Map"
              className="w-full h-full border-0 opacity-100"
              allowFullScreen
              loading="lazy"
            />
            
            <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-sm p-6 shadow-xl border-l-4 border-[#FF5C00] rounded-r-lg max-w-xs space-y-2 z-20">
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#FF5C00] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                MANUFACTURING HQ
              </h4>
              <h3 className="text-base font-bold text-slate-800 tracking-tight uppercase">SIPCOT Phase II, Hosur</h3>
              <p className="text-[8px] text-slate-400 font-mono">Plot No. 16-C, 3rd Cross, Hosur-635126, TN</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. Technical Support Divisions Cards --- */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Technical Support */}
            <div className="bg-white border border-slate-200/60 p-10 flex flex-col justify-between h-full group overflow-hidden rounded-xl shadow-sm hover:border-[#00A7FF]/25 hover:shadow-md transition-all duration-300 animate-border-shimmer relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#000EDD] rounded-lg group-hover:bg-[#00A7FF] group-hover:text-white transition-all duration-300">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Technical Support</h3>
                <p className="text-slate-555 text-xs leading-relaxed font-sans font-medium">
                  Dedicated lineside coordinates for active progressive die layouts, QA corrections, and automated tolerances queries.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8">
                <span className="text-[10px] font-mono font-bold text-[#00A7FF] tracking-widest block uppercase">LINE: +1 (800) LBAP-TECH</span>
              </div>
            </div>

            {/* Procurement */}
            <div className="bg-white border border-slate-200/60 p-10 flex flex-col justify-between h-full group overflow-hidden rounded-xl shadow-sm hover:border-[#00A7FF]/25 hover:shadow-md transition-all duration-300 animate-border-shimmer relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#000EDD] rounded-lg group-hover:bg-[#00A7FF] group-hover:text-white transition-all duration-300">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Procurement</h3>
                <p className="text-slate-555 text-xs leading-relaxed font-sans font-medium">
                  Supply chain audits, raw material sourcing docks coordination, and progressive metal coils vendor registration limits.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8">
                <span className="text-[10px] font-mono font-bold text-[#00A7FF] tracking-widest block uppercase">EMAIL: procurement@lbap.com</span>
              </div>
            </div>

            {/* Machinery Sales */}
            <div className="bg-white border border-slate-200/60 p-10 flex flex-col justify-between h-full group overflow-hidden rounded-xl shadow-sm hover:border-[#00A7FF]/25 hover:shadow-md transition-all duration-300 animate-border-shimmer relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#000EDD] rounded-lg group-hover:bg-[#00A7FF] group-hover:text-white transition-all duration-300">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">Machinery Sales</h3>
                <p className="text-slate-555 text-xs leading-relaxed font-sans font-medium">
                  Acquisition coordinates of certified high-tonnage progressive press lines, Bystronic fiber lasers, and coordinate metrology tables.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-8">
                <span className="text-[10px] font-mono font-bold text-[#00A7FF] tracking-widest block uppercase">LINE: +1 (800) LBAP-MACH</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

// Local custom icons helper to avoid icon naming conflicts
const CheckCircle2Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Contact;
