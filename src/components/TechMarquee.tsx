import React from 'react';

const items = [
  'Java',
  'C++',
  'JavaScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'OpenCV',
  'Docker',
  'Vercel',
];

export const TechMarquee: React.FC = () => {
  const row = [...items, ...items];

  return (
    <div className="w-full max-w-7xl px-0 sm:px-6 overflow-hidden py-4 select-none">
      <div className="relative border-y border-white/5 bg-white/[0.02] py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-bg-dark to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-bg-dark to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-8 sm:gap-12">
          {row.map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="flex items-center gap-8 sm:gap-12 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-text-secondary/70"
            >
              <span className="text-accent-cyan/70">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
