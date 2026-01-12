import React from 'react';

const HeadhunterConflict: React.FC = () => {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 px-6 bg-bone overflow-hidden relative border-t border-oxford/10">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Content & Narrative Column - Sanitized Grid Item */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            {/* Internal Sticky Wrapper to force top-aligned baseline */}
            <div className="lg:sticky lg:top-32 h-fit space-y-12">
              <div className="space-y-6 mt-0">
                <div className="inline-block px-3 py-1 border border-oxford text-oxford font-mono text-[9px] uppercase tracking-[0.4em] font-black mt-0">
                  Diagnostic: Structural Exclusion
                </div>
                <h2 className="font-serif text-5xl md:text-7xl font-bold text-oxford tracking-tighter leading-none">
                  The <br />Systemic <br /><span className="text-signal italic">Filter.</span>
                </h2>
                <p className="font-mono text-xs text-oxford/50 uppercase tracking-widest leading-relaxed max-w-sm">
                  Traditional recruitment functions as a rigid filter, not an advocate. 
                  It is designed to strip away nuance to satisfy a narrow, pre-defined corporate requisition.
                </p>
              </div>

              {/* Analysis Callouts */}
              <div className="space-y-10 pt-12 border-t border-oxford/10">
                <div className="space-y-4">
                  <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-signal">01 / The Rejection Loop</span>
                  <p className="font-serif text-lg text-oxford leading-snug">
                    High-value talent is discarded because it doesn't fit the <span className="italic text-oxford">recruiter's</span> narrow path of least resistance.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-oxford/40">02 / Non-Fiduciary Design</span>
                  <p className="font-serif text-lg text-oxford/40 leading-snug italic">
                    The 'Wall' exists to protect the Company's time, not to maximize the Candidate's potential.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="block font-mono text-[10px] font-black uppercase tracking-widest text-signal">03 / THE REP. BYPASS</span>
                  <p className="font-serif text-lg text-oxford leading-snug">
                    We reject the automated loop entirely. Rep. redefines your narrative to bypass the algorithm, delivering your signal directly to decision-makers—representing you and your true market value, not the path of least resistance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The "Filter Wall" Layout */}
          <div className="lg:col-span-7 flex flex-col gap-0 order-1 lg:order-2">
            
            {/* Simulation Cell */}
            <div className="relative aspect-square bg-white border border-oxford/10 border-t-[12px] border-oxford dossier-shadow overflow-hidden group">
                {/* The Graphic Core - Now centered to create top/bottom padding */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                
                  {/* SUCCESS GLOW */}
                  <div className="absolute right-0 w-[45%] top-0 bottom-0 bg-gradient-to-r from-signal/0 to-signal/[0.05] z-10 animate-promised-land-flash"></div>

                  {/* SUCCESS EVENT LAYER: Centered at 50% */}
                  <div className="absolute inset-x-0 top-1/2 flex items-center justify-center pointer-events-none z-30 h-0">
                    {/* Aperture Flash Ripple */}
                    <div className="absolute left-[calc(50%+16px)] w-4 h-4 rounded-full border border-signal/50 animate-aperture-flash -translate-y-1/2"></div>
                    
                    {/* HIRE EVENT BADGE */}
                    <div className="absolute right-[22.5%] -translate-y-[160%] translate-x-1/2 opacity-0 animate-hire-label-flash flex flex-col items-center">
                      <div className="bg-signal px-4 py-2 shadow-[0_10px_20px_rgba(214,90,49,0.3)] border border-white/20 whitespace-nowrap">
                        <span className="font-mono text-[11px] font-black text-white uppercase tracking-[0.4em]">HIRE EVENT</span>
                      </div>
                      <div className="w-px h-6 bg-signal/40 mt-1"></div>
                    </div>
                  </div>

                  {/* THE PERFECT PARTICLE - Centered at 50% */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-25 h-0">
                    <div className="opacity-0 w-4 h-4 border-oxford animate-pass-perfect flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-signal opacity-0 animate-bloom-core"></div>
                    </div>
                  </div>

                  {/* TRAJECTORY PATH LINE - Centered at 50% */}
                  <div className="absolute left-[calc(50%+16px)] right-0 top-1/2 h-px border-t border-dotted border-oxford/10 z-10"></div>

                  {/* THE WALL - Reduced height to create breathing room */}
                  <div className="relative z-20 w-32 h-[92%] flex flex-col items-center justify-center">
                    <div className="w-full flex-grow bg-oxford shadow-2xl relative">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-px bg-white/20"></div>
                    </div>

                    {/* THE APERTURE GAP (20px) */}
                    <div className="w-full h-5 bg-white/90 border-y border-oxford/30 shadow-inner relative z-10 overflow-hidden">
                        <div className="absolute inset-0 border-x-4 border-oxford/5"></div>
                    </div>

                    <div className="w-full flex-grow bg-oxford shadow-2xl relative">
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-px bg-white/20"></div>
                      
                      <div className="absolute bottom-10 left-0 w-full font-mono text-[11px] text-white/80 uppercase tracking-[0.3em] font-black text-center px-2 leading-tight">
                          SYSTEMIC <br /> BARRIER
                      </div>
                    </div>

                    <div className="absolute top-[calc(50%+16px)] left-0 w-full flex justify-center z-30">
                      <div className="font-mono text-[9px] text-white/80 uppercase tracking-[0.2em] font-bold">Tol: 0.02%</div>
                    </div>
                  </div>

                  {/* IMPACT LABELS (Rejections) */}
                  <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[12%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '7s', animationDelay: '0s' }}>Keyword Missing: [Skill]</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[78%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '8s', animationDelay: '1.5s' }}>Salary Expectation &gt; Band</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[32%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '6.5s', animationDelay: '0.5s' }}>Title Hierarchy Mismatch</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[52%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '8s', animationDelay: '1.2s' }}>Resume Gap &gt; 6 Months</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[25%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '9s', animationDelay: '3s' }}>Non-Linear Career Path</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[45%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '10s', animationDelay: '4.5s' }}>Insufficient Domain Tenure</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[65%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '8.5s', animationDelay: '6s' }}>Location / RTO Conflict</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[20%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '4s', animationDelay: '0.2s' }}>Overqualified</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[38%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '7.5s', animationDelay: '5.5s' }}>Lack of 'Big Tech' Signal</div>
                    <div className="opacity-0 absolute right-[calc(50%+64px)] top-[60%] text-right font-mono text-[8px] text-signal font-black uppercase whitespace-nowrap animate-impact-flash" style={{ animationDuration: '5.5s', animationDelay: '2.8s' }}>Internal Candidate Prioritized</div>
                  </div>

                  {/* ANIMATED MISMATCHES (Rejection Stream) */}
                  <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                    <div className="opacity-0 absolute left-1/2 top-[12%] w-9 h-9 rounded-full border border-signal bg-signal/5 animate-stream-reject-large"></div>
                    <div className="opacity-0 absolute left-1/2 top-[78%] w-10 h-10 border border-signal bg-signal/5 animate-stream-reject-long"></div>
                    <div className="opacity-0 absolute left-1/2 top-[32%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-signal opacity-30 animate-stream-reject-tri"></div>
                    <div className="opacity-0 absolute left-1/2 top-[52%] w-7 h-7 border border-signal bg-signal/5 opacity-50 animate-stream-reject-square"></div>
                    <div className="opacity-0 absolute left-1/2 top-[25%] w-8 h-8 bg-signal/10 border border-signal opacity-40 animate-stream-reject-hex" 
                        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
                    <div className="opacity-0 absolute left-1/2 top-[45%] w-8 h-8 bg-signal opacity-20 animate-stream-reject-star"
                        style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
                    <div className="opacity-0 absolute left-1/2 top-[65%] w-12 h-6 border-2 border-dashed border-signal/40 animate-stream-reject-dash"></div>
                    <div className="opacity-0 absolute left-1/2 top-[20%] w-2 h-2 bg-signal animate-stream-reject-rapid"></div>
                    <div className="opacity-0 absolute left-1/2 top-[38%] w-6 h-6 border border-signal/30 rotate-45 animate-stream-reject-diamond"></div>
                    <div className="opacity-0 absolute left-1/2 top-[60%] w-4 h-4 rounded-full bg-signal opacity-40 animate-stream-reject-small-dot"></div>
                    <div className="opacity-0 absolute left-1/2 top-[40%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-signal opacity-40 animate-stream-reject-tri-alt"></div>
                  </div>

                  {/* Right Side: THE PROMISED LAND */}
                  <div className="absolute right-0 w-[45%] top-0 bottom-0 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07]">
                      <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, transparent 49%, #0A231F 50%, transparent 51%)', backgroundSize: '20px 20px' }}></div>
                    </div>
                  </div>
                </div>
            </div>

            {/* Analysis Cell - Decoupled from simulation */}
            <div className="bg-white border-x border-b border-oxford/10 border-b-[12px] border-oxford dossier-shadow px-10 pt-1.5 pb-4 space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <div className="w-16 h-16 border-r border-b border-oxford"></div>
                </div>
                
                <div className="space-y-4 relative z-10">
                    <span className="block font-mono text-[10px] text-oxford/40 uppercase tracking-[0.3em] font-black italic">Finding:</span>
                    <p className="font-serif text-lg leading-snug text-oxford italic max-w-2xl">
                        "The system is not looking for talent; it is looking for a specific, pre-measured geometry. If you aren't the exact shape required, the system is designed to reject you instantly."
                    </p>
                </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        /* PERFECT PASS ANIMATION - SLOWED TO 16s */
        @keyframes pass-perfect {
          0% { transform: translateX(-450px) scale(1); opacity: 0; border-width: 2px; background-color: transparent; border-color: #0A231F; }
          10% { opacity: 0.8; }
          45% { transform: translateX(-30px) scale(1); border-width: 2px; opacity: 0.9; border-color: #0A231F; }
          50% { transform: translateX(0) scale(1.15); border-width: 4px; border-color: #0A231F; opacity: 1; background-color: rgba(255, 255, 255, 0.4); }
          55% { transform: translateX(30px) scale(1); border-width: 2px; background-color: transparent; opacity: 0.9; }
          65% { border-color: #D65A31; scale: 1.1; }
          90% { opacity: 0.8; }
          100% { transform: translateX(450px) scale(1.2); opacity: 0; border-width: 2px; border-color: #D65A31; }
        }
        .animate-pass-perfect {
          animation: pass-perfect 16s cubic-bezier(0.2, 0, 0, 1) infinite;
        }

        /* APERTURE FLASH RIPPLE - SLOWED TO 16s */
        @keyframes aperture-flash {
          0%, 54.9% { opacity: 0; transform: scale(0.5); }
          55% { opacity: 1; transform: scale(1); }
          65% { opacity: 0; transform: scale(4); }
          100% { opacity: 0; transform: scale(4); }
        }
        .animate-aperture-flash {
          animation: aperture-flash 16s ease-out infinite;
        }

        /* HIRE LABEL FLASH - SLOWED TO 16s */
        @keyframes hire-label-flash {
          0%, 54.9% { opacity: 0; transform: translate(50%, -160%) scale(0.9); }
          55% { opacity: 1; transform: translate(50%, -160%) scale(1.05); }
          60% { transform: translate(50%, -160%) scale(1); }
          65% { opacity: 1; transform: translate(50%, -160%) scale(1); }
          70% { opacity: 0; transform: translate(50%, -160%) scale(1.02); }
          100% { opacity: 0; }
        }
        .animate-hire-label-flash {
          animation: hire-label-flash 16s cubic-bezier(0.2, 0, 1, 0.2) infinite;
        }

        /* PROMISED LAND BACKGROUND FLASH - SLOWED TO 16s */
        @keyframes promised-land-flash {
          0%, 54.9% { background-color: transparent; }
          55% { background-color: rgba(214, 90, 49, 0.15); }
          65% { background-color: transparent; }
          100% { background-color: transparent; }
        }
        .animate-promised-land-flash {
          animation: promised-land-flash 16s ease-out infinite;
        }

        /* BLOOM CORE - SLOWED TO 16s */
        @keyframes bloom-core {
          0%, 55% { opacity: 0; transform: scale(0.5); }
          65%, 90% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        .animate-bloom-core {
          animation: bloom-core 16s cubic-bezier(0.2, 0, 0, 1) infinite;
        }

        /* IMPACT LABEL ANIMATION - REMAINS FAST (7s-10s range) */
        @keyframes impact-flash {
          0%, 39.9% { opacity: 0; transform: translateX(0) translateY(-50%); }
          40% { opacity: 1; transform: translateX(0) translateY(-50%); }
          65% { opacity: 1; transform: translateX(-55.5px) translateY(-50%); }
          85% { opacity: 0; transform: translateX(-100px) translateY(-50%); }
          100% { opacity: 0; transform: translateX(-100px) translateY(-50%); }
        }
        .animate-impact-flash {
          animation-name: impact-flash;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* PHYSICS-CORRECT REJECTION STREAM KEYFRAMES - REMAINS FAST */
        @keyframes stream-reject-large {
          0% { transform: translateX(-500px) translateY(0); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translateX(-82px) translateY(0); opacity: 1; }
          43% { transform: translateX(-105px) scale(0.9, 1.1); }
          100% { transform: translateX(-700px) translateY(-300px) rotate(-180deg); opacity: 0; }
        }
        .animate-stream-reject-large { animation: stream-reject-large 7s linear infinite; }

        @keyframes stream-reject-long {
          0% { transform: translateX(-500px); opacity: 0; }
          15% { opacity: 1; }
          40% { transform: translateX(-84px); opacity: 1; }
          43% { transform: translateX(-110px) scale(0.9, 1.1); }
          100% { transform: translateX(-750px) translateY(350px) rotate(90deg); opacity: 0; }
        }
        .animate-stream-reject-long { animation: stream-reject-long 8s linear infinite; animation-delay: 1.5s; }

        @keyframes stream-reject-tri {
          0% { transform: translateX(-500px) rotate(0deg); opacity: 0; }
          20% { opacity: 0.7; }
          40% { transform: translateX(-79px) rotate(180deg); opacity: 0.7; }
          43% { transform: translateX(-100px) rotate(190deg); }
          100% { transform: translateX(-700px) translateY(-250px) rotate(360deg); opacity: 0; }
        }
        .animate-stream-reject-tri { animation: stream-reject-tri 6.5s linear infinite; animation-delay: 0.5s; }

        @keyframes stream-reject-hex {
          0% { transform: translateX(-500px) rotate(0deg); opacity: 0; }
          25% { opacity: 0.6; }
          40% { transform: translateX(-80px) rotate(45deg); opacity: 0.6; }
          43% { transform: translateX(-105px) rotate(55deg) scale(0.9); }
          100% { transform: translateX(-700px) translateY(-150px) rotate(-90deg); opacity: 0; }
        }
        .animate-stream-reject-hex { animation: stream-reject-hex 9s linear infinite; animation-delay: 3s; }

        @keyframes stream-reject-star {
          0% { transform: translateX(-500px) scale(0.5); opacity: 0; }
          20% { opacity: 0.5; }
          40% { transform: translateX(-80px) rotate(144deg); opacity: 0.5; }
          43% { transform: translateX(-105px) scale(0.8); }
          100% { transform: translateX(-700px) translateY(200px) rotate(288deg); opacity: 0; }
        }
        .animate-stream-reject-star { animation: stream-reject-star 10s linear infinite; animation-delay: 4.5s; }

        @keyframes stream-reject-dash {
          0% { transform: translateX(-500px); opacity: 0; }
          30% { opacity: 0.4; }
          40% { transform: translateX(-88px); opacity: 0.4; }
          43% { transform: translateX(-115px) rotate(-5deg); }
          100% { transform: translateX(-750px) translateY(180px); opacity: 0; }
        }
        .animate-stream-reject-dash { animation: stream-reject-dash 8.5s linear infinite; animation-delay: 6s; }

        @keyframes stream-reject-rapid {
          0% { transform: translateX(-500px); opacity: 0; }
          10% { opacity: 1; }
          40% { transform: translateX(-68px); }
          43% { transform: translateX(-80px); }
          100% { transform: translateX(-700px) translateY(-120px); opacity: 0; }
        }
        .animate-stream-reject-rapid { animation: stream-reject-rapid 4s linear infinite; animation-delay: 0.2s; }

        @keyframes stream-reject-diamond {
          0% { transform: translateX(-500px) rotate(45deg); opacity: 0; }
          25% { opacity: 0.6; }
          40% { transform: translateX(-76px) rotate(45deg); opacity: 0.6; }
          43% { transform: translateX(-95px) rotate(55deg); }
          100% { transform: translateX(-700px) translateY(-180px) rotate(0deg); opacity: 0; }
        }
        .animate-stream-reject-diamond { animation: stream-reject-diamond 7.5s linear infinite; animation-delay: 5.5s; }

        @keyframes stream-reject-small-dot {
          0% { transform: translateX(-500px); opacity: 0; }
          30% { opacity: 0.8; }
          40% { transform: translateX(-72px); opacity: 0.8; }
          43% { transform: translateX(-90px) scale(1.2); }
          100% { transform: translateX(-700px) translateY(250px); opacity: 0; }
        }
        .animate-stream-reject-small-dot { animation: stream-reject-small-dot 5.5s linear infinite; animation-delay: 2.8s; }

        @keyframes stream-reject-tri-alt {
          0% { transform: translateX(-500px) rotate(0); opacity: 0; }
          30% { opacity: 0.6; }
          40% { transform: translateX(-74px) rotate(180deg); opacity: 0.6; }
          43% { transform: translateX(-95px) rotate(185deg); }
          100% { transform: translateX(-700px) translateY(350px) rotate(240deg); opacity: 0; }
        }
        .animate-stream-reject-tri-alt { animation: stream-reject-tri-alt 7.2s linear infinite; animation-delay: 4.2s; }

        @keyframes stream-reject-square {
          0% { transform: translateX(-500px) scale(0); opacity: 0; }
          20% { opacity: 0.5; transform: translateX(-300px) scale(1); }
          40% { transform: translateX(-78px) rotate(0deg); opacity: 0.5; }
          43% { transform: translateX(-100px) rotate(15deg); }
          100% { transform: translateX(-700px) translateY(250px) rotate(-120deg); opacity: 0; }
        }
        .animate-stream-reject-square { animation: stream-reject-square 8s linear infinite; animation-delay: 1.2s; }
      `}</style>
    </section>
  );
};

export default HeadhunterConflict;
