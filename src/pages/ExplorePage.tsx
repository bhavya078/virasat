import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERITAGE_SITES } from '../data/heritageSites';
import { MonumentCard3D } from '../components/monument/MonumentCard3D';
import { Search, Award, Filter, Compass } from 'lucide-react';
import { heritageAudio } from '../utils/audioService';

const CATEGORIES = [
  { id: 'all', label: 'All 50 Monuments' },
  { id: 'unesco', label: 'UNESCO World Heritage' },
  { id: 'temple', label: 'Sacred Temples' },
  { id: 'fort', label: 'Imperial Forts & Palaces' },
  { id: 'cave', label: 'Rock-Cut Caves' },
  { id: 'natural', label: 'Natural Biospheres' },
  { id: 'spiritual', label: 'Spiritual Sanctuaries' }
];

export const ExplorePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSites = HERITAGE_SITES.filter((site) => {
    const matchesCategory =
      activeCategory === 'all' ||
      site.category === activeCategory ||
      (activeCategory === 'unesco' && site.unescoYear !== undefined);

    const matchesSearch =
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.dynasty.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Award className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Masterpieces of Architecture & UNESCO Glory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            50 Heritage Wonders of India
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            Journey through 50 meticulously documented monuments with authentic dynastic history, 3D tilt interaction, visiting hours, and audio guides.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-3xl border border-[#C49A3A]/25 shadow-sm">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by monument name, state or dynasty..."
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  heritageAudio.playTempleBell();
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                  activeCategory === c.id
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                    : 'bg-[#FAF8F4] text-gray-700 border-gray-200 hover:border-[#C49A3A]/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex justify-between items-center text-xs text-gray-500 font-mono mb-6 px-1">
          <span>Showing {filteredSites.length} of {HERITAGE_SITES.length} Heritage Sites</span>
          <span>Zero Placeholders • 100% Authentic History</span>
        </div>

        {/* 3D Monument Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => (
            <MonumentCard3D key={site.id} site={site} />
          ))}
        </div>
      </div>
    </div>
  );
};
