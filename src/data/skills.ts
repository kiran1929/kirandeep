export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'concepts';
}

export const skills: Skill[] = [
  { name: 'Java', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'SQL', category: 'languages' },

  { name: 'React.js', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },

  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Prisma', category: 'backend' },

  { name: 'MongoDB', category: 'databases' },
  { name: 'MySQL', category: 'databases' },
  { name: 'PostgreSQL', category: 'databases' },

  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Vercel', category: 'tools' },

  { name: 'Data Structures & Algorithms', category: 'concepts' },
  { name: 'Object-Oriented Programming', category: 'concepts' },
  { name: 'JWT Authentication', category: 'concepts' },
  { name: 'REST API Design', category: 'concepts' },
  { name: 'Blockchain Fundamentals', category: 'concepts' },
];

export const skillCategories = {
  languages: 'Languages',
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  databases: 'Databases',
  tools: 'Developer Tools',
  concepts: 'Core Concepts'
};
