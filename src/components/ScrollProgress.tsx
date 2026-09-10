import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none">
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-accent-violet via-accent-blue to-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.45)]"
        style={{ scaleX: progress }}
      />
    </div>
  );
};
