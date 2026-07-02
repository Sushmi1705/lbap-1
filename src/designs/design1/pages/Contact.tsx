import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Truck, UploadCloud, Globe, ArrowRight, Mail } from 'lucide-react';

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
      staggerChildren: 0.15
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    projectScope: 'Chassis Component Manufacturing'
  });

  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Hero Section: Connect with Global Engineering Support */}
      <section className="pt-24 pb-20">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-1/2"
          >
            <motion.h4 variants={fadeInUp} className="text-[#0B96AC] text-[12px] font-bold tracking-[0.4em] uppercase mb-6">
              OPERATIONS SUPPORT
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-[56px] font-bold text-[#191C1E] leading-[1.1] mb-8">
              Connect with Global Engineering Support
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#515F78] text-[18px] leading-relaxed mb-12 opacity-90 max-w-xl">
              LBAP provides 24/7 technical and logistical oversight for Tier 1 automotive partners. Seamlessly integrate our engineering expertise into your production cycle.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=90&w=1200" 
                alt="Control Center" 
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Dedicated Support Divisions & RFQ Portal */}
      <section className="section-padding bg-[#F9FBFC]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">
            
            {/* Left: Support Divisions */}
            <div className="w-full lg:w-[35%] flex flex-col justify-between">
              <h2 className="text-[28px] font-bold text-[#191C1E] mb-12">Dedicated Support Divisions</h2>
              
              <div className="flex flex-col gap-10 flex-grow justify-between">
                {[
                  { 
                    icon: Users, 
                    title: "OEM Sales", 
                    desc: "Direct procurement and contract manufacturing inquiries for global OEMs.",
                    email: "oem.support@lbap-auto.com"
                  },
                  { 
                    icon: Settings, 
                    title: "Technical Support", 
                    desc: "Product integration, CAD consultation, and material specification assistance.",
                    email: "tech.desk@lbap-auto.com"
                  },
                  { 
                    icon: Truck, 
                    title: "Logistics & Supply", 
                    desc: "Tracking, global warehousing, and JIT delivery coordination.",
                    email: "supply.chain@lbap-auto.com"
                  }
                ].map((division, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow group flex-grow"
                  >
                    <div className="flex gap-6 items-start h-full">
                      <div className="w-12 h-12 bg-[#0B96AC]/5 flex items-center justify-center flex-shrink-0">
                        <division.icon className="text-[#0B96AC] w-6 h-6" />
                      </div>
                      <div className="flex flex-col h-full">
                        <h3 className="text-[18px] font-bold text-[#191C1E] mb-3">{division.title}</h3>
                        <p className="text-[14px] text-[#515F78] leading-relaxed mb-4 opacity-80 flex-grow">{division.desc}</p>
                        <a href={`mailto:${division.email}`} className="text-[#0B96AC] text-[12px] font-bold border-b border-[#0B96AC] pb-0.5 hover:opacity-70 transition-opacity w-fit">
                          {division.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: RFQ Portal */}
            <div className="w-full lg:w-[65%]">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 md:p-16 border border-[#E2E8F0] shadow-xl relative"
              >
                <div className="absolute top-12 right-12 opacity-10">
                  <UploadCloud className="w-16 h-16" />
                </div>
                
                <h4 className="text-[#E53E3E] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">FAST TRACK PROCUREMENT</h4>
                <h2 className="text-[32px] font-bold text-[#191C1E] mb-12">High-Priority RFQ Portal</h2>
                
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="block text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-3">FULL NAME</label>
                      <input 
                        type="text" 
                        placeholder="Engineer Name"
                        className="w-full bg-white border border-[#E2E8F0] py-4 px-6 text-[14px] font-medium outline-none focus:border-[#0B96AC] transition-all rounded-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-3">ORGANIZATION</label>
                      <input 
                        type="text" 
                        placeholder="OEM / Tier Supplier"
                        className="w-full bg-white border border-[#E2E8F0] py-4 px-6 text-[14px] font-medium outline-none focus:border-[#0B96AC] transition-all rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-3">PROJECT SCOPE</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-[#E2E8F0] py-4 px-6 text-[14px] font-medium outline-none focus:border-[#0B96AC] transition-all rounded-none appearance-none">
                        <option>Chassis Component Manufacturing</option>
                        <option>Advanced Tooling & Die Design</option>
                        <option>Metallurgical Analysis Request</option>
                        <option>Mass Production Integration</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-[#515F78] uppercase tracking-widest mb-3">CAD / 3D FILE UPLOAD (STEP, IGES, STL)</label>
                    <div className="border-2 border-dashed border-[#E2E8F0] rounded-sm p-12 text-center group hover:border-[#0B96AC] transition-colors cursor-pointer bg-[#F9FBFC]">
                      <UploadCloud className="w-10 h-10 text-[#0B96AC] mx-auto mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                      <p className="text-[14px] text-[#515F78] font-medium mb-1">Drag and drop technical files here</p>
                      <p className="text-[11px] text-[#515F78]/60 uppercase tracking-wider italic">Maximum file size: 250MB</p>
                    </div>
                  </div>

                  <button className="w-full bg-[#0B96AC] text-white py-6 text-[12px] font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-[#097b8e] transition-all shadow-lg active:scale-95">
                    INITIALIZE PROCUREMENT REQUEST <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Regional Distribution */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-[#191C1E] mb-5">Regional Distribution</h2>
            <p className="text-[#515F78] text-[16px] leading-relaxed opacity-80 max-w-2xl">
              LBAP maintains a strategic presence in all major automotive hubs. Our warehouses are strategically positioned to guarantee JIT delivery across 4 continents.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#F4F7F9] rounded-sm p-1 shadow-inner overflow-hidden border border-[#E2E8F0]"
          >
            {/* Simple World Map Illustration */}
            <div className="w-full h-[600px] relative bg-white/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=2000" 
                alt="Global Network Map" 
                className="w-full h-full object-cover opacity-[0.08] grayscale"
              />
              
              {/* Distribution Hotspots */}
              {[
                { top: '35%', left: '25%', name: 'North America' },
                { top: '30%', left: '48%', name: 'Europe Hub' },
                { top: '65%', left: '72%', name: 'Chakan HQ (Asia)' },
                { top: '45%', left: '80%', name: 'East Asia Support' }
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.2) }}
                  style={{ top: point.top, left: point.left }}
                  className="absolute group"
                >
                  <div className="w-4 h-4 bg-[#0B96AC] rounded-full shadow-[0_0_20px_rgba(11,150,172,0.8)] cursor-pointer">
                    <div className="absolute inset-0 bg-[#0B96AC] rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#191C1E] text-white text-[10px] font-bold px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-sm">
                    {point.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
