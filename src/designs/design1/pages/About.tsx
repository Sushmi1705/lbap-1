import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Settings, ShieldCheck, Quote, Globe, ArrowRight, Zap, Target, Award } from 'lucide-react';

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

const About = () => {
  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Hero Section: The Engineering DNA of LBAP (ALIGNED TO START) */}
      <section className="relative h-[650px] flex items-start pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=2000" 
            alt="Industrial Machinery" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1400";
            }}
          />
          {/* Dark Gradient starting from the LEFT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        {/* NO CENTERED CONTAINER - START FROM LEFT */}
        <div className="w-full px-8 md:px-20 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-[54px] font-bold text-white leading-[1.05] mb-8">
              The Engineering DNA of LBAP.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-white/80 text-[16px] leading-relaxed mb-10">
              Laxmi Balaji Automotive Products Pvt Ltd is a world class automotive parts manufacturing company with more than 2 decades of experience in Development, Quality and SCM.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 text-[#0B96AC] font-bold text-[11px] tracking-[0.4em] uppercase">
              <Zap className="w-4 h-4 fill-[#0B96AC]" /> PRECISION AT EVERY MICRO LEVEL
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MD Message & Quote (Figma Match) */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 md:px-20 flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left: MD Letter */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-[55%] border-l-4 border-[#0B96AC] pl-10"
          >
            <h4 className="text-[#0B96AC] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Letter from the Managing Director</h4>
            <div className="space-y-6 text-[#515F78] text-[15px] leading-relaxed opacity-90">
              <p>
                At LBAP, precision automotive components are not just products; they are the manifestation of our engineering philosophy. Over 20 years, we have built a reputation on being more than just a vendor—we are a technical partner to our customers.
              </p>
              <p>
                Our commitment to zero-defect manufacturing and Industry 4.0 standards ensures that every component leaving our facility is a benchmark for the industry.
              </p>
              <div className="pt-6">
                <p className="font-bold text-[#191C1E] text-lg">— Ananth B.</p>
                <p className="text-[11px] font-bold text-[#0B96AC] uppercase tracking-widest mt-1">Managing Director</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Quote Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full lg:w-[45%]"
          >
            <div className="bg-[#F8FAFC] p-12 relative">
              <Quote className="w-16 h-16 text-[#0B96AC]/10 absolute -top-4 -right-4" />
              <p className="text-[22px] md:text-[26px] font-bold text-[#191C1E] leading-tight italic">
                "Precision is not an objective; it is our operational baseline. We do not manufacture parts; we engineer reliability into every chassis and engine we touch."
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Pillars Grid */}
      <section className="section-padding bg-[#F9FBFC] border-y border-gray-100">
        <div className="w-full px-8 md:px-20">
          <div className="mb-16">
            <h2 className="text-[34px] font-bold text-[#191C1E]">Core Engineering Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Precision Machining", desc: "Advanced CNC machining centers delivered with internal protocols for high-precision components." },
              { icon: Settings, title: "Operational Excellence", desc: "Delivering automotive parts that exceed global standards of quality and performance." },
              { icon: ShieldCheck, title: "Supply Chain Reliability", desc: "Fully integrated supply chain systems ensuring JIT delivery to support Tier 1 and Tier 2 OEMs." }
            ].map((p, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-10 border border-gray-100 shadow-sm transition-all">
                <div className="w-10 h-10 bg-[#0B96AC]/10 flex items-center justify-center mb-6">
                  <p.icon className="text-[#0B96AC] w-5 h-5" />
                </div>
                <h3 className="text-[19px] font-bold text-[#191C1E] mb-4">{p.title}</h3>
                <p className="text-[14px] text-[#515F78] leading-relaxed opacity-80">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Standards */}
      <section className="py-12 bg-white">
        <div className="w-full px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <h3 className="text-[22px] font-bold text-[#191C1E]">Global Standards & Compliance</h3>
          <div className="flex flex-wrap gap-6">
            {['IATF 16949: 2016', 'ISO 14001: 2015', 'ISO 45001: 2018'].map(std => (
              <div key={std} className="bg-[#F9FBFC] px-6 py-4 border border-gray-100 text-[11px] font-bold text-[#191C1E]">{std}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Human-Machine Split */}
      <section className="section-padding bg-white">
        <div className="w-full px-8 md:px-20">
          <div className="flex flex-col lg:flex-row overflow-hidden shadow-2xl border border-gray-100 rounded-sm">
            <div className="w-full lg:w-1/2 bg-[#0B96AC] p-16 md:p-20 text-white flex flex-col justify-center">
              <h2 className="text-[34px] font-bold mb-8">Human-Machine Collaboration</h2>
              <p className="text-white/80 text-[15px] leading-relaxed mb-16 opacity-90 max-w-lg">
                We specialize in the synergy between advanced robotics and elite engineering talent for our global automotive clients.
              </p>
              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                {[{ l: 'Centers', v: '450+' }, { l: 'Units', v: '12k+' }, { l: 'Efficiency', v: '99.9%' }, { l: 'Support', v: '24/7' }].map(s => (
                  <div key={s.l}>
                    <p className="text-[32px] font-black mb-1">{s.v}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=90&w=1200" alt="Tech" className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-[#0B96AC] py-16 text-center">
        <div className="w-full px-8 md:px-20">
          <h2 className="text-[32px] font-bold text-white mb-8">Partner with LBAP for Precision Engineering.</h2>
          <button className="bg-white text-[#0B96AC] px-12 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-lg">
            Request Information
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
