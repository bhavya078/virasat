import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Sparkles, Filter, ChevronRight, Compass } from 'lucide-react';
import { ALL_INDIAN_STATES, getStateData } from '../../data/statesData';
import { useLanguage } from '../../context/LanguageContext';
import { heritageAudio } from '../../utils/audioService';

// 36 Geographic Map Nodes covering all states and UTs with relative SVG coordinates
const MAP_REGIONS = [
  // Northern Region
  { id: 'jammu-and-kashmir', name: 'Jammu & Kashmir', cx: 160, cy: 75, r: 18, category: 'mountain', topAttraction: 'Dal Lake & Gulmarg' },
  { id: 'ladakh', name: 'Ladakh', cx: 205, cy: 55, r: 24, category: 'mountain', topAttraction: 'Pangong Tso & Hemis' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', cx: 175, cy: 110, r: 15, category: 'mountain', topAttraction: 'Spiti Valley & Great Himalayan NP' },
  { id: 'punjab', name: 'Punjab', cx: 145, cy: 125, r: 14, category: 'spiritual', topAttraction: 'Golden Temple, Amritsar' },
  { id: 'chandigarh', name: 'Chandigarh', cx: 165, cy: 125, r: 7, category: 'museum', topAttraction: 'Rock Garden & Capitol Complex' },
  { id: 'uttarakhand', name: 'Uttarakhand', cx: 200, cy: 130, r: 15, category: 'spiritual', topAttraction: 'Chopta & Badrinath' },
  { id: 'haryana', name: 'Haryana', cx: 160, cy: 145, r: 13, category: 'fort', topAttraction: 'Surajkund & Kurukshetra' },
  { id: 'delhi', name: 'Delhi', cx: 175, cy: 150, r: 8, category: 'unesco', topAttraction: 'Red Fort & Qutub Minar' },

  // Western & Desert Region
  { id: 'rajasthan', name: 'Rajasthan', cx: 120, cy: 190, r: 32, category: 'fort', topAttraction: 'Amer Fort, Chittor & Thar Desert' },
  { id: 'gujarat', name: 'Gujarat', cx: 90, cy: 260, r: 26, category: 'unesco', topAttraction: 'Rani ki Vav, Modhera & White Rann' },
  { id: 'dadra-nagar-haveli-daman-diu', name: 'Dadra & Nagar Haveli and Daman & Diu', cx: 95, cy: 300, r: 7, category: 'beach', topAttraction: 'Moti Daman Fort & Jampore Beach' },

  // Central Region
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', cx: 195, cy: 235, r: 32, category: 'unesco', topAttraction: 'Khajuraho, Sanchi & Bhimbetka' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', cx: 260, cy: 260, r: 22, category: 'wildlife', topAttraction: 'Bastar Dussehra & Chitrakote Falls' },

  // Eastern Region
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', cx: 225, cy: 175, r: 28, category: 'unesco', topAttraction: 'Taj Mahal & Kashi Vishwanath' },
  { id: 'bihar', name: 'Bihar', cx: 290, cy: 190, r: 20, category: 'unesco', topAttraction: 'Mahabodhi Temple & Nalanda Mahavihara' },
  { id: 'jharkhand', name: 'Jharkhand', cx: 310, cy: 235, r: 18, category: 'wildlife', topAttraction: 'Betla National Park & Parasnath' },
  { id: 'odisha', name: 'Odisha', cx: 305, cy: 290, r: 24, category: 'temple', topAttraction: 'Konark Sun Temple & Puri Jagannath' },
  { id: 'west-bengal', name: 'West Bengal', cx: 345, cy: 230, r: 20, category: 'unesco', topAttraction: 'Sundarbans, Victoria Memorial & Darjeeling' },

  // Northeast Region
  { id: 'sikkim', name: 'Sikkim', cx: 350, cy: 165, r: 11, category: 'mountain', topAttraction: 'Khangchendzonga & Rumtek Monastery' },
  { id: 'assam', name: 'Assam', cx: 420, cy: 175, r: 22, category: 'wildlife', topAttraction: 'Kaziranga Rhinos & Majuli Island' },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', cx: 455, cy: 145, r: 22, category: 'mountain', topAttraction: 'Tawang Monastery & Ziro Valley' },
  { id: 'nagaland', name: 'Nagaland', cx: 465, cy: 185, r: 12, category: 'hidden', topAttraction: 'Hornbill Festival & Dzukou Valley' },
  { id: 'manipur', name: 'Manipur', cx: 455, cy: 215, r: 12, category: 'wildlife', topAttraction: 'Keibul Lamjao Floating Park & Loktak Lake' },
  { id: 'mizoram', name: 'Mizoram', cx: 440, cy: 245, r: 12, category: 'hidden', topAttraction: 'Chapchar Kut & Blue Mountain' },
  { id: 'tripura', name: 'Tripura', cx: 415, cy: 235, r: 11, category: 'temple', topAttraction: 'Unakoti Rock Colossi & Ujjayanta Palace' },
  { id: 'meghalaya', name: 'Meghalaya', cx: 405, cy: 195, r: 13, category: 'hidden', topAttraction: 'Mawlynnong Cleanest Village & Dawki River' },

  // Southern Region & Deccan
  { id: 'maharashtra', name: 'Maharashtra', cx: 155, cy: 320, r: 30, category: 'unesco', topAttraction: 'Ajanta & Ellora Caves, Raigad Fort' },
  { id: 'goa', name: 'Goa', cx: 125, cy: 400, r: 10, category: 'beach', topAttraction: 'Basilica of Bom Jesus & Dudhsagar Falls' },
  { id: 'karnataka', name: 'Karnataka', cx: 160, cy: 420, r: 28, category: 'unesco', topAttraction: 'Hampi Vijayanagara & Mysore Palace' },
  { id: 'telangana', name: 'Telangana', cx: 220, cy: 335, r: 22, category: 'unesco', topAttraction: 'Ramappa Temple, Charminar & Golconda' },
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', cx: 225, cy: 395, r: 25, category: 'hidden', topAttraction: 'Gandikota Canyon & Lepakshi Hanging Pillar' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', cx: 200, cy: 490, r: 28, category: 'temple', topAttraction: 'Brihadeeswara & Meenakshi Amman Temple' },
  { id: 'kerala', name: 'Kerala', cx: 170, cy: 505, r: 20, category: 'beach', topAttraction: 'Alleppey Backwaters & Padmanabhaswamy' },
  { id: 'puducherry', name: 'Puducherry', cx: 235, cy: 485, r: 7, category: 'beach', topAttraction: 'Auroville & French White Town' },

  // Island Territories
  { id: 'lakshadweep', name: 'Lakshadweep', cx: 110, cy: 510, r: 10, category: 'beach', topAttraction: 'Agatti Island Coral Lagoons' },
  { id: 'andaman-and-nicobar', name: 'Andaman & Nicobar Islands', cx: 440, cy: 470, r: 14, category: 'beach', topAttraction: 'Cellular Jail & Radhanagar Beach' }
];

const FILTERS = [
  { id: 'all', label: 'All 36 States & UTs' },
  { id: 'unesco', label: 'UNESCO World Heritage' },
  { id: 'temple', label: 'Sacred Temples' },
  { id: 'fort', label: 'Imperial Forts & Palaces' },
  { id: 'mountain', label: 'Himalayan Valleys' },
  { id: 'beach', label: 'Coastal Paradises' },
  { id: 'wildlife', label: 'Wildlife Sanctuaries' },
  { id: 'hidden', label: 'Secret Hidden Gems' },
  { id: 'spiritual', label: 'Spiritual Sanctuaries' }
];

export const InteractiveIndiaMap: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRegion, setHoveredRegion] = useState<typeof MAP_REGIONS[0] | null>(null);

  // Filtered list of regions
  const filteredRegions = MAP_REGIONS.filter((region) => {
    const matchesFilter = selectedFilter === 'all' || region.category === selectedFilter;
    const matchesSearch = region.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStateClick = (slug: string) => {
    heritageAudio.playTempleBell();
    navigate(`/state/${slug}`);
  };

  return (
    <section id="interactive-map" className="py-24 bg-[#083B2D] text-[#FAF8F4] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C49A3A]/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E67E22]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-gold-glow">
            <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Interactive Heritage Atlas of India</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F4] font-bold tracking-tight mb-4">
            {t('sectionMapTitle', 'The Living Map of Bharat')}
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#FAF8F4]/80 italic">
            {t('sectionMapSubtitle', 'Hover over any of the 36 clickable states & UTs to reveal its living cultural soul, or click to enter its state portal.')}
          </p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
          {/* Direct Search Bar with autocomplete */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any of 36 States & UTs..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/30 border border-[#C49A3A]/30 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C49A3A] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {FILTERS.slice(0, 6).map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 font-medium whitespace-nowrap border ${
                  selectedFilter === f.id
                    ? 'bg-[#C49A3A] text-[#083B2D] border-[#C49A3A] font-bold shadow-gold-glow'
                    : 'bg-white/5 text-white/70 border-white/10 hover:border-[#C49A3A]/40 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Map Centerpiece Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center: Interactive SVG Map Canvas */}
          <div className="lg:col-span-8 relative flex items-center justify-center bg-black/20 rounded-3xl border border-[#C49A3A]/25 p-4 sm:p-8 backdrop-blur-md min-h-[580px]">
            {/* SVG India Map Visual Canvas */}
            <svg
              viewBox="0 0 520 580"
              className="w-full max-w-[500px] h-auto filter drop-shadow-[0_0_30px_rgba(8,59,45,0.8)]"
            >
              {/* Outer boundary of India silhouette */}
              <path
                d="M 170 30 
                   Q 220 15, 250 45 
                   Q 290 35, 340 75 
                   Q 380 95, 430 135 
                   Q 470 145, 490 175 
                   Q 460 215, 430 225 
                   Q 370 235, 345 270 
                   Q 335 320, 310 355 
                   Q 275 420, 230 510 
                   Q 215 545, 205 555 
                   Q 195 545, 175 510 
                   Q 145 420, 130 355 
                   Q 80 300, 65 260 
                   Q 45 220, 75 180 
                   Q 110 160, 140 120 
                   Z"
                fill="rgba(8, 59, 45, 0.6)"
                stroke="#C49A3A"
                strokeWidth="1.8"
                strokeDasharray="4 2"
                className="opacity-40"
              />

              {/* Geographic Connection Web Lines */}
              {filteredRegions.slice(0, 20).map((r, i) => (
                <line
                  key={`line-${i}`}
                  x1={r.cx}
                  y1={r.cy}
                  x2={195}
                  y2={235}
                  stroke="rgba(196, 154, 58, 0.12)"
                  strokeWidth="0.8"
                />
              ))}

              {/* 36 Clickable Regional Nodes */}
              {MAP_REGIONS.map((region) => {
                const isFiltered = filteredRegions.some((fr) => fr.id === region.id);
                const isHovered = hoveredRegion?.id === region.id;

                return (
                  <g
                    key={region.id}
                    onClick={() => handleStateClick(region.id)}
                    onMouseEnter={() => setHoveredRegion(region)}
                    className="cursor-pointer group"
                  >
                    {/* Hover Pulse Ripple */}
                    {isHovered && (
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={region.r + 14}
                        fill="none"
                        stroke="#C49A3A"
                        strokeWidth="1.5"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer Glow Halo */}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={region.r + (isHovered ? 4 : 0)}
                      fill={isHovered ? 'rgba(196, 154, 58, 0.35)' : isFiltered ? 'rgba(196, 154, 58, 0.15)' : 'rgba(255, 255, 255, 0.04)'}
                      stroke={isHovered ? '#DFB757' : isFiltered ? '#C49A3A' : 'rgba(255, 255, 255, 0.2)'}
                      strokeWidth={isHovered ? 2.5 : 1.2}
                      className="transition-all duration-300"
                    />

                    {/* Core Anchor Node */}
                    <circle
                      cx={region.cx}
                      cy={region.cy}
                      r={isHovered ? 5.5 : 3.5}
                      fill={isHovered ? '#FFFFFF' : '#C49A3A'}
                      className="transition-all duration-300 shadow-[0_0_10px_#C49A3A]"
                    />

                    {/* Regional Label on Node */}
                    {(region.r >= 22 || isHovered) && (
                      <text
                        x={region.cx}
                        y={region.cy + (region.r > 20 ? 14 : -10)}
                        textAnchor="middle"
                        fill={isHovered ? '#FFFFFF' : '#FAF8F4'}
                        fontSize={isHovered ? '11px' : '9px'}
                        fontFamily="Playfair Display, serif"
                        fontWeight={isHovered ? '700' : '500'}
                        className="pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      >
                        {region.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Instruction Badge */}
            <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-xs text-[#C49A3A] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C49A3A] animate-ping" />
              <span>Click any node to zoom into that State’s Complete Experience</span>
            </div>
          </div>

          {/* Right Column: Live State Details Tooltip & Instant Navigator */}
          <div className="lg:col-span-4 space-y-4">
            {hoveredRegion ? (
              // Live Hover Card
              (() => {
                const stateData = getStateData(hoveredRegion.id);
                return (
                  <motion.div
                    key={hoveredRegion.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-xl border border-[#C49A3A]/40 rounded-3xl p-6 shadow-luxury"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#C49A3A] tracking-widest bg-black/40 px-2 py-0.5 rounded">
                          Selected Region
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-[#FAF8F4] mt-1">
                          {stateData.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#C49A3A] font-mono">
                        Capital: {stateData.capital}
                      </span>
                    </div>

                    <p className="text-xs text-white/80 line-clamp-2 leading-relaxed mb-4">
                      {stateData.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center my-4">
                      <div className="bg-black/30 p-2 rounded-xl">
                        <span className="block text-base font-bold text-[#C49A3A] font-serif">
                          {stateData.heritageCount}
                        </span>
                        <span className="text-[10px] text-white/70 uppercase">Sites</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded-xl">
                        <span className="block text-base font-bold text-[#E67E22] font-serif">
                          {stateData.festivalsCount}
                        </span>
                        <span className="text-[10px] text-white/70 uppercase">Festivals</span>
                      </div>
                      <div className="bg-black/30 p-2 rounded-xl">
                        <span className="block text-base font-bold text-[#4F9E75] font-serif">
                          {stateData.cultureCount}
                        </span>
                        <span className="text-[10px] text-white/70 uppercase">Cultures</span>
                      </div>
                    </div>

                    {/* Key Attributes */}
                    <div className="space-y-1.5 text-xs text-white/80 mb-5">
                      <div>
                        <strong className="text-[#C49A3A]">Top Attraction: </strong>
                        {stateData.topAttraction}
                      </div>
                      <div>
                        <strong className="text-[#C49A3A]">Languages: </strong>
                        {stateData.languages.slice(0, 3).join(', ')}
                      </div>
                      <div>
                        <strong className="text-[#C49A3A]">Best Time: </strong>
                        {stateData.bestTime}
                      </div>
                    </div>

                    <button
                      onClick={() => handleStateClick(hoveredRegion.id)}
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 shadow-gold-glow hover:brightness-110"
                    >
                      <span>Explore Full {stateData.name} Portal</span>
                      <ChevronRight className="w-4 h-4 text-[#083B2D]" />
                    </button>
                  </motion.div>
                );
              })()
            ) : (
              // Default Guide when no region is hovered
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <Compass className="w-10 h-10 text-[#C49A3A] mx-auto mb-3 animate-spin-slow" />
                <h4 className="font-serif text-lg text-white font-bold mb-1">
                  Explore 36 States & UTs
                </h4>
                <p className="text-xs text-white/70 mb-4 leading-relaxed">
                  Hover over any node on the map to inspect its real-time population, languages, heritage count, and top attractions.
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {ALL_INDIAN_STATES.slice(0, 8).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleStateClick(s.id)}
                      className="px-2.5 py-1 rounded-lg bg-black/30 hover:bg-[#C49A3A]/20 text-[11px] text-white/80 hover:text-[#C49A3A] border border-white/10 transition-colors"
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
