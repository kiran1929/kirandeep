import React from 'react';
import { motion } from 'framer-motion';
import { type Project } from '../data/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  // Render responsive, abstract mockups for projects to maintain a premium look
  const renderVisual = () => {
    switch (project.visualType) {
      case 'wish-wall':
        return (
          <div className="w-full h-full relative overflow-hidden bg-black/60 rounded-t-xl border-b border-white/5 p-4 flex flex-col gap-2.5 font-sans">
            {/* Mock Header */}
            <div className="flex items-center justify-between opacity-50 pb-1.5 border-b border-white/5">
              <span className="text-[9px] font-mono tracking-wider uppercase text-text-secondary">Garuda Wish Wall</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
            </div>
            {/* Mock Feed Wishes */}
            <div className="flex flex-col gap-2 flex-1 justify-center">
              <div className="p-2 rounded-lg bg-surface-secondary border border-white/5 flex flex-col gap-1 text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-violet" />
                <span className="text-[10px] text-text-primary/90 font-medium">"I wish to build a system that scales to millions of users..."</span>
                <span className="text-[8px] font-mono text-text-secondary/50">Anonymous • 2 mins ago</span>
              </div>
              <div className="p-2 rounded-lg bg-surface-secondary border border-white/5 flex flex-col gap-1 text-left relative overflow-hidden opacity-70">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-cyan" />
                <span className="text-[10px] text-text-primary/90 font-medium">"Hope computer vision gets more intuitive in 2026."</span>
                <span className="text-[8px] font-mono text-text-secondary/50">Anonymous • 1 hour ago</span>
              </div>
            </div>
          </div>
        );

      case 'pay':
        return (
          <div className="w-full h-full relative overflow-hidden bg-black/60 rounded-t-xl border-b border-white/5 p-4 flex flex-col gap-3 font-mono text-[9px]">
            {/* Mock Ledger Head */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-text-secondary/70">GARUDA_PAY_v1.0</span>
              <span className="text-emerald-400 font-bold">SECURE CONNECTIONS</span>
            </div>
            {/* Balance Card */}
            <div className="p-3 rounded-lg bg-surface-secondary border border-accent-cyan/20 flex flex-col items-start gap-1">
              <span className="text-text-secondary/50 text-[8px] uppercase tracking-wider">Wallet Balance</span>
              <span className="text-sm font-sans font-bold text-accent-cyan tracking-tight">₹48,250.00</span>
            </div>
            {/* Mini Ledger */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-text-secondary/80">
                <span>TXN_8402_RAHUL</span>
                <span className="text-red-400">-₹1,500.00</span>
              </div>
              <div className="flex justify-between text-text-secondary/80">
                <span>TXN_9012_AMIT</span>
                <span className="text-emerald-400">+₹5,000.00</span>
              </div>
            </div>
          </div>
        );

      case 'hand-gesture':
        return (
          <div className="w-full h-full relative overflow-hidden bg-black/60 rounded-t-xl border-b border-white/5 flex items-center justify-center p-4">
            {/* Animated SVG of a Stylized Hand Grid */}
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent-cyan opacity-80">
              {/* Palm joints */}
              <circle cx="50" cy="80" r="1.5" className="fill-accent-cyan shadow-[0_0_8px_#22d3ee]" />
              <circle cx="35" cy="70" r="1.5" className="fill-accent-cyan" />
              <circle cx="65" cy="70" r="1.5" className="fill-accent-cyan" />
              {/* Connections */}
              <path d="M50 80 L35 70 M50 80 L65 70" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
              {/* Thumb */}
              <circle cx="22" cy="60" r="1.5" className="fill-accent-cyan" />
              <circle cx="16" cy="50" r="1.5" className="fill-accent-cyan animate-pulse" />
              <path d="M35 70 L22 60 L16 50" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
              {/* Index */}
              <circle cx="30" cy="45" r="1.5" className="fill-accent-cyan" />
              <circle cx="26" cy="30" r="1.5" className="fill-accent-cyan" />
              <circle cx="24" cy="20" r="1.5" className="fill-accent-cyan animate-pulse" />
              <path d="M35 70 L30 45 L26 30 L24 20" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
              {/* Middle */}
              <circle cx="48" cy="40" r="1.5" className="fill-accent-cyan" />
              <circle cx="48" cy="25" r="1.5" className="fill-accent-cyan" />
              <circle cx="48" cy="12" r="1.5" className="fill-accent-cyan animate-pulse" />
              <path d="M50 80 L48 40 L48 25 L48 12" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
              {/* Ring */}
              <circle cx="62" cy="43" r="1.5" className="fill-accent-cyan" />
              <circle cx="65" cy="28" r="1.5" className="fill-accent-cyan" />
              <circle cx="67" cy="16" r="1.5" className="fill-accent-cyan animate-pulse" />
              <path d="M65 70 L62 43 L65 28 L67 16" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
              {/* Pinky */}
              <circle cx="75" cy="55" r="1.5" className="fill-accent-cyan" />
              <circle cx="82" cy="45" r="1.5" className="fill-accent-cyan" />
              <circle cx="86" cy="36" r="1.5" className="fill-accent-cyan animate-pulse" />
              <path d="M65 70 L75 55 L82 45 L86 36" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5" />
            </svg>
            <div className="absolute bottom-2 left-3 font-mono text-[8px] text-accent-cyan/60 uppercase tracking-widest flex items-center gap-1 select-none">
              <span className="w-1 h-1 rounded-full bg-accent-cyan animate-ping" />
              Hand Landmark Overlay
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="w-full h-full relative overflow-hidden bg-black/60 rounded-t-xl border-b border-white/5 p-4 flex flex-col gap-2 font-mono text-[9px] text-left">
            <div className="flex items-center justify-between border-b border-white/5 pb-1 opacity-50">
              <span>SYSTEM_VOICE_ASSISTANT</span>
              <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
            </div>
            <div className="space-y-1.5 flex-1 flex flex-col justify-center">
              <div className="text-text-secondary/50">&gt; Waiting for command...</div>
              <div className="text-accent-cyan font-semibold flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-3 bg-accent-cyan animate-pulse" />
                Listening: "Run Chrome search"
              </div>
              <div className="text-accent-violet font-semibold">&gt; Command executed. Google loaded.</div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full relative overflow-hidden bg-black/60 rounded-t-xl border-b border-white/5 flex items-center justify-center p-4">
            <span className="text-xs font-mono text-text-secondary/55">Concept Visualization</span>
          </div>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className="group bg-surface-primary hover:bg-surface-secondary border border-white/5 hover:border-white/15 rounded-xl overflow-hidden shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.15)] flex flex-col h-full cursor-pointer transition-all duration-300 pointer-events-auto"
    >
      {/* Visual Header Graphic */}
      <div className="h-44 w-full relative overflow-hidden">
        {renderVisual()}
        {/* Glow Hover Cover */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between items-start text-left gap-4 relative">
        <div className="space-y-2">
          {/* Category */}
          <div className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-semibold">
            {project.category}
          </div>
          {/* Title */}
          <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent-violet transition-colors flex items-center gap-1">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </h3>
          {/* Description */}
          <p className="text-xs text-text-secondary font-light leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Badges & Placeholder links */}
        <div className="w-full space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-mono text-text-secondary/70">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links Section */}
          <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary/60 pt-2 border-t border-white/5">
            {/* Note that github link is placeholder */}
            <span className="flex items-center gap-1 hover:text-text-primary transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span>PROJECT_GITHUB_URL</span>
            </span>
            {project.liveUrl && (
              <span className="flex items-center gap-1 hover:text-text-primary transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>PROJECT_LIVE_URL</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
