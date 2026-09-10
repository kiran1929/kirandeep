import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-bg-dark overflow-hidden select-none pointer-events-none">
      {/* Grid overlays */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-0 tech-grid-fine opacity-30" />

      {/* Radial glow gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-dark/80 to-bg-dark" />

      {/* Futuristic soft floating gradient blobs */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-accent-violet/10 blur-[120px] top-[-10%] left-[-10%]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 50, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-cyan/8 blur-[150px] bottom-[-10%] right-[-10%]"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-accent-blue/10 blur-[100px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Technical Grid Overlay Lines (adds a sophisticated vibe) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
        <div className="absolute left-[30%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-violet/20 to-transparent" />
        <div className="absolute left-[70%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-cyan/10 to-transparent" />
      </div>

      {Array.from({ length: 16 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-accent-cyan/50"
          style={{
            left: `${(i * 19 + 7) % 100}%`,
            top: `${(i * 13 + 11) % 100}%`,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            y: [0, -18, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grain / Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
