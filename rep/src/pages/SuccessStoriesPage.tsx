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
      <section className="pt-32 pb-16 px-6 bg-oxford text-bone">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="font-mono text-sm uppercase tracking-widest text-bone/60 max-w-2xl">
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
