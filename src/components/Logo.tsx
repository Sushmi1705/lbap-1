import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`bg-white/95 px-3.5 py-1.5 rounded border border-slate-200/50 shadow-sm flex items-center justify-center ${className}`}>
      <img src="/logo.png" alt="LAB Automotive Logo" className="h-10 w-auto object-contain" />
    </div>
  );
};

export default Logo;
