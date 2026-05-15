export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  detailedHighlights?: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
