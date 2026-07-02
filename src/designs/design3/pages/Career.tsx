import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  ChevronRight,
  Target
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Career = () => {
  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Sticky Header */}
      <Navbar activePage="career" />

      {/* --- Career Hero Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    HUMAN_CAPITAL // SYSTEMS_ENGINEERING
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.05] uppercase">
                     The Future of <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">Mobility</span> Begins Here
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium">
                     Engineered for precision. Driven by innovation. LBAP is recruiting the next generation of automotive engineers to redefine high-performance manufacturing.
                  </p>
                  <div className="flex gap-4">
                     <button className="bg-[#0B96AC] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/20 hover:bg-[#097b8d] transition-all">
                       View Open Positions
                     </button>
                     <button className="bg-slate-900 border border-white/10 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded hover:bg-slate-800 transition-all">
                       Engineering Ethos
                     </button>
                  </div>
               </div>
               
               <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-slate-900">
                     <img 
                        src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=1200&auto=format&fit=crop" 
                        alt="Advanced Manufacturing Lab" 
                        className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Engineering Career Roadmap Section --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Professional Trajectory</span>
               <h2 className="text-3xl font-black tracking-tighter uppercase text-white mb-4">Engineering Roadmap</h2>
               <p className="text-slate-400 text-sm max-w-2xl font-medium">
                  Our structured trajectory for new hires ensures technical mastery within 24 months. Precision training for precision manufacturing.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div>
                    <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-4 block">01 // INITIAL_ORIENTATION</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">System Fundamentals</h3>
                    <p className="text-slate-450 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Deep dive into LBAP proprietary manufacturing protocols, CNC precision standards, and automated assembly line architecture.
                    </p>
                  </div>
               </div>
               
               <div className="bg-[#0B96AC] text-white p-8 rounded-xl flex flex-col justify-between shadow-2xl shadow-[#0B96AC]/10">
                  <div>
                    <span className="text-white/60 text-[9px] font-mono tracking-widest mb-4 block">02 // ACTIVE_MENTORSHIP</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Technical Shadowing</h3>
                    <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Partner with a Senior Lead Engineer to optimize troubleshooting cycles on active chassis production lines.
                    </p>
                  </div>
                  <Users className="w-6 h-6 text-white/40" />
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div>
                    <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-4 block">03 // ADVANCED_LABS</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">R&D Sprint</h3>
                    <p className="text-slate-455 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Propose and prototype a single-component optimization for existing drive-train assemblies and EV cells.
                    </p>
                  </div>
               </div>
            </div>
            
            <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
               <div>
                  <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-2 block">04 // LEADERSHIP_STAGE</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Lead Systems Architect</h3>
               </div>
               <div className="flex items-center gap-12">
                  <div className="text-center">
                     <span className="text-4xl font-black text-white tracking-tighter block font-mono">24</span>
                     <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">MONTH TIMELINE</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <p className="text-[11px] font-semibold text-slate-400 max-w-[200px] leading-relaxed">Graduation into full product ownership within the Advanced Mobility Division.</p>
                     <CheckCircle2 className="w-5 h-5 text-[#0B96AC]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Mentorship Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                    alt="Mentorship and Training" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
               </div>
               
               <div className="lg:col-span-6">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Knowledge Transfer Protocols</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">Clinical Precision Mentorship</h2>
                  <p className="text-slate-450 text-sm leading-relaxed mb-8 font-medium">
                     Our mentorship program is not an informal pairing. It is a documented technical curriculum where Senior Engineers transfer decades of automotive intellectual property.
                  </p>
                  <ul className="space-y-4">
                     {[
                        "Bi-weekly technical code reviews and schematic audits.",
                        "Direct access to the LBAP Global Patents database.",
                        "Quarterly rotations through Design, Production, and Logistics."
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <CheckCircle2 className="w-4.5 h-4.5 text-[#0B96AC] shrink-0" />
                           <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- Open Positions --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
               <div>
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Active Recruitment</span>
                  <h2 className="text-3xl font-black tracking-tighter uppercase text-white">Open Positions</h2>
               </div>
               
               <div className="flex gap-4 w-full lg:w-auto">
                  <div className="relative flex-grow lg:w-72">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                     <input 
                       type="text" 
                       placeholder="Search Roles (e.g., CNC, Robotic)" 
                       className="w-full bg-[#0F1319] border border-white/5 py-3 pl-11 pr-4 text-[10px] font-bold uppercase tracking-widest text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" 
                     />
                  </div>
                  <button className="px-6 py-3 bg-[#0F1319] border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2 hover:bg-slate-900 transition-all rounded">
                     <Filter className="w-4 h-4" /> FILTERS
                  </button>
               </div>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-slate-950">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-slate-900 border-b border-white/5 text-slate-400">
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">ROLE ID</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">POSITION</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">DEPARTMENT</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">OFFICE LOCATION</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">LEVEL</th>
                     </tr>
                  </thead>
                  <tbody className="text-xs font-semibold text-slate-450 font-mono">
                     {[
                        { id: "LB-902", pos: "Automation Systems Engineer", dept: "Robotics", loc: "Stuttgart, DE", level: "L3 SENIOR" },
                        { id: "LB-415", pos: "Chassis Structural Analyst", dept: "Engineering", loc: "Detroit, US", level: "L2 MID" },
                        { id: "LB-203", pos: "Battery Cell Chemist", dept: "Mobility R&D", loc: "Seoul, KR", level: "L4 LEAD" },
                        { id: "LB-118", pos: "Junior Materials Engineer", dept: "Quality Control", loc: "Stuttgart, DE", level: "L1 JUNIOR" }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-slate-900/50 transition-colors cursor-pointer group">
                           <td className="p-5 text-slate-400 font-bold">{item.id}</td>
                           <td className="p-5 text-white font-bold font-sans">{item.pos}</td>
                           <td className="p-5 font-sans">{item.dept}</td>
                           <td className="p-5 font-sans">{item.loc}</td>
                           <td className="p-5 flex items-center justify-between font-sans">
                              <span>{item.level}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all text-[#0B96AC]" />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            
            <div className="flex justify-center mt-12">
               <button className="px-8 py-4 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:border-white/20 transition-all rounded bg-slate-900">
                  LOAD MORE OPPORTUNITIES
               </button>
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Career;
