import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import { CulturalExperience } from '../types';
import {
  Sparkles,
  Music,
  Palette,
  Scissors,
  Flame,
  Award,
  Search,
  Volume2,
  VolumeX,
  X,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { heritageAudio } from '../utils/audioService';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 'all', label: 'All 50 Traditions' },
  { id: 'dance', label: 'Dance & Sacred Theatre' },
  { id: 'craft', label: 'Crafts & Royal Arts' },
  { id: 'weaving', label: 'Handloom & Weaving' },
  { id: 'martial', label: 'Martial Arts & Rituals' },
  { id: 'sacred', label: 'Vedic & Sacred Living' }
];

export const CulturePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState<CulturalExperience | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);

  const filteredExperiences = useMemo(() => {
    return CULTURAL_EXPERIENCES.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.state.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keyInstrumentsOrMaterials.some((m) => m.toLowerCase().includes(q)) ||
        (item.masterArtisansOrExponents &&
          item.masterArtisansOrExponents.some((e) => e.toLowerCase().includes(q)));

      if (!matchesSearch) return false;

      if (activeCategory === 'all') return true;
      if (activeCategory === 'dance') {
        return (
          item.category === 'dance' ||
          item.name.toLowerCase().includes('dance') ||
          item.name.toLowerCase().includes('theatre') ||
          item.name.toLowerCase().includes('kathak') ||
          item.name.toLowerCase().includes('garba')
        );
      }
      if (activeCategory === 'craft') {
        return (
          item.category === 'craft' ||
          item.name.toLowerCase().includes('art') ||
          item.name.toLowerCase().includes('pottery') ||
          item.name.toLowerCase().includes('painting') ||
          item.name.toLowerCase().includes('casting')
        );
      }
      if (activeCategory === 'weaving') {
        return (
          item.category === 'textile' ||
          (item.category as string) === 'weaving' ||
          item.name.toLowerCase().includes('silk') ||
          item.name.toLowerCase().includes('pashmina') ||
          item.name.toLowerCase().includes('weaving') ||
          item.name.toLowerCase().includes('ikat')
        );
      }
      if (activeCategory === 'martial') {
        return (
          item.name.toLowerCase().includes('martial') ||
          item.name.toLowerCase().includes('kalaripayattu') ||
          item.name.toLowerCase().includes('silambam') ||
          item.name.toLowerCase().includes('thang-ta') ||
          item.name.toLowerCase().includes('theyyam')
        );
      }
      if (activeCategory === 'sacred') {
        return (
          item.name.toLowerCase().includes('langar') ||
          item.name.toLowerCase().includes('vedic') ||
          item.name.toLowerCase().includes('kumbh') ||
          item.name.toLowerCase().includes('kolam')
        );
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenExperience = (exp: CulturalExperience) => {
    setSelectedExperience(exp);
    heritageAudio.playTempleBell();
  };

  const handleToggleNarration = (text: string) => {
    if (isNarrating) {
      heritageAudio.stopSpeaking();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      heritageAudio.speakGuide(text, () => setIsNarrating(false));
    }
  };

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Living Heritage & Intangible Masterpieces</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#083B2D] tracking-tight">
            50 Living Cultural Traditions of India
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-gray-700 italic">
            From the 2,000-year-old mudras of Bharatanatyam to GI-tagged Pashmina loomcraft and UNESCO Garba — explore the soul of Indian civilization.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dance, craft, instruments, exponents, state..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
              />
            </div>

            {/* Counter */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>Showing <strong className="text-[#083B2D]">{filteredExperiences.length}</strong> of 50 Traditions</span>
              <span>•</span>
              <span className="text-[#083B2D] font-semibold">UNESCO & GI Recognized</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 border-gray-200 hover:border-[#C49A3A]/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 50 Traditions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-60 overflow-hidden bg-gray-900">
                <img
                  src={exp.heroImage}
                  alt={exp.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-[#083B2D]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C49A3A]/40 text-[10px] text-[#C49A3A] font-mono uppercase tracking-wider font-bold">
                  {exp.state}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#DFB757] font-serif italic block mb-0.5">
                    {exp.originCentury}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F4] leading-snug drop-shadow-md">
                    {exp.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Instruments or Materials */}
                <div className="space-y-1.5 bg-[#FAF8F4] p-3 rounded-2xl border border-gray-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">
                    Key Medium & Instruments:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.keyInstrumentsOrMaterials.map((inst, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white text-gray-700 text-[10px] font-medium border border-gray-200"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights preview */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#083B2D] font-bold block">
                    Authentic Lineage:
                  </span>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between border-t border-gray-100">
                  <button
                    onClick={() => handleOpenExperience(exp)}
                    className="text-xs font-bold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Inspect Masterclass</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleToggleNarration(exp.description)}
                    className="p-2 rounded-full hover:bg-gray-100 text-[#083B2D] hover:text-[#C49A3A] transition-colors"
                    title="Listen to Tradition Summary"
                  >
                    <Volume2 className="w-4 h-4 text-[#C49A3A]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Experience Deep-Dive Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => {
              heritageAudio.stopSpeaking();
              setIsNarrating(false);
              setSelectedExperience(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden border border-[#C49A3A]/40 shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  heritageAudio.stopSpeaking();
                  setIsNarrating(false);
                  setSelectedExperience(null);
                }}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Hero Banner */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-900">
                <img
                  src={selectedExperience.heroImage}
                  alt={selectedExperience.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C49A3A] text-[#083B2D] text-[10px] font-bold uppercase tracking-wider">
                      {selectedExperience.state}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      Origins: {selectedExperience.originCentury}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F4]">
                    {selectedExperience.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Audio Narrator Bar */}
                <div className="p-4 rounded-2xl bg-[#083B2D] text-[#FAF8F4] flex items-center justify-between shadow-gold-glow">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A]">
                      Tradition Master Audio
                    </span>
                    <p className="text-xs italic text-white/90">
                      Learn the philosophy and rhythmic grammar of {selectedExperience.name.split(':')[0]}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleNarration(selectedExperience.description + '. Key instruments and materials: ' + selectedExperience.keyInstrumentsOrMaterials.join(', '))}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${
                      isNarrating
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-[#C49A3A] text-[#083B2D] hover:bg-[#DFB757]'
                    }`}
                  >
                    {isNarrating ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isNarrating ? 'Stop' : 'Listen'}</span>
                  </button>
                </div>

                {/* Narrative Lore */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#083B2D]">
                    Living Heritage Philosophy & Technique
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Exponents & Masters */}
                {selectedExperience.masterArtisansOrExponents && (
                  <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#C49A3A]/25 space-y-2">
                    <h4 className="font-serif text-xs font-bold text-[#083B2D] uppercase tracking-wider">
                      Renowned Masters & Living Exponents
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.masterArtisansOrExponents.map((master, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white text-[#083B2D] text-xs font-medium border border-[#C49A3A]/30 shadow-xs"
                        >
                          {master}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-serif text-sm font-bold text-[#083B2D]">
                    Distinctive Markers & Codified Knowledge
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Materials & Regional Hub */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-1">
                    <span className="text-gray-500 font-mono text-[10px] uppercase">Regional Stronghold</span>
                    <p className="text-gray-900 font-medium">{selectedExperience.region}, {selectedExperience.state}</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-gray-200 space-y-1">
                    <span className="text-gray-500 font-mono text-[10px] uppercase">Origin Antiquity</span>
                    <p className="text-gray-900 font-medium">{selectedExperience.originCentury}</p>
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-gray-100 flex gap-3">
                  <Link
                    to="/ai-planner"
                    onClick={() => {
                      heritageAudio.stopSpeaking();
                      setIsNarrating(false);
                      setSelectedExperience(null);
                    }}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110 transition-all text-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#083B2D]" />
                    <span>Include in Custom AI Cultural Expedition</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
