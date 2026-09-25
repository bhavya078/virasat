import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles, Utensils, Music, Tag } from 'lucide-react';
import { FESTIVALS } from '../../data/festivals';
import { Festival } from '../../types';
import { heritageAudio } from '../../utils/audioService';

const MONTHS = [
  'All Months',
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

export const FestivalCalendar: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState('All Months');
  const [activeFestival, setActiveFestival] = useState<Festival | null>(null);

  const filteredFestivals = FESTIVALS.filter((f) => {
    if (selectedMonth === 'All Months') return true;
    return f.month.toLowerCase().includes(selectedMonth.toLowerCase());
  });

  // Calculate live countdown for selected festival or next upcoming
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

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Living Celebrations of Bharat</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            50 Grand Festivals of India
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            Experience the faith, rhythm, cuisine, and rituals across 50 iconic festivals with real-time countdown timers.
          </p>
        </div>

        {/* Month Selector Carousel */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
          {MONTHS.map((m) => (
            <button
              key={m}
              onClick={() => {
                setSelectedMonth(m);
                heritageAudio.playTempleBell();
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                selectedMonth === m
                  ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-luxury'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#C49A3A]/40'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((fest) => {
            const timeLeft = calculateTimeRemaining(fest.countdownTargetDate);

            return (
              <motion.div
                key={fest.id}
                id={fest.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={fest.heroImage}
                    alt={fest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Month Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#083B2D]/90 backdrop-blur-md border border-[#C49A3A] text-[#C49A3A] text-[10px] font-mono font-bold uppercase tracking-wider">
                      {fest.month}
                    </span>
                  </div>

                  {/* Title & Region on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl font-bold leading-tight drop-shadow-md text-[#FAF8F4]">
                      {fest.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-white/80 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C49A3A]" />
                      <span>{fest.state}</span>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#111827]/75 line-clamp-3 leading-relaxed font-light">
                    {fest.significance}
                  </p>

                  {/* Live Countdown Timer */}
                  <div className="bg-[#FAF8F4] p-3 rounded-2xl border border-[#C49A3A]/20 text-center">
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5 flex items-center justify-center space-x-1">
                      <Clock className="w-3 h-3 text-[#C49A3A]" />
                      <span>Countdown to Celebration</span>
                    </div>
                    <div className="flex justify-center items-center space-x-3 text-xs font-mono text-[#083B2D]">
                      <div>
                        <strong className="text-sm font-bold block">{timeLeft.days}</strong>
                        <span className="text-[9px] text-gray-400">Days</span>
                      </div>
                      <span className="text-[#C49A3A] font-bold">:</span>
                      <div>
                        <strong className="text-sm font-bold block">{timeLeft.hours}</strong>
                        <span className="text-[9px] text-gray-400">Hours</span>
                      </div>
                      <span className="text-[#C49A3A] font-bold">:</span>
                      <div>
                        <strong className="text-sm font-bold block">{timeLeft.mins}</strong>
                        <span className="text-[9px] text-gray-400">Mins</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights (Food & Dress) */}
                  <div className="space-y-2 text-xs border-t border-gray-100 pt-3">
                    <div className="flex items-start space-x-2">
                      <Utensils className="w-3.5 h-3.5 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong className="text-[#083B2D]">Feast: </strong>
                        {fest.authenticFood.slice(0, 2).join(', ')}
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Music className="w-3.5 h-3.5 text-[#E67E22] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <strong className="text-[#083B2D]">Rhythm: </strong>
                        {fest.musicInstruments.slice(0, 3).join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Best Locations Badge */}
                  <div className="pt-2 text-[11px] text-gray-500 font-mono">
                    <strong className="text-[#083B2D]">Best Spots: </strong>
                    {fest.bestLocations.slice(0, 2).join(' • ')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
