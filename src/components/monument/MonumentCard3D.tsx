import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Volume2, MapPin, Award, Clock, ArrowRight, Star } from 'lucide-react';
import { HeritageSite } from '../../types';
import { heritageAudio } from '../../utils/audioService';
import { useLanguage } from '../../context/LanguageContext';

interface CardProps {
  site: HeritageSite;
}

export const MonumentCard3D: React.FC<CardProps> = ({ site }) => {
  const { t, tState, tCategory } = useLanguage();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10;
    const rY = ((x - centerX) / centerX) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    heritageAudio.playTempleBell();
    heritageAudio.speakGuide(site.audioGuideText);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 group w-full"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury group-hover:shadow-luxury-hover transition-shadow duration-500 flex flex-col h-full transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Light Reflection Sheen */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-transparent via-white/15 to-transparent transition-opacity duration-300"
            style={{
              transform: `translate(${rotateY * 3}px, ${rotateX * 3}px)`
            }}
          />
        )}

        {/* Visual Hero Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={site.heroImage}
            alt={site.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            {site.unescoYear ? (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#083B2D]/90 backdrop-blur-md border border-[#C49A3A] text-[#C49A3A] text-[10px] font-mono font-bold uppercase tracking-wider shadow-gold-glow">
                <Award className="w-3 h-3 text-[#C49A3A]" />
                <span>UNESCO {site.unescoYear}</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider">
                <span>{tCategory(site.category).toUpperCase()}</span>
              </span>
            )}

            <button
              onClick={handlePlayAudio}
              className="p-2 rounded-full bg-white/20 hover:bg-[#C49A3A] backdrop-blur-md border border-white/30 text-white hover:text-[#083B2D] transition-colors shadow-md"
              title={t('audioGuideListen', 'Listen to Audio Guide')}
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-serif italic text-[#DFB757] block">
              {site.hindiName}
            </span>
            <h3 className="font-serif text-xl font-bold leading-snug drop-shadow-md text-[#FAF8F4]">
              {site.name}
            </h3>
            <div className="flex items-center space-x-1 text-xs text-white/80 mt-0.5">
              <MapPin className="w-3 h-3 text-[#C49A3A]" />
              <span>{tState(site.state)}</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
          <p className="text-xs text-[#111827]/75 line-clamp-3 leading-relaxed font-light">
            {site.description}
          </p>

          {/* Quick Specifications */}
          <div className="pt-2 border-t border-gray-100 space-y-1.5 text-[11px] text-[#111827]/80 font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">{t('cardDynasty', 'Dynasty:')}</span>
              <span className="font-semibold text-[#083B2D] truncate max-w-[65%]">{site.dynasty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">{t('cardTimings', 'Timings:')}</span>
              <span className="text-gray-700 truncate max-w-[65%]">{site.timings}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">{t('cardBestSeason', 'Best Season:')}</span>
              <span className="text-[#C49A3A] font-medium">{site.bestMonths}</span>
            </div>
          </div>

          {/* Action Link Footer */}
          <Link
            to={`/heritage/${site.slug}`}
            className="w-full py-2.5 rounded-xl bg-[#FAF8F4] group-hover:bg-[#083B2D] border border-[#C49A3A]/30 text-[#083B2D] group-hover:text-[#C49A3A] text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-center space-x-1.5"
          >
            <span>{t('cardExploreBtn', 'Explore Monument Details')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
