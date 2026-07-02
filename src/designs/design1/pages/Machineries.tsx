import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Settings, FileText, BarChart } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const Machineries = () => {
  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[500px] w-full flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565439390234-c09a8ebf85eb?auto=format&fit=crop&q=80" 
            alt="Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00A3A8]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#005B5E]/90 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 rounded border border-white/30 backdrop-blur-sm"
          >
            INFRASTRUCTURE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-2xl"
          >
            Infrastructure & Engineering Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/90 text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Laxmi Balaji Automotive Products (LBAP) integrates advanced robotic systems, safe heavy-duty press lines to deliver precision automotive components globally.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-[#00A3A8] text-white px-8 py-3 text-sm font-bold rounded hover:bg-[#008f94] transition-colors border border-[#00A3A8]">
              Download Infrastructure Deck
            </button>
            <button className="bg-transparent text-white px-8 py-3 text-sm font-bold rounded border border-white hover:bg-white/10 transition-colors">
              Watch Facility Tour
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Capability Matrix */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-10"
          >
            <h3 className="text-[#00A3A8] text-sm font-bold tracking-widest uppercase mb-2">CAPABILITY MATRIX</h3>
            <h2 className="text-3xl font-bold text-lbap-dark">Core Machinery Divisions</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "5-Axis Table Boring Machine", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
              { title: "CNC Laser Cutting Machine", img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400" },
              { title: "CNC Press Brake-II", img: "https://images.unsplash.com/photo-1565439387796-0391ab1a6da1?auto=format&fit=crop&q=80&w=400" },
              { title: "CNC 3 - Axis Tube Benders", img: "https://images.unsplash.com/photo-1504917595217-d4ce5eb92815?auto=format&fit=crop&q=80&w=400" },
            ].map((machine, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white border border-lbap-border p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 rounded-lg cursor-pointer"
              >
                <div className="h-32 w-full mb-6 flex items-center justify-center relative overflow-hidden group">
                  <img src={machine.img} alt={machine.title} className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="font-semibold text-sm text-lbap-dark">{machine.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Technical Inventory (Teal Table) */}
      <section className="pb-16 pt-8">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-lbap-dark mb-1">Technical Inventory</h3>
            <p className="text-sm text-[#595959]">Comprehensive hardware specifications for Tier-1 automotive procurement audit.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto border border-[#00A3A8]/20 shadow-sm rounded-lg"
          >
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#00A3A8] text-white">
                  <th className="py-4 px-6 text-xs font-bold tracking-widest uppercase">NAME OF MACHINE</th>
                  <th className="py-4 px-6 text-xs font-bold tracking-widest uppercase text-center border-l border-white/20">QTY</th>
                  <th className="py-4 px-6 text-xs font-bold tracking-widest uppercase text-center border-l border-white/20">MAKE</th>
                  <th className="py-4 px-6 text-xs font-bold tracking-widest uppercase text-center border-l border-white/20">TONNAGE</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Progressive Hydraulic Press", "02", "SHRI BALAJI", "600tons"],
                  ["Mechanical Power Press", "05", "SHRI BALAJI", "India"],
                  ["Robotic GMAW Cell", "03", "SHRI BALAJI", "Yaskawa"],
                  ["Vertical Machining Center (VMC)", "04", "SHRI BALAJI", "Haas / Mazak"],
                  ["Precision Surface Grinder", "02", "SHRI BALAJI", "Okamoto"]
                ].map((row, idx) => (
                  <motion.tr 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-[#00A3A8]/20 hover:bg-[#00A3A8]/5 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-lbap-dark">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-[#595959] border-l border-[#00A3A8]/20">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-[#595959] border-l border-[#00A3A8]/20">{row[2]}</td>
                    <td className="py-4 px-6 text-center text-[#595959] border-l border-[#00A3A8]/20">{row[3]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 4. Maintenance & Quality Assurance */}
      <section className="section-padding">
        <div className="container-custom flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Maintenance */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold text-lbap-dark mb-4">Maintenance & Calibration</motion.h3>
            <motion.p variants={fadeIn} className="text-[#595959] mb-8 text-sm leading-relaxed">
              Our facility operates under a Total Productive Maintenance (TPM) framework, ensuring 99.8% machine uptime and consistent precision.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div variants={fadeIn} whileHover={{ y: -5 }} className="border border-lbap-border p-6 rounded hover:border-[#00A3A8] transition-colors bg-white shadow-sm cursor-pointer">
                <h4 className="font-bold text-sm text-lbap-dark mb-2">IATF 16949 Standards</h4>
                <p className="text-xs text-[#595959] leading-relaxed">All machinery undergoes bi-annual calibration by NABL accredited laboratories.</p>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -5 }} className="border border-lbap-border p-6 rounded hover:border-[#00A3A8] transition-colors bg-white shadow-sm cursor-pointer">
                <h4 className="font-bold text-sm text-lbap-dark mb-2">Predictive Analysis</h4>
                <p className="text-xs text-[#595959] leading-relaxed">IoT enabled sensors monitor thermal and vibration levels to prevent unplanned downtime.</p>
              </motion.div>
            </div>

            <motion.div variants={fadeIn} className="h-64 w-full bg-gray-100 mt-auto overflow-hidden rounded-lg group">
              <img src="https://images.unsplash.com/photo-1531326233519-c68e54e48810?auto=format&fit=crop&q=80" alt="Industrial Gears" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </motion.div>

          {/* Right Side: Metrology */}
          <div className="w-full lg:w-1/2 flex flex-col relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#00A3A8] text-white p-10 pb-20 rounded shadow-lg flex-grow"
            >
              <h3 className="text-xl font-bold mb-8">Metrology & Quality Assurance</h3>
              
              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex gap-4 transition-transform">
                  <div className="mt-1"><Target className="w-5 h-5 text-white/80" /></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Coordinate Measuring Machine (CMM)</h4>
                    <p className="text-xs text-white/80 leading-relaxed">Zeiss ACCURA for sub-micron measurement of complex geometric parts.</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex gap-4 transition-transform">
                  <div className="mt-1"><Search className="w-5 h-5 text-white/80" /></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Profile Projector</h4>
                    <p className="text-xs text-white/80 leading-relaxed">Digital optical comparators for non-contact 2D measurement of blank components.</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex gap-4 transition-transform">
                  <div className="mt-1"><Settings className="w-5 h-5 text-white/80" /></div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Metallurgical Testing</h4>
                    <p className="text-xs text-white/80 leading-relaxed">In-house hardness testing, grain structure analysis, and material fatigue analysis.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlapping White Box */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border border-lbap-border p-8 text-center mx-8 -mt-12 relative z-10 shadow-xl rounded hover:shadow-2xl transition-shadow"
            >
              <h4 className="font-bold text-sm text-lbap-dark mb-3">Zero Defect Strategy</h4>
              <p className="text-xs text-[#595959] leading-relaxed mb-4">
                Our 'Poka-Yoke' philosophy is embedded into our machinery through automated error-proofing sensors at every stage.
              </p>
              <button className="text-[#00A3A8] text-xs font-bold hover:underline inline-flex items-center gap-1 group">
                View Quality Certificates <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 5. Technical Documentation Section */}
      <section className="py-20 bg-white border-t border-slate-50">
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
      <section className="bg-[#00A3A8] py-16 text-center border-t border-[#008f94] overflow-hidden">
        <div className="container-custom relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Experience Precision Firsthand</h2>
            <p className="text-white/90 text-sm mb-8 max-w-2xl mx-auto">
              We invite potential partners and procurement specialists to visit our facility for a technical audit of our infrastructure and manufacturing capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-[#00A3A8] px-8 py-3 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
                Schedule a Factory Visit
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent text-white px-8 py-3 text-sm font-bold rounded border border-white hover:bg-white/10 transition-colors">
                Contact Sales Engineering
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Machineries;
