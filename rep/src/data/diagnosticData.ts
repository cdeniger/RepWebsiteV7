export const CLARIFIER_LIBRARY = {
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
} as const;

export const QUESTIONS = [
  { id: 'current_status', type: 'single', title: 'Current Context', prompt: 'Which best describes your situation right now?', options: ['Employed, not actively looking', 'Employed, passively exploring', 'Actively interviewing', 'In transition / recently left', 'Considering a change in the next year'] },
  { id: 'career_stage', type: 'single', title: 'Career Stage', prompt: 'Which best reflects your current career stage?', options: ['Early career', 'Mid-career individual contributor', 'Senior / Staff+ individual contributor', 'Manager / people leader', 'Executive'] },
  { id: 'role_direction', type: 'multi', max: 2, title: 'Role Direction', prompt: 'What are you most interested in optimizing for right now?', options: ['Hands-on execution', 'Owning ambiguous problems', 'Leading or developing people', 'Strategic influence', 'Exploring / sense-making'] },
  { id: 'environment_fit', type: 'single', title: 'Environment Fit', prompt: 'Where do you tend to do your best work?', options: ['Fast-moving, ambiguous environments', 'Structured, well-defined organizations', 'Scaling teams building systems', 'Stable, mature organizations', 'Depends heavily on leadership'] },
  { id: 'strengths', type: 'multi', max: 2, title: 'Strength Activation', prompt: 'Where do you most consistently create outsized value?', options: ['Driving execution through ambiguity', 'Designing systems or processes', 'Leading or developing people', 'Technical problem-solving', 'Navigating complex stakeholders', 'Commercial or growth impact'] },
  { id: 'differentiator', type: 'single', title: 'Differentiation Signal', prompt: 'Compared to peers, what most differentiates you?', options: ['Speed of execution', 'Quality of judgment', 'Depth of expertise', 'Ability to bridge functions', 'Leadership presence', 'Pattern recognition'] },
  { id: 'primary_tradeoff', type: 'single', title: 'Priority Tradeoff', prompt: 'If you had to prioritize one right now, which matters most?', options: ['Maximizing compensation', 'Expanding scope and ownership', 'Learning and long-term growth', 'Stability and predictability', 'Work-life balance'] },
  { id: 'nuance_text', type: 'textarea', title: 'Optional Nuance', prompt: 'Is there anything important about how you work that is often misunderstood?', placeholder: 'Share any specific context...', optional: true }
] as const;
