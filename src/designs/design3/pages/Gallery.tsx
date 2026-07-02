import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Eye, Database, Search } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Gallery = () => {
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
      <Navbar activePage="gallery" />

      {/* --- Gallery Hero & Media Archive Section --- */}
      <section className="pt-24 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
              MEDIA_REPOSITORY // OPTICAL_ARCHIVE
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
               The Precision Lens
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-16 max-w-2xl font-medium">
               A definitive visual archive of LBAP's engineering excellence. High-fidelity documentation of our manufacturing processes, facilities, and the structural integrity of chassis components.
            </p>

            {/* Visual Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
               <div className="lg:col-span-8 relative aspect-[16/9] overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" 
                    alt="Industrial Facility Floor" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 p-2 bg-slate-950/80 border border-white/10 rounded">
                     <Camera className="w-4 h-4 text-[#0B96AC]" />
                  </div>
               </div>
               
               <div className="lg:col-span-4 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" 
                    alt="Precision Stamped Components" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
               </div>
               
               <div className="lg:col-span-4 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" 
                    alt="Laser Seam Welding" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
               </div>
               
               <div className="lg:col-span-4 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                    alt="Robotic Assembly Platform" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
               </div>
               
               <div className="lg:col-span-4 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" 
                    alt="Industrial Quality Monitor Terminal" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
               </div>
            </div>
         </div>
      </section>

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
                 { title: "Digital Synthesis", desc: "Every component begins as a high-density CAD model, stress-tested in virtual environments before a single atom is moved.", img: "https://images.unsplash.com/photo-1581092580460-705886616447?q=80&w=800&auto=format&fit=crop" },
                 { title: "Material Transformation", desc: "Our 5-axis CNC arrays translate digital coordinates into physical geometry with a tolerance of less than 0.002mm.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
                 { title: "Physical Integrity", desc: "The final part is a perfect realization of the original blueprint, verified by our laser interferometry QC system.", img: "https://images.unsplash.com/photo-15810926825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" }
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
