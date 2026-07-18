import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Settings, 
  Activity, 
  Cpu, 
  Layers, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Boxes,
  Compass,
  Target,
  Wrench,
  Search,
  FileDown,
  CheckCircle2,
  Workflow,
  LayoutGrid,
  List,
  AlertTriangle,
  X,
  XCircle
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Animated Counter component (from About.tsx)
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

// Simple ref implementation since we are not importing useRef from 'react' explicitly above
import { useRef } from 'react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  material: string;
  thick: string;
  tensile: string;
  yield: string;
  features: string[];
  badge: string;
  img: string;
  process: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<string>('id');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [rfqList, setRfqList] = useState<string[]>([]);

  // Detailed Products Data list from reference site
  const productsList: ProductItem[] = [
    // Stamping press components
    {
      id: "LBAP-PR-001",
      name: "Chassis Reinforcement Beam",
      category: "press",
      desc: "Heavy-duty stamped reinforcement cross-beams providing structural rigidity to commercial truck cabin support platforms.",
      material: "CRCA High-Yield",
      thick: "2.5 mm",
      tensile: "980 MPa",
      yield: "550 MPa",
      features: ["Corrosion-resistant coating", "High shock absorption", "Precision punched holes"],
      badge: "Best Seller",
      img: "http://lbap.in/img/automative-press-components/1.jpg",
      process: "Progressive Press Line"
    },
    {
      id: "LBAP-PR-002",
      name: "Bumper Mount Bracket",
      category: "press",
      desc: "Lightweight front bumper mount bracket engineered to absorb crumple impact during collisions.",
      material: "DP600 Steel",
      thick: "1.6 mm",
      tensile: "600 MPa",
      yield: "380 MPa",
      features: ["Zinc-plated layer", "Optimized fold profiles", "Rapid line assembly fit"],
      badge: "Precision Grade",
      img: "http://lbap.in/img/automative-press-components/2.jpg",
      process: "Mechanical Stamping Press"
    },
    {
      id: "LBAP-PR-003",
      name: "Body Side Trim Panel",
      category: "press",
      desc: "Precision thin sheet panel structure designed matching aesthetic outer profiles of SUV vehicles.",
      material: "CRCA DC04",
      thick: "0.8 mm",
      tensile: "270 MPa",
      yield: "180 MPa",
      features: ["Deep-drawn compliance", "Flawless surface texture", "Uniform tensile stretch"],
      badge: "Certified",
      img: "http://lbap.in/img/automative-press-components/3.jpg",
      process: "Hydraulic Drawing Press"
    },
    // Sub-assemblies
    {
      id: "LBAP-SB-101",
      name: "Suspension Control Arm",
      category: "sub",
      desc: "Robotic welded front suspension control arm built to handle high load-bearing suspension loops.",
      material: "HR S355MC",
      thick: "4.5 mm",
      tensile: "510 MPa",
      yield: "355 MPa",
      features: ["MIG Welded (Pro Tech 230A)", "100% weld integrity check", "Rust-proof epoxy finish"],
      badge: "High Tensile",
      img: "http://lbap.in/img/automative-sub-assembly-components/1.jpg",
      process: "6-Axis Robotic Arc Welding"
    },
    {
      id: "LBAP-SB-102",
      name: "Transmission Mount Rig",
      category: "sub",
      desc: "Sub-assembly module designed to secure the main transmission unit and isolate drivetrain vibration.",
      material: "HR Carbon Steel",
      thick: "6.0 mm",
      tensile: "490 MPa",
      yield: "310 MPa",
      features: ["Multi-point spot welded", "Vibration damping pads", "Extreme fatigue tolerance"],
      badge: "Best Seller",
      img: "http://lbap.in/img/automative-sub-assembly-components/2.jpg",
      process: "Coordinated Robotic Welding"
    },
    {
      id: "LBAP-SB-103",
      name: "Front Subframe Plate",
      category: "sub",
      desc: "Safety-critical subframe mounting plate designed to secure engine mounts to the primary frame rails.",
      material: "High-Tensile Boron Steel",
      thick: "3.2 mm",
      tensile: "1100 MPa",
      yield: "720 MPa",
      features: ["Zeiss CMM verified holes", "Heavy structural rigidity", "Micro-alloyed strength"],
      badge: "Safety Critical",
      img: "http://lbap.in/img/automative-sub-assembly-components/3.jpg",
      process: "Stamping & Robotic Weld Loop"
    },
    // Non-automotive parts
    {
      id: "LBAP-NA-201",
      name: "Conveyor Steel Roller",
      category: "non-auto",
      desc: "Heavy-duty steel conveyor roller fabricated for heavy material handling systems and mining operations.",
      material: "Mild Steel Tube",
      thick: "5.0 mm",
      tensile: "360 MPa",
      yield: "250 MPa",
      features: ["Precision CNC turned journals", "Dust-sealed bearing caps", "Smooth rotational balance"],
      badge: "Industrial",
      img: "http://lbap.in/img/p1.png",
      process: "CNC Turning & Machining"
    },
    {
      id: "LBAP-NA-202",
      name: "Precision Turned Shaft",
      category: "non-auto",
      desc: "Custom multi-axis CNC turned shaft used in heavy rotating machineries and electric motors.",
      material: "Alloy Steel AISI 4140",
      thick: "Diameter: 50mm",
      tensile: "650 MPa",
      yield: "415 MPa",
      features: ["Tolerances down to 0.005mm", "Tempered surface finish", "Dual bearing seats"],
      badge: "Ultra Precision",
      img: "http://lbap.in/img/p2.png",
      process: "Multi-Axis CNC Machining"
    },
    {
      id: "LBAP-NA-203",
      name: "Custom Solar Bracket",
      category: "non-auto",
      desc: "Specialized structural steel bracket used in warehouse staging arrays and solar panel mounts.",
      material: "Galvanized HR Steel",
      thick: "4.0 mm",
      tensile: "400 MPa",
      yield: "275 MPa",
      features: ["Hot-dip galvanized layer", "Weatherproof outdoor durability", "Universal pre-drilled holes"],
      badge: "Certified",
      img: "http://lbap.in/img/automative-sub-assembly-components/4.jpg",
      process: "Shearing & Press Brake fold"
    },
    // Press tools
    {
      id: "LBAP-TL-301",
      name: "Progressive Stamping Die",
      category: "tools",
      desc: "In-house designed progressive die set for high-speed stamping of structural automotive washers and rails.",
      material: "Tool Steel H13",
      thick: "N/A",
      tensile: "Hardness: 58 HRC",
      yield: "N/A",
      features: ["Designed via Finite Element CAD", "Tool life exceeding 1M hits", "Rapid slide ejectors"],
      badge: "Toolroom Set",
      img: "http://lbap.in/img/n5.png",
      process: "FEA Design & CNC Die Cutting"
    },
    {
      id: "LBAP-TL-302",
      name: "Heavy Forming Punch Die",
      category: "tools",
      desc: "Thermal-treated punch tools used in heavy 800T press cells for chassis deep drawing cycles.",
      material: "Tool Steel D2",
      thick: "N/A",
      tensile: "Hardness: 62 HRC",
      yield: "N/A",
      features: ["Cryogenic surface hardening", "Mirror polished punch head", "Zero metal-galling profile"],
      badge: "Toolroom Set",
      img: "http://lbap.in/img/products/automotive-parts.jpg",
      process: "CNC Grinding & Heat Treatment"
    },
    {
      id: "LBAP-TL-303",
      name: "Welding Jig Fixture",
      category: "tools",
      desc: "Rigid alignment tool used to hold sub-assembly control arms under robotic MIG welding arcs.",
      material: "Carbon Steel & Brass Clamps",
      thick: "N/A",
      tensile: "N/A",
      yield: "N/A",
      features: ["Quick-release pneumatic clamps", "Heat deflection shields", "Dual positioning pins"],
      badge: "Precision Jigs",
      img: "http://lbap.in/img/automative-sub-assembly-components/5.jpg",
      process: "Fixture Fabrication & Tuning"
    }
  ];

  // Trigger simulated loading skeleton when changing settings
  const triggerLoading = () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    triggerLoading();
  }, [activeCategory, sortOption]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
  };

  const toggleRfq = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (rfqList.includes(id)) {
      setRfqList(rfqList.filter(item => item !== id));
    } else {
      setRfqList([...rfqList, id]);
    }
  };

  // Filter and sort core catalog
  const getProcessedProducts = () => {
    let result = productsList;
    
    // Filter Category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter Search Text
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.id.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );
    }

    // Sort catalog
    result = [...result].sort((a, b) => {
      if (sortOption === 'id') {
        return a.id.localeCompare(b.id);
      } else if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'tensile') {
        return b.tensile.localeCompare(a.tensile); // descending numeric strength approx
      }
      return 0;
    });

    return result;
  };

  const processedList = getProcessedProducts();

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared sticky navbar */}
      <Navbar activePage="products" />

      {/* --- Products Hero Section --- */}
      <section className="relative pt-32 pb-24 bg-slate-950 border-b border-white/5 overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    CATALOGUE_SYSTEM V4.2 // COMPONENT_INDEX
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                     Precision Component <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">Product Catalogue</span>
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl font-medium">
                     Explore our database of certified Tier-1 pressed structures, robotic weld assemblies, precision CNC turned components, and custom die press tooling. Fully trace material yield stats and load compliance logs.
                  </p>
               </div>
               
               {/* Floating summary of RFQ */}
               <div className="lg:col-span-4 pl-8 border-l border-white/10">
                  <div className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none block font-mono">
                     <AnimatedCounter value={productsList.length} />
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#0B96AC] mt-3">TOTAL CERTIFIED CATALOG ITEMS</p>
                  
                  {rfqList.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-[#0B96AC]/15 border border-[#0B96AC]/30 rounded-lg flex items-center justify-between"
                    >
                      <div className="text-xs font-semibold text-white">
                         {rfqList.length} component{rfqList.length > 1 ? 's' : ''} in RFQ list
                      </div>
                      <a href="/contact" className="text-[9px] font-bold uppercase tracking-widest bg-[#0B96AC] text-white px-3 py-1.5 rounded flex items-center gap-1.5 hover:bg-[#097b8d] transition-colors">
                         REQUEST QUOTE <ArrowRight className="w-3 h-3" />
                      </a>
                    </motion.div>
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* --- Filter & Catalogue Navigation Section --- */}
      <section className="py-12 bg-[#090B0E] border-b border-white/5 sticky top-[80px] z-50 backdrop-blur-md bg-opacity-95">
         <div className="container-custom">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
               
               {/* Category Switcher Tabs */}
               <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All Products', icon: Boxes },
                    { id: 'press', label: 'Press Components', icon: Layers },
                    { id: 'sub', label: 'Sub-Assemblies', icon: Cpu },
                    { id: 'non-auto', label: 'Non-Automotive', icon: Wrench },
                    { id: 'tools', label: 'Press Tooling', icon: Target }
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleCategoryChange(tab.id)}
                        className={`flex items-center gap-2.5 px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                          activeCategory === tab.id
                            ? 'bg-[#0B96AC]/15 border-[#0B96AC] text-white'
                            : 'bg-[#0F1319] border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                         <TabIcon className="w-3.5 h-3.5" />
                         <span>{tab.label}</span>
                         <span className="text-[10px] opacity-50 font-mono">
                            ({tab.id === 'all' 
                              ? productsList.length 
                              : productsList.filter(p => p.category === tab.id).length})
                         </span>
                      </button>
                    );
                  })}
               </div>

               {/* Search, Sort & Layout Switchers */}
               <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
                  {/* Search Input */}
                  <div className="flex items-center gap-3 bg-[#0F1319] border border-white/5 rounded px-4 py-2 w-full sm:w-64">
                     <Search className="w-4 h-4 text-slate-500" />
                     <input
                       type="text"
                       placeholder="Search catalogue..."
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="bg-transparent border-none text-white text-xs font-semibold focus:ring-0 focus:outline-none w-full placeholder-slate-650"
                     />
                     {searchQuery && (
                       <button onClick={() => setSearchQuery('')}>
                          <X className="w-4 h-4 text-slate-500 hover:text-white transition-colors" />
                       </button>
                     )}
                  </div>

                  {/* Sort Selector */}
                  <div className="flex items-center bg-[#0F1319] border border-white/5 rounded px-3 py-2 w-full sm:w-auto">
                     <span className="text-[9px] font-mono uppercase text-slate-500 mr-2">Sort:</span>
                     <select
                       value={sortOption}
                       onChange={(e) => setSortOption(e.target.value)}
                       className="bg-transparent border-none text-white text-xs font-bold focus:ring-0 focus:outline-none cursor-pointer"
                     >
                        <option value="id" className="bg-[#090B0E]">Part ID</option>
                        <option value="name" className="bg-[#090B0E]">Name</option>
                        <option value="tensile" className="bg-[#090B0E]">Tensile Strength</option>
                     </select>
                  </div>

                  {/* View Grid/Table toggle */}
                  <div className="flex items-center bg-[#0F1319] border border-white/5 rounded p-1">
                     <button 
                       onClick={() => setViewMode('grid')}
                       className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-[#0B96AC] text-white' : 'text-slate-500 hover:text-white'}`}
                       title="Grid View"
                     >
                        <LayoutGrid className="w-4 h-4" />
                     </button>
                     <button 
                       onClick={() => setViewMode('table')}
                       className={`p-1.5 rounded transition-all ${viewMode === 'table' ? 'bg-[#0B96AC] text-white' : 'text-slate-500 hover:text-white'}`}
                       title="Table Specifications Ledger"
                     >
                        <List className="w-4 h-4" />
                     </button>
                  </div>

               </div>

            </div>
         </div>
      </section>

      {/* --- Catalogue Products Grid / Specs Ledger Section --- */}
      <section className="py-16 bg-[#090B0E]">
         <div className="container-custom min-h-[480px]">
            <AnimatePresence mode="wait">
               {isLoading ? (
                  // --- Loading Experience: Skeleton Grid ---
                  <motion.div
                    key="skeleton"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                     {[1, 2, 3].map((n) => (
                       <div key={n} className="bg-[#0F1319] border border-white/5 rounded-xl h-[420px] p-6 relative overflow-hidden flex flex-col justify-between animate-pulse">
                          {/* Skeleton shining line sweep overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite] pointer-events-none"></div>
                          
                          <div>
                            <div className="bg-slate-900 rounded-lg h-52 w-full mb-6"></div>
                            <div className="bg-slate-900 rounded h-6 w-3/4 mb-4"></div>
                            <div className="bg-slate-900 rounded h-4 w-5/6 mb-2"></div>
                            <div className="bg-slate-900 rounded h-4 w-2/3 mb-2"></div>
                          </div>
                          
                          <div className="bg-slate-900 rounded h-10 w-full pt-4"></div>
                       </div>
                     ))}
                  </motion.div>
               ) : processedList.length === 0 ? (
                  // --- Empty State Warning ---
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-20 bg-[#0F1319] border border-white/5 rounded-2xl p-8"
                  >
                     <XCircle className="w-16 h-16 text-rose-500 mb-6 animate-bounce" />
                     <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                        System Batch Query Empty
                     </h3>
                     <p className="text-slate-400 text-xs sm:text-sm max-w-sm mb-8 leading-relaxed font-sans font-medium">
                        No product components match your query query string `"{searchQuery}"` or active filters. Please reset the controls to reload the catalogue.
                     </p>
                     <button
                       onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                       className="px-6 py-3 bg-white/5 border border-white/10 rounded text-xs font-bold uppercase tracking-widest text-[#0B96AC] hover:bg-[#0B96AC] hover:text-white hover:border-[#0B96AC] transition-all"
                     >
                        Clear Active Filters
                     </button>
                  </motion.div>
               ) : viewMode === 'grid' ? (
                  // --- Grid View (Premium Cards Layout) ---
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                     {processedList.map((product) => (
                       <motion.div
                         key={product.id}
                         whileHover={{ y: -6, borderColor: "rgba(11, 150, 172, 0.4)" }}
                         onClick={() => setSelectedProduct(product)}
                         className="bg-[#0F1319] border border-white/5 rounded-xl flex flex-col justify-between h-[420px] overflow-hidden group transition-all duration-300 relative cursor-pointer"
                       >
                          {/* Accent border glow indicator */}
                          <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#0B96AC] z-20"></div>

                          {/* Image card block */}
                          <div className="relative h-48 bg-slate-900 overflow-hidden shrink-0">
                             <img 
                               src={product.img} 
                               alt={product.name} 
                               className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-95" 
                             />
                             {product.badge && (
                               <span className="absolute top-4 left-4 bg-[#0B96AC] text-white text-[8px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md">
                                  {product.badge}
                               </span>
                             )}
                             <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm text-[8px] font-mono text-slate-400 px-2 py-1 rounded border border-white/5">
                                {product.id}
                             </span>
                          </div>

                          {/* Content card block */}
                          <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                             <div>
                                <h3 className="text-base font-black text-white uppercase group-hover:text-[#0B96AC] transition-colors leading-tight line-clamp-1">
                                   {product.name}
                                </h3>
                                <p className="text-slate-400 text-[11px] leading-relaxed font-sans font-medium line-clamp-3 mt-2">
                                   {product.desc}
                                </p>
                             </div>

                             {/* Technical parameters tags */}
                             <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[9px] font-mono text-slate-500">
                                <div>
                                   <span className="block uppercase text-[8px] text-slate-600">Material</span>
                                   <span className="text-slate-300 font-bold">{product.material}</span>
                                </div>
                                <div className="text-right">
                                   <span className="block uppercase text-[8px] text-slate-600">Thickness</span>
                                   <span className="text-slate-300 font-bold">{product.thick}</span>
                                </div>
                             </div>
                          </div>

                          {/* Card bottom actions */}
                          <div className="p-4 bg-slate-950/40 border-t border-white/5 flex items-center justify-between shrink-0">
                             <button
                               onClick={(e) => toggleRfq(product.id, e)}
                               className={`text-[9px] font-bold uppercase tracking-widest px-4 py-2.5 rounded transition-all ${
                                 rfqList.includes(product.id)
                                   ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                                   : 'bg-white/5 text-slate-300 hover:bg-[#0B96AC] hover:text-white border border-white/10 hover:border-[#0B96AC]'
                               }`}
                             >
                                {rfqList.includes(product.id) ? '✓ ADDED TO RFQ' : 'ADD TO RFQ'}
                             </button>
                             <span className="text-[9px] font-bold text-[#0B96AC] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                ANALYZE <ChevronRight className="w-3.5 h-3.5" />
                             </span>
                          </div>

                       </motion.div>
                     ))}
                  </motion.div>
               ) : (
                  // --- Table Specs Ledger View (Preserves existing functionality) ---
                  <motion.div
                    key="table"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-[#0F1319]"
                  >
                     <div className="overflow-x-auto">
                       <table className="w-full text-left border-collapse">
                          <thead>
                             <tr className="bg-slate-950 border-b border-white/5 text-slate-500 font-mono text-[9px] uppercase tracking-wider">
                                <th className="p-5 pl-6">PART ID</th>
                                <th className="p-5">COMPONENT GEOMETRY</th>
                                <th className="p-5">ALLOY COMPOSITION</th>
                                <th className="p-5">THICKNESS</th>
                                <th className="p-5">TENSILE STRENGTH</th>
                                <th className="p-5">YIELD STRENGTH</th>
                                <th className="p-5">PROCESS CLUSTER</th>
                                <th className="p-5 pr-6 text-right">ACTION</th>
                             </tr>
                          </thead>
                          <tbody className="text-xs font-semibold text-slate-455 font-mono divide-y divide-white/5">
                             {processedList.map((item) => (
                                <tr 
                                  key={item.id} 
                                  onClick={() => setSelectedProduct(item)}
                                  className="hover:bg-white/5 transition-colors group cursor-pointer"
                                >
                                   <td className="p-5 pl-6 text-white font-bold">{item.id}</td>
                                   <td className="p-5 text-slate-300 font-sans flex items-center gap-2.5 font-bold">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B96AC] animate-pulse"></span>
                                      {item.name}
                                   </td>
                                   <td className="p-5 text-slate-400 font-sans">{item.material}</td>
                                   <td className="p-5 text-slate-300">{item.thick}</td>
                                   <td className="p-5 text-emerald-400 font-bold">{item.tensile}</td>
                                   <td className="p-5 text-slate-400">{item.yield}</td>
                                   <td className="p-5 text-slate-450 font-sans">{item.process}</td>
                                   <td className="p-5 pr-6 text-right">
                                      <button
                                        onClick={(e) => toggleRfq(item.id, e)}
                                        className={`text-[9px] font-mono px-2.5 py-1 rounded transition-colors ${
                                          rfqList.includes(item.id)
                                            ? 'bg-emerald-500 text-white'
                                            : 'bg-white/5 hover:bg-[#0B96AC] hover:text-white text-slate-400'
                                        }`}
                                      >
                                         {rfqList.includes(item.id) ? 'RFQ+' : 'RFQ'}
                                      </button>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </section>

      {/* --- Detailed Technical Blueprint Modal --- */}
      <AnimatePresence>
         {selectedProduct && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setSelectedProduct(null)}
             className="fixed inset-0 z-[150] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
           >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0F1319] border border-white/10 rounded-2xl max-w-3xl w-full relative overflow-hidden shadow-2xl"
              >
                 {/* Top header decoration */}
                 <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 to-[#0B96AC]"></div>

                 {/* Close button */}
                 <button 
                   onClick={() => setSelectedProduct(null)}
                   className="absolute right-6 top-6 text-slate-500 hover:text-white bg-slate-950/80 p-2 rounded-full border border-white/5 transition-colors z-20"
                 >
                    <X className="w-4 h-4" />
                 </button>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10">
                    
                    {/* Left: Product Media & Badges */}
                    <div className="space-y-6">
                       <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-white/5">
                          <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
                       </div>

                       <div className="bg-slate-950 border border-white/5 rounded-xl p-5 font-mono text-[10px] space-y-3">
                          <span className="text-[#0B96AC] uppercase tracking-widest block font-bold border-b border-white/5 pb-2">METALLURGY LEDGER</span>
                          <div className="flex justify-between text-slate-400">
                             <span>Part ID</span>
                             <span className="text-white font-bold">{selectedProduct.id}</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                             <span>Material Composition</span>
                             <span className="text-white font-bold">{selectedProduct.material}</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                             <span>Raw Thickness</span>
                             <span className="text-white font-bold">{selectedProduct.thick}</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                             <span>Tensile Strength Limit</span>
                             <span className="text-emerald-400 font-bold">{selectedProduct.tensile}</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                             <span>Min Yield Strength</span>
                             <span className="text-white font-bold">{selectedProduct.yield}</span>
                          </div>
                       </div>
                    </div>

                    {/* Right: Specifications & Details */}
                    <div className="flex flex-col justify-between space-y-6">
                       <div>
                          <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest uppercase block mb-1">SPECIFICATION MATRIX</span>
                          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                             {selectedProduct.name}
                          </h2>
                          <p className="text-slate-400 text-xs leading-relaxed font-sans font-medium mb-6">
                             {selectedProduct.desc}
                          </p>

                          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Core Parameters</h4>
                          <ul className="space-y-2 mb-6 text-slate-300 text-[11px] font-semibold font-sans">
                             {selectedProduct.features.map((feature, i) => (
                               <li key={i} className="flex items-center gap-2.5">
                                  <CheckCircle2 className="w-4 h-4 text-[#0B96AC] shrink-0" />
                                  {feature}
                               </li>
                             ))}
                          </ul>

                          <div className="bg-white/5 border border-white/5 rounded px-3.5 py-2 font-mono text-[9px] text-[#0B96AC] inline-block uppercase">
                             Process Cluster: {selectedProduct.process}
                          </div>
                       </div>

                       <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={(e) => { toggleRfq(selectedProduct.id, e); }}
                            className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-all text-center ${
                              rfqList.includes(selectedProduct.id)
                                ? 'bg-emerald-500 text-white'
                                : 'bg-white/5 text-slate-300 hover:bg-[#0B96AC] hover:text-white border border-white/10 hover:border-[#0B96AC]'
                            }`}
                          >
                             {rfqList.includes(selectedProduct.id) ? '✓ ADDED TO RFQ' : 'ADD TO RFQ'}
                          </button>
                          
                          <a
                            href="/contact"
                            className="flex-1 py-3 bg-[#0B96AC] hover:bg-[#097b8d] text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-[#0B96AC]/15 transition-all text-center"
                          >
                             REQUEST BLUEPRINT
                          </a>
                       </div>

                    </div>

                 </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>

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
                  
                  <a href="/contact" className="inline-block px-8 py-4 bg-[#0B96AC] hover:bg-[#097b8d] text-white text-[9px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/15 transition-all">
                     Download Engineering Data Matrix
                  </a>
               </div>
               
               <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-slate-900">
                     <img 
                        src="http://lbap.in/img/banner/2.jpg" 
                        alt="Precision Metal Components" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
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

export default Products;
