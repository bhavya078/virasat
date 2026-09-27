import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INDIA_OUTER_BOUNDARY } from '../../data/indiaMapPaths';

const QUOTES = [
  "Calibrating official Survey of India political boundaries...",
  "Loading 50 UNESCO monuments, 50 sacred festivals, and 50 hidden gems...",
  "Connecting 28 States and 8 Union Territories across Bharat...",
  "Preparing AI cultural recommendation engine...",
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
          }, 450);
          return 100;
        }
        const increment = prev < 50 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(100, prev + increment);
      });
    }, 40);

    // Rotate quotes smoothly
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 2000);

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
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#083B2D] text-[#FAF8F4] overflow-hidden selection:bg-[#C49A3A]"
      >
        {/* Ambient subtle background gold aura */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C49A3A] rounded-full filter blur-[130px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E67E22] rounded-full filter blur-[150px] animate-pulse-slow" />
        </div>

        {/* Central Official India Map Loading Canvas */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 mb-6 flex items-center justify-center">
          {/* Rotating Celestial Golden Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-[#DFB757]/30 pointer-events-none"
          />

          <svg
            viewBox="0 0 768 768"
            className="w-full h-full select-none filter drop-shadow-[0_0_35px_rgba(196,154,58,0.45)]"
          >
            <defs>
              {/* Radial gradient mask for smooth map vignette blending */}
              {/* Laser Outline Golden Gradient */}
              <linearGradient id="laserGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E67E22" />
                <stop offset="50%" stopColor="#DFB757" />
                <stop offset="100%" stopColor="#FFF4B8" />
              </linearGradient>

              {/* Photonic Scanner Beam Gradient */}
              <linearGradient id="scannerBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DFB757" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFF2A7" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#DFB757" stopOpacity="0" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="loaderGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Traveling Laser Perimeter Trace Synced with Progress */}
            <motion.path
              d={INDIA_OUTER_BOUNDARY}
              fill="rgba(196, 154, 58, 0.08)"
              stroke="url(#laserGold)"
              strokeWidth="3.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#loaderGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: Math.max(0.05, progress / 100) }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />

            {/* Animated Photonic Radar Scanner Sweep */}
            <motion.line
              x1="64"
              x2="704"
              stroke="url(#scannerBeam)"
              strokeWidth="2.5"
              filter="url(#loaderGlow)"
              animate={{
                y1: [40, 720, 40],
                y2: [40, 720, 40]
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </svg>

          {/* Central Logo & Sovereign Heritage Title */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center px-4">
            {/* Ambient Gold Glow Aura */}
            <div className="absolute w-56 h-20 bg-gradient-to-r from-[#F59E0B]/30 via-[#FBBF24]/40 to-[#E67E22]/30 rounded-full filter blur-2xl pointer-events-none" />

            {/* Radiant Multi-Dimensional 3D Gold VIRASAT */}
            <h1
              className="relative font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFEEA] via-[#FBBF24] via-[#F59E0B] to-[#92400E]"
              style={{
                filter: 'drop-shadow(0 0 28px rgba(245, 158, 11, 0.7)) drop-shadow(0 4px 14px rgba(0, 0, 0, 0.95))'
              }}
            >
              VIRASAT
            </h1>

            {/* Refined Sovereign Tagline - Guaranteed Single Line */}
            <span className="relative whitespace-nowrap text-[9px] sm:text-[11px] md:text-xs tracking-[0.16em] sm:tracking-[0.26em] text-[#FDE68A] uppercase font-serif mt-2 font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Many Cultures. One India. One Legacy.
            </span>
          </div>
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
              className="font-subheading text-base md:text-lg text-[#FAF8F4]/90 italic"
            >
              "{QUOTES[quoteIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Golden Progress Bar */}
        <div className="w-64 md:w-80 mt-5">
          <div className="h-1.5 w-full bg-[#052A20] rounded-full overflow-hidden border border-[#C49A3A]/40">
            <motion.div
              className="h-full bg-gradient-to-r from-[#AA7F27] via-[#DFB757] to-[#FFF4B8] rounded-full shadow-[0_0_14px_#DFB757]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between items-center text-xs text-[#DFB757] font-mono mt-2 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] animate-pulse" />
              <span>INITIALIZING SYSTEM</span>
            </span>
            <span className="font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
