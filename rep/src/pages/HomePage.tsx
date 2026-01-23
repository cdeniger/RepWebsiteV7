
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import MarketDynamics from '../components/MarketDynamics';
import backgroundImage from '../assets/Gemini_Generated_Image_2kb0gz2kb0gz2kb0.jpeg';

const HomePage: React.FC<{ 
  onOpenDiagnostic: () => void; 
  onOpenApplication: () => void; 
}> = ({ onOpenDiagnostic, onOpenApplication }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-white"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.0) 80%)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto space-y-8 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 lg:col-span-8 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fadeInUp mb-8">
              The job market is designed to reject you.{" "}
              <br className="hidden md:block" />
              <span className="italic font-normal text-white/70">
                You deserve a partner that gets you HIRED.
              </span>
            </h1>
            <div className="font-mono text-sm md:text-base leading-relaxed max-w-2xl text-white/80 mb-8 space-y-4">
              <p>
                The modern hiring process is a labyrinth of automated filters and gatekeepers. Don't navigate it blindly. We provide the map, the coaching, and the proprietary opportunities to reach your career destination.
              </p>
              <p>
                <b>Don’t just look for a job. Land the role that actually moves your career forward.</b>
              </p>
            </div>
            <div className="pt-2">
              <Button onClick={onOpenApplication}>Schedule a Call</Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-[12px] border-oxford" />

      <MarketDynamics />

      {/* Invisible Leverage Section */}
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
