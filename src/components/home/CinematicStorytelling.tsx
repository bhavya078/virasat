import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Volume2, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heritageAudio } from '../../utils/audioService';

interface TimelineEra {
  id: string;
  era: string;
  period: string;
  title: string;
  tagline: string;
  description: string;
  monumentName: string;
  monumentState: string;
  monumentSlug: string;
  image: string;
  keyInnovations: string[];
  dynastyBadge?: string;
  dynasties?: string;
}

const ERAS: TimelineEra[] = [
  {
    id: 'ancient',
    era: 'Ancient Bharat',
    period: '3300 BCE – 600 CE',
    title: 'Dawn of Consciousness & Stone Philosophy',
    tagline: 'From Harappan Urban Sanitation to Ashoka’s Edicts of Peace',
    description: 'Ancient India birthed foundational spiritual philosophies, advanced urban grid architecture in Dholavira and Lothal, zero and decimal mathematics, and monolithic rock-cut cave monasteries in Ajanta and Ellora.',
    monumentName: 'Ajanta & Ellora Caves',
    monumentState: 'Maharashtra',
    monumentSlug: 'ajanta-caves',
    image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1600&q=80',
    keyInnovations: ['Town Planning & Reservoirs', 'Vedic Oral Rigveda', 'Monolithic Rock Carving'],
    dynasties: 'Mauryan, Gupta & Satavahana Epochs'
  },
  {
    id: 'medieval',
    era: 'Medieval Bharat',
    period: '600 CE – 1700 CE',
    title: 'Imperial Stone Spires & Golden Dynasties',
    tagline: 'When Emperors Sculpted Granite to Touch the Heavens',
    description: 'A thousand-year zenith of architectural magnificence. The Cholas constructed towering granite vimanas that conquered waves to Southeast Asia, Vijayanagara raised musical stone pillars at Hampi, and the Mughals perfected white marble pietra dura symmetry at the Taj Mahal.',
    monumentName: 'Hampi Vijayanagara & Konark',
    monumentState: 'Karnataka & Odisha',
    monumentSlug: 'hampi',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1600&q=80',
    keyInnovations: ['Vesara & Dravidian Architecture', 'Lost-Wax Bronze Casting', 'Acoustic Musical Pillars'],
    dynasties: 'Chola, Vijayanagara, Chandela & Mughal Dynasties'
  },
  {
    id: 'modern',
    era: 'Modern Renaissance',
    period: '1700 CE – 1947 CE',
    title: 'Sovereignty, Synthesis & The Freedom Flame',
    tagline: 'Colonial Encounters, Maratha Valour & The March to Independence',
    description: 'The era of Maratha Swarajya under Chhatrapati Shivaji Maharaj, royal Rajput desert citadels, Victorian Gothic saracenic synthesis in Mumbai and Kolkata, and Mahatma Gandhi’s historic non-violent march for India’s freedom.',
    monumentName: 'Victoria Memorial & Mehrangarh Fort',
    monumentState: 'West Bengal & Rajasthan',
    monumentSlug: 'victoria-memorial',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80',
    keyInnovations: ['Indo-Saracenic Architecture', 'Modern Railways & Post', 'Nationalist Heritage Awakening'],
    dynasties: 'Maratha Confederacy, Sikh Empire & Independence Struggle'
  },
  {
    id: 'unesco',
    era: 'UNESCO Living World Heritage',
    period: 'Present Day & Future',
    title: 'Immortal Treasures of Humankind',
    tagline: '42 World Heritage Sites Protected for All Generations',
    description: 'India stands among the top six countries globally for UNESCO World Heritage Sites. From the living Chola temples and ancient Nalanda University to the biodiversity hotspots of the Western Ghats and Kaziranga wetlands, Bharat is a living museum.',
    monumentName: 'Taj Mahal & Living Chola Temples',
    monumentState: 'Pan-India',
    monumentSlug: 'taj-mahal',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    keyInnovations: ['UNESCO World Heritage Biospheres', 'Living Intangible Traditions', 'AI-Driven Archaeological Preservation'],
    dynasties: 'Republic of India Global Heritage'
  }
];

export const CinematicStorytelling: React.FC = () => {
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const activeEra = ERAS[activeEraIndex];

  return (
    <section className="py-24 bg-[#FAF8F4] relative overflow-hidden">
      {/* Subtle background grain & aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C49A3A]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#083B2D]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/30 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Clock className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>Chronicles of Civilization</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            A Journey Through 5,000 Years
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            Witness how four grand epochs molded the spiritual, architectural, and living soul of Bharat.
          </p>
        </div>

        {/* Timeline Era Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {ERAS.map((era, index) => {
            const isActive = activeEraIndex === index;
            return (
              <button
                key={era.id}
                onClick={() => {
                  setActiveEraIndex(index);
                  heritageAudio.playTempleBell();
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 flex items-center space-x-2 border ${
                  isActive
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] shadow-luxury'
                    : 'bg-white/80 text-[#111827]/70 border-gray-200 hover:border-[#C49A3A]/50 hover:bg-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#C49A3A] shadow-gold-glow' : 'bg-gray-300'}`} />
                <span className="font-semibold">{era.era}</span>
                <span className="hidden md:inline text-[10px] opacity-75 font-mono">({era.period.split('–')[0].trim()})</span>
              </button>
            );
          })}
        </div>

        {/* Active Era Storytelling Card (Smooth morphing transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEra.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#C49A3A]/25 shadow-luxury"
          >
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={activeEra.image}
                alt={activeEra.monumentName}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Floating Monument Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#C49A3A] uppercase bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                    Featured Masterpiece
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#FAF8F4]">
                    {activeEra.monumentName}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-white/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C49A3A]" />
                    <span>{activeEra.monumentState}</span>
                  </div>
                </div>

                <Link
                  to={`/heritage/${activeEra.monumentSlug}`}
                  className="px-4 py-2 rounded-full bg-[#C49A3A] hover:bg-[#DFB757] text-[#083B2D] text-xs font-bold transition-all duration-300 flex items-center space-x-1.5 shadow-gold-glow flex-shrink-0"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#083B2D]" />
                </Link>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#C49A3A]/15 text-[#AA7F27] text-xs font-mono font-semibold tracking-wider uppercase">
                {activeEra.period}
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#083B2D] font-bold leading-tight">
                  {activeEra.title}
                </h3>
                <p className="font-subheading text-base sm:text-lg text-[#C49A3A] italic font-medium mt-1">
                  "{activeEra.tagline}"
                </p>
              </div>

              <p className="text-sm text-[#111827]/80 leading-relaxed font-light">
                {activeEra.description}
              </p>

              {/* Key Innovations */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase text-[#083B2D] tracking-wider block mb-2 font-semibold">
                  Hallmarks & Advancements
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeEra.keyInnovations.map((inn, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#F2EEE6] text-[#083B2D] text-xs font-medium border border-[#C49A3A]/20"
                    >
                      {inn}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#111827]/60 font-mono">
                  {activeEra.dynasties}
                </span>
                <Link
                  to="/explore"
                  className="text-xs font-semibold text-[#083B2D] hover:text-[#C49A3A] flex items-center space-x-1 group"
                >
                  <span>View Timeline Monuments</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
