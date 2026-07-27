export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FeatureItem {
  id: string;
  index: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  accentColor?: string;
  metrics?: string;
  codeSnippet?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  outcome: string;
  rating: number;
  highlightTag: string;
}

export interface StatItem {
  id: string;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'interviews' | 'pricing' | 'platform';
  question: string;
  answer: string;
}

export interface TerminalExecutionStep {
  command: string;
  questionTitle: string;
  category: string;
  difficulty: 'Medium' | 'Hard' | 'Staff';
  userCodeSnippet: string;
  outputLog: string[];
  confidenceScore: number;
  feedback: {
    correctness: string;
    complexity: string;
    edgeCases: string;
  };
}
