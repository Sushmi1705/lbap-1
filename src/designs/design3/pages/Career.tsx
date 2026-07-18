import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  ChevronRight,
  Target,
  X,
  Upload,
  Briefcase,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface JobItem {
  id: string;
  pos: string;
  dept: string;
  loc: string;
  level: string;
  desc: string;
  requirements: string[];
}

const Career = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDept, setActiveDept] = useState('all');
  const [selectedJob, setSelectedJob] = useState<JobItem | null>(null);

  // Form states inside the job application modal
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    experience: '',
    coverNote: '',
    ndaConsent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);

  // Open positions localized to Hosur, IN matching Laxmi Balaji's factory
  const positionsList: JobItem[] = [
    { 
      id: "LB-902", 
      pos: "Automation Systems Engineer", 
      dept: "robotics", 
      loc: "Hosur, IN", 
      level: "L3 SENIOR",
      desc: "Lead the calibration and integration of 6-axis spot welding robotic arms and automated transfer systems on chassis lines.",
      requirements: ["B.E./B.Tech in Robotics or Mechatronics", "4+ years experience in automotive automation", "Expertise in PLC programming (Siemens/Allen-Bradley)"]
    },
    { 
      id: "LB-415", 
      pos: "Chassis Tooling Designer", 
      dept: "engineering", 
      loc: "Hosur, IN", 
      level: "L2 MID",
      desc: "Design progressive stamping dies and heavy forming punch molds using finite element analysis (FEA) CAD suites.",
      requirements: ["B.E. in Mechanical Engineering", "2-4 years progressive die design experience", "Proficiency in SolidWorks or NX CAD"]
    },
    { 
      id: "LB-203", 
      pos: "CNC Laser Specialist", 
      dept: "production", 
      loc: "Hosur, IN", 
      level: "L3 MID",
      desc: "Supervise automated CNC laser cutting systems, optimization of sheet nesting patterns, and laser calibration checks.",
      requirements: ["Diploma or B.E. in Production Engineering", "3+ years operating high-capacity laser systems", "Strong understanding of metal alloy behaviors"]
    },
    { 
      id: "LB-118", 
      pos: "Junior Quality Inspector", 
      dept: "quality", 
      loc: "Hosur, IN", 
      level: "L1 JUNIOR",
      desc: "Execute dimensional quality inspections inside cleanroom labs using Zeiss Coordinate Measuring Machines (CMM).",
      requirements: ["Diploma in Mechanical Engineering", "1+ year experience in metrology / QC labs", "Familiarity with GD&T inspection guidelines"]
    }
  ];

  // Filters positions on query and department tab
  const getFilteredJobs = () => {
    let result = positionsList;

    if (activeDept !== 'all') {
      result = result.filter(j => j.dept === activeDept);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(j => 
        j.pos.toLowerCase().includes(q) ||
        j.id.toLowerCase().includes(q) ||
        j.level.toLowerCase().includes(q)
      );
    }

    return result;
  };

  const filteredJobs = getFilteredJobs();

  // Validate form in modal
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!appForm.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!appForm.email.trim()) {
      newErrors.email = 'Corporate Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appForm.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!appForm.experience.trim()) newErrors.experience = 'Experience level is required';
    return newErrors;
  };

  const handleInputChange = (field: string, val: string | boolean) => {
    setAppForm({ ...appForm, [field]: val });
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
      return;
    }

    setErrors({});
    setShowErrorBanner(false);
    setIsSubmitting(true);

    // Simulate backend CV processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const closeJobModal = () => {
    setSelectedJob(null);
    setAppForm({
      fullName: '',
      email: '',
      experience: '',
      coverNote: '',
      ndaConsent: false
    });
    setErrors({});
    setIsSubmitted(false);
    setShowErrorBanner(false);
  };

  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#090B0E] text-slate-100 font-['Outfit'] selection:bg-[#0B96AC]/20 selection:text-[#0B96AC] overflow-x-hidden min-h-screen">
      
      {/* Shared Sticky Header */}
      <Navbar activePage="career" />

      {/* --- Career Hero Section --- */}
      <section className="pt-32 pb-16 bg-slate-950 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#0b96ac0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_80%,#090B0E_100%)] pointer-events-none"></div>
         
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-mono tracking-widest text-[#0B96AC] mb-6">
                    HUMAN_CAPITAL // SYSTEMS_ENGINEERING
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                     The Future of <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#0B96AC]">Mobility</span> Begins Here
                  </h1>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium">
                     Engineered for precision. Driven by innovation. LBAP is recruiting the next generation of automotive engineers to redefine high-performance manufacturing.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <a href="#positions" className="bg-[#0B96AC] text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded shadow-xl shadow-[#0B96AC]/25 hover:bg-[#097b8d] transition-all text-center">
                       View Open Positions
                     </a>
                     <button className="bg-slate-900 border border-white/10 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest rounded hover:bg-slate-800 transition-all text-center">
                       Engineering Ethos
                     </button>
                  </div>
               </div>
               
               <div className="lg:col-span-5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/5 group bg-slate-900">
                      <img 
                         src="http://lbap.in/img/C2.jpg" 
                         alt="Advanced Manufacturing Lab" 
                         className="w-full h-full object-cover grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-700"
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Engineering Career Roadmap Section --- */}
      <section className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="mb-16">
               <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Professional Trajectory</span>
               <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-white mb-4">Engineering Roadmap</h2>
               <p className="text-slate-400 text-sm max-w-2xl font-medium">
                  Our structured trajectory for new hires ensures technical mastery within 24 months. Precision training for precision manufacturing.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div>
                    <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-4 block">01 // INITIAL_ORIENTATION</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">System Fundamentals</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Deep dive into LBAP proprietary manufacturing protocols, CNC precision standards, and automated assembly line architecture.
                    </p>
                  </div>
               </div>
               
               <div className="bg-[#0B96AC] text-white p-8 rounded-xl flex flex-col justify-between shadow-2xl shadow-[#0B96AC]/15">
                  <div>
                    <span className="text-white/60 text-[9px] font-mono tracking-widest mb-4 block">02 // ACTIVE_MENTORSHIP</span>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Technical Shadowing</h3>
                    <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Partner with a Senior Lead Engineer to optimize troubleshooting cycles on active chassis production lines.
                    </p>
                  </div>
                  <Users className="w-6 h-6 text-white/40" />
               </div>
               
               <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col justify-between group hover:border-[#0B96AC]/45 transition-all duration-300">
                  <div>
                    <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-4 block">03 // ADVANCED_LABS</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">R&D Sprint</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                       Propose and prototype a single-component optimization for existing drive-train assemblies and EV cells.
                    </p>
                  </div>
               </div>
            </div>
            
            <div className="bg-[#0F1319] border border-white/5 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
               <div>
                  <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest mb-2 block">04 // LEADERSHIP_STAGE</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Lead Systems Architect</h3>
               </div>
               <div className="flex items-center gap-12">
                  <div className="text-center">
                     <span className="text-4xl font-black text-white tracking-tighter block font-mono">24</span>
                     <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">MONTH TIMELINE</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <p className="text-[11px] font-semibold text-slate-400 max-w-[200px] leading-relaxed">Graduation into full product ownership within the Advanced Mobility Division.</p>
                     <CheckCircle2 className="w-5 h-5 text-[#0B96AC]" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- Mentorship Section --- */}
      <section className="py-24 bg-slate-950 border-b border-white/5 relative">
         <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-6 relative aspect-square overflow-hidden rounded-xl border border-white/5 group bg-slate-900 shadow-2xl">
                   <img 
                     src="http://lbap.in/img/banner/2.jpg" 
                     alt="Mentorship and Training" 
                     className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
                   />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
               </div>
               
               <div className="lg:col-span-6">
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Knowledge Transfer Protocols</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">Clinical Precision Mentorship</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                     Our mentorship program is not an informal pairing. It is a documented technical curriculum where Senior Engineers transfer decades of automotive intellectual property.
                  </p>
                  <ul className="space-y-4">
                     {[
                        "Bi-weekly technical reviews and schematic audits.",
                        "Direct access to the LBAP Global Patents database.",
                        "Quarterly rotations through Design, Production, and Quality Control."
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                           <CheckCircle2 className="w-4.5 h-4.5 text-[#0B96AC] shrink-0" />
                           <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* --- Open Positions Section --- */}
      <section id="positions" className="py-24 bg-[#090B0E] relative border-b border-white/5">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
               <div>
                  <span className="text-[#0B96AC] text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Active Recruitment</span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-white">Open Positions</h2>
               </div>
               
               {/* Search & Tabs */}
               <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
                  <div className="flex items-center gap-2 bg-[#0F1319] border border-white/5 rounded px-4 py-2 w-full sm:w-64">
                     <Search className="w-4 h-4 text-slate-500" />
                     <input 
                       type="text" 
                       placeholder="Search Roles (e.g. CNC, Robotic)" 
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="bg-transparent border-none text-white text-xs font-bold focus:ring-0 focus:outline-none w-full placeholder-slate-600" 
                     />
                     {searchQuery && (
                       <button onClick={() => setSearchQuery('')}>
                          <X className="w-4 h-4 text-slate-500 hover:text-white" />
                       </button>
                     )}
                  </div>
                  
                  {/* Category select tags */}
                  <div className="flex gap-2">
                     {['all', 'robotics', 'engineering', 'production', 'quality'].map((dept) => (
                        <button
                          key={dept}
                          onClick={() => setActiveDept(dept)}
                          className={`px-3 py-1.5 rounded text-[9px] font-bold uppercase tracking-wider transition-all border ${
                            activeDept === dept
                              ? 'bg-[#0B96AC]/15 border-[#0B96AC] text-white'
                              : 'bg-[#0F1319] border-white/5 text-slate-400 hover:border-white/10'
                          }`}
                        >
                           {dept}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
            
            {/* Table layout */}
            <div className="overflow-hidden rounded-xl border border-white/5 shadow-2xl bg-slate-950">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-slate-900 border-b border-white/5 text-slate-400 font-mono text-[9px] uppercase tracking-wider">
                        <th className="p-5 pl-6">ROLE ID</th>
                        <th className="p-5">POSITION</th>
                        <th className="p-5">DEPARTMENT</th>
                        <th className="p-5">OFFICE LOCATION</th>
                        <th className="p-5 pr-6 text-right">ACTION</th>
                     </tr>
                  </thead>
                  <tbody className="text-xs font-semibold text-slate-400 font-mono divide-y divide-white/5">
                     {filteredJobs.map((item, i) => (
                        <tr 
                          key={i} 
                          onClick={() => setSelectedJob(item)}
                          className="hover:bg-white/5 transition-colors cursor-pointer group"
                        >
                           <td className="p-5 pl-6 text-slate-400 font-bold">{item.id}</td>
                           <td className="p-5 text-white font-bold font-sans group-hover:text-[#0B96AC] transition-colors">{item.pos}</td>
                           <td className="p-5 font-sans uppercase text-[10px]">{item.dept}</td>
                           <td className="p-5 font-sans">{item.loc}</td>
                           <td className="p-5 pr-6 text-right">
                              <span className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-wider flex items-center justify-end gap-1 group-hover:translate-x-1 transition-transform">
                                 Apply <ChevronRight className="w-3.5 h-3.5" />
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-slate-950 border border-white/5 rounded-xl mt-4 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                 No active open positions match filters.
              </div>
            )}
         </div>
      </section>

      {/* --- Detailed Job Application Modal --- */}
      <AnimatePresence>
         {selectedJob && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={closeJobModal}
             className="fixed inset-0 z-[150] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
           >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0F1319] border border-white/10 rounded-2xl max-w-2xl w-full relative overflow-hidden shadow-2xl p-8"
              >
                 {/* Decorative top bar */}
                 <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-500 to-[#0B96AC]"></div>

                 {/* Close button */}
                 <button 
                   onClick={closeJobModal}
                   className="absolute right-6 top-6 text-slate-500 hover:text-white bg-slate-950/80 p-2 rounded-full border border-white/5 transition-colors z-20"
                 >
                    <X className="w-4 h-4" />
                 </button>

                 <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.div 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                      >
                         <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <Briefcase className="w-5 h-5 text-[#0B96AC]" />
                            <div>
                               <span className="text-[#0B96AC] text-[9px] font-mono tracking-widest uppercase block">{selectedJob.id} // {selectedJob.level}</span>
                               <h2 className="text-xl font-black text-white uppercase tracking-tight leading-tight">{selectedJob.pos}</h2>
                            </div>
                         </div>

                         {/* Job details summary */}
                         <div className="bg-slate-950/40 p-4 border border-white/5 rounded-xl text-xs space-y-4">
                            <p className="text-slate-400 leading-relaxed font-sans">{selectedJob.desc}</p>
                            <div>
                               <span className="text-[9px] font-bold text-white uppercase tracking-wider block mb-2">Qualifications required:</span>
                               <ul className="space-y-1 text-slate-350 list-disc list-inside text-[11px] font-sans">
                                  {selectedJob.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                  ))}
                               </ul>
                            </div>
                         </div>

                         {/* Error Banner */}
                         <AnimatePresence>
                            {showErrorBanner && (
                              <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center gap-3 text-xs font-semibold text-rose-400"
                              >
                                 <AlertCircle className="w-5 h-5 shrink-0" />
                                 <span>Please fill in all required inputs highlighted below.</span>
                              </motion.div>
                            )}
                         </AnimatePresence>

                         {/* Application inputs */}
                         <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                               <div className="space-y-1">
                                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                                  <input 
                                    type="text" 
                                    placeholder="Enter full name"
                                    value={appForm.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    className={`w-full bg-slate-900 border py-2.5 px-3.5 text-xs text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                      errors.fullName ? 'border-rose-500/50' : 'border-white/5'
                                    }`}
                                  />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Email Address *</label>
                                  <input 
                                    type="text" 
                                    placeholder="Enter email address"
                                    value={appForm.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className={`w-full bg-slate-900 border py-2.5 px-3.5 text-xs text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                      errors.email ? 'border-rose-500/50' : 'border-white/5'
                                    }`}
                                  />
                               </div>
                            </div>

                            <div className="space-y-1">
                               <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Years of Experience *</label>
                               <input 
                                 type="text" 
                                 placeholder="e.g. 3 years in spot welding lines"
                                 value={appForm.experience}
                                 onChange={(e) => handleInputChange('experience', e.target.value)}
                                 className={`w-full bg-slate-900 border py-2.5 px-3.5 text-xs text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded ${
                                   errors.experience ? 'border-rose-500/50' : 'border-white/5'
                                 }`}
                               />
                            </div>

                            <div className="space-y-1">
                               <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">CV Attachment Upload</label>
                               <div className="border border-dashed border-white/10 bg-slate-900 p-6 rounded-lg flex items-center justify-center gap-3 hover:border-[#0B96AC]/30 transition-colors cursor-pointer">
                                  <Upload className="w-5 h-5 text-slate-500" />
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Select Resume File (.PDF / .DOCX)</span>
                               </div>
                            </div>

                            <div className="space-y-1">
                               <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Cover Note</label>
                               <textarea 
                                 rows={3} 
                                 placeholder="Why are you a fit for LBAP's technical team?"
                                 value={appForm.coverNote}
                                 onChange={(e) => handleInputChange('coverNote', e.target.value)}
                                 className="w-full bg-slate-900 border border-white/5 py-2.5 px-3.5 text-xs text-white outline-none focus:border-[#0B96AC]/40 transition-all rounded resize-none"
                               ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                               <label className="flex items-center gap-2.5 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={appForm.ndaConsent}
                                    onChange={(e) => handleInputChange('ndaConsent', e.target.checked)}
                                    className="w-4 h-4 border border-white/10 bg-slate-900 rounded checked:bg-[#0B96AC]" 
                                  />
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Consent to background technical checks</span>
                               </label>
                               
                               <button 
                                 type="submit"
                                 disabled={isSubmitting}
                                 className="bg-[#0B96AC] hover:bg-[#097b8d] text-white px-6 py-3.5 text-[9px] font-bold uppercase tracking-widest rounded shadow-lg shadow-[#0B96AC]/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                               >
                                  {isSubmitting ? (
                                    <>
                                       <Loader2 className="w-4.5 h-4.5 animate-spin" />
                                       SUBMITTING APPL...
                                    </>
                                  ) : (
                                    'Submit Application'
                                  )}
                               </button>
                            </div>
                         </form>
                      </motion.div>
                    ) : (
                      // --- Job Application success receipt overlay ---
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-6"
                      >
                         <div className="w-14 h-14 bg-[#0B96AC]/10 border border-[#0B96AC] text-[#0B96AC] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                            <CheckCircle2 className="w-6 h-6" />
                         </div>
                         <span className="text-[9px] font-mono text-[#0B96AC] tracking-widest block mb-1.5">TRANSMISSION VERIFIED // INTAKE_LOGGED</span>
                         <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Application Received</h3>
                         <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto mb-6 font-sans">
                            Your application parameters have been committed to the LBAP Human Capital index. Our metrology leads will audit your qualifications and contact you.
                         </p>

                         <div className="max-w-sm mx-auto bg-slate-950 border border-white/5 rounded-xl p-4 font-mono text-[9px] text-left space-y-2 mb-6">
                            <span className="text-slate-550 border-b border-white/5 pb-2 block font-bold">RECEIPT MATRIX</span>
                            <div className="flex justify-between">
                               <span>Applicant</span>
                               <span className="text-white font-bold">{appForm.fullName}</span>
                            </div>
                            <div className="flex justify-between">
                               <span>Role Code</span>
                               <span className="text-white font-bold">{selectedJob.id} // {selectedJob.pos}</span>
                            </div>
                            <div className="flex justify-between">
                               <span>Contact</span>
                               <span className="text-white font-bold">{appForm.email}</span>
                            </div>
                            <div className="flex justify-between">
                               <span>Dept</span>
                               <span className="text-white font-bold uppercase">{selectedJob.dept}</span>
                            </div>
                         </div>

                         <button 
                           onClick={closeJobModal}
                           className="px-6 py-2.5 bg-white/5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest text-[#0B96AC] hover:bg-[#0B96AC] hover:text-white transition-all"
                         >
                            Close Intake Portal
                         </button>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>

      {/* Shared Footer */}
      <Footer />

    </div>
  );
};

export default Career;
