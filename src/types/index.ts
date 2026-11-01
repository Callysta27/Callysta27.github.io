export type ProjectCategory = 'all' | 'data' | 'web';

export interface Project {
  id: string;
  title: string;
  category: 'data' | 'web';
  emoji: string;
  role?: string;
  description: string;
  stats: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  keyInsights: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'leadership' | 'certification';
  summary: string;
  highlights: string[];
  badge?: string;
  skills: string[];
}
