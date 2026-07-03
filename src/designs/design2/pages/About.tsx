import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Settings, 
  Box, 
  Database, 
  Cpu, 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Award,
  CheckCircle2,
  TrendingUp,
  Workflow,
  Sparkles
} from 'lucide-react';

// Animated Counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.5;
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 12);
      
      const timer = setInterval(() => {
        const step = Math.ceil(end / 80);
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={elementRef} className="font-mono font-black text-[#000EDD]">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState<'apac' | 'emea' | 'americas'>('apac');

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

  const timelineData = [
    { 
      year: "1994", 
      title: "Founding & Press Shop Node Setup", 
      desc: "LBAP starts local operations in South India, setting up 3 primary manual mechanical press frames to supply basic steel brackets to truck and trailer builders.",
      stats: "3 Press Units", 
      highlight: "Steel Bracket Forming", 
      badge: "ORIGIN" 
    },
    { 
      year: "2004", 
      title: "Automated Line Expansion & IATF Certification", 
      desc: "We configure our first multi-station progressive stamping line, integrating automatic coil decHandlers and acquiring global standard quality clearances.",
      stats: "15T Press Tonnage", 
      highlight: "Progressive Die Integration", 
      badge: "EXPANSION" 
    },
    { 
      year: "2014", 
      title: "Cleanroom Metrology & Robotic Assembly Loops", 
      desc: "Establishment of specialized CMM cleanroom labs and integration of 6-axis ABB robotic spot-welding cells, securing Tier-1 supplier status with international automotive OEMs.",
      stats: "99.8% QA Pass", 
      highlight: "Sub-Micron Laser CMM Quality", 
      badge: "PRECISION" 
    },
    { 
      year: "2024", 
      title: "Green Industrial Systems Integration", 
      desc: "Rollout of 3.5MW rooftop solar power array grids across plants, achieving 98% Zero Liquid Discharge water circularity and initiating net-zero automotive stamping.",
      stats: "3.5MW Solar Output", 
      highlight: "Decarbonized Manufacturing", 
      badge: "SUSTAINABILITY" 
    }
  ];

  const regionalData = {
    apac: {
      title: "APAC HQ & Manufacturing Nodes",
      stat: "8 Plant Units",
      plants: "Hosur, Gurgaon, Pune, Bangalore Industrial Nodes",
      focus: "High-tonnage progressive mechanical stamping press lines, automated 6-axis welding cells, and Zeiss CMM labs.",
      details: "Our primary manufacturing base in Asia coordinates JIT lineside logistics directly into regional commercial vehicle and SUV assembly networks."
    },
    emea: {
      title: "EMEA Distribution & Logistics Docks",
      stat: "2 Regional Hubs",
      plants: "Frankfurt Logistics Hub, Gothenburg Support Docks",
      focus: "JIT buffering, lineside sequence sorting, tool maintenance support, and metallurgical customer service.",
      details: "Provides 24/7 technical alignment and material sequence audits for European Tier-1 commercial vehicle and heavy chassis assembly networks."
    },
    americas: {
      title: "Americas Technical Service Center",
      stat: "2 Plant Units",
      plants: "Detroit Support Center, Queretaro Stamping Node",
      focus: "Heavy press tool layout co-design engineering, CAD simulation stress reviews, and progressive validation.",
      details: "Collaborates with North American design nodes to co-engineer progressive stamping die structures before scaling tool production inside APAC hubs."
    }
  };

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned About Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#03072c] border-b border-white/10 overflow-hidden">
        {/* Background - Industrial stamping plant (Natural colors with logo color overlays) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/about_hero_bg.png" 
            alt="Robotic manufacturing line telemetry dashboard" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03072c]/80 via-[#03072c]/55 to-[#03072c]/25"></div>
          {/* Bottom blend block */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
        </motion.div>

        {/* Subtle decorative grid lines */}
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


              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
              >
                <span>Crafting The Future of</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Industrial Precision
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium font-sans"
              >
                Laxmi Balaji Automotive Products Pvt. Ltd. (LBAP) represents three decades of zero-defect metal stamping, clinical tool design, and robotic component sub-assemblies. As a Tier-1 partner to global automotive OEMs, we design for performance, safety, and scale.
              </motion.p>

              {/* Action Buttons - Solid color themes */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#timeline" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Explore Our Legacy <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#reach" 
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Global Operations
                </motion.a>
              </motion.div>
            </div>

            {/* Hero Interactive Stats Circle */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={springTransition}
                className="relative w-64 h-64 rounded-full border border-slate-200/80 flex flex-col items-center justify-center p-8 bg-white backdrop-blur-md shadow-md hover:shadow-xl hover:border-[#00A7FF]/30 transition-all duration-300 animate-border-shimmer"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-[#00A7FF]/20 animate-[spin_100s_linear_infinite]"></div>
                
                <span className="text-6xl font-black tracking-tighter leading-none">
                  <AnimatedCounter value={30} suffix="+" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00A7FF] mt-4 text-center leading-normal">
                  Years of Sector Reputation
                </span>
                
                <div className="absolute -bottom-3.5 bg-slate-50 px-3 py-1 border border-slate-200/60 rounded text-[9px] font-sans font-bold text-slate-500 shadow-sm">
                  Hosur Plant
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- Global Infrastructure (Bento Grid) --- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 max-w-2xl"
          >
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              OPERATIONAL HORIZONS
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Global Scale, Clinical Systems
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            <p className="text-slate-505 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Our massive industrial footprint is engineered to achieve seamless component scalability with micro-level tolerance guarantees.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            
            {/* Bento Card 1: Total Footprint */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.005 }}
              transition={springTransitionFast}
              className="md:col-span-8 bg-white border border-slate-200/60 p-8 lg:p-12 rounded-xl flex flex-col justify-between group hover:border-[#00A7FF]/20 hover:shadow-lg transition-all duration-300 shadow-sm animate-border-shimmer"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[9px] font-sans font-bold text-slate-400 tracking-widest uppercase">
                    Primary Infrastructure Metrics
                  </span>
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00A7FF]">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-slate-550 text-xs font-bold uppercase tracking-widest mb-2">TOTAL MANUFACTURING FLOOR</h4>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter">
                    <AnimatedCounter value={2.4} suffix="" />
                  </span>
                  <span className="text-xl font-bold text-[#000EDD] font-mono">M SQ. FT.</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
                  Encompassing climate-controlled testing areas, automated robotic welding modules, and massive structural mechanical stamping arrays.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mt-8">
                <div>
                  <h5 className="text-xl font-bold font-mono">
                    <AnimatedCounter value={28} />
                  </h5>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-tight">Primary Assembly</p>
                </div>
                <div className="border-x border-slate-100 px-4">
                  <h5 className="text-xl font-bold font-mono">
                    0<AnimatedCounter value={4} />
                  </h5>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-tight">Component Hubs</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold font-mono">
                    0<AnimatedCounter value={5} />
                  </h5>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-tight">R&D Laboratories</p>
                </div>
              </div>
            </motion.div>

            {/* Info Cards Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              {/* Bento Card 2: Active Locations (Solid Royal Blue Card) */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={springTransitionFast}
                className="bg-[#000EDD] p-8 rounded-xl text-white shadow-md relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-white select-none">
                  <Globe className="w-36 h-36" />
                </div>
                <span className="text-[9px] font-mono opacity-80 tracking-widest block mb-4">Operational Nodes</span>
                <h3 className="text-5xl font-black font-mono tracking-tighter mb-2 text-white">
                  12
                </h3>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2">Active Worldwide Plants</h4>
                <p className="text-white/90 text-[11px] leading-relaxed font-sans font-medium">
                  Strategically localized plants aligned with the requirements of major international OEMs.
                </p>
              </motion.div>

              {/* Bento Card 3: Workforce Scale */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={springTransitionFast}
                className="bg-white border border-slate-200/60 p-8 rounded-xl group hover:border-[#00A7FF]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm animate-border-shimmer relative"
              >
                {/* Accent line on top of card using Orange */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl z-20"></div>

                <div>
                  <span className="text-[9px] font-mono text-slate-400 tracking-widest block mb-4">HUMAN RESOURCES</span>
                  <h3 className="text-4xl font-black font-mono tracking-tighter mb-2">
                    <AnimatedCounter value={4500} suffix="+" />
                  </h3>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Technical Specialists</h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed font-sans pt-4 border-t border-slate-100 mt-2">
                  Consisting of materials engineering experts, SCM planners, and QA controllers.
                </p>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* --- Technical Blueprint Component --- */}
      <section className="py-24 bg-white relative border-b border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springTransition}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] block">
                METALLURGICAL LOGIC
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                In-House CAD Synthesis & Tooling Room
              </h2>
              <div className="w-20 h-[3px] bg-[#00A7FF] mt-1"></div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans mt-3">
                By eliminating third-party design vendors, we manage tool fabrication from conceptual drawing down to final press calibrators. Our tool designers utilize advanced progressive stress-simulations to optimize material yield and structural stability.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dimensional tolerance bounds matching 0.002mm limits</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                  <Cpu className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Integrated simulation cycles for progressive die structures</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                  <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Fast prototyping loops reducing standard tool lead times by 35%</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive Blueprint SVG (Highly detailed CAD style with scanning sweep line) */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="bg-white border border-slate-200 rounded-xl p-6 relative overflow-hidden aspect-[1.6/1] shadow-sm hover:border-[#00A7FF]/40 transition-all duration-550 animate-border-shimmer"
              >
                {/* Tech blueprint grids */}
                <div className="absolute inset-0 bg-[radial-gradient(#00a7ff0a_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
                
                {/* Scanning sweep bar animation - Solid line with opacity */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#00A7FF]/80 animate-scan-sweep pointer-events-none z-10"></div>

                {/* Dynamic Coordinate Tag */}
                <div className="absolute top-4 left-4 bg-white border border-slate-200 rounded-md px-3 py-1 font-sans text-[9px] text-[#00A7FF] flex items-center gap-2 shadow-sm font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C00] animate-ping"></span>
                  CAD Axis Calibration
                </div>

                <div className="absolute top-4 right-4 text-[9px] font-sans text-slate-400 font-bold">
                  System Version 4.01
                </div>

                {/* Detailed CAD drawing */}
                <svg className="w-full h-full text-slate-500/40 pointer-events-none mt-6" viewBox="0 0 100 50">
                  {/* Fine layout crosshairs */}
                  <line x1="5" y1="25" x2="95" y2="25" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
                  <line x1="50" y1="5" x2="50" y2="45" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />

                  {/* Mechanical press frame lines */}
                  <rect x="15" y="10" width="70" height="30" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="3 1" />
                  <rect x="17" y="12" width="66" height="26" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1" />
                  
                  {/* Punch Stage 1 (Circular cutouts) */}
                  <circle cx="28" cy="25" r="5" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <circle cx="28" cy="25" r="7" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1" />
                  <line x1="21" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="28" y1="18" x2="28" y2="32" stroke="currentColor" strokeWidth="0.2" />

                  {/* Punch Stage 2 (Main forming segment) */}
                  <circle cx="50" cy="25" r="6.5" fill="none" stroke="#00A7FF" strokeWidth="0.65" />
                  <circle cx="50" cy="25" r="3" fill="none" stroke="#00A7FF" strokeWidth="0.3" />
                  <motion.circle 
                    cx="50" 
                    cy="25" 
                    r="9.5" 
                    fill="none" 
                    stroke="#00A7FF" 
                    strokeWidth="0.25" 
                    strokeDasharray="2 2"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />
                  <line x1="39" y1="25" x2="61" y2="25" stroke="#00A7FF" strokeWidth="0.2" />
                  <line x1="50" y1="14" x2="50" y2="36" stroke="#00A7FF" strokeWidth="0.2" />

                  {/* Punch Stage 3 (Ejector node) */}
                  <circle cx="72" cy="25" r="5" fill="none" stroke="currentColor" strokeWidth="0.4" />
                  <circle cx="72" cy="25" r="7" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1" />
                  <line x1="65" y1="25" x2="79" y2="25" stroke="currentColor" strokeWidth="0.2" />
                  <line x1="72" y1="18" x2="72" y2="32" stroke="currentColor" strokeWidth="0.2" />

                  {/* Horizontal dimension markers */}
                  <path d="M 15 8 L 85 8" fill="none" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 15 6 L 15 10" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 85 6 L 85 10" stroke="currentColor" strokeWidth="0.15" />
                  <text x="50" y="6" fontSize="2" fill="currentColor" textAnchor="middle" fontFamily="monospace">WIDTH_BOUND: 70.00mm</text>

                  {/* Vertical dimension markers */}
                  <path d="M 90 10 L 90 40" fill="none" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 88 10 L 92 10" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 88 40 L 92 40" stroke="currentColor" strokeWidth="0.15" />
                  <text x="94" y="26" fontSize="2" fill="currentColor" textAnchor="start" fontFamily="monospace" transform="rotate(90 94 26)">HEIGHT: 30.00mm</text>

                  {/* Material Feed Progressive Path */}
                  <motion.path 
                    d="M 10 37 Q 25 37 28 29 T 50 17 T 72 29 T 90 37" 
                    fill="none" 
                    stroke="rgba(0, 167, 255, 0.45)" 
                    strokeWidth="0.65" 
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </svg>

                {/* Footnotes */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between font-sans text-[8px] text-slate-500 border-t border-slate-200/60 pt-3">
                  <span>Staging: Pierce, Draw, Strip</span>
                  <span>Tolerance: +/-0.02mm</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Interactive Milestones Timeline --- */}
      <section id="timeline" className="py-24 bg-[#FAFAFA] relative border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              CHRONOLOGY LOG
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Timeline & Historical Evolution
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
            <p className="text-slate-550 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Thirty years of strategic transition from a regional fabricator to a global tier-1 supply network.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={springTransition}
            className="max-w-4xl mx-auto"
          >
            {/* Timeline selector bar */}
            <div className="flex justify-between items-center relative border-b border-slate-200/80 pb-6 mb-12">
              <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-slate-200"></div>
              
              {timelineData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className="flex flex-col items-center relative group z-10"
                >
                  <span className={`text-xs font-mono tracking-widest mb-3 transition-colors ${
                    selectedTimelineIndex === idx ? 'text-[#FF5C00] font-bold' : 'text-slate-400 group-hover:text-slate-700'
                  }`}>
                    {item.year}
                  </span>
                  
                  {/* Sliding underline active bar for labels - Styled with Orange */}
                  {selectedTimelineIndex === idx && (
                    <motion.div 
                      layoutId="activeYearUnderline"
                      className="absolute bottom-6 left-0 right-0 h-0.5 bg-[#FF5C00]"
                      transition={springTransitionFast}
                    />
                  )}

                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all flex items-center justify-center relative`}>
                    {/* Morphing active bullet circle using layoutId - Styled with Orange */}
                    {selectedTimelineIndex === idx ? (
                      <motion.div 
                        layoutId="activeBulletCircle"
                        className="w-2.5 h-2.5 bg-[#FF5C00] rounded-full"
                        transition={springTransitionFast}
                      />
                    ) : (
                      <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-slate-350 rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Content Display with sliding transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTimelineIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={springTransition}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-slate-200 p-8 lg:p-12 relative overflow-hidden shadow-sm animate-border-shimmer"
              >
                {/* Decorative coordinate watermark */}
                <div className="absolute right-4 bottom-4 font-sans text-[9px] text-slate-200 select-none uppercase tracking-widest font-black pointer-events-none">
                  Year {timelineData[selectedTimelineIndex].year}
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[#00A7FF] text-[10px] font-mono tracking-widest block uppercase mb-2.5 font-bold">
                      {timelineData[selectedTimelineIndex].badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4">
                      {timelineData[selectedTimelineIndex].title}
                    </h3>
                    <p className="text-slate-655 text-sm leading-relaxed font-medium font-sans">
                      {timelineData[selectedTimelineIndex].desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-100 pt-5 flex flex-wrap gap-6 items-center">
                    <div>
                      <span className="text-[9px] font-mono text-slate-400 uppercase block mb-1">METALLURGICAL KEYNOTE</span>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        {timelineData[selectedTimelineIndex].highlight}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-50 border border-slate-100 p-6 rounded-lg flex flex-col justify-center items-center text-center">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-4">MILESTONE IMPACT</span>
                  <div className="text-[#00A7FF] mb-2">
                    <Award className="w-8 h-8 mx-auto animate-pulse" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 font-sans leading-relaxed">
                    {timelineData[selectedTimelineIndex].stats}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* --- Strategic Reach (Interactive Map Layout) --- */}
      <section id="reach" className="py-24 bg-white relative border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Map Interaction Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                  GEOGRAPHIC LOGISTICS
                </span>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                  Localized Operations, Universal Standards
                </h2>
                <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
                <p className="text-slate-555 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
                  We deploy localized manufacturing and distribution nodes across strategic continental points to cut logistics transit overheads for OEMs.
                </p>
              </div>

              {/* Geographic buttons switcher with layoutsId indicators */}
              <div className="flex gap-2 bg-slate-50 border border-slate-200 p-1.5 rounded-md relative">
                {(['apac', 'emea', 'americas'] as const).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className="flex-1 py-2 text-[10px] font-bold uppercase tracking-wider relative transition-all rounded z-10"
                  >
                    <span className={activeRegion === region ? 'text-white transition-colors duration-250 font-extrabold' : 'text-slate-505 hover:text-slate-800'}>
                      {region}
                    </span>
                    {activeRegion === region && (
                      <motion.div 
                        layoutId="activeMapRegionTab"
                        className="absolute inset-0 bg-[#000EDD] rounded shadow-sm z-[-1]"
                        transition={springTransitionFast}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Region detail display card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={springTransitionFast}
                  className="bg-white border border-slate-150 p-6 rounded-lg space-y-4 shadow-sm animate-border-shimmer"
                >
                  <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                    <h4 className="text-xs font-bold uppercase text-slate-800 tracking-wide">
                      {regionalData[activeRegion].title}
                    </h4>
                    <span className="text-[9px] font-mono text-[#00A7FF] font-bold">
                      {regionalData[activeRegion].stat}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-400 font-mono uppercase">Operational Density:</div>
                    <div className="text-xs text-slate-750 font-bold">{regionalData[activeRegion].plants}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-400 font-mono uppercase">Technological Focus:</div>
                    <div className="text-xs text-slate-755 font-medium leading-relaxed">{regionalData[activeRegion].focus}</div>
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans leading-relaxed pt-2.5 border-t border-slate-200/60">
                    {regionalData[activeRegion].details}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Map Visualizer */}
            <div className="lg:col-span-7 relative">
              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 shadow-sm relative animate-border-shimmer">
                <svg className="w-full h-auto grayscale transition-all duration-300" viewBox="0 0 1000 480">
                  {/* Detailed land outlines */}
                  <path fill="#CBD5E1" opacity="0.65" d="M150,110 L190,95 L220,110 L250,90 L280,115 L290,130 L270,160 L240,180 L200,165 Z" />
                  <path fill="#CBD5E1" opacity="0.65" d="M220,220 L250,200 L280,225 L310,280 L290,360 L270,410 L250,420 L230,360 Z" />
                  <path fill="#CBD5E1" opacity="0.65" d="M430,90 L480,80 L520,70 L550,90 L560,115 L520,140 L480,135 L440,115 Z" />
                  <path fill="#CBD5E1" opacity="0.65" d="M440,160 L480,150 L520,170 L540,210 L550,260 L520,310 L480,300 L440,240 Z" />
                  <path fill="#CBD5E1" opacity="0.65" d="M560,90 L620,70 L720,75 L800,85 L850,110 L820,160 L780,210 L700,240 L650,245 L580,180 L560,120 Z" />
                  <path fill="#CBD5E1" opacity="0.65" d="M720,290 L780,270 L820,285 L810,330 L760,340 Z" />

                  {/* Pulsing hotspots styled with Orange #FF5C00 */}
                  <circle cx="210" cy="140" r="14" fill="rgba(255, 92, 0, 0.15)" />
                  <motion.circle 
                    cx="210" cy="140" r="14" fill="none" stroke="#FF5C00" strokeWidth="0.75"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                  />
                  <circle cx="210" cy="140" r="4.5" fill="#FF5C00" />
                  
                  <circle cx="480" cy="110" r="14" fill="rgba(255, 92, 0, 0.15)" />
                  <motion.circle 
                    cx="480" cy="110" r="14" fill="none" stroke="#FF5C00" strokeWidth="0.75"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 0.8 }}
                  />
                  <circle cx="480" cy="110" r="4.5" fill="#FF5C00" />

                  <circle cx="650" cy="190" r="20" fill="rgba(255, 92, 0, 0.2)" />
                  <motion.circle 
                    cx="650" cy="190" r="20" fill="none" stroke="#FF5C00" strokeWidth="0.75"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 1.6 }}
                  />
                  <circle cx="650" cy="190" r="5" fill="#FF5C00" />

                  {/* Dynamic drawing connecting paths connecting APAC Hub to active region */}
                  <AnimatePresence>
                    {activeRegion === 'emea' && (
                      <motion.path 
                        d="M 650 190 Q 565 130 480 110" 
                        fill="none" 
                        stroke="#00A7FF" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.75 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    )}
                    {activeRegion === 'americas' && (
                      <motion.path 
                        d="M 650 190 Q 430 110 210 140" 
                        fill="none" 
                        stroke="#00A7FF" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.75 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>
                </svg>

                {/* Map HUD details overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 border border-slate-200 rounded px-3 py-1.5 font-sans text-[8px] text-slate-500 shadow-sm">
                   Coordinates: Lat 12.74, Lng 77.82 | Active Region: <span className="text-[#00A7FF] uppercase font-bold">{activeRegion}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Visionary Leadership (Premium Profiles) --- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              EXECUTIVE BOARD
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Visionary Leadership
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Led by industry pioneers with decades of combined engineering expertise in sheet metal forming and robotics integration.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                name: "Vikram Malhotra", 
                role: "CHAIRMAN & CEO", 
                quote: "Precision is not an optimization metric, it is a structural baseline of OEM safety.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
              },
              { 
                name: "Ananya Singh", 
                role: "CHIEF OPERATIONS OFFICER", 
                quote: "Production predictability and direct JIT logistics synchronization are the foundation of client partnership.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              },
              { 
                name: "Dr. Rajesh Iyer", 
                role: "CHIEF TECHNOLOGY OFFICER", 
                quote: "By aligning advanced materials simulation with robotic tooling assemblies, we eliminate manufacturing deviations.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop" 
              }
            ].map((leader, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={springTransitionFast}
                className="relative group h-[480px] overflow-hidden rounded-xl border border-slate-200 bg-white flex flex-col justify-end shadow-sm animate-border-shimmer"
              >
                {/* Accent line on top of card using Orange */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF5C00] z-20 animate-[pulse_2.5s_infinite]"></div>

                {/* Background profile image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={leader.img} 
                    alt={leader.name} 
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/15 to-transparent"></div>
                </div>

                {/* Profile detail text */}
                <div className="relative z-10 p-6 bg-white border-t border-slate-100 backdrop-blur-md space-y-3.5">
                  <span className="text-[#00A7FF] font-bold text-[9px] tracking-[0.2em] uppercase">
                    {leader.role}
                  </span>
                  
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight uppercase leading-none">
                    {leader.name}
                  </h3>
                  
                  <p className="text-slate-655 text-xs leading-relaxed italic border-l-2 border-[#00A7FF] pl-3.5 pt-0.5 font-sans">
                    "{leader.quote}"
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-sans text-[9px]">
                    <Activity className="w-3 h-3 text-[#00A7FF]" />
                    Active Member
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- Premium Light CTA Section --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00a7ff07_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="bg-[#F1F5F9]/50 border border-slate-200/60 rounded-2xl p-10 lg:p-16 text-center space-y-8 shadow-sm animate-border-shimmer"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#00A7FF]/5 border border-[#00A7FF]/15 rounded-md text-[10px] font-sans tracking-widest text-[#00A7FF] uppercase font-bold">
              Scaling Logistics & Capacity
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight leading-none">
              Ready to integrate with <br />
              <span className="text-[#000EDD]">
                Our Precision Ecosystem?
              </span>
            </h2>
            
            <p className="text-slate-655 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium font-sans">
              Connect directly with our sales engineers to request customized progressive stamping quotes, view manufacturing capacities, or schedule a facility audit.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransitionFast}
                className="w-full sm:w-auto bg-[#000EDD] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransitionFast}
                className="w-full sm:w-auto border border-slate-250 bg-white text-slate-655 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors hover:text-slate-900 shadow-sm"
              >
                View Facility Details
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
