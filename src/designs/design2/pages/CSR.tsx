import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Droplets, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  FileText,
  GraduationCap
} from 'lucide-react';

const CSR = () => {
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

  return (
    <div className="bg-[#FAFAFA] text-slate-800 font-['Outfit'] selection:bg-[#00A7FF]/20 selection:text-[#00A7FF] overflow-x-hidden min-h-screen">
      
      {/* --- 1. Viewport-Aligned CSR Hero Section --- */}
      <section className="relative min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center py-16 lg:py-0 bg-[#00084d] border-b border-white/10 overflow-hidden">
        {/* Background - Seedling growth inside a modern greenhouse (Natural colors with logo color overlays) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2000" 
            alt="Sprouting Seedling Greenhouse Sustainability" 
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
                <span>Sustainable Engineering</span>
                <br />
                <span className="text-[#00A7FF] drop-shadow-sm">
                  for a Greener Tomorrow
                </span>
              </motion.h1>

              {/* Sub-text */}
              <motion.p 
                variants={fadeInUp}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium font-sans"
              >
                LBAP is redefining progressive automotive stamping through a radical commitment to environmental stewardship. Our roadmap to carbon neutrality focuses on resource efficiency and emission controls.
              </motion.p>

              {/* Value checklist - Styled with Orange Accent Checkmarks */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg text-xs text-slate-200 font-bold font-sans"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>3.5MW Rooftop Solar Offsets</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>98% Zero Liquid Discharge Ratios</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>100% Reprocessed Metal Scraps</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2Icon className="w-4 h-4 text-[#FF5C00] shrink-0" />
                  <span>ISO 14001:2015 Compliant Sites</span>
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
                  href="#initiatives" 
                  className="flex items-center gap-2 bg-[#FF5C00] hover:bg-[#00A7FF] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-colors"
                >
                  Green Initiatives <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransitionFast}
                  href="#metrics"
                  className="flex items-center gap-2 border border-white/20 bg-white/10 hover:bg-white hover:text-[#000EDD] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  View compliance metrics
                </motion.a>
              </motion.div>

            </div>

            {/* Floating Carbon neutrality Widget */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransition}
                className="p-8 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-md w-full max-w-xs space-y-5 animate-border-shimmer"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h4 className="text-[#00A7FF] font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    CO2 DECARBONIZATION
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400">ACTIVE</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col pr-6 border-r border-slate-100">
                    <span className="text-4xl font-black text-slate-900 leading-none">2,190</span>
                    <span className="text-[8px] font-mono text-slate-400 mt-2">DAYS TO ZERO</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center text-[9px] font-bold mb-2">
                      <span className="text-slate-505">CARBON RE-OFFSET</span>
                      <span className="text-[#00A7FF]">64%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="w-[64%] h-full bg-[#00A7FF] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-slate-400 font-mono text-[8px] justify-between">
                  <span>LBAP GREEN HUB, SECTOR 4</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Green Factory Initiatives Section --- */}
      <section id="initiatives" className="py-24 bg-[#FAFAFA] border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              ECOSYSTEM COMMITMENT
            </span>
            <h2 className="text-3xl font-black text-slate-905 uppercase tracking-tight">
              Green Factory Initiatives
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            <p className="text-slate-505 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Our stamping facilities operate under a closed-loop metallurgy and water recycling system to minimize ecological footprints.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Zap, 
                title: "Renewable Energy Autonomy", 
                desc: "We utilize extensive rooftop photovoltaic systems (12,000+ sqm) integrated with an intelligent SCADA grid management system. This configuration dynamically routes solar offsets directly into our high-tonnage mechanical stamping press cells during high-load operational cycles.",
                stat1: "85%", stat1Label: "Grid Autonomy", stat2: "1,200", stat2Label: "CO2 Tons Saved"
              },
              { 
                icon: Droplets, 
                title: "Zero Liquid Discharge", 
                desc: "Our industrial cleaning and lubrication lines run a multi-stage closed-loop water treatment cycle. Incorporating reverse osmosis, thermal evaporation, and micron filtration, we recover and feed back 98% of operational water to reduce freshwater extraction limits.",
                stat1: "98%", stat1Label: "Recycle Ratio", stat2: "24,000", stat2Label: "Liters / Day"
              },
              { 
                icon: RefreshCw, 
                title: "Circular Metallurgy", 
                desc: "Every mechanical stamping press bed is configured with magnetic scrap sorting conveyor segments. We automatically separate CRCA, HR, and stainless steel sheet waste at the source, compressing them into dense transport bales for direct foundry smelting partners.",
                stat1: "100%", stat1Label: "Recycle Rate", stat2: "180", stat2Label: "Tons / Month"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransitionFast}
                className="bg-white border border-slate-200/60 p-8 flex flex-col justify-between h-full group overflow-hidden rounded-xl shadow-sm hover:border-[#00A7FF]/25 hover:shadow-md transition-all duration-300 animate-border-shimmer relative"
              >
                {/* Top color accent divider - Solid Royal Blue */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#000EDD] z-20"></div>

                <div className="space-y-6">
                  <div className="w-12 h-12 bg-[#00A7FF]/5 border border-[#00A7FF]/10 flex items-center justify-center text-[#00A7FF] rounded-lg group-hover:bg-[#00A7FF] group-hover:text-white transition-all duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">{item.desc}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-6 mt-8">
                  <div>
                    <p className="text-xl font-black text-[#00A7FF]">{item.stat1}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.stat1Label}</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-800">{item.stat2}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.stat2Label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 3. Community Technical Training Impact Section --- */}
      <section className="py-24 bg-white border-b border-slate-200/60">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 overflow-hidden rounded-xl border border-slate-200/60 shadow-sm animate-border-shimmer">
            
            {/* Left side details in Solid Brand Royal Blue */}
            <div className="lg:w-1/2 bg-[#000EDD] p-12 lg:p-20 flex flex-col justify-center text-white relative">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              
              <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">COMMUNITY IMPACT</span>
              <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight uppercase mb-6">
                Precision Skills for <br />the Next Generation
              </h2>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-10 font-sans font-medium max-w-md">
                The LBAP Technical Institute offers specialized vocational modules designed to train local youth in high-precision automotive engineering disciplines.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Vocational Engineering Curriculum</h4>
                    <p className="text-white/70 text-xs font-sans mt-1 leading-relaxed max-w-sm">
                      Our training cycles cover progressive tool & die machining center setups, robotic coordinate welding cell operations, and Statistical Process Control (SPC) loops.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Guaranteed Career Pathways</h4>
                    <p className="text-white/70 text-xs font-sans mt-1 leading-relaxed max-w-sm">
                      Graduates receive prioritized recruitment for structural assembly and quality control roles within our factory networks, helping build local community technical bases.
                    </p>
                  </div>
                </div>
              </div>

              <button className="self-start px-8 py-3.5 border border-white/45 bg-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#00A7FF] transition-all rounded">
                READ IMPACT REPORT
              </button>
            </div>

            {/* Right side vocational training photo */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop" 
                alt="Precision Technical Vocational Training" 
                className="w-full h-full object-cover grayscale brightness-90 contrast-125"
              />
              <div className="absolute inset-0 bg-[#00A7FF]/5 mix-blend-overlay"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. Sustainability Roadmap to 2030 --- */}
      <section className="py-24 bg-white border-b border-slate-200/60 relative">
        <div className="container-custom">
          
          <div className="mb-16 max-w-2xl">
            <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-3 block">
              DECARBONIZATION TIMELINE
            </span>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
              Sustainability Roadmap to 2030
            </h2>
            <div className="w-20 h-[3px] bg-[#00A7FF] mt-4"></div>
            <p className="text-slate-505 text-xs sm:text-sm mt-4 font-medium font-sans leading-relaxed">
              Our structured path towards achieving fully carbon-neutral mechanical stamping and assembly operations across our corporate footprint.
            </p>
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
                year: "2024",
                title: "Energy Transition Phase",
                desc: "Complete the installation of 12,000+ sqm of high-efficiency rooftop photovoltaic solar arrays across all primary mechanical press lines.",
                status: "COMPLETED",
                statusClass: "text-[#00A7FF] bg-[#00A7FF]/5 border-[#00A7FF]/10"
              },
              {
                year: "2026",
                title: "Circular Loop Integration",
                desc: "Establish closed-loop metallurgical scrap baling systems and achieve 98% Zero Liquid Discharge water recovery across cleaning lines.",
                status: "IN PROGRESS",
                statusClass: "text-amber-600 bg-amber-55 border-amber-100"
              },
              {
                year: "2028",
                title: "Scope 3 Supply Chain Audit",
                desc: "Initiate joint carbon audits with steel and aluminum coil suppliers, prioritizing sourcing of certified low-carbon recycled metals.",
                status: "PLANNED",
                statusClass: "text-slate-505 bg-slate-55 border-slate-100"
              },
              {
                year: "2030",
                title: "Net-Zero Stamping Goal",
                desc: "Achieve complete carbon neutrality across all 12 operational manufacturing plants, verified under international audit standards.",
                status: "TARGET",
                statusClass: "text-[#FF5C00] bg-[#FF5C00]/5 border-[#FF5C00]/10"
              }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={springTransitionFast}
                className="bg-white border border-slate-200/60 p-8 rounded-xl shadow-sm animate-border-shimmer relative flex flex-col justify-between group"
              >
                {/* Top divider - Solid brand Sky Blue */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A7FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl z-20"></div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-[#000EDD] font-mono tracking-tight">{milestone.year}</span>
                    <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-1 border rounded ${milestone.statusClass}`}>
                      {milestone.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">{milestone.title}</h4>
                  <p className="text-slate-505 text-xs leading-relaxed font-sans font-medium">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- 5. Environmental Metric SCADA Table Section --- */}
      <section id="metrics" className="py-24 bg-[#FAFAFA]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="container-custom"
        >
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div>
              <span className="text-[#00A7FF] text-[10px] font-bold uppercase tracking-[0.25em] mb-2 block">
                COMPLIANCE INDEX
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                Environmental Metrics Monitoring
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 font-medium font-sans">
                Live compliance matrix tracked from our central SCADA node ensuring ISO 14001:2015 environmental standards.
              </p>
            </div>
            
            <div className="flex gap-10 bg-white border border-slate-200/60 px-6 py-4 rounded-xl shadow-sm animate-border-shimmer">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">SCADA NODE ID</p>
                <p className="text-xs font-bold text-slate-800 font-mono">LBAP-HQ-G1</p>
              </div>
              <div className="border-l border-slate-100 pl-10">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">NODE STATUS</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[#00A7FF] text-xs font-bold uppercase tracking-wider">OPTIMAL</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="overflow-hidden border border-slate-200/80 rounded-xl bg-white shadow-sm animate-border-shimmer">
            <table className="w-full text-left">
              <thead className="bg-[#000EDD] text-white border-b border-[#000EDD]/10">
                <tr>
                  <th className="p-6 text-[10px] font-bold tracking-widest uppercase">ENVIRONMENTAL PARAMETER</th>
                  <th className="p-6 text-[10px] font-bold tracking-widest uppercase">UNIT INDEX</th>
                  <th className="p-6 text-[10px] font-bold tracking-widest uppercase">REGULATORY LIMIT</th>
                  <th className="p-6 text-[10px] font-bold tracking-widest uppercase">LBAP CURRENT VALUE</th>
                  <th className="p-6 text-[10px] font-bold tracking-widest uppercase">COMPLIANCE STATUS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { param: "Emission Intensity", unit: "kg CO2e / stamped unit", threshold: "0.45 Max", value: "0.28", status: "STABLE", complianceColor: "text-[#00A7FF] bg-[#00A7FF]/5 border-[#00A7FF]/10" },
                  { param: "Factory Energy Consumption", unit: "MWh / operating month", threshold: "850 Max", value: "712", status: "STABLE", complianceColor: "text-[#00A7FF] bg-[#00A7FF]/5 border-[#00A7FF]/10" },
                  { param: "Metallurgical Waste Diversion", unit: "% Total Metal Scrap Mass", threshold: "95.00 Min", value: "99.40", status: "SUPERIOR", complianceColor: "text-[#FF5C00] bg-[#FF5C00]/5 border-[#FF5C00]/10" },
                  { param: "Industrial Water Recycled", unit: "Liters / operating day", threshold: "20,000 Min", value: "23,840", status: "SUPERIOR", complianceColor: "text-[#FF5C00] bg-[#FF5C00]/5 border-[#FF5C00]/10" },
                  { param: "Ambient Particulate Matter (PM)", unit: "µg/m³ ambient air", threshold: "50.0 Max", value: "28.5", status: "STABLE", complianceColor: "text-[#00A7FF] bg-[#00A7FF]/5 border-[#00A7FF]/10" },
                  { param: "Volatile Organic Compounds (VOC)", unit: "ppm (degreasing baths)", threshold: "15.0 Max", value: "8.2", status: "STABLE", complianceColor: "text-[#00A7FF] bg-[#00A7FF]/5 border-[#00A7FF]/10" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-sky-50/40 transition-colors">
                    <td className="p-6 text-sm font-bold text-slate-800">{row.param}</td>
                    <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.unit}</td>
                    <td className="p-6 text-xs text-slate-500 font-medium font-sans">{row.threshold}</td>
                    <td className="p-6 text-xs text-[#00A7FF] font-bold font-mono">{row.value}</td>
                    <td className="p-6">
                      <span className={`text-[9px] font-bold tracking-widest uppercase py-1 px-3 border rounded ${row.complianceColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </motion.div>
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

export default CSR;
