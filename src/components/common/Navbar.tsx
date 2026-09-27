import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Volume2, VolumeX, Menu, X, Sparkles, Globe, Compass } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGES } from '../../data/languages';
import { heritageAudio } from '../../utils/audioService';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const state = heritageAudio.toggleAmbience();
    setIsAudioPlaying(state);
  };

  const navLinks = [
    { label: t('navHome', 'Home'), path: '/' },
    { label: t('navExplore', 'Explore 50'), path: '/explore' },
    { label: t('navAIPlanner', 'AI Planner'), path: '/ai-planner' },
    { label: t('navHiddenGems', 'Hidden Gems'), path: '/hidden-gems' },
    { label: t('navFestivals', 'Festivals'), path: '/festivals' },
    { label: t('navCulture', 'Culture'), path: '/culture' },
    { label: t('navStates', '28 States & 8 UTs'), path: '/states' },
    { label: t('navWeather', 'Weather'), path: '/weather' },
    { label: t('navBudget', 'Budget'), path: '/budget' },
    { label: t('navAdmin', 'Admin'), path: '/admin' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#083B2D]/90 backdrop-blur-xl border-b border-[#C49A3A]/25 shadow-luxury text-[#FAF8F4]'
          : 'py-6 bg-gradient-to-b from-[#083B2D]/80 via-[#083B2D]/40 to-transparent text-[#FAF8F4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-[#C49A3A] bg-[#083B2D]/80 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-5 h-5 text-[#C49A3A] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#C49A3A] group-hover:text-[#DFB757] transition-colors">
              VIRASAT
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#FAF8F4]/70 uppercase -mt-1">
              Bharat Heritage AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-[#C49A3A] font-semibold'
                    : 'text-[#FAF8F4]/85 hover:text-[#C49A3A] hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#C49A3A] rounded-full shadow-[0_0_8px_#C49A3A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Spotlight Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#C49A3A]/20 border border-[#C49A3A]/30 text-xs text-[#FAF8F4] transition-all duration-300 shadow-sm"
            title="Search 50 Sites, Gems, Festivals (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span className="hidden sm:inline font-sans text-xs">{t('searchPlaceholder', 'Search...').slice(0, 8)}</span>
            <kbd className="hidden md:inline text-[10px] bg-black/30 border border-[#C49A3A]/30 px-1.5 py-0.5 rounded text-[#C49A3A]">
              Ctrl+K
            </kbd>
          </button>

          {/* Ambient Temple Audio Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isAudioPlaying
                ? 'bg-[#C49A3A]/20 border-[#C49A3A] text-[#C49A3A] shadow-gold-glow'
                : 'bg-white/10 border-white/20 text-[#FAF8F4]/70 hover:text-[#C49A3A] hover:border-[#C49A3A]/50'
            }`}
            title={isAudioPlaying ? 'Mute Sacred Temple Ambience' : 'Play Sacred Temple Ambience'}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* 10 Languages Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#C49A3A]/30 text-xs transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span className="font-semibold text-xs text-[#C49A3A]">
                {LANGUAGES[currentLanguage]?.nativeName || 'EN'}
              </span>
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#083B2D] border border-[#C49A3A]/40 shadow-luxury py-2 z-50 overflow-hidden"
                >
                  <div className="px-3 py-1 text-[10px] font-mono text-[#C49A3A] border-b border-white/10 tracking-widest uppercase">
                    Select 10 Languages
                  </div>
                  {Object.values(LANGUAGES).map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-[#C49A3A]/25 text-[#C49A3A] font-bold'
                          : 'text-[#FAF8F4]/80 hover:bg-white/10 hover:text-[#FAF8F4]'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="text-[11px] text-[#C49A3A] font-serif">{lang.nativeName}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* AI Planner CTA */}
          <Link
            to="/ai-planner"
            className="hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#C49A3A] to-[#DFB757] hover:from-[#DFB757] hover:to-[#AA7F27] text-[#083B2D] text-xs font-semibold shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#083B2D]" />
            <span>AI Planner</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-white/10 border border-white/20 text-[#FAF8F4]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#083B2D]/98 border-b border-[#C49A3A]/30 backdrop-blur-2xl px-6 py-6"
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-xl text-xs font-medium border ${
                    location.pathname === link.path
                      ? 'bg-[#C49A3A]/20 border-[#C49A3A] text-[#C49A3A]'
                      : 'border-white/10 text-[#FAF8F4]/80 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/ai-planner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-semibold text-sm shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4 text-[#083B2D]" />
              <span>Launch AI Heritage Trip Planner</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
