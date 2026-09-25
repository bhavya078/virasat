import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LoaderExperience } from './components/home/LoaderExperience';
import { SpotlightSearch } from './components/search/SpotlightSearch';
import { AIHeritageGuide } from './components/ai/AIHeritageGuide';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { HeritageDetailPage } from './pages/HeritageDetailPage';
import { HiddenGemsPage } from './pages/HiddenGemsPage';
import { FestivalsPage } from './pages/FestivalsPage';
import { CulturePage } from './pages/CulturePage';
import { StatesPage } from './pages/StatesPage';
import { StateDetailPage } from './pages/StateDetailPage';
import { AdminPage } from './pages/AdminPage';

// Components used as full-page experiences
import { AITripPlanner } from './components/ai/AITripPlanner';
import { WeatherExperience } from './components/weather/WeatherExperience';
import { BudgetPlanner } from './components/budget/BudgetPlanner';

export function App() {
  const [showLoader, setShowLoader] = useState(() => {
    // Only show loader once per browser session
    return sessionStorage.getItem('virasat_intro_loaded') !== 'true';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Listen for custom open_spotlight_search event dispatched by keyboard shortcut
  useEffect(() => {
    const handleOpenSearch = () => setIsSearchOpen(true);
    window.addEventListener('open_spotlight_search', handleOpenSearch);
    return () => window.removeEventListener('open_spotlight_search', handleOpenSearch);
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('virasat_intro_loaded', 'true');
    setShowLoader(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {showLoader && <LoaderExperience onComplete={handleLoaderComplete} />}

      <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#111827] selection:bg-[#C49A3A]/30 selection:text-[#083B2D]">
        {/* Persistent Luxury Glass Navbar */}
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Global Spotlight Search Modal (Ctrl+K) */}
        <SpotlightSearch
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Global Floating Dhara AI Heritage Guide Voice Assistant */}
        <AIHeritageGuide />

        {/* Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/heritage/:slug" element={<HeritageDetailPage />} />
            <Route path="/hidden-gems" element={<HiddenGemsPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/state/:slug" element={<StateDetailPage />} />
            <Route path="/ai-planner" element={<AITripPlanner />} />
            <Route path="/weather" element={<WeatherExperience />} />
            <Route path="/budget" element={<BudgetPlanner />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Sovereign SIH 2026 Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
