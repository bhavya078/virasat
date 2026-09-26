import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUOTES = [
  "Discovering India's timeless heritage...",
  "Loading 50 monuments, 50 festivals and 50 hidden gems...",
  "Preparing your AI journey through 5,000 years of civilization...",
  "Tuning the sitars and lighting temple lamps...",
  "Welcome to VIRASAT — India's Most Premium AI Heritage Platform."
];

interface LoaderProps {
  onComplete: () => void;
}

export const LoaderExperience: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Pick initial random quote
    setQuoteIndex(Math.floor(Math.random() * (QUOTES.length - 1)));

    // Progress timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 400);
          return 100;
        }
        const increment = prev < 60 ? 4 : prev < 90 ? 2 : 1;
        return Math.min(100, prev + increment);
      });
    }, 45);

    // Rotate quotes smoothly
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearInterval(quoteInterval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#083B2D] text-[#FAF8F4] overflow-hidden selection:bg-[#C49A3A]"
      >
        {/* Ambient subtle background dust particles & gold aura */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C49A3A] rounded-full filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E67E22] rounded-full filter blur-[140px] animate-pulse-slow" />
        </div>

        {/* Animated India Map Outline Drawing */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 300 340"
            className="w-full h-full drop-shadow-[0_0_25px_rgba(196,154,58,0.5)]"
          >
            {/* Outline of Indian Political Sovereign Contour */}
            <motion.path
              d="M 115 15 
                 L 140 15 L 160 25 L 175 50 L 155 70 L 165 85 L 190 105 L 225 100 
                 L 260 80 L 290 95 L 285 140 L 265 175 L 250 165 L 230 140 L 220 170 
                 L 210 190 L 200 170 L 205 200 L 180 225 L 165 295 L 150 330 L 125 335 
                 L 110 295 L 100 250 L 80 230 L 50 205 L 30 180 L 45 170 L 60 140 
                 L 70 110 L 85 90 L 95 55 Z"
              fill="rgba(196, 154, 58, 0.12)"
              stroke="#C49A3A"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />

            {/* Glowing Golden Ashoka Emblem / Lotus Core */}
            <motion.circle
              cx="140"
              cy="165"
              r="22"
              fill="rgba(8, 59, 45, 0.8)"
              stroke="#C49A3A"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            />
            {/* 24 Spoke rays */}
            {[...Array(12)].map((_, i) => (
              <motion.line
                key={i}
                x1="140"
                y1="165"
                x2={140 + 18 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={165 + 18 * Math.sin((i * 30 * Math.PI) / 180)}
                stroke="#C49A3A"
                strokeWidth="1.2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.2 + i * 0.04 }}
              />
            ))}
          </svg>

          {/* Logo emerges in center */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute flex flex-col items-center"
          >
            <span className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-[#C49A3A] font-bold">
              VIRASAT
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-[#FAF8F4]/80 uppercase mt-1">
              BHARAT HERITAGE OS
            </span>
          </motion.div>
        </div>

        {/* Changing Quotes */}
        <div className="h-10 px-6 text-center max-w-md">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-subheading text-lg md:text-xl text-[#FAF8F4]/90 italic"
            >
              "{QUOTES[quoteIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Golden Progress Bar */}
        <div className="w-64 md:w-80 mt-6">
          <div className="h-1.5 w-full bg-[#052A20] rounded-full overflow-hidden border border-[#C49A3A]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#AA7F27] via-[#C49A3A] to-[#DFB757] rounded-full shadow-[0_0_12px_#C49A3A]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between items-center text-xs text-[#C49A3A] font-mono mt-2 px-1">
            <span>BHARAT HERITAGE OS</span>
            <span>{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
