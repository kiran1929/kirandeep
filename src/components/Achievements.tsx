import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { achievements } from '../data/achievements';
import { Trophy, Code2, Award, Zap } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

// Count-up helper
const CountUpValue: React.FC<{ end: number; suffix?: string; prefix?: string }> = ({
  end,
  suffix = '',
  prefix = '',
}) => {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16); // ~60fps
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

const categoryIcons = {
  academic: Award,
  'competitive-programming': Code2,
  hackathon: Trophy,
};

const categoryGlows = {
  academic: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] border-accent-violet/10 hover:border-accent-violet/30',
  'competitive-programming': 'hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] border-accent-cyan/10 hover:border-accent-cyan/30',
  hackathon: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] border-yellow-500/10 hover:border-yellow-500/30',
};

export const Achievements: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="achievements" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      <SectionTitle index="05 / Verification" title="Proof of Practice" />

      {/* Grid container */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievements.map((ach) => {
          const Icon = categoryIcons[ach.category];
          const glowClass = categoryGlows[ach.category];
          
          return (
            <motion.div
              key={ach.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border transition-all duration-300 flex flex-col justify-between items-start text-left gap-6 ${glowClass}`}
            >
              {/* Card Top */}
              <div className="flex justify-between items-start w-full">
                <div className="p-2.5 rounded-lg bg-black/40 text-accent-cyan">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                
                {/* Numeric Highlight */}
                <div className="text-xl md:text-2xl font-mono font-bold text-text-primary tracking-tight">
                  {ach.numberValue ? (
                    <CountUpValue end={ach.numberValue} suffix={ach.suffix} />
                  ) : (
                    <span>{ach.value}</span>
                  )}
                </div>
              </div>

              {/* Card Details */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold font-display text-text-primary uppercase tracking-wide">
                  {ach.title}
                </h3>
                <p className="text-xs text-text-secondary font-light leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Bottom Technical Tag */}
              <div className="flex items-center justify-between gap-1.5 text-[9px] font-mono text-text-secondary/40 border-t border-white/5 pt-3 w-full">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-accent-cyan/60" />
                  <span className="uppercase tracking-wider">Verified Practice Credentials</span>
                </span>
                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-cyan hover:text-text-primary uppercase tracking-wider"
                  >
                    View profile
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
