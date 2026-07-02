import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Leaf, 
  Droplets, 
  Zap, 
  BookOpen, 
  Users, 
  Globe, 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const CSR = () => {
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
      <Navbar activePage="csr" />

      {/* --- CSR Hero Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    ESG INTEGRATION // CARBON_REDUCTION
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.05] uppercase">
                     Engineering for <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">Social Impact</span>
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium">
                     At LBAP, we believe precision engineering extends beyond the assembly line. Our commitment to community empowerment and environmental stewardship is baked into our operational DNA.
                  </p>
                  <div className="flex gap-4">
                     <button className="bg-[#0B96AC] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/20 hover:bg-[#097b8d] transition-all">
                       Download CSR Audit Report
                     </button>
                     <button className="bg-slate-900 border border-white/10 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded hover:bg-slate-800 transition-all">
                       Our ESG Vision
                     </button>
                  </div>
               </div>
               
               <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-slate-900">
                     <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                        alt="ESG Stamping Engineer" 
                        className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-750"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Environmental Stewardship Section --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Sustainability Targets</span>
            <h2 className="text-3xl font-black tracking-tighter uppercase text-white mb-16">Environmental Stewardship</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Carbon Neutrality Roadmap", val: "42%", label: "NET REDUCTION LOG", desc: "Reducing our operational footprint through advanced thermokinetic recycling and renewable energy integration across all manufacturing centers.", icon: Leaf, isProgress: true, width: '42%' },
                 { title: "Closed-Loop Water Recycling", val: "89%", label: "RECOVERY RATIO", desc: "Closed-loop filtration systems in our cooling towers ensure maximum water recovery and zero industrial wastewater discharge.", icon: Droplets, isProgress: true, width: '89%' },
                 { title: "Photovoltaic Power Matrix", val: "12.5MW", label: "RENEWABLE CAPACITY", desc: "Smart grid optimization for machinery uptime and on-site photovoltaic matrix expansion powering our primary assembly lines.", icon: Zap, isProgress: false }
               ].map((item, idx) => (
                 <div key={idx} className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                    <div>
                      <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-6 text-[#0B96AC]">
                         <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4">{item.title}</h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8 h-20 overflow-hidden font-medium">
                         {item.desc}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/5">
                       <div className="flex justify-between items-end mb-3">
                          <span className="text-3xl font-black text-white tracking-tighter font-mono">{item.val}</span>
                          <span className="text-[8px] font-bold text-[#0B96AC] uppercase tracking-widest">{item.label}</span>
                       </div>
                       {item.isProgress && (
                          <div className="w-full h-1 bg-slate-900 rounded overflow-hidden">
                             <motion.div initial={{ width: 0 }} whileInView={{ width: item.width }} transition={{ duration: 1.5 }} className="h-full bg-[#0B96AC]"></motion.div>
                          </div>
                       )}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Empowering Communities Section --- */}
      <section className="py-24 bg-slate-950 relative border-b border-white/5">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6 relative aspect-video lg:aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" 
                    alt="CSR Community Outreach" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
               </div>
               
               <div className="lg:col-span-6">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Local Empowerment</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">Empowering Local <br /> Communities</h2>
                  <p className="text-slate-450 text-sm leading-relaxed mb-10 font-medium">
                     Our CSR initiatives are localized to create measurable, sustainable impact. We focus on technical education as a catalyst for economic mobility.
                  </p>
                  
                  <div className="space-y-8">
                     <div className="flex gap-6 group">
                        <div className="w-12 h-12 rounded bg-[#0F1319] border border-white/5 shrink-0 flex items-center justify-center text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                           <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Technical Education Grants</h4>
                           <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                              Annual scholarships for marginalized students pursuing graduation engineering and advanced robotics vocations.
                           </p>
                        </div>
                     </div>
                     
                     <div className="flex gap-6 group">
                        <div className="w-12 h-12 rounded bg-[#0F1319] border border-white/5 shrink-0 flex items-center justify-center text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                           <Users className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Workforce Integration Program</h4>
                           <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                              A dedicated bridge program connecting local vocational graduates directly to LBAP's technical ecosystem.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Impact Timeline --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom text-center mb-16">
            <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Historical ESG Record</span>
            <h2 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Impact Timeline</h2>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Tracing our footprint of positive change since 2010.</p>
         </div>
         
         <div className="container-custom max-w-4xl relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            
            <div className="space-y-16">
               {[
                 { year: "2024", title: "CIRCULAR PARTS INITIATIVE", desc: "Launch of the 'Ghost Parts' initiative, achieving 95% recyclability for secondary chassis components.", align: "left" },
                 { year: "2022", title: "PRECISION TECH GRANTS", desc: "Awarded $0.2M in grants to technical institutes for advanced CNC training modules.", align: "right" },
                 { year: "2020", title: "GREEN MANUFACTURING 1.0", desc: "Initial deployment of solar-powered assembly cells in our primary facility, reducing grid dependency by 30%.", align: "left" }
               ].map((item, idx) => (
                 <div key={idx} className={`relative flex items-center ${item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-[#0F1319] p-6 rounded-lg border border-white/5">
                       <span className="text-[#0B96AC] text-[10px] font-mono tracking-widest mb-2">{item.year}</span>
                       <h3 className="text-base font-bold text-white uppercase tracking-tight mb-2">{item.title}</h3>
                       <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-900 border-2 border-[#0B96AC] rounded-full hidden md:block"></div>
                    <div className="md:w-1/2"></div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Partnership CTA --- */}
      <section className="py-24 bg-[#090B0E] relative">
         <div className="container-custom">
            <div className="bg-slate-950 p-12 md:p-16 rounded-2xl border border-white/5 relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B96AC]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-105 transition-transform duration-1000"></div>
               <div className="relative z-10 max-w-2xl">
                  <h2 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Building the Future of <br /> Ethical Engineering</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md font-medium">
                     Join our network of partners and educational institutions to drive local impact.
                  </p>
                  <button className="bg-[#0B96AC] hover:bg-[#097b8d] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/15 transition-all">
                     Inquire About Partnership
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default CSR;
