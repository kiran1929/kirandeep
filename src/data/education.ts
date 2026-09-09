export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
  duration: string;
  description?: string;
}

export const educationList: EducationEntry[] = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Medhavi Skills University (PW Institute of Innovation)',
    location: 'Sikkim / Bengaluru',
    cgpa: '8.8',
    duration: 'August 2025 – Expected 2029',
    description: 'Industry-focused CSE program covering software engineering, databases, algorithms, and building real-world AI and full-stack applications.'
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: "St. Mary's Group of Institutions",
    location: 'Hyderabad',
    cgpa: '8.8',
    duration: '2022 – 2025',
    description: 'Built foundations in C, C++, Java, databases, and web technologies, with industrial training in Python full-stack development.'
  }
];
