import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, DollarSign, Compass, Utensils, Users, Send, Printer, Download, MapPin, CheckCircle, Clock, Shield, AlertCircle } from 'lucide-react';
import { ALL_INDIAN_STATES } from '../../data/statesData';
import { ItineraryRequest, ItineraryResult } from '../../types';
import { heritageAudio } from '../../utils/audioService';

export const AITripPlanner: React.FC = () => {
  // Wizard input state
  const [formData, setFormData] = useState<ItineraryRequest>({
    destination: 'Rajasthan',
    days: 4,
    budgetLevel: 'Heritage Luxury',
    season: 'Winter (Nov-Feb)',
    travelStyle: 'Royal Heritage & Forts',
    foodPreference: 'Pure Vegetarian',
    companions: 'Romantic Couple',
    adventureLevel: 'Moderate Sightseeing'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedText, setStreamedText] = useState('');
  const [itineraryResult, setItineraryResult] = useState<ItineraryResult | null>(null);

  // Chat conversation mode
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: 'Namaste! I am Rishi AI, your Chief Heritage Travel Architect for India. Select your journey parameters on the left or customize your dream pilgrimage, and I will forge an authenticated day-by-day royal itinerary.',
      time: 'Just now'
    }
  ]);
  const [userChatInput, setUserChatInput] = useState('');

  const generateItinerary = () => {
    setIsGenerating(true);
    setItineraryResult(null);
    setStreamedText('');
    heritageAudio.playTempleBell();

    const dest = formData.destination;
    const days = formData.days;
    const style = formData.travelStyle;
    const budget = formData.budgetLevel;

    // Simulate AI synthesis & generation
    const calculatedCost =
      budget === 'Backpacker'
        ? days * 2200
        : budget === 'Comfort'
        ? days * 5500
        : budget === 'Heritage Luxury'
        ? days * 18500
        : days * 45000;

    const daysPlan = Array.from({ length: days }, (_, i) => {
      const dayNum = i + 1;
      return {
        day: dayNum,
        theme: `Day ${dayNum}: ${dest} Royal Vistas & Sacred Heritage`,
        morning: {
          time: '07:30 AM',
          activity: `Sunrise photography at premier heritage landmarks and ancient temples in ${dest}.`,
          location: `Historic Citadel & Sacred Ghats of ${dest}`,
          tip: 'Arrive early before tourist buses to capture undisturbed morning golden light.'
        },
        afternoon: {
          time: '01:00 PM',
          activity: `Authentic regional culinary feast followed by an artisan craft workshop meeting master weavers.`,
          location: 'Traditional Heritage Dining Hall',
          foodTip: `Savor authentic regional dishes prepared strictly according to your ${formData.foodPreference} preference.`
        },
        evening: {
          time: '06:00 PM',
          activity: `Sunset viewpoint walk, cultural folk dance recital, and evening sacred lamp aarti ceremony.`,
          location: 'Royal Water Reservoir & Palace Amphitheater',
          sunsetSpot: 'Panoramic Hilltop Bastion'
        },
        heritageFact: `Did you know? This monument in ${dest} was engineered centuries ago without modern surveying tools using astronomical solstices.`
      };
    });

    const mockResult: ItineraryResult = {
      destination: dest,
      durationDays: days,
      travelStyle: style,
      budgetLevel: budget,
      totalEstimatedCostINR: `₹${calculatedCost.toLocaleString('en-IN')}`,
      budgetBreakdown: {
        stay: Math.round(calculatedCost * 0.45),
        food: Math.round(calculatedCost * 0.22),
        transport: Math.round(calculatedCost * 0.18),
        monumentsGuide: Math.round(calculatedCost * 0.10),
        emergencyReserve: Math.round(calculatedCost * 0.05)
      },
      weatherForecast: {
        temp: '22°C - 30°C',
        climate: 'Clear skies, mild morning breeze, dry afternoon',
        clothingAdvice: 'Breathable linen/cotton for daytime, lightweight pashmina shawl for evenings, temple-appropriate knee-covering attire.'
      },
      packingChecklist: [
        'Government Issued Photo ID for ASI monument tickets',
        'Comfortable slip-on walking shoes (easy removal at temples)',
        'Polarized sunglasses and mineral sunscreen',
        'Power bank for extensive smartphone photography',
        'Universal adapter and electrolyte sachets'
      ],
      days: daysPlan,
      localCuisineToTaste: [
        `Authentic ${dest} Grand Thali`,
        'Handmade Clay Oven Tandoor Breads',
        'Clay-pot Slow Simmered Spiced Curries',
        'Saffron & Cardamom Milk Confectionery'
      ],
      heritageStays: [
        { name: `Royal Heritage Haveli & Palace, ${dest}`, style: 'Palace Suite', price: '₹14,500/night' },
        { name: `The Colonial Grand Manor`, style: 'Boutique Heritage', price: '₹7,200/night' }
      ],
      authenticEateries: [
        { name: `Historic City Tiffin & Thali Room`, speciality: 'Traditional Thali', price: '₹400/person' },
        { name: `Royal Durbar Courtyard Dining`, speciality: 'Mughlai & Regional Curries', priceRange: '₹1,500/person', price: '₹1,500/person' }
      ],
      hiddenGemsEnRoute: [
        `Secret 14th-Century Stepwell (Baori) near ${dest}`,
        'Ancient Rock-Cut Hermitage Shelters',
        'Artisan Double-Ikat Weavers Settlement'
      ],
      emergencyHelplines: [
        { agency: 'National Tourist Helpline', phone: '1363 (Toll Free 24/7 in 12 Languages)' },
        { agency: 'National Emergency Service', phone: '112' },
        { agency: 'Archaeological Survey of India Helpdesk', phone: '011-23015954' }
      ]
    };

    // Simulate streaming response
    let currentChars = 0;
    const textSnippet = `Synthesizing ${days}-day royal itinerary for ${dest} with ${budget} comfort and ${style} focus... Analyzing regional routes, climate conditions, and authentic heritage stays... Done!`;
    const streamInterval = setInterval(() => {
      currentChars += 4;
      setStreamedText(textSnippet.slice(0, currentChars));
      if (currentChars >= textSnippet.length) {
        clearInterval(streamInterval);
        setIsGenerating(false);
        setItineraryResult(mockResult);

        // Add AI message to chat
        setChatMessages((prev) => [
          ...prev,
          {
            sender: 'ai',
            text: `I have architected your ${days}-day ${style} expedition to ${dest} (Total Estimated: ₹${calculatedCost.toLocaleString('en-IN')}). Your complete day-by-day plan, budget breakdown, weather advisory, and packing checklist are ready below!`,
            time: 'Just now'
          }
        ]);
      }
    }, 25);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userChatInput.trim()) return;

    const userText = userChatInput;
    setUserChatInput('');

    setChatMessages((prev) => [
      ...prev,
      { sender: 'user', text: userText, time: 'Just now' }
    ]);

    // Simple reactive AI response in chat
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Understood! I have registered your requirement: "${userText}". I can dynamically recalibrate the day-by-day route, adjust for elders/kids, or recommend off-the-beaten-path culinary stops. Click "Generate Royal Itinerary" above anytime to compile your complete master plan.`,
          time: 'Just now'
        }
      ]);
    }, 700);
  };

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>ChatGPT-Style Generative AI Itinerary Engine</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            AI Heritage Trip Architect
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            Configure your personalized journey parameters to generate a day-wise itinerary, budget breakdown, and packing guide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Parameter Wizard Controls */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-6">
            <h3 className="font-serif text-xl text-[#083B2D] font-bold flex items-center space-x-2">
              <Compass className="w-5 h-5 text-[#C49A3A]" />
              <span>Trip Parameters</span>
            </h3>

            {/* Destination Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Destination State or Region
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
              >
                {ALL_INDIAN_STATES.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name} ({s.region})
                  </option>
                ))}
              </select>
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

            {/* Travel Style */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Travel Style & Focus
              </label>
              <select
                value={formData.travelStyle}
                onChange={(e) => setFormData({ ...formData, travelStyle: e.target.value as any })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F4] text-xs font-medium text-[#111827] focus:outline-none focus:border-[#C49A3A]"
              >
                <option value="Royal Heritage & Forts">Royal Heritage, Palaces & Forts</option>
                <option value="Spiritual & Sacred">Spiritual, Sacred Temples & Ghats</option>
                <option value="Nature & Hidden Valleys">Nature, Pristine Valleys & Wildlife</option>
                <option value="Culinary & Art Trail">Culinary Exploration & Artisan Craft Trail</option>
                <option value="Adventure & Trekking">Adventure, Trekking & Mountain Passes</option>
              </select>
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

            {/* Companions */}
            <div>
              <label className="block text-xs font-semibold text-[#111827] uppercase tracking-wider mb-2">
                Traveling Companions
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

            {/* Generate Action Button */}
            <button
              onClick={generateItinerary}
              disabled={isGenerating}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#C49A3A] via-[#DFB757] to-[#AA7F27] text-[#083B2D] font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:brightness-110 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-[#083B2D] animate-spin-slow" />
              <span>{isGenerating ? 'Synthesizing Itinerary...' : 'Generate Royal AI Itinerary'}</span>
            </button>
          </div>

          {/* Right Column: ChatGPT Interface & Output Display */}
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
                    <span>Neural Model Live • SIH 2026 Engine</span>
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
                  placeholder="Ask Rishi AI to customize days, add hidden spots, or adjust food..."
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
                {/* Itinerary Header & Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] bg-[#083B2D]/5 px-2 py-0.5 rounded">
                      Compiled Master Expedition
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#083B2D] mt-1">
                      {itineraryResult.destination} — {itineraryResult.durationDays} Days ({itineraryResult.travelStyle})
                    </h3>
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

                {/* Day-by-Day Detailed Plan */}
                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-[#083B2D]">
                    Day-by-Day Master Schedule
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
                        <span className="text-[10px] font-mono text-[#C49A3A] bg-[#083B2D]/5 px-2 py-0.5 rounded">
                          Day {plan.day}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="bg-[#FAF8F4] p-3 rounded-xl">
                          <span className="font-bold text-[#C49A3A] block mb-1">Morning ({plan.morning.time})</span>
                          <p className="text-gray-700">{plan.morning.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">Tip: {plan.morning.tip}</span>
                        </div>

                        <div className="bg-[#FAF8F4] p-3 rounded-xl">
                          <span className="font-bold text-[#E67E22] block mb-1">Afternoon ({plan.afternoon.time})</span>
                          <p className="text-gray-700">{plan.afternoon.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">{plan.afternoon.foodTip}</span>
                        </div>

                        <div className="bg-[#FAF8F4] p-3 rounded-xl">
                          <span className="font-bold text-[#083B2D] block mb-1">Evening ({plan.evening.time})</span>
                          <p className="text-gray-700">{plan.evening.activity}</p>
                          <span className="text-[10px] text-gray-400 block mt-1">Sunset: {plan.evening.sunsetSpot}</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-[#083B2D]/80 italic pt-1 border-t border-dashed border-gray-200">
                        {plan.heritageFact}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weather & Packing Checklist */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-[#F2EEE6] p-4 rounded-2xl">
                    <strong className="block text-[#083B2D] font-serif text-sm mb-2">Weather & Climate Advisory</strong>
                    <p className="text-gray-700 mb-1"><strong>Temperature:</strong> {itineraryResult.weatherForecast.temp}</p>
                    <p className="text-gray-700 mb-1"><strong>Condition:</strong> {itineraryResult.weatherForecast.climate}</p>
                    <p className="text-gray-700"><strong>Clothing:</strong> {itineraryResult.weatherForecast.clothingAdvice}</p>
                  </div>

                  <div className="bg-[#F2EEE6] p-4 rounded-2xl">
                    <strong className="block text-[#083B2D] font-serif text-sm mb-2">Packing Essentials Checklist</strong>
                    <ul className="space-y-1 text-gray-700">
                      {itineraryResult.packingChecklist.map((item, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#083B2D]" />
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
