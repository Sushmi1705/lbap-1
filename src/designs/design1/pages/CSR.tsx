import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, Cloud, Shield, Gavel, Gem, Users, Download, Archive, Crosshair } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const CSR = () => {
  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Split Hero Section */}
      <section className="border-b border-lbap-border">
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px]">
          
          {/* Left Side: Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full md:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16"
          >
            <motion.h4 variants={fadeIn} className="text-[#0B96AC] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              CSR & CORPORATE INTEGRITY
            </motion.h4>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-[52px] font-bold text-[#191C1E] leading-[1.1] mb-6">
              ESG Leadership in Automotive Manufacturing
            </motion.h1>
            <motion.div variants={fadeIn} className="text-[#515F78] text-[16px] mb-12">
              <p>Us | Model 3 (Precision White)</p>
              <p className="mt-1">2</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <button className="bg-[#0B96AC] text-white px-8 py-4 text-sm font-bold hover:bg-[#097b8e] transition-colors border border-[#0B96AC]">
                View 2024 Report
              </button>
              <button className="bg-transparent text-[#515F78] px-8 py-4 text-sm font-bold border border-[#E2E8F0] hover:bg-gray-50 transition-colors">
                Governance Framework
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-[55%] h-64 md:h-full bg-[#191C1E] relative overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80" 
              alt="Industrial Assembly" 
              className="w-full h-full object-cover opacity-80 mix-blend-lighten"
            />
          </motion.div>
          
        </div>
      </section>

      {/* 2. ESG Performance Dashboard */}
      <section className="section-padding border-b border-lbap-border bg-[#FDFDFD]">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
          >
            <div>
              <h4 className="text-[#0B96AC] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">REAL-TIME TRANSPARENCY</h4>
              <h2 className="text-[32px] font-bold text-[#191C1E]">ESG Performance Dashboard</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#515F78] font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Live Data Feed: Q3 2024
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-white border border-[#E2E8F0] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#0B96AC]"></div>
              <div className="flex justify-between items-start mb-8">
                <Zap className="text-[#0B96AC] w-6 h-6" />
                <span className="bg-[#0B96AC]/10 text-[#0B96AC] text-[12px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">-12.4% YoY</span>
              </div>
              <h3 className="text-[28px] font-bold text-[#191C1E] mb-2">4.2 GWh</h3>
              <p className="text-[14px] text-[#515F78] font-medium">Renewable Energy Intensity</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-white border border-[#E2E8F0] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#0B96AC]"></div>
              <div className="flex justify-between items-start mb-8">
                <Droplets className="text-[#0B96AC] w-6 h-6" />
                <span className="bg-[#0B96AC]/10 text-[#0B96AC] text-[12px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">94% Efficiency</span>
              </div>
              <h3 className="text-[28px] font-bold text-[#191C1E] mb-2">28.5k m³</h3>
              <p className="text-[14px] text-[#515F78] font-medium">Water Reclamation Volume</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} whileHover={{ y: -8 }} className="bg-white border border-[#E2E8F0] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#0B96AC]"></div>
              <div className="flex justify-between items-start mb-8">
                <Cloud className="text-[#0B96AC] w-6 h-6" />
                <span className="bg-[#0B96AC]/10 text-[#0B96AC] text-[12px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">On Track</span>
              </div>
              <h3 className="text-[28px] font-bold text-[#191C1E] mb-2">0.42 tCO2e</h3>
              <p className="text-[14px] text-[#515F78] font-medium">Per Vehicle Manufactured</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. Global Compliance & Quality Standards */}
      <section className="section-padding border-b border-lbap-border">
        <div className="container-custom flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 h-[500px] rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80" 
              alt="Compliance Analysis" 
              className="w-full h-full object-cover grayscale brightness-110"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full lg:w-1/2"
          >
            <motion.h4 variants={fadeIn} className="text-[#0B96AC] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              SYSTEMIC INTEGRITY
            </motion.h4>
            <motion.h2 variants={fadeIn} className="text-[32px] font-bold text-[#191C1E] mb-6 leading-tight">
              Global Compliance & Quality Standards
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[#515F78] text-[16px] leading-relaxed mb-10">
              Our manufacturing ecosystems operate under the most stringent international frameworks to ensure safety, environmental protection, and operational excellence.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="space-y-4">
              
              {[
                { title: "ISO 14001:2015", sub: "ENVIRONMENTAL MANAGEMENT SYSTEMS" },
                { title: "OHSAS 18001 / ISO 45001", sub: "OCCUPATIONAL HEALTH & SAFETY" },
                { title: "IATF 16949", sub: "AUTOMOTIVE QUALITY MANAGEMENT" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ x: 10 }}
                  className="bg-[#F7F9FB] p-6 border-l-[4px] border-[#0B96AC] flex items-center gap-6 group transition-all"
                >
                  <Crosshair className="w-6 h-6 text-[#0B96AC] group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-[16px] text-[#191C1E]">{item.title}</h4>
                    <p className="text-[10px] text-[#515F78] font-bold tracking-widest uppercase">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
              
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 4. Supply Chain Responsibility */}
      <section className="section-padding bg-[#FDFDFD]">
        <div className="container-custom">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h4 className="text-[#0B96AC] text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              ETHICAL SOURCING
            </h4>
            <h2 className="text-[32px] font-bold text-[#191C1E] mb-6">
              Supply Chain Responsibility
            </h2>
            <p className="text-[#515F78] text-[16px] leading-relaxed">
              LBAP enforces a 100% transparency mandate across our Tier-1 and Tier-2 suppliers, ensuring zero tolerance for unethical labor practices.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Gavel, title: "Code of Conduct", desc: "Mandatory ethical compliance for all global partners." },
              { icon: Shield, title: "Audit Rigor", desc: "Bi-annual on-site assessments for high-risk regions." },
              { icon: Gem, title: "Conflict Minerals", desc: "100% conflict-free sourcing for all electronic components." },
              { icon: Users, title: "Supplier Diversity", desc: "Actively empowering minority-owned industrial partners." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn} 
                whileHover={{ y: -8 }} 
                className="bg-white border border-[#E2E8F0] p-10 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0B96AC]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0B96AC] transition-colors duration-300">
                  <item.icon className="text-[#0B96AC] w-7 h-7 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-[18px] text-[#191C1E] mb-3">{item.title}</h4>
                <p className="text-[14px] text-[#515F78] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. Transparent Reporting Banner */}
      <section className="bg-[#0B96AC] text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center py-16 gap-10"
          >
            <div>
              <h2 className="text-[28px] font-bold mb-3">Transparent Reporting</h2>
              <p className="text-[16px] text-white/90">Download our comprehensive ESG and CSR archival reports.</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#0B96AC] px-10 py-4 text-sm font-bold flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                2024 ESG Annual Report
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-10 py-4 text-sm font-bold border border-white/50 flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <Archive className="w-5 h-5" />
                Archive (2018-2023)
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default CSR;
