import React from 'react';
import { Lock, Share2, Users, Video } from 'lucide-react';
import { Button } from '../components/Button';

const CommunityPage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* B. HERO SECTION: THE VALUE PROPOSITION */}
    <section className="relative bg-oxford text-bone pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Abstract Network Visualization */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-bone/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-bone/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-px h-full bg-bone/20 transform -translate-x-1/2 -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-px bg-bone/20 transform -translate-y-1/2 -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Your Personal <br /> Board of Directors.
          </h1>
          <p className="font-mono text-lg md:text-xl italic text-signal mb-6">
            The Rep. Community isn't a networking group. It is a tactical
            intelligence network designed to give you an asymmetric advantage.
          </p>
          <p className="font-mono text-sm md:text-base leading-relaxed text-bone/70 max-w-3xl">
            Access to the hidden market requires more than a job board. It
            requires insider intelligence. We have curated a private roster of
            "Friends of the Firm"—senior operators at top-tier companies—who
            provide the ground-level intel you need to navigate culture,
            compensation, and hiring dynamics.
          </p>
        </div>
      </div>
    </section>

    {/* C. THE NETWORK ARCHITECTURE (3 TIERS) */}
    <section className="py-24 px-6 bg-oxford text-bone border-t border-bone/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-white/5 border border-bone/10 p-8 hover:bg-white/10 transition-colors group">
            <div className="text-signal mb-6">
              <Users size={40} strokeWidth={1.5} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-bone/50 mb-2">
              The Expert Network
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Friends of the Firm
            </h3>
            <p className="font-mono text-sm text-bone/70 leading-relaxed">
              We don't guess; we ask. We connect you with vetted Senior Leaders
              in your specific vertical for 15-minute 'Intel Downloads.' Get the
              reality check on culture and scope before you sign.
            </p>
          </div>

          {/* Tier 2 */}
          <div className="bg-white/5 border border-bone/10 p-8 hover:bg-white/10 transition-colors group">
            <div className="text-signal mb-6">
              <Share2 size={40} strokeWidth={1.5} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-bone/50 mb-2">
              The Alumni Flywheel
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              The Placed Circle
            </h3>
            <p className="font-mono text-sm text-bone/70 leading-relaxed">
              Success breeds success. Join a network of high-performing
              operators who have successfully navigated the Rep. System. Our
              alumni are the primary source of 'Hidden Market' referrals for the
              pipeline.
            </p>
          </div>

          {/* Tier 3 */}
          <div className="bg-white/5 border border-bone/10 p-8 hover:bg-white/10 transition-colors group">
            <div className="text-signal mb-6">
              <Video size={40} strokeWidth={1.5} />
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-bone/50 mb-2">
              The Tech Layer
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">Rep. Connect</h3>
            <p className="font-mono text-sm text-bone/70 leading-relaxed">
              AI-enhanced advisory. Our proprietary video portal ensures every
              mentor interaction is high-yield, equipping experts with your
              dossier so they can focus on strategy, not small talk.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* D. USE CASES (THE "HOW") */}
    <section className="py-24 px-6 bg-bone text-oxford">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl font-bold mb-6">
            How You Leverage The Room
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-oxford/10 pt-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-oxford">
              Tactical Validation
            </h3>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Interviewing at a Series B Fintech? We ping a 'Friend' who serves
              as a CPO in that sector to validate your narrative against market
              reality.
            </p>
          </div>
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-12">
            <h3 className="font-serif text-2xl font-bold text-oxford">
              The Mock Interview Bench
            </h3>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Practice with a player, not a coach. Technical candidates run
              simulations with actual Staff Engineers and VPs, ensuring your
              answers land.
            </p>
          </div>
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-12">
            <h3 className="font-serif text-2xl font-bold text-oxford">
              Deal Flow
            </h3>
            <p className="font-mono text-sm text-oxford/70 leading-relaxed">
              Access roles posted by Alumni before they hit the public
              aggregators.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* E. FINAL CTA (THE VELVET ROPE) */}
    <section className="py-24 px-6 bg-bone border-t border-oxford/10 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <Lock className="w-12 h-12 text-oxford/20 mx-auto" />
        <h2 className="font-serif text-4xl font-bold">Access the Network.</h2>
        <p className="font-mono text-sm text-oxford/60">
          Community access is exclusive to active Rep. clients and alumni.
        </p>
        <Button onClick={onOpenDiagnostic}>Apply for Representation</Button>
      </div>
    </section>
  </div>
);

export default CommunityPage;
