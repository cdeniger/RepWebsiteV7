import React, { useState, useEffect } from "react";
import {
  Target,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Check,
  Clock,
  FileText,
  Briefcase,
  Zap,
  Layers,
  Users,
  CircleDot,
  Network,
  Share2,
  Video,
  Lock,
  LogIn,
} from "lucide-react";
import { Button } from "./components/Button";
import { DiagnosticModal } from "./components/DiagnosticModal";

// --- Sub-Components ---

const BrandLogo: React.FC<{ className?: string }> = ({
  className = "text-oxford",
}) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    <div className="font-sans font-black text-4xl tracking-tight leading-none">
      Rep<span className="text-signal">.</span>
    </div>
    <div className="h-10 w-px bg-current opacity-20"></div>
    <div className="flex flex-col items-start justify-center opacity-90 pt-1">
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] leading-tight mb-0.5">
        PROFESSIONALLY
      </span>
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] leading-tight">
        REPRESENTED
      </span>
    </div>
  </div>
);

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [loginError, setLoginError] = useState<string | null>(null);

  // Reset error when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setLoginError(null);
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("Client Account is Not Found");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-oxford/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-bone border border-oxford shadow-2xl p-8 md:p-10 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-oxford/50 hover:text-signal transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-signal mb-2">
            Client Portal
          </div>
          <h2 className="font-serif text-3xl font-bold text-oxford leading-tight">
            Welcome back to your Rep. Team.
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase text-oxford/60">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-white border border-oxford/20 p-3 font-serif focus:outline-none focus:border-signal transition-colors"
              placeholder="client@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase text-oxford/60">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-white border border-oxford/20 p-3 font-serif focus:outline-none focus:border-signal transition-colors"
            />
          </div>

          <div className="pt-2 space-y-4">
            <Button
              type="submit"
              className="w-full !bg-oxford hover:!bg-signal text-white"
            >
              Access Portal
            </Button>

            {loginError && (
              <div className="font-mono text-xs text-signal font-bold text-center animate-pulse">
                {loginError}
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-oxford/10 text-center">
          <p className="font-mono text-[10px] text-oxford/40">
            Secure client access. 256-bit encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto space-y-8 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 lg:col-span-8 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fadeInUp mb-8">
            The role that defines your future is out there.{" "}
            <br className="hidden md:block" />
            <span className="italic font-normal text-oxford/80">
              You don't have to find it ALONE.
            </span>
          </h1>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-2xl text-oxford/70 mb-8">
            Your career is a high-value asset, and it deserves to be managed
            with precision. We provide the market intelligence, negotiation
            strategy, and long-term career architecture to ensure your next step
            maximizes your trajectory. Don't just fill a role... execute a
            strategy.
          </p>
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
          <p className="text-bone/80 text-lg leading-relaxed font-sans">
            True representation empowers you; it doesn't silence you. We build
            the market map, model the equity, and script the negotiation. But
            when the door closes, you hold the microphone—ensuring you enter
            your new role with authority, not just a contract.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button onClick={onOpenDiagnostic}>
            Get Represented <ArrowRight className="inline ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  </div>
);

const ProcessPage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* B. HIGH-LEVEL OVERVIEW */}
    <section className="pt-32 pb-16 px-6 bg-bone">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-oxford">
            The Rep. Framework: <br />
            <span className="text-signal">From Strategy to Success</span>
          </h1>
          <p className="font-serif text-lg text-oxford/70 leading-relaxed">
            We replace guesswork with architectural design. Your engagement
            follows the disciplined, structured methodology of the Rep Playbook.
          </p>
        </div>

        <div className="space-y-12 relative max-w-5xl mx-auto">
          {/* Phase 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start p-8 border border-oxford/10 bg-white hover:border-signal/50 transition-colors shadow-sm">
            <div className="md:w-1/3">
              <div className="font-mono text-signal text-sm font-bold uppercase tracking-widest mb-2">
                Phase I
              </div>
              <h3 className="font-serif text-3xl font-bold text-oxford">
                The Launch
              </h3>
              <div className="font-mono text-xs text-oxford/50 mt-2">
                Foundation Building (30 Days)
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-oxford/80 leading-relaxed">
                We audit your career capital and rebuild your brand assets. You
                get a sharp new narrative, an optimized résumé, and a market map
                targeting your highest-value opportunities.
              </p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center -my-6 relative z-10 text-oxford/20">
            <ArrowRight className="rotate-90" size={32} />
          </div>

          {/* Phase 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start p-8 border border-oxford/10 bg-white hover:border-signal/50 transition-colors shadow-sm">
            <div className="md:w-1/3">
              <div className="font-mono text-signal text-sm font-bold uppercase tracking-widest mb-2">
                Phase II
              </div>
              <h3 className="font-serif text-3xl font-bold text-oxford">
                Pipeline Velocity
              </h3>
              <div className="font-mono text-xs text-oxford/50 mt-2">
                Market Activation
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-oxford/80 leading-relaxed">
                Isolation kills momentum. We move beyond reactive job boards to
                build and manage a proactive opportunity pipeline. We drive the
                outreach and sequencing, ensuring you have the consistent volume
                and "at-bats" needed to secure the right offer.
              </p>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center -my-6 relative z-10 text-oxford/20">
            <ArrowRight className="rotate-90" size={32} />
          </div>

          {/* Phase 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start p-8 border border-oxford/10 bg-white hover:border-signal/50 transition-colors shadow-sm">
            <div className="md:w-1/3">
              <div className="font-mono text-signal text-sm font-bold uppercase tracking-widest mb-2">
                Phase III
              </div>
              <h3 className="font-serif text-3xl font-bold text-oxford">
                The Architecture
              </h3>
              <div className="font-mono text-xs text-oxford/50 mt-2">
                Execution & Long-Term Design
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-oxford/80 leading-relaxed">
                We move from search to strategy. We formulate a definitive plan
                and prioritize the critical steps to achieve it. As your
                permanent partner, we provide the resources and oversight you
                need to ensure you stay on that trajectory long after the offer
                is signed.
              </p>
            </div>
          </div>
        </div>
      </div>
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
              title: "Brand Asset Overhaul",
              desc: "We deliver your Achievement-Forward Résumé and optimized LinkedIn profile, ready for market.",
            },
            {
              week: "Week 3",
              title: "Market Mapping",
              desc: "We build the data-driven Target Company List and identify specific hiring managers and recruiters for outreach.",
            },
            {
              week: "Week 4",
              title: "Pipeline Activation",
              desc: "We generate the Outreach Script Pack and launch the first sequence of personalized emails to the target market.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-bone/10 p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="font-mono text-signal text-xs uppercase tracking-widest mb-3">
                {item.week}
              </div>
              <h4 className="font-serif text-xl font-bold mb-4 min-h-[3rem] group-hover:text-white/90">
                {item.title}
              </h4>
              <p className="text-sm text-bone/70 leading-relaxed">
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
          <p className="text-oxford/70 text-lg">
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
              Senior Career Agent
            </h3>
            <div className="font-mono text-xs text-signal font-bold uppercase">
              The Strategist
            </div>
            <p className="text-sm text-oxford/70 leading-relaxed">
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
              Associate Agent
            </h3>
            <div className="font-mono text-xs text-signal font-bold uppercase">
              The Builder
            </div>
            <p className="text-sm text-oxford/70 leading-relaxed">
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
            <p className="text-sm text-oxford/70 leading-relaxed">
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
      <Button onClick={onOpenDiagnostic}>Get Represented</Button>
    </section>
  </div>
);

const AboutPage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* SECTION 1: HERO / MISSION STATEMENT */}
    <section className="bg-oxford text-bone pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
          The New Standard for <br /> Career Management
        </h1>
        <p className="font-serif text-lg md:text-xl text-bone/80 max-w-3xl leading-relaxed">
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
            <Button onClick={onOpenDiagnostic}>Get Represented</Button>
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
            <h3 className="font-serif italic text-xl text-oxford/70">
              (The Full Agent Model)
            </h3>
            <p className="font-serif text-lg leading-relaxed">
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
          <p className="mt-4 max-w-2xl text-oxford/70">
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
            <p className="text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
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
            <p className="text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
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
            <p className="text-sm text-oxford/70 mb-8 flex-grow leading-relaxed">
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
          <h3 className="font-serif italic text-xl text-oxford/70">
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
          <p className="text-xs text-oxford/50 mb-6 italic">
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
        <p className="font-serif text-lg md:text-xl italic leading-relaxed opacity-80">
          "We believe a career agent should be invested in the outcome. Our
          model ensures our incentives are aligned with your long-term financial
          growth. We win when you win."
        </p>
      </div>
    </section>
  </div>
);

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
          <p className="text-xl md:text-2xl text-signal font-serif italic mb-6">
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
            <p className="text-bone/70 text-sm leading-relaxed">
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
            <p className="text-bone/70 text-sm leading-relaxed">
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
            <p className="text-bone/70 text-sm leading-relaxed">
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
            <p className="text-oxford/70 text-sm leading-relaxed">
              Interviewing at a Series B Fintech? We ping a 'Friend' who serves
              as a CPO in that sector to validate your narrative against market
              reality.
            </p>
          </div>
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-12">
            <h3 className="font-serif text-2xl font-bold text-oxford">
              The Mock Interview Bench
            </h3>
            <p className="text-oxford/70 text-sm leading-relaxed">
              Practice with a player, not a coach. Technical candidates run
              simulations with actual Staff Engineers and VPs, ensuring your
              answers land.
            </p>
          </div>
          <div className="space-y-4 md:border-l md:border-oxford/10 md:pl-12">
            <h3 className="font-serif text-2xl font-bold text-oxford">
              Deal Flow
            </h3>
            <p className="text-oxford/70 text-sm leading-relaxed">
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

const ContactPage: React.FC<{ onOpenDiagnostic: () => void }> = ({
  onOpenDiagnostic,
}) => (
  <div className="animate-fadeIn">
    {/* A. VISUAL & TYPOGRAPHY CONTEXT */}
    {/* Layout Goal: Clean, two-column layout focusing on efficiency and structure. */}
    <section className="pt-32 pb-20 px-6 bg-bone min-h-[60vh]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* B. PRIMARY ACTION: LEAD QUALIFICATION FUNNEL */}
        <div className="space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Initiate Confidential Inquiry
          </h1>
          <p className="font-serif text-lg text-oxford/80 leading-relaxed max-w-md">
            We are intentional about our partnerships. To begin the process of
            professional representation and allow us to assess your specific
            career capital and timeline, please start our diagnostic.
          </p>
          <div className="pt-4">
            <Button onClick={onOpenDiagnostic}>Run My Career Diagnostic</Button>
          </div>
        </div>

        {/* C. SECONDARY CONTACTS & ADMINISTRATION */}
        <div className="space-y-12 md:border-l md:border-oxford/10 md:pl-16">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold">
              Administrative Contacts & Support
            </h2>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  General Inquiries
                </div>
                <a
                  href="mailto:hello@REPteam.com"
                  className="hover:text-signal transition-colors"
                >
                  hello@REPteam.com
                </a>
              </div>
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  Media & Press
                </div>
                <a
                  href="mailto:media@REPteam.com"
                  className="hover:text-signal transition-colors"
                >
                  media@REPteam.com
                </a>
              </div>
              <div>
                <div className="text-oxford/50 text-xs uppercase tracking-widest mb-1">
                  Finance & Billing (CPF Services LLC)
                </div>
                <a
                  href="mailto:billing@cpf-services.com"
                  className="hover:text-signal transition-colors"
                >
                  billing@cpf-services.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-oxford/50">
              Mailing Address
            </div>
            <address className="not-italic font-serif text-lg leading-relaxed">
              REP.
              <br />
              9329 Springwater Dr.
              <br />
              Dallas, TX 75228
            </address>
          </div>

          {/* D. LEGAL & CONFIDENTIALITY GUARDRAILS */}
          <div className="pt-8 border-t border-oxford/10">
            <p className="font-mono text-xs text-oxford/50 leading-relaxed max-w-sm">
              All communication is treated with strict confidentiality. Rep.
              does not accept unsolicited sales or recruiting inquiries via
              these addresses.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer CTA */}
    <section className="py-24 px-6 bg-oxford text-bone text-center">
      <h2 className="font-serif text-4xl font-bold mb-8">Ready to move?</h2>
      <Button onClick={onOpenDiagnostic}>Get Represented</Button>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [view, setView] = useState<
    "home" | "about" | "services" | "process" | "community" | "contact"
  >("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (
    newView:
      | "home"
      | "about"
      | "services"
      | "process"
      | "community"
      | "contact",
  ) => {
    setView(newView);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-serif text-oxford selection:bg-signal selection:text-white bg-bone">
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-bone/90 backdrop-blur-md border-b border-oxford/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Left: Logo */}
          <button
            onClick={() => navigateTo("home")}
            className="hover:opacity-80 transition-opacity"
          >
            <BrandLogo />
          </button>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex gap-6 font-mono text-xs tracking-widest uppercase items-center">
            <button
              onClick={() => navigateTo("home")}
              className={`hover:text-signal transition-colors ${view === "home" ? "text-signal" : ""}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className={`hover:text-signal transition-colors ${view === "about" ? "text-signal" : ""}`}
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo("services")}
              className={`hover:text-signal transition-colors ${view === "services" ? "text-signal" : ""}`}
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("process")}
              className={`hover:text-signal transition-colors ${view === "process" ? "text-signal" : ""}`}
            >
              Process
            </button>
            <button
              onClick={() => navigateTo("community")}
              className={`hover:text-signal transition-colors ${view === "community" ? "text-signal" : ""}`}
            >
              The Community
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className={`hover:text-signal transition-colors ${view === "contact" ? "text-signal" : ""}`}
            >
              Contact
            </button>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              className="!py-3 !px-6 !text-xs"
              onClick={() => setIsLoginOpen(true)}
            >
              Client Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-oxford hover:text-signal p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-bone border-b border-oxford/10 px-6 py-8 flex flex-col gap-6 font-mono text-sm uppercase tracking-widest animate-slideDown shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
            <button
              onClick={() => navigateTo("home")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Philosophy
            </button>
            <button
              onClick={() => navigateTo("services")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("process")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Process
            </button>
            <button
              onClick={() => navigateTo("community")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              The Community
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="text-left hover:text-signal border-b border-oxford/5 pb-2"
            >
              Contact
            </button>

            <div className="pt-4 flex flex-col gap-4">
              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Client Log In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {view === "home" && (
          <HomePage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        )}
        {view === "about" && (
          <AboutPage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        )}
        {view === "services" && <ServicesPage />}
        {view === "process" && (
          <ProcessPage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        )}
        {view === "community" && (
          <CommunityPage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        )}
        {view === "contact" && (
          <ContactPage onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="py-12 px-6 bg-bone border-t border-oxford/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <BrandLogo />
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] text-oxford/40 max-w-md ml-auto leading-relaxed">
              Human-Led, AI-Enabled. Data is confidential and never used to
              train public models. Strategic judgment is always human-reviewed.
            </p>
            <p className="font-mono text-[10px] text-oxford/40 mt-4">
              © {new Date().getFullYear()} Rep. Career Management.
            </p>
          </div>
        </div>
      </footer>

      {/* Diagnostic Modal Component */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />

      {/* Login Modal Component */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
