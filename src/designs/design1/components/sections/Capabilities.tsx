import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Award } from 'lucide-react';

const Capabilities = () => {
  const stats = [
    { label: 'Power Presses', value: '10T - 200T', icon: Zap, detail: 'High-speed progressive capability' },
    { label: 'Standards', value: 'IATF 16949', icon: Award, detail: 'Certified quality management' },
    { label: 'Throughput', value: '200M+', icon: Activity, detail: 'Annual component production' },
    { label: 'Accuracy', value: '±0.01mm', icon: Cpu, detail: 'Precision tolerance control' }
  ];

  return (
    <section className="section-padding bg-brand-dark overflow-hidden relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-teal" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-teal">Infrastructure</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
              World-Class <br />
              <span className="text-white/40">Facility &</span> <br />
              Machinery
            </h2>
            
            <p className="text-xl text-white/50 mb-12 leading-relaxed font-light">
              Our Hosur-based facility is a powerhouse of precision, equipped with advanced stamping lines and state-of-the-art mechatronic assembly stations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 rounded-2xl bg-brand-surface/30 border border-white/5 hover:border-brand-teal/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <div className="text-3xl font-black mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-xs text-white/40 font-medium">{stat.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Geometric Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-brand-teal/20 rounded-full animate-spin-slow" 
                 style={{ animationDuration: '20s' }} />
            
            <div className="relative premium-card p-4 border-2 border-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80" 
                alt="Industrial Machinery"
                className="rounded-xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              {/* Floating Quality Badge */}
              <div className="absolute bottom-10 right-10 bg-brand-teal p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,139,155,0.4)] max-w-[220px] backdrop-blur-md">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-1 h-1 rounded-full bg-white/40" />)}
                </div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter italic">100%</div>
                <div className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                  Reliability <br />Standards
                </div>
              </div>
              
              {/* Technical Overlay Lines */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
