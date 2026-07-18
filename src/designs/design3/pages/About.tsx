import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Bookmark,
  Heart,
  BookOpen,
  Search,
  Settings,
  Activity,
  Boxes
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
  const [activeTab, setActiveTab] = useState<'press' | 'fab' | 'drill'>('press');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Machinery Data from reference site
  const machineryData = {
    press: [
      { serial: "01", name: "Cross Shaft Press", make: "Shri Balaji", capacity: "250 Ton", qty: "2" },
      { serial: "02", name: "Cross Shaft Press", make: "Shri Balaji", capacity: "160 Ton", qty: "1" },
      { serial: "03", name: "Cross Shaft Press", make: "Shri Balaji", capacity: "250 Ton", qty: "1" },
      { serial: "04", name: "Cross Shaft Press", make: "Ameteep", capacity: "63 Ton", qty: "1" },
      { serial: "05", name: "Mechanical Press", make: "Neel Kanth", capacity: "60 Ton", qty: "1" },
      { serial: "06", name: "Mechanical Press", make: "DMW", capacity: "60 Ton", qty: "1" },
      { serial: "07", name: "Power Press", make: "SEW", capacity: "45 Ton", qty: "1" },
      { serial: "08", name: "Power Press", make: "Shri Balaji", capacity: "40 Ton", qty: "1" },
      { serial: "09", name: "Mechanical Press", make: "Shri Balaji", capacity: "30 Ton", qty: "2" },
      { serial: "10", name: "Mechanical Press", make: "Gooreg", capacity: "25 Ton", qty: "1" },
      { serial: "11", name: "Mechanical Press", make: "Neel Kanth", capacity: "20 Ton", qty: "1" },
      { serial: "12", name: "Mechanical Press", make: "Shri Balaji", capacity: "25 Ton", qty: "1" },
      { serial: "13", name: "Mechanical Press", make: "DMW", capacity: "120 Ton", qty: "1" },
      { serial: "14", name: "Mechanical Press", make: "Karthika", capacity: "N/A", qty: "1" }
    ],
    fab: [
      { serial: "01", name: "5-Axis Tube Bending Machine", make: "Global Standard", capacity: "CNC 3-Axis", qty: "1" },
      { serial: "02", name: "Hydraulic Shearing Machine", make: "Jekwin", capacity: "6*2500 MM", qty: "1" },
      { serial: "03", name: "Hydraulic Shearing Machine", make: "T.E.E", capacity: "6*2500 MM", qty: "1" },
      { serial: "04", name: "CNC Laser Cutting Machine", make: "Premium Make", capacity: "High Precision", qty: "1" },
      { serial: "05", name: "CNC Press Brake-II", make: "Standard", capacity: "Varying Tonnage", qty: "1" },
      { serial: "06", name: "CNC Pipe Bending 3-Axis", make: "CNC Special", capacity: "Heavy Duty", qty: "2" },
      { serial: "07", name: "Mig Welding Unit", make: "Pro Tech", capacity: "230 A", qty: "2" }
    ],
    drill: [
      { serial: "01", name: "Radial Drill Machine", make: "SMT", capacity: "40 MM", qty: "1" },
      { serial: "02", name: "Small Drill Machine", make: "R.R. Products", capacity: "20 MM", qty: "1" },
      { serial: "03", name: "Small Drill Machine", make: "GEW", capacity: "20 MM", qty: "1" },
      { serial: "04", name: "Air Compressor", make: "Magnum", capacity: "High Pressure", qty: "1" }
    ]
  };

  const getFilteredData = () => {
    const list = machineryData[activeTab];
    if (!searchQuery) return list;
    return list.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.capacity.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Navigation */}
      <Navbar activePage="about" />

      {/* --- About Hero Section --- */}
      <section className="relative pt-32 pb-24 bg-slate-950 border-b border-white/5 overflow-hidden">
         {/* Grid lines decoration */}
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6"
                  >
                    ABOUT_LBAP // CORPORATE_PROFILE_V4
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]"
                  >
                     THE ARCHITECTURE <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">OF INDUSTRIAL PRECISION</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium"
                  >
                     Laxmi Balaji Automotive Products Pvt. Ltd. (LBAP) represents three decades of zero-defect metal stamping, clinical tool design, and robotic component sub-assemblies. Managed by hardcore technocrats, we serve as a trusted tier-1 strategic partner to global automotive platforms.
                  </motion.p>
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
               <div className="lg:col-span-7">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">LBAP HERITAGE</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight">Our Company Story</h2>
                  <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed font-medium font-sans">
                     <p>
                        Established in 1994 as a boutique fabrication and precision tooling shop in Hosur, Laxmi Balaji was born out of a commitment to resolve the critical engineering constraints faced by Indian commercial vehicle manufacturers. Founded and managed by technocrats with over two decades of experience in the automotive industry in Development, Quality, and Supply Chain Management (SCM), we earned key contracts with prominent commercial automotive brands.
                     </p>
                     <p>
                        By 2005, as global passenger vehicle makers established Indian footprints, LBAP expanded into robotic welding networks and high-tonnage mechanical stamping cells. We invested heavily in computerised quality gates, establishing our first certified clean inspection cleanroom.
                     </p>
                     <p>
                        Today, operating from our state-of-the-art facilities in the SIPCOT Industrial Complex, LBAP produces millions of high-tensile components monthly. Our structural stampings, engine brackets, and EV battery enclosures support clean mobility initiatives globally, proving that clinical precision and local manufacturing autonomy can empower international markets.
                     </p>
                  </div>
               </div>
               
               <div className="lg:col-span-5 relative">
                  {/* Image Grid with rich hover effect */}
                  <div className="grid grid-cols-12 gap-4">
                     <div className="col-span-7 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group">
                        <motion.img 
                          whileHover={{ scale: 1.05, filter: "none" }}
                          transition={{ duration: 0.5 }}
                          src="http://lbap.in/img/machinieries/4.jpg" 
                          alt="Heavy stamping press machinery" 
                          className="w-full h-[320px] object-cover grayscale opacity-40 group-hover:opacity-85 transition-all duration-300"
                        />
                     </div>
                     <div className="col-span-5 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group self-end">
                        <motion.img 
                          whileHover={{ scale: 1.05, filter: "none" }}
                          transition={{ duration: 0.5 }}
                          src="http://lbap.in/img/machinieries/11.jpg" 
                          alt="Stamping lines inspection" 
                          className="w-full h-[220px] object-cover grayscale opacity-30 group-hover:opacity-80 transition-all duration-300"
                        />
                     </div>
                     <div className="col-span-12 rounded-xl overflow-hidden border border-white/5 bg-slate-900 group">
                        <motion.img 
                          whileHover={{ scale: 1.03, filter: "none" }}
                          transition={{ duration: 0.5 }}
                          src="http://lbap.in/img/machinieries/10.jpg" 
                          alt="Automated logistics warehouse dispatch" 
                          className="w-full h-[180px] object-cover grayscale opacity-25 group-hover:opacity-75 transition-all duration-300"
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
                 className="bg-[#0F1319] border border-white/5 p-10 rounded-2xl relative overflow-hidden group hover:border-[#0B96AC]/50 transition-all duration-300 flex flex-col justify-between"
               >
                  <div>
                    <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center mb-8 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                       <Eye className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Corporate Vision</h3>
                    <p className="text-[#0B96AC] text-sm font-semibold italic mb-4 font-sans leading-relaxed">
                       "Laxmi Balaji Automotive Products Pvt Ltd's vision for the future is seen through the keen eye of the present. We are well aware that we must lay the foundation today for a future that is promising and abreast Technology."
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                       To lead the global automotive transition to sustainable, zero-defect chassis platforms by continuously digitising metallurgical processes, reducing environmental overheads, and establishing local technology hubs.
                    </p>
                  </div>
                  <div className="mt-8 font-mono text-[9px] text-[#0B96AC]/20 select-none uppercase tracking-widest font-black text-right">
                     VISION_SYSTEM // ON
                  </div>
               </motion.div>

               {/* Mission Panel */}
               <motion.div 
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-10 rounded-2xl relative overflow-hidden group hover:border-[#0B96AC]/50 transition-all duration-300 flex flex-col justify-between"
               >
                  <div>
                    <div className="w-12 h-12 bg-slate-900 border border-white/5 rounded-lg flex items-center justify-center mb-8 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                       <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Corporate Mission</h3>
                    <p className="text-[#0B96AC] text-sm font-semibold italic mb-4 font-sans leading-relaxed">
                       "The continuous development of a company that partners customers in their progress.... delivering products.... on time.... evertime. Targeting always to surpass their expectations of us."
                    </p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">
                       To engineer chassis and structural component stability with clinical precision, guaranteeing OEM supply line efficiency, upholding the highest safety margins, and delivering direct value to local communities.
                    </p>
                  </div>
                  <div className="mt-8 font-mono text-[9px] text-[#0B96AC]/20 select-none uppercase tracking-widest font-black text-right">
                     MISSION_EXEC // ON
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- Core Values (Unified Grid) --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">LBAP FOUNDATIONAL PRINCIPLES</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Core Values</h2>
               <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 font-medium font-sans">
                  These operational values form the baseline code for every design matrix, welding cell, and logistics dispatch we execute.
               </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
               {[
                 { title: "Precision First", desc: "No tolerances are compromised. We operate down to the micron, enforcing total metallurgical stability.", icon: Target },
                 { title: "Clinical Compliance", desc: "We adhere strictly to IATF 16949 system standards, leaving clear data footprints for every batch.", icon: Award },
                 { title: "Eco-Efficiency", desc: "Our 3.5MW solar matrix and water circular towers offset the environmental footprint of our shop floors.", icon: Zap },
                 { title: "Client Synergy", desc: "We co-engineer structural node designs directly with OEM teams, ensuring rapid prototyping and deployment.", icon: Users },
                 { title: "Personal Integrity", desc: "Commitment to absolute honesty, moral principles, and transparency in all actions and business cycles.", icon: ShieldCheck },
                 { title: "Social Responsibility", desc: "Upholding community welfare through targeted student sponsorships, elder aid, and active tree plantation.", icon: Heart },
                 { title: "Trust & Accountability", desc: "Accepting complete ownership for the components we supply, backing our Tier-1 relationships with metrics.", icon: CheckCircle2 },
                 { title: "Team Work", desc: "Fostering collaboration across SCM, design labs, and machining floors to drive unified efficiency.", icon: Compass },
                 { title: "Knowledge Enhancement", desc: "Continuously training our workforce and upgrading shop floor equipment to remain abreast of technological shifts.", icon: BookOpen }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   variants={fadeInUp}
                   whileHover={{ y: -5, borderColor: "rgba(11, 150, 172, 0.5)" }}
                   className="bg-[#0F1319] border border-white/5 p-6 rounded-xl flex flex-col justify-between group transition-all duration-300"
                 >
                    <div>
                      <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-colors">
                         <item.icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-medium font-sans">
                         {item.desc}
                      </p>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* --- Infrastructure & Manufacturing Capabilities --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,#090B0E_100%)] pointer-events-none"></div>
         <div className="container-custom">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
               <div className="max-w-2xl">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">MANUFACTURING ASSETS</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">Infrastructure & Shop Floor</h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 font-medium font-sans leading-relaxed">
                     Laxmi Balaji operates an advanced infrastructural setup in the SIPCOT Industrial Complex, Hosur. From high-speed progressive metal stamping lines to CNC 3-axis tube benders, our facility is engineered to run high-volume mass production under clinical quality gates.
                  </p>
               </div>

               {/* Stats display */}
               <div className="flex gap-8 border-l border-white/10 pl-8">
                  <div>
                     <span className="text-3xl font-black font-mono text-white block">250T</span>
                     <span className="text-[8px] font-mono text-[#0B96AC] uppercase tracking-wider">MAX PRESS TONNAGE</span>
                  </div>
                  <div>
                     <span className="text-3xl font-black font-mono text-white block">CNC</span>
                     <span className="text-[8px] font-mono text-[#0B96AC] uppercase tracking-wider">TUBE BENDING & LASER</span>
                  </div>
               </div>
            </div>

            {/* Machinery Console Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* Controls and Highlights */}
               <div className="lg:col-span-4 space-y-6">
                  <div className="bg-[#0F1319] border border-white/5 rounded-xl p-6">
                     <span className="text-[9px] font-mono text-slate-500 uppercase block mb-4">FILTER MACHINERY CATEGORY</span>
                     
                     <div className="flex flex-col gap-2">
                        {[
                          { id: 'press', label: 'Stamping Press Lines', count: machineryData.press.length },
                          { id: 'fab', label: 'Welding & Fabrication', count: machineryData.fab.length },
                          { id: 'drill', label: 'Drilling & Auxiliaries', count: machineryData.drill.length }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id as any); setSearchQuery(''); }}
                            className={`flex items-center justify-between px-4 py-3 rounded text-xs font-bold uppercase tracking-wider border transition-all ${
                              activeTab === tab.id 
                                ? 'bg-[#0B96AC]/15 border-[#0B96AC] text-white' 
                                : 'bg-transparent border-white/5 text-slate-400 hover:border-white/10 hover:text-white'
                            }`}
                          >
                             <span>{tab.label}</span>
                             <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded text-[10px]">{tab.count}</span>
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="bg-[#0F1319] border border-white/5 rounded-xl p-6 relative overflow-hidden">
                     <div className="absolute right-4 bottom-4 text-[#0B96AC]/5 select-none pointer-events-none">
                        <Settings className="w-32 h-32 animate-[spin_40s_linear_infinite]" />
                     </div>
                     <span className="text-[9px] font-mono text-[#0B96AC] uppercase tracking-widest block mb-2">SHOP FLOOR UTILITIES</span>
                     <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Auxiliary Facilities</h4>
                     <ul className="space-y-2 text-slate-400 text-xs font-medium font-sans">
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-[#0B96AC] rounded-full"></span>
                           3 Ton Overhead Crane for heavy coil transfers
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-[#0B96AC] rounded-full"></span>
                           Strips Racks & Finished Goods Storage arrays
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-[#0B96AC] rounded-full"></span>
                           Dedicated Tool Storage & Maintenance room
                        </li>
                        <li className="flex items-center gap-2">
                           <span className="w-1 h-1 bg-[#0B96AC] rounded-full"></span>
                           Cleanroom Metrology inspection clean zone
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Interactive Live Catalog Table */}
               <div className="lg:col-span-8 bg-[#0F1319] border border-white/5 rounded-xl p-6 flex flex-col justify-between">
                  <div>
                     {/* Search bar */}
                     <div className="flex items-center gap-3 bg-slate-950 border border-white/5 rounded px-4 py-2 mb-6">
                        <Search className="w-4 h-4 text-slate-500" />
                        <input
                          type="text"
                          placeholder="Search machine name, make, capacity..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="bg-transparent border-none text-white text-xs font-medium focus:ring-0 focus:outline-none w-full placeholder-slate-650"
                        />
                     </div>

                     <div className="overflow-x-auto max-h-[360px] overflow-y-auto pr-1">
                        <table className="w-full text-left text-xs font-medium font-sans">
                           <thead>
                              <tr className="border-b border-white/10 text-slate-500 font-mono text-[9px] uppercase tracking-wider">
                                 <th className="pb-3 pl-2">S.No</th>
                                 <th className="pb-3">Name of Machine</th>
                                 <th className="pb-3">Make</th>
                                 <th className="pb-3">Capacity</th>
                                 <th className="pb-3 pr-2 text-right">Qty</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-white/5">
                              {getFilteredData().length > 0 ? (
                                getFilteredData().map((machine, index) => (
                                  <tr key={index} className="hover:bg-white/5 transition-colors group">
                                     <td className="py-3 pl-2 font-mono text-[#0B96AC]">{machine.serial}</td>
                                     <td className="py-3 font-semibold text-white group-hover:text-[#0B96AC] transition-colors">{machine.name}</td>
                                     <td className="py-3 text-slate-400">{machine.make}</td>
                                     <td className="py-3"><span className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-mono text-slate-300">{machine.capacity}</span></td>
                                     <td className="py-3 pr-2 text-right font-mono text-white">{machine.qty}</td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                   <td colSpan={5} className="py-8 text-center text-slate-500 font-mono text-[10px]">NO ASSETS FOUND MATCHING SYSTEM QUERY</td>
                                </tr>
                              )}
                           </tbody>
                        </table>
                     </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-slate-500">
                     <span>SHOWING {getFilteredData().length} OF {machineryData[activeTab].length} CLUSTER ASSETS</span>
                     <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        METRICS STATUS: CALIBRATED
                     </span>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* --- Expandable / Interactive Timeline --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">30 YEAR TRAJECTORY LOG</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Timeline & Milestones</h2>
               <p className="text-slate-400 text-xs sm:text-sm mt-2 font-medium font-sans">
                  A legacy of process validation, capacity growth, and customer partnerships.
               </p>
            </div>

            <div className="max-w-4xl mx-auto">
               {/* Timeline selector bar */}
               <div className="flex justify-between items-center relative border-b border-white/10 pb-6 mb-12">
                  <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white/10"></div>
                  
                  {[
                    { year: "1994", tag: "INCEPTION" },
                    { year: "2002", tag: "HEAVY PRESS" },
                    { year: "2010", tag: "IATF COMPLIANT" },
                    { year: "2018", tag: "EV SYSTEMS" },
                    { year: "2026", tag: "NET-ZERO" }
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTimelineIndex(idx)}
                      className="flex flex-col items-center relative group z-10"
                    >
                      <span className={`text-[10px] font-mono tracking-widest mb-3 transition-colors ${
                        selectedTimelineIndex === idx ? 'text-[#0B96AC] font-black' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {item.year}
                      </span>
                      
                      {selectedTimelineIndex === idx && (
                        <motion.div 
                          layoutId="activeTimelineUnderline"
                          className="absolute bottom-6 left-0 right-0 h-[2px] bg-[#0B96AC]"
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                      )}

                      <div className="w-4 h-4 rounded-full border border-white/10 bg-slate-950 flex items-center justify-center relative">
                        {selectedTimelineIndex === idx ? (
                          <motion.div 
                            layoutId="activeTimelineBullet"
                            className="w-2.5 h-2.5 bg-[#0B96AC] rounded-full"
                          />
                        ) : (
                          <div className="w-1.5 h-1.5 bg-slate-800 group-hover:bg-slate-600 rounded-full" />
                        )}
                      </div>
                    </button>
                  ))}
               </div>

               {/* Active Timeline Card */}
               <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTimelineIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F1319] border border-white/5 p-8 lg:p-12 rounded-xl relative overflow-hidden"
                  >
                     <div className="absolute right-6 bottom-6 font-mono text-[9px] text-[#0B96AC]/5 select-none tracking-widest font-black uppercase pointer-events-none">
                        SYSTEM_MARK // {selectedTimelineIndex + 1}
                     </div>

                     <div className="lg:col-span-8 space-y-4">
                        <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest block uppercase font-bold">
                           {[
                             "Corporate Inception & Hosur Site Inception", 
                             "Heavy Tonnage Press Array Setup", 
                             "Clinical Standards Audits", 
                             "Lightweight EV Framing Solutions", 
                             "Solar Integration & Sustainable Power"
                           ][selectedTimelineIndex]}
                        </span>
                        
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                           {[
                             "1994 // Local Press Shop Origin",
                             "2002 // Tonnage Capacity Scaling",
                             "2010 // Global Automotive Compliance",
                             "2018 // Lightweight EV Systems",
                             "2026 // Net-Zero Stamping Matrix"
                           ][selectedTimelineIndex]}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed font-sans font-medium">
                           {[
                             "LBAP begins manufacturing in Hosur in a 3,000 sq.ft. workshop, specializing in precision sheet metal fabrication and custom tooling assemblies. Managed by technocrats with decades of industry experience.",
                             "Acquisition of our first 800-ton hydraulic stamping press, launching the high-volume chassis reinforcements line and increasing our sheet metal stamping output capability substantially.",
                             "First in the region to achieve compliance with global automotive system regulations (IATF 16949), expanding export contracts and securing key Tier-1 positions.",
                             "Inauguration of the dedicated EV Structural Components cluster, co-engineering lightweight battery framing cells and structural sheet metal plates.",
                             "Commissioning of the 3.5MW rooftop photovoltaic matrix, achieving 100% operational energy autonomy on the main pressing clusters and decoupling from grid spikes."
                           ][selectedTimelineIndex]}
                        </p>
                     </div>

                     <div className="lg:col-span-4 bg-slate-950 border border-white/5 p-6 rounded-lg text-center flex flex-col justify-center items-center h-full">
                        <Award className="w-8 h-8 text-[#0B96AC] mb-3 animate-pulse" />
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">IMPACT SCORE</span>
                        <span className="text-xs font-bold text-white uppercase font-mono">
                           {[
                             "Origin Established",
                             "800T Press Line",
                             "IATF 16949 Audited",
                             "EV Cluster Active",
                             "3.5MW Rooftop Array"
                           ][selectedTimelineIndex]}
                        </span>
                     </div>
                  </motion.div>
               </AnimatePresence>
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
                    src="http://lbap.in/img/abt.jpg" 
                    alt="Corporate management representation" 
                    className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/10"></div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Corporate Social Responsibility (CSR) & Community Impact --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">SOCIAL RESPONSIBILITY</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">CSR & Community Impact</h2>
               <p className="text-slate-400 text-xs sm:text-sm mt-2 font-medium font-sans">
                  We believe that sustainable industrial growth goes hand in hand with upliftment of our surrounding rural communities.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Trees card */}
               <motion.div
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-[#0B96AC]/40 transition-colors"
               >
                  <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-emerald-400">
                     <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                     <span className="text-5xl font-black text-white font-mono">
                        <AnimatedCounter value={100} suffix="+" />
                     </span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Tree Plantation Program</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                     Actively planning, planting, and maintaining over 100+ native trees in the local communities of Hosur to build green buffers.
                  </p>
               </motion.div>

               {/* Education card */}
               <motion.div
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-[#0B96AC]/40 transition-colors"
               >
                  <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-amber-400">
                     <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                     <span className="text-5xl font-black text-white font-mono">
                        <AnimatedCounter value={40} suffix="+" />
                     </span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Rural Education Support</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                     Adopting 5 poor rural students per year for the past 12 years. Our graduates are now working in MNCs, hospitals, and government sectors.
                  </p>
               </motion.div>

               {/* Elderly support card */}
               <motion.div
                 variants={fadeInUp}
                 initial="initial"
                 whileInView="whileInView"
                 className="bg-[#0F1319] border border-white/5 p-8 rounded-xl relative overflow-hidden group hover:border-[#0B96AC]/40 transition-colors"
               >
                  <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-rose-400">
                     <Heart className="w-5 h-5" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                     <span className="text-5xl font-black text-white font-mono">
                        <AnimatedCounter value={50} suffix="+" />
                     </span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Elderly Financial & Medical Aid</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                     Providing monthly cash support (INR 500/month) to 50+ elderly, and donating INR 2,00,000 annually for daily essentials and medical expenses.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- Company Strengths (Bento Grid Dashboard) --- */}
      <section className="py-24 bg-slate-950 relative">
         <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">OPERATIONAL SUPERIORITY LOG</span>
               <h2 className="text-3xl font-black text-white uppercase tracking-tight">Our Key Strengths</h2>
               <p className="text-slate-455 text-xs sm:text-sm mt-2 font-medium font-sans">
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
                     <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium font-sans">
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
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Manufacturing Plants</span>
                           <span className="text-2xl font-black text-white font-mono"><AnimatedCounter value={12} /></span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Strategic OEM Nodes</span>
                           <span className="text-2xl font-black text-white font-mono"><AnimatedCounter value={28} /></span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-3">
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Design Patents</span>
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
                        <Zap className="w-5 h-5 text-teal-400 shrink-0" />
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
