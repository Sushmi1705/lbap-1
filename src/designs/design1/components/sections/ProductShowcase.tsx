import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase = () => {
  const categories = [
    {
      id: '01',
      title: 'Automotive Press Components',
      description: 'Specialized in high-speed progressive and precision metal stamping for critical automotive assemblies.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
      tags: ['Progressive Die', 'Precision Stamping', 'Mass Production']
    },
    {
      id: '02',
      title: 'Automotive Sub Assembly',
      description: 'Comprehensive mechatronic systems that integrate multiple automotive spare part components.',
      image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80',
      tags: ['Mechatronics', 'Integration', 'Quality Tested']
    },
    {
      id: '03',
      title: 'Non Automotive Parts',
      description: 'Highly appreciated custom sheet metal parts for diverse industrial and consumer applications.',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80',
      tags: ['Industrial Parts', 'Custom Solutions', 'Sheet Metal']
    },
    {
      id: '04',
      title: 'Press Tools',
      description: 'Expert manufacture and supply of custom-designed pressed tools for various manufacturing needs.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80',
      tags: ['Custom Tooling', 'Tool Design', 'Manufacturing']
    }
  ];

  return (
    <section className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 right-0 w-1/3 h-full bg-brand-teal/5 blur-[120px] -z-10" />
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-gold" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.9]">
              ENGINEERING <span className="text-white/40">THE FUTURE OF</span> AUTOMOTIVE
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl">
              From high-speed progressive dies to complex mechatronic sub-assemblies, we deliver precision engineering that fuels the global automotive industry.
            </p>
          </div>
          <button className="btn-premium-outline group uppercase tracking-widest text-[10px] font-black py-4 px-10 rounded-full border-white/20">
            View Technical Specs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="premium-card group"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                
                {/* Product Number Overlay */}
                <div className="absolute top-6 right-6 text-7xl font-black text-white/5 group-hover:text-brand-teal/20 transition-colors tracking-tighter">
                  {item.id}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-brand-teal/20 backdrop-blur-md border border-brand-teal/30 rounded-full text-brand-teal">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-10 relative">
                {/* Decorative Icon */}
                <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-brand-teal/30 group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-brand-teal transition-colors" />
                </div>
                
                <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-brand-teal transition-colors uppercase">
                  {item.title}
                </h3>
                <p className="text-white/50 mb-10 leading-relaxed font-light">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-brand-teal transition-all duration-500 group-hover:w-16" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">
                    Explore Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
