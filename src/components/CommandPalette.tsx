import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, CornerDownLeft, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

interface CommandItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'Navigation' | 'Social' | 'Actions';
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Define commands
  const commands: CommandItem[] = [
    {
      id: 'home',
      name: 'Go to Home',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('home'),
    },
    {
      id: 'about',
      name: 'Go to About',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('about'),
    },
    {
      id: 'skills',
      name: 'Go to Tech Stack',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('skills'),
    },
    {
      id: 'projects',
      name: 'Go to Projects',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('projects'),
    },
    {
      id: 'experience',
      name: 'Go to Experience & Training',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('experience'),
    },
    {
      id: 'achievements',
      name: 'Go to Achievements',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('achievements'),
    },
    {
      id: 'contact',
      name: 'Go to Contact',
      icon: Hash,
      category: 'Navigation',
      action: () => scrollToSection('contact'),
    },
    {
      id: 'github',
      name: 'Open GitHub Profile',
      icon: Github,
      category: 'Social',
      action: () => window.open('https://github.com/kiran1929', '_blank'),
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn Profile',
      icon: Linkedin,
      category: 'Social',
      action: () => window.open('https://linkedin.com/in/kirandeep-gudepu', '_blank'),
    },
    {
      id: 'email',
      name: 'Send Email',
      icon: Mail,
      category: 'Actions',
      action: () => window.location.href = 'mailto:gudepukirandeep@gmail.com',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSearch('');
      setActiveIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Filter commands
  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation within list
  useEffect(() => {
    const handleListKeys = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[activeIndex]) {
          filteredCommands[activeIndex].action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleListKeys);
    return () => window.removeEventListener('keydown', handleListKeys);
  }, [isOpen, activeIndex, filteredCommands]);

  // Auto-scroll list to active item
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        const listHeight = listRef.current.clientHeight;
        const elemTop = activeElement.offsetTop;
        const elemHeight = activeElement.clientHeight;

        if (elemTop + elemHeight > listRef.current.scrollTop + listHeight) {
          listRef.current.scrollTop = elemTop + elemHeight - listHeight;
        } else if (elemTop < listRef.current.scrollTop) {
          listRef.current.scrollTop = elemTop;
        }
      }
    }
  }, [activeIndex]);

  return (
    <>
      {/* Floating KBD Indicator for Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-text-secondary glass-panel rounded-lg hover:border-accent-violet/50 transition-colors shadow-lg shadow-black/20 pointer-events-auto"
        >
          <span>Cmd</span>
          <span>+</span>
          <span>K</span>
          <span className="text-[10px] text-text-secondary/60">Palette</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-xl glass-panel rounded-xl overflow-hidden shadow-2xl border-white/10 z-10 flex flex-col max-h-[50vh]"
            >
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border-primary">
                <Search className="w-5 h-5 text-text-secondary" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="flex-1 bg-transparent border-0 text-text-primary placeholder-text-secondary/50 text-sm focus:ring-0 focus:outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/5 rounded text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div
                ref={listRef}
                className="overflow-y-auto p-2 space-y-1 flex-1"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => {
                    const Icon = cmd.icon;
                    const isActive = idx === activeIndex;

                    return (
                      <button
                        key={cmd.id}
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors font-sans text-sm ${
                          isActive
                            ? 'bg-accent-violet/10 text-text-primary border border-accent-violet/30'
                            : 'text-text-secondary border border-transparent hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-accent-cyan' : 'text-text-secondary'}`} />
                          <span>{cmd.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-text-secondary/50 uppercase font-mono tracking-wider">
                            {cmd.category}
                          </span>
                          {isActive && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-accent-cyan opacity-80" />
                          )}
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-sm text-text-secondary/60 font-mono">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              {/* Action Bar Footer */}
              <div className="px-4 py-2 bg-black/40 border-t border-border-primary flex items-center justify-between text-[11px] text-text-secondary/60 font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 bg-white/5 rounded border border-white/10">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 bg-white/5 rounded border border-white/10">Enter</kbd> Select
                  </span>
                </div>
                <span>ESC to Close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
