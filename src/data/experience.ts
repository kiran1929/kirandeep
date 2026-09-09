export interface ExperienceEntry {
  id: string;
  type: string;
  title: string;
  organization: string;
  duration: string;
  durationNote?: string;
  details: string[];
}

export const experienceList: ExperienceEntry[] = [
  {
    id: 'google-student-ambassador',
    type: 'Leadership',
    title: 'Google Student Ambassador',
    organization: 'Google',
    duration: 'May 2026 – Sep 2026',
    durationNote: 'Campus program',
    details: [
      'Conducted student workshops as part of the Google Student Ambassador program, helping peers build technical and developer skills.',
      'Volunteered to conduct "Sagu Bhumi," a project showcase workshop, at St. Mary\'s Group of Institutions.'
    ]
  },
  {
    id: 'new-vision-tech',
    type: 'Industrial Training',
    title: 'Python Full Stack Development',
    organization: 'New Vision Tech',
    duration: 'Jan 2024 – Jun 2024',
    durationNote: '6 Months Duration',
    details: [
      'Built a Blockchain-based Fake News Detection System using Python and full-stack technologies.',
      'Designed backend logic, integrated databases, and implemented REST APIs connecting frontend and backend.',
      'Collaborated in a team environment following software engineering best practices and Git-based version control.'
    ]
  }
];
