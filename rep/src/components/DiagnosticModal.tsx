import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

const archetypes = {
  "The Technical Expert": {
    description:
      "Deep domain knowledge, excels at solving complex technical problems.",
    archetype: "A deep technical expert, valued for domain knowledge.",
    problem: "Translating technical wins into strategic business impact.",
  },
  "The Operator": {
    description: "Excels at execution, process optimization, and team management.",
    archetype: "A master of execution and process.",
    problem: "Moving from tactical execution to strategic leadership.",
  },
  "The Strategist": {
    description: "Thinks long-term, connects dots, and sees the bigger picture.",
    archetype: "A forward-thinking, strategic visionary.",
    problem: "Getting bogged down in execution details.",
  },
  "The Rainmaker": {
    description: "Drives revenue, builds relationships, and closes deals.",
    archetype: "A natural relationship-builder and revenue generator.",
    problem: "Transitioning from individual contributor to sales leader.",
  },
};

const DiagnosticModal: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [archetype, setArchetype] = useState<string | null>(null);

  const questions = [
    "Which statement best describes your primary value add?",
    "What is your biggest career frustration right now?",
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Simple logic to determine archetype - can be expanded
      const expertKeywords = ["technical", "domain", "complex"];
      if (expertKeywords.some((kw) => answers[0].toLowerCase().includes(kw))) {
        setArchetype("The Technical Expert");
      } else {
        setArchetype("The Operator"); // Default for this simplified example
      }
      setStep(step + 1);
    }
  };

  const renderContent = () => {
    if (step < questions.length) {
      return (
        <div className="text-center">
          <h3 className="font-serif text-2xl mb-6">{questions[step]}</h3>
          <div className="space-y-4">
            {/* Add answer options here based on the question */}
            <Button onClick={() => handleAnswer("technical answer")}>
              Solving complex technical problems
            </Button>
            <Button onClick={() => handleAnswer("operator answer")}>
              Managing teams and processes
            </Button>
          </div>
        </div>
      );
    } else {
      const arch = archetype ? archetypes[archetype as keyof typeof archetypes] : null;
      return (
        <div className="text-center animate-fadeIn">
          <h3 className="font-serif text-3xl mb-4">Diagnosis Complete</h3>
          <p className="text-oxford/70 mb-8">Your Career Archetype:</p>
          <div className="bg-bone p-6 border border-oxford/10 mb-8">
            <h4 className="font-serif text-2xl font-bold text-signal mb-2">
              {archetype}
            </h4>
            {arch && (
              <p className="text-oxford/80 italic">{arch.archetype}</p>
            )}
          </div>
          {arch && (
            <div className="text-left space-y-4">
              <div>
                <h5 className="font-bold flex items-center gap-2">
                  <Check className="text-green-500" size={18} />
                  Core Strength:
                </h5>
                <p className="text-oxford/80 pl-7">{arch.description}</p>
              </div>
              <div>
                <h5 className="font-bold flex items-center gap-2">
                  <X className="text-red-500" size={18} />
                  Common Pitfall:
                </h5>
                <p className="text-oxford/80 pl-7">{arch.problem}</p>
              </div>
            </div>
          )}
          <Button onClick={onClose} className="mt-8">
            Explore Representation
          </Button>
        </div>
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-oxford/50 hover:text-oxford"
        >
          <X size={24} />
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export { DiagnosticModal };
