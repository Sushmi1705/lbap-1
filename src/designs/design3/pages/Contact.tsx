import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Upload, Globe, Mail, Phone, MapPin, Activity, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    ref: '',
    requirements: '',
    ndaChecked: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  // Form input validation checks
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.org.trim()) newErrors.org = 'OEM Organization is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid corporate email';
    }
    return newErrors;
  };

  const handleInputChange = (field: string, val: string | boolean) => {
    setFormData({ ...formData, [field]: val });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorBanner(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setErrors({});
    setShowErrorBanner(false);
    setIsSubmitting(true);

    // Simulate backend transmission lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      org: '',
      ref: '',
      requirements: '',
      ndaChecked: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Navigation */}
      <Navbar activePage="contact" />

      {/* --- Contact Hero Section --- */}
      <section className="pt-32 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="border-l-2 border-[#0B96AC] pl-8 mb-16">
               <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-4">
                 COMMERCIAL_CHANNELS // OEM_PORTAL
               </div>
               <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.9]">Technical Partnership Portal</h1>
               <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                  Precision-engineered procurement channels for global OEM partners. Submit technical specifications, progressive tooling RFQs, and secure pre-signed NDA documentation.
               </p>
            </div>

            {/* Interactive HQ Contact Cards */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
               {[
                 { title: "Plant Address", desc: "Plot No. 16-C, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu, India", icon: MapPin },
                 { title: "Phone Hotline", desc: "+91 99943 97522\n+91 97900 05516", icon: Phone },
                 { title: "Email Support", desc: "jotheeslbap@gmail.com\njotheeslb@lbap.in", icon: Mail },
                 { title: "Working Hours", desc: "Mon - Sat: 10:00 AM - 6:00 PM\nSunday: Closed Support", icon: Clock }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   variants={fadeInUp}
                   whileHover={{ y: -4, borderColor: "rgba(11, 150, 172, 0.4)" }}
                   className="bg-[#0F1319] border border-white/5 p-6 rounded-xl flex flex-col justify-between group transition-all duration-300 min-h-[160px]"
                 >
                    <div className="w-10 h-10 bg-slate-900 border border-white/5 rounded flex items-center justify-center mb-4 text-[#0B96AC] group-hover:bg-[#0B96AC] group-hover:text-white transition-colors">
                       <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">{item.title}</h4>
                       <p className="text-slate-400 text-[10px] sm:text-[11px] leading-relaxed font-sans font-medium whitespace-pre-line">
                          {item.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               
               {/* Left: Advanced RFQ Intake System */}
               <div className="lg:col-span-8 bg-[#0F1319] border border-white/5 p-8 md:p-10 rounded-xl relative group transition-all duration-300 hover:border-white/10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0B96AC]"></div>
                  
                  <AnimatePresence mode="wait">
                     {!isSubmitted ? (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                           <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                              <FileText className="w-5 h-5 text-[#0B96AC]" />
                              <h2 className="text-lg font-bold text-white uppercase tracking-tight">Advanced RFQ Intake System</h2>
                           </div>

                           {/* Validation Failure Error Banner */}
                           <AnimatePresence>
                              {showErrorBanner && (
                                <motion.div 
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center gap-3 text-xs font-semibold text-rose-400"
                                >
                                   <AlertCircle className="w-5 h-5 shrink-0" />
                                   <div>
                                      <span className="font-bold">SYSTEM ERROR: VALIDATION_FAILED</span> - Please fill in all required fields marked in red.
                                   </div>
                                </motion.div>
                              )}
                           </AnimatePresence>

                           <form onSubmit={handleSubmit} className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                                    <input 
                                      type="text" 
                                      placeholder="Engineering Lead Name" 
                                      value={formData.name}
                                      onChange={(e) => handleInputChange('name', e.target.value)}
                                      className={`w-full bg-slate-900 border py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                        errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5'
                                      }`} 
                                    />
                                    {errors.name && <span className="text-[9px] font-mono text-rose-400 block">{errors.name}</span>}
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Corporate Email *</label>
                                    <input 
                                      type="text" 
                                      placeholder="name@oem-partner.com" 
                                      value={formData.email}
                                      onChange={(e) => handleInputChange('email', e.target.value)}
                                      className={`w-full bg-slate-900 border py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                        errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5'
                                      }`} 
                                    />
                                    {errors.email && <span className="text-[9px] font-mono text-rose-400 block">{errors.email}</span>}
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">OEM Organization *</label>
                                    <input 
                                      type="text" 
                                      placeholder="Company Legal Entity" 
                                      value={formData.org}
                                      onChange={(e) => handleInputChange('org', e.target.value)}
                                      className={`w-full bg-slate-900 border py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                        errors.org ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/5'
                                      }`} 
                                    />
                                    {errors.org && <span className="text-[9px] font-mono text-rose-400 block">{errors.org}</span>}
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Project Reference</label>
                                    <input 
                                      type="text" 
                                      placeholder="Internal Project Code" 
                                      value={formData.ref}
                                      onChange={(e) => handleInputChange('ref', e.target.value)}
                                      className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded" 
                                    />
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Technical Documentation & CAD Files</label>
                                 <div className="border border-dashed border-white/10 bg-slate-900/50 p-10 rounded-lg flex flex-col items-center justify-center group hover:border-[#0B96AC]/30 transition-all cursor-pointer">
                                    <Upload className="w-8 h-8 text-slate-600 mb-4 group-hover:scale-105 group-hover:text-[#0B96AC] transition-all" />
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Drag and drop technical specification files here</p>
                                    <p className="text-[8px] font-bold text-slate-550 mt-1 tracking-wider uppercase text-center">Accepted: .DWG, .STEP, .PDF (Max File Size: 100MB per file)</p>
                                 </div>
                              </div>

                              <div className="space-y-2">
                                 <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Technical Requirements Summary</label>
                                 <textarea 
                                    rows={4} 
                                    placeholder="Describe tolerance thresholds, material specs, volume expectations..."
                                    value={formData.requirements}
                                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                                    className="w-full bg-slate-900 border border-white/5 py-3 px-4 text-xs font-semibold text-white outline-none focus:border-[#0B96AC]/40 transition-all resize-none rounded"
                                 ></textarea>
                              </div>

                              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                                 <label className="flex items-center gap-3 cursor-pointer group w-full md:w-auto">
                                    <input 
                                      type="checkbox" 
                                      checked={formData.ndaChecked}
                                      onChange={(e) => handleInputChange('ndaChecked', e.target.checked)}
                                      className="w-4 h-4 border border-white/10 bg-slate-900 rounded checked:bg-[#0B96AC] transition-all" 
                                    />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">Include Pre-Signed NDA in Documentation</span>
                                 </label>
                                 
                                 <button 
                                   type="submit" 
                                   disabled={isSubmitting}
                                   className="bg-[#0B96AC] hover:bg-[#097b8d] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/15 transition-all w-full md:w-auto flex items-center justify-center gap-2"
                                 >
                                    {isSubmitting ? (
                                      <>
                                         <Loader2 className="w-4 h-4 animate-spin" />
                                         TRANSMITTING...
                                      </>
                                    ) : (
                                      'Submit RFQ Package'
                                    )}
                                 </button>
                              </div>
                           </form>
                        </motion.div>
                     ) : (
                        // --- Animated Full-Screen Submission Success Console ---
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center py-10"
                        >
                           <div className="w-16 h-16 bg-[#0B96AC]/15 border border-[#0B96AC] text-[#0B96AC] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                              <CheckCircle2 className="w-8 h-8" />
                           </div>
                           <span className="text-[9px] font-mono text-[#0B96AC] tracking-widest block mb-2">TRANSMISSION SUCCESSFUL // BATCH_COMMITTED</span>
                           <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                              RFQ intake accepted
                           </h2>
                           <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-sans font-medium mb-8">
                              Your project specifications have been logged inside our procurement system. A Regional Sales Engineer representing {formData.org} will verify the technical files and respond within 12 business hours.
                           </p>

                           {/* Summary Ledger Receipt */}
                           <div className="max-w-sm mx-auto bg-slate-950 border border-white/5 rounded-xl p-5 font-mono text-[9px] text-left space-y-2.5 mb-8">
                              <span className="text-slate-550 border-b border-white/5 pb-2 block font-bold uppercase">TRANSMISSION RECEIPT</span>
                              <div className="flex justify-between">
                                 <span className="text-slate-450">Requester</span>
                                 <span className="text-white font-bold">{formData.name}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span className="text-slate-450">Organization</span>
                                 <span className="text-white font-bold">{formData.org}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span className="text-slate-450">Target Email</span>
                                 <span className="text-white font-bold">{formData.email}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span className="text-slate-450">Project Ref</span>
                                 <span className="text-white font-bold">{formData.ref || "NONE_LOGGED"}</span>
                              </div>
                              <div className="flex justify-between">
                                 <span className="text-slate-450">NDA Check</span>
                                 <span className="text-white font-bold">{formData.ndaChecked ? "YES // BOUND" : "NO"}</span>
                              </div>
                           </div>

                           <button 
                             onClick={resetForm}
                             className="px-6 py-3 bg-white/5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest text-[#0B96AC] hover:bg-[#0B96AC] hover:text-white hover:border-[#0B96AC] transition-all"
                           >
                              Reset Portal Intake
                           </button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Right: Regional Leads & Stats */}
               <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col group relative overflow-hidden">
                     <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#0B96AC]"></div>
                     <span className="text-[9px] font-bold text-[#0B96AC] uppercase tracking-wider mb-6 block">REGIONAL SALES ENGINEERS</span>
                     
                     <div className="space-y-6">
                        {[
                           { name: "Marcus Thorne", role: "EMEA LEAD - POWER TRAIN SYSTEMS", email: "m.thorne@lbap.tech", img: "https://i.pravatar.cc/100?img=11" },
                           { name: "Dr. Elena Rodriguez", role: "AMERICAS LEAD - CHASSIS DESIGN", email: "e.rodriguez@lbap.tech", img: "https://i.pravatar.cc/100?img=12" },
                           { name: "Chen Wei", role: "APAC LEAD - SYSTEMS LOGISTICS", email: "c.wei@lbap.tech", img: "https://i.pravatar.cc/100?img=13" }
                        ].map((lead, i) => (
                           <div key={i} className="flex gap-4 items-start group/lead border-b border-white/5 pb-4 last:border-0 last:pb-0">
                              <div className="w-10 h-10 rounded overflow-hidden shrink-0 grayscale group-hover/lead:grayscale-0 transition-all border border-white/10">
                                 <img src={lead.img} alt={lead.name} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                 <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">{lead.name}</h5>
                                 <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">{lead.role}</p>
                                 <p className="text-[10px] font-semibold text-[#0B96AC] font-mono">{lead.email}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Global Hubs Telemetry */}
                  <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group relative overflow-hidden">
                     <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#0B96AC]"></div>
                     <span className="text-[9px] font-bold uppercase tracking-wider text-[#0B96AC] mb-6 block font-mono">GLOBAL HUBS METRICS</span>
                     
                     <div className="space-y-4 mb-6">
                        {[
                           { hub: "HUB_ALPHA: STUTTGART", coord: "48.7758° N" },
                           { hub: "HUB_BETA: DETROIT", coord: "42.3314° N" },
                           { hub: "HUB_GAMMA: TOKYO", coord: "35.6762° N" }
                        ].map((hub, i) => (
                           <div key={i} className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase border-b border-white/5 pb-2 last:border-0 last:pb-0">
                              <span className="text-slate-400">{hub.hub}</span>
                              <span className="text-[#0B96AC] font-mono">{hub.coord}</span>
                           </div>
                        ))}
                     </div>
                     <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">NETWORK OPERATIONS: ACTIVE</span>
                     </div>
                  </div>

                  {/* Google Map Embed of Hosur SIPCOT Phase 2 */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5 group bg-slate-950 shadow-2xl">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.312952402434!2d77.96216437593674!3d12.692866687602058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae718f4305dfd7%3A0xe104cf5e28a5ff0c!2sSipcot%20Phase%20II%20Industrial%20Area%2C%20Hosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                       className="w-full h-full border-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                       allowFullScreen 
                       loading="lazy"
                     ></iframe>
                     
                     <div className="absolute top-4 left-4 bg-slate-950/90 border border-white/5 rounded px-2.5 py-1 font-mono text-[8px] text-[#0B96AC]">
                        GPS: 12.6928° N, 77.9621° E
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Contact;
