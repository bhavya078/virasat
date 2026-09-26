import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Music,
  Palette,
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
  Utensils,
  Camera,
  Sun,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ThumbsUp,
  Plane,
  CheckCircle2,
  Check,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  Scissors,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EntityDetailService, DetailedEntityData } from '../services/entityDetailService';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import { heritageAudio } from '../utils/audioService';
import { PoliticalMapLocator } from '../components/map/PoliticalMapLocator';

export const CultureDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // State
  const [cultureData, setCultureData] = useState<DetailedEntityData | null>(null);
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

  // Load culture data
  useEffect(() => {
    if (!slug) return;
    const data = EntityDetailService.getCultureDetails(slug);
    if (data) {
      setCultureData(data);
      setLocalReviews(data.reviews || []);
    } else {
      const fallback = EntityDetailService.getCultureDetails(CULTURAL_EXPERIENCES[0].slug);
      setCultureData(fallback);
      if (fallback) setLocalReviews(fallback.reviews || []);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    heritageAudio.stopSpeaking();
    setIsPlayingAudio(false);
  }, [slug]);

  if (!cultureData) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center p-6 text-center">
        <Sparkles className="w-12 h-12 text-[#C49A3A] animate-spin mb-4" />
        <h2 className="font-serif text-2xl font-bold text-[#083B2D]">Opening Master Artisan Archives...</h2>
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
      const narrative = `${cultureData.name}, one of India's preeminent classical traditions originating in ${cultureData.state}. ${cultureData.about.overview} ${cultureData.about.natureOrArchitecture}`;
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
      showToast('Cultural Masterclass link copied to clipboard!');
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
      setLightboxIndex((lightboxIndex + 1) % cultureData.gallery.length);
      setZoomLevel(1);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + cultureData.gallery.length) % cultureData.gallery.length);
      setZoomLevel(1);
    }
  };

  const filteredGallery = cultureData.gallery.filter(photo => {
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
      id: `custom-cult-rev-${Date.now()}`,
      userName: newReview.name,
      userLocation: newReview.location || 'Art Connoisseur from India',
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
    showToast('Your artisan reflection has been recorded!');
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

      {/* 1. HERO SECTION (Apple + UNESCO Living Heritage) */}
      <section className="relative h-[85vh] sm:h-[92vh] w-full overflow-hidden bg-gray-950 flex flex-col justify-between">
        <div className="absolute inset-0">
          <motion.img
            src={cultureData.heroImage}
            alt={cultureData.name}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.5, ease: 'easeOut' }}
            className="w-full h-full object-cover brightness-[0.78] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-[#083B2D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Top Breadcrumb & Badges */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <Link
              to="/culture"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md border border-[#C49A3A]/30 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All 50 Living Traditions</span>
            </Link>
            <span className="text-white/40 hidden sm:inline">•</span>
            <Link
              to={`/state/${cultureData.state.toLowerCase().replace(/[\s&]+/g, '-')}`}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 backdrop-blur-md text-xs font-mono transition-all"
            >
              <MapPin className="w-3 h-3 text-[#E67E22]" />
              <span>{cultureData.state}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <div className="px-3 py-1.5 rounded-full bg-[#083B2D]/90 backdrop-blur-md border border-[#C49A3A]/50 text-[#C49A3A] text-xs font-mono font-bold flex items-center space-x-1.5 shadow-gold-glow">
              <Award className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>Intangible Heritage of India</span>
            </div>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all"
              title="Share Tradition"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Bottom Content & Living Lineage Widget */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#C49A3A] text-[#083B2D] text-[11px] font-mono uppercase tracking-widest font-bold">
                  Classical Masterclass
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 text-[11px] font-mono">
                  GI Tagged Lineage
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E67E22]/90 text-white text-[11px] font-mono">
                  Guru-Shishya Tradition
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                {cultureData.name}
              </h1>

              <p className="text-sm sm:text-base text-white/85 max-w-2xl font-light leading-relaxed drop-shadow">
                {cultureData.about.overview.slice(0, 195)}...
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
                  <span>{isPlayingAudio ? 'Stop Master Narration' : 'Listen to Masterclass Oral History'}</span>
                </button>

                <a
                  href="#gallery"
                  className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
                >
                  Inspect Artisan Archives ({cultureData.gallery.length})
                </a>

                <a
                  href="#technique"
                  className="px-4 py-3 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md text-xs font-mono flex items-center space-x-1.5 border border-[#C49A3A]/30 transition-all"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Technique & Mudras</span>
                </a>
              </div>
            </div>

            {/* Lineage & Guild Widget */}
            <div className="lg:col-span-4 bg-black/55 backdrop-blur-xl p-6 rounded-3xl border border-[#C49A3A]/40 text-white space-y-4 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#DFB757]">
                <div className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C49A3A]" />
                  <span>Intangible Heritage Status</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10">{cultureData.unescoStatus}</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                  <span className="text-[10px] text-[#DFB757] uppercase block">Epicenter / Craft Guild:</span>
                  <strong className="text-white text-sm block mt-0.5">{cultureData.district}, {cultureData.state}</strong>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                  <span className="text-[10px] text-[#DFB757] uppercase block">Living Master Exponents:</span>
                  <span className="text-white/90 font-sans block mt-0.5">{cultureData.about.natureOrArchitecture.slice(0, 85)}...</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-white/80 pt-2 border-t border-white/15 flex items-center justify-between">
                <span>Certification: <strong>GI & Sangeet Natak</strong></span>
                <span className="text-emerald-400">Preserved in Living Guilds</span>
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
                <span>Living Heritage Dossier (18 Metrics)</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#083B2D]">
                Masterclass & Technique Parameters
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-[#083B2D]/5 text-[#083B2D] border border-[#083B2D]/10">
                Guild Epicenter: <strong>{cultureData.district}</strong>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                {cultureData.budgetLevel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-6 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">State of Origin</span>
              <p className="font-medium text-[#E67E22] font-semibold">{cultureData.state}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Apprenticeship Duration</span>
              <p className="font-medium text-gray-900">{cultureData.idealDuration}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Guild / Workshop Fee</span>
              <p className="font-medium text-gray-900">{cultureData.entryFee}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Studio & Recital Timings</span>
              <p className="font-medium text-gray-900">{cultureData.timings}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">UNESCO / Heritage</span>
              <p className="font-medium text-gray-900">{cultureData.unescoStatus}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">GPS Coordinates</span>
              <p className="font-mono font-bold text-[#083B2D] truncate">
                {cultureData.coordinates.lat.toFixed(4)}°N, {cultureData.coordinates.lng.toFixed(4)}°E
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Airport</span>
              <p className="font-medium text-gray-900 truncate">{cultureData.nearestAirport}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Rail Station</span>
              <p className="font-medium text-gray-900 truncate">{cultureData.nearestRailway}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Road Transit Hub</span>
              <p className="font-medium text-gray-900 truncate">{cultureData.nearestBus}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Learning Curve</span>
              <p className="font-medium text-gray-900">{cultureData.travelDifficulty}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Hands-on Workshops</span>
              <p className="font-medium text-emerald-700">✓ Suitable for Beginners</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Wheelchair Access</span>
              <p className="font-medium text-gray-600">
                {cultureData.wheelchairAccessible ? '✓ Accessible Studios' : '⚠ Traditional Workshops'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP NARRATIVE & TECHNIQUE BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Artistic Philosophy */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold">
                <Palette className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Artistic Philosophy & Lineage</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
                The Living Soul of {cultureData.name}
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                {cultureData.about.overview}
              </p>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                  Origins, Guru-Shishya Parampara & Gharanas
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {cultureData.about.history}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {cultureData.about.natureOrArchitecture}
                </p>
              </div>

              {/* 4-PHASE TECHNIQUE & MUDRAS BREAKDOWN */}
              <div id="technique" className="bg-[#FAF8F4] p-6 rounded-2xl border border-[#C49A3A]/25 space-y-4">
                <h4 className="font-serif text-base font-bold text-[#083B2D] uppercase tracking-wider flex items-center space-x-2">
                  <Scissors className="w-4 h-4 text-[#C49A3A]" />
                  <span>4-Stage Master Technique & Anatomy</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#E67E22] font-bold uppercase block">
                      Stage I • Medium & Preparation
                    </span>
                    <strong className="text-gray-900 block font-serif">Indigenous Raw Materials & Tuning</strong>
                    <p className="text-gray-600">Gathering organic vegetable pigments, brass alloys, mulberry silk, or tuning natural goat-hide percussion.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#C49A3A] font-bold uppercase block">
                      Stage II • Sacred Invocation & Mudra
                    </span>
                    <strong className="text-gray-900 block font-serif">Guru Pranam & Foundation Form</strong>
                    <p className="text-gray-600">Salutation to Mother Earth, establishing the basic geometric posture (Aramandi/Chauka) or blueprint line.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-[#083B2D] font-bold uppercase block">
                      Stage III • Emotional & Craft Nuance
                    </span>
                    <strong className="text-gray-900 block font-serif">Navarasas & Detailed Etching</strong>
                    <p className="text-gray-600">Expression of the nine classical aesthetic emotions, intricate wax filigree, or complex rhythmic cycles (talas).</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-gray-100 space-y-1">
                    <span className="font-mono text-[10px] text-purple-700 font-bold uppercase block">
                      Stage IV • Culmination & Arangetram
                    </span>
                    <strong className="text-gray-900 block font-serif">Master Recital & Guild Seal</strong>
                    <p className="text-gray-600">The public graduation performance or placement of the master artisan's certification hallmark.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interesting Facts */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#083B2D] flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#C49A3A]" />
                <span>Rare Craft Revelations & Heritage Lore</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cultureData.about.interestingFacts.map((fact, idx) => (
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

            {/* Historical Chronology Timeline */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
                    Centuries of Continuity
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                    Historical Evolution of {cultureData.name}
                  </h3>
                </div>
                <BookOpen className="w-5 h-5 text-[#C49A3A]" />
              </div>

              <div className="relative border-l-2 border-[#C49A3A]/30 ml-3 space-y-6 pl-6">
                {cultureData.about.timeline.map((item, idx) => (
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

          {/* Right Column: Political Map, Distances & Forecast */}
          <div className="lg:col-span-4 space-y-8">
            <PoliticalMapLocator
              monumentName={cultureData.name}
              state={cultureData.state}
              latitude={cultureData.coordinates.lat}
              longitude={cultureData.coordinates.lng}
            />

            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  Distances to Artisan Academies
                </h4>
                <Plane className="w-4 h-4 text-[#C49A3A]" />
              </div>

              <div className="space-y-2.5 text-xs">
                {cultureData.mapInfo.majorCityDistances.map((c, i) => (
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
                  href={`https://www.google.com/maps/dir/?api=1&destination=${cultureData.coordinates.lat},${cultureData.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#083B2D] text-[#C49A3A] hover:bg-[#062c22] text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Navigate to Master Workshop</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  Weekly Climate for Practice
                </h4>
                <Sun className="w-4 h-4 text-[#E67E22]" />
              </div>

              <div className="space-y-2 text-xs">
                {cultureData.weather.weeklyForecast.map((f, i) => (
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
                <span>Real Masterclass Archives • No AI Artwork</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
                Visual Archives of {cultureData.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Authentic documentation of master performances, artisan studio workshops, sacred mudras, and traditional looms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['all', 'culture', 'people'].map(cat => (
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
                  {lightboxIndex + 1} of {cultureData.gallery.length}
                </span>
                <span>•</span>
                <span>{cultureData.gallery[lightboxIndex]?.category.toUpperCase()}</span>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline text-white/60">
                  {cultureData.gallery[lightboxIndex]?.photographer || 'National Cultural Archives'}
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
                src={cultureData.gallery[lightboxIndex]?.url}
                alt={cultureData.gallery[lightboxIndex]?.caption}
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
              <p>{cultureData.gallery[lightboxIndex]?.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CULTURAL STAYS & RESIDENCIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            <Hotel className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Artisan Residencies & Heritage Retreats</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Stays Offering Classical Immersion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cultureData.hotels.map((h, i) => (
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
                    Reserve Residency
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GASTRONOMY OF THE CRAFT REGION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] font-bold block">
            Artisan Fuel & Heritage Flavors
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Cuisine of {cultureData.state}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureData.localFood.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-44 bg-gray-900">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#083B2D]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#C49A3A] font-bold">
                  {dish.mustTry}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base font-bold text-gray-900">{dish.name}</h3>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{dish.desc}</p>
                </div>
                <div className="pt-2 border-t border-gray-100 text-[11px] font-mono text-gray-500">
                  <div>Where to Dine: <strong className="text-gray-800">{dish.whereToEat}</strong></div>
                  <div>Price: <strong className="text-[#083B2D]">{dish.price}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMPREHENSIVE FAQ ACCORDION (15 FAQs) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            Artisan Apprenticeship & Inquiries
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
            Frequently Asked Questions (15 Curated Q&As)
          </h2>
        </div>

        <div className="space-y-3">
          {cultureData.faqs.map((faq, idx) => (
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

      {/* 8. TRAVELER REVIEWS & REFLECTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#C49A3A] text-[#C49A3A]" />
                <span>Apprentice & Connoisseur Reflections</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                Cultural Field Reflections ({localReviews.length})
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

      {/* RESIDENCY RESERVATION MODAL */}
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
                    Artisan Residency Booking
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{bookingHotel.name}</h3>
                </div>
                <button onClick={() => setBookingHotel(null)} className="p-1 rounded-full hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Check-in Date (Workshop Session)</label>
                  <input
                    type="date"
                    defaultValue="2026-10-20"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 text-[11px]">
                  ✓ Includes daily sitar/dance morning session & authentic homestyle dining.
                </div>
              </div>

              <button
                onClick={handleConfirmBooking}
                disabled={bookingConfirmed}
                className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
              >
                {bookingConfirmed ? 'Confirming with Retreat...' : 'Submit Residency Request'}
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
                    Artisan Connoisseur Reflection
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
                    placeholder="e.g. Ananya Sen"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Your City / State</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={e => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. Kolkata, West Bengal"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Masterclass Rating</label>
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
                  <label className="block text-gray-600 font-mono mb-1">Your Experience</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe the mudras learned, the maestro's guidance, or craft materials..."
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Publish Masterclass Note
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
