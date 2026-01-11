import React from 'react';
import { Button } from '../components/Button';

const AboutPage: React.FC<{ onOpenApplication: () => void }> = ({
  onOpenApplication,
}) => (
  <div className="animate-fadeIn">
    {/* SECTION 1: HERO / MISSION STATEMENT */}
    <section className="bg-oxford text-bone pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
          The New Standard for <br /> Career Management
        </h1>
        <p className="font-mono text-sm md:text-base text-bone/70 max-w-3xl leading-relaxed">
          Talent deserves representation. We believe corporate professionals
          deserve the same fiduciary-level representation. Our goal isn't just
          to find you a job; it is to place you in an environment where you are
          valued, resourced, and positioned to thrive.
        </p>
      </div>
    </section>

    {/* SECTION 2: THE ORIGIN & MARKET FAILURE */}
    <section className="py-24 px-6 bg-bone text-oxford">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold">
          The Headhunter Conflict
        </h2>
        <p className="font-mono text-sm md:text-base leading-relaxed text-oxford/70 max-w-2xl mx-auto">
          The global recruitment industry is structurally broken by a
          fundamental Principal-Agent Problem. Recruiters work on the priorities
          of the hiring companies, and great candidates can get lost in the
          shuffle. Rep. creates a new category: The Career Agency.
        </p>
      </div>
    </section>

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
