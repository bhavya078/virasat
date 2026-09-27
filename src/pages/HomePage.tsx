import React from 'react';
import { CinematicHero } from '../components/home/CinematicHero';
import { InteractiveIndiaMap } from '../components/map/InteractiveIndiaMap';
import { MonumentCard3D } from '../components/monument/MonumentCard3D';
import { HERITAGE_SITES } from '../data/heritageSites';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { FESTIVALS } from '../data/festivals';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, MapPin, Award, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const featuredMonuments = HERITAGE_SITES.slice(0, 6);
  const featuredGems = HIDDEN_GEMS.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* 100vh Multi-Layer Cinematic Hero */}
      <CinematicHero />

      {/* CENTERPIECE: Interactive India Map */}
      <InteractiveIndiaMap />

      {/* Section: 50 Heritage Wonders Showcase Preview */}
      <section className="py-24 bg-[#FAF8F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                <Award className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>UNESCO & Imperial Wonders</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#083B2D] font-bold tracking-tight">
                {t('sectionHeritageTitle', 'Timeless Heritage Wonders')}
              </h2>
              <p className="font-subheading text-base sm:text-lg text-[#111827]/70 italic mt-1">
                {t('sectionHeritageSubtitle', '50 Masterpieces of Indian Art, Architecture & UNESCO Glory')}
              </p>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#083B2D] text-[#C49A3A] font-bold text-xs tracking-wider uppercase shadow-luxury hover:bg-[#0D523F] transition-all flex-shrink-0"
            >
              <span>View All 50 Monuments</span>
              <ArrowRight className="w-4 h-4 text-[#C49A3A]" />
            </Link>
          </div>

          {/* Monument 3D Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMonuments.map((site) => (
              <MonumentCard3D key={site.id} site={site} />
            ))}
          </div>
        </div>
      </section>

      {/* Section: 50 Untouched Hidden Gems Preview */}
      <section className="py-24 bg-[#F2EEE6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/40 text-[#E67E22] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                <Compass className="w-3.5 h-3.5 text-[#E67E22]" />
                <span>Beyond The Beaten Track</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#083B2D] font-bold tracking-tight">
                {t('sectionHiddenTitle', 'Untouched Hidden Gems')}
              </h2>
              <p className="font-subheading text-base sm:text-lg text-[#111827]/70 italic mt-1">
                {t('sectionHiddenSubtitle', '50 Secret Valleys, Ancient Caves & Pristine Villages')}
              </p>
            </div>

            <Link
              to="/hidden-gems"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#E67E22] text-white font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#D35400] transition-all flex-shrink-0"
            >
              <span>Explore All 50 Hidden Gems</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGems.map((gem) => (
              <div
                key={gem.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#C49A3A]/25 shadow-luxury flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={gem.heroImage}
                    alt={gem.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#083B2D]/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] text-[#C49A3A] font-mono">
                    Score: {gem.uncrowdedScore}/100
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-base font-bold text-[#FAF8F4] leading-tight">
                      {gem.name}
                    </h3>
                    <span className="text-[11px] text-white/80">{gem.state}</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {gem.whyVisit}
                  </p>
                  <Link
                    to={`/hidden-gems#${gem.slug}`}
                    className="text-xs font-semibold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Trip Architect Banner CTA */}
      <section className="py-20 bg-[#083B2D] text-[#FAF8F4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C49A3A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C49A3A]/40 text-[#C49A3A] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>National Sovereign AI Trip Architect</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F4]">
            Plan Your Journey with Rishi AI
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#FAF8F4]/80 italic max-w-2xl mx-auto">
            Get personalized day-by-day itineraries, exact budget breakdowns, authentic local food trails, and verified emergency helplines in seconds.
          </p>
          <div className="pt-2">
            <Link
              to="/ai-planner"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#C49A3A] via-[#DFB757] to-[#AA7F27] text-[#083B2D] font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:brightness-110 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#083B2D]" />
              <span>Launch AI Itinerary Architect</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
