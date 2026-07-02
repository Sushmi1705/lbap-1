import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, ArrowRight, MapPin } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

const Home = () => {
  return (
    <div className="w-full bg-white font-sans text-[#515F78] overflow-hidden">
      
      {/* 1. Hero Section (PIXEL PERFECT FIGMA MATCH) */}
      <section className="pt-20 pb-16">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-[45%]"
          >
            <motion.h4 variants={fadeInUp} className="text-[#0B96AC] text-[12px] font-medium tracking-wide mb-3">
              Welcome To LAXMI BALAJI
            </motion.h4>
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-[26px] md:text-[32px] font-medium text-[#191C1E] leading-tight mb-1">
                Manufacturer of export a quality tested
              </p>
              <h1 className="text-[26px] md:text-[32px] font-light text-[#0B96AC] leading-tight">
                Automotive Press Components
              </h1>
            </motion.div>
            
            <div className="space-y-4 text-[#515F78] text-[14px] leading-relaxed mb-8 font-light">
              <p>
                Our Company Founded and managed by hard core technocrats, who are having more than 2 decades of experience in Automotive industry in Development, Quality and SCM.
              </p>
              <p>
                We are pleased to introduce ourselves as one of the sterling Manufacture and supply Pressed components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for many leading automotive customers. Based in Hosur, we have gone from strength to strength to emerge as one of the leading market players in our field.
              </p>
            </div>
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0B96AC] text-white px-8 py-3 text-[14px] font-medium transition-colors hover:bg-[#097b8e] rounded-none"
            >
              Read More
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=100&w=1200" 
                alt="Robotic Assembly" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Partners Bar (Figma Exact) */}
      <section className="bg-[#F8F9FA] border-y border-[#E2E8F0] py-6">
        <div className="container-custom flex flex-wrap justify-between items-center gap-8 grayscale opacity-30">
          {['VOLT-AUTO', 'NEXUS-MOTORS', 'APEX-PARTS', 'TITAN-ENGINEERING', 'FLUX-DYNAMICS'].map((partner) => (
            <span key={partner} className="text-[13px] font-bold tracking-[0.15em] text-[#515F78]">{partner}</span>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us (Figma Exact Style) */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-[34px] font-bold text-[#191C1E] mb-2 inline-block border-b-4 border-[#0B96AC] pb-3">Why Choose Us</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Our Mission", desc: "The continuous development of a company that partners customers in their programs... delivering products... on time... every time. Targeting always to surpass their expectations of us." },
              { icon: Eye, title: "Our Vision", desc: "Laxmi Balaji Automotive Products Pvt Ltd's vision for the future is seen through the keen eye of the present. We are well aware that we must lay the foundation today for a future that is promising and abreast Technology." },
              { icon: ShieldCheck, title: "Our Value", list: ["Personal Integrity", "Social Responsibility", "Trust & Accountability", "Team Work", "Knowledge Enhancement"] }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white border border-[#E2E8F0] p-12 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#0B96AC]/5 flex items-center justify-center mb-8 border border-[#0B96AC]/10">
                  <card.icon className="text-[#0B96AC] w-6 h-6" />
                </div>
                <h3 className="text-[22px] font-bold text-[#191C1E] mb-6">{card.title}</h3>
                {card.desc ? (
                  <p className="text-[14px] leading-relaxed opacity-85">{card.desc}</p>
                ) : (
                  <ul className="space-y-3">
                    {card.list?.map(v => (
                      <li key={v} className="text-[14px] flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#0B96AC] rounded-full"></span> {v}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Products (Figma Exact Style) */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-[34px] font-bold text-[#191C1E] mb-4">Our Products</h2>
            <p className="text-[16px] leading-relaxed opacity-80 max-w-5xl">
              We are the prominent manufacturer & supplier of Automotive Parts, Sheet Metal Parts, Automotive Fabrication Components & Automotive Press Components. These products are easy to use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { unit: "UNIT VI", title: "Automotive Sub Assembly Component", desc: "Backed by the team of skilled professionals, we manufacture, supply and export a wide array of Automotive Sub-Assembly Components.", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
              { unit: "UNIT IV", title: "Non Automotive Parts", desc: "We are engaged in manufacturing & supplying a wide range of Automotive Parts. They are highly appreciated for their various uses such as in various automotive products.", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
              { unit: "UNIT II", title: "Press Tools", desc: "We are engaged in manufacturing & supplying a wide range of Automotive Parts. They are highly appreciated for their various uses such as in various automotive parts.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" }
            ].map((prod, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                <div className="h-[220px] overflow-hidden mb-6 border border-[#E2E8F0]">
                  <img src={prod.img} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[#0B96AC] text-[10px] font-bold tracking-wider mb-1">{prod.unit}</p>
                <h3 className="text-[18px] font-bold text-[#191C1E] mb-2 group-hover:text-[#0B96AC] transition-colors leading-tight">{prod.title}</h3>
                <p className="text-[12px] text-[#515F78] font-light leading-relaxed">{prod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Banner (FIGMA PIXEL PERFECT) */}
      <section className="bg-[#0B96AC] py-20">
        <div className="container-custom text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[42px] font-bold text-white mb-5 tracking-tight"
          >
            Ready to optimize your production?
          </motion.h2>
          <p className="text-white/80 text-[17px] mb-12 max-w-2xl mx-auto opacity-90">
            Manufacturer of Automotive Fabrication Components... Don't hesitate to contact us for details.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-[#0B96AC] px-12 py-4.5 text-[13px] font-bold shadow-xl hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-12 py-4.5 text-[13px] font-bold hover:bg-white hover:text-[#0B96AC] transition-all">
              More Details
            </button>
          </div>
        </div>
      </section>

      {/* 6. Form and Map (FIGMA PIXEL PERFECT) */}
      <section className="section-padding pb-32 bg-white">
        <div className="container-custom flex flex-col lg:flex-row gap-20">
          
          {/* Form Side */}
          <div className="w-full lg:w-[45%] bg-[#F1F4F9] p-8 md:p-12 rounded-[24px]">
            <h3 className="text-[18px] font-bold text-[#191C1E] mb-10 uppercase tracking-widest">Request Information</h3>
            <form className="space-y-5">
              {[
                { label: 'Name :', type: 'text' },
                { label: 'Email Address :', type: 'email' },
                { label: 'Phone Num :', type: 'text' },
                { label: 'Product :', type: 'text' },
                { label: 'Message :', type: 'text' }
              ].map((f) => (
                <div key={f.label} className="relative">
                  <input 
                    type={f.type}
                    placeholder={f.label}
                    className="w-full bg-white border-none px-6 py-4 text-[14px] outline-none rounded-lg shadow-sm placeholder:text-[#8E99AF]" 
                  />
                </div>
              ))}
              <div className="pt-4">
                <button className="bg-[#0B96AC] text-white px-10 py-4 text-[14px] font-bold transition-all hover:bg-[#097b8e] rounded-lg shadow-md uppercase tracking-wider">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-[55%] pt-6">
            <h3 className="text-[18px] font-bold text-[#191C1E] mb-10 uppercase tracking-widest">Open In Map</h3>
            <div className="relative rounded-[24px] overflow-hidden h-[500px] shadow-sm border border-[#E2E8F0]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.30325492265!2d77.8447814!3d12.9102434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12c8a2434311%3A0xe54d6f8303e91129!2sSIPCOT%20Industrial%20Complex%2C%20Hosur!5e0!3m2!1sen!2sin!4v1715180000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
