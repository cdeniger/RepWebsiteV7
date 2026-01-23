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
          <span className="block text-4xl text-bone/80 mb-2">We don't recruit. We Rep.</span>
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
            <span className="text-signal">Without An Hourly Timer</span>
          </h2>
          <p className="font-mono text-sm md:text-base text-bone/70 max-w-lg leading-relaxed">
            We aren’t Career Coaches that come with an hourly rate and rigid access. We operate as your Strategic Counsel. Negotiation is structural, not adversarial. We provide actionable data and playbooks; you secure the trajectory you’ve earned.
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
