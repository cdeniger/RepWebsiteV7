
export enum DiagnosticStep {
  INTRO,
  QUESTIONS,
  CLARIFIER,
  LEAD_CAPTURE,
  ANALYZING,
  RESULT,
}

export interface DiagnosticState {
  step: DiagnosticStep;
  currentQuestionIndex: number;
  answers: { [key: string]: any };
  leadInfo: {
    fullName: string;
    email: string;
    phone?: string;
    optIn: boolean;
  };
  snapshotData?: any;
  aiAnalysis?: string;
}

export enum Category {
  Workplace = "Workplace",
  Professional = "Professional",
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  category: Category;
  rating: number;
  date: string;
  initials: string;
}

export interface ProcessPhase {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}
