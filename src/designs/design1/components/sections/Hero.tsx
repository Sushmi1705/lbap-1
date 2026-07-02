import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-44 overflow-hidden bg-[#0a0c10]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-in-a-factory-10023-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent z-10" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 -left-24 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[180px] animate-pulse z-0" />

      <div className="container-custom relative z-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-5 mb-12">
              <div className="h-[2px] w-16 bg-brand-teal" />
              <span className="text-xs font-black uppercase tracking-[0.6em] text-brand-teal">IATF 16949:2016 CERTIFIED</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-14 leading-[0.9] tracking-tighter brand-gradient-text uppercase">
              ENGINEERING <br />
              <span className="text-white/20 italic">THE EDGE OF</span> <br />
              PRECISION
            </h1>

            <p className="text-xl md:text-2xl text-white/40 mb-20 leading-relaxed max-w-3xl font-light">
              Pioneering excellence in high-speed progressive metal stamping for global automotive leaders. Reliability engineered into every micron.
            </p>

            <div className="flex flex-wrap gap-10 mb-28">
              <button className="btn-premium !py-6 !px-14 !text-sm !rounded-2xl group flex items-center gap-4">
                Explore Solutions <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
              
              <div className="flex items-center gap-8 px-10 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] group cursor-pointer hover:bg-white/10 transition-all shadow-2xl">
                <div className="w-14 h-14 rounded-full border-2 border-brand-teal flex items-center justify-center text-brand-teal bg-brand-teal/5 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">Watch Showcase</span>
                  <span className="text-sm font-black uppercase tracking-widest text-white">Precision in Motion</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-20 border-t border-white/10 pt-24"
          >
            {[
              { label: 'Experience', value: '25+', unit: 'Years' },
              { label: 'Global Clients', value: '50+', unit: 'Partners' },
              { label: 'Annual Parts', value: '200M+', unit: 'Production' },
              { label: 'Quality Rating', value: '100%', unit: 'Standard' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col group">
                <div className="text-5xl md:text-6xl font-black text-brand-teal mb-4 tracking-tighter italic group-hover:text-brand-gold transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
