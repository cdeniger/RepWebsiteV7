import React from 'react';

const MarketDynamics: React.FC = () => {
  return (
    <section className="bg-bone py-16 md:py-24 px-6 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-white border border-oxford/10 dossier-shadow p-8 flex flex-col justify-between overflow-hidden group relative">
              
              {/* Frozen Graphics: Background Noise */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.18] select-none">
                <div className="animate-scroll-vertical flex flex-col gap-4 p-4 font-mono text-[7px] leading-none uppercase tracking-widest text-oxford font-black">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <span>Status: Pending</span>
                      <span>ID: {Math.floor(Math.random() * 9000) + 1000}-X</span>
                      <span>Auto-Reject</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATS Scanner Line */}
              <div className="absolute left-0 w-full h-px bg-signal/10 animate-scan-y z-10"></div>

              <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-oxford/40 mb-8 font-black flex justify-between relative z-20">
                <span>System Audit: Noise Floor</span>
                <span className="text-signal">Intervention Active</span>
              </div>
              
              {/* Frozen Signal Visual */}
              <div className="relative flex-grow flex items-center justify-center z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-signal/20 blur-2xl animate-pulse scale-150"></div>
                  <div className="bg-signal text-white font-mono text-[10px] px-8 py-6 font-black uppercase tracking-[0.25em] shadow-[0_30px_60px_rgba(214,90,49,0.4)] animate-bounce border border-white/30 text-center leading-[1.8]">
                    2,000 Apps <br /> 
                    3 Hours <br />
                    1 Job Opening
                  </div>
                </div>
              </div>

              <div className="pt-8 space-y-4 relative z-20">
                <div className="h-px w-full bg-oxford/5"></div>
                <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.2em] text-oxford/60 font-bold">
                  <span>Signal Detected</span>
                  <span className="text-signal font-black">Human Advocate Req.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-oxford leading-tight tracking-tight">
              The silence is loud. <br />
              <span className="italic font-normal text-oxford/40">Bypassing the automated rejection loop.</span>
            </h3>
            <p className="font-serif text-lg text-oxford/60 leading-relaxed max-w-xl">
              When a single posting receives 2,000 applications in its first three hours, the process stops being human. 
              Companies turn to algorithms to survive the volume, leaving you trapped in a cycle of automated status 
              checks and zero feedback. We provide the direct line and professional advocacy needed to cut through 
              that digital noise.
            </p>
            <div className="pt-6">
              <div className="font-mono text-[10px] text-signal font-black uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-10 h-px bg-signal/30"></span>
                Direct Representation Required
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 20s linear infinite;
        }
        @keyframes scan-y {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-y {
          animation: scan-y 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MarketDynamics;