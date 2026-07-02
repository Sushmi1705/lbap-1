import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Zap, 
  Award, 
  Target, 
  Clock, 
  Eye, 
  Cpu, 
  Layers, 
  Users, 
  CheckCircle2, 
  Compass, 
  Sparkles,
  ChevronRight,
  Bookmark
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// A helper component to render animated number counters natively using IntersectionObserver
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
      { threshold: 0.3 }
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

      const duration = 2; // duration in seconds
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={elementRef} className="font-mono font-black text-white tracking-tighter">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Navigation */}
      <Navbar activePage="about" />

      {/* --- About Hero Section --- */}
      <section className="relative pt-24 pb-20 bg-slate-950 border-b border-white/5 overflow-hidden">
         {/* Grid lines decoration */}
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    ABOUT_LBAP // CORPORATE_PROFILE_V3
                  </div>
                  <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
                     THE ARCHITECTURE <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">OF INDUSTRIAL VALUE</span>
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                     Laxmi Balaji Automotive Products Pvt. Ltd. (LBAP) represents three decades of zero-defect metal stamping, clinical tool design, and robotic component sub-assemblies. We are a trusted tier-1 strategic partner to global automotive platforms.
                  </p>
               </div>
               
               <div className="lg:col-span-4 border-l border-white/10 pl-8 pb-4 relative">
                  <div className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none block font-mono">
                    <AnimatedCounter value={30} suffix="+" />
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B96AC] mt-3">YEARS OF SECTOR REPUTATION</p>
               </div>
            </div>
         </div>
      </section>

      {/* --- Company Story --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">LBAP HERITAGE</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Company Story</h2>
                  <div className="space-y-6 text-slate-400 text-sm leading-relaxed font-medium font-sans">
                     <p>
                        Established in 1994 as a boutique fabrication and precision tooling shop in Hosur, Laxmi Balaji was born out of a commitment to resolve the critical engineering constraints faced by Indian commercial vehicle manufacturers. Through strict process validation and raw material integrity, we earned key contracts with prominent commercial automotive brands.
                     </p>
                     <p>
                        By 2005, as global passenger vehicle makers established Indian footprints, LBAP expanded into robotic welding networks and high-tonnage mechanical stamping cells. We invested heavily in computerised quality gates, establishing our first certified clean inspection cleanroom.
                     </p>
                     <p>
                        Today, operating from our state-of-the-art facilities in the SIPCOT Industrial Complex, LBAP produces millions of high-tensile components monthly. Our structural stampings, engine brackets, and EV battery enclosures support clean mobility initiatives globally, proving that clinical precision and local manufacturing autonomy can empower international markets.
                     </p>
                  </div>
               </div>
               
               <div className="lg:col-span-6 relative">
                  {/* Image Grid */}
                  <div className="grid grid-cols-12 gap-4">
                     <div className="col-span-7 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group">
                        <img 
                          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" 
                          alt="Heavy stamping press machinery" 
                          className="w-full h-[320px] object-cover grayscale opacity-40 group-hover:opacity-85 transition-all duration-750"
                        />
                     </div>
                     <div className="col-span-5 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group self-end">
                        <img 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" 
                          alt="Stamping lines inspection" 
                          className="w-full h-[220px] object-cover grayscale opacity-30 group-hover:opacity-80 transition-all duration-750"
                        />
                     </div>
                     <div className="col-span-12 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group">
                        <img 
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" 
                          alt="Automated logistics warehouse dispatch" 
                          className="w-full h-[180px] object-cover grayscale opacity-25 group-hover:opacity-75 transition-all duration-750"
                        />
                     </div>
                  </div>
                  {/* Floating Coordinates overlay */}
                  <div className="absolute -bottom-6 -left-6 bg-slate-950/90 border border-white/5 rounded px-4 py-2 font-mono text-[8px] text-[#0B96AC] backdrop-blur-sm">
                    LATENCY_REF: HOSUR_PLANT_01 // SECURE
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Vision & Mission --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Vision Panel */}
               <motion.div 
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-10 rounded-2xl relative overflow-hidden group hover:border-[#0B96AC]/50 transition-all duration-300"
               >
                  <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center mb-8 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                     <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Corporate Vision</h3>
                  <p className="text-slate-450 text-sm sm:text-base leading-relaxed font-medium font-sans">
                     To lead the global automotive transition to sustainable, zero-defect chassis platforms by continuously digitising metallurgical processes, reducing environmental overheads, and establishing local technology hubs.
                  </p>
                  <div className="absolute bottom-4 right-6 font-mono text-[9px] text-[#0B96AC]/20 select-none uppercase tracking-widest font-black">
                     VISION_2030
                  </div>
               </motion.div>

               {/* Mission Panel */}
               <motion.div 
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-10 rounded-2xl relative overflow-hidden group hover:border-[#0B96AC]/50 transition-all duration-300"
               >
                  <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center mb-8 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                     <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Corporate Mission</h3>
                  <p className="text-slate-450 text-sm sm:text-base leading-relaxed font-medium font-sans">
                     To engineer chassis and structural component stability with clinical precision, guaranteeing OEM supply line efficiency, upholding the highest safety margins, and delivering direct value to local communities.
                  </p>
                  <div className="absolute bottom-4 right-6 font-mono text-[9px] text-[#0B96AC]/20 select-none uppercase tracking-widest font-black">
                     MISSION_EXEC
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- Core Values --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">LBAP FOUNDATIONAL PRINCIPLES</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Core Values</h2>
               <p className="text-slate-450 text-xs sm:text-sm leading-relaxed mt-2 font-medium font-sans">
                  These operational values form the baseline code for every design matrix, welding cell, and logistics dispatch we execute.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: "Precision First", desc: "No tolerances are compromised. We operate down to the micron, enforcing total metallurgical stability.", icon: ShieldCheck },
                 { title: "Clinical Compliance", desc: "We adhere strictly to IATF 16949 system standards, leaving clear data footprints for every batch.", icon: Award },
                 { title: "Eco-Efficiency", desc: "Our 3.5MW solar matrix and water circular towers offset the environmental footprint of our shop floors.", icon: Zap },
                 { title: "Client Synergy", desc: "We co-engineer structural node designs directly with OEM teams, ensuring rapid prototyping and deployment.", icon: Users }
               ].map((item, idx) => (
                 <div key={idx} className="bg-[#0F1319] border border-white/5 p-6 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/40 transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-colors">
                         <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="text-slate-450 text-[11px] sm:text-xs leading-relaxed font-medium font-sans">
                         {item.desc}
                      </p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Expandable / Interactive Timeline --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">30 YEAR TRAJECTORY LOG</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Timeline & Milestones</h2>
               <p className="text-slate-450 text-xs sm:text-sm mt-2 font-medium font-sans">
                  A legacy of process validation and capacity growth.
               </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
               {/* Vertical central bar */}
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

               <div className="space-y-12">
                  {[
                    { year: "1994", title: "Corporate Inception", desc: "LBAP begins manufacturing in Hosur in a 3,000 sq.ft. workshop, specializing in precision sheet metal fabrication and custom tooling assemblies.", side: "left" },
                    { year: "2002", title: "Heavy Press Expansion", desc: "Acquisition of our first 800-ton hydraulic stamping press, launching the high-volume chassis reinforcements line.", side: "right" },
                    { year: "2010", title: "IATF 16949 Compliance", desc: "First in the region to achieve compliance with global automotive system regulations, securing major export contracts.", side: "left" },
                    { year: "2018", title: "EV Component Matrix", desc: "Inauguration of the dedicated EV Structural Components cluster, co-engineering lightweight battery framing cells.", side: "right" },
                    { year: "2026", title: "Net-Zero Solar Integration", desc: "Commissioning of the 3.5MW rooftop photovoltaic matrix, achieving 100% operational energy autonomy on the main pressing clusters.", side: "left" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="whileInView"
                      className={`relative flex items-center ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                    >
                       <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-[#0F1319] p-6 rounded-lg border border-white/5 shadow-xl hover:border-[#0B96AC]/40 transition-colors duration-300">
                          <span className="text-[#0B96AC] text-[10px] font-mono tracking-widest block mb-2">{item.year} // SYSTEM_MARK</span>
                          <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">{item.title}</h3>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">{item.desc}</p>
                       </div>
                       <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-[#0B96AC] rounded-full hidden md:block z-10"></div>
                       <div className="md:w-1/2"></div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- Executive Board & Philosophy Section --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">EXECUTIVE DIRECTIVE</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight">Corporate Leadership</h2>
                  
                  <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed font-medium mb-8 font-sans">
                     <p>
                        "LBAP is built on structural compliance. We treat every sheet metal stamping not as a standalone component, but as a load-bearing security factor. Our leadership team consists of materials scientists, robotics leads, and system logicians, ensuring our corporate structure mirrors our technical precision."
                     </p>
                     <p className="text-xs text-slate-500 font-sans">
                        Under Dr. Vance's guidance, LBAP has recorded a 30-year consecutive profit margin loop, reinvesting 15% of annual revenues directly back into in-house tool design laboratories and automated stamping array upgrades.
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8 mb-8">
                     <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">FOUNDER & GENERAL DIRECTOR</span>
                        <span className="text-lg font-bold text-white uppercase">Dr. Marcus Vance</span>
                     </div>
                     <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">CHIEF METALLURGICAL OFFICER</span>
                        <span className="text-lg font-bold text-white uppercase">Prof. Sandeep Murthy</span>
                     </div>
                  </div>

                  <button className="flex items-center gap-4 group">
                     <div className="w-12 h-12 bg-[#0B96AC] text-white flex items-center justify-center rounded shadow-lg hover:scale-105 transition-transform">
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                     </div>
                     <span className="text-[9px] font-bold uppercase tracking-widest text-white group-hover:text-[#0B96AC] transition-colors">WATCH SYSTEM OUTLINE PRESENTATION</span>
                  </button>
               </div>
               
               <div className="lg:col-span-5 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Marcus Vance, Founder of Laxmi Balaji" 
                    className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Company Strengths (Bento Grid Dashboard) --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">OPERATIONAL SUPERIORITY LOG</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Company Strengths</h2>
               <p className="text-slate-450 text-xs sm:text-sm mt-2 font-medium font-sans">
                  Four structural pillars that solidify LBAP's status as a top-tier automotive partner.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
               {/* Strength 1: In-House CAD Design */}
               <div className="md:col-span-7 bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/40 transition-all duration-300">
                  <div>
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-mono text-[#0B96AC] tracking-widest">PILLAR_01 // CAD_INTEGRITY</span>
                        <div className="w-8 h-8 bg-slate-900 border border-white/5 rounded flex items-center justify-center text-[#0B96AC]">
                           <Cpu className="w-4 h-4" />
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">In-House CAD Synthesis & Tooling</h3>
                     <p className="text-slate-405 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                        We don't rely on third-party design vendors. Our dedicated tool room engineers custom stamping dies using progressive CAD stress-simulations, cutting tooling lead times by 35% and guaranteeing structural node integrity down to 0.002mm limits.
                     </p>
                  </div>
                  
                  {/* Embedded Custom SVG Blueprint Drawing */}
                  <div className="mt-8 border border-white/5 rounded-lg bg-slate-950 p-4 relative overflow-hidden h-32 flex items-center justify-center font-mono text-[8px] text-teal-400/40">
                     <svg className="absolute inset-0 w-full h-full text-teal-500/10 pointer-events-none" viewBox="0 0 100 30">
                       <line x1="0" y1="15" x2="100" y2="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                       <line x1="50" y1="0" x2="50" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                       <circle cx="50" cy="15" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                       <rect x="42" y="7" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1" />
                     </svg>
                     <span>STAMPING_DIE_PROT_V1.03 // AXIS: [X=50, Y=15, Z=0.002]</span>
                  </div>
               </div>

               {/* Strength 2: Monospace Stats Counters */}
               <div className="md:col-span-5 bg-slate-950 border border-white/5 p-8 rounded-xl flex flex-col justify-between">
                  <div>
                     <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-8">PILLAR_02 // SYSTEM_LOGS</span>
                     
                     <div className="space-y-6">
                        <div className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Manufacturing Plants</span>
                           <span className="text-2xl font-black text-white font-mono"><AnimatedCounter value={12} /></span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Strategic OEM Nodes</span>
                           <span className="text-2xl font-black text-white font-mono"><AnimatedCounter value={28} /></span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Active Design Patents</span>
                           <span className="text-2xl font-black text-[#0B96AC] font-mono"><AnimatedCounter value={24} /></span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                     <span className="text-[9px] font-bold uppercase text-slate-400">MONITOR_STATUS: CALIBRATED</span>
                  </div>
               </div>

               {/* Strength 3: Photovoltaic Net-Zero Solar Matrix */}
               <div className="md:col-span-6 bg-slate-950 border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/40 transition-all duration-300">
                  <div>
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-mono text-[#0B96AC] tracking-widest">PILLAR_03 // POWER_AUTONOMY</span>
                        <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                     </div>
                     <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">3.5MW Rooftop Solar Matrix</h3>
                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                        Our primary pressing and fabrication facilities are powered by an on-site 3.5 Megawatt photovoltaic array. By operating with renewable energy self-sufficiency, we isolate our manufacturing line from local grid fluctuations and guarantee carbon-neutral processing offsets.
                     </p>
                  </div>
               </div>

               {/* Strength 4: Just-In-Time Supply Logistics */}
               <div className="md:col-span-6 bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/40 transition-all duration-300">
                  <div>
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-mono text-[#0B96AC] tracking-widest">PILLAR_04 // FREIGHT_SYNC</span>
                        <Layers className="w-5 h-5 text-sky-400 shrink-0" />
                     </div>
                     <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">Direct-To-Line JIT Logistics</h3>
                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                        Using proprietary ERP integration linked directly to our global OEM partners' assembly line requirements, we coordinate cross-dock dispatch logs that ensure components are delivered exactly when required, minimizing warehousing overheads.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default About;
