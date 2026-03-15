export interface ExperienceItem {
  company: string;
  role: string;
  year: string;
  highlight: string;
  current: boolean;
  badge: string;
  products: string;
}

export interface Project {
  title: string;
  context: string;
  decision: string;
  impact: string;
  reflection: string;
  prototypeLink?: string;
  category: "final" | "prototype";
}

export interface DecisionLogEntry {
  decision: string;
  why: string;
  result: string;
  learning: string;
  emoji: string;
}

export interface WritingPost {
  title: string;
  description: string;
  link?: string;
  date?: string;
  tags?: string[];
}

export interface PhotoCategory {
  title: string;
  category: string;
  images: string[];
}
