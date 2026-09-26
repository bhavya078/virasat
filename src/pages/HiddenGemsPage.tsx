import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { HiddenGem } from '../types';
import {
  Compass,
  MapPin,
  Calendar,
  Navigation,
  ExternalLink,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  Search,
  Filter,
  ShieldAlert,
  ArrowRight,
  Footprints
} from 'lucide-react';
import { heritageAudio } from '../utils/audioService';
import { Link } from 'react-router-dom';

const FILTER_TAGS = [
  { id: 'all', label: 'All 50 Gems' },
  { id: '90plus', label: '★ 90+ Serenity Score' },
  { id: 'Easy', label: 'Easy Access' },
  { id: 'Moderate', label: 'Moderate Trek' },
  { id: 'Challenging', label: 'High Adventure' },
  { id: 'Northeast', label: 'Seven Sisters' },
  { id: 'Himalayan', label: 'Himalayas' },
  { id: 'Coastal', label: 'Secret Coasts' }
];

export const HiddenGemsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGem, setSelectedGem] = useState<HiddenGem | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);

  const filteredGems = useMemo(() => {
    return HIDDEN_GEMS.filter((gem) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        gem.name.toLowerCase().includes(q) ||
        gem.state.toLowerCase().includes(q) ||
        gem.region.toLowerCase().includes(q) ||
        gem.tags.some((t) => t.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (activeFilter === 'all') return true;
      if (activeFilter === '90plus') return gem.uncrowdedScore >= 90;
      if (activeFilter === 'Easy') return gem.adventureLevel === 'Easy';
      if (activeFilter === 'Moderate') return gem.adventureLevel === 'Moderate';
      if (activeFilter === 'Challenging') return gem.adventureLevel === 'Challenging';
      if (activeFilter === 'Northeast') {
        const neStates = ['Assam', 'Meghalaya', 'Arunachal Pradesh', 'Nagaland', 'Manipur', 'Mizoram', 'Tripura', 'Sikkim'];
        return neStates.includes(gem.state);
      }
      if (activeFilter === 'Himalayan') {
        return ['Himachal Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'Ladakh', 'Sikkim'].includes(gem.state) ||
          gem.tags.some((t) => t.toLowerCase().includes('himalay') || t.toLowerCase().includes('trek'));
      }
      if (activeFilter === 'Coastal') {
        return gem.tags.some((t) => t.toLowerCase().includes('coast') || t.toLowerCase().includes('beach') || t.toLowerCase().includes('island') || t.toLowerCase().includes('cliff'));
      }
      return true;
    });
  }, [activeFilter, searchQuery]);

  const handleOpenGem = (gem: HiddenGem) => {
    setSelectedGem(gem);
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
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/30 text-[#E67E22] text-xs font-semibold uppercase tracking-[0.25em]">
            <Compass className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Beyond The Tourist Radar</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#083B2D] tracking-tight">
            50 Untouched Hidden Gems
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-gray-700 italic">
            Secret valleys, forgotten dynasties, bioluminescent shores, and ancient cliff villages across every corner of India.
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
                placeholder="Search by gem name, state, region, or tags..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
              />
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>Showing <strong className="text-[#083B2D]">{filteredGems.length}</strong> of 50 Gems</span>
              <span>•</span>
              <span className="text-[#E67E22] font-semibold">100% Non-Commercial</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {FILTER_TAGS.map((pill) => (
              <button
                key={pill.id}
                onClick={() => {
                  setActiveFilter(pill.id);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeFilter === pill.id
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 border-gray-200 hover:border-[#C49A3A]/40'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGems.map((gem) => (
            <motion.div
              key={gem.id}
              id={gem.slug}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury flex flex-col group"
            >
              {/* Image Frame with badges */}
              <Link to={`/hidden-gems/${gem.slug}`} className="relative h-60 overflow-hidden bg-gray-900 block">
                <img
                  src={gem.heroImage}
                  alt={gem.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Score Pill */}
                <div className="absolute top-4 left-4 bg-[#083B2D]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C49A3A]/40 flex items-center space-x-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-[#C49A3A] font-mono font-bold">
                    Serenity {gem.uncrowdedScore}/100
                  </span>
                </div>

                {/* Adventure Level Pill */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-white/90">
                  {gem.adventureLevel}
                </div>

                {/* Header at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#DFB757] font-serif italic block mb-0.5">
                    {gem.region}, {gem.state}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#FAF8F4] leading-snug drop-shadow-md group-hover:text-[#DFB757] transition-colors">
                    {gem.name}
                  </h3>
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {gem.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {gem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-[#FAF8F4] text-gray-600 text-[10px] font-mono border border-gray-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 text-[11px] py-2 border-t border-gray-100 text-gray-600">
                  <div className="flex items-center space-x-1.5 truncate">
                    <Calendar className="w-3.5 h-3.5 text-[#C49A3A] flex-shrink-0" />
                    <span className="truncate">{gem.bestTimeToVisit}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#E67E22] flex-shrink-0" />
                    <span className="truncate">{gem.state}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <Link
                    to={`/hidden-gems/${gem.slug}`}
                    className="text-xs font-bold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Explore Full Sanctuary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleOpenGem(gem)}
                      className="text-[11px] text-gray-500 hover:text-[#083B2D] px-2 py-1 rounded hover:bg-gray-100 font-mono"
                      title="Quick Dossier"
                    >
                      Quick Peek
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${gem.coordinates.lat},${gem.coordinates.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-gray-400 hover:text-[#083B2D] p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Gem Deep-Dive Modal */}
      <AnimatePresence>
        {selectedGem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => {
              heritageAudio.stopSpeaking();
              setIsNarrating(false);
              setSelectedGem(null);
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
                  setSelectedGem(null);
                }}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Hero Banner */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-900">
                <img
                  src={selectedGem.heroImage}
                  alt={selectedGem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C49A3A] text-[#083B2D] text-[10px] font-bold uppercase tracking-wider">
                      {selectedGem.state}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      Coordinates: {selectedGem.coordinates.lat.toFixed(4)}° N, {selectedGem.coordinates.lng.toFixed(4)}° E
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F4]">
                    {selectedGem.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Audio Narrator Bar */}
                <div className="p-4 rounded-2xl bg-[#083B2D] text-[#FAF8F4] flex items-center justify-between shadow-gold-glow">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A]">
                      Audio Guide Synthesis
                    </span>
                    <p className="text-xs italic text-white/90">
                      Listen to the verified lore and travel secrets of {selectedGem.name.split(':')[0]}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleNarration(selectedGem.description + ' Why visit? ' + selectedGem.whyVisit)}
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

                {/* Narrative Details */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#083B2D]">
                    The Secret Lore
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {selectedGem.description}
                  </p>
                </div>

                {/* Why Visit */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#C49A3A]/25 space-y-1.5">
                  <h4 className="font-serif text-sm font-bold text-[#E67E22] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-[#E67E22]" />
                    <span>Why You Must Experience This Place</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-light">
                    {selectedGem.whyVisit}
                  </p>
                </div>

                {/* How to reach logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5">
                    <h5 className="font-serif text-xs font-bold text-[#083B2D] flex items-center space-x-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#C49A3A]" />
                      <span>Expedition Route</span>
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed font-light">
                      {selectedGem.howToReach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200 space-y-1.5">
                    <h5 className="font-serif text-xs font-bold text-[#083B2D] flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A3A]" />
                      <span>Ideal Expedition Window</span>
                    </h5>
                    <p className="text-xs text-[#083B2D] font-semibold">
                      {selectedGem.bestTimeToVisit}
                    </p>
                    <p className="text-[11px] text-gray-500 font-mono">
                      Adventure Category: {selectedGem.adventureLevel}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedGem.coordinates.lat},${selectedGem.coordinates.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#0D523F] transition-colors"
                  >
                    <span>Open in Google Maps GPS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    to="/ai-planner"
                    onClick={() => {
                      heritageAudio.stopSpeaking();
                      setIsNarrating(false);
                      setSelectedGem(null);
                    }}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110 transition-all text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#083B2D]" />
                    <span>Generate AI Itinerary with Rishi AI</span>
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
