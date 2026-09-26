import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HERITAGE_SITES } from '../data/heritageSites';
import { Volume2, VolumeX, MapPin, Award, Clock, DollarSign, Calendar, Compass, Shield, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { heritageAudio } from '../utils/audioService';
import { PoliticalMapLocator } from '../components/map/PoliticalMapLocator';

export const HeritageDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const site = HERITAGE_SITES.find((s) => s.slug === slug) || HERITAGE_SITES[0];

  const handlePlayAudio = () => {
    if (isPlayingAudio) {
      heritageAudio.stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      heritageAudio.playTempleBell();
      heritageAudio.speakGuide(site.audioGuideText, () => setIsPlayingAudio(false));
    }
  };

  const allPhotos = [site.heroImage, ...(site.gallery || [])];

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/explore"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#083B2D] hover:text-[#C49A3A] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 50 Monuments</span>
          </Link>

          <div className="flex items-center space-x-2">
            {site.unescoYear && (
              <span className="px-3 py-1 rounded-full bg-[#083B2D] text-[#C49A3A] text-xs font-mono font-bold flex items-center space-x-1 shadow-gold-glow">
                <Award className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>UNESCO World Heritage Site ({site.unescoYear})</span>
              </span>
            )}
          </div>
        </div>

        {/* Hero Gallery Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[460px] sm:h-[540px] border border-[#C49A3A]/30 group">
          <img
            src={allPhotos[selectedPhotoIndex]}
            alt={site.name}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Hero Content Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-serif italic text-[#DFB757] block mb-1">
                {site.hindiName}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F4] leading-tight">
                {site.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 mt-2 font-mono">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C49A3A]" />
                  <span>{site.state}</span>
                </span>
                <span>•</span>
                <span>Dynasty: {site.dynasty}</span>
                <span>•</span>
                <span>Period: {site.period}</span>
              </div>
            </div>

            {/* Audio Guide Play Button */}
            <button
              onClick={handlePlayAudio}
              className={`px-6 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase flex items-center space-x-2.5 transition-all shadow-gold-glow ${
                isPlayingAudio
                  ? 'bg-red-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] hover:brightness-110'
              }`}
            >
              {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Stop Audio Guide' : 'Play Audio Guide (Narrator)'}</span>
            </button>
          </div>

          {/* Thumbnail Selector Strip */}
          {allPhotos.length > 1 && (
            <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/50 p-2 rounded-2xl backdrop-blur-md">
              {allPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedPhotoIndex(i)}
                  className={`w-14 h-10 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedPhotoIndex === i ? 'border-[#C49A3A] scale-105' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Narrative, History & Architecture */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Section */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#083B2D]">
                Historical Overview & Significance
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                {site.description}
              </p>
            </div>

            {/* Architecture Details */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                Architectural Style & Engineering Marvel
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-[#083B2D]/5 text-[#083B2D] text-xs font-mono font-semibold">
                Style: {site.architectureStyle}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                Constructed during the {site.period} by the {site.dynasty}, the monument exemplifies peak mastery of dry interlocking stone masonry, acoustic calculations, and cosmic alignments without modern machinery.
              </p>
            </div>

            {/* Fascinating Facts Section */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#083B2D] flex items-center space-x-2">
                <Compass className="w-5 h-5 text-[#C49A3A]" />
                <span>Verified Historical Facts & Mysteries</span>
              </h3>
              <ul className="space-y-3">
                {site.facts.map((fact, index) => (
                  <li key={index} className="flex items-start space-x-3 text-sm text-gray-700 font-light">
                    <CheckCircle className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio Guide Transcript */}
            <div className="bg-[#083B2D] text-[#FAF8F4] p-8 rounded-3xl border border-[#C49A3A]/40 shadow-gold-glow space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#C49A3A] tracking-wider">
                  Audio Guide Narration Script
                </span>
                <Volume2 className="w-4 h-4 text-[#C49A3A]" />
              </div>
              <p className="text-sm leading-relaxed italic text-white/90 font-serif">
                "{site.audioGuideText}"
              </p>
            </div>
          </div>

          {/* Right Column: Travel Logistics & Visitor Data */}
          <div className="lg:col-span-4 space-y-6">
            {/* Practical Visitor Specifications */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                Visitor Logistics
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                  <Clock className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Visiting Timings</strong>
                    <span className="text-gray-600">{site.timings}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                  <DollarSign className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Entry Fee (ASI Verified)</strong>
                    <span className="text-gray-600">Indians: {site.entryFeeIndians}</span>
                    <span className="text-gray-600 block">Foreigners: {site.entryFeeForeigners}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pb-3 border-b border-gray-100">
                  <Calendar className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Best Season to Visit</strong>
                    <span className="text-[#C49A3A] font-semibold">{site.bestMonths}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C49A3A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 block">Coordinates</strong>
                    <span className="text-gray-600 font-mono">{site.latitude}° N, {site.longitude}° E</span>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${site.latitude},${site.longitude}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-2xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs flex items-center justify-center space-x-2 hover:bg-[#0D523F] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Sovereign Political Map Locator */}
            <PoliticalMapLocator
              monumentName={site.name}
              state={site.state}
              latitude={site.latitude}
              longitude={site.longitude}
            />

            {/* Nearby Attractions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#083B2D]">
                Nearby Attractions in {site.state}
              </h4>
              <div className="space-y-2 text-xs">
                {site.nearbyAttractions.map((attraction, i) => (
                  <div key={i} className="p-2.5 bg-[#FAF8F4] rounded-xl flex items-center space-x-2 text-gray-700">
                    <Compass className="w-3.5 h-3.5 text-[#C49A3A]" />
                    <span>{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Trip Planner CTA */}
            <div className="bg-gradient-to-br from-[#083B2D] to-[#04231B] text-white p-6 rounded-3xl border border-[#C49A3A]/30 space-y-3 text-center">
              <h4 className="font-serif text-base font-bold text-[#C49A3A]">
                Include {site.name} in Your AI Itinerary
              </h4>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Generate an end-to-end customized travel plan including hotels, restaurants, and transport.
              </p>
              <Link
                to="/ai-planner"
                className="inline-block w-full py-2.5 rounded-full bg-[#C49A3A] text-[#083B2D] font-bold text-xs hover:bg-[#DFB757] transition-colors"
              >
                Plan Trip with Rishi AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
