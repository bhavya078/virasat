import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { heritageAudio } from '../../utils/audioService';

export const FloatingScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrollTop > 380);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Circumference for r=18 is 2 * PI * 18 ≈ 113.1
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.7, x: -30 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(196,154,58,0.6)' }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#083B2D] border border-[#C49A3A]/40 text-[#C49A3A] flex items-center justify-center shadow-luxury cursor-pointer backdrop-blur-md"
        >
          {/* Radial Scroll Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="#04231B"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r={radius}
              fill="none"
              stroke="#C49A3A"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150"
            />
          </svg>

          <ArrowUp className="w-4 h-4 text-[#DFB757] relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
