import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Terminal, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const inputBufferRef = useRef('');

  // Scroll Spy to highlight active navbar links
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'experience',
      'achievements',
      'education',
      'certifications',
      'contact',
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // "kg" keyboard easter egg listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      // Ignore keys during Cmd+K etc.
      if (e.ctrlKey || e.metaKey) return;
      if (key.length > 1) return; // Ignore modifier names

      const newBuffer = (inputBufferRef.current + key).slice(-2); // keep last 2 chars
      inputBufferRef.current = newBuffer;
      if (newBuffer === 'kg') {
        triggerEasterEgg();
        inputBufferRef.current = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const triggerEasterEgg = () => {
    setIsEasterEggActive(true);
    // Play a beep or show overlay, then fade out
    setTimeout(() => {
      setIsEasterEggActive(false);
    }, 4000);
  };

  return (
    <div className="relative text-text-primary bg-bg-dark min-h-screen selection:bg-accent-violet/30 selection:text-white antialiased">
      {/* Premium Cursor (Desktop only) */}
      <CustomCursor />

      {/* Global Command Palette */}
      <CommandPalette />

      {/* Futuristic Background System */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Section layout wrapper */}
      <main className="relative z-10 w-full flex flex-col items-center">
        {/* Hero Section */}
        <Hero />

        {/* Separator lines */}
        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* About Section */}
        <About />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Tech Stack Section */}
        <Skills />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Projects Section */}
        <Projects />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Experience Section */}
        <Experience />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Achievements Section */}
        <Achievements />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Education Section */}
        <Education />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Certifications Section */}
        <Certifications />

        <div className="w-full max-w-7xl px-4 sm:px-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Keystroke Easter Egg Overlay */}
      <AnimatePresence>
        {isEasterEggActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center font-mono select-none"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center p-5 sm:p-8 max-w-md mx-4 border border-accent-cyan/35 rounded-xl bg-surface-primary shadow-2xl relative overflow-hidden"
            >
              {/* Matrix-like falling scanlines overlay */}
              <div className="absolute inset-0 tech-grid opacity-20" />
              <div className="absolute inset-0 scanlines opacity-50" />

              <div className="flex items-center justify-center gap-2 text-accent-cyan mb-4">
                <Terminal className="w-6 h-6 animate-pulse" />
                <span className="font-bold uppercase tracking-wider text-sm">KG SYSTEM DIAGNOSTICS</span>
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-2">
                "KG" Protocol Engaged.
              </h3>
              
              <div className="text-[11px] text-text-secondary/80 space-y-2 mt-4 text-left leading-relaxed">
                <div>&gt; initializing system scan...</div>
                <div className="text-accent-cyan font-bold">&gt; B.Tech CGPA verified (8.8)</div>
                <div className="text-accent-cyan font-bold">&gt; Diploma CGPA verified (8.8)</div>
                <div className="text-accent-violet font-bold">&gt; MERN wall & wallet structures online.</div>
                <div className="text-accent-cyan font-bold">&gt; Hand landmark coordinates mapped.</div>
                <div className="text-emerald-400 font-bold">&gt; while(true) {'{'} learn(); build(); solve(); {'}'}</div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-1.5 text-[10px] text-text-secondary/40 font-semibold animate-pulse">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RESUMING STANDARD PROTOCOL IN 3S...</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
