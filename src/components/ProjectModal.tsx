import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Terminal, Layers } from 'lucide-react';
import { Github } from './Icons';
import { type Project } from '../data/projects';
import { displayHost } from '../lib/utils';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Re-enable background scrolling
    };
  }, [onClose]);

  // Derived Problem/Solution summaries based on project info
  const getProblemAndSolution = () => {
    switch (project.id) {
      case 'internscope-ai':
        return {
          problem: 'Internship hunting is fragmented across dozens of company career pages, so students miss roles that never hit generic job boards.',
          solution: 'Co-built an aggregator that pulls internship-only listings from 86+ ATS career pages, scores resumes with ATS keyword suggestions, and adds mock interviews plus application tracking.',
          architecture: 'Career Page Crawlers ──> Trigger.dev Sync ──> Prisma / Neon Postgres ──> Next.js App (Clerk Auth)'
        };
      case 'garuda-wish-wall':
        return {
          problem: 'Social platforms often suffer from privacy issues and identity exposure, preventing users from expressing their authentic thoughts, fears, or aspirations without fear of judgment.',
          solution: 'Designed and built a fully anonymous posting wall using MERN stack where users can publish wishes securely. Handled state management carefully to keep credentials isolated and protect data anonymity via secure backend RESTful APIs.',
          architecture: 'Client-side SPA (React) ──[HTTPS]──> Express API Gateway ──> MongoDB Ledger'
        };
      case 'team-portfolio':
        return {
          problem: 'Student teams often ship strong projects but lack a single public site that introduces the group, work, and how to reach them.',
          solution: 'Built DevForge, a responsive team portfolio with member profiles, project filters, theme switching, and a contact flow so collaborators can find the crew quickly.',
          architecture: 'Static Pages (HTML/CSS/JS) ──> Theme Toggle + Section Routing ──> Vercel CDN'
        };
      case 'hand-gesture-recognition':
        return {
          problem: 'Traditional human-computer interfaces rely heavily on physical peripherals. Building low-latency camera-based interfaces requires fast frame manipulation and precise point coordinate extraction.',
          solution: 'Configured a python-based media processor utilizing OpenCV to capture camera matrices and MediaPipe to map 21 specific landmark hand nodes. Created coordinate threshold ranges to trigger events in real time.',
          architecture: 'Camera Feed Input ──> OpenCV Frame Resize ──> MediaPipe Landmark Matrix (21 Points) ──> Command Map'
        };
      case 'ai-assistant':
        return {
          problem: 'Navigating desktop tasks, searching search engines, and opening local utilities repeatedly causes minor workflow inefficiencies that could be automated locally via hands-free triggers.',
          solution: 'Developed a voice command listener that processes text-based prompt triggers using PyAudio and Google Speech Recognition APIs. Linked recognition arrays directly to local system execution calls in C++ and Java.',
          architecture: 'Voice/Text Input ──> PyAudio Analyzer ──> Speech Recognizer ──> Local OS Subprocess Runner'
        };
      default:
        return {
          problem: 'Translating concepts into structured applications requires modular frontend layouts and securely integrated server modules.',
          solution: 'Designed and implemented full-system elements matching exact requirements with optimal efficiency.',
          architecture: 'Client View ──> Router ──> API Controller ──> DB Service'
        };
    }
  };

  const { problem, solution, architecture } = getProblemAndSolution();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[90dvh] bg-surface-primary border border-white/10 rounded-xl overflow-y-auto shadow-2xl z-10 p-4 sm:p-6 flex flex-col gap-6 pointer-events-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/5 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title / Category */}
        <div className="text-left space-y-1 pr-8">
          <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest font-semibold">
            {project.category}
          </span>
          <h2 className="text-xl md:text-2xl font-bold font-display text-text-primary">
            {project.title}
          </h2>
          <div className="h-[1px] w-full bg-white/5 mt-4" />
        </div>

        {/* Details Grid */}
        <div className="space-y-6 text-left">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase text-accent-violet tracking-wider">
              Project Summary
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed font-sans font-light">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg bg-surface-secondary border border-white/5 space-y-1.5">
              <span className="text-[10px] font-mono text-red-400 font-semibold uppercase tracking-wider">
                The Problem
              </span>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                {problem}
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-surface-secondary border border-white/5 space-y-1.5">
              <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                The Solution
              </span>
              <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                {solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase text-accent-violet tracking-wider">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-[11px] text-text-secondary font-light"
                >
                  <span className="text-accent-cyan font-mono mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture Mockup */}
          <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary/70">
              <Terminal className="w-3.5 h-3.5" />
              <span>Logical System Pipeline</span>
            </div>
            <div className="text-[9px] font-mono text-accent-cyan p-2 bg-black/60 rounded border border-white/5 overflow-x-auto whitespace-pre-wrap sm:whitespace-nowrap break-words">
              {architecture}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono font-semibold uppercase text-accent-violet tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Stack / Technologies</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Connections */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/5">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-[10px] font-mono text-text-secondary/80">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors min-h-10"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span className="break-all">{displayHost(project.githubUrl)}/{project.githubUrl.split('/').pop()}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors min-h-10"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                <span className="break-all">{displayHost(project.liveUrl)}</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
