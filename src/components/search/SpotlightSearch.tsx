import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Compass, Sparkles, Calendar, ChevronRight, Mic, Star, Trash2, TrendingUp, Clock, Utensils, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HERITAGE_SITES } from '../../data/heritageSites';
import { HIDDEN_GEMS } from '../../data/hiddenGems';
import { FESTIVALS } from '../../data/festivals';
import { CULTURAL_EXPERIENCES } from '../../data/culturalExperiences';
import { ALL_INDIAN_STATES, STATES_DATA } from '../../data/statesData';
import { heritageAudio } from '../../utils/audioService';

interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
}

type SearchCategory = 'all' | 'monuments' | 'gems' | 'festivals' | 'culture' | 'states' | 'food' | 'temples';

// 1. Fuzzy Search Algorithm
function fuzzyScore(query: string, text: string): number {
  if (!query) return 100;
  if (!text) return 0;
  
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase();
  
  if (t === q) return 100;
  if (t.startsWith(q)) return 95;
  if (t.includes(` ${q}`)) return 90; // Word boundary match
  if (t.includes(q)) return 80;
  
  // Abbreviation matching (e.g. 'vm' for 'valley of flowers meadows')
  const words = t.split(/[\s-]/);
  const initials = words.map(w => w[0]).join('');
  if (initials === q || initials.startsWith(q)) return 85;

  // Typo tolerance (Levenshtein-like simplified for sub-strings)
  let qIdx = 0;
  let matches = 0;
  for (let i = 0; i < t.length && qIdx < q.length; i++) {
    if (t[i] === q[qIdx]) {
      matches++;
      qIdx++;
    }
  }
  
  if (matches === q.length) return 70; // All characters found in order
  
  // Basic match percentage
  const matchRatio = matches / q.length;
  if (matchRatio > 0.8) return Math.floor(matchRatio * 60);

  return 0;
}

export const SpotlightSearch: React.FC<SpotlightProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(-1);
      
      // Load recent searches
      try {
        const saved = localStorage.getItem('virasat_recent_searches');
        if (saved) setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Could not load recent searches', e);
      }
    } else {
      setQuery('');
      setCategory('all');
      if (isListening) setIsListening(false);
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K listener and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          const evt = new CustomEvent('open_spotlight_search');
          window.dispatchEvent(evt);
        }
      }
      
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, totalResults - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < flattenedResults.length) {
          const item = flattenedResults[selectedIndex];
          if (item) handleSelect(item.url, item.name);
        } else if (query.trim()) {
          // Just save search if pressing enter on empty selection but query exists
          saveRecentSearch(query);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const saveRecentSearch = (q: string) => {
    if (!q.trim()) return;
    try {
      const updated = [q.trim(), ...recentSearches.filter(s => s !== q.trim())].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('virasat_recent_searches', JSON.stringify(updated));
    } catch (e) {}
  };

  const removeRecentSearch = (e: React.MouseEvent, q: string) => {
    e.stopPropagation();
    try {
      const updated = recentSearches.filter(s => s !== q);
      setRecentSearches(updated);
      localStorage.setItem('virasat_recent_searches', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSelect = (url: string, itemName: string) => {
    heritageAudio.playTempleBell();
    saveRecentSearch(itemName);
    onClose();
    navigate(url);
  };

  // Voice Search
  const toggleVoiceSearch = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript);
      setIsListening(false);
      setTimeout(() => inputRef.current?.focus(), 10);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  if (!isOpen) return null;

  // Enhance scoring by checking multiple fields
  const getMonuments = () => {
    if (category !== 'all' && category !== 'monuments' && category !== 'temples') return [];
    
    return HERITAGE_SITES
      .map(s => {
        const nameScore = fuzzyScore(query, s.name);
        const stateScore = fuzzyScore(query, s.state);
        const descScore = fuzzyScore(query, s.description);
        const score = Math.max(nameScore, stateScore, descScore - 20); // prioritize name/state
        
        // Temples filter
        if (category === 'temples' && !['temple', 'spiritual'].includes(s.category?.toLowerCase() || '')) {
          return { item: s, score: 0 };
        }
        
        return { item: s, score };
      })
      .filter(x => x.score > 20 || (!query && category === 'temples'))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const getGems = () => {
    if (category !== 'all' && category !== 'gems') return [];
    
    return HIDDEN_GEMS
      .map(g => {
        const score = Math.max(
          fuzzyScore(query, g.name),
          fuzzyScore(query, g.state),
          fuzzyScore(query, g.region || '')
        );
        return { item: g, score };
      })
      .filter(x => x.score > 20)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const getFestivals = () => {
    if (category !== 'all' && category !== 'festivals') return [];
    
    return FESTIVALS
      .map(f => {
        const score = Math.max(
          fuzzyScore(query, f.name),
          fuzzyScore(query, f.state),
          fuzzyScore(query, f.month)
        );
        return { item: f, score };
      })
      .filter(x => x.score > 20)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const getCultures = () => {
    if (category !== 'all' && category !== 'culture') return [];
    
    return CULTURAL_EXPERIENCES
      .map(c => {
        const score = Math.max(
          fuzzyScore(query, c.name),
          fuzzyScore(query, c.state)
        );
        return { item: c, score };
      })
      .filter(x => x.score > 20)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  };

  const getStates = () => {
    if (category !== 'all' && category !== 'states' && category !== 'food') return [];
    
    return ALL_INDIAN_STATES
      .map(st => {
        let score = fuzzyScore(query, st.name);
        let matchField = '';
        
        // Food search
        if (category === 'food' || category === 'all') {
          const stateFull = STATES_DATA[st.id];
          const foodStrings = [
            ...(stateFull?.cuisine?.dishes || []),
            ...(stateFull?.cuisine?.streetFood || []),
            ...(stateFull?.cuisine?.sweets || [])
          ];
          
          for (const food of foodStrings) {
            const foodScore = fuzzyScore(query, food);
            if (foodScore > score) {
              score = foodScore;
              matchField = food;
            }
          }
        }
        
        if (category === 'food' && !matchField && query) {
          return { item: st, score: 0, matchField };
        }
        
        return { item: st, score, matchField };
      })
      .filter(x => x.score > 20 || (!query && category === 'food'))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  };

  const scoredMonuments = getMonuments();
  const scoredGems = getGems();
  const scoredFestivals = getFestivals();
  const scoredCultures = getCultures();
  const scoredStates = getStates();

  const totalResults = 
    scoredMonuments.length + 
    scoredGems.length + 
    scoredFestivals.length + 
    scoredCultures.length + 
    scoredStates.length;

  // For keyboard navigation
  const flattenedResults: Array<{name: string, url: string}> = [
    ...scoredMonuments.map(m => ({ name: m.item.name, url: `/heritage/${m.item.slug}` })),
    ...scoredGems.map(g => ({ name: g.item.name, url: `/hidden-gems/${g.item.slug}` })),
    ...scoredFestivals.map(f => ({ name: f.item.name, url: `/festivals/${f.item.slug}` })),
    ...scoredCultures.map(c => ({ name: c.item.name, url: `/culture/${c.item.slug}` })),
    ...scoredStates.map(s => ({ name: s.item.name, url: `/state/${s.item.id}` }))
  ];

  const renderMatchStar = (score: number) => {
    if (score >= 90) return <Star className="w-3.5 h-3.5 text-[#C49A3A] fill-current" />;
    return null;
  };

  const trendingDestinations = [
    { name: 'Taj Mahal', url: '/heritage/taj-mahal', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Hampi', url: '/heritage/hampi', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Varanasi', url: '/state/uttar-pradesh', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Jaipur', url: '/state/rajasthan', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Kerala Backwaters', url: '/state/kerala', icon: <Compass className="w-4 h-4" /> },
    { name: 'Ladakh', url: '/state/ladakh', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Rishikesh', url: '/state/uttarakhand', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Valley of Flowers', url: '/hidden-gems/valley-of-flowers', icon: <Compass className="w-4 h-4" /> }
  ];

  const categories: {id: SearchCategory, label: string, count?: number}[] = [
    { id: 'all', label: 'All Results' },
    { id: 'monuments', label: 'Monuments', count: category === 'all' && query ? scoredMonuments.length : undefined },
    { id: 'gems', label: 'Gems', count: category === 'all' && query ? scoredGems.length : undefined },
    { id: 'festivals', label: 'Festivals', count: category === 'all' && query ? scoredFestivals.length : undefined },
    { id: 'culture', label: 'Culture', count: category === 'all' && query ? scoredCultures.length : undefined },
    { id: 'states', label: 'States', count: category === 'all' && query ? scoredStates.length : undefined },
    { id: 'food', label: 'Food' },
    { id: 'temples', label: 'Temples' }
  ];

  let currentGlobalIndex = -1; // to track index across sections for keyboard nav

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

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
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(-1);
              }}
              placeholder="Search 50 monuments, gems, festivals, states..."
              className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-white/50 focus:outline-none"
            />
            
            {/* Voice Search Button */}
            <button 
              onClick={toggleVoiceSearch}
              className={`mr-3 p-1.5 rounded-full transition-colors ${
                isListening ? 'bg-red-500/20 text-red-400 animate-pulse' : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
              title="Voice Search"
            >
              <Mic className="w-4 h-4" />
            </button>

            {query && (
              <button onClick={() => setQuery('')} className="text-white/50 hover:text-white mr-3 text-xs p-1.5 hover:bg-white/10 rounded-full">
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded text-[#C49A3A] hidden sm:block">
              ESC
            </kbd>
          </div>

          {/* Category Filter Pills */}
          <div className="px-6 py-2.5 bg-black/10 border-b border-white/5 flex items-center space-x-2 overflow-x-auto text-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full capitalize whitespace-nowrap transition-colors flex items-center space-x-1 ${
                  category === cat.id
                    ? 'bg-[#C49A3A] text-[#083B2D] font-bold shadow-sm'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count !== undefined && cat.count > 0 && (
                  <span className={`text-[10px] px-1.5 rounded-full ${category === cat.id ? 'bg-[#083B2D]/20 text-[#083B2D]' : 'bg-white/10 text-white/60'}`}>
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div 
            ref={resultsContainerRef}
            className="max-h-[380px] overflow-y-auto p-4 space-y-4 no-scrollbar"
          >
            {!query && category === 'all' ? (
              <div className="space-y-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center text-[#C49A3A] text-xs font-mono uppercase tracking-widest px-2 mb-3">
                      <Clock className="w-3.5 h-3.5 mr-2" />
                      Recent Searches
                    </div>
                    <div className="flex flex-wrap gap-2 px-2">
                      {recentSearches.map(s => (
                        <div key={s} className="flex items-center bg-white/5 border border-white/10 rounded-full pl-3 pr-1 py-1 text-xs hover:bg-white/10 transition-colors">
                          <span 
                            className="cursor-pointer text-white/80 hover:text-white mr-1"
                            onClick={() => setQuery(s)}
                          >
                            {s}
                          </span>
                          <button 
                            onClick={(e) => removeRecentSearch(e, s)}
                            className="p-1 text-white/40 hover:text-red-400 rounded-full"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending */}
                <div>
                  <div className="flex items-center text-[#E67E22] text-xs font-mono uppercase tracking-widest px-2 mb-3">
                    <TrendingUp className="w-3.5 h-3.5 mr-2" />
                    Trending Now
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trendingDestinations.map(t => (
                      <div 
                        key={t.name}
                        onClick={() => handleSelect(t.url, t.name)}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors group"
                      >
                        <div className="p-2 bg-white/5 rounded-lg text-white/50 group-hover:text-[#C49A3A] group-hover:bg-[#C49A3A]/10 transition-colors">
                          {t.icon}
                        </div>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors">{t.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : totalResults === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center text-white/60">
                <Search className="w-8 h-8 text-white/20 mb-3" />
                <p className="text-sm">No matching entries found for "{query}".</p>
                <p className="text-xs mt-1 text-white/40">Try searching "Taj", "Ziro", "Navratri", or "Kerala".</p>
              </div>
            ) : (
              <>
                {/* Monuments */}
                {scoredMonuments.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C49A3A] px-2 flex items-center mb-1">
                      <Landmark className="w-3 h-3 mr-1.5" /> Heritage Monuments & Temples
                    </span>
                    <div className="space-y-1">
                      {scoredMonuments.map(({item, score}) => {
                        currentGlobalIndex++;
                        const isSelected = selectedIndex === currentGlobalIndex;
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/heritage/${item.slug}`, item.name)}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors group ${
                              isSelected ? 'bg-white/15 border-white/20' : 'hover:bg-white/10 border-transparent'
                            } border`}
                          >
                            <div className="flex items-center space-x-3">
                              <img src={item.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <strong className="text-sm text-white group-hover:text-[#C49A3A] transition-colors">
                                    {item.name}
                                  </strong>
                                  {renderMatchStar(score)}
                                </div>
                                <div className="flex items-center space-x-2 mt-0.5">
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{item.state}</span>
                                  <span className="text-[10px] text-white/50">{item.category}</span>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#C49A3A]' : 'text-white/20 group-hover:text-[#C49A3A]'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Hidden Gems */}
                {scoredGems.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] px-2 flex items-center mb-1 mt-3">
                      <Compass className="w-3 h-3 mr-1.5" /> Untouched Hidden Gems
                    </span>
                    <div className="space-y-1">
                      {scoredGems.map(({item, score}) => {
                        currentGlobalIndex++;
                        const isSelected = selectedIndex === currentGlobalIndex;
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/hidden-gems/${item.slug}`, item.name)}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors group ${
                              isSelected ? 'bg-white/15 border-white/20' : 'hover:bg-white/10 border-transparent'
                            } border`}
                          >
                            <div className="flex items-center space-x-3">
                              <img src={item.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <strong className="text-sm text-white group-hover:text-[#E67E22] transition-colors">
                                    {item.name}
                                  </strong>
                                  {renderMatchStar(score)}
                                </div>
                                <div className="flex items-center space-x-2 mt-0.5">
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{item.state}</span>
                                  <span className="text-[10px] text-white/50">{item.region}</span>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#E67E22]' : 'text-white/20 group-hover:text-[#E67E22]'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Festivals */}
                {scoredFestivals.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFB757] px-2 flex items-center mb-1 mt-3">
                      <Calendar className="w-3 h-3 mr-1.5" /> Living Festivals
                    </span>
                    <div className="space-y-1">
                      {scoredFestivals.map(({item, score}) => {
                        currentGlobalIndex++;
                        const isSelected = selectedIndex === currentGlobalIndex;
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/festivals/${item.slug}`, item.name)}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors group ${
                              isSelected ? 'bg-white/15 border-white/20' : 'hover:bg-white/10 border-transparent'
                            } border`}
                          >
                            <div className="flex items-center space-x-3">
                              <img src={item.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <strong className="text-sm text-white group-hover:text-[#C49A3A] transition-colors">
                                    {item.name}
                                  </strong>
                                  {renderMatchStar(score)}
                                </div>
                                <div className="flex items-center space-x-2 mt-0.5">
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{item.month}</span>
                                  <span className="text-[10px] text-white/50">{item.state}</span>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#C49A3A]' : 'text-white/20 group-hover:text-[#C49A3A]'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Cultural Traditions */}
                {scoredCultures.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 px-2 flex items-center mb-1 mt-3">
                      <Sparkles className="w-3 h-3 mr-1.5" /> Living Traditions & Arts
                    </span>
                    <div className="space-y-1">
                      {scoredCultures.map(({item, score}) => {
                        currentGlobalIndex++;
                        const isSelected = selectedIndex === currentGlobalIndex;
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/culture/${item.slug}`, item.name)}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors group ${
                              isSelected ? 'bg-white/15 border-white/20' : 'hover:bg-white/10 border-transparent'
                            } border`}
                          >
                            <div className="flex items-center space-x-3">
                              <img src={item.heroImage} alt="" className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <div className="flex items-center space-x-2">
                                  <strong className="text-sm text-white group-hover:text-purple-300 transition-colors">
                                    {item.name}
                                  </strong>
                                  {renderMatchStar(score)}
                                </div>
                                <div className="flex items-center space-x-2 mt-0.5">
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">{item.category || 'Tradition'}</span>
                                  <span className="text-[10px] text-white/50">{item.state}</span>
                                </div>
                              </div>
                            </div>
                            <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-purple-300' : 'text-white/20 group-hover:text-purple-300'}`} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* States & Food */}
                {scoredStates.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 px-2 flex items-center mb-1 mt-3">
                      <MapPin className="w-3 h-3 mr-1.5" /> States & Union Territories
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scoredStates.map(({item, score, matchField}) => {
                        currentGlobalIndex++;
                        const isSelected = selectedIndex === currentGlobalIndex;
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleSelect(`/state/${item.id}`, item.name)}
                            className={`p-2.5 rounded-xl cursor-pointer transition-colors group flex items-center justify-between ${
                              isSelected ? 'bg-white/15 border-white/20' : 'bg-white/5 hover:bg-white/10 border-white/5'
                            } border`}
                          >
                            <div>
                              <div className="flex items-center space-x-2">
                                <strong className="text-sm text-white group-hover:text-[#C49A3A]">
                                  {item.name}
                                </strong>
                                {renderMatchStar(score)}
                              </div>
                              <div className="mt-1">
                                {matchField ? (
                                  <span className="text-[10px] flex items-center text-orange-300">
                                    <Utensils className="w-2.5 h-2.5 mr-1" /> {matchField}
                                  </span>
                                ) : (
                                  <span className="text-[10px] text-white/50">{item.capital}</span>
                                )}
                              </div>
                            </div>
                            <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C49A3A]' : 'text-white/20 group-hover:text-[#C49A3A]'}`} />
                          </div>
                        );
                      })}
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
