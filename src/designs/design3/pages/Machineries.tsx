import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Settings, 
  Activity, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Thermometer, 
  Droplets, 
  Zap, 
  Wind 
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Machineries = () => {
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
      <Navbar activePage="machineries" />

      {/* --- Machineries Hero Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
               <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                 SHOP FLOOR V4.0 // ACTIVE_MONITOR
               </div>
               <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-6 uppercase">VIRTUAL SHOP FLOOR</h1>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                  Real-time machinery oversight for LBAP automotive manufacturing pipelines. Access technical specifications and maintenance metrics across all primary production clusters.
               </p>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
               <div className="bg-[#0F1319] border border-white/5 p-6 flex flex-col items-center justify-center min-w-[160px] rounded-lg shadow-xl flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">CLUSTER STATUS</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">OPERATIONAL</span>
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-6 flex flex-col items-center justify-center min-w-[160px] rounded-lg shadow-xl flex-grow">
                  <div className="flex items-center gap-2 mb-2 text-[#0B96AC]">
                     <Zap className="w-3.5 h-3.5 text-[#0B96AC]" />
                     <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">LINE EFFICIENCY</span>
                  </div>
                  <span className="text-2xl font-black text-white tracking-tighter">98.4%</span>
               </div>
            </div>
         </div>
      </section>

      {/* --- Virtual Monitor Dashboard --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               
               {/* Zone A: Press Shop */}
               <div className="lg:col-span-8 flex flex-col border border-white/5 rounded-xl overflow-hidden group bg-slate-950">
                  <div className="bg-slate-900 border-b border-white/5 text-white p-5 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <Database className="w-4.5 h-4.5 text-[#0B96AC]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">ZONE A: HEAVY PRESS SYSTEM</span>
                     </div>
                     <span className="text-[9px] font-bold text-white uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/15 rounded">High-Capacity Press Shop</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                        alt="Heavy Press Shop Machinery" 
                        className="w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700"
                     />
                     <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full border-2 border-[#0B96AC]/50 flex items-center justify-center animate-ping opacity-25"></div>
                  </div>
               </div>

               {/* Zone C: QC Lab Panel */}
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between h-full group hover:border-[#0B96AC]/45 transition-all duration-300">
                     <div>
                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                           <Activity className="w-4.5 h-4.5 text-[#0B96AC]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white">ZONE C: METROLOGY & QC LAB</span>
                        </div>
                        <div className="space-y-6">
                           <div className="flex justify-between items-end border-b border-white/5 pb-3">
                              <div className="flex flex-col">
                                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">CALIBRATION GATE</span>
                                 <span className="text-xs font-bold uppercase text-white tracking-wide">Dimensional Audit</span>
                              </div>
                              <span className="text-sm font-mono text-[#0B96AC] font-bold">±0.002mm</span>
                           </div>
                           <div className="flex justify-between items-end border-b border-white/5 pb-3">
                              <div className="flex flex-col">
                                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">LOAD GATE</span>
                                 <span className="text-xs font-bold uppercase text-white tracking-wide">Tensile Evaluation</span>
                              </div>
                              <span className="text-sm font-mono text-white font-bold">450 MPa</span>
                           </div>
                        </div>
                     </div>
                     <button className="mt-8 w-full py-3.5 bg-slate-900 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-[#0B96AC]/20 hover:border-[#0B96AC]/40 transition-all rounded">
                        View System Calibration Logs
                     </button>
                  </div>

                  {/* Facility Telemetry */}
                  <div className="bg-slate-950 border border-white/5 p-8 rounded-xl flex flex-col justify-between group">
                     <div className="flex items-center gap-2 mb-8 text-[#0B96AC]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B96AC] animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Ambient Telemetry Log</span>
                     </div>
                     <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {[
                           { label: "TEMPERATURE", val: "22.4°C" },
                           { label: "HUMIDITY RATIO", val: "44%" },
                           { label: "VIBRATION G", val: "0.02g" },
                           { label: "NOISE BARRIER", val: "84dB" }
                        ].map((stat, i) => (
                           <div key={i} className="flex flex-col border-b border-white/5 pb-2">
                              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{stat.label}</span>
                              <span className="text-sm font-mono font-bold text-white">{stat.val}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Active Machineries Cards --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Primary Press Line Matrix</span>
            <h2 className="text-3xl font-black text-white uppercase mb-12 tracking-tight">Active Mechanical Presses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                        <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">H-frame Mechanical Stamping Press</h4>
                        <p className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">
                           Active Output Log: <span className="text-[#0B96AC] font-bold">420 Parts/Hr</span>
                        </p>
                     </div>
                     <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded">NOMINAL</span>
                  </div>
                  <div className="w-full h-1 bg-slate-900 rounded overflow-hidden mt-4">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-[#0B96AC]"></motion.div>
                  </div>
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                        <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">Blanking Line SL-4 System</h4>
                        <p className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">
                           Operating Uptime: <span className="text-orange-400 font-bold">99.8%</span>
                        </p>
                     </div>
                     <span className="text-[8px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded">MAINTENANCE_DUE</span>
                  </div>
                  <div className="w-full h-1 bg-slate-900 rounded overflow-hidden mt-4">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '99%' }} transition={{ duration: 1.5 }} className="h-full bg-orange-500"></motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Zone B: Welding Cluster Table --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
               <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-[#0B96AC]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">ZONE B: ROBOTIC WELDING CLUSTER</h3>
               </div>
               
               <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                     <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">8 Robotic Arms Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">1 Offline for Servicing</span>
                  </div>
               </div>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-slate-950">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-slate-900 border-b border-white/5 text-slate-400">
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">MACHINE ID</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">TYPE DESCRIPTION</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">CLUSTER STATUS</th>
                        <th className="p-5 text-[9px] font-bold uppercase tracking-wider">LOAD LOG RATIO</th>
                     </tr>
                  </thead>
                  <tbody className="text-xs font-semibold text-slate-450 font-mono">
                     {[
                        { id: "ROB-WELD-01", type: "6-Axis Spot Welder", status: "Active", load: 75, color: "text-emerald-400" },
                        { id: "ROB-WELD-02", type: "Plasma Arc System", status: "Active", load: 91, color: "text-emerald-400" },
                        { id: "ROB-WELD-03", type: "Laser Seam Integration", status: "Offline", load: 0, color: "text-red-400" },
                        { id: "ROB-WELD-04", type: "6-Axis Spot Welder", status: "Active", load: 65, color: "text-emerald-400" }
                     ].map((item, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-slate-900/50 transition-colors">
                           <td className="p-5 text-white font-bold">{item.id}</td>
                           <td className="p-5 text-slate-400 font-sans font-bold">{item.type}</td>
                           <td className="p-5 flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                              <span className={item.color}>{item.status}</span>
                           </td>
                           <td className="p-5 w-1/3">
                              <div className="flex items-center gap-4">
                                 <div className="flex-grow h-1 bg-slate-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#0B96AC]" style={{ width: `${item.load}%` }}></div>
                                 </div>
                                 <span className="text-[10px] text-slate-500 w-8">{item.load}%</span>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Machineries;
