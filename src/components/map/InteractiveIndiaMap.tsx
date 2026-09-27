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
  Bot,
  Route,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Calendar,
  Flame,
  Sun,
  Moon,
  ExternalLink,
  Eye,
  Sliders,
  Image as ImageIcon
} from 'lucide-react';
import { STATES_DATA } from '../../data/statesData';
import { INDIA_REGIONS, type IndiaRegion, geoXY, INDIA_OUTER_BOUNDARY } from '../../data/indiaMapPaths';
import { ODYSSEY_STOPS } from '../../data/mapOdysseyData';
import { useLanguage } from '../../context/LanguageContext';
import { heritageAudio } from '../../utils/audioService';

// Authentic Devanagari script names for all states and UTs
const STATE_HINDI_NAMES: Record<string, string> = {
  'ladakh': 'लद्दाख',
  'jammu-kashmir': 'जम्मू और कश्मीर',
  'himachal-pradesh': 'हिमाचल प्रदेश',
  'punjab': 'पंजाब',
  'chandigarh': 'चंडीगढ़',
  'uttarakhand': 'उत्तराखंड',
  'haryana': 'हरियाणा',
  'delhi': 'दिल्ली',
  'rajasthan': 'राजस्थान',
  'gujarat': 'गुजरात',
  'dadra-nagar-haveli-daman-diu': 'दादरा और नगर हवेली',
  'uttar-pradesh': 'उत्तर प्रदेश',
  'madhya-pradesh': 'मध्य प्रदेश',
  'chhattisgarh': 'छत्तीसगढ़',
  'bihar': 'बिहार',
  'jharkhand': 'झारखंड',
  'odisha': 'ओडिशा',
  'west-bengal': 'पश्चिम बंगाल',
  'sikkim': 'सिक्किम',
  'assam': 'असम',
  'arunachal-pradesh': 'अरुणाचल प्रदेश',
  'nagaland': 'नागालैंड',
  'manipur': 'मणिपुर',
  'mizoram': 'मिज़ोरम',
  'tripura': 'त्रिपुरा',
  'meghalaya': 'मेघालय',
  'maharashtra': 'महाराष्ट्र',
  'goa': 'गोवा',
  'karnataka': 'कर्नाटक',
  'telangana': 'तेलंगाना',
  'andhra-pradesh': 'आंध्र प्रदेश',
  'tamil-nadu': 'तमिलनाडु',
  'kerala': 'केरल',
  'puducherry': 'पुडुचेरी',
  'lakshadweep': 'लक्षद्वीप',
  'andaman-nicobar': 'अंडमान और निकोबार द्वीप'
};

type FilterCategory = 'all' | 'unesco' | 'temple' | 'fort' | 'palace' | 'museum' | 'beach' | 'gem' | 'festival' | 'cuisine';

// State-to-Filter Mapping for dynamic highlighting on the uploaded map
const FILTER_STATE_MAP: Record<FilterCategory, string[]> = {
  all: [],
  unesco: [
    'rajasthan', 'uttar-pradesh', 'maharashtra', 'karnataka', 'tamil-nadu',
    'madhya-pradesh', 'gujarat', 'west-bengal', 'odisha', 'bihar', 'assam',
    'delhi', 'goa', 'ladakh', 'himachal-pradesh', 'chandigarh', 'sikkim'
  ],
  temple: [
    'uttar-pradesh', 'tamil-nadu', 'karnataka', 'odisha', 'punjab',
    'uttarakhand', 'gujarat', 'maharashtra', 'madhya-pradesh', 'andhra-pradesh',
    'kerala', 'bihar', 'himachal-pradesh'
  ],
  fort: [
    'rajasthan', 'maharashtra', 'madhya-pradesh', 'delhi', 'telangana',
    'karnataka', 'andhra-pradesh', 'punjab', 'gujarat'
  ],
  palace: [
    'rajasthan', 'karnataka', 'telangana', 'west-bengal', 'gujarat',
    'kerala', 'madhya-pradesh', 'punjab'
  ],
  museum: [
    'delhi', 'west-bengal', 'maharashtra', 'tamil-nadu', 'telangana',
    'karnataka', 'rajasthan'
  ],
  beach: [
    'goa', 'kerala', 'tamil-nadu', 'andhra-pradesh', 'odisha', 'maharashtra',
    'karnataka', 'gujarat', 'andaman-nicobar', 'lakshadweep', 'puducherry',
    'dadra-nagar-haveli-daman-diu'
  ],
  gem: [
    'meghalaya', 'andhra-pradesh', 'arunachal-pradesh', 'manipur', 'uttarakhand',
    'tamil-nadu', 'assam', 'karnataka', 'mizoram', 'nagaland', 'ladakh',
    'sikkim', 'chhattisgarh', 'tripura'
  ],
  festival: [
    'rajasthan', 'nagaland', 'west-bengal', 'uttar-pradesh', 'kerala',
    'ladakh', 'gujarat', 'assam', 'punjab', 'goa', 'odisha', 'maharashtra'
  ],
  cuisine: [
    'rajasthan', 'uttar-pradesh', 'punjab', 'kerala', 'west-bengal',
    'tamil-nadu', 'gujarat', 'maharashtra', 'telangana', 'bihar', 'goa'
  ]
};

export const InteractiveIndiaMap: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Active Selected State
  const [activeRegion, setActiveRegion] = useState<IndiaRegion>(() => {
    return INDIA_REGIONS.find((r) => r.slug === 'rajasthan') || INDIA_REGIONS[0];
  });
  const [hoveredRegion, setHoveredRegion] = useState<IndiaRegion | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Sovereign National Border Display Toggle
  const [showNationalBorder, setShowNationalBorder] = useState<boolean>(true);
  const lastHoveredSlugRef = useRef<string | null>(null);

  // Soft haptic audio chime on state hover
  const playHoverChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5 note
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05); // A5 note
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      }
    } catch {
      // Audio context before user gesture ignored safely
    }
  };

  // Map Camera: Zoom & Pan
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // 3D Parallax Tilt
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(true);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  // Visited States (Gamified Tracker)
  const [visitedStates, setVisitedStates] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('virasat_visited_states');
      return saved ? JSON.parse(saved) : ['rajasthan', 'uttar-pradesh', 'karnataka'];
    } catch {
      return ['rajasthan', 'uttar-pradesh'];
    }
  });

  // Storytelling Odyssey Mode
  const [isOdysseyMode, setIsOdysseyMode] = useState<boolean>(false);
  const [odysseyStep, setOdysseyStep] = useState<number>(0);
  const [isOdysseyPlaying, setIsOdysseyPlaying] = useState<boolean>(false);

  // AI Assistant Drawer
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);
  const [aiPrompt, setAIPrompt] = useState<string>('');
  const [aiResponse, setAIResponse] = useState<string | null>(null);
  const [aiHighlightedStates, setAiHighlightedStates] = useState<string[]>([]);

  // Persist visited states
  useEffect(() => {
    try {
      localStorage.setItem('virasat_visited_states', JSON.stringify(visitedStates));
    } catch {
      // ignore
    }
  }, [visitedStates]);

  // Desktop Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3DEnabled || isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 3.5;
    const rotateX = -(y / (rect.height / 2)) * 3.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setHoveredRegion(null);
  };

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
    heritageAudio.playTempleBell();
  };

  // State Click Behavior: Zoom smoothly toward state and highlight its outline
  const handleStateClick = (region: IndiaRegion) => {
    setActiveRegion(region);
    heritageAudio.playTempleBell();

    // Smoothly scale and center camera on the clicked state
    setZoomLevel(1.6);
    setPanOffset({
      x: (384 - region.cx) * 0.85,
      y: (384 - region.cy) * 0.85
    });
  };

  // Direct double click or portal enter
  const handleNavigateToState = (slug: string) => {
    heritageAudio.playTempleBell();
    // Route directly to /states/{slug}
    navigate(`/states/${slug}`);
  };

  // Toggle visited state
  const toggleVisitedState = (slug: string) => {
    setVisitedStates((prev) => {
      const exists = prev.includes(slug);
      if (!exists) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C49A3A', '#DFB757', '#083B2D', '#2E7D32']
        });
        return [...prev, slug];
      } else {
        return prev.filter((id) => id !== slug);
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

  // Sync Odyssey step with active region & camera
  useEffect(() => {
    if (isOdysseyMode) {
      const currentStop = ODYSSEY_STOPS[odysseyStep];
      const matchingRegion = INDIA_REGIONS.find((r) => r.slug === currentStop.stateId || r.id === currentStop.stateId);
      if (matchingRegion) {
        setActiveRegion(matchingRegion);
        setZoomLevel(1.45);
        setPanOffset({
          x: (384 - matchingRegion.cx) * 0.8,
          y: (384 - matchingRegion.cy) * 0.8
        });
      }
      heritageAudio.playTempleBell();
    }
  }, [isOdysseyMode, odysseyStep]);

  // AI Prompt Interpreter
  const handleAISubmit = (promptText: string) => {
    const p = promptText.toLowerCase().trim();
    if (!p) return;

    heritageAudio.playTempleBell();

    if (p.includes('gujarat') || p.includes('gem')) {
      const guj = INDIA_REGIONS.find((r) => r.slug === 'gujarat');
      if (guj) handleStateClick(guj);
      setActiveFilter('gem');
      setAiHighlightedStates(['gujarat']);
      setAIResponse(
        'Revealing Hidden Gems in Gujarat: Rani ki Vav stepwell, Great Rann of Kutch white desert sanctuary, and Harappan metropolis of Dholavira.'
      );
    } else if (p.includes('karnataka') || p.includes('unesco')) {
      const kar = INDIA_REGIONS.find((r) => r.slug === 'karnataka');
      if (kar) handleStateClick(kar);
      setActiveFilter('unesco');
      setAiHighlightedStates(['karnataka']);
      setAIResponse(
        'Highlighting UNESCO World Heritage in Karnataka: Megalithic granite ruins of Hampi, Pattadakal Badami Chalukya temples, and Sacred Ensembles of the Hoysalas.'
      );
    } else if (p.includes('rajasthan') || p.includes('trip') || p.includes('fort')) {
      const raj = INDIA_REGIONS.find((r) => r.slug === 'rajasthan');
      if (raj) handleStateClick(raj);
      setActiveFilter('fort');
      setAiHighlightedStates(['rajasthan']);
      setAIResponse(
        '3-Day Royal Rajasthan Itinerary: Day 1 Amer Fort & Pink City Jaipur, Day 2 Mehrangarh Fort Jodhpur, Day 3 Lake Pichola & City Palace Udaipur.'
      );
    } else if (p.includes('kerala') || p.includes('beach') || p.includes('backwater')) {
      const ker = INDIA_REGIONS.find((r) => r.slug === 'kerala');
      if (ker) handleStateClick(ker);
      setActiveFilter('beach');
      setAiHighlightedStates(['kerala']);
      setAIResponse(
        'God’s Own Country Selected: Alleppey backwater houseboats, Munnar tea hills, and Fort Kochi spice warehouses.'
      );
    } else if (p.includes('ladakh') || p.includes('mountain') || p.includes('snow')) {
      const lad = INDIA_REGIONS.find((r) => r.slug === 'ladakh');
      if (lad) handleStateClick(lad);
      setAiHighlightedStates(['ladakh']);
      setAIResponse(
        'Celestial Ladakh Realm: High-altitude Hemis Gompa, Pangong Tso turquoise lake, and Khardung La Himalayan pass.'
      );
    } else {
      const matched = INDIA_REGIONS.find((r) => p.includes(r.name.toLowerCase()) || p.includes(r.slug));
      if (matched) {
        handleStateClick(matched);
        setAiHighlightedStates([matched.slug]);
        setAIResponse(`Displaying sovereign dossier and landmarks for ${matched.name} (${matched.capital}).`);
      } else {
        setAIResponse(
          'Scanning Bharat Sovereign Atlas: Found 50 UNESCO monuments, 50 untouched hidden gems, and 50 sacred festivals across all 36 regions.'
        );
      }
    }
  };

  // Autocomplete search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return INDIA_REGIONS.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.capital.toLowerCase().includes(q) ||
        r.slug.toLowerCase().includes(q) ||
        r.stateId.toLowerCase() === q
    ).slice(0, 6);
  }, [searchQuery]);

  // Real data for selected state
  const selectedStateData = STATES_DATA[activeRegion.slug] || STATES_DATA[activeRegion.id] || STATES_DATA['rajasthan'];
  const currentOdyssey = ODYSSEY_STOPS[odysseyStep];

  // Active filter matched states
  const filteredStateSlugs = useMemo(() => {
    if (activeFilter === 'all') return [];
    return FILTER_STATE_MAP[activeFilter] || [];
  }, [activeFilter]);

  return (
    <section
      id="interactive-map"
      className="py-24 relative overflow-hidden bg-[#05261D] text-[#FAF8F4] select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#C49A3A]/10 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#083B2D]/50 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em] shadow-gold-glow backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#C49A3A] animate-spin" style={{ animationDuration: '18s' }} />
            <span>Official Political Cartographic Map</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F4]">
            Official Interactive Map of Sovereign Bharat
          </h2>
          <p className="font-subheading text-base sm:text-lg text-[#FAF8F4]/80 italic">
            Exact geographical political boundaries of all 28 States and 8 Union Territories with verified capitals, UNESCO monuments, and state dossiers.
          </p>
        </div>

        {/* Top Control Bar: Search, Filters & Action Toggles */}
        <div className="bg-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-[#C49A3A]/30 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
          {/* Spotlight In-Map Search */}
          <div className="relative w-full lg:w-80">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3.5 text-[#C49A3A]" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const q = e.target.value.toLowerCase().trim();
                  const exactMatch = INDIA_REGIONS.find((r) => r.name.toLowerCase() === q || r.slug === q || r.stateId.toLowerCase() === q);
                  if (exactMatch) {
                    handleStateClick(exactMatch);
                  }
                }}
                placeholder="Search State (e.g. Gujarat, RJ, Delhi)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs bg-black/40 border border-[#C49A3A]/40 text-white placeholder-white/40 focus:outline-none focus:border-[#DFB757] transition-all"
              />
            </div>

            {/* Autocomplete Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchSuggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute left-0 right-0 top-12 z-50 rounded-2xl p-2 shadow-2xl border border-[#C49A3A]/40 bg-[#05261D]/95 text-white backdrop-blur-2xl"
                >
                  {searchSuggestions.map((sug) => (
                    <button
                      key={sug.slug}
                      onClick={() => {
                        handleStateClick(sug);
                        setSearchQuery('');
                        setIsSearchFocused(false);
                      }}
                      className="w-full px-3 py-2 rounded-xl text-left text-xs hover:bg-[#C49A3A]/20 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-5 rounded bg-white/10 text-[#C49A3A] font-mono text-[10px] flex items-center justify-center font-bold">
                          {sug.stateId}
                        </span>
                        <span className="font-semibold">{sug.name}</span>
                        <span className="text-[10px] text-white/50">({sug.capital})</span>
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
                { id: 'palace', label: 'Palaces' },
                { id: 'gem', label: 'Hidden Gems' },
                { id: 'beach', label: 'Beaches & Coasts' },
                { id: 'festival', label: 'Festivals' },
                { id: 'cuisine', label: 'Royal Cuisine' }
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
                    : 'bg-white/5 border-white/15 text-white/80 hover:border-[#C49A3A]/50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Quick Action Toggles: 3D Tilt, Odyssey Tour & AI Assistant */}
          <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
            {/* 3D Motion Toggle */}
            <button
              onClick={() => setIs3DEnabled(!is3DEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                is3DEnabled ? 'bg-white/10 text-[#DFB757] border-[#C49A3A]/40' : 'bg-transparent text-white/50 border-white/10'
              }`}
              title="Toggle 3D Parallax Tilt"
            >
              3D Tilt: {is3DEnabled ? 'ON' : 'OFF'}
            </button>

            {/* Odyssey Mode Button */}
            <button
              onClick={() => {
                setIsOdysseyMode(!isOdysseyMode);
                heritageAudio.playTempleBell();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                isOdysseyMode
                  ? 'bg-[#E67E22] text-white border-[#E67E22] shadow-lg animate-pulse'
                  : 'bg-white/10 text-white border-white/20 hover:border-white/40'
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
              className={`p-2 rounded-xl border border-white/20 transition-all ${
                isAIOpen ? 'bg-[#C49A3A] text-[#083B2D]' : 'bg-white/5 text-white hover:bg-white/15'
              }`}
              title="Open Rishi AI Map Assistant"
            >
              <Bot className="w-4 h-4" />
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
                  'Kerala backwaters & beaches',
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
                  <button
                    onClick={() => handleNavigateToState(currentOdyssey.stateId)}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] text-[11px] font-bold flex items-center space-x-1"
                  >
                    <span>Enter {currentOdyssey.state} Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
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
            className="lg:col-span-8 rounded-3xl border border-[#C49A3A]/35 bg-black/40 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col items-center shadow-2xl transition-all"
            style={{
              perspective: '1200px',
              cursor: isDragging ? 'grabbing' : zoomLevel > 1 ? 'grab' : 'default'
            }}
          >
            {/* Map Geodetic Header */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono pb-3 border-b border-white/10 text-white/60">
              <div className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Survey of India Official Political Map • All 36 States & UTs Clickable</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse" />
                <span className="text-[#DFB757]">Interactive Vector Layer Active</span>
              </div>
            </div>

            {/* Floating Zoom & Pan Control Widget */}
            <div className="absolute top-16 right-6 z-30 flex flex-col space-y-1.5 bg-black/75 p-1.5 rounded-2xl border border-white/20 backdrop-blur-md text-white shadow-xl">
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
              <button
                onClick={() => setShowNationalBorder(!showNationalBorder)}
                className={`p-2 rounded-xl transition-all text-xs ${showNationalBorder ? 'bg-[#DFB757]/25 text-[#DFB757] border border-[#DFB757]/60' : 'hover:bg-white/20 text-white/50'}`}
                title={showNationalBorder ? 'National Sovereign Border Glow: ON' : 'National Sovereign Border Glow: OFF'}
              >
                <Layers className="w-4 h-4" />
              </button>
              <div className="text-[9px] font-mono text-center text-[#C49A3A] pt-1 border-t border-white/10">
                {Math.round(zoomLevel * 100)}%
              </div>
            </div>

            {/* Live Active / Hovering State Badge on Canvas */}
            <div className="absolute top-16 left-6 z-20 hidden sm:flex items-center space-x-2.5 bg-black/85 border border-[#C49A3A]/50 px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-200">
              <span className="w-7 h-6 rounded-lg bg-gradient-to-br from-[#DFB757] to-[#C49A3A] text-[#083B2D] font-mono text-[11px] flex items-center justify-center font-black shadow-inner">
                {hoveredRegion ? hoveredRegion.stateId : activeRegion.stateId}
              </span>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-xs font-serif font-bold text-[#DFB757]">
                    {hoveredRegion ? hoveredRegion.name : activeRegion.name}
                  </span>
                  <span className="text-[10px] text-white/60 font-serif">
                    ({STATE_HINDI_NAMES[(hoveredRegion || activeRegion).slug] || ''})
                  </span>
                </div>
                <span className="text-[9px] font-mono text-white/60">
                  {hoveredRegion ? `${hoveredRegion.capital} • ${hoveredRegion.zone} Zone • ${hoveredRegion.unescoCount} UNESCO` : `Active Dossier • Hover state to inspect`}
                </span>
              </div>
            </div>

            {/* 3D SVG Map Canvas with Parallax Tilt */}
            <motion.div
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              className="w-full relative flex items-center justify-center py-2"
            >
              <svg
                viewBox="0 0 768 768"
                className="w-full max-w-[620px] h-auto select-none filter drop-shadow-[0_0_35px_rgba(8,59,45,0.95)]"
                style={{
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
                  transformOrigin: `${activeRegion.cx}px ${activeRegion.cy}px`,
                  transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                <defs>
                  {/* Subtle Shimmer Filters */}
                  <linearGradient id="selectedStateGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DFB757" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#083B2D" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#C49A3A" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="visitedStateGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#1B5E20" stopOpacity="0.7" />
                  </linearGradient>

                  <linearGradient id="nationalBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DFB757" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#FFF2A7" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#C49A3A" stopOpacity="0.85" />
                  </linearGradient>

                  <radialGradient id="stateHoverShimmer" cx="50%" cy="50%" r="55%">
                    <stop offset="0%" stopColor="#DFB757" stopOpacity="0.42" />
                    <stop offset="60%" stopColor="#C49A3A" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#083B2D" stopOpacity="0.18" />
                  </radialGradient>

                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Layer: Official Uploaded India Map Image (Locked Source of Truth) */}
                <image
                  href="/india_political_map_official.jpg"
                  x="0"
                  y="0"
                  width="768"
                  height="768"
                  preserveAspectRatio="xMidYMid meet"
                  className="pointer-events-none transition-opacity duration-300"
                />

                {/* Vector Layer: Clean, Refined Interactive State Outlines */}
                {INDIA_REGIONS.map((region) => {
                  const isSelected = activeRegion.slug === region.slug;
                  const isHovered = hoveredRegion?.slug === region.slug;
                  const isVisited = visitedStates.includes(region.slug);
                  const isFilteredMatch = filteredStateSlugs.includes(region.slug);
                  const isAIHighlighted = aiHighlightedStates.includes(region.slug);

                  // Strict rule: ZERO area fill highlight — authentic map is 100% visible
                  const pathFill = 'transparent';
                  let strokeColor = 'rgba(255, 255, 255, 0.15)';
                  let strokeWidth = '0.8';

                  // Interaction Overrides (Outlines only, no area fill)
                  if (isHovered) {
                    strokeColor = '#DFB757';
                    strokeWidth = '2.2';
                  } else if (isSelected) {
                    strokeColor = '#C49A3A';
                    strokeWidth = '2';
                  } else if (isFilteredMatch) {
                    strokeColor = '#E67E22';
                    strokeWidth = '1.6';
                  } else if (isVisited) {
                    strokeColor = '#A3E635';
                    strokeWidth = '1.2';
                  }

                  return (
                    <path
                      key={region.slug}
                      id={`state-${region.slug}`}
                      data-state-id={region.stateId}
                      data-state-name={region.name}
                      data-slug={region.slug}
                      d={region.path}
                      fill={pathFill}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      onClick={() => handleStateClick(region)}
                      onDoubleClick={() => handleNavigateToState(region.slug)}
                      onMouseEnter={(e) => {
                        // Immediately open state details in the dossier drawer
                        setActiveRegion(region);
                        setHoveredRegion(region);
                        playHoverChime();
                        const rect = mapContainerRef.current?.getBoundingClientRect();
                        if (rect) {
                          setTooltipPos({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top
                          });
                        }
                      }}
                      onMouseMove={(e) => {
                        const rect = mapContainerRef.current?.getBoundingClientRect();
                        if (rect) {
                          setTooltipPos({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top
                          });
                        }
                      }}
                      className="cursor-pointer transition-all duration-200"
                      style={{
                        filter: isHovered
                          ? 'drop-shadow(0 0 8px rgba(223, 183, 87, 0.85))'
                          : isSelected
                          ? 'drop-shadow(0 0 10px rgba(196, 154, 58, 0.75))'
                          : 'none'
                      }}
                    />
                  );
                })}

                {/* National Sovereign Perimeter Trace (Survey of India Outline) */}
                <path
                  d={INDIA_OUTER_BOUNDARY}
                  fill="none"
                  stroke={showNationalBorder ? 'url(#nationalBorderGradient)' : 'rgba(223, 183, 87, 0.35)'}
                  strokeWidth={showNationalBorder ? '1.8' : '1.0'}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="pointer-events-none transition-all duration-300"
                  style={{
                    filter: showNationalBorder ? 'drop-shadow(0 0 6px rgba(223, 183, 87, 0.75))' : 'none'
                  }}
                />

                {/* Dedicated Elevated Hover Layer (Clean Outline Only — ZERO Area Highlight) */}
                {hoveredRegion && (
                  <g className="pointer-events-none transition-all duration-200">
                    <path
                      d={hoveredRegion.path}
                      fill="none"
                      stroke="#DFB757"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      style={{
                        filter: 'drop-shadow(0 0 6px rgba(223, 183, 87, 0.85))'
                      }}
                    />
                  </g>
                )}

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
                          strokeWidth="2.5"
                          strokeDasharray="6 4"
                          opacity={i <= odysseyStep ? 0.95 : 0.25}
                        />
                      );
                    })}
                  </g>
                )}
              </svg>
            </motion.div>

            {/* Hover Tooltip Floating Card (Glassmorphic) */}
            <AnimatePresence>
              {hoveredRegion && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    left: `${Math.min(Math.max(tooltipPos.x + 18, 16), (mapContainerRef.current?.clientWidth || 600) - 280)}px`,
                    top: `${Math.min(Math.max(tooltipPos.y - 145, 16), (mapContainerRef.current?.clientHeight || 600) - 230)}px`,
                    pointerEvents: 'none'
                  }}
                  className="z-50 p-4 rounded-2xl bg-[#083B2D]/95 text-white border-2 border-[#DFB757] shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-2xl w-68 space-y-2.5"
                >
                  {/* Top Header with State Badge & Hindi name */}
                  <div className="flex items-center justify-between border-b border-[#C49A3A]/30 pb-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-6 rounded-md bg-[#DFB757] text-[#083B2D] font-mono text-[11px] flex items-center justify-center font-black shadow-sm">
                        {hoveredRegion.stateId}
                      </span>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#FFF2A7] leading-tight">
                          {hoveredRegion.name}
                        </h4>
                        <p className="text-[10px] text-[#DFB757]/80 font-serif">
                          {STATE_HINDI_NAMES[hoveredRegion.slug] || ''}
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                      {hoveredRegion.zone}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="space-y-1.5 text-[11px] font-mono text-white/90">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 flex items-center gap-1"><MapPin className="w-3 h-3 text-[#DFB757]" /> Capital:</span>
                      <strong className="text-white">{hoveredRegion.capital}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 flex items-center gap-1"><Landmark className="w-3 h-3 text-[#DFB757]" /> UNESCO Sites:</span>
                      <strong className="text-[#DFB757] flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-[#DFB757]" /> {hoveredRegion.unescoCount}
                      </strong>
                    </div>
                    <div className="flex items-start justify-between gap-2 pt-0.5">
                      <span className="text-white/50 flex items-center gap-1 shrink-0"><Sparkles className="w-3 h-3 text-[#DFB757]" /> Highlight:</span>
                      <strong className="text-[#DFB757] text-right truncate text-[10.5px]">
                        {hoveredRegion.topAttraction}
                      </strong>
                    </div>
                  </div>

                  {/* Call to action footer */}
                  <div className="pt-2 text-[10px] text-center text-[#FFF2A7] font-sans border-t border-white/15 flex items-center justify-center space-x-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFB757] animate-ping" />
                    <span>Click to zoom & explore • Double-click to visit</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Cartographic Legend */}
            <div className="w-full pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/70">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-[#083B2D] border border-[#DFB757] inline-block" />
                <span>Selected Outline</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-[#2E7D32] border border-[#A3E635] inline-block" />
                <span>Marked Visited</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded bg-[#E67E22] border border-[#DFB757] inline-block" />
                <span>Filter Highlight</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#DFB757]">Official Political Map of India</span>
              </div>
            </div>
          </div>

          {/* Right Column: State Dossier Hero Drawer */}
          <div className="lg:col-span-4 rounded-3xl p-6 sm:p-7 border border-[#C49A3A]/40 bg-white text-[#111827] shadow-luxury space-y-5">
            {/* Top State Badge & Visited Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-7 h-6 rounded-lg bg-[#083B2D] text-[#DFB757] font-mono text-xs font-bold flex items-center justify-center">
                  {activeRegion.stateId}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#083B2D]/10 text-[#083B2D] text-xs font-mono font-bold uppercase tracking-wider">
                  {activeRegion.zone} India
                </span>
              </div>

              <button
                onClick={() => toggleVisitedState(activeRegion.slug)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center space-x-1.5 transition-all border ${
                  visitedStates.includes(activeRegion.slug)
                    ? 'bg-[#2E7D32] text-white border-[#2E7D32]'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-[#2E7D32]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{visitedStates.includes(activeRegion.slug) ? 'Visited' : 'Mark Visited'}</span>
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
                  Signature Landmark:
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
              {/* Direct route to /states/{slug} — No Rajasthan routing bug! */}
              <button
                onClick={() => handleNavigateToState(activeRegion.slug)}
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
