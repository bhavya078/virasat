import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Search,
  MapPin,
  Sparkles,
  Filter,
  ChevronRight,
  Compass,
  Shield,
  Award,
  Landmark,
  Layers,
  Star,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Volume2,
  VolumeX,
  Bot,
  Route,
  ArrowRight,
  ArrowLeft,
  X,
  Eye,
  CheckCircle2,
  Calendar,
  Flame,
  Sun,
  Moon,
  CloudSnow,
  CloudRain,
  Sliders,
  ExternalLink,
  Info
} from 'lucide-react';
import { STATES_DATA } from '../../data/statesData';
import { INDIA_REGIONS, INDIA_OUTER_BOUNDARY, type IndiaRegion, geoXY } from '../../data/indiaMapPaths';
import { MAP_HERITAGE_MARKERS, ODYSSEY_STOPS, type MapMarker, type OdysseyStop } from '../../data/mapOdysseyData';
import { useLanguage } from '../../context/LanguageContext';
import { heritageAudio } from '../../utils/audioService';

type FilterCategory = 'all' | 'unesco' | 'temple' | 'fort' | 'gem' | 'festival' | 'wildlife' | 'beach' | 'mountain' | 'cuisine';

export const InteractiveIndiaMap: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Selected State / Region
  const [activeRegion, setActiveRegion] = useState<IndiaRegion>(INDIA_REGIONS[8]); // Default Rajasthan
  const [hoveredRegion, setHoveredRegion] = useState<IndiaRegion | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Map Controls: Zoom & Pan
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax & Gyroscope
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(true);

  // Filter & Search
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedZone, setSelectedZone] = useState<string>('all');

  // Markers & Popups
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  // Visited States (Gamification / Tracker)
  const [visitedStates, setVisitedStates] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('virasat_visited_states');
      return saved ? JSON.parse(saved) : ['rajasthan', 'uttar-pradesh', 'karnataka'];
    } catch {
      return ['rajasthan', 'uttar-pradesh'];
    }
  });

  // Theme & Weather Atmosphere
  const [mapTheme, setMapTheme] = useState<'emerald' | 'ivory'>('emerald');
  const [weatherEffect, setWeatherEffect] = useState<'none' | 'snow' | 'rain' | 'aurora'>('none');

  // Storytelling Odyssey Mode
  const [isOdysseyMode, setIsOdysseyMode] = useState<boolean>(false);
  const [odysseyStep, setOdysseyStep] = useState<number>(0);
  const [isOdysseyPlaying, setIsOdysseyPlaying] = useState<boolean>(false);

  // AI Map Guide
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [aiPrompt, setAIPrompt] = useState<string>('');
  const [aiResponse, setAIResponse] = useState<string | null>(null);
  const [aiHighlightedStates, setAiHighlightedStates] = useState<string[]>([]);

  // Narration
  const [isNarrating, setIsNarrating] = useState<boolean>(false);

  // Synchronize visited states to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('virasat_visited_states', JSON.stringify(visitedStates));
    } catch {
      // ignore
    }
  }, [visitedStates]);

  // Handle Desktop Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3DEnabled || isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 4.5;
    const rotateX = -(y / (rect.height / 2)) * 4.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setHoveredRegion(null);
  };

  // Handle Mobile Gyroscope
  useEffect(() => {
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!is3DEnabled || e.beta === null || e.gamma === null) return;
      const rotateX = Math.max(-6, Math.min(6, (e.beta - 45) * 0.15));
      const rotateY = Math.max(-6, Math.min(6, e.gamma * 0.15));
      setTilt({ rotateX, rotateY });
    };

    window.addEventListener('deviceorientation', handleDeviceOrientation);
    return () => window.removeEventListener('deviceorientation', handleDeviceOrientation);
  }, [is3DEnabled]);

  // Pan controls
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 3.2));
    heritageAudio.playTempleBell();
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
    heritageAudio.playTempleBell();
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setSelectedMarker(null);
    heritageAudio.playTempleBell();
  };

  // Center on state on click
  const handleStateClick = (region: IndiaRegion) => {
    setActiveRegion(region);
    setSelectedMarker(null);
    heritageAudio.playTempleBell();

    // Center zoom view slightly on the state
    if (zoomLevel > 1) {
      setPanOffset({
        x: (290 - region.cx) * 0.6,
        y: (325 - region.cy) * 0.6
      });
    }
  };

  // Toggle visited state
  const toggleVisitedState = (stateId: string) => {
    setVisitedStates((prev) => {
      const exists = prev.includes(stateId);
      if (!exists) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C49A3A', '#DFB757', '#083B2D', '#2E7D32']
        });
        return [...prev, stateId];
      } else {
        return prev.filter((id) => id !== stateId);
      }
    });
    heritageAudio.playTempleBell();
  };

  // Storytelling Odyssey auto-play
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOdysseyMode && isOdysseyPlaying) {
      timer = setTimeout(() => {
        setOdysseyStep((prev) => (prev + 1) % ODYSSEY_STOPS.length);
      }, 5500);
    }
    return () => clearTimeout(timer);
  }, [isOdysseyMode, isOdysseyPlaying, odysseyStep]);

  // Sync Odyssey step with active region
  useEffect(() => {
    if (isOdysseyMode) {
      const currentStop = ODYSSEY_STOPS[odysseyStep];
      const matchingRegion = INDIA_REGIONS.find((r) => r.id === currentStop.stateId);
      if (matchingRegion) {
        setActiveRegion(matchingRegion);
      }
      heritageAudio.playTempleBell();
    }
  }, [isOdysseyMode, odysseyStep]);

  // AI Prompt handler
  const handleAISubmit = (promptText: string) => {
    const p = promptText.toLowerCase().trim();
    if (!p) return;

    heritageAudio.playTempleBell();

    if (p.includes('gujarat') || p.includes('gem')) {
      const guj = INDIA_REGIONS.find((r) => r.id === 'gujarat');
      if (guj) setActiveRegion(guj);
      setActiveFilter('gem');
      setAiHighlightedStates(['gujarat']);
      setAIResponse(
        'Revealing Hidden Gems in Gujarat: Rani ki Vav stepwell, Great Rann of Kutch white desert sanctuary, and Harappan metropolis of Dholavira.'
      );
    } else if (p.includes('karnataka') || p.includes('unesco')) {
      const kar = INDIA_REGIONS.find((r) => r.id === 'karnataka');
      if (kar) setActiveRegion(kar);
      setActiveFilter('unesco');
      setAiHighlightedStates(['karnataka']);
      setAIResponse(
        'Highlighting UNESCO World Heritage in Karnataka: The megalithic granite empire of Hampi, Pattadakal Badami Chalukya temples, and Sacred Ensembles of the Hoysalas.'
      );
    } else if (p.includes('rajasthan') || p.includes('trip') || p.includes('fort')) {
      const raj = INDIA_REGIONS.find((r) => r.id === 'rajasthan');
      if (raj) setActiveRegion(raj);
      setActiveFilter('fort');
      setAiHighlightedStates(['rajasthan']);
      setAIResponse(
        '3-Day Royal Rajasthan Itinerary Loaded: Day 1 Amer Fort & Pink City Jaipur, Day 2 Mehrangarh Fort Jodhpur, Day 3 Lake Pichola & City Palace Udaipur.'
      );
    } else if (p.includes('kerala') || p.includes('backwater') || p.includes('beach')) {
      const ker = INDIA_REGIONS.find((r) => r.id === 'kerala');
      if (ker) setActiveRegion(ker);
      setActiveFilter('beach');
      setAiHighlightedStates(['kerala']);
      setAIResponse(
        'God’s Own Country Selected: Explore Alleppey backwater houseboats, Munnar tea hills, and Fort Kochi colonial spice warehouses.'
      );
    } else if (p.includes('ladakh') || p.includes('mountain') || p.includes('snow')) {
      const lad = INDIA_REGIONS.find((r) => r.id === 'ladakh');
      if (lad) setActiveRegion(lad);
      setActiveFilter('mountain');
      setWeatherEffect('snow');
      setAiHighlightedStates(['ladakh']);
      setAIResponse(
        'Celestial Ladakh Realm: High-altitude Hemis Gompa, Pangong Tso turquoise lake, and scenic Khardung La Himalayan pass.'
      );
    } else {
      // General match
      const matched = INDIA_REGIONS.find((r) => p.includes(r.name.toLowerCase()) || p.includes(r.id));
      if (matched) {
        setActiveRegion(matched);
        setAiHighlightedStates([matched.id]);
        setAIResponse(`Displaying sovereign dossier and landmarks for ${matched.name} (${matched.capital}).`);
      } else {
        setAIResponse(
          'Scanning Bharat Sovereign Atlas: Found 50 UNESCO monuments, 50 untouched hidden gems, and 50 sacred festivals across all 36 regions.'
        );
      }
    }
  };

  // Filtered markers to display on map
  const visibleMarkers = useMemo(() => {
    if (activeFilter === 'all') return MAP_HERITAGE_MARKERS.slice(0, 8);
    return MAP_HERITAGE_MARKERS.filter((m) => m.category === activeFilter);
  }, [activeFilter]);

  // Autocomplete search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return INDIA_REGIONS.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.capital.toLowerCase().includes(q) ||
        r.topAttraction.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchQuery]);

  const selectedStateData = STATES_DATA[activeRegion.id] || STATES_DATA['rajasthan'];
  const currentOdyssey = ODYSSEY_STOPS[odysseyStep];

  return (
    <section
      id="interactive-map"
      className={`py-24 relative overflow-hidden transition-colors duration-700 select-none ${
        mapTheme === 'emerald' ? 'bg-[#042018] text-[#FAF8F4]' : 'bg-[#F7F4EC] text-[#111827]'
      }`}
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#C49A3A]/10 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#083B2D]/40 rounded-full filter blur-[140px] pointer-events-none" />

      {/* Atmospheric Cloud & Weather Overlay */}
      {weatherEffect === 'snow' && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse" />
      )}
      {weatherEffect === 'rain' && (
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(115deg,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em] shadow-gold-glow backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#C49A3A] animate-spin" style={{ animationDuration: '18s' }} />
            <span>Sovereign Political Cartographic Atlas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Official Interactive Map of Sovereign Bharat
          </h2>
          <p className="font-subheading text-base sm:text-lg opacity-80 italic">
            Complete political boundaries of all 28 States and 8 Union Territories with authentic geodetic coordinates, UNESCO sites, and royal state dossiers.
          </p>
        </div>

        {/* Top Control Bar: Search, Filters, Modes & Theme Toggle */}
        <div
          className={`p-4 sm:p-5 rounded-3xl border shadow-luxury backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-4 transition-colors ${
            mapTheme === 'emerald'
              ? 'bg-white/5 border-[#C49A3A]/30 text-white'
              : 'bg-white/80 border-gray-300 text-gray-900'
          }`}
        >
          {/* Spotlight In-Map Search */}
          <div className="relative w-full lg:w-80">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-[#C49A3A]" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 28 States & 8 UTs..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs transition-all outline-none border ${
                  mapTheme === 'emerald'
                    ? 'bg-black/40 border-[#C49A3A]/40 text-white placeholder-white/40 focus:border-[#DFB757]'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-[#C49A3A]'
                }`}
              />
            </div>

            {/* Autocomplete Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`absolute left-0 right-0 top-12 z-50 rounded-2xl p-2 shadow-2xl border backdrop-blur-2xl ${
                    mapTheme === 'emerald'
                      ? 'bg-[#05261D]/95 border-[#C49A3A]/40 text-white'
                      : 'bg-white/95 border-gray-200 text-gray-900'
                  }`}
                >
                  {searchSuggestions.map((sug) => (
                    <button
                      key={sug.id}
                      onClick={() => {
                        handleStateClick(sug);
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-left text-xs hover:bg-[#C49A3A]/20 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C49A3A]" />
                        <span className="font-semibold">{sug.name}</span>
                        <span className="text-[10px] opacity-60">({sug.capital})</span>
                      </div>
                      <ChevronRight className="w-3 h-3 text-[#C49A3A]" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Filters Bar */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full lg:w-auto pb-1 no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Regions' },
                { id: 'unesco', label: 'UNESCO Sites' },
                { id: 'temple', label: 'Sacred Temples' },
                { id: 'fort', label: 'Historic Forts' },
                { id: 'gem', label: 'Hidden Gems' },
                { id: 'festival', label: 'Festivals' },
                { id: 'mountain', label: 'Himalayas' },
                { id: 'beach', label: 'Coasts' }
              ] as { id: FilterCategory; label: string }[]
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap transition-all border ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold border-[#DFB757] shadow-gold-glow scale-105'
                    : mapTheme === 'emerald'
                    ? 'bg-white/5 border-white/15 text-white/80 hover:border-[#C49A3A]/50'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#C49A3A]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Quick Action Toggles: Odyssey Mode, AI Guide, Theme Switcher */}
          <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
            {/* Odyssey Mode Button */}
            <button
              onClick={() => {
                setIsOdysseyMode(!isOdysseyMode);
                heritageAudio.playTempleBell();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                isOdysseyMode
                  ? 'bg-[#E67E22] text-white border-[#E67E22] shadow-lg animate-pulse'
                  : mapTheme === 'emerald'
                  ? 'bg-white/10 text-white border-white/20 hover:border-white/40'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
              }`}
            >
              <Route className="w-3.5 h-3.5" />
              <span>{isOdysseyMode ? 'Odyssey Active' : 'Odyssey Tour'}</span>
            </button>

            {/* AI Guide Trigger */}
            <button
              onClick={() => {
                setIsAIOpen(!isAIOpen);
                heritageAudio.playTempleBell();
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                isAIOpen
                  ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] shadow-gold-glow'
                  : mapTheme === 'emerald'
                  ? 'bg-white/10 text-white border-white/20 hover:border-[#C49A3A]'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>AI Guide</span>
            </button>

            {/* Theme Toggle (Emerald vs Ivory) */}
            <button
              onClick={() => {
                setMapTheme(mapTheme === 'emerald' ? 'ivory' : 'emerald');
                heritageAudio.playTempleBell();
              }}
              className="p-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/15 transition-all text-xs"
              title="Toggle Day/Night View"
            >
              {mapTheme === 'emerald' ? <Sun className="w-3.5 h-3.5 text-[#DFB757]" /> : <Moon className="w-3.5 h-3.5 text-[#083B2D]" />}
            </button>
          </div>
        </div>

        {/* AI Prompt Drawer Banner (When active) */}
        <AnimatePresence>
          {isAIOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-5 rounded-3xl bg-gradient-to-r from-[#083B2D] to-[#042018] border border-[#C49A3A]/40 text-white shadow-luxury space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-[#C49A3A]" />
                  <span className="font-serif text-sm font-bold text-[#DFB757]">
                    Rishi AI Sovereign Map Assistant
                  </span>
                </div>
                <button onClick={() => setIsAIOpen(false)} className="text-white/60 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Preset prompt pills */}
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  'Show hidden gems in Gujarat',
                  'UNESCO sites in Karnataka',
                  '3-day Rajasthan trip',
                  'Kerala backwaters & spices',
                  'High mountain passes in Ladakh'
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      setAIPrompt(chip);
                      handleAISubmit(chip);
                    }}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#C49A3A]/30 border border-white/20 text-[11px] transition-all"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAIPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAISubmit(aiPrompt)}
                  placeholder="Ask Rishi AI to highlight destinations, suggest itineraries, or filter monuments..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-[#C49A3A]/40 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#DFB757]"
                />
                <button
                  onClick={() => handleAISubmit(aiPrompt)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Ask AI
                </button>
              </div>

              {aiResponse && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-[#FAF8F4]/90 flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-[#DFB757] flex-shrink-0 mt-0.5" />
                  <span>{aiResponse}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Odyssey Storytelling Banner (When Active) */}
        <AnimatePresence>
          {isOdysseyMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="p-5 rounded-3xl bg-gradient-to-r from-[#083B2D] via-[#05261D] to-[#041A14] border border-[#C49A3A]/50 text-white shadow-2xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#E67E22] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {currentOdyssey.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#DFB757]">
                      {currentOdyssey.title}
                    </h3>
                    <p className="text-xs text-white/70 italic">{currentOdyssey.subtitle}</p>
                  </div>
                </div>

                {/* Odyssey Stepper Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setOdysseyStep((prev) => (prev - 1 + ODYSSEY_STOPS.length) % ODYSSEY_STOPS.length);
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs"
                    title="Previous Stop"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOdysseyPlaying(!isOdysseyPlaying)}
                    className="px-3 py-1.5 rounded-xl bg-[#C49A3A] text-[#083B2D] font-bold text-xs uppercase"
                  >
                    {isOdysseyPlaying ? 'Pause Tour' : 'Play Tour'}
                  </button>
                  <button
                    onClick={() => {
                      setOdysseyStep((prev) => (prev + 1) % ODYSSEY_STOPS.length);
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs"
                    title="Next Stop"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsOdysseyMode(false)}
                    className="p-2 rounded-xl text-white/50 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs bg-white/5 p-3.5 rounded-2xl border border-white/10">
                <div className="md:col-span-2 space-y-1.5">
                  <p className="text-white/80 leading-relaxed">{currentOdyssey.narrative}</p>
                  <div className="flex flex-wrap gap-3 text-[11px] font-mono text-[#DFB757] pt-1">
                    <span>Dynasty: {currentOdyssey.dynasty}</span>
                    <span>•</span>
                    <span>Era: {currentOdyssey.century}</span>
                    <span>•</span>
                    <span>Signature: {currentOdyssey.mustSee}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-start md:items-end gap-2">
                  <button
                    onClick={() => {
                      heritageAudio.speakGuide(currentOdyssey.audioText);
                    }}
                    className="px-3 py-1.5 rounded-xl border border-[#C49A3A]/40 text-[#DFB757] text-[11px] font-bold flex items-center space-x-1.5 hover:bg-white/5"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen to Stop Lore</span>
                  </button>
                  <Link
                    to={currentOdyssey.routeLink}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] text-[11px] font-bold flex items-center space-x-1"
                  >
                    <span>Enter {currentOdyssey.state} Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Map Box & State Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main SVG Interactive Map Box */}
          <div
            ref={mapContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMoveCapture={handleContainerMouseMove}
            onMouseUp={handleMouseUp}
            className={`lg:col-span-8 rounded-3xl border p-4 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col items-center transition-all ${
              mapTheme === 'emerald'
                ? 'bg-black/35 border-[#C49A3A]/30 shadow-2xl'
                : 'bg-white/90 border-gray-300 shadow-xl'
            }`}
            style={{
              perspective: '1200px',
              cursor: isDragging ? 'grabbing' : zoomLevel > 1 ? 'grab' : 'default'
            }}
          >
            {/* Map Geodetic Header */}
            <div
              className={`w-full flex items-center justify-between text-[11px] font-mono pb-3 border-b ${
                mapTheme === 'emerald' ? 'border-white/10 text-white/50' : 'border-gray-200 text-gray-500'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Survey of India Projection • Sovereign Republic of India</span>
              </div>
              <div className="hidden sm:flex items-center space-x-3">
                <span>Lat: 6°44′N – 37°6′N</span>
                <span>•</span>
                <span>Lon: 68°7′E – 97°25′E</span>
              </div>
            </div>

            {/* Floating Zoom & Pan Control Widget */}
            <div className="absolute top-16 right-6 z-30 flex flex-col space-y-1.5 bg-black/60 p-1.5 rounded-2xl border border-white/20 backdrop-blur-md text-white shadow-xl">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-xl hover:bg-white/20 transition-all text-xs"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4 text-[#DFB757]" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-xl hover:bg-white/20 transition-all text-xs"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4 text-[#DFB757]" />
              </button>
              <button
                onClick={handleResetView}
                className="p-2 rounded-xl hover:bg-white/20 transition-all text-xs"
                title="Reset View"
              >
                <RotateCcw className="w-4 h-4 text-white/80" />
              </button>
              <div className="text-[9px] font-mono text-center text-[#C49A3A] pt-1 border-t border-white/10">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            {/* Animated Royal Compass in Map Corner */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:flex flex-col items-center">
              <div className="relative w-14 h-14 rounded-full border border-[#C49A3A]/40 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg">
                <span className="absolute top-1 text-[8px] font-mono font-bold text-[#DFB757]">N</span>
                <span className="absolute bottom-1 text-[8px] font-mono font-bold text-white/50">S</span>
                <span className="absolute right-1.5 text-[8px] font-mono font-bold text-white/50">E</span>
                <span className="absolute left-1.5 text-[8px] font-mono font-bold text-white/50">W</span>
                {/* Needle */}
                <div
                  className="w-1 h-7 bg-gradient-to-t from-transparent via-[#DFB757] to-[#E67E22] rounded-full transform"
                  style={{
                    transform: `rotate(${tilt.rotateY * 3}deg)`
                  }}
                />
              </div>
            </div>

            {/* 3D SVG Map Canvas with Parallax Tilt */}
            <motion.div
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              className="w-full relative flex items-center justify-center py-4"
            >
              <svg
                viewBox="0 0 580 650"
                className="w-full max-w-[550px] h-auto select-none filter drop-shadow-[0_0_35px_rgba(8,59,45,0.85)]"
                style={{
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: `${activeRegion.cx}px ${activeRegion.cy}px`,
                  transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                <defs>
                  {/* Subtle Grid Pattern for cartographic realism */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(196,154,58,0.06)" strokeWidth="0.5" />
                  </pattern>

                  {/* Selected State Gold-Emerald Gradient */}
                  <linearGradient id="selectedStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#083B2D" stopOpacity="0.95" />
                    <stop offset="60%" stopColor="#0D523F" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#C49A3A" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Visited State Green Gradient */}
                  <linearGradient id="visitedStateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#1B5E20" stopOpacity="0.95" />
                  </linearGradient>

                  {/* Marker Radar Pulse Filter */}
                  <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#DFB757" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C49A3A" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Coordinate Grid Background */}
                <rect width="580" height="650" fill="url(#grid)" />

                {/* Tropic of Cancer (23.5°N) Dotted Meridian */}
                <line
                  x1="25"
                  y1="295"
                  x2="555"
                  y2="295"
                  stroke="#E67E22"
                  strokeWidth="1"
                  strokeDasharray="5 4"
                  opacity="0.45"
                />
                <text x="30" y="290" fill="#E67E22" fontSize="8.5px" fontFamily="monospace" opacity="0.8">
                  Tropic of Cancer (23.5° N)
                </text>

                {/* Indian Standard Meridian (82.5°E) */}
                <line
                  x1="328"
                  y1="25"
                  x2="328"
                  y2="625"
                  stroke="#C49A3A"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />
                <text x="332" y="620" fill="#C49A3A" fontSize="8.5px" fontFamily="monospace" opacity="0.7">
                  Standard Meridian (82.5° E)
                </text>

                {/* Sovereign Outer Boundary Contour */}
                <path
                  d={INDIA_OUTER_BOUNDARY}
                  fill="rgba(8, 59, 45, 0.25)"
                  stroke="#C49A3A"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_20px_rgba(196,154,58,0.35)]"
                />

                {/* 36 Constituent States and Union Territories */}
                {INDIA_REGIONS.map((region) => {
                  const isSelected = activeRegion.id === region.id;
                  const isHovered = hoveredRegion?.id === region.id;
                  const isVisited = visitedStates.includes(region.id);
                  const isAIHighlighted = aiHighlightedStates.includes(region.id);

                  // Colors according to user specification
                  // Default: Stone Beige (#F5F1E8)
                  // Hover: Royal Gold (#C49A3A)
                  // Selected: Deep Emerald (#083B2D)
                  // Visited: Soft Green (#2E7D32)
                  let fill = '#F5F1E8';
                  if (mapTheme === 'emerald') {
                    fill = 'rgba(245, 241, 232, 0.12)';
                  }

                  if (isVisited) {
                    fill = 'url(#visitedStateGradient)';
                  }
                  if (isSelected) {
                    fill = 'url(#selectedStateGradient)';
                  }
                  if (isAIHighlighted) {
                    fill = 'rgba(230, 126, 34, 0.75)';
                  }

                  return (
                    <g
                      key={region.id}
                      id={`state-${region.id}`}
                      onClick={() => handleStateClick(region)}
                      onMouseEnter={(e) => {
                        setHoveredRegion(region);
                        const rect = mapContainerRef.current?.getBoundingClientRect();
                        if (rect) {
                          setTooltipPos({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top
                          });
                        }
                      }}
                      className="cursor-pointer transition-all duration-300 group"
                    >
                      {/* State Polygon Shape */}
                      <path
                        d={region.path}
                        fill={fill}
                        stroke={
                          isSelected
                            ? '#DFB757'
                            : isHovered
                            ? '#C49A3A'
                            : isVisited
                            ? '#A3E635'
                            : mapTheme === 'emerald'
                            ? 'rgba(255,255,255,0.25)'
                            : '#FFFFFF'
                        }
                        strokeWidth={isSelected ? '2.5' : isHovered ? '2' : '1'}
                        strokeLinejoin="round"
                        className="transition-all duration-200 hover:brightness-125 filter"
                        style={{
                          filter: isHovered
                            ? 'drop-shadow(0 0 10px rgba(196,154,58,0.85))'
                            : isSelected
                            ? 'drop-shadow(0 0 14px rgba(8,59,45,0.9))'
                            : 'none'
                        }}
                      />

                      {/* State Capital Star Node */}
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={isSelected ? 5.5 : 3.5}
                        fill={isSelected ? '#DFB757' : isHovered ? '#FFFFFF' : '#C49A3A'}
                        stroke="#083B2D"
                        strokeWidth="1.2"
                        className="transition-all"
                      />

                      {/* State Name Label on Map */}
                      <text
                        x={region.labelX || region.cx}
                        y={(region.labelY || region.cy) + 12}
                        textAnchor="middle"
                        fill={isSelected ? '#DFB757' : isHovered ? '#FFFFFF' : mapTheme === 'emerald' ? '#FAF8F4' : '#111827'}
                        fontSize={isSelected ? '10px' : '8.5px'}
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="serif"
                        className="pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] opacity-95 transition-all"
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}

                {/* Animated Storytelling Flight Path (In Odyssey Mode) */}
                {isOdysseyMode && (
                  <g className="pointer-events-none">
                    {ODYSSEY_STOPS.map((stop, i) => {
                      if (i === 0) return null;
                      const prev = ODYSSEY_STOPS[i - 1];
                      return (
                        <path
                          key={`odyssey-path-${stop.id}`}
                          d={`M ${prev.x} ${prev.y} Q ${(prev.x + stop.x) / 2 - 20} ${(prev.y + stop.y) / 2 - 20} ${stop.x} ${stop.y}`}
                          fill="none"
                          stroke="#E67E22"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                          opacity={i <= odysseyStep ? 0.9 : 0.25}
                        />
                      );
                    })}

                    {/* Beacon on current stop */}
                    <circle
                      cx={currentOdyssey.x}
                      cy={currentOdyssey.y}
                      r="16"
                      fill="url(#markerGlow)"
                      className="animate-ping"
                    />
                    <circle
                      cx={currentOdyssey.x}
                      cy={currentOdyssey.y}
                      r="6"
                      fill="#E67E22"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </g>
                )}

                {/* Filter Markers (UNESCO, Temples, Forts, Gems, Festivals) */}
                {visibleMarkers.map((marker) => (
                  <g
                    key={marker.id}
                    transform={`translate(${marker.x}, ${marker.y})`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMarker(marker);
                      heritageAudio.playTempleBell();
                    }}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring */}
                    <circle r="12" fill="url(#markerGlow)" className="animate-pulse" />
                    <circle
                      r="5.5"
                      fill="#DFB757"
                      stroke="#083B2D"
                      strokeWidth="1.5"
                      className="group-hover:scale-125 transition-transform"
                    />
                    {/* Small category indicator */}
                    <text
                      y="-8"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="7.5px"
                      fontWeight="bold"
                      className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] pointer-events-none"
                    >
                      {marker.name.slice(0, 10)}
                    </text>
                  </g>
                ))}
              </svg>
            </motion.div>

            {/* Selected Marker Popup Card */}
            <AnimatePresence>
              {selectedMarker && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 p-4 rounded-3xl bg-black/85 text-white border border-[#C49A3A] shadow-2xl backdrop-blur-xl z-40 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#C49A3A] text-[#083B2D] text-[10px] font-mono font-bold uppercase">
                        {selectedMarker.category}
                      </span>
                      <span className="text-[11px] text-[#DFB757] font-mono">{selectedMarker.state}</span>
                    </div>
                    <button onClick={() => setSelectedMarker(null)} className="text-white/60 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex space-x-3 items-center">
                    <img
                      src={selectedMarker.image}
                      alt={selectedMarker.name}
                      className="w-16 h-16 rounded-xl object-cover border border-white/20"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white leading-tight">
                        {selectedMarker.name}
                      </h4>
                      {selectedMarker.hindiName && (
                        <span className="text-[11px] text-[#C49A3A] font-serif block">
                          {selectedMarker.hindiName}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {selectedMarker.description}
                  </p>

                  <Link
                    to={selectedMarker.link}
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs uppercase flex items-center justify-center space-x-1.5 hover:brightness-110 transition-all"
                  >
                    <span>Inspect Landmark Experience</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Tooltip Floating Card */}
            <AnimatePresence>
              {hoveredRegion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    position: 'absolute',
                    left: `${Math.min(tooltipPos.x + 15, 340)}px`,
                    top: `${Math.max(tooltipPos.y - 120, 20)}px`,
                    pointerEvents: 'none'
                  }}
                  className="z-50 p-4 rounded-2xl bg-black/90 text-white border border-[#C49A3A]/70 shadow-2xl backdrop-blur-xl w-60 space-y-2"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="font-serif text-sm font-bold text-[#DFB757]">
                      {hoveredRegion.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#C49A3A]">
                      {hoveredRegion.isUT ? 'Union Territory' : 'State'}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] font-mono text-white/80">
                    <div className="flex justify-between">
                      <span className="text-white/50">Capital:</span>
                      <strong>{hoveredRegion.capital}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Top Wonder:</span>
                      <strong className="text-[#C49A3A] truncate max-w-[130px]">
                        {hoveredRegion.topAttraction}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">UNESCO Sites:</span>
                      <strong>{hoveredRegion.unescoCount}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Status:</span>
                      <strong className={visitedStates.includes(hoveredRegion.id) ? 'text-green-400' : 'text-gray-400'}>
                        {visitedStates.includes(hoveredRegion.id) ? '✓ Visited' : 'Unexplored'}
                      </strong>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Cartographic Legend */}
            <div
              className={`w-full pt-4 border-t flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono ${
                mapTheme === 'emerald' ? 'border-white/10 text-white/70' : 'border-gray-200 text-gray-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-[#083B2D] border border-[#DFB757] inline-block" />
                <span>Selected State</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-[#2E7D32] border border-[#A3E635] inline-block" />
                <span>Marked Visited</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DFB757] inline-block animate-pulse" />
                <span>Heritage Marker</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-0.5 border-t border-dashed border-[#E67E22] inline-block" />
                <span>Tropic of Cancer (23.5°N)</span>
              </div>
            </div>
          </div>

          {/* Right Column: State Dossier Hero Drawer */}
          <div
            className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 border shadow-luxury space-y-5 transition-colors ${
              mapTheme === 'emerald'
                ? 'bg-white text-[#111827] border-[#C49A3A]/40'
                : 'bg-white text-[#111827] border-gray-300 shadow-xl'
            }`}
          >
            {/* Top State Badge & Visited Button */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#083B2D] text-[#C49A3A] text-xs font-mono font-bold uppercase tracking-wider">
                {activeRegion.zone} India Zone
              </span>

              <button
                onClick={() => toggleVisitedState(activeRegion.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center space-x-1.5 transition-all border ${
                  visitedStates.includes(activeRegion.id)
                    ? 'bg-[#2E7D32] text-white border-[#2E7D32]'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-[#2E7D32]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{visitedStates.includes(activeRegion.id) ? 'Visited' : 'Mark Visited'}</span>
              </button>
            </div>

            {/* State Title & Administrative Capital */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#083B2D] leading-tight">
                {activeRegion.name}
              </h3>
              <p className="text-xs text-gray-600 font-mono mt-1 flex items-center space-x-1.5">
                <Star className="w-3.5 h-3.5 text-[#C49A3A] fill-[#C49A3A]" />
                <span>Administrative Capital: <strong>{activeRegion.capital}</strong></span>
              </p>
            </div>

            {/* State Photo Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-sm group">
              <img
                src={selectedStateData.heroImage}
                alt={activeRegion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#DFB757] block">
                  Signature Crown Wonder:
                </span>
                <span className="font-serif text-sm font-bold block truncate">
                  {activeRegion.topAttraction}
                </span>
              </div>
            </div>

            {/* Narrative Overview */}
            <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
              {selectedStateData.description}
            </p>

            {/* Key State Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-gray-200">
                <span className="text-[10px] text-gray-500 block">Monuments</span>
                <strong className="text-sm font-bold text-[#083B2D]">{selectedStateData.heritageCount}</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-gray-200">
                <span className="text-[10px] text-gray-500 block">Festivals</span>
                <strong className="text-sm font-bold text-[#C49A3A]">{selectedStateData.festivalsCount}</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-[#FAF8F4] border border-gray-200">
                <span className="text-[10px] text-gray-500 block">UNESCO</span>
                <strong className="text-sm font-bold text-[#E67E22]">{activeRegion.unescoCount}</strong>
              </div>
            </div>

            {/* Languages, Best Season, Population */}
            <div className="space-y-1.5 text-xs bg-[#FAF8F4] p-3 rounded-2xl border border-gray-200 font-mono">
              <div className="flex justify-between text-gray-600">
                <span>Population:</span>
                <strong className="text-gray-900">{selectedStateData.population}</strong>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Languages:</span>
                <strong className="text-gray-900 truncate max-w-[170px] text-right">
                  {selectedStateData.languages.slice(0, 3).join(', ')}
                </strong>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Best Season:</span>
                <strong className="text-[#083B2D]">{selectedStateData.weather.bestSeason}</strong>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-1">
              {/* Direct route to /state/:slug */}
              <button
                onClick={() => {
                  heritageAudio.playTempleBell();
                  navigate(`/state/${activeRegion.id}`);
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#083B2D] to-[#0D523F] text-[#DFB757] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110 transition-all"
              >
                <span>Enter {activeRegion.name} Sovereign Portal</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Sub-actions: AI Planner & Audio Brief */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    navigate('/ai-planner');
                  }}
                  className="py-2.5 rounded-xl border border-gray-200 text-gray-800 font-semibold text-xs hover:border-[#C49A3A] transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
                  <span>AI Trip Plan</span>
                </button>

                <button
                  onClick={() => {
                    heritageAudio.speakGuide(
                      `${activeRegion.name}. Capital: ${activeRegion.capital}. ${selectedStateData.description}`
                    );
                  }}
                  className="py-2.5 rounded-xl border border-gray-200 text-gray-800 font-semibold text-xs hover:border-[#C49A3A] transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#083B2D]" />
                  <span>Audio Brief</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
