import React from "react";
import {
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
import { TESTIMONIALS } from "../data/testimonials";

export default function SuccessStoriesPage({ onOpenApplication }: { onOpenApplication: () => void }) {
  return (
    <div className="animate-fadeIn bg-bone">
      {/* Hero Header */}
      <section className="bg-oxford text-bone pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full border-r border-t border-bone/20 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <div className="font-mono text-signal text-base uppercase tracking-[0.4em] font-black">Fiduciary Proof</div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] max-w-4xl tracking-tighter">
            Success Stories <br /> <span className="italic font-normal opacity-60">Verified Outcomes.</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-bone/60 max-w-2xl leading-relaxed">
            Real outcomes from high-stakes career moves. This is what professional representation looks like in practice.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 bg-bone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-6 bg-oxford text-bone text-center relative border-t border-bone/5">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="w-12 h-px bg-signal mx-auto"></div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Initiate Your Strategy.</h2>
          <p className="font-serif text-xl text-bone/50 italic leading-relaxed max-w-xl mx-auto">
            "Your career trajectory is a structural decision, not a chance encounter. 
            We provide the architecture for the outcome you deserve."
          </p>
          <div className="pt-6">
            <Button onClick={onOpenApplication} variant="solid">
              Begin Application <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
