import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';
import { useInView } from '../hooks/useInView';
import { 
  Code2, 
  Monitor, 
  Server, 
  Database, 
  Wrench, 
  Lightbulb 
} from 'lucide-react';

const categoryIcons = {
  languages: Code2,
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
  concepts: Lightbulb,
};

const categoryColors = {
  languages: 'from-accent-violet/20 to-accent-blue/10 border-accent-violet/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]',
  frontend: 'from-accent-cyan/20 to-accent-blue/10 border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]',
  backend: 'from-accent-violet/20 to-accent-cyan/10 border-accent-violet/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]',
  databases: 'from-accent-blue/20 to-accent-cyan/10 border-accent-blue/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]',
  tools: 'from-accent-cyan/20 to-accent-violet/10 border-accent-cyan/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]',
  concepts: 'from-accent-violet/20 to-accent-blue/10 border-accent-violet/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]',
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' as any },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-start text-left mb-12">
        <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
          02 / Technologies
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-text-primary">
          Technologies I Work With
        </h2>
        <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-3" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-start mb-8 select-none">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 ${
            activeCategory === null
              ? 'bg-accent-violet text-white border border-accent-violet/50 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
              : 'bg-white/5 text-text-secondary border border-white/5 hover:text-text-primary hover:bg-white/10'
          }`}
        >
          All Tech
        </button>
        {categories.map((cat) => {
          const Icon = categoryIcons[cat];
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide uppercase transition-all duration-200 ${
                isActive
                  ? 'bg-accent-violet text-white border border-accent-violet/50 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 text-text-secondary border border-white/5 hover:text-text-primary hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{skillCategories[cat]}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {filteredSkills.map((skill) => {
          const Icon = categoryIcons[skill.category];
          const colorClass = categoryColors[skill.category];

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group p-4 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary border border-white/5 transition-all duration-300 flex flex-col justify-between items-start text-left gap-4 overflow-hidden relative ${colorClass}`}
            >
              {/* Subtle ambient light overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center justify-between w-full relative z-10">
                <div className="p-2 rounded-lg bg-black/40 text-text-secondary group-hover:text-accent-cyan transition-colors">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-[8px] font-mono text-text-secondary/40 group-hover:text-accent-cyan/40 transition-colors uppercase tracking-widest">
                  {skill.category}
                </span>
              </div>

              <div className="relative z-10 w-full">
                <h3 className="text-sm font-semibold text-text-primary font-display group-hover:text-glow-violet transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[9px] font-mono text-text-secondary/60">
                  {skillCategories[skill.category]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
