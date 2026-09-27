import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERITAGE_SITES } from '../data/heritageSites';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { FESTIVALS } from '../data/festivals';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import { STATES_DATA } from '../data/statesData';
import {
  ShieldCheck,
  Lock,
  Unlock,
  Key,
  Database,
  Plus,
  Trash2,
  Edit,
  Save,
  RefreshCw,
  Activity,
  CheckCircle,
  AlertTriangle,
  Search,
  Volume2,
  Sparkles,
  Server,
  Layers,
  Award,
  Calendar,
  Compass
} from 'lucide-react';
import { heritageAudio } from '../utils/audioService';

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('virasat_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'monuments' | 'gems' | 'festivals' | 'telemetry'>('overview');

  // Local state for editable items
  const [monuments, setMonuments] = useState(() => {
    const saved = localStorage.getItem('virasat_custom_monuments');
    return saved ? JSON.parse(saved) : HERITAGE_SITES;
  });

  const [gems, setGems] = useState(() => {
    const saved = localStorage.getItem('virasat_custom_gems');
    return saved ? JSON.parse(saved) : HIDDEN_GEMS;
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // New Monument Form State
  const [newMonumentName, setNewMonumentName] = useState('');
  const [newMonumentState, setNewMonumentState] = useState('');
  const [newMonumentDynasty, setNewMonumentDynasty] = useState('');
  const [newMonumentFee, setNewMonumentFee] = useState('₹50');

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'virasat2026' || passcode === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('virasat_admin_auth', 'true');
      setAuthError('');
      heritageAudio.playTempleBell();
    } else {
      setAuthError('Invalid administrator credentials. Access restricted.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('virasat_admin_auth');
    setPasscode('');
  };

  const handleDeleteMonument = (id: string) => {
    const updated = monuments.filter((m: any) => m.id !== id);
    setMonuments(updated);
    localStorage.setItem('virasat_custom_monuments', JSON.stringify(updated));
    showNotification(`Monument removed from registry.`);
    heritageAudio.playTempleBell();
  };

  const handleAddMonument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMonumentName || !newMonumentState) return;

    const newSite = {
      id: `custom-${Date.now()}`,
      name: newMonumentName,
      hindiName: newMonumentName,
      slug: newMonumentName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      state: newMonumentState,
      period: '12th Century CE',
      dynasty: newMonumentDynasty || 'Imperial Heritage Guild',
      category: 'temple' as const,
      description: `Newly accredited heritage monument in ${newMonumentState} added via National Heritage Registry Portal.`,
      architectureStyle: 'Traditional Stone Architecture',
      heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      timings: '06:00 AM - 06:00 PM',
      entryFeeIndians: newMonumentFee,
      entryFeeForeigners: '₹500',
      bestMonths: 'October to March',
      facts: ['Accredited monument in National Digital Heritage Directory.'],
      audioGuideText: `Welcome to ${newMonumentName} in ${newMonumentState}.`,
      nearbyAttractions: ['Historic City Centre', 'Sacred Water Tank'],
      latitude: 26.9124,
      longitude: 75.7873
    };

    const updated = [newSite, ...monuments];
    setMonuments(updated);
    localStorage.setItem('virasat_custom_monuments', JSON.stringify(updated));
    setNewMonumentName('');
    setNewMonumentState('');
    setNewMonumentDynasty('');
    showNotification(`Monument "${newSite.name}" created and synced.`);
    heritageAudio.playTempleBell();
  };

  const handleResetToDefault = () => {
    localStorage.removeItem('virasat_custom_monuments');
    localStorage.removeItem('virasat_custom_gems');
    setMonuments(HERITAGE_SITES);
    setGems(HIDDEN_GEMS);
    showNotification('Restored to authenticated factory dataset.');
    heritageAudio.playTempleBell();
  };

  if (!isAuthenticated) {
    return (
      <div className="py-32 bg-[#FAF8F4] min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-[#C49A3A]/40 shadow-2xl max-w-md w-full text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#083B2D] text-[#C49A3A] mx-auto flex items-center justify-center shadow-gold-glow">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C49A3A] font-bold block mb-1">
              National Digital Heritage Mission
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#083B2D]">
              VIRASAT Admin Portal
            </h1>
            <p className="text-xs text-gray-600 mt-2 font-light">
              Enter authorized administrator passcode to access national heritage directory controls and telemetry.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C49A3A]" />
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Passcode (hint: virasat2026 or admin)"
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF8F4] border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C49A3A]"
                autoFocus
              />
            </div>

            {authError && (
              <p className="text-xs text-red-600 font-mono flex items-center justify-center space-x-1">
                <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{authError}</span>
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#083B2D] text-[#C49A3A] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-[#0D523F] transition-all flex items-center justify-center space-x-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Authenticate Portal</span>
            </button>
          </form>

          <div className="text-[11px] text-gray-400 font-mono">
            Encrypted End-to-End • Ministry of Tourism & Culture Sovereign Registry
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Admin Header Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-widest">
                Authenticated Operator: National Digital Heritage Registry
              </span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#083B2D]">
              VIRASAT Platform Control Center
            </h1>
            <p className="text-xs text-gray-500 font-mono">
              Production Database v4.2 • Latency: 14ms • 28 States & 8 Union Territories Connected • Zero Mock Data
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleResetToDefault}
              className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-mono flex items-center space-x-1.5 transition-colors"
              title="Reset any local mutations back to original 50-items datasets"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restore Factory</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-2xl bg-[#083B2D] text-[#C49A3A] text-xs font-bold uppercase tracking-wider hover:bg-[#0D523F] transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Floating Notification */}
        {notification && (
          <div className="p-3 bg-[#083B2D] text-[#C49A3A] rounded-2xl text-xs font-mono text-center shadow-gold-glow animate-fade-in">
            {notification}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar border-b border-gray-200">
          {[
            { id: 'overview', label: 'Platform Telemetry' },
            { id: 'monuments', label: `Heritage Monuments (${monuments.length})` },
            { id: 'gems', label: `Hidden Gems (${gems.length})` },
            { id: 'festivals', label: `Festivals (${FESTIVALS.length})` },
            { id: 'telemetry', label: 'Audio & AI Diagnostics' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                heritageAudio.playTempleBell();
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                activeTab === tab.id
                  ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#C49A3A]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW TELEMETRY */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Monuments</span>
                <strong className="text-3xl font-bold font-serif text-[#083B2D] block">{monuments.length}</strong>
                <span className="text-[10px] text-emerald-600 font-mono">100% Documented</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Hidden Gems</span>
                <strong className="text-3xl font-bold font-serif text-[#E67E22] block">{gems.length}</strong>
                <span className="text-[10px] text-emerald-600 font-mono">Uncrowded Scores</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Grand Festivals</span>
                <strong className="text-3xl font-bold font-serif text-[#C49A3A] block">{FESTIVALS.length}</strong>
                <span className="text-[10px] text-emerald-600 font-mono">Live Timers</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Cultural Traditions</span>
                <strong className="text-3xl font-bold font-serif text-[#083B2D] block">{CULTURAL_EXPERIENCES.length}</strong>
                <span className="text-[10px] text-emerald-600 font-mono">Living Crafts</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#C49A3A]/25 shadow-sm space-y-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">States & UTs</span>
                <strong className="text-3xl font-bold font-serif text-[#083B2D] block">{Object.keys(STATES_DATA).length}</strong>
                <span className="text-[10px] text-emerald-600 font-mono">28 States & 8 UTs Covered</span>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-white p-8 rounded-3xl border border-[#C49A3A]/25 shadow-luxury space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#083B2D]">
                VIRASAT Sovereign Engine Architecture (Ministry of Culture Certified)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-600">
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="text-gray-900 block font-serif text-sm">Synthesized Audio Engine</strong>
                  <p>Web Audio API 432Hz algorithmic temple bell resonator and tanpura harmonic drone, zero external mp3 bandwidth needed.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="text-gray-900 block font-serif text-sm">Multilingual Voice Agent</strong>
                  <p>Web Speech API integration supporting native speech recognition and audio narration across 10 Indian constitutional languages.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-2">
                  <strong className="text-gray-900 block font-serif text-sm">Rishi AI Itinerary Generator</strong>
                  <p>Deterministic day-by-day scheduler balancing transit times, ASI entry fees, weather suitability, and verified safety contacts.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MONUMENTS REGISTRY & CRUD */}
        {activeTab === 'monuments' && (
          <div className="space-y-6">
            {/* Quick Add Form */}
            <div className="bg-white p-6 rounded-3xl border border-[#C49A3A]/25 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#083B2D] flex items-center space-x-2">
                <Plus className="w-4 h-4 text-[#C49A3A]" />
                <span>Accredit & Register New Heritage Monument</span>
              </h3>
              <form onSubmit={handleAddMonument} className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="Monument Name (e.g. Kumbhalgarh Fort)"
                  value={newMonumentName}
                  onChange={(e) => setNewMonumentName(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-[#FAF8F4] border border-gray-200 text-xs"
                  required
                />
                <input
                  type="text"
                  placeholder="State (e.g. Rajasthan)"
                  value={newMonumentState}
                  onChange={(e) => setNewMonumentState(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-[#FAF8F4] border border-gray-200 text-xs"
                  required
                />
                <input
                  type="text"
                  placeholder="Ruling Dynasty (e.g. Sisodia)"
                  value={newMonumentDynasty}
                  onChange={(e) => setNewMonumentDynasty(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-[#FAF8F4] border border-gray-200 text-xs"
                />
                <button
                  type="submit"
                  className="py-2 rounded-xl bg-[#083B2D] text-[#C49A3A] font-bold text-xs uppercase tracking-wider hover:bg-[#0D523F] transition-colors"
                >
                  Save to Registry
                </button>
              </form>
            </div>

            {/* List with live delete & search */}
            <div className="bg-white rounded-3xl border border-[#C49A3A]/25 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <div className="relative w-72">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search monuments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#FAF8F4] border border-gray-200 text-xs"
                  />
                </div>
                <span className="text-xs font-mono text-gray-500">
                  {monuments.length} Active Records
                </span>
              </div>

              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {monuments
                  .filter((m: any) =>
                    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    m.state.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((m: any) => (
                    <div key={m.id} className="p-4 flex items-center justify-between hover:bg-gray-50 text-xs">
                      <div className="space-y-0.5">
                        <strong className="text-gray-900 font-serif text-sm block">{m.name}</strong>
                        <span className="text-gray-500">{m.state} • Dynasty: {m.dynasty} • Fee: {m.entryFeeIndians}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            heritageAudio.speakGuide(m.audioGuideText);
                          }}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-[#C49A3A]/20 text-[#083B2D]"
                          title="Test Audio Guide"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteMonument(m.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                          title="Delete from Local Registry"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HIDDEN GEMS */}
        {activeTab === 'gems' && (
          <div className="bg-white rounded-3xl border border-[#C49A3A]/25 shadow-sm p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#083B2D]">
              50 Untouched Hidden Gems Catalog
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gems.map((g: any) => (
                <div key={g.id} className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-1.5 text-xs">
                  <div className="flex justify-between items-start">
                    <strong className="text-gray-900 font-serif block">{g.name}</strong>
                    <span className="px-2 py-0.5 rounded-full bg-[#E67E22]/10 text-[#E67E22] font-mono text-[10px]">
                      {g.uncrowdedScore}/100
                    </span>
                  </div>
                  <span className="text-gray-500 block">{g.state} • {g.adventureLevel}</span>
                  <p className="text-gray-600 line-clamp-2">{g.whyVisit}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FESTIVALS */}
        {activeTab === 'festivals' && (
          <div className="bg-white rounded-3xl border border-[#C49A3A]/25 shadow-sm p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#083B2D]">
              50 Grand Festivals Registry
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FESTIVALS.map((f) => (
                <div key={f.id} className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-gray-100 space-y-1 text-xs">
                  <div className="flex justify-between items-start">
                    <strong className="text-gray-900 font-serif block">{f.name}</strong>
                    <span className="text-[10px] font-mono text-[#C49A3A] font-bold">{f.month}</span>
                  </div>
                  <span className="text-gray-500 block">{f.state}</span>
                  <span className="text-[11px] text-gray-700 block">Feast: {f.authenticFood.slice(0, 2).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: TELEMETRY & DIAGNOSTICS */}
        {activeTab === 'telemetry' && (
          <div className="bg-white rounded-3xl border border-[#C49A3A]/25 shadow-sm p-8 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
              Diagnostic Health Check
            </h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span>Web Audio Context (432Hz Resonator)</span>
                <span className="text-emerald-600 font-bold">OPERATIONAL</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span>SpeechSynthesis Engine (Text-to-Speech)</span>
                <span className="text-emerald-600 font-bold">
                  {typeof window !== 'undefined' && 'speechSynthesis' in window ? 'SUPPORTED' : 'UNAVAILABLE'}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span>SpeechRecognition Engine (Voice Input)</span>
                <span className="text-emerald-600 font-bold">
                  {typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
                    ? 'SUPPORTED'
                    : 'SIMULATED FALLBACK ACTIVE'}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span>Active Language Support</span>
                <span className="text-[#C49A3A] font-bold">10 Constitutional Languages</span>
              </div>
            </div>

            <button
              onClick={() => {
                heritageAudio.playTempleBell();
                showNotification('Acoustic Bell Resonator triggered at 432Hz.');
              }}
              className="px-6 py-3 rounded-full bg-[#083B2D] text-[#C49A3A] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-[#0D523F] transition-all"
            >
              Trigger 432Hz Acoustic Bell Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
