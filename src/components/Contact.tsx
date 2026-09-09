import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, FileDown } from 'lucide-react';
import { Github, Linkedin, HackerRank, Codeforces, LeetCode } from './Icons';
import { useInView } from '../hooks/useInView';
import { profileAccounts, socialLinks } from '../data/social';

const accountIcons = {
  github: Github,
  linkedin: Linkedin,
  hackerrank: HackerRank,
  codeforces: Codeforces,
  leetcode: LeetCode,
} as const;

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(socialLinks.email);
        setToastMessage('Email copied to clipboard!');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const tempInput = document.createElement('input');
        tempInput.value = socialLinks.email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setToastMessage('Email copied to clipboard!');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      window.location.href = `mailto:${socialLinks.email}`;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
          08 / Connection
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-text-primary">
          Let's Build Something.
        </h2>
        <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-3" />
        <p className="text-xs md:text-sm text-text-secondary max-w-md font-light leading-relaxed mt-4">
          Have an idea, project, or opportunity? Reach me directly on email, LinkedIn, GitHub, or the coding platforms I use daily.
        </p>
      </div>

      <div
        ref={ref}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-left"
        >
          <div
            onClick={handleCopyEmail}
            className="group p-5 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border border-white/5 hover:border-accent-violet/30 transition-all duration-300 flex items-center justify-between cursor-pointer"
            title="Click to copy email"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-black/40 text-accent-violet group-hover:text-accent-cyan transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-text-secondary/50 uppercase tracking-wider block">
                  Email Me
                </span>
                <span className="text-xs md:text-sm font-semibold font-display text-text-primary break-all">
                  {socialLinks.email}
                </span>
              </div>
            </div>
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary group-hover:text-text-primary group-hover:bg-white/10 transition-all">
              {copied ? (
                <Check className="w-4 h-4 text-accent-cyan" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </div>
          </div>

          <a
            href={socialLinks.phoneHref}
            className="group p-5 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border border-white/5 hover:border-accent-cyan/30 transition-all duration-300 flex items-center gap-4 cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-black/40 text-accent-cyan group-hover:text-accent-violet transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono text-text-secondary/50 uppercase tracking-wider block">
                Call Me Direct
              </span>
              <span className="text-xs md:text-sm font-semibold font-display text-text-primary">
                {socialLinks.phone}
              </span>
            </div>
          </a>

          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border border-white/5 hover:border-accent-violet/30 transition-all duration-300 flex items-center gap-4 cursor-pointer"
          >
            <div className="p-3 rounded-lg bg-black/40 text-accent-violet group-hover:text-accent-cyan transition-colors">
              <FileDown className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono text-text-secondary/50 uppercase tracking-wider block">
                Download Resume
              </span>
              <span className="text-xs md:text-sm font-semibold font-display text-text-primary">
                Kirandeep_Gudepu_Resume.pdf
              </span>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:gap-4"
        >
          {profileAccounts.map((account) => {
            const Icon = accountIcons[account.id];
            return (
              <a
                key={account.id}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 flex flex-col justify-between items-start text-left min-h-28 gap-4"
              >
                <div className="p-3 rounded-lg bg-black/40 text-accent-cyan group-hover:text-white group-hover:bg-accent-blue/80 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-text-secondary/40 uppercase tracking-widest block">
                    {account.label}
                  </span>
                  <span className="text-[11px] font-bold font-display text-text-primary group-hover:text-accent-cyan transition-colors break-all">
                    {account.handle}
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 px-4 py-2.5 rounded-lg border border-accent-cyan/30 bg-surface-secondary/95 backdrop-blur-md shadow-2xl flex items-center justify-center gap-2 text-xs font-mono text-accent-cyan"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
