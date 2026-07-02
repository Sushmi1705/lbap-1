import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

const Career = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rd' | 'qc' | 'tool'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');

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

  // Expanded engineering job profiles catalog
  const jobPositions = [
    { 
      id: 1,
      title: "Precision Tool Designer", 
      type: "FULL TIME", 
      loc: "Gurgaon Plant", 
      role: "tool", 
      roleName: "Tool & Die",
      posted: "Posted 2d ago",
      desc: "Configure progressive die layouts for 800T automatic stamping press cells."
    },
    { 
      id: 2,
      title: "QA Metrology Specialist", 
      type: "FULL TIME", 
      loc: "Pune HQ", 
      role: "qc", 
      roleName: "Quality Control",
      posted: "Posted 4d ago",
      desc: "Coordinate sub-micron scanning audits using Zeiss CMM units within cleanroom lab environments."
    },
    { 
      id: 3,
      title: "Fabrication Process Engineer", 
      type: "FULL TIME", 
      loc: "Gurgaon Plant", 
      role: "rd", 
      roleName: "R&D",
      posted: "Posted 1w ago",
      desc: "Configure multi-axis robotic welding cells and coordinate spot welding paths."
    },
    { 
      id: 4,
      title: "CNC Milling Technician", 
      type: "FULL TIME", 
      loc: "Hosur Unit", 
      role: "tool", 
      roleName: "Tool & Die",
      posted: "Posted 3d ago",
      desc: "Configure Matsuura horizontal centers for progressive stamping die mold manufacturing."
    },
    { 
      id: 5,
      title: "Automation SCADA Engineer", 
      type: "FULL TIME", 
      loc: "Pune HQ", 
      role: "rd", 
      roleName: "R&D",
      posted: "Posted 5d ago",
      desc: "Manage factory automation control loops, SCADA networks, and PLC configuration updates."
    },
    { 
      id: 6,
      title: "Press Shop Operations Lead", 
      type: "FULL TIME", 
      loc: "Hosur Unit", 
      role: "tool", 
      roleName: "Tool & Die",
      posted: "Posted 1w ago",
      desc: "Oversee Seyi progressive press line feeds, coil handling systems, and scrap conveyors."
    }
  ];

  // Dynamic filter logic
  const filteredJobs = jobPositions.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.role === activeCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === 'All Locations' || job.loc === locationFilter;
    return matchesCategory && matchesSearch && matchesLocation;
  });

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned Career Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Engineering console */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="/career_hero_bg.png" 
            alt="Corporate career path staircase layout" 
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
                <span>Join the</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  Engineering Elite
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                LBAP is not just a factory; it's a precision laboratory. We are looking for the next generation of engineers to define the future of automotive excellence.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Structured Engineering Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>CMM & Metrology Practical Labs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>Automated SCADA Control training</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>98% High-Retention Work Culture</span>
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
                  href="#openings" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Explore Openings <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#culture"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  View pathways
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
                    TALENT INDEX
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">EXCELLENT</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-500">Retention Ratio</span>
                    <span className="text-[#00A7FF] font-bold">98.2%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">Average Tenure</span>
                    <span className="text-slate-800">5.4 Years</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-505">Mentee Output</span>
                    <span className="text-slate-800">120 / Year</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>QA LEVEL: ISO_9001</span>
                  <span>CAL_OK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Life at LBAP Section --- */}
      <section id="culture" className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            
            {/* Testimonial Box */}
            <div className="lg:col-span-7 bg-[#F4F7FA] border border-slate-200/60 p-12 lg:p-16 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm animate-border-shimmer">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#00A7FF]"></div>
              
              <div className="space-y-6">
                <div className="text-[#00A7FF] mb-4">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 17.5C0 7.83502 7.83502 0 17.5 0V12.5C17.5 15.2614 15.2614 17.5 12.5 17.5H0ZM22.5 17.5C22.5 7.83502 30.335 0 40 0V12.5C40 15.2614 37.7614 17.5 35 17.5H22.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight tracking-tight uppercase">
                  "From Junior Intern to Lead Tool Designer in 4 years."
                </h3>
                <p className="text-slate-550 text-xs sm:text-sm leading-relaxed italic font-medium max-w-xl font-sans">
                  "The mentorship program here is unparalleled. At LBAP, you don't just work on parts; you understand the core physics of mechanical press tooling. Every sub-micron parameter matters."
                </p>
              </div>

              <div className="flex items-center gap-5 mt-10 pt-6 border-t border-slate-200/60">
                {/* Visual profile border using brand orange */}
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#FF5C00] shadow-md shadow-[#FF5C00]/25 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                    alt="Rahul Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">RAHUL SHARMA</h4>
                  <p className="text-[10px] font-bold text-[#FF5C00] uppercase tracking-widest mt-1">LEAD TOOLING ENGINEER</p>
                </div>
              </div>
            </div>

            {/* R&D Sandbox Box - Solid Royal Blue Background */}
            <div className="lg:col-span-5 bg-[#000EDD] p-12 lg:p-16 rounded-xl flex flex-col justify-between text-white shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              <div className="space-y-4">
                <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-widest block">DEVELOPMENT CORE</span>
                <h3 className="text-2xl font-black tracking-tight uppercase">The R&D Sandbox</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  Our Quality Control lab operates on automated real-time SCADA sensor analytics. We do not just log errors; we perform stress and progressive wear simulations to correct them beforehand.
                </p>
              </div>
              <div className="mt-8 rounded-lg overflow-hidden border border-white/10 shadow-sm aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" 
                  alt="R&D Lab" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Collaborative Culture */}
            <div className="lg:col-span-4 bg-white border border-slate-200/60 p-8 flex flex-col items-center text-center rounded-xl shadow-sm animate-border-shimmer relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              
              <div className="w-10 h-10 bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#00A7FF] rounded-lg mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Collaborative Culture</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[240px] font-sans font-medium">
                Cross-functional teams that bridge the gap between progressive metal tool design and physical press floor runs.
              </p>
            </div>

            {/* Retention Rate */}
            <div className="lg:col-span-8 bg-white border border-slate-200/60 p-8 flex flex-col md:flex-row items-center gap-10 rounded-xl shadow-sm animate-border-shimmer relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20"></div>
              
              <div className="flex flex-col items-center md:items-start shrink-0">
                <span className="text-6xl font-black text-[#00A7FF] leading-none mb-1 tracking-tight">98%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Retention Rate</span>
              </div>
              <div className="hidden md:block w-px h-16 bg-slate-100"></div>
              <p className="text-slate-505 text-xs sm:text-sm leading-relaxed max-w-md font-sans font-medium">
                Our active focus on internal training programs and structured promotions ensures our talent base remains consistent. We build engineering careers, not just fill plant roster seats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Growth Pathway Section --- */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="container-custom">
          
          <div className="text-center mb-16">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              CAREER MATRIX
            </span>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Technical Growth Pathway</h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4 mx-auto"></div>
          </div>
           
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: "01", title: "Foundations", desc: "6-months focus on metallurgy sciences, sheet metal physical properties, and stamping press physics.", active: false },
              { step: "02", title: "Specialization", desc: "Configure complex progressive die runs and master Zeiss coordinate metrology inspection setups.", active: false },
              { step: "03", title: "Operational Lead", desc: "Manage high-tonnage mechanical press blocks and coordinate lineside JIT logistics operations.", active: false },
              { step: "04", title: "Chief Engineer", desc: "Drive technical process innovations, circular water loops, and solar SCADA integrations globally.", active: true }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className={`p-10 border transition-all rounded-xl relative overflow-hidden group flex flex-col justify-between ${
                  item.active 
                    ? 'bg-[#00A7FF] border-[#000EDD] text-white shadow-lg shadow-[#00A7FF]/15' 
                    : 'bg-white border-slate-200/60 text-slate-800'
                }`}
              >
                {/* Top divider - Solid brand Sky Blue */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] z-20 ${item.active ? 'hidden' : ''}`}></div>

                <div>
                  <span className={`text-[10px] font-mono font-bold tracking-widest block mb-10 ${item.active ? 'text-white/50' : 'text-[#00A7FF]'}`}>STEP_{item.step}</span>
                  <h4 className="text-base font-bold mb-4 tracking-tight uppercase">{item.title}</h4>
                  <p className={`text-xs leading-relaxed font-sans font-medium ${item.active ? 'text-white/80' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. Available Positions (Interactive job list) --- */}
      <section id="openings" className="py-24 bg-[#FAFAFA]">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
                OPPORTUNITIES
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                Available Positions
              </h2>
              <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            </div>
            
            {/* Filter buttons with dynamic layoutId highlight */}
            <div className="flex flex-wrap gap-1.5 bg-slate-50 border border-slate-200 p-1 rounded-md relative z-10 w-full md:w-auto">
              {([
                { id: 'all', label: 'All Careers' },
                { id: 'rd', label: 'R&D' },
                { id: 'qc', label: 'Quality Control' },
                { id: 'tool', label: 'Tool & Die' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider relative transition-all rounded z-10 flex-1 md:flex-initial"
                >
                  <span className={activeCategory === tab.id ? 'text-white font-extrabold transition-colors' : 'text-slate-505 hover:text-slate-850'}>
                    {tab.label}
                  </span>
                  {activeCategory === tab.id && (
                    <motion.div 
                      layoutId="activeJobCategoryTab"
                      className="absolute inset-0 bg-[#00A7FF] rounded shadow-sm z-[-1]"
                      transition={springTransitionFast}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm animate-border-shimmer">
            {/* Search and Location Filter Bar */}
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 bg-slate-50/30">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search positions by role or keyword (e.g. progressive, metrology)..." 
                  className="w-full bg-white border border-slate-200 py-3 pl-12 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-[#00A7FF]/50 transition-all rounded-lg"
                />
              </div>
              <div className="md:w-64 relative">
                <select 
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full bg-white border border-slate-200 py-3 px-4 pr-10 text-xs font-bold text-slate-700 outline-none appearance-none focus:border-[#00A7FF]/50 transition-all cursor-pointer rounded-lg"
                >
                  <option>All Locations</option>
                  <option>Gurgaon Plant</option>
                  <option>Pune HQ</option>
                  <option>Hosur Unit</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Dynamic Jobs List */}
            <div className="divide-y divide-slate-100">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <motion.div 
                      key={job.id} 
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={springTransitionFast}
                      className="p-8 lg:p-10 hover:bg-slate-50/50 transition-all group"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex-grow space-y-4">
                          <div className="flex items-center gap-4 flex-wrap">
                            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">{job.title}</h3>
                            <span className="px-3.5 py-1.5 bg-[#00A7FF]/5 border border-[#00A7FF]/15 text-[#00A7FF] text-[9px] font-bold uppercase tracking-widest rounded-md">
                              {job.type}
                            </span>
                          </div>
                          <p className="text-slate-550 text-xs sm:text-sm font-sans font-medium max-w-2xl leading-relaxed">{job.desc}</p>
                          <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                              <MapPin className="w-4 h-4 text-[#00A7FF]" /> {job.loc}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                              <Briefcase className="w-4 h-4 text-[#00A7FF]" /> {job.roleName}
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                              <Clock className="w-4 h-4 text-[#00A7FF]" /> {job.posted}
                            </div>
                          </div>
                        </div>
                        <button className="whitespace-nowrap px-10 py-3.5 bg-[#00A7FF] hover:bg-[#000EDD] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded">
                          APPLY NOW
                        </button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-16 text-center text-slate-400 space-y-2"
                  >
                    <Briefcase className="w-8 h-8 mx-auto text-slate-350 stroke-[1.5]" />
                    <h4 className="text-xs font-bold text-slate-505 uppercase tracking-widest">No positions found</h4>
                    <p className="text-[11px] font-sans">Try widening your search query or choosing a different category filter.</p>
                  </motion.div>
                )}
              </AnimatePresence>
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

export default Career;
