import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { STATES_DATA } from '../data/statesData';
import { StateData } from '../types';
import {
  MapPin,
  Search,
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  Calendar,
  CloudSun,
  Shield,
  Users,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { heritageAudio } from '../utils/audioService';
import { InteractiveIndiaMap } from '../components/map/InteractiveIndiaMap';

const REGIONS = [
  { id: 'all', label: 'All 36 States & UTs' },
  { id: 'north', label: 'North India' },
  { id: 'south', label: 'South India' },
  { id: 'west', label: 'West India' },
  { id: 'east', label: 'East India' },
  { id: 'northeast', label: 'Northeast (Seven Sisters + Sikkim)' },
  { id: 'central', label: 'Central India' },
  { id: 'islands', label: 'Union Territories & Islands' }
];

const NORTH_SLUGS = ['rajasthan', 'uttar-pradesh', 'himachal-pradesh', 'punjab', 'haryana', 'uttarakhand', 'jammu-kashmir', 'ladakh', 'delhi', 'chandigarh'];
const SOUTH_SLUGS = ['kerala', 'tamil-nadu', 'karnataka', 'andhra-pradesh', 'telangana', 'puducherry', 'lakshadweep'];
const WEST_SLUGS = ['gujarat', 'maharashtra', 'goa', 'dadra-nagar-haveli-daman-diu'];
const EAST_SLUGS = ['west-bengal', 'odisha', 'bihar', 'jharkhand'];
const NE_SLUGS = ['assam', 'meghalaya', 'arunachal-pradesh', 'nagaland', 'manipur', 'mizoram', 'tripura', 'sikkim'];
const CENTRAL_SLUGS = ['madhya-pradesh', 'chhattisgarh'];
const ISLANDS_SLUGS = ['andaman-nicobar', 'lakshadweep', 'puducherry', 'chandigarh', 'delhi', 'ladakh', 'dadra-nagar-haveli-daman-diu', 'jammu-kashmir'];

export const StatesPage: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'both' | 'map' | 'grid'>('both');

  const statesList = useMemo(() => {
    return Object.values(STATES_DATA).filter((state) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        state.name.toLowerCase().includes(q) ||
        state.capital.toLowerCase().includes(q) ||
        state.languages.some((l) => l.toLowerCase().includes(q)) ||
        state.topAttraction.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (activeRegion === 'all') return true;
      if (activeRegion === 'north') return NORTH_SLUGS.includes(state.slug);
      if (activeRegion === 'south') return SOUTH_SLUGS.includes(state.slug);
      if (activeRegion === 'west') return WEST_SLUGS.includes(state.slug);
      if (activeRegion === 'east') return EAST_SLUGS.includes(state.slug);
      if (activeRegion === 'northeast') return NE_SLUGS.includes(state.slug);
      if (activeRegion === 'central') return CENTRAL_SLUGS.includes(state.slug);
      if (activeRegion === 'islands') return ISLANDS_SLUGS.includes(state.slug);
      return true;
    });
  }, [activeRegion, searchQuery]);

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em]">
            <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Complete Sovereign Pan-India Atlas</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#083B2D] tracking-tight">
            All 36 States & Union Territories
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-gray-700 italic">
            Every sovereign state and territory of India with authenticated dynastic lineage, regional royal cuisine, luxury heritage hotels, and verified emergency helplines.
          </p>
        </div>

        {/* Toolbar: Search & Regional Filters */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state name, capital, language, top attraction..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
              />
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
              <span>Showing <strong className="text-[#083B2D]">{statesList.length}</strong> of 36 Regions</span>
              <span>•</span>
              <span className="text-[#083B2D] font-semibold">100% Zero-404 Guarantee</span>
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar justify-start sm:justify-center">
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => {
                  setActiveRegion(region.id);
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeRegion === region.id
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-luxury'
                    : 'bg-[#FAF8F4] text-gray-700 border-gray-200 hover:border-[#C49A3A]/40'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-gray-100 gap-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
              <Layers className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>Atlas Representation:</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setViewMode('both');
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'both'
                    ? 'bg-[#083B2D] text-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 hover:bg-gray-200'
                }`}
              >
                ⚡ Unified Dual Atlas (Map & Cards)
              </button>
              <button
                onClick={() => {
                  setViewMode('map');
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'map'
                    ? 'bg-[#083B2D] text-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 hover:bg-gray-200'
                }`}
              >
                🗺️ Sovereign Political Map
              </button>
              <button
                onClick={() => {
                  setViewMode('grid');
                  heritageAudio.playTempleBell();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#083B2D] text-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 hover:bg-gray-200'
                }`}
              >
                🏛️ 36 Regions Grid
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Sovereign Political Map View */}
        {(viewMode === 'both' || viewMode === 'map') && (
          <div className="rounded-3xl overflow-hidden border border-[#C49A3A]/30 shadow-2xl">
            <InteractiveIndiaMap />
          </div>
        )}

        {/* 36 States Grid */}
        {(viewMode === 'both' || viewMode === 'grid') && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statesList.map((state) => (
            <motion.div
              key={state.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-60 overflow-hidden bg-gray-900">
                <img
                  src={state.heroImage}
                  alt={state.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4 bg-[#083B2D]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C49A3A]/40 text-[10px] text-[#C49A3A] font-mono font-bold uppercase tracking-wider">
                  Capital: {state.capital.split('(')[0]}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#DFB757] font-serif italic block mb-0.5">
                    {state.topAttraction}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F4] leading-snug drop-shadow-md">
                    {state.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                  {state.description}
                </p>

                {/* Spoken Languages & Population */}
                <div className="space-y-1.5 bg-[#FAF8F4] p-3 rounded-2xl border border-gray-100 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-[#C49A3A]" />
                      <span>Pop: {state.population}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <CloudSun className="w-3.5 h-3.5 text-[#E67E22]" />
                      <span>{state.weather.temp.split('(')[0]}</span>
                    </span>
                  </div>
                  <div className="pt-1 text-[11px] text-gray-700 font-medium truncate">
                    <strong>Languages: </strong> {state.languages.join(', ')}
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                    <strong className="block text-sm font-bold text-[#083B2D]">{state.heritageCount}</strong>
                    <span className="text-[9px] text-gray-500 uppercase">Monuments</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                    <strong className="block text-sm font-bold text-[#C49A3A]">{state.festivalsCount}</strong>
                    <span className="text-[9px] text-gray-500 uppercase">Festivals</span>
                  </div>
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-100">
                    <strong className="block text-sm font-bold text-[#E67E22]">{state.cultureCount}</strong>
                    <span className="text-[9px] text-gray-500 uppercase">Traditions</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <Link
                    to={`/state/${state.slug}`}
                    className="w-full py-2.5 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#0D523F] transition-colors"
                  >
                    <span>Enter {state.name} State Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};
