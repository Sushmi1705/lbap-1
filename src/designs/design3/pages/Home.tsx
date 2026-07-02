import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Settings, 
  Award, 
  Zap, 
  Factory, 
  CheckCircle2, 
  Layers,
  Terminal,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Home = () => {
  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Sticky Navigation Bar */}
      <Navbar activePage="home" />

      {/* --- Premium Cinematic Hero Section --- */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#07090C] border-b border-white/5">
         {/* CAD Blueprint grid background */}
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac12_1px,transparent_1px)] [background-size:24px_24px]"></div>
         {/* Glowing ambient blobs */}
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0b96ac]/5 rounded-full filter blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
         
         <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Advanced Robotic Assembly" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.2] contrast-[1.1] scale-105"
         />
         
         {/* Absolute Coordinates & Lines */}
         <div className="absolute top-12 left-12 hidden xl:block w-32 h-32 border-l border-t border-white/10 pointer-events-none">
           <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#0B96AC]"></div>
         </div>
         <div className="absolute bottom-12 right-12 hidden xl:block w-32 h-32 border-r border-b border-white/10 pointer-events-none">
           <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#0B96AC]"></div>
         </div>
         
         {/* Live Telemetry Panel */}
         <div className="absolute left-8 bottom-8 hidden xl:flex flex-col gap-2 font-mono text-[9px] text-slate-400 bg-slate-950/80 border border-white/5 p-4 rounded backdrop-blur-md">
           <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1 text-white">
             <Terminal className="w-3 h-3 text-[#0B96AC]" />
             <span>CORE_GATEWAY: ACTIVE</span>
           </div>
           <div>SYS_LOAD: 74.2%</div>
           <div>PRESS_CALIBRATION: [OK]</div>
           <div>COORD: 12.9716° N, 77.5946° E</div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#0B96AC] animate-pulse"></span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#0B96AC]">TIER-1 AUTOMOTIVE MANUFACTURER</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95] uppercase"
            >
               THE BENCHMARK OF <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">STAMPING PRECISION</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            >
               Laxmi Balaji Automotive Products (LBAP) delivers tier-1 precision metal stampings, heavy-duty assemblies, and engineering-grade fabricated systems. We empower global automotive leaders with zero-defect components designed for the next generation of mobility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 25 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
            >
               <a href="/product" className="group bg-[#0B96AC] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-[#0B96AC]/20 hover:bg-[#097b8d] transition-all flex items-center justify-center gap-2">
                 Explore Products 
                 <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
               </a>
               <a href="/about" className="bg-slate-900 hover:bg-slate-800 border border-white/10 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2">
                 Corporate Profile
               </a>
            </motion.div>
         </div>
      </section>

      {/* --- Manufacturing Pulse (Bento Grid Dashboard) --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
         
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                   <Activity className="w-4 h-4 text-[#0B96AC] animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B96AC]">Real-Time Diagnostics</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Manufacturing Pulse
                </h2>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed font-medium">
                Our active operations are monitored in real time, upholding clinical engineering standards across high-volume production lines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { 
                   label: "Quality Yield (Stamping)", 
                   val: "99.98%", 
                   change: "Targeting Zero-Defect", 
                   sub: "Clinical tolerance limits", 
                   icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
                   graph: <svg className="w-full h-8 mt-4 text-emerald-500/20" viewBox="0 0 100 20"><path d="M0 15 Q20 5, 40 12 T80 4 T100 10" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                 },
                 { 
                   label: "Renewable Power Matrix", 
                   val: "3.5 MW", 
                   change: "Solar Grid Offset", 
                   sub: "Carbon reduction targets", 
                   icon: <Zap className="w-5 h-5 text-amber-400" />,
                   graph: <svg className="w-full h-8 mt-4 text-amber-500/20" viewBox="0 0 100 20"><path d="M0 18 L15 12 L30 15 L50 8 L70 12 L100 3" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                 },
                 { 
                   label: "Monthly Component Flow", 
                   val: "3.5 Million+", 
                   change: "High-Volume Delivery", 
                   sub: "Synchronized output log", 
                   icon: <Layers className="w-5 h-5 text-sky-400" />,
                   graph: <svg className="w-full h-8 mt-4 text-sky-400/20" viewBox="0 0 100 20"><path d="M0 10 Q25 15, 50 10 T100 8" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                 },
                 { 
                   label: "Annual Metal Processing", 
                   val: "42K Tons", 
                   change: "High-Tensile Raw Stock", 
                   sub: "Certified alloy processing", 
                   icon: <Cpu className="w-5 h-5 text-teal-400" />,
                   graph: <svg className="w-full h-8 mt-4 text-teal-400/20" viewBox="0 0 100 20"><path d="M0 15 L20 15 L40 10 L60 8 L80 3 L100 3" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                 }
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   variants={fadeInUp}
                   initial="initial"
                   whileInView="whileInView"
                   className="bg-[#0F1319] border border-white/5 p-6 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#0B96AC]/5"
                 >
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                        <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center border border-white/5">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                         <span className="text-3xl font-black text-white tracking-tighter">{item.val}</span>
                      </div>
                    </div>
                    {item.graph}
                    <div className="pt-4 border-t border-white/5 mt-4">
                      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wide">{item.change}</p>
                      <p className="text-[9px] text-[#0B96AC] font-semibold mt-0.5">{item.sub}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Core Matrix Section (The Architecture of Precision) --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5 overflow-hidden">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Operational Quality Framework</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight uppercase">
                     The Architecture <br />of Precision
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10">
                     Leveraging state-of-the-art robotic stamping presses, advanced visual inspection algorithms, and clinical quality gates. We forge high-durability chassis, suspension, and EV structural elements engineered to withstand extreme stress environments.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded bg-[#0F1319] flex items-center justify-center shrink-0 border border-white/5">
                        <Award className="w-5 h-5 text-[#0B96AC]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">IATF 16949 Certified</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">Conforming to elite global automotive system and process guidelines.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded bg-[#0F1319] flex items-center justify-center shrink-0 border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-[#0B96AC]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Zero-Defect Culture</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">End-to-end trace logs and robotic validation loops for every single batch.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/5 group">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                        alt="High Tech Factory Machine" 
                        className="w-full h-full object-cover brightness-[0.7] transition-all duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#0B96AC]/20 backdrop-blur-md rounded border border-[#0B96AC]/30 flex items-center justify-center">
                           <Cpu className="w-4 h-4 text-[#0B96AC]" />
                        </div>
                        <span className="text-[9px] font-mono tracking-widest text-white uppercase">SYS_MONITOR: ALIGNMENT_OK</span>
                     </div>
                  </div>
               </div>

               {/* Right Side Telemetry Readout */}
               <div className="lg:col-span-5 h-full flex flex-col justify-center">
                  <div className="bg-[#0F1319] text-slate-100 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-white/5">
                     <div className="absolute -top-24 -right-24 w-64 h-64 border-4 border-[#0B96AC]/5 rounded-full pointer-events-none"></div>
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0B96AC]">Telemetry Analytics</span>
                          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">REALTIME</span>
                        </div>
                        
                        <div className="space-y-6 mb-8">
                          <div>
                            <div className="flex justify-between items-baseline mb-2">
                               <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Reject Threshold Limit</span>
                               <span className="text-[11px] font-mono text-emerald-400">&lt; 0.02%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-900 rounded overflow-hidden">
                               <div className="h-full w-[95%] bg-[#0B96AC] rounded-full"></div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-950 p-4 rounded border border-white/5">
                               <span className="text-3xl font-black text-white">0.02%</span>
                               <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">REJECT LOG</p>
                            </div>
                            <div className="bg-slate-950 p-4 rounded border border-white/5">
                               <span className="text-3xl font-black text-[#0B96AC]">24/7</span>
                               <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">ROBOTIC CHECK</p>
                            </div>
                          </div>
                          
                          <div className="bg-slate-950 p-4 rounded border border-white/5 flex justify-between items-center">
                            <div>
                               <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wider">Calibration Stability</span>
                               <span className="text-xs font-mono text-emerald-400 mt-1 block">STABLE [±0.002mm]</span>
                            </div>
                            <TrendingUp className="w-5 h-5 text-emerald-400" />
                          </div>
                        </div>
                     </div>
                     
                     <div className="relative z-10 pt-4 border-t border-white/5">
                       <a href="/machineries" className="group bg-slate-900 hover:bg-[#0B96AC] hover:text-white text-white px-6 py-3.5 text-[9px] font-bold uppercase tracking-widest rounded border border-white/5 hover:border-[#0B96AC] transition-all flex items-center justify-center gap-2">
                          View Infrastructure Specs
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                       </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Digitized Production Flow & Services Preview --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">End-to-End Operational Pipeline</span>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter uppercase">Clinical Production Flow</h2>
               <p className="text-slate-400 text-sm mt-3 leading-relaxed font-medium">
                  We deploy automated cyber-physical infrastructure to synchronize raw sheet steel processing with high-speed component delivery systems.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Production Flow Card */}
               <div className="bg-[#0F1319] rounded-xl border border-white/5 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#0B96AC]/50">
                  <div className="p-8 md:p-10">
                    <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center mb-8 border border-white/5 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                       <Settings className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight uppercase">Digitized Shop Floor Logistics</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       By integrating cyber-physical systems and real-time ERP monitoring, our production lines operate with optimal throughput, preventing bottlenecks and guaranteeing just-in-time delivery.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {["Automated Material Feeding", "Computer Vision Inspection Gates", "IoT Temperature and Pressure Monitoring"].map((li, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#0B96AC]" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-slate-900/50 border-t border-white/5 flex justify-between items-center">
                    <a href="/machineries" className="text-[9px] font-bold uppercase tracking-widest text-[#0B96AC] flex items-center gap-2 group/btn">
                       Read Process Paper 
                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                    </a>
                    <span className="text-[9px] font-mono text-slate-500">SYS_V2.4</span>
                  </div>
               </div>

               {/* Supply Chain Card */}
               <div className="relative rounded-xl overflow-hidden bg-[#0F1319] border border-white/5 flex flex-col justify-end min-h-[400px] group transition-all duration-300 hover:border-[#0B96AC]/50">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop" 
                    alt="Industrial Warehouse Logistics" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 group-hover:scale-105 group-hover:opacity-20 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                  
                  <div className="relative z-10 p-8 md:p-10 text-white">
                     <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center mb-8 border border-white/5 text-[#0B96AC]">
                        <Globe className="w-5 h-5" />
                     </div>
                     <h3 className="text-xl font-extrabold mb-4 tracking-tight uppercase">Synchronized Global Distribution</h3>
                     <p className="text-slate-400 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed font-medium">
                        Our dedicated logistics division coordinates cross-border freight pipelines, ensuring uninterrupted material supply to automotive assembly lines worldwide.
                     </p>
                     
                     <div className="flex flex-wrap gap-2.5 mb-8">
                       {["Zero Downtime", "Cross-Dock Operations", "Direct-to-Line JIT"].map((tag, i) => (
                         <span key={i} className="text-[8px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded">
                           {tag}
                         </span>
                       ))}
                     </div>

                     <a href="/contact" className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white group/btn">
                        Track Delivery Logistics 
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Partners Bar (Elite Industrial Trust) --- */}
      <section className="py-16 bg-[#090B0E] border-b border-white/5">
         <div className="container-custom">
            <h4 className="text-[9px] font-bold text-center text-slate-500 uppercase tracking-[0.3em] mb-10">Supporting Global Automotive Platforms</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-30">
               {[
                 { name: 'AUTO-CORE', desc: 'Chassis Platform' },
                 { name: 'GEAR-PRO', desc: 'Power Transmission' },
                 { name: 'EV-TECH', desc: 'Battery Enclosures' },
                 { name: 'METAL-FORGE', desc: 'Substructure' },
                 { name: 'NEXUS-DRIVE', desc: 'Engine Brackets' }
               ].map((partner, i) => (
                 <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-slate-700 rounded-sm bg-slate-900 group-hover:bg-[#0B96AC] group-hover:border-[#0B96AC] transition-colors"></div>
                      <span className="text-xs font-black tracking-widest text-slate-300">{partner.name}</span>
                    </div>
                    <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-wider">{partner.desc}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Technical Telemetry Specifications Section --- */}
      <section className="bg-slate-950 text-white py-24 overflow-hidden relative border-b border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Precision Analytics Readout</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase mb-8">System Specifications</h2>
                  
                  <div className="space-y-6 mb-10">
                     {[
                        { label: "Automatic Micro-Feedback Loop", val: "ANALYTICS ONLINE" },
                        { label: "Absolute Precision Reliability", val: "99.98%" },
                        { label: "Mean Machine Cycle Time", val: "1.4 SECONDS" },
                        { label: "High-Grade Structural Alloy Integrity", val: "CERTIFIED HIGH" },
                        { label: "Stamping Operations Status", val: "NOMINAL / ACTIVE" }
                     ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{spec.label}</span>
                           <span className="text-xs font-bold text-white tracking-wide">{spec.val}</span>
                        </div>
                     ))}
                  </div>
                  
                  <button className="px-8 py-4 bg-[#0B96AC] hover:bg-[#097b8d] text-white text-[9px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/15 transition-all">
                     Download Engineering Data Matrix
                  </button>
               </div>
               
               <div className="lg:col-span-6 relative">
                  <div className="bg-[#0F1319] p-3 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
                     <div className="flex justify-between items-center px-4 py-2 border-b border-white/5 bg-slate-900/50 mb-3 rounded text-[10px] font-mono text-slate-400">
                       <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> THERMOGRAPHIC MONITOR</span>
                       <span>CAM_FEED: 01</span>
                     </div>
                     
                     <div className="relative aspect-video overflow-hidden rounded bg-slate-950">
                        <img 
                           src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=1200&auto=format&fit=crop" 
                           alt="Telemetry Quality Analysis" 
                           className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                        
                        <div className="absolute inset-0 flex flex-col justify-between p-4">
                           <div className="flex justify-between text-[9px] font-mono text-cyan-400">
                             <div>[RANGE: NOMINAL]</div>
                             <div>CAL_LOCK: OK</div>
                           </div>
                           
                           <div className="text-center">
                              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform">
                                 <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300 block">Watch Stamping Production</span>
                           </div>
                           
                           <div className="flex justify-between text-[8px] font-mono text-slate-500">
                             <div>FPS: 60.00</div>
                             <div>LATENCY: 4.2ms</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-white/5 rounded-full pointer-events-none"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Client Testimonials Section --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Client Testimonials</span>
               <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter uppercase">Industry Endorsements</h2>
               <p className="text-slate-400 text-sm mt-3 leading-relaxed font-medium">
                  Hear from tier-1 automotive manufacturing partners who rely on Laxmi Balaji's zero-defect components daily.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {[
                 {
                   quote: "LBAP has consistently met our strict IATF requirements. Their delivery logs are flawless, and their stamping precision is second to none.",
                   author: "Nils Vandeveld",
                   title: "Director of Sourcing, EV-TECH Systems",
                   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                 },
                 {
                   quote: "The structural stampings and bracket assemblies we receive from Laxmi Balaji are clean and precisely calibrated. A valued strategic partner for 10+ years.",
                   author: "Shyam Sundar",
                   title: "General Manager Quality Operations, Auto-Core Platforms",
                   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
                 }
               ].map((item, i) => (
                 <div key={i} className="bg-[#0F1319] p-8 md:p-10 rounded-xl border border-white/5 flex flex-col justify-between relative group hover:border-[#0B96AC]/30 transition-all duration-300">
                    <span className="absolute top-6 right-8 text-6xl text-[#0B96AC]/10 font-serif leading-none pointer-events-none">“</span>
                    <p className="text-slate-300 text-[14px] italic leading-relaxed mb-8 relative z-10">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                       <img src={item.avatar} alt={item.author} className="w-11 h-11 rounded-full object-cover border border-white/10 shadow" />
                       <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wide">{item.author}</h4>
                          <p className="text-[10px] text-slate-400 font-semibold">{item.title}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Home;
