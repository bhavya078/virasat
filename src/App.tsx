import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LoaderExperience } from './components/home/LoaderExperience';
import { SpotlightSearch } from './components/search/SpotlightSearch';
import { AIHeritageGuide } from './components/ai/AIHeritageGuide';
import { FloatingScrollToTop } from './components/common/FloatingScrollToTop';

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
    return sessionStorage.getItem('virasat_intro_loaded') !== 'true';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Scroll Progress tracking for top golden bar
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  // Inertial smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Keyboard shortcut Ctrl+K listener
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

      {/* Royal Gold Global Scroll Depth Progress Bar */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#083B2D] via-[#C49A3A] to-[#DFB757] z-50 origin-left pointer-events-none shadow-[0_0_12px_rgba(196,154,58,0.8)]"
      />

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

        {/* Global Floating Scroll To Top with Radial Progress Indicator */}
        <FloatingScrollToTop />

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

        {/* Sovereign Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
