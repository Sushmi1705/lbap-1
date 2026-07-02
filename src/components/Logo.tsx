import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* --- SVG Icon Symbol --- */}
      <div className="relative w-16 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-sm">
          {/* Top Teal Swoosh */}
          <path 
            d="M5,45 Q20,10 95,20 Q60,15 45,40" 
            fill="#00A9C6" 
            className="opacity-90"
          />
          {/* Bottom Teal Swoosh */}
          <path 
            d="M95,15 Q80,50 5,40 Q40,45 55,20" 
            fill="#00A9C6" 
            className="opacity-90"
          />
          {/* Orange Circular Core with Gradient */}
          <defs>
            <radialGradient id="orangeGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#F37021', stopOpacity: 1 }} />
            </radialGradient>
          </defs>
          <circle cx="50" cy="30" r="14" fill="url(#orangeGrad)" className="shadow-lg" />
          
          {/* 3D-effect LB Text */}
          <text 
            x="50" 
            y="35" 
            textAnchor="middle" 
            className="font-black text-[12px] fill-white"
            style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))' }}
          >
            LB
          </text>
        </svg>
      </div>

      {/* --- Typography --- */}
      <div className="flex flex-col -space-y-1">
        <h1 className="text-[28px] font-black tracking-tighter bg-gradient-to-r from-[#FBB040] via-[#F37021] to-[#C1272D] bg-clip-text text-transparent uppercase leading-none">
          Laxmi Balaji
        </h1>
        <p className="text-[8px] font-black tracking-[0.25em] text-[#F37021] uppercase mt-1 opacity-90">
          Automotive Products Pvt. Ltd
        </p>
      </div>
    </div>
  );
};

export default Logo;
