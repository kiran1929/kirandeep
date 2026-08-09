export interface Achievement {
  id: string;
  title: string;
  value: string;
  numberValue?: number; // Used for count-up animation
  suffix?: string;
  description: string;
  category: 'academic' | 'competitive-programming' | 'hackathon';
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'wipro-scholar',
    title: 'Wipro Scholar Trainee',
    value: 'Selected',
    description: 'Selected as a Wipro Scholar Trainee during the second year of Diploma.',
    category: 'academic'
  },
  {
    id: 'codechef',
    title: 'CodeChef Rating',
    value: '1400+',
    numberValue: 1400,
    suffix: '+',
    description: 'Active participant in competitive coding contests, achieving a 1400+ rating.',
    category: 'competitive-programming'
  },
  {
    id: 'codeforces',
    title: 'Codeforces Rating',
    value: '853',
    numberValue: 853,
    description: 'Engaged in algorithm challenges and contested rounds on Codeforces.',
    category: 'competitive-programming'
  },
  {
    id: 'hackerrank',
    title: 'HackerRank Problems',
    value: '150+',
    numberValue: 150,
    suffix: '+',
    description: 'Solved over 150 programming problems across various domains like data structures and algorithms.',
    category: 'competitive-programming'
  },
  {
    id: 'leetcode',
    title: 'LeetCode Problems',
    value: '30+',
    numberValue: 30,
    suffix: '+',
    description: 'Solved algorithmic problems focusing on optimizing space and time complexity.',
    category: 'competitive-programming'
  },
  {
    id: 'hackathon',
    title: 'College-level Hackathon',
    value: '2nd Place',
    numberValue: 2,
    suffix: 'nd Place',
    description: 'Secured 2nd Place in a college-level hackathon for collaborative software development.',
    category: 'hackathon'
  }
];
