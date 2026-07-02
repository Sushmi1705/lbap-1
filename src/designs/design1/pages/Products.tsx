import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Database, ShieldCheck, Microscope, Scan, GitBranch, Globe, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Products = () => {
  const [activeTab, setActiveTab] = useState('Automotive Press Components');

  const tabs = [
    'Automotive Press Components',
    'Automotive Sub Assembly Components',
    'Non Automotive Parts',
    'Press Tools'
  ];

  const products = [
    { id: '154-AD-MB', name: 'Mounting Bracket', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600' },
    { id: '712-FG-SB', name: 'Splice Bar', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' },
    { id: '204-AX-HL', name: 'Head Lock', img: 'https://images.unsplash.com/photo-1531266752426-aad4d5fd0b5d?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Hero Section: Interactive Technical Explorer */}
      <section className="pt-24 pb-20 bg-white">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[45%]"
          >
            <motion.h4 variants={fadeInUp} className="text-[#0B96AC] text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
              HIGH PRECISION SERIES
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-[54px] font-bold text-[#191C1E] leading-[1.1] mb-8">
              Interactive Technical Explorer
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#515F78] text-[17px] leading-relaxed mb-12 opacity-90 max-w-lg">
              A deep-dive into high-tolerance automotive components, engineered for performance, verified by clinical inspection standards.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E2E8F0]">
              <div>
                <p className="text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-2">TOLERANCE</p>
                <p className="text-[22px] font-bold text-[#0B96AC]">+/- 0.005mm</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-2">MATERIAL</p>
                <p className="text-[22px] font-bold text-[#0B96AC]">ST14 Steel</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[55%] relative group"
          >
            <div className="bg-[#F8FAFC] p-4 rounded-sm border border-[#E2E8F0] shadow-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4ce5eb92815?auto=format&fit=crop&q=100&w=1200" 
                alt="3D Technical Render" 
                className="w-full h-[550px] object-cover mix-blend-multiply opacity-90"
              />
              {/* Technical Callouts Decoration */}
              <div className="absolute top-[20%] right-[15%] w-32 h-[1px] bg-[#0B96AC]/40 hidden md:block"></div>
              <div className="absolute top-[20%] right-[15%] flex flex-col items-end">
                <span className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest mb-1">AXIS ALIGNMENT</span>
                <span className="text-[12px] font-bold text-[#191C1E]">VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Tabs & Grid */}
      <section className="py-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
              {tabs.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-sm border-b-2 ${
                    activeTab === tab 
                    ? 'border-[#0B96AC] text-[#0B96AC] bg-white' 
                    : 'border-transparent text-[#515F78] hover:text-[#0B96AC] opacity-60'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-3 text-[11px] font-bold text-[#515F78] uppercase tracking-[0.2em] opacity-80 border border-[#E2E8F0] px-6 py-3 bg-white hover:border-[#0B96AC] transition-all">
              <GitBranch className="w-4 h-4" /> Filter By Specification
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((prod, i) => (
              <motion.div 
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white border border-[#E2E8F0] hover:shadow-2xl transition-all"
              >
                <div className="relative h-[250px] overflow-hidden bg-gradient-to-br from-[#0B96AC]/5 to-blue-600/20">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="w-[85%] h-[85%] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold text-[#0B96AC] tracking-widest mb-2 uppercase opacity-80">{prod.id}</p>
                  <h3 className="text-xl font-bold text-[#191C1E] group-hover:text-[#0B96AC] transition-colors">{prod.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technical Depth & QA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl text-left">
              <h4 className="text-[#0B96AC] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">ENGINEERING & VALIDATION</h4>
              <h2 className="text-[38px] font-bold text-[#191C1E] leading-tight">Technical Depth & Quality Assurance</h2>
            </div>
            <div className="text-right pb-2">
              <p className="text-[11px] font-bold text-[#515F78] opacity-60 uppercase tracking-widest">IATF 16949: 2016 Certified Standards</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Scan, 
                title: "3D Scanning & CMM", 
                desc: "Full-field geometry verification using Hexagon CMM and Laser Scan arms with sub-micron precision." 
              },
              { 
                icon: Microscope, 
                title: "Material Analysis Lab", 
                desc: "In-house spectrometry, hardness testing, and micro-structure analysis for raw material validation." 
              },
              { 
                icon: GitBranch, 
                title: "Prototyping Capabilities", 
                desc: "Rapid soft-tooling and 3D metal printing for functional prototype validation." 
              }
            ].map((qa, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#0B96AC]/5 -mr-8 -mt-8 rotate-45 group-hover:bg-[#0B96AC]/10 transition-colors"></div>
                <div className="w-14 h-14 bg-[#0B96AC]/5 flex items-center justify-center mb-10 border border-[#0B96AC]/10 group-hover:bg-[#0B96AC] group-hover:border-[#0B96AC] transition-colors">
                  <qa.icon className="text-[#0B96AC] w-7 h-7 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[22px] font-bold text-[#191C1E] mb-6">{qa.title}</h3>
                <p className="text-[15px] text-[#515F78] leading-relaxed opacity-85">{qa.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Logistics Reach (Black Section) */}
      <section className="section-padding bg-[#0F1115] text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-[45%]">
              <h4 className="text-[#0B96AC] text-[11px] font-bold tracking-[0.4em] uppercase mb-8">SUPPLY CHAIN EXCELLENCE</h4>
              <h2 className="text-[42px] font-bold mb-8 leading-tight">Global Logistics Reach</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-16 max-w-lg font-medium">
                Strategic shipping hubs and optimized logistics networks ensuring Just-In-Time (JIT) delivery to automotive plants across 4 continents.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <p className="text-[38px] font-black text-[#0B96AC] mb-2">24+</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">Countries Reached</p>
                </div>
                <div>
                  <p className="text-[38px] font-black text-[#0B96AC] mb-2">150k+</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">Units Monthly</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] relative">
              <div className="border border-white/10 p-4 bg-white/5 backdrop-blur-sm shadow-2xl">
                <div className="h-[450px] w-full bg-[#1A1D24] relative overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                    alt="World Map" 
                    className="w-full h-full object-cover opacity-10 grayscale invert"
                  />
                  {/* Network Lines Decoration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] to-transparent"></div>
                  <Globe className="w-64 h-64 absolute opacity-5 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-2 border-[#0B96AC] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-[#0B96AC]/5 transition-colors duration-500"
          >
            <div className="text-left">
              <h2 className="text-[36px] font-bold text-[#191C1E] mb-4">Ready for Technical Onboarding?</h2>
              <p className="text-[#515F78] text-lg font-medium opacity-70">Speak with our lead engineers about your custom component specifications.</p>
            </div>
            <button className="bg-[#0B96AC] text-white px-12 py-5 text-[14px] font-black uppercase tracking-widest shadow-2xl hover:bg-[#097b8e] transition-all">
              Request Technical Demonstration
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Products;
