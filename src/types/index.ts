export interface HeritageSite {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  state: string;
  dynasty: string;
  period: string;
  unescoYear?: number;
  description: string;
  architectureStyle: string;
  droneViewUrl?: string;
  heroImage: string;
  gallery: string[];
  timings: string;
  entryFeeIndians: string;
  entryFeeForeigners: string;
  bestMonths: string;
  nearbyAttractions: string[];
  latitude: number;
  longitude: number;
  audioGuideText: string;
  facts: string[];
  rating: number;
  category: 'temple' | 'fort' | 'cave' | 'monument' | 'natural' | 'unesco' | 'spiritual';
}

export interface HiddenGem {
  id: string;
  name: string;
  slug: string;
  state: string;
  region: string;
  description: string;
  whyVisit: string;
  howToReach: string;
  bestTimeToVisit: string;
  adventureLevel: 'Easy' | 'Moderate' | 'Challenging' | 'High Altitude';
  uncrowdedScore: number; // 1-100
  heroImage: string;
  tags: string[];
  coordinates: { lat: number; lng: number };
}

export interface Festival {
  id: string;
  name: string;
  slug: string;
  state: string;
  region: string;
  month: string;
  dateRange: string;
  significance: string;
  rituals: string[];
  authenticFood: string[];
  traditionalDress: string;
  musicInstruments: string[];
  bestLocations: string[];
  countdownTargetDate: string; // ISO date for countdown
  heroImage: string;
}

export interface CulturalExperience {
  id: string;
  name: string;
  slug: string;
  category?: 'dance' | 'music' | 'craft' | 'textile' | 'art' | 'tradition' | 'architecture' | string;
  state: string;
  region: string;
  originCentury: string;
  keyInstrumentsOrMaterials: string[];
  description: string;
  masterArtisansOrExponents: string[];
  highlights: string[];
  heroImage: string;
}

export interface StateData {
  id: string;
  name: string;
  slug: string;
  capital: string;
  population: string;
  languages: string[];
  heritageCount: number;
  festivalsCount: number;
  cultureCount: number;
  topAttraction: string;
  heroImage: string;
  description: string;
  historyOverview: string;
  dynasties: string[];
  cuisine: {
    dishes: string[];
    streetFood: string[];
    sweets: string[];
    description: string;
  };
  architectureStyle: string;
  traditionalDress: string;
  folkDance: string[];
  music: string[];
  bestTime: string;
  estimatedDailyBudget: {
    budget: string;
    midRange: string;
    luxury: string;
  };
  nearbyPlaces: string[];
  hiddenGems: string[];
  gallery: string[];
  facts: string[];
  travelTips: string[];
  emergencyNumbers: {
    police: string;
    touristHelpline: string;
    ambulance: string;
  };
  weather: {
    temp: string;
    condition: string;
    aqi: string;
    bestSeason: string;
  };
  hotels: {
    name: string;
    type: string;
    rating: number;
    pricePerNight: string;
    location: string;
    image: string;
  }[];
  restaurants: {
    name: string;
    cuisineType: string;
    rating: number;
    mustTry: string;
    priceRange: string;
    image: string;
  }[];
  aiSuggestedRoute: {
    day: number;
    title: string;
    description: string;
    highlights: string[];
  }[];
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  greeting: string;
  translations: Record<string, string>;
}

export interface ItineraryRequest {
  destination: string;
  days: number;
  budgetLevel: 'Backpacker' | 'Comfort' | 'Heritage Luxury' | 'Royal Maharaja';
  season: 'Winter (Nov-Feb)' | 'Spring (Mar-Apr)' | 'Monsoon (Jul-Sep)' | 'Autumn (Oct-Nov)' | 'Summer (May-Jun)';
  travelStyle: 'Spiritual & Sacred' | 'Royal Heritage & Forts' | 'Nature & Hidden Valleys' | 'Culinary & Art Trail' | 'Adventure & Trekking';
  foodPreference: 'Pure Vegetarian' | 'Sattvic / Temple Feast' | 'Jain Friendly' | 'Authentic Regional Non-Veg' | 'Local Street Explorer';
  companions: 'Solo Wanderer' | 'Romantic Couple' | 'Family with Elders & Kids' | 'Friends Expedition';
  adventureLevel: 'Gentle & Relaxed' | 'Moderate Sightseeing' | 'High Energy & Trails';
}

export interface DayPlan {
  day: number;
  theme: string;
  morning: { time: string; activity: string; location: string; tip: string };
  afternoon: { time: string; activity: string; location: string; foodTip: string };
  evening: { time: string; activity: string; location: string; sunsetSpot: string };
  heritageFact: string;
}

export interface ItineraryResult {
  destination: string;
  durationDays: number;
  travelStyle: string;
  budgetLevel: string;
  totalEstimatedCostINR: string;
  budgetBreakdown: {
    stay: number;
    food: number;
    transport: number;
    monumentsGuide: number;
    emergencyReserve: number;
  };
  weatherForecast: {
    temp: string;
    climate: string;
    clothingAdvice: string;
  };
  packingChecklist: string[];
  days: DayPlan[];
  localCuisineToTaste: string[];
  heritageStays: { name: string; style: string; price: string }[];
  authenticEateries: { name: string; speciality: string; price?: string; priceRange?: string }[];
  hiddenGemsEnRoute: string[];
  emergencyHelplines: { agency: string; phone: string }[];
}
