export interface Skill {
  name: string;
  level: number; // 0-100 for visual progress, though we might use it subtly
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Architecting high-performance user interfaces with clean, modular code.',
    skills: [
      { name: 'React 19 / Next.js 15', level: 98 },
      { name: 'TypeScript', level: 95 },
      { name: 'Tailwind CSS 4', level: 96 },
      { name: 'GSAP / Framer Motion', level: 92 },
      { name: 'Redux / Zustand', level: 88 }
    ]
  },
  {
    title: 'Backend & Infrastructure',
    description: 'Building robust, scalable server-side systems and efficient data management.',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL / Supabase', level: 85 },
      { name: 'REST & GraphQL APIs', level: 92 },
      { name: 'AWS / Vercel Edge', level: 82 },
      { name: 'Docker / CI/CD', level: 78 }
    ]
  },
  {
    title: 'Experience Design',
    description: 'Crafting premium digital products with focus on usability and motion.',
    skills: [
      { name: 'Product Strategy', level: 85 },
      { name: 'UI/UX Design Systems', level: 90 },
      { name: 'Interactive Prototyping', level: 94 },
      { name: 'Micro-interactions', level: 96 },
      { name: 'Typography & Layout', level: 88 }
    ]
  }
];
