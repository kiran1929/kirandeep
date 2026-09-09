import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { useInView } from '../hooks/useInView';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-start text-left mb-4">
        <span className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
          03 / Work
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-text-primary">
          Things I've Built
        </h2>
        <div className="h-[2px] w-12 bg-gradient-to-r from-accent-cyan to-accent-violet mt-3" />
      </div>

      <div className="text-left mb-12">
        <p className="text-sm text-text-secondary font-light">
          Projects where I turned ideas into working software, focusing on full-stack architecture, system flows, and interactive logic.
        </p>
      </div>

      {/* Grid List */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {/* Expandable Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
