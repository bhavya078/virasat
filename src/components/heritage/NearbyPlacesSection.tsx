import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel,
  Utensils,
  Star,
  MapPin,
  ExternalLink,
  Compass,
  Award,
  Sparkles,
  Phone,
  ChevronRight
} from 'lucide-react';
import { PlacesService } from '../../services/placesService';
import { HERITAGE_SITES } from '../../data/heritageSites';
import { HeritageSite } from '../../types';

interface NearbyPlacesSectionProps {
  currentSite: HeritageSite;
}

export const NearbyPlacesSection: React.FC<NearbyPlacesSectionProps> = ({ currentSite }) => {
  const [hotelCategory, setHotelCategory] = useState<string>('all');
  const [restaurantCategory, setRestaurantCategory] = useState<string>('all');

  const hotels = PlacesService.getHotelsForDestination(currentSite.name, hotelCategory);
  const restaurants = PlacesService.getRestaurantsForDestination(currentSite.name, restaurantCategory);

  // Find 3 similar monuments by architecture, dynasty, or state
  const similarSites = HERITAGE_SITES.filter(
    (s) =>
      s.id !== currentSite.id &&
      (s.state === currentSite.state ||
        s.dynasty === currentSite.dynasty ||
        s.architectureStyle === currentSite.architectureStyle)
  ).slice(0, 3);

  return (
    <div className="space-y-12 pt-8 border-t border-gray-200">
      {/* Recommended Hotels Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/30 text-[#083B2D] text-xs font-semibold uppercase tracking-wider mb-1">
              <Hotel className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>Google Places API Integration</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
              Verified Heritage Stays & Hotels near {currentSite.name}
            </h3>
            <p className="text-xs text-gray-500">
              Handpicked authentic accommodations ranging from royal heritage havelis to eco-homestays with live distance calculations.
            </p>
          </div>

          {/* Hotel Category Filters */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['all', 'luxury', 'heritage', 'mid-range', 'homestay', 'budget'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setHotelCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize border transition-all ${
                  hotelCategory === cat
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#083B2D] font-bold shadow-xs'
                    : 'border-gray-200 text-gray-700 bg-white hover:border-[#C49A3A]'
                }`}
              >
                {cat === 'all' ? 'All Stays' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.slice(0, 6).map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-3xl border border-[#C49A3A]/20 overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image & Price Tag */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#083B2D]/90 backdrop-blur-md text-[#C49A3A] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C49A3A]/40">
                  {hotel.category}
                </span>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#C49A3A] text-[#083B2D] font-serif font-bold text-xs shadow-md">
                  {hotel.pricePerNight}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-500 text-xs mb-1 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{hotel.rating}</span>
                    <span className="text-gray-400 font-normal">({hotel.reviewsCount.toLocaleString()} reviews)</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#083B2D] leading-snug line-clamp-1">
                    {hotel.name}
                  </h4>

                  <div className="flex items-center space-x-1 text-gray-500 text-xs mt-1">
                    <MapPin className="w-3 h-3 text-[#C49A3A] shrink-0" />
                    <span className="truncate">{hotel.distanceKm}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-gray-500 font-mono truncate max-w-[160px]">
                    {hotel.address.split(',')[0]}
                  </span>
                  <a
                    href={hotel.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[#083B2D] font-bold hover:text-[#C49A3A] transition-colors"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Restaurants Section */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/30 text-[#083B2D] text-xs font-semibold uppercase tracking-wider mb-1">
              <Utensils className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>Authentic Culinary Engine</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
              Authentic Dining & Regional Food near {currentSite.name}
            </h3>
            <p className="text-xs text-gray-500">
              Verified local restaurants, street chaat corners, pure-veg thali halls, and fine dining establishments.
            </p>
          </div>

          {/* Restaurant Category Filters */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['all', 'local-cuisine', 'vegetarian', 'street-food', 'fine-dining', 'cafe', 'sweets'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setRestaurantCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize border transition-all ${
                  restaurantCategory === cat
                    ? 'bg-[#083B2D] text-[#C49A3A] border-[#083B2D] font-bold shadow-xs'
                    : 'border-gray-200 text-gray-700 bg-white hover:border-[#C49A3A]'
                }`}
              >
                {cat === 'all' ? 'All Dining' : cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 6).map((rest) => (
            <div
              key={rest.id}
              className="bg-white rounded-3xl border border-[#C49A3A]/20 overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image & Category Tag */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#083B2D]/90 backdrop-blur-md text-[#C49A3A] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#C49A3A]/40">
                  {rest.category.replace('-', ' ')}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[#083B2D] font-semibold text-[11px] shadow-sm">
                  {rest.priceLevel}
                </span>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center space-x-1.5 text-amber-500 text-xs mb-1 font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{rest.rating}</span>
                    <span className="text-gray-400 font-normal">({rest.reviewsCount.toLocaleString()} reviews)</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-[#083B2D] leading-snug line-clamp-1">
                    {rest.name}
                  </h4>

                  <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">
                    {rest.cuisine}
                  </p>

                  <div className="bg-[#FAF8F4] p-2 rounded-xl border border-gray-100 mt-2 text-[11px] text-gray-700">
                    <strong className="text-[#083B2D] block">Must Try:</strong>
                    <span className="line-clamp-1 italic">{rest.mustTry}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1 text-gray-500 text-[11px]">
                    <MapPin className="w-3 h-3 text-[#C49A3A] shrink-0" />
                    <span className="truncate max-w-[130px]">{rest.distanceKm}</span>
                  </div>
                  <a
                    href={rest.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[#083B2D] font-bold hover:text-[#C49A3A] transition-colors"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Similar Heritage Sites Across Bharat */}
      {similarSites.length > 0 && (
        <div className="space-y-6 pt-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/30 text-[#083B2D] text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C49A3A]" />
              <span>AI Recommendation Engine</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#083B2D]">
              You May Also Like: Similar Sovereign Heritage
            </h3>
            <p className="text-xs text-gray-500">
              Architecturally and historically linked landmarks sharing dynastic origins or regional mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarSites.map((site) => (
              <Link
                key={site.id}
                to={`/heritage/${site.slug}`}
                className="group bg-white rounded-3xl border border-[#C49A3A]/25 overflow-hidden shadow-luxury hover:shadow-luxury-hover hover:border-[#C49A3A] transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={site.heroImage}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs text-white/90 font-mono flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#C49A3A]" />
                    <span>{site.state}</span>
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#C49A3A] uppercase tracking-wider block">
                      {site.dynasty}
                    </span>
                    <h4 className="font-serif text-base font-bold text-[#083B2D] group-hover:text-[#C49A3A] transition-colors leading-snug">
                      {site.name}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                      {site.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#083B2D] group-hover:text-[#C49A3A]">
                    <span>Explore Monument</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
