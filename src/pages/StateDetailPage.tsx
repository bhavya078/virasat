import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { STATES_DATA } from '../data/statesData';
import { HERITAGE_SITES } from '../data/heritageSites';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { FESTIVALS } from '../data/festivals';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import {
  MapPin,
  Users,
  Compass,
  ArrowLeft,
  Sparkles,
  PhoneCall,
  Calendar,
  Utensils,
  Music,
  Hotel,
  Coffee,
  CheckCircle2,
  ExternalLink,
  Volume2,
  VolumeX,
  Clock,
  ShieldAlert,
  CloudSun
} from 'lucide-react';
import { heritageAudio } from '../utils/audioService';

export const StateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isNarrating, setIsNarrating] = useState(false);

  // Look up state by slug or normalize
  const stateKey = slug?.toLowerCase() || 'rajasthan';
  const state = STATES_DATA[stateKey] || Object.values(STATES_DATA).find((s) => s.slug === slug) || STATES_DATA['rajasthan'];

  // Query linked heritage items for this state
  const stateName = state.name.toLowerCase();
  const linkedMonuments = HERITAGE_SITES.filter(
    (s) => s.state.toLowerCase() === stateName || s.state.toLowerCase().includes(stateName) || stateName.includes(s.state.toLowerCase())
  );
  const linkedGems = HIDDEN_GEMS.filter(
    (g) => g.state.toLowerCase() === stateName || g.state.toLowerCase().includes(stateName) || stateName.includes(g.state.toLowerCase())
  );
  const linkedFestivals = FESTIVALS.filter(
    (f) => f.state.toLowerCase() === stateName || f.state.toLowerCase().includes(stateName) || stateName.includes(f.state.toLowerCase())
  );
  const linkedCulture = CULTURAL_EXPERIENCES.filter(
    (c) => c.state.toLowerCase() === stateName || c.state.toLowerCase().includes(stateName) || stateName.includes(c.state.toLowerCase())
  );

  const handleToggleNarration = () => {
    if (isNarrating) {
      heritageAudio.stopSpeaking();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      heritageAudio.playTempleBell();
      const narrative = `${state.name}. ${state.description} Historic dynasties include: ${state.dynasties.join(', ')}. Capital is ${state.capital}.`;
      heritageAudio.speakGuide(narrative, () => setIsNarrating(false));
    }
  };

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link & Navigation */}
        <div className="flex items-center justify-between">
          <Link
            to="/states"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#083B2D] hover:text-[#C49A3A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 36 States & UTs</span>
          </Link>

          {/* Quick Helplines */}
          <div className="hidden sm:flex items-center space-x-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-700" />
              <span>Police: {state.emergencyNumbers.police}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center space-x-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>Tourism: {state.emergencyNumbers.touristHelpline}</span>
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] border border-[#C49A3A]/30 group">
          <img
            src={state.heroImage}
            alt={state.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083B2D] via-black/40 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-[#C49A3A] text-[#083B2D] text-xs font-mono font-bold uppercase tracking-wider">
                  State Capital: {state.capital}
                </span>
                <span className="text-xs text-white/80 font-mono">
                  Population: {state.population}
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F4]">
                {state.name}
              </h1>
              <p className="text-xs sm:text-sm text-white/85 font-subheading italic max-w-xl">
                {state.description}
              </p>
            </div>

            {/* Audio & Weather */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 text-xs text-white/90 flex items-center space-x-2">
                <CloudSun className="w-4 h-4 text-[#C49A3A]" />
                <div>
                  <span className="block font-bold">{state.weather.temp}</span>
                  <span className="text-[10px] text-white/70">{state.weather.bestSeason}</span>
                </div>
              </div>

              <button
                onClick={handleToggleNarration}
                className={`px-5 py-3 rounded-full font-bold text-xs tracking-wider uppercase flex items-center space-x-2 transition-all shadow-gold-glow ${
                  isNarrating
                    ? 'bg-red-600 text-white animate-pulse'
                    : 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] hover:brightness-110'
                }`}
              >
                {isNarrating ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isNarrating ? 'Stop State Lore' : 'Listen to State Lore'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* History & Ruling Dynasties */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                Dynastic Lineage & Historical Milestones
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                {state.historyOverview}
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block mb-2">
                  Historic Ruling Dynasties:
                </span>
                <div className="flex flex-wrap gap-2">
                  {state.dynasties.map((dynasty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-[#FAF8F4] text-[#083B2D] text-xs font-medium border border-[#C49A3A]/30"
                    >
                      {dynasty}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Traditional Royal Gastronomy */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-5">
              <div className="flex items-center space-x-2">
                <Utensils className="w-5 h-5 text-[#C49A3A]" />
                <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
                  Royal Gastronomy & Culinary Heritage
                </h3>
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {state.cuisine.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                {/* Signature Dishes */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="block text-[#083B2D] uppercase font-mono text-[11px]">Signature Feasts</strong>
                  <ul className="space-y-1.5 text-gray-700">
                    {state.cuisine.dishes.map((dish, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Street Food */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="block text-[#083B2D] uppercase font-mono text-[11px]">Street Delicacies</strong>
                  <ul className="space-y-1.5 text-gray-700">
                    {state.cuisine.streetFood.map((item, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E67E22] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sweets */}
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="block text-[#083B2D] uppercase font-mono text-[11px]">Royal Confectionery</strong>
                  <ul className="space-y-1.5 text-gray-700">
                    {state.cuisine.sweets.map((sweet, i) => (
                      <li key={i} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{sweet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Linked Heritage Sites in this State */}
            {linkedMonuments.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
                    Iconic Heritage Monuments in {state.name} ({linkedMonuments.length})
                  </h3>
                  <Link to="/explore" className="text-xs font-semibold text-[#083B2D] hover:text-[#C49A3A]">
                    View All Monuments →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {linkedMonuments.map((m) => (
                    <Link
                      key={m.id}
                      to={`/heritage/${m.slug}`}
                      className="bg-white rounded-2xl overflow-hidden border border-[#C49A3A]/25 shadow-sm hover:shadow-md transition-all group flex"
                    >
                      <div className="w-28 h-28 flex-shrink-0 overflow-hidden bg-gray-900">
                        <img
                          src={m.heroImage}
                          alt={m.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3.5 flex flex-col justify-between flex-1">
                        <div>
                          <span className="text-[10px] font-mono text-[#C49A3A] font-bold block">{m.dynasty}</span>
                          <h4 className="font-serif text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-[#083B2D]">
                            {m.name}
                          </h4>
                          <span className="text-[11px] text-gray-500 block">{m.architectureStyle}</span>
                        </div>
                        <span className="text-[11px] text-[#083B2D] font-semibold flex items-center space-x-1">
                          <span>Explore Monument</span>
                          <span>→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Linked Hidden Gems */}
            {linkedGems.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
                    Untouched Hidden Gems in {state.name} ({linkedGems.length})
                  </h3>
                  <Link to="/hidden-gems" className="text-xs font-semibold text-[#E67E22] hover:text-[#D35400]">
                    View All 50 Gems →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {linkedGems.map((g) => (
                    <Link
                      key={g.id}
                      to={`/hidden-gems#${g.slug}`}
                      className="bg-white rounded-2xl p-4 border border-[#C49A3A]/25 shadow-sm hover:shadow-md transition-all flex items-center space-x-4 group"
                    >
                      <img
                        src={g.heroImage}
                        alt={g.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono text-[#E67E22] font-bold">
                            Serenity {g.uncrowdedScore}/100
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-gray-900 group-hover:text-[#083B2D]">
                          {g.name}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-1">{g.whyVisit}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Curated AI Suggested Itinerary Route */}
            <div className="bg-[#083B2D] text-[#FAF8F4] p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/40 shadow-gold-glow space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] block">
                    Rishi AI Algorithmic Itinerary
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F4]">
                    Curated 3-Day Route Across {state.name}
                  </h3>
                </div>
                <Sparkles className="w-6 h-6 text-[#C49A3A]" />
              </div>

              <div className="space-y-4">
                {state.aiSuggestedRoute.map((step) => (
                  <div key={step.day} className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C49A3A] text-[#083B2D] font-mono font-bold">
                        Day {step.day}
                      </span>
                      <strong className="text-[#FAF8F4]">{step.title}</strong>
                    </div>
                    <p className="text-xs text-white/80 font-light leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {step.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] bg-black/30 px-2 py-0.5 rounded text-white/90">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/ai-planner"
                className="inline-block w-full py-3 rounded-full bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs uppercase tracking-wider text-center shadow-gold-glow hover:brightness-110 transition-all"
              >
                Customize Day-by-Day Route in AI Planner
              </Link>
            </div>
          </div>

          {/* Right Column: Travel Logistics, Hotels & Dining */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sovereign Political Registry Card */}
            <div className="bg-[#083B2D] text-white p-5 rounded-3xl border border-[#C49A3A]/40 shadow-luxury space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#DFB757] font-bold uppercase tracking-wider flex items-center space-x-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
                  <span>Sovereign Political Registry</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] text-[#C49A3A] font-mono">
                  State of Bharat
                </span>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {state.name} is an authenticated sovereign administrative division of the Republic of India with administrative headquarters at {state.capital}.
              </p>
              <Link
                to="/states"
                className="w-full py-2 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-1.5 hover:brightness-110 transition-all"
              >
                <span>View on National Political Map</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Daily Travel Budget Bracket */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#083B2D]">
                Estimated Daily Expenses
              </h4>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-[#FAF8F4] flex justify-between items-center">
                  <span className="text-gray-600">Backpacker / Budget:</span>
                  <strong className="text-[#083B2D]">{state.estimatedDailyBudget.budget}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F4] flex justify-between items-center">
                  <span className="text-gray-600">Comfort / Mid-Range:</span>
                  <strong className="text-[#C49A3A]">{state.estimatedDailyBudget.midRange}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF8F4] flex justify-between items-center">
                  <span className="text-gray-600">Heritage / Palace Stay:</span>
                  <strong className="text-[#E67E22]">{state.estimatedDailyBudget.luxury}</strong>
                </div>
              </div>
            </div>

            {/* Curated Heritage & Luxury Hotels */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#083B2D] flex items-center space-x-2">
                <Hotel className="w-4 h-4 text-[#C49A3A]" />
                <span>Curated Heritage Stays</span>
              </h4>
              <div className="space-y-3">
                {state.hotels.map((h, i) => (
                  <div key={i} className="p-3 bg-[#FAF8F4] rounded-2xl border border-gray-100 space-y-1 text-xs">
                    <div className="flex justify-between items-start">
                      <strong className="text-gray-900 font-serif text-xs block">{h.name}</strong>
                      <span className="text-[10px] font-mono text-[#C49A3A] font-bold">★ {h.rating}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 block">{h.location} • {h.type}</span>
                    <span className="text-xs font-mono font-bold text-[#083B2D] block">{h.pricePerNight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Authentic Restaurants */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#083B2D] flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-[#C49A3A]" />
                <span>Iconic Eateries</span>
              </h4>
              <div className="space-y-3">
                {state.restaurants.map((r, i) => (
                  <div key={i} className="p-3 bg-[#FAF8F4] rounded-2xl border border-gray-100 space-y-1 text-xs">
                    <div className="flex justify-between items-start">
                      <strong className="text-gray-900 font-serif text-xs block">{r.name}</strong>
                      <span className="text-[10px] font-mono text-[#E67E22] font-bold">{r.priceRange}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 block">{r.cuisineType}</span>
                    <span className="text-[11px] text-[#083B2D] font-medium block">Must Try: {r.mustTry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Historical Facts */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-3">
              <h4 className="font-serif text-base font-bold text-[#083B2D]">
                Verified State Milestones
              </h4>
              <ul className="space-y-2 text-xs text-gray-600 font-light">
                {state.facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
