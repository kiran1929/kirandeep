import { socialLinks } from './social';

export interface Achievement {
  id: string;
  title: string;
  value: string;
  numberValue?: number;
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
    description: 'Achieved a 1400+ rating on CodeChef through consistent competitive programming.',
    category: 'competitive-programming'
  },
  {
    id: 'codeforces',
    title: 'Codeforces Rating',
    value: '853',
    numberValue: 853,
    description: 'Active on Codeforces contests and practice, currently at an 853 rating.',
    category: 'competitive-programming',
    link: socialLinks.codeforces
  },
  {
    id: 'hackerrank',
    title: 'HackerRank Problems',
    value: '150+',
    numberValue: 150,
    suffix: '+',
    description: 'Solved 150+ problems on HackerRank across data structures and algorithms.',
    category: 'competitive-programming',
    link: socialLinks.hackerrank
  },
  {
    id: 'leetcode',
    title: 'LeetCode Problems',
    value: '30+',
    numberValue: 30,
    suffix: '+',
    description: 'Solved 30+ algorithmic problems on LeetCode with a focus on interview patterns.',
    category: 'competitive-programming',
    link: socialLinks.leetcode
  },
  {
    id: 'hackathon',
    title: 'College-level Hackathon',
    value: '2nd Place',
    numberValue: 2,
    suffix: 'nd Place',
    description: 'Secured 2nd Place in a college-level hackathon for an innovative software solution.',
    category: 'hackathon'
  }
];
