import React from 'react';

const BrandLogo: React.FC<{ className?: string }> = ({
  className = "text-oxford",
}) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    <div className="font-sans font-black text-4xl tracking-tight leading-none">
      Rep<span className="text-signal">.</span>
    </div>
    <div className="h-10 w-px bg-current opacity-20"></div>
    <div className="flex flex-col items-start justify-center opacity-90 pt-1">
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] leading-tight mb-0.5">
        PROFESSIONALLY
      </span>
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] leading-tight">
        REPRESENTED
      </span>
    </div>
  </div>
);

export { BrandLogo };
