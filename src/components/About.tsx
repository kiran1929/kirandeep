import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Code2, GraduationCap, Trophy } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

// Count-up helper component
const CountUp: React.FC<{ end: number; decimals?: number; duration?: number; suffix?: string }> = ({
  end,
  decimals = 0,
  duration = 2000,
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeValue = progressRatio * (2 - progressRatio);
      const currentValue = easeValue * end;
      
      setCount(currentValue);

      if (progressRatio < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const stats = [
    {
      label: 'B.Tech CGPA',
      value: <CountUp end={8.8} decimals={1} />,
      sub: 'Medhavi Skills Univ.',
      icon: GraduationCap,
      color: 'text-accent-violet border-accent-violet/20 bg-accent-violet/5',
    },
    {
      label: 'Diploma CGPA',
      value: <CountUp end={8.8} decimals={1} />,
      sub: "St. Mary's Group",
      icon: GraduationCap,
      color: 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5',
    },
    {
      label: 'CodeChef Rating',
      value: <CountUp end={1400} suffix="+" />,
      sub: 'Competitive Coding',
      icon: Code2,
      color: 'text-accent-blue border-accent-blue/20 bg-accent-blue/5',
    },
    {
      label: 'HackerRank Solved',
      value: <CountUp end={150} suffix="+" />,
      sub: 'Data Structures / Alg.',
      icon: Trophy,
      color: 'text-yellow-500 border-yellow-500/20 bg-yellow-500/5',
    },
    {
      label: 'LeetCode Solved',
      value: <CountUp end={30} suffix="+" />,
      sub: 'Problem Solving',
      icon: Code2,
      color: 'text-green-500 border-green-500/20 bg-green-500/5',
    },
    {
      label: 'Hackathon Rank',
      value: <CountUp end={2} suffix="nd Place" />,
      sub: 'College Hackathon',
      icon: Award,
      color: 'text-orange-500 border-orange-500/20 bg-orange-500/5',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      <SectionTitle index="01 / Biography" title="About Me" />

      <div 
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-6 text-left space-y-6 text-text-secondary text-sm md:text-base font-light leading-relaxed"
        >
          <p>
            I am Kirandeep Gudepu, a Computer Science student and aspiring software engineer based in Bengaluru. I am pursuing a{' '}
            <strong className="text-text-primary font-medium">
              B.Tech in Computer Science and Engineering
            </strong>{' '}
            at Medhavi Skills University through PW Institute of Innovation (Expected 2029). Before that I completed a{' '}
            <strong className="text-text-primary font-medium">
              Diploma in Computer Science and Engineering
            </strong>{' '}
            at St. Mary's Group of Institutions, Hyderabad (CGPA 8.8).
          </p>
          <p>
            I focus on{' '}
            <strong className="text-text-primary font-medium">Full-Stack Development</strong>
            {' '}with Java, JavaScript, the MERN stack, and Next.js. Recent work includes InternScope AI, Garuda Wish Wall, and computer-vision tools. I also explore{' '}
            <strong className="text-text-primary font-medium">AI, REST APIs, JWT auth, and blockchain fundamentals</strong>.
          </p>
          <p>
            I practice DSA consistently — 150+ problems on{' '}
            <a href="https://www.hackerrank.com/profile/kirandeep_gudepu" target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium underline decoration-accent-cyan/40 hover:decoration-accent-cyan">HackerRank</a>,{' '}
            <a href="https://codeforces.com/profile/kiran1929" target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium underline decoration-accent-cyan/40 hover:decoration-accent-cyan">Codeforces</a> (853 rating),{' '}
            <a href="https://leetcode.com/u/thor_kiran/" target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium underline decoration-accent-cyan/40 hover:decoration-accent-cyan">LeetCode</a> (30+), and 1400+ on CodeChef. I believe consistency beats talent.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="p-4 rounded-xl glass-panel bg-surface-primary hover:bg-surface-secondary hover:border-white/15 transition-all duration-300 flex flex-col items-start text-left gap-3"
              >
                <div className={`p-2 rounded-lg border ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-text-primary/95 font-sans">
                    {stat.label}
                  </div>
                  <div className="text-[9px] font-mono text-text-secondary/60">
                    {stat.sub}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
