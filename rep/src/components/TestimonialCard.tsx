
import React from 'react';
import { Testimonial } from '../types';
import { Quote, Shield } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-10 border border-oxford/5 flex flex-col hover:border-oxford/20 transition-all duration-700 group relative overflow-hidden dossier-shadow">
      {/* Subtle Marker */}
      <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
        <Shield size={24} className="text-oxford" />
      </div>
      
      <div className="mb-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-signal font-black mb-4 flex items-center gap-2">
          <span className="w-1 h-1 bg-signal rounded-full"></span>
          Verified Outcome
        </div>
        <Quote className="text-oxford/10 group-hover:text-signal/40 transition-colors" size={32} strokeWidth={1.5} />
      </div>
      
      <p className="font-serif text-xl md:text-2xl leading-[1.5] text-oxford mb-16 italic font-normal">
        "{testimonial.content}"
      </p>
      
      <div className="mt-auto pt-8 border-t border-oxford/5 flex items-end justify-between">
        <div>
          <h4 className="font-serif font-bold text-lg leading-tight text-oxford tracking-tight">
            {testimonial.name}
          </h4>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-oxford/40 mt-1">
            {testimonial.role}
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-oxford/30 mb-1">
            Sector Ref:
          </div>
          <div className="font-mono text-xs font-bold text-oxford/60 uppercase tracking-widest">
            {testimonial.category.split(' & ')[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
