import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { educationList } from '../data/education';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-start text-left mb-12">
        <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
          06 / Academics
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-text-primary">
          Education
        </h2>
        <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-3" />
      </div>

      <div 
        ref={ref}
        className="relative max-w-3xl mx-auto"
      >
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
          <motion.div
            className="w-full bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ height: '100%' }}
          />
        </div>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-12">
          {educationList.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-stretch md:items-center ${
                  isLeft ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-surface-primary border border-accent-cyan flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  <GraduationCap className="w-3.5 h-3.5 text-accent-violet" />
                </div>

                {/* Date/Duration for Desktop */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`hidden md:flex md:w-1/2 flex-col ${
                    isLeft ? 'pr-8 text-right justify-end' : 'pl-8 text-left justify-start'
                  }`}
                >
                  <div className={`flex items-center gap-2 text-xs font-mono text-accent-cyan font-semibold ${
                    isLeft ? 'justify-end' : 'justify-start'
                  }`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mt-1">
                    Academic Period
                  </div>
                </motion.div>

                {/* Degree Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${
                    isLeft ? 'md:pl-8' : 'md:pr-8'
                  } flex flex-col text-left`}
                >
                  {/* Mobile Date Header */}
                  <div className="flex md:hidden items-center gap-2 text-xs font-mono text-accent-cyan font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 rounded-xl glass-panel bg-surface-primary hover:border-accent-cyan/30 transition-colors shadow-lg">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-[9px] font-mono text-accent-violet tracking-wider uppercase font-semibold">
                      GPA: {edu.cgpa} CGPA
                    </span>
                    
                    <h3 className="text-sm md:text-base font-bold font-display text-text-primary mt-3">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-xs font-semibold text-text-secondary/90 font-mono mt-1.5 flex items-center gap-1">
                      <span>{edu.institution}</span>
                    </h4>
                    
                    <div className="flex items-center gap-1 text-[10px] font-mono text-text-secondary/50 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>

                    {edu.description && (
                      <>
                        <div className="h-[1px] w-full bg-white/5 my-4" />
                        <p className="text-xs text-text-secondary leading-relaxed font-light">
                          {edu.description}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
