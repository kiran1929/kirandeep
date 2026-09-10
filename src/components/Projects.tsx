import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { useInView } from '../hooks/useInView';
import { SectionTitle } from './SectionTitle';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative max-w-7xl mx-auto">
      <SectionTitle
        index="03 / Work"
        title="Things I've Built"
        subtitle="Projects where I turned ideas into working software, focusing on full-stack architecture, system flows, and interactive logic."
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
            }}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

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
