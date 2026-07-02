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

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<'sheet' | 'fab' | 'press'>('sheet');

  const springTransition = { type: "spring", stiffness: 70, damping: 18 };
  const springTransitionFast = { type: "spring", stiffness: 200, damping: 22 };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Cinematic Light Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Automated Robotic Assembly Line (Natural colors with logo color overlays) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000" 
            alt="Robotic Assembly Line Stamping Press" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00084d]/80 via-[#00084d]/55 to-[#00084d]/25"></div>
          {/* Bottom-to-top blend mask */}
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
                  <span className="text-[10px] text-slate-400 font-mono block">ESTABLISHED</span>
                  <span className="text-base font-bold text-white">1994</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">GLOBAL SITES</span>
                  <span className="text-base font-bold text-white">12 Plants</span>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">CERTIFICATIONS</span>
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
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="/machineries" 
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Technical Data
                </motion.a>
              </motion.div>
            </div>

            {/* Floating Live Feed */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransition}
                className="p-8 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-md max-w-xs space-y-4 animate-border-shimmer"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-[#00A7FF] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-ping"></span>
                    Live Production Feed
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">PLANT_01</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  Batch L97 #6254 progressive stamping run is currently in final verification. Quality pass: 100%.
                </p>
                <div className="pt-2 flex justify-between items-center text-[8px] font-mono text-slate-400">
                  <span>RATE: 85 STROKES/MIN</span>
                  <span>TEMP: 22.4 °C</span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- 2. Partners Strip --- */}
      <section className="bg-white border-b border-slate-100 py-10">
        <div className="container-custom">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6">
            Partners in Precision Engineering
          </p>
          <div className="flex flex-wrap justify-between items-center gap-8 grayscale opacity-50">
            {['VOLT-AUTO', 'NEXUS-MOTORS', 'APEX-PARTS', 'TITAN-ENGINEERING', 'FLUX-DYNAMICS', 'CORE-TECH'].map((p) => (
              <span key={p} className="text-xs font-mono font-black tracking-widest text-slate-800">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Core Capabilities --- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 max-w-2xl"
          >
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Precision at Scale. Rigor at Volume.
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Our automated fabrication and mechanical press technologies deliver tight tolerancing on complex designs.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={springTransitionFast}
                className="p-10 bg-white border border-slate-100 rounded-xl flex flex-col justify-between group hover:border-[#00A7FF]/20 hover:shadow-lg transition-all duration-300 shadow-sm animate-border-shimmer relative"
              >
                {/* Visual top accent using Brand Orange color */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl z-20"></div>
                
                <div>
                  <div className="w-10 h-10 bg-[#00A7FF]/5 rounded-lg border border-[#00A7FF]/10 flex items-center justify-center text-[#00A7FF] mb-8 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-medium font-sans">{item.desc}</p>
                </div>
                
                <div className="pt-6 border-t border-slate-150 flex justify-between gap-4">
                  {item.stats.map((s, i) => (
                    <div key={i}>
                      <p className="text-[9px] font-bold text-slate-400 tracking-wider mb-1 uppercase">{s.label}</p>
                      <p className="text-xs font-bold text-slate-700">{s.val}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- New Section: Strategic Value Pillars --- */}
      <section className="py-24 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-slate-50 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              PARTNER ADVANTAGE
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Strategic Value Pillars
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
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
                whileHover={{ y: -5 }}
                transition={springTransitionFast}
                className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-6 relative overflow-hidden flex flex-col justify-between h-[280px] shadow-sm hover:shadow-md hover:border-[#00A7FF]/20 transition-all duration-300 animate-border-shimmer"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#00A7FF] mb-5">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-2.5">{pillar.title}</h4>
                  <p className="text-slate-500 text-[11px] font-sans font-medium leading-relaxed">{pillar.desc}</p>
                </div>
                <span className="text-[8px] font-mono text-slate-400 block mt-4">{pillar.tag}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 4. Mass Production Section - Premium Solid White/Slate Layout --- */}
      <section className="py-24 bg-white text-slate-800 relative border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        
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
                <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                  MANUFACTURING METALLURGY
                </span>
                <h2 className="text-3xl font-black text-[#000EDD] uppercase tracking-tight leading-tight">
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
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="bg-slate-50 border border-slate-200/60 rounded-xl overflow-hidden shadow-sm aspect-[3/4] animate-border-shimmer"
              >
                <img 
                  src="/bystronic_laser.png" 
                  alt="Laser Cutting" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="bg-slate-50 border border-slate-200/60 rounded-xl overflow-hidden shadow-sm aspect-[3/4] mt-12 animate-border-shimmer"
              >
                <img 
                  src="/zeiss_cmm.png" 
                  alt="Quality Control" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 5. Metrics Section --- */}
      <section className="bg-white py-24 border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="mb-16">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              LIVE OPERATIONAL METRICS
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Global Trust. Data-Driven Excellence.
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
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
              <motion.div key={i} variants={fadeInUp} className="border-l-2 border-slate-200 pl-8 space-y-2">
                <h3 className="text-4xl font-black tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- New Section: Certified Quality Standards --- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              COMPLIANCE SYSTEMS
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Certified Corporate Standards
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
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
                whileHover={{ y: -4 }}
                transition={springTransitionFast}
                className="bg-white border border-slate-200/60 rounded-xl p-6 space-y-4 shadow-sm hover:border-[#00A7FF]/20 transition-colors animate-border-shimmer relative group"
              >
                {/* Orange top marker */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl z-20"></div>

                <span className="text-xs font-mono font-black text-[#00A7FF] tracking-wider block">
                  {cert.code}
                </span>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider leading-snug">
                  {cert.title}
                </h4>
                <p className="text-slate-505 text-[11px] leading-relaxed font-sans font-medium">
                  {cert.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 6. Machinery Specification --- */}
      <section className="py-24 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="container-custom"
        >
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Categories */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/4 space-y-6">
              <div>
                <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 block">
                  TECHNICAL SEGMENTS
                </span>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight">Machineries Categories</h4>
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
                      <span className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${activeCategory === cat.id ? 'text-white' : 'text-slate-500'}`}>
                        {cat.name}
                      </span>
                      {activeCategory === cat.id && (
                        <motion.div 
                          layoutId="activeHomeMachineryTab"
                          className="absolute inset-0 bg-[#000EDD] rounded-lg z-[-1] shadow"
                          transition={springTransitionFast}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Spec Table */}
            <motion.div variants={fadeInUp} className="w-full lg:w-3/4 space-y-6">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-none">
                Machinery Specifications
              </h2>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={springTransitionFast}
                  className="overflow-hidden border border-slate-200/80 rounded-xl bg-white shadow-sm animate-border-shimmer"
                >
                  <table className="w-full text-left">
                    <thead className="bg-[#000EDD] text-white border-b border-[#000EDD]/10">
                      <tr>
                        <th className="p-6 text-[10px] font-bold tracking-widest uppercase">EQUIPMENT</th>
                        <th className="p-6 text-[10px] font-bold tracking-widest uppercase">CAPACITY</th>
                        <th className="p-6 text-[10px] font-bold tracking-widest uppercase">PRECISION</th>
                        <th className="p-6 text-[10px] font-bold tracking-widest uppercase">ORIGIN</th>
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

    </div>
  );
};

export default Home;
