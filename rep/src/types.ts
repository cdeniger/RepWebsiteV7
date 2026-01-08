
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
