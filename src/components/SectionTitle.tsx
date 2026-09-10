import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

interface SectionTitleProps {
  index: string;
  title: string;
  align?: 'left' | 'center';
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  index,
  title,
  align = 'left',
  subtitle,
}) => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
  const centered = align === 'center';

  return (
    <div
      ref={ref}
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} mb-12`}
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2"
      >
        {index}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-2xl md:text-4xl font-display font-bold text-text-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 48, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="h-[2px] bg-gradient-to-r from-accent-cyan to-accent-violet mt-3"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className={`text-sm text-text-secondary font-light mt-6 max-w-2xl ${centered ? '' : 'text-left'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
