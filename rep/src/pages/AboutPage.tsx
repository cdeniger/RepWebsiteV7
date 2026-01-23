import React from 'react';
import { Button } from '../components/Button';
import HeadhunterConflict from '../components/HeadhunterConflict';

const AboutPage: React.FC<{ onOpenApplication: () => void }> = ({
  onOpenApplication,
}) => (
  <div className="animate-fadeIn">
    {/* SECTION 1: HERO / MISSION STATEMENT */}
    <section className="pt-32 pb-16 px-6 bg-oxford text-bone">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          The Headhunter Conflict
        </h1>
        <p className="font-mono text-sm uppercase tracking-widest text-bone/60 max-w-2xl">
          THE GLOBAL RECRUITMENT INDUSTRY IS STRUCTURALLY BROKEN BY A FUNDAMENTAL CONFLICT OF INTEREST. RECRUITERS WORK ON THE PRIORITIES OF THE HIRING COMPANIES, AND GREAT CANDIDATES CAN GET LOST IN THE SHUFFLE. REP. ALIGNS WITH CANDIDATES EVERY STEP OF THE WAY. WHEN YOU WIN WE WIN.
        </p>
      </div>
    </section>

    {/* SECTION 2: THE HEADHUNTER CONFLICT (GRAPHICAL) */}
    <div className="hidden md:block">
      <HeadhunterConflict />
    </div>

    {/* SECTION 3: OUR PHILOSOPHY (3 PRINCIPLES) */}
    <section className="py-24 px-6 bg-bone text-oxford border-t border-oxford/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-0">
          {/* Principle 1 */}
          <div className="space-y-6 relative pt-8 md:pt-0 md:pr-12 md:border-r border-oxford/20">
            <div className="font-mono text-signal text-xl font-bold">01</div>
            <h3 className="font-serif text-3xl font-bold">Career Ownership</h3>
            <p className="font-mono text-sm leading-relaxed text-oxford/70">
              Professionals deserve transparency, structure, and a system—not
              guesswork.
            </p>
          </div>
          {/* Principle 2 */}
          <div className="space-y-6 relative pt-8 md:pt-0 border-t md:border-t-0 border-oxford/20 md:px-12 md:border-r">
            <div className="font-mono text-signal text-xl font-bold">02</div>
            <h3 className="font-serif text-3xl font-bold">
              Strategic Positioning
            </h3>
            <p className="font-mono text-sm leading-relaxed text-oxford/70">
              Opportunities find talent when their identity is clear, credible,
              and differentiated.
            </p>
          </div>
          {/* Principle 3 */}
          <div className="space-y-6 relative pt-8 md:pt-0 border-t md:border-t-0 border-oxford/20 md:pl-12">
            <div className="font-mono text-signal text-xl font-bold">03</div>
            <h3 className="font-serif text-3xl font-bold">
              Long-Term Architecture
            </h3>
            <p className="font-mono text-sm leading-relaxed text-oxford/70">
              A career is an asset to be managed over 3–5 year horizons.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 4: THE MODEL (DIFFERENTIATOR) */}
    <section className="relative py-32 px-6 bg-oxford text-bone overflow-hidden">
      {/* Abstract Cinematic "Noir" Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, #2a4c45 0%, transparent 40%), radial-gradient(circle at 20% 80%, #1a332f 0%, transparent 30%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            Strategic Counsel. <br />
            <span className="text-signal">AI Velocity.</span>
          </h2>
          <p className="font-mono text-sm md:text-base text-bone/70 max-w-lg leading-relaxed">
            We operate as your Strategic Counsel. Negotiation is structural, not
            adversarial. We provide the data and the scripts; you secure the
            trajectory you’ve earned.
          </p>
          <div className="pt-4">
            <Button onClick={onOpenApplication}>Get Represented</Button>
          </div>
        </div>
        {/* Visual Abstract Decoration */}
        <div className="hidden md:block h-64 w-full border-l border-t border-bone/10 relative">
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-b border-signal/20"></div>
          <div className="absolute bottom-12 left-12 font-mono text-xs text-bone/30 uppercase tracking-[0.2em]">
            System Protocol
            <br />
            Confidential
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
