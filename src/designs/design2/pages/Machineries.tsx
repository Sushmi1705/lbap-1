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
  FileDown,
  Search,
  SlidersHorizontal,
  X,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';

const machineryData = [
  { slNo: 1, description: "POWER PRESS", capacity: "200 Ton", make: "SHRI BALAJI", id: "LBAP/PP-1", year: "2008", category: "Press Shop", remarks: "Heavy stamping line" },
  { slNo: 2, description: "POWER PRESS", capacity: "160 Ton", make: "SHRI BALAJI", id: "LBAP/PP-2", year: "2012", category: "Press Shop", remarks: "" },
  { slNo: 3, description: "MECHANICAL PRESS", capacity: "120 Ton", make: "DMW", id: "LBAP/MP-01", year: "2007", category: "Press Shop", remarks: "" },
  { slNo: 4, description: "POWER PRESS", capacity: "80 Ton", make: "SHRI BALAJI", id: "LBAP/PP-3", year: "2012", category: "Press Shop", remarks: "" },
  { slNo: 5, description: "POWER PRESS", capacity: "63 Ton", make: "AMETEEP", id: "LBAP/PP-4", year: "2007", category: "Press Shop", remarks: "" },
  { slNo: 6, description: "MECHANICAL PRESS", capacity: "50 Ton", make: "DMW", id: "LBAP/MP-3", year: "2007", category: "Press Shop", remarks: "" },
  { slNo: 7, description: "POWER PRESS", capacity: "45 Ton", make: "SEW", id: "LBAP/PP-5", year: "2015", category: "Press Shop", remarks: "" },
  { slNo: 8, description: "POWER PRESS", capacity: "40 Ton", make: "SHRI BALAJI", id: "LBAP/PP-6", year: "2012", category: "Press Shop", remarks: "" },
  { slNo: 9, description: "POWER PRESS", capacity: "110 Ton", make: "SHRI BALAJI", id: "LBAP/PP-7", year: "2016", category: "Press Shop", remarks: "" },
  { slNo: 10, description: "POWER PRESS", capacity: "80 Ton", make: "SHRI BALAJI", id: "LBAP/PP-8", year: "2016", category: "Press Shop", remarks: "" },
  { slNo: 11, description: "POWER PRESS", capacity: "63 Ton", make: "SHRI BALAJI", id: "LBAP/PP-9", year: "2016", category: "Press Shop", remarks: "" },
  { slNo: 12, description: "MECHANICAL PRESS", capacity: "30 Ton", make: "SHRI BALAJI", id: "LBAP/MP-4", year: "2013", category: "Press Shop", remarks: "" },
  { slNo: 13, description: "MECHANICAL PRESS", capacity: "20 Ton", make: "SHRI BALAJI", id: "LBAP/MP-8", year: "2015", category: "Press Shop", remarks: "" },
  { slNo: 14, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-01", year: "2010", category: "Welding Shop", remarks: "Standard weld line" },
  { slNo: 15, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-02", year: "2010", category: "Welding Shop", remarks: "Standard weld line" },
  { slNo: 16, description: "RADIAL DRILL", capacity: "40 MM", make: "SMT", id: "LBAP/RD-01", year: "2005", category: "CNC & Fabrication", remarks: "" },
  { slNo: 17, description: "SMALL DRILL", capacity: "20MM", make: "R.R.PRODUCTS", id: "LBAP/SD-01", year: "2005", category: "CNC & Fabrication", remarks: "" },
  { slNo: 18, description: "SHEARING MACHINE", capacity: "6*2500 MM", make: "T.E.E", id: "LBAP/SM-02", year: "2005", category: "CNC & Fabrication", remarks: "" },
  { slNo: 19, description: "PRESS BRAKE", capacity: "100 Ton", make: "VIJAI", id: "LBAP/PB-01", year: "2007", category: "Press Shop", remarks: "" },
  { slNo: 20, description: "SURFACE GRINDING MACHINE", capacity: "300 X600", make: "GMT", id: "LBAP/SGM-01", year: "2009", category: "CNC & Fabrication", remarks: "" },
  { slNo: 21, description: "WEIGHING MACHINE", capacity: "150KG", make: "ORION", id: "LBAP/WM-01", year: "2015", category: "Material Handling", remarks: "" },
  { slNo: 22, description: "OVERHEAD CRANE", capacity: "3 TON", make: "ANKIT", id: "LBAP/OHC-01", year: "2015", category: "Material Handling", remarks: "Auxiliary hoist" },
  { slNo: 23, description: "SPOT WELDING MACHINE", capacity: "10 KVa", make: "ELECTROWELD", id: "LBAP/SW-01", year: "2015", category: "Welding Shop", remarks: "" },
  { slNo: 24, description: "MOTORISED GRINDER", capacity: "—", make: "AEC", id: "LBAP/MG-01", year: "2015", category: "Utilities & Auxiliary", remarks: "" },
  { slNo: 25, description: "STACKER", capacity: "1 TON", make: "DOLMAX", id: "LBAP/L-01", year: "2009", category: "Material Handling", remarks: "" },
  { slNo: 26, description: "STACKER", capacity: "1 TON", make: "DOLMAX", id: "LBAP/L-02", year: "2012", category: "Material Handling", remarks: "" },
  { slNo: 27, description: "HAND GRINDING MACHINE", capacity: "100mm", make: "BOSCH", id: "LBAP/HG-01", year: "2015", category: "Utilities & Auxiliary", remarks: "" },
  { slNo: 28, description: "GENERATOR", capacity: "90 HP", make: "MAHENDRA", id: "LBAP/GENSET-1", year: "2011", category: "Utilities & Auxiliary", remarks: "Backup power system" },
  { slNo: 29, description: "HYDRAULIC SHEARING MACHINE", capacity: "6X3200", make: "ACL", id: "LBAP/SM-3", year: "2006", category: "CNC & Fabrication", remarks: "" },
  { slNo: 30, description: "AIR COMPRESSOR", capacity: "225 ltr", make: "KARTHIKA", id: "LBAP/AC-02", year: "2015", category: "Utilities & Auxiliary", remarks: "Shop air supply" },
  { slNo: 31, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-03", year: "2018", category: "Welding Shop", remarks: "" },
  { slNo: 32, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-04", year: "2018", category: "Welding Shop", remarks: "" },
  { slNo: 33, description: "CNC PIPE BENDING MACHINE", capacity: "32 dia", make: "Eletro Pneumatic", id: "LBAP/CBM-01", year: "2023", category: "CNC & Fabrication", remarks: "" },
  { slNo: 34, description: "CNC PIPE BENDING MACHINE", capacity: "32 dia", make: "Eletro Pneumatic", id: "LBAP/CBM-01", year: "2024", category: "CNC & Fabrication", remarks: "" },
  { slNo: 35, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-03", year: "2020", category: "Welding Shop", remarks: "" },
  { slNo: 36, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-04", year: "2020", category: "Welding Shop", remarks: "" },
  { slNo: 37, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-05", year: "2020", category: "Welding Shop", remarks: "" },
  { slNo: 38, description: "MIG WELDING", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-06", year: "2020", category: "Welding Shop", remarks: "" },
  { slNo: 39, description: "MIG WELDING - SPM", capacity: "230 A", make: "PRO TECH", id: "LBAP/MIGW-07", year: "2023", category: "Welding Shop", remarks: "Special Purpose Welding" }
];

const getMachineImage = (slNo: number) => {
  switch (slNo) {
    case 1: return '/machinery/power_press_200.png';
    case 2: return '/machinery/power_press_160.png';
    case 3: return '/machinery/mechanical_press_120.png';
    case 4: return '/machinery/power_press_80.png';
    case 5: return '/machinery/power_press_63.png';
    case 6: return '/machinery/mechanical_press_50.png';
    case 7: return '/machinery/power_press_45.png';
    case 8: return '/machinery/power_press_40.png';
    case 9: return '/machinery/power_press_110.png';
    case 10: return '/machinery/power_press_80_2.png';
    case 11: return '/machinery/power_press_11.png';
    case 12: return '/machinery/mechanical_press_30.jpg';
    case 13: return '/machinery/mechanical_press_20.jpg';
    case 14: return '/machinery/mig_welding_14.png';
    case 15: return '/machinery/mig_welding_2010.jpg';
    case 16: return '/machinery/drilling.jpg';
    case 17: return '/matsuura_milling.png';
    case 18: return '/machinery/cutting_grinding.jpg';
    case 19: return '/machinery/press.jpg';
    case 20: return '/machinery/surface_grinding_20.png';
    case 21: return '/zeiss_cmm.png';
    case 22: return '/machinery/overhead_crane_22.png';
    case 23: return '/machinery/welding.jpg';
    case 24: return '/machinery/cutting_grinding.jpg';
    case 25: return '/machinery/material_handling.jpg';
    case 26: return '/machinery/stacker_26.png';
    case 27: return '/machinery/hand_grinder_27.png';
    case 28: return '/machinery/utilities.jpg';
    case 29: return '/bystronic_laser.png';
    case 30: return '/machinery/utilities.jpg';
    case 31: return '/machinery/mig_welding_2018.jpg';
    case 32: return '/machinery/mig_welding_32.png';
    case 33: return '/machinery/pipe_bending.jpg';
    case 34: return '/machinery/cnc_bending_34.png';
    case 35: return '/machinery/mig_welding_35.png';
    case 36: return '/machinery/mig_welding_36.png';
    case 37: return '/machinery/mig_welding_37.jpg';
    case 38: return '/machinery/mig_welding_38.jpg';
    case 39: return '/machinery/mig_welding_spm_39.jpg';
    default: return '/machinery/press.jpg';
  }
};

const getMachineDescription = (description: string) => {
  const desc = description.toUpperCase();
  if (desc.includes('POWER PRESS')) return 'High-stroke mechanical power press optimized for progressive die stamping and automotive body panel manufacturing.';
  if (desc.includes('MECHANICAL PRESS')) return 'Heavy-duty mechanical press line designed for high-tonnage sheet metal stamping and structural brackets.';
  if (desc.includes('MIG WELDING')) return 'Gas metal arc welding station configured for precision welding of chassis sub-assemblies and structural parts.';
  if (desc.includes('RADIAL DRILL')) return 'Radial arm drilling machine for heavy-duty drilling, reaming, and tapping on structural metal plates.';
  if (desc.includes('SMALL DRILL')) return 'High-speed compact drill press designed for precision hole creation in brackets and mounting assemblies.';
  if (desc.includes('SHEARING MACHINE')) return 'Heavy-duty mechanical plate shearing machine designed for rapid and clean cutting of sheet metal coils.';
  if (desc.includes('PRESS BRAKE')) return 'CNC press brake bending machine providing multi-axis control for forming complex structural parts.';
  if (desc.includes('SURFACE GRINDING')) return 'Precision surface grinding machine engineered for micron-level tolerance finish on tool steel plates.';
  if (desc.includes('WEIGHING MACHINE')) return 'High-capacity industrial platform scale for verifying shipping load weights and inventory calibration.';
  if (desc.includes('OVERHEAD CRANE')) return 'Heavy overhead gantry crane system for moving heavy coils and die tooling across stamping lines.';
  if (desc.includes('SPOT WELDING')) return 'Resistance spot welding machine for fast and reliable assembly of overlapping sheet metal panels.';
  if (desc.includes('MOTORISED GRINDER') || desc.includes('HAND GRINDING')) return 'Benchtop or hand grinder configured for removing burrs and finishing welded structural joints.';
  if (desc.includes('STACKER')) return 'Electric heavy-duty pallet stacker for organizing die storage and steel coil stock in raw materials bay.';
  if (desc.includes('GENERATOR')) return 'Industrial diesel engine generator set providing complete backup power to maintain continuous stamping shifts.';
  if (desc.includes('AIR COMPRESSOR')) return 'Rotary screw air compressor system supplying high-volume pressurized air to pneumatic tools and feeders.';
  if (desc.includes('PIPE BENDING')) return 'Automatic CNC tube and pipe bender for creating accurate multi-angle fluid lines and exhaust channels.';
  return 'Industrial fabrication asset configured for Laxmi Balaji Automotive Products manufacturing operations.';
};

const Machineries = () => {
  const [activeZone, setActiveZone] = useState<'zoneA' | 'zoneB' | 'zoneC' | 'zoneD' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMachine, setSelectedMachine] = useState<any>(null);

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
    <div className="bg-white text-slate-800 font-sans selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned Machineries Hero Section --- */}
      <section className="relative min-h-[calc(70vh-80px)] lg:h-[calc(70vh-80px)] flex items-center py-14 lg:py-0 bg-slate-900 border-b border-slate-100 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-transparent"></div>
          {/* Bottom blend block */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-8 space-y-4">
              
              {/* Mixed-Case Headline */}
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white"
              >
                <span>Advanced Production</span>
                <br />
                <span className="bg-gradient-to-r from-[#00A7FF] to-[#92e3ff] bg-clip-text text-transparent drop-shadow-sm">
                  Infrastructure
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-xl font-medium font-sans opacity-95"
              >
                A showcase of our clinical-grade manufacturing environment, featuring high-precision robotics, high-tonnage mechanical press lines, and synchronized assembly workflows.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg text-xs text-slate-100 font-bold font-sans"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>1000-Ton High-Tonnage Presses</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Automatic Progressive Feeders</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>6-Axis Robotic Weld Clusters</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>SCADA Integrated Control Systems</span>
                </div>
              </motion.div>

              {/* Hero actions */}
              <motion.div 
                variants={fadeInUp} 
                className="flex flex-wrap gap-3"
              >
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#blueprint" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#E05000] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg shadow-[#FF5C00]/25"
                >
                  Interactive Map <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#reliability"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-slate-800 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 backdrop-blur-sm"
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
                className="p-8 bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-xl max-w-xs space-y-4 shadow-[0_15px_40px_rgba(27,63,143,0.06)]"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-[#00A7FF] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    SCADA SYSTEM
                  </h4>
                  <span className="text-sm font-mono text-slate-400">NOMINAL</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">OEE Rating</span>
                    <span className="text-[#00A7FF] font-bold">94.8%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">MTBF Level</span>
                    <span className="text-slate-800">8,420 Hrs</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Live Load Factor</span>
                    <span className="text-slate-800">88.5%</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-xs justify-between">
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
      <section id="blueprint" className="py-20 bg-white border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <div className="mb-12">
            <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">
              CAD SCHEMATICS
            </span>
            <h3 className="text-2xl font-black text-slate-905 tracking-tight">
              Interactive Factory Blueprint
            </h3>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Blueprint Container (Desktop only) */}
            <div className="hidden lg:block lg:col-span-8">
              <div className="relative aspect-[21/9] bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm animate-border-shimmer">
                {/* CAD Grid pattern */}
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #00A7FF 0, #00A7FF 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}></div>
                
                {/* Zone A: Stamping Hub */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneA')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneA' ? null : 'zoneA')}
                  className={`absolute top-[10%] left-[5%] w-[28%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneA' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-sm shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneA' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone A</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Stamping Hub</h4>
                </button>

                {/* Zone B: Robotic Welding */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneB')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneB' ? null : 'zoneB')}
                  className={`absolute top-[10%] left-[36%] w-[58%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneB' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-sm shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneB' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone B</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 uppercase">Robotic Welding Cluster</h4>
                    <span className="text-xs text-slate-400 mt-1 block font-mono">HOVER TO INSPECT ACTIVE PRESS CELLS</span>
                  </div>
                </button>

                {/* Zone C: Metrology Lab */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneC')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneC' ? null : 'zoneC')}
                  className={`absolute bottom-[10%] left-[5%] w-[38%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneC' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-sm shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneC' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone C</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Metrology & QC Lab</h4>
                </button>

                {/* Zone D: Final Assembly */}
                <button 
                  onMouseEnter={() => setActiveZone('zoneD')}
                  onMouseLeave={() => setActiveZone(null)}
                  onClick={() => setActiveZone(activeZone === 'zoneD' ? null : 'zoneD')}
                  className={`absolute bottom-[10%] left-[46%] w-[48%] h-[38%] border border-dashed rounded-lg p-5 text-left transition-all duration-300 z-10 flex flex-col justify-between ${
                    activeZone === 'zoneD' ? 'bg-[#00A7FF]/10 border-[#00A7FF] shadow-sm shadow-[#00A7FF]/5' : 'border-slate-300 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-sm font-mono font-bold uppercase tracking-wider ${activeZone === 'zoneD' ? 'text-[#00A7FF]' : 'text-slate-400'}`}>Zone D</span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase">Final Assembly</h4>
                </button>

                {/* Midways Center Logistics */}
                <div className="absolute top-[48%] left-[44%] w-[2%] h-[4%] flex items-center justify-center opacity-30">
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-widest italic font-bold">LOGISTICS</span>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Zone Selector (Grid list) */}
            <div className="block lg:hidden w-full space-y-3">
              {[
                { id: 'zoneA', name: 'Zone A - Stamping Hub' },
                { id: 'zoneB', name: 'Zone B - Robotic Welding Cluster' },
                { id: 'zoneC', name: 'Zone C - Metrology & QC Lab' },
                { id: 'zoneD', name: 'Zone D - Final Assembly' }
              ].map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id as any)}
                  className={`w-full py-4 px-6 border rounded-lg text-left transition-all duration-300 ${
                    activeZone === zone.id 
                      ? 'bg-[#FF5C00] text-white border-[#FF5C00] shadow-sm shadow-[#FF5C00]/20' 
                      : 'bg-white border-slate-200/80 text-slate-800 hover:border-[#00A7FF]'
                  }`}
                >
                  <span className={`text-xs font-mono block uppercase ${activeZone === zone.id ? 'text-white/80' : 'text-slate-400'}`}>Telemetry Option</span>
                  <span className="text-sm font-bold block">{zone.name}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-4 h-full">
              <div className="bg-[#020522] border border-white/10 p-8 rounded-xl h-full shadow-lg relative min-h-[220px] flex flex-col justify-between text-white">
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
                        <span className="text-[#00A7FF] text-sm font-mono font-bold uppercase tracking-widest mb-1 block">ZONE DETAILS</span>
                        <h4 className="text-base font-bold text-white tracking-tight">{zoneDetails[activeZone].title}</h4>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Units</p>
                          <p className="text-xs text-slate-100 font-bold">{zoneDetails[activeZone].machines}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Specifications Matrix</p>
                          <p className="text-xs text-slate-300 font-medium font-sans leading-relaxed">{zoneDetails[activeZone].specs}</p>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm font-mono">
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
                      <p className="text-sm text-slate-500 font-sans max-w-[200px] leading-relaxed">
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
      <section id="reliability" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,167,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Reliability Ratings */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-md border border-slate-100 p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-[0_10px_35px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A7FF] to-[#1B3F8F] rounded-t-3xl"></div>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-xl bg-[#00A7FF]/8 flex items-center justify-center text-[#1B3F8F]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Equipment Reliability Ratings</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Mean Time Between Failure (MTBF)</p>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="text-3xl font-black text-slate-800 tracking-tight">8,420</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hours</span>
                    </div>
                    {/* Solid Sky Blue progress bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00A7FF] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Overall Equipment Effectiveness (OEE)</p>
                    <div className="flex items-baseline gap-1.5 mb-3">
                      <span className="text-3xl font-black text-slate-800 tracking-tight">94.8</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">%</span>
                    </div>
                    {/* Solid Orange progress bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF5C00] rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-center sm:text-left">Real-time data synced from SCADA Control Deck</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[#00A7FF] font-bold uppercase tracking-widest">Systems Nominal</span>
                </div>
              </div>
            </div>

            {/* Capacity Download Deck - Clean Solid Royal Blue Layout */}
            <div className="bg-[#1B3F8F] p-8 sm:p-10 text-white rounded-3xl flex flex-col justify-between shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none group-hover:bg-white/10 transition-colors duration-700"></div>
              
              <div>
                <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-widest mb-3 block">TECHNICAL RESOURCE</span>
                <h3 className="text-xl sm:text-2xl font-black mb-3 leading-tight tracking-tight uppercase">Full Capacity Deck</h3>
                <p className="text-xs text-white/80 leading-relaxed font-sans font-medium">
                  Download detailed specifications, tonnage charts, and layout matrices of our 150+ operational press and welding lines.
                </p>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 w-11 h-11 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <button className="w-full bg-white text-[#1B3F8F] hover:bg-[#00A7FF] hover:text-white py-3.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  Download capacity PDF <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. Machinery Asset List Grid --- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-custom">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#00A7FF]/8 text-[#00A7FF] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Asset Inventory
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-slate-800 tracking-tight">
                Machinery Asset Catalog
              </h3>
              <div className="w-16 h-[3px] bg-[#00A7FF] mt-4 rounded-full"></div>
            </div>
            
            {/* Document Control Panel */}
            <div className="w-full lg:w-auto bg-slate-50/50 border border-slate-100 rounded-2xl p-6 text-xs text-slate-500 font-sans shadow-sm max-w-xl">
              <div className="border-b border-slate-200/50 pb-3 mb-3">
                <p className="font-bold text-slate-705 uppercase tracking-wide">Laxmi Balaji Automotive Products Pvt Ltd</p>
                <p className="text-[#00A7FF] font-black uppercase text-[10px] tracking-wider mt-0.5">LIST OF MACHINERIES - 2026</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-medium">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Format No</span>
                  <span className="font-mono font-bold text-slate-700">LBAP/MNT/01</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Revision</span>
                  <span className="font-mono font-bold text-slate-700">00</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Rev Date</span>
                  <span className="font-mono font-bold text-slate-700">02.01.2018</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Review Date</span>
                  <span className="font-mono font-bold text-slate-700">01.01.2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Deck */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wide">Total Machinery Assets</span>
              <span className="text-xl font-black text-slate-800 font-mono">39</span>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wide">Press Shop Units</span>
              <span className="text-xl font-black text-[#00A7FF] font-mono">14</span>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wide">Welding Stations</span>
              <span className="text-xl font-black text-[#FF5C00] font-mono">11</span>
            </div>
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-wide">Operational Status</span>
              <span className="text-xs font-bold text-emerald-600 uppercase flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                94.8% OEE Avg
              </span>
            </div>
          </div>

          {/* Filters & Search Controls */}
          <div className="flex flex-col xl:flex-row gap-4 justify-between items-stretch xl:items-center mb-10 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search description, make, model ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-100 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#00A7FF] focus:ring-1 focus:ring-[#00A7FF] transition-all font-sans font-medium"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Tabs Dropdown/Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Press Shop', 'Welding Shop', 'CNC & Fabrication', 'Material Handling', 'Utilities & Auxiliary'].map((category) => {
                const count = category === 'All' 
                  ? machineryData.length 
                  : machineryData.filter(m => m.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                      selectedCategory === category
                        ? 'bg-[#1B3F8F] text-white shadow-sm'
                        : 'bg-white border border-slate-200/60 text-slate-500 hover:border-slate-350 hover:text-slate-800'
                    }`}
                  >
                    {category} <span className="opacity-60 ml-0.5">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Machinery Asset Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {machineryData
              .filter((item) => {
                const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
                const matchesSearch = 
                  item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.capacity.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
              })
              .map((item) => {
                const isService = item.slNo % 12 === 0;
                return (
                  <motion.div 
                    key={item.slNo}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={springTransitionFast}
                    onClick={() => setSelectedMachine(item)}
                    className="bg-white border border-slate-200/60 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg hover:border-[#00A7FF]/20 transition-all duration-300 animate-border-shimmer group relative cursor-pointer"
                  >
                    {/* Top color accent divider - Solid brand Sky Blue */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>

                    {/* Status Badge overlay on Image */}
                    <div className="absolute top-3 right-3 z-30">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${
                        isService 
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                          : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isService ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                        {isService ? 'Servicing' : 'Nominal'}
                      </span>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img 
                        src={getMachineImage(item.slNo)} 
                        alt={item.description} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold text-[#00A7FF] uppercase tracking-widest block">{item.category}</span>
                          <span className="text-[10px] font-bold text-slate-400 font-mono">Sl: #{item.slNo}</span>
                        </div>
                        <h4 className="text-base font-black text-slate-800 tracking-tight leading-tight uppercase">
                          {item.description}
                        </h4>
                        <div className="font-mono text-slate-400 text-[10px] font-bold">M/C ID: {item.id}</div>
                        <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium pt-1">
                          {getMachineDescription(item.description)}
                        </p>
                      </div>
                      
                      <div className="flex justify-between items-center pt-5 border-t border-slate-100 text-xs">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Capacity</span>
                          <span className="font-bold text-slate-850 font-sans">{item.capacity}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Make / Year</span>
                          <span className="font-mono font-bold text-slate-500 uppercase tracking-wider text-right">
                            {item.make} ({item.year})
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>

          {/* Empty Search Result State */}
          {machineryData.filter((item) => {
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesSearch = 
              item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.capacity.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
          }).length === 0 && (
            <div className="py-16 text-center space-y-4 bg-white border border-slate-200 rounded-xl">
              <AlertCircle className="w-10 h-10 text-slate-350 mx-auto stroke-[1.5]" />
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">No Machinery Found</h4>
              <p className="text-xs text-slate-400 font-sans max-w-xs mx-auto leading-relaxed">
                We couldn't find any machines matching your search query or selected category filter. Try widening your criteria.
              </p>
            </div>
          )}

          {/* Interactive Modal Detail Viewer */}
          <AnimatePresence>
            {selectedMachine && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMachine(null)}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
                style={{
                  background: 'rgba(3, 7, 44, 0.75)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <motion.div
                  initial={{ scale: 0.93, y: 20, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.93, y: 20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-3xl w-full font-sans flex flex-row"
                  style={{
                    maxHeight: 'calc(100vh - 48px)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(242,251,255,0.96) 100%)',
                    backdropFilter: 'blur(40px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(200%)',
                    border: '1px solid rgba(255,255,255,0.95)',
                    borderRadius: '1.25rem',
                    boxShadow: '0 8px 16px rgba(27,63,143,0.08), 0 32px 80px rgba(27,63,143,0.20), 0 0 0 1px rgba(0,167,255,0.10), inset 0 1px 0 rgba(255,255,255,1)',
                    overflow: 'hidden',
                  }}
                >
                  {/* ── LEFT: Image Panel ─────────────────────── */}
                  <div className="w-[42%] shrink-0 relative bg-slate-950 flex flex-col">
                    {/* Top brand bar on image panel */}
                    <div className="h-[3px] w-full shrink-0" style={{
                      background: 'linear-gradient(90deg, #1B3F8F 0%, #00A7FF 50%, #FF5C00 100%)',
                    }}></div>

                    {/* Full image */}
                    <div className="flex-1 relative overflow-hidden">
                      <img
                        src={getMachineImage(selectedMachine.slNo)}
                        alt={selectedMachine.description}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                      />
                      {/* Subtle bottom gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Category badge at bottom of image */}
                    <div className="px-4 py-4 shrink-0">
                      <span className="text-[10px] font-bold text-[#00A7FF] tracking-widest uppercase font-mono bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#00A7FF]/30 block text-center">
                        {selectedMachine.category}
                      </span>
                      <p className="font-mono text-slate-400 text-[10px] mt-2 text-center">
                        ASSET SHEET // {selectedMachine.id}
                      </p>
                    </div>
                  </div>

                  {/* ── RIGHT: Details Panel ───────────────────── */}
                  <div className="flex-1 flex flex-col min-w-0">
                    {/* Top brand bar on details panel */}
                    <div className="h-[3px] w-full shrink-0" style={{
                      background: 'linear-gradient(90deg, #00A7FF 0%, #1B3F8F 100%)',
                    }}></div>

                    {/* Header */}
                    <div className="px-6 pt-5 pb-4 border-b border-slate-100 shrink-0 flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                          {selectedMachine.description}
                        </h4>
                        <p className="font-mono text-slate-400 text-[11px] mt-1">Ref No: {selectedMachine.id}</p>
                      </div>
                      <button
                        onClick={() => setSelectedMachine(null)}
                        className="ml-3 shrink-0 bg-slate-100 hover:bg-slate-200 border border-slate-200 p-1.5 rounded-lg text-slate-500 hover:text-slate-800 transition-all hover:scale-110"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4" style={{ scrollbarWidth: 'thin' }}>

                      {/* Machine Specifications */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">Technical Specifications</span>
                        <div className="grid grid-cols-2 gap-3 bg-slate-50/80 border border-slate-200/70 p-4 rounded-xl text-xs">
                          <div>
                            <span className="text-slate-400 block font-medium mb-0.5">Capacity / Rating</span>
                            <span className="font-bold text-slate-900 font-mono">{selectedMachine.capacity}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium mb-0.5">Manufacturer</span>
                            <span className="font-bold text-slate-900">{selectedMachine.make}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium mb-0.5">Year of Commission</span>
                            <span className="font-bold text-slate-900 font-mono">{selectedMachine.year}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium mb-0.5">Shop Floor Cluster</span>
                            <span className="font-bold text-slate-900 text-[10px]">
                              {selectedMachine.category === 'Press Shop' ? 'Zone A // Press Line' :
                               selectedMachine.category === 'Welding Shop' ? 'Zone B // Weld Cells' :
                               selectedMachine.category === 'CNC & Fabrication' ? 'Zone D // Fabrication' :
                               selectedMachine.category === 'Material Handling' ? 'Zone C // Logistics' : 'Utility Cluster'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SCADA Telemetry */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">SCADA Health Telemetry</span>
                        <div className="space-y-3 bg-slate-50/80 border border-slate-200/70 p-4 rounded-xl">
                          <div>
                            <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
                              <span>Asset Efficiency (OEE)</span>
                              <span className="text-[#00A7FF] font-bold font-mono">
                                {selectedMachine.slNo % 12 === 0 ? '0.0%' : `${(91 + (selectedMachine.slNo % 10) * 0.8).toFixed(1)}%`}
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${selectedMachine.slNo % 12 === 0 ? 'bg-slate-300' : 'bg-gradient-to-r from-[#1B3F8F] to-[#00A7FF]'}`}
                                style={{ width: selectedMachine.slNo % 12 === 0 ? '0%' : `${91 + (selectedMachine.slNo % 10) * 0.8}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
                              <span>Critical Load Capacity</span>
                              <span className="text-[#FF5C00] font-bold font-mono">
                                {selectedMachine.slNo % 12 === 0 ? 'Offline' : `${(75 + (selectedMachine.slNo % 7) * 3)}%`}
                              </span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${selectedMachine.slNo % 12 === 0 ? 'bg-slate-300' : 'bg-gradient-to-r from-[#FF5C00] to-[#FF8C42]'}`}
                                style={{ width: selectedMachine.slNo % 12 === 0 ? '0%' : `${75 + (selectedMachine.slNo % 7) * 3}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Document note */}
                      <div className="flex items-start gap-3 bg-blue-50/60 border border-blue-100 p-3.5 rounded-xl">
                        <FileText className="w-4 h-4 text-[#00A7FF] shrink-0 mt-0.5" />
                        <p className="text-[11px] text-blue-700/80 leading-relaxed font-medium">
                          Governed by{' '}
                          <span className="font-bold text-blue-900 font-mono">LBAP/MNT/01 Rev 00</span>.
                          Calibrations checked under index standards.
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 py-4 border-t border-slate-100/80 flex gap-3 shrink-0 bg-white/60">
                      <button
                        onClick={() => setSelectedMachine(null)}
                        className="flex-1 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                      >
                        Close Inspector
                      </button>
                      <a
                        href="#reliability"
                        onClick={() => setSelectedMachine(null)}
                        className="flex-1 py-2.5 text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center transition-all shadow-md"
                        style={{ background: 'linear-gradient(135deg, #00A7FF 0%, #1B3F8F 100%)' }}
                      >
                        Reliability Deck
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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
