import React from 'react';
import { Briefcase, Check, Clock, FileText, Zap } from 'lucide-react';
import { Button } from '../components/Button';

const ServicesPage: React.FC = () => (
  <div className="animate-fadeIn">
    {/* Header */}
    <section className="pt-32 pb-16 px-6 bg-oxford text-bone">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Engagement Models
        </h1>
        <p className="font-mono text-sm uppercase tracking-widest text-bone/60 max-w-2xl">
          Structured for trajectory, acceleration, and long-term asset
          protection.
        </p>
      </div>
    </section>

    {/* TIER 1: COMPREHENSIVE REPRESENTATION */}
    <section className="py-24 px-6 border-b border-oxford/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="font-mono text-signal text-xs uppercase tracking-widest">
              Tier 1: The Flagship
            </div>
            <h2 className="font-serif text-4xl font-bold">
              Comprehensive Representation.
            </h2>
            <h3 className="font-mono text-sm md:text-base text-oxford/70">
              (The Full Agent Model)
            </h3>
            <p className="font-mono text-sm md:text-base leading-relaxed text-oxford/70">
              For professionals seeking high-velocity career acceleration. We
              completely manage the search, strategy, and negotiation process.
            </p>

            <div className="py-6 space-y-4">
              <div className="flex items-start gap-4">
                <Check className="text-signal shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold block">
                    Full Playbook Creation
                  </span>
                  <span className="text-sm text-oxford/60">
                    Strategy definition and implementation.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="text-signal shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold block">Brand Asset Overhaul</span>
                  <span className="text-sm text-oxford/60">
                    Résumé, LinkedIn, Bio re-architecture.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Check className="text-signal shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold block">
                    Shadow Negotiation Support
                  </span>
                  <span className="text-sm text-oxford/60">
                    Offer sequencing and script development.
                  </span>
                </div>
              </div>
            </div>

            <Button>Apply for Representation</Button>
          </div>

          {/* Fee Model Card */}
          <div className="bg-white p-8 border border-oxford/10 shadow-lg relative">
            <div className="absolute top-0 right-0 p-4">
              <Briefcase className="text-oxford/20" size={48} />
            </div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-6 text-oxford/60">
              Fee Structure
            </h4>

            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold font-serif">
                  $500
                  <span className="text-sm font-sans font-normal text-oxford/60">
                    /month
                  </span>
                </div>
                <div className="font-mono text-xs text-signal mt-1">
                  Retainer (COGS & Tech)
                </div>
              </div>
              <div className="w-full h-px bg-oxford/10"></div>
              <div>
                <div className="text-3xl font-bold font-serif">
                  10%
                  <span className="text-sm font-sans font-normal text-oxford/60">
                    {" "}
                    of Base Salary
                  </span>
                </div>
                <div className="font-mono text-xs text-signal mt-1">
                  Success Fee (ISA upon placement)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TIER 2: STRATEGIC SPRINTS */}
    <section className="py-24 px-6 bg-bone">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-signal text-xs uppercase tracking-widest mb-2">
            Tier 2: High-Impact Products
          </div>
          <h2 className="font-serif text-4xl font-bold">Strategic Sprints.</h2>
          <p className="font-mono text-sm md:text-base mt-4 max-w-2xl text-oxford/70">
            Fixed-fee, high-velocity interventions designed to solve immediate
            career hurdles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sprint 1 */}
          <div className="bg-white p-8 border border-oxford/10 hover:border-signal transition-colors group flex flex-col">
            <div className="mb-6 text-oxford/20 group-hover:text-signal transition-colors">
              <FileText size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              The Brand Asset Overhaul
            </h3>
            <p className="font-mono text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
              We transform your history into a market-aligned,
              Achievement-Forward Asset Portfolio (résumé, LinkedIn, bio) that
              executes your specific narrative strategy.
            </p>
            <Button variant="outline" className="w-full">
              Book Prep Session
            </Button>
          </div>

          {/* Sprint 2 */}
          <div className="bg-white p-8 border border-oxford/10 hover:border-signal transition-colors group flex flex-col">
            <div className="mb-6 text-oxford/20 group-hover:text-signal transition-colors">
              <Zap size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              The Interview Conversion Sprint
            </h3>
            <p className="font-mono text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
              You are technically qualified but losing offers to better
              storytellers. We provide targeted coaching to translate 'deep
              problem solving' into business impact.
            </p>
            <Button variant="outline" className="w-full">
              Book Prep Session
            </Button>
          </div>

          {/* Sprint 3 */}
          <div className="bg-white p-8 border border-oxford/10 hover:border-signal transition-colors group flex flex-col">
            <div className="mb-6 text-oxford/20 group-hover:text-signal transition-colors">
              <Clock size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              The Compensation Strategy Audit
            </h3>
            <p className="font-mono text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
              We utilize benchmarking calculators, analyze equity upside, and
              script your Shadow Negotiation dialogue to ensure a 'Future
              Colleague' outcome.
            </p>
            <Button variant="outline" className="w-full">
              Audit My Offer
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* TIER 3: CAREER STEWARDSHIP */}
    <section className="py-24 px-6 bg-oxford/5 border-t border-oxford/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="font-mono text-signal text-xs uppercase tracking-widest">
            Tier 3: The Alumni Phase
          </div>
          <h2 className="font-serif text-4xl font-bold">Career Stewardship.</h2>
          <h3 className="font-mono text-sm md:text-base text-oxford/70">
            For placed clients who want to protect their career trajectory.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-signal rounded-full"></div>
              <span className="text-sm font-mono">
                Quarterly Architecture Reviews
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-signal rounded-full"></div>
              <span className="text-sm font-mono">
                Annual Benchmarking Refresh
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-signal rounded-full"></div>
              <span className="text-sm font-mono">
                Rep. Alumni Network Access
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 border border-oxford/10 flex flex-col items-center text-center shadow-sm max-w-sm w-full">
          <div className="font-mono text-xs uppercase tracking-widest text-oxford/60 mb-2">
            Membership Fee
          </div>
          <div className="text-4xl font-bold font-serif mb-2">
            $50
            <span className="text-base font-sans font-normal text-oxford/60">
              /mo
            </span>
          </div>
          <p className="font-mono text-xs text-oxford/50 mb-6">
            (Activates after ISA fulfillment)
          </p>
          <Button variant="outline" className="w-full">
            Join Stewardship Program
          </Button>
        </div>
      </div>
    </section>

    {/* ALIGNED INCENTIVES FOOTER */}
    <section className="py-12 px-6 bg-oxford text-bone text-center">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-base md:text-lg italic leading-relaxed opacity-80">
          "We believe a career agent should be invested in the outcome. Our
          model ensures our incentives are aligned with your long-term financial
          growth. We win when you win."
        </p>
      </div>
    </section>
  </div>
);

export default ServicesPage;
