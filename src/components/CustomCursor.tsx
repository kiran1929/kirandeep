import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of the mouse
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for interpolation (large ring lags slightly behind for a premium feel)
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 250, mass: 0.5 });
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 450 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 450 });

  useEffect(() => {
    // Detect mobile/touch devices
    const checkDevice = () => {
      const mobile = 
        window.matchMedia('(max-width: 768px)').matches || 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Track interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('interactive-hover');

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY, visible]);

  if (isMobile || !visible) return null;

  return (
    <>
      {/* Outer transparent ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-violet pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
          scale: hovered ? 1.5 : 1,
          backgroundColor: hovered ? 'rgba(139, 92, 246, 0.05)' : 'rgba(139, 92, 246, 0)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner solid glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#22d3ee]"
        style={{
          x: dotX,
          y: dotY,
          scale: hovered ? 0.5 : 1,
        }}
      />
    </>
  );
};
