import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Box, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  FileText,
  FileDown,
  TrendingUp,
  Workflow
} from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<'sheet' | 'fab' | 'press'>('sheet');
  const [activeMaterial, setActiveMaterial] = useState<'crca' | 'hr' | 'ss'>('crca');

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

  // Specification data explorer matrix
  const specData = {
    crca: [
      { grade: "ST12 / DC01", thickness: "0.50 — 2.00", tolerance: "±0.05mm", yield: "280 MPa", app: "Body Panels & Trim" },
      { grade: "ST14 / DC04", thickness: "0.80 — 3.50", tolerance: "±0.03mm", yield: "210 MPa", app: "Deep Drawing Shells" },
      { grade: "SPCC Commercial", thickness: "1.00 — 4.00", tolerance: "±0.08mm", yield: "240 MPa", app: "Standard Brackets" }
    ],
    hr: [
      { grade: "DD11 / HR3", thickness: "1.60 — 6.00", tolerance: "±0.10mm", yield: "310 MPa", app: "Chassis Mounts" },
      { grade: "DD13 / HR4", thickness: "2.00 — 8.00", tolerance: "±0.08mm", yield: "290 MPa", app: "Heavy Crossmembers" },
      { grade: "S355MC High Yield", thickness: "3.00 — 12.00", tolerance: "±0.12mm", yield: "420 MPa", app: "Structural Suspension" }
    ],
    ss: [
      { grade: "SS Grade 304", thickness: "0.80 — 4.00", tolerance: "±0.04mm", yield: "520 MPa", app: "Exhaust Manifolds" },
      { grade: "SS Grade 316", thickness: "1.00 — 5.00", tolerance: "±0.04mm", yield: "580 MPa", app: "Chemical Line Connectors" },
      { grade: "SS Grade 430", thickness: "0.80 — 3.00", tolerance: "±0.05mm", yield: "450 MPa", app: "Corrosion Trim Panels" }
    ]
  };
  const allProducts = {
    sheet: [
      { 
        id: "CH-9830",
        name: "Chassis Brackets", 
        desc: "High-tensile steel brackets designed for heavy structural reinforcement with ±0.1mm tolerance bounds.",
        material: "HR Steel 4.0mm",
        process: "Multi-Stage Stamping",
        img: "/chassis_brackets.png",
        bestSeller: true
      },
      { 
        id: "BR-5520",
        name: "Bumper Reinforcement Rails", 
        desc: "Energy-absorbing crossmembers designed to absorb collision loads and protect core engine components.",
        material: "CRCA High-Yield 1.6mm",
        process: "Progressive Die Punching",
        img: "/bumper_rails.png",
        bestSeller: false
      },
      { 
        id: "BT-8890",
        name: "Body Trim Panels", 
        desc: "Fine dimensional sheets with tight folding limits, matching exterior panel chassis structures.",
        material: "CRCA Zinc-Coated 0.6mm",
        process: "CNC Precise Folding",
        img: "/body_trim_panels.png",
        bestSeller: false
      }
    ],
    fab: [
      { 
        id: "TH-1022",
        name: "Transmission Housing Mounts", 
        desc: "Engineered high-durability fabrication segments designed for heavy commercial fleet drivetrains.",
        material: "SS304 6.0mm",
        process: "Robotic Welding Cell",
        img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop",
        bestSeller: false
      },
      { 
        id: "SA-3310",
        name: "Suspension Control Arms", 
        desc: "Safety-critical suspension segments undergoing full magnetic particle inspections and fatigue audits.",
        material: "HR Steel 12.0mm",
        process: "Coordinated Arc Welded",
        img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
        bestSeller: true
      },
      { 
        id: "CM-7714",
        name: "Crossmember Rigs", 
        desc: "Robotic multi-axis welded chassis crossmembers built to support heavy axle distribution limits.",
        material: "Carbon Steel 8.0mm",
        process: "6-Axis Sync Robot Welding",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        bestSeller: false
      }
    ],
    press: [
      { 
        id: "DF-4412",
        name: "Door Internal Shells", 
        desc: "Lightweight DC04 deep-draw components optimized for safety reinforcement and door seal alignment.",
        material: "CRCA DC04 0.8mm",
        process: "Progressive Die Run",
        img: "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?q=80&w=800&auto=format&fit=crop",
        bestSeller: false
      },
      { 
        id: "EM-2210",
        name: "Engine Mounting Shells", 
        desc: "High-tonnage progressive press mounting components designed to damp engine block vibrational cycles.",
        material: "HR Steel 5.0mm",
        process: "Seyi Power Press Line",
        img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
        bestSeller: true
      },
      { 
        id: "BC-6611",
        name: "Brake Caliper Rims", 
        desc: "High-strength pressed caliper rings engineered to withstand extreme thermal expansion and mechanical loads.",
        material: "Alloy Steel 6.0mm",
        process: "High-Speed Punch Stamping",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        bestSeller: false
      }
    ]
  };

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned Products Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#03072c] border-b border-white/10 overflow-hidden">
        {/* Background - Automated Robotic Welding Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/products_hero_bg.png" 
            alt="Hand holding networking lightbulb connectivity overlay" 
            className="w-full h-full object-cover object-center opacity-90"
          />
          {/* Logo color tint overlay - faded dark blue with variable transparency for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03072c]/80 via-[#03072c]/55 to-[#03072c]/25"></div>
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
                <span>Automotive Component</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Engineering Catalog
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                Explore our catalog of certified Tier-1 pressed structures, robotic weld assemblies, and precision progressive die stampings. Engineered for extreme durability under load.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>High-Tonnage Structural Press Runs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>CMM Sub-Micron Dimensional Audits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Materials Traceability System Log</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Direct Integration with JIT OEM Docks</span>
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
                  href="#explorer" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Technical Explorer <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.button 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  <FileDown className="w-4 h-4" /> Download catalog PDF
                </motion.button>
              </motion.div>

            </div>

            {/* Floating Stats */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransition}
                className="p-8 glass-panel-dark border border-white/10 rounded-xl shadow-2xl max-w-xs space-y-4 text-white"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h4 className="text-[#00A7FF] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Engineering Stats
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">VER_v4.02</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-400">Active Press Cells</span>
                    <span className="text-white">12 Primary Lines</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-400">Max Pressure Force</span>
                    <span className="text-white">1000 Tons</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-400">Tolerance Limits</span>
                    <span className="text-[#00A7FF]">±0.02 mm</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>QA LEVEL: ISO_9001</span>
                  <span>CAL_OK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Interactive Specifications Explorer Tool --- */}
      <section id="explorer" className="py-24 bg-[#FAFAFA] border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            
            {/* Interactive Sidebar Switcher */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-6">
              <div>
                <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 block">
                  TECHNICAL SEGMENTS
                </span>
                <h4 className="text-base font-bold text-slate-900 uppercase tracking-tight">Component Domains</h4>
              </div>

              <ul className="space-y-3">
                {[
                  { id: 'sheet', name: 'SHEET METAL', icon: Cpu },
                  { id: 'fab', name: 'FABRICATION', icon: Settings },
                  { id: 'press', name: 'PRESS COMPONENTS', icon: Box }
                ].map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat.id as any)}
                      className="w-full flex items-center gap-4 py-4 px-6 border border-slate-200/60 bg-white rounded-lg text-left relative transition-all z-10 shadow-sm"
                    >
                      <cat.icon className={`w-4 h-4 transition-colors ${activeCategory === cat.id ? 'text-white' : 'text-slate-400'}`} />
                      <span className={`text-[11px] font-bold tracking-wider uppercase transition-colors ${activeCategory === cat.id ? 'text-white' : 'text-slate-550'}`}>
                        {cat.name}
                      </span>
                      {activeCategory === cat.id && (
                        <motion.div 
                          layoutId="activeProductCategoryTab"
                          className="absolute inset-0 bg-[#FF5C00] rounded-lg z-[-1] shadow"
                          transition={springTransitionFast}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Spec Table Explorer Area */}
            <motion.div variants={fadeInUp} className="lg:col-span-9 space-y-8">
              
              <div className="bg-white border border-slate-200/60 p-8 lg:p-10 rounded-xl shadow-sm animate-border-shimmer relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00A7FF]"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                  <div>
                    <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-1 block">EXPLORER TOOL</span>
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Technical Material Matrix</h3>
                  </div>
                  
                  {/* Material Switcher Tabs */}
                  <div className="flex gap-1.5 bg-slate-50 border border-slate-200 p-1 rounded-md relative w-full md:w-auto">
                    {([
                      { id: 'crca', label: 'CRCA' },
                      { id: 'hr', label: 'HR' },
                      { id: 'ss', label: 'SS' }
                    ] as const).map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveMaterial(tab.id)}
                        className="flex-1 md:flex-initial px-6 py-2 text-[10px] font-bold uppercase tracking-wider relative transition-all rounded z-10"
                      >
                        <span className={activeMaterial === tab.id ? 'text-white font-extrabold transition-colors' : 'text-slate-500 hover:text-slate-800'}>
                          {tab.label}
                        </span>
                        {activeMaterial === tab.id && (
                          <motion.div 
                            layoutId="activeProductMaterialTab"
                            className="absolute inset-0 bg-[#FF5C00] rounded shadow-sm z-[-1]"
                            transition={springTransitionFast}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table details with clean styling */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeCategory}-${activeMaterial}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={springTransitionFast}
                    className="overflow-x-auto border border-slate-200/80 rounded-xl bg-white shadow-sm"
                  >
                    <table className="w-full text-left">
                      <thead className="bg-[#020522] text-white border-b border-[#020522]/10">
                        <tr>
                          <th className="p-6 text-[10px] font-bold tracking-widest uppercase">STEEL GRADE</th>
                          <th className="p-6 text-[10px] font-bold tracking-widest uppercase">THICKNESS (MM)</th>
                          <th className="p-6 text-[10px] font-bold tracking-widest uppercase">TOLERANCE</th>
                          <th className="p-6 text-[10px] font-bold tracking-widest uppercase">YIELD STRENGTH</th>
                          <th className="p-6 text-[10px] font-bold tracking-widest uppercase">APPLICATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        {specData[activeMaterial].map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 hover:bg-sky-50/40 transition-colors">
                            <td className="p-6 text-sm font-bold text-slate-800">{row.grade}</td>
                            <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.thickness}</td>
                            <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.tolerance}</td>
                            <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.yield}</td>
                            <td className="p-6 text-xs text-[#00A7FF] font-bold uppercase tracking-wider">{row.app}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* --- 3. Dynamic Product Catalog Grid --- */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              COMPONENT DOMAINS
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Precision Component Catalog
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          {/* Dynamic grid rendering based on activeCategory state */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {allProducts[activeCategory].map((product, idx) => (
                <motion.div 
                  key={product.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={springTransitionFast}
                  className="bg-white border border-slate-200/60 flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-md hover:border-[#00A7FF]/30 transition-all duration-300 animate-border-shimmer group relative"
                >
                  {/* Top color accent divider - Solid brand Sky Blue */}
                  <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#00A7FF] z-20"></div>

                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    {product.bestSeller && (
                      <div className="absolute top-5 left-5 bg-[#FF5C00] px-3.5 py-1.5 text-[9px] font-bold text-white uppercase tracking-widest shadow-md rounded">
                        BEST SELLER
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight leading-tight">
                          {product.name}
                        </h3>
                        <span className="text-[9px] font-mono font-bold text-slate-455 uppercase tracking-wider pt-1">
                          #{product.id}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-3 font-medium font-sans">
                        {product.desc}
                      </p>
                      
                      <div className="flex gap-8 border-t border-slate-100 pt-5 mt-5">
                        <div>
                          <p className="text-[9px] font-bold text-slate-455 uppercase tracking-widest mb-1.5">MATERIAL</p>
                          <p className="text-xs font-bold text-slate-700">{product.material}</p>
                        </div>
                        <div className="border-l border-slate-100 pl-8">
                          <p className="text-[9px] font-bold text-slate-455 uppercase tracking-widest mb-1.5">PROCESS</p>
                          <p className="text-xs font-bold text-slate-700">{product.process}</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-3.5 bg-[#00A7FF] hover:bg-[#000EDD] text-white text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded">
                      ADD TO RFQ LIST
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* --- 4. Quality Trust Grid --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="p-8 bg-white border border-slate-200/60 rounded-xl space-y-4 shadow-sm animate-border-shimmer">
              <div className="w-10 h-10 rounded-lg bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#000EDD]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">IATF 16949 Compliant</h4>
              <p className="text-slate-500 text-xs font-sans font-medium leading-relaxed">
                Every stamping run undergoes strict defect prevention, supply chain verification, and lineside gate audits.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200/60 rounded-xl space-y-4 shadow-sm animate-border-shimmer">
              <div className="w-10 h-10 rounded-lg bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#00A7FF]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Sub-micron Calibration</h4>
              <p className="text-slate-500 text-xs font-sans font-medium leading-relaxed">
                Utilizing coordinate measuring cleanrooms (CMM) to verify material thickness and die positioning accuracy.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200/60 rounded-xl space-y-4 shadow-sm animate-border-shimmer">
              <div className="w-10 h-10 rounded-lg bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#FF5C00]">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Material Traceability</h4>
              <p className="text-slate-500 text-xs font-sans font-medium leading-relaxed">
                Each product batch is linked to its master raw material coils with digital chemical certificates.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact floating CTA trigger */}
      
    </div>
  );
};

export default Products;
