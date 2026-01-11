
import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2, Lock, Sparkles, AlertTriangle, Target, Check, FileText, Shield, Database } from 'lucide-react';
import { Button } from './Button';
import { DiagnosticState, DiagnosticStep } from '../types';
import { generateCareerAnalysis } from '../services/geminiService';
import { saveLeadData } from '../services/dbService';

// --- DATA CONSTANTS (KEEPING ORIGINAL FOR CONTEXT) ---
const CLARIFIER_LIBRARY = {
  USP_OUTCOME_CATEGORY: {
    id: "USP_OUTCOME_CATEGORY",
    question: "Which outcome best reflects the impact you’re referring to?",
    options: ["Revenue or growth impact", "Operational efficiency", "Team performance / retention", "Speed of execution", "Risk reduction / quality", "Skip"],
  },
  REMOTE_HYBRID_CLARITY: {
    id: "REMOTE_HYBRID_CLARITY",
    question: "Which is most accurate for your work preference?",
    options: ["Fully remote", "Remote-first, occasional onsite", "Hybrid, with clear flexibility", "Skip"],
  },
  TRAVEL_TOLERANCE: {
    id: "TRAVEL_TOLERANCE",
    question: "What level of travel is truly comfortable for you?",
    options: ["None / very rare", "Occasional (≤10%)", "Moderate (10–25%)", "Frequent (25%+)", "Skip"],
  },
  DEALBREAKER_STRENGTH: {
    id: "DEALBREAKER_STRENGTH",
    question: "Is this an absolute 'no,' or something we should screen carefully for?",
    options: ["Absolute deal-breaker", "Strong preference", "Context-dependent", "Skip"],
  },
  MISUNDERSTOOD_DIMENSION: {
    id: "MISUNDERSTOOD_DIMENSION",
    question: "What do you think is most often misunderstood about your background?",
    options: ["Scope of impact", "Leadership vs IC level", "Industry transferability", "Job changes / transitions", "Skip"],
  }
};

const QUESTIONS = [
  { id: 'current_status', type: 'single', title: 'Current Context', prompt: 'Which best describes your situation right now?', options: ['Employed, not actively looking', 'Employed, passively exploring', 'Actively interviewing', 'In transition / recently left', 'Considering a change in the next year'] },
  { id: 'career_stage', type: 'single', title: 'Career Stage', prompt: 'Which best reflects your current career stage?', options: ['Early career', 'Mid-career individual contributor', 'Senior / Staff+ individual contributor', 'Manager / people leader', 'Executive'] },
  { id: 'role_direction', type: 'multi', max: 2, title: 'Role Direction', prompt: 'What are you most interested in optimizing for right now?', options: ['Hands-on execution', 'Owning ambiguous problems', 'Leading or developing people', 'Strategic influence', 'Exploring / sense-making'] },
  { id: 'environment_fit', type: 'single', title: 'Environment Fit', prompt: 'Where do you tend to do your best work?', options: ['Fast-moving, ambiguous environments', 'Structured, well-defined organizations', 'Scaling teams building systems', 'Stable, mature organizations', 'Depends heavily on leadership'] },
  { id: 'strengths', type: 'multi', max: 2, title: 'Strength Activation', prompt: 'Where do you most consistently create outsized value?', options: ['Driving execution through ambiguity', 'Designing systems or processes', 'Leading or developing people', 'Technical problem-solving', 'Navigating complex stakeholders', 'Commercial or growth impact'] },
  { id: 'differentiator', type: 'single', title: 'Differentiation Signal', prompt: 'Compared to peers, what most differentiates you?', options: ['Speed of execution', 'Quality of judgment', 'Depth of expertise', 'Ability to bridge functions', 'Leadership presence', 'Pattern recognition'] },
  { id: 'primary_tradeoff', type: 'single', title: 'Priority Tradeoff', prompt: 'If you had to prioritize one right now, which matters most?', options: ['Maximizing compensation', 'Expanding scope and ownership', 'Learning and long-term growth', 'Stability and predictability', 'Work-life balance'] },
  { id: 'nuance_text', type: 'textarea', title: 'Optional Nuance', prompt: 'Is there anything important about how you work that is often misunderstood?', placeholder: 'Share any specific context...', optional: true }
];

const calculateScores = (answers: any) => {
  let leverage = 40;
  if ((answers.strengths || []).includes('Driving execution through ambiguity')) leverage += 15;
  if (answers.differentiator === 'Quality of judgment' || answers.differentiator === 'Pattern recognition') leverage += 15;
  if (['Senior / Staff+ individual contributor', 'Manager / people leader', 'Executive'].includes(answers.career_stage)) leverage += 10;
  let risk = 30;
  if (answers.environment_fit === 'Depends heavily on leadership') risk += 15;
  let clarity = 40;
  if (['Quality of judgment', 'Ability to bridge functions'].includes(answers.differentiator)) clarity += 15;
  return { leverage, risk, clarity };
};

const generateMarketRead = (answers: any) => {
  const scores = calculateScores(answers);
  // Default to the most common case, then check for more specific overrides.
  let hookType = "overqualified"; 

  if (scores.leverage >= 60) {
    hookType = "leverage";
  } else if (scores.risk >= 45) { // This is now a reachable condition
    hookType = "risk";
  } else if (scores.clarity <= 40) { // This is now a reachable condition
    hookType = "clarity";
  }

  const dataMap: any = {
    leverage: { title: "Underestimated Leverage", copy: "The market is likely underestimating where you create value — offering you roles that feel 'safe' but quietly cap upside.", diagnosis: "Search Mismatch: Occurs when professionals with high judgment operate in searches optimized for checklists rather than outcomes.", consequences: ["Capped earning potential", "Negotiating from competency rather than leverage", "Boredom within 12 months"], patterns: ["Ambiguous Ownership Roles", "Underpowered Function Needing a Builder", "High-Trust Lead Roles"] },
    risk: { title: "Mis-scoped Opportunities", copy: "You tend to be strongest in roles whose true scope isn’t obvious upfront. These are easy to misread — and easy to under-negotiate.", diagnosis: "Evaluation Criteria Mismatch: Happens when you are evaluated on credentials rather than the conditions where you thrive.", consequences: ["Responsibility without control", "Misalignment between impact and recognition", "Burnout risk"], patterns: ["Turnaround / Fixer Roles", "Strategic No-Man's Land", "The 'Everything' Role"] },
    clarity: { title: "High Capability, Low Signal", copy: "Your capability likely exceeds the clarity of your current market signal; decisions are made before your real value is understood.", diagnosis: "Signal Compression: Complex profiles get compressed into simpler labels, making the market faster but less accurate.", consequences: ["Being screened out by ATS", "Spending interviews explaining history vs value", "Anchoring to past salary"], patterns: ["The 'Safe' Bet", "Niche Specialist", "Generalist Operator"] },
    overqualified: { title: "Structural Overqualification", copy: "The market presents roles that look like a fit on paper, but are structurally under-scoped relative to your capability.", diagnosis: "Trajectory Friction: Your experience signals 'expensive hire' while target roles are scoped for 'execution', creating flight risk fear.", consequences: ["Rejection for being 'too senior'", "Title cuts that set trajectory back", "Motivation skepticism"], patterns: ["High-Level Advisor", "Bridge Roles", "Strategic Consultant"] }
  };

  const hook = dataMap[hookType];
  return { hook, diagnosis: hook.diagnosis, consequences: hook.consequences, patterns: hook.patterns, scores };
};

const determineClarifier = (nuanceText = '') => {
  if (!nuanceText || nuanceText.length < 10) return null;
  const normalized = nuanceText.toLowerCase();
  if (normalized.includes("politics") || normalized.includes("toxic")) return CLARIFIER_LIBRARY.DEALBREAKER_STRENGTH;
  if (normalized.includes("travel")) return CLARIFIER_LIBRARY.TRAVEL_TOLERANCE;
  if (normalized.includes("remote") || normalized.includes("hybrid")) return CLARIFIER_LIBRARY.REMOTE_HYBRID_CLARITY;
  if (normalized.includes("misunderstood") || normalized.includes("wrong")) return CLARIFIER_LIBRARY.MISUNDERSTOOD_DIMENSION;
  return null;
};

// --- COMPONENT ---

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [state, setState] = useState<DiagnosticState>({
    step: DiagnosticStep.INTRO,
    currentQuestionIndex: 0,
    answers: {},
    leadInfo: { fullName: '', email: '', phone: '', optIn: false }
  });
  const [loadingStep, setLoadingStep] = useState<string | null>(null);
  const [currentClarifier, setCurrentClarifier] = useState<any>(null);
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setState({
        step: DiagnosticStep.INTRO,
        currentQuestionIndex: 0,
        answers: {},
        leadInfo: { fullName: '', email: '', phone: '', optIn: false }
      });
      setCurrentClarifier(null);
      setLoadingStep(null);
      setEmailIsValid(true);
      setShowEmailError(false);
      setSubmissionError(null);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (state.currentQuestionIndex < QUESTIONS.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIndex: prev.currentQuestionIndex + 1 }));
    } else {
      const clarifier = determineClarifier(state.answers.nuance_text);
      if (clarifier) {
        setCurrentClarifier(clarifier);
        setState(prev => ({ ...prev, step: DiagnosticStep.CLARIFIER }));
      } else {
        const data = generateMarketRead(state.answers);
        setState(prev => ({ ...prev, step: DiagnosticStep.LEAD_CAPTURE, snapshotData: data }));
      }
    }
  };

  const handleAnswer = (val: any) => {
    const q = QUESTIONS[state.currentQuestionIndex];
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [q.id]: val }
    }));
    if (q.type === 'single') {
      setTimeout(() => handleNext(), 250);
    }
  };

  const handleClarifierSubmit = (val: string) => {
    const updatedAnswers = { ...state.answers, clarifier_answer: val, clarifier_id: currentClarifier.id };
    const data = generateMarketRead(updatedAnswers);
    setState(prev => ({ ...prev, step: DiagnosticStep.LEAD_CAPTURE, answers: updatedAnswers, snapshotData: data }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailIsValid(isValid);
    return isValid;
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setState(prev => ({ ...prev, leadInfo: { ...prev.leadInfo, email } }));
    if (showEmailError) {
      validateEmail(email);
    }
  };

  const handleEmailBlur = () => {
    setShowEmailError(true);
    validateEmail(state.leadInfo.email);
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowEmailError(true);
if (!validateEmail(state.leadInfo.email)) {
      return;
    }
    setState(prev => ({ ...prev, step: DiagnosticStep.ANALYZING }));
    setSubmissionError(null);

    try {
        setLoadingStep("Securing Career Profile...");
        const aiVerdict = await generateCareerAnalysis(state);
        const updatedState = { ...state, aiAnalysis: aiVerdict };
        
        setLoadingStep("Synching with Agent Network...");
        await saveLeadData(updatedState);
        
        setState(prev => ({ ...prev, step: DiagnosticStep.RESULT, aiAnalysis: aiVerdict }));
    } catch (err) {
        console.error("Submission Error:", err);
        let errorMessage = "An unexpected error occurred. Please try again.";
        if (err instanceof Error) {
            errorMessage = `Submission Failed: ${err.message}. Please check the console for details.`
        }
        setSubmissionError(errorMessage);
        // Revert to the lead capture step to show the error
        setState(prev => ({ ...prev, step: DiagnosticStep.LEAD_CAPTURE }));
    } finally {
        setLoadingStep(null);
    }
  };

  if (!isOpen) return null;

  const currentQ = QUESTIONS[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-oxford/95 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-bone border border-oxford shadow-2xl flex flex-col max-h-[90vh] md:min-h-[550px]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-oxford/10 bg-white/50">
          <div className="font-mono text-xs text-oxford/60 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-signal rounded-full"></span>
            Career Positioning Snapshot
          </div>
          <button onClick={onClose} className="text-oxford hover:text-signal transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Progress */}
        {state.step === DiagnosticStep.QUESTIONS && (
          <div className="w-full h-1 bg-oxford/10">
            <div className="h-full bg-signal transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        <div className="flex-grow flex flex-col overflow-y-auto p-8 md:p-12">
          
          {state.step === DiagnosticStep.INTRO && (
            <div className="space-y-8 animate-fadeIn text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
                Benchmark Your <br/> Market Readiness.
              </h2>
              <p className="font-mono text-sm text-oxford/70 max-w-md leading-relaxed">
                This snapshot translates your professional experience into a clinical market read. 
                Fast. Precise. Strategic.
              </p>
              <Button onClick={() => setState(prev => ({ ...prev, step: DiagnosticStep.QUESTIONS }))}>
                Begin Assessment
              </Button>
            </div>
          )}

          {state.step === DiagnosticStep.QUESTIONS && (
            <div className="space-y-8 animate-fadeIn">
              <div className="font-mono text-signal text-xs uppercase tracking-widest">{currentQ.title}</div>
              <h3 className="font-serif text-3xl md:text-4xl text-oxford leading-tight">{currentQ.prompt}</h3>
              {currentQ.type === 'multi' && (
                <p className="font-mono text-sm text-oxford/70">Please select your top two choices</p>
              )}
              <div className="grid gap-3">
                {currentQ.type === 'single' && currentQ.options?.map(opt => (
                  <button key={opt} onClick={() => handleAnswer(opt)} className="p-4 border border-oxford/10 hover:border-signal hover:bg-white text-left transition-all font-serif text-lg font-medium">
                    {opt}
                  </button>
                ))}
                {currentQ.type === 'multi' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentQ.options?.map(opt => {
                        const isSelected = (state.answers[currentQ.id as keyof typeof state.answers] as string[])?.includes(opt);
                        return (
                          <button key={opt} onClick={() => {
                            const curr = (state.answers[currentQ.id as keyof typeof state.answers] as string[]) || [];
                            if (isSelected) handleAnswer(curr.filter(x => x !== opt));
                            else if (curr.length < (currentQ.max || 1)) handleAnswer([...curr, opt]);
                          }} className={`p-4 border text-left transition-all font-serif text-lg font-medium ${isSelected ? 'border-signal bg-white' : 'border-oxford/10 hover:border-signal'}`}>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    <div className="pt-4">
                       <Button onClick={handleNext} className="w-full md:w-auto">Confirm Selection</Button>
                    </div>
                  </>
                )}
                {currentQ.type === 'textarea' && (
                  <div className="space-y-6">
                    <textarea className="w-full bg-white border border-oxford/10 p-4 font-serif focus:outline-none focus:border-signal min-h-[120px]" placeholder={currentQ.placeholder} onChange={(e) => handleAnswer(e.target.value)} />
                    <div className="flex justify-between items-center">
                      <button onClick={handleNext} className="font-mono text-xs uppercase text-oxford/40 hover:text-oxford">Skip</button>
                      <Button onClick={handleNext}>Finish Assessment</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {state.step === DiagnosticStep.CLARIFIER && (
            <div className="space-y-8 animate-fadeIn text-center md:text-left">
              <div className="flex items-center gap-2 text-signal font-mono text-xs uppercase tracking-widest">
                <Sparkles size={14} /> Refining Profile
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-oxford leading-tight">{currentClarifier.question}</h3>
              <div className="grid gap-3">
                {currentClarifier.options.map((opt: string) => (
                  <button key={opt} onClick={() => handleClarifierSubmit(opt)} className="p-4 border border-oxford/10 hover:border-signal hover:bg-white text-left transition-all font-serif text-lg font-medium">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.step === DiagnosticStep.LEAD_CAPTURE && (
            <div className="space-y-8 animate-fadeIn max-w-lg mx-auto w-full">
                 {submissionError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline"> {submissionError}</span>
                    </div>
                )}
              <div className="text-center space-y-2">
                <Lock size={32} className="text-signal mx-auto mb-4" />
                <h3 className="font-serif text-3xl font-bold">Your Snapshot is Ready.</h3>
                <p className="font-mono text-xs text-oxford/50">Provide your contact info to unlock the results.</p>
              </div>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-oxford/60">Full Name</label>
                  <input type="text" required className="w-full bg-white border border-oxford/10 p-4 font-serif focus:outline-none focus:border-signal" onChange={(e) => setState(prev => ({ ...prev, leadInfo: { ...prev.leadInfo, fullName: e.target.value } }))} />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-oxford/60">Professional Email</label>
                  <input type="email" required className={`w-full bg-white border p-4 font-serif focus:outline-none ${showEmailError && !emailIsValid ? 'border-red-500' : 'border-oxford/10 focus:border-signal'}`} onChange={handleEmailChange} onBlur={handleEmailBlur} />
                  {showEmailError && !emailIsValid && (
                    <p className="font-mono text-xs text-red-500">Please provide a valid email address.</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-oxford/60">Phone (Optional)</label>
                  <input type="tel" className="w-full bg-white border border-oxford/10 p-4 font-serif focus:outline-none focus:border-signal" onChange={(e) => setState(prev => ({ ...prev, leadInfo: { ...prev.leadInfo, phone: e.target.value } }))} />
                </div>
                <Button type="submit" className="w-full">Access Results</Button>
                <p className="text-[10px] font-mono text-center text-oxford/40">Secure & Confidential.</p>
              </form>
            </div>
          )}

          {state.step === DiagnosticStep.ANALYZING && (
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <Loader2 size={48} className="animate-spin text-signal" />
              <div className="space-y-1">
                <div className="font-mono text-sm tracking-widest uppercase">Generating Market Read...</div>
                {loadingStep && <div className="font-mono text-[10px] text-oxford/40 animate-pulse">{loadingStep}</div>}
              </div>
            </div>
          )}

          {state.step === DiagnosticStep.RESULT && state.snapshotData && (
            <div className="space-y-8 animate-fadeIn overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
              <div className="space-y-4">
                <div className="font-mono text-signal text-xs uppercase tracking-widest flex items-center gap-2">
                  <FileText size={14} /> Strategic Audit
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">{state.snapshotData.hook.title}</h2>
                <p className="font-serif text-xl italic text-oxford/70 leading-relaxed">"{state.snapshotData.hook.copy}"</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-oxford text-bone p-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-60">The Hidden Pattern</h4>
                    <p className="text-sm leading-relaxed opacity-90">{state.snapshotData.diagnosis}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-oxford/60">Risk Factors</h4>
                    {state.snapshotData.consequences.map((c: string, i: number) => (
                      <div key={i} className="flex gap-3 text-sm text-oxford/80">
                        <AlertTriangle size={14} className="text-signal shrink-0 mt-1" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-serif text-lg font-bold flex items-center gap-2">
                      <Target size={18} className="text-signal" /> Target Role Profiles
                    </h4>
                    <div className="space-y-2">
                      {state.snapshotData.patterns.map((p: string, i: number) => (
                        <div key={i} className="p-3 border border-oxford/10 bg-white text-sm font-serif">{p}</div>
                      ))}/
                    </div>
                  </div>

                  <div className="p-6 border-l-4 border-signal bg-signal/5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 bg-signal rounded-full animate-pulse"></span>
                      <h4 className="font-mono text-[10px] uppercase font-bold tracking-wider">Strategic Verdict</h4>
                    </div>
                    <p className="font-serif italic text-base leading-relaxed text-oxford/90">"{state.aiAnalysis}"</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-oxford/10 flex flex-col items-center gap-6">
                <Button onClick={() => window.location.href = '#contact'}>Review Snapshot with a Strategist</Button>
                <p className="text-[10px] font-mono text-oxford/40 text-center max-w-sm">
                  Most professionals search alone—reacting to listings and guessing at fit. Rep. provides the fiduciary advocacy needed to secure your trajectory.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
