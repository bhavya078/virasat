import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Landmark, Sparkles, MapPin, Search } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileBottomNavProps {
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenSearch }) => {
  const location = useLocation();
  const { t } = useLanguage();

  const handleTap = () => {
    // Subtle haptic pulse on mobile devices supporting vibration API
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {
        // ignore if not allowed by browser policy
      }
    }
  };

  const navItems = [
    {
      label: t('navHome', 'Home'),
      path: '/',
      icon: Compass,
      exact: true
    },
    {
      label: t('navExplore', 'Explore'),
      path: '/explore',
      icon: Landmark,
      exact: false
    },
    {
      label: t('navAIPlanner', 'AI Planner'),
      path: '/ai-planner',
      icon: Sparkles,
      isSpecial: true,
      exact: false
    },
    {
      label: t('navStates', 'States'),
      path: '/states',
      icon: MapPin,
      exact: false
    }
  ];

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 inset-x-0 z-40 xl:hidden bg-[#083B2D]/92 backdrop-blur-2xl border-t border-[#C49A3A]/30 shadow-[0_-4px_25px_rgba(0,0,0,0.4)] select-none pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom,0px))]"
    >
      <div className="max-w-md mx-auto px-3 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = item.exact
            ? location.pathname === item.path
            : location.pathname.startsWith(item.path);
          const Icon = item.icon;

          if (item.isSpecial) {
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleTap}
                className="relative -top-2 flex flex-col items-center justify-center group focus:outline-none"
              >
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#C49A3A] via-[#DFB757] to-[#AA7F27] flex items-center justify-center text-[#083B2D] shadow-[0_0_18px_rgba(196,154,58,0.7)] border-2 border-[#FAF8F4]"
                >
                  <Icon className="w-5 h-5 text-[#083B2D] group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
                <span className="text-[10px] font-semibold text-[#DFB757] mt-0.5 tracking-tight font-sans">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleTap}
              className={`flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-200 tap-target ${
                isActive
                  ? 'text-[#C49A3A]'
                  : 'text-[#FAF8F4]/70 hover:text-[#FAF8F4]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-[#C49A3A]' : ''}`} />
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveDot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C49A3A] shadow-[0_0_8px_#C49A3A]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
              <span className={`text-[10px] mt-1 font-medium tracking-tight ${isActive ? 'font-bold text-[#C49A3A]' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Search Trigger in Dock */}
        <button
          onClick={() => {
            handleTap();
            onOpenSearch();
          }}
          className="flex-1 flex flex-col items-center justify-center py-1 rounded-xl text-[#FAF8F4]/70 hover:text-[#C49A3A] transition-all duration-200 tap-target focus:outline-none"
          title="Search"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] mt-1 font-medium tracking-tight">
            {t('navSearch', 'Search')}
          </span>
        </button>
      </div>
    </nav>
  );
};
