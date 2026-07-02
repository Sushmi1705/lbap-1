import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Globe, Mail, Phone, MapPin, Activity } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Contact = () => {
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
      <Navbar activePage="contact" />

      {/* --- Contact Hero Section --- */}
      <section className="pt-24 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="border-l-2 border-[#0B96AC] pl-8 mb-16">
               <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-4">
                 COMMERCIAL_CHANNELS // OEM_PORTAL
               </div>
               <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-4 uppercase">Technical Partnership Portal</h1>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                  Precision-engineered procurement channels for global OEM partners. Submit technical specifications, RFQs, and secure documentation for high-volume manufacturing projects.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               
               {/* Left: Advanced RFQ Intake System */}
               <div className="lg:col-span-8 bg-[#0F1319] border border-white/5 p-8 md:p-10 rounded-xl group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-4">
                     <FileText className="w-5 h-5 text-[#0B96AC]" />
                     <h2 className="text-lg font-bold text-white uppercase tracking-tight">Advanced RFQ Intake System</h2>
                  </div>

                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                           <input type="text" placeholder="Engineering Lead Name" className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Corporate Email</label>
                           <input type="email" placeholder="name@oem-partner.com" className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">OEM Organization</label>
                           <input type="text" placeholder="Company Legal Entity" className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Project Reference</label>
                           <input type="text" placeholder="Internal Project Code" className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Technical Documentation & CAD Files</label>
                        <div className="border border-dashed border-white/10 bg-slate-900/50 p-10 rounded-lg flex flex-col items-center justify-center group hover:border-[#0B96AC]/30 transition-all cursor-pointer">
                           <Upload className="w-8 h-8 text-slate-600 mb-4 group-hover:scale-105 group-hover:text-[#0B96AC] transition-all" />
                           <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Drag and drop technical specification files here</p>
                           <p className="text-[8px] font-bold text-slate-550 mt-1 tracking-wider uppercase text-center">Accepted: .DWG, .STEP, .PDF (Max File Size: 100MB per file)</p>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Technical Requirements Summary</label>
                        <textarea 
                           rows={4} 
                           placeholder="Describe tolerance thresholds, material specs, volume expectations..."
                           className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all resize-none rounded"
                        ></textarea>
                     </div>

                     <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" className="w-4 h-4 border border-white/10 bg-slate-900 rounded checked:bg-[#0B96AC] transition-all" />
                           <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">Include Pre-Signed NDA in Documentation</span>
                        </label>
                        <button className="bg-[#0B96AC] hover:bg-[#097b8d] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/15 transition-all w-full md:w-auto">
                           Submit RFQ Package
                        </button>
                     </div>
                  </form>
               </div>

               {/* Right: Regional Leads & Stats */}
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col group">
                     <span className="text-[9px] font-bold text-[#0B96AC] uppercase tracking-wider mb-6 block">REGIONAL SALES ENGINEERS</span>
                     <div className="space-y-6">
                        {[
                           { name: "Marcus Thorne", role: "EMEA LEAD - POWER TRAIN SYSTEMS", email: "m.thorne@lbap.tech", img: "https://i.pravatar.cc/100?img=11" },
                           { name: "Dr. Elena Rodriguez", role: "AMERICAS LEAD - CHASSIS DESIGN", email: "e.rodriguez@lbap.tech", img: "https://i.pravatar.cc/100?img=12" },
                           { name: "Chen Wei", role: "APAC LEAD - SYSTEMS LOGISTICS", email: "c.wei@lbap.tech", img: "https://i.pravatar.cc/100?img=13" }
                        ].map((lead, i) => (
                           <div key={i} className="flex gap-4 items-start group/lead border-b border-white/5 pb-4 last:border-0 last:pb-0">
                              <div className="w-10 h-10 rounded overflow-hidden shrink-0 grayscale group-hover/lead:grayscale-0 transition-all border border-white/10">
                                 <img src={lead.img} alt={lead.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                 <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">{lead.name}</h5>
                                 <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{lead.role}</p>
                                 <p className="text-[10px] font-semibold text-[#0B96AC] font-mono">{lead.email}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Global Hubs Telemetry */}
                  <div className="bg-slate-950 border border-white/5 p-8 rounded-xl flex flex-col justify-between group">
                     <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-6 block">GLOBAL MANUFACTURING HUBS</span>
                     <div className="space-y-4 mb-6">
                        {[
                           { hub: "HUB_ALPHA: STUTTGART", coord: "48.7758° N" },
                           { hub: "HUB_BETA: DETROIT", coord: "42.3314° N" },
                           { hub: "HUB_GAMMA: TOKYO", coord: "35.6762° N" }
                        ].map((hub, i) => (
                           <div key={i} className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-white/5 pb-2 last:border-0 last:pb-0">
                              <span className="text-slate-400">{hub.hub}</span>
                              <span className="text-[#0B96AC] font-mono">{hub.coord}</span>
                           </div>
                        ))}
                     </div>
                     <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">NETWORK OPERATIONS: ACTIVE</span>
                     </div>
                  </div>

                  {/* Global Map Widget */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5 group bg-slate-950">
                     <img 
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop" 
                        alt="Global Logistics Network Map" 
                        className="w-full h-full object-cover opacity-15 grayscale group-hover:scale-102 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                     <button className="absolute bottom-4 right-4 px-3 py-1.5 bg-slate-900 border border-white/10 text-[8px] font-bold uppercase tracking-widest text-slate-400 hover:text-white rounded">
                        SHOW PIPELINES
                     </button>
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

export default Contact;
