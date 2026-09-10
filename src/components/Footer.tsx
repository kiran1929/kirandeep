import React from 'react';
import { Mail, FileDown } from 'lucide-react';
import { Github, Linkedin, HackerRank, Codeforces, LeetCode } from './Icons';
import { socialLinks } from '../data/social';

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { href: socialLinks.github, label: 'GitHub Profile', icon: Github },
    { href: socialLinks.linkedin, label: 'LinkedIn Profile', icon: Linkedin },
    { href: socialLinks.hackerrank, label: 'HackerRank Profile', icon: HackerRank },
    { href: socialLinks.codeforces, label: 'Codeforces Profile', icon: Codeforces },
    { href: socialLinks.leetcode, label: 'LeetCode Profile', icon: LeetCode },
    { href: `mailto:${socialLinks.email}`, label: 'Send Email', icon: Mail },
    { href: socialLinks.resume, label: 'Download Resume', icon: FileDown },
  ];

  return (
    <footer className="w-full border-t border-border-primary bg-black/40 py-10 sm:py-12 px-4 sm:px-6 mt-8 sm:mt-12 relative z-10 select-none pb-[calc(2.5rem+env(safe-area-inset-bottom))]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent animate-gradient" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-display font-bold text-sm text-text-primary tracking-widest uppercase hover:text-accent-cyan transition-colors"
          >
            Kirandeep Gudepu
          </a>
          <span className="text-[10px] font-mono text-text-secondary/60">
            Building. Learning. Solving.
          </span>
        </div>

        <div className="text-[10px] font-mono text-text-secondary/30">
          <span>Designed with Vite + React + TS • Crafted in 2026</span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2.5">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-text-secondary hover:text-text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
          <span className="text-[9px] font-mono text-text-secondary/50">
            © 2026 Kirandeep Gudepu. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
