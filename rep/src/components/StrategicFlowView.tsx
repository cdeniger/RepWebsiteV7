import React from 'react';
import { PHASES } from '../constants';

const StrategicFlowView: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {PHASES.map((phase, index) => (
          <div 
            key={phase.id} 
            className="group relative flex flex-col"
          >
            <div className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(15,29,29,0.08)] group-hover:-translate-y-4 flex flex-col flex-1 relative overflow-hidden">
              {/* Decorative Subtle Fade */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50/50 to-transparent -mr-16 -mt-16 rounded-full group-hover:from-[#B45309]/5 transition-all"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#B45309] text-sm font-black tracking-[0.3em] mb-4 block uppercase opacity-70">
                  {phase.phase}
                </span>
                
                <h3 className="text-3xl font-serif text-[#0F1D1D] mb-2 leading-tight">
                  {phase.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-medium italic mb-8 flex items-center">
                  <span className="w-4 h-px bg-gray-300 mr-3"></span>
                  {phase.subtitle}
                </p>
                
                <p className="text-gray-500 text-base leading-relaxed mb-10 font-light group-hover:text-gray-700 transition-colors">
                  {phase.description}
                </p>
                
                <div className="mt-auto pt-8 border-t border-gray-50 space-y-4">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gray-300 group-hover:text-[#B45309]/50 transition-colors mb-2">Key Outcomes</div>
                  <div className="grid grid-cols-1 gap-y-3">
                    {phase.highlights.map(h => (
                      <div key={h} className="flex items-start text-[13px] text-gray-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-4 h-4 mr-3 text-[#B45309] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Arrow Indicator */}
            {index < PHASES.length - 1 && (
              <div className="lg:hidden flex justify-center py-6">
                <div className="w-px h-12 bg-gradient-to-b from-gray-200 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Text in background */}
      <div className="absolute -bottom-16 left-0 right-0 text-center pointer-events-none select-none opacity-[0.01] hidden xl:block">
        <span className="text-[12rem] font-serif font-black tracking-tighter whitespace-nowrap">
          STRATEGIC ARCHITECTURE
        </span>
      </div>
    </div>
  );
};

export default StrategicFlowView;