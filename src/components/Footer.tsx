import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full border-t border-border-primary bg-black/40 py-12 px-6 mt-12 relative z-10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left identity */}
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

        {/* Center / Navigation references */}
        <div className="text-[10px] font-mono text-text-secondary/30">
          <span>Designed with Vite + React + TS • Crafted in 2026</span>
        </div>

        {/* Right social handles */}
        <div className="flex flex-col items-center md:items-end gap-2.5">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kiran1929"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/kirandeep-gudepu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:gudepukirandeep@gmail.com"
              className="text-text-secondary hover:text-text-primary p-2 hover:bg-white/5 rounded-full transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <span className="text-[9px] font-mono text-text-secondary/50">
            © 2026 Kirandeep Gudepu. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};
