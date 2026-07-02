import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer, Beaker, Settings, CheckCircle2, Heart, ArrowRight, Shield, Users, MapPin, Clock } from 'lucide-react';

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

const Career = () => {
  const [activeTab, setActiveTab] = useState('All Engineering');

  const jobs = [
    { title: 'Senior Metallurgist (R&D)', location: 'CHAKAN, PUNE', type: 'FULL TIME', category: 'Metallurgy' },
    { title: 'Lead Tool & Die Designer', location: 'PUNE, HQ', type: 'FULL TIME', category: 'Tool & Die' },
    { title: 'Robotics Automation Engineer', location: 'CHAKAN, PUNE', type: 'FULL TIME', category: 'All Engineering' }
  ];

  const filteredJobs = activeTab === 'All Engineering' ? jobs : jobs.filter(j => j.category === activeTab);

  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Engineering Excellence Hero */}
      <section className="pt-24 pb-20 bg-[#F9FBFC]">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-1/2"
          >
            <motion.div variants={fadeInUp} className="inline-block bg-[#0B96AC] px-2.5 py-1 mb-6">
              <span className="text-white text-[9px] font-black tracking-[0.2em] uppercase">
                ENGINEERING EXCELLENCE
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-[36px] lg:text-[42px] font-black text-[#191C1E] leading-[1.1] mb-6 tracking-tight">
              Building the Future of <br className="hidden lg:block" /> Automotive
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[#515F78] text-[14px] leading-relaxed mb-10 opacity-90 max-w-lg font-medium">
              Join LBAP and contribute to a world-class manufacturing ecosystem where technical precision meets visionary engineering. We are shaping the mobility of tomorrow through rigorous R&D and advanced metallurgy.
            </motion.p>
            
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0B96AC] text-white px-8 py-3.5 text-[12px] font-bold flex items-center gap-3 hover:bg-[#097b8e] transition-all shadow-md uppercase tracking-widest"
            >
              View Engineering Roles <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-none overflow-hidden shadow-xl bg-white border border-[#E2E8F0] p-1">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                alt="Engineering Excellence" 
                className="w-full h-[480px] object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LBAP Academy Section */}
      <section className="section-padding bg-[#F9FBFC]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10"
          >
            <div className="max-w-3xl">
              <h2 className="text-[28px] font-bold text-[#191C1E] mb-4">LBAP Academy</h2>
              <p className="text-[#515F78] text-[13px] leading-relaxed opacity-80 max-w-2xl font-medium">
                Continuous skill development is at the core of our technical superiority. Our internal training programs are designed to bridge the gap between academic theory and high-precision manufacturing reality.
              </p>
            </div>
            <button className="text-[#0B96AC] text-[10px] font-bold tracking-[0.1em] uppercase hover:opacity-70 transition-opacity whitespace-nowrap mb-2">
              Est. 1998 / Technical Certifications
            </button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Hammer, title: "Mastering Tool & Die", desc: "Intensive certification program focusing on precision machining, die maintenance, and CAD/CAM integration for elite toolmakers.", duration: "12 MONTHS" },
              { icon: Beaker, title: "Metallurgical Studies", desc: "Advanced material science training covering heat treatments, alloy composition, and structural integrity analysis in automotive parts.", duration: "8 MONTHS" },
              { icon: Settings, title: "Robotics & Automation", desc: "Training on the deployment and maintenance of automated production lines and Industry 4.0 IoT integration systems.", duration: "15 MONTHS" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                className="bg-white border border-[#E2E8F0] p-10 flex flex-col hover:shadow-xl transition-all duration-300 rounded-none h-full"
              >
                <div className="w-10 h-10 bg-[#0B96AC]/5 flex items-center justify-center rounded-sm mb-6">
                  <item.icon className="text-[#0B96AC] w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-bold text-[#191C1E] mb-4">{item.title}</h3>
                <p className="text-[12px] text-[#515F78] leading-relaxed mb-8 opacity-70 flex-grow font-medium">{item.desc}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                    DURATION: {item.duration}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-slate-200" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Research & Innovation Section */}
      <section className="py-24 bg-white font-['Inter']">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Asymmetrical Bento Grid */}
            <div className="w-full lg:w-[46%]">
               <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Holographic Image (Square) */}
                  <div className="col-span-1 aspect-square rounded-none overflow-hidden shadow-sm bg-slate-50">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800" 
                      alt="Holographic Engineering" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* 42+ Patents Card (Portrait - Taller) */}
                  <div className="col-span-1 h-[320px] bg-[#030712] text-white p-8 flex flex-col justify-center rounded-none shadow-sm">
                    <h2 className="text-[48px] font-black text-white leading-none mb-3">42+</h2>
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50">ACTIVE PATENTS IN 2023</p>
                  </div>
               </div>

               {/* R&D Career Paths Card (Wide) */}
               <div className="bg-[#0B96AC] text-white p-8 md:p-10 rounded-none shadow-sm">
                 <h3 className="text-[20px] font-bold mb-4 text-white">R&D Career Paths</h3>
                 <p className="text-[13px] text-white/90 leading-relaxed max-w-lg font-medium">
                   From Material Scientists to Simulation Engineers, our innovation labs thrive on solving complex structural challenges.
                 </p>
               </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-[54%] pt-4">
              <h2 className="text-[32px] font-bold text-[#191C1E] mb-6 leading-tight">Research & Innovation</h2>
              <p className="text-[#8E99AF] text-[13px] leading-[1.8] mb-12 max-w-xl font-medium">
                Our R&D division is the laboratory of the future. We don't just manufacture; we invent. Every year, LBAP invests 12% of its revenue back into fundamental research to ensure we remain at the cutting edge of automotive component technology.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0B96AC] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#191C1E] mb-1">Lightweighting Solutions</h4>
                    <p className="text-[13px] text-[#8E99AF] font-medium leading-relaxed">Developing ultra-high-strength steel alternatives to reduce vehicle mass.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#0B96AC] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#191C1E] mb-1">Zero-Waste Forging</h4>
                    <p className="text-[13px] text-[#8E99AF] font-medium leading-relaxed">Engineering manufacturing processes that minimize resource consumption.</p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <button className="px-10 py-3.5 border border-[#191C1E] text-[12px] font-bold tracking-[0.2em] uppercase text-[#191C1E] hover:bg-[#191C1E] hover:text-white transition-all">
                  Explore Labs
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Precision Opportunities Job Board */}
      <section className="py-24 bg-[#F9FBFC] border-t border-slate-100">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] font-bold text-[#191C1E] mb-4">Precision Opportunities</h2>
            <p className="text-[#8E99AF] text-[14px] font-medium opacity-80">Join a team of 4,000+ experts across our global manufacturing sites.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All Engineering', 'Tool & Die', 'Metallurgy', 'Operations', 'Quality Control'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${
                  activeTab === tab ? 'bg-[#0B96AC] text-white shadow-lg' : 'bg-white text-[#8E99AF] border border-slate-200 hover:border-[#0B96AC]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="max-w-[1100px] mx-auto space-y-4">
            <AnimatePresence mode='popLayout'>
              {(activeTab === 'All Engineering' ? [
                { title: 'Senior Metallurgist (R&D)', location: 'CHENNAI, IN', type: 'FULL-TIME', category: 'Metallurgy', highPriority: true },
                { title: 'Lead Tool & Die Designer', location: 'PUNE, IN', type: 'FULL-TIME', category: 'Tool & Die' },
                { title: 'Robotics Automation Engineer', location: 'GLOBAL OPS', type: 'FULL-TIME', category: 'All Engineering' }
              ] : [
                { title: 'Senior Metallurgist (R&D)', location: 'CHENNAI, IN', type: 'FULL-TIME', category: 'Metallurgy', highPriority: true },
                { title: 'Lead Tool & Die Designer', location: 'PUNE, IN', type: 'FULL-TIME', category: 'Tool & Die' },
                { title: 'Robotics Automation Engineer', location: 'GLOBAL OPS', type: 'FULL-TIME', category: 'All Engineering' }
              ].filter(j => j.category === activeTab)).map((job, idx) => (
                <motion.div 
                  key={job.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm border border-slate-50 group hover:shadow-md transition-all rounded-none"
                >
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                    <h3 className="text-[18px] font-bold text-[#191C1E]">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-[#8E99AF]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{job.type}</span>
                      </div>
                      {job.highPriority && (
                        <div className="flex items-center gap-0">
                           <div className="w-[1.5px] h-3 bg-[#10B981] mr-3"></div>
                           <div className="bg-[#10B981]/5 px-2 py-1">
                              <span className="text-[#10B981] tracking-[0.1em]">HIGH PRIORITY</span>
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="bg-[#0B96AC] text-white px-10 py-3.5 text-[11px] font-bold tracking-widest uppercase hover:bg-[#097b8e] transition-colors shadow-sm whitespace-nowrap">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. Life at LBAP (Figma Polished Match) */}
      <section className="section-padding bg-white pb-32">
        <div className="container-custom">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row rounded-sm overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
            
            {/* Left: Perspective Image */}
            <div className="w-full lg:w-[50%] relative h-[650px] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Lead Design Ananya R." 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 text-white pr-10">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 opacity-80 text-white">VIDEO TESTIMONIAL</p>
                <h3 className="text-[28px] font-bold leading-tight text-white">Engineer Perspective: Ananya R., Lead Design</h3>
              </div>
            </div>

            {/* Right: Text content (Teal BG) */}
            <div className="w-full lg:w-[50%] bg-[#0B96AC] text-white p-14 md:p-24 flex flex-col justify-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-[40px] font-bold mb-10 leading-tight text-white">Life at LBAP</motion.h2>
                <motion.p variants={fadeInUp} className="text-[16px] text-white leading-relaxed mb-16 opacity-95">
                  "At LBAP, we don't just work on cars; we solve the structural puzzles that define the safety and efficiency of modern transport. The culture here is about precision—every micron matters, and every idea is valued if it drives us toward zero defects."
                </motion.p>
                
                <motion.div variants={fadeInUp} className="space-y-12">
                  <div className="flex gap-8 items-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] mb-1 text-white">Inclusive Environment</h4>
                      <p className="text-sm text-white/80">Global teams from 12 nations.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[18px] mb-1 text-white">Wellness & Safety</h4>
                      <p className="text-sm text-white/80">Gold standard occupational health.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Career;
