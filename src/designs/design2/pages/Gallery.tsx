import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Download, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  FileDown,
  Eye
} from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'parts' | 'lines' | 'labs'>('all');

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

  // Curated visual archive cards with dynamic categorizations
  const archiveItems = [
    { 
      id: 1,
      title: "Chassis Mount Brackets",
      category: "parts",
      categoryName: "Finished Parts",
      spec: "800 Tons Force",
      desc: "High-tensile steel components stamped under automated progress setups.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 2,
      title: "Bystronic Laser Cutting",
      category: "lines",
      categoryName: "Assembly Lines",
      spec: "10 KW Output",
      desc: "Fiber laser fabrication systems operating under continuous feed cycles.",
      img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 3,
      title: "Zeiss Metrology Scanning",
      category: "labs",
      categoryName: "Lab Inspections",
      spec: "0.1 µm Precision",
      desc: "Sub-micron CMM coordinate scanning audit within cleanroom lab environments.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 4,
      title: "Matsuura Tooling Center",
      category: "lines",
      categoryName: "Assembly Lines",
      spec: "12,000 RPM spindle",
      desc: "Palletized horizontal tool machining cells creating progressive die blocks.",
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 5,
      title: "Door Shell Stamping Run",
      category: "parts",
      categoryName: "Finished Parts",
      spec: "CRCA DC04 sheet",
      desc: "Deep-draw door panels prepared for quality control inspections.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 6,
      title: "NDT Weld Inspection",
      category: "labs",
      categoryName: "Lab Inspections",
      spec: "Ultrasound verification",
      desc: "Robotic MIG spot weld checks ensuring zero integrity voids under fatigue load.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Dynamic filter function
  const filteredItems = activeCategory === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
            {/* --- 1. Viewport-Aligned Gallery Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Laser Spark Machining */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000" 
            alt="Laser Machining Sparks Factory" 
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
                <span>The Precision</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Visual Archive
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                Explore a detailed visual record of our manufacturing environments, showing high-tonnage stamping press lines, automated 6-axis welding cells, and sub-micron quality control measurement laboratories.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Interactive Plant Inspections</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Real-time Press Layout logs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>CMM Metrology Visual verification</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Continuous 120 FPS High-Speed Feeds</span>
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
                  href="#catalog" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Browse Catalog <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#footage"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  <Play className="w-4 h-4" /> Watch technical loops
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
                    MEDIA SERVER
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">SYNCED</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Active Cameras</span>
                    <span className="text-slate-800">24 SCADA Units</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Resolutions</span>
                    <span className="text-slate-800">4K Ultra-HD</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Storage Node</span>
                    <span className="text-[#00A7FF]">LBAP_MED_08</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>QA LEVEL: ISO_9001</span>
                  <span>CAM_SECURE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Interactive Category Filter Section --- */}
      <section id="catalog" className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Inspect Production Nodes
              </h2>
              <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            </div>
            
            {/* Category Filter Tabs with dynamic layoutId backgrounds */}
            <div className="flex flex-wrap gap-1.5 bg-slate-50 border border-slate-200 p-1 rounded-md relative w-full md:w-auto z-10">
              {([
                { id: 'all', label: 'All Archive' },
                { id: 'parts', label: 'Finished Parts' },
                { id: 'lines', label: 'Assembly Lines' },
                { id: 'labs', label: 'Lab Inspections' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className="px-6 py-2 text-[10px] font-bold uppercase tracking-wider relative transition-all rounded z-10 flex-1 md:flex-initial"
                >
                  <span className={activeCategory === tab.id ? 'text-white font-extrabold transition-colors' : 'text-slate-505 hover:text-slate-800'}>
                    {tab.label}
                  </span>
                  {activeCategory === tab.id && (
                    <motion.div 
                      layoutId="activeGalleryTab"
                      className="absolute inset-0 bg-[#00A7FF] rounded shadow-sm z-[-1]"
                      transition={springTransitionFast}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Image Grid showing details on hover */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={springTransitionFast}
                  className="bg-white border border-slate-200/60 flex flex-col h-[320px] overflow-hidden rounded-xl shadow-sm hover:shadow-md hover:border-[#00A7FF]/30 transition-all duration-300 animate-border-shimmer relative group"
                >
                  {/* Top color divider - Solid brand Sky Blue */}
                  <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#00A7FF] z-30"></div>

                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                  
                  {/* Hover detail overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                    <span className="text-[#00A7FF] text-[8px] font-bold uppercase tracking-widest mb-1.5 block">
                      {item.categoryName}
                    </span>
                    <h4 className="text-white text-base font-bold uppercase tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-[10px] leading-relaxed mb-4 font-sans font-medium">
                      {item.desc}
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-white/10 text-[9px] font-mono text-slate-300">
                      <span>SPEC: {item.spec}</span>
                      <span className="flex items-center gap-1 font-bold text-[#FF5C00]">
                        <Eye className="w-3.5 h-3.5 text-[#FF5C00]" /> INSPECT
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* --- 3. Feature/Video Production Cards --- */}
      <section id="footage" className="py-24 bg-[#FAFAFA]">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              TECHNICAL FOOTAGE
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Production Timelapse Loops
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200/60 rounded-xl overflow-hidden flex flex-col shadow-sm animate-border-shimmer relative group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" alt="CNC Machining" className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-[#00A7FF] hover:border-[#00A7FF] transition-all">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute top-5 left-5 bg-[#FF5C00] px-3.5 py-1.5 text-[9px] font-bold text-white uppercase tracking-widest shadow-md rounded">
                  TIMELAPSE: 120 FPS
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">CNC Tooling Center Runs</h3>
                  <p className="text-slate-505 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
                    Automated 5-axis tooling center fabricating complex die mold designs out of solid steel blocks, showcasing tool-path configurations.
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider font-mono">
                  <span className="text-[#00A7FF]">DURATION: 04:22</span>
                  <button className="flex items-center gap-2 text-slate-455 hover:text-[#00A7FF] transition-colors uppercase">
                    DOWNLOAD LOGS <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200/60 rounded-xl overflow-hidden flex flex-col shadow-sm animate-border-shimmer relative group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" alt="Press Shop" className="w-full h-full object-cover brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-white rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-[#00A7FF] hover:border-[#00A7FF] transition-all">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute top-5 left-5 bg-[#FF5C00] px-3.5 py-1.5 text-[9px] font-bold text-white uppercase tracking-widest shadow-md rounded">
                  PRESS CYCLE LAB
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Press Shop Operations</h3>
                  <p className="text-slate-505 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-medium">
                    High-tonnage progressive die stamping for structural chassis mount parts, capturing visual audits and sheet load offsets in real time.
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider font-mono">
                  <span className="text-[#00A7FF]">DURATION: 03:45</span>
                  <button className="flex items-center gap-2 text-slate-455 hover:text-[#00A7FF] transition-colors uppercase">
                    DOWNLOAD LOGS <Download className="w-4 h-4" />
                  </button>
                </div>
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

export default Gallery;
