import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  Compass
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
    <span ref={elementRef} className="font-mono font-black text-[#1E3A8A]">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const About = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [activeRegion, setActiveRegion] = useState<'apac' | 'emea' | 'americas'>('apac');

  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const statsTiltX = useTransform(scrollY, [0, 500], [0, 15]);
  const statsTiltY = useTransform(scrollY, [0, 500], [0, -15]);

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

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
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
    <div className="bg-zinc-50 text-zinc-800 font-sans selection:bg-[#2563EB]/20 selection:text-[#2563EB] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned About Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-20 lg:py-0 bg-[#0F172A] border-b border-white/10 overflow-hidden">
        {/* Background - Industrial stamping plant with scroll-linked parallax */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y: heroBgY, scale: 1.15 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none origin-top"
        >
          <img 
            src="/about_hero_bg.png" 
            alt="Robotic manufacturing line telemetry dashboard" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 via-[#0F172A]/55 to-[#0F172A]/25"></div>
          {/* Bottom blend block */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FAFAFA] to-transparent"></div>
        </motion.div>

        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-1"></div>
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none z-1"></div>

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
                <span className="text-[#2563EB] drop-shadow-sm">
                  Industrial Precision
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-zinc-200 text-sm sm:text-base leading-relaxed max-w-2xl font-medium font-sans"
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
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#2563EB] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Explore Our Legacy <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#reach" 
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#1E3A8A] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  Global Operations
                </motion.a>
              </motion.div>
            </div>

            {/* Hero Interactive Stats Circle */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end" style={{ perspective: "1000px" }}>
              <motion.div 
                variants={fadeInUp}
                style={{ rotateX: statsTiltX, rotateY: statsTiltY }}
                whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0 }}
                transition={springTransitionFast}
                className="relative w-64 h-64 rounded-full border border-zinc-200/80 flex flex-col items-center justify-center p-8 bg-white backdrop-blur-md shadow-2xl hover:shadow-[0_20px_50px_rgba(0,167,255,0.25)] hover:border-[#2563EB]/50 transition-all duration-500 animate-border-shimmer group z-20"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-[#2563EB]/30 animate-[spin_40s_linear_infinite] group-hover:border-[#FF5C00]/50 transition-colors duration-500"></div>
                <div className="absolute inset-2 rounded-full border border-dashed border-[#1E3A8A]/10 animate-[spin_60s_linear_infinite_reverse]"></div>
                
                <span className="text-6xl font-black tracking-tighter leading-none">
                  <AnimatedCounter value={30} suffix="+" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] mt-4 text-center leading-normal">
                  Years of Sector Reputation
                </span>
                
                <div className="absolute -bottom-3.5 bg-zinc-50 px-3 py-1 border border-zinc-200/60 rounded text-sm font-sans font-bold text-zinc-500 shadow-sm">
                  Hosur Plant
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
      {/* --- Purpose, Vision, Mission Section --- */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-200/60 relative overflow-hidden">
        {/* Decorative Grid Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>
        <motion.div 
          animate={pulseAnimation}
          className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[120px] pointer-events-none z-0"
        ></motion.div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 block">
              OUR DRIVING FORCE
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Purpose. Vision. Mission.
            </h2>
            <div className="w-20 h-1 bg-[#FF5C00] mt-6 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Purpose Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-zinc-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] transition-all duration-500 relative group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem] z-20"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl group-hover:bg-[#2563EB]/10 transition-all duration-500 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:scale-110 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-sm">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-4 relative z-10">Our Purpose</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-sans font-medium relative z-10">
                Engineering Quality Automotive Excellence, Empowering Lives.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-zinc-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,92,0,0.15)] transition-all duration-500 relative group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF5C00] to-[#E05000] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem] z-20"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#FF5C00]/5 rounded-full blur-3xl group-hover:bg-[#FF5C00]/10 transition-all duration-500 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#FF5C00] mb-8 group-hover:scale-110 group-hover:bg-[#FF5C00] group-hover:text-white transition-all duration-500 shadow-sm">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-4 relative z-10">Our Vision</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-sans font-medium relative z-10">
                To transform an automotive manufacturing company into a globally respected organization built on standards, systems, and people. By creating products and opportunities that leave a lasting impact.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-zinc-100 p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] transition-all duration-500 relative group overflow-hidden flex flex-col items-center text-center"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem] z-20"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#2563EB]/5 rounded-full blur-3xl group-hover:bg-[#2563EB]/10 transition-all duration-500 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#1E3A8A] mb-8 group-hover:scale-110 group-hover:bg-[#1E3A8A] group-hover:text-white transition-all duration-500 shadow-sm">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight mb-4 relative z-10">Our Mission</h3>
              <p className="text-zinc-500 text-base leading-relaxed font-sans font-medium relative z-10">
                To engineer dependable automotive solutions through world-class processes, advanced technology, skilled teams, and a culture of continuous improvement. Delivering global-standard value to customers and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- Global Infrastructure (Bento Grid) --- */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200/60 relative">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 max-w-2xl"
          >
            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 block">
              OPERATIONAL HORIZONS
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight tracking-tight">
              Global Scale, Clinical Systems
            </h2>
            <div className="w-20 h-[3px] bg-[#2563EB] mt-4"></div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
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
              className="md:col-span-8 bg-white border border-zinc-200/60 p-8 lg:p-12 rounded-xl flex flex-col justify-between group hover:border-[#2563EB]/20 hover:shadow-lg transition-all duration-300 shadow-sm animate-border-shimmer"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm font-sans font-bold text-zinc-400 tracking-widest uppercase">
                    Primary Infrastructure Metrics
                  </span>
                  <div className="w-8 h-8 rounded bg-zinc-50 border border-zinc-100 flex items-center justify-center text-[#2563EB]">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="text-zinc-600 text-xs font-bold uppercase tracking-widest mb-2">TOTAL MANUFACTURING FLOOR</h4>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-6xl lg:text-7xl font-black tracking-tighter">
                    <AnimatedCounter value={2.4} suffix="" />
                  </span>
                  <span className="text-xl font-bold text-[#1E3A8A] font-mono">M SQ. FT.</span>
                </div>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
                  Encompassing climate-controlled testing areas, automated robotic welding modules, and massive structural mechanical stamping arrays.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-zinc-100 pt-6 mt-8">
                <div>
                  <h5 className="text-xl font-bold font-mono">
                    <AnimatedCounter value={28} />
                  </h5>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider leading-tight">Primary Assembly</p>
                </div>
                <div className="border-x border-zinc-100 px-4">
                  <h5 className="text-xl font-bold font-mono">
                    0<AnimatedCounter value={4} />
                  </h5>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider leading-tight">Component Hubs</p>
                </div>
                <div>
                  <h5 className="text-xl font-bold font-mono">
                    0<AnimatedCounter value={5} />
                  </h5>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider leading-tight">R&D Laboratories</p>
                </div>
              </div>
            </motion.div>

            {/* Info Cards Column */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              {/* Bento Card 2: Active Locations */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={springTransitionFast}
                className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] transition-all duration-500 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl z-20"></div>
                <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.03] text-[#1E3A8A] group-hover:opacity-10 transition-opacity duration-500 select-none pointer-events-none">
                  <Globe className="w-36 h-36" />
                </div>
                <span className="text-sm font-mono text-zinc-400 tracking-widest block mb-4">OPERATIONAL NODES</span>
                <h3 className="text-5xl font-black font-mono tracking-tighter mb-2 text-zinc-900 group-hover:text-[#1E3A8A] transition-colors duration-300">
                  12
                </h3>
                <h4 className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 relative z-10">Active Worldwide Plants</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-sans font-medium relative z-10">
                  Strategically localized plants aligned with the requirements of major international OEMs.
                </p>
              </motion.div>

              {/* Bento Card 3: Workforce Scale */}
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.015 }}
                transition={springTransitionFast}
                className="bg-white/70 backdrop-blur-2xl border border-white/60 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,167,255,0.08)] transition-all duration-500 group hover:border-[#2563EB]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-sm animate-border-shimmer relative"
              >
                {/* Accent line on top of card using Orange */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#FF5C00] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl z-20"></div>

                <div>
                  <span className="text-sm font-mono text-zinc-400 tracking-widest block mb-4">HUMAN RESOURCES</span>
                  <h3 className="text-4xl font-black font-mono tracking-tighter mb-2">
                    <AnimatedCounter value={4500} suffix="+" />
                  </h3>
                  <h4 className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-1.5">Technical Specialists</h4>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed font-sans pt-4 border-t border-zinc-100 mt-2">
                  Consisting of materials engineering experts, SCM planners, and QA controllers.
                </p>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* --- Technical Blueprint Component --- */}
      <section className="py-20 bg-white relative border-b border-zinc-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={springTransition}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest block mb-3">
                  METALLURGICAL LOGIC
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
                  In-House CAD Synthesis <br/> & Tooling Room
                </h2>
                <div className="w-20 h-1 bg-[#FF5C00] mt-6"></div>
              </div>
              
              <p className="text-zinc-500 text-base leading-relaxed font-medium font-sans">
                By eliminating third-party design vendors, we manage tool fabrication from conceptual drawing down to final press calibrators. Our tool designers utilize advanced progressive stress-simulations to optimize material yield and structural stability.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-4 text-sm text-zinc-700 font-bold">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>Dimensional tolerance bounds matching 0.002mm limits</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-700 font-bold">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span>Integrated simulation cycles for progressive die structures</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-700 font-bold">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Zap className="w-4 h-4" />
                  </div>
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
                className="bg-white border border-zinc-200 rounded-[2rem] p-8 relative overflow-hidden aspect-[1.6/1] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.15)] hover:border-[#2563EB]/30 transition-all duration-500 animate-border-shimmer group"
              >
                {/* Tech blueprint grids */}
                <div className="absolute inset-0 bg-[radial-gradient(#00a7ff0a_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
                
                {/* Scanning sweep bar animation - Solid line with opacity */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#2563EB]/60 animate-scan-sweep pointer-events-none z-10"></div>

                {/* Dynamic Coordinate Tag */}
                <div className="absolute top-6 left-6 bg-white border border-zinc-200 rounded-lg px-4 py-2 font-sans text-xs text-[#2563EB] flex items-center gap-3 shadow-sm font-bold uppercase tracking-widest z-10">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse"></span>
                  CAD Axis Calibration
                </div>

                <div className="absolute top-4 right-4 text-sm font-sans text-zinc-400 font-bold">
                  System Version 4.01
                </div>

                {/* Detailed CAD drawing */}
                <svg className="w-full h-full text-zinc-500/40 pointer-events-none mt-6" viewBox="0 0 100 50">
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
                  <circle cx="50" cy="25" r="6.5" fill="none" stroke="#2563EB" strokeWidth="0.65" />
                  <circle cx="50" cy="25" r="3" fill="none" stroke="#2563EB" strokeWidth="0.3" />
                  <motion.circle 
                    cx="50" 
                    cy="25" 
                    r="9.5" 
                    fill="none" 
                    stroke="#2563EB" 
                    strokeWidth="0.25" 
                    strokeDasharray="2 2"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />
                  <line x1="39" y1="25" x2="61" y2="25" stroke="#2563EB" strokeWidth="0.2" />
                  <line x1="50" y1="14" x2="50" y2="36" stroke="#2563EB" strokeWidth="0.2" />

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
                <div className="absolute bottom-4 left-4 right-4 flex justify-between font-sans text-xs text-zinc-500 border-t border-zinc-200/60 pt-3">
                  <span>Staging: Pierce, Draw, Strip</span>
                  <span>Tolerance: +/-0.02mm</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Interactive Milestones Timeline --- */}
      <section id="timeline" className="py-20 bg-zinc-50 relative border-b border-zinc-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 block">
              CHRONOLOGY LOG
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight tracking-tight">
              Timeline & Historical Evolution
            </h2>
            <div className="w-20 h-[3px] bg-[#2563EB] mt-4 mx-auto"></div>
            <p className="text-zinc-600 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
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
            <div className="flex justify-between items-center relative pb-8 mb-16">
              {/* Thicker, darker background track line */}
              <div className="absolute bottom-[9px] left-0 right-0 h-[3px] bg-zinc-300 rounded-full"></div>
              
              {timelineData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className="flex flex-col items-center relative group z-10 w-24"
                >
                  <span className={`text-sm font-mono tracking-widest mb-4 transition-all duration-300 ${
                    selectedTimelineIndex === idx ? 'text-[#1E3A8A] font-black scale-110' : 'text-zinc-500 font-bold group-hover:text-zinc-800 group-hover:scale-105'
                  }`}>
                    {item.year}
                  </span>
                  
                  {/* Sliding underline active bar for labels */}
                  {selectedTimelineIndex === idx && (
                    <motion.div 
                      layoutId="activeYearUnderline"
                      className="absolute bottom-8 left-1/4 right-1/4 h-1 bg-[#1E3A8A] rounded-full"
                      transition={springTransitionFast}
                    />
                  )}

                  <div className={`w-[22px] h-[22px] rounded-full border-[4px] transition-all duration-300 flex items-center justify-center relative bg-zinc-50 z-20 ${
                    selectedTimelineIndex === idx ? 'border-[#1E3A8A] shadow-md scale-110' : 'border-zinc-300 group-hover:border-zinc-400'
                  }`}>
                    {/* Morphing active bullet circle using layoutId */}
                    {selectedTimelineIndex === idx ? (
                      <motion.div 
                        layoutId="activeBulletCircle"
                        className="w-2.5 h-2.5 bg-[#1E3A8A] rounded-full"
                        transition={springTransitionFast}
                      />
                    ) : (
                      <div className="w-2 h-2 bg-zinc-300 group-hover:bg-zinc-400 rounded-full transition-colors" />
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-zinc-100 p-10 lg:p-14 rounded-[2rem] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.12)] hover:border-[#2563EB]/20 transition-all duration-500 group"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

                {/* Decorative coordinate watermark */}
                <div className="absolute -right-10 -bottom-10 font-sans text-9xl text-zinc-50 select-none uppercase tracking-tighter font-black pointer-events-none z-0">
                  {timelineData[selectedTimelineIndex].year}
                </div>

                <div className="lg:col-span-8 flex flex-col justify-between space-y-8 relative z-10">
                  <div>
                    <span className="text-[#2563EB] text-xs font-bold tracking-widest block uppercase mb-3">
                      {timelineData[selectedTimelineIndex].badge}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-6 leading-tight">
                      {timelineData[selectedTimelineIndex].title}
                    </h3>
                    <p className="text-zinc-500 text-base leading-relaxed font-medium font-sans">
                      {timelineData[selectedTimelineIndex].desc}
                    </p>
                  </div>
                  
                  <div className="border-t border-zinc-100 pt-6 flex flex-wrap gap-6 items-center">
                    <div>
                      <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block mb-2">METALLURGICAL KEYNOTE</span>
                      <span className="text-sm font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                        {timelineData[selectedTimelineIndex].highlight}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-zinc-50 border border-zinc-100 p-8 rounded-2xl flex flex-col justify-center items-center text-center relative z-10 shadow-sm group-hover:border-[#2563EB]/20 transition-all duration-300">
                  <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-widest block mb-6">MILESTONE IMPACT</span>
                  <div className="text-[#FF5C00] mb-4 bg-white p-4 rounded-xl shadow-sm">
                    <Award className="w-8 h-8 mx-auto" />
                  </div>
                  <span className="text-base font-extrabold text-zinc-900 font-sans uppercase tracking-wider">
                    {timelineData[selectedTimelineIndex].stats}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* --- Strategic Reach (Interactive Map Layout) --- */}
      <section id="reach" className="py-20 bg-white relative border-b border-zinc-200/60">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Map Interaction Details */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 block">
                  GEOGRAPHIC LOGISTICS
                </span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
                  Localized Operations,<br/> Universal Standards
                </h2>
                <div className="w-20 h-1 bg-[#FF5C00] mt-6"></div>
                <p className="text-zinc-500 text-base mt-6 font-medium font-sans leading-relaxed">
                  We deploy localized manufacturing and distribution nodes across strategic continental points to cut logistics transit overheads for OEMs.
                </p>
              </div>

              {/* Geographic buttons switcher with layoutsId indicators */}
              <div className="flex gap-2 bg-zinc-50/50 border border-zinc-100 p-2 rounded-xl relative shadow-sm">
                {(['apac', 'emea', 'americas'] as const).map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className="flex-1 py-3 text-xs font-bold uppercase tracking-wider relative transition-all rounded-lg z-10"
                  >
                    <span className={activeRegion === region ? 'text-white transition-colors duration-250 font-black' : 'text-zinc-400 hover:text-zinc-800 font-bold'}>
                      {region}
                    </span>
                    {activeRegion === region && (
                      <motion.div 
                        layoutId="activeMapRegionTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-lg shadow-md z-[-1]"
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
                  className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.12)] hover:border-[#2563EB]/20 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl z-20"></div>
                  
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-5 mb-5">
                    <h4 className="text-sm font-bold uppercase text-zinc-900 tracking-wide">
                      {regionalData[activeRegion].title}
                    </h4>
                    <span className="text-sm font-mono text-white bg-[#1E3A8A] px-3 py-1 rounded-full font-bold shadow-sm">
                      {regionalData[activeRegion].stat}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-zinc-400 font-mono font-bold uppercase mb-1">Operational Density:</div>
                      <div className="text-sm text-zinc-800 font-bold">{regionalData[activeRegion].plants}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-mono font-bold uppercase mb-1">Technological Focus:</div>
                      <div className="text-sm text-zinc-600 font-medium leading-relaxed">{regionalData[activeRegion].focus}</div>
                    </div>
                    <div className="pt-4 border-t border-zinc-100 mt-4">
                      <p className="text-sm text-zinc-500 font-sans leading-relaxed">
                        {regionalData[activeRegion].details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Map Visualizer */}
            <div className="lg:col-span-7 relative">
              <div className="bg-white border border-zinc-100 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,167,255,0.12)] hover:border-[#2563EB]/20 transition-all duration-500 relative group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[2rem] z-20"></div>
                
                <svg className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10" viewBox="0 0 1000 480">
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
                        stroke="#2563EB" 
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
                        stroke="#2563EB" 
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
                <div className="absolute bottom-4 left-4 bg-white/95 border border-zinc-200 rounded px-3 py-1.5 font-sans text-xs text-zinc-500 shadow-sm">
                   Coordinates: Lat 12.74, Lng 77.82 | Active Region: <span className="text-[#2563EB] uppercase font-bold">{activeRegion}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Visionary Leadership (Premium Profiles) --- */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200/60">
        <div className="container-custom">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-3 block">
              EXECUTIVE BOARD
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight tracking-tight">
              Visionary Leadership
            </h2>
            <div className="w-20 h-[3px] bg-[#2563EB] mt-4 mx-auto"></div>
            <p className="text-zinc-500 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
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
                className="relative group h-[480px] overflow-hidden rounded-xl border border-zinc-200 bg-white flex flex-col justify-end shadow-sm animate-border-shimmer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/15 to-transparent"></div>
                </div>

                {/* Profile detail text */}
                <div className="relative z-10 p-6 bg-white border-t border-zinc-100 backdrop-blur-md space-y-3.5">
                  <span className="text-[#2563EB] font-bold text-sm tracking-[0.2em] uppercase">
                    {leader.role}
                  </span>
                  
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight uppercase leading-none">
                    {leader.name}
                  </h3>
                  
                  <p className="text-zinc-600 text-xs leading-relaxed italic border-l-2 border-[#2563EB] pl-3.5 pt-0.5 font-sans">
                    "{leader.quote}"
                  </p>

                  <div className="pt-2 border-t border-zinc-100 flex items-center gap-1.5 text-zinc-400 font-sans text-sm">
                    <Activity className="w-3 h-3 text-[#2563EB]" />
                    Active Member
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- Premium Light CTA Section --- */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00a7ff07_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="bg-[#F1F5F9]/50 border border-zinc-200/60 rounded-2xl p-10 lg:p-16 text-center space-y-8 shadow-sm animate-border-shimmer"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2563EB]/5 border border-[#2563EB]/15 rounded-md text-xs font-sans tracking-widest text-[#2563EB] uppercase font-bold">
              Scaling Logistics & Capacity
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-none">
              Ready to integrate with <br />
              <span className="text-[#1E3A8A]">
                Our Precision Ecosystem?
              </span>
            </h2>
            
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium font-sans">
              Connect directly with our sales engineers to request customized progressive stamping quotes, view manufacturing capacities, or schedule a facility audit.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransitionFast}
                className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-[#2563EB] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springTransitionFast}
                className="w-full sm:w-auto border border-zinc-250 bg-white text-zinc-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors hover:text-zinc-900 shadow-sm"
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
