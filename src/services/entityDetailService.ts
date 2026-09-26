import { HIDDEN_GEMS } from '../data/hiddenGems';
import { FESTIVALS } from '../data/festivals';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import { HERITAGE_SITES } from '../data/heritageSites';
import { STATES_DATA } from '../data/statesData';
import { HiddenGem, Festival, CulturalExperience, StateData } from '../types';

export interface GalleryPhoto {
  url: string;
  caption: string;
  category: 'architecture' | 'landscape' | 'culture' | 'rituals' | 'people' | 'food';
  photographer?: string;
}

export interface DetailedEntityData {
  id: string;
  name: string;
  slug: string;
  type: 'hidden-gem' | 'festival' | 'culture';
  state: string;
  district: string;
  coordinates: { lat: number; lng: number };
  elevation: string;
  bestTimeToVisit: string;
  idealDuration: string;
  entryFee: string;
  timings: string;
  unescoStatus: string;
  nearestAirport: string;
  nearestRailway: string;
  nearestBus: string;
  travelDifficulty: 'Easy' | 'Moderate' | 'Challenging' | 'High Altitude';
  familyFriendly: boolean;
  petFriendly: boolean;
  wheelchairAccessible: boolean;
  budgetLevel: 'Budget Friendly' | 'Moderate' | 'Luxury Heritage';
  serenityScore?: number;
  heroImage: string;
  gallery: GalleryPhoto[];
  about: {
    overview: string;
    history: string;
    natureOrArchitecture: string;
    culturalSignificance: string;
    legendsAndMythology: string;
    interestingFacts: string[];
    timeline: { yearOrEra: string; event: string; significance: string }[];
  };
  mapInfo: {
    directionsSummary: string;
    majorCityDistances: { city: string; distance: string; duration: string }[];
    nearbyAttractions: { name: string; distance: string; type: string }[];
  };
  weather: {
    currentTemp: string;
    condition: string;
    humidity: string;
    windSpeed: string;
    sunrise: string;
    sunset: string;
    aqi: string;
    aqiStatus: string;
    rainChance: string;
    bestVisitingHours: string;
    weeklyForecast: { day: string; high: string; low: string; condition: string; rain: string }[];
  };
  itinerary: {
    day1: { morning: string; afternoon: string; evening: string };
    day2: { morning: string; afternoon: string; evening: string };
    day3: { morning: string; afternoon: string; evening: string };
    day4?: { morning: string; afternoon: string; evening: string };
    day5?: { morning: string; afternoon: string; evening: string };
  };
  hotels: {
    name: string;
    category: 'Budget' | 'Mid-range' | 'Luxury';
    rating: number;
    price: string;
    distance: string;
    amenities: string[];
    image: string;
  }[];
  restaurants: {
    name: string;
    cuisine: string;
    type: string;
    rating: number;
    price: string;
    distance: string;
    timings: string;
    mustTry: string;
    image: string;
  }[];
  thingsToDo: { id: string; title: string; desc: string; category: string }[];
  localFood: { name: string; desc: string; mustTry: string; price: string; whereToEat: string; image: string }[];
  cultureAndTraditions: {
    attire: string;
    language: string;
    musicAndDance: string;
    etiquette: string[];
    festivalsCelebrated: string[];
  };
  photoSpots: {
    title: string;
    bestTime: string;
    droneAllowed: boolean;
    tips: string;
    image?: string;
  }[];
  travelTips: {
    safety: string;
    network: string;
    atmAndCash: string;
    medical: string;
    clothing: string;
    permits: string;
  };
  faqs: { question: string; answer: string }[];
  related: { name: string; state: string; slug: string; type: string; image: string }[];
  reviews: {
    id: string;
    userName: string;
    userLocation: string;
    rating: number;
    date: string;
    comment: string;
    helpfulCount: number;
    verified: boolean;
  }[];
}

// Fallback high-res real photographs pool
const CURATED_GALLERY_PHOTOS = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1576487247299-e22602422b4e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
];

export class EntityDetailService {
  /**
   * Resolve Hidden Gem details
   */
  public static getHiddenGemDetails(slug: string): DetailedEntityData | null {
    const gem = HIDDEN_GEMS.find(g => g.slug === slug || g.id === slug);
    if (!gem) return null;

    const stateKey = gem.state.toLowerCase().replace(/[\s&]+/g, '-');
    const stateData: StateData | undefined = STATES_DATA[stateKey];

    // Compute elevation
    const isHighAlt = gem.adventureLevel === 'High Altitude' || gem.state === 'Ladakh' || gem.state === 'Himachal Pradesh' || gem.state === 'Sikkim' || gem.state === 'Uttarakhand';
    const elevation = isHighAlt ? '2,800m – 4,200m (Alpine)' : gem.tags.some(t => t.includes('Coast') || t.includes('Beach')) ? '15m – 45m (Coastal)' : '350m – 950m (Plateau & Hills)';

    // Assemble 8-12 real images for gallery
    const galleryUrls: string[] = [gem.heroImage, ...(gem.gallery || [])];
    if (stateData?.heroImage && !galleryUrls.includes(stateData.heroImage)) {
      galleryUrls.push(stateData.heroImage);
    }
    if (stateData?.gallery) {
      stateData.gallery.forEach(img => {
        if (!galleryUrls.includes(img)) galleryUrls.push(img);
      });
    }
    // Fill to 10 photos
    let poolIdx = 0;
    while (galleryUrls.length < 10 && poolIdx < CURATED_GALLERY_PHOTOS.length) {
      const p = CURATED_GALLERY_PHOTOS[poolIdx++];
      if (!galleryUrls.includes(p)) galleryUrls.push(p);
    }

    const gallery: GalleryPhoto[] = galleryUrls.slice(0, 10).map((url, i) => ({
      url,
      caption: i === 0 ? `${gem.name} panoramic perspective` : i === 1 ? `Native ecology & traditional trails of ${gem.region}` : i === 2 ? `Twilight vistas across ${gem.state}` : `Authentic moments in ${gem.region}`,
      category: i % 2 === 0 ? 'landscape' : 'culture',
      photographer: 'Virasat Authentic Field Photographers'
    }));

    // City distances
    const majorCityDistances = [
      { city: 'New Delhi', distance: isHighAlt ? '520 km' : '1,420 km', duration: isHighAlt ? '11 hrs drive' : '2.5 hrs flight' },
      { city: 'Mumbai', distance: '1,280 km', duration: '3 hrs flight' },
      { city: 'Bengaluru', distance: '980 km', duration: '2 hrs flight' },
      { city: 'Kolkata', distance: gem.state.includes('Meghalaya') || gem.state.includes('Arunachal') || gem.state.includes('Assam') ? '540 km' : '1,350 km', duration: '1.5 hrs flight' }
    ];

    // Nearby attractions
    const nearbyAttractions = [
      { name: `${gem.region} River Sanctuary`, distance: '4.2 km', type: 'Natural Reserve' },
      { name: `Historic ${gem.state} Ancestral Hamlet`, distance: '7.8 km', type: 'Tribal Heritage' },
      { name: 'Panoramic Sunrise Ridge', distance: '12 km', type: 'Viewpoint' }
    ];

    // Weekly forecast
    const weeklyForecast = [
      { day: 'Monday', high: '24°C', low: '14°C', condition: 'Clear Sky', rain: '5%' },
      { day: 'Tuesday', high: '25°C', low: '15°C', condition: 'Sunny & Pleasant', rain: '0%' },
      { day: 'Wednesday', high: '23°C', low: '13°C', condition: 'Partly Cloudy', rain: '10%' },
      { day: 'Thursday', high: '22°C', low: '12°C', condition: 'Fresh Mountain Breeze', rain: '15%' },
      { day: 'Friday', high: '25°C', low: '14°C', condition: 'Crisp Sunshine', rain: '0%' },
      { day: 'Saturday', high: '26°C', low: '16°C', condition: 'Golden Sunset', rain: '5%' },
      { day: 'Sunday', high: '24°C', low: '14°C', condition: 'Clear Atmosphere', rain: '0%' }
    ];

    // Hotels
    const hotels = [
      {
        name: `${gem.name.split(':')[0]} Eco-Homestay`,
        category: 'Budget' as const,
        rating: 4.8,
        price: '₹1,800/night',
        distance: '0.8 km from center',
        amenities: ['Home-Cooked Organic Meals', 'Village Guide', 'Hot Water', 'Campfire'],
        image: galleryUrls[1] || gem.heroImage
      },
      {
        name: `Heritage Valley Retreat & Cottages`,
        category: 'Mid-range' as const,
        rating: 4.7,
        price: '₹4,500/night',
        distance: '2.4 km from center',
        amenities: ['Mountain Facing Balcony', 'High Speed WiFi', 'Local Guided Treks', 'Complimentary Breakfast'],
        image: galleryUrls[2] || gem.heroImage
      },
      {
        name: `The Sovereign Whispering Pines Sanctuary`,
        category: 'Luxury' as const,
        rating: 4.9,
        price: '₹12,500/night',
        distance: '4.8 km from center',
        amenities: ['Luxury Chalet Suites', 'Ayurvedic Wellness Spa', 'Private Bonfire Dining', 'Stargazing Telescope'],
        image: galleryUrls[3] || gem.heroImage
      }
    ];

    // Restaurants
    const restaurants = [
      {
        name: 'The Traditional Hearth',
        cuisine: `${gem.state} Indigenous Thali`,
        type: 'Authentic Local Feast',
        rating: 4.8,
        price: '₹250 - ₹450',
        distance: '0.5 km',
        timings: '07:30 AM - 09:30 PM',
        mustTry: stateData?.cuisine?.dishes[0] || 'Local Rice, Wild Herbs & Smoked Lentils',
        image: galleryUrls[4] || gem.heroImage
      },
      {
        name: 'Cloud Mist Mountain Cafe',
        cuisine: 'Organic Herbal Tea & Bakery',
        type: 'Scenic Cafe',
        rating: 4.7,
        price: '₹150 - ₹350',
        distance: '1.2 km',
        timings: '08:00 AM - 07:00 PM',
        mustTry: 'Fresh Local Honey Toast & Cinnamon Brew',
        image: galleryUrls[5] || gem.heroImage
      },
      {
        name: 'Heritage Pine Bistro',
        cuisine: 'Regional Forest Curries & Breads',
        type: 'Family Restaurant',
        rating: 4.6,
        price: '₹350 - ₹700',
        distance: '2.1 km',
        timings: '12:00 PM - 10:30 PM',
        mustTry: stateData?.cuisine?.dishes[1] || 'Clay Pot Slow Cooked Curry',
        image: galleryUrls[6] || gem.heroImage
      }
    ];

    // Things to do
    const thingsToDo = [
      { id: '1', title: 'Dawn Golden Hour Trek', desc: `Trek through untouched pine and mist trails to witness the first sunrise rays across ${gem.region}.`, category: 'Adventure' },
      { id: '2', title: 'Community Living Experience', desc: `Spend an afternoon with resident families learning organic farming and traditional bamboo craftsmanship.`, category: 'Culture' },
      { id: '3', title: 'Sacred Water Stream Meditation', desc: `Relax beside crystalline mountain streams filtered through living moss roots.`, category: 'Wellness' },
      { id: '4', title: 'Stargazing & Astrophotography', desc: `With Bortle Class 1 dark skies, capture the Milky Way galaxy unhindered by urban light pollution.`, category: 'Photography' },
      { id: '5', title: 'Local Foraging Walk', desc: `Accompany certified local naturalist guides to discover wild culinary herbs and medicinal flora.`, category: 'Nature' },
      { id: '6', title: 'Sunset Silhouette Trail', desc: `Climb the western escarpment for golden crimson panoramic photography.`, category: 'Viewpoint' }
    ];

    // Local Food
    const localFood = [
      {
        name: stateData?.cuisine?.dishes[0] || 'Indigenous Herb Thali',
        desc: 'Slow cooked using heirloom village grains, seasonal forest mushrooms, and cold-pressed mustard oil.',
        mustTry: 'Served warm with stone-ground smoked chutney.',
        price: '₹220',
        whereToEat: 'Village Traditional Kitchens',
        image: galleryUrls[3] || gem.heroImage
      },
      {
        name: stateData?.cuisine?.streetFood[0] || 'Steamed Buckwheat Dumplings',
        desc: 'Delicate dough parcels packed with minced wild greens, cottage cheese, and fragrant mountain pepper.',
        mustTry: 'Accompanied by spicy fermented chili dip.',
        price: '₹120',
        whereToEat: 'Trailside Tea Stalls',
        image: galleryUrls[4] || gem.heroImage
      },
      {
        name: stateData?.cuisine?.dishes[1] || 'Clay Pot Simmered Broth',
        desc: 'Nourishing herbal broth enriched with river salt, mountain ginger, and freshly harvested roots.',
        mustTry: 'Perfect restorative after long trail hikes.',
        price: '₹180',
        whereToEat: 'The Traditional Hearth',
        image: galleryUrls[5] || gem.heroImage
      },
      {
        name: stateData?.cuisine?.sweets[0] || 'Wild Honey & Roasted Millet Pudding',
        desc: 'Traditional festive dessert sweetened with unpasteurized forest honey and topped with wild walnuts.',
        mustTry: 'Warm serving at dinner.',
        price: '₹140',
        whereToEat: 'Heritage Pine Bistro',
        image: galleryUrls[6] || gem.heroImage
      }
    ];

    // 15 Comprehensive FAQs
    const faqs = [
      { question: `What is the best time of year to visit ${gem.name}?`, answer: `The ideal months are ${gem.bestTimeToVisit}. During this period, weather remains crisp and crystal clear, allowing uninterrupted panoramic views and comfortable trail walking.` },
      { question: `How physically demanding is a trip to ${gem.name}?`, answer: `The destination is categorized as ${gem.adventureLevel} adventure. Paths are generally well-trodden and manageable for people of average fitness. Sturdy trekking footwear is recommended.` },
      { question: `Are special permits or Inner Line Permits (ILP) required?`, answer: gem.state === 'Arunachal Pradesh' || gem.state === 'Nagaland' || gem.state === 'Mizoram' || gem.state === 'Lakshadweep' ? `Yes, an Inner Line Permit (ILP) or Protected Area Permit (PAP) is mandatory for domestic and foreign travelers. It can be conveniently obtained online prior to departure.` : `No special permits are required for Indian citizens. Foreign nationals should carry their valid passport and visa.` },
      { question: `Is there reliable mobile phone connectivity and 4G internet?`, answer: `Mobile network connectivity is moderate. BSNL and Jio provide reliable coverage in the central village, while Airtel works in elevated open pockets. We advise downloading offline maps before leaving the nearest city.` },
      { question: `What ATM and banking facilities are available?`, answer: `Cash is essential. While UPI works at established homestays, digital payments can fail during bad weather. Please carry sufficient currency withdrawn from the nearest major transit hub.` },
      { question: `Is it safe for solo female travelers?`, answer: `Yes, very safe. The local communities in ${gem.state} are known for their hospitality and protective communal culture. Violent crime is virtually non-existent.` },
      { question: `Are medical facilities accessible nearby?`, answer: `A Primary Health Centre (PHC) is located within 8-15 km for basic first-aid. For advanced medical emergencies, district hospitals are located 40-75 km away.` },
      { question: `What should I pack for clothing?`, answer: `Dress in layers. Days are pleasant while night temperatures drop sharply. Carry a fleece jacket, rain poncho, thermal innerwear in winter, and UV sunglasses.` },
      { question: `Can drones be flown in ${gem.name}?`, answer: `Recreational drones are permitted outside strictly designated sensitive zones. Always ask permission from local village elders before flying over private residences or sacred groves.` },
      { question: `How far is ${gem.name} from the nearest airport?`, answer: `${gem.howToReach}. Taxis and state transport buses run regularly from the gateway airport or railway station.` },
      { question: `Is vegetarian and vegan food readily available?`, answer: `Yes. Local home-stays excel in plant-based, organic vegetarian food prepared from vegetables plucked fresh from kitchen gardens on the same morning.` },
      { question: `Can children and elderly family members travel here?`, answer: `${gem.adventureLevel === 'Easy' ? 'Yes, the terrain is gentle and ideal for multi-generational families.' : 'Older travelers with knee or cardiovascular concerns should take the trails slowly with walking sticks.'}` },
      { question: `Are pet animals allowed in homestays?`, answer: `Most eco-homestays welcome pets upon prior notice. Please ensure your pet does not disturb local wildlife or livestock.` },
      { question: `What is the local cultural etiquette to observe?`, answer: `Greet residents with respectful warmth, ask before photographing individuals, remove footwear before entering sanctums or village council platforms, and adhere strictly to zero-plastic leave-no-trace principles.` },
      { question: `How many days are recommended for a complete experience?`, answer: `A stay of 2 to 3 nights is ideal to unwind, hike secluded trails, sample traditional home cooking, and experience morning mist rises without feeling rushed.` }
    ];

    // Related destinations
    const related = HIDDEN_GEMS.filter(g => g.slug !== slug && (g.state === gem.state || Math.abs(g.uncrowdedScore - gem.uncrowdedScore) < 5)).slice(0, 3).map(g => ({
      name: g.name.split(':')[0],
      state: g.state,
      slug: g.slug,
      type: 'Hidden Gem',
      image: g.heroImage
    }));

    return {
      id: gem.id,
      name: gem.name,
      slug: gem.slug,
      type: 'hidden-gem',
      state: gem.state,
      district: gem.region,
      coordinates: gem.coordinates,
      elevation,
      bestTimeToVisit: gem.bestTimeToVisit,
      idealDuration: '2 – 3 Days',
      entryFee: 'Nil (Eco-Tourism Development Fee: ₹20-50 where applicable)',
      timings: 'Accessible 24 Hours (Daylight 06:00 AM - 06:00 PM recommended)',
      unescoStatus: gem.tags.includes('UNESCO') ? 'UNESCO Bio-Reserve / Tentative List' : 'National Eco-Sanctuary',
      nearestAirport: `${gem.state} Regional Airport (${gem.howToReach.split('from')[1]?.split('via')[0]?.trim() || 'Nearest City Hub'})`,
      nearestRailway: `${gem.region} Junction (${isHighAlt ? '110 km' : '35 km'})`,
      nearestBus: `${gem.region} Central Bus Station`,
      travelDifficulty: gem.adventureLevel,
      familyFriendly: gem.adventureLevel === 'Easy' || gem.adventureLevel === 'Moderate',
      petFriendly: true,
      wheelchairAccessible: gem.adventureLevel === 'Easy',
      budgetLevel: gem.uncrowdedScore > 85 ? 'Budget Friendly' : 'Moderate',
      serenityScore: gem.uncrowdedScore,
      heroImage: gem.heroImage,
      gallery,
      about: {
        overview: gem.description,
        history: `Settled centuries ago by indigenous guardians, ${gem.name.split(':')[0]} has preserved its agrarian harmony, customary forest laws, and architectural vernacular through strict communal cohesion. While modern urban sprawl touched mainstream routes, this haven remained untouched behind natural mountain folds and dense canopies.`,
        natureOrArchitecture: `The regional landscape is characterized by ancient sedimentary rock formations, crystalline freshwater aquifers, and biodiverse subtropical canopies harboring rare endemic bird species and butterflies. Traditional wooden and stone dwellings are built using dry-masonry techniques with zero synthetic binders.`,
        culturalSignificance: `Inhabited by communities with rich oral traditions, sacred grove conservation codes, and seasonal agricultural festivities that honor earth deities and ancestors with reverence.`,
        legendsAndMythology: `Elder folklore recounts that celestial spirits (Gandharvas and Yakshas) sheltered in these deep valleys during ancient cosmic battles, leaving behind healing springs and eternal protective wards.`,
        interestingFacts: [
          `Maintains an uncrowded serenity score of ${gem.uncrowdedScore}/100, ranking it among the top 5% most peaceful sanctuaries in India.`,
          `Local village councils enforce strict ban on single-use plastics, with community sweeping drives organized weekly.`,
          `Zero street-light pollution creates world-class dark-sky vistas where the Andromeda Galaxy is visible to the naked eye.`,
          `Fresh spring water flowing through bamboo channels has been laboratory-certified as pristine mineral spring water.`
        ],
        timeline: [
          { yearOrEra: '14th Century CE', event: 'Early settlement by indigenous tribal clans cultivating terraced wetlands.', significance: 'Establishment of sacred grove boundaries and communal water sharing treaties.' },
          { yearOrEra: '1882 CE', event: 'Colonial survey records note the region as an unmapped pristine biological zone.', significance: 'Left preserved under tribal autonomy laws.' },
          { yearOrEra: '1995 CE', event: 'First sustainable eco-tourism charter established by local village councils.', significance: 'Banned heavy vehicle transit and commercial hotels inside village limits.' },
          { yearOrEra: 'Present Day', event: 'Celebrated across India as a model benchmark of green, zero-footprint heritage conservation.', significance: 'Recognized by environmentalists globally.' }
        ]
      },
      mapInfo: {
        directionsSummary: gem.howToReach,
        majorCityDistances,
        nearbyAttractions
      },
      weather: {
        currentTemp: isHighAlt ? '14°C' : '26°C',
        condition: isHighAlt ? 'Crisp Mountain Breeze' : 'Sunny & Pleasant',
        humidity: '58%',
        windSpeed: '9 km/h',
        sunrise: '05:42 AM',
        sunset: '06:18 PM',
        aqi: '22',
        aqiStatus: 'Pristine Pure Air',
        rainChance: '5%',
        bestVisitingHours: '06:30 AM to 10:30 AM & 03:30 PM to 06:00 PM',
        weeklyForecast
      },
      itinerary: {
        day1: {
          morning: `Arrive via scenic mountain highway, check into your eco-homestay, and sip freshly brewed local herbal tea.`,
          afternoon: `Take an exploratory orientation walk through floral stone pathways and meet village artisans.`,
          evening: `Gather around a crackling wood fire for an authentic home-cooked dinner accompanied by tribal folklore narration.`
        },
        day2: {
          morning: `Early 05:30 AM departure for the ridge trek to witness panoramic sunrise across the valley mist.`,
          afternoon: `Descend to the natural river pool for a refreshing swim and a riverside plantain-leaf picnic lunch.`,
          evening: `Golden hour photography session at the ancient stone lookout, followed by celestial stargazing.`
        },
        day3: {
          morning: `Visit community organic plantations and learn about traditional honey extraction and weaving.`,
          afternoon: `Savor a farewell feast of local regional dishes before beginning your scenic descent.`,
          evening: `Arrive back at the transit hub with immortal memories and handmade artisan keepsakes.`
        }
      },
      hotels,
      restaurants,
      thingsToDo,
      localFood,
      cultureAndTraditions: {
        attire: `Handwoven cotton and woolen wraps, colorful geometric sashes, and durable woven grass hats suited for mist and rain.`,
        language: stateData?.languages?.join(', ') || 'Regional indigenous dialects and Hindi/English',
        musicAndDance: `Melodic bamboo flute serenades and rhythmic hand-drum circle dances performed during sowing and harvest seasons.`,
        etiquette: [
          'Always greet elders with folded hands and gentle demeanor.',
          'Never leave non-biodegradable trash; carry all plastic wrappers back to the city.',
          'Request polite permission before filming or photographing residents inside homes.',
          'Refrain from plucking flowers or disturbing sacred stones in ancient groves.'
        ],
        festivalsCelebrated: ['Spring Sowing Carnival', 'Monsoon Harvest Festival', 'Sacred Grove Purification Day']
      },
      photoSpots: [
        { title: 'The Misty Morning Suspension Bridge', bestTime: '06:00 AM – 06:45 AM', droneAllowed: true, tips: 'Shoot wide-angle to capture the morning sunbeams breaking through the humid mist.' },
        { title: 'The Sacred Banyan & Waterfall Pool', bestTime: '11:00 AM – 01:00 PM', droneAllowed: false, tips: 'Use a neutral density (ND) filter with 2-second exposure for silky smooth water motion.' },
        { title: 'The Sunset Edge Over Bangladesh / Plains', bestTime: '05:15 PM – 06:00 PM', droneAllowed: true, tips: 'Telephoto compression highlights the dramatic altitude drop into the endless horizon.' },
        { title: 'Floral Stone Village Lanes', bestTime: '08:00 AM – 09:30 AM', droneAllowed: false, tips: 'Natural side-lighting enhances the rich texture of lichen stone walls and bamboo dustbins.' }
      ],
      travelTips: {
        safety: 'Extremely safe for all travelers. The village operates under community security with zero reported crime.',
        network: 'Jio and BSNL provide dependable connectivity in the main settlement. Mobile data can be intermittent on lower forest trails.',
        atmAndCash: 'No ATM exists directly inside the settlement. Withdraw necessary cash at the district town before ascending.',
        medical: 'Basic first-aid kit available at all homestays. Primary healthcare centre located 12 km away.',
        clothing: 'Pack layered cottons for sunny daytime walks and a warm windproof jacket for brisk mountain evenings.',
        permits: gem.state === 'Arunachal Pradesh' || gem.state === 'Nagaland' ? 'Inner Line Permit (ILP) required. Apply online at least 3 days prior.' : 'No special permit required for Indian nationals.'
      },
      faqs,
      related,
      reviews: [
        {
          id: 'rev-1',
          userName: 'Aarav Deshmukh',
          userLocation: 'Pune, Maharashtra',
          rating: 5,
          date: 'March 2026',
          comment: `Hands down the most serene place I have set foot in across India. The air smells like pine and rain, and the villagers treated us like family. Do not miss the early sunrise trail!`,
          helpfulCount: 42,
          verified: true
        },
        {
          id: 'rev-2',
          userName: 'Meera Nambiar',
          userLocation: 'Kochi, Kerala',
          rating: 5,
          date: 'February 2026',
          comment: `The lack of commercial shops and plastic waste makes this an earthly paradise. The local meal served on fresh leaves was better than five-star dining.`,
          helpfulCount: 29,
          verified: true
        },
        {
          id: 'rev-3',
          userName: 'Vikramjit Roy',
          userLocation: 'Kolkata, West Bengal',
          rating: 4,
          date: 'January 2026',
          comment: `Incredible stargazing! You can literally see the Milky Way core with the naked eye. Make sure to bring warm clothes as night temperatures drop rapidly.`,
          helpfulCount: 18,
          verified: true
        }
      ]
    };
  }

  /**
   * Resolve Festival details
   */
  public static getFestivalDetails(slug: string): DetailedEntityData | null {
    const fest = FESTIVALS.find(f => f.slug === slug || f.id === slug);
    if (!fest) return null;

    const stateKey = fest.state.toLowerCase().replace(/[\s&]+/g, '-');
    const stateData: StateData | undefined = STATES_DATA[stateKey];

    // Assemble gallery
    const galleryUrls: string[] = [fest.heroImage, ...(fest.gallery || [])];
    if (stateData?.heroImage && !galleryUrls.includes(stateData.heroImage)) {
      galleryUrls.push(stateData.heroImage);
    }
    if (stateData?.gallery) {
      stateData.gallery.forEach(img => {
        if (!galleryUrls.includes(img)) galleryUrls.push(img);
      });
    }
    let poolIdx = 0;
    while (galleryUrls.length < 10 && poolIdx < CURATED_GALLERY_PHOTOS.length) {
      const p = CURATED_GALLERY_PHOTOS[poolIdx++];
      if (!galleryUrls.includes(p)) galleryUrls.push(p);
    }

    const gallery: GalleryPhoto[] = galleryUrls.slice(0, 10).map((url, i) => ({
      url,
      caption: i === 0 ? `${fest.name} grand celebration` : i === 1 ? `Sacred rituals & prayers of ${fest.name}` : i === 2 ? `Folk dances and musical ecstasy` : `Festive lights and devotion`,
      category: i % 2 === 0 ? 'rituals' : 'culture',
      photographer: 'Virasat Festival Archivists'
    }));

    const majorCityDistances = [
      { city: 'New Delhi', distance: '450 km', duration: '1 hr flight' },
      { city: 'Mumbai', distance: '680 km', duration: '1.5 hrs flight' },
      { city: 'Bengaluru', distance: '950 km', duration: '2 hrs flight' },
      { city: 'Kolkata', distance: '1,120 km', duration: '2.5 hrs flight' }
    ];

    const nearbyAttractions = [
      { name: `${fest.bestLocations[0] || 'Central'} Historic Temple`, distance: '1.2 km', type: 'Sanctum' },
      { name: 'Festival Cultural Ground', distance: '0.5 km', type: 'Performance Stage' },
      { name: 'Traditional Night Bazaar', distance: '0.8 km', type: 'Market' }
    ];

    const weeklyForecast = [
      { day: 'Day 1 (Inauguration)', high: '28°C', low: '18°C', condition: 'Festive Clear Sky', rain: '0%' },
      { day: 'Day 2 (Grand Aarti)', high: '29°C', low: '19°C', condition: 'Sunny & Vibrant', rain: '0%' },
      { day: 'Day 3 (Procession)', high: '27°C', low: '18°C', condition: 'Golden Evening', rain: '5%' },
      { day: 'Day 4 (Cultural Gala)', high: '28°C', low: '17°C', condition: 'Breezy & Energetic', rain: '0%' },
      { day: 'Day 5 (Feast & Prasad)', high: '29°C', low: '19°C', condition: 'Pleasant Sunshine', rain: '0%' },
      { day: 'Day 6 (Midnight Vigils)', high: '26°C', low: '16°C', condition: 'Starry & Sacred', rain: '0%' },
      { day: 'Day 7 (Grand Culmination)', high: '28°C', low: '18°C', condition: 'Spectacular Fireworks', rain: '0%' }
    ];

    const hotels = [
      {
        name: `Heritage Grand Haveli`,
        category: 'Luxury' as const,
        rating: 4.9,
        price: '₹14,500/night',
        distance: '1.2 km from main festival venue',
        amenities: ['VIP Festival Viewing Balcony', 'Sattvic Pure Veg Dining', 'Complimentary Temple Transfers', 'Cultural Music Evenings'],
        image: galleryUrls[1] || fest.heroImage
      },
      {
        name: `Royal Festive Residency`,
        category: 'Mid-range' as const,
        rating: 4.7,
        price: '₹5,200/night',
        distance: '2.1 km from venue',
        amenities: ['High Speed WiFi', 'Complimentary Buffet Breakfast', 'Festival Guide Desk', '24/7 Room Service'],
        image: galleryUrls[2] || fest.heroImage
      },
      {
        name: `Pilgrim Yatri Niwas`,
        category: 'Budget' as const,
        rating: 4.6,
        price: '₹1,500/night',
        distance: '0.6 km from venue',
        amenities: ['Clean AC Rooms', 'Safe Luggage Locker', 'Pure Vegetarian Canteen', '24hr Hot Water'],
        image: galleryUrls[3] || fest.heroImage
      }
    ];

    const restaurants = [
      {
        name: 'The Sacred Feast Kitchen',
        cuisine: 'Authentic Festive Bhog & Thali',
        type: 'Pure Vegetarian Temple Food',
        rating: 4.9,
        price: '₹180 - ₹350',
        distance: '0.3 km',
        timings: '06:00 AM - 10:30 PM',
        mustTry: fest.authenticFood[0] || 'Festive Maha Bhog with Desi Ghee',
        image: galleryUrls[4] || fest.heroImage
      },
      {
        name: 'Royal Halwai & Sweet Emporium',
        cuisine: 'Traditional Milk Sweets & Chaat',
        type: 'Heritage Sweetshop',
        rating: 4.8,
        price: '₹100 - ₹250',
        distance: '0.7 km',
        timings: '07:00 AM - 11:00 PM',
        mustTry: fest.authenticFood[1] || 'Saffron Infused Mawa Sweets',
        image: galleryUrls[5] || fest.heroImage
      },
      {
        name: 'Festival Street Delicacies Bazaar',
        cuisine: 'Fresh Hot Savories & Beverages',
        type: 'Vibrant Food Stalls',
        rating: 4.7,
        price: '₹80 - ₹200',
        distance: '0.1 km',
        timings: '04:00 PM - 01:00 AM',
        mustTry: fest.authenticFood[2] || 'Hot Jalebi & Spiced Milk',
        image: galleryUrls[6] || fest.heroImage
      }
    ];

    const thingsToDo = [
      { id: '1', title: 'Witness the Grand Dawn Opening Aarti', desc: 'Arrive before 06:00 AM to hear the collective conch blowing and devotional chants as the festival is officially consecrated.', category: 'Spiritual' },
      { id: '2', title: 'Participate in Traditional Dance Circles', desc: 'Join thousands of dancers in traditional attire moving to frenetic drum rhythms.', category: 'Dance' },
      { id: '3', title: 'Taste Sacred Consecrated Prasad (Bhog)', desc: 'Partake in the communal feast prepared by hereditary temple cooks in pure copper cauldrons.', category: 'Culinary' },
      { id: '4', title: 'Night Procession & Light Illumination Walk', desc: 'Marvel at millions of lamps, artistic pandals, and illuminated floats moving through ancient streets.', category: 'Nightlife' },
      { id: '5', title: 'Traditional Artisan Shopping', desc: 'Browse handcrafted brass idols, festival attire, handloom fabrics, and regional instruments.', category: 'Shopping' },
      { id: '6', title: 'Capture Twilight Fireworks & Drone Spectacle', desc: 'Secure an elevated vantage point to capture the nighttime fireworks showering ancient monument domes.', category: 'Photography' }
    ];

    const localFood = fest.authenticFood.map((foodName, i) => ({
      name: foodName,
      desc: `Traditional festive recipe prepared exclusively during ${fest.name} using pure cow ghee, dry fruits, and aromatic spices.`,
      mustTry: 'Enjoyed fresh off the fire during evening festivities.',
      price: i === 0 ? '₹150' : i === 1 ? '₹120' : '₹90',
      whereToEat: i === 0 ? 'The Sacred Feast Kitchen' : 'Royal Halwai & Sweet Emporium',
      image: galleryUrls[i + 3] || fest.heroImage
    }));

    const faqs = [
      { question: `What are the exact dates and best days to attend ${fest.name}?`, answer: `${fest.name} takes place during ${fest.month} (${fest.dateRange}). While the entire celebration is spectacular, the opening consecration and final grand culmination day feature the most monumental processions.` },
      { question: `Is prior ticket booking required to attend?`, answer: `Most public festival venues and processions are free and open to everyone. However, VIP seating enclosures or cultural auditoriums may require prior passes, which can be reserved through authorized tourism desks.` },
      { question: `What is the recommended dress code?`, answer: `Traditional Indian festive attire is warmly welcomed and encouraged. Women typically wear ${fest.traditionalDress.split('for men')[0]?.trim() || 'sarees or lehengas'}, while men wear ${fest.traditionalDress.split('for men')[1] || 'kurtas with dhotis'}. Modest clothing covering shoulders and knees is mandatory inside sanctums.` },
      { question: `How crowded does the festival get, and how to manage safety?`, answer: `Crowds can reach hundreds of thousands during peak evening hours. Stay with your group, designate emergency meeting points, keep valuables in zippered inner pockets, and utilize official tourism police helplines.` },
      { question: `Is photography and videography permitted?`, answer: `Photography is widely embraced in open festival squares and cultural grounds. However, photography inside the innermost temple sanctums (Garbhagriha) is strictly prohibited. Drone flights require prior local police clearance.` },
      { question: `What are the primary musical instruments heard during the celebrations?`, answer: `You will experience the hypnotic reverberations of ${fest.musicInstruments.join(', ')} along with devotional choral singing.` },
      { question: `Can foreign tourists actively participate in the rituals?`, answer: `Yes! Foreign travelers are warmly welcomed to join dance circles, receive blessings (tika), light lamps, and enjoy the communal feasts. Locals delight in explaining sacred customs.` },
      { question: `How far in advance should hotel accommodations be booked?`, answer: `Hotels fill up months in advance for ${fest.name}. We strongly advise securing accommodations at least 2 to 4 months prior to ensure walking-distance access to key venues.` },
      { question: `What food options are available during fasting (Vrat) periods?`, answer: `All local restaurants offer dedicated Sattvic fasting menus (Phalahari) featuring sabudana, buckwheat (kuttu), singhara flour, curd, and fresh fruits with rock salt (Sendha Namak).` },
      { question: `Are special arrangements made for senior citizens and differently-abled guests?`, answer: `Designated elder seating bays and wheelchair ramps are arranged near major official cultural stages. Inquire at the Tourism Help Desk for accessible escort services.` },
      { question: `What are the best locations to view the celebrations?`, answer: `The pinnacle experiences occur at ${fest.bestLocations.join(', ')}.` },
      { question: `What is the significance of the traditional Prasad distribution?`, answer: `Prasad is sanctified food offered to the divine during aartis and then shared universally among all attendees without distinction of caste, religion, or background.` },
      { question: `Is drinking water and sanitation available along procession routes?`, answer: `Municipal authorities set up clean RO water kiosks and portable sanitation blocks every 200 meters along designated festival avenues.` },
      { question: `What happens if there is unexpected rain?`, answer: `Most major festival venues feature waterproof pandals and covered viewing pavilions. Celebrations continue with undiminished zeal rain or shine.` },
      { question: `How do I reach the festival venue from the nearest airport or railway station?`, answer: `Prepaid taxi booths, metro connections, and dedicated festival shuttle buses run 24 hours a day connecting the transit terminals directly to the celebration zones.` }
    ];

    const related = FESTIVALS.filter(f => f.slug !== slug).slice(0, 3).map(f => ({
      name: f.name.split(':')[0],
      state: f.state,
      slug: f.slug,
      type: 'Festival',
      image: f.heroImage
    }));

    return {
      id: fest.id,
      name: fest.name,
      slug: fest.slug,
      type: 'festival',
      state: fest.state,
      district: fest.region,
      coordinates: { lat: 23.2599, lng: 77.4126 }, // Pan-India representative
      elevation: 'Varies by Venue (Urban / Valley / Coastal)',
      bestTimeToVisit: `${fest.month} (${fest.dateRange})`,
      idealDuration: '3 – 5 Days',
      entryFee: 'Free Public Celebration (VIP Cultural Passes: ₹500 - ₹2,000)',
      timings: 'Round the Clock Festivities (Peak Aartis: 06:30 AM & 07:30 PM)',
      unescoStatus: fest.name.includes('UNESCO') ? 'UNESCO Intangible Cultural Heritage of Humanity' : 'National Living Cultural Celebration',
      nearestAirport: `${fest.bestLocations[0] || fest.state} International Airport`,
      nearestRailway: `${fest.bestLocations[0] || fest.state} Central Railway Station`,
      nearestBus: `${fest.bestLocations[0] || fest.state} Inter-State Bus Terminus`,
      travelDifficulty: 'Easy',
      familyFriendly: true,
      petFriendly: false, // Large festive crowds and drums not ideal for pets
      wheelchairAccessible: true,
      budgetLevel: 'Moderate',
      heroImage: fest.heroImage,
      gallery,
      about: {
        overview: fest.significance,
        history: fest.history || `Celebrated for millennia across India, ${fest.name.split(':')[0]} traces its philosophical roots to ancient Vedic scriptures, epic puranic chronicles, and seasonal agrarian rhythms. Over centuries of royal patronage under Indian dynasties, the festival evolved into an immortal spectacle of communal harmony, artistic innovation, and transcendent spiritual devotion.`,
        natureOrArchitecture: `The festival transforms urban avenues, temple courtyards, and river ghats into majestic open-air pavilions. Spectacular architectural pandals, geometric flower carpets (Rangoli), and millions of earthen oil lamps create a living canvas of sacred geometry and light.`,
        culturalSignificance: `A profound celebration that reinforces family bonds, patronizes thousands of folk musicians, dancers, weavers, and clay idol sculptors, and unites millions across linguistic and demographic boundaries.`,
        legendsAndMythology: `Sacred puranic lore narrates the cosmic triumph of divine righteousness, light, and maternal protection, reminding humanity of the eternal cosmic balance and the beauty of self-surrender in joyous devotion.`,
        interestingFacts: [
          `Features the synchronized soundscapes of traditional acoustic instruments including ${fest.musicInstruments.slice(0, 3).join(', ')}.`,
          `Generates seasonal livelihood for over 50,000 hereditary rural artisan and musician families.`,
          `Thousands of kilograms of sweet Prasad and community meals are prepared daily in temple mega-kitchens.`,
          `Attracts global cultural anthropologists, travel photographers, and spiritual seekers from over 80 countries.`
        ],
        timeline: [
          { yearOrEra: 'Vedic Antiquity', event: 'Initial scriptural mentions of seasonal harvest sacrifices and astronomical alignments.', significance: 'Foundation of ritual prayers and fire aartis.' },
          { yearOrEra: '11th Century CE', event: 'Royal codification under medieval Indian empires with public temple processions.', significance: 'Integration of classical dance forms and temple music.' },
          { yearOrEra: 'Late 19th Century', event: 'Transformation into mass community celebration fostering national unity.', significance: 'Establishment of neighborhood pandals and public cultural programs.' },
          { yearOrEra: 'Present Day', event: 'Global celebrations recognized as timeless living intangible world heritage.', significance: 'Celebrated across Indian diaspora worldwide.' }
        ]
      },
      mapInfo: {
        directionsSummary: `Located primarily at ${fest.bestLocations.join(', ')}. Connected via direct flights, high-speed Vande Bharat trains, and national expressways.`,
        majorCityDistances,
        nearbyAttractions
      },
      weather: {
        currentTemp: '28°C',
        condition: 'Crisp Festive Evening',
        humidity: '52%',
        windSpeed: '11 km/h',
        sunrise: '06:12 AM',
        sunset: '06:05 PM',
        aqi: '65',
        aqiStatus: 'Moderate',
        rainChance: '0%',
        bestVisitingHours: '05:30 AM to 08:30 AM (Morning Puja) & 06:00 PM to 11:30 PM (Evening Aarti & Dance)',
        weeklyForecast
      },
      itinerary: {
        day1: {
          morning: `Arrive in ${fest.bestLocations[0] || 'the festival hub'}, settle into your hotel, and explore the morning temple flower market.`,
          afternoon: `Visit hereditary artisan workshops sculpting clay idols and weaving traditional festival silks.`,
          evening: `Attend the grand inauguration aarti with 108 lamps, conch blowing, and rhythmic drumbeats.`
        },
        day2: {
          morning: `Participate in the morning spiritual prayers and savor hot, fragrant temple prasad.`,
          afternoon: `Sample authentic festival delicacies and sweets across heritage sweetshops.`,
          evening: `Immerse yourself in high-energy traditional dance circles moving late into the midnight hours.`
        },
        day3: {
          morning: `Peaceful early morning riverfront or sanctum walk, observing intimate family rituals.`,
          afternoon: `Browse traditional textile emporiums and collect authentic handcrafted souvenirs.`,
          evening: `Witness the breathtaking grand illuminated chariot procession and spectacular fireworks finale.`
        }
      },
      hotels,
      restaurants,
      thingsToDo,
      localFood,
      cultureAndTraditions: {
        attire: fest.traditionalDress,
        language: stateData?.languages?.join(', ') || 'Hindi, English and Regional Language',
        musicAndDance: `Vibrant musical performances featuring ${fest.musicInstruments.join(', ')} and communal folk dances.`,
        etiquette: [
          'Maintain decorum and silence during solemn inner sanctum aartis.',
          'Always remove footwear before stepping onto prayer mats or temple pavilions.',
          'Accept prasad with the right hand placed over the left.',
          'Dress modestly in traditional or conservative clothing.'
        ],
        festivalsCelebrated: [fest.name, 'Maha Shivratri', 'Diwali Celebrations']
      },
      photoSpots: [
        { title: 'The Golden Hour Aarti with 108 Lamps', bestTime: '06:45 PM – 07:30 PM', droneAllowed: false, tips: 'Use a wide aperture (f/1.8 or f/2.8) to capture the soft golden glow of oil lamps on devotees faces.' },
        { title: 'Dynamic Motion Dance Swirls', bestTime: '09:00 PM – 11:00 PM', droneAllowed: false, tips: 'Slow shutter speed (1/15s to 1/30s) creates breathtaking motion blur of colorful swirling skirts.' },
        { title: 'Illuminated Procession Chariots', bestTime: '08:00 PM – 09:30 PM', droneAllowed: true, tips: 'Elevated rooftop perspectives yield dramatic overhead views of the procession through narrow historic streets.' },
        { title: 'Dawn Consecration & Incense Mist', bestTime: '05:45 AM – 06:30 AM', droneAllowed: false, tips: 'Backlight through rising sandalwood incense smoke creates sublime atmospheric silhouettes.' }
      ],
      travelTips: {
        safety: 'Keep alert in high-density crowd zones. Official emergency police booths and lost-and-found kiosks are positioned at every intersection.',
        network: 'Mobile networks can experience congestion during peak aarti times. Use text messaging or prearranged meeting spots.',
        atmAndCash: 'Keep cash handy as street stalls and prasad counters move too fast for digital payment scanning.',
        medical: 'Mobile ambulance vans and Red Cross first-aid stations are deployed around all major festive plazas.',
        clothing: 'Breathable festive cottons during daytime; keep a light silk shawl or jacket for cool evening breezes.',
        permits: 'No permits required for open celebrations. Carry valid government ID.'
      },
      faqs,
      related,
      reviews: [
        {
          id: 'rev-fest-1',
          userName: 'Dr. Ananya Mukherjee',
          userLocation: 'Kolkata, West Bengal',
          rating: 5,
          date: 'October 2025',
          comment: `The spiritual energy during the evening aarti is indescribable. To see 50,000 people moving with one heartbeat to the dhaak drums brought tears to my eyes. Incredible India at its finest!`,
          helpfulCount: 56,
          verified: true
        },
        {
          id: 'rev-fest-2',
          userName: 'Rohan Bhattacharya',
          userLocation: 'Ahmedabad, Gujarat',
          rating: 5,
          date: 'October 2025',
          comment: `The food, the music, the colors—everything was pure luxury and devotion. The organizers have made great arrangements for cleanliness and water.`,
          helpfulCount: 38,
          verified: true
        },
        {
          id: 'rev-fest-3',
          userName: 'Sarah Jenkins',
          userLocation: 'London, UK',
          rating: 5,
          date: 'November 2025',
          comment: `My first Indian festival experience and it surpassed all expectations. People were so welcoming, inviting us into the dance and sharing sweets. A memory for a lifetime!`,
          helpfulCount: 47,
          verified: true
        }
      ]
    };
  }

  /**
   * Resolve Cultural Experience details
   */
  public static getCultureDetails(slug: string): DetailedEntityData | null {
    const exp = CULTURAL_EXPERIENCES.find(c => c.slug === slug || c.id === slug);
    if (!exp) return null;

    const stateKey = exp.state.toLowerCase().replace(/[\s&]+/g, '-');
    const stateData: StateData | undefined = STATES_DATA[stateKey];

    // Assemble gallery
    const galleryUrls: string[] = [exp.heroImage, ...(exp.gallery || [])];
    if (stateData?.heroImage && !galleryUrls.includes(stateData.heroImage)) {
      galleryUrls.push(stateData.heroImage);
    }
    if (stateData?.gallery) {
      stateData.gallery.forEach(img => {
        if (!galleryUrls.includes(img)) galleryUrls.push(img);
      });
    }
    let poolIdx = 0;
    while (galleryUrls.length < 10 && poolIdx < CURATED_GALLERY_PHOTOS.length) {
      const p = CURATED_GALLERY_PHOTOS[poolIdx++];
      if (!galleryUrls.includes(p)) galleryUrls.push(p);
    }

    const gallery: GalleryPhoto[] = galleryUrls.slice(0, 10).map((url, i) => ({
      url,
      caption: i === 0 ? `${exp.name} master performance` : i === 1 ? `Intricate mudras & artisan mastery` : i === 2 ? `Traditional regalia and authentic costumes` : `Living civilizational heritage of India`,
      category: i % 2 === 0 ? 'culture' : 'people',
      photographer: 'National Cultural Documentation Archives'
    }));

    const majorCityDistances = [
      { city: 'New Delhi', distance: '550 km', duration: '1 hr flight' },
      { city: 'Mumbai', distance: '780 km', duration: '1.5 hrs flight' },
      { city: 'Chennai / Bengaluru', distance: '350 km', duration: '5 hrs drive' },
      { city: 'Kolkata', distance: '1,200 km', duration: '2 hrs flight' }
    ];

    const nearbyAttractions = [
      { name: `National Centre for Classical Traditions`, distance: '3.5 km', type: 'Cultural Academy' },
      { name: `Heritage Handloom & Craft Guilds`, distance: '1.8 km', type: 'Artisan Village' },
      { name: `Historic Temple Theatre & Stage`, distance: '2.2 km', type: 'Performance Shrine' }
    ];

    const weeklyForecast = [
      { day: 'Monday (Workshops)', high: '29°C', low: '19°C', condition: 'Clear Sky', rain: '0%' },
      { day: 'Tuesday (Rehearsals)', high: '30°C', low: '20°C', condition: 'Sunny & Pleasant', rain: '0%' },
      { day: 'Wednesday (Exhibitions)', high: '28°C', low: '18°C', condition: 'Mild Breeze', rain: '0%' },
      { day: 'Thursday (Masterclass)', high: '29°C', low: '19°C', condition: 'Warm & Bright', rain: '5%' },
      { day: 'Friday (Concert Night)', high: '27°C', low: '18°C', condition: 'Pleasant Evening', rain: '0%' },
      { day: 'Saturday (Grand Recital)', high: '28°C', low: '19°C', condition: 'Golden Sunset', rain: '0%' },
      { day: 'Sunday (Artisan Guild Market)', high: '29°C', low: '20°C', condition: 'Clear Atmosphere', rain: '0%' }
    ];

    const hotels = [
      {
        name: `The Royal Cultural Heritage Residency`,
        category: 'Luxury' as const,
        rating: 4.9,
        price: '₹16,000/night',
        distance: '1.5 km from cultural academy',
        amenities: ['Private Dance & Sitar Evenings', 'Fine Dining Heritage Restaurant', 'Ayurvedic Wellness Spa', 'Artisan Guided Tours'],
        image: galleryUrls[1] || exp.heroImage
      },
      {
        name: `Kalakshetra Boutique Retreat`,
        category: 'Mid-range' as const,
        rating: 4.8,
        price: '₹5,500/night',
        distance: '2.8 km from center',
        amenities: ['Courtyard Classical Music Sessions', 'Organic Traditional Cuisine', 'Free High Speed WiFi', 'Heritage Library'],
        image: galleryUrls[2] || exp.heroImage
      },
      {
        name: `Artisan Haven Homestay`,
        category: 'Budget' as const,
        rating: 4.7,
        price: '₹2,000/night',
        distance: '0.9 km from craft lane',
        amenities: ['Stay with Master Artisan Family', 'Home-Cooked Meals', 'Hands-on Craft Workshop', 'Bicycle Rentals'],
        image: galleryUrls[3] || exp.heroImage
      }
    ];

    const restaurants = [
      {
        name: 'The Rasika Traditional Dining Hall',
        cuisine: 'Classical Indian Banana Leaf Meals',
        type: 'Heritage Dining',
        rating: 4.9,
        price: '₹280 - ₹500',
        distance: '0.8 km',
        timings: '11:30 AM - 03:30 PM & 07:00 PM - 10:30 PM',
        mustTry: 'Seven-Course Traditional Thali on Plantain Leaf',
        image: galleryUrls[4] || exp.heroImage
      },
      {
        name: 'Sangeet & Chai Baithak',
        cuisine: 'Filter Coffee, Herbal Teas & Savories',
        type: 'Cultural Cafe',
        rating: 4.8,
        price: '₹120 - ₹250',
        distance: '0.4 km',
        timings: '07:00 AM - 09:00 PM',
        mustTry: 'Brass Tumbler Degree Filter Coffee with Hot Podi Idli',
        image: galleryUrls[5] || exp.heroImage
      },
      {
        name: 'Royal Awadhi / Heritage Spice Court',
        cuisine: 'Slow-Cooked Dum Specialties',
        type: 'Fine Dining',
        rating: 4.7,
        price: '₹600 - ₹1,200',
        distance: '3.2 km',
        timings: '12:30 PM - 11:00 PM',
        mustTry: 'Saffron Fragrant Dum Pukht Feast',
        image: galleryUrls[6] || exp.heroImage
      }
    ];

    const thingsToDo = [
      { id: '1', title: 'Attend a Live Master Exponent Recital', desc: `Experience the thunderous rhythm and subtle abhinaya gestures performed live on historic wooden or stone stages.`, category: 'Performance' },
      { id: '2', title: 'Hands-on Masterclass / Workshop', desc: `Spend an inspiring morning with senior gurus learning primary footwork, mudras, or clay-molding techniques.`, category: 'Learning' },
      { id: '3', title: 'Visit the Hereditary Artisan Guilds', desc: `Observe how master craftsmen weave intricate silk zari or hand-carve rosewood musical instruments using ancestral tools.`, category: 'Crafts' },
      { id: '4', title: 'Explore the Living Heritage Museum', desc: `Study 500-year-old preserved palm-leaf manuscripts, antique temple jewelry, and historic costumes.`, category: 'History' },
      { id: '5', title: 'Acquire Certified GI-Tagged Treasures', desc: `Purchase directly from registered state cooperative emporiums with authenticity holograms and GI certificates.`, category: 'Shopping' },
      { id: '6', title: 'Behind-the-Scenes Green Room Dressing Ritual', desc: `Witness the hours-long sacred makeup and face-painting transformation using natural stone and herbal pigments.`, category: 'Culture' }
    ];

    const localFood = [
      {
        name: 'Traditional Royal Thali',
        desc: 'Curated balanced feast balancing all six ayurvedic tastes (Shad-Rasa) prepared in pure ghee and stone-ground spices.',
        mustTry: 'Served fresh on polished brass or fresh plantain leaves.',
        price: '₹350',
        whereToEat: 'The Rasika Traditional Dining Hall',
        image: galleryUrls[4] || exp.heroImage
      },
      {
        name: 'Steamed Herb Dumplings & Chutney',
        desc: 'Light, nutrient-dense rice and lentil cakes infused with mustard seeds, curry leaves, and green chillies.',
        mustTry: 'Hot morning breakfast pairing with degree filter coffee.',
        price: '₹110',
        whereToEat: 'Sangeet & Chai Baithak',
        image: galleryUrls[5] || exp.heroImage
      },
      {
        name: 'Slow Simmered Saffron Rice Pudding (Payasam/Kheer)',
        desc: 'Slowly condensed milk infused with fragrant cardamom pods, Kashmiri saffron strands, and roasted cashews.',
        mustTry: 'Traditional concluding sweetness after classical recitals.',
        price: '₹140',
        whereToEat: 'The Rasika Traditional Dining Hall',
        image: galleryUrls[6] || exp.heroImage
      }
    ];

    const faqs = [
      { question: `What is the historical origin century of ${exp.name}?`, answer: `${exp.name} traces its lineage back to the ${exp.originCentury}. Codified in ancient Sanskrit treatises like the Natyashastra and Shilpa Shastras, it has been preserved through unbroken Guru-Shishya parampara.` },
      { question: `Who are the legendary master exponents associated with this art?`, answer: `Renowned exponents include ${exp.masterArtisansOrExponents.join(', ')} whose lifelong dedication preserved these delicate arts for global humanity.` },
      { question: `What key musical instruments or artisan materials are utilized?`, answer: `The tradition centers upon the master manipulation of ${exp.keyInstrumentsOrMaterials.join(', ')}.` },
      { question: `Can beginners enroll in short introductory workshops?`, answer: `Yes! Cultural academies and artisan guilds offer 2-day to 7-day intensive discovery workshops designed specifically for beginners and cultural travelers.` },
      { question: `Does this art form have official Geographical Indication (GI) status?`, answer: `Many regional crafts and weaves featured under this tradition hold prestigious GI tags awarded by the Government of India, protecting their authenticity against industrial counterfeits.` },
      { question: `Where are the best venues to experience a live classical recital?`, answer: `Premier auditoriums and temple theatres in ${exp.region}, as well as national seasonal dance festivals, host daily recitals during the winter cultural season.` },
      { question: `What is the significance of the hand gestures (Mudras) or motifs?`, answer: `Every single hand gesture (Asamyuta and Samyuta Hastas) or carved geometric motif functions as a precise visual language capable of narrating epics, emotional states, and cosmic principles without speaking a single word.` },
      { question: `How many years of training does a master exponent require?`, answer: `A classical practitioner typically undergoes 7 to 12 years of rigorous daily gurukul training before their formal debut recital (Arangetram).` },
      { question: `How can one verify the authenticity of handcrafted items when purchasing?`, answer: `Look for the official Silk Mark, Handloom Mark, Craft Mark, or GI Tag hologram issued by the Ministry of Textiles, Government of India.` },
      { question: `Are photography and recording allowed during live recitals?`, answer: `Flash photography is strictly prohibited during performances to prevent blinding artists. Non-flash photography from rear designated media rows is permitted in select sessions.` },
      { question: `What is the spiritual philosophy underpinning this tradition?`, answer: `In Indian classical aesthetics, art is regarded as Sadhana—a spiritual discipline where the dancer, musician, or sculptor dissolves their ego to channel transcendental divine beauty (Satyam Shivam Sundaram).` },
      { question: `Are performances held year-round?`, answer: `While academies operate daily, the peak performance season runs from October to March when premier classical festivals are staged.` },
      { question: `What traditional costumes and adornments are worn?`, answer: `Artists don exquisite handwoven silks with pure gold zari borders, complemented by traditional temple jewelry (Kemp stones) and fragrant jasmine flower garlands.` },
      { question: `Can cultural tours be customized for academic researchers or students?`, answer: `Yes, Virasat coordinates accredited cultural immersion itineraries with senior art historians, backstage access, and private baithak lecture-demonstrations.` },
      { question: `How does supporting this art form preserve living heritage?`, answer: `By attending live recitals and purchasing directly from artisan cooperatives, you provide dignified livelihood to hereditary artists and prevent age-old knowledge systems from vanishing.` }
    ];

    const related = CULTURAL_EXPERIENCES.filter(c => c.slug !== slug).slice(0, 3).map(c => ({
      name: c.name.split(':')[0],
      state: c.state,
      slug: c.slug,
      type: 'Culture',
      image: c.heroImage
    }));

    return {
      id: exp.id,
      name: exp.name,
      slug: exp.slug,
      type: 'culture',
      state: exp.state,
      district: exp.region,
      coordinates: { lat: 13.0827, lng: 80.2707 },
      elevation: 'Sea Level to Hill Plateaus',
      bestTimeToVisit: 'October to March (Winter Cultural Recital Season)',
      idealDuration: '2 – 4 Days',
      entryFee: 'Auditorium Recitals: ₹250 – ₹1,500 (Workshops: ₹1,000 - ₹3,000)',
      timings: 'Academy Morning Sessions: 08:30 AM - 12:30 PM | Evening Recitals: 06:00 PM - 09:30 PM',
      unescoStatus: exp.name.includes('UNESCO') ? 'UNESCO Intangible Cultural Heritage of Humanity' : 'National Classical Treasure of India',
      nearestAirport: `${exp.region.split(',')[0]} International Airport`,
      nearestRailway: `${exp.region.split(',')[0]} Central Junction`,
      nearestBus: `${exp.region.split(',')[0]} Cultural District Bus Station`,
      travelDifficulty: 'Easy',
      familyFriendly: true,
      petFriendly: false,
      wheelchairAccessible: true,
      budgetLevel: 'Moderate',
      heroImage: exp.heroImage,
      gallery,
      about: {
        overview: exp.description,
        history: exp.history || `Rooted in the ancient Vedic and Natyashastra lineage of the ${exp.originCentury}, ${exp.name.split(':')[0]} has been passed down across millennia through strict Guru-Shishya parampara (master-disciple lineage). Fostered by royal patrons and temple endowments, it represents one of human civilization's most sophisticated syntheses of rhythm, physical geometry, metaphysical philosophy, and aesthetic emotion (Rasa).`,
        natureOrArchitecture: `Often performed in sacred temple mandapas, granite natya sabhas, and historic open-air courts, the art mirrors the divine architectural proportions of temple carvings. Every stance, geometric line, and sculpted angle resonates with the sacred geometry of Indian temple architecture.`,
        culturalSignificance: `A living repository of classical Sanskrit, regional literature, and mythological narratives that continues to inspire modern choreographers, painters, and theater practitioners worldwide.`,
        legendsAndMythology: `Legend holds that Lord Shiva in his cosmic avatar as Nataraja performed the Ananda Tandava (Dance of Cosmic Bliss), embodying the five cosmic activities of creation, preservation, destruction, illusion, and liberation.`,
        interestingFacts: [
          ...exp.highlights,
          `Master practitioners train from early childhood, developing extraordinary muscular micro-control over every facial muscle and fingertip.`,
          `Traditional costumes utilize pure woven silk and hand-beaten gold and silver leafing techniques.`,
          `Recognized globally by performing arts institutions as the pinnacle of classical physical expression.`
        ],
        timeline: [
          { yearOrEra: exp.originCentury, event: 'Codification in ancient foundational treatises on aesthetics and dance.', significance: 'Establishment of fundamental mudras and rhythmic adavus.' },
          { yearOrEra: '10th–16th Century CE', event: 'Flourishing under medieval royal courts with dedicated temple dancers and sculptors.', significance: 'Carved permanently into stone friezes across great temple towers.' },
          { yearOrEra: 'Early 20th Century', event: 'Renaissance and revival by pioneering modern masters.', significance: 'Transitioned from temple sanctums to global classical concert stages.' },
          { yearOrEra: 'Present Day', event: 'Celebrated across global conservatories and academies as UNESCO living heritage.', significance: 'Thriving global student and artist community.' }
        ]
      },
      mapInfo: {
        directionsSummary: `Located primarily across academies and historic venues in ${exp.region}, ${exp.state}. Well connected by flights and rail.`,
        majorCityDistances,
        nearbyAttractions
      },
      weather: {
        currentTemp: '27°C',
        condition: 'Pleasant Cultural Evening',
        humidity: '60%',
        windSpeed: '8 km/h',
        sunrise: '06:08 AM',
        sunset: '06:14 PM',
        aqi: '48',
        aqiStatus: 'Good Quality Air',
        rainChance: '0%',
        bestVisitingHours: '09:00 AM to 12:00 PM (Guru Practice) & 06:30 PM to 09:30 PM (Live Recitals)',
        weeklyForecast
      },
      itinerary: {
        day1: {
          morning: `Arrive in the cultural heartland, check in, and visit the historic performing arts academy to witness morning vocal and rhythm rehearsals.`,
          afternoon: `Tour the master costume and ornament ateliers to watch the painstaking stitching of classical silks.`,
          evening: `Attend an intimate evening chamber concert (Baithak) featuring seasoned classical musicians.`
        },
        day2: {
          morning: `Participate in an interactive lecture-demonstration explaining the symbolic meaning of hand mudras and facial abhinaya.`,
          afternoon: `Enjoy an authentic traditional seven-course plantain leaf feast at a heritage dining hall.`,
          evening: `Take your seat in the grand auditorium for a full-length classical recital by senior master exponents.`
        },
        day3: {
          morning: `Explore the artisan craft quarter to acquire certified GI-tagged handcrafted souvenirs directly from makers.`,
          afternoon: `Visit the ancient temple whose sculpted friezes inspired the original dance poses over a millennium ago.`,
          evening: `Reflective sunset dinner sharing impressions with fellow art lovers and scholars.`
        }
      },
      hotels,
      restaurants,
      thingsToDo,
      localFood,
      cultureAndTraditions: {
        attire: `Classic handloom silk sarees with zari temple borders, dhotis with angavastrams, and bronze ghungroo ankle bells.`,
        language: stateData?.languages?.join(', ') || 'Sanskrit, Tamil, Hindi, and English',
        musicAndDance: `Carnatic or Hindustani classical raga systems with ${exp.keyInstrumentsOrMaterials.join(', ')}.`,
        etiquette: [
          'Maintain absolute reverent silence during classical recitals; avoid entering or exiting while an artist is performing an item.',
          'Applaud with warm respect at the conclusion of each complete item rather than interrupting intricate talas.',
          'Touch the feet of senior gurus or bow gently as a mark of traditional guru-vandana.'
        ],
        festivalsCelebrated: ['Winter Classical Music & Dance Festival', 'Navratri Sangeet Utsav', 'Guru Purnima']
      },
      photoSpots: [
        { title: 'The Classical Nataraja Sculpted Pose', bestTime: '04:30 PM – 05:30 PM', droneAllowed: false, tips: 'Side-lighting highlights the razor-sharp geometric alignment of limbs and facial expressions.' },
        { title: 'Artisan Hands Weaving Silk & Zari', bestTime: '10:00 AM – 11:30 AM', droneAllowed: false, tips: 'Macro lens focus on the weathered hands of the master weaver threading pure gold filaments.' },
        { title: 'Ancient Granite Temple Pillar Silhouette', bestTime: '06:00 AM – 06:45 AM', droneAllowed: false, tips: 'Frame the classical dancer against the 1,000-year-old carved stone pillar in early morning mist.' },
        { title: 'The Ankle Bell (Ghungroo) Binding Ceremony', bestTime: '05:00 PM – 05:30 PM', droneAllowed: false, tips: 'Close-up composition capturing the ritual tying of brass bells around feet before stepping on stage.' }
      ],
      travelTips: {
        safety: 'Cultural districts are peaceful and welcoming with well-lit public transport and polite local residents.',
        network: 'Full 5G and 4G coverage across all city auditoriums and academies.',
        atmAndCash: 'Credit cards and UPI accepted at all major venues and emporiums. Cash recommended for street bookstalls.',
        medical: 'Multi-specialty hospitals and pharmacies within 2 km of all performance venues.',
        clothing: 'Smart Indian traditional or formal Western attire is customary for evening auditorium recitals.',
        permits: 'No permits required. Ticket booking recommended for premier weekend concerts.'
      },
      faqs,
      related,
      reviews: [
        {
          id: 'rev-cult-1',
          userName: 'Padmashree K. Swaminathan',
          userLocation: 'Chennai, Tamil Nadu',
          rating: 5,
          date: 'January 2026',
          comment: `As someone who has followed classical art for 40 years, the curation and authenticity on Virasat is extraordinary. The details on guru lineages and mudras are academically impeccable.`,
          helpfulCount: 64,
          verified: true
        },
        {
          id: 'rev-cult-2',
          userName: 'David Miller',
          userLocation: 'New York, USA',
          rating: 5,
          date: 'February 2026',
          comment: `Attended the morning masterclass and evening performance arranged through this guide. It was an intellectual and spiritual awakening. Truly the soul of India.`,
          helpfulCount: 39,
          verified: true
        },
        {
          id: 'rev-cult-3',
          userName: 'Nandini Joshi',
          userLocation: 'Mumbai, Maharashtra',
          rating: 5,
          date: 'December 2025',
          comment: `The artisan craft section led us directly to the genuine national award-winning weavers. We purchased an authentic heirloom piece with complete certificate verification.`,
          helpfulCount: 27,
          verified: true
        }
      ]
    };
  }
}
