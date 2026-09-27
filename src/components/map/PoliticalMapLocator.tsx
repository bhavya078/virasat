import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { geoXY } from '../../data/indiaMapPaths';

interface PoliticalMapLocatorProps {
  monumentName: string;
  state: string;
  latitude: number;
  longitude: number;
}

export const PoliticalMapLocator: React.FC<PoliticalMapLocatorProps> = ({
  monumentName,
  state,
  latitude,
  longitude
}) => {
  const pin = geoXY(latitude, longitude);
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-[#083B2D] text-white p-5 rounded-3xl border border-[#C49A3A]/40 shadow-luxury space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-[#C49A3A]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#DFB757] font-bold">
            Official Indian Political Map Locator
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-[#C49A3A] font-mono border border-[#C49A3A]/30">
          Survey of India
        </span>
      </div>

      {/* SVG Official Political Map Canvas */}
      <div className="relative w-full h-72 bg-white rounded-2xl overflow-hidden border border-[#C49A3A]/30 flex items-center justify-center shadow-inner">
        <svg viewBox="0 0 768 768" className="w-full h-full select-none">
          <defs>
            <radialGradient id="locGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E67E22" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C49A3A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Official Uploaded India Political Map Base Graphic */}
          <image
            href="/india_political_map_official.jpg"
            x="0"
            y="0"
            width="768"
            height="768"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Pulsing Radar Ring on Exact Location */}
          <circle cx={pin.x} cy={pin.y} r="28" fill="url(#locGlow)" className="animate-ping" style={{ transformOrigin: `${pin.x}px ${pin.y}px` }} />
          <circle cx={pin.x} cy={pin.y} r="18" fill="url(#locGlow)" className="animate-pulse" />
          <circle cx={pin.x} cy={pin.y} r="8" fill="none" stroke="#E67E22" strokeWidth="2.5" />
          <circle cx={pin.x} cy={pin.y} r="4.5" fill="#083B2D" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Monument Pin Tooltip Callout */}
          <g transform={`translate(${Math.min(560, Math.max(40, pin.x - 60))}, ${pin.y > 80 ? pin.y - 36 : pin.y + 16})`}>
            <rect width="120" height="26" rx="8" fill="#083B2D" stroke="#DFB757" strokeWidth="1.5" opacity="0.95" />
            <text x="60" y="16" fill="#DFB757" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              {monumentName.length > 17 ? monumentName.slice(0, 16) + '…' : monumentName}
            </text>
          </g>
        </svg>

        {/* Territory Indicator Badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[10px] font-mono text-[#DFB757] border border-[#C49A3A]/40 flex items-center space-x-1">
          <Shield className="w-3 h-3 text-[#C49A3A]" />
          <span>Sovereign Territory of Bharat</span>
        </div>
      </div>

      {/* Geodetic Metadata */}
      <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-white/5 p-3 rounded-2xl border border-white/10">
        <div>
          <span className="text-[10px] text-white/60 block">Sovereign State / UT:</span>
          <strong className="text-[#C49A3A] text-xs">{state}</strong>
        </div>
        <div>
          <span className="text-[10px] text-white/60 block">Coordinates:</span>
          <strong className="text-white text-xs">{latitude}°N, {longitude}°E</strong>
        </div>
      </div>

      {/* State Atlas Navigation Link */}
      <Link
        to={`/states/${stateSlug}`}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-1.5 hover:brightness-110 transition-all shadow-gold-glow"
      >
        <span>Explore {state} in Sovereign State Atlas</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
