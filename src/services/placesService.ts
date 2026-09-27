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
          pricePerNight: 'â‚¹32,000/night',
          priceRange: 'â‚¹30,000 - â‚¹45,000',
          distanceKm: '3.8 km from Virupaksha Temple',
          address: 'Kamalapura - P.K. Halli Road, Hampi, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Evolve+Back+Kamalapura+Palace+Hampi',
          phone: '+91 80 4115 2200'
        },
        {
          id: 'heritage-resort-hampi',
          name: 'Heritage Resort Hampi',
          category: 'heritage',
          rating: 4.6,
          reviewsCount: 1420,
          pricePerNight: 'â‚¹9,500/night',
          priceRange: 'â‚¹8,500 - â‚¹12,000',
          distanceKm: '5.2 km from Vittala Temple',
          address: 'Hosapete - Hampi Road, Kamalapur, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Heritage+Resort+Hampi',
          phone: '+91 8394 241777'
        },
        {
          id: 'kishkinda-heritage-resort',
          name: 'Kishkinda Heritage Resort Anegundi',
          category: 'mid-range',
          rating: 4.4,
          reviewsCount: 980,
          pricePerNight: 'â‚¹4,500/night',
          priceRange: 'â‚¹4,000 - â‚¹6,000',
          distanceKm: '1.5 km from Anegundi Historic Gate',
          address: 'Near Sanapur Lake, Anegundi, Gangavathi, Karnataka 583234',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kishkinda+Heritage+Resort+Anegundi',
          phone: '+91 8533 287890'
        },
        {
          id: 'archana-guest-house-hampi',
          name: 'Archana Riverview Heritage Homestay',
          category: 'homestay',
          rating: 4.5,
          reviewsCount: 650,
          pricePerNight: 'â‚¹2,200/night',
          priceRange: 'â‚¹1,800 - â‚¹2,800',
          distanceKm: '400 m from Virupaksha Temple Ghats',
          address: 'Janata Plot, Hampi Bazaar, Karnataka 583239',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Archana+Guest+House+Hampi',
          phone: '+91 9448 958223'
        },
        {
          id: 'clarks-inn-hampi',
          name: 'Clarks Inn Hampi Kamalapur',
          category: 'budget',
          rating: 4.2,
          reviewsCount: 1120,
          pricePerNight: 'â‚¹3,200/night',
          priceRange: 'â‚¹2,800 - â‚¹4,000',
          distanceKm: '800 m from Archaeological Museum Kamalapura',
          address: 'Opposite ASI Museum, Kamalapur, Hampi, Karnataka 583221',
          image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
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
          pricePerNight: 'â‚¹35,000/night',
          priceRange: 'â‚¹32,000 - â‚¹50,000',
          distanceKm: 'Directly on Darbhanga Ghat (150m to Dashashwamedh)',
          address: 'Darbhanga Ghat, Dashashwamedh, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=BrijRama+Palace+Varanasi',
          phone: '+91 542 245 5555'
        },
        {
          id: 'taj-ganges-varanasi',
          name: 'Taj Ganges, Varanasi',
          category: 'luxury',
          rating: 4.8,
          reviewsCount: 4120,
          pricePerNight: 'â‚¹22,000/night',
          priceRange: 'â‚¹19,000 - â‚¹32,000',
          distanceKm: '4.5 km from Kashi Vishwanath Corridor',
          address: 'Nadesar Palace Grounds, Varanasi, Uttar Pradesh 221002',
          image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Taj+Ganges+Varanasi',
          phone: '+91 542 666 0001'
        },
        {
          id: 'scindhia-guest-house',
          name: 'Scindhia Guest House & Haveli',
          category: 'mid-range',
          rating: 4.5,
          reviewsCount: 1250,
          pricePerNight: 'â‚¹4,500/night',
          priceRange: 'â‚¹3,500 - â‚¹5,500',
          distanceKm: 'On Scindhia Ghat overlooking Manikarnika',
          address: 'Scindhia Ghat, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Scindhia+Guest+House+Varanasi',
          phone: '+91 542 242 0319'
        },
        {
          id: 'ganpati-guest-house',
          name: 'Ganpati Riverview Heritage Stay',
          category: 'budget',
          rating: 4.4,
          reviewsCount: 1890,
          pricePerNight: 'â‚¹2,600/night',
          priceRange: 'â‚¹2,000 - â‚¹3,500',
          distanceKm: 'Meer Ghat, 200m from Kashi Vishwanath Corridor',
          address: 'D 3/24 Meer Ghat, Varanasi, Uttar Pradesh 221001',
          image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ganpati+Guest+House+Varanasi',
          phone: '+91 542 239 0057'
        },
        {
          id: 'assi-ghat-heritage-homestay',
          name: 'Subah-e-Banaras Traditional Homestay',
          category: 'homestay',
          rating: 4.7,
          reviewsCount: 540,
          pricePerNight: 'â‚¹3,200/night',
          priceRange: 'â‚¹2,800 - â‚¹4,000',
          distanceKm: '150 m from Assi Ghat aarti pavilion',
          address: 'Nagwa Road, Assi Ghat, Varanasi, Uttar Pradesh 221005',
          image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Assi+Ghat+Homestay+Varanasi',
          phone: '+91 9415 224411'
        }
      ];
    }

    if (['jaipur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'rambagh-palace',
                name: 'Rambagh Palace',
                category: 'luxury',
                rating: 4.9,
                reviewsCount: 6500,
                pricePerNight: 'â‚¹45,000/night',
                priceRange: 'â‚¹40,000 - â‚¹75,000',
                distanceKm: '4.5 km from City Palace',
                address: 'Bhawani Singh Rd, Rambagh, Jaipur, Rajasthan 302005',
                image: 'https://images.unsplash.com/photo-1599021456807-25f0f7876b51?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 238 5700'
        },
        {
                id: 'samode-haveli',
                name: 'Samode Haveli',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 3200,
                pricePerNight: 'â‚¹15,000/night',
                priceRange: 'â‚¹12,000 - â‚¹20,000',
                distanceKm: '2.5 km from Hawa Mahal',
                address: 'Gangapole, Jaipur, Rajasthan 302002',
                image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 263 2370'
        },
        {
                id: 'pearl-palace',
                name: 'Hotel Pearl Palace',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 4500,
                pricePerNight: 'â‚¹1,500/night',
                priceRange: 'â‚¹1,200 - â‚¹2,500',
                distanceKm: '3.0 km from Railway Station',
                address: '51 Hari Kishan Somani Marg, Jaipur, Rajasthan 302001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 237 3700'
        },
        {
                id: 'zostel-jaipur',
                name: 'Zostel Jaipur',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 2800,
                pricePerNight: 'â‚¹700/night',
                priceRange: 'â‚¹600 - â‚¹1,500',
                distanceKm: '1.5 km from Hawa Mahal',
                address: 'First Floor, 85-A, Rajamal Ka Talab, Jaipur, Rajasthan 302002',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2266'
        },
        {
                id: 'narain-niwas',
                name: 'Narain Niwas Palace',
                category: 'mid-range',
                rating: 4.6,
                reviewsCount: 2100,
                pricePerNight: 'â‚¹8,500/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '3.5 km from Albert Hall Museum',
                address: 'Kanota Bagh, Narayan Singh Rd, Jaipur, Rajasthan 302004',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 256 1291'
        }
];
    }

    if (['udaipur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'taj-lake-palace',
                name: 'Taj Lake Palace',
                category: 'luxury',
                rating: 4.9,
                reviewsCount: 4500,
                pricePerNight: 'â‚¹65,000/night',
                priceRange: 'â‚¹55,000 - â‚¹90,000',
                distanceKm: '0 km from Lake Pichola',
                address: 'Lake Pichola, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 242 8800'
        },
        {
                id: 'amet-haveli',
                name: 'Amet Haveli',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹12,000/night',
                priceRange: 'â‚¹10,000 - â‚¹18,000',
                distanceKm: '1.2 km from City Palace',
                address: 'Outside Chandpole, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 243 1085'
        },
        {
                id: 'zostel-udaipur',
                name: 'Zostel Udaipur',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 3500,
                pricePerNight: 'â‚¹800/night',
                priceRange: 'â‚¹700 - â‚¹2,000',
                distanceKm: '0.5 km from Jagdish Temple',
                address: 'Purohit Ji Ka Khurra, Chandpole, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2265'
        },
        {
                id: 'jagat-niwas',
                name: 'Jagat Niwas Palace Hotel',
                category: 'mid-range',
                rating: 4.7,
                reviewsCount: 2900,
                pricePerNight: 'â‚¹7,500/night',
                priceRange: 'â‚¹6,000 - â‚¹12,000',
                distanceKm: '0.8 km from City Palace',
                address: '23-25, Lal Ghat, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 242 2860'
        },
        {
                id: 'dream-heaven',
                name: 'Dream Heaven Guest House',
                category: 'homestay',
                rating: 4.5,
                reviewsCount: 1200,
                pricePerNight: 'â‚¹1,200/night',
                priceRange: 'â‚¹1,000 - â‚¹2,500',
                distanceKm: '1.5 km from City Palace',
                address: '25, Hanuman Ghat, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98282 32152'
        }
];
    }

    if (['agra'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'oberoi-amarvilas',
                name: 'The Oberoi Amarvilas',
                category: 'luxury',
                rating: 4.9,
                reviewsCount: 5200,
                pricePerNight: 'â‚¹75,000/night',
                priceRange: 'â‚¹60,000 - â‚¹95,000',
                distanceKm: '0.6 km from Taj Mahal',
                address: 'Taj East Gate Rd, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1585542848135-2b449ddfa072?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 223 1515'
        },
        {
                id: 'crystal-sarovar',
                name: 'Crystal Sarovar Premiere',
                category: 'mid-range',
                rating: 4.5,
                reviewsCount: 6800,
                pricePerNight: 'â‚¹5,500/night',
                priceRange: 'â‚¹4,500 - â‚¹8,000',
                distanceKm: '2.5 km from Taj Mahal',
                address: 'Fatehabad Rd, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 711 0711'
        },
        {
                id: 'zostel-agra',
                name: 'Zostel Agra',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 3200,
                pricePerNight: 'â‚¹750/night',
                priceRange: 'â‚¹600 - â‚¹2,000',
                distanceKm: '1.2 km from Taj Mahal',
                address: 'Taj East Gate Rd, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2267'
        },
        {
                id: 'itc-mughal',
                name: 'ITC Mughal',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 8500,
                pricePerNight: 'â‚¹11,000/night',
                priceRange: 'â‚¹9,000 - â‚¹16,000',
                distanceKm: '3.0 km from Taj Mahal',
                address: 'Taj Ganj, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 402 1700'
        },
        {
                id: 'saniya-palace',
                name: 'Saniya Palace Hotel',
                category: 'homestay',
                rating: 4.2,
                reviewsCount: 1500,
                pricePerNight: 'â‚¹1,500/night',
                priceRange: 'â‚¹1,000 - â‚¹2,500',
                distanceKm: '0.4 km from Taj Mahal',
                address: 'Chowk Kagziyan, South Gate Taj Mahal, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98372 87693'
        }
];
    }

    if (['delhi'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'imperial-hotel',
                name: 'The Imperial',
                category: 'luxury',
                rating: 4.8,
                reviewsCount: 7500,
                pricePerNight: 'â‚¹22,000/night',
                priceRange: 'â‚¹18,000 - â‚¹35,000',
                distanceKm: '1.5 km from India Gate',
                address: 'Janpath, New Delhi, Delhi 110001',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 2334 1234'
        },
        {
                id: 'haveli-dharampura',
                name: 'Haveli Dharampura',
                category: 'heritage',
                rating: 4.5,
                reviewsCount: 2200,
                pricePerNight: 'â‚¹12,500/night',
                priceRange: 'â‚¹10,000 - â‚¹18,000',
                distanceKm: '0.8 km from Jama Masjid',
                address: 'Dharampura, Chandni Chowk, New Delhi, Delhi 110006',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 2326 1000'
        },
        {
                id: 'zostel-delhi',
                name: 'Zostel Old Delhi',
                category: 'budget',
                rating: 4.4,
                reviewsCount: 3100,
                pricePerNight: 'â‚¹800/night',
                priceRange: 'â‚¹700 - â‚¹2,000',
                distanceKm: '0.5 km from New Delhi Railway Station',
                address: 'Arakashan Road, New Delhi, Delhi 110055',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2268'
        },
        {
                id: 'lalit-delhi',
                name: 'The Lalit New Delhi',
                category: 'mid-range',
                rating: 4.6,
                reviewsCount: 11000,
                pricePerNight: 'â‚¹9,500/night',
                priceRange: 'â‚¹8,000 - â‚¹14,000',
                distanceKm: '1.0 km from Connaught Place',
                address: 'Barakhamba Avenue, Connaught Place, New Delhi, Delhi 110001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 4444 7777'
        },
        {
                id: 'jugaad-hostels',
                name: 'Jugaad Hostels',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹600/night',
                priceRange: 'â‚¹500 - â‚¹1,800',
                distanceKm: '4.5 km from Qutub Minar',
                address: 'R K Puram, New Delhi, Delhi 110022',
                image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['kerala', 'munnar', 'alleppey'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'kumarakom-lake-resort',
                name: 'Kumarakom Lake Resort',
                category: 'luxury',
                rating: 4.8,
                reviewsCount: 3800,
                pricePerNight: 'â‚¹28,000/night',
                priceRange: 'â‚¹25,000 - â‚¹40,000',
                distanceKm: '0 km from Vembanad Lake',
                address: 'Kumarakom North Post, Kottayam, Kerala 686563',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 481 252 4900'
        },
        {
                id: 'brunton-boatyard',
                name: 'Brunton Boatyard',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 2100,
                pricePerNight: 'â‚¹18,000/night',
                priceRange: 'â‚¹15,000 - â‚¹25,000',
                distanceKm: '0.2 km from Chinese Fishing Nets',
                address: 'Fort Kochi, Kochi, Kerala 682001',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 484 221 5461'
        },
        {
                id: 'zostel-alleppey',
                name: 'Zostel Alleppey',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 2600,
                pricePerNight: 'â‚¹800/night',
                priceRange: 'â‚¹700 - â‚¹2,000',
                distanceKm: '0.1 km from Alleppey Beach',
                address: 'Cullen Rd, Alappuzha, Kerala 688012',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2269'
        },
        {
                id: 'tea-county-munnar',
                name: 'Tea County Munnar',
                category: 'mid-range',
                rating: 4.4,
                reviewsCount: 3500,
                pricePerNight: 'â‚¹6,500/night',
                priceRange: 'â‚¹5,000 - â‚¹9,000',
                distanceKm: '1.0 km from Munnar Town',
                address: 'KTDC Hill Resort, Munnar, Kerala 685612',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 4865 230 460'
        },
        {
                id: 'marari-beach-homestay',
                name: 'Marari Beach Homestay',
                category: 'homestay',
                rating: 4.6,
                reviewsCount: 1400,
                pricePerNight: 'â‚¹2,500/night',
                priceRange: 'â‚¹2,000 - â‚¹4,000',
                distanceKm: '0.5 km from Marari Beach',
                address: 'Mararikulam, Kerala 688523',
                image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['goa'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'taj-exotica',
                name: 'Taj Exotica Resort & Spa',
                category: 'luxury',
                rating: 4.8,
                reviewsCount: 6200,
                pricePerNight: 'â‚¹25,000/night',
                priceRange: 'â‚¹20,000 - â‚¹40,000',
                distanceKm: '0.1 km from Benaulim Beach',
                address: 'Benaulim, Goa 403716',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 668 3333'
        },
        {
                id: 'pousada-by-the-beach',
                name: 'Pousada by the Beach',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 1500,
                pricePerNight: 'â‚¹14,000/night',
                priceRange: 'â‚¹12,000 - â‚¹18,000',
                distanceKm: '0.1 km from Calangute Beach',
                address: 'Holiday St, Calangute, Goa 403516',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 227 9061'
        },
        {
                id: 'zostel-goa',
                name: 'Zostel Goa',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 4100,
                pricePerNight: 'â‚¹800/night',
                priceRange: 'â‚¹700 - â‚¹2,500',
                distanceKm: '1.5 km from Calangute Beach',
                address: 'House No. 3/15, Calangute, Goa 403516',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2270'
        },
        {
                id: 'la-cabana',
                name: 'La Cabana Beach & Spa',
                category: 'mid-range',
                rating: 4.4,
                reviewsCount: 3800,
                pricePerNight: 'â‚¹6,500/night',
                priceRange: 'â‚¹5,000 - â‚¹9,000',
                distanceKm: '0.1 km from Ashvem Beach',
                address: 'Ashvem Beach, Mandrem, Goa 403527',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 674 1500'
        },
        {
                id: 'soul-vacation',
                name: 'Soul Vacation Resort & Spa',
                category: 'homestay',
                rating: 4.3,
                reviewsCount: 1200,
                pricePerNight: 'â‚¹4,500/night',
                priceRange: 'â‚¹3,500 - â‚¹6,000',
                distanceKm: '0.5 km from Colva Beach',
                address: 'Colva, Goa 403708',
                image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['mysuru', 'mysore'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'radisson-mysore',
                name: 'Radisson Blu Plaza Hotel',
                category: 'luxury',
                rating: 4.6,
                reviewsCount: 9500,
                pricePerNight: 'â‚¹8,500/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '1.5 km from Mysore Palace',
                address: 'MG Road, Mysuru, Karnataka 570010',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 821 710 1234'
        },
        {
                id: 'royal-orchid-metropole',
                name: 'Royal Orchid Metropole',
                category: 'heritage',
                rating: 4.4,
                reviewsCount: 3200,
                pricePerNight: 'â‚¹6,000/night',
                priceRange: 'â‚¹5,000 - â‚¹8,500',
                distanceKm: '2.0 km from Mysore Palace',
                address: 'Jhansi Rani Lakshmi Bai Rd, Mysuru, Karnataka 570005',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 821 425 5566'
        },
        {
                id: 'hotel-roopa',
                name: 'Hotel Roopa',
                category: 'mid-range',
                rating: 4.2,
                reviewsCount: 2800,
                pricePerNight: 'â‚¹2,500/night',
                priceRange: 'â‚¹2,000 - â‚¹3,500',
                distanceKm: '1.0 km from Mysore Palace',
                address: 'Nilgiri Road, Mysuru, Karnataka 570001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 821 244 3770'
        },
        {
                id: 'zostel-mysore',
                name: 'Zostel Mysore',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 2100,
                pricePerNight: 'â‚¹700/night',
                priceRange: 'â‚¹600 - â‚¹1,800',
                distanceKm: '3.0 km from Mysore Palace',
                address: 'Saraswathipuram, Mysuru, Karnataka 570009',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2271'
        }
];
    }

    if (['rishikesh'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'aloha-on-the-ganges',
                name: 'Aloha on the Ganges',
                category: 'mid-range',
                rating: 4.4,
                reviewsCount: 6500,
                pricePerNight: 'â‚¹8,000/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '1.5 km from Laxman Jhula',
                address: 'Tapovan, Rishikesh, Uttarakhand 249192',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 135 244 3300'
        },
        {
                id: 'veda5-luxury',
                name: 'Veda5 Luxury Ayurveda',
                category: 'luxury',
                rating: 4.7,
                reviewsCount: 1200,
                pricePerNight: 'â‚¹12,000/night',
                priceRange: 'â‚¹10,000 - â‚¹18,000',
                distanceKm: '6.0 km from Ram Jhula',
                address: 'Phool Chatti, Rishikesh, Uttarakhand 249304',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        },
        {
                id: 'zostel-rishikesh',
                name: 'Zostel Rishikesh',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 3800,
                pricePerNight: 'â‚¹800/night',
                priceRange: 'â‚¹600 - â‚¹2,000',
                distanceKm: '1.0 km from Laxman Jhula',
                address: 'Tapovan, Rishikesh, Uttarakhand 249192',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2272'
        },
        {
                id: 'parmarth-niketan',
                name: 'Parmarth Niketan',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 12000,
                pricePerNight: 'â‚¹1,500/night',
                priceRange: 'â‚¹1,000 - â‚¹3,000',
                distanceKm: '0 km from Ganga Aarti',
                address: 'Swargashram, Rishikesh, Uttarakhand 249304',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 135 244 0077'
        }
];
    }

    if (['jodhpur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'umaid-bhawan',
                name: 'Umaid Bhawan Palace',
                category: 'luxury',
                rating: 4.9,
                reviewsCount: 4200,
                pricePerNight: 'â‚¹65,000/night',
                priceRange: 'â‚¹55,000 - â‚¹95,000',
                distanceKm: '5.0 km from Mehrangarh Fort',
                address: 'Circuit House Rd, Jodhpur, Rajasthan 342006',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 291 251 0101'
        },
        {
                id: 'raas-jodhpur',
                name: 'RAAS Jodhpur',
                category: 'heritage',
                rating: 4.7,
                reviewsCount: 2500,
                pricePerNight: 'â‚¹22,000/night',
                priceRange: 'â‚¹18,000 - â‚¹30,000',
                distanceKm: '0.5 km from Mehrangarh Fort',
                address: 'Toorji Ka Jhalra, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 291 263 6455'
        },
        {
                id: 'zostel-jodhpur',
                name: 'Zostel Jodhpur',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 3100,
                pricePerNight: 'â‚¹750/night',
                priceRange: 'â‚¹600 - â‚¹2,000',
                distanceKm: '1.0 km from Mehrangarh Fort',
                address: 'Makrana Mohalla, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2273'
        },
        {
                id: 'haveli-inn-pal',
                name: 'Haveli Inn Pal',
                category: 'mid-range',
                rating: 4.5,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹4,500/night',
                priceRange: 'â‚¹3,500 - â‚¹6,000',
                distanceKm: '1.5 km from Clock Tower',
                address: 'Gulab Sagar, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 291 262 2544'
        }
];
    }

    if (['kolkata'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'oberoi-grand',
                name: 'The Oberoi Grand',
                category: 'luxury',
                rating: 4.8,
                reviewsCount: 8500,
                pricePerNight: 'â‚¹14,000/night',
                priceRange: 'â‚¹12,000 - â‚¹20,000',
                distanceKm: '1.0 km from Victoria Memorial',
                address: 'Jawaharlal Nehru Rd, Kolkata, West Bengal 700013',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 2249 2323'
        },
        {
                id: 'lalit-great-eastern',
                name: 'The Lalit Great Eastern',
                category: 'heritage',
                rating: 4.5,
                reviewsCount: 5200,
                pricePerNight: 'â‚¹8,500/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '1.5 km from Howrah Bridge',
                address: 'Dalhousie Square, Kolkata, West Bengal 700069',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 4444 7777'
        },
        {
                id: 'hindusthan-international',
                name: 'Hotel Hindusthan International',
                category: 'mid-range',
                rating: 4.2,
                reviewsCount: 6100,
                pricePerNight: 'â‚¹6,000/night',
                priceRange: 'â‚¹5,000 - â‚¹8,000',
                distanceKm: '2.5 km from Victoria Memorial',
                address: 'AJC Bose Rd, Kolkata, West Bengal 700020',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 2280 2323'
        },
        {
                id: 'bunk-hostel',
                name: 'Bunk Hostel',
                category: 'budget',
                rating: 4.4,
                reviewsCount: 1500,
                pricePerNight: 'â‚¹600/night',
                priceRange: 'â‚¹500 - â‚¹1,500',
                distanceKm: '4.0 km from Park Street',
                address: 'Salt Lake City, Kolkata, West Bengal 700064',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['khajuraho'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'taj-chandela',
                name: 'Taj Chandela',
                category: 'luxury',
                rating: 4.5,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹8,500/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '1.5 km from Western Group of Temples',
                address: 'Airport Rd, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 7686 272 052'
        },
        {
                id: 'hotel-harmony',
                name: 'Hotel Harmony',
                category: 'heritage',
                rating: 4.3,
                reviewsCount: 1200,
                pricePerNight: 'â‚¹2,500/night',
                priceRange: 'â‚¹2,000 - â‚¹4,000',
                distanceKm: '0.5 km from Western Group of Temples',
                address: 'Jain Temple Rd, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        },
        {
                id: 'zostel-khajuraho',
                name: 'Zostel Khajuraho',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 1500,
                pricePerNight: 'â‚¹600/night',
                priceRange: 'â‚¹500 - â‚¹1,500',
                distanceKm: '0.8 km from Western Group of Temples',
                address: 'Shivsagar Lake, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2274'
        },
        {
                id: 'hotel-surya',
                name: 'Hotel Surya',
                category: 'mid-range',
                rating: 4.2,
                reviewsCount: 950,
                pricePerNight: 'â‚¹3,000/night',
                priceRange: 'â‚¹2,500 - â‚¹4,500',
                distanceKm: '1.0 km from Western Group of Temples',
                address: 'Jain Temple Rd, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 7686 274 145'
        }
];
    }

    if (['leh', 'ladakh'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'grand-dragon',
                name: 'The Grand Dragon Ladakh',
                category: 'luxury',
                rating: 4.7,
                reviewsCount: 3500,
                pricePerNight: 'â‚¹18,000/night',
                priceRange: 'â‚¹15,000 - â‚¹25,000',
                distanceKm: '1.0 km from Leh Palace',
                address: 'Old Road Sheynam, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 1982 255 866'
        },
        {
                id: 'lchang-nang',
                name: 'Lchang Nang Retreat',
                category: 'heritage',
                rating: 4.8,
                reviewsCount: 850,
                pricePerNight: 'â‚¹12,000/night',
                priceRange: 'â‚¹10,000 - â‚¹16,000',
                distanceKm: '3.0 km from Nubra Valley',
                address: 'Tegar, Nubra Valley, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        },
        {
                id: 'zostel-leh',
                name: 'Zostel Leh',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 2200,
                pricePerNight: 'â‚¹900/night',
                priceRange: 'â‚¹700 - â‚¹2,000',
                distanceKm: '1.5 km from Leh Market',
                address: 'Karzoo, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2275'
        },
        {
                id: 'hotel-ladakh',
                name: 'Hotel City Palace Leh',
                category: 'mid-range',
                rating: 4.3,
                reviewsCount: 1100,
                pricePerNight: 'â‚¹4,500/night',
                priceRange: 'â‚¹3,500 - â‚¹6,000',
                distanceKm: '0.8 km from Leh Market',
                address: 'Upper Tukcha Rd, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['amritsar'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'taj-swarna',
                name: 'Taj Swarna',
                category: 'luxury',
                rating: 4.8,
                reviewsCount: 6800,
                pricePerNight: 'â‚¹9,500/night',
                priceRange: 'â‚¹8,000 - â‚¹14,000',
                distanceKm: '5.0 km from Golden Temple',
                address: 'Basant Avenue, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 665 8000'
        },
        {
                id: 'mrs-bhandaris',
                name: 'Mrs Bhandaris Guesthouse',
                category: 'heritage',
                rating: 4.5,
                reviewsCount: 950,
                pricePerNight: 'â‚¹3,500/night',
                priceRange: 'â‚¹3,000 - â‚¹5,000',
                distanceKm: '4.0 km from Golden Temple',
                address: 'Cantonment Area, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 222 8509'
        },
        {
                id: 'zostel-amritsar',
                name: 'Zostel Amritsar',
                category: 'budget',
                rating: 4.6,
                reviewsCount: 2900,
                pricePerNight: 'â‚¹650/night',
                priceRange: 'â‚¹500 - â‚¹1,800',
                distanceKm: '1.5 km from Golden Temple',
                address: 'Near Jallianwala Bagh, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2276'
        },
        {
                id: 'grand-grt',
                name: 'Grand by GRT Hotels',
                category: 'mid-range',
                rating: 4.4,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹4,500/night',
                priceRange: 'â‚¹3,500 - â‚¹6,000',
                distanceKm: '2.0 km from Golden Temple',
                address: 'Mall Road, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999'
        }
];
    }

    if (['darjeeling'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'mayfair-darjeeling',
                name: 'Mayfair Darjeeling',
                category: 'luxury',
                rating: 4.6,
                reviewsCount: 3800,
                pricePerNight: 'â‚¹12,000/night',
                priceRange: 'â‚¹10,000 - â‚¹16,000',
                distanceKm: '1.0 km from Mall Road',
                address: 'Mall Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 6376'
        },
        {
                id: 'windamere-hotel',
                name: 'Windamere Hotel',
                category: 'heritage',
                rating: 4.5,
                reviewsCount: 1200,
                pricePerNight: 'â‚¹15,000/night',
                priceRange: 'â‚¹12,000 - â‚¹18,000',
                distanceKm: '0 km from Observatory Hill',
                address: 'Observatory Hill, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 4041'
        },
        {
                id: 'zostel-darjeeling',
                name: 'Zostel Darjeeling',
                category: 'budget',
                rating: 4.4,
                reviewsCount: 2500,
                pricePerNight: 'â‚¹750/night',
                priceRange: 'â‚¹600 - â‚¹2,000',
                distanceKm: '2.0 km from Mall Road',
                address: 'Gandhi Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2277'
        },
        {
                id: 'hotel-sinclairs',
                name: 'Hotel Sinclairs Darjeeling',
                category: 'mid-range',
                rating: 4.2,
                reviewsCount: 3100,
                pricePerNight: 'â‚¹5,500/night',
                priceRange: 'â‚¹4,500 - â‚¹7,500',
                distanceKm: '1.5 km from Chowrasta',
                address: 'Gandhi Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 6431'
        }
];
    }

    if (['madurai'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'heritage-madurai',
                name: 'Heritage Madurai',
                category: 'luxury',
                rating: 4.6,
                reviewsCount: 4500,
                pricePerNight: 'â‚¹8,500/night',
                priceRange: 'â‚¹7,000 - â‚¹12,000',
                distanceKm: '4.5 km from Meenakshi Temple',
                address: 'Melakkal Rd, Madurai, Tamil Nadu 625016',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 338 9898'
        },
        {
                id: 'hotel-supreme',
                name: 'Hotel Supreme',
                category: 'mid-range',
                rating: 4.1,
                reviewsCount: 3200,
                pricePerNight: 'â‚¹2,500/night',
                priceRange: 'â‚¹2,000 - â‚¹4,000',
                distanceKm: '1.5 km from Meenakshi Temple',
                address: 'West Perumal Maistry Street, Madurai, Tamil Nadu 625001',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 234 3151'
        },
        {
                id: 'zostel-madurai',
                name: 'Zostel Madurai',
                category: 'budget',
                rating: 4.5,
                reviewsCount: 1800,
                pricePerNight: 'â‚¹700/night',
                priceRange: 'â‚¹600 - â‚¹1,800',
                distanceKm: '2.0 km from Meenakshi Temple',
                address: 'Ellis Nagar, Madurai, Tamil Nadu 625016',
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 22 4896 2278'
        },
        {
                id: 'grt-regency',
                name: 'Regency Madurai by GRT Hotels',
                category: 'heritage',
                rating: 4.4,
                reviewsCount: 2800,
                pricePerNight: 'â‚¹5,500/night',
                priceRange: 'â‚¹4,500 - â‚¹7,500',
                distanceKm: '3.5 km from Meenakshi Temple',
                address: 'Palanganatham Cross Rd, Madurai, Tamil Nadu 625003',
                image: 'https://images.unsplash.com/photo-1542314831-c6a4d27df08d?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 237 1155'
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
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
        mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + matchedState.capital)}`,
        phone: `+91 ${matchedState.emergencyNumbers?.touristHelpline || '1800 111 363'}`
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
          priceLevel: 'â‚¹â‚¹ (â‚¹350/person)',
          timings: '07:30 AM - 10:00 PM',
          image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
          timings: '08:00 AM - 10:30 PM',
          image: 'https://images.unsplash.com/photo-1529290130-4ca3753253ae?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹ (â‚¹120/person)',
          timings: '06:30 AM - 03:00 PM',
          image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹ (â‚¹60/person)',
          timings: '04:00 PM - 09:30 PM',
          image: 'https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹ (â‚¹150/person)',
          timings: '02:00 PM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹ (â‚¹120/person)',
          timings: '08:00 AM - 10:00 PM',
          image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹â‚¹ (â‚¹350/person)',
          timings: '11:00 AM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80',
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
          priceLevel: 'â‚¹â‚¹â‚¹â‚¹ (â‚¹2,200/person)',
          timings: '12:30 PM - 03:00 PM, 07:30 PM - 11:00 PM',
          image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Varuna+Taj+Ganges+Varanasi',
          phone: '+91 542 666 0001',
          mustTry: 'Dum Ki Nalli, Subz Banarasi Kofta & Saffron Sheermal'
        }
      ];
    }

    if (['jaipur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'lmb-jaipur',
                name: 'Laxmi Mishthan Bhandar (LMB)',
                category: 'vegetarian',
                rating: 4.2,
                reviewsCount: 15400,
                cuisine: 'Rajasthani Thali & Sweets',
                distanceKm: '0 km from Johari Bazaar',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '08:00 AM - 11:00 PM',
                address: 'Johari Bazar Rd, Jaipur, Rajasthan 302003',
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 400 1616',
                mustTry: 'Rajasthani Royal Thali & Ghewar'
        },
        {
                id: 'handi-jaipur',
                name: 'Handi Restaurant',
                category: 'local-cuisine',
                rating: 4.5,
                reviewsCount: 8200,
                cuisine: 'North Indian & Mughlai Non-Veg',
                distanceKm: '2.0 km from Albert Hall',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹800/person)',
                timings: '12:00 PM - 11:00 PM',
                address: 'Maya Mansion, MI Road, Jaipur, Rajasthan 302001',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 407 2000',
                mustTry: 'Handi Meat & Roomali Roti'
        },
        {
                id: 'tapri-cafe',
                name: 'Tapri The Tea House',
                category: 'cafe',
                rating: 4.6,
                reviewsCount: 9100,
                cuisine: 'Cafe, Fast Food, Tea',
                distanceKm: '1.5 km from Central Park',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '07:30 AM - 09:30 PM',
                address: 'B4-E, Prithviraj Road, C Scheme, Jaipur, Rajasthan 302001',
                image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 401 2222',
                mustTry: 'Vada Pav & Cutting Chai'
        },
        {
                id: 'rawat-mishtan',
                name: 'Rawat Mishtan Bhandar',
                category: 'sweets',
                rating: 4.4,
                reviewsCount: 18500,
                cuisine: 'Sweets & Snacks',
                distanceKm: '1.0 km from Sindhi Camp',
                priceLevel: 'â‚¹ (â‚¹200/person)',
                timings: '06:00 AM - 10:30 PM',
                address: 'Station Rd, Sindhi Camp, Jaipur, Rajasthan 302001',
                image: 'https://images.unsplash.com/photo-1589301773809-7756f7e43685?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 236 7460',
                mustTry: 'Pyaz Kachori & Mawa Kachori'
        },
        {
                id: 'laxmi-mishthan-street',
                name: 'Laxmi Mishthan Street Food',
                category: 'street-food',
                rating: 4.3,
                reviewsCount: 3200,
                cuisine: 'Street Food & Chaat',
                distanceKm: '0 km from Johari Bazaar',
                priceLevel: 'â‚¹ (â‚¹150/person)',
                timings: '10:00 AM - 10:00 PM',
                address: 'Johari Bazar, Jaipur, Rajasthan 302003',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 141 400 1616',
                mustTry: 'Aloo Tikki Chaat & Raj Kachori'
        }
];
    }

    if (['udaipur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'ambrai-restaurant',
                name: 'Ambrai Restaurant',
                category: 'fine-dining',
                rating: 4.6,
                reviewsCount: 7800,
                cuisine: 'North Indian & Mewari',
                distanceKm: '1.2 km from City Palace',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1500/person)',
                timings: '12:30 PM - 10:30 PM',
                address: 'Amet Haveli, Outside Chandpole, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 243 1085',
                mustTry: 'Laal Maas & Murgh Tikka'
        },
        {
                id: 'natraj-dining',
                name: 'Natraj Dining Hall',
                category: 'vegetarian',
                rating: 4.5,
                reviewsCount: 12400,
                cuisine: 'Gujarati & Rajasthani Thali',
                distanceKm: '2.5 km from City Palace',
                priceLevel: 'â‚¹ (â‚¹300/person)',
                timings: '11:00 AM - 10:30 PM',
                address: '22-24, City Station Road, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 241 2235',
                mustTry: 'Unlimited Traditional Veg Thali'
        },
        {
                id: 'grasswood-cafe',
                name: 'Grasswood Cafe',
                category: 'cafe',
                rating: 4.6,
                reviewsCount: 1500,
                cuisine: 'Coffee, Breakfast, Fast Food',
                distanceKm: '0.4 km from Jagdish Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '08:00 AM - 10:00 PM',
                address: 'Gangaur Ghat Road, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 97843 32442',
                mustTry: 'Pancakes & Cold Coffee'
        },
        {
                id: 'savage-garden',
                name: 'Savage Garden',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 890,
                cuisine: 'Continental & Indian Fusion',
                distanceKm: '0.7 km from City Palace',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '10:00 AM - 10:30 PM',
                address: 'Inside Chandpole, Udaipur, Rajasthan 313001',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 294 242 5440',
                mustTry: 'Pasta & Stuffed Chicken'
        }
];
    }

    if (['agra'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'pinch-of-spice',
                name: 'Pinch of Spice',
                category: 'local-cuisine',
                rating: 4.5,
                reviewsCount: 9500,
                cuisine: 'North Indian, Mughlai & Chinese',
                distanceKm: '2.5 km from Taj Mahal',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1000/person)',
                timings: '12:00 PM - 11:30 PM',
                address: 'Fatehabad Rd, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 404 5440',
                mustTry: 'Murg Boti Masala & Garlic Naan'
        },
        {
                id: 'sheroes-hangout',
                name: 'Sheroes Hangout',
                category: 'cafe',
                rating: 4.8,
                reviewsCount: 4200,
                cuisine: 'Cafe, Snacks (Pay as you wish)',
                distanceKm: '1.5 km from Taj Mahal',
                priceLevel: 'â‚¹ (â‚¹200/person)',
                timings: '10:00 AM - 09:00 PM',
                address: 'Fatehabad Rd, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 400 0401',
                mustTry: 'Sandwiches & Filter Coffee'
        },
        {
                id: 'deviram-sweets',
                name: 'Deviram Sweets',
                category: 'sweets',
                rating: 4.4,
                reviewsCount: 5600,
                cuisine: 'Sweets & Breakfast',
                distanceKm: '4.0 km from Taj Mahal',
                priceLevel: 'â‚¹ (â‚¹150/person)',
                timings: '06:00 AM - 10:30 PM',
                address: 'Pratap Pura Crossing, Agra, Uttar Pradesh 282001',
                image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 562 236 4321',
                mustTry: 'Bedai & Jalebi'
        },
        {
                id: 'mama-chicken',
                name: 'Mama Chicken Mama Franky',
                category: 'street-food',
                rating: 4.3,
                reviewsCount: 8800,
                cuisine: 'Street Food, Rolls & Non-Veg',
                distanceKm: '5.0 km from Taj Mahal',
                priceLevel: 'â‚¹ (â‚¹250/person)',
                timings: '12:00 PM - 11:30 PM',
                address: 'Gopi Chand Shivhare Rd, Agra, Uttar Pradesh 282002',
                image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98370 00000',
                mustTry: 'Chicken Franky & Shawarma'
        }
];
    }

    if (['delhi'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'karims-delhi',
                name: 'Karims',
                category: 'local-cuisine',
                rating: 4.3,
                reviewsCount: 22000,
                cuisine: 'Mughlai Non-Veg',
                distanceKm: '0.5 km from Jama Masjid',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '11:00 AM - 11:30 PM',
                address: 'Jama Masjid, Old Delhi, Delhi 110006',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 2326 4981',
                mustTry: 'Mutton Korma & Nahari'
        },
        {
                id: 'paranthe-wali-gali',
                name: 'Paranthe Wali Gali',
                category: 'street-food',
                rating: 4.2,
                reviewsCount: 18000,
                cuisine: 'Deep-fried Stuffed Breads',
                distanceKm: '1.0 km from Red Fort',
                priceLevel: 'â‚¹ (â‚¹200/person)',
                timings: '09:00 AM - 11:00 PM',
                address: 'Chandni Chowk, Old Delhi, Delhi 110006',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98111 11111',
                mustTry: 'Rabri Parantha & Mixed Veg Parantha'
        },
        {
                id: 'saravana-bhavan-delhi',
                name: 'Saravana Bhavan',
                category: 'vegetarian',
                rating: 4.5,
                reviewsCount: 16500,
                cuisine: 'South Indian Vegetarian',
                distanceKm: '0 km from Connaught Place',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '08:00 AM - 10:30 PM',
                address: 'Janpath, Connaught Place, New Delhi, Delhi 110001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 2331 7755',
                mustTry: 'Mini Tiffin & Filter Coffee'
        },
        {
                id: 'indian-accent',
                name: 'Indian Accent',
                category: 'fine-dining',
                rating: 4.8,
                reviewsCount: 5200,
                cuisine: 'Modern Indian Fine Dining',
                distanceKm: '3.0 km from India Gate',
                priceLevel: 'â‚¹â‚¹â‚¹â‚¹ (â‚¹4000/person)',
                timings: '12:00 PM - 10:30 PM',
                address: 'The Lodhi, Lodhi Road, New Delhi, Delhi 110003',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98711 17968',
                mustTry: 'Daulat Ki Chaat & Blue Cheese Naan'
        },
        {
                id: 'dilli-haat-food',
                name: 'Dilli Haat Food Court',
                category: 'street-food',
                rating: 4.4,
                reviewsCount: 12000,
                cuisine: 'Pan-Indian State Foods',
                distanceKm: '5.0 km from Safdarjung Tomb',
                priceLevel: 'â‚¹ (â‚¹300/person)',
                timings: '10:30 AM - 10:00 PM',
                address: 'INA, New Delhi, Delhi 110023',
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 11 2611 9055',
                mustTry: 'Momos from Nagaland stall & Litti Chokha'
        }
];
    }

    if (['kerala', 'munnar', 'alleppey'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'kayees-cafe',
                name: 'Kayees Rahmathulla Cafe',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 5200,
                cuisine: 'Malabari Biryani & Kerala Muslim Cuisine',
                distanceKm: '1.5 km from Mattancherry Palace',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '11:00 AM - 10:00 PM',
                address: 'Mattancherry, Kochi, Kerala 682002',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 484 222 1010',
                mustTry: 'Mutton Biryani'
        },
        {
                id: 'fort-house-restaurant',
                name: 'Fort House Restaurant',
                category: 'fine-dining',
                rating: 4.6,
                reviewsCount: 3800,
                cuisine: 'Kerala Syrian Christian Seafood',
                distanceKm: '0.8 km from Fort Kochi Beach',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1000/person)',
                timings: '12:00 PM - 10:30 PM',
                address: 'Calvathy Rd, Fort Kochi, Kochi, Kerala 682001',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 484 221 7103',
                mustTry: 'Kerala Fish Curry with Appam'
        },
        {
                id: 'kashi-art-cafe',
                name: 'Kashi Art Cafe',
                category: 'cafe',
                rating: 4.5,
                reviewsCount: 6500,
                cuisine: 'Continental, Desserts, Coffee',
                distanceKm: '0.5 km from Chinese Fishing Nets',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '08:30 AM - 10:00 PM',
                address: 'Burgher St, Fort Kochi, Kochi, Kerala 682001',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 484 221 5769',
                mustTry: 'Chocolate Cake & Filter Coffee'
        },
        {
                id: 'paragon-restaurant',
                name: 'Paragon Restaurant',
                category: 'local-cuisine',
                rating: 4.7,
                reviewsCount: 14500,
                cuisine: 'Kerala & Malabari Non-Veg',
                distanceKm: '0.5 km from Calicut Railway Station',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '07:00 AM - 11:30 PM',
                address: 'Kannur Rd, Kozhikode, Kerala 673001',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 495 276 1020',
                mustTry: 'Malabar Chicken Biryani & Fish Moilee'
        }
];
    }

    if (['goa'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'gunpowder',
                name: 'Gunpowder',
                category: 'local-cuisine',
                rating: 4.6,
                reviewsCount: 5600,
                cuisine: 'South Indian Coastal & Goan',
                distanceKm: '3.0 km from Anjuna Beach',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1200/person)',
                timings: '12:00 PM - 03:30 PM, 07:00 PM - 10:30 PM',
                address: 'Assagao, Goa 403507',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 226 8083',
                mustTry: 'Pork Ribs & Appam'
        },
        {
                id: 'thalassa',
                name: 'Thalassa',
                category: 'fine-dining',
                rating: 4.5,
                reviewsCount: 12500,
                cuisine: 'Greek, Mediterranean & Seafood',
                distanceKm: '0.1 km from Vagator Beach',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1500/person)',
                timings: '09:00 AM - 11:30 PM',
                address: 'Vaddy, Siolim, Goa 403517',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 98500 33537',
                mustTry: 'Moussaka & Greek Salad'
        },
        {
                id: 'infantaria',
                name: 'Infantaria Restaurant & Bar',
                category: 'cafe',
                rating: 4.3,
                reviewsCount: 7800,
                cuisine: 'Goan, Continental & Bakery',
                distanceKm: '0.5 km from Calangute Beach',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '07:30 AM - 11:30 PM',
                address: 'Calangute - Baga Rd, Calangute, Goa 403516',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 227 7421',
                mustTry: 'Bebinca & Chicken Patties'
        },
        {
                id: 'martins-corner',
                name: 'Martins Corner',
                category: 'local-cuisine',
                rating: 4.6,
                reviewsCount: 9200,
                cuisine: 'Authentic Goan Seafood & Non-Veg',
                distanceKm: '1.0 km from Betalbatim Beach',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1000/person)',
                timings: '11:30 AM - 03:30 PM, 06:30 PM - 11:30 PM',
                address: 'Betalbatim, Goa 403713',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 832 288 0413',
                mustTry: 'Pork Vindaloo & Kingfish Fry'
        }
];
    }

    if (['mysuru', 'mysore'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'mylari-mysore',
                name: 'Vinayaka Mylari',
                category: 'local-cuisine',
                rating: 4.7,
                reviewsCount: 8900,
                cuisine: 'Authentic South Indian Breakfast',
                distanceKm: '2.5 km from Mysore Palace',
                priceLevel: 'â‚¹ (â‚¹150/person)',
                timings: '06:30 AM - 01:00 PM, 03:00 PM - 09:00 PM',
                address: 'Nazarbad Main Rd, Mysuru, Karnataka 570010',
                image: 'https://images.unsplash.com/photo-1589301773809-7756f7e43685?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 94481 04284',
                mustTry: 'Mylari Masala Dosa'
        },
        {
                id: 'rrr-mysore',
                name: 'Hotel RRR',
                category: 'vegetarian',
                rating: 4.4,
                reviewsCount: 11200,
                cuisine: 'Andhra Style Meals & Biryani',
                distanceKm: '1.0 km from Mysore Palace',
                priceLevel: 'â‚¹â‚¹ (â‚¹300/person)',
                timings: '11:30 AM - 10:30 PM',
                address: 'Gandhi Square, Mysuru, Karnataka 570001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 821 244 3781',
                mustTry: 'Mutton Biryani & Veg Thali on Banana Leaf'
        },
        {
                id: 'oyster-bay',
                name: 'Oyster Bay',
                category: 'fine-dining',
                rating: 4.3,
                reviewsCount: 3500,
                cuisine: 'North Indian, Continental & Seafood',
                distanceKm: '4.0 km from Mysore Palace',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹900/person)',
                timings: '12:00 PM - 11:30 PM',
                address: 'Vijay Nagar, Mysuru, Karnataka 570017',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 821 425 2222',
                mustTry: 'Tandoori Platters & Prawn Masala'
        },
        {
                id: 'depth-n-green',
                name: 'Depth N Green',
                category: 'cafe',
                rating: 4.6,
                reviewsCount: 1800,
                cuisine: 'Cafe, Vegan, Health Food',
                distanceKm: '3.5 km from Mysore Palace',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '10:00 AM - 09:30 PM',
                address: 'Gokulam, Mysuru, Karnataka 570002',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Avocado Toast & Smoothie Bowls'
        }
];
    }

    if (['rishikesh'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'chotiwala',
                name: 'Chotiwala',
                category: 'vegetarian',
                rating: 4,
                reviewsCount: 15400,
                cuisine: 'Pure Veg North Indian Thali',
                distanceKm: '0.1 km from Ram Jhula',
                priceLevel: 'â‚¹ (â‚¹250/person)',
                timings: '08:00 AM - 10:30 PM',
                address: 'Swargashram, Rishikesh, Uttarakhand 249304',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 135 244 0001',
                mustTry: 'Special Veg Thali'
        },
        {
                id: 'little-buddha-cafe',
                name: 'Little Buddha Cafe',
                category: 'cafe',
                rating: 4.5,
                reviewsCount: 6200,
                cuisine: 'Multi-cuisine Cafe, Continental',
                distanceKm: '0.2 km from Laxman Jhula',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '08:00 AM - 11:00 PM',
                address: 'Laxman Jhula Rd, Rishikesh, Uttarakhand 249302',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Pizza & Mixed Fruit Platter'
        },
        {
                id: 'bistro-nirvana',
                name: 'Bistro Nirvana',
                category: 'local-cuisine',
                rating: 4.6,
                reviewsCount: 3100,
                cuisine: 'Continental, Indian & Israeli',
                distanceKm: '1.5 km from Laxman Jhula',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '09:00 AM - 10:30 PM',
                address: 'Tapovan, Rishikesh, Uttarakhand 249192',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Cheese Garlic Naan & Hummus'
        },
        {
                id: 'freedom-cafe',
                name: 'Freedom Cafe',
                category: 'cafe',
                rating: 4.4,
                reviewsCount: 4500,
                cuisine: 'Cafe, Italian, Indian',
                distanceKm: '0.3 km from Laxman Jhula',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '08:30 AM - 10:30 PM',
                address: 'Laxman Jhula Rd, Rishikesh, Uttarakhand 249302',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Pancakes & Masala Chai'
        }
];
    }

    if (['jodhpur'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'stepwell-cafe',
                name: 'Stepwell Cafe',
                category: 'cafe',
                rating: 4.5,
                reviewsCount: 4200,
                cuisine: 'Cafe, European, Indian',
                distanceKm: '0 km from Toorji Ka Jhalra',
                priceLevel: 'â‚¹â‚¹ (â‚¹700/person)',
                timings: '08:00 AM - 10:30 PM',
                address: 'Toorji Ka Jhalra, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 291 263 6455',
                mustTry: 'Pasta & Cold Coffee'
        },
        {
                id: 'gypsy-dining',
                name: 'Gypsy Dining Hall',
                category: 'vegetarian',
                rating: 4.6,
                reviewsCount: 8500,
                cuisine: 'Rajasthani Thali, Fast Food',
                distanceKm: '4.0 km from Clock Tower',
                priceLevel: 'â‚¹â‚¹ (â‚¹450/person)',
                timings: '12:00 PM - 10:30 PM',
                address: 'Sardarpura, Jodhpur, Rajasthan 342003',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 291 243 0400',
                mustTry: 'Rajasthani Premium Thali'
        },
        {
                id: 'mishrilal-hotel',
                name: 'Mishrilal Hotel',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 11000,
                cuisine: 'Sweets & Lassi',
                distanceKm: '0 km from Clock Tower',
                priceLevel: 'â‚¹ (â‚¹150/person)',
                timings: '08:00 AM - 10:00 PM',
                address: 'Clock Tower, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1589301773809-7756f7e43685?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Makhaniya Lassi'
        },
        {
                id: 'shahi-samosa',
                name: 'Shahi Samosa',
                category: 'street-food',
                rating: 4.5,
                reviewsCount: 6500,
                cuisine: 'Street Food, Snacks',
                distanceKm: '0.1 km from Clock Tower',
                priceLevel: 'â‚¹ (â‚¹100/person)',
                timings: '07:30 AM - 09:30 PM',
                address: 'Nai Sarak, Clock Tower, Jodhpur, Rajasthan 342001',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Pyaz Kachori & Mirchi Bada'
        }
];
    }

    if (['kolkata'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'peter-cat',
                name: 'Peter Cat',
                category: 'local-cuisine',
                rating: 4.6,
                reviewsCount: 15400,
                cuisine: 'North Indian & Continental Non-Veg',
                distanceKm: '0 km from Park Street',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹1000/person)',
                timings: '11:00 AM - 11:30 PM',
                address: 'Park Street, Kolkata, West Bengal 700016',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 2229 8841',
                mustTry: 'Chello Kebab'
        },
        {
                id: 'kc-das',
                name: 'KC Das',
                category: 'sweets',
                rating: 4.4,
                reviewsCount: 9200,
                cuisine: 'Bengali Sweets',
                distanceKm: '1.0 km from New Market',
                priceLevel: 'â‚¹ (â‚¹150/person)',
                timings: '08:00 AM - 09:30 PM',
                address: 'Esplanade, Kolkata, West Bengal 700069',
                image: 'https://images.unsplash.com/photo-1589301773809-7756f7e43685?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 2248 5920',
                mustTry: 'Rosogolla & Mishti Doi'
        },
        {
                id: 'arsalan',
                name: 'Arsalan',
                category: 'local-cuisine',
                rating: 4.5,
                reviewsCount: 18000,
                cuisine: 'Mughlai & Biryani',
                distanceKm: '2.5 km from Park Street',
                priceLevel: 'â‚¹â‚¹ (â‚¹700/person)',
                timings: '11:00 AM - 11:30 PM',
                address: 'Park Circus, Kolkata, West Bengal 700017',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 2284 8556',
                mustTry: 'Mutton Biryani'
        },
        {
                id: 'flurys',
                name: 'Flurys',
                category: 'cafe',
                rating: 4.3,
                reviewsCount: 12500,
                cuisine: 'Bakery, Desserts, Continental',
                distanceKm: '0 km from Park Street',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹800/person)',
                timings: '07:30 AM - 10:30 PM',
                address: 'Park Street, Kolkata, West Bengal 700016',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 33 4000 7453',
                mustTry: 'English Breakfast & Rum Ball'
        }
];
    }

    if (['khajuraho'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'raja-cafe',
                name: 'Raja Cafe',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 3200,
                cuisine: 'Indian, Continental, European',
                distanceKm: '0.2 km from Western Group of Temples',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '08:00 AM - 10:30 PM',
                address: 'Main Square, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Wood-fired Pizza & Indian Curries'
        },
        {
                id: 'mediterraneo',
                name: 'Mediterraneo',
                category: 'cafe',
                rating: 4.5,
                reviewsCount: 1800,
                cuisine: 'Italian, Pizza, Mediterranean',
                distanceKm: '0.5 km from Western Group of Temples',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '11:00 AM - 10:30 PM',
                address: 'Jain Temple Rd, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Authentic Italian Pasta'
        },
        {
                id: 'blue-sky',
                name: 'Blue Sky Restaurant',
                category: 'vegetarian',
                rating: 4.3,
                reviewsCount: 1500,
                cuisine: 'Multi-Cuisine Veg, Asian',
                distanceKm: '0.3 km from Western Group of Temples',
                priceLevel: 'â‚¹â‚¹ (â‚¹450/person)',
                timings: '08:00 AM - 10:00 PM',
                address: 'Main Road, Khajuraho, Madhya Pradesh 471606',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Veg Thali & Pancakes'
        }
];
    }

    if (['leh', 'ladakh'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'lamayuru-restaurant',
                name: 'Lamayuru Restaurant',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 3800,
                cuisine: 'Tibetan, Indian, Chinese',
                distanceKm: '0 km from Leh Market',
                priceLevel: 'â‚¹â‚¹ (â‚¹450/person)',
                timings: '08:00 AM - 10:30 PM',
                address: 'Fort Rd, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Thukpa & Momos'
        },
        {
                id: 'chopsticks-noodle-bar',
                name: 'Chopsticks Noodle Bar',
                category: 'cafe',
                rating: 4.6,
                reviewsCount: 2500,
                cuisine: 'Asian, Thai, Tibetan',
                distanceKm: '0.1 km from Leh Market',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '11:00 AM - 10:00 PM',
                address: 'Fort Rd, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Pad Thai & Dimsums'
        },
        {
                id: 'bon-appetit',
                name: 'Bon Appetit',
                category: 'fine-dining',
                rating: 4.5,
                reviewsCount: 1900,
                cuisine: 'European, Italian, Continental',
                distanceKm: '0.5 km from Leh Market',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹900/person)',
                timings: '12:00 PM - 10:30 PM',
                address: 'Changspa Rd, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Wood-fired Pizza & Grilled Chicken'
        },
        {
                id: 'summer-harvest',
                name: 'Summer Harvest',
                category: 'vegetarian',
                rating: 4.3,
                reviewsCount: 1600,
                cuisine: 'Tibetan & Indian Veg',
                distanceKm: '0.2 km from Leh Market',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '10:00 AM - 10:00 PM',
                address: 'Fort Rd, Leh, Ladakh 194101',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Mutton Rogan Josh & Kashmiri Pulao'
        }
];
    }

    if (['amritsar'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'bharawan-da-dhaba',
                name: 'Bharawan Da Dhaba',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 16500,
                cuisine: 'Punjabi Vegetarian',
                distanceKm: '0.5 km from Golden Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹350/person)',
                timings: '07:00 AM - 11:30 PM',
                address: 'Town Hall, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 253 2553',
                mustTry: 'Amritsari Kulcha & Chole'
        },
        {
                id: 'kesar-da-dhaba',
                name: 'Kesar Da Dhaba',
                category: 'street-food',
                rating: 4.5,
                reviewsCount: 22000,
                cuisine: 'Traditional Punjabi Vegetarian',
                distanceKm: '1.0 km from Golden Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹400/person)',
                timings: '11:00 AM - 11:00 PM',
                address: 'Chowk Passian, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1589301773809-7756f7e43685?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 255 2103',
                mustTry: 'Dal Makhani & Palak Paneer'
        },
        {
                id: 'crystal-restaurant',
                name: 'Crystal Restaurant',
                category: 'fine-dining',
                rating: 4.3,
                reviewsCount: 5200,
                cuisine: 'North Indian & Continental Non-Veg',
                distanceKm: '3.0 km from Golden Temple',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹800/person)',
                timings: '12:00 PM - 11:30 PM',
                address: 'Crystal Chowk, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 222 5555',
                mustTry: 'Butter Chicken & Fish Tikka'
        },
        {
                id: 'brothers-dhaba',
                name: 'Brothers Dhaba',
                category: 'vegetarian',
                rating: 4.2,
                reviewsCount: 14800,
                cuisine: 'Punjabi Veg, Thali',
                distanceKm: '0.5 km from Golden Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹350/person)',
                timings: '08:00 AM - 11:00 PM',
                address: 'Town Hall, Amritsar, Punjab 143001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 183 253 1111',
                mustTry: 'Special Veg Thali'
        }
];
    }

    if (['darjeeling'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'keventers-darjeeling',
                name: 'Keventers',
                category: 'cafe',
                rating: 4.4,
                reviewsCount: 12500,
                cuisine: 'Cafe, English Breakfast',
                distanceKm: '0.1 km from Mall Road',
                priceLevel: 'â‚¹â‚¹ (â‚¹600/person)',
                timings: '08:00 AM - 06:30 PM',
                address: 'Chowrasta, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 6542',
                mustTry: 'Meat Platter & Hot Chocolate'
        },
        {
                id: 'glenarys',
                name: 'Glenarys',
                category: 'fine-dining',
                rating: 4.6,
                reviewsCount: 15800,
                cuisine: 'Bakery, Continental, Chinese',
                distanceKm: '0.2 km from Mall Road',
                priceLevel: 'â‚¹â‚¹â‚¹ (â‚¹900/person)',
                timings: '07:00 AM - 09:30 PM',
                address: 'Nehru Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 8408',
                mustTry: 'Apple Pie, Sizzlers & Darjeeling Tea'
        },
        {
                id: 'sonams-kitchen',
                name: 'Sonams Kitchen',
                category: 'local-cuisine',
                rating: 4.7,
                reviewsCount: 3200,
                cuisine: 'Tibetan, Nepali, Breakfast',
                distanceKm: '1.0 km from Mall Road',
                priceLevel: 'â‚¹ (â‚¹300/person)',
                timings: '08:00 AM - 08:00 PM',
                address: 'Zakir Hussain Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Pancakes & Hash Browns'
        },
        {
                id: 'kunga-restaurant',
                name: 'Kunga Restaurant',
                category: 'vegetarian',
                rating: 4.5,
                reviewsCount: 4800,
                cuisine: 'Tibetan & Chinese',
                distanceKm: '0.3 km from Chowrasta',
                priceLevel: 'â‚¹â‚¹ (â‚¹450/person)',
                timings: '10:00 AM - 08:00 PM',
                address: 'Gandhi Road, Darjeeling, West Bengal 734101',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 354 225 6543',
                mustTry: 'Veg Steamed Momos & Thukpa'
        }
];
    }

    if (['madurai'].some(n => destLower.includes(n))) {
      return [
        {
                id: 'murugan-idli',
                name: 'Murugan Idli Shop',
                category: 'vegetarian',
                rating: 4.5,
                reviewsCount: 18500,
                cuisine: 'South Indian Vegetarian',
                distanceKm: '0.5 km from Meenakshi Temple',
                priceLevel: 'â‚¹ (â‚¹200/person)',
                timings: '07:00 AM - 11:00 PM',
                address: 'West Masi Street, Madurai, Tamil Nadu 625001',
                image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 234 1376',
                mustTry: 'Soft Idlis, Jigarthanda & Podi Dosa'
        },
        {
                id: 'amma-mess',
                name: 'Amma Mess',
                category: 'local-cuisine',
                rating: 4.3,
                reviewsCount: 12400,
                cuisine: 'Madurai Non-Veg Meals',
                distanceKm: '3.0 km from Meenakshi Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹450/person)',
                timings: '11:30 AM - 04:00 PM, 07:00 PM - 11:00 PM',
                address: 'Tallakulam, Madurai, Tamil Nadu 625002',
                image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 438 3151',
                mustTry: 'Bone Marrow Omelette & Mutton Chukka'
        },
        {
                id: 'kumar-mess',
                name: 'Kumar Mess',
                category: 'local-cuisine',
                rating: 4.4,
                reviewsCount: 9500,
                cuisine: 'Authentic South Indian Non-Veg',
                distanceKm: '4.0 km from Meenakshi Temple',
                priceLevel: 'â‚¹â‚¹ (â‚¹500/person)',
                timings: '11:30 AM - 04:30 PM, 07:00 PM - 11:00 PM',
                address: 'Anna Nagar, Madurai, Tamil Nadu 625020',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 452 439 1234',
                mustTry: 'Mutton Biryani & Crab Masala'
        },
        {
                id: 'jigarthanda-famous',
                name: 'Famous Jigarthanda',
                category: 'street-food',
                rating: 4.6,
                reviewsCount: 22000,
                cuisine: 'Desserts & Beverages',
                distanceKm: '1.0 km from Meenakshi Temple',
                priceLevel: 'â‚¹ (â‚¹100/person)',
                timings: '10:00 AM - 11:00 PM',
                address: 'East Marret Street, Madurai, Tamil Nadu 625001',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
                phone: '+91 99999 99999',
                mustTry: 'Special Jigarthanda'
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
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        address: `${matchedState.capital}, ${matchedState.name}`,
        mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' ' + matchedState.capital)}`,
        phone: `+91 ${matchedState.emergencyNumbers?.touristHelpline || '1800 111 363'}`,
        mustTry: r.mustTry
      };
    });
  }
}
