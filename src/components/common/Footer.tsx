import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Shield, Award, Heart, Phone, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052A20] text-[#FAF8F4] border-t border-[#C49A3A]/30 relative overflow-hidden pt-16 pb-12">
      {/* Background subtle golden glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#C49A3A] to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C49A3A]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-10 h-10 rounded-full border border-[#C49A3A] bg-[#083B2D] flex items-center justify-center shadow-gold-glow">
                <Compass className="w-5 h-5 text-[#C49A3A]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#C49A3A]">
                  VIRASAT
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#FAF8F4]/70 uppercase -mt-1">
                  V4 • BHARAT HERITAGE OS
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#FAF8F4]/80 leading-relaxed max-w-sm font-light">
              India's Most Premium AI Heritage Platform built for Smart India Hackathon 2026. Empowering global travelers to discover 5,000 years of civilization through cinematic storytelling, predictive AI trip itineraries, and living cultural traditions.
            </p>

            <div className="flex items-center space-x-2 pt-2 text-xs text-[#C49A3A]">
              <Award className="w-4 h-4 text-[#C49A3A]" />
              <span className="font-medium tracking-wide">Smart India Hackathon 2026 • National Finalist</span>
            </div>

            <div className="pt-2 text-xs font-serif text-[#DFB757] italic">
              "अतिथि देवो भव" — Atithi Devo Bhava (The Guest is Sacred)
            </div>
          </div>

          {/* Heritage & Explore */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-[#C49A3A] font-semibold uppercase mb-4">
              Explore Bharat
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F4]/75">
              <li>
                <Link to="/explore" className="hover:text-[#C49A3A] transition-colors">
                  50 Heritage Sites & UNESCO
                </Link>
              </li>
              <li>
                <Link to="/hidden-gems" className="hover:text-[#C49A3A] transition-colors">
                  50 Secret Hidden Gems
                </Link>
              </li>
              <li>
                <Link to="/festivals" className="hover:text-[#C49A3A] transition-colors">
                  50 Living Festivals
                </Link>
              </li>
              <li>
                <Link to="/culture" className="hover:text-[#C49A3A] transition-colors">
                  50 Cultural Traditions
                </Link>
              </li>
              <li>
                <Link to="/states" className="hover:text-[#C49A3A] transition-colors">
                  36 States & Union Territories
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Tools & Experience */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-[#C49A3A] font-semibold uppercase mb-4">
              AI Tools & Guides
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F4]/75">
              <li>
                <Link to="/ai-planner" className="hover:text-[#C49A3A] transition-colors flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-[#C49A3A]" />
                  <span>AI Trip Architect</span>
                </Link>
              </li>
              <li>
                <Link to="/weather" className="hover:text-[#C49A3A] transition-colors">
                  Live Heritage Weather & AQI
                </Link>
              </li>
              <li>
                <Link to="/budget" className="hover:text-[#C49A3A] transition-colors">
                  Interactive Budget Planner
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-[#C49A3A] transition-colors">
                  Admin Platform Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Helplines & Safety */}
          <div>
            <h4 className="font-serif text-sm tracking-wider text-[#C49A3A] font-semibold uppercase mb-4">
              Emergency & Helplines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F4]/75">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>Tourist Helpline: <strong className="text-white">1363</strong></span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>National Emergency: <strong className="text-white">112</strong></span>
              </li>
              <li className="text-[11px] text-[#FAF8F4]/60 pt-2 leading-relaxed">
                Archaeological Survey of India (ASI) official monument pass information embedded.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF8F4]/60 gap-4">
          <p>© 2026 VIRASAT V4. Built with pride for Smart India Hackathon 2026. Made with <Heart className="w-3.5 h-3.5 text-[#E67E22] inline mx-1 fill-[#E67E22]" /> for Bharat.</p>
          <div className="flex items-center space-x-6 text-[11px] text-[#C49A3A]">
            <span>10 Classical Languages</span>
            <span>•</span>
            <span>Zero Placeholders</span>
            <span>•</span>
            <span>100% Authentic Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
