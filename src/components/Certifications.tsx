import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { certifications } from '../data/certifications';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Certifications: React.FC = () => {
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as any },
    },
  };

  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      <SectionTitle index="07 / Accreditations" title="Certifications" />

      {/* Cards List */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="p-5 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary hover:border-accent-cyan/20 border border-white/5 transition-all duration-300 flex items-start text-left gap-4"
          >
            {/* Icon representation */}
            <div className="p-2.5 rounded-lg bg-black/40 text-accent-cyan shrink-0">
              <ShieldCheck className="w-5 h-5 text-accent-cyan" />
            </div>

            {/* Details */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold font-display text-text-primary leading-tight">
                {cert.title}
              </h3>
              <p className="text-[11px] font-mono text-text-secondary">
                {cert.issuer}
              </p>
              
              <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 pt-2 font-semibold">
                <CheckCircle className="w-3 h-3 shrink-0" />
                <span>Verified Credentials</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
