import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FESTIVALS } from '../data/festivals';
import { Festival } from '../types';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Utensils,
  Music,
  Search,
  Volume2,
  VolumeX,
  X,
  Compass,
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { heritageAudio } from '../utils/audioService';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const FestivalsPage: React.FC = () => {
  const { t, tState } = useLanguage();
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [isNarrating, setIsNarrating] = useState(false);

  const months = [
    t('festMonthAll', 'All Celebrations'),
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const filteredFestivals = useMemo(() => {
    return FESTIVALS.filter((fest) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        fest.name.toLowerCase().includes(q) ||
        fest.state.toLowerCase().includes(q) ||
        fest.significance.toLowerCase().includes(q) ||
        fest.authenticFood.some((f) => f.toLowerCase().includes(q)) ||
        fest.musicInstruments.some((m) => m.toLowerCase().includes(q));

      if (!matchesSearch) return false;

      if (selectedMonth === 'All Months' || selectedMonth === months[0]) return true;
      return fest.month.toLowerCase().includes(selectedMonth.toLowerCase());
    });
  }, [selectedMonth, searchQuery, months]);

  const calculateTimeRemaining = (targetDate: string) => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, mins: 0, secs: 0, passed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    return { days, hours, mins, secs, passed: false };
  };

  const handleOpenFestival = (fest: Festival) => {
    setSelectedFestival(fest);
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

  const counterText = t('showingFestivals', `Showing ${filteredFestivals.length} of ${FESTIVALS.length} Celebrations`)
    .replace('{count}', String(filteredFestivals.length))
    .replace('{total}', String(FESTIVALS.length));

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em]">
            <Calendar className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>{t('festivalsBadge', '50 Grand Living Celebrations of Bharat')}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#083B2D] tracking-tight">
            {t('festivalsTitle', 'Sacred Festivals & Cultural Carnivals')}
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-gray-700 italic">
            {t('festivalsSubtitle', 'Experience the rhythm, color, and devotion of India’s most iconic celebrations across all 28 states and 8 union territories.')}
          </p>
        </div>

        {/* Toolbar: Search + Months */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('festivalsSearchPlaceholder', 'Search festivals by name, state, deity, or tradition...')}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
              />
            </div>

            {/* Counter */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>{counterText}</span>
              <span>•</span>
              <span className="text-[#E67E22] font-semibold">Live Countdown Clocks</span>
            </div>
          </div>

          {/* Month Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar justify-start sm:justify-center">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => {
                  setSelectedMonth(m);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  selectedMonth === m
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-luxury'
                    : 'bg-[#FAF8F4] text-gray-700 border-gray-200 hover:border-[#C49A3A]/40'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((fest) => {
            const timeLeft = calculateTimeRemaining(fest.countdownTargetDate);

            return (
              <motion.div
                key={fest.id}
                id={fest.slug}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury flex flex-col group"
              >
                {/* Visual Header */}
                <Link to={`/festivals/${fest.slug}`} className="relative h-60 overflow-hidden bg-gray-900 block">
                  <img
                    src={fest.heroImage}
                    alt={fest.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Month Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#083B2D]/90 backdrop-blur-md border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-mono font-bold">
                      {fest.month}
                    </span>
                  </div>

                  {/* Countdown Badge */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[11px] font-mono flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C49A3A]" />
                    <span>
                      {timeLeft.passed
                        ? 'Annual Cycle'
                        : `${timeLeft.days}d ${timeLeft.hours}h`}
                    </span>
                  </div>

                  {/* Title & Location at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] text-[#DFB757] font-serif italic block mb-0.5">
                      {fest.region}, {tState(fest.state)}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-tight group-hover:text-[#DFB757] transition-colors">
                      {fest.name}
                    </h3>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-light">
                    {fest.significance}
                  </p>

                  {/* Protocol & Highlights */}
                  <div className="space-y-2 border-t border-gray-100 pt-3 text-xs">
                    <div className="flex items-start space-x-2 text-gray-700">
                      <Sparkles className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] line-clamp-2">
                        <strong className="text-[#083B2D]">{t('festivalDates', 'Celebration Dates:')}</strong> {fest.dateRange}
                      </span>
                    </div>

                    <div className="flex items-start space-x-2 text-gray-700">
                      <Utensils className="w-4 h-4 text-[#E67E22] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] line-clamp-1">
                        <strong className="text-[#083B2D]">Prasadam:</strong> {fest.authenticFood.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenFestival(fest)}
                      className="text-xs font-bold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1 transition-colors"
                    >
                      <span>{t('viewFestivalGuide', 'View Ritual Dossier')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleToggleNarration(fest.significance + ' Ritual protocol: ' + fest.ritualProtocol)}
                      className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-[#083B2D] transition-colors"
                      title={t('audioGuideListen', 'Listen to Audio Guide')}
                    >
                      <Volume2 className="w-4 h-4 text-[#C49A3A]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Selected Festival Modal */}
      <AnimatePresence>
        {selectedFestival && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => {
              heritageAudio.stopSpeaking();
              setIsNarrating(false);
              setSelectedFestival(null);
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
                  setSelectedFestival(null);
                }}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Banner */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gray-900">
                <img
                  src={selectedFestival.heroImage}
                  alt={selectedFestival.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C49A3A] text-[#083B2D] text-[10px] font-bold uppercase tracking-wider">
                      {tState(selectedFestival.state)}
                    </span>
                    <span className="text-xs text-white/80 font-mono">
                      {selectedFestival.dateRange}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F4]">
                    {selectedFestival.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Audio Narrator Bar */}
                <div className="p-4 rounded-2xl bg-[#083B2D] text-[#FAF8F4] flex items-center justify-between shadow-gold-glow">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A]">
                      {t('audioGuideListen', 'Festival Audio Guide')}
                    </span>
                    <p className="text-xs italic text-white/90">
                      {selectedFestival.name}
                    </p>
                  </div>
                  <button
                    onClick={() => handleToggleNarration(selectedFestival.significance + ' Ritual protocol: ' + selectedFestival.ritualProtocol)}
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

                {/* Significance */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#083B2D]">
                    {t('festivalsTitle', 'Sacred Significance & Legend')}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                    {selectedFestival.significance}
                  </p>
                </div>

                {/* Ritual Protocol */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#C49A3A]/25 space-y-1.5">
                  <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-1.5">
                    <Flame className="w-4 h-4 text-[#C49A3A]" />
                    <span>{t('festivalRitual', 'Ritual Protocol & Ceremonies')}</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed font-light">
                    {selectedFestival.ritualProtocol}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/festivals/${selectedFestival.slug}`}
                    className="flex-1 py-3 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#0D523F] transition-colors"
                  >
                    <span>{t('viewFestivalGuide', 'View Full Festival Dossier')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/ai-planner"
                    onClick={() => {
                      heritageAudio.stopSpeaking();
                      setIsNarrating(false);
                      setSelectedFestival(null);
                    }}
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110 transition-all text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#083B2D]" />
                    <span>{t('btnPlanAI', 'Plan Trip with Rishi AI')}</span>
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
