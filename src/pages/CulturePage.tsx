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
import { useLanguage } from '../context/LanguageContext';

export const CulturePage: React.FC = () => {
  const { t, tState } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState<CulturalExperience | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);

  const categories = [
    { id: 'all', label: t('cultureTagAll', 'All 50 Traditions') },
    { id: 'dance', label: t('cultureTagDance', 'Classical Dance') },
    { id: 'craft', label: t('cultureTagCraft', 'Ancient Crafts') },
    { id: 'weaving', label: t('cultureTagTextile', 'Heritage Textiles') },
    { id: 'martial', label: t('cultureTagMartial', 'Martial Arts') },
    { id: 'sacred', label: t('catSpiritual', 'Vedic & Sacred Living') }
  ];

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

  const counterText = t('showingTraditions', `Showing ${filteredExperiences.length} of ${CULTURAL_EXPERIENCES.length} Living Traditions`)
    .replace('{count}', String(filteredExperiences.length))
    .replace('{total}', String(CULTURAL_EXPERIENCES.length));

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>{t('cultureBadge', "Soul of Bharat's Civilization")}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#083B2D] tracking-tight">
            {t('cultureTitle', '50 Master Cultural Traditions')}
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-gray-700 italic">
            {t('cultureSubtitle', 'Immerse into the living soul of India: ancient classical dance mudras, Vedic metallurgy, rare GI-tagged handlooms, and timeless performing arts.')}
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
                placeholder={t('cultureSearchPlaceholder', 'Search dance, craft, instruments, exponents, state...')}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
              />
            </div>

            {/* Counter */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>{counterText}</span>
              <span>•</span>
              <span className="text-[#083B2D] font-semibold">{t('giTagCertified', 'GI Certified Heritage')}</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
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
              {/* Image Frame */}
              <Link to={`/culture/${exp.slug}`} className="relative h-60 overflow-hidden bg-gray-900 block">
                <img
                  src={exp.heroImage}
                  alt={exp.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* State Tag */}
                <div className="absolute top-4 left-4 bg-[#083B2D]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C49A3A]/40 flex items-center space-x-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#C49A3A]" />
                  <span className="text-[11px] text-[#C49A3A] font-mono font-bold">
                    {tState(exp.state)}
                  </span>
                </div>

                {/* GI Tag / Certified Pill */}
                {exp.giTagCertified && (
                  <div className="absolute top-4 right-4 bg-[#C49A3A] text-[#083B2D] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>GI Certified</span>
                  </div>
                )}

                {/* Title & Region */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#DFB757] font-serif italic block mb-0.5">
                    {exp.historicalRoots}
                  </span>
                  <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#DFB757] transition-colors">
                    {exp.name}
                  </h3>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Key materials / instruments */}
                <div className="bg-[#FAF8F4] p-3 rounded-2xl border border-gray-100 text-xs space-y-1">
                  <span className="font-serif text-[11px] font-bold text-[#083B2D] block uppercase tracking-wider">
                    {t('techniqueLabel', 'Key Medium / Instruments:')}
                  </span>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {exp.keyInstrumentsOrMaterials.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded-full text-gray-700"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenExperience(exp)}
                    className="text-xs font-bold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1 transition-colors"
                  >
                    <span>{t('exploreCultureDetails', 'Explore Masterclass')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleToggleNarration(exp.description + ' Technique: ' + exp.techniqueBreakdown)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#083B2D] transition-colors"
                    title={t('audioGuideListen', 'Listen to Audio Guide')}
                  >
                    <Volume2 className="w-4 h-4 text-[#C49A3A]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Culture Modal */}
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

              {/* Modal Banner */}
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
                      {tState(selectedExperience.state)}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      {selectedExperience.historicalRoots}
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
                      {t('audioGuideListen', 'Audio Narration')}
                    </span>
                    <p className="text-xs italic text-white/90">
                      {selectedExperience.name}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleNarration(selectedExperience.description + ' Technique: ' + selectedExperience.techniqueBreakdown)}
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

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#083B2D]">
                    {t('cultureTitle', 'Civilizational Heritage')}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Technique Breakdown */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#C49A3A]/25 space-y-1.5">
                  <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-1.5">
                    <Scissors className="w-4 h-4 text-[#C49A3A]" />
                    <span>{t('techniqueLabel', 'Anatomy of Technique')}</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-light">
                    {selectedExperience.techniqueBreakdown}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/culture/${selectedExperience.slug}`}
                    className="flex-1 py-3 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#0D523F] transition-colors"
                  >
                    <span>{t('exploreCultureDetails', 'View Full Masterclass Dossier')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/ai-planner"
                    onClick={() => {
                      heritageAudio.stopSpeaking();
                      setIsNarrating(false);
                      setSelectedExperience(null);
                    }}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110 transition-all text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#083B2D]" />
                    <span>{t('btnPlanAI', 'Plan Workshop Trip with Rishi AI')}</span>
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
