// PIXEL-PERFECT FIGMA REBUILD - VIRTUAL FACTORY VERSION
import React from 'react';
import { motion } from 'framer-motion';
import { Box, FileText, BarChart, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
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

const Gallery = () => {
  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Infrastructure Exploration Hero */}
      <section className="pt-20 pb-24">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h4 variants={fadeInUp} className="text-[#0B96AC] text-[12px] font-bold tracking-[0.4em] uppercase mb-5">
              [ VIRTUAL FACTORY MODEL 3.0 ]
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-[56px] font-bold text-[#191C1E] leading-tight mb-8">
              Explore Our Infrastructure
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#515F78] text-lg max-w-2xl leading-relaxed opacity-90">
              Step inside our high-precision automotive manufacturing facility. Experience 360° of engineering excellence from our sterile white-room labs to the high-throughput press shops.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] md:h-[700px] rounded-sm overflow-hidden shadow-2xl bg-gray-100 will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
              alt="Sterile White Room Factory" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 border border-lbap-border rounded-sm flex items-center gap-4 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#0B96AC] flex items-center justify-center">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#191C1E] uppercase">Live 360° Interaction Enabled</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Facility Hotspots */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#191C1E]">Facility Hotspots</h2>
              <div className="w-20 h-1 bg-[#0B96AC] mt-4"></div>
            </div>
            <span className="text-[11px] font-bold text-[#515F78] tracking-[0.3em] uppercase opacity-60">03 SECTORS DETAILED</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Press Shop", 
                img: "https://images.unsplash.com/photo-1504164996022-09080787b6b3?auto=format&fit=crop&q=80&w=1200",
                desc: "High-tonnage stamping line for structural chassis components with micron-level tolerance control."
              },
              { 
                title: "Assembly", 
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=70&w=800",
                desc: "Automated robotic synchronization for drivetrain integration and final body assembly."
              },
              { 
                title: "QC Lab", 
                img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
                desc: "Advanced metrology and stress testing facility ensuring global compliance standards."
              }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E2E8F0] overflow-hidden group hover:shadow-2xl transition-all duration-300 will-change-transform"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-[#191C1E] mb-5">{sector.title}</h3>
                  <p className="text-[14px] text-[#515F78] leading-relaxed mb-8 opacity-80">{sector.desc}</p>
                  <button className="text-[#0B96AC] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                    VIEW SECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Macro Detail Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[#191C1E] mb-4">Macro Detail</h2>
            <p className="text-[16px] text-[#515F78] opacity-80">Technical close-ups showcasing the precision finish of our engineered components.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200", ref: "REF: GRS-01" },
              { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" },
              { img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" },
              { img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-sm h-[450px] shadow-lg bg-gray-100 will-change-transform"
              >
                <img src={item.img} alt="Macro Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                {item.ref && (
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#191C1E] uppercase border border-lbap-border">
                    {item.ref}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Documentation Section */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            
            {/* Left: Heading & Description */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[28px] font-bold text-[#191C1E] mb-3">Technical Documentation</h2>
              <p className="text-[#8E99AF] text-[14px] font-medium leading-relaxed max-w-md">
                Download detailed infrastructure specifications and facility compliance reports.
              </p>
            </div>

            {/* Right: Download Cards */}
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4">
              {/* Card 1: PDF */}
              <div className="flex-1 bg-white border border-slate-100 p-6 flex items-center gap-5 hover:shadow-lg transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-[#0B96AC]" />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#8E99AF] mb-1">PDF DOCUMENT</p>
                  <h4 className="text-[14px] font-bold text-[#191C1E] group-hover:text-[#0B96AC] transition-colors">Plant Layout Specs</h4>
                </div>
              </div>

              {/* Card 2: XLS */}
              <div className="flex-1 bg-white border border-slate-100 p-6 flex items-center gap-5 hover:shadow-lg transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center shrink-0">
                  <BarChart className="w-6 h-6 text-[#0B96AC]" />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#8E99AF] mb-1">XLS DATA</p>
                  <h4 className="text-[14px] font-bold text-[#191C1E] group-hover:text-[#0B96AC] transition-colors">Machinery Metrics</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
