import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, CloudRain, Wind, Droplets, Sunrise, Sunset, ShieldAlert, Sparkles, MapPin, Compass } from 'lucide-react';

interface WeatherCity {
  city: string;
  state: string;
  temp: string;
  condition: string;
  highLow: string;
  aqi: number;
  aqiStatus: 'Good' | 'Moderate' | 'Unhealthy' | 'Pristine';
  humidity: string;
  rainChance: string;
  sunrise: string;
  sunset: string;
  bestVisitingSeason: string;
  hourly: { time: string; temp: string; icon: string }[];
}

const WEATHER_CITIES: WeatherCity[] = [
  {
    city: 'Agra (Taj Mahal)',
    state: 'Uttar Pradesh',
    temp: '26°C',
    condition: 'Sunny & Golden Dawn',
    highLow: '31° / 18°',
    aqi: 95,
    aqiStatus: 'Moderate',
    humidity: '42%',
    rainChance: '5%',
    sunrise: '06:12 AM',
    sunset: '06:18 PM',
    bestVisitingSeason: 'October to March (Crisp morning mist)',
    hourly: [
      { time: '06 AM', temp: '19°C', icon: 'sunrise' },
      { time: '09 AM', temp: '23°C', icon: 'sun' },
      { time: '12 PM', temp: '28°C', icon: 'sun' },
      { time: '03 PM', temp: '30°C', icon: 'sun' },
      { time: '06 PM', temp: '26°C', icon: 'sunset' },
      { time: '09 PM', temp: '22°C', icon: 'moon' }
    ]
  },
  {
    city: 'Hampi (Vijayanagara)',
    state: 'Karnataka',
    temp: '29°C',
    condition: 'Dry Granite Breeze',
    highLow: '33° / 21°',
    aqi: 35,
    aqiStatus: 'Pristine',
    humidity: '38%',
    rainChance: '0%',
    sunrise: '06:20 AM',
    sunset: '06:30 PM',
    bestVisitingSeason: 'November to February (Pleasant boulder hiking)',
    hourly: [
      { time: '06 AM', temp: '22°C', icon: 'sunrise' },
      { time: '09 AM', temp: '26°C', icon: 'sun' },
      { time: '12 PM', temp: '31°C', icon: 'sun' },
      { time: '03 PM', temp: '32°C', icon: 'sun' },
      { time: '06 PM', temp: '28°C', icon: 'sunset' },
      { time: '09 PM', temp: '24°C', icon: 'moon' }
    ]
  },
  {
    city: 'Leh & Pangong',
    state: 'Ladakh',
    temp: '14°C',
    condition: 'Clear Alpine Sky',
    highLow: '18° / 2°',
    aqi: 12,
    aqiStatus: 'Pristine',
    humidity: '18%',
    rainChance: '0%',
    sunrise: '05:45 AM',
    sunset: '06:45 PM',
    bestVisitingSeason: 'June to September (Clear road passes)',
    hourly: [
      { time: '06 AM', temp: '4°C', icon: 'sunrise' },
      { time: '09 AM', temp: '10°C', icon: 'sun' },
      { time: '12 PM', temp: '16°C', icon: 'sun' },
      { time: '03 PM', temp: '17°C', icon: 'sun' },
      { time: '06 PM', temp: '12°C', icon: 'sunset' },
      { time: '09 PM', temp: '6°C', icon: 'moon' }
    ]
  },
  {
    city: 'Alleppey Backwaters',
    state: 'Kerala',
    temp: '28°C',
    condition: 'Tropical Coastal Breeze',
    highLow: '31° / 24°',
    aqi: 28,
    aqiStatus: 'Pristine',
    humidity: '78%',
    rainChance: '25%',
    sunrise: '06:18 AM',
    sunset: '06:28 PM',
    bestVisitingSeason: 'September to March (Gentle canal breezes)',
    hourly: [
      { time: '06 AM', temp: '25°C', icon: 'sunrise' },
      { time: '09 AM', temp: '27°C', icon: 'cloud' },
      { time: '12 PM', temp: '30°C', icon: 'sun' },
      { time: '03 PM', temp: '29°C', icon: 'cloud' },
      { time: '06 PM', temp: '27°C', icon: 'sunset' },
      { time: '09 PM', temp: '25°C', icon: 'moon' }
    ]
  },
  {
    city: 'Jaipur & Thar',
    state: 'Rajasthan',
    temp: '27°C',
    condition: 'Sunny Sandstone Glow',
    highLow: '32° / 19°',
    aqi: 82,
    aqiStatus: 'Moderate',
    humidity: '35%',
    rainChance: '0%',
    sunrise: '06:15 AM',
    sunset: '06:22 PM',
    bestVisitingSeason: 'October to March (Ideal fort walking)',
    hourly: [
      { time: '06 AM', temp: '20°C', icon: 'sunrise' },
      { time: '09 AM', temp: '24°C', icon: 'sun' },
      { time: '12 PM', temp: '29°C', icon: 'sun' },
      { time: '03 PM', temp: '31°C', icon: 'sun' },
      { time: '06 PM', temp: '27°C', icon: 'sunset' },
      { time: '09 PM', temp: '23°C', icon: 'moon' }
    ]
  }
];

export const WeatherExperience: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(WEATHER_CITIES[0]);

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sun className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Heritage Weather & Air Quality Intelligence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            Live Heritage Weather Hub
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            Check real-time meteorological conditions, AQI air quality indexes, golden hour sunrises, and optimal visiting seasons.
          </p>
        </div>

        {/* City Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {WEATHER_CITIES.map((c) => (
            <button
              key={c.city}
              onClick={() => setSelectedCity(c)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                selectedCity.city === c.city
                  ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-luxury'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-[#C49A3A]/50'
              }`}
            >
              {c.city}
            </button>
          ))}
        </div>

        {/* Main Weather Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#C49A3A]/30 p-8 sm:p-12 shadow-luxury space-y-8">
          {/* Top Overview */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center space-x-2 text-xs text-[#C49A3A] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#C49A3A]" />
                <span>{selectedCity.state}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#083B2D] mt-1">
                {selectedCity.city}
              </h2>
              <span className="text-sm text-gray-500 font-subheading italic">
                {selectedCity.condition}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Sun className="w-16 h-16 text-[#C49A3A] animate-spin-slow" />
              <div>
                <span className="font-serif text-5xl sm:text-6xl font-bold text-[#083B2D]">
                  {selectedCity.temp}
                </span>
                <span className="block text-xs text-gray-500 font-mono mt-1">
                  High / Low: {selectedCity.highLow}
                </span>
              </div>
            </div>
          </div>

          {/* Metric Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* AQI Meter */}
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#C49A3A]/20">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                <Wind className="w-4 h-4 text-[#C49A3A]" />
                <span>Air Quality (AQI)</span>
              </div>
              <strong className="text-xl font-serif text-[#083B2D] block">
                {selectedCity.aqi} AQI
              </strong>
              <span
                className={`text-[10px] font-mono font-bold uppercase ${
                  selectedCity.aqi < 50
                    ? 'text-green-600'
                    : selectedCity.aqi < 100
                    ? 'text-yellow-600'
                    : 'text-red-500'
                }`}
              >
                {selectedCity.aqiStatus}
              </span>
            </div>

            {/* Humidity */}
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#C49A3A]/20">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                <Droplets className="w-4 h-4 text-blue-500" />
                <span>Humidity</span>
              </div>
              <strong className="text-xl font-serif text-[#083B2D] block">
                {selectedCity.humidity}
              </strong>
              <span className="text-[10px] text-gray-400 font-mono">Comfortable</span>
            </div>

            {/* Rain Chance */}
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#C49A3A]/20">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                <CloudRain className="w-4 h-4 text-indigo-500" />
                <span>Precipitation</span>
              </div>
              <strong className="text-xl font-serif text-[#083B2D] block">
                {selectedCity.rainChance}
              </strong>
              <span className="text-[10px] text-gray-400 font-mono">No Rain Expected</span>
            </div>

            {/* Sun Times */}
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-[#C49A3A]/20">
              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                <Sunrise className="w-4 h-4 text-[#E67E22]" />
                <span>Dawn / Dusk</span>
              </div>
              <strong className="text-sm font-serif text-[#083B2D] block">
                ↑ {selectedCity.sunrise}
              </strong>
              <span className="text-[11px] text-gray-500 font-serif">
                ↓ {selectedCity.sunset}
              </span>
            </div>
          </div>

          {/* Hourly Timeline */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#083B2D] tracking-wider mb-3 font-semibold">
              Today's Hourly Temperature Progression
            </h4>
            <div className="grid grid-cols-6 gap-2 text-center">
              {selectedCity.hourly.map((h, i) => (
                <div key={i} className="bg-[#FAF8F4] p-3 rounded-2xl border border-gray-100">
                  <span className="text-[11px] text-gray-400 block font-mono mb-1">{h.time}</span>
                  <Sun className="w-5 h-5 text-[#C49A3A] mx-auto my-1" />
                  <strong className="text-xs font-serif text-[#083B2D]">{h.temp}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* Best Visiting Season Advice */}
          <div className="p-4 rounded-2xl bg-[#083B2D]/5 border border-[#C49A3A]/30 flex items-start space-x-3 text-xs">
            <Sparkles className="w-5 h-5 text-[#C49A3A] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#083B2D] block font-serif text-sm">
                Architect's Best Visiting Window
              </strong>
              <p className="text-gray-700 leading-relaxed mt-0.5">
                {selectedCity.bestVisitingSeason}. Morning visits between 6:30 AM and 8:30 AM offer the most divine illumination for photography and comfortable temperatures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
