import React from 'react';
import { ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';

const HomePage: React.FC<{ 
  onOpenDiagnostic: () => void; 
  onOpenApplication: () => void; 
}> = ({ onOpenDiagnostic, onOpenApplication }) => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-8 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 lg:col-span-8 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fadeInUp mb-8">
              The role that defines your future is out there.{" "}
              <br className="hidden md:block" />
              <span className="italic font-normal text-oxford/70">
                You don't have to find it ALONE.
              </span>
            </h1>
            <div className="font-mono text-sm md:text-base leading-relaxed max-w-2xl text-oxford/70 mb-8 space-y-4">
              <p>
                Finding a great job isn’t just about applying harder — it’s about being positioned correctly and showing up in the right conversations.
              </p>
              <p>
                Rep. partners with you to systematically build and advance your opportunity pipeline — aligning positioning, market signals, and outreach so the right roles engage.
              </p>
              <p>
                <b>Don’t just look for a job. Land the role that actually moves your career forward.</b>
              </p>
            </div>
            <div className="pt-2">
              <Button onClick={onOpenDiagnostic}>Run My Career Diagnostic</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / How It Works Grid Summary */}
      <section className="py-24 bg-oxford text-bone px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 border-t border-bone/20 pt-12">
            {/* Pillar 1 */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center border border-bone/20 text-signal">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold">Audit & Rebuild.</h3>
              <p className="text-bone/70 leading-relaxed text-sm font-mono">
                We audit your career capital and rebuild your brand assets. You
                get a sharp new narrative, an optimized résumé, and a market map
                targeting your highest-value opportunities.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center border border-bone/20 text-signal">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-2xl font-bold">Pipeline Architecture.</h3>
              <p className="text-bone/70 leading-relaxed text-sm font-mono">
                Isolation kills momentum. We move beyond reactive job boards to
                build and manage a proactive opportunity pipeline. We drive the
                outreach and sequencing.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center border border-bone/20 text-signal">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold">Strategy & Oversight.</h3>
              <p className="text-bone/70 leading-relaxed text-sm font-mono">
                We move from search to strategy. We formulate a definitive plan
                and prioritize the critical steps to achieve it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invisible Leverage Section (Replaces Methodology Strip) */}
      <section className="py-24 px-6 bg-oxford text-bone">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Strategic Counsel. <br />
              Invisible Leverage.
            </h2>
            <p className="font-mono text-sm md:text-base leading-relaxed text-bone/70">
              True representation empowers you; it doesn't silence you. We build
              the market map, model the equity, and script the negotiation. But
              when the door closes, you hold the microphone—ensuring you enter
              your new role with authority, not just a contract.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button onClick={onOpenApplication}>
              Get Represented <ArrowRight className="inline ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
