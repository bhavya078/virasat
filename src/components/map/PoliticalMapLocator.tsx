import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PoliticalMapLocatorProps {
  monumentName: string;
  state: string;
  latitude: number;
  longitude: number;
}

// Convert geographic GPS coordinates to SVG coordinate system (360x420)
// India bounds: Lat 8.0°N to 37.5°N, Lon 68.0°E to 97.5°E
function gpsToSvg(lat: number, lon: number): { x: number; y: number } {
  const minLat = 7.5;
  const maxLat = 37.5;
  const minLon = 68.0;
  const maxLon = 97.5;

  const width = 360;
  const height = 420;

  const x = ((lon - minLon) / (maxLon - minLon)) * (width - 60) + 30;
  const y = ((maxLat - lat) / (maxLat - minLat)) * (height - 60) + 30;

  return { x: Math.max(20, Math.min(width - 20, x)), y: Math.max(20, Math.min(height - 20, y)) };
}

export const PoliticalMapLocator: React.FC<PoliticalMapLocatorProps> = ({
  monumentName,
  state,
  latitude,
  longitude
}) => {
  const pin = gpsToSvg(latitude, longitude);
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-[#083B2D] text-white p-5 rounded-3xl border border-[#C49A3A]/40 shadow-luxury space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass className="w-4 h-4 text-[#C49A3A]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#DFB757] font-bold">
            Sovereign Political Map Locator
          </span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-[#C49A3A] font-mono border border-[#C49A3A]/30">
          SOI Projection
        </span>
      </div>

      {/* SVG Political Map Canvas */}
      <div className="relative w-full h-64 bg-[#04231B] rounded-2xl overflow-hidden border border-[#C49A3A]/25 flex items-center justify-center">
        {/* Subtle coordinate grid lines */}
        <svg viewBox="0 0 360 420" className="w-full h-full">
          <defs>
            <radialGradient id="locGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DFB757" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C49A3A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Coordinate Graticules */}
          <line x1="20" y1="210" x2="340" y2="210" stroke="#C49A3A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
          <line x1="180" y1="20" x2="180" y2="400" stroke="#C49A3A" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
          <text x="25" y="206" fill="#C49A3A" fontSize="7" fontFamily="monospace" opacity="0.6">Tropic of Cancer 23.5°N</text>
          <text x="183" y="32" fill="#C49A3A" fontSize="7" fontFamily="monospace" opacity="0.6">82.5°E Standard Meridian</text>

          {/* Sovereign Outer Boundary of Bharat */}
          <path
            d="M 125 35
               C 135 20, 160 15, 175 22
               C 190 28, 205 38, 215 50
               C 225 65, 235 85, 220 100
               C 210 110, 225 125, 240 130
               C 260 135, 275 140, 290 145
               C 315 148, 335 152, 340 165
               C 345 180, 330 195, 310 195
               C 290 195, 275 200, 265 210
               C 255 225, 260 250, 260 270
               C 260 295, 245 320, 230 345
               C 215 370, 195 395, 180 405
               C 165 395, 150 365, 140 335
               C 130 305, 120 275, 115 250
               C 110 230, 95 220, 75 225
               C 50 230, 40 215, 55 200
               C 70 185, 85 160, 95 135
               C 105 110, 115 70, 125 35 Z"
            fill="#083B2D"
            stroke="#C49A3A"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Internal State Partition Skeletal Lines */}
          <path
            d="M 125 85 L 180 95 L 215 80
               M 140 135 L 180 140 L 225 130
               M 95 185 L 155 180 L 220 175 L 265 180
               M 75 225 L 140 220 L 195 225 L 255 220
               M 115 250 L 175 260 L 235 255
               M 130 305 L 180 300 L 225 315
               M 150 365 L 180 360 L 205 370"
            fill="none"
            stroke="#C49A3A"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            opacity="0.4"
          />

          {/* Pulsing Radar Ring on Exact Location */}
          <circle cx={pin.x} cy={pin.y} r="18" fill="url(#locGlow)" className="animate-pulse" />
          <circle cx={pin.x} cy={pin.y} r="8" fill="none" stroke="#DFB757" strokeWidth="1.5" opacity="0.8" />
          <circle cx={pin.x} cy={pin.y} r="3.5" fill="#FAF8F4" stroke="#083B2D" strokeWidth="1" />

          {/* Monument Pin Tooltip Callout */}
          <g transform={`translate(${Math.min(220, Math.max(30, pin.x - 45))}, ${pin.y > 60 ? pin.y - 32 : pin.y + 12})`}>
            <rect width="90" height="22" rx="6" fill="#04231B" stroke="#C49A3A" strokeWidth="1" opacity="0.95" />
            <text x="45" y="14" fill="#DFB757" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              {monumentName.length > 13 ? monumentName.slice(0, 12) + '…' : monumentName}
            </text>
          </g>
        </svg>

        {/* Territory Compass Indicator */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 px-2 py-1 rounded text-[9px] font-mono text-[#C49A3A] border border-[#C49A3A]/30">
          Territory of Bharat
        </div>
      </div>

      {/* Geodetic Metadata */}
      <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-white/5 p-3 rounded-2xl border border-white/10">
        <div>
          <span className="text-[10px] text-white/60 block">Sovereign State:</span>
          <strong className="text-[#C49A3A] text-xs">{state}</strong>
        </div>
        <div>
          <span className="text-[10px] text-white/60 block">Coordinates:</span>
          <strong className="text-white text-xs">{latitude}°N, {longitude}°E</strong>
        </div>
      </div>

      {/* State Atlas Navigation Link */}
      <Link
        to={`/state/${stateSlug}`}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#C49A3A] to-[#DFB757] text-[#083B2D] font-bold text-xs flex items-center justify-center space-x-1.5 hover:brightness-110 transition-all"
      >
        <span>Explore {state} in Sovereign Atlas</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
