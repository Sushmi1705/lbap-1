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
  Sparkles,
  Target,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Animated Counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Capture ref value inside the effect so cleanup always has the correct reference
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
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
    <span ref={elementRef} className="font-mono font-black">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<'sheet' | 'fab' | 'press'>('sheet');
  const [activeService, setActiveService] = useState(0);

  const springTransition = { type: "spring", stiffness: 70, damping: 18 };
  const springTransitionFast = { type: "spring", stiffness: 200, damping: 22 };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: springTransition
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: springTransition }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: springTransition }
  };

  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  };

  const slowSpinAnimation = {
    rotate: [0, 360],
    scale: [1, 1.05, 1],
    transition: { duration: 25, repeat: Infinity, ease: "linear" }
  };

  const machineryData = {
    sheet: [
      { name: "AMADA Fiber Laser", cap: "3000W / 4000W", prec: "±0.01mm", origin: "Japan" },
      { name: "CNC Press Brake", cap: "130T High Speed", prec: "±0.02mm", origin: "Japan" },
      { name: "CMM Measuring Center", cap: "2000 x 1200mm", prec: "0.001mm", origin: "Germany" }
    ],
    fab: [
      { name: "ABB Robotic Welders", cap: "6-Axis Sync", prec: "Sub-micron", origin: "Sweden" },
      { name: "Welding Positioners", cap: "2-Axis Orbit", prec: "0.05° Orbit", origin: "Sweden" },
      { name: "High-Freq Tig Cell", cap: "400A Continuous", prec: "Precision Arc", origin: "Germany" }
    ],
    press: [
      { name: "Seyi Power Press Line", cap: "200T - 1000T", prec: "Prog Die Link", origin: "Taiwan" },
      { name: "Progressive Punch Array", cap: "400T Capacity", prec: "±0.02mm Tol", origin: "Japan" },
      { name: "Hydraulic Die Lifters", cap: "15T Max Lift", prec: "Coordinated Feed", origin: "Taiwan" }
    ]
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Cinematic Light Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-20 lg:py-0 bg-[#03072c] border-b border-white/10 overflow-hidden">
        {/* Background - Automated Robotic Assembly Line (Natural colors with logo color overlays) */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000" 
            alt="Robotic Assembly Line Stamping Press" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03072c]/80 via-[#03072c]/55 to-[#03072c]/25"></div>
          {/* Bottom-to-top blend mask */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
        </motion.div>

        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-1"></div>
        <motion.div 
          animate={pulseAnimation}
          className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00A7FF]/10 rounded-full blur-[120px] pointer-events-none z-1"
        ></motion.div>

        <div className="container-custom relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
          >
            
            <div className="lg:col-span-8 space-y-8">
              


              {/* Enhanced Hero Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white"
              >
                Engineering the Future of
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Automotive Stamping
                </span>
              </motion.h1>

              {/* Sub-text summary */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                Laxmi Balaji Automotive Products Pvt. Ltd. (LBAP) delivers advanced sheet metal fabrication, clinical tool die design, and robotic component sub-assemblies for global commercial vehicle, Tier-1 systems, and electric vehicle (EV) chassis platforms.
              </motion.p>

              {/* Hero Value Points - Styled with Brand Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Zero-Defect Mechanical Stamping</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Robotic Welding Structural Assemblies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>In-House Progressive CAD Simulation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>JIT Lineside OEM Delivery Solutions</span>
                </div>
              </motion.div>

              {/* Stats Highlights directly in Hero */}
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-8 pt-2 border-t border-white/10 max-w-md"
              >
                <div>
                  <span className="text-xs text-slate-400 font-mono block">ESTABLISHED</span>
                  <span className="text-base font-bold text-white">1994</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">GLOBAL SITES</span>
                  <span className="text-base font-bold text-white">12 Plants</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <span className="text-xs text-slate-400 font-mono block">CERTIFICATIONS</span>
                  <span className="text-base font-bold text-white">IATF 16949</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp} 
                className="flex flex-wrap gap-4 pt-1"
              >
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="/product" 
                  className="flex items-center gap-2 bg-gradient-to-r from-[#FF5C00] to-[#E05000] hover:from-[#E05000] hover:to-[#C04000] text-white shadow-lg shadow-[#FF5C00]/25 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm shadow-[#FF5C00]/20 transition-all duration-300"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="/machineries" 
                  className="flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-sm"
                >
                  Technical Data
                </motion.a>
              </motion.div>
            </div>

            {/* Floating Live Feed */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                whileHover={{ scale: 1.05 }}
                animate={floatingAnimation}
                className="p-8 glass-panel-dark border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-xs space-y-4 text-white hover:border-[#00A7FF]/50 transition-colors cursor-default"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h4 className="text-[#00A7FF] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse shadow-sm shadow-[#FF5C00]/50"></span>
                    Live Production Feed
                  </h4>
                  <span className="text-sm font-mono text-slate-400">PLANT_01</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  Batch L97 #6254 progressive stamping run is currently in final verification. Quality pass: 100%.
                </p>
                <div className="pt-2 flex justify-between items-center text-xs font-mono text-slate-400">
                  <span>RATE: 85 STROKES/MIN</span>
                  <span>TEMP: 22.4 °C</span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. Partners Strip --- */}
      <section className="bg-white border-b border-slate-200/60 py-5 relative overflow-hidden shadow-sm z-20">
        
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center gap-6">
          
          <div className="whitespace-nowrap shrink-0 md:border-r border-slate-200 md:pr-6 z-20 bg-white">
            <h3 className="text-sm font-black uppercase tracking-widest bg-gradient-to-r from-[#1B3F8F] to-[#00A7FF] bg-clip-text text-transparent flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00] animate-pulse shadow-[0_0_10px_rgba(255,92,0,0.6)]"></span>
              Partners in Precision Engineering
            </h3>
          </div>

          <div className="flex-grow overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] flex">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
              className="flex items-center whitespace-nowrap w-fit"
            >
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  {['VOLT-AUTO', 'NEXUS-MOTORS', 'APEX-PARTS', 'TITAN-ENGINEERING', 'FLUX-DYNAMICS', 'CORE-TECH'].map((p) => (
                    <span key={p + i} className="text-2xl font-black tracking-tighter text-slate-800 hover:text-[#FF5C00] transition-colors cursor-default mr-20">
                      {p}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* --- Welcome & Corporate Mandate Section --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-[#00A7FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Welcome & Technocrat Profile (span 5) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
                  Welcome to Laxmi Balaji
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight tracking-tight leading-tight">
                  Sterling Quality in Stamping & Assembly
                </h2>
                <div className="w-20 h-[3px] bg-[#FF5C00] mt-4"></div>
              </div>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                Founded and managed by technocrats with over two decades of experience in the automotive industry across Development, Quality, and SCM, we supply pressed components, fabricated parts, and modular assemblies matching global quality benchmarks.
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4">
                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Leadership & Experience</h4>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#00A7FF]/5 border border-[#00A7FF]/10 rounded-lg flex items-center justify-center text-[#00A7FF] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Managed by Technocrats</h5>
                    <p className="text-sm text-slate-500 font-sans mt-0.5 leading-relaxed">
                      Leveraging 20+ years of technical capability to exceed performance and reliability parameters.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Mission, Vision, and Values Cards (span 7) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {/* Mission Card */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A7FF] to-[#1B3F8F] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl z-20"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#00A7FF]/5 rounded-full blur-3xl group-hover:bg-[#00A7FF]/10 transition-all duration-500 pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1B3F8F] mb-6 group-hover:scale-110 group-hover:bg-[#1B3F8F] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3 relative z-10">Our Mission</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium relative z-10">
                  To engineer dependable automotive solutions through world-class processes, advanced technology, skilled teams, and a culture of continuous improvement. Delivering global-standard value to customers and communities.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,92,0,0.15)] transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C00] to-[#E05000] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl z-20"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#FF5C00]/5 rounded-full blur-3xl group-hover:bg-[#FF5C00]/10 transition-all duration-500 pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#FF5C00] mb-6 group-hover:scale-110 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3 relative z-10">Our Vision</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium relative z-10">
                  To transform an automotive manufacturing company into a globally respected organization built on standards, systems, and people. By creating products and opportunities that leave a lasting impact.
                </p>
              </motion.div>

              {/* Values Card */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="sm:col-span-2 bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative group overflow-hidden transition-all duration-500"
              >
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 select-none pointer-events-none text-slate-300">
                  <Settings className="w-40 h-40 animate-spin" style={{ animationDuration: '25s' }} />
                </div>
                <h3 className="text-xs font-bold text-[#00A7FF] uppercase tracking-widest mb-6">Core Corporate Values</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
                  {[
                    { val: "Personal Integrity", desc: "Honesty & Ethic" },
                    { val: "Social Responsibility", desc: "Green Stamping" },
                    { val: "Trust & Accountability", desc: "OEM Assurance" },
                    { val: "Team Work", desc: "Robotic Sync" },
                    { val: "Knowledge Enhancement", desc: "R&D Focus" }
                  ].map((v, idx) => (
                    <div key={idx} className="border-l-2 border-slate-100 pl-3 group-hover:border-[#00A7FF]/30 transition-colors duration-500">
                      <span className="text-[11px] font-bold uppercase tracking-wider block text-slate-800">{v.val}</span>
                      <span className="text-[10px] font-mono text-slate-500 mt-1 block">{v.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. Core Capabilities --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>
        <motion.div 
          animate={pulseAnimation}
          className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[#00A7FF]/5 rounded-full blur-[120px] pointer-events-none z-0"
        ></motion.div>
        
        <div className="container-custom relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full lg:w-1/3"
            >
              <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
                OUR SERVICES
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Precision at Scale.<br/>Rigor at Volume.
              </h2>
              <div className="w-20 h-1 bg-[#FF5C00] mt-6"></div>
              <p className="text-slate-600 text-base mt-6 font-medium font-sans leading-relaxed">
                Our automated fabrication and mechanical press technologies deliver tight tolerancing on complex designs.
              </p>

              {/* Slider Controls - desktop only (shown in left panel) */}
              <div className="hidden lg:flex items-center gap-4 mt-10">
                <button 
                  onClick={() => setActiveService(prev => prev === 0 ? 2 : prev - 1)}
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#1B3F8F] hover:border-[#1B3F8F] hover:bg-blue-50 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,167,255,0.15)]"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setActiveService(prev => prev === 2 ? 0 : prev + 1)}
                  className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#1B3F8F] hover:border-[#1B3F8F] hover:bg-blue-50 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,167,255,0.15)]"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Slider Indicators - desktop only */}
              <div className="hidden lg:flex items-center gap-2 mt-8">
                {[0, 1, 2].map((idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveService(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeService === idx ? 'w-8 bg-[#FF5C00]' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
                  ></button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-2/3 relative"
            >
              <div className="overflow-hidden p-4 -m-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={springTransitionFast}
                  >
                    {[
                      { 
                        icon: Cpu, 
                        title: "Sheet Metal Fabrication", 
                        desc: "High-speed CNC punching and automated folding structures handle complex sheet layouts with sub-millimeter offsets.",
                        stats: [
                          { label: "CAPACITY", val: "100,000 UNITS" },
                          { label: "MATERIAL", val: "ALL GRADES CRCA" }
                        ]
                      },
                      { 
                        icon: Settings, 
                        title: "Heavy Fabrication", 
                        desc: "Specialized robotic welding cells for chassis structures, heavy engine mounts, and structural reinforcement systems.",
                        stats: [
                          { label: "AUTOMATION", val: "100% ROBOTIC" },
                          { label: "COMPLIANCE", val: "ISO 9001:2015" }
                        ]
                      },
                      { 
                        icon: Box, 
                        title: "Pressed Components", 
                        desc: "High-volume stamping loops using advanced progressive dies and multi-station calibrators.",
                        stats: [
                          { label: "PRODUCTION", val: "40,000 UNITS/DAY" },
                          { label: "MAX TONNAGE", val: "1000T MECHANICAL" }
                        ]
                      }
                    ].filter((_, i) => i === activeService).map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-10 sm:p-16 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] rounded-[2rem] transition-all duration-500 flex flex-col group relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5C00] to-[#E05000] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem] z-20"></div>
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00A7FF]/5 rounded-full blur-3xl group-hover:bg-[#FF5C00]/5 transition-colors duration-500"></div>
                        
                        <div className="relative z-10 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
                          <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-[#1B3F8F] group-hover:bg-[#FF5C00] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <item.icon className="w-10 h-10" />
                          </div>
                          
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10 font-medium font-sans">{item.desc}</p>
                            
                            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-12">
                              {item.stats.map((s, i) => (
                                <div key={i}>
                                  <p className="text-xs font-bold text-[#00A7FF] tracking-widest mb-2 uppercase group-hover:text-[#FF5C00] transition-colors">{s.label}</p>
                                  <p className="text-xl font-black text-slate-700 tracking-tight">{s.val}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Controls - mobile only (shown below the card) */}
              <div className="flex lg:hidden items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveService(prev => prev === 0 ? 2 : prev - 1)}
                    className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#1B3F8F] hover:border-[#1B3F8F] hover:bg-blue-50 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setActiveService(prev => prev === 2 ? 0 : prev + 1)}
                    className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#1B3F8F] hover:border-[#1B3F8F] hover:bg-blue-50 transition-all group shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveService(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeService === idx ? 'w-8 bg-[#FF5C00]' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
                    ></button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- New Section: Strategic Value Pillars --- */}
      <section className="py-20 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <motion.div 
          animate={pulseAnimation}
          className="absolute right-0 top-0 w-80 h-80 bg-[#00A7FF]/5 rounded-full blur-[80px] pointer-events-none"
        ></motion.div>
        <div className="container-custom relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
              PARTNER ADVANTAGE
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight tracking-tight">
              Strategic Value Pillars
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
            <p className="text-slate-500 text-sm sm:text-base mt-4 font-medium font-sans leading-relaxed max-w-xl">
              We leverage clean production grids, complete component tracking, and co-design engineering to optimize performance bounds.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Workflow,
                title: "Engineering Co-Design",
                desc: "We collaborate directly with client design centers during early layout stages, utilizing progressive stress simulations to enhance yield.",
                tag: "[ SIMULATION_QA ]"
              },
              {
                icon: ShieldCheck,
                title: "Zero-Defect Stamping",
                desc: "Equipped with coordinate measuring cleanrooms (CMM), we perform sub-micron thickness audit loops on all finished structural components.",
                tag: "[ VERIFIED_METROLOGY ]"
              },
              {
                icon: TrendingUp,
                title: "JIT Logistics Lineside",
                desc: "By coordinating supply docks directly with client schedules, we guarantee lineside delivery windows within 12-hour intervals.",
                tag: "[ SCM_OPTIMIZED ]"
              },
              {
                icon: Sparkles,
                title: "Net-Zero Generation",
                desc: "Our primary mechanical stamping press runs are powered with 3.5MW rooftop solar energy array offsets and circular water loops.",
                tag: "[ CLEAN_ENERGY ]"
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between h-[320px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,167,255,0.15)] transition-all duration-500 group border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A7FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#FF5C00]/10 transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 flex items-center justify-center text-[#FF5C00] mb-6 group-hover:scale-110 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-500 shadow-sm">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 tracking-tight mb-3">{pillar.title}</h4>
                  <p className="text-slate-500 text-sm font-sans font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{pillar.desc}</p>
                </div>
                <span className="text-[11px] font-bold text-[#1B3F8F] uppercase tracking-widest block mt-4 relative z-10">{pillar.tag}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 4. Mass Production Section - Premium Solid White/Slate Layout --- */}
      <section className="py-24 bg-[#00A7FF]/5 text-slate-800 relative border-b border-slate-200/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,221,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springTransition}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
                  MANUFACTURING METALLURGY
                </span>
                <h2 className="text-3xl font-black text-[#1B3F8F] tracking-tight leading-tight">
                  Mass Production Without Compromise
                </h2>
                <div className="w-20 h-[3px] bg-[#FF5C00] mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#00A7FF]/5 border border-[#00A7FF]/10 rounded-lg flex items-center justify-center text-[#00A7FF] shrink-0 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">120,000 Sq. Ft. Operational Facility</h4>
                    <p className="text-slate-500 text-xs font-sans font-medium mt-1 leading-relaxed">
                      Our flagship stamping site operating in continuous shifts, housing synchronized high-tonnage mechanical presses and assembly rigs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#00A7FF]/5 border border-[#00A7FF]/10 rounded-lg flex items-center justify-center text-[#00A7FF] shrink-0 mt-1">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">MES Integration Logic</h4>
                    <p className="text-slate-500 text-xs font-sans font-medium mt-1 leading-relaxed">
                      Advanced Manufacturing Execution Systems track sheets from entry coils down to finished progressive stamping shipments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: floating photos offset */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-center relative">
              <motion.div 
                animate={pulseAnimation}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00A7FF]/10 rounded-full blur-[80px] pointer-events-none"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="bg-slate-50 border-2 border-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[3/4] relative group"
              >
                <div className="absolute inset-0 border-2 border-[#FF5C00]/20 rounded-2xl z-10 pointer-events-none group-hover:border-[#FF5C00]/50 transition-colors duration-500"></div>
                <img 
                  src="/bystronic_laser.png" 
                  alt="Laser Cutting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="bg-slate-50 border-2 border-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[3/4] mt-12 relative group"
              >
                <div className="absolute inset-0 border-2 border-[#00A7FF]/20 rounded-2xl z-10 pointer-events-none group-hover:border-[#00A7FF]/50 transition-colors duration-500"></div>
                <img 
                  src="/zeiss_cmm.png" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. Metrics Section --- */}
      <section className="bg-white py-24 border-b border-slate-200/60 relative overflow-hidden">
        {/* Very subtle glow effects for premium feel */}
        <motion.div 
          animate={pulseAnimation}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00A7FF]/5 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>

        <div className="container-custom relative z-10">
          
          <div className="mb-16">
            <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
              LIVE OPERATIONAL METRICS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Global Trust. Data-Driven Excellence.
            </h2>
            <div className="w-20 h-1 bg-[#00A7FF] mt-6"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { label: "ANNUAL UNITS PRODUCED", value: 4.2, suffix: "M" },
              { label: "PPM DEFECT RATE", value: 0.02, suffix: "%" },
              { label: "ON-TIME DELIVERY RATE", value: 100, suffix: "%" },
              { label: "COUNTRIES EXPORTED", value: 12, suffix: "+" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="border-l-2 border-slate-100 pl-8 space-y-2 relative group hover:border-slate-200 transition-colors duration-300">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00A7FF] to-[#1B3F8F] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500"></div>
                <h3 className="text-5xl font-black tracking-tighter bg-gradient-to-br from-[#1B3F8F] to-[#00A7FF] bg-clip-text text-transparent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 leading-tight group-hover:text-slate-600 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- New Section: Certified Quality Standards --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
        <motion.div 
          animate={pulseAnimation}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00A7FF]/5 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
        <div className="container-custom relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
              COMPLIANCE SYSTEMS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Certified Corporate Standards
            </h2>
            <div className="w-20 h-1 bg-[#FF5C00] mt-6 mx-auto"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-6 font-medium font-sans leading-relaxed">
              We operate under strict global standard guidelines ensuring occupational health, clean waste circularity, and product reliability.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                code: "IATF 16949:2016",
                title: "Automotive Quality Management",
                desc: "Mandatory qualification requirement governing defect prevention, reduction of SCM variations, and assembly quality gates."
              },
              {
                code: "ISO 9001:2015",
                title: "Quality Management System",
                desc: "Demonstrates consistent performance and material traceability from steel sheet coils to final structural chassis mounts."
              },
              {
                code: "ISO 14001:2015",
                title: "Environmental Management",
                desc: "Defines clean protocols for material recycling, chemical storage handling, rooftop solar offsets, and waste water return grids."
              },
              {
                code: "ISO 45001:2018",
                title: "Occupational Health & Safety",
                desc: "Addresses workspace security criteria, automated emergency stamping cut-offs, and robotic cell safety enclosures."
              }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-slate-100 rounded-2xl p-8 space-y-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A7FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5C00] to-[#E05000] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

                <div className="relative z-10">
                  <span className="text-sm font-mono font-black text-[#1B3F8F] tracking-wider block mb-3 group-hover:text-[#FF5C00] transition-colors">
                    {cert.code}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium mt-4 group-hover:text-slate-600 transition-colors">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 6. Machinery Specification --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          animate={pulseAnimation}
          className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-[#00A7FF]/5 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="container-custom relative z-10"
        >
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Categories */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/4 space-y-6">
              <div>
                <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-2 block">
                  TECHNICAL SEGMENTS
                </span>
                <h4 className="text-base font-bold text-slate-900 tracking-tight">Machineries Categories</h4>
              </div>

              <ul className="space-y-3">
                {[
                  { id: 'sheet', name: 'SHEET METAL' },
                  { id: 'fab', name: 'FABRICATION' },
                  { id: 'press', name: 'PRESS COMPONENTS' }
                ].map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id as any)}
                      className="w-full flex items-center gap-4 py-4 px-6 border border-slate-100 rounded-lg text-left relative transition-all z-10 shadow-sm"
                    >
                      <div className={`w-2 h-2 rounded-full transition-colors ${activeCategory === cat.id ? 'bg-white' : 'bg-slate-350'}`}></div>
                      <span className={`text-sm font-bold tracking-wider uppercase transition-colors ${activeCategory === cat.id ? 'text-white' : 'text-slate-500'}`}>
                        {cat.name}
                      </span>
                      {activeCategory === cat.id && (
                        <motion.div 
                          layoutId="activeHomeMachineryTab"
                          className="absolute inset-0 bg-[#1B3F8F] rounded-lg z-[-1] shadow"
                          transition={springTransitionFast}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Spec Table */}
            <motion.div variants={slideInRight} className="w-full lg:w-3/4 space-y-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                Machinery Specifications
              </h2>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={springTransitionFast}
                  className="overflow-hidden border border-slate-100 rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <table className="w-full text-left">
                    <thead className="bg-gradient-to-r from-[#1B3F8F] to-[#03072c] text-white border-b border-transparent">
                      <tr>
                        <th className="p-6 text-xs font-bold tracking-widest uppercase">EQUIPMENT</th>
                        <th className="p-6 text-xs font-bold tracking-widest uppercase">CAPACITY</th>
                        <th className="p-6 text-xs font-bold tracking-widest uppercase">PRECISION</th>
                        <th className="p-6 text-xs font-bold tracking-widest uppercase">ORIGIN</th>
                      </tr>
                    </thead>
                    <tbody>
                      {machineryData[activeCategory].map((row, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                          <td className="p-6 text-sm font-bold text-slate-800">{row.name}</td>
                          <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.cap}</td>
                          <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.prec}</td>
                          <td className="p-6 text-xs text-[#00A7FF] font-bold font-mono">{row.origin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* --- 8. Final CTA Section --- */}
      <section className="relative py-32 bg-slate-50 overflow-hidden border-t border-slate-200">
        <motion.div 
          animate={pulseAnimation}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A7FF]/5 rounded-full blur-[150px] pointer-events-none"
        ></motion.div>
        
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <span className="text-[#1B3F8F] text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse"></span>
              Ready to Scale Your Production?
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              Precision Engineering. <br/>
              <span className="text-[#1B3F8F]">Global Scale.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed font-sans">
              Connect with our engineering team to discuss your tier-1 automotive structural requirements, custom robotic weld assemblies, or progressive stamping needs.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF5C00] hover:bg-[#E05000] text-white px-10 py-5 rounded-xl font-bold tracking-widest uppercase text-sm transition-all shadow-[0_8px_20px_rgba(255,92,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,92,0,0.3)] flex items-center gap-3 w-full sm:w-auto justify-center group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-10 py-5 rounded-xl font-bold tracking-widest uppercase text-sm transition-all shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] w-full sm:w-auto justify-center"
              >
                View Facilities
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
