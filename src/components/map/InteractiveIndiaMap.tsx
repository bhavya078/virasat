import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Sparkles, Filter, ChevronRight, Compass, Shield, Award, Landmark, Layers, Star } from 'lucide-react';
import { STATES_DATA } from '../../data/statesData';
import { useLanguage } from '../../context/LanguageContext';
import { heritageAudio } from '../../utils/audioService';

interface PoliticalRegion {
  id: string;
  name: string;
  capital: string;
  isUT?: boolean;
  zone: 'North' | 'South' | 'West' | 'East' | 'Central' | 'Northeast' | 'Islands';
  cx: number;
  cy: number;
  labelX?: number;
  labelY?: number;
  path: string;
  unescoCount: number;
  topAttraction: string;
}

// Authentic Indian Political Regions with SVG polygon boundaries on 600x700 coordinate system
const POLITICAL_REGIONS: PoliticalRegion[] = [
  // NORTHERN INDIA & CROWN
  {
    id: 'ladakh',
    name: 'Ladakh',
    capital: 'Leh',
    isUT: true,
    zone: 'North',
    cx: 235,
    cy: 75,
    path: 'M 200 40 L 235 25 L 270 45 L 290 85 L 260 115 L 225 110 L 205 90 Z',
    unescoCount: 1,
    topAttraction: 'Hemis & Pangong Tso'
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    capital: 'Srinagar / Jammu',
    isUT: true,
    zone: 'North',
    cx: 175,
    cy: 85,
    path: 'M 160 65 L 200 40 L 205 90 L 195 115 L 165 110 L 150 90 Z',
    unescoCount: 1,
    topAttraction: 'Dal Lake & Mughal Gardens'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    zone: 'North',
    cx: 215,
    cy: 135,
    path: 'M 195 115 L 225 110 L 250 135 L 230 160 L 190 145 Z',
    unescoCount: 2,
    topAttraction: 'Great Himalayan National Park'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    zone: 'North',
    cx: 165,
    cy: 145,
    path: 'M 150 120 L 190 125 L 185 160 L 155 165 L 140 140 Z',
    unescoCount: 1,
    topAttraction: 'Golden Temple, Amritsar'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    capital: 'Chandigarh',
    isUT: true,
    zone: 'North',
    cx: 188,
    cy: 142,
    path: 'M 184 139 L 192 139 L 192 145 L 184 145 Z',
    unescoCount: 1,
    topAttraction: 'Capitol Complex'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    zone: 'North',
    cx: 245,
    cy: 155,
    path: 'M 225 130 L 265 145 L 275 180 L 240 185 L 225 155 Z',
    unescoCount: 2,
    topAttraction: 'Valley of Flowers & Nanda Devi'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    zone: 'North',
    cx: 185,
    cy: 175,
    path: 'M 170 155 L 205 160 L 200 195 L 165 190 Z',
    unescoCount: 0,
    topAttraction: 'Kurukshetra & Sultanpur'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    capital: 'New Delhi (National Capital)',
    isUT: true,
    zone: 'North',
    cx: 202,
    cy: 178,
    path: 'M 197 173 L 207 173 L 207 183 L 197 183 Z',
    unescoCount: 3,
    topAttraction: 'Red Fort, Qutub Minar, Humayun Tomb'
  },

  // WESTERN REGION & DESERT
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    zone: 'West',
    cx: 135,
    cy: 220,
    path: 'M 110 180 L 170 170 L 195 210 L 180 265 L 130 270 L 95 230 Z',
    unescoCount: 5,
    topAttraction: 'Amer Fort, Thar Desert & Chittorgarh'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    zone: 'West',
    cx: 95,
    cy: 300,
    path: 'M 75 260 L 135 265 L 140 320 L 105 345 L 60 330 L 45 295 L 65 285 Z',
    unescoCount: 4,
    topAttraction: 'Rani ki Vav & Dholavira'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'DNHDD',
    capital: 'Daman',
    isUT: true,
    zone: 'West',
    cx: 102,
    cy: 350,
    path: 'M 98 346 L 106 346 L 106 354 L 98 354 Z',
    unescoCount: 0,
    topAttraction: 'Moti Daman Fort & Jampore Beach'
  },

  // CENTRAL REGION
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    zone: 'Central',
    cx: 220,
    cy: 265,
    path: 'M 175 220 L 265 215 L 290 260 L 265 305 L 195 300 L 170 260 Z',
    unescoCount: 3,
    topAttraction: 'Khajuraho, Sanchi & Bhimbetka'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    zone: 'Central',
    cx: 285,
    cy: 305,
    path: 'M 270 265 L 305 260 L 320 320 L 290 375 L 265 350 L 270 300 Z',
    unescoCount: 0,
    topAttraction: 'Bastar Palace & Chitrakote Falls'
  },

  // EASTERN REGION & GANGA BASIN
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    zone: 'North',
    cx: 255,
    cy: 205,
    path: 'M 205 170 L 285 185 L 330 220 L 275 250 L 210 225 Z',
    unescoCount: 3,
    topAttraction: 'Taj Mahal, Agra Fort & Varanasi'
  },
  {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    zone: 'East',
    cx: 335,
    cy: 225,
    path: 'M 320 200 L 375 205 L 380 245 L 325 245 Z',
    unescoCount: 2,
    topAttraction: 'Mahabodhi Temple & Nalanda'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    zone: 'East',
    cx: 345,
    cy: 265,
    path: 'M 325 245 L 375 245 L 375 285 L 330 285 Z',
    unescoCount: 0,
    topAttraction: 'Baidyanath Dham & Parasnath'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    zone: 'East',
    cx: 335,
    cy: 330,
    path: 'M 315 290 L 370 280 L 380 335 L 335 375 L 305 340 Z',
    unescoCount: 1,
    topAttraction: 'Konark Sun Temple & Puri'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    zone: 'East',
    cx: 385,
    cy: 260,
    path: 'M 375 205 L 395 205 L 405 285 L 385 320 L 365 290 Z',
    unescoCount: 2,
    topAttraction: 'Sundarbans & Darjeeling Railway'
  },

  // NORTHEAST REGION (SEVEN SISTERS + SIKKIM)
  {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    zone: 'Northeast',
    cx: 395,
    cy: 185,
    path: 'M 388 175 L 405 175 L 405 195 L 388 195 Z',
    unescoCount: 1,
    topAttraction: 'Khangchendzonga National Park'
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    zone: 'Northeast',
    cx: 460,
    cy: 205,
    path: 'M 420 195 L 490 190 L 515 210 L 465 230 L 420 220 Z',
    unescoCount: 2,
    topAttraction: 'Kaziranga & Majuli River Island'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    zone: 'Northeast',
    cx: 490,
    cy: 165,
    path: 'M 430 170 L 490 135 L 540 160 L 515 195 L 460 190 Z',
    unescoCount: 0,
    topAttraction: 'Tawang Monastery & Ziro Valley'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    zone: 'Northeast',
    cx: 515,
    cy: 215,
    path: 'M 505 200 L 525 200 L 530 235 L 505 230 Z',
    unescoCount: 0,
    topAttraction: 'Hornbill Festival & Dzukou'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    zone: 'Northeast',
    cx: 505,
    cy: 245,
    path: 'M 495 235 L 525 235 L 520 270 L 495 265 Z',
    unescoCount: 0,
    topAttraction: 'Loktak Floating Lake'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    zone: 'Northeast',
    cx: 490,
    cy: 280,
    path: 'M 480 265 L 505 265 L 500 305 L 475 295 Z',
    unescoCount: 0,
    topAttraction: 'Blue Mountain & Reiek'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    zone: 'Northeast',
    cx: 455,
    cy: 265,
    path: 'M 445 250 L 470 250 L 465 285 L 445 280 Z',
    unescoCount: 0,
    topAttraction: 'Unakoti Rock Colossi'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    zone: 'Northeast',
    cx: 440,
    cy: 225,
    path: 'M 420 215 L 465 215 L 460 240 L 420 235 Z',
    unescoCount: 0,
    topAttraction: 'Mawlynnong & Living Root Bridges'
  },

  // DECCAN & SOUTHERN PENINSULA
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    zone: 'West',
    cx: 165,
    cy: 350,
    path: 'M 125 295 L 210 295 L 245 350 L 190 410 L 130 380 Z',
    unescoCount: 5,
    topAttraction: 'Ajanta, Ellora, Elephanta & Maratha Forts'
  },
  {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    zone: 'South',
    cx: 132,
    cy: 430,
    path: 'M 126 422 L 138 422 L 138 440 L 126 440 Z',
    unescoCount: 1,
    topAttraction: 'Churches of Old Goa'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    zone: 'South',
    cx: 175,
    cy: 460,
    path: 'M 140 380 L 205 385 L 220 480 L 175 520 L 145 440 Z',
    unescoCount: 4,
    topAttraction: 'Hampi, Pattadakal & Hoysala Temples'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    zone: 'South',
    cx: 235,
    cy: 375,
    path: 'M 205 330 L 265 330 L 270 395 L 220 405 Z',
    unescoCount: 1,
    topAttraction: 'Ramappa Kakatiya Temple & Golconda'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    zone: 'South',
    cx: 250,
    cy: 445,
    path: 'M 245 390 L 305 350 L 275 490 L 225 470 L 225 410 Z',
    unescoCount: 0,
    topAttraction: 'Gandikota Canyon & Lepakshi'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    zone: 'South',
    cx: 220,
    cy: 535,
    path: 'M 195 480 L 265 480 L 245 585 L 195 565 Z',
    unescoCount: 5,
    topAttraction: 'Great Chola Temples & Mahabalipuram'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    zone: 'South',
    cx: 180,
    cy: 550,
    path: 'M 160 480 L 195 480 L 195 585 L 180 595 L 165 520 Z',
    unescoCount: 1,
    topAttraction: 'Western Ghats & Padmanabhaswamy'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    capital: 'Puducherry',
    isUT: true,
    zone: 'South',
    cx: 255,
    cy: 520,
    path: 'M 252 516 L 258 516 L 258 524 L 252 524 Z',
    unescoCount: 0,
    topAttraction: 'Auroville & French Colony'
  },

  // ISLAND TERRITORIES
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    isUT: true,
    zone: 'Islands',
    cx: 110,
    cy: 540,
    path: 'M 105 525 L 115 525 L 115 555 L 105 555 Z',
    unescoCount: 0,
    topAttraction: 'Agatti & Coral Lagoons'
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar',
    capital: 'Port Blair',
    isUT: true,
    zone: 'Islands',
    cx: 475,
    cy: 485,
    path: 'M 470 430 L 485 430 L 485 540 L 470 540 Z',
    unescoCount: 0,
    topAttraction: 'Cellular Jail & Radhanagar Beach'
  }
];

export const InteractiveIndiaMap: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<PoliticalRegion>(POLITICAL_REGIONS[8]); // Default to Rajasthan
  const [mapMode, setMapMode] = useState<'political' | 'unesco' | 'zones'>('political');

  const filteredRegions = POLITICAL_REGIONS.filter((region) => {
    const matchesZone = selectedZone === 'all' || region.zone === selectedZone;
    const matchesSearch =
      region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.topAttraction.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const handleStateClick = (regionId: string) => {
    heritageAudio.playTempleBell();
    navigate(`/state/${regionId}`);
  };

  const selectedStateData = STATES_DATA[activeRegion.id] || STATES_DATA['rajasthan'];

  return (
    <section id="interactive-map" className="py-24 bg-[#05261D] text-[#FAF8F4] relative overflow-hidden">
      {/* Background ambient royal lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#C49A3A]/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#083B2D]/50 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em] shadow-gold-glow">
            <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Sovereign Cartographic Atlas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] font-bold tracking-tight">
            Political Map of Sovereign Bharat
          </h2>
          <p className="font-subheading text-base sm:text-lg text-[#FAF8F4]/80 italic">
            Explore all 28 States and 8 Union Territories with authentic political boundaries, administrative capitals, UNESCO monuments, and state dossiers.
          </p>
        </div>

        {/* Toolbar: Map Modes, Search & Zones */}
        <div className="bg-white/5 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-[#C49A3A]/25 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Mode Switcher */}
          <div className="flex items-center bg-black/40 p-1 rounded-2xl border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => {
                setMapMode('political');
                heritageAudio.playTempleBell();
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                mapMode === 'political'
                  ? 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] shadow-gold-glow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Political Boundaries</span>
            </button>
            <button
              onClick={() => {
                setMapMode('unesco');
                heritageAudio.playTempleBell();
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                mapMode === 'unesco'
                  ? 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] shadow-gold-glow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>UNESCO Sites</span>
            </button>
            <button
              onClick={() => {
                setMapMode('zones');
                heritageAudio.playTempleBell();
              }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                mapMode === 'zones'
                  ? 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] shadow-gold-glow'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Zonal Atlas</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 28 States & 8 UTs..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/30 border border-[#C49A3A]/30 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C49A3A] transition-colors"
            />
          </div>

          {/* Zone Selector Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full lg:w-auto pb-1 no-scrollbar">
            {['all', 'North', 'South', 'West', 'East', 'Central', 'Northeast', 'Islands'].map((z) => (
              <button
                key={z}
                onClick={() => {
                  setSelectedZone(z);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-all border ${
                  selectedZone === z
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                }`}
              >
                {z === 'all' ? 'All Zones' : z}
              </button>
            ))}
          </div>
        </div>

        {/* Map Canvas and State Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Map Box */}
          <div className="lg:col-span-8 bg-black/30 rounded-3xl border border-[#C49A3A]/30 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden flex flex-col items-center">
            {/* Map Header with Geographic Coordinates */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono text-white/50 pb-3 border-b border-white/10">
              <span className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Survey of India Projection • Sovereign Territory</span>
              </span>
              <span>8°4′N to 37°6′N • 68°7′E to 97°25′E</span>
            </div>

            {/* SVG Indian Political Map */}
            <div className="w-full relative flex items-center justify-center py-4">
              <svg
                viewBox="0 0 580 620"
                className="w-full max-w-[540px] h-auto filter drop-shadow-[0_0_35px_rgba(8,59,45,0.9)] select-none"
              >
                <defs>
                  {/* Subtle Grid Pattern for cartographic realism */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(196,154,58,0.06)" strokeWidth="0.5" />
                  </pattern>

                  {/* Gold Linear Gradient for Selected State */}
                  <linearGradient id="activeStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DFB757" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#083B2D" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Background Grid */}
                <rect width="580" height="620" fill="url(#grid)" />

                {/* Tropic of Cancer 23.5°N dotted line across India */}
                <line
                  x1="30"
                  y1="265"
                  x2="550"
                  y2="265"
                  stroke="#E67E22"
                  strokeWidth="1"
                  strokeDasharray="5 4"
                  opacity="0.45"
                />
                <text x="35" y="260" fill="#E67E22" fontSize="9px" fontFamily="monospace" opacity="0.75">
                  Tropic of Cancer (23.5° N)
                </text>

                {/* Indian Standard Meridian (82.5° E) */}
                <line
                  x1="300"
                  y1="20"
                  x2="300"
                  y2="600"
                  stroke="#C49A3A"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
                <text x="305" y="595" fill="#C49A3A" fontSize="9px" fontFamily="monospace" opacity="0.6">
                  Standard Meridian (82.5° E)
                </text>

                {/* Authentic Sovereign Indian Outer Boundary Contour */}
                <path
                  d="M 195 25
                     L 235 25 L 270 45 L 290 85 L 260 115 L 275 140 L 320 180 L 375 185
                     L 430 170 L 490 135 L 540 160 L 530 235 L 500 305 L 465 285 L 420 235
                     L 405 285 L 385 320 L 370 280 L 380 335 L 335 375 L 305 350 L 275 490
                     L 265 480 L 245 585 L 195 595 L 180 595 L 165 520 L 145 440 L 126 440
                     L 130 380 L 105 345 L 60 330 L 45 295 L 65 285 L 95 230 L 110 180
                     L 140 140 L 150 90 L 160 65 Z"
                  fill="rgba(8, 59, 45, 0.4)"
                  stroke="#C49A3A"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_15px_rgba(196,154,58,0.3)]"
                />

                {/* State Regions Paths */}
                {POLITICAL_REGIONS.map((region) => {
                  const isSelected = activeRegion.id === region.id;
                  const isFiltered = filteredRegions.some((fr) => fr.id === region.id);

                  // Zone colors
                  const zoneColor =
                    region.zone === 'North'
                      ? 'rgba(65, 117, 164, 0.25)'
                      : region.zone === 'South'
                      ? 'rgba(230, 126, 34, 0.25)'
                      : region.zone === 'West'
                      ? 'rgba(196, 154, 58, 0.28)'
                      : region.zone === 'East'
                      ? 'rgba(39, 174, 96, 0.25)'
                      : region.zone === 'Central'
                      ? 'rgba(155, 89, 182, 0.25)'
                      : region.zone === 'Northeast'
                      ? 'rgba(26, 188, 156, 0.25)'
                      : 'rgba(241, 196, 15, 0.25)';

                  return (
                    <g
                      key={region.id}
                      onClick={() => {
                        setActiveRegion(region);
                        heritageAudio.playTempleBell();
                      }}
                      className="cursor-pointer transition-all duration-300 group"
                    >
                      {/* State Polygon Shape */}
                      <path
                        d={region.path}
                        fill={
                          isSelected
                            ? 'url(#activeStateGrad)'
                            : mapMode === 'zones'
                            ? zoneColor
                            : isFiltered
                            ? 'rgba(8, 59, 45, 0.75)'
                            : 'rgba(255, 255, 255, 0.05)'
                        }
                        stroke={isSelected ? '#FAF8F4' : isFiltered ? '#C49A3A' : 'rgba(255,255,255,0.15)'}
                        strokeWidth={isSelected ? '2' : '1'}
                        className="transition-colors duration-200 hover:brightness-125"
                      />

                      {/* State Capital Star Node */}
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={isSelected ? 5.5 : 3.5}
                        fill={isSelected ? '#FFFFFF' : '#C49A3A'}
                        stroke="#083B2D"
                        strokeWidth="1.2"
                        className="shadow-[0_0_8px_#C49A3A]"
                      />

                      {/* UNESCO Badge Indicator on map if unesco mode is active */}
                      {mapMode === 'unesco' && region.unescoCount > 0 && (
                        <g transform={`translate(${region.cx + 5}, ${region.cy - 10})`}>
                          <rect width="18" height="12" rx="3" fill="#C49A3A" />
                          <text x="9" y="9" textAnchor="middle" fill="#083B2D" fontSize="8px" fontWeight="bold">
                            {region.unescoCount}
                          </text>
                        </g>
                      )}

                      {/* State Name Label on Map */}
                      <text
                        x={region.labelX || region.cx}
                        y={(region.labelY || region.cy) + 12}
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#FAF8F4'}
                        fontSize={isSelected ? '10px' : '8.5px'}
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="Playfair Display, serif"
                        className="pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] opacity-90"
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Cartographic Legend */}
            <div className="w-full pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-white/70">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full border border-[#C49A3A] bg-[#C49A3A]/40 inline-block" />
                <span>State Boundary</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#FFFFFF] border border-[#083B2D] inline-block" />
                <span>State Capital</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-0.5 border-t border-dashed border-[#E67E22] inline-block" />
                <span>Tropic of Cancer (23.5° N)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-1.5 py-0.5 rounded bg-[#C49A3A] text-[#083B2D] font-bold text-[9px]">UT</span>
                <span>Union Territory</span>
              </div>
            </div>
          </div>

          {/* Right: State Dossier Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 text-[#111827] border border-[#C49A3A]/30 shadow-luxury space-y-5">
            {/* Top State Badge & Zone */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#083B2D] text-[#C49A3A] text-xs font-mono font-bold uppercase tracking-wider">
                {activeRegion.zone} India Zone
              </span>
              <span className="text-xs font-mono text-gray-500">
                {activeRegion.isUT ? 'Union Territory' : 'Constituent State'}
              </span>
            </div>

            {/* State Name & Capital */}
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
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm group">
              <img
                src={selectedStateData.heroImage}
                alt={activeRegion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#DFB757] block">
                  Signature Wonder:
                </span>
                <span className="font-serif text-sm font-bold block truncate">
                  {activeRegion.topAttraction}
                </span>
              </div>
            </div>

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

            {/* Languages & Population */}
            <div className="space-y-2 text-xs bg-[#FAF8F4] p-3.5 rounded-2xl border border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Population:</span>
                <strong className="text-gray-900 font-mono">{selectedStateData.population}</strong>
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

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => handleStateClick(activeRegion.id)}
                className="w-full py-3.5 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-gold-glow hover:bg-[#0D523F] transition-all"
              >
                <span>Enter {activeRegion.name} Sovereign Portal</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  heritageAudio.speakGuide(
                    `${activeRegion.name}. Capital: ${activeRegion.capital}. ${selectedStateData.description}`
                  );
                }}
                className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-xs hover:border-[#C49A3A] transition-colors"
              >
                Listen to State Audio Brief
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
