import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Settings, 
  Activity, 
  Cpu, 
  Database, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Products = () => {
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
      <Navbar activePage="products" />

      {/* --- Products Hero Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    MODEL SERIES 7 / 2026 // COMPONENT_SPEC
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.05] uppercase">
                     Precision- <br />
                     Engineered <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">Structural Matrices</span>
                  </h1>
                  <p className="text-slate-450 text-sm sm:text-base leading-relaxed mb-10 max-w-md font-medium">
                     Zero-tolerance manufacturing for high-impact automotive components. Designed for thermal stability, chassis rigidity, and load-bearing performance.
                  </p>
                  
                  <div className="flex gap-12 border-t border-white/5 pt-8">
                     <div>
                        <p className="text-2xl font-black text-white tracking-tighter mb-1 font-mono">0.002mm</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#0B96AC]">SYSTEM TOLERANCE</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white tracking-tighter mb-1 font-mono">UHSS-250</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[#0B96AC]">MATERIAL ALLOY GRADE</p>
                     </div>
                  </div>
               </div>
               
               <div className="lg:col-span-6">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-slate-900">
                     <img 
                        src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" 
                        alt="Precision Metal Components" 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Component Catalog Section --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
               <div>
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Product Spec Database</span>
                  <h2 className="text-3xl font-black tracking-tighter uppercase text-white">Component Catalog</h2>
               </div>
               <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded border border-white/5">
                  SHOWING 24 OF 142 COMPONENTS
               </p>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-slate-950">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-slate-900 border-b border-white/5 text-slate-400">
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">PART ID</th>
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">GEOMETRY DESCRIPTION</th>
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">MATERIAL COMPOSITION</th>
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">THICKNESS</th>
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">TENSILE STRENGTH</th>
                          <th className="p-5 text-[9px] font-bold uppercase tracking-wider">SPECS</th>
                       </tr>
                    </thead>
                    <tbody className="text-xs font-semibold text-slate-400 font-mono">
                       {[
                          { id: "LBAP-004-X", geo: "Cross-Beam Matrix", mat: "UHSS/Phase 2", thick: "1.80mm", tens: "980 MPa" },
                          { id: "LBAP-102-Y", geo: "Pillar Reinforcement", mat: "Boron Steel G3", thick: "2.10 mm", tens: "1200 MPa" },
                          { id: "LBAP-909-Z", geo: "Chassis Node", mat: "Al-6061-T6", thick: "4.50 mm", tens: "310 MPa" },
                          { id: "LBAP-507-A", geo: "Roof Rail Segment", mat: "DP600 Steel", thick: "0.60 mm", tens: "600 MPa" },
                          { id: "LBAP-902-B", geo: "Front Subframe", mat: "UHSS/Phase 3", thick: "3.20 mm", tens: "1100 MPa" }
                       ].map((item, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-slate-900/50 transition-colors">
                             <td className="p-5 text-white font-bold">{item.id}</td>
                             <td className="p-5 text-slate-350 font-sans flex items-center gap-2.5 font-bold">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0B96AC]"></span>
                                {item.geo}
                             </td>
                             <td className="p-5">{item.mat}</td>
                             <td className="p-5 text-slate-300">{item.thick}</td>
                             <td className="p-5 text-emerald-400 font-bold">{item.tens}</td>
                             <td className="p-5 text-[#0B96AC] hover:text-white transition-colors cursor-pointer">
                                <ChevronRight className="w-4 h-4" />
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
               </div>
            </div>
         </div>
      </section>

      {/* --- Visual Analysis Gallery --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               <div className="lg:col-span-8 relative aspect-square lg:aspect-auto h-full overflow-hidden rounded-xl border border-white/5 group bg-slate-950">
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
                    alt="Detail Analysis of Component" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#0B96AC] bg-slate-950/80 p-3 border border-white/5 rounded backdrop-blur-sm">
                     SYS_SPEC_CODE: R07XL/MATRIX-X @ 0.002mm
                  </div>
               </div>
               
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="aspect-square relative overflow-hidden rounded-xl border border-white/5 group bg-slate-950">
                     <img 
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
                        alt="Measurement Validation" 
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  </div>
                  
                  <div className="aspect-square relative overflow-hidden rounded-xl border border-white/5 group bg-slate-950">
                     <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" 
                        alt="Robotic Press Calibration" 
                        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
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
