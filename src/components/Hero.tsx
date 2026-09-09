import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, FileDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { Terminal } from './Terminal';
import { socialLinks } from '../data/social';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  // Stagger variants for initial animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as any },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center items-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-accent-violet/30 bg-accent-violet/5 text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold tracking-widest text-accent-cyan uppercase max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span>Open to Learning • Building • Collaborating</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-text-primary leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan">Kirandeep</span>.
            </h1>
            <h2 className="text-xl md:text-3xl font-display font-semibold tracking-tight text-text-secondary">
              Full-Stack Developer building MERN apps, AI tools, and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet font-mono text-glow-cyan">
                intelligent applications.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-sm md:text-base max-w-lg leading-relaxed font-sans font-light"
          >
            Computer Science student at Medhavi Skills University (PW Institute of Innovation). I build MERN and Next.js products, explore AI and computer vision, and practice DSA on HackerRank, Codeforces, and LeetCode.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-violet text-white font-medium text-xs tracking-wider uppercase hover:bg-accent-violet/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 w-full sm:w-auto justify-center min-h-11"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-border-primary hover:border-white/20 text-text-primary font-medium text-xs tracking-wider uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center min-h-11"
            >
              <span>Let's Connect</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-border-primary hover:border-white/20 text-text-primary font-medium text-xs tracking-wider uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center min-h-11"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-border-primary hover:border-white/20 text-text-secondary hover:text-text-primary transition-all duration-300 w-[calc(50%-0.375rem)] sm:w-auto min-h-11"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
              <span className="text-xs font-medium uppercase tracking-wider sm:hidden">GitHub</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-border-primary hover:border-white/20 text-text-secondary hover:text-text-primary transition-all duration-300 w-[calc(50%-0.375rem)] sm:w-auto min-h-11"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
              <span className="text-xs font-medium uppercase tracking-wider sm:hidden">LinkedIn</span>
            </a>
          </motion.div>

          {/* Micro details */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] font-mono text-text-secondary/40 pt-2 sm:pt-4"
          >
            <span>while(true) {'{'} learn(); {'}'}</span>
            <span>console.log('hello world');</span>
          </motion.div>
        </motion.div>

        {/* Right Interactive Terminal / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-center items-center relative w-full min-w-0"
        >
          {/* Glow backdrop behind terminal */}
          <div className="absolute w-72 h-72 rounded-full bg-accent-violet/10 blur-[80px] -z-10 pointer-events-none" />
          <Terminal />

          {/* Floating tech badges under the terminal for visual flair */}
          <div className="flex flex-wrap gap-2 justify-center mt-6 max-w-sm select-none pointer-events-none">
            {['React', 'Next.js', 'Node.js', 'Java', 'Python', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-text-secondary hover:text-text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 select-none pointer-events-none z-10">
        <span className="text-[10px] font-mono tracking-widest text-text-secondary/40 uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent-violet/60 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent-cyan"
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
};
