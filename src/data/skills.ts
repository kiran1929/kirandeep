export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'concepts';
}

export const skills: Skill[] = [
  // Languages
  { name: 'C', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'SQL', category: 'languages' },

  // Frontend
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },

  // Databases
  { name: 'MongoDB', category: 'databases' },
  { name: 'MySQL', category: 'databases' },

  // Developer Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Docker', category: 'tools' },

  // Core Concepts
  { name: 'Data Structures & Algorithms', category: 'concepts' },
  { name: 'Object-Oriented Programming', category: 'concepts' },
  { name: 'JWT Authentication', category: 'concepts' },
  { name: 'Blockchain Fundamentals', category: 'concepts' }
];

export const skillCategories = {
  languages: 'Languages',
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  databases: 'Databases',
  tools: 'Developer Tools',
  concepts: 'Core Concepts'
};
