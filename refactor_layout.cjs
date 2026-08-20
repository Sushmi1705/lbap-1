const fs = require('fs');
let content = fs.readFileSync('src/designs/design2/pages/Home.tsx', 'utf8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

// Helper to log replacement count
function safeReplace(target, replacement) {
  const count = content.split(target).length - 1;
  content = content.replaceAll(target, replacement);
  console.log(`Replaced "${target.slice(0, 40)}...": ${count} matches`);
}

// 1. Inject global glow wrapper with mesh gradient
safeReplace(
  `      {/* --- 2. Partners Strip --- */}\n      <section className="bg-white border-b border-slate-200/60 py-5 relative overflow-hidden shadow-sm z-20">`,
  `      {/* GLOBAL GLOW WRAPPER WITH CLASSY MESH GRADIENT */}
      <div className="relative classy-mesh-bg overflow-hidden z-10">

      {/* --- 2. Partners Strip --- */}
      <section className="bg-white/40 backdrop-blur-md border-b border-white/20 py-5 relative overflow-hidden z-20">`
);

// Close global wrapper at the end of the return block
safeReplace(
  `    </div>\n  );\n};\n\nexport default Home;`,
  `      </div>\n    </div>\n  );\n};\n\nexport default Home;`
);

// 2. Make backgrounds transparent
safeReplace(
  `className="py-24 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden"`,
  `className="py-24 relative overflow-hidden"`
);

safeReplace(
  `className="py-20 bg-white border-b border-slate-200/60 relative overflow-hidden"`,
  `className="py-20 relative overflow-hidden"`
);

safeReplace(
  `className="py-24 bg-[#00A7FF]/5 text-slate-800 relative border-b border-slate-200/60 overflow-hidden"`,
  `className="py-24 relative overflow-hidden"`
);

safeReplace(
  `className="bg-white py-24 border-b border-slate-200/60 relative overflow-hidden"`,
  `className="py-24 relative overflow-hidden"`
);

safeReplace(
  `className="py-24 bg-white relative overflow-hidden"`,
  `className="py-24 relative overflow-hidden"`
);

safeReplace(
  `className="relative py-32 bg-slate-50 overflow-hidden border-t border-slate-200"`,
  `className="relative py-32 relative overflow-hidden"`
);

// 3. Make individual card components have the premium-glass styling

// Welcome section left column leadership panel
safeReplace(
  `className="lg:col-span-5 space-y-6"`,
  `className="lg:col-span-5 space-y-6 premium-glass rounded-[32px] p-8 md:p-12 shadow-sm border border-white/80"`
);

// Welcome section right column cards (Mission, Vision)
safeReplace(
  `className="bg-white p-8 rounded-3xl relative group overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"`,
  `className="premium-glass p-8 rounded-3xl relative group overflow-hidden shadow-sm hover:shadow-xl border border-white/80 gloss-overlay"`
);
safeReplace(
  `className="sm:col-span-2 bg-white p-8 rounded-3xl relative group overflow-hidden shadow-md"`,
  `className="sm:col-span-2 premium-glass p-8 rounded-3xl relative group overflow-hidden shadow-sm border border-white/80"`
);

// Core Capabilities active service slide
safeReplace(
  `p-8 sm:p-12 bg-white shadow-xl rounded-3xl transition-shadow duration-300 flex flex-col group relative overflow-hidden`,
  `p-8 sm:p-12 premium-glass shadow-lg rounded-3xl flex flex-col group relative overflow-hidden border border-white/85 gloss-overlay`
);

// Strategic Value Pillars cards
safeReplace(
  `className="bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-[310px] shadow-sm hover:shadow-md transition-shadow duration-300 group"`,
  `className="premium-glass rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-[310px] shadow-sm hover:shadow-md transition-all duration-300 group border border-white/80 gloss-overlay"`
);

// Mass Production photo grid images
safeReplace(
  `className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] relative group"`,
  `className="premium-glass rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] relative group border border-white/80 gloss-overlay"`
);
safeReplace(
  `className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] mt-12 relative group"`,
  `className="premium-glass rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] mt-12 relative group border border-white/80 gloss-overlay"`
);

// Metrics Section stat cards
safeReplace(
  `className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"`,
  `className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"`
);

// Replace metrics inner map to use glass cards
safeReplace(
  `            {[
              { label: "ANNUAL UNITS PRODUCED", value: 4.2, suffix: "M" },
              { label: "PPM DEFECT RATE", value: 0.02, suffix: "%" },
              { label: "ON-TIME DELIVERY RATE", value: 100, suffix: "%" },
              { label: "COUNTRIES EXPORTED", value: 12, suffix: "+" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="border-l-2 border-slate-100 pl-8 space-y-2 relative group">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#00A7FF] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500"></div>`,
  `            {[
              { label: "ANNUAL UNITS PRODUCED", value: 4.2, suffix: "M" },
              { label: "PPM DEFECT RATE", value: 0.02, suffix: "%" },
              { label: "ON-TIME DELIVERY RATE", value: 100, suffix: "%" },
              { label: "COUNTRIES EXPORTED", value: 12, suffix: "+" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="premium-glass rounded-[24px] p-6 space-y-2 relative group border border-white/80 shadow-sm gloss-overlay">`
);

// Certified Quality Standards cards
safeReplace(
  `className="bg-white rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group overflow-hidden"`,
  `className="premium-glass border border-white/80 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden gloss-overlay"`
);

// Machinery categories list container and items
safeReplace(
  `              <ul className="space-y-3">`,
  `              <ul className="space-y-3 premium-glass rounded-3xl p-4 border border-white/80 shadow-sm">`
);
safeReplace(
  `className="w-full flex items-center gap-4 py-4 px-6 border border-slate-100 rounded-2xl text-left relative transition-all z-10"`,
  `className="w-full flex items-center gap-4 py-4 px-6 border border-white/40 bg-white/20 backdrop-blur-md rounded-2xl text-left relative transition-all z-10"`
);

// Machinery Specification Table
safeReplace(
  `className="overflow-hidden border border-slate-100 rounded-3xl bg-white"`,
  `className="overflow-hidden border border-white/80 rounded-3xl premium-glass shadow-md"`
);

// CTA Section central card container
safeReplace(
  `        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">`,
  `        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto premium-glass rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(27,63,143,0.1)] border border-white/80">`
);

fs.writeFileSync('src/designs/design2/pages/Home.tsx', content);
console.log('Done!');
