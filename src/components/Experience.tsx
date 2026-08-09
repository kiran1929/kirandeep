import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const trainingDetails = [
    'Completed industrial training focused on Python Full Stack Development.',
    'Worked on modern web application architecture.',
    'Developed a Blockchain-based Fake News Detection System.',
    'Designed backend logic and integrated databases.',
    'Implemented REST APIs and optimized responses.',
    'Followed Git-based version control and standard software engineering practices.'
  ];

  return (
    <section id="experience" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-start text-left mb-12">
        <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
          04 / Journey
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-text-primary">
          Training & Experience
        </h2>
        <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-3" />
      </div>

      <div 
        ref={ref}
        className="relative max-w-3xl mx-auto"
      >
        {/* Timeline Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
          {/* Animated line progression */}
          <motion.div
            className="w-full bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ height: '100%' }}
          />
        </div>

        {/* Timeline Entries (Only one entry from resume, but positioned nicely) */}
        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex flex-col md:flex-row items-stretch md:items-center">
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-surface-primary border border-accent-violet flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
              <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
            </div>

            {/* Left Box (Date) for Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex md:w-1/2 justify-end pr-8 text-right flex-col"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-accent-cyan font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>Jan 2024 – June 2024</span>
              </div>
              <span className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mt-1">
                6 Months Duration
              </span>
            </motion.div>

            {/* Right Box (Card) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full md:w-1/2 pl-10 md:pl-8 flex flex-col text-left"
            >
              {/* Mobile Date Header */}
              <div className="flex md:hidden items-center gap-2 text-xs font-mono text-accent-cyan font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Jan 2024 – June 2024</span>
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-xl glass-panel bg-surface-primary hover:border-accent-violet/30 transition-colors shadow-lg">
                <span className="px-2 py-0.5 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-[9px] font-mono text-accent-cyan tracking-wider uppercase font-semibold">
                  Industrial Training
                </span>
                
                <h3 className="text-base font-bold font-display text-text-primary mt-3">
                  Python Full Stack Development
                </h3>
                
                <h4 className="text-xs font-medium text-text-secondary font-mono mt-1">
                  New Vision Tech
                </h4>
                
                <div className="h-[1px] w-full bg-white/5 my-4" />
                
                <ul className="space-y-2">
                  {trainingDetails.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-text-secondary font-light leading-relaxed"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
