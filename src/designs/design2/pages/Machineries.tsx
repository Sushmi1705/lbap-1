import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ArrowRight, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Layers,
  Sparkles,
  FileDown
} from 'lucide-react';

const Machineries = () => {
  const [activeZone, setActiveZone] = useState<'zoneA' | 'zoneB' | 'zoneC' | 'zoneD' | null>(null);

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

  const zoneDetails = {
    zoneA: {
      title: "Stamping Hub",
      machines: "High-tonnage progressive presses & Seyi feed lines",
      specs: "Press Forces: 150T — 1000T | Automatic Coil Feeders | Custom progressive die setup",
      nominal: "96.4%"
    },
    zoneB: {
      title: "Robotic Welding Cluster",
      machines: "Coordinated 6-axis spot & arc welding cells",
      specs: "Integrated Fanuc weld arms | Coordinated positioner tables | In-line ultrasound inspection",
      nominal: "95.2%"
    },
    zoneC: {
      title: "Metrology & QC Lab",
      machines: "Zeiss Coordinate Measuring Machines (CMM) & calibration cells",
      specs: "Zeiss Prismo Scanning | Calibration tolerances: ±0.1 µm | Material hardness testers",
      nominal: "99.8%"
    },
    zoneD: {
      title: "Final Assembly",
      machines: "Multi-point manual assembly & packing lines",
      specs: "Barcode integration SCM | Final visual audit checkpoints | Automatic shipping elevators",
      nominal: "98.1%"
    }
  };

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned Machineries Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Precision Stamping Factory Floor */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/machineries_hero_bg.png" 
            alt="Mechanical gears and factory engineering layout" 
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
                <span>Advanced Production</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Infrastructure
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                A showcase of our clinical-grade manufacturing environment, featuring high-precision robotics, high-tonnage mechanical press lines, and synchronized assembly workflows.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>1000-Ton High-Tonnage Presses</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Automatic Progressive Feeders</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>6-Axis Robotic Weld Clusters</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>SCADA Integrated Control Systems</span>
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
                  href="#blueprint" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Interactive Map <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#reliability"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" /> View reliability stats
                </motion.a>
              </motion.div>

            </div>

            {/* Floating SCADA Status Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransition}
                className="p-8 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-md max-w-xs space-y-4 animate-border-shimmer"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-[#00A7FF] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SCADA SYSTEM
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">NOMINAL</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">OEE Rating</span>
                    <span className="text-[#00A7FF] font-bold">94.8%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">MTBF Level</span>
                    <span className="text-slate-800">8,420 Hrs</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">Live Load Factor</span>
                    <span className="text-slate-800">88.5%</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>PLANT_NODE_03</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-emerald-600 font-bold">ONLINE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Interactive CAD Factory Map Section --- */}
      <section id="blueprint" className="py-24 bg-white border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <div className="mb-12">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              CAD SCHEMATICS
            </span>
            <h3 className="text-2xl font-black text-slate-905 uppercase tracking-tight">
              Interactive Factory Blueprint
            </h3>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Blueprint Container */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[21/9] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm animate-border-shimmer">
                {/* CAD Grid pattern */}
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #00A7FF 0, #00A7FF 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}></div>
                
                {/* Zone A: Stamping Hub */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneA')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneA' ? null : 'zoneA')}
                  className={`absolute top-[10%] left-[5%] w-[28%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneA' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-md shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneA' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone A</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Stamping Hub</h4>
                </button>

                {/* Zone B: Robotic Welding */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneB')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneB' ? null : 'zoneB')}
                  className={`absolute top-[10%] left-[36%] w-[58%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneB' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-md shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneB' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone B</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase">Robotic Welding Cluster</h4>
                    <span className="text-[8px] text-slate-400 mt-1 block font-mono">HOVER TO INSPECT ACTIVE PRESS CELLS</span>
                  </div>
                </button>

                {/* Zone C: Metrology Lab */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneC')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneC' ? null : 'zoneC')}
                  className={`absolute bottom-[10%] left-[5%] w-[38%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneC' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-md shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneC' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone C</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Metrology & QC Lab</h4>
                </button>

                {/* Zone D: Final Assembly */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneD')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneD' ? null : 'zoneD')}
                  className={`absolute bottom-[10%] left-[46%] w-[48%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneD' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-md shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneD' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone D</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Final Assembly</h4>
                </button>

                {/* Midways Center Logistics */}
                <div className="absolute top-[48%] left-[44%] w-[2%] h-[4%] flex items-center justify-center opacity-30">
                  <span className="text-[8px] font-mono text-slate-300 uppercase tracking-widest italic font-bold">LOGISTICS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 h-full">
              <div className="bg-[#070B19] border border-white/10 p-8 rounded-xl h-full shadow-2xl relative min-h-[220px] flex flex-col justify-between text-white">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF]"></div>
                
                <AnimatePresence mode="wait">
                  {activeZone ? (
                    <motion.div
                      key={activeZone}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={springTransitionFast}
                      className="space-y-4"
                    >
                      <div>
                        <span className="text-[#00A7FF] text-[9px] font-mono font-bold uppercase tracking-[0.25em] mb-1 block">ZONE DETAILS</span>
                        <h4 className="text-base font-bold text-white uppercase tracking-tight">{zoneDetails[activeZone].title}</h4>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Operational Units</p>
                          <p className="text-xs text-slate-100 font-bold">{zoneDetails[activeZone].machines}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Specifications Matrix</p>
                          <p className="text-xs text-slate-300 font-medium font-sans leading-relaxed">{zoneDetails[activeZone].specs}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[9px] font-mono">
                        <span className="text-slate-400">OEE Rating Target</span>
                        <span className="text-[#00A7FF] font-bold">{zoneDetails[activeZone].nominal}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center text-center space-y-3 py-6 h-full"
                    >
                      <Layers className="w-8 h-8 text-slate-500 stroke-[1.5]" />
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select a Zone</h4>
                      <p className="text-[11px] text-slate-500 font-sans max-w-[200px] leading-relaxed">
                        Hover or click any segment of the factory floor to inspect active machinery specs.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- 3. SCADA Equipment Reliability Stats Section --- */}
      <section id="reliability" className="py-24 bg-[#FAFAFA] border-b border-slate-200/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Reliability Ratings */}
            <div className="lg:col-span-2 bg-white border border-slate-200/60 p-10 rounded-xl flex flex-col justify-between shadow-sm animate-border-shimmer">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="text-[#00A7FF] w-5 h-5" />
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Equipment Reliability Ratings</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[9px] font-bold text-slate-455 uppercase tracking-widest mb-3">Mean Time Between Failure (MTBF)</p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">8,420</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hours</span>
                    </div>
                    {/* Solid Sky Blue progress bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00A7FF] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[9px] font-bold text-slate-455 uppercase tracking-widest mb-3">Overall Equipment Effectiveness (OEE)</p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-black text-slate-900 tracking-tight">94.8</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">%</span>
                    </div>
                    {/* Solid Orange progress bar */}
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF5C00] rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono">
                <span className="text-slate-400 font-bold uppercase">Real-time data synced from SCADA Control Deck</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[#00A7FF] font-bold uppercase tracking-widest">Systems Nominal</span>
                </div>
              </div>
            </div>

            {/* Capacity Download Deck - Clean Solid Royal Blue Layout */}
            <div className="bg-[#000EDD] p-10 text-white rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              <div>
                <span className="text-[#00A7FF] text-[9px] font-bold uppercase tracking-widest mb-4 block">TECHNICAL RESOURCE</span>
                <h3 className="text-2xl font-black mb-4 leading-tight tracking-tight uppercase">Full Capacity Deck</h3>
                <p className="text-xs text-white/80 leading-relaxed font-sans font-medium">
                  Download detailed specifications, tonnage charts, and layout matrices of our 150+ operational press and welding lines.
                </p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-white/10">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <button className="w-full bg-white text-[#000EDD] hover:bg-[#00A7FF] hover:text-white py-3.5 text-[11px] font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2 shadow-sm border border-transparent hover:border-[#FF5C00]">
                  Download capacity PDF <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. Machinery Asset List Grid --- */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              ASSET INVENTORY
            </span>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Machinery Asset Catalog
            </h3>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { 
                name: "Schuler Servo 2000", 
                type: "Press Line", 
                desc: "High-speed servo-driven stamping press with digital progressive die configurations.",
                spec: "2,000 KN Cap",
                origin: "GERMANY",
                img: "/schuler_servo.png"
              },
              { 
                name: "Matsuura H.Plus", 
                type: "Machining Center", 
                desc: "Multi-pallet horizontal machining center for 24/7 continuous shift work.",
                spec: "12,000 RPM Max",
                origin: "JAPAN",
                img: "/matsuura_milling.png"
              },
              { 
                name: "Bystronic ByStar 10", 
                type: "Fabrication Cell", 
                desc: "Fiber laser cutting system with ultra-high-speed processing of gauge steel sheets.",
                spec: "10 KW Output",
                origin: "SWITZERLAND",
                img: "/bystronic_laser.png"
              },
              { 
                name: "Zeiss Prismo VAST", 
                type: "Quality Control CMM", 
                desc: "Global standard for high-speed scanning and sub-micron dimensional verification loops.",
                spec: "0.1 µm Resolution",
                origin: "GERMANY",
                img: "/zeiss_cmm.png"
              },
              { 
                name: "Seyi Progressive 800", 
                type: "Stamping Press", 
                desc: "Heavy-duty Seyi mechanical press cell equipped with automated coil feeders and conveyors.",
                spec: "800 Ton Force",
                origin: "TAIWAN",
                img: "/seyi_press.png"
              },
              { 
                name: "Fanuc ArcMate Cell", 
                type: "Robotic Welding", 
                desc: "Coordinated multi-axis welding cell featuring fanuc robotic weld arms and rotating fixtures.",
                spec: "6-Axis Sync",
                origin: "JAPAN",
                img: "/fanuc_robot.png"
              },
              { 
                name: "Komatsu Mechanical 630", 
                type: "Press Line", 
                desc: "Rigid frame stamping press configured for structural brackets and chassis components.",
                spec: "630 Ton Force",
                origin: "JAPAN",
                img: "/komatsu_press.png"
              },
              { 
                name: "AIDA H-Type 400", 
                type: "Press Line", 
                desc: "High-speed automated progressive press configured for deep-draw shell frames.",
                spec: "400 Ton Force",
                origin: "JAPAN",
                img: "/aida_press.png"
              }
            ].map((machine, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransitionFast}
                className="bg-white border border-slate-200/60 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-md hover:border-[#00A7FF]/20 transition-all duration-300 animate-border-shimmer group relative"
              >
                {/* Top color accent divider - Solid brand Sky Blue */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>

                <div className="aspect-[4/3] overflow-hidden">
                  <img src={machine.img} alt={machine.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                  <div>
                    <span className="text-[9px] font-bold text-[#00A7FF] uppercase tracking-widest mb-1.5 block">{machine.type}</span>
                    <h4 className="text-base font-bold text-slate-800 uppercase tracking-tight leading-tight">{machine.name}</h4>
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed font-sans font-medium">{machine.desc}</p>
                  </div>
                  <div className="flex justify-between items-center pt-5 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 font-sans">{machine.spec}</span>
                    <span className="text-[9px] font-mono font-bold text-slate-350 uppercase tracking-wider">{machine.origin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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

export default Machineries;
