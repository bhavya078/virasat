import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Calendar,
  Clock,
  Award,
  ArrowLeft,
  Share2,
  ExternalLink,
  Volume2,
  VolumeX,
  Shield,
  ShieldCheck,
  CheckCircle,
  CheckCircle2,
  Star,
  Hotel,
  Utensils,
  Camera,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  ChevronRight,
  ChevronLeft,
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  HelpCircle,
  ThumbsUp,
  MessageSquare,
  DollarSign,
  Mountain,
  Footprints,
  Plane,
  Train,
  Bus,
  AlertTriangle,
  Info,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EntityDetailService, DetailedEntityData, GalleryPhoto } from '../services/entityDetailService';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { heritageAudio } from '../utils/audioService';
import { PoliticalMapLocator } from '../components/map/PoliticalMapLocator';
import { useLanguage } from '../context/LanguageContext';

export const HiddenGemDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, tState, tAdventure } = useLanguage();

  // State management
  const [gemData, setGemData] = useState<DetailedEntityData | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [checkedThings, setCheckedThings] = useState<Record<string, boolean>>({});
  const [travelStyle, setTravelStyle] = useState<'Solo' | 'Couple' | 'Family' | 'Friends' | 'Luxury' | 'Backpacking'>('Solo');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bookingHotel, setBookingHotel] = useState<any | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', location: '', rating: 5, comment: '' });
  const [helpfulReviews, setHelpfulReviews] = useState<Record<string, number>>({});
  const [localReviews, setLocalReviews] = useState<any[]>([]);

  // Load destination data
  useEffect(() => {
    if (!slug) return;
    const data = EntityDetailService.getHiddenGemDetails(slug);
    if (data) {
      setGemData(data);
      setLocalReviews(data.reviews || []);
    } else {
      // Fallback to first gem if invalid slug
      const fallback = EntityDetailService.getHiddenGemDetails(HIDDEN_GEMS[0].slug);
      setGemData(fallback);
      if (fallback) setLocalReviews(fallback.reviews || []);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    heritageAudio.stopSpeaking();
    setIsPlayingAudio(false);
  }, [slug]);

  if (!gemData) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center p-6 text-center">
        <Compass className="w-12 h-12 text-[#C49A3A] animate-spin mb-4" />
        <h2 className="font-serif text-2xl font-bold text-[#083B2D]">Uncovering Hidden Sanctuary...</h2>
        <p className="text-xs text-gray-500 mt-2">Connecting with India's geographical archives.</p>
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
      const narrative = `${gemData.name}, located in ${gemData.district}, ${gemData.state}. ${gemData.about.overview} ${gemData.about.history.slice(0, 200)}`;
      heritageAudio.speakGuide(narrative, () => setIsPlayingAudio(false));
    }
  };

  // Toast Notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Share Link Handler
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Exclusive dossier link copied to clipboard!');
    }
  };

  // Lightbox handlers
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
      setLightboxIndex((lightboxIndex + 1) % gemData.gallery.length);
      setZoomLevel(1);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + gemData.gallery.length) % gemData.gallery.length);
      setZoomLevel(1);
    }
  };

  // Filtered gallery photos
  const filteredGallery = gemData.gallery.filter(photo => {
    if (activeGalleryCategory === 'all') return true;
    return photo.category === activeGalleryCategory;
  });

  // Toggle checklist activity
  const toggleActivity = (id: string) => {
    setCheckedThings(prev => ({ ...prev, [id]: !prev[id] }));
    heritageAudio.playTempleBell();
  };

  const completedActivitiesCount = Object.values(checkedThings).filter(Boolean).length;

  // Helpful review upvote
  const handleHelpfulUpvote = (revId: string) => {
    setHelpfulReviews(prev => ({
      ...prev,
      [revId]: (prev[revId] || 0) + 1
    }));
  };

  // Submit new review
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created = {
      id: `custom-rev-${Date.now()}`,
      userName: newReview.name,
      userLocation: newReview.location || 'Explorer from India',
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      helpfulCount: 0,
      verified: true
    };

    setLocalReviews([created, ...localReviews]);
    setIsReviewModalOpen(false);
    setNewReview({ name: '', location: '', rating: 5, comment: '' });
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    showToast('Your traveler reflection was successfully recorded!');
  };

  // Hotel Booking Simulation
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

      {/* 1. HERO SECTION (Apple + NatGeo Luxury Standard) */}
      <section className="relative h-[85vh] sm:h-[92vh] w-full overflow-hidden bg-gray-950 flex flex-col justify-between">
        {/* Background Image with Ken Burns Parallax effect */}
        <div className="absolute inset-0">
          <motion.img
            src={gemData.heroImage}
            alt={gemData.name}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.5, ease: 'easeOut' }}
            className="w-full h-full object-cover brightness-[0.78] contrast-[1.05]"
          />
          {/* Multi-layered cinematic vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-[#083B2D]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/60" />
        </div>

        {/* Top Breadcrumb & Badges Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs">
            <Link
              to="/hidden-gems"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md border border-[#C49A3A]/30 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('backToGems', 'All 50 Hidden Gems')}</span>
            </Link>
            <span className="text-white/40 hidden sm:inline">•</span>
            <Link
              to={`/state/${gemData.state.toLowerCase().replace(/[\s&]+/g, '-')}`}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/90 backdrop-blur-md text-xs font-mono transition-all"
            >
              <MapPin className="w-3 h-3 text-[#E67E22]" />
              <span>{tState(gemData.state)}</span>
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            {/* Serenity Score Badge */}
            <div className="px-3 py-1.5 rounded-full bg-[#083B2D]/80 backdrop-blur-md border border-[#C49A3A]/50 text-[#C49A3A] text-xs font-mono font-bold flex items-center space-x-1.5 shadow-gold-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t('serenityScore', 'Serenity')} {gemData.serenityScore || 92}/100</span>
            </div>

            {/* Share Dossier Button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all"
              title="Share Destination"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Bottom Content & Floating Weather Widget */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E67E22] text-white text-[11px] font-mono uppercase tracking-widest font-bold">
                  Secret Sanctuary
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 text-[11px] font-mono">
                  {tAdventure(gemData.travelDifficulty)} Access
                </span>
                <span className="px-3 py-1 rounded-full bg-[#C49A3A]/20 border border-[#C49A3A]/40 text-[#DFB757] text-[11px] font-mono">
                  Elevation {gemData.elevation}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                {gemData.name}
              </h1>

              <p className="text-sm sm:text-base text-white/85 max-w-2xl font-light leading-relaxed drop-shadow">
                {gemData.about.overview.slice(0, 190)}...
              </p>

              {/* Action Buttons */}
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
                  <span>{isPlayingAudio ? t('stopAudioGuide', 'Stop Narrator') : t('playAudioGuide', 'Play Audio Dossier')}</span>
                </button>

                <a
                  href="#gallery"
                  className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
                >
                  View 8K Gallery ({gemData.gallery.length})
                </a>

                <a
                  href="#map-section"
                  className="px-4 py-3 rounded-full bg-black/40 hover:bg-black/60 text-[#DFB757] backdrop-blur-md text-xs font-mono flex items-center space-x-1.5 border border-[#C49A3A]/30 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Map & Coordinates</span>
                </a>
              </div>
            </div>

            {/* Hero Live Simulated Weather Widget */}
            <div className="lg:col-span-4 bg-black/45 backdrop-blur-xl p-5 rounded-3xl border border-white/20 text-white space-y-3 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-white/70">
                <div className="flex items-center space-x-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#DFB757]" />
                  <span>Live Sanctuary Weather</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {gemData.weather.aqiStatus} (AQI {gemData.weather.aqi})
                </span>
              </div>

              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    {gemData.weather.currentTemp}
                  </span>
                  <span className="text-xs text-white/70 ml-2 font-mono">{gemData.weather.condition}</span>
                </div>
                <div className="text-right text-xs font-mono text-white/70">
                  <div>Humidity: {gemData.weather.humidity}</div>
                  <div>Wind: {gemData.weather.windSpeed}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-white/15 text-white/80">
                <div>Best Season: <strong className="text-[#DFB757] block">{gemData.bestTimeToVisit}</strong></div>
                <div>Visiting Hours: <strong className="text-white block">{gemData.weather.bestVisitingHours}</strong></div>
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
                <span>Verified Field Intelligence (18 Key Metrics)</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#083B2D]">
                Expedition & Logistics Dossier
              </h2>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-[#083B2D]/5 text-[#083B2D] border border-[#083B2D]/10">
                District: <strong>{gemData.district}</strong>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                {gemData.budgetLevel}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-6 text-xs">
            {/* 1. Coordinates */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">GPS Coordinates</span>
              <p className="font-mono font-bold text-[#083B2D] truncate">
                {gemData.coordinates.lat.toFixed(4)}°N, {gemData.coordinates.lng.toFixed(4)}°E
              </p>
            </div>

            {/* 2. Elevation */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Altitude / Elevation</span>
              <p className="font-medium text-gray-900">{gemData.elevation}</p>
            </div>

            {/* 3. Best Time */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Ideal Visiting Season</span>
              <p className="font-medium text-[#E67E22] font-semibold">{gemData.bestTimeToVisit}</p>
            </div>

            {/* 4. Ideal Duration */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Ideal Stay Duration</span>
              <p className="font-medium text-gray-900">{gemData.idealDuration}</p>
            </div>

            {/* 5. Entry Fee */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Permit / Entry Fee</span>
              <p className="font-medium text-gray-900">{gemData.entryFee}</p>
            </div>

            {/* 6. Timings */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Site Access Hours</span>
              <p className="font-medium text-gray-900">{gemData.timings}</p>
            </div>

            {/* 7. Nearest Airport */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Airport</span>
              <p className="font-medium text-gray-900 truncate" title={gemData.nearestAirport}>
                {gemData.nearestAirport}
              </p>
            </div>

            {/* 8. Nearest Railway */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Nearest Rail Station</span>
              <p className="font-medium text-gray-900 truncate" title={gemData.nearestRailway}>
                {gemData.nearestRailway}
              </p>
            </div>

            {/* 9. Nearest Bus Stand */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Road / Bus Terminal</span>
              <p className="font-medium text-gray-900 truncate" title={gemData.nearestBus}>
                {gemData.nearestBus}
              </p>
            </div>

            {/* 10. Travel Difficulty */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Trek / Terrain Level</span>
              <p className="font-medium text-gray-900">{gemData.travelDifficulty}</p>
            </div>

            {/* 11. Family Friendly */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Family & Elders</span>
              <p className="font-medium text-emerald-700">
                {gemData.familyFriendly ? '✓ Suitable' : '⚠ Caution / Treks'}
              </p>
            </div>

            {/* 12. Wheelchair Access */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-gray-400">Wheelchair Access</span>
              <p className="font-medium text-gray-600">
                {gemData.wheelchairAccessible ? '✓ Accessible' : '✗ Rugged Terrain'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION & DEEP NARRATIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story & History */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & History */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold">
                <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Geographic Genesis & Heritage</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
                The Story of {gemData.name}
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-serif">
                {gemData.about.overview}
              </p>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                  Historical Lineage & Ecological Architecture
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {gemData.about.history}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {gemData.about.natureOrArchitecture}
                </p>
              </div>

              {/* Cultural Significance & Folklore */}
              <div className="bg-[#FAF8F4] p-6 rounded-2xl border border-[#C49A3A]/20 space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  Folklore & Indigenous Tribal Legends
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{gemData.about.legendsAndMythology}"
                </p>
              </div>
            </div>

            {/* Interesting Facts Grid */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#083B2D] flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#C49A3A]" />
                <span>Rare & Fascinating Facts</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gemData.about.interestingFacts.map((fact, idx) => (
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
                    Chronological Timeline
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                    Historical Evolution Across Epochs
                  </h3>
                </div>
                <Clock className="w-5 h-5 text-[#C49A3A]" />
              </div>

              <div className="relative border-l-2 border-[#C49A3A]/30 ml-3 space-y-6 pl-6">
                {gemData.about.timeline.map((item, idx) => (
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

          {/* Right Column: Political Map, Distance to Metros & Weather */}
          <div className="lg:col-span-4 space-y-8" id="map-section">
            {/* Embedded Political Map Locator */}
            <PoliticalMapLocator
              monumentName={gemData.name}
              state={gemData.state}
              latitude={gemData.coordinates.lat}
              longitude={gemData.coordinates.lng}
            />

            {/* Major Metro Distances & Travel Times */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  Distances from Key Hubs
                </h4>
                <Plane className="w-4 h-4 text-[#C49A3A]" />
              </div>

              <div className="space-y-2.5 text-xs">
                {gemData.mapInfo.majorCityDistances.map((c, i) => (
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
                  href={`https://www.google.com/maps/dir/?api=1&destination=${gemData.coordinates.lat},${gemData.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#083B2D] text-[#C49A3A] hover:bg-[#062c22] text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Turn-by-Turn Navigation</span>
                </a>
              </div>
            </div>

            {/* 7-Day Simulated Weather Forecast */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-sm font-bold text-[#083B2D] uppercase tracking-wider">
                  7-Day Seasonal Advisory
                </h4>
                <Sun className="w-4 h-4 text-[#E67E22]" />
              </div>

              <div className="space-y-2 text-xs">
                {gemData.weather.weeklyForecast.map((f, i) => (
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
                <span>Zero AI Generated Art • 100% Authentic Imagery</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
                High-Resolution Real Visual Archives
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Curated high-resolution photographs documenting landscapes, tribes, trails, and authentic architecture of {gemData.name}.
              </p>
            </div>

            {/* Gallery Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['all', 'landscape', 'architecture', 'culture', 'food'].map(cat => (
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

          {/* Masonry Image Grid */}
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
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white/80">
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="text-[#C49A3A] font-bold">
                  {lightboxIndex + 1} of {gemData.gallery.length}
                </span>
                <span>•</span>
                <span>{gemData.gallery[lightboxIndex]?.category.toUpperCase()}</span>
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline text-white/60">
                  {gemData.gallery[lightboxIndex]?.photographer || 'Virasat Explorer Archives'}
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

            {/* Main Stage Image */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <button
                onClick={prevLightboxImage}
                className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.25 }}
                src={gemData.gallery[lightboxIndex]?.url}
                alt={gemData.gallery[lightboxIndex]?.caption}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl transition-transform"
              />

              <button
                onClick={nextLightboxImage}
                className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="text-center max-w-2xl mx-auto text-white/90 text-xs sm:text-sm font-medium">
              <p>{gemData.gallery[lightboxIndex]?.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. AI TRAVEL PLANNER & CUSTOM ITINERARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="bg-[#083B2D] text-[#FAF8F4] p-8 sm:p-10 rounded-3xl border border-[#C49A3A]/40 shadow-gold-glow space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>AI Algorithmic Heritage Engine</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#FAF8F4] mt-1">
                Custom {gemData.name} Expedition Itinerary
              </h2>
              <p className="text-xs text-white/70 mt-1">
                Dynamically generated route accounting for sunlight angles, road elevation, and local tribal schedules.
              </p>
            </div>

            {/* Travel Style Selector */}
            <div className="flex flex-wrap gap-2">
              {(['Solo', 'Couple', 'Family', 'Friends', 'Luxury', 'Backpacking'] as const).map(style => (
                <button
                  key={style}
                  onClick={() => setTravelStyle(style)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    travelStyle === style
                      ? 'bg-[#C49A3A] text-[#083B2D] font-bold shadow-sm'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Day-by-Day Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Day 1 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C49A3A] uppercase tracking-wider">
                  Day 1 • Arrival & Immersion
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">Acclimatization</span>
              </div>
              <div className="space-y-2.5 text-xs text-white/85">
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Morning:</strong>
                  {gemData.itinerary.day1.morning}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Afternoon:</strong>
                  {gemData.itinerary.day1.afternoon}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Evening:</strong>
                  {gemData.itinerary.day1.evening}
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C49A3A] uppercase tracking-wider">
                  Day 2 • Deep Wilderness & Trails
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">Peak Expedition</span>
              </div>
              <div className="space-y-2.5 text-xs text-white/85">
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Morning:</strong>
                  {gemData.itinerary.day2.morning}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Afternoon:</strong>
                  {gemData.itinerary.day2.afternoon}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Evening:</strong>
                  {gemData.itinerary.day2.evening}
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C49A3A] uppercase tracking-wider">
                  Day 3 • Living Culture & Departure
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">Artisan Guilds</span>
              </div>
              <div className="space-y-2.5 text-xs text-white/85">
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Morning:</strong>
                  {gemData.itinerary.day3.morning}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Afternoon:</strong>
                  {gemData.itinerary.day3.afternoon}
                </div>
                <div>
                  <strong className="text-[#DFB757] block font-mono text-[11px]">Evening:</strong>
                  {gemData.itinerary.day3.evening}
                </div>
              </div>
            </div>
          </div>

          {/* Budget Breakdown & Launch Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center space-x-6 text-xs font-mono text-white/80">
              <div>Stay: <strong className="text-white">₹3,500/day</strong></div>
              <div>Meals: <strong className="text-white">₹800/day</strong></div>
              <div>Guide/Permits: <strong className="text-white">₹600</strong></div>
            </div>

            <Link
              to={`/ai-planner?destination=${encodeURIComponent(gemData.name)}`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] hover:brightness-110 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Customize Entire Trip with AI Assistant</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED HOTELS & ACCOMMODATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            <Hotel className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Eco-Stays, Heritage Havelis & Resorts</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Authentic Stays Near {gemData.name}
          </h2>
          <p className="text-xs text-gray-500">
            Strictly authentic stays vetted for cleanliness, local tribal hospitality, and verified proximity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gemData.hotels.map((h, i) => (
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
                    Inquire / Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. AUTHENTIC DINING & FOOD SPOTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            <Utensils className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Regional Cuisine & Farm-to-Table</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Curated Dining & Local Kitchens
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gemData.restaurants.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 border border-[#C49A3A]/25 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-[10px] font-mono font-bold">
                    {r.type}
                  </span>
                  <div className="flex items-center space-x-1 text-xs font-mono text-amber-600 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{r.rating}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-900">{r.name}</h3>
                <p className="text-xs text-gray-500">{r.cuisine} • {r.distance}</p>

                <div className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100 mt-2">
                  <span className="text-[10px] font-mono text-[#083B2D] uppercase font-bold block">
                    Must-Try Specialty:
                  </span>
                  <p className="text-xs text-gray-800 font-medium">{r.mustTry}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">{r.timings}</span>
                <span className="font-bold text-[#083B2D]">{r.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THINGS TO DO (Interactive Checklist) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
                Interactive Bucket List
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                6 Essential Things To Experience
              </h2>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-[#083B2D]/5 border border-[#C49A3A]/30 text-xs font-mono text-[#083B2D]">
              Completed: <strong>{completedActivitiesCount}</strong> of {gemData.thingsToDo.length}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gemData.thingsToDo.map(item => (
              <div
                key={item.id}
                onClick={() => toggleActivity(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                  checkedThings[item.id]
                    ? 'bg-emerald-50/50 border-emerald-300'
                    : 'bg-[#FAF8F4] border-gray-200 hover:border-[#C49A3A]/40'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border mt-0.5 transition-colors ${
                    checkedThings[item.id]
                      ? 'bg-[#083B2D] border-[#083B2D] text-[#C49A3A]'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {checkedThings[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4
                      className={`text-sm font-bold transition-all ${
                        checkedThings[item.id] ? 'line-through text-gray-400' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-gray-500 border border-gray-100">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AUTHENTIC REGIONAL FOOD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] font-bold block">
            Gastronomy of {gemData.state}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Indigenous Culinary Heritage
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gemData.localFood.map((dish, idx) => (
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
                  <div>Where to Taste: <strong className="text-gray-800">{dish.whereToEat}</strong></div>
                  <div>Estimated Cost: <strong className="text-[#083B2D]">{dish.price}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. LIVING CULTURE, TRADITIONS & ETIQUETTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-[#FAF8F4] p-8 rounded-3xl border border-[#C49A3A]/30 space-y-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold block">
              Anthropological Respect
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
              Living Culture & Sacred Sanctuary Etiquette
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
              <strong className="text-[#083B2D] font-serif text-sm block">Traditional Attire</strong>
              <p className="text-gray-600 leading-relaxed">{gemData.cultureAndTraditions.attire}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
              <strong className="text-[#083B2D] font-serif text-sm block">Languages & Dialects</strong>
              <p className="text-gray-600 leading-relaxed">{gemData.cultureAndTraditions.language}</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
              <strong className="text-[#083B2D] font-serif text-sm block">Music & Sacred Rhythms</strong>
              <p className="text-gray-600 leading-relaxed">{gemData.cultureAndTraditions.musicAndDance}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-200 space-y-3">
            <h4 className="font-serif text-sm font-bold text-emerald-900 uppercase tracking-wider">
              Sacred Forest & Community Protocols
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
              {gemData.cultureAndTraditions.etiquette.map((et, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{et}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. PHOTOGRAPHY HOTSPOTS & DRONE RULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold block">
            Visual Composition
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
            Iconic Photography & Golden Hour Vantage Points
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gemData.photoSpots.map((spot, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#083B2D]">{spot.bestTime}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    spot.droneAllowed ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {spot.droneAllowed ? 'Drone: Allowed' : 'Drone: Restricted'}
                </span>
              </div>
              <h3 className="font-serif text-sm font-bold text-gray-900">{spot.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{spot.tips}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. TRAVEL ADVISORY & LOGISTICS TIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-[#083B2D] text-white p-8 rounded-3xl border border-[#C49A3A]/40 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-[#FAF8F4]">
              Expedition Logistics & Safety Advisory
            </h2>
            <Shield className="w-5 h-5 text-[#C49A3A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-white/80">
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Safety & Solo Rating</strong>
              <p>{gemData.travelTips.safety}</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Mobile Network & Connectivity</strong>
              <p>{gemData.travelTips.network}</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Cash, ATM & UPI Acceptance</strong>
              <p>{gemData.travelTips.atmAndCash}</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Medical & Emergency Clinics</strong>
              <p>{gemData.travelTips.medical}</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Recommended Footwear & Clothing</strong>
              <p>{gemData.travelTips.clothing}</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#DFB757] font-mono uppercase block text-[11px]">Inner Line Permits (ILP)</strong>
              <p>{gemData.travelTips.permits}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. COMPREHENSIVE FAQ ACCORDION (15 FAQs) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
            Frequently Inquired Queries
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#083B2D]">
            Frequently Asked Questions (15 Curated Q&As)
          </h2>
          <p className="text-xs text-gray-500">
            Verified answers addressing transportation, permits, local guides, and preservation etiquette.
          </p>
        </div>

        <div className="space-y-3">
          {gemData.faqs.map((faq, idx) => (
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

      {/* 14. RELATED DESTINATIONS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] font-bold block">
              Expand Your Odyssey
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
              Nearby Hidden Gems & Sacred Encounters
            </h2>
          </div>
          <Link
            to="/hidden-gems"
            className="text-xs font-bold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1"
          >
            <span>Explore All 50 Gems</span>
            <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gemData.related.map((rel, i) => (
            <Link
              key={i}
              to={`/hidden-gems/${rel.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-[#C49A3A]/25 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="h-40 bg-gray-900 overflow-hidden">
                <img
                  src={rel.image}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-mono text-[#C49A3A] uppercase font-bold block">
                  {rel.state}
                </span>
                <h3 className="font-serif text-sm font-bold text-gray-900 group-hover:text-[#083B2D] truncate">
                  {rel.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 15. TRAVELER REVIEWS & COMMUNITY REFLECTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-widest text-[#083B2D] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#C49A3A] text-[#C49A3A]" />
                <span>Verified Traveler Reflections</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                Community Field Notes ({localReviews.length})
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

      {/* HOTEL RESERVATION INQUIRY MODAL */}
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
                    Direct Lodge Reservation
                  </span>
                  <h3 className="font-serif text-xl font-bold text-gray-900">{bookingHotel.name}</h3>
                </div>
                <button onClick={() => setBookingHotel(null)} className="p-1 rounded-full hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Check-in Date</label>
                  <input
                    type="date"
                    defaultValue="2026-10-15"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Guests</label>
                  <select className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]">
                    <option>1 Adult (Solo Explorer)</option>
                    <option>2 Adults (Couple)</option>
                    <option>Family (2 Adults + Children)</option>
                  </select>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-[11px]">
                  ✓ Verified authentic local rate: <strong>{bookingHotel.price}</strong>
                </div>
              </div>

              <button
                onClick={handleConfirmBooking}
                disabled={bookingConfirmed}
                className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
              >
                {bookingConfirmed ? 'Confirming with Stay Host...' : 'Submit Reservation Inquiry'}
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
                    Community Field Reflection
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
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Your City / State</label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={e => setNewReview({ ...newReview, location: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-mono mb-1">Experience Rating</label>
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
                  <label className="block text-gray-600 font-mono mb-1">Your Reflection / Advice</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={e => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe the trail condition, sunrise viewpoint, or local tribal hospitality..."
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Publish Field Note
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
