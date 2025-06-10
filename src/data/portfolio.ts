import type { Project, SkillCategory, Experience } from '@/types';
import { Code, Database, Cloud, Wrench, Briefcase, GraduationCap, Palette } from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Poker Bot',
    description: 'An application of advanced hand ranking algorithms to accurately calculate odds of each player winning and predict the best move',
    imageUrl: '/images/poker.jpg',
    imageAiHint: 'stock market graph',
    technologies: ['Java', 'Git'],
    githubUrl: 'https://github.com/vrishankp/Texas-Holdem',
  },
  {
    title: 'Monopoly Simulator',
    description: 'A simulation of the game Monopoly to determine which positions and properties are most valuable (hint: it\'s orange)',
    imageUrl: '/images/monopoly.jpg',
    imageAiHint: 'virtual reality finance',
    technologies: ['Python', 'MatPlotLib'],
    githubUrl: 'https://github.com/vrishankp/Monopoly/',
  },
  {
    title: 'Portfolio Website (This!)',
    description: 'Redesigned personal portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring a modern design and smooth animations.',
    imageUrl: '/images/web.jpg',
    imageAiHint: 'modern website design',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/vrishank/websiteV2',
  },
];

export const skillsCategorized: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Python' }, { name: 'Java' }, { name: 'SQL' },
      { name: 'PHP' }, { name: 'TypeScript' },{ name: 'HTML' }, { name: 'CSS' }
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Palette,
    skills: [
      { name: 'React' }, { name: 'Selenium' },
      { name: 'Flask' }, { name: 'Next.js' },
      { name: 'Tailwind CSS' }, { name: 'Pandas' }, { name: 'NumPy' }
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MongoDB' }, { name: 'MySQL' }
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub' }, { name: 'Docker' }, { name: 'VS Code' }, 
      { name: 'Jupyter Notebook' }, { name: 'Linux' }, { name: 'Jira' }, { name: 'Agile' }
    ],
  }
];

export const experiences: Experience[] = [
    {
      role: 'Peer Mentor',
      company: 'University of Wisconsin, Madison',
      duration: 'May 2023 - May 2024',
      responsibilities: [
          'Facilitated in-class activities and discussions, including one on one office hours to offer guidance on topics such as machine learning',
          'Fostered an engaging and interactive learning environment to promote students\' understanding of data science concepts',
          'Spearheaded efforts to make more personal and interesting projects, increasing student satisfaction by 10%',
      ],
    },
    {
    role: 'Automation Engineering Intern',
    company: 'Safety National',
    duration: 'May 2024 - Aug 2024',
    responsibilities: [
      'Developed and implemented automated scripts to replace manual tasks, reducing completion time by up to 55%',
      'Reduced overhead by 20% by engineering robust and reusable automation frameworks using Selenium and Java',
      'Successfully published and integrated finalized automation scripts onto Jenkins production servers, ensuring they run in perpetuity',
    ],
  },
  {
    role: 'Automation Engineer',
    company: 'Safety National',
    duration: 'June 2025 - Present',
    responsibilities: [
    ],
  },
];
