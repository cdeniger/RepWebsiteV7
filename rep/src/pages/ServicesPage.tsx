import React from 'react';
import { Briefcase, Check, Clock, Zap } from 'lucide-react';
import { Button } from '../components/Button';

const ServicesPage: React.FC<{ onOpenApplication: () => void }> = ({
  onOpenApplication,
}) => (
  <div className="animate-fadeIn">
    {/* Header */}
    <section className="pt-32 pb-16 px-6 bg-oxford text-bone">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          Engagement Models
        </h1>
        <p className="font-mono text-sm uppercase tracking-widest text-bone/60 max-w-2xl">
          STRUCTURED FOR ALIGNMENT, ACCELERATION, AND TRANSFORMING YOUR SEARCH. WE ONLY SUCCEED WHEN YOU SUCCEED.
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
              For professionals seeking high-velocity career acceleration. We provide full support across the search, strategy, and negotiation process.
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
                  <span className="font-bold block">Recharged Pipeline</span>
                  <span className="text-sm text-oxford/60">
                    Add Rep. proprietary public and non-public job opportunities
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

            <Button onClick={onOpenApplication}>Apply for Representation</Button>
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
                <h5 className="font-mono text-xs uppercase tracking-widest text-oxford/60">
                  Income Sharing Agreement
                </h5>
                <table className="w-full text-left font-mono mt-2">
                  <thead>
                    <tr className="border-b border-oxford/10">
                      <th className="py-2 pr-4 font-normal text-xs uppercase tracking-wider text-oxford/60">Salary Range</th>
                      <th className="py-2 font-normal text-xs uppercase tracking-wider text-oxford/60 text-right">1-Year ISA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-oxford/5">
                    <tr>
                      <td className="py-2 pr-4 text-sm">$60,000 - $99,999</td>
                      <td className="py-2 text-sm font-bold text-right">9%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm">$100,000 - $139,999</td>
                      <td className="py-2 text-sm font-bold text-right">8%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm">$140,000 - $199,999</td>
                      <td className="py-2 text-sm font-bold text-right">7%</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sm">$200,000+</td>
                      <td className="py-2 text-sm font-bold text-right">6%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="font-mono text-xs text-signal mt-2 text-right">
                  One-time fee upon placement (financing available)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TIER 2: THE HYBRID APPROACH */}
    <section className="py-24 px-6 bg-bone">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="font-mono text-signal text-xs uppercase tracking-widest">
              Tier 2: The Hybrid Approach
            </div>
            <h2 className="font-serif text-4xl font-bold">
              Pay-As-You-Go Representation.
            </h2>
            <p className="font-mono text-sm md:text-base leading-relaxed text-oxford/70">
              Lower-fee, bite size pay as you go payment plans, same Flagship Comprehensive Representation. Start with a simple 3% monthly fee of your current or desired salary as we search, giving you full access to coaching, strategy, and hands-on support. Once you land the job, that same 3% continues based on your new salary—often resulting in significant savings.
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
                  <span className="font-bold block">Recharged Pipeline</span>
                  <span className="text-sm text-oxford/60">
                    Add Rep. proprietary public and non-public job opportunities
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

            <Button onClick={onOpenApplication}>Apply for Representation</Button>
          </div>

          {/* Fee Model Card */}
          <div className="bg-white p-8 border border-oxford/10 shadow-lg relative">
            <div className="absolute top-0 right-0 p-4">
              <Zap className="text-oxford/20" size={48} />
            </div>
            <h4 className="font-mono text-sm uppercase tracking-widest mb-6 text-oxford/60">
              Fee Structure
            </h4>

            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold font-serif">
                  3%
                  <span className="text-sm font-sans font-normal text-oxford/60">
                    /month of Target Salary
                  </span>
                </div>
                <div className="font-mono text-xs text-signal mt-1">
                  Phase 1: During Your Search
                </div>
              </div>
              <div className="w-full h-px bg-oxford/10"></div>
              <div>
                <div className="text-3xl font-bold font-serif">
                  3%
                  <span className="text-sm font-sans font-normal text-oxford/60">
                    {" "}
                    of New Base Salary (one-time fee)
                  </span>
                </div>
                <div className="font-mono text-xs text-signal mt-1">
                  Phase 2: After You're Hired
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* TIER 3: A LA CARTE CONSULTATION */}
    <section className="py-24 px-6 bg-oxford/5 border-t border-oxford/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="font-mono text-signal text-xs uppercase tracking-widest mb-2">
            Tier 3: The Custom Option
          </div>
          <h2 className="font-serif text-4xl font-bold">
            a la Carte Consultation.
          </h2>
          <p className="font-mono text-sm md:text-base mt-4 max-w-2xl mx-auto text-oxford/70">
            When capacity allows, Rep. will engage in selective custom consultations, usually as a prelude to full engagement. This provides preliminary access to the Rep team and our deliverables.
          </p>
        </div>

        <div className="inline-block bg-white p-8 border border-oxford/10 shadow-sm relative">
          <div className="absolute top-4 right-4 text-oxford/20">
            <Clock size={32} />
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-oxford/60 mb-2">
            Consultation Fee
          </div>
          <div className="text-4xl font-bold font-serif mb-2">
            $250 - $300
            <span className="text-base font-sans font-normal text-oxford/60">
              / 30-min session
            </span>
          </div>
          <p className="font-mono text-xs text-oxford/50 mb-6">
            + Includes weekly custom deliverables
          </p>
          <Button variant="outline" onClick={onOpenApplication}>
            Book a Consultation
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
