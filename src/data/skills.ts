import type { SkillGroup } from '../types/content'

// Names listed in src/components/icons/shapes.ts (techIcons) show with their logo.
export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Software Engineering', ar: 'هندسة البرمجيات' },
    skills: [
      'TypeScript',
      'JavaScript',
      'PHP',
      'React',
      'Flutter',
      'Laravel',
      'Node.js',
      'REST APIs',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'Figma',
    ],
  },
  {
    title: { en: 'Data Analytics', ar: 'تحليل البيانات' },
    skills: ['Python', 'pandas', 'SQL', 'Power BI', 'Excel', 'Data Visualization'],
  },
]
