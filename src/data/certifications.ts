export interface Certification {
  title: string;
  issuer: string;
  url?: string; // No fake links
}

export const certifications: Certification[] = [
  {
    title: 'Introduction to Claude Code',
    issuer: 'Anthropic / Developer Program'
  },
  {
    title: 'Java Programming',
    issuer: 'Infosys Springboard'
  },
  {
    title: 'Python Programming',
    issuer: 'Infosys Springboard'
  }
];
