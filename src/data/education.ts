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
    institution: 'Medhavi Skills University',
    location: 'Sikkim',
    cgpa: '8.8',
    duration: 'August 2025 – Expected 2029',
    description: 'Focusing on core computer science subjects, software engineering, databases, algorithms, and exploring applications in AI and computer vision.'
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: "St. Mary's Group of Institutions",
    location: 'Hyderabad',
    cgpa: '8.8',
    duration: '2022 – 2025',
    description: 'Acquired foundational knowledge in programming (C, C++, Java), database systems, and web technologies.'
  }
];
