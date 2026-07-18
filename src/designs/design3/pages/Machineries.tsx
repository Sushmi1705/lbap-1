import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Wind,
  Wrench,
  AlertTriangle,
  Play,
  RotateCcw,
  CheckCircle
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface RobotItem {
  id: string;
  type: string;
  status: 'Active' | 'Offline';
  load: number;
  runtime: string;
  cycles: number;
}

const Machineries = () => {
  // Live oscillating telemetry states
  const [telemetry, setTelemetry] = useState({
    temp: 22.4,
    humidity: 44,
    vibration: 0.02,
    noise: 84
  });

  // Toggling status for robotic arms
  const [robotList, setRobotList] = useState<RobotItem[]>([
    { id: "ROB-WELD-01", type: "6-Axis Spot Welder", status: "Active", load: 75, runtime: "412 Hrs", cycles: 28400 },
    { id: "ROB-WELD-02", type: "Plasma Arc System", status: "Active", load: 91, runtime: "305 Hrs", cycles: 19500 },
    { id: "ROB-WELD-03", type: "Laser Seam Integration", status: "Offline", load: 0, runtime: "128 Hrs", cycles: 8400 },
    { id: "ROB-WELD-04", type: "6-Axis Spot Welder", status: "Active", load: 65, runtime: "594 Hrs", cycles: 34100 }
  ]);

  const [selectedRobot, setSelectedRobot] = useState<RobotItem | null>(null);

  // Periodically oscillate telemetry metrics for active simulation feel
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        temp: +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1),
        humidity: Math.min(60, Math.max(30, prev.humidity + Math.floor(Math.random() * 3 - 1))),
        vibration: +(prev.vibration + (Math.random() * 0.006 - 0.003)).toFixed(3),
        noise: Math.min(95, Math.max(75, prev.noise + Math.floor(Math.random() * 3 - 1)))
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const toggleRobotStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRobotList(prev => prev.map(robot => {
      if (robot.id === id) {
        const nextStatus: 'Active' | 'Offline' = robot.status === 'Active' ? 'Offline' : 'Active';
        const nextLoad = nextStatus === 'Active' ? 70 : 0;
        const updated: RobotItem = { ...robot, status: nextStatus, load: nextLoad };
        // Sync selected detail panel
        if (selectedRobot && selectedRobot.id === id) {
          setSelectedRobot(updated);
        }
        return updated;
      }
      return robot;
    }));
  };

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Sticky Header */}
      <Navbar activePage="machineries" />

      {/* --- Machineries Hero Section --- */}
      <section className="pt-32 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
               <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                 SHOP FLOOR V4.2 // ACTIVE_MONITOR
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">VIRTUAL SHOP FLOOR</h1>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                  Real-time machinery oversight for LBAP automotive manufacturing pipelines. Access technical specifications and maintenance metrics across all primary production clusters.
               </p>
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
               <div className="bg-[#0F1319] border border-white/5 p-6 flex flex-col items-center justify-center min-w-[160px] rounded-lg shadow-xl flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold uppercase tracking-wider text-slate-455">CLUSTER STATUS</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">OPERATIONAL</span>
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-6 flex flex-col items-center justify-center min-w-[160px] rounded-lg shadow-xl flex-grow">
                  <div className="flex items-center gap-2 mb-2 text-[#0B96AC]">
                     <Zap className="w-3.5 h-3.5 text-[#0B96AC]" />
                     <span className="text-[9px] font-bold uppercase tracking-wider text-slate-455">LINE EFFICIENCY</span>
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
               
               {/* Zone A: Press Shop camera preview */}
               <div className="lg:col-span-8 flex flex-col border border-white/5 rounded-xl overflow-hidden group bg-slate-950 shadow-2xl">
                  <div className="bg-slate-900 border-b border-white/5 text-white p-5 flex justify-between items-center">
                     <div className="flex items-center gap-3">
                        <Database className="w-4.5 h-4.5 text-[#0B96AC]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">ZONE A: HEAVY PRESS SYSTEM</span>
                     </div>
                     <span className="text-[9px] font-bold text-white uppercase tracking-widest px-3 py-1 bg-[#0B96AC]/15 border border-[#0B96AC]/30 rounded font-mono">
                        LIVE FEED
                     </span>
                  </div>
                  <div className="relative aspect-video overflow-hidden">
                     <img 
                        src="http://lbap.in/img/machinieries/11.jpg" 
                        alt="Heavy Press Shop Machinery" 
                        className="w-full h-full object-cover grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700"
                     />
                     <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full border-2 border-[#0B96AC]/50 flex items-center justify-center animate-ping opacity-25"></div>
                     <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-white/5 rounded p-2 text-[8px] font-mono text-slate-400">
                        FPS: 30.0 // ISO_VAL: 400
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 flex flex-col gap-8">
                  {/* Zone C: QC Calibration matrix */}
                  <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between h-full group hover:border-white/10 transition-all duration-300 relative overflow-hidden shadow-xl">
                     <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#0B96AC]"></div>
                     <div>
                        <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                           <Activity className="w-4.5 h-4.5 text-[#0B96AC]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white font-mono">ZONE C: QC METROLOGY</span>
                        </div>
                        <div className="space-y-6">
                           <div className="flex justify-between items-end border-b border-white/5 pb-3">
                              <div className="flex flex-col">
                                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">CALIBRATION LIMIT</span>
                                 <span className="text-xs font-bold uppercase text-white tracking-wide">Zeiss CMM Audit</span>
                              </div>
                              <span className="text-sm font-mono text-[#0B96AC] font-bold">±0.002mm</span>
                           </div>
                           <div className="flex justify-between items-end border-b border-white/5 pb-3">
                              <div className="flex flex-col">
                                 <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">MAX TENSILE</span>
                                 <span className="text-xs font-bold uppercase text-white tracking-wide">Stress evaluation</span>
                              </div>
                              <span className="text-sm font-mono text-emerald-400 font-bold">980 MPa</span>
                           </div>
                        </div>
                     </div>
                     <button className="mt-8 w-full py-3.5 bg-slate-900 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-[#0B96AC]/20 hover:border-[#0B96AC]/40 transition-all rounded">
                        View Calibration Logs
                     </button>
                  </div>

                  {/* Live Oscillating Ambient Telemetry Card */}
                  <div className="bg-slate-950 border border-white/5 p-8 rounded-xl flex flex-col justify-between group shadow-xl">
                     <div className="flex items-center gap-2 mb-8 text-[#0B96AC]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B96AC] animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Ambient Telemetry Log</span>
                     </div>
                     <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {[
                           { label: "TEMPERATURE", val: `${telemetry.temp}°C`, unit: "deg" },
                           { label: "HUMIDITY RATIO", val: `${telemetry.humidity}%`, unit: "pct" },
                           { label: "VIBRATION G", val: `${telemetry.vibration}g`, unit: "g" },
                           { label: "NOISE BARRIER", val: `${telemetry.noise}dB`, unit: "db" }
                        ].map((stat, i) => (
                           <div key={i} className="flex flex-col border-b border-white/5 pb-2">
                              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">{stat.label}</span>
                              <span className="text-sm font-mono font-bold text-white transition-all duration-300">{stat.val}</span>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mb-12 tracking-tight">Active Mechanical Presses</h2>
            
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
                  <div className="w-full h-1.5 bg-slate-900 rounded overflow-hidden mt-4">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-[#0B96AC]"></motion.div>
                  </div>
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                        <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">Blanking Line SL-4 System</h4>
                        <p className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">
                           Operating Uptime: <span className="text-orange-400 font-bold font-mono">99.8%</span>
                        </p>
                     </div>
                     <span className="text-[8px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded font-mono">MAINT_DUE</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded overflow-hidden mt-4">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '99%' }} transition={{ duration: 1.5 }} className="h-full bg-orange-500"></motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Zone B: Robotic Welding Cluster Table --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
               <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-[#0B96AC]" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">ZONE B: ROBOTIC WELDING CLUSTER</h3>
               </div>
               
               <div className="flex gap-6 font-mono text-[9px]">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                     <span className="font-bold uppercase tracking-widest text-slate-400">
                        {robotList.filter(r => r.status === 'Active').length} Robotic Arms Active
                     </span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                     <span className="font-bold uppercase tracking-widest text-slate-400">
                        {robotList.filter(r => r.status === 'Offline').length} Offline for Servicing
                     </span>
                  </div>
               </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
               
               {/* Left: Interactive Robotic weld status matrix */}
               <div className="lg:col-span-8 overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-slate-950">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-slate-900 border-b border-white/5 text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                           <th className="p-5 pl-6">MACHINE ID</th>
                           <th className="p-5">TYPE DESCRIPTION</th>
                           <th className="p-5">CLUSTER STATUS</th>
                           <th className="p-5">LOAD LOG RATIO</th>
                           <th className="p-5 pr-6 text-right">CONTROLS</th>
                        </tr>
                     </thead>
                     <tbody className="text-xs font-semibold text-slate-400 font-mono divide-y divide-white/5">
                        {robotList.map((item) => (
                           <tr 
                             key={item.id} 
                             onClick={() => setSelectedRobot(item)}
                             className={`hover:bg-white/5 transition-colors cursor-pointer ${selectedRobot?.id === item.id ? 'bg-[#0B96AC]/5 border-l-2 border-[#0B96AC]' : ''}`}
                           >
                              <td className="p-5 pl-6 text-white font-bold">{item.id}</td>
                              <td className="p-5 text-slate-300 font-sans font-bold">{item.type}</td>
                              <td className="p-5">
                                 <span className={`inline-flex items-center gap-1.5 ${item.status === 'Active' ? 'text-emerald-400' : 'text-red-400'}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                                    {item.status}
                                 </span>
                              </td>
                              <td className="p-5">
                                 <div className="flex items-center gap-3">
                                    <div className="flex-grow h-1.5 bg-slate-900 rounded-full overflow-hidden">
                                       <div className="h-full bg-[#0B96AC] transition-all duration-500" style={{ width: `${item.load}%` }}></div>
                                    </div>
                                    <span className="text-[10px] text-slate-500 w-8">{item.load}%</span>
                                 </div>
                              </td>
                              <td className="p-5 pr-6 text-right">
                                 <button
                                   onClick={(e) => toggleRobotStatus(item.id, e)}
                                   className={`px-3 py-1.5 rounded text-[8px] font-bold uppercase tracking-wider transition-colors ${
                                     item.status === 'Active'
                                       ? 'bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/20'
                                       : 'bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/20'
                                   }`}
                                 >
                                    {item.status === 'Active' ? 'OFFLINE' : 'ONLINE'}
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* Right: Robotic Detail telemetry panel */}
               <div className="lg:col-span-4">
                  <AnimatePresence mode="wait">
                     {selectedRobot ? (
                        <motion.div 
                          key={selectedRobot.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="bg-[#0F1319] border border-white/10 p-6 rounded-xl relative overflow-hidden shadow-xl"
                        >
                           <div className="absolute top-0 left-0 right-0 h-1 bg-[#0B96AC]"></div>
                           <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-4 border-b border-white/5 pb-2">
                              Robotic Unit Telemetry
                           </h4>
                           <div className="space-y-4 font-mono text-[10px] text-slate-400">
                              <div className="flex justify-between">
                                 <span>System Code</span>
                                 <span className="text-white font-bold">{selectedRobot.id}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span>Description</span>
                                 <span className="text-white font-sans font-semibold">{selectedRobot.type}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span>Total Runtime</span>
                                 <span className="text-white font-bold">{selectedRobot.runtime}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span>Cumulative Cycles</span>
                                 <span className="text-white font-bold">{selectedRobot.cycles.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span>Output Load</span>
                                 <span className="text-emerald-400 font-bold">{selectedRobot.load}%</span>
                              </div>
                           </div>
                           
                           <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
                              <button 
                                onClick={(e) => toggleRobotStatus(selectedRobot.id, e)}
                                className="flex-1 py-2 bg-slate-900 border border-white/5 hover:border-[#0B96AC] text-slate-300 hover:text-white text-[9px] font-bold uppercase tracking-wider rounded transition-colors"
                              >
                                 Toggle status
                              </button>
                           </div>
                        </motion.div>
                     ) : (
                        <div className="bg-[#0F1319]/50 border border-dashed border-white/5 p-8 rounded-xl text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                           Select a robot arm from the matrix to trace active telemetry logs.
                        </div>
                     )}
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Machineries;
