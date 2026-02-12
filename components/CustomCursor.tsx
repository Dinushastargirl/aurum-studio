
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush } from 'lucide-react';
import { SplashEffect } from '../types';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [splashes, setSplashes] = useState<SplashEffect[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const newSplash = { id: Date.now(), x: e.clientX, y: e.clientY };
      setSplashes(prev => [...prev, newSplash]);
      setTimeout(() => {
        setSplashes(prev => prev.filter(s => s.id !== newSplash.id));
      }, 800);
    };

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('mousedown', handleMouseDown);
    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <Paintbrush className="text-[#D4AF37]" size={28} />
      </motion.div>

      <AnimatePresence>
        {splashes.map(splash => (
          <motion.div
            key={splash.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] w-12 h-12 rounded-full blur-sm"
            style={{
              x: splash.x - 24,
              y: splash.y - 24,
              backgroundColor: '#1E7A8A',
              boxShadow: '0 0 15px #1E7A8A'
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};
