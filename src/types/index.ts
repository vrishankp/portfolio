import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  // Optional: proficiency level, icon, etc.
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon?: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface PhotographyItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  dateTaken?: string;
  isPortrait?: boolean;
}
