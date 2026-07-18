import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Database, Search, X, ChevronLeft, ChevronRight, Image as ImageIcon, Layers, Cpu, Wrench, Target, Heart } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface GalleryItem {
  id: string;
  title: string;
  desc: string;
  category: 'facility' | 'machinery' | 'components' | 'csr';
  systemTag: string;
  img: string;
  date: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery dataset based on reference site details (Facilities, Machineries, Components, CSR)
  // Gallery dataset aligned with http://lbap.in/gallery.html (42 images)
  const galleryList: GalleryItem[] = [
    { id: "GL-REF-01", title: "Heavy Duty Stampings", desc: "Production press component batch output.", category: "components", systemTag: "LBAP_REF_01 // PASS", img: "http://lbap.in/img/gallery/2.png", date: "Jul 2026" },
    { id: "GL-REF-02", title: "Automated Laser Cutting", desc: "Precision CNC sheet processing.", category: "machinery", systemTag: "LBAP_REF_02 // PASS", img: "http://lbap.in/img/gallery/12.png", date: "Jul 2026" },
    { id: "GL-REF-03", title: "Robot Assembly Cells", desc: "Coordinated robot arms handling frame welding.", category: "machinery", systemTag: "LBAP_REF_03 // PASS", img: "http://lbap.in/img/gallery/13.png", date: "Jul 2026" },
    { id: "GL-REF-04", title: "Machinery Shop Line", desc: "Secondary benders and cutters array.", category: "machinery", systemTag: "LBAP_REF_04 // PASS", img: "http://lbap.in/img/gallery/14.png", date: "Jul 2026" },
    { id: "GL-REF-05", title: "Press Machine Cluster", desc: "Rows of 45T to 250T mechanical presses.", category: "machinery", systemTag: "LBAP_REF_05 // PASS", img: "http://lbap.in/img/gallery/15.png", date: "Jul 2026" },
    { id: "GL-REF-06", title: "Press Brake II Tooling", desc: "Metal sheet folding and bending controls.", category: "machinery", systemTag: "LBAP_REF_06 // PASS", img: "http://lbap.in/img/gallery/16.png", date: "Jul 2026" },
    { id: "GL-REF-07", title: "Finished Goods Storage Area", desc: "Spacious storage racks optimized for lineside JIT packaging.", category: "facility", systemTag: "LBAP_REF_07 // PASS", img: "http://lbap.in/img/gallery/17.png", date: "Jul 2026" },
    { id: "GL-REF-08", title: "Production Line Floor", desc: "Overview of factory layout showing cranes and press lines.", category: "facility", systemTag: "LBAP_REF_08 // PASS", img: "http://lbap.in/img/gallery/19.png", date: "Jul 2026" },
    { id: "GL-REF-09", title: "Stamping Press Machine", desc: "Heavy mechanical press for structural components.", category: "machinery", systemTag: "LBAP_REF_09 // PASS", img: "http://lbap.in/img/gallery/3.png", date: "Jul 2026" },
    { id: "GL-REF-10", title: "Alloy Steel Shearing", desc: "Hydraulic shearing machine cutting raw plate stock.", category: "machinery", systemTag: "LBAP_REF_10 // PASS", img: "http://lbap.in/img/gallery/4.png", date: "Jul 2026" },
    { id: "GL-REF-11", title: "Coil Feeder Press", desc: "Automatic coil feeder feeding sheet metal into stamping die.", category: "machinery", systemTag: "LBAP_REF_11 // PASS", img: "http://lbap.in/img/gallery/5.png", date: "Jul 2026" },
    { id: "GL-REF-12", title: "Sheet Metal Stamping", desc: "Stamping operation in progress on cross shaft press.", category: "machinery", systemTag: "LBAP_REF_12 // PASS", img: "http://lbap.in/img/gallery/6.png", date: "Jul 2026" },
    { id: "GL-REF-13", title: "CNC Laser Cutting Bed", desc: "Close-up of CNC laser system slicing structural contours.", category: "machinery", systemTag: "LBAP_REF_13 // PASS", img: "http://lbap.in/img/gallery/7.png", date: "Jul 2026" },
    { id: "GL-REF-14", title: "Overhead Gantry Crane", desc: "3 Ton capacity crane managing heavy raw coil stock transfers.", category: "facility", systemTag: "LBAP_REF_14 // PASS", img: "http://lbap.in/img/gallery/8.png", date: "Jul 2026" },
    { id: "GL-REF-15", title: "Storage Layout Buffer", desc: "Rows of tool storage blocks and strip racks.", category: "facility", systemTag: "LBAP_REF_15 // PASS", img: "http://lbap.in/img/gallery/9.png", date: "Jul 2026" },
    { id: "GL-REF-16", title: "Strips Racks Facilities", desc: "Dedicated strip storage adjacent to stamping lines.", category: "facility", systemTag: "LBAP_REF_16 // PASS", img: "http://lbap.in/img/gallery/10.png", date: "Jul 2026" },
    { id: "GL-REF-17", title: "Finished Component Bin", desc: "Inspected components stacked and ready for dispatch.", category: "facility", systemTag: "LBAP_REF_17 // PASS", img: "http://lbap.in/img/gallery/11.png", date: "Jul 2026" },
    { id: "GL-REF-18", title: "5 Axis Tube Bender", desc: "Automatic tube bender processing exhaust mounts.", category: "machinery", systemTag: "LBAP_REF_18 // PASS", img: "http://lbap.in/img/gallery/20.png", date: "Jul 2026" },
    { id: "GL-REF-19", title: "MIG Welding Station", desc: "Manual and robotic welding lines.", category: "machinery", systemTag: "LBAP_REF_19 // PASS", img: "http://lbap.in/img/gallery/21.png", date: "Jul 2026" },
    { id: "GL-REF-20", title: "Precision Drilling Line", desc: "Radial and small drill assembly stations.", category: "machinery", systemTag: "LBAP_REF_20 // PASS", img: "http://lbap.in/img/gallery/22.png", date: "Jul 2026" },
    { id: "GL-REF-21", title: "CMM Quality Metrology", desc: "CMM layout area for dimensional parameter check.", category: "facility", systemTag: "LBAP_REF_21 // PASS", img: "http://lbap.in/img/gallery/23.png", date: "Jul 2026" },
    { id: "GL-REF-22", title: "Bending and Forming Die", desc: "Custom press brake tooling blocks.", category: "components", systemTag: "LBAP_REF_22 // PASS", img: "http://lbap.in/img/gallery/24.png", date: "Jul 2026" },
    { id: "GL-REF-23", title: "Press Tool Storage", desc: "Racks housing heavy forming stamping dies.", category: "facility", systemTag: "LBAP_REF_23 // PASS", img: "http://lbap.in/img/gallery/25.png", date: "Jul 2026" },
    { id: "GL-REF-24", title: "Robotic Stamping Integration", desc: "Coordinated robot feeding press lines.", category: "machinery", systemTag: "LBAP_REF_24 // PASS", img: "http://lbap.in/img/gallery/26.png", date: "Jul 2026" },
    { id: "GL-REF-25", title: "Hosur Plant Buffer Docks", desc: "Material handling dispatch area.", category: "facility", systemTag: "LBAP_REF_25 // PASS", img: "http://lbap.in/img/gallery/30.png", date: "Jul 2026" },
    { id: "GL-REF-26", title: "Stamping Press Feeders", desc: "Automatic sheet metal stack feeders.", category: "machinery", systemTag: "LBAP_REF_26 // PASS", img: "http://lbap.in/img/gallery/31.png", date: "Jul 2026" },
    { id: "GL-REF-27", title: "Precision Turned Shaft", desc: "Turned component sample batch.", category: "components", systemTag: "LBAP_REF_27 // PASS", img: "http://lbap.in/img/g1.png", date: "Jul 2026" },
    { id: "GL-REF-28", title: "Pressed Cross Bracket", desc: "Automotive suspension structural bracket.", category: "components", systemTag: "LBAP_REF_28 // PASS", img: "http://lbap.in/img/g2.png", date: "Jul 2026" },
    { id: "GL-REF-29", title: "Power Train Mount", desc: "Robotic welded subframe reinforcement plate.", category: "components", systemTag: "LBAP_REF_29 // PASS", img: "http://lbap.in/img/g3.png", date: "Jul 2026" },
    { id: "GL-REF-30", title: "Exhaust Mount Bracket", desc: "Precision bent bracket component.", category: "components", systemTag: "LBAP_REF_30 // PASS", img: "http://lbap.in/img/g4.png", date: "Jul 2026" },
    { id: "GL-REF-31", title: "EV Engine Platform Mount", desc: "Heavy stamped support bracket.", category: "components", systemTag: "LBAP_REF_31 // PASS", img: "http://lbap.in/img/g5.png", date: "Jul 2026" },
    { id: "GL-REF-32", title: "Transmission Support Ring", desc: "Pressed flange plate component.", category: "components", systemTag: "LBAP_REF_32 // PASS", img: "http://lbap.in/img/g6.png", date: "Jul 2026" },
    { id: "GL-REF-33", title: "Front Suspension Control Arm", desc: "Robotic MIG welded suspension arm.", category: "components", systemTag: "LBAP_REF_33 // PASS", img: "http://lbap.in/img/g7.png", date: "Jul 2026" },
    { id: "GL-REF-34", title: "Structural Flange Mount", desc: "Stamped collar bracket.", category: "components", systemTag: "LBAP_REF_34 // PASS", img: "http://lbap.in/img/g8.png", date: "Jul 2026" },
    { id: "GL-REF-35", title: "Powertrain Core Bracket", desc: "Precision turned alloy shaft mounts.", category: "components", systemTag: "LBAP_REF_35 // PASS", img: "http://lbap.in/img/g9.png", date: "Jul 2026" },
    { id: "GL-REF-36", title: "Rear Axle Reinforcement", desc: "Heavy structural stamping press part.", category: "components", systemTag: "LBAP_REF_36 // PASS", img: "http://lbap.in/img/g10.png", date: "Jul 2026" },
    { id: "GL-REF-37", title: "Brake Pedal Bracket Assembly", desc: "Multi-point spot welded sub-assembly.", category: "components", systemTag: "LBAP_REF_37 // PASS", img: "http://lbap.in/img/g11.png", date: "Jul 2026" },
    { id: "GL-REF-38", title: "Chassis Reinforcement Beam", desc: "High-yield CRCA reinforcement beam.", category: "components", systemTag: "LBAP_REF_38 // PASS", img: "http://lbap.in/img/g12.png", date: "Jul 2026" },
    { id: "GL-REF-39", title: "Cabin Support Bracket", desc: "Anti-corrosive stamped steel support mount.", category: "components", systemTag: "LBAP_REF_39 // PASS", img: "http://lbap.in/img/g13.png", date: "Jul 2026" },
    { id: "GL-REF-40", title: "Drivetrain Reinforcement Plate", desc: "Deep drawn chassis plate mount.", category: "components", systemTag: "LBAP_REF_40 // PASS", img: "http://lbap.in/img/g14.png", date: "Jul 2026" },
    { id: "GL-REF-41", title: "Bumper Mount Bracket", desc: "Crumple zone shock absorbing mount.", category: "components", systemTag: "LBAP_REF_41 // PASS", img: "http://lbap.in/img/g15.png", date: "Jul 2026" },
    { id: "GL-REF-42", title: "Underbody Shield Bracket", desc: "Thin sheet stamped shield reinforcement.", category: "components", systemTag: "LBAP_REF_42 // PASS", img: "http://lbap.in/img/g16.png", date: "Jul 2026" }
  ];

  // Filter images based on selected category
  const getFilteredImages = () => {
    if (activeCategory === 'all') return galleryList;
    return galleryList.filter(item => item.category === activeCategory);
  };

  const filteredImages = getFilteredImages();

  // Handle Category tab changes with simulated loading skeleton
  const handleCategoryChange = (catId: string) => {
    setIsLoading(true);
    setActiveCategory(catId);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared sticky header */}
      <Navbar activePage="gallery" />

      {/* --- Gallery Hero & Media Archive Section --- */}
      <section className="pt-32 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
              MEDIA_REPOSITORY // OPTICAL_ARCHIVE
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
               THE PRECISION LENS
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-16 max-w-2xl font-medium">
               A definitive visual archive of LBAP's engineering excellence. High-fidelity documentation of our manufacturing processes, facilities, machineries, and social community impact programs.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
               {[
                 { id: 'all', label: 'All Archive', icon: ImageIcon },
                 { id: 'facility', label: 'Plants & Facilities', icon: Layers },
                 { id: 'machinery', label: 'Machineries', icon: Target },
                 { id: 'components', label: 'Components', icon: Wrench },
                 { id: 'csr', label: 'Community & CSR', icon: Heart }
               ].map((tab) => {
                 const TabIcon = tab.icon;
                 return (
                   <button
                     key={tab.id}
                     onClick={() => handleCategoryChange(tab.id)}
                     className={`flex items-center gap-2 px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                       activeCategory === tab.id
                         ? 'bg-[#0B96AC]/15 border-[#0B96AC] text-white'
                         : 'bg-[#0F1319] border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                     }`}
                   >
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                      <span className="text-[10px] opacity-50 font-mono">
                         ({tab.id === 'all' 
                           ? galleryList.length 
                           : galleryList.filter(p => p.category === tab.id).length})
                      </span>
                   </button>
                 );
               })}
            </div>

            {/* Visual Bento Grid with Loading Skeletons */}
            <AnimatePresence mode="wait">
               {isLoading ? (
                  // --- Image Loading skeleton loaders ---
                  <motion.div 
                    key="skeleton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                     {[1, 2, 3].map((n) => (
                       <div key={n} className="aspect-square bg-[#0F1319] border border-white/5 rounded-xl relative overflow-hidden animate-pulse">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite] pointer-events-none"></div>
                       </div>
                     ))}
                  </motion.div>
               ) : (
                  // --- Premium Reveal Cards Grid ---
                  <motion.div 
                    key="grid"
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                     {filteredImages.map((item, idx) => (
                       <motion.div 
                         key={item.id}
                         variants={fadeInUp}
                         onClick={() => setLightboxIndex(idx)}
                         className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-[#0F1319] group cursor-pointer transition-all duration-300 hover:border-[#0B96AC]/40"
                       >
                          {/* Image with grayscale hover reveal */}
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale opacity-35 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                          />
                          
                          {/* Subtitle/Text Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                             <span className="text-[9px] font-mono text-[#0B96AC] uppercase tracking-widest block mb-1">{item.systemTag}</span>
                             <h4 className="text-sm font-bold text-white uppercase tracking-tight leading-tight">{item.title}</h4>
                             <p className="text-slate-400 text-[10px] font-sans font-medium line-clamp-2 mt-1 leading-normal">{item.desc}</p>
                          </div>

                          <div className="absolute top-4 right-4 p-2 bg-slate-950/80 border border-white/10 rounded group-hover:border-[#0B96AC]/40 group-hover:text-white transition-colors text-[#0B96AC]">
                             <Eye className="w-4 h-4" />
                          </div>
                       </motion.div>
                     ))}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </section>

      {/* --- Fullscreen Lightbox Modal --- */}
      <AnimatePresence>
         {lightboxIndex !== null && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setLightboxIndex(null)}
             className="fixed inset-0 z-[150] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
           >
              {/* Close Button */}
              <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute right-6 top-6 text-slate-400 hover:text-white bg-white/5 p-2 rounded-full border border-white/10 transition-colors z-20"
              >
                 <X className="w-5 h-5" />
              </button>

              {/* Navigation Controls */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
                }}
                className="absolute left-6 text-slate-400 hover:text-white bg-white/5 p-3 rounded-full border border-white/10 transition-colors z-10 hidden sm:block"
              >
                 <ChevronLeft className="w-5 h-5" />
              </button>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
                }}
                className="absolute right-6 text-slate-400 hover:text-white bg-white/5 p-3 rounded-full border border-white/10 transition-colors z-10 hidden sm:block"
              >
                 <ChevronRight className="w-5 h-5" />
              </button>

              {/* Lightbox Content Card */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center gap-6"
              >
                 {/* Image Frame */}
                 <div className="relative max-h-[70vh] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                    <img 
                      src={filteredImages[lightboxIndex].img} 
                      alt={filteredImages[lightboxIndex].title} 
                      className="max-h-[70vh] w-full object-contain"
                    />
                 </div>

                 {/* Metadata Details panel */}
                 <div className="text-center max-w-2xl px-4 space-y-2">
                    <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest uppercase block">
                       {filteredImages[lightboxIndex].systemTag} // [{lightboxIndex + 1}/{filteredImages.length}]
                    </span>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
                       {filteredImages[lightboxIndex].title}
                    </h3>
                    <p className="text-slate-400 text-xs font-sans font-medium leading-relaxed">
                       {filteredImages[lightboxIndex].desc}
                    </p>
                    <span className="text-[9px] font-mono text-slate-500 block pt-1">
                       ARCHIVED: {filteredImages[lightboxIndex].date}
                    </span>
                 </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>

      {/* --- Blueprint to Reality --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
               <div>
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Execution Pipeline</span>
                  <h2 className="text-3xl font-black tracking-tighter uppercase text-white">Blueprint to Reality</h2>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[9px] font-mono tracking-widest text-[#0B96AC] bg-[#0B96AC]/10 px-2 py-0.5 rounded">VERIFIED</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Digital Synthesis", desc: "Every component begins as a high-density CAD model, stress-tested in virtual environments before a single atom is moved.", img: "http://lbap.in/img/machinieries/12.jpg" },
                 { title: "Material Transformation", desc: "Our 5-axis CNC arrays translate digital coordinates into physical geometry with a tolerance of less than 0.002mm.", img: "http://lbap.in/img/machinieries/1.jpg" },
                 { title: "Physical Integrity", desc: "The final part is a perfect realization of the original blueprint, verified by our laser interferometry QC system.", img: "http://lbap.in/img/machinieries/2.jpg" }
               ].map((step, idx) => (
                 <div key={idx} className="flex flex-col group">
                    <div className="relative aspect-square overflow-hidden mb-6 rounded-xl border border-white/5 bg-slate-900">
                       <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" />
                       <div className="absolute top-4 left-4 bg-slate-950/80 text-[#0B96AC] border border-white/10 text-[8px] font-mono tracking-widest px-2.5 py-1 rounded">
                          {idx === 0 ? "01 // CAD_DESIGN" : idx === 1 ? "02 // MACHINING" : "03 // QUALITY_CHECK"}
                       </div>
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                       {step.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Archive Stats --- */}
      <section className="py-20 bg-slate-950 relative">
         <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { label: "REPOSITORY STATUS", value: "8K / RAW ARCHIVE" },
                 { label: "NETWORK LOCATIONS", value: "6 GLOBAL NODES" },
                 { label: "ASSET COUNT", value: "1,240+ ENTRIES" },
                 { label: "LAST ARCHIVE EXP", value: "30.06.2026" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col border-l border-white/10 pl-6">
                    <span className="text-[9px] font-bold text-[#0B96AC] uppercase tracking-wider mb-2">{stat.label}</span>
                    <span className="text-sm font-mono font-bold text-white uppercase tracking-tight leading-tight">{stat.value}</span>
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

export default Gallery;
