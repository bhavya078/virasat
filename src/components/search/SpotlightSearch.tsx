import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Compass, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HERITAGE_SITES } from '../../data/heritageSites';
import { HIDDEN_GEMS } from '../../data/hiddenGems';
import { FESTIVALS } from '../../data/festivals';
import { CULTURAL_EXPERIENCES } from '../../data/culturalExperiences';
import { ALL_INDIAN_STATES } from '../../data/statesData';
import { heritageAudio } from '../../utils/audioService';

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpotlightSearch: React.FC<SpotlightProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | 'monuments' | 'gems' | 'festivals' | 'culture' | 'states'>('all');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
          const evt = new CustomEvent('open_spotlight_search');
          window.dispatchEvent(evt);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search aggregations
  const q = query.toLowerCase().trim();

  const monuments = HERITAGE_SITES.filter(
    (s) =>
      (!q || s.name.toLowerCase().includes(q) || s.state.toLowerCase().includes(q)) &&
      (category === 'all' || category === 'monuments')
  ).slice(0, 5);

  const gems = HIDDEN_GEMS.filter(
    (g) =>
      (!q || g.name.toLowerCase().includes(q) || g.state.toLowerCase().includes(q)) &&
      (category === 'all' || category === 'gems')
  ).slice(0, 5);

  const festivals = FESTIVALS.filter(
    (f) =>
      (!q || f.name.toLowerCase().includes(q) || f.state.toLowerCase().includes(q)) &&
      (category === 'all' || category === 'festivals')
  ).slice(0, 5);

  const cultures = CULTURAL_EXPERIENCES.filter(
    (c) =>
      (!q || c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)) &&
      (category === 'all' || category === 'culture')
  ).slice(0, 5);

  const states = ALL_INDIAN_STATES.filter(
    (st) =>
      (!q || st.name.toLowerCase().includes(q)) &&
      (category === 'all' || category === 'states')
  ).slice(0, 6);

  const totalResults = monuments.length + gems.length + festivals.length + cultures.length + states.length;

  const handleSelect = (url: string) => {
    heritageAudio.playTempleBell();
    onClose();
    navigate(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#083B2D] border border-[#C49A3A]/40 rounded-3xl shadow-luxury-hover overflow-hidden z-10 text-[#FAF8F4]"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-6 py-4 border-b border-white/10 bg-black/20">
            <Search className="w-5 h-5 text-[#C49A3A] mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 50 monuments, 50 gems, festivals, states..."
              className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-white/50 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-white/50 hover:text-white mr-3 text-xs">
                Clear
              </button>
            )}
            <kbd className="text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded text-[#C49A3A]">
              ESC
            </kbd>
          </div>

          {/* Category Filter Pills */}
          <div className="px-6 py-2.5 bg-black/10 border-b border-white/5 flex items-center space-x-2 overflow-x-auto text-xs no-scrollbar">
            {(['all', 'monuments', 'gems', 'festivals', 'culture', 'states'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full capitalize whitespace-nowrap transition-colors ${
                  category === cat
                    ? 'bg-[#C49A3A] text-[#083B2D] font-bold shadow-sm'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {cat === 'all' ? 'All Results' : cat}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-4 space-y-4">
            {totalResults === 0 ? (
              <div className="py-12 text-center text-white/60 text-xs">
                No matching heritage entries found for "{query}". Try searching "Taj", "Ziro", "Navratri", or "Kerala".
              </div>
            ) : (
              <>
                {/* Monuments */}
                {monuments.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] px-2 block mb-1">
                      Heritage Monuments & Sites ({monuments.length})
                    </span>
                    <div className="space-y-1">
                      {monuments.map((m) => (
                        <div
                          key={m.id}
                          onClick={() => handleSelect(`/heritage/${m.slug}`)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <img src={m.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <strong className="text-xs text-white block group-hover:text-[#C49A3A] transition-colors">
                                {m.name}
                              </strong>
                              <span className="text-[11px] text-white/60">{m.state} • {m.architectureStyle.slice(0, 28)}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#C49A3A]" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hidden Gems */}
                {gems.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] px-2 block mb-1">
                      Untouched Hidden Gems ({gems.length})
                    </span>
                    <div className="space-y-1">
                      {gems.map((g) => (
                        <div
                          key={g.id}
                          onClick={() => handleSelect(`/hidden-gems/${g.slug}`)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <img src={g.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <strong className="text-xs text-white block group-hover:text-[#E67E22] transition-colors">
                                {g.name}
                              </strong>
                              <span className="text-[11px] text-white/60">{g.state} • Uncrowded Score {g.uncrowdedScore}/100</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#E67E22]" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Festivals */}
                {festivals.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB757] px-2 block mb-1">
                      Living Festivals ({festivals.length})
                    </span>
                    <div className="space-y-1">
                      {festivals.map((f) => (
                        <div
                          key={f.id}
                          onClick={() => handleSelect(`/festivals/${f.slug}`)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <img src={f.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <strong className="text-xs text-white block group-hover:text-[#C49A3A] transition-colors">
                                {f.name}
                              </strong>
                              <span className="text-[11px] text-white/60">{f.month} • {f.state}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-[#C49A3A]" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cultural Traditions */}
                {cultures.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 px-2 block mb-1">
                      Living Traditions & Performing Arts ({cultures.length})
                    </span>
                    <div className="space-y-1">
                      {cultures.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => handleSelect(`/culture/${c.slug}`)}
                          className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 cursor-pointer transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <img src={c.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <strong className="text-xs text-white block group-hover:text-purple-300 transition-colors">
                                {c.name}
                              </strong>
                              <span className="text-[11px] text-white/60">{c.originCentury} • {c.state}</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-purple-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* States */}
                {states.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 px-2 block mb-1">
                      States & Union Territories ({states.length})
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {states.map((st) => (
                        <div
                          key={st.id}
                          onClick={() => handleSelect(`/state/${st.id}`)}
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group border border-white/5 flex items-center justify-between"
                        >
                          <div>
                            <strong className="text-xs text-white block group-hover:text-[#C49A3A]">
                              {st.name}
                            </strong>
                            <span className="text-[10px] text-white/60">{st.capital}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#C49A3A]" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
