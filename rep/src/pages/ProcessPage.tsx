import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import StrategicFlowView from '../components/StrategicFlowView';

const ProcessPage: React.FC<{ onOpenApplication: () => void }> = ({
  onOpenApplication,
}) => (
  <div className="animate-fadeIn">
    {/* B. HIGH-LEVEL OVERVIEW */}
    <section className="pt-32 pb-16 px-6 bg-oxford text-bone">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
          <span className="block text-4xl text-bone/80 mb-2">From Strategy to Success</span>
          The Rep. Framework
        </h1>
        <p className="font-mono text-sm uppercase tracking-widest text-bone/60 max-w-2xl">
          A vision without a plan is just a dream. We replace guesswork with architectural design. Your engagement follows the disciplined, structured methodology of the Rep. Playbook Program where we hold each other accountable and are relentlessly process-oriented.
        </p>
      </div>
    </section>

    <section className="py-24 px-6 bg-bone">
      <StrategicFlowView />
    </section>

    {/* C. DETAIL FOCUS: PHASE I DEEP DIVE */}
    <section className="py-24 px-6 bg-oxford text-bone">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Phase I Deep Dive: Your First 30 Days
          </h2>
          <div className="w-24 h-1 bg-signal"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              week: "Week 1",
              title: "Diagnostic & Identity",
              desc: "We finalize your Career Archetype and core Positioning Strategy based on the Deep Dive Intake.",
            },
            {
              week: "Week 2",
              title: "Brand Asset Architecture",
              desc: "We deliver your Achievement-Forward Résumé and optimized LinkedIn profile, ready for market.",
            },
            {
              week: "Week 3",
              title: "Market Mapping",
              desc: "We build the data-driven Target Company List and identify specific hiring managers and recruiters for outreach.",
            },
            {
              week: "Week 4",
              title: "Outreach & Activation",
              desc: "We generate the Outreach Script Pack and launch the first sequence of personalized emails to the target market.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-bone/10 p-6 [@media(hover:hover)]:hover:bg-white/10 transition-colors group"
            >
              <div className="font-mono text-signal text-xs uppercase tracking-widest mb-3">
                {item.week}
              </div>
              <h4 className="font-serif text-xl font-bold mb-4 min-h-[3rem] group-hover:text-white/90">
                {item.title}
              </h4>
              <p className="font-mono text-sm text-bone/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* D. THE SUPPORT STRUCTURE (DEAL POD) */}
    <section className="py-24 px-6 bg-bone text-oxford">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Introducing your dedicated advocacy team
          </h2>
          <p className="font-mono text-sm md:text-base text-oxford/70 leading-relaxed">
            You are supported by a modular, cross-functional team designed to
            maintain high quality and fiduciary focus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-oxford/10 pt-12">
          {/* Role 1 */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-oxford/50">
              Lead
            </div>
            <h3 className="font-serif text-2xl font-bold text-oxford flex items-center gap-3">
              Senior Career Advisor
            </h3>
            <div className="font-mono text-xs text-signal font-bold uppercase">
              The Strategist
            </div>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Diagnoses the Archetype, manages client psychology, and scripts
              the Shadow Negotiation. Focuses 100% on high-leverage activities.
            </p>
          </div>
          {/* Role 2 */}
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-8">
            <div className="font-mono text-xs uppercase tracking-widest text-oxford/50">
              Support
            </div>
            <h3 className="font-serif text-2xl font-bold text-oxford">
              Associate Advisor
            </h3>
            <div className="font-mono text-xs text-signal font-bold uppercase">
              The Builder
            </div>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Operates the Dynamic Personalization Engine (AI) to
              generate/refine assets and manage pipeline sequencing. Ensures
              quality assets are produced without Agent time.
            </p>
          </div>
          {/* Role 3 */}
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-8">
            <div className="font-mono text-xs uppercase tracking-widest text-oxford/50">
              Ops
            </div>
            <h3 className="font-serif text-2xl font-bold text-oxford">
              Coordinator
            </h3>
            <div className="font-mono text-xs text-signal font-bold uppercase">
              The Glue
            </div>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Handles all complex scheduling, compliance, and triggers the
              "Seamless Token Transfer". Ensures the operational rhythm is
              maintained.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* E. FINAL CTA */}
    <section className="py-24 px-6 bg-bone border-t border-oxford/10 text-center">
      <h2 className="font-serif text-4xl font-bold mb-8">
        Ready to Execute Your Strategy?
      </h2>
      <Button onClick={onOpenApplication}>Get Represented</Button>
    </section>
  </div>
);

export default ProcessPage;
