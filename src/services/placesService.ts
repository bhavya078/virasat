import { HotelPlace, RestaurantPlace } from '../types';
import { STATES_DATA, getStateData } from '../data/statesData';
import { HERITAGE_SITES } from '../data/heritageSites';

export class PlacesService {
  /**
   * Curated destination-specific hotel places with Google Places API structure
   */
  public static getHotelsForDestination(destination: string, filterCategory?: string): HotelPlace[] {
    const destLower = destination.toLowerCase().trim();
    const allHotels = this.buildCuratedHotels(destLower);
    if (!filterCategory || filterCategory === 'all') {
      return allHotels;
    }
    return allHotels.filter(h => h.category === filterCategory);
  }

  /**
   * Curated destination-specific restaurants with Google Places API structure
   */
  public static getRestaurantsForDestination(destination: string, filterCategory?: string): RestaurantPlace[] {
    const destLower = destination.toLowerCase().trim();
    const allRestaurants = this.buildCuratedRestaurants(destLower);
    if (!filterCategory || filterCategory === 'all') {
      return allRestaurants;
    }
    return allRestaurants.filter(r => r.category === filterCategory);
  }

  private static buildCuratedHotels(destLower: string): HotelPlace[] {
    if (destLower.includes('hampi')) {
      return [
        {
          id: 'evolve-back-kamalapura',
          name: 'Evolve Back Kamalapura Palace',
          category: 'luxury',
          rating: 4.9,
          reviewsCount: 2840,
          pricePerNight: '₹32,000/night',
          priceRange: '₹30,000 - ₹45,000',
          distanceKm: '3.8 km from Virupaksha Temple',
          address: 'Kamalapura - P.K. Halli Road, Hampi, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Evolve+Back+Kamalapura+Palace+Hampi',
          phone: '+91 80 4115 2200'
        },
        {
          id: 'heritage-resort-hampi',
          name: 'Heritage Resort Hampi',
          category: 'heritage',
          rating: 4.6,
          reviewsCount: 1420,
          pricePerNight: '₹9,500/night',
          priceRange: '₹8,500 - ₹12,000',
          distanceKm: '5.2 km from Vittala Temple',
          address: 'Hosapete - Hampi Road, Kamalapur, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Heritage+Resort+Hampi',
          phone: '+91 8394 241777'
        },
        {
          id: 'kishkinda-heritage-resort',
          name: 'Kishkinda Heritage Resort Anegundi',
          category: 'mid-range',
          rating: 4.4,
          reviewsCount: 980,
          pricePerNight: '₹4,500/night',
          priceRange: '₹4,000 - ₹6,000',
          distanceKm: '1.5 km from Anegundi Historic Gate',
          address: 'Near Sanapur Lake, Anegundi, Gangavathi, Karnataka 583234',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kishkinda+Heritage+Resort+Anegundi',
          phone: '+91 8533 287890'
        },
        {
          id: 'archana-guest-house-hampi',
          name: 'Archana Riverview Heritage Homestay',
          category: 'homestay',
          rating: 4.5,
          reviewsCount: 650,
          pricePerNight: '₹2,200/night',
          priceRange: '₹1,800 - ₹2,800',
          distanceKm: '400 m from Virupaksha Temple Ghats',
          address: 'Janata Plot, Hampi Bazaar, Karnataka 583239',
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Archana+Guest+House+Hampi',
          phone: '+91 9448 958223'
        },
        {
          id: 'clarks-inn-hampi',
          name: 'Clarks Inn Hampi Kamalapur',
          category: 'budget',
          rating: 4.2,
          reviewsCount: 1120,
          pricePerNight: '₹3,200/night',
          priceRange: '₹2,800 - ₹4,000',
          distanceKm: '800 m from Archaeological Museum Kamalapura',
          address: 'Opposite ASI Museum, Kamalapur, Hampi, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Clarks+Inn+Hampi',
          phone: '+91 8394 241900'
        }
      ];
    }

    if (destLower.includes('varanasi') || destLower.includes('kashi')) {
      return [
        {
          id: 'brijrama-palace',
          name: 'BrijRama Palace - A Heritage Hotel',
          category: 'heritage',
          rating: 4.9,
          reviewsCount: 3450,
          pricePerNight: '₹35,000/night',
          priceRange: '₹32,000 - ₹50,000',
          distanceKm: 'Directly on Darbhanga Ghat (150m to Dashashwamedh)',
          address: 'Darbhanga Ghat, Dashashwamedh, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=BrijRama+Palace+Varanasi',
          phone: '+91 542 245 5555'
        },
        {
          id: 'taj-ganges-varanasi',
          name: 'Taj Ganges, Varanasi',
          category: 'luxury',
          rating: 4.8,
          reviewsCount: 4120,
          pricePerNight: '₹22,000/night',
          priceRange: '₹19,000 - ₹32,000',
          distanceKm: '4.5 km from Kashi Vishwanath Corridor',
          address: 'Nadesar Palace Grounds, Varanasi, Uttar Pradesh 221002',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taj+Ganges+Varanasi',
          phone: '+91 542 666 0001'
        },
        {
          id: 'scindhia-guest-house',
          name: 'Scindhia Guest House & Haveli',
          category: 'mid-range',
          rating: 4.5,
          reviewsCount: 1250,
          pricePerNight: '₹4,500/night',
          priceRange: '₹3,500 - ₹5,500',
          distanceKm: 'On Scindhia Ghat overlooking Manikarnika',
          address: 'Scindhia Ghat, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Scindhia+Guest+House+Varanasi',
          phone: '+91 542 242 0319'
        },
        {
          id: 'ganpati-guest-house',
          name: 'Ganpati Riverview Heritage Stay',
          category: 'budget',
          rating: 4.4,
          reviewsCount: 1890,
          pricePerNight: '₹2,600/night',
          priceRange: '₹2,000 - ₹3,500',
          distanceKm: 'Meer Ghat, 200m from Kashi Vishwanath Corridor',
          address: 'D 3/24 Meer Ghat, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ganpati+Guest+House+Varanasi',
          phone: '+91 542 239 0057'
        },
        {
          id: 'assi-ghat-heritage-homestay',
          name: 'Subah-e-Banaras Traditional Homestay',
          category: 'homestay',
          rating: 4.7,
          reviewsCount: 540,
          pricePerNight: '₹3,200/night',
          priceRange: '₹2,800 - ₹4,000',
          distanceKm: '150 m from Assi Ghat aarti pavilion',
          address: 'Nagwa Road, Assi Ghat, Varanasi, Uttar Pradesh 221005',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Assi+Ghat+Homestay+Varanasi',
          phone: '+91 9415 224411'
        }
      ];
    }

    // Dynamic state fallback
    const matchedState = getStateData(destLower);
    return matchedState.hotels.map((h, i) => {
      const cats: Array<'luxury' | 'heritage' | 'mid-range' | 'budget' | 'homestay'> = ['luxury', 'heritage', 'mid-range', 'budget', 'homestay'];
      const cat = cats[i % cats.length];
      return {
        id: `${matchedState.id}-hotel-${i}`,
        name: h.name,
        category: cat,
        rating: 4.5 + (i % 5) * 0.1,
        reviewsCount: 850 + i * 320,
        pricePerNight: h.pricePerNight,
        priceRange: h.pricePerNight,
        distanceKm: `${1.2 + i * 1.5} km from ${matchedState.topAttraction.split('&')[0].trim()}`,
        address: `${matchedState.capital}, ${matchedState.name}`,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
        mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + matchedState.capital)}`,
        phone: '+91 1800 102 3333'
      };
    });
  }

  private static buildCuratedRestaurants(destLower: string): RestaurantPlace[] {
    if (destLower.includes('hampi')) {
      return [
        {
          id: 'mango-tree-hampi',
          name: 'Mango Tree Restaurant',
          category: 'local-cuisine',
          rating: 4.7,
          reviewsCount: 4890,
          cuisine: 'South Indian Thali, Fresh Juices & Global Platters',
          distanceKm: '800 m from Virupaksha Temple',
          priceLevel: '₹₹ (₹350/person)',
          timings: '07:30 AM - 10:00 PM',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
          address: 'Kamalapur Road, Next to Mango Tree Garden, Hampi, Karnataka 583239',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mango+Tree+Restaurant+Hampi',
          phone: '+91 9448 895444',
          mustTry: 'Special Banana Leaf Thali with Ghee Podi & Filter Coffee'
        },
        {
          id: 'laughing-buddha-anegundi',
          name: 'Laughing Buddha Cafe',
          category: 'cafe',
          rating: 4.6,
          reviewsCount: 2310,
          cuisine: 'Wood-fired Pizza, Shakshuka, Herbal Teas',
          distanceKm: '1.2 km from Tungabhadra River Crossing, Anegundi',
          priceLevel: '₹₹ (₹400/person)',
          timings: '08:00 AM - 10:30 PM',
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
          address: 'Across the River, Anegundi, Gangavathi, Karnataka 583234',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Laughing+Buddha+Cafe+Hampi',
          mustTry: 'Fresh Wood-fired Pesto Pizza & Ginger Mint Lemonade'
        },
        {
          id: 'suresh-restaurant-hampi',
          name: 'Suresh Traditional Tiffin & Dosa Corner',
          category: 'vegetarian',
          rating: 4.8,
          reviewsCount: 1670,
          cuisine: 'Pure Veg Udupi Breakfast & Crispy Dosas',
          distanceKm: '150 m from Virupaksha Gopuram',
          priceLevel: '₹ (₹120/person)',
          timings: '06:30 AM - 03:00 PM',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
          address: 'Hampi Bazaar Street, Hampi, Karnataka 583239',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Suresh+Restaurant+Hampi+Bazaar',
          mustTry: 'Ghee Podi Masala Dosa with piping hot Coconut Chutney'
        },
        {
          id: 'tengu-shrine-street-food',
          name: 'Hampi Bazaar Mirchi Bajji & Street Food',
          category: 'street-food',
          rating: 4.5,
          reviewsCount: 920,
          cuisine: 'Karnataka Street Savories & Hot Filter Chai',
          distanceKm: '200 m from Hemakuta Hill Steps',
          priceLevel: '₹ (₹60/person)',
          timings: '04:00 PM - 09:30 PM',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
          address: 'Main Bazaar Car Street, Hampi, Karnataka 583239',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hampi+Street+Food+Bazaar',
          mustTry: 'Crisp Mirchi Bajji with spicy onion filling and Mandakki Susla'
        }
      ];
    }

    if (destLower.includes('varanasi') || destLower.includes('kashi')) {
      return [
        {
          id: 'kashi-chaat-bhandar',
          name: 'Kashi Chaat Bhandar',
          category: 'street-food',
          rating: 4.9,
          reviewsCount: 8200,
          cuisine: 'Iconic Banarasi Chaat & Dahi Vada',
          distanceKm: '400 m from Dashashwamedh Ghat',
          priceLevel: '₹ (₹150/person)',
          timings: '02:00 PM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
          address: 'D.37/49 Godowlia Crossing, Varanasi, Uttar Pradesh 221001',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kashi+Chaat+Bhandar+Varanasi',
          phone: '+91 542 245 4488',
          mustTry: 'Hot Tamatar Chaat served in terracotta purva & Palak Patta Chaat'
        },
        {
          id: 'blue-lassi-shop',
          name: 'Blue Lassi Shop (Since 1925)',
          category: 'sweets',
          rating: 4.7,
          reviewsCount: 6540,
          cuisine: 'Artisanal Hand-Churned Fruit & Rabri Lassis',
          distanceKm: '300 m from Manikarnika Ghat',
          priceLevel: '₹ (₹120/person)',
          timings: '08:00 AM - 10:00 PM',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
          address: 'CK 12/1 Kunj Gali, Bangali Tola, Varanasi, Uttar Pradesh 221001',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Blue+Lassi+Shop+Varanasi',
          mustTry: 'Pomegranate & Pista Rabri Lassi topped with clotted Malai'
        },
        {
          id: 'baati-chokha-restaurant',
          name: 'Baati Chokha Heritage Restaurant',
          category: 'vegetarian',
          rating: 4.8,
          reviewsCount: 3980,
          cuisine: 'Traditional Purvanchali Wood-Fired Baati Chokha',
          distanceKm: '3.2 km from Kashi Vishwanath Corridor',
          address: 'Anand Mandir Cinema Complex, Teliyabag, Varanasi, Uttar Pradesh 221002',
          priceLevel: '₹₹ (₹350/person)',
          timings: '11:00 AM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Baati+Chokha+Varanasi',
          phone: '+91 542 220 5544',
          mustTry: 'Charcoal-baked Baati dipped in Desi Ghee with Brinjal Chokha & Kheer'
        },
        {
          id: 'varuna-taj-ganges',
          name: 'Varuna - Fine Dining Indian, Taj Ganges',
          category: 'fine-dining',
          rating: 4.9,
          reviewsCount: 1450,
          cuisine: 'Royal Awadhi & Banarasi Courtyard Feasts',
          distanceKm: '4.5 km from City Center',
          address: 'Nadesar Palace Grounds, Varanasi, Uttar Pradesh 221002',
          priceLevel: '₹₹₹₹ (₹2,200/person)',
          timings: '12:30 PM - 03:00 PM, 07:30 PM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Varuna+Taj+Ganges+Varanasi',
          phone: '+91 542 666 0001',
          mustTry: 'Dum Ki Nalli, Subz Banarasi Kofta & Saffron Sheermal'
        }
      ];
    }

    // Dynamic state fallback
    const matchedState = getStateData(destLower);
    return matchedState.restaurants.map((r, i) => {
      const cats: Array<'vegetarian' | 'street-food' | 'local-cuisine' | 'fine-dining' | 'cafe' | 'sweets'> = [
        'local-cuisine', 'vegetarian', 'street-food', 'fine-dining', 'cafe', 'sweets'
      ];
      const cat = cats[i % cats.length];
      return {
        id: `${matchedState.id}-rest-${i}`,
        name: r.name,
        category: cat,
        rating: 4.6 + (i % 4) * 0.1,
        reviewsCount: 1100 + i * 450,
        cuisine: `${r.cuisineType} (${matchedState.name} Heritage)`,
        distanceKm: `${0.5 + i * 0.8} km from ${matchedState.capital} Center`,
        priceLevel: r.priceRange,
        timings: '11:00 AM - 10:30 PM',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        address: `${matchedState.capital}, ${matchedState.name}`,
        mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + matchedState.capital)}`,
        phone: '+91 1800 200 4545',
        mustTry: r.mustTry
      };
    });
  }
}
