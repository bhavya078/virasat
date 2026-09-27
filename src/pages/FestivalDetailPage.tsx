import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Flame,
  Music,
  Utensils,
  Award,
  ArrowLeft,
  Share2,
  ExternalLink,
  Volume2,
  VolumeX,
  Shield,
  ShieldCheck,
  Star,
  Hotel,
  Camera,
  Sun,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  ThumbsUp,
  Plane,
  CheckCircle2,
  Check,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EntityDetailService, DetailedEntityData } from '../services/entityDetailService';
import { FESTIVALS } from '../data/festivals';
import { heritageAudio } from '../utils/audioService';
import { PoliticalMapLocator } from '../components/map/PoliticalMapLocator';
import { useLanguage } from '../context/LanguageContext';

export const FestivalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, tState } = useLanguage();

  // State
  const [festData, setFestData] = useState<DetailedEntityData | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookingHotel, setBookingHotel] = useState<any | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', rating: 5, comment: '' });
  const [helpfulReviews, setHelpfulReviews] = useState<Record<string, number>>({});
  const [localReviews, setLocalReviews] = useState<any[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 42, hours: 14, mins: 35, secs: 18 });

  // Load festival data
  useEffect(() => {
    if (!slug) return;
    const data = EntityDetailService.getFestivalDetails(slug);
    if (data) {
      setFestData(data);
      setLocalReviews(data.reviews || []);
    } else {
      const fallback = EntityDetailService.getFestivalDetails(FESTIVALS[0].slug);
      setFestData(fallback);
      if (fallback) setLocalReviews(fallback.reviews || []);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    heritageAudio.stopSpeaking();
    setIsPlayingAudio(false);
  }, [slug]);

  // Live countdown timer ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!festData) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center p-6 text-center">
        <Flame className="w-12 h-12 text-[#E67E22] animate-bounce mb-4" />
        <h2 className="font-serif text-2xl font-bold text-[#083B2D]">Summoning Festival Archives...</h2>
      </div>
    );
  }

  // Audio Guide Handlers
  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      heritageAudio.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      heritageAudio.playTempleBell();
      const narrative = `${festData.name}, celebrated with divine fervor across ${festData.state}. ${festData.about.overview} ${festData.about.culturalSignificance}`;
      heritageAudio.speakGuide(narrative, () => setIsPlayingAudio(false));
    }
  };

  // Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Share
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Festival dossier link copied to clipboard!');
    }
  };

  // Lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
    heritageAudio.playTempleBell();
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % festData.gallery.length);
      setZoomLevel(1);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + festData.gallery.length) % festData.gallery.length);
      setZoomLevel(1);
    }
  };

  const filteredGallery = festData.gallery.filter(photo => {
    if (activeGalleryCategory === 'all') return true;
    return photo.category === activeGalleryCategory;
  });

  const handleHelpfulUpvote = (revId: string) => {
    setHelpfulReviews(prev => ({ ...prev, [revId]: (prev[revId] || 0) + 1 }));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created = {
      id: `custom-fest-rev-${Date.now()}`,
      userName: newReview.name,
      userLocation: newReview.location || 'Devotee from India',
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      helpfulCount: 0,
      verified: true
    };

    setLocalReviews([created, ...localReviews]);
    setIsReviewModalOpen(false);
    setNewReview({ name: '', location: '', rating: 5, comment: '' });
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    showToast('Your festive reflection has been documented!');
  };

  const handleConfirmBooking = () => {
    setBookingConfirmed(true);
    confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
    setTimeout(() => {
      setBookingHotel(null);
      setBookingConfirmed(false);
      showToast(`Reservation inquiry for ${bookingHotel?.name} submitted!`);
    }, 2000);
  };

  return (
    <div className="bg-[#FAF8F4] min-h-screen text-[#111827] selection:bg-[#C49A3A]/30 selection:text-[#083B2D]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 bg-[#083B2D] text-[#C49A3A] px-5 py-3 rounded-2xl shadow-luxury border border-[#C49A3A]/40 flex items-center space-x-3 text-xs font-mono font-bold"
          >
            <Sparkles className="w-4 h-4 text-[#C49A3A]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION (100vh Luxury Festive Grandeur) */}
      <section className="relative h-[85vh] sm:h-[92vh] w-full overflow-hidden bg-gray-950 flex flex-col justify-between">
        <div className="absolute inset-0">
          <motion.img
            src={festData.heroImage}
            alt={festData.name}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.5, ease: 'easeOut' }}
            className="w-full h-full object-cover brightness-[0.76] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-[#083B2D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
        </div>

        {/* Top Breadcrumb & Badges */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <Link
              to="/festivals"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md border border-[#C49A3A]/30 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('backToFestivals', 'All 50 Grand Festivals')}</span>
            </Link>
            <span className="text-white/40 hidden sm:inline">•</span>
            <Link
              to={`/state/${festData.state.toLowerCase().replace(/[\s&]+/g, '-')}`}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 backdrop-blur-md text-xs font-mono transition-all"
            >
              <MapPin className="w-3 h-3 text-[#E67E22]" />
              <span>{tState(festData.state)}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="px-3 py-1.5 rounded-full bg-[#E67E22]/90 backdrop-blur-md text-white text-xs font-mono font-bold flex items-center space-x-1.5 shadow-lg">
              <Flame className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
              <span>{festData.bestTimeToVisit}</span>
            </div>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all"
              title="Share Festival"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Bottom Content & Live Countdown Timer */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C49A3A] text-[#083B2D] text-[11px] font-mono uppercase tracking-widest font-bold">
                  Sacred Living Celebration
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 text-[11px] font-mono">
                  Duration: {festData.idealDuration}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#083B2D]/80 border border-[#C49A3A]/40 text-[#DFB757] text-[11px] font-mono">
                  {festData.unescoStatus}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                {festData.name}
              </h1>

              <p className="text-sm sm:text-base text-white/85 max-w-2xl font-light leading-relaxed drop-shadow">
                {festData.about.overview.slice(0, 195)}...
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleToggleAudio}
                  className={`px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase flex items-center space-x-2 transition-all shadow-gold-glow ${
                    isPlayingAudio
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] hover:brightness-110'
                  }`}
                >
                  {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isPlayingAudio ? t('stopAudioGuide', 'Stop Recital') : t('playAudioGuide', 'Listen to Sacred Lore')}</span>
                </button>

                <a
                  href="#gallery"
                  className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
                >
                  View Festival Visuals ({festData.gallery.length})
                </a>

                <a
                  href="#rituals"
                  className="px-4 py-3 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md text-xs font-mono flex items-center space-x-1.5 border border-[#C49A3A]/30 transition-all"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ritual Protocol</span>
                </a>
              </div>
            </div>

            {/* Live Countdown Timer Widget */}
            <div className="lg:col-span-4 bg-black/55 backdrop-blur-xl p-6 rounded-3xl border border-[#C49A3A]/40 text-white space-y-4 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#DFB757]">
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C49A3A]" />
                  <span>Countdown to Auspicious Muhurta</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10">Celestial Calendar</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="font-mono text-2xl sm:text-3xl font-bold block text-[#DFB757]">
                    {timeLeft.days}
                  </span>
                  <span className="text-[9px] font-mono text-white/60 uppercase">Days</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="font-mono text-2xl sm:text-3xl font-bold block text-white">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[9px] font-mono text-white/60 uppercase">Hours</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="font-mono text-2xl sm:text-3xl font-bold block text-white">
                    {timeLeft.mins}
                  </span>
                  <span className="text-[9px] font-mono text-white/60 uppercase">Mins</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-2xl border border-white/10">
                  <span className="font-mono text-2xl sm:text-3xl font-bold block text-emerald-400">
                    {timeLeft.secs}
                  </span>
                  <span className="text-[9px] font-mono text-white/60 uppercase">Secs</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-white/80 pt-2 border-t border-white/15 flex items-center justify-between">
                <span>Peak Devotees: <strong>100k+ Pilgrims</strong></span>
                <span className="text-[#DFB757]">Live Telecast Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK INFORMATION CARD (18 Crucial Metrics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-3xl border border-[#C49A3A]/30 shadow-luxury p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#C49A3A]" />
                <span>Festival Master Metrics (18 Data Points)</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#083B2D]">
                Pilgrim & Cultural Dossier
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-[#083B2D]/5 text-[#083B2D] border border-[#083B2D]/10">
                District: <strong>{festData.district}</strong>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                {festData.budgetLevel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-6 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Festival Month</span>
              <p className="font-medium text-[#E67E22] font-semibold">{festData.bestTimeToVisit}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Celebration Duration</span>
              <p className="font-medium text-gray-900">{festData.idealDuration}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Temple / Entry Fee</span>
              <p className="font-medium text-gray-900">{festData.entryFee}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Ritual Timings</span>
              <p className="font-medium text-gray-900">{festData.timings}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">UNESCO / Heritage</span>
              <p className="font-medium text-gray-900">{festData.unescoStatus}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">GPS Coordinates</span>
              <p className="font-mono font-bold text-[#083B2D] truncate">
                {festData.coordinates.lat.toFixed(4)}°N, {festData.coordinates.lng.toFixed(4)}°E
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Airport</span>
              <p className="font-medium text-gray-900 truncate">{festData.nearestAirport}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Rail Station</span>
              <p className="font-medium text-gray-900 truncate">{festData.nearestRailway}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Main Bus Terminal</span>
              <p className="font-medium text-gray-900 truncate">{festData.nearestBus}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Accessibility</span>
              <p className="font-medium text-gray-900">{festData.travelDifficulty}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Family & Elders</span>
              <p className="font-medium text-emerald-700">✓ Highly Devotional</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Wheelchair Assistance</span>
              <p className="font-medium text-gray-600">
                {festData.wheelchairAccessible ? '✓ Special Darshan Ramps' : '⚠ High Crowd Caution'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SACRED NARRATIVE & RITUAL TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Sacred Mythology */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold">
                <Flame className="w-3.5 h-3.5 text-[#E67E22]" />
                <span>Cosmic Origins & Living Devotion</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
                Divine Significance of {festData.name}
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                {festData.about.overview}
              </p>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                  Ancient Mythology & Sacred Legends
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {festData.about.legendsAndMythology}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {festData.about.culturalSignificance}
                </p>
              </div>

              {/* RITUAL PROTOCOL BREAKDOWN */}
              <div id="rituals" className="bg-[#FAF8F4] p-6 rounded-2xl border border-[#C49A3A]/25 space-y-4">
                <h4 className="font-serif text-base font-bold text-[#083B2D] uppercase tracking-wider flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C49A3A]" />
                  <span>Sacred 4-Phase Ritual Protocol</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#E67E22] font-bold uppercase block">
                      Phase I • Dawn (Brahma Muhurta 04:30 AM)
                    </span>
                    <strong className="text-gray-900 block font-serif">Mangala Aarti & Holy Snan</strong>
                    <p className="text-gray-600">Devotional baths in holy rivers/temple tanks accompanied by Vedic conch chants.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#C49A3A] font-bold uppercase block">
                      Phase II • Midday (12:00 PM)
                    </span>
                    <strong className="text-gray-900 block font-serif">Rajbhog & Mahaprasad Offering</strong>
                    <p className="text-gray-600">Lavish vegetarian feast sanctified and distributed freely to thousands of pilgrims.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#083B2D] font-bold uppercase block">
                      Phase III • Twilight (06:30 PM)
                    </span>
                    <strong className="text-gray-900 block font-serif">Sandhya Maha Aarti & Chariot Yatra</strong>
                    <p className="text-gray-600">Thousands of earthen lamps ignited with multi-tiered brass deepams and colossal processions.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-purple-700 font-bold uppercase block">
                      Phase IV • Midnight Vigils
                    </span>
                    <strong className="text-gray-900 block font-serif">Jaagran, Kirtan & Sacred Fire</strong>
                    <p className="text-gray-600">All-night ecstatic classical percussion, bhajan recitals, and divine communion.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interesting Facts */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#083B2D] flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#C49A3A]" />
                <span>Rare Festive Lore & Revelations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {festData.about.interestingFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#C49A3A]/20 shadow-sm flex items-start space-x-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#083B2D] text-[#C49A3A] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Epochs Timeline */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
                    Centuries of Continuity
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                    Historical Evolution of {festData.name}
                  </h3>
                </div>
                <Calendar className="w-5 h-5 text-[#C49A3A]" />
              </div>

              <div className="relative border-l-2 border-[#C49A3A]/30 ml-3 space-y-6 pl-6">
                {festData.about.timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#083B2D] border-2 border-[#DFB757] group-hover:scale-125 transition-transform" />
                    <span className="text-xs font-mono font-bold text-[#E67E22] block">
                      {item.yearOrEra}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-gray-900 mt-0.5">
                      {item.event}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.significance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Political Map, Distances & Weather */}
          <div className="lg:col-span-4 space-y-8">
            <PoliticalMapLocator
              monumentName={festData.name}
              state={festData.state}
              latitude={festData.coordinates.lat}
              longitude={festData.coordinates.lng}
            />

            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  Pilgrim Transit Distances
                </h4>
                <Plane className="w-4 h-4 text-[#C49A3A]" />
              </div>

              <div className="space-y-2.5 text-xs">
                {festData.mapInfo.majorCityDistances.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F4] border border-gray-100"
                  >
                    <div>
                      <strong className="text-gray-900 block">{c.city}</strong>
                      <span className="text-[11px] text-gray-500">{c.duration}</span>
                    </div>
                    <span className="font-mono font-bold text-[#083B2D]">{c.distance}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${festData.coordinates.lat},${festData.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#083B2D] text-[#C49A3A] hover:bg-[#062c22] text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Navigate to Festival Grounds</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  7-Day Festive Weather Outlook
                </h4>
                <Sun className="w-4 h-4 text-[#E67E22]" />
              </div>

              <div className="space-y-2 text-xs">
                {festData.weather.weeklyForecast.map((f, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-800">{f.day}</span>
                    <span className="text-gray-500">{f.condition}</span>
                    <span className="font-mono font-bold text-[#083B2D]">{f.high} / {f.low}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL PHOTOGRAPHY MASONRY GALLERY (8–10 Authentic Photos with Lightbox) */}
      <section id="gallery" className="bg-[#FAF8F4] py-16 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/30 text-[#083B2D] text-xs font-semibold uppercase tracking-wider mb-2">
                <Camera className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Devotional Photography • Real Celebrations Only</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
                Visual Symphony of {festData.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Authentic archival captures documenting sacred rites, illuminated processions, ecstatic music, and holy assemblies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['all', 'rituals', 'culture', 'people'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                    activeGalleryCategory === cat
                      ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#C49A3A]/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((photo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => openLightbox(idx)}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-luxury border border-[#C49A3A]/20 cursor-pointer group bg-gray-900 h-64"
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <span className="text-[10px] font-mono text-[#DFB757] uppercase tracking-wider block">
                    {photo.category}
                  </span>
                  <p className="font-medium line-clamp-1 text-white/90">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            <div className="flex items-center justify-between text-white/80">
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="text-[#C49A3A] font-bold">
                  {lightboxIndex + 1} of {festData.gallery.length}
                </span>
                <span>•</span>
                <span>{festData.gallery[lightboxIndex]?.category.toUpperCase()}</span>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline text-white/60">
                  {festData.gallery[lightboxIndex]?.photographer || 'Virasat Festival Archives'}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(2.5, prev + 0.3))}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(1, prev - 0.3))}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-red-600/80 hover:bg-red-600 text-white ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={prevLightboxImage}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.25 }}
                src={festData.gallery[lightboxIndex]?.url}
                alt={festData.gallery[lightboxIndex]?.caption}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-transform"
              />

              <button
                onClick={nextLightboxImage}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center max-w-2xl mx-auto text-white/90 text-xs sm:text-sm font-medium">
              <p>{festData.gallery[lightboxIndex]?.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. HOTELS & DHARAMSHALAS NEAR FESTIVAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            <Hotel className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>VIP Havelis & Pilgrim Guest Houses</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Stays with Festival Viewing Access
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {festData.hotels.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-sm hover:shadow-luxury transition-all flex flex-col justify-between"
            >
              <div className="relative h-48 bg-gray-900">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-[#083B2D]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-[#C49A3A] font-bold">
                  {h.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white text-xs font-mono flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{h.rating}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900">{h.name}</h3>
                  <span className="text-[11px] text-gray-500 block mt-0.5">{h.distance}</span>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {h.amenities.map((am, j) => (
                      <span key={j} className="px-2 py-0.5 rounded bg-[#FAF8F4] text-gray-600 text-[10px] font-mono border border-gray-100">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#083B2D]">{h.price}</span>
                  <button
                    onClick={() => setBookingHotel(h)}
                    className="px-4 py-2 rounded-xl bg-[#083B2D] text-[#C49A3A] hover:bg-[#062c22] text-xs font-bold font-mono transition-all"
                  >
                    Reserve Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SACRED FEASTS & PRASAD (FOOD SECTION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] font-bold block">
            Sacred Confections & Mahaprasad
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Authentic Festive Feasts & Bhog
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {festData.localFood.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-44 bg-gray-900">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#E67E22] text-white px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold">
                  {dish.mustTry}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900">{dish.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{dish.desc}</p>
                </div>
                <div className="pt-2 border-t border-gray-100 text-[11px] font-mono text-gray-500">
                  <div>Offered At: <strong className="text-gray-800">{dish.whereToEat}</strong></div>
                  <div>Estimated Bhog: <strong className="text-[#083B2D]">{dish.price}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FESTIVAL ATTIRE & DEVOTEE PROTOCOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-[#083B2D] text-white p-8 rounded-3xl border border-[#C49A3A]/40 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold block">
                Devotee Discipline & Modesty
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#FAF8F4]">
                Traditional Attire & Sanctuary Code
              </h2>
            </div>
            <Shield className="w-6 h-6 text-[#C49A3A]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/80">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <strong className="text-[#DFB757] block font-mono text-[11px] uppercase">Prescribed Attire</strong>
              <p>{festData.cultureAndTraditions.attire}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <strong className="text-[#DFB757] block font-mono text-[11px] uppercase">Rhythms & Instruments</strong>
              <p>{festData.cultureAndTraditions.musicAndDance}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <strong className="text-[#DFB757] block font-mono text-[11px] uppercase">Language & Chants</strong>
              <p>{festData.cultureAndTraditions.language}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE FAQ ACCORDION (15 FAQs) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            Pilgrim Guide & Logistics
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
            Frequently Asked Questions (15 Curated Q&As)
          </h2>
        </div>

        <div className="space-y-3">
          {festData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#C49A3A]/25 overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 hover:bg-[#FAF8F4] transition-colors"
              >
                <span className="font-serif text-sm sm:text-base font-bold text-gray-900">
                  {idx + 1}. {faq.question}
                </span>
                <span className="text-xs font-mono font-bold text-[#083B2D]">
                  {expandedFaq === idx ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TRAVELER REVIEWS & REFLECTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#C49A3A] text-[#C49A3A]" />
                <span>Devotee Experiences</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                Pilgrim Notes & Reflections ({localReviews.length})
              </h2>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#083B2D] text-[#C49A3A] hover:bg-[#062c22] font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              + Write a Reflection
            </button>
          </div>

          <div className="space-y-4">
            {localReviews.map(rev => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <strong className="text-sm font-bold text-gray-900">{rev.userName}</strong>
                    <span className="text-xs text-gray-500 ml-2 font-mono">• {rev.userLocation}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-500">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 pt-1">
                  <span>{rev.date}</span>
                  <button
                    onClick={() => handleHelpfulUpvote(rev.id)}
                    className="flex items-center space-x-1 hover:text-[#083B2D] transition-colors"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({rev.helpfulCount + (helpfulReviews[rev.id] || 0)})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTEL RESERVATION MODAL */}
      <AnimatePresence>
        {bookingHotel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#C49A3A]/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
                    Festival Stay Booking
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{bookingHotel.name}</h3>
                </div>
                <button onClick={() => setBookingHotel(null)} className="p-1 rounded-full hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Stay Period (Festival Dates)</label>
                  <input
                    type="date"
                    defaultValue="2026-11-10"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div className="p-3 rounded-xl bg-amber-50 text-amber-900 text-[11px]">
                  ⚡ Festival peak season rate: <strong>{bookingHotel.price}</strong> with VIP Darshan queue guidance.
                </div>
              </div>

              <button
                onClick={handleConfirmBooking}
                disabled={bookingConfirmed}
                className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
              >
                {bookingConfirmed ? 'Confirming with Reception...' : 'Submit Room Booking Request'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WRITE A REVIEW MODAL */}
      <AnimatePresence>
        {isReviewModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#C49A3A]/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
                    Devotee Reflection
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">Add Your Experience</h3>
                </div>
                <button onClick={() => setIsReviewModalOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={e => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Your City / State</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={e => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. Varanasi, UP"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Sacred Experience Rating</label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            newReview.rating >= star
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Your Reflection</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe the Maha Aarti, the chariot procession, prasad taste, or crowd advice..."
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Publish Devotional Field Note
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
