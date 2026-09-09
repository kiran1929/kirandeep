export const socialLinks = {
  github: 'https://github.com/kiran1929',
  linkedin: 'https://www.linkedin.com/in/kirandeep-gudepu/',
  email: 'gudepukirandeep@gmail.com',
  phone: '+91 9063090446',
  phoneHref: 'tel:+919063090446',
  hackerrank: 'https://www.hackerrank.com/profile/kirandeep_gudepu',
  codeforces: 'https://codeforces.com/profile/kiran1929',
  leetcode: 'https://leetcode.com/u/thor_kiran/',
  resume: '/Kirandeep_Gudepu_Resume.pdf',
} as const;

export const profileAccounts = [
  { id: 'github', label: 'GitHub', handle: 'github.com/kiran1929', href: socialLinks.github },
  { id: 'linkedin', label: 'LinkedIn', handle: 'linkedin.com/in/kirandeep-gudepu', href: socialLinks.linkedin },
  { id: 'hackerrank', label: 'HackerRank', handle: 'hackerrank.com/kirandeep_gudepu', href: socialLinks.hackerrank },
  { id: 'codeforces', label: 'Codeforces', handle: 'codeforces.com/profile/kiran1929', href: socialLinks.codeforces },
  { id: 'leetcode', label: 'LeetCode', handle: 'leetcode.com/u/thor_kiran', href: socialLinks.leetcode },
] as const;
