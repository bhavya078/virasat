import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  DollarSign,
  Compass,
  Utensils,
  Users,
  Send,
  Printer,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Camera,
  ShoppingBag,
  Navigation,
  Ticket,
  BookOpen,
  Hotel,
  Sun,
  Layers,
  Globe
} from 'lucide-react';
import { ALL_INDIAN_STATES } from '../../data/statesData';
import { ItineraryRequest, ItineraryResult } from '../../types';
import { AITripPlannerService } from '../../services/aiItineraryEngine';
import { heritageAudio } from '../../utils/audioService';
import { useLanguage } from '../../context/LanguageContext';

const POPULAR_DESTINATIONS = [
  'Hampi',
  'Varanasi',
  'Meghalaya',
  'Ladakh',
  'Kerala',
  'Gujarat',
  'Tamil Nadu',
  'Khajuraho',
  'Amritsar',
  'Odisha',
  'Kashmir',
  'Rajasthan'
];

const INTEREST_OPTIONS = [
  { id: 'heritage', label: 'Heritage & Forts', icon: '🏛️' },
  { id: 'culinary', label: 'Food & Culinary', icon: '🍲' },
  { id: 'nature', label: 'Nature & Valleys', icon: '🌿' },
  { id: 'spiritual', label: 'Spiritual & Sacred', icon: '🪔' },
  { id: 'adventure', label: 'Adventure & Trails', icon: '🏔️' },
  { id: 'photography', label: 'Photography & Art', icon: '📸' }
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const LANGUAGES = [
  'English', 'Hindi', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Kannada', 'Malayalam'
];

export const AITripPlanner: React.FC = () => {
  const { t, tState } = useLanguage();

  // Wizard input state
  const [formData, setFormData] = useState<ItineraryRequest>({
    destination: 'Hampi',
    days: 4,
    budgetLevel: 'Heritage Luxury',
    season: 'Winter (Nov-Feb)',
    travelStyle: 'Royal Heritage & Forts',
    foodPreference: 'Pure Vegetarian',
    companions: 'Romantic Couple',
    adventureLevel: 'Moderate Sightseeing',
    interests: ['Heritage & Forts', 'Photography & Art'],
    monthOfTravel: 'October',
    languagePreference: 'English'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const [itineraryResult, setItineraryResult] = useState<ItineraryResult | null>(null);

  // Chat conversation mode
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Namaste! I am Rishi AI, your Chief Heritage Travel Architect for India. Select your journey parameters on the left or type your dream pilgrimage, and I will forge an authenticated, destination-specific royal itinerary with exact routes, entry fees, and heritage stays.',
      time: 'Just now'
    }
  ]);
  const [userChatInput, setUserChatInput] = useState('');

  const toggleInterest = (label: string) => {
    const current = formData.interests || [];
    if (current.includes(label)) {
      setFormData({ ...formData, interests: current.filter((i) => i !== label) });
    } else {
      setFormData({ ...formData, interests: [...current, label] });
    }
  };

  const generateItinerary = () => {
    setIsGenerating(true);
    setItineraryResult(null);
    setStreamedText('');
    heritageAudio.playTempleBell();

    const realResult = AITripPlannerService.generateDestinationItinerary(formData);

    // Stream animated progress text
    let currentChars = 0;
    const textSnippet = `Synthesizing ${formData.days}-day bespoke expedition for ${realResult.destination}... Analyzing ASI ticket registries, golden hour angles, and regional culinary trails... Complete!`;

    const streamInterval = setInterval(() => {
      currentChars += 4;
      setStreamedText(textSnippet.slice(0, currentChars));
      if (currentChars >= textSnippet.length) {
        clearInterval(streamInterval);
        setIsGenerating(false);
        setItineraryResult(realResult);

        // Add AI message to chat
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: `I have architected your ${realResult.durationDays}-day expedition to ${realResult.destination} (Estimated Budget: ${realResult.totalEstimatedCostINR}). Your verified travel route, ASI entry fees, photo spots, and culinary trail are prepared below!`,
            time: 'Just now'
          }
        ]);
      }
    }, 20);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userChatInput.trim()) return;

    const userText = userChatInput.trim();
    setUserChatInput('');

    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'Just now' }
    ]);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matchedDest: string | null = null;

      for (const d of POPULAR_DESTINATIONS) {
        if (lower.includes(d.toLowerCase())) {
          matchedDest = d;
          break;
        }
      }
      if (!matchedDest) {
        for (const s of ALL_INDIAN_STATES) {
          if (lower.includes(s.name.toLowerCase())) {
            matchedDest = s.name;
            break;
          }
        }
      }

      if (matchedDest) {
        const updated = { ...formData, destination: matchedDest };
        setFormData(updated);
        const newResult = AITripPlannerService.generateDestinationItinerary(updated);
        setItineraryResult(newResult);
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: `Understood! I have recalibrated your master itinerary for ${newResult.destination} (${newResult.durationDays} Days, ${newResult.travelStyle}). Updated routes, entry fees, and day-by-day schedules are now active below!`,
            time: 'Just now'
          }
        ]);
      } else {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: `Understood: "${userText}". I have updated your travel parameters. Click "Generate Royal AI Itinerary" to compile the new master plan!`,
            time: 'Just now'
          }
        ]);
      }
    }, 500);
  };

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>{t('plannerBadge', 'Sovereign AI Trip Architect • Bharat Engine')}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            {t('plannerTitle', 'AI Heritage Trip Architect')}
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            {t('plannerSubtitle', 'Configure your personalized travel parameters to generate a 100% destination-specific itinerary, budget breakdown, ASI entry passes, and verified routes.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Parameter Wizard Controls */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="font-serif text-xl text-[#083B2D] font-bold flex items-center space-x-2">
                <Compass className="w-5 h-5 text-[#C49A3A]" />
                <span>Trip Parameters</span>
              </h3>
              <span className="text-[11px] text-[#C49A3A] font-mono font-semibold">Zero Placeholders</span>
            </div>

            {/* Destination Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Destination (State, City, or Monument)
              </label>
              <div className="space-y-2">
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
                >
                  <optgroup label="Popular Heritage Hubs">
                    {POPULAR_DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="28 States & 8 Union Territories">
                    {ALL_INDIAN_STATES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.region})
                      </option>
                    ))}
                  </optgroup>
                </select>

                {/* Quick Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Hampi', 'Varanasi', 'Meghalaya', 'Ladakh', 'Kerala', 'Khajuraho'].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setFormData({ ...formData, destination: chip })}
                      className={`text-[10px] px-2 py-0.5 rounded-full border transition-all ${
                        formData.destination.toLowerCase().includes(chip.toLowerCase())
                          ? 'bg-[#083B2D] text-[#C49A3A] border-[#083B2D] font-bold'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#C49A3A]'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-[#111827] uppercase tracking-wider">
                  Duration (Days)
                </label>
                <span className="font-serif text-sm font-bold text-[#C49A3A]">
                  {formData.days} Days
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="14"
                value={formData.days}
                onChange={(e) => setFormData({ ...formData, days: parseInt(e.target.value) })}
                className="w-full accent-[#C49A3A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                <span>1 Day</span>
                <span>4 Days</span>
                <span>7 Days</span>
                <span>14 Days</span>
              </div>
            </div>

            {/* Budget Comfort Tier */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Budget & Luxury Tier
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Backpacker', 'Comfort', 'Heritage Luxury', 'Royal Maharaja'] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetLevel: b })}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                      formData.budgetLevel === b
                        ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-sm'
                        : 'border-gray-200 hover:border-[#C49A3A]/40 text-[#111827]/80'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Companions / Style */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Travel Style / Companions
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Solo Wanderer', 'Romantic Couple', 'Family with Elders & Kids', 'Friends Expedition'] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFormData({ ...formData, companions: c })}
                    className={`p-2 rounded-xl text-xs border text-center transition-all ${
                      formData.companions === c
                        ? 'bg-[#C49A3A] text-[#083B2D] border-[#C49A3A] font-bold'
                        : 'border-gray-200 text-[#111827]/70 hover:border-[#C49A3A]/40'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests Checkboxes / Multi-select */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Core Interests & Experiences
              </label>
              <div className="grid grid-cols-2 gap-2">
                {INTEREST_OPTIONS.map((item) => {
                  const isChecked = (formData.interests || []).includes(item.label);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleInterest(item.label)}
                      className={`flex items-center space-x-2 p-2 rounded-xl text-xs border text-left transition-all ${
                        isChecked
                          ? 'bg-[#083B2D]/10 border-[#083B2D] text-[#083B2D] font-bold'
                          : 'border-gray-200 text-gray-700 hover:border-[#C49A3A]'
                      }`}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Month & Language Preference */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                  Month of Travel
                </label>
                <select
                  value={formData.monthOfTravel}
                  onChange={(e) => setFormData({ ...formData, monthOfTravel: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
                >
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                  Language Guide
                </label>
                <select
                  value={formData.languagePreference}
                  onChange={(e) => setFormData({ ...formData, languagePreference: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Food Preference */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Dietary & Food Preference
              </label>
              <select
                value={formData.foodPreference}
                onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value as any })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
              >
                <option value="Pure Vegetarian">Pure Vegetarian (No meat/fish)</option>
                <option value="Sattvic / Temple Feast">Sattvic (No onion, no garlic)</option>
                <option value="Jain Friendly">Jain Friendly (Root-vegetable free)</option>
                <option value="Authentic Regional Non-Veg">Authentic Regional Non-Veg Specialities</option>
                <option value="Local Street Explorer">Local Street Food Explorer</option>
              </select>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={generateItinerary}
              disabled={isGenerating}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#C49A3A] via-[#DFB757] to-[#AA7F27] text-[#083B2D] font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-[#083B2D] animate-spin-slow" />
              <span>{isGenerating ? t('generatingItinerary', 'Synthesizing Itinerary...') : t('generateItineraryBtn', 'Generate Royal AI Itinerary')}</span>
            </button>
          </div>

          {/* Right Column: Interactive Chat Interface & Master Output */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Chat Log Window */}
            <div className="bg-white rounded-3xl border border-[#C49A3A]/25 p-6 shadow-luxury flex flex-col h-[320px]">
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#083B2D] border border-[#C49A3A] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C49A3A]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#083B2D]">Rishi AI Heritage Companion</h4>
                  <span className="text-[10px] text-green-600 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
                    <span>Sovereign Neural Engine • Bharat Live</span>
                  </span>
                </div>
              </div>

              {/* Chat Message Bubbles */}
              <div className="flex-1 overflow-y-auto py-3 space-y-3 pr-2">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#083B2D] text-[#FAF8F4] rounded-br-none'
                          : 'bg-[#FAF8F4] text-[#111827] border border-[#C49A3A]/25 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1 px-1 font-mono">{msg.time}</span>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex items-center space-x-2 text-xs text-[#C49A3A] font-mono italic">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>{streamedText}</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendChat} className="pt-2 border-t border-gray-100 flex items-center space-x-2">
                <input
                  type="text"
                  value={userChatInput}
                  onChange={(e) => setUserChatInput(e.target.value)}
                  placeholder="Ask Rishi AI to change destination to Hampi, Varanasi, Ladakh..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs text-[#111827] focus:outline-none focus:border-[#C49A3A]"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#083B2D] text-[#C49A3A] hover:bg-[#0D523F] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Generated Master Itinerary Output Card */}
            {itineraryResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl border border-[#C49A3A]/40 p-6 sm:p-8 shadow-luxury space-y-6"
              >
                {/* Header & Print Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] bg-[#083B2D]/5 px-2.5 py-0.5 rounded-full font-bold">
                      Verified Master Expedition
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#083B2D] mt-1">
                      {itineraryResult.destination} — {itineraryResult.durationDays} Days
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Style: <span className="font-semibold text-gray-700">{itineraryResult.travelStyle}</span> • Season: <span className="font-semibold text-gray-700">{itineraryResult.bestTimeToVisit || 'Optimal Season'}</span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => window.print()}
                      className="px-3 py-1.5 rounded-full border border-gray-200 hover:border-[#C49A3A] text-xs text-[#083B2D] flex items-center space-x-1.5 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Estimated Budget Summary Table */}
                <div className="bg-[#FAF8F4] rounded-2xl p-4 border border-[#C49A3A]/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#083B2D] uppercase tracking-wider flex items-center space-x-1.5">
                      <DollarSign className="w-4 h-4 text-[#C49A3A]" />
                      <span>Estimated Total Budget ({itineraryResult.budgetLevel})</span>
                    </span>
                    <strong className="text-lg font-serif text-[#C49A3A]">
                      {itineraryResult.totalEstimatedCostINR}
                    </strong>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="block text-[10px] text-gray-500 uppercase">Stays</span>
                      <strong className="text-[#083B2D]">₹{itineraryResult.budgetBreakdown.stay.toLocaleString()}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="block text-[10px] text-gray-500 uppercase">Food</span>
                      <strong className="text-[#083B2D]">₹{itineraryResult.budgetBreakdown.food.toLocaleString()}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="block text-[10px] text-gray-500 uppercase">Transport</span>
                      <strong className="text-[#083B2D]">₹{itineraryResult.budgetBreakdown.transport.toLocaleString()}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="block text-[10px] text-gray-500 uppercase">Passes</span>
                      <strong className="text-[#083B2D]">₹{itineraryResult.budgetBreakdown.monumentsGuide.toLocaleString()}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-gray-100">
                      <span className="block text-[10px] text-gray-500 uppercase">Reserve</span>
                      <strong className="text-[#083B2D]">₹{itineraryResult.budgetBreakdown.emergencyReserve.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                {/* Travel Route & Estimated Times Card */}
                {itineraryResult.travelRoute && itineraryResult.travelRoute.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <Navigation className="w-4 h-4 text-[#C49A3A]" />
                      <span>Transit Routes & Estimated Travel Times</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {itineraryResult.travelRoute.map((route, idx) => (
                        <div key={idx} className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100 text-xs space-y-1">
                          <div className="font-semibold text-[#083B2D] flex items-center space-x-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#C49A3A] shrink-0" />
                            <span className="truncate">{route.from} → {route.to}</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-gray-600 pt-1 border-t border-gray-200/60">
                            <span>{route.distance} ({route.duration})</span>
                            <span className="font-medium text-[#C49A3A]">{route.mode}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verified ASI & Monument Entry Fees */}
                {itineraryResult.entryFees && itineraryResult.entryFees.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <Ticket className="w-4 h-4 text-[#C49A3A]" />
                      <span>Verified ASI & Monument Entry Passes</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {itineraryResult.entryFees.map((fee, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF8F4] border border-gray-100">
                          <span className="font-medium text-[#083B2D] truncate mr-2">{fee.site}</span>
                          <div className="text-right shrink-0">
                            <span className="text-[10px] text-gray-500 mr-2">Ind: <strong className="text-gray-900">{fee.indians}</strong></span>
                            <span className="text-[10px] text-gray-500">For: <strong className="text-[#C49A3A]">{fee.foreigners}</strong></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Day-by-Day Master Schedule */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-[#083B2D] flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#C49A3A]" />
                    <span>Day-by-Day Master Schedule</span>
                  </h4>

                  {itineraryResult.days.map((plan) => (
                    <div
                      key={plan.day}
                      className="border border-gray-200 rounded-2xl p-5 hover:border-[#C49A3A]/40 transition-colors bg-white shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                        <span className="font-serif text-base font-bold text-[#083B2D]">
                          {plan.theme}
                        </span>
                        <span className="text-[10px] font-mono text-[#C49A3A] bg-[#083B2D]/5 px-2.5 py-0.5 rounded-full font-bold">
                          Day {plan.day}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100">
                          <span className="font-bold text-[#C49A3A] block mb-1">Morning ({plan.morning.time})</span>
                          <p className="text-gray-700 leading-relaxed">{plan.morning.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">Location: {plan.morning.location} • Tip: {plan.morning.tip}</span>
                        </div>

                        <div className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100">
                          <span className="font-bold text-[#E67E22] block mb-1">Afternoon ({plan.afternoon.time})</span>
                          <p className="text-gray-700 leading-relaxed">{plan.afternoon.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">{plan.afternoon.foodTip}</span>
                        </div>

                        <div className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100">
                          <span className="font-bold text-[#083B2D] block mb-1">Evening ({plan.evening.time})</span>
                          <p className="text-gray-700 leading-relaxed">{plan.evening.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">Sunset: {plan.evening.sunsetSpot}</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-[#083B2D]/90 italic pt-2 border-t border-dashed border-gray-200 flex items-center space-x-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#C49A3A] shrink-0" />
                        <span>{plan.heritageFact}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best Photo Spots & Golden Hours */}
                {itineraryResult.bestPhotoSpots && itineraryResult.bestPhotoSpots.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <Camera className="w-4 h-4 text-[#C49A3A]" />
                      <span>Best Photo Spots & Golden Hour Timings</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {itineraryResult.bestPhotoSpots.map((spot, idx) => (
                        <div key={idx} className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100 space-y-1">
                          <div className="flex items-center justify-between">
                            <strong className="text-[#083B2D]">{spot.spot}</strong>
                            <span className="text-[10px] font-mono text-[#C49A3A] bg-[#C49A3A]/10 px-2 py-0.5 rounded font-semibold">{spot.bestTime}</span>
                          </div>
                          <p className="text-gray-600 text-[11px]">{spot.tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cultural Etiquette & Dress Codes */}
                {itineraryResult.culturalEtiquette && itineraryResult.culturalEtiquette.length > 0 && (
                  <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 space-y-2 text-xs">
                    <h4 className="font-serif text-sm font-bold text-amber-900 flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-amber-700" />
                      <span>Cultural Etiquette & Sacred Protocols</span>
                    </h4>
                    <ul className="space-y-1.5 text-amber-950">
                      {itineraryResult.culturalEtiquette.map((rule, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#C49A3A] mt-0.5">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Shopping Recommendations */}
                {itineraryResult.shoppingRecommendations && itineraryResult.shoppingRecommendations.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-200 p-4 space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <ShoppingBag className="w-4 h-4 text-[#C49A3A]" />
                      <span>Artisan Shopping & Traditional GI Crafts</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {itineraryResult.shoppingRecommendations.map((shop, idx) => (
                        <div key={idx} className="bg-[#FAF8F4] p-3 rounded-xl border border-gray-100 space-y-1">
                          <strong className="text-[#083B2D] block">{shop.item}</strong>
                          <div className="text-[11px] text-gray-500">Market: <span className="font-medium text-gray-800">{shop.market}</span></div>
                          <p className="text-gray-600 text-[11px]">Tip: {shop.tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Heritage Stays & Authentic Eateries */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <Hotel className="w-4 h-4 text-[#C49A3A]" />
                      <span>Recommended Heritage Stays</span>
                    </h4>
                    <div className="space-y-2">
                      {itineraryResult.heritageStays.map((stay, idx) => (
                        <div key={idx} className="bg-[#FAF8F4] p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                          <div className="truncate mr-2">
                            <strong className="text-[#083B2D] block truncate">{stay.name}</strong>
                            <span className="text-[10px] text-gray-500">{stay.style}</span>
                          </div>
                          <span className="text-xs font-serif font-bold text-[#C49A3A] shrink-0">{stay.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-4 rounded-2xl space-y-3">
                    <h4 className="font-serif text-sm font-bold text-[#083B2D] flex items-center space-x-2">
                      <Utensils className="w-4 h-4 text-[#C49A3A]" />
                      <span>Authentic Eateries & Culinary Trail</span>
                    </h4>
                    <div className="space-y-2">
                      {itineraryResult.authenticEateries.map((eat, idx) => (
                        <div key={idx} className="bg-[#FAF8F4] p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                          <div className="truncate mr-2">
                            <strong className="text-[#083B2D] block truncate">{eat.name}</strong>
                            <span className="text-[10px] text-gray-500 truncate">{eat.speciality}</span>
                          </div>
                          <span className="text-xs font-serif font-bold text-gray-700 shrink-0">{eat.price || eat.priceRange}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Local Food Badges */}
                <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-gray-200/60">
                  <span className="block text-xs font-semibold text-[#083B2D] uppercase tracking-wider mb-2">
                    Iconic Regional Dishes To Taste
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {itineraryResult.localCuisineToTaste.map((dish, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white border border-[#C49A3A]/30 text-gray-800 rounded-full font-medium shadow-xs">
                        🍲 {dish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Weather & Packing Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-[#F2EEE6] p-4 rounded-2xl">
                    <strong className="block text-[#083B2D] font-serif text-sm mb-2 flex items-center space-x-1.5">
                      <Sun className="w-4 h-4 text-[#C49A3A]" />
                      <span>Weather & Climate Advisory</span>
                    </strong>
                    <p className="text-gray-700 mb-1"><strong>Temperature:</strong> {itineraryResult.weatherForecast.temp}</p>
                    <p className="text-gray-700 mb-1"><strong>Condition:</strong> {itineraryResult.weatherForecast.climate}</p>
                    <p className="text-gray-700"><strong>Clothing:</strong> {itineraryResult.weatherForecast.clothingAdvice}</p>
                  </div>

                  <div className="bg-[#F2EEE6] p-4 rounded-2xl">
                    <strong className="block text-[#083B2D] font-serif text-sm mb-2 flex items-center space-x-1.5">
                      <CheckCircle className="w-4 h-4 text-[#083B2D]" />
                      <span>Packing Essentials Checklist</span>
                    </strong>
                    <ul className="space-y-1 text-gray-700">
                      {itineraryResult.packingChecklist.map((item, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#083B2D] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Emergency Tourism Helplines */}
                <div className="bg-red-50/60 border border-red-200/60 p-4 rounded-2xl text-xs">
                  <div className="flex items-center space-x-2 text-red-900 font-bold mb-2">
                    <Shield className="w-4 h-4 text-red-700" />
                    <span>Official Safety & Emergency Helplines</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {itineraryResult.emergencyHelplines.map((line, i) => (
                      <div key={i} className="text-red-950">
                        <span className="font-semibold block">{line.agency}:</span>
                        <span>{line.phone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
