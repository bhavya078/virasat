import { StateData } from '../types';

export const STATES_DATA: Record<string, StateData> = {
  'rajasthan': {
    id: 'rajasthan',
    name: 'Rajasthan',
    slug: 'rajasthan',
    capital: 'Jaipur (The Pink City)',
    population: '81 Million',
    languages: ['Hindi', 'Rajasthani', 'Marwari', 'Mewari', 'Dhundhari'],
    heritageCount: 12,
    festivalsCount: 14,
    cultureCount: 15,
    topAttraction: 'Amer Fort & Hawa Mahal',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    description: 'The Land of Kings (Rajputana), Rajasthan is an immortal realm of soaring desert fortresses, mirror-work palaces, vibrant chivalric folklore, and desert camel trails against golden Thar sands.',
    historyOverview: 'Home to the valorous Rajput dynasties including the Sisodias of Mewar, Rathores of Marwar, and Kachwahas of Amer. Famed for historic battles, Rani Padmini’s defiance, and architectural marvels like Chittorgarh, Mehrangarh, and Kumbhalgarh.',
    dynasties: ['Mewar Sisodias', 'Marwar Rathores', 'Amer Kachwahas', 'Bhati Rajputs', 'Chauhans'],
    cuisine: {
      dishes: ['Dal Baati Churma with pure desi ghee', 'Laal Maas (Fiery mutton curry with Mathania chillies)', 'Ker Sangri', 'Gatte ki Sabzi'],
      streetFood: ['Pyaaz Kachori from Rawat Mishthan Bhandar', 'Mirchi Vada', 'Mawa Kachori'],
      sweets: ['Ghewar soaked in saffron syrup', 'Mawa Malpua', 'Gond ke Ladoo', 'Bikaneri Rasgulla'],
      description: 'Engineered for desert warriors, Rajasthani cuisine features nutrient-rich gram flour, dried desert beans, ghee, and milk sweets that do not perish in dry arid heat.'
    },
    architectureStyle: 'Rajput Military Fortifications & Havelis with Jharokhas, Chhatris, and Sheesh Mahal mirror work',
    traditionalDress: 'Ghagra-Choli with Bandhani Odhni for women; Angrakha, Dhoti, and 9-meter Safa turban for men',
    folkDance: ['Ghoomar', 'Kalbelia (Snake charmer dance)', 'Chari (Brass pot fire dance)', 'Gair'],
    music: ['Maand raga', 'Langa & Manganiyar folk singing', 'Instruments: Ravanahatha, Kamaicha, Khartal'],
    bestTime: 'October to March (Pleasant daytime temperatures and starry desert nights)',
    estimatedDailyBudget: {
      budget: '₹1,500 - ₹2,500 / day',
      midRange: '₹4,500 - ₹8,500 / day',
      luxury: '₹18,000 - ₹50,000+ / day (Heritage Haveli & Palace Stays)'
    },
    nearbyPlaces: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Bikaner', 'Pushkar', 'Mount Abu'],
    hiddenGems: ['Khimsar Dunes Village', 'Bundi Stepwells & Murals', 'Jawai Leopard Boulders', 'Kumbhalgarh Wall'],
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Contains Kumbhalgarh’s 36-kilometer continuous wall, second only to the Great Wall of China.',
      'Jaisalmer Fort is one of the only living forts in the world where 3,000 people reside inside its medieval walls.',
      'Sojat in Rajasthan supplies over 90% of India’s natural henna.'
    ],
    travelTips: [
      'Hire authorized government-approved guides at monuments to avoid touts.',
      'Always carry sunscreen, sunglasses, and a warm fleece for rapid nighttime desert temperature drops.',
      'Sample regional sweets only from heritage sweetshops (Halwais).'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-103-3500 (Rajasthan Tourism)',
      ambulance: '108'
    },
    weather: {
      temp: '22°C - 31°C (Winter: 8°C - 24°C)',
      condition: 'Sunny & Desert Dry',
      aqi: 'Moderate (85 AQI)',
      bestSeason: 'Winter (Nov to Feb)'
    },
    hotels: [
      { name: 'Rambagh Palace, Jaipur', type: 'Ultra Luxury Heritage', rating: 5.0, pricePerNight: '₹45,000+', location: 'Bhawani Singh Road, Jaipur', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' },
      { name: 'Taj Lake Palace, Udaipur', type: 'Island Palace', rating: 4.9, pricePerNight: '₹55,000+', location: 'Lake Pichola, Udaipur', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
      { name: 'Haveli Inn Pal, Jodhpur', type: 'Mid-range Heritage Haveli', rating: 4.7, pricePerNight: '₹4,500', location: 'Clock Tower, Jodhpur', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: '1135 AD, Amer Fort', cuisineType: 'Royal Rajput Thali', rating: 4.8, mustTry: 'Thaal-e-Jodhpur & Jungli Maas', priceRange: '₹₹₹₹', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rawat Mishthan Bhandar', cuisineType: 'Street Delicacies & Sweets', rating: 4.7, mustTry: 'Pyaaz Kachori & Mawa Jalebi', priceRange: '₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Chokhi Dhani Ethnic Resort', cuisineType: 'Rajasthani Village Feast', rating: 4.6, mustTry: 'Unlimited Bajra Roti & Dal Baati', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Jaipur Royal Citadel', description: 'Amer Fort, Sheesh Mahal, Panna Meena Stepwell, and evening shopping in Johari Bazaar.', highlights: ['Amer Fort', 'Hawa Mahal', 'Laxmi Mishthan Bhandar'] },
      { day: 2, title: 'City of Lakes Udaipur', description: 'Scenic drive to Udaipur, boat cruise on Lake Pichola, sunset at Jagmandir.', highlights: ['City Palace', 'Lake Pichola', 'Saheliyon ki Bari'] },
      { day: 3, title: 'Golden Thar Dunes Jaisalmer', description: 'Explore the living Jaisalmer Fort, Havelis, and sunset camel trek on Sam sand dunes.', highlights: ['Sonar Qila', 'Patwon ki Haveli', 'Desert Camping'] }
    ]
  },
  'kerala': {
    id: 'kerala',
    name: 'Kerala',
    slug: 'kerala',
    capital: 'Thiruvananthapuram',
    population: '35 Million',
    languages: ['Malayalam', 'English', 'Tamil'],
    heritageCount: 8,
    festivalsCount: 12,
    cultureCount: 16,
    topAttraction: 'Backwaters of Alleppey & Padmanabhaswamy Temple',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1600&q=80',
    description: "God’s Own Country, Kerala is a tropical paradise of serene emerald backwaters, spice-laden Western Ghats, ancient Ayurvedic sanctuaries, and timeless classical Kathakali traditions.",
    historyOverview: 'Ancient seafaring gateway of India for spice trade with Phoenicians, Romans, Arabs, and Chinese. Governed by the Chera Dynasty, Zamorins of Calicut, and Kings of Travancore.',
    dynasties: ['Chera Dynasty', 'Ay Dynasty', 'Zamorins of Kozhikode', 'Travancore Royal House', 'Kingdom of Cochin'],
    cuisine: {
      dishes: ['Appam with Ishtu (Coconut milk stew)', 'Karimeen Pollichathu (Pearl spot fish in banana leaf)', 'Avial', 'Malabar Dum Biryani'],
      streetFood: ['Pazham Pori (Crispy ripe banana fritters)', 'Parippu Vada', 'Thattu Dosa with red chutney'],
      sweets: ['Palada Payasam', 'Unniyappam', 'Neyyappam', 'Chakka Pradhaman (Jackfruit pudding)'],
      description: 'Abundant in fresh grated coconut, curry leaves, crushed black pepper, Malabar tamarind (Kudampuli), and indigenous unpolished red matta rice.'
    },
    architectureStyle: 'Kerala Wooden Architecture (Tachushastra) with steep gabled tiled roofs, wood carvings, and interior courtyards (Nalukettu)',
    traditionalDress: 'Kasavu Mundu and Neriyathu with woven gold zari border for women; Mundu with shirt for men',
    folkDance: ['Kathakali', 'Mohiniyattam', 'Theyyam', 'Thiruvathirakali'],
    music: ['Sopana Sangeetham', 'Melam percussion ensembles', 'Vanchi Pattu boat songs'],
    bestTime: 'September to March (Winter & harvest) & June-July for traditional Ayurvedic rejuvenation therapy',
    estimatedDailyBudget: {
      budget: '₹1,400 - ₹2,200 / day',
      midRange: '₹4,000 - ₹7,500 / day',
      luxury: '₹16,000 - ₹40,000+ / day (Private Kettuvallam Houseboats)'
    },
    nearbyPlaces: ['Alleppey Backwaters', 'Munnar Tea Hills', 'Fort Kochi', 'Wayanad', 'Varkala Cliff Beach', 'Thekkady'],
    hiddenGems: ['Gavi Silent Rainforest', 'Aranmula Metal Mirror Guild', 'Athirapally Waterfalls', 'Marari Secret Beach'],
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Highest literacy rate and highest life expectancy among all states in India.',
      'Padmanabhaswamy Temple in Trivandrum houses underground vaults containing over $22 billion in sacred gold and jewels.',
      'Pioneered the world’s oldest martial art, Kalaripayattu, dating back over 2,000 years.'
    ],
    travelTips: [
      'Book authorized DTPC houseboats in Alleppey to guarantee eco-standards and authentic Kerala meals.',
      'Pack cotton breathable clothes and mosquito repellent for backwaters and spice plantations.',
      'Observe traditional temple dress code strictly (dhoti for men, saree/churidar for women).'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-425-4747 (Kerala Tourism)',
      ambulance: '108'
    },
    weather: {
      temp: '24°C - 32°C',
      condition: 'Tropical & Lush',
      aqi: 'Good (38 AQI)',
      bestSeason: 'October to February'
    },
    hotels: [
      { name: 'Kumarakom Lake Resort', type: 'Luxury Backwater Resort', rating: 4.9, pricePerNight: '₹28,000+', location: 'Vembanad Lake, Kumarakom', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Brunton Boatyard - CGH Earth', type: 'Colonial Heritage Hotel', rating: 4.8, pricePerNight: '₹22,000', location: 'Fort Kochi harbour', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Spice Tree Munnar', type: 'Mountain Eco Spa', rating: 4.8, pricePerNight: '₹14,000', location: 'Munnar Hills', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Paragon Restaurant, Calicut / Kochi', cuisineType: 'Malabar Coastal', rating: 4.9, mustTry: 'Malabar Mutton Biryani & Fish Mango Curry', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dhe Puttu, Ernakulam', cuisineType: 'Traditional Puttu Specialties', rating: 4.6, mustTry: 'Erachi Puttu & Chemmeen Puttu', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kashi Art Cafe, Fort Kochi', cuisineType: 'Artistic Cafe & Bakery', rating: 4.7, mustTry: 'Cold brewed coffee & Chocolate Cake', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Fort Kochi Heritage Walk', description: 'Chinese fishing nets, St. Francis Church, Mattancherry Jewish Synagogue and Spice Market.', highlights: ['Chinese Nets', 'Jew Town', 'Kathakali Performance'] },
      { day: 2, title: 'Alleppey Emerald Cruise', description: 'Board an eco-houseboat in Alleppey, glide through palm-shaded canals, savor fresh Karimeen fish.', highlights: ['Vembanad Lake', 'Village canals', 'Sunset cruise'] },
      { day: 3, title: 'Munnar Cloud Tea Hills', description: 'Ascend to Munnar, walk through lush tea gardens, visit Eravikulam National Park to spot Nilgiri Tahr.', highlights: ['Tea Museum', 'Eravikulam', 'Top Station'] }
    ]
  },
  'tamil-nadu': {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    slug: 'tamil-nadu',
    capital: 'Chennai',
    population: '78 Million',
    languages: ['Tamil', 'English'],
    heritageCount: 15,
    festivalsCount: 14,
    cultureCount: 18,
    topAttraction: 'Brihadeeswara Temple & Meenakshi Amman Temple',
    heroImage: 'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=1600&q=80',
    description: 'The ancient cradle of Dravidian civilization, Tamil Nadu is famous for its towering stone temple gopurams, millennia-old Sangam literary heritage, Kanjeevaram silks, and Carnatic music.',
    historyOverview: 'Home of the great Tamil triumvirate: Cholas, Cheras, and Pandyas, later succeeded by Pallavas and Nayakas. Built the Great Living Chola Temples and naval fleets that conquered Southeast Asia.',
    dynasties: ['Chola Dynasty', 'Pandya Dynasty', 'Pallava Dynasty', 'Chera Dynasty', 'Madurai Nayakas'],
    cuisine: {
      dishes: ['Chettinad Pepper Chicken', 'Idli & Sambar with coconut chutney', 'Kothu Parotta', 'Pongal with Vadai'],
      streetFood: ['Sundal on Marina Beach', 'Jigarthanda from Madurai', 'Atho Burmese noodles in Chennai'],
      sweets: ['Tirunelveli Halwa', 'Mysore Pak', 'Adhirasam', 'Poli'],
      description: 'Famous for aromatic curry leaves, black pepper, star anise, kalpasi (black stone flower), and strong filter degree coffee served in brass davarahs.'
    },
    architectureStyle: 'Grand Dravidian Temple Architecture with soaring multi-tiered Gopurams, Pillared Mandapas, and monolithic granite Vimanas',
    traditionalDress: 'Pure Kanchipuram Silk Sarees for women; Silk Veshti with Angavastram for men',
    folkDance: ['Bharatanatyam', 'Karagattam', 'Kavadi Aattam', 'Mayilattam (Peacock dance)'],
    music: ['Carnatic Classical Music', 'Nadaswaram & Thavil temple ensembles', 'Villu Pattu (Bow song)'],
    bestTime: 'November to February (Mild weather and pleasant temple visits)',
    estimatedDailyBudget: {
      budget: '₹1,300 - ₹2,000 / day',
      midRange: '₹3,500 - ₹6,500 / day',
      luxury: '₹14,000 - ₹35,000+ / day'
    },
    nearbyPlaces: ['Chennai', 'Mahabalipuram', 'Madurai', 'Thanjavur', 'Kumbakonam', 'Ooty Hills', 'Kanyakumari', 'Rameshwaram'],
    hiddenGems: ['Dhanushkodi Ghost Town', 'Valparai 40 Hairpins', 'Hogenakkal Falls', 'Chettinad Palaces'],
    gallery: [
      'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Tamil is recognized as the oldest surviving classical language in the world, with literature dating back over 2,500 years.',
      'Brihadeeswara Temple at Thanjavur has an 80-tonne monolithic granite cupola dome hoisted 66 meters high without cranes.',
      'Marina Beach in Chennai is the second-longest natural urban beach in the world (13 km).'
    ],
    travelTips: [
      'Temple sanctums require removing footwear and conservative shoulder-and-knee covering dress.',
      'Always start your morning with piping hot Kumbakonam degree filter coffee in a brass tumbler.',
      'Visit temples early in the morning (6-9 AM) to avoid midday granite floor heat.'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-425-31111 (Tamil Nadu Tourism)',
      ambulance: '108'
    },
    weather: {
      temp: '25°C - 34°C',
      condition: 'Tropical Coastal',
      aqi: 'Moderate (65 AQI)',
      bestSeason: 'November to February'
    },
    hotels: [
      { name: 'Taj Connemara, Chennai', type: 'Colonial Luxury Heritage', rating: 4.8, pricePerNight: '₹16,000', location: 'Binny Road, Chennai', image: 'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=800&q=80' },
      { name: 'Heritage Madurai', type: 'Geoffrey Bawa Architecture Resort', rating: 4.8, pricePerNight: '₹12,000', location: 'Kochadai, Madurai', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Chidambara Vilas, Chettinad', type: '110-Year-Old Chettiar Mansion', rating: 4.9, pricePerNight: '₹11,500', location: 'Kadiapatti, Pudukkottai', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Murugan Idli Shop, Madurai / Chennai', cuisineType: 'Traditional South Indian', rating: 4.8, mustTry: 'Ghee Podi Idli & Jigarthanda', priceRange: '₹', image: 'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Bangala, Karaikudi', cuisineType: 'Authentic 7-Course Chettinad Feast', rating: 4.9, mustTry: 'Chettinad Pepper Crab & Uppu Kari', priceRange: '₹₹₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Saravana Bhavan, Chennai', cuisineType: 'Pure Vegetarian Tamil Meals', rating: 4.6, mustTry: 'Special Meals on Banana Leaf', priceRange: '₹', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Chennai & Shore Temple Mahabalipuram', description: 'Visit San Thome Basilica, drive ECR to Mahabalipuram to explore Shore Temple and Arjuna’s Penance.', highlights: ['Shore Temple', 'Pancha Rathas', 'Marina Beach'] },
      { day: 2, title: 'Chola Imperial Heartland Thanjavur', description: 'Marvel at Brihadeeswara Temple, visit royal bronze foundries in Swamimalai.', highlights: ['Big Temple', 'Maratha Palace', 'Bronze Casting'] },
      { day: 3, title: 'Divine Temple City Madurai', description: 'Experience the morning darshan at Meenakshi Amman Temple and evening oil lamp ceremonies.', highlights: ['Meenakshi Temple', 'Thirumalai Nayakkar', 'Jigarthanda'] }
    ]
  },
  'uttar-pradesh': {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    capital: 'Lucknow',
    population: '240 Million',
    languages: ['Hindi', 'Urdu', 'Awadhi', 'Bhojpuri', 'Braj Bhasha'],
    heritageCount: 16,
    festivalsCount: 15,
    cultureCount: 17,
    topAttraction: 'Taj Mahal & Varanasi Ghats',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    description: 'The spiritual heartland of India, Uttar Pradesh is blessed with the holy rivers Ganga and Yamuna, the sacred cities of Varanasi, Ayodhya, and Mathura, and the sublime architectural glory of the Mughal Empire in Agra and Awadhi Nawabs in Lucknow.',
    historyOverview: 'Center of Vedic philosophy, epic events of the Ramayana and Mahabharata, Buddha’s first sermon at Sarnath, and the capital of the Mughal Empire under Akbar and Shah Jahan.',
    dynasties: ['Mughal Empire', 'Nawabs of Awadh', 'Gupta Empire', 'Mauryan Empire', 'Harsha Vardhana Empire'],
    cuisine: {
      dishes: ['Awadhi Dum Biryani', 'Galouti & Kakori Kebabs', 'Banarasi Dum Aloo', 'Bedmi Puri with Aloo Sabzi'],
      streetFood: ['Banarasi Tamatar Chaat', 'Chaat at Lucknow Chowk', 'Lassi in clay kulhads', 'Makhan Malai (Nimish)'],
      sweets: ['Agra Petha', 'Mathura Peda', 'Malpua with Rabri', 'Banarasi Paan'],
      description: 'Refined royal Awadhi culinary traditions featuring slow cooking (Dum Pukht), saffron infusions, rosewater essences, alongside vibrant street chaats.'
    },
    architectureStyle: 'Mughal Marble & Sandstone (Taj Mahal), Indo-Islamic Awadhi Baroque (Bara Imambara), Ancient River Ghats and Nagara Temple spires',
    traditionalDress: 'Chikankari Kurta-Pyjamas for men; Embroidered Salwar Kameez and Banarasi Silk Sarees for women',
    folkDance: ['Kathak (Lucknow and Banaras Gharana)', 'Raslila', 'Charkula (108 oil lamps balanced on head)', 'Nautanki'],
    music: ['Banaras Gharana Shehnai (Bismillah Khan)', 'Thumri, Dadra, and Kajri folk singing', 'Qawwali at Dargahs'],
    bestTime: 'October to March (Pleasant winter sunshine)',
    estimatedDailyBudget: {
      budget: '₹1,200 - ₹2,000 / day',
      midRange: '₹3,500 - ₹7,000 / day',
      luxury: '₹15,000 - ₹45,000+ / day (Taj View Luxury Stays)'
    },
    nearbyPlaces: ['Agra', 'Varanasi', 'Lucknow', 'Ayodhya', 'Mathura & Vrindavan', 'Fatehpur Sikri', 'Sarnath', 'Prayagraj'],
    hiddenGems: ['Bateshwar 101 Shiva Temples', 'Chunar Fort on the Ganges', 'Dudhwa Tiger Reserve', 'Sravasti Buddhist Caves'],
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'If Uttar Pradesh were an independent country, it would be the fifth most populous nation in the world.',
      'Varanasi (Kashi) is officially recognized by historians as the oldest continuously inhabited city on Earth (over 3,000 years).',
      'Agra houses three UNESCO World Heritage Sites within 40 km: Taj Mahal, Agra Fort, and Fatehpur Sikri.'
    ],
    travelTips: [
      'Book sunrise tickets online in advance for the Taj Mahal to avoid long afternoon queues.',
      'Experience the morning Subah-e-Banaras boat ride along the Ganges ghats between 5:30 and 7:00 AM.',
      'Dress modestly when visiting historic mosques and sacred temple shrines.'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-180-5145 (UP Tourism Helpline)',
      ambulance: '108'
    },
    weather: {
      temp: '14°C - 28°C (Winter: 6°C - 22°C)',
      condition: 'Clear & Sunny in Winter',
      aqi: 'Moderate to High in Winter',
      bestSeason: 'October to March'
    },
    hotels: [
      { name: 'The Oberoi Amarvilas, Agra', type: 'Ultra Luxury Taj View', rating: 5.0, pricePerNight: '₹55,000+', location: '600m from Taj Mahal, Agra', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
      { name: 'BrijRama Palace, Varanasi', type: 'Heritage Palace on Ganges Ghats', rating: 4.9, pricePerNight: '₹28,000', location: 'Darbhanga Ghat, Varanasi', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
      { name: 'Taj Mahal Hotel, Lucknow', type: 'Nawabi Luxury', rating: 4.8, pricePerNight: '₹14,000', location: 'Gomti Nagar, Lucknow', image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Tunday Kababi, Lucknow', cuisineType: 'Original Awadhi Kebabs', rating: 4.9, mustTry: 'Melt-in-mouth Galouti Kebab with Sheermal', priceRange: '₹', image: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kashi Chaat Bhandar, Varanasi', cuisineType: 'Banarasi Street Chaat', rating: 4.8, mustTry: 'Tamatar Chaat & Palak Patta Chaat', priceRange: '₹', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
      { name: 'Pinch of Spice, Agra', cuisineType: 'North Indian Mughlai', rating: 4.7, mustTry: 'Murg Boti Masala & Dal Makhani', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Agra Imperial Splendor', description: 'Sunrise at Taj Mahal, explore Agra Fort, afternoon excursion to red sandstone city of Fatehpur Sikri.', highlights: ['Taj Mahal', 'Agra Fort', 'Buland Darwaza'] },
      { day: 2, title: 'Nawabi Lucknow Culture', description: 'Bara Imambara labyrinth (Bhulbhulaiya), Chota Imambara, shopping for fine Chikankari in Chowk.', highlights: ['Bara Imambara', 'Rumi Darwaza', 'Tunday Kebabs'] },
      { day: 3, title: 'Sacred Kashi & Sarnath', description: 'Dawn boat ride on the holy Ganges, Kashi Vishwanath temple corridor, and evening Ganga Aarti.', highlights: ['Ganga Aarti', 'Sarnath Stupa', 'Dashashwamedh Ghat'] }
    ]
  },
  'maharashtra': {
    id: 'maharashtra',
    name: 'Maharashtra',
    slug: 'maharashtra',
    capital: 'Mumbai (Financial Capital of India)',
    population: '126 Million',
    languages: ['Marathi', 'Hindi', 'Konkani', 'English'],
    heritageCount: 14,
    festivalsCount: 15,
    cultureCount: 16,
    topAttraction: 'Ajanta & Ellora Caves and Mumbai Heritage Precinct',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
    description: 'The powerhouse of India, Maharashtra stretches from the Arabian Sea coastline of Konkan through the volcanic basalt cliffs of the Sahyadri mountains to the Deccan plateau, crowned by over 350 hill forts built by Chhatrapati Shivaji Maharaj.',
    historyOverview: 'Birthplace of the Maratha Empire founded by Chhatrapati Shivaji Maharaj in the 17th century. Preserves world-renowned rock-cut cave art created under the Satavahana, Vakataka, and Rashtrakuta dynasties.',
    dynasties: ['Maratha Empire (Shivaji Maharaj)', 'Rashtrakuta Dynasty', 'Satavahana Dynasty', 'Vakataka Dynasty', 'Yadavas of Devagiri'],
    cuisine: {
      dishes: ['Puran Poli with ghee', 'Misal Pav (Spicy sprout curry with farsan and lemon)', 'Kolhapuri Tambda-Pandhra Rassa', 'Bharli Vangi (Stuffed brinjals)'],
      streetFood: ['Vada Pav (The Mumbai Burger)', 'Pav Bhaji from Sardar Pav Bhaji', 'Kanda Poha', 'Sev Puri / Bhel Puri'],
      sweets: ['Ukadiche Modak', 'Amrakhand (Mango shrikhand)', 'Alphonso Mango (Hapus)', 'Chikki from Lonavala'],
      description: 'Zesty, spicy, and versatile: utilizes roasted sesame, coconut, peanuts, goda masala spices, and kokum for sourness.'
    },
    architectureStyle: 'Ancient Rock-Cut Basalt Caves (Kailasa Temple), Maratha Hill Fortresses (Raigad, Sinhagad), and Victorian Gothic Revival (CST, Gateway of India)',
    traditionalDress: 'Nauvari (Nine-yard) Paithani silk saree with pearl Nath for women; Kurta-Dhoti with saffron Pheta turban for men',
    folkDance: ['Lavani', 'Koli dance (Fisherfolk rhythm)', 'Gondhal', 'Lezim'],
    music: ['Natya Sangeet musical theatre', 'Abhangs of Sant Dnyaneshwar & Tukaram', 'Dhol-Tasha troop beats'],
    bestTime: 'October to March (Winter) & July to September for lush green monsoon treks in Sahyadri hills',
    estimatedDailyBudget: {
      budget: '₹1,500 - ₹2,500 / day',
      midRange: '₹4,500 - ₹8,500 / day',
      luxury: '₹18,000 - ₹50,000+ / day'
    },
    nearbyPlaces: ['Mumbai', 'Pune', 'Ajanta & Ellora (Chhatrapati Sambhajinagar)', 'Mahabaleshwar', 'Lonavala', 'Nashik Wine Valley', 'Kolhapur'],
    hiddenGems: ['Lonar Meteorite Crater Lake', 'Kaas Plateau (Valley of Flowers)', 'Murud Janjira Sea Fort', 'Daulatabad Dark Maze'],
    gallery: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Cave 16 at Ellora (Kailasa Temple) is the largest single monolithic rock excavation in the world, carved top-down from a single basalt cliff.',
      'Mumbai’s Dabbawalas deliver over 200,000 lunchboxes daily with Six Sigma precision (1 error in 16 million transactions).',
      'Lonar Lake in Buldhana is the world’s only hyper-velocity impact crater formed in basaltic rock.'
    ],
    travelTips: [
      'Ride the historic Mumbai local train or black-and-yellow taxi along Marine Drive (Queen’s Necklace) at night.',
      'Visit Ajanta caves on weekdays to avoid weekend crowds (closed Mondays; Ellora closed Tuesdays).',
      'Sample authentic Alphonso mangoes between April and June directly from Ratnagiri and Devgad farms.'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-229-930 (MTDC Maharashtra Tourism)',
      ambulance: '108'
    },
    weather: {
      temp: '22°C - 33°C (Mumbai coastal: humid)',
      condition: 'Sunny Coastal & Plateau',
      aqi: 'Moderate (75 AQI)',
      bestSeason: 'October to March'
    },
    hotels: [
      { name: 'The Taj Mahal Palace, Mumbai', type: 'Iconic Grand Luxury Heritage', rating: 5.0, pricePerNight: '₹35,000+', location: 'Apollo Bunder, Gateway of India', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sula Vineyards - The Source', type: 'Wine Resort', rating: 4.8, pricePerNight: '₹14,000', location: 'Nashik Valley', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
      { name: 'Vivanta Aurangabad', type: 'Palatial Hotel', rating: 4.7, pricePerNight: '₹8,500', location: 'Chhatrapati Sambhajinagar', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Britannia & Co. Restaurant, Mumbai', cuisineType: 'Parsi Heritage Diner', rating: 4.8, mustTry: 'Berry Pulao & Caramel Custard', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sardar Pav Bhaji, Tardeo', cuisineType: 'Famous Mumbai Street Pav Bhaji', rating: 4.7, mustTry: 'Extra Butter Cheese Pav Bhaji', priceRange: '₹', image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80' },
      { name: 'Shabree, FC Road, Pune', cuisineType: 'Traditional Maharashtrian Thali', rating: 4.8, mustTry: 'Maharashtrian Thali with Pithla Bhakri', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Mumbai Colonial & Art Deco', description: 'Gateway of India, heritage walk through Fort and Kala Ghoda, sunset at Marine Drive.', highlights: ['Gateway of India', 'CSMT Station', 'Marine Drive'] },
      { day: 2, title: 'Ajanta Cave Murals', description: 'Travel to Sambhajinagar, spend full day exploring Buddhist murals of Ajanta Caves.', highlights: ['Ajanta Cave 1', 'Padmapani', 'Waghur Canyon'] },
      { day: 3, title: 'Ellora & Kailasa Monolith', description: 'Behold monolithic Kailasa Temple (Cave 16) and climb Daulatabad Fort.', highlights: ['Kailasa Temple', 'Daulatabad Fort', 'Bibi Ka Maqbara'] }
    ]
  },
  'karnataka': {
    id: 'karnataka',
    name: 'Karnataka',
    slug: 'karnataka',
    capital: 'Bengaluru (The Silicon Valley of India)',
    population: '68 Million',
    languages: ['Kannada', 'Tulu', 'Kodava', 'Konkani', 'English'],
    heritageCount: 14,
    festivalsCount: 13,
    cultureCount: 15,
    topAttraction: 'Hampi Vijayanagara & Mysore Palace',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    description: 'One State, Many Worlds. Karnataka is home to the colossal stone ruins of Hampi, the intricate Hoysala soapstone temples of Belur and Halebidu, the golden coffee hills of Coorg and Chikmagalur, and the tech hub of Bengaluru.',
    historyOverview: 'Ruled by mighty empires: Badami Chalukyas, Rashtrakutas, Hoysalas, Vijayanagara monarchs, and the Wadiyars of Mysore who patronized literature, classical Carnatic music, and stone arts.',
    dynasties: ['Vijayanagara Empire', 'Hoysala Dynasty', 'Badami Chalukya Dynasty', 'Rashtrakuta Dynasty', 'Wadiyars of Mysore'],
    cuisine: {
      dishes: ['Bisi Bele Bath', 'Mysore Masala Dosa with red chutney', 'Jolada Rotti with Yennegayi', 'Coorg Pandi Curry'],
      streetFood: ['Maddur Vada', 'Mangalore Buns', 'Benne Dosa from Davanagere'],
      sweets: ['Mysore Pak (invented in Mysore royal palace)', 'Dharwad Peda', 'Chiroti with badam milk', 'Karadantu'],
      description: 'Features a spectrum from coastal coconut seafood in Mangalore to spicy Kodava pork curries and northern Karnataka sorghum flatbreads.'
    },
    architectureStyle: 'Hoysala Stellate Soapstone Temples, Badami Chalukyan Cave Temples, Vijayanagara Stone Carvings, and Indo-Saracenic Mysore Palace',
    traditionalDress: 'Mysore Silk Sarees, Ilkal sarees with red Chikki paras border; Lungi/Pancha with silk Angavastram for men',
    folkDance: ['Yakshagana', 'Dollu Kunitha (Drum dance)', 'Veeragase (Fierce Shiva warrior dance)', 'Kamsale'],
    music: ['Carnatic Classical Music (Purandara Dasa is father of Carnatic music)', 'Vachanas of Basavanna'],
    bestTime: 'October to March',
    estimatedDailyBudget: {
      budget: '₹1,400 - ₹2,200 / day',
      midRange: '₹4,000 - ₹7,500 / day',
      luxury: '₹16,000 - ₹45,000+ / day'
    },
    nearbyPlaces: ['Bengaluru', 'Hampi', 'Mysuru', 'Belur & Halebidu', 'Badami & Pattadakal', 'Coorg Coffee Hills', 'Gokarna Beaches'],
    hiddenGems: ['Yana Karst Monoliths', 'Agumbe King Cobra Rainforest', 'St. Mary’s Basalt Islands', 'Halebidu Rural Artisan Guilds'],
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Hampi was the second largest city in the medieval world after Beijing around 1500 CE.',
      'Shravanabelagola houses the 57-foot Gommateshwara statue, the largest freestanding monolithic statue in the world.',
      'Produces over 70% of India’s coffee, first planted on Baba Budan hills in the 17th century.'
    ],
    travelTips: [
      'Rent a bicycle or moped to explore the vast 25-square-kilometer boulder landscape of Hampi.',
      'Witness the Mysore Palace illuminated with nearly 100,000 lights on Sunday evenings (7-8 PM).',
      'Try authentic filter coffee and Benne Dosa at historic iconic tiffin halls in Bengaluru.'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-425-4747 (KSTDC)',
      ambulance: '108'
    },
    weather: {
      temp: '20°C - 30°C',
      condition: 'Pleasant & Tropical Plateau',
      aqi: 'Good (45 AQI)',
      bestSeason: 'October to March'
    },
    hotels: [
      { name: 'Evolve Back, Kamalapura Palace, Hampi', type: 'Vijayanagara Palace Architecture', rating: 5.0, pricePerNight: '₹32,000+', location: 'Kamalapura, Hampi', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Tamara Coorg', type: 'Luxury Coffee Plantation Retreat', rating: 4.9, pricePerNight: '₹24,000', location: 'Kabbinakad Estate, Coorg', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
      { name: 'Royal Orchid Metropole, Mysore', type: 'Heritage Hotel', rating: 4.7, pricePerNight: '₹7,500', location: 'J.L.B Road, Mysore', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Vidyarthi Bhavan, Gandhi Bazaar, Bengaluru', cuisineType: 'Legendary Breakfast Heritage', rating: 4.8, mustTry: 'Crispy Benne Masala Dosa & Filter Coffee', priceRange: '₹', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Mylari Hotel, Mysore', cuisineType: 'Original Soft Butter Dosa', rating: 4.9, mustTry: 'Mylari Special Dosa with butter', priceRange: '₹', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' },
      { name: 'Giri Manja’s, Mangalore', cuisineType: 'Authentic Coastal Seafood', rating: 4.9, mustTry: 'Anjal Fish Fry & Crab Ghee Roast', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Mysore Royal Heritage', description: 'Explore Mysore Palace, climb Chamundi Hill, visit Devaraja spice and flower market.', highlights: ['Mysore Palace', 'Chamundi Hill', 'Devaraja Market'] },
      { day: 2, title: 'Hoysala Star Temples Belur & Halebidu', description: 'Marvel at microscopic soapstone lace carvings in Chennakeshava and Hoysaleswara temples.', highlights: ['Belur Dancers', 'Halebidu Friezes', 'Shravanabelagola'] },
      { day: 3, title: 'Lost Empire of Hampi', description: 'Sunrise at Matanga Hill, Vittala Stone Chariot, musical pillars, sunset at Tungabhadra river.', highlights: ['Vittala Temple', 'Stone Chariot', 'Virupaksha'] }
    ]
  },
  'gujarat': {
    id: 'gujarat',
    name: 'Gujarat',
    slug: 'gujarat',
    capital: 'Gandhinagar (Commercial Hub: Ahmedabad)',
    population: '72 Million',
    languages: ['Gujarati', 'Hindi', 'Kutchi', 'English'],
    heritageCount: 12,
    festivalsCount: 14,
    cultureCount: 16,
    topAttraction: 'Statue of Unity, Sun Temple Modhera & Rani ki Vav',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    description: 'Jewel of Western India, Gujarat is the birthplace of Mahatma Gandhi and Sardar Patel. Boasts the longest coastline in India (1,600 km), the world’s only wild habitat of Asiatic lions in Gir, the white salt desert of Kutch, and UNESCO World Heritage City Ahmedabad.',
    historyOverview: 'Ancient Indus Valley port at Lothal and Harappan metropolis Dholavira; medieval Solanki golden age that built Rani ki Vav and Modhera; and the epicenter of India’s freedom movement.',
    dynasties: ['Indus Valley Civilization (Dholavira/Lothal)', 'Maitraka Dynasty', 'Solanki (Chaulukya) Dynasty', 'Gujarat Sultanate', 'Maratha Gaekwads of Baroda'],
    cuisine: {
      dishes: ['Gujarati Thali with sweet and savory balance', 'Undhiyu with Puri and Jalebi', 'Sev Tameta nu Shaak', 'Khichdi Kadhi'],
      streetFood: ['Khaman Dhokla', 'Khandvi', 'Fafda-Jalebi', 'Kutchi Dabeli'],
      sweets: ['Shrikhand', 'Mohanthal', 'Ghari from Surat', 'Basundi'],
      description: 'Predominantly vegetarian, famed for subtly balancing sweet, salty, and spicy notes in every curry, accompanied by crunchy chutneys and fried appetizers.'
    },
    architectureStyle: 'Maru-Gurjara Temple Architecture, Subterranean Stepwells (Vavs), Pol Wooden Havelis of Ahmedabad, and Harappan Stone Masonry',
    traditionalDress: 'Chaniya Choli with mirrorwork for women; Kedia jacket and Dhoti/Chorno with turban for men',
    folkDance: ['Garba (UNESCO Intangible Heritage)', 'Dandiya Raas', 'Tippani dance', 'Padhar dance'],
    music: ['Sugam Sangeet', 'Dayro folk storytelling', 'Jodiya Pawa double flute', 'Surando'],
    bestTime: 'October to March (Navratri in Oct, Rann Utsav in Nov-Feb, Kite Festival in Jan)',
    estimatedDailyBudget: {
      budget: '₹1,300 - ₹2,100 / day',
      midRange: '₹3,500 - ₹6,500 / day',
      luxury: '₹15,000 - ₹38,000+ / day'
    },
    nearbyPlaces: ['Ahmedabad', 'Rann of Kutch', 'Gir National Park', 'Dwarka & Somnath', 'Vadodara (Laxmi Vilas Palace)', 'Statue of Unity'],
    hiddenGems: ['Dholavira Harappan City', 'Patan Double Ikat Weavers', 'Champaner-Pavagadh', 'Flamingo City in Kutch'],
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397985-35c918342ca2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Gir National Park is the only place on planet Earth where Asiatic Lions (Panthera leo persica) survive in the wild.',
      'The Statue of Unity in Kevadia stands 182 meters tall—the tallest statue in the world, twice the height of the Statue of Liberty.',
      'Lothal features the world’s earliest known tidal dockyard, engineered by Harappans in 2400 BCE.'
    ],
    travelTips: [
      'Apply online in advance for permits to enter the White Rann of Kutch near the border.',
      'Do not miss the nocturnal Garba dance in Vadodara or Ahmedabad during Navratri.',
      'Gujarat is a dry state; international travelers can obtain alcohol permits at authorized government counters.'
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1800-203-1111 (Gujarat Tourism)',
      ambulance: '108'
    },
    weather: {
      temp: '18°C - 31°C (Winter pleasant and dry)',
      condition: 'Sunny & Dry',
      aqi: 'Moderate (70 AQI)',
      bestSeason: 'October to March'
    },
    hotels: [
      { name: 'House of MG, Ahmedabad', type: 'UNESCO Heritage Haveli', rating: 4.8, pricePerNight: '₹8,500', location: 'Opposite Sidi Saiyyed Mosque', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rann Riders Eco Resort, Dasada', type: 'Safari Lodge Little Rann', rating: 4.8, pricePerNight: '₹12,000', location: 'Dasada, Little Rann of Kutch', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Gateway Hotel Gir Forest', type: 'Wilderness Sanctuary Resort', rating: 4.7, pricePerNight: '₹15,000', location: 'Sasan Gir', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'Agashiye - The House of MG, Ahmedabad', cuisineType: 'Rooftop Gujarati Thali Feast', rating: 4.9, mustTry: 'Signature Gujarati Thali on bronze plate', priceRange: '₹₹₹', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Das Khaman, Ahmedabad', cuisineType: 'Iconic Steamed Savories', rating: 4.8, mustTry: 'Vati Dal Khaman & Sev Khamani', priceRange: '₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: 'Laxmi Ganthiya Rath, Rajkot', cuisineType: 'Crisp Ganthiya & Sambharo', rating: 4.7, mustTry: 'Vanela Ganthiya with fried papaya chutney', priceRange: '₹', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Ahmedabad Heritage Pols', description: 'Early morning walking tour through historic pols, Sabarmati Ashram, Sidi Saiyyed Jali.', highlights: ['Sabarmati Ashram', 'Sidi Saiyyed Mosque', 'Adalaj Stepwell'] },
      { day: 2, title: 'Sun Temple & Queen’s Stepwell', description: 'Drive north to marvel at Modhera Sun Temple and UNESCO Rani ki Vav at Patan.', highlights: ['Modhera Sun Temple', 'Rani ki Vav', 'Patan Patola Guild'] },
      { day: 3, title: 'White Desert of Kutch', description: 'Journey to Dhordo, full moon camel walk across the shimmering white salt desert.', highlights: ['White Rann', 'Kalo Dungar', 'Nirona Rogan Art'] }
    ]
  },
  'ladakh': {
    id: 'ladakh',
    name: 'Ladakh',
    slug: 'ladakh',
    capital: 'Leh & Kargil',
    population: '300,000',
    languages: ['Ladakhi (Bhoti)', 'Balti', 'Tibetan', 'Hindi', 'English'],
    heritageCount: 10,
    festivalsCount: 11,
    cultureCount: 12,
    topAttraction: 'Pangong Tso Lake, Nubra Valley & Hemis Gompa',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    description: 'The Land of High Passes, Ladakh is a high-altitude Himalayan moonscape of stark snow-crowned granite ranges, ancient cliffside Buddhist monasteries, turquoise glacier lakes, and cold desert double-humped camel caravans.',
    historyOverview: 'Independent Buddhist kingdom for over 900 years, established by King Nyima Gon in 842 CE. Vital caravan crossroads on the ancient Silk Route between Central Asia, Tibet, and Kashmir.',
    dynasties: ['Maryul Dynasty (King Nyima Gon)', 'Namgyal Dynasty (Sengge Namgyal)', 'Dogra Annexation under Zorawar Singh'],
    cuisine: {
      dishes: ['Thukpa (Hearty Tibetan noodle soup)', 'Skyu (Traditional Ladakhi pasta vegetable stew)', 'Chhurpi (Hardened yak cheese)', 'Steamed Momos'],
      streetFood: ['Tingmo (Steamed flower buns)', 'Khambir (Traditional sourdough round bread with butter)'],
      sweets: ['Khabsey (Festive fried cookies)', 'Dried organic apricot stew', 'Apricot jam'],
      description: 'Nourishing, warming food adapted to high-altitude cold: features roasted barley flour (Tsampa), yak butter tea, and organically harvested sweet apricots.'
    },
    architectureStyle: 'Tibetan Himalayan Buddhist Fortified Monasteries (Gompas) built of sun-dried mud bricks, heavy timber beams, and inward-sloping walls',
    traditionalDress: 'Goncha (Heavy woolen robe tied with sash), Tibetan felt boots, and Peruk turquoise-encrusted headdress for women',
    folkDance: ['Chham (Monastery sacred masked dances)', 'Jabro (Nomadic Changpa dance)', 'Spao dance (Heroic sword dance)'],
    music: ['Dungchen horns', 'Gyaling oboes', 'Daman drums', 'Surna pipes'],
    bestTime: 'May to September (Warm summer months with roads open) & January/February for the frozen Zanskar River Chadar Trek',
    estimatedDailyBudget: {
      budget: '₹2,000 - ₹3,000 / day',
      midRange: '₹5,500 - ₹9,500 / day',
      luxury: '₹18,000 - ₹45,000+ / day (Luxury Glamping Tents)'
    },
    nearbyPlaces: ['Leh Old Town', 'Nubra Valley', 'Pangong Tso Lake', 'Tso Moriri', 'Zanskar Valley', 'Khardung La Pass', 'Aryan Valley'],
    hiddenGems: ['Turtuk (Balti Village on LOC)', 'Phugtal Cave Gompa', 'Uleytokpo Rock Carvings', 'Hemis Shukpachan'],
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      'Khardung La and Umling La passes in Ladakh are among the highest motorable roads in the world, with Umling La reaching 19,024 feet.',
      'Pangong Tso is the world’s highest saltwater lake at 4,350 meters, changing color from light blue to deep emerald green during the day.',
      'The Magnetic Hill on the Leh-Kargil highway creates an optical illusion where stationary vehicles appear to roll uphill.'
    ],
    travelTips: [
      'Mandatory: Rest completely for the first 24-48 hours in Leh to acclimatize to high altitude (3,500m) and prevent AMS.',
      'Drink 3-4 liters of water daily, avoid alcohol initially, and carry Diamox if advised by a doctor.',
      'Obtain Protected Area Permits (PAP) for Nubra, Pangong, and Tso Moriri in Leh.'
    ],
    emergencyNumbers: {
      police: '100 / 112 (Leh Police)',
      touristHelpline: '01982-252297 (Ladakh Tourism Helpline)',
      ambulance: '108 / SNM Hospital Leh'
    },
    weather: {
      temp: 'Summer: 12°C - 25°C | Winter: -15°C to -25°C',
      condition: 'Dry Cold Alpine Desert',
      aqi: 'Pristine (15 AQI)',
      bestSeason: 'June to September'
    },
    hotels: [
      { name: 'The Grand Dragon Ladakh, Leh', type: 'Solar Heated Luxury', rating: 4.9, pricePerNight: '₹22,000+', location: 'Old Road, Sheynam, Leh', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
      { name: 'The Ultimate Travelling Camp (TUTC), Chamba Camp Thiksey', type: 'Super Luxury Glamping', rating: 5.0, pricePerNight: '₹65,000+', location: 'Thiksey, Ladakh', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Desert Himalayas Resort, Nubra', type: 'Luxury Valley Glamping', rating: 4.7, pricePerNight: '₹9,500', location: 'Diskit, Nubra Valley', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: 'The Tibetan Kitchen, Leh', cuisineType: 'Authentic Himalayan & Tibetan', rating: 4.8, mustTry: 'Gyako hot pot & Shaphalay', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
      { name: 'Bon Appetit, Leh', cuisineType: 'Continental & Ladakhi Organic', rating: 4.7, mustTry: 'Apricot crumble & wood-fired pizza', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Alchi Kitchen, Alchi', cuisineType: 'Traditional Ladakhi Artisan Eatery', rating: 4.9, mustTry: 'Fresh Khambir with walnut dip & Churphey', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: 'Acclimatization & Leh Palace', description: 'Rest in Leh morning; gentle evening walk to Shanti Stupa and Leh Palace for sunset.', highlights: ['Shanti Stupa', 'Leh Palace', 'Leh Market'] },
      { day: 2, title: 'Khardung La to Nubra Valley', description: 'Cross Khardung La pass (17,582 ft) down to Hunder sand dunes for Bactrian camel rides.', highlights: ['Khardung La', 'Diskit Monastery', 'Hunder Sand Dunes'] },
      { day: 3, title: 'Pangong Tso Lake Horizon', description: 'Drive via scenic Shyok river route to Pangong Lake; watch waters change from turquoise to cobalt.', highlights: ['Pangong Tso', 'Lukung', 'Chang La Pass'] }
    ]
  },
  'jammu-kashmir': {
      "id": "jammu-kashmir",
      "name": "Jammu & Kashmir",
      "slug": "jammu-kashmir",
      "capital": "Srinagar (Summer) / Jammu (Winter)",
      "population": "13.6 Million",
      "languages": [
          "Kashmiri",
          "Dogri",
          "Urdu",
          "Hindi",
          "English"
      ],
      "heritageCount": 10,
      "festivalsCount": 11,
      "cultureCount": 14,
      "topAttraction": "Dal Lake & Shalimar Mughal Gardens",
      "heroImage": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80",
      "description": "Revered across centuries as Paradise on Earth, Jammu & Kashmir is framed by snow-clad Pir Panjal ranges, shimmering Dal Lake shikaras, cedar forests, and saffron valleys.",
      "historyOverview": "Ancient seat of Shaivism under Abhinavagupta, Buddhist councils under Kanishka, Lalitaditya Muktapida of the Karkota dynasty who built Martand Sun Temple, and exquisite Persian garden artistry brought by Mughal Emperors.",
      "dynasties": [
          "Karkota Dynasty",
          "Utpala Dynasty",
          "Lohara Dynasty",
          "Shah Mir Dynasty",
          "Mughal Empire",
          "Dogra Dynasty"
      ],
      "cuisine": {
          "dishes": [
              "Rogan Josh with Kashmiri red chillies",
              "Gushtaba (velvety meatballs in yogurt)",
              "Rista",
              "Dum Aloo in fennel gravy"
          ],
          "streetFood": [
              "Tujji (Charcoal barbecued mutton skewers)",
              "Nadir Monji (Crispy lotus stem fritters)",
              "Lavasa bread"
          ],
          "sweets": [
              "Shufta with dry fruits and saffron honey",
              "Modur Pulao",
              "Phirni in clay bowls"
          ],
          "description": "The legendary 36-course ceremonial feast Wazwan cooked over dried apple wood, infused with saffron, shallots (pran), and dry ginger (sonth)."
      },
      "architectureStyle": "Kashmiri Wooden Pagoda and Pinjra-Kari latticework, Terraced Mughal Pleasure Gardens, Stone Sun Temples (Martand)",
      "traditionalDress": "Embroidered Kashmiri Pheran with Tilla needlework, Taranga headdress for women; Karakul cap for men",
      "folkDance": [
          "Rouf (Graceful festive line dance)",
          "Bhand Pather (Satirical folk theatre)",
          "Hafiza dance",
          "Kud dance of Jammu"
      ],
      "music": [
          "Sufiyana Kalam",
          "Chakri folk songs",
          "Instruments: Santoor, Saaz-e-Kashmir, Tumbaknari"
      ],
      "bestTime": "April to October (Floral blooms and mild weather) or Dec to Feb for snow skiing in Gulmarg",
      "estimatedDailyBudget": {
          "budget": "₹2,000 - ₹3,000 / day",
          "midRange": "₹5,500 - ₹9,500 / day",
          "luxury": "₹20,000 - ₹60,000+ / day"
      },
      "nearbyPlaces": [
          "Srinagar",
          "Gulmarg",
          "Pahalgam",
          "Sonamarg",
          "Jammu",
          "Patnitop",
          "Vaishno Devi"
      ],
      "hiddenGems": [
          "Gurez Valley border beauty",
          "Doodhpathri milk meadows",
          "Lolab Valley",
          "Aru Valley"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Pampore in Kashmir is one of the only three places on Earth where world-class grade-one saffron (Kesar) is cultivated.",
          "Dal Lake features the world’s only floating vegetable and flower market operating continuously at sunrise.",
          "Srinagar was designated as a UNESCO Creative City for Crafts and Folk Art."
      ],
      "travelTips": [
          "Experience at least one overnight stay in a handcrafted cedar-wood luxury houseboat on Nigeen or Dal Lake.",
          "Sip hot Kahwa with crushed green cardamom, cinnamon, saffron, and sliced almonds throughout your journey.",
          "Purchase GI-tagged authentic Pashmina shawls and Walnut wood carvings with official QR authentication codes."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-103-1070 (J&K Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "10°C - 24°C (Winter: -5°C - 8°C)",
          "condition": "Alpine & Valley Breeze",
          "aqi": "Pristine (22 AQI)",
          "bestSeason": "Spring & Autumn"
      },
      "hotels": [
          {
              "name": "The Lalit Grand Palace, Srinagar",
              "type": "Royal Dogra Summer Palace",
              "rating": 4.9,
              "pricePerNight": "₹35,000",
              "location": "Gupkar Road, Srinagar",
              "image": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sukoon Luxury Houseboat",
              "type": "Eco-Luxury Houseboat",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Dal Lake Gate 1, Srinagar",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Khyber Himalayan Resort, Gulmarg",
              "type": "Mountain Chalet Luxury",
              "rating": 4.8,
              "pricePerNight": "₹38,000",
              "location": "Gulmarg Gondola Base",
              "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Ahdoos Restaurant, Srinagar",
              "cuisineType": "Authentic Traditional Wazwan",
              "rating": 4.8,
              "mustTry": "Rogan Josh & Gushtaba",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Mughal Darbar, Residency Road",
              "cuisineType": "Royal Kashmiri Feasts",
              "rating": 4.7,
              "mustTry": "Tarami Wazwan & Kahwa",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Chai Jaai Tea Room",
              "cuisineType": "Artisan Tea & Bakery",
              "rating": 4.6,
              "mustTry": "Pink Noon Chai & Sheermal",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Dal Lake & Mughal Imperial Terraces",
              "description": "Sunrise shikara ride, explore Shalimar and Nishat Bagh, stroll through Old Srinagar craft quarters.",
              "highlights": [
                  "Dal Lake",
                  "Shalimar Bagh",
                  "Pashmina Looms"
              ]
          },
          {
              "day": 2,
              "title": "Gulmarg Alpine Meadow & Gondola",
              "description": "Take the highest cable car in Asia to Apharwat Peak at 13,780 ft, stroll pine trails.",
              "highlights": [
                  "Gulmarg Gondola",
                  "Apharwat Peak",
                  "St. Mary Church"
              ]
          },
          {
              "day": 3,
              "title": "Pahalgam Valley of Shepherds",
              "description": "Drive along saffron fields of Pampore to Pahalgam, walk along the roaring Lidder River and Betaab Valley.",
              "highlights": [
                  "Betaab Valley",
                  "Aru Valley",
                  "Lidder River"
              ]
          }
      ]
  },
  'himachal-pradesh': {
      "id": "himachal-pradesh",
      "name": "Himachal Pradesh",
      "slug": "himachal-pradesh",
      "capital": "Shimla (Summer) / Dharamshala (Winter)",
      "population": "7.5 Million",
      "languages": [
          "Hindi",
          "Pahari",
          "Kangri",
          "Mandeali",
          "Kullvi"
      ],
      "heritageCount": 9,
      "festivalsCount": 12,
      "cultureCount": 13,
      "topAttraction": "Great Himalayan National Park & Spiti Valley",
      "heroImage": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
      "description": "The Abode of Snow, Himachal Pradesh is a mountain paradise of ancient wooden Kath-Kuni temples, apple orchards, high-altitude cold deserts, and vibrant Tibetan Buddhist monasteries.",
      "historyOverview": "Inhabited since the Vedic era by the Khasas and Audumbaras. Rulers of Katoch dynasty of Kangra successfully defended against multiple invasions. Later home to the Dalai Lama in McLeod Ganj and colonial summer capital of the British Raj.",
      "dynasties": [
          "Katoch Dynasty of Kangra",
          "Chamba Royal House",
          "Bushahr Dynasty",
          "Sirmur Kingdom",
          "Suketan Kings"
      ],
      "cuisine": {
          "dishes": [
              "Himachali Dham (Chana Madra, Khatta, Mah ki Dal)",
              "Siddu stuffed with crushed walnuts and poppy seeds",
              "Kullu Trout Fish",
              "Bhey (Spiced lotus stems)"
          ],
          "streetFood": [
              "Siddu with pure desi ghee",
              "Tibetan Momos and Thukpa in McLeod Ganj",
              "Babru (Stuffed black gram kachori)"
          ],
          "sweets": [
              "Mittha (Sweetened rice with dry fruits)",
              "Babru sweet",
              "Aktori buckwheat cake"
          ],
          "description": "Wholesome Himalayan mountain diet utilizing lentils, curd-based gravies, wild herbs, and slow-steamed Siddu designed for high altitude energy."
      },
      "architectureStyle": "Kath-Kuni Seismic-Resistant Timber-and-Stone Architecture, Tibetan Gompas, Colonial Neo-Gothic (Shimla Viceregal Lodge)",
      "traditionalDress": "Himachali Woolen Topi with colorful Patti border, Pattu shawl, and Dhatu headscarf for women",
      "folkDance": [
          "Nati (World Guinness Record mountain circle dance)",
          "Dangi",
          "Chham mask dance of Spiti Lamas",
          "Kullu Nati"
      ],
      "music": [
          "Jhoori folk romance",
          "Mohana melodies",
          "Instruments: Ranasingha horn, Dhol, Damau, Shehnai"
      ],
      "bestTime": "March to June for pleasant weather; October to February for snowfall in Manali and Shimla",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,000 / day",
          "luxury": "₹16,000 - ₹45,000+ / day"
      },
      "nearbyPlaces": [
          "Shimla",
          "Manali",
          "Dharamshala",
          "Kaza (Spiti)",
          "Dalhousie",
          "Kullu",
          "Kasol",
          "Chamba"
      ],
      "hiddenGems": [
          "Jibhi Valley pine wooden cabins",
          "Chitkul last village of India",
          "Kalpa apple orchards",
          "Barot Valley"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Kalka-Shimla Toy Train is a UNESCO World Heritage railway featuring 102 tunnels across 96 kilometers of mountain curves.",
          "Kaza in Spiti Valley houses the world’s highest post office and petrol station at over 14,500 feet elevation.",
          "Great Himalayan National Park is a UNESCO World Heritage site harboring snow leopards and western tragopan."
      ],
      "travelTips": [
          "Acclimatize in Shimla or Manali before crossing high-altitude passes like Rohtang or Kunzum into Spiti.",
          "Savor an authentic community feast of Himachali Dham served on leaf plates (Pattals).",
          "Look for the handloom mark when purchasing genuine Kullu and Kinnauri woolen shawls."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-180-8077 (Himachal Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "12°C - 22°C (Winter: -2°C - 10°C)",
          "condition": "Crisp Mountain Breeze",
          "aqi": "Pristine (28 AQI)",
          "bestSeason": "Spring & Autumn"
      },
      "hotels": [
          {
              "name": "Wildflower Hall, Shimla (Oberoi)",
              "type": "Colonial Himalayan Luxury",
              "rating": 5,
              "pricePerNight": "₹38,000",
              "location": "Mashobra, Shimla",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Chhatrapati Heritage, Dharamshala",
              "type": "Mountain View Retreat",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "McLeod Ganj",
              "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Echor Palm Bliss, Kasol",
              "type": "Riverfront Wooden Chalet",
              "rating": 4.7,
              "pricePerNight": "₹6,500",
              "location": "Parvati Valley",
              "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Himachali Rasoi, Shimla Mall Road",
              "cuisineType": "Traditional Himachali Dham",
              "rating": 4.8,
              "mustTry": "Kangri Dham Thali & Siddu",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Tiberi Restaurant, Dharamshala",
              "cuisineType": "Tibetan & Himalayan Specialty",
              "rating": 4.7,
              "mustTry": "Steamed Tingmo & Shabalay",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Wake & Bake Cafe, Shimla",
              "cuisineType": "Mountain Cafe & Organic Crepes",
              "rating": 4.6,
              "mustTry": "Apple Cinnamon Pie & French Toast",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Shimla Heritage Walk & Mall Road",
              "description": "Explore Viceregal Lodge, take the heritage walk down the Ridge, visit Christ Church.",
              "highlights": [
                  "Viceregal Lodge",
                  "The Ridge",
                  "Christ Church"
              ]
          },
          {
              "day": 2,
              "title": "Kullu Valley & Naggar Castle",
              "description": "Drive along Beas river to Naggar Castle, marvel at wood-stone Kath-Kuni architecture and Nicholas Roerich Art Gallery.",
              "highlights": [
                  "Naggar Castle",
                  "Roerich Gallery",
                  "Beas River"
              ]
          },
          {
              "day": 3,
              "title": "Dharamshala & Tibetan Spiritual Core",
              "description": "Visit Tsuglagkhang Complex (Dalai Lama Temple), explore McLeod Ganj prayer wheels and Kangra Fort.",
              "highlights": [
                  "Dalai Lama Temple",
                  "Kangra Fort",
                  "Bhagsunag Falls"
              ]
          }
      ]
  },
  'punjab': {
      "id": "punjab",
      "name": "Punjab",
      "slug": "punjab",
      "capital": "Chandigarh",
      "population": "31 Million",
      "languages": [
          "Punjabi",
          "Hindi",
          "English"
      ],
      "heritageCount": 11,
      "festivalsCount": 13,
      "cultureCount": 16,
      "topAttraction": "Golden Temple (Harmandir Sahib), Amritsar",
      "heroImage": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=1600&q=80",
      "description": "The Land of Five Rivers, Punjab is the vibrant cradle of Sikh heritage, heroic valor, lush golden mustard fields, energetic Bhangra beats, and unmatched hospitality at the Golden Temple Langar.",
      "historyOverview": "Root of ancient Indus Valley civilization at Ropar, birthplace of Sikhism founded by Guru Nanak Dev Ji, heroic resistance of Maharaja Ranjit Singh’s Sikh Empire, and freedom struggle milestones at Jallianwala Bagh.",
      "dynasties": [
          "Sikh Empire of Maharaja Ranjit Singh",
          "Phulkian Dynasty of Patiala",
          "Kapurthala Royal House",
          "Mughal Punjab"
      ],
      "cuisine": {
          "dishes": [
              "Makki di Roti with Sarson da Saag & white butter",
              "Amritsari Kulcha with Chole",
              "Butter Chicken",
              "Dal Makhani"
          ],
          "streetFood": [
              "Amritsari Fish Fry",
              "Aloo Kulcha at Maqbool Road",
              "Kharode soup",
              "Paneer Pakora at Lawrence Road"
          ],
          "sweets": [
              "Pinni with gond and dry fruits",
              "Amritsari Jalebi in desi ghee",
              "Kheer",
              "Gajar ka Halwa"
          ],
          "description": "Rich, wholesome, dairy-powered cuisine featuring slow-simmered lentils in clay tandoors, pure buffalo milk cream, and fresh home-churned white butter."
      },
      "architectureStyle": "Sikh Architecture with gilded copper domes (Chhatris), marble inlay (Jharokhas), and French-inspired palaces in Kapurthala",
      "traditionalDress": "Vibrant Salwar Kameez with Phulkari dupatta for women; Kurta Pajama with matching Pagri (Turban) for men",
      "folkDance": [
          "Bhangra (High-energy harvest dance)",
          "Giddha (Women’s clapping folk dance)",
          "Sammi",
          "Malwai Giddha"
      ],
      "music": [
          "Boliyaan & Tappa singing",
          "Sufi Kalam of Bulleh Shah and Waris Shah",
          "Instruments: Dhol, Tumbi, Algoza, Chimta"
      ],
      "bestTime": "October to March (Golden mustard blooms and cool winter evenings)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹30,000+ / day"
      },
      "nearbyPlaces": [
          "Amritsar",
          "Chandigarh",
          "Patiala",
          "Ludhiana",
          "Jalandhar",
          "Kapurthala",
          "Anandpur Sahib"
      ],
      "hiddenGems": [
          "Kila Raipur Rural Olympics",
          "Sheesh Mahal Patiala",
          "Jagjit Palace Kapurthala",
          "Harike Wetlands"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Harmandir Sahib (Golden Temple) operates the world’s largest free community kitchen, serving over 100,000 pilgrims every day regardless of religion.",
          "Virasat-e-Khalsa in Anandpur Sahib is the most visited museum in Asia, celebrated for its revolutionary architecture designed by Moshe Safdie.",
          "Amritsar is renowned for 500-year-old traditional copper and brass utensils crafted by the Thatheras of Jandiala Guru, a UNESCO Intangible Cultural Heritage craft."
      ],
      "travelTips": [
          "Always cover your head and remove shoes before entering any Gurudwara premises.",
          "Experience the ceremonial lowering of flags at the Wagah Border retreat parade in the afternoon.",
          "Taste fresh Makki di Roti with a large dollop of home-churned white butter at a village Dhaba."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-180-0588 (Punjab Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 30°C (Winter: 5°C - 20°C)",
          "condition": "Warm & Agrarian",
          "aqi": "Moderate (78 AQI)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "Taj Swarna, Amritsar",
              "type": "Contemporary Luxury",
              "rating": 4.9,
              "pricePerNight": "₹14,000",
              "location": "Majitha Verka Bypass, Amritsar",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Welcomhotel by ITC, Amritsar",
              "type": "Colonial Heritage Estate",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Raja Sansi, Amritsar",
              "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Ranjit’s Svaasa Heritage Boutique Hotel",
              "type": "200-Year-Old Haveli",
              "rating": 4.7,
              "pricePerNight": "₹8,500",
              "location": "Mall Road, Amritsar",
              "image": "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Kesar Da Dhaba, Amritsar",
              "cuisineType": "Centenary Punjabi Vegetarian",
              "rating": 4.9,
              "mustTry": "Dal Makhani & Thali with pure desi ghee",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bhai Kulwant Singh Kulchian Wale",
              "cuisineType": "Authentic Tandoori Kulcha",
              "rating": 4.8,
              "mustTry": "Crispy Amritsari Chur Chur Aloo Kulcha",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Makhan Fish & Chicken Corner",
              "cuisineType": "Amritsari Non-Vegetarian",
              "rating": 4.7,
              "mustTry": "Crispy Amritsari Fried Fish with ajwain",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Divine Harmandir Sahib & Jallianwala Bagh",
              "description": "Sunrise darshan at Golden Temple, partake in Langar seva, solemn homage at Jallianwala Bagh, evening Wagah border.",
              "highlights": [
                  "Golden Temple",
                  "Langar Seva",
                  "Wagah Border"
              ]
          },
          {
              "day": 2,
              "title": "Virasat-e-Khalsa & Sacred Anandpur Sahib",
              "description": "Scenic drive to Anandpur Sahib, explore world-renowned architecture of Virasat-e-Khalsa museum and Takht Sri Kesgarh Sahib.",
              "highlights": [
                  "Virasat-e-Khalsa",
                  "Takht Sri Kesgarh Sahib",
                  "Nangal Dam"
              ]
          },
          {
              "day": 3,
              "title": "Royal Heritage of Patiala",
              "description": "Visit Qila Mubarak, Sheesh Mahal, and explore traditional handcrafted Phulkari and Patiala Shahi jutti bazars.",
              "highlights": [
                  "Qila Mubarak",
                  "Sheesh Mahal",
                  "Patiala Bazars"
              ]
          }
      ]
  },
  'chandigarh': {
      "id": "chandigarh",
      "name": "Chandigarh",
      "slug": "chandigarh",
      "capital": "Chandigarh (The City Beautiful)",
      "population": "1.2 Million",
      "languages": [
          "Hindi",
          "Punjabi",
          "English"
      ],
      "heritageCount": 4,
      "festivalsCount": 8,
      "cultureCount": 9,
      "topAttraction": "The Capitol Complex (UNESCO) & Nek Chand Rock Garden",
      "heroImage": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1600&q=80",
      "description": "The City Beautiful, Chandigarh is India’s premier planned modernist metropolis designed by Swiss-French architect Le Corbusier, famous for its Capitol Complex, Nek Chand’s fantasy Rock Garden, and Sukhna Lake.",
      "historyOverview": "Commissioned post-1947 by Prime Minister Jawaharlal Nehru as a symbol of modern India’s unfettered future. Planned with broad avenues, dedicated green sectors, and concrete brutalist landmarks that earned UNESCO World Heritage status.",
      "dynasties": [
          "Modernist Republic Planning",
          "Colonial Punjab Territory",
          "Harappan Outpost (Ancient Ropar)"
      ],
      "cuisine": {
          "dishes": [
              "Chole Bhature with pickled onions",
              "Butter Naan with Dal Makhani",
              "Tandoori Soya Chaap",
              "Amritsari Macchi"
          ],
          "streetFood": [
              "Sector 8 Golgappas",
              "Sector 17 Chaat",
              "Stuffed Paranthas at Student Center Panjab University"
          ],
          "sweets": [
              "Kulfi Falooda at Gopal’s",
              "Pinni",
              "Rabri Jalebi"
          ],
          "description": "Cosmopolitan blend of rich Punjabi tastes, tandoori delicacies, modern cafe culture, and beloved university campus street eats."
      },
      "architectureStyle": "Modernist Brutalist Architecture by Le Corbusier (UNESCO World Heritage Capitol Complex) and Pierre Jeanneret",
      "traditionalDress": "Contemporary smart-casuals and traditional Punjabi Kurta-Pajama with colorful Turbans",
      "folkDance": [
          "Modern Urban Bhangra",
          "Giddha"
      ],
      "music": [
          "Contemporary Punjabi Indie Pop",
          "Classical Sitar recitals at Tagore Theatre"
      ],
      "bestTime": "October to March (Crisp sunny days and pleasant evenings by Sukhna Lake)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,000 / day",
          "luxury": "₹12,000 - ₹25,000+ / day"
      },
      "nearbyPlaces": [
          "Pinjore Mughal Gardens",
          "Kasauli Hills",
          "Morni Hills",
          "Anandpur Sahib"
      ],
      "hiddenGems": [
          "Pierre Jeanneret Museum Sector 5",
          "Le Corbusier Centre Sector 19",
          "Zakir Hussain Rose Garden",
          "Kaimbwala Village"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "The Capitol Complex (Palace of Assembly, Secretariat, High Court) is a UNESCO World Heritage Site.",
          "Nek Chand secretly built the 25-acre Rock Garden entirely out of industrial, ceramic, and home demolition waste over 18 years.",
          "Chandigarh is planned with no Sector 13 due to Le Corbusier’s European superstition."
      ],
      "travelTips": [
          "Rent a Smart Bike and cycle along the dedicated shady cycling tracks crisscrossing every sector.",
          "Visit Sukhna Lake early in the morning for birdwatching with views of the Shivalik foothills.",
          "Register for authorized guided architecture tours of the Capitol Complex in advance."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0172-2740420 (Chandigarh Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "16°C - 28°C (Winter: 7°C - 20°C)",
          "condition": "Clear & Shivalik Mountain Vista",
          "aqi": "Good (45 AQI)",
          "bestSeason": "October to March"
      },
      "hotels": [
          {
              "name": "Taj Chandigarh, Sector 17",
              "type": "Urban Luxury",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Block No. 9, Sector 17-A",
              "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Lalit Chandigarh, IT Park",
              "type": "Contemporary Palace",
              "rating": 4.8,
              "pricePerNight": "₹11,000",
              "location": "Rajiv Gandhi IT Park",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Hyatt Regency Chandigarh",
              "type": "Premium City Hotel",
              "rating": 4.7,
              "pricePerNight": "₹10,500",
              "location": "Industrial Area Phase 1",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Gopal Sweets, Sector 35",
              "cuisineType": "North Indian & Punjabi Street Delights",
              "rating": 4.8,
              "mustTry": "Chole Bhature & Kulfi Falooda",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Pal Dhaba, Sector 28",
              "cuisineType": "Legendary Punjabi Dhaba",
              "rating": 4.7,
              "mustTry": "Mutton Curry & Keema Naan",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Virgin Courtyard, Sector 7",
              "cuisineType": "Italian Courtyard Fine Dining",
              "rating": 4.7,
              "mustTry": "Wood-fired Truffle Pizza & Tiramisu",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Corbusier Architecture & Capitol Marvels",
              "description": "Tour the UNESCO Capitol Complex, Open Hand Monument, and Le Corbusier Centre.",
              "highlights": [
                  "Capitol Complex",
                  "Open Hand Monument",
                  "Corbusier Centre"
              ]
          },
          {
              "day": 2,
              "title": "Nek Chand Rock Garden & Sukhna Serenity",
              "description": "Wander through the recycled sculptures of Rock Garden, followed by sunset boating on Sukhna Lake.",
              "highlights": [
                  "Rock Garden",
                  "Sukhna Lake",
                  "Zakir Hussain Rose Garden"
              ]
          }
      ]
  },
  'uttarakhand': {
      "id": "uttarakhand",
      "name": "Uttarakhand",
      "slug": "uttarakhand",
      "capital": "Dehradun (Winter) / Gairsain (Summer)",
      "population": "11.5 Million",
      "languages": [
          "Hindi",
          "Garhwali",
          "Kumaoni",
          "Jaunsari",
          "Sanskrit"
      ],
      "heritageCount": 11,
      "festivalsCount": 12,
      "cultureCount": 14,
      "topAttraction": "Kedarnath Temple & Valley of Flowers (UNESCO)",
      "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80",
      "description": "Devbhoomi (Land of the Gods), Uttarakhand is a sacred Himalayan sanctuary of thunderous glacial rivers, ancient Char Dham pilgrimage shrines, pristine alpine meadows, and the birthplace of Mother Ganga.",
      "historyOverview": "Root of Vedic meditation and hermitage retreats. Ruled by the Katyuri kings, Garhwal Kingdom of the Panwars, and Chand dynasty of Kumaon who built the stone temple complexes of Jageshwar and Baijnath.",
      "dynasties": [
          "Katyuri Dynasty",
          "Garhwal Panwar Dynasty",
          "Chand Dynasty of Kumaon",
          "Gorkha Kingdom"
      ],
      "cuisine": {
          "dishes": [
              "Kafuli (Spinach and fenugreek gravy)",
              "Chainsoo (Roasted black gram dal)",
              "Aloo ke Gutke with jumbo chili",
              "Phaanu"
          ],
          "streetFood": [
              "Singori wrapped in Malu leaves",
              "Bhatt ki Churkani",
              "Arsa sweet fritters"
          ],
          "sweets": [
              "Bal Mithai coated with sugar pearls",
              "Singori with khoya",
              "Jhangore ki Kheer"
          ],
          "description": "Mountain-nourishing Himalayan cuisine cooked in iron kadhais, seasoned with wild Himalayan chives (Jamboo) and Jakhiya seeds."
      },
      "architectureStyle": "Himalayan Nagara Stone Architecture (Kedarnath, Jageshwar), Kath-Kuni timber bonding, and colonial hill station bungalows in Mussoorie",
      "traditionalDress": "Ghagra-Choli with Pichora ceremonial veil for Kumaoni women; Kurta-Pajama with Garhwali Topi for men",
      "folkDance": [
          "Chholiya (Martial sword dance of Kumaon)",
          "Jhora",
          "Barada Nati",
          "Pandav Nritya"
      ],
      "music": [
          "Mangal Geet ceremonial songs",
          "Jagar spirit invocations",
          "Instruments: Dhol, Damau, Hurka, Bhankora"
      ],
      "bestTime": "April to June for pleasant weather; September to November for clear Himalayan views; Dec to Feb for snowfall in Auli",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,500 / day",
          "luxury": "₹18,000 - ₹45,000+ / day"
      },
      "nearbyPlaces": [
          "Rishikesh",
          "Haridwar",
          "Dehradun",
          "Mussoorie",
          "Nainital",
          "Auli",
          "Kedarnath",
          "Badrinath"
      ],
      "hiddenGems": [
          "Chopta Mini Switzerland",
          "Munsiyari Panchachuli peaks",
          "Lansdowne pine serenity",
          "Mana last Indian village"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Valley of Flowers and Nanda Devi National Parks are UNESCO World Heritage Sites harboring over 500 species of wildflowers.",
          "Rishikesh is officially recognized across the world as the International Yoga Capital.",
          "Mana near Badrinath is officially celebrated as India’s \"First Village\" at the Indo-Tibetan border."
      ],
      "travelTips": [
          "Carry biometric registration slips and medical fitness certificates for high-altitude Char Dham treks.",
          "Attend the grand Ganga Aarti at Triveni Ghat in Rishikesh or Har Ki Pauri in Haridwar at sunset.",
          "Always dress modestly and remove footwear before entering ancient Garhwal or Kumaon shrine complexes."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-180-4145 (Uttarakhand Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "14°C - 26°C (Winter: 2°C - 12°C)",
          "condition": "Pristine Himalayan Alpine",
          "aqi": "Good (32 AQI)",
          "bestSeason": "May to June & Sept to Nov"
      },
      "hotels": [
          {
              "name": "Ananda in the Himalayas, Rishikesh",
              "type": "Ultra Luxury Ayurvedic Palace",
              "rating": 5,
              "pricePerNight": "₹52,000",
              "location": "Palace Estate, Narendra Nagar",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Taj Corbett Resort & Spa",
              "type": "Forest Riverside Luxury",
              "rating": 4.8,
              "pricePerNight": "₹22,000",
              "location": "Jim Corbett National Park",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Manu Maharani, Nainital",
              "type": "Heritage Lake View Resort",
              "rating": 4.7,
              "pricePerNight": "₹14,000",
              "location": "Grassmere Estate, Nainital",
              "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Chotiwala Restaurant, Rishikesh",
              "cuisineType": "Traditional Garhwali & North Indian Vegetarian",
              "rating": 4.7,
              "mustTry": "Garhwali Thali & Mango Lassi",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Kumaon Rasoi, Nainital",
              "cuisineType": "Authentic Pahadi Flavors",
              "rating": 4.8,
              "mustTry": "Bhatt ki Churkani & Bal Mithai",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Sitting Elephant, Rishikesh",
              "cuisineType": "Rooftop River View Dining",
              "rating": 4.6,
              "mustTry": "Paneer Lababdar & Dal Tadka",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Sacred Rishikesh & Ganga Aarti",
              "description": "Cross Lakshman Jhula, visit the Beatles Ashram, and witness the mesmerizing sunset Ganga Aarti at Triveni Ghat.",
              "highlights": [
                  "Lakshman Jhula",
                  "Beatles Ashram",
                  "Ganga Aarti"
              ]
          },
          {
              "day": 2,
              "title": "Chopta Tungnath Alpine Trek",
              "description": "Drive to Chopta and hike through rhododendron forests to Tungnath, the highest Shiva temple on Earth at 12,073 ft.",
              "highlights": [
                  "Chopta",
                  "Tungnath Temple",
                  "Chandrashila Peak"
              ]
          },
          {
              "day": 3,
              "title": "Jim Corbett Wilderness Safari",
              "description": "Descend to Corbett National Park for an early morning open-top jeep safari to spot Bengal tigers and wild elephants.",
              "highlights": [
                  "Corbett Tiger Reserve",
                  "Dhikala Zone",
                  "Kosi River"
              ]
          }
      ]
  },
  'haryana': {
      "id": "haryana",
      "name": "Haryana",
      "slug": "haryana",
      "capital": "Chandigarh",
      "population": "29 Million",
      "languages": [
          "Hindi",
          "Haryanvi",
          "Punjabi",
          "Braj"
      ],
      "heritageCount": 6,
      "festivalsCount": 9,
      "cultureCount": 11,
      "topAttraction": "Kurukshetra (Brahma Sarovar) & Sultanpur Bird Sanctuary",
      "heroImage": "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=1600&q=80",
      "description": "The ancient cradle of Vedic enlightenment and the epic battlefield of the Mahabharata where the Bhagavad Gita was spoken at Jyotisar, Haryana is also known for its rustic agrarian spirit, Olympic wrestling champions, and historic crafts fairs.",
      "historyOverview": "Site of the Indus-Saraswati civilization at Rakhigarhi, decisive historical battles at Panipat, and sacred discourse of the Bhagavad Gita at Kurukshetra.",
      "dynasties": [
          "Kuru Kingdom",
          "Pushyabhuti Dynasty of Thanesar (Emperor Harsha)",
          "Tomara Rajputs",
          "Mughal Outposts"
      ],
      "cuisine": {
          "dishes": [
              "Bajra Khichdi with fresh churned white butter",
              "Kadhi Pakora",
              "Singri ki Sabzi",
              "Hara Dhania Cholia"
          ],
          "streetFood": [
              "Ghevar from Rohtak",
              "Kachori of Panipat",
              "Tandoori Roti with fresh garlic chutney"
          ],
          "sweets": [
              "Rewari & Gajak of Rohtak",
              "Pinni",
              "Alwar ka Mawa",
              "Malpua"
          ],
          "description": "Wholesome agrarian diet centered around rich milk, ghee, bajra (pearl millet), country greens, and unrefined jaggery (gud)."
      },
      "architectureStyle": "Mughal Terraced Gardens (Yadavindra Gardens Pinjore), Harappan brick settlements (Rakhigarhi), Medieval Stepwells",
      "traditionalDress": "Daman, Kurti and Chunder for women; Dhoti, Kurta with Khandwa turban for men",
      "folkDance": [
          "Dhamal (Ancient celebratory dance dating to Mahabharata)",
          "Ghoomar of Mewat",
          "Phag dance",
          "Saang folk theatre"
      ],
      "music": [
          "Haryanvi Ragini storytelling",
          "Classical Dhrupad",
          "Instruments: Saarang, Been, Dholak, Ghungroo"
      ],
      "bestTime": "October to March (Pleasant sunny days for heritage and migratory birding at Sultanpur)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹28,000+ / day"
      },
      "nearbyPlaces": [
          "Kurukshetra",
          "Gurugram",
          "Panipat",
          "Pinjore",
          "Faridabad (Surajkund)",
          "Hisar",
          "Morni Hills"
      ],
      "hiddenGems": [
          "Rakhigarhi ancient Harappan excavation",
          "Morni Hills serene pine lake",
          "Tilyar Lake Rohtak",
          "Firoz Shah Palace Hisar"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Rakhigarhi in Haryana is officially proven to be the largest Harappan (Indus Valley) civilization city, spanning over 350 hectares.",
          "Surajkund International Crafts Mela in Faridabad is the largest cultural and artisan crafts fair in the world.",
          "Brahma Sarovar in Kurukshetra is mentioned by 11th-century historian Al-Beruni as the most majestic water reservoir in India."
      ],
      "travelTips": [
          "Visit the International Gita Mahotsav at Kurukshetra during November-December for deep spiritual discourses and cultural shows.",
          "Explore Surajkund Crafts Mela in February to purchase master craft items directly from national awardee artisans.",
          "Sample authentic hot Bajra Khichdi served with country jaggery and butter at a traditional rural haveli."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0172-2702955 (Haryana Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 32°C (Winter: 6°C - 21°C)",
          "condition": "Sunny Plains Breeze",
          "aqi": "Moderate (75 AQI in Kurukshetra/Pinjore)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "Heritage Village Resort & Spa, Manesar",
              "type": "Rajasthani-Haryanvi Haveli Resort",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "NH8 Manesar",
              "image": "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Oberoi, Gurugram",
              "type": "Ultra-Luxury Contemporary Oasis",
              "rating": 5,
              "pricePerNight": "₹26,000",
              "location": "443 Udyog Vihar Phase V",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Yadavindra Gardens Heritage Hotel, Pinjore",
              "type": "Mughal Terraced Garden Palace",
              "rating": 4.6,
              "pricePerNight": "₹6,500",
              "location": "Pinjore, Panchkula",
              "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Pind Balluchi, Gurugram / Panipat",
              "cuisineType": "Rustic Village Dhaba Cuisine",
              "rating": 4.7,
              "mustTry": "Dal Makhani & Amritsari Kulcha",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1590053303666-31356f9661d1?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Gulab Rewri & Sweets, Rohtak",
              "cuisineType": "Heritage Sweets & Savories",
              "rating": 4.9,
              "mustTry": "Til Gajak, Rewari & Samosa",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Haveli, Murthal",
              "cuisineType": "Famous Highway Dhaba",
              "rating": 4.8,
              "mustTry": "Stuffed Tandoori Parantha with white butter",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Sacred Kurukshetra & Jyotisar Gita Tree",
              "description": "Visit Brahma Sarovar, explore Jyotisar where the Gita was delivered under the banyan tree, and tour the Kurukshetra Panorama.",
              "highlights": [
                  "Brahma Sarovar",
                  "Jyotisar",
                  "Krishna Museum"
              ]
          },
          {
              "day": 2,
              "title": "Pinjore 17th-Century Mughal Terraces",
              "description": "Tour the multi-level fountains and pavilions of Yadavindra Gardens, and take the sunset drive to Morni Hills.",
              "highlights": [
                  "Pinjore Gardens",
                  "Morni Hills",
                  "Bhima Devi Temple"
              ]
          }
      ]
  },
  'delhi': {
      "id": "delhi",
      "name": "Delhi (NCT)",
      "slug": "delhi",
      "capital": "New Delhi (National Capital)",
      "population": "21 Million",
      "languages": [
          "Hindi",
          "English",
          "Punjabi",
          "Urdu"
      ],
      "heritageCount": 18,
      "festivalsCount": 16,
      "cultureCount": 19,
      "topAttraction": "Qutub Minar, Red Fort & Humayun’s Tomb (3 UNESCO Sites)",
      "heroImage": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80",
      "description": "The historic capital of empires and the vibrant modern soul of India, Delhi spans seven ancient historic cities from the legendary Indraprastha of the Pandavas to Shahjahanabad and Edwin Lutyens’ imperial New Delhi.",
      "historyOverview": "Ruled by Tomaras, Chauhans, Delhi Sultanate dynasties (Mamluk, Khalji, Tughlaq, Sayyid, Lodi), the Mughal Empire under Shah Jahan, and crowned capital of independent democratic India in 1947.",
      "dynasties": [
          "Tomara Rajputs",
          "Delhi Sultanates",
          "Mughal Empire",
          "Colonial Lutyens Architecture",
          "Democratic Republic of India"
      ],
      "cuisine": {
          "dishes": [
              "Dilli Nihari with sesame kulcha",
              "Butter Chicken (invented at Moti Mahal Daryaganj)",
              "Biryani at Matka Peer",
              "Chole Bhature"
          ],
          "streetFood": [
              "Paranthe Wali Gali paranthas",
              "Dahi Bhalla at Natraj Chandni Chowk",
              "Aloo Chaat at UPSC",
              "Momos at Majnu ka Tilla"
          ],
          "sweets": [
              "Daulat ki Chaat (foam dessert)",
              "Jaleba soaked in rabri at Dariba Kalan",
              "Kulfi Falooda at Roshan di Kulfi"
          ],
          "description": "The ultimate food capital of the world, harmonizing royal Mughal Dastarkhwan delicacies, robust post-partition Punjabi feasts, and vibrant alleyway chaats."
      },
      "architectureStyle": "Mughal Red Sandstone & Marble (Red Fort, Jama Masjid), Indo-Islamic Arcuate (Qutub Minar), Neo-Classical Imperial (Rashtrapati Bhavan, India Gate)",
      "traditionalDress": "Contemporary cosmopolitan fashion alongside traditional Sherwanis, Kurta-Pajamas, and elegant Chikankari Suits",
      "folkDance": [
          "Kathak classical recitals",
          "Dilli Sufi dance",
          "Bhangra and contemporary urban dance"
      ],
      "music": [
          "Delhi Gharana classical khayal and tabla",
          "Nizamuddin Dargah Qawwalis",
          "Hindustani Sitar & Sarod recitals"
      ],
      "bestTime": "October to March (Pleasant mild weather, blooming gardens, and vibrant outdoor festivals)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,500 / day",
          "luxury": "₹18,000 - ₹55,000+ / day"
      },
      "nearbyPlaces": [
          "Agra",
          "Jaipur",
          "Mathura",
          "Vrindavan",
          "Neemrana",
          "Haridwar"
      ],
      "hiddenGems": [
          "Agrasen ki Baoli stepwell",
          "Hauz Khas medieval madrasa and lake",
          "Mehrauli Archaeological Park",
          "National Crafts Museum"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Delhi possesses three distinct UNESCO World Heritage Sites: Qutub Minar Complex, Humayun’s Tomb, and the Red Fort.",
          "Humayun’s Tomb was the first garden-tomb on the Indian subcontinent and served as the direct architectural inspiration for the Taj Mahal.",
          "Khari Baoli in Old Delhi is recognized as Asia’s largest wholesale spice market, operating continuously since the 17th century."
      ],
      "travelTips": [
          "Use the world-class Delhi Metro network to glide smoothly between distant heritage sites, avoiding city traffic.",
          "Spend Thursday evening listening to soul-stirring live Qawwalis at Hazrat Nizamuddin Aulia Dargah.",
          "Book entry tickets to Red Fort and Qutub Minar online via the ASI portal to bypass queue counters."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-11-1363 (National Tourism Helpline)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 32°C (Winter: 5°C - 22°C)",
          "condition": "Cosmopolitan Continental",
          "aqi": "Moderate in Spring/Winter (110 AQI)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "The Imperial, New Delhi",
              "type": "Colonial Art Deco Luxury",
              "rating": 5,
              "pricePerNight": "₹28,000",
              "location": "Janpath, Connaught Place",
              "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Taj Mahal Hotel, Mansingh Road",
              "type": "Diplomatic Enclave Luxury",
              "rating": 4.9,
              "pricePerNight": "₹24,000",
              "location": "1 Mansingh Road",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Haveli Dharampura, Chandni Chowk",
              "type": "UNESCO Awarded Restored Haveli",
              "rating": 4.8,
              "pricePerNight": "₹16,000",
              "location": "Gali Guliyan, Old Delhi",
              "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Karim’s, Jama Masjid Gali Kababiyan",
              "cuisineType": "Original Mughal Nawabi Cuisine",
              "rating": 4.8,
              "mustTry": "Mutton Burra & Shahi Rogan Josh",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bukhara, ITC Maurya",
              "cuisineType": "Legendary Northwest Frontier Feast",
              "rating": 4.9,
              "mustTry": "Dal Bukhara (slow-cooked 18 hours) & Sikandari Raan",
              "priceRange": "₹₹₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Pandit Gaya Prasad Shiv Charan, Paranthe Wali Gali",
              "cuisineType": "Heritage Deep-fried Paranthas",
              "rating": 4.6,
              "mustTry": "Kaju & Rabri Parantha with pumpkin sabzi",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Old Delhi Shahjahanabad Citadel",
              "description": "Red Fort ramparts, Jama Masjid courtyard, cycle-rickshaw spice trail through Khari Baoli, savor historic street paranthas.",
              "highlights": [
                  "Red Fort",
                  "Jama Masjid",
                  "Khari Baoli"
              ]
          },
          {
              "day": 2,
              "title": "UNESCO Monument Trail & Sufi Lore",
              "description": "Marvel at Humayun’s Tomb gardens, explore Qutub Minar’s 73-meter sandstone tower, and attend Nizamuddin Dargah evening Qawwali.",
              "highlights": [
                  "Humayun’s Tomb",
                  "Qutub Minar",
                  "Nizamuddin Dargah"
              ]
          },
          {
              "day": 3,
              "title": "Imperial Lutyens Vista & Crafts Trail",
              "description": "Drive along Rajpath (Kartavya Path) from India Gate to Rashtrapati Bhavan, explore National Museum and National Crafts Museum.",
              "highlights": [
                  "India Gate",
                  "Rashtrapati Bhavan",
                  "National Crafts Museum"
              ]
          }
      ]
  },
  'dadra-nagar-haveli-daman-diu': {
      "id": "dadra-nagar-haveli-daman-diu",
      "name": "Dadra & Nagar Haveli and Daman & Diu",
      "slug": "dadra-nagar-haveli-daman-diu",
      "capital": "Daman",
      "population": "1.1 Million",
      "languages": [
          "Gujarati",
          "Hindi",
          "Marathi",
          "Portuguese",
          "Varli"
      ],
      "heritageCount": 5,
      "festivalsCount": 7,
      "cultureCount": 8,
      "topAttraction": "Moti Daman Fort, Diu Fort & Nani Daman Lighthouse",
      "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      "description": "A tranquil coastal union territory steeped in 450 years of Portuguese maritime heritage, featuring stone seaside ramparts, canon-crested ramparts at Diu Fort, black-sand beaches, and tribal Warli craft traditions in Silvassa.",
      "historyOverview": "Administered by the Portuguese Estado da India from 1535 until liberation by the Indian Armed Forces during Operation Vijay in 1961. Merged into a unified Union Territory in 2020.",
      "dynasties": [
          "Portuguese Colonial Empire",
          "Sultanate of Gujarat",
          "Silvassa Tribal Chiefdoms"
      ],
      "cuisine": {
          "dishes": [
              "Daman Seafood Cataplana",
              "Cozy Crab Curry with coconut milk",
              "Chicken Xacuti",
              "Ubadiyu (steamed winter vegetables in clay pot)"
          ],
          "streetFood": [
              "Jetty Prawn Cutlets",
              "Diu Beach Bhelpuri",
              "Portuguese Egg Tarts"
          ],
          "sweets": [
              "Bebinca layered dessert",
              "Mohanthal",
              "Kaju Katli"
          ],
          "description": "Enchanting culinary fusion of Portuguese coastal seasonings and spicy Gujarati-Parsi coastal seafood traditions."
      },
      "architectureStyle": "16th-Century Portuguese Renaissance Military Fortifications (Moti Daman Fort, Diu Fort), Baroque Churches (Bom Jesus Daman, St. Paul’s Diu)",
      "traditionalDress": "Traditional Gujarati attire alongside Portuguese-influenced cotton dresses; Warli tribal wraps in Dadra & Nagar Haveli",
      "folkDance": [
          "Mando (Portuguese-Goan folk waltz)",
          "Gheria tribal dance of Silvassa",
          "Tarpa tribal circle dance"
      ],
      "music": [
          "Portuguese Fado echoes",
          "Tribal Tarpa trumpet melodies",
          "Gujarati Garba rhythms"
      ],
      "bestTime": "October to May (Pleasant ocean breeze and sunny shoreline strolls)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹24,000+ / day"
      },
      "nearbyPlaces": [
          "Vapi",
          "Surat",
          "Mumbai",
          "Gir National Park",
          "Somnath"
      ],
      "hiddenGems": [
          "Dudhani End-of-the-World Jetty",
          "Jampore black-sand beach casuarina groves",
          "Fudam Bird Sanctuary Diu",
          "Vanganga Lake Garden Silvassa"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Diu Fort was constructed in 1535 and defended in historic naval sieges against Ottoman and Gujarat fleets.",
          "Silvassa in Dadra & Nagar Haveli is home to indigenous Warli artists who have practiced ritual mud wall paintings for over 2,000 years.",
          "The Church of Bom Jesus in Moti Daman features a 16th-century gilded wood altarpiece carved by Portuguese master craftsmen."
      ],
      "travelTips": [
          "Rent a two-wheeler to effortlessly cruise across the quiet palm-fringed coastlines of Diu Island.",
          "Experience the thrilling parasailing and water scooters at Jampore Beach in Daman.",
          "Visit tribal artisan centers in Silvassa to purchase authentic hand-painted Warli canvases directly."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0260-2250002 (Daman & Diu Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "22°C - 31°C",
          "condition": "Tropical Coastal Breeze",
          "aqi": "Good (38 AQI)",
          "bestSeason": "November to March"
      },
      "hotels": [
          {
              "name": "The Deltin, Daman",
              "type": "5-Star Luxury Resort",
              "rating": 4.8,
              "pricePerNight": "₹15,000",
              "location": "Vapi-Daman Main Road",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Radhika Beach Resort, Diu",
              "type": "Seaside Coastal Resort",
              "rating": 4.7,
              "pricePerNight": "₹8,500",
              "location": "Nagoa Beach, Diu",
              "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Pluz Resort, Silvassa",
              "type": "Nature Tribal Luxury",
              "rating": 4.6,
              "pricePerNight": "₹7,000",
              "location": "Khanvel Road, Silvassa",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Veera Da Dhaba & Seafood, Daman",
              "cuisineType": "Coastal Seafood & Tandoori",
              "rating": 4.7,
              "mustTry": "Garlic Butter Lobster & Surmai Rava Fry",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "O Coqueiro, Diu",
              "cuisineType": "Portuguese-Goan Fusion",
              "rating": 4.8,
              "mustTry": "Portuguese Grilled Fish & Caldo Verde",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Miramar Restaurant, Daman",
              "cuisineType": "Beachfront Multi-Cuisine",
              "rating": 4.6,
              "mustTry": "Crab Masala & Prawn Biryani",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Portuguese Ramparts of Moti Daman",
              "description": "Walk through the fortified stone gates of Moti Daman Fort, visit Bom Jesus Church, relax at sunset on Devka beach.",
              "highlights": [
                  "Moti Daman Fort",
                  "Bom Jesus Church",
                  "Devka Beach"
              ]
          },
          {
              "day": 2,
              "title": "Diu Island Fortress & Nagoa Horseshoe Bay",
              "description": "Tour Diu Fort cannon bastions surrounded by the Arabian Sea, explore St. Paul’s Church, and swim at Nagoa beach.",
              "highlights": [
                  "Diu Fort",
                  "St. Paul’s Church",
                  "Nagoa Beach"
              ]
          }
      ]
  },
  'madhya-pradesh': {
      "id": "madhya-pradesh",
      "name": "Madhya Pradesh",
      "slug": "madhya-pradesh",
      "capital": "Bhopal (The City of Lakes)",
      "population": "85 Million",
      "languages": [
          "Hindi",
          "Malvi",
          "Bundeli",
          "Nimadi",
          "Bagheli",
          "Gondi"
      ],
      "heritageCount": 17,
      "festivalsCount": 15,
      "cultureCount": 18,
      "topAttraction": "Khajuraho Temples, Sanchi Stupa & Bhimbetka (3 UNESCO Sites)",
      "heroImage": "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1600&q=80",
      "description": "The Heart of Incredible India, Madhya Pradesh is an epic treasure trove of 10,000-year-old Paleolithic cave art at Bhimbetka, Emperor Ashoka’s Buddhist Great Stupa at Sanchi, the erotically sculpted Chandela temples of Khajuraho, and dense tiger forests in Kanha and Bandhavgarh.",
      "historyOverview": "Ruled by the Mauryan Empire under Ashoka, the Gupta Golden Age, the Chandelas of Khajuraho, the Parmaras of Malwa under Raja Bhoj, the Bundela kings of Orchha, and Holkars of Indore.",
      "dynasties": [
          "Mauryan Empire",
          "Gupta Dynasty",
          "Chandela Rajputs",
          "Parmara Dynasty",
          "Bundelas of Orchha",
          "Holkars of Indore"
      ],
      "cuisine": {
          "dishes": [
              "Bhutte ka Kees (grated spiced corn cooked in milk)",
              "Dal Bafla with pure desi ghee",
              "Murgh Bhopal Shahi",
              "Sev Tamatar ki Sabzi"
          ],
          "streetFood": [
              "Indori Poha with Sev & Jeeravan at Sarafa Night Market",
              "Bhopali Paya Soup",
              "Poha Jalebi",
              "Sabudana Khichdi"
          ],
          "sweets": [
              "Mawa Bati",
              "Khoprapak",
              "Garadu chaat",
              "Malpua of Jabalpur"
          ],
          "description": "Delectable cross-pollination of Rajasthani, Maharashtrian, and Nawabi culinary artistry, world-famous for its nocturnal street food culture in Indore."
      },
      "architectureStyle": "Nagara Sandstone Temple Architecture (Khajuraho), Early Buddhist Rock-Cut and Stupa Architecture (Sanchi), Bundela Palace Fortifications (Orchha)",
      "traditionalDress": "Chanderi and Maheshwari handloom silk sarees for women; Dhoti, Kurta with Safa for men",
      "folkDance": [
          "Matki dance of Malwa",
          "Gaur Maria tribal dance",
          "Rai dance of Bundelkhand",
          "Karma dance of Gonds"
      ],
      "music": [
          "Gwalior Gharana of Classical Khayal (Birthplace of Tansen)",
          "Dhrupad",
          "Instruments: Sarod, Rudra Veena, Pakhawaj"
      ],
      "bestTime": "October to March (Ideal climate for tiger safaris and monument explorations)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,200 / day",
          "midRange": "₹3,500 - ₹7,500 / day",
          "luxury": "₹16,000 - ₹45,000+ / day (Heritage Fort & Tiger Lodge Stays)"
      },
      "nearbyPlaces": [
          "Khajuraho",
          "Bhopal",
          "Indore",
          "Gwalior",
          "Orchha",
          "Ujjain",
          "Bandhavgarh",
          "Kanha"
      ],
      "hiddenGems": [
          "Orchha cenotaphs on Betwa river",
          "Bhedaghat Marble Rocks at Jabalpur",
          "Chanderi weaver town",
          "Mandu Afghan ruined citadel"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Madhya Pradesh is officially recognized as the \"Tiger State of India\", harboring over 785 wild Royal Bengal Tigers.",
          "Bhimbetka rock shelters contain human cave paintings dating back over 30,000 years to the Upper Paleolithic age.",
          "Sanchi Stupa is the oldest preserved stone structure in India, commissioned by Emperor Ashoka in the 3rd century BCE."
      ],
      "travelTips": [
          "Visit Sarafa Bazaar in Indore after 9:00 PM when the jewelry market transforms into a glittering street food wonderland.",
          "Book morning and afternoon tiger safaris in Bandhavgarh or Kanha 90 days in advance via the MP Forest portal.",
          "Buy authentic hand-woven GI-tagged Chanderi and Maheshwari sarees directly from master weaver cooperatives."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-233-7777 (Madhya Pradesh Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "17°C - 30°C (Winter: 8°C - 23°C)",
          "condition": "Dry Continental & Forest Fresh",
          "aqi": "Moderate (62 AQI)",
          "bestSeason": "October to March"
      },
      "hotels": [
          {
              "name": "Taj Usha Kiran Palace, Gwalior",
              "type": "140-Year-Old Scindia Palace",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Jayendraganj, Lashkar, Gwalior",
              "image": "https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Lalit Temple View, Khajuraho",
              "type": "UNESCO Temple View Resort",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Opposite Circuit House, Khajuraho",
              "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Mahua Kothi, Bandhavgarh (Taj Safari)",
              "type": "Ultra Luxury Wilderness Safari Lodge",
              "rating": 5,
              "pricePerNight": "₹48,000",
              "location": "Bandhavgarh National Park",
              "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Sarafa Night Food Street, Indore",
              "cuisineType": "Iconic Nocturnal Street Gastronomy",
              "rating": 4.9,
              "mustTry": "Bhutte ka Kees, Joshi Dahi Bada & Malpua",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Shaukat Mahal Restaurant, Bhopal",
              "cuisineType": "Nawabi Mughlai Heritage",
              "rating": 4.7,
              "mustTry": "Bhopali Gosht Korma & Biryani",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Raja Cafe, Khajuraho",
              "cuisineType": "Temple View Continental & Indian",
              "rating": 4.6,
              "mustTry": "Wood-fired Pizza & Dal Bafla",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Khajuraho Sandstone Marvels",
              "description": "Tour Western Group of Temples (Kandariya Mahadeva), marvel at intricate sculptures, attend the evening Sound & Light show.",
              "highlights": [
                  "Kandariya Mahadeva",
                  "Lakshmana Temple",
                  "Sound & Light Show"
              ]
          },
          {
              "day": 2,
              "title": "Orchha Palaces on Betwa River",
              "description": "Drive to medieval Orchha, explore Jahangir Mahal, Ram Raja Temple, and watch sunset over the 14 royal Chhatris.",
              "highlights": [
                  "Jahangir Mahal",
                  "Ram Raja Temple",
                  "Betwa Chhatris"
              ]
          },
          {
              "day": 3,
              "title": "Sanchi Stupa & Bhimbetka Caves",
              "description": "Explore Emperor Ashoka’s Great Stupa at Sanchi, followed by prehistoric cave art at Bhimbetka.",
              "highlights": [
                  "Sanchi Great Stupa",
                  "Bhimbetka Cave Art",
                  "Bhopal Upper Lake"
              ]
          }
      ]
  },
  'chhattisgarh': {
      "id": "chhattisgarh",
      "name": "Chhattisgarh",
      "slug": "chhattisgarh",
      "capital": "Raipur",
      "population": "30 Million",
      "languages": [
          "Chhattisgarhi",
          "Hindi",
          "Gondi",
          "Halbi",
          "Kudukh"
      ],
      "heritageCount": 8,
      "festivalsCount": 11,
      "cultureCount": 15,
      "topAttraction": "Chitrakote Falls (Niagara of India) & Bastar Palace",
      "heroImage": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1600&q=80",
      "description": "The ancient Dakshina Kosala, Chhattisgarh is a cradle of dense Sal forests, thunderous horseshoe waterfalls at Chitrakote, 4,000-year-old Bell Metal Dhokra lost-wax casting, and the world’s longest 75-day festival: Bastar Dussehra.",
      "historyOverview": "Maternal homeland of Lord Rama (Mata Kaushalya temple at Chandkhuri). Ruled by the Sarabhapuriya and Somavamshi dynasties of Sirpur, the Kalachuris of Ratanpur, and the royal Kakatiya kings of Bastar.",
      "dynasties": [
          "Somavamshi Dynasty of Sirpur",
          "Kalachuris of Ratanpur",
          "Kakatiyas of Bastar",
          "Nagas of Bastar"
      ],
      "cuisine": {
          "dishes": [
              "Chila (Crisp fermented rice flour crepes with green tomato chutney)",
              "Muthia (Steamed seasoned rice flour dumplings)",
              "Dubki Kadhi",
              "Aamat (Bastar tribal bamboo-shoot stew)"
          ],
          "streetFood": [
              "Fara (Crispy steamed rice fingers)",
              "Bafauri (Chana dal steamed dumplings)",
              "Chausela (Crisp poori made from rice dough)"
          ],
          "sweets": [
              "Dehrori (Cardamom syrup-soaked rice dumplings)",
              "Khurmi",
              "Babila sweet",
              "Tasma (Rice pudding)"
          ],
          "description": "The \"Rice Bowl of India\", its culinary tradition honors over 20,000 indigenous rice varieties, mahua flowers, wild tender bamboo shoots, and green uncultivated forest herbs (bhaji)."
      },
      "architectureStyle": "7th-Century Terracotta Brick Temples (Lakshmana Temple at Sirpur), Kakatiya Tribal Stone Fortresses (Bastar Palace), Bastar Ghotul wooden architecture",
      "traditionalDress": "Lugda saree (Kosa silk handloom) with Polha silver ornaments for women; Dhoti, Pagri with Bastar cotton towel for men",
      "folkDance": [
          "Panthi dance of Satnami community",
          "Raut Nacha (Cowherd folk dance)",
          "Karma dance",
          "Sua Nacha (Parrot dance)"
      ],
      "music": [
          "Pandavani (Mahabharata ballad singing by Teejan Bai)",
          "Bhartahari",
          "Instruments: Mandar drum, Mohri trumpet, Chikara, Timki"
      ],
      "bestTime": "October to March (Ideal for waterfall fullness, pleasant temperatures, and Bastar festivals)",
      "estimatedDailyBudget": {
          "budget": "₹1,000 - ₹1,800 / day",
          "midRange": "₹3,000 - ₹5,500 / day",
          "luxury": "₹10,000 - ₹22,000+ / day"
      },
      "nearbyPlaces": [
          "Bastar (Jagdalpur)",
          "Sirpur",
          "Raipur",
          "Mainpat (Tibetan Settlement)",
          "Bhoramdeo",
          "Kanger Valley National Park"
      ],
      "hiddenGems": [
          "Tirathgarh multi-tiered waterfall",
          "Kutumsar subterranean limestone caves",
          "Bhoramdeo (Khajuraho of Chhattisgarh)",
          "Chitradhara waterfalls"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Chitrakote Falls on the Indravati River is the widest waterfall in India, spreading nearly 300 meters across during monsoons.",
          "Bastar Dussehra lasts for 75 days, making it the longest festival celebrated on Earth, focusing not on Rama but on Goddess Danteshwari.",
          "Sirpur is one of the largest Buddhist archaeological excavation sites in the world, visited and praised by Chinese pilgrim Xuanzang in 639 CE."
      ],
      "travelTips": [
          "Hire a local tribal guide when exploring the pitch-black subterranean stalactite formations of Kutumsar Caves.",
          "Purchase genuine GI-tagged Bastar Dhokra (bell metal) and wrought iron crafts directly from the artisans at Kondagaon.",
          "Visit the weekly tribal haats (markets) in Jagdalpur and Tokapal for an authentic window into ancient barter trade."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-102-6415 (Chhattisgarh Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 31°C (Winter: 10°C - 24°C)",
          "condition": "Tropical Forest Breeze",
          "aqi": "Good (40 AQI in Bastar)",
          "bestSeason": "October to February"
      },
      "hotels": [
          {
              "name": "Bastar Jungle Resort, Jagdalpur",
              "type": "Eco-Luxury Forest Resort",
              "rating": 4.8,
              "pricePerNight": "₹9,500",
              "location": "Near Kanger Valley, Jagdalpur",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Courtyard by Marriott, Raipur",
              "type": "Contemporary City Luxury",
              "rating": 4.8,
              "pricePerNight": "₹8,500",
              "location": "NH-6, Labhandi, Raipur",
              "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Dandami Luxury Cottages, Chitrakote",
              "type": "Waterfall Cliff Cottages",
              "rating": 4.7,
              "pricePerNight": "₹6,000",
              "location": "Chitrakote Falls Viewpoint",
              "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Gadh Kalewa, Raipur",
              "cuisineType": "Authentic Chhattisgarhi Folk Thali",
              "rating": 4.8,
              "mustTry": "Chila, Muthia, Fara & Dehrori",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Shamrock Greens Restaurant, Raipur",
              "cuisineType": "Multi-Cuisine Fine Dining",
              "rating": 4.6,
              "mustTry": "Dal Tadka & Kebab Platter",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bastar Tribal Kitchen, Jagdalpur",
              "cuisineType": "Traditional Bastar Forest Flavors",
              "rating": 4.7,
              "mustTry": "Aamat Bamboo Stew & Mahua Juice",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Heritage of Sirpur & Mata Kaushalya Temple",
              "description": "Explore 7th-century brick Lakshmana Temple at Sirpur, Buddhist Viharas, and Mata Kaushalya temple on lake island.",
              "highlights": [
                  "Lakshmana Temple",
                  "Buddhist Viharas",
                  "Mata Kaushalya Temple"
              ]
          },
          {
              "day": 2,
              "title": "Bastar Chitrakote Falls & Tribal Crafts",
              "description": "Marvel at the roaring Chitrakote horseshoe waterfall, boat to the base mist, and visit Kondagaon Dhokra bell metal artisans.",
              "highlights": [
                  "Chitrakote Falls",
                  "Kondagaon Dhokra",
                  "Bastar Palace"
              ]
          }
      ]
  },
  'bihar': {
      "id": "bihar",
      "name": "Bihar",
      "slug": "bihar",
      "capital": "Patna (Ancient Pataliputra)",
      "population": "130 Million",
      "languages": [
          "Hindi",
          "Bhojpuri",
          "Maithili",
          "Magahi",
          "Angika",
          "Urdu"
      ],
      "heritageCount": 14,
      "festivalsCount": 13,
      "cultureCount": 17,
      "topAttraction": "Mahabodhi Temple Bodh Gaya & Nalanda Mahavihara (2 UNESCO Sites)",
      "heroImage": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80",
      "description": "The ancient intellectual and spiritual fulcrum of Asia, Bihar is where Prince Siddhartha attained supreme enlightenment under the Bodhi Tree at Bodh Gaya, where Lord Mahavira was born, and where the world’s first residential international university flourished at Nalanda.",
      "historyOverview": "Center of India’s greatest classical empires: the Maurya Empire of Chandragupta and Ashoka the Great, and the Gupta Golden Age from imperial Pataliputra. Seat of master mathematicians Aryabhata and Chanakya.",
      "dynasties": [
          "Haryanka Dynasty",
          "Nanda Empire",
          "Maurya Empire",
          "Gupta Empire",
          "Pala Empire of Nalanda"
      ],
      "cuisine": {
          "dishes": [
              "Litti Chokha roasted over cow-dung charcoal with sattu and ghee",
              "Bihari Mutton Curry (Champaran Ahuna Handi)",
              "Dal Pitha",
              "Sattu Paratha"
          ],
          "streetFood": [
              "Patna Maurya Lok Chaat",
              "Chana Ghugni with beaten rice (Chura)",
              "Singhada"
          ],
          "sweets": [
              "Khaja of Silao (GI Tagged)",
              "Gaya Tilkut",
              "Maner ka Laddu",
              "Anarsa with sesame seeds",
              "Thekua of Chhath Puja"
          ],
          "description": "Ancient nutrient-dense culinary wisdom centered around protein-rich roasted gram flour (Sattu), pure mustard oil, earthen clay pot cooking, and sun-baked festive Thekua."
      },
      "architectureStyle": "Ancient Buddhist Monastic Brick Architecture (Nalanda Mahavihara), Classical Stupa Architecture, Mauryan Rock-Cut Barabar Caves (oldest rock-cut caves in India)",
      "traditionalDress": "Maithili Madhubani painted sarees and Bhagalpuri Tussar Silk for women; Kurta, Dhoti with Gamchha for men",
      "folkDance": [
          "Jat-Jatin (Folk drama dance of Mithila)",
          "Jhijhiya dance for good harvest",
          "Bidesia",
          "Kajari"
      ],
      "music": [
          "Maithili classical songs of poet Vidyapati",
          "Bhojpuri Nirgun bhajans",
          "Instruments: Shehnai (Birthplace of Ustad Bismillah Khan), Dholak, Harmonium"
      ],
      "bestTime": "October to March (Pleasant dry weather, ideal for Mahabodhi pilgrimage and Chhath festival)",
      "estimatedDailyBudget": {
          "budget": "₹1,000 - ₹1,800 / day",
          "midRange": "₹3,000 - ₹6,000 / day",
          "luxury": "₹12,000 - ₹28,000+ / day"
      },
      "nearbyPlaces": [
          "Bodh Gaya",
          "Nalanda",
          "Rajgir",
          "Patna",
          "Vaishali",
          "Sasaram",
          "Bhagalpur"
      ],
      "hiddenGems": [
          "Barabar Caves (Ashoka rock-cut architecture)",
          "Rohtasgarh hill fortress",
          "Kakolat Waterfall",
          "Ghorakatora peaceful lotus lake Rajgir"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Mahabodhi Temple marks the exact Vajrasana (Diamond Throne) where Gautama Buddha attained enlightenment in 528 BCE.",
          "Nalanda University was the world’s first residential international university, housing 10,000 students and 2,000 teachers from across Asia with a 9-million-manuscript library.",
          "Chhath Puja in Bihar is the only Vedic sun festival on Earth dedicated to the rising and setting Sun, celebrated with zero commercialization and utmost purity."
      ],
      "travelTips": [
          "Spend quiet meditative hours in the inner sanctum courtyard of Mahabodhi Temple under the direct descendant of the sacred Bodhi Tree.",
          "Taste authentic Champaran Handi Mutton or Litti Chokha prepared over glowing coal embers in earthen pots.",
          "Take the aerial ropeway in Rajgir to the Vishwa Shanti Stupa atop Ratnagiri Hill for panoramic views."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-345-6112 (Bihar Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 30°C (Winter: 8°C - 22°C)",
          "condition": "Gangetic Plains Breeze",
          "aqi": "Moderate (85 AQI in Bodh Gaya)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "The Bodhi Palace Resort, Bodh Gaya",
              "type": "Spiritual Luxury Resort",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Hariharpur, Bodh Gaya",
              "image": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Hotel Maurya, Patna",
              "type": "Premier Heritage Business Hotel",
              "rating": 4.8,
              "pricePerNight": "₹9,500",
              "location": "Fraser Road, South Gandhi Maidan, Patna",
              "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Indo Hokke Hotel, Rajgir",
              "type": "Japanese Heritage Zen Hotel",
              "rating": 4.7,
              "pricePerNight": "₹8,000",
              "location": "Near Aerial Ropeway, Rajgir",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Suprabhat Restaurant, Bodh Gaya",
              "cuisineType": "Buddhist Pilgrimage & Global Vegetarian",
              "rating": 4.7,
              "mustTry": "Dal Khichdi, Tibetan Momos & Ginger Tea",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Old Champaran Meat House, Patna",
              "cuisineType": "Original Ahuna Handi Mutton",
              "rating": 4.8,
              "mustTry": "Clay Pot Mutton with Garlic Clove & Rice",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bawarchi Restaurant, Patna",
              "cuisineType": "North Indian & Bihari Thali",
              "rating": 4.6,
              "mustTry": "Litti Chokha & Sattu Cooler",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Enlightenment Trail Bodh Gaya",
              "description": "Visit Mahabodhi Temple, meditate under the Bodhi Tree, explore international Buddhist monasteries (Thai, Tibetan, Japanese).",
              "highlights": [
                  "Mahabodhi Temple",
                  "Bodhi Tree",
                  "Great Buddha Statue"
              ]
          },
          {
              "day": 2,
              "title": "Nalanda Mahavihara & Ancient Rajgir",
              "description": "Tour the UNESCO red-brick ruins of Nalanda University, take the Rajgir ropeway to Peace Pagoda and Vulture Peak.",
              "highlights": [
                  "Nalanda University Ruins",
                  "Vishwa Shanti Stupa",
                  "Griddhakuta"
              ]
          },
          {
              "day": 3,
              "title": "Pataliputra Patna & River Ganga",
              "description": "Explore Bihar Museum (world-class architecture), Golghar granary with Ganga river views, and Takht Sri Patna Sahib Gurudwara.",
              "highlights": [
                  "Bihar Museum",
                  "Golghar",
                  "Takht Sri Patna Sahib"
              ]
          }
      ]
  },
  'jharkhand': {
      "id": "jharkhand",
      "name": "Jharkhand",
      "slug": "jharkhand",
      "capital": "Ranchi (City of Waterfalls)",
      "population": "39 Million",
      "languages": [
          "Hindi",
          "Santhali",
          "Nagpuri",
          "Khortha",
          "Mundari",
          "Ho"
      ],
      "heritageCount": 7,
      "festivalsCount": 10,
      "cultureCount": 14,
      "topAttraction": "Baidyanath Jyotirlinga Dham (Deoghar) & Parasnath Jain Tirth",
      "heroImage": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "description": "The Land of Forests (Vananchal), Jharkhand is blessed with thunderous cascading waterfalls around Ranchi, the sacred 12 Jyotirlinga shrine at Baidyanath Dham, Shikharji at Parasnath (the holiest pilgrimage of Jainism), and indigenous Sohrai-Khovar mud art.",
      "historyOverview": "Homeland of Birsa Munda’s historic Ulgulan resistance against colonial oppression. Ancient trade and iron-smelting tribal culture of the Asurs, rule of the Nagvanshi kings of Chota Nagpur, and sacred Jain Tirthankara nirvanas at Shikharji.",
      "dynasties": [
          "Nagvanshi Dynasty of Chota Nagpur",
          "Chero Dynasty of Palamu",
          "Ramgarh Raj",
          "Birsa Munda Tribal Movement"
      ],
      "cuisine": {
          "dishes": [
              "Dhuska with spicy ghugni and aloo chana curry",
              "Rugra (Forest mushrooms cooked in mustard masala)",
              "Bamboo shoot curry",
              "Pitha"
          ],
          "streetFood": [
              "Chilka Roti",
              "Litti with roasted tomato chokha",
              "Charpa spicy rice pancakes"
          ],
          "sweets": [
              "Til Laddu",
              "Thekua",
              "Arsa",
              "Peda of Deoghar (made from pure condensed khoya)"
          ],
          "description": "Earthy, mineral-rich tribal cuisine cooked with locally harvested wild mushrooms (Rugra and Phutka), bamboo shoots, sal leaves, and unrefined cold-pressed mustard oil."
      },
      "architectureStyle": "Nagvanshi Stone Castles (Navratangarh), Ancient Nagara Jyotirlinga Spire (Baidyanath Dham), Shikharji Hill Monasteries",
      "traditionalDress": "Santhali Panchi and Parhan handloom cotton wraps with red border for women; Bhagwan wrap for men",
      "folkDance": [
          "Chhau dance of Seraikela (UNESCO Intangible Cultural Heritage)",
          "Paika martial dance",
          "Jhumair",
          "Karam tribal dance"
      ],
      "music": [
          "Sohrai ritual music",
          "Karam songs",
          "Instruments: Dhak, Dhol, Nagara, Shehnai, Bansuri"
      ],
      "bestTime": "October to March (Lush post-monsoon waterfalls and cool hilltop breezes)",
      "estimatedDailyBudget": {
          "budget": "₹1,000 - ₹1,800 / day",
          "midRange": "₹3,000 - ₹5,500 / day",
          "luxury": "₹10,000 - ₹24,000+ / day"
      },
      "nearbyPlaces": [
          "Ranchi",
          "Deoghar",
          "Parasnath (Giridih)",
          "Jamshedpur",
          "Netarhat",
          "Betla National Park"
      ],
      "hiddenGems": [
          "Netarhat Queen of Chotanagpur sunset point",
          "Hundru & Dassam waterfalls",
          "Jonha falls",
          "Navratangarh fortified palace"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Baidyanath Dham in Deoghar is one of the revered 51 Shakti Peethas and one of the 12 sacred Shiva Jyotirlingas in India.",
          "Shikharji on Parasnath Hill is the holiest site in Jainism, where 20 of the 24 Tirthankaras attained Moksha (liberation).",
          "Sohrai and Khovar mural paintings of Hazaribagh have received the prestigious GI tag for their matriarchal natural earth-pigment artistry."
      ],
      "travelTips": [
          "Carry umbrellas and extra dry clothes when descending the rocky steps to Dassam and Hundru waterfalls.",
          "Sample the famous pure khoya Peda near the Baidyanath temple corridor in Deoghar.",
          "Visit Hazaribagh villages to witness indigenous women hand-painting Sohrai wildlife murals during harvest season."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0651-2400981 (Jharkhand Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "16°C - 28°C (Winter: 7°C - 20°C in Netarhat)",
          "condition": "Pleasant Plateau & Forest Breeze",
          "aqi": "Good (45 AQI outside industrial zones)",
          "bestSeason": "October to February"
      },
      "hotels": [
          {
              "name": "Radisson Blu Hotel, Ranchi",
              "type": "5-Star City Luxury",
              "rating": 4.8,
              "pricePerNight": "₹11,000",
              "location": "Main Road, Kadru Diversion, Ranchi",
              "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Sonnet, Jamshedpur",
              "type": "Contemporary Boutique Luxury",
              "rating": 4.7,
              "pricePerNight": "₹8,500",
              "location": "Bistupur, Jamshedpur",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Prabhat Vihar, Netarhat (Jharkhand Tourism)",
              "type": "Sunset Hilltop Lodge",
              "rating": 4.5,
              "pricePerNight": "₹3,500",
              "location": "Sunset Point, Netarhat",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Kaveri Restaurant, Ranchi",
              "cuisineType": "Traditional Vegetarian & Dhuska",
              "rating": 4.7,
              "mustTry": "Dhuska with Chana Sabzi & Thali",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Yellow Sapphire, Ranchi",
              "cuisineType": "Multi-Cuisine Buffet & Regional Flavors",
              "rating": 4.8,
              "mustTry": "Rugra Curry & Biryani",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Baidyanath Sweets, Deoghar",
              "cuisineType": "Holy Shrine Peda & Sweets",
              "rating": 4.9,
              "mustTry": "Hot Khoya Peda & Kheer Kadam",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Ranchi Waterfalls & Rock Garden",
              "description": "Visit thunderous Hundru and Dassam falls, explore Kanke Dam Rock Garden and Tagore Hill.",
              "highlights": [
                  "Hundru Falls",
                  "Dassam Falls",
                  "Tagore Hill"
              ]
          },
          {
              "day": 2,
              "title": "Sacred Baidyanath Jyotirlinga Dham",
              "description": "Early morning VIP darshan at Baidyanath Jyotirlinga in Deoghar, visit Naulakha Mandir and Basukinath.",
              "highlights": [
                  "Baidyanath Dham",
                  "Naulakha Mandir",
                  "Trikuta Parvat Ropeway"
              ]
          }
      ]
  },
  'odisha': {
      "id": "odisha",
      "name": "Odisha",
      "slug": "odisha",
      "capital": "Bhubaneswar (Temple City of India)",
      "population": "47 Million",
      "languages": [
          "Odia",
          "Hindi",
          "English",
          "Santhali",
          "Kui"
      ],
      "heritageCount": 16,
      "festivalsCount": 15,
      "cultureCount": 18,
      "topAttraction": "Konark Sun Temple (UNESCO) & Jagannath Temple Puri",
      "heroImage": "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=80",
      "description": "The Soul of Incredible India (Kalinga), Odisha is the sacred land of Lord Jagannath’s world-famous Ratha Yatra, the astronomical marvel of the Sun Temple at Konark designed as a celestial stone chariot, Chilika Lake’s Irrawaddy dolphins, and Odissi classical dance.",
      "historyOverview": "Ancient maritime empire of Kalinga whose naval merchants (Sadhabas) traded with Bali, Java, and Sumatra. Historic Kalinga War of 261 BCE transformed Emperor Ashoka from a ruthless conqueror into an apostle of Buddhist non-violence.",
      "dynasties": [
          "Mahameghavahana Dynasty of Kharavela",
          "Bhauma-Kara Dynasty",
          "Somavamshi Dynasty",
          "Eastern Ganga Dynasty (Built Konark & Puri)",
          "Gajapati Empire"
      ],
      "cuisine": {
          "dishes": [
              "Pakhala Bhata (Fermented rice with curd, roasted cumin, and fried fish/greens)",
              "Dalma (Lentils simmered with raw papaya, pumpkin, and roasted spice)",
              "Chhena Tarkari",
              "Crab Kalia from Chilika"
          ],
          "streetFood": [
              "Cuttack Dahi Bara Aloodum with Ghugni",
              "Gupchup",
              "Chaul Bara",
              "Piaji"
          ],
          "sweets": [
              "Chhena Poda (Caramelized baked cottage cheese cake)",
              "Rasagola of Pahala (GI Tagged)",
              "Chhena Gaja",
              "Khaja of Puri Anandabazar"
          ],
          "description": "Divine temple gastronomy honed in the massive ancient kitchens of Jagannath Temple (Mahaprasad), cooked only in earthen pots stacked over firewood with no onion or garlic."
      },
      "architectureStyle": "Kalinga Temple Architecture with towering Rekha Deula (sanctum spires), Jagamohana (assembly halls), and intricate stone relief carvings",
      "traditionalDress": "Sambalpuri Ikat and Bomkai silk sarees for women; Cotton Sambalpuri Kurta with Dhoti for men",
      "folkDance": [
          "Odissi (One of the oldest surviving classical dances)",
          "Gotipua (Precursor to Odissi by young acrobatic dancers)",
          "Chhau of Mayurbhanj",
          "Sambalpuri Dalkhai"
      ],
      "music": [
          "Odissi Classical Music",
          "Geeta Govinda recitals by Jayadeva",
          "Instruments: Mardala, Flute, Cymbals, Sitar"
      ],
      "bestTime": "October to March (Cool ocean breeze and vibrant beach and dance festivals)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹7,000 / day",
          "luxury": "₹14,000 - ₹35,000+ / day"
      },
      "nearbyPlaces": [
          "Puri",
          "Konark",
          "Bhubaneswar",
          "Chilika Lake",
          "Raghurajpur Heritage Crafts Village",
          "Gopalpur-on-Sea"
      ],
      "hiddenGems": [
          "Raghurajpur Pattachitra artisan village",
          "Debrigarh tiger forest",
          "Mangalajodi birding wetland on Chilika",
          "Dhauli Peace Pagoda"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Konark Sun Temple has 24 intricately carved stone wheels that function as precise sundials, calculating time accurately to the exact minute.",
          "The kitchen of Jagannath Temple in Puri is the largest traditional kitchen in the world, where 7 earthen pots are placed on top of each other over one fire, and miraculously the top pot cooks first.",
          "Chilika Lake is Asia’s largest brackish water lagoon, hosting over a million migratory birds from Siberia and Lake Baikal in winter."
      ],
      "travelTips": [
          "Visit Konark Sun Temple during the early morning golden hour when the stone wheels glow amber against the rising sun.",
          "Savor fresh hot Chhena Poda sliced straight out of sal-leaf lined ovens at Pahala highway between Cuttack and Bhubaneswar.",
          "Spend a morning in Raghurajpur village watching master chitrakars paint palm-leaf Pattachitra scrolls."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-208-1414 (Odisha Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "22°C - 32°C (Winter: 14°C - 26°C)",
          "condition": "Breezy Coastal & Bay of Bengal",
          "aqi": "Good (48 AQI in Puri)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "Mayfair Waves, Puri",
              "type": "Luxury Beachfront Palace",
              "rating": 4.9,
              "pricePerNight": "₹18,000",
              "location": "Chakratirtha Road, Puri Beach",
              "image": "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Welcomhotel by ITC, Bhubaneswar",
              "type": "5-Star Temple Architectural Hotel",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Dumduma, Bhubaneswar",
              "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Lotus Eco Resort, Konark",
              "type": "Pristine Beach & Backwater Cottages",
              "rating": 4.7,
              "pricePerNight": "₹8,500",
              "location": "Ramchandi Beach, Konark",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Dalma Restaurant, Bhubaneswar",
              "cuisineType": "Authentic Traditional Odia Feast",
              "rating": 4.8,
              "mustTry": "Pakhala Bhata Thali, Dalma & Crab Curry",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Raghu Dahi Bara Aloodum, Cuttack",
              "cuisineType": "Legendary Street Dahi Bara",
              "rating": 4.9,
              "mustTry": "Dahi Bara soaked in spiced buttermilk with spicy aloodum",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Pahala Sweet Corner, Highway NH16",
              "cuisineType": "Traditional Hot Chhena Sweets",
              "rating": 4.9,
              "mustTry": "Fresh Baked Chhena Poda & Pahala Rasagola",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Bhubaneswar Temple City & Caves",
              "description": "Marvel at the 11th-century Lingaraj Temple, Rajarani Temple’s sandstone carvings, and Jain rock-cut caves of Udayagiri & Khandagiri.",
              "highlights": [
                  "Lingaraj Temple",
                  "Rajarani Temple",
                  "Udayagiri Caves"
              ]
          },
          {
              "day": 2,
              "title": "Konark Celestial Chariot & Puri Beach",
              "description": "Tour the UNESCO Sun Temple of Konark, drive the scenic Marine Drive, and experience evening Aarti at Puri Jagannath Temple.",
              "highlights": [
                  "Konark Sun Temple",
                  "Ramchandi Beach",
                  "Jagannath Temple"
              ]
          },
          {
              "day": 3,
              "title": "Chilika Lagoon & Raghurajpur Artists",
              "description": "Take a sunrise catamaran into Chilika Lake to spot Irrawaddy dolphins, then explore palm-leaf Pattachitra art in Raghurajpur.",
              "highlights": [
                  "Chilika Lake",
                  "Irrawaddy Dolphins",
                  "Raghurajpur Crafts"
              ]
          }
      ]
  },
  'west-bengal': {
      "id": "west-bengal",
      "name": "West Bengal",
      "slug": "west-bengal",
      "capital": "Kolkata (The City of Joy)",
      "population": "98 Million",
      "languages": [
          "Bengali",
          "English",
          "Hindi",
          "Nepali",
          "Santhali"
      ],
      "heritageCount": 16,
      "festivalsCount": 17,
      "cultureCount": 20,
      "topAttraction": "Sundarbans Mangrove Tiger Reserve & Darjeeling Himalayan Railway (UNESCO)",
      "heroImage": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1600&q=80",
      "description": "The cultural and intellectual heart of Renaissance India, West Bengal spans from the snow-capped Himalayan peaks of Kanchenjunga in Darjeeling to the tidal mangrove labyrinth of the Royal Bengal Tiger in the Sundarbans, and the grandeur of Kolkata’s Durga Puja (UNESCO Intangible Cultural Heritage).",
      "historyOverview": "Seat of the ancient Gauda and Pala Empires, the Bengal Renaissance spearheaded by Rabindranath Tagore, Swami Vivekananda, and Netaji Subhash Chandra Bose. Capital of British India until 1911.",
      "dynasties": [
          "Pala Empire",
          "Sena Dynasty",
          "Sultans of Bengal",
          "Nawabs of Bengal (Murshidabad)",
          "British Raj Colonial Presidency"
      ],
      "cuisine": {
          "dishes": [
              "Shorshe Ilish (Hilsa fish in pungent mustard gravy)",
              "Kosha Mangsho with fluffy Luchi",
              "Chingri Malaikari (Prawns in spiced coconut cream)",
              "Shukto (Bitter-sweet vegetable digestif)"
          ],
          "streetFood": [
              "Kolkata Kathi Roll at Nizam’s",
              "Puchka with spicy tamarind water",
              "Mughlai Paratha",
              "Telebhaja and Singara"
          ],
          "sweets": [
              "Sponge Rosogolla (Nobin Chandra Das)",
              "Sandesh (Nolen Gur)",
              "Mishti Doi in terracotta pots",
              "Cham Cham"
          ],
          "description": "Sophisticated gastronomy defined by the Panch Phoron five-spice blend, pure mustard oil, freshwater fish delicacies, and artisanal cottage-cheese sweets sweetened with date palm jaggery."
      },
      "architectureStyle": "Bengal Terracotta Brick Temples (Bishnupur), Colonial Neo-Classical & Victorian Baroque (Victoria Memorial, Howrah Bridge), Himalayan Mountain Railway",
      "traditionalDress": "Baluchari and Jamdani silk sarees for women; Dhuti-Panjabi (Kurta) with pleated silk scarf for men",
      "folkDance": [
          "Chhau of Purulia (UNESCO Mask Dance)",
          "Baul devotional trance dance",
          "Gambhira",
          "Brita dance"
      ],
      "music": [
          "Rabindra Sangeet",
          "Baul mystic songs (Lalon Shah)",
          "Instruments: Ektara, Dotara, Khol, Khamak"
      ],
      "bestTime": "October to March (Durga Puja celebrations in autumn, pleasant weather across Kolkata and Darjeeling)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,200 / day",
          "midRange": "₹3,500 - ₹7,500 / day",
          "luxury": "₹16,000 - ₹45,000+ / day"
      },
      "nearbyPlaces": [
          "Darjeeling",
          "Sundarbans",
          "Kolkata",
          "Shantiniketan",
          "Bishnupur",
          "Murshidabad",
          "Kalimpong"
      ],
      "hiddenGems": [
          "Bishnupur terracotta temples",
          "Shantiniketan Tagore university ashram",
          "Mirik Himalayan lake",
          "Hazarduari Palace Murshidabad"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Durga Puja of Kolkata is inscribed on the UNESCO Representative List of Intangible Cultural Heritage of Humanity.",
          "The Sundarbans is the world’s largest single block of tidal halophytic mangrove forest and the only mangrove habitat inhabited by wild tigers.",
          "Darjeeling Himalayan Railway (Toy Train) is a UNESCO World Heritage railway engineered in 1881, scaling up to 7,400 feet with dramatic loops and zig-zags."
      ],
      "travelTips": [
          "Experience Kolkata during Durga Puja (September-October) to witness thousands of breathtaking artistic pandals across the city.",
          "Take an early 4:00 AM trip to Tiger Hill in Darjeeling to watch the sunrise ignite Mount Kanchenjunga in gold.",
          "Taste warm winter Nolen Gur Sandesh prepared with seasonal date-palm sap."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-212-1655 (West Bengal Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "19°C - 30°C (Darjeeling: 4°C - 15°C)",
          "condition": "Tropical River Breeze & Himalayan Frost",
          "aqi": "Moderate (70 AQI in heritage zones)",
          "bestSeason": "October to March"
      },
      "hotels": [
          {
              "name": "The Oberoi Grand, Kolkata",
              "type": "Grand Colonial Luxury Icon",
              "rating": 5,
              "pricePerNight": "₹24,000",
              "location": "15 Jawaharlal Nehru Road, Esplanade",
              "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Glenburn Tea Estate, Darjeeling",
              "type": "Colonial Planter’s Luxury Chalet",
              "rating": 5,
              "pricePerNight": "₹38,000",
              "location": "Glenburn Tea Estate, Darjeeling",
              "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Windamere Hotel, Darjeeling",
              "type": "Historic Heritage Hill Station Stay",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Observatory Hill, Darjeeling",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "6 Ballygunge Place, Kolkata",
              "cuisineType": "Authentic Traditional Bengali Feast",
              "rating": 4.9,
              "mustTry": "Shorshe Ilish, Kosha Mangsho & Mishti Doi",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Peter Cat, Park Street",
              "cuisineType": "Iconic Heritage Continental-Indian",
              "rating": 4.8,
              "mustTry": "Chelo Kebab Platter & Sizzlers",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Keventer’s, Darjeeling",
              "cuisineType": "Himalayan Open-Air Heritage Breakfast",
              "rating": 4.7,
              "mustTry": "English Breakfast & Darjeeling First Flush Tea",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Colonial Heritage & Hooghly Riverfront",
              "description": "Victoria Memorial marble splendor, walk across Howrah Bridge, take a boat ride at Princep Ghat, visit Dakshineswar Kali Temple.",
              "highlights": [
                  "Victoria Memorial",
                  "Howrah Bridge",
                  "Princep Ghat"
              ]
          },
          {
              "day": 2,
              "title": "Darjeeling Himalayan Toy Train & Tea Hills",
              "description": "Ride the UNESCO steam toy train around Batasia Loop, tour Makaibari tea gardens, watch sunset over Kanchenjunga.",
              "highlights": [
                  "Batasia Loop",
                  "Toy Train",
                  "Tea Gardens"
              ]
          },
          {
              "day": 3,
              "title": "Wild Sundarbans Boat Safari",
              "description": "Cruise through narrow mangrove creeks in an authorized eco-boat, climb Sajnekhali watchtower for tiger and crocodile tracking.",
              "highlights": [
                  "Mangrove Creeks",
                  "Sajnekhali Watchtower",
                  "Sundarban Safari"
              ]
          }
      ]
  },
  'sikkim': {
      "id": "sikkim",
      "name": "Sikkim",
      "slug": "sikkim",
      "capital": "Gangtok",
      "population": "690,000",
      "languages": [
          "Nepali",
          "Sikkimese (Bhutia)",
          "Lepcha",
          "English",
          "Hindi"
      ],
      "heritageCount": 7,
      "festivalsCount": 11,
      "cultureCount": 14,
      "topAttraction": "Khangchendzonga National Park (UNESCO Mixed Heritage) & Rumtek Monastery",
      "heroImage": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
      "description": "India’s mystical Himalayan crown and the world’s first 100% organic state, Sikkim is sheltered under Mount Kanchenjunga (the world’s third-highest peak), famous for ancient cliffside Buddhist monasteries, crystal high-altitude lakes at Gurudongmar, and rhododendron sanctuaries.",
      "historyOverview": "Sacred hidden valley (Beyul) blessed by Guru Padmasambhava in the 8th century. Governed by the Buddhist Chogyal monarchs of the Namgyal dynasty from 1642 until peacefully integrating into the Republic of India as its 22nd state in 1975.",
      "dynasties": [
          "Namgyal Chogyal Dynasty",
          "Tibetan Kagyu & Nyingma Monastic Traditions"
      ],
      "cuisine": {
          "dishes": [
              "Gundruk Soup (fermented wild leafy greens)",
              "Steamed Pork or Vegetable Momos with spicy Dalle chili chutney",
              "Thukpa noodle broth",
              "Sha Phaley (Crispy meat-filled fried bread)",
              "Kinema curry"
          ],
          "streetFood": [
              "Tibetan Momos at MG Marg",
              "Tingmo (Steamed floral lotus buns)",
              "Gyathuk"
          ],
          "sweets": [
              "Sel Roti (Traditional ring-shaped crispy rice bread)",
              "Khabzey",
              "Chhurpi sweet"
          ],
          "description": "Pure, organic, fermented Himalayan cuisine emphasizing wild mountain herbs, local organic vegetables, bamboo shoots, and fiery indigenous Dalle Khursani chillies."
      },
      "architectureStyle": "Tibetan Tibetan Buddhist Monastic Architecture (Dzongs & Gompas) with golden dragon finials, hand-painted Thangka frescoes, and prayer-wheel galleries",
      "traditionalDress": "Bakhu (Kho) wrap dress with silk Honju blouse for women; Bakhu tied with cotton Patuka belt for men",
      "folkDance": [
          "Singhi Chham (Snow Lion Dance)",
          "Yak Chham",
          "Maruni folk dance",
          "Lu Khangthamo"
      ],
      "music": [
          "Monastic horn (Dungchen) & cymbal chants",
          "Lepcha folk songs",
          "Instruments: Gyaling, Damphu, Tungna"
      ],
      "bestTime": "March to May (Rhododendron floral canopy) and October to mid-December (Clear views of snow peaks)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,500 / day",
          "luxury": "₹16,000 - ₹40,000+ / day"
      },
      "nearbyPlaces": [
          "Gangtok",
          "Pelling",
          "Lachung",
          "Lachen",
          "Yumthang Valley of Flowers",
          "Ravangla Buddha Park"
      ],
      "hiddenGems": [
          "Gurudongmar Lake at 17,800 ft",
          "Yumthang Hot Springs",
          "Yuksom historic first capital",
          "Tashiding holy hilltop monastery"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Khangchendzonga National Park is India’s first and only UNESCO World Heritage \"Mixed\" site, honoring both biodiversity and sacred spiritual culture.",
          "Sikkim is the first fully certified 100% organic state on Earth, winning the prestigious UN Future Policy Gold Award.",
          "Gurudongmar Lake at 17,800 feet is one of the highest lakes in the world, with a sacred section that miraculously never freezes even at -30°C."
      ],
      "travelTips": [
          "Carry passport photos and voter ID/passports to obtain Inner Line Permits (ILP) for Nathula Pass and North Sikkim.",
          "Stroll pedestrian-only MG Marg in Gangtok in the evening; no vehicles, smoking, or littering are permitted.",
          "Try the organic local cherry pepper pickle (Dalle Khursani), one of the hottest chillies in the world."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "03592-209090 (Sikkim Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "10°C - 20°C (Winter: 0°C - 10°C)",
          "condition": "Pristine Alpine Mountain Air",
          "aqi": "Exceptional (12 AQI)",
          "bestSeason": "March to May & Oct to Dec"
      },
      "hotels": [
          {
              "name": "Mayfair Spa Resort & Casino, Gangtok",
              "type": "Monastery Architecture Luxury",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Ranipool, Gangtok",
              "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Elgin Nor-Khill, Gangtok",
              "type": "Royal King’s Guest House Heritage",
              "rating": 4.8,
              "pricePerNight": "₹15,000",
              "location": "Paljor Stadium Road, Gangtok",
              "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Yarlam Resort, Lachung",
              "type": "Alpine Snow Valley Resort",
              "rating": 4.7,
              "pricePerNight": "₹12,000",
              "location": "Lachung Valley, North Sikkim",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Taste of Tibet, MG Marg Gangtok",
              "cuisineType": "Authentic Tibetan & Sherpa Delicacies",
              "rating": 4.8,
              "mustTry": "Steamed Tingmo, Beef/Veg Momos & Thukpa",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Nimtho, MG Marg",
              "cuisineType": "Traditional Sikkimese Organic Thali",
              "rating": 4.8,
              "mustTry": "Gundruk Soup, Sel Roti & Kodo Millet Pancakes",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Baker’s Cafe, Gangtok",
              "cuisineType": "Himalayan View Artisan Bakery",
              "rating": 4.7,
              "mustTry": "Warm Cinnamon Rolls & Darjeeling Tea",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Gangtok & Divine Rumtek Monastery",
              "description": "Explore Rumtek Dharma Chakra Centre, Namgyal Institute of Tibetology, ropeway cable car over the valley.",
              "highlights": [
                  "Rumtek Monastery",
                  "Tibetology Institute",
                  "MG Marg"
              ]
          },
          {
              "day": 2,
              "title": "Sacred Tsomgo Glacial Lake & Baba Mandir",
              "description": "Ascend to 12,310 ft to glacial Tsomgo (Changu) Lake, ride the yak along snow banks, and visit the historic Nathu La pass border.",
              "highlights": [
                  "Tsomgo Lake",
                  "Nathu La Pass",
                  "Baba Mandir"
              ]
          },
          {
              "day": 3,
              "title": "Ravangla Buddha Park & Pelling Kanchenjunga",
              "description": "Visit the 130-foot golden Buddha statue at Ravangla, explore Skywalk and Pemayangtse Monastery facing Kanchenjunga.",
              "highlights": [
                  "Buddha Park",
                  "Pelling Skywalk",
                  "Pemayangtse Monastery"
              ]
          }
      ]
  },
  'assam': {
      "id": "assam",
      "name": "Assam",
      "slug": "assam",
      "capital": "Dispur (Guwahati)",
      "population": "36 Million",
      "languages": [
          "Assamese",
          "Bodo",
          "Bengali",
          "Mising",
          "Karbi"
      ],
      "heritageCount": 14,
      "festivalsCount": 13,
      "cultureCount": 16,
      "topAttraction": "Kaziranga National Park (UNESCO) & Kamakhya Shakti Temple",
      "heroImage": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
      "description": "The Gateway to the Northeast, Assam is blessed by the mighty Brahmaputra River, rolling manicured emerald tea gardens producing world-class CTC and orthodox tea, the majestic Great Indian One-horned Rhinoceros in Kaziranga, and golden Muga silk.",
      "historyOverview": "Ruled for 600 unbroken years by the valorous Ahom Dynasty (1228–1826) who defeated the Mughal Empire in 17 battles, notably under General Lachit Borphukan at Saraighat in 1671. Ancient Kamarupa kingdom mentioned in the Mahabharata.",
      "dynasties": [
          "Varman Dynasty of Kamarupa",
          "Pala Dynasty of Kamarupa",
          "Ahom Dynasty of Garhgaon & Rangpur",
          "Koch Dynasty"
      ],
      "cuisine": {
          "dishes": [
              "Masor Tenga (Tangy river fish curry with elephant apple or tomato)",
              "Khar (Indigenous alkaline delicacy prepared with sun-dried banana peel ash)",
              "Duck meat with ash gourd (Kumura)",
              "Pithe"
          ],
          "streetFood": [
              "Luchi with Alu Bhaji at Fancy Bazar",
              "Assamese Pork Roast with Bamboo Shoot",
              "Ghugni"
          ],
          "sweets": [
              "Til Pitha (Crispy rice roll stuffed with sesame and jaggery)",
              "Narikol Laru (Coconut laddus)",
              "Ghila Pitha",
              "Bora Saul Payas"
          ],
          "description": "Gentle, aromatic cuisine that shuns heavy dried spices in favor of fresh indigenous herbs, Kaji Nemu lemon, pungent fermented bamboo shoots, and unpolished sticky red rice (Bora Saul)."
      },
      "architectureStyle": "Ahom Dynasty Architecture with terracotta and buffalo-horn mortar bonding (Rang Ghar, Kareng Ghar), Nilachal Temple Architecture (Kamakhya), Satra monasteries of Majuli",
      "traditionalDress": "Mekhela Chador woven from golden Muga silk or Eri silk with red Guna motifs for women; Dhoti, Kurta with traditional red-white Gamosa for men",
      "folkDance": [
          "Bihu (Vibrant spring harvest dance)",
          "Sattriya (Classical dance created by Srimanta Sankardev)",
          "Bagurumba of Bodos",
          "Jhumur dance of tea tribes"
      ],
      "music": [
          "Bihu Geeti songs",
          "Borgeet classical devotional songs",
          "Instruments: Pepa (Buffalo horn trumpet), Dhol, Gogona, Tokari"
      ],
      "bestTime": "November to April (Ideal for Kaziranga wildlife safaris and festive Rongali Bihu in spring)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹7,000 / day",
          "luxury": "₹15,000 - ₹38,000+ / day"
      },
      "nearbyPlaces": [
          "Guwahati",
          "Kaziranga",
          "Majuli (World’s largest river island)",
          "Sivasagar (Ahom Capital)",
          "Manas National Park",
          "Tezpur"
      ],
      "hiddenGems": [
          "Majuli Vaishnavite Satra monasteries",
          "Charaideo Maidams (UNESCO Royal Ahom Pyramids)",
          "Gibbon Wildlife Sanctuary",
          "Sivasagar Rang Ghar amphitheater"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Kaziranga National Park holds two-thirds of the world’s entire population of the Great Indian One-horned Rhinoceros.",
          "Charaideo Maidams (the royal burial mounds of the Ahom kings) were inscribed as a UNESCO World Heritage Site in 2024.",
          "Majuli is officially recognized by Guinness World Records as the world’s largest inhabited river island on the Brahmaputra River."
      ],
      "travelTips": [
          "Book an early morning elephant or jeep safari in the Central (Kohora) or Western (Bagori) ranges of Kaziranga for guaranteed rhino sightings.",
          "Honored guests are traditionally greeted with a handwoven red-and-white Gamosa wrapped respectfully around the shoulders.",
          "Sample a cup of single-estate authentic golden-tipped Assam Black Tea without milk or sugar to savor its natural malty notes."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-345-3999 (Assam Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 30°C (Winter: 10°C - 24°C)",
          "condition": "Subtropical Lush Valley",
          "aqi": "Good (35 AQI in Kaziranga)",
          "bestSeason": "November to April"
      },
      "hotels": [
          {
              "name": "Diphlu River Lodge, Kaziranga",
              "type": "Eco-Luxury Safari Cottages (Royalty Choice)",
              "rating": 5,
              "pricePerNight": "₹28,000",
              "location": "Near Kohora Range, Kaziranga",
              "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Vivanta Guwahati",
              "type": "Contemporary 5-Star Luxury",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Khanapara, GS Road, Guwahati",
              "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Iora The Retreat, Kaziranga",
              "type": "Tea Garden Border Retreat",
              "rating": 4.7,
              "pricePerNight": "₹9,500",
              "location": "Bokakhat, Kaziranga",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Paradise Restaurant, Guwahati",
              "cuisineType": "Classic Assamese Parampara Thali",
              "rating": 4.8,
              "mustTry": "Masor Tenga, Khar, Duck Roast & Payas",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Maihang, Guwahati",
              "cuisineType": "Indigenous Northeast Tribal Specialities",
              "rating": 4.7,
              "mustTry": "Pork with Bamboo Shoot & Joha Rice",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Khorikaa Restaurant, GS Road",
              "cuisineType": "Assamese Barbecue & Traditional",
              "rating": 4.7,
              "mustTry": "Smoked Fish Khorikaa & Duck Curry",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Sacred Kamakhya & Brahmaputra Sunset",
              "description": "Early morning darshan at Kamakhya Temple atop Nilachal Hill, visit Umananda island temple, sunset river cruise on the Brahmaputra.",
              "highlights": [
                  "Kamakhya Temple",
                  "Umananda Peacock Island",
                  "Brahmaputra Cruise"
              ]
          },
          {
              "day": 2,
              "title": "Kaziranga One-Horned Rhino Safari",
              "description": "Morning jeep safari in Bagori range, visit Kaziranga Orchid and Biodiversity Park, evening Bihu dance show.",
              "highlights": [
                  "Rhino Safari",
                  "Orchid Biodiversity Park",
                  "Bihu Cultural Show"
              ]
          },
          {
              "day": 3,
              "title": "Ahom Royal Heritage Sivasagar",
              "description": "Explore Rang Ghar (Asia’s oldest amphitheatre), Kareng Ghar palace, and the royal burial mounds of Charaideo Maidams.",
              "highlights": [
                  "Rang Ghar",
                  "Kareng Ghar",
                  "Charaideo Maidams"
              ]
          }
      ]
  },
  'arunachal-pradesh': {
      "id": "arunachal-pradesh",
      "name": "Arunachal Pradesh",
      "slug": "arunachal-pradesh",
      "capital": "Itanagar",
      "population": "1.6 Million",
      "languages": [
          "Nyishi",
          "Monpa",
          "Adi",
          "Apatani",
          "Hindi",
          "English"
      ],
      "heritageCount": 9,
      "festivalsCount": 14,
      "cultureCount": 16,
      "topAttraction": "Tawang Monastery & Ziro Valley Cultural Landscape",
      "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80",
      "description": "The Land of the Dawn-Lit Mountains, Arunachal Pradesh is the first place in India to welcome the sunrise, featuring the massive 400-year-old cliffside Tawang Monastery (second largest in the world), sacred high-altitude Sela Pass lakes, and the pine-scented UNESCO candidate landscape of Ziro Valley.",
      "historyOverview": "Mentioned in ancient Kalika Purana as the Prabhu Mountains where sage Parashurama washed away sins at Parshuram Kund. Ruled by indigenous Monpa, Apatani, Adi, and Nyishi village council democracies (Keba), with Tawang Monastery founded by Merak Lama Lodre Gyatso in 1681.",
      "dynasties": [
          "Monpa Theocracy of Tawang",
          "Chutia Kingdom Outposts",
          "Indigenous Chieftain Confederacies"
      ],
      "cuisine": {
          "dishes": [
              "Thukpa with handmade noodles and yak meat",
              "Zan (Warm millet porridge with fermented vegetables)",
              "Pika Pila (Bamboo shoot and pork fat pickle)",
              "Lukter (Roasted dry meat with chili flake seasoning)"
          ],
          "streetFood": [
              "Steamed Monpa Momos",
              "Chura Sabzi (Yak cheese curry with chili)",
              "Apong (Fermented rice and millet brew)"
          ],
          "sweets": [
              "Khapse (Traditional festive fried butter biscuits)",
              "Koat Pitha",
              "Honey-glazed puffed rice"
          ],
          "description": "Mountain foraging cuisine that relies on smoked meats, indigenous aromatic herbs, bamboo-steamed delicacies, fermented wild soybeans, and fiery Bhut Jolokia chillies."
      },
      "architectureStyle": "Tibetan Gelugpa Fortress Monastic Architecture (Tawang Gompa), Apatani Bamboo Raised Stilt Houses (Namlo), Cane and Rope Suspension Bridges",
      "traditionalDress": "Monpa woolen Chuba with embroidered boots for men; Apatani handwoven wrap skirt (Gale) with silver headgear for women",
      "folkDance": [
          "Aji Lhamu (Monpa masked folk opera)",
          "Chalo dance of Nocte",
          "Ponung dance of Adis",
          "Buiya dance"
      ],
      "music": [
          "Monpa Buddhist horn chants",
          "Adi festive chorus chanting",
          "Instruments: Dungchen, Dranyen, Bongos"
      ],
      "bestTime": "October to April (Crisp sunny days, snow across Sela Pass, and vibrant spring tribal festivals)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,000 - ₹8,000 / day",
          "luxury": "₹14,000 - ₹32,000+ / day"
      },
      "nearbyPlaces": [
          "Tawang",
          "Bomdila",
          "Ziro Valley",
          "Dirang",
          "Itanagar",
          "Pasighat",
          "Bhalukpong"
      ],
      "hiddenGems": [
          "Sangti Valley black-necked crane sanctuary",
          "Madhuri (Sangetsar) Lake",
          "Sela Pass twin lakes at 13,700 ft",
          "Namdapha rainforest tiger reserve"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Tawang Monastery, situated at 10,000 feet, is the largest Buddhist monastery in India and the second largest in the world after the Potala Palace in Lhasa.",
          "Dong Valley in Anjaw district witnesses the very first sunrise on Indian soil at around 4:30 AM.",
          "The Apatani tribe of Ziro Valley practices an ancient eco-friendly co-cultivation system combining paddy farming and fish rearing in the same flooded terraces."
      ],
      "travelTips": [
          "Indian domestic tourists require an Inner Line Permit (ILP), obtainable seamlessly online via the Arunachal eILP portal.",
          "Acclimatize in Dirang or Bomdila for one night before driving across the 13,700-foot Sela Pass into Tawang.",
          "Attend the Ziro Festival of Music in September to enjoy indie music amidst scenic emerald pine paddy terraces."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0360-2212222 (Arunachal Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "8°C - 19°C (Winter: -5°C - 8°C in Tawang)",
          "condition": "Pristine Snow & Pine Alpine",
          "aqi": "Exceptional (8 AQI)",
          "bestSeason": "October to April"
      },
      "hotels": [
          {
              "name": "Dondrub Homestay & Resort, Tawang",
              "type": "Tibetan Heritage Luxury Stay",
              "rating": 4.9,
              "pricePerNight": "₹8,500",
              "location": "Near Tawang Monastery",
              "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Dirang Boutique Cottages",
              "type": "Riverside Wooden Chalets",
              "rating": 4.8,
              "pricePerNight": "₹7,500",
              "location": "Dirang Valley",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Ziro Valley Eco Resort",
              "type": "Pine Terrace Bamboo Chalet",
              "rating": 4.7,
              "pricePerNight": "₹6,000",
              "location": "Hapoli, Ziro",
              "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Dragon Restaurant, Old Market Tawang",
              "cuisineType": "Traditional Monpa & Tibetan",
              "rating": 4.8,
              "mustTry": "Thukpa, Chura Sabzi & Steamed Tingmo",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Woodland Restaurant, Bomdila",
              "cuisineType": "Himalayan Mountain Comfort Food",
              "rating": 4.7,
              "mustTry": "Fried Momos, Egg Thukpa & Ginger Honey Tea",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Apatani Kitchen, Ziro",
              "cuisineType": "Indigenous Tribal Delicacies",
              "rating": 4.8,
              "mustTry": "Pike Pila, Bamboo Steamed Rice & Smoked Pork",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Ascent to Sela Pass & Dirang Kiwi Orchards",
              "description": "Drive along the Kameng River, explore Dirang Dzong, cross high-altitude Sela Pass (13,700 ft) past frozen lakes to Tawang.",
              "highlights": [
                  "Dirang Dzong",
                  "Sela Pass",
                  "Jaswant Garh War Memorial"
              ]
          },
          {
              "day": 2,
              "title": "Grand Tawang Monastery & Holy Glacial Lakes",
              "description": "Early morning meditation at Tawang Monastery, visit Urgelling (birthplace of 6th Dalai Lama), and jeep drive to crystal Sangetsar Lake.",
              "highlights": [
                  "Tawang Monastery",
                  "Sangetsar Lake",
                  "Urgelling Gompa"
              ]
          }
      ]
  },
  'nagaland': {
      "id": "nagaland",
      "name": "Nagaland",
      "slug": "nagaland",
      "capital": "Kohima",
      "population": "2.2 Million",
      "languages": [
          "English",
          "Nagamese",
          "Ao",
          "Angami",
          "Sema",
          "Lotha"
      ],
      "heritageCount": 8,
      "festivalsCount": 16,
      "cultureCount": 18,
      "topAttraction": "Hornbill Festival (Kisama Heritage Village) & Dzukou Valley",
      "heroImage": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
      "description": "The Land of Festivals, Nagaland is a magnificent realm of mist-blanketed emerald mountains, 16 distinct warrior tribes with elaborate woven shawls and feather headgear, the world-renowned Hornbill Festival held at Kisama, and the pristine rolling bamboo hills of Dzukou Valley.",
      "historyOverview": "Home to indigenous warrior clans with democratic village councils (Morung education systems). Famed for the historic Battle of Kohima in 1944, often called \"Stalingrad of the East\", where the Allied forces halted the Japanese advance into India during World War II.",
      "dynasties": [
          "Angami Village Democracies",
          "Ahom-Naga Treaty Era",
          "Konyak Royal Angh Kings of Mon"
      ],
      "cuisine": {
          "dishes": [
              "Smoked pork cooked with fermented bamboo shoots and Raja Mircha",
              "Axone (fermented soybean paste with roast meat)",
              "Anishi (smoked yam leaf cakes with dry meat)",
              "Boiled organic greens with local salt"
          ],
          "streetFood": [
              "Spicy Naga Pork Sausages",
              "Bamboo-steamed sticky rice cakes",
              "Steamed Momos with fiery ghost pepper chutney"
          ],
          "sweets": [
              "Rosep Aon sweet corn cake",
              "Sweet sticky rice pancakes",
              "Wild forest honey"
          ],
          "description": "Smoked, wood-fired tribal cuisine cooked with zero added oil, celebrated for fermented soybean umami (Axone), indigenous aromatic tree seeds, and the legendary Naga Morich (Bhut Jolokia)."
      },
      "architectureStyle": "Indigenous Naga Timber Morung Architecture with carved hornbill and tiger totems, wooden warrior longhouses of Konyak Anghs",
      "traditionalDress": "Distinct geometric handwoven clan shawls (Tsungkotepsu of Ao, Loramhurho of Angamis) and hornbill feather headgear",
      "folkDance": [
          "Modse dance of Angamis",
          "War dance of Konyaks",
          "Aki Kiti (Indigenous semi-contact martial foot game of Semas)"
      ],
      "music": [
          "Tribal polyphonic choral singing",
          "War chants",
          "Instruments: Log drum, Tati (single string bamboo violin), Mouth organ"
      ],
      "bestTime": "October to May (Particularly Dec 1-10 for the Hornbill Festival in Kohima)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,000 - ₹8,000 / day",
          "luxury": "₹15,000 - ₹35,000+ / day"
      },
      "nearbyPlaces": [
          "Kohima",
          "Dimapur",
          "Mokokchung (Cultural heartland of Aos)",
          "Mon (Land of Konyak headhunters)",
          "Khonoma (Green Village)"
      ],
      "hiddenGems": [
          "Khonoma Asia’s first Green Village",
          "Dzukou Valley endemic lily landscape",
          "Longwa village straddling Indo-Myanmar border",
          "Mopungchuket historic village"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "The Hornbill Festival, held every December 1–10 at Kisama Heritage Village, brings together all 16 Naga tribes to showcase their music, traditional attire, and war dances.",
          "Khonoma village near Kohima is celebrated as Asia’s first green village, having banned hunting and logging since 1998 to protect endangered Blyth’s tragopans.",
          "Longwa village in Mon district lies directly across the international border: the village chief’s house is split half in India and half in Myanmar."
      ],
      "travelTips": [
          "Book hotels in Kohima at least 4 to 6 months in advance if visiting during the Hornbill Festival in December.",
          "Pack trekking boots and a light rain jacket for the stunning day trek into the mystical green dunes of Dzukou Valley.",
          "Respect local traditions: each tribal shawl carries specific social meanings and rank; ask weavers about its story before purchasing."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0370-2270107 (Nagaland Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "14°C - 24°C (Winter: 5°C - 16°C)",
          "condition": "Mist-Capped Mountain Air",
          "aqi": "Exceptional (14 AQI)",
          "bestSeason": "October to May"
      },
      "hotels": [
          {
              "name": "Hotel Vivor, Kohima",
              "type": "Boutique Mountain Hotel",
              "rating": 4.8,
              "pricePerNight": "₹8,500",
              "location": "NH-61, Kohima",
              "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Niathu Resort, Chumukedima (Dimapur)",
              "type": "Luxury Riverside Villa Resort",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Chathe River, Dimapur",
              "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Dovecote Eco Homestay, Khonoma",
              "type": "Village Heritage Stay",
              "rating": 4.7,
              "pricePerNight": "₹4,500",
              "location": "Khonoma Green Village",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Naga Chopsticks, Kohima",
              "cuisineType": "Authentic Traditional Naga & Pan-Asian",
              "rating": 4.8,
              "mustTry": "Smoked Pork with Axone & Steamed Greens",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Orami Restaurant, Kohima",
              "cuisineType": "Local Tribal Specialties",
              "rating": 4.7,
              "mustTry": "Boiled Chicken with Naga Ginger & Rice",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "D Café, Kohima",
              "cuisineType": "Mountain View Coffee & Bakery",
              "rating": 4.6,
              "mustTry": "Artisan Pour-Over Naga Coffee & Carrot Cake",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Kohima Battle Memorial & Kisama Village",
              "description": "Pay homage at Kohima WWII War Cemetery on Garrison Hill, tour Kisama Heritage Village, explore Kohima night market.",
              "highlights": [
                  "WWII Cemetery",
                  "Kisama Village",
                  "State Museum"
              ]
          },
          {
              "day": 2,
              "title": "Khonoma Green Village & Terraced Valleys",
              "description": "Walk through the alder-tree terraced farms of Khonoma, meet Angami elder craftsmen, experience local organic village lunch.",
              "highlights": [
                  "Khonoma Village",
                  "Terraced Paddy",
                  "Traditional Morungs"
              ]
          }
      ]
  },
  'manipur': {
      "id": "manipur",
      "name": "Manipur",
      "slug": "manipur",
      "capital": "Imphal",
      "population": "3.2 Million",
      "languages": [
          "Meiteilon (Manipuri)",
          "English",
          "Hindi",
          "Thadou",
          "Tangkhul"
      ],
      "heritageCount": 9,
      "festivalsCount": 12,
      "cultureCount": 16,
      "topAttraction": "Loktak Lake (Keibul Lamjao Floating National Park) & Kangla Fort",
      "heroImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      "description": "The Jewel of India, Manipur is surrounded by nine mountain ranges with emerald valleys, famous for Loktak Lake’s unique circular floating islands (Phumdis), the world’s only floating national park sheltering the endangered Sangai dancing deer, the classical Manipuri Raas Leela dance, and the Ima Keithel—the world’s largest all-women market.",
      "historyOverview": "Ancient Meitei kingdom governed from the historic royal citadel of Kangla Fort for over 2,000 years. Birthplace of modern polo (Sagol Kangjei), played on indigenous ponies since the 14th century.",
      "dynasties": [
          "Ningthouja Dynasty of Kangra & Manipur",
          "Kingdom of Kangleipak"
      ],
      "cuisine": {
          "dishes": [
              "Eromba (Mashed boiled vegetables, fermented fish Ngari, and Raja Mircha)",
              "Kangshoi (Nutritious seasonal vegetable stew)",
              "Singju (Spicy raw cabbage, lotus stem, and perilla salad)",
              "Chak-Hao Kheer (Imperial black rice aromatic pudding)"
          ],
          "streetFood": [
              "Bora (Crispy chickpea and herb fritters)",
              "Tan (Fluffy flatbreads)",
              "Singju at Kangla Gate"
          ],
          "sweets": [
              "Chak-Hao Kheer made from GI-tagged black rice",
              "Kabok (Puffed rice sweetened with molasses)",
              "Heikru jam"
          ],
          "description": "Wholesome, healthy, oil-free cuisine rich in indigenous lotus stems, perilla seeds, water mimosa, unpolished imperial black rice (Chak-Hao), and fermented fish (Ngari)."
      },
      "architectureStyle": "Kangla Fort Royal Citadel with stone Kangla Sha dragon statues, sacred Umang Lai shrines, Stilt Wooden Lake Huts on Phumdis",
      "traditionalDress": "Innaphi shawl and Phanek cylindrical handloom wrap for women; Dhoti, Kurta with turban for men",
      "folkDance": [
          "Manipuri Classical Dance (Raas Leela)",
          "Thang-Ta (Ancient martial sword and spear art)",
          "Pung Cholom (Acrobatic drum dance)"
      ],
      "music": [
          "Nat Sankirtana (UNESCO Intangible Cultural Heritage)",
          "Pena string music ballads",
          "Instruments: Pena, Pung, Mandila cymbals"
      ],
      "bestTime": "October to April (Sangai Festival in November, pleasant boating on Loktak Lake)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹28,000+ / day"
      },
      "nearbyPlaces": [
          "Imphal",
          "Moirang (Loktak Lake)",
          "Ukhrul (Land of Shirui Lily)",
          "Andro (Ancient pottery village)",
          "Moreh border market"
      ],
      "hiddenGems": [
          "Keibul Lamjao floating national park",
          "Andro heritage pottery village and sacred eternal flame",
          "INA War Memorial Moirang (Where Netaji’s tricolor was first unfurled)",
          "Shirui Kashong peak"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Loktak Lake is the largest freshwater lake in Northeast India, featuring circular floating vegetation islands called \"Phumdis\".",
          "Keibul Lamjao National Park is the only floating national park in the world and the exclusive natural habitat of the rare Sangai brow-antlered deer.",
          "Ima Keithel (Mother’s Market) in Imphal is a 500-year-old market run entirely by over 5,000 women merchants, unique in all of Asia."
      ],
      "travelTips": [
          "Take an early morning canoe boat ride through the Phumdi channels of Loktak Lake to spot Sangai deer grazing in mist.",
          "Visit Ima Keithel in central Imphal to purchase authentic handloom Phaneks and organic bamboo shoots directly from matriarch elders.",
          "Do not miss tasting the fragrant purple-black Chak-Hao Kheer, prepared with Manipur’s native aromatic GI-tagged black rice."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0385-2421295 (Manipur Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "16°C - 28°C (Winter: 5°C - 21°C)",
          "condition": "Fresh Lake & Mountain Breeze",
          "aqi": "Good (24 AQI)",
          "bestSeason": "October to April"
      },
      "hotels": [
          {
              "name": "The Classic Grande, Imphal",
              "type": "4-Star Luxury Hotel",
              "rating": 4.8,
              "pricePerNight": "₹9,500",
              "location": "Chingmeirong, Imphal",
              "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sendra Park & Resort, Loktak",
              "type": "Lake Island Panoramic Resort",
              "rating": 4.7,
              "pricePerNight": "₹7,500",
              "location": "Sendra Island, Loktak Lake",
              "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Hotel Imphal by Classic",
              "type": "Spacious Heritage Enclave",
              "rating": 4.6,
              "pricePerNight": "₹6,000",
              "location": "North AOC, Imphal",
              "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Luxmi Kitchen, Imphal",
              "cuisineType": "Authentic 15-Item Meitei Thali",
              "rating": 4.9,
              "mustTry": "Eromba, Singju, Kangshoi & Chak-Hao Kheer",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sannga Kitchen, Loktak Lake",
              "cuisineType": "Freshwater Fish & Lake Cuisine",
              "rating": 4.7,
              "mustTry": "Steamed Loktak Fish in Banana Leaf",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Zaika Restaurant, Imphal",
              "cuisineType": "Indian & Manipuri Fusion",
              "rating": 4.6,
              "mustTry": "Chilly Pork & Fried Rice",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Kangla Citadel & 5,000 Women Market",
              "description": "Tour the royal moats and dragon temples of Kangla Fort, explore vibrant Ima Keithel market, and visit Govindaji Temple.",
              "highlights": [
                  "Kangla Fort",
                  "Ima Keithel",
                  "Shri Govindaji Temple"
              ]
          },
          {
              "day": 2,
              "title": "Loktak Lake & Floating National Park",
              "description": "Drive to Moirang, take an eco-boat ride across Loktak Lake phumdis to spot Sangai deer, visit the historic INA Memorial.",
              "highlights": [
                  "Loktak Lake",
                  "Keibul Lamjao",
                  "INA Memorial"
              ]
          }
      ]
  },
  'mizoram': {
      "id": "mizoram",
      "name": "Mizoram",
      "slug": "mizoram",
      "capital": "Aizawl",
      "population": "1.2 Million",
      "languages": [
          "Mizo",
          "English",
          "Hindi"
      ],
      "heritageCount": 6,
      "festivalsCount": 9,
      "cultureCount": 13,
      "topAttraction": "Reiek Tlang Heritage Peak & Vantawng Waterfalls",
      "heroImage": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      "description": "The Land of the Highlanders (Mizoram) is perched upon dramatic emerald ridge hills with 21 mountain ranges, celebrated for the acrobatic Cheraw (Bamboo) dance, tranquil hilltop church hymns, and Vantawng Falls dropping 750 feet through dense virgin bamboo canopies.",
      "historyOverview": "Populated by Mizo clans who established harmonious village systems guided by the chivalric code of Tlawmngaihna (selfless service to community). Merged into independent India and celebrated as one of the most peaceful states in the country.",
      "dynasties": [
          "Mizo Lal Chieftaincies",
          "Sailo Clan Confederacies"
      ],
      "cuisine": {
          "dishes": [
              "Bai (Wholesome stew of mustard leaves, pork, bamboo shoots, and steamed lentils)",
              "Misa Mach Poora (Roasted shrimp in banana leaves)",
              "Vawksa Rep (Smoked tender pork with mustard greens)",
              "Koat Pitha"
          ],
          "streetFood": [
              "Spicy Bamboo Shoot Salad",
              "Mizo Momos",
              "Steamed local corn on Aizawl ridges"
          ],
          "sweets": [
              "Chhangban (Sticky rice flour sweet bread)",
              "Sweet banana cakes",
              "Jaggery rice snacks"
          ],
          "description": "Healthy, oil-free highland cuisine cooked with fresh forest herbs, tender bamboo shoot fermented relish, steamed wild leafy greens, and seasoned with local mountain salt."
      },
      "architectureStyle": "Mizo Bamboo and Timber Ridge Architecture, Traditional Reiek Model Village with Chief’s House, Modernist Hilltop Stone Cathedrals",
      "traditionalDress": "Puan handwoven wrap skirt with black, white, and red geometric bands for women; Kurta and traditional scarf for men",
      "folkDance": [
          "Cheraw (Bamboo dance of precise rhythm and agility)",
          "Khuallam (Guest dance with traditional Puan shawls)",
          "Chheihlam"
      ],
      "music": [
          "Mizo gospel choir harmonies",
          "Traditional drum-beat chanting",
          "Instruments: Khuang (wooden drum), Darbu brass gongs, Rawchhem"
      ],
      "bestTime": "October to April (Pleasant sunny days, clear ridge visibility, and spring Chapchar Kut festival)",
      "estimatedDailyBudget": {
          "budget": "₹1,400 - ₹2,200 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹25,000+ / day"
      },
      "nearbyPlaces": [
          "Aizawl",
          "Reiek",
          "Thenzawl (Handloom Capital)",
          "Champhai (Rice Bowl near border)",
          "Hmuifang",
          "Serchhip"
      ],
      "hiddenGems": [
          "Phawngpui Blue Mountain Peak at 7,100 ft",
          "Vantawng Falls cascading 750 ft",
          "Tam Dil serene natural lake",
          "Falkawn heritage village"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Cheraw is one of the oldest dances in Mizoram; four dancers step in and out of rhythmic clapping bamboo staves without missing a beat.",
          "Phawngpui, known as the Blue Mountain, is the highest peak in Mizoram (7,100 ft), revered as the abode of the mountain spirits.",
          "Aizawl is celebrated for its extraordinary traffic discipline: despite narrow winding mountain roads, drivers never honk and strictly adhere to lane etiquette without traffic lights."
      ],
      "travelTips": [
          "Experience the grand Chapchar Kut festival in early March to witness thousands performing the synchronized Cheraw bamboo dance in traditional Puan dress.",
          "Drive up to Reiek Peak for a 360-degree panoramic view of endless green valley ridges stretching into Bangladesh.",
          "Purchase handwoven Puan textiles directly from weaver cooperatives in Thenzawl."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0389-2333475 (Mizoram Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "15°C - 26°C (Winter: 8°C - 18°C)",
          "condition": "Cool Ridge Mountain Breeze",
          "aqi": "Exceptional (10 AQI)",
          "bestSeason": "October to March"
      },
      "hotels": [
          {
              "name": "Hotel Regency, Aizawl",
              "type": "City Center Premium Hotel",
              "rating": 4.7,
              "pricePerNight": "₹7,500",
              "location": "MacDonald Hill, Zarkawt, Aizawl",
              "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Reiek Tourist Resort (Mizoram Tourism)",
              "type": "Mountain View Cottages",
              "rating": 4.6,
              "pricePerNight": "₹3,500",
              "location": "Reiek Peak Foot, Reiek",
              "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Hmuifang Tourist Resort",
              "type": "Hilltop Forest Lodge",
              "rating": 4.6,
              "pricePerNight": "₹3,800",
              "location": "Hmuifang Ridge",
              "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Chopstyx Restaurant, Aizawl",
              "cuisineType": "Local Mizo & Pan-Asian",
              "rating": 4.8,
              "mustTry": "Smoked Pork with Bai & Mizo Fried Rice",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Red Pepper Restaurant, Chanmari",
              "cuisineType": "Authentic Traditional Mizo Cuisine",
              "rating": 4.7,
              "mustTry": "Vawksa Rep (Smoked Pork) & Spicy Bamboo Shoot",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Mizoram Handloom Cafe, Aizawl",
              "cuisineType": "Highland Coffee & Bakes",
              "rating": 4.6,
              "mustTry": "Fresh Local Pour-Over Coffee & Banana Bread",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Aizawl Ridge City & Solomon’s Temple",
              "description": "Tour the white marble towers of Solomon’s Temple, visit Durtlang Hills for panoramic city views, and stroll through Bara Bazar.",
              "highlights": [
                  "Solomon’s Temple",
                  "Durtlang Hills",
                  "Bara Bazar"
              ]
          },
          {
              "day": 2,
              "title": "Reiek Heritage Peak & Village Walk",
              "description": "Hike to the windy precipice of Reiek Tlang, explore the traditional model Mizo village, and savor local Bai stew.",
              "highlights": [
                  "Reiek Peak",
                  "Model Village",
                  "Mizo Handloom"
              ]
          }
      ]
  },
  'tripura': {
      "id": "tripura",
      "name": "Tripura",
      "slug": "tripura",
      "capital": "Agartala",
      "population": "4.1 Million",
      "languages": [
          "Bengali",
          "Kokborok",
          "Hindi",
          "English"
      ],
      "heritageCount": 9,
      "festivalsCount": 11,
      "cultureCount": 14,
      "topAttraction": "Ujjayanta Palace & Unakoti Rock-Cut Relief Carvings",
      "heroImage": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
      "description": "A regal realm of gilded royal palaces and mystical stone carvings, Tripura is home to the pristine neoclassical Ujjayanta Palace, the water fortress of Neermahal floating in Rudrasagar Lake, and the colossal 8th-century bas-relief rock carvings of Lord Shiva at Unakoti.",
      "historyOverview": "Ruled for over 2,000 unbroken years by the Manikya Dynasty, documented in the royal court chronicle Rajmala. Celebrated for patronizing Nobel laureate Rabindranath Tagore, who wrote multiple literary masterpieces during his stays at royal Tripura estates.",
      "dynasties": [
          "Manikya Royal Dynasty of Twipra"
      ],
      "cuisine": {
          "dishes": [
              "Mui Borok (Indigenous preparation with fermented fish Berma)",
              "Chakhwi (Bamboo shoot, jackfruit seeds, and pork curry cooked with baking soda)",
              "Wahan Mosdeng (Roasted pork with green chillies and coriander)",
              "Muya Awandru"
          ],
          "streetFood": [
              "Mosdeng (Spicy fiery chutney of roasted green chili and onion)",
              "Pork Bharta",
              "Bangwi (Aromatic rice cake wrapped in Lairu leaf)"
          ],
          "sweets": [
              "Awan Bangwi",
              "Khaja of Agartala",
              "Rasgulla and Sandesh"
          ],
          "description": "Fascinating blend of indigenous Kokborok tribal food cooked without oil using Berma (fermented fish) and bamboo shoots, alongside delicate Bengali royal palace sweets."
      },
      "architectureStyle": "Indo-Saracenic & Neoclassical Royal Architecture (Ujjayanta Palace), Water Fortress Palace Architecture (Neermahal), 8th-Century Rock-Cut Bas Reliefs (Unakoti)",
      "traditionalDress": "Rignai and Risa handwoven wrap garments with intricate geometric patterns for women; Dhoti, Kurta with Pagri for men",
      "folkDance": [
          "Hojagiri (Reang tribal balance dance on brass pitchers with fire lamps)",
          "Garia dance",
          "Bizu dance of Chakmas",
          "Hai-Hak dance of Halams"
      ],
      "music": [
          "Tripuri folk songs",
          "Bizu music of Chakmas",
          "Instruments: Sumui (bamboo flute), Sarinda, Kham drum"
      ],
      "bestTime": "October to March (Pleasant cool weather, ideal for palace tours and Unakoti rock hikes)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹6,500 / day",
          "luxury": "₹12,000 - ₹26,000+ / day"
      },
      "nearbyPlaces": [
          "Agartala",
          "Unakoti",
          "Melaghar (Neermahal)",
          "Udaipur (Tripura Sundari Temple)",
          "Sepahijala Wildlife Sanctuary",
          "Jampui Hills"
      ],
      "hiddenGems": [
          "Unakoti rock-cut Shiva sculptures",
          "Neermahal floating water palace",
          "Jampui Hills orange orchards",
          "Chabimura rock carvings on Gomati river"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Unakoti features colossal stone relief carvings of Shiva and Ganesha carved into a lush mountain face, believed according to folklore to number one less than a crore (99,99,999).",
          "Neermahal in Melaghar is one of only two water palaces in all of India (alongside Jal Mahal in Jaipur), built in the middle of Rudrasagar Lake.",
          "Tripura Sundari Temple at Udaipur is one of the revered 51 Shakti Peethas, where the right foot of Sati is believed to have fallen."
      ],
      "travelTips": [
          "Visit Ujjayanta Palace in central Agartala in the late afternoon to admire the neoclassical domes and illuminated fountains.",
          "Take a motorized boat across Rudrasagar Lake to explore the ornate courtyards and balconies of Neermahal.",
          "Purchase authentic handloom Risa stoles and cane bamboo furniture crafted by master artisans in Agartala."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0381-2325930 (Tripura Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "18°C - 30°C (Winter: 10°C - 23°C)",
          "condition": "Tropical Valley & Lakeside Breeze",
          "aqi": "Good (38 AQI)",
          "bestSeason": "October to March"
      },
      "hotels": [
          {
              "name": "Hotel Polo Towers, Agartala",
              "type": "5-Star Premier City Luxury",
              "rating": 4.8,
              "pricePerNight": "₹10,500",
              "location": "Near VIP Road, Agartala",
              "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sagar Mahal Tourist Lodge, Neermahal",
              "type": "Lakeside Palace View Stay",
              "rating": 4.6,
              "pricePerNight": "₹3,500",
              "location": "Rudrasagar Lake, Melaghar",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Ginger Hotel, Agartala",
              "type": "Contemporary Smart Hotel",
              "rating": 4.5,
              "pricePerNight": "₹4,500",
              "location": "Khejur Bagan, Agartala",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Kurry Klub, Agartala",
              "cuisineType": "Tripuri, Bengali & Indian Fine Dining",
              "rating": 4.7,
              "mustTry": "Mui Borok, Ilish Paturi & Butter Naan",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Abhash Restaurant, Agartala",
              "cuisineType": "Traditional Bengali & North Indian",
              "rating": 4.6,
              "mustTry": "Fish Kalia & Mutton Kosha",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bawarchi, VIP Road",
              "cuisineType": "Multi-Cuisine Delicacies",
              "rating": 4.6,
              "mustTry": "Biryani & Tandoori Platter",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Ujjayanta Palace & Neermahal Water Citadel",
              "description": "Tour the grand halls of Ujjayanta Palace museum in Agartala, drive to Melaghar, and take a sunset boat ride to Neermahal.",
              "highlights": [
                  "Ujjayanta Palace",
                  "Neermahal Water Palace",
                  "Rudrasagar Lake"
              ]
          },
          {
              "day": 2,
              "title": "Mystical Rock Carvings of Unakoti",
              "description": "Travel through rolling green hills to Unakoti to marvel at the giant 30-foot rock relief of Shiva Kalbhairava amidst jungle waterfalls.",
              "highlights": [
                  "Unakoti Rock Reliefs",
                  "Shiva Kalbhairava",
                  "Kailashahar"
              ]
          }
      ]
  },
  'meghalaya': {
      "id": "meghalaya",
      "name": "Meghalaya",
      "slug": "meghalaya",
      "capital": "Shillong (Scotland of the East)",
      "population": "3.4 Million",
      "languages": [
          "Khasi",
          "Garo",
          "Pnar",
          "English"
      ],
      "heritageCount": 10,
      "festivalsCount": 12,
      "cultureCount": 16,
      "topAttraction": "Double Decker Living Root Bridges (Cherrapunji) & Dawki Umngot River",
      "heroImage": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80",
      "description": "The Abode of the Clouds, Meghalaya is a geological wonderland of thunderous waterfalls plummeting off green plateaus at Nohkalikai, bio-engineered multi-generational Double Decker Living Root Bridges in Cherrapunji, crystal-clear emerald waters of the Umngot River in Dawki, and matrilineal Khasi traditions.",
      "historyOverview": "Homeland of the Khasi, Garo, and Jaintia tribes, governed by an ancient matrilineal societal system where lineage and property pass from mother to youngest daughter (Khadduh). Freedom struggle led by legendary warrior U Tirot Sing against British forces in 1829.",
      "dynasties": [
          "Khasi Syiemships (Kingdom of Khyrim, Mylliem)",
          "Jaintia Kings",
          "Garo Nokma System"
      ],
      "cuisine": {
          "dishes": [
              "Jadoh (Aromatic short-grain rice cooked with pork stock and ginger)",
              "Dohkhlieh (Pork salad with onions, chilies, and local herbs)",
              "Tungrymbai (Fermented soybean paste cooked with pork and black sesame)",
              "Pukhlein (Crispy sweet rice and jaggery fritters)"
          ],
          "streetFood": [
              "Jadoh at Police Bazar",
              "Pork Momos at Laitumkhrah",
              "Shillong Pine Crepes"
          ],
          "sweets": [
              "Pukhlein",
              "Ja-stem",
              "Sohphlang wild tubers with toasted perilla seeds"
          ],
          "description": "Fragrant, comforting tribal cuisine centering around locally harvested wild black sesame seeds (Neiiong), ginger paste, smoked pork, fermented soybeans, and red mountain rice."
      },
      "architectureStyle": "Indigenous Bio-Engineered Ficus Elastica Living Root Bridges (Jingkieng Jri), Traditional Khasi Thatched Oval Cottages, Colonial British Wood-Frame Cottages in Shillong",
      "traditionalDress": "Jainsem and Dhara silk wrap dresses with gold coral beads for women; Jymphong sleeveless coat with sarong for men",
      "folkDance": [
          "Nongkrem Dance of Khasis (UNESCO celebrated)",
          "Wangala 100-Drums Harvest Festival Dance of Garos",
          "Shad Suk Mynsiem"
      ],
      "music": [
          "Khasi acoustic folk and Shillong indie blues/rock",
          "Instruments: Duitara (two-stringed lute), Ksing drum, Nakra"
      ],
      "bestTime": "September to May (Lush waterfalls post-monsoon, crystal clear waters at Dawki in winter)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,500 / day",
          "luxury": "₹16,000 - ₹40,000+ / day"
      },
      "nearbyPlaces": [
          "Shillong",
          "Cherrapunji (Sohra)",
          "Dawki",
          "Mawlynnong (Asia’s Cleanest Village)",
          "Mawsynram (Wettest Place on Earth)",
          "Jowai"
      ],
      "hiddenGems": [
          "Krang Shuri turquoise waterfall",
          "Nongriat Double Decker Living Root Bridge",
          "Mawsmai & Arwah limestone caves",
          "Laitlum Grand Canyon gorges"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "The Living Root Bridges of Meghalaya are recognized by UNESCO on the tentative World Heritage list as marvels of living bio-engineering grown by the indigenous Khasi tribe across 15-30 years using rubber fig tree roots.",
          "Mawsynram holds the Guinness World Record as the wettest place on Earth, receiving an astounding 11,871 mm of rainfall annually.",
          "The Umngot River in Dawki is so impossibly transparent during winter that boats appear to float in mid-air over the pebbled riverbed."
      ],
      "travelTips": [
          "Wear sturdy grip shoes and carry trekking poles for the 3,500-step stone staircase trek down to the Double Decker Root Bridge in Nongriat.",
          "Rent a transparent kayak or country boat on the Umngot River at Dawki between November and February for mirror-water photographs.",
          "Explore Mawlynnong village, awarded Asia’s cleanest village, where all litter is collected in handmade bamboo dustbins and recycled."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-345-3739 (Meghalaya Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "14°C - 24°C (Winter: 4°C - 16°C in Shillong)",
          "condition": "Crisp Cloud Pine Breeze",
          "aqi": "Exceptional (11 AQI)",
          "bestSeason": "October to May"
      },
      "hotels": [
          {
              "name": "Ri Kynjai - Serenity by the Lake, Umiam",
              "type": "Luxury Khasi Architecture Resort",
              "rating": 5,
              "pricePerNight": "₹26,000",
              "location": "Umiam Lake, Ri Bhoi District",
              "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Polo Orchid Resort, Cherrapunji",
              "type": "Seven Sisters Falls View Luxury",
              "rating": 4.8,
              "pricePerNight": "₹16,000",
              "location": "Mawsmai, Sohra",
              "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Heritage Club - Tripura Castle, Shillong",
              "type": "Royal Heritage Chalet",
              "rating": 4.8,
              "pricePerNight": "₹12,000",
              "location": "Cleve Colony, Shillong",
              "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Trattoria, Police Bazar Shillong",
              "cuisineType": "Iconic Traditional Khasi Cuisine",
              "rating": 4.8,
              "mustTry": "Jadoh, Dohkhlieh & Tungrymbai",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Wok, Laitumkhrah",
              "cuisineType": "Pan-Asian & Local Comfort",
              "rating": 4.7,
              "mustTry": "Steamed Pork Momos & Crispy Chilli Chicken",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Dylan’s Cafe, Risa Colony",
              "cuisineType": "Music & Artisan Comfort Cafe",
              "rating": 4.8,
              "mustTry": "Hot Chocolate, Pancakes & Roast Sandwiches",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Shillong Pines & Laitlum Canyon",
              "description": "Tour Ward’s Lake, Don Bosco Indigenous Museum, and gaze into the breathtaking mist-laden abyss of Laitlum Canyons.",
              "highlights": [
                  "Ward’s Lake",
                  "Don Bosco Museum",
                  "Laitlum Canyons"
              ]
          },
          {
              "day": 2,
              "title": "Cherrapunji Living Root Bridges & Waterfalls",
              "description": "Trek down to the Double Decker Root Bridge in Nongriat, visit Nohkalikai Falls (India’s tallest plunge waterfall), and Arwah limestone caves.",
              "highlights": [
                  "Living Root Bridges",
                  "Nohkalikai Falls",
                  "Arwah Cave"
              ]
          },
          {
              "day": 3,
              "title": "Crystal Umngot River Dawki & Mawlynnong",
              "description": "Glide across the mirror-like glass river at Dawki, explore Asia’s Cleanest Village Mawlynnong and the single-decker living root bridge.",
              "highlights": [
                  "Dawki Umngot River",
                  "Mawlynnong Village",
                  "Krang Shuri Falls"
              ]
          }
      ]
  },
  'goa': {
      "id": "goa",
      "name": "Goa",
      "slug": "goa",
      "capital": "Panaji",
      "population": "1.6 Million",
      "languages": [
          "Konkani",
          "Marathi",
          "English",
          "Hindi",
          "Portuguese"
      ],
      "heritageCount": 15,
      "festivalsCount": 14,
      "cultureCount": 17,
      "topAttraction": "Churches and Convents of Goa (UNESCO) & Dudhsagar Waterfalls",
      "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
      "description": "The Pearl of the Orient, Goa is an idyllic coastal haven where Portuguese Baroque architecture meets Konkan palm fringes, famous for the Basilica of Bom Jesus sheltering the relics of St. Francis Xavier, the four-tiered milky torrents of Dudhsagar Falls, colorful Fontainhas Latin quarters, and spiced seafood vindaloo.",
      "historyOverview": "Flourished under the Kadamba Dynasty with temple hubs at Chandor, ruled by the Bahmani and Bijapur Sultanates, before Alfonso de Albuquerque established Portuguese Goa in 1510. Remained the capital of the Portuguese Empire in the East for 451 years until liberated in 1961.",
      "dynasties": [
          "Kadambas of Goa",
          "Vijayanagara Empire",
          "Bijapur Sultanate",
          "Portuguese Empire of the East"
      ],
      "cuisine": {
          "dishes": [
              "Goan Fish Curry with steamed rice",
              "Pork or Chicken Vindaloo (marinated in palm vinegar and Kashmiri chillies)",
              "Chicken Xacuti with roasted coconut and poppy seeds",
              "Sorpotel with steamed Sannas"
          ],
          "streetFood": [
              "Ros Omelette topped with spicy chicken xacuti gravy",
              "Chorizo Pao (Spiced Goan pork sausage bread)",
              "Prawn Rava Fry at beach shacks"
          ],
          "sweets": [
              "Bebinca (16-layered coconut milk and egg delicacy)",
              "Dodol (Jaggery and coconut milk pudding)",
              "Bolinhas (Coconut cashew cookies)",
              "Alle Belle"
          ],
          "description": "Lively, pungent coastal fusion of tropical Konkan ingredients (fresh grated coconut, kokum, triphala pepper, toddy vinegar) and Portuguese culinary heritage."
      },
      "architectureStyle": "Portuguese Baroque & Manueline Church Architecture (UNESCO Basilica of Bom Jesus, Se Cathedral), Indo-Portuguese Heritage Mansions with Oyster Shell Windows, Konkan Temples with Deepastambha lamp towers",
      "traditionalDress": "Traditional Konkani Kunbi cotton saree with red and white checks for women; Cotton shorts, shirts, and Fisherfolk wraps for men",
      "folkDance": [
          "Fugdi (Konkani women’s celebratory dance)",
          "Dhalo",
          "Dekhnni (Song and dance of temple dancers)",
          "Corridinho (Portuguese folk waltz)"
      ],
      "music": [
          "Mando (Poetic Konkani love ballads with violin)",
          "Goan Brass Band music",
          "Ghumat percussion beats"
      ],
      "bestTime": "October to April (Pleasant sunny days, calm ocean swimming, Christmas-New Year carnivals)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹9,000 / day",
          "luxury": "₹18,000 - ₹50,000+ / day"
      },
      "nearbyPlaces": [
          "Panaji",
          "Old Goa (Velha Goa)",
          "Margao",
          "North Goa Beaches (Anjuna, Vagator, Ashwem)",
          "South Goa Beaches (Palolem, Agonda)",
          "Dudhsagar Falls"
      ],
      "hiddenGems": [
          "Fontainhas Latin Quarter heritage walk",
          "Divar Island peaceful river villages",
          "Tambdi Surla 12th-century basalt Kadamba temple",
          "Cabo de Rama sea fort"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "The Churches and Convents of Goa are a UNESCO World Heritage Site; the Se Cathedral houses the Golden Bell, one of the largest and most resonant church bells in the world.",
          "Dudhsagar Falls, translating to \"Sea of Milk\", cascades down 1,017 feet along the Goa-Karnataka Western Ghats border in a thunderous four-tiered plume.",
          "The Kunbi saree was revived by designer Wendell Rodricks, preserving an ancient checkered indigo-and-red weave originally worn by Goa’s indigenous agricultural women."
      ],
      "travelTips": [
          "Take an early morning walking tour of Fontainhas in Panaji to admire the yellow, terracotta, and indigo Portuguese villas before the heat sets in.",
          "Visit Old Goa churches early in the morning (8:30-10:00 AM) to experience the quiet grandeur of the Basilica of Bom Jesus.",
          "Look for the official FSSAI seal when purchasing authentic country-distilled Cashew or Palm Feni."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-233-4628 (Goa Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "23°C - 32°C",
          "condition": "Sunny Arabian Sea Breeze",
          "aqi": "Good (32 AQI)",
          "bestSeason": "November to March"
      },
      "hotels": [
          {
              "name": "Taj Fort Aguada Resort & Spa",
              "type": "16th-Century Coastal Fort Luxury",
              "rating": 5,
              "pricePerNight": "₹28,000",
              "location": "Sinquerim Beach, Candolim",
              "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Heritage Village Resort & Spa, Arossim",
              "type": "Indo-Portuguese Estate",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Arossim Beach, South Goa",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Panjim Inn, Fontainhas",
              "type": "Heritage Latin Quarter Villa",
              "rating": 4.7,
              "pricePerNight": "₹7,500",
              "location": "Fontainhas, Panaji",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Fisherman’s Wharf, Cavelossim",
              "cuisineType": "Riverside Goan Seafood & Portuguese",
              "rating": 4.9,
              "mustTry": "Kingfish Rava Fry, Crab Xacuti & Bebinca",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Viva Panjim, Fontainhas",
              "cuisineType": "Traditional Portuguese-Goan Home Kitchen",
              "rating": 4.8,
              "mustTry": "Pork Vindaloo, Prawn Curry Rice & Feni Cocktail",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sand Patches Beach Shack, Palolem",
              "cuisineType": "Beachside Catch of the Day",
              "rating": 4.7,
              "mustTry": "Tandoori Red Snapper & Garlic Butter Calamari",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Old Goa UNESCO Churches & Latin Fontainhas",
              "description": "Tour Basilica of Bom Jesus, Se Cathedral, Church of St. Francis of Assisi, followed by sunset walk in Fontainhas Latin Quarter.",
              "highlights": [
                  "Basilica of Bom Jesus",
                  "Se Cathedral",
                  "Fontainhas"
              ]
          },
          {
              "day": 2,
              "title": "Dudhsagar Thunderous Falls & Spice Plantation",
              "description": "Take a thrilling 4x4 open-jeep safari through jungle streams to the foot of Dudhsagar Falls, tour an organic spice plantation for traditional lunch.",
              "highlights": [
                  "Dudhsagar Falls",
                  "Jeep Safari",
                  "Spice Plantation"
              ]
          },
          {
              "day": 3,
              "title": "South Goa Pristine Shores & Sea Forts",
              "description": "Visit Cabo de Rama cliff fort overlooking the Arabian Sea, relax on the crescent sands of Palolem Beach, boat trip to Butterfly Beach.",
              "highlights": [
                  "Cabo de Rama",
                  "Palolem Beach",
                  "Butterfly Beach"
              ]
          }
      ]
  },
  'telangana': {
      "id": "telangana",
      "name": "Telangana",
      "slug": "telangana",
      "capital": "Hyderabad (The City of Pearls)",
      "population": "38 Million",
      "languages": [
          "Telugu",
          "Urdu",
          "Hindi",
          "English"
      ],
      "heritageCount": 15,
      "festivalsCount": 14,
      "cultureCount": 16,
      "topAttraction": "Charminar, Golconda Fort & Ramappa Temple (UNESCO)",
      "heroImage": "https://images.unsplash.com/photo-1609137144820-745a33c0800b?auto=format&fit=crop&w=1600&q=80",
      "description": "The Royal Deccan Heartland, Telangana is celebrated for the 400-year-old architectural grandeur of Hyderabad’s Charminar, the diamond-trading acoustic wonder of Golconda Fort, the UNESCO-inscribed floating-brick marvel of Kakatiya Ramappa Temple, and world-renowned Hyderabadi Dum Biryani.",
      "historyOverview": "Seat of the powerful Kakatiya Dynasty of Warangal who built great irrigation tanks and temples. Succeeded by the Qutb Shahi Sultanate of Golconda and the fabulous wealth of the Asaf Jahi Nizams of Hyderabad, once the richest men on Earth.",
      "dynasties": [
          "Satavahanas",
          "Kakatiya Dynasty of Warangal",
          "Qutb Shahi Dynasty of Golconda",
          "Asaf Jahi Nizams of Hyderabad"
      ],
      "cuisine": {
          "dishes": [
              "Hyderabadi Dum Biryani (slow-cooked with marinated mutton, saffron, and basmati)",
              "Mirchi ka Salan",
              "Haleem (slow-cooked wheat, meat, and lentils with pure ghee)",
              "Bagara Baingan"
          ],
          "streetFood": [
              "Irani Chai with Osmania Biscuits at Charminar",
              "Karachi Bakery Fruit Biscuits",
              "Dosa at Govind Ki Bandi",
              "Pattar ka Gosht (meat cooked on hot granite stone)"
          ],
          "sweets": [
              "Double Ka Meetha (Royal saffron bread pudding)",
              "Qubani Ka Meetha (Apricot compote with clotted cream)",
              "Pootharekulu (Paper-thin sweet sheets)",
              "Badam ki Jali"
          ],
          "description": "The epitome of Deccani royal Nawabi and rustic Telugu culinary fusion, characterized by slow dum cooking, aromatic rosewater, roasted spices, and fiery green chillies."
      },
      "architectureStyle": "Kakatiya Sandstone Sculptural Architecture (Ramappa Temple, Thousand Pillar Temple), Indo-Islamic Qutb Shahi Stucco & Granite (Charminar, Golconda Fort), Nizam Italianate Palaces (Chowmahalla, Falaknuma)",
      "traditionalDress": "Pochampally Ikat and Gadwal handloom silk sarees for women; Kurta-Pajama with Sherwani for men",
      "folkDance": [
          "Perini Sivatandavam (Ancient Kakatiya warrior dance to Lord Shiva)",
          "Gussadi dance of Gonds",
          "Lambadi dance",
          "Bonalu dance"
      ],
      "music": [
          "Deccani Ghazals & Qawwali",
          "Carnatic Classical recitals",
          "Instruments: Veena, Mridangam, Dappu drum"
      ],
      "bestTime": "October to March (Pleasant evenings and cool winter days for exploring forts and palaces)",
      "estimatedDailyBudget": {
          "budget": "₹1,400 - ₹2,200 / day",
          "midRange": "₹4,000 - ₹8,000 / day",
          "luxury": "₹18,000 - ₹55,000+ / day"
      },
      "nearbyPlaces": [
          "Hyderabad",
          "Warangal",
          "Ramappa",
          "Nagarjuna Sagar",
          "Alampur (Jogulamba Shakti Peetha)",
          "Bhadrachalam"
      ],
      "hiddenGems": [
          "Ramappa Temple (13th-century floating bricks UNESCO site)",
          "Chowmahalla Palace vintage car collection",
          "Paigah Tombs intricate stucco lace-work",
          "Bhuvanagiri monolithic rock fort"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1609137144820-745a33c0800b?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Ramappa Temple in Mulugu district is a UNESCO World Heritage Site constructed using lightweight porous bricks that miraculously float on water.",
          "Golconda Fort was the epicenter of the global diamond trade, producing legendary diamonds including the Koh-i-Noor, Hope Diamond, and Daria-i-Noor.",
          "Hyderabadi Haleem was the first meat product in India to receive a coveted Geographical Indication (GI) tag."
      ],
      "travelTips": [
          "Clap your hands beneath the dome of the entrance portico at Golconda Fort to test the acoustic relay system that warns the hilltop royal palace 1 kilometer away.",
          "Sip hot, sweet Irani Chai paired with buttery, crumbly Osmania Biscuits at Nimrah Cafe right opposite Charminar.",
          "Purchase genuine Pochampally Ikat sarees directly from the weaver clusters in Bhoodan Pochampally, named a UNWTO Best Tourism Village."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-425-46464 (Telangana Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "20°C - 32°C (Winter: 13°C - 27°C)",
          "condition": "Sunny Deccan Breeze",
          "aqi": "Moderate (68 AQI)",
          "bestSeason": "October to February"
      },
      "hotels": [
          {
              "name": "Taj Falaknuma Palace, Hyderabad",
              "type": "Royal Nizam Hilltop Palace Luxury",
              "rating": 5,
              "pricePerNight": "₹48,000",
              "location": "Engine Bowli, Falaknuma, Hyderabad",
              "image": "https://images.unsplash.com/photo-1609137144820-745a33c0800b?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "ITC Kohenur, Hyderabad",
              "type": "Ultra-Luxury High-Tech City Hotel",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Hitec City, Madhapur",
              "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Taj Krishna, Banjara Hills",
              "type": "Grand City Oasis",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Road No. 1, Banjara Hills",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Paradise Biryani, Secunderabad",
              "cuisineType": "Original Hyderabadi Dum Biryani",
              "rating": 4.8,
              "mustTry": "Mutton Dum Biryani & Mirchi Ka Salan",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1609137144820-745a33c0800b?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Bawarchi, RTC X Roads",
              "cuisineType": "Legendary Hyderabad Culinary Icon",
              "rating": 4.8,
              "mustTry": "Special Chicken Biryani & Boti Kebab",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Nimrah Cafe & Bakery, Charminar",
              "cuisineType": "Heritage Irani Chai & Osmania Biscuits",
              "rating": 4.9,
              "mustTry": "Special Irani Chai & Khari Biscuit",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1588096344356-9b626e255018?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Charminar, Chowmahalla & Laad Pearl Bazaar",
              "description": "Climb Charminar, tour the grand chandeliers and royal vintage cars of Chowmahalla Palace, shop for Lac bangles in Laad Bazaar.",
              "highlights": [
                  "Charminar",
                  "Chowmahalla Palace",
                  "Laad Bazaar"
              ]
          },
          {
              "day": 2,
              "title": "Acoustic Marvels of Golconda & Qutb Shahi Tombs",
              "description": "Explore the whispering galleries and diamond vaults of Golconda Fort, and tour the onion domes of Qutb Shahi royal mausoleums.",
              "highlights": [
                  "Golconda Fort",
                  "Qutb Shahi Tombs",
                  "Sound & Light Show"
              ]
          },
          {
              "day": 3,
              "title": "UNESCO Floating Bricks of Ramappa & Warangal",
              "description": "Drive to Warangal, marvel at the stone gateways (Kirti Toranas) of Warangal Fort and the floating-brick UNESCO wonder of Ramappa Temple.",
              "highlights": [
                  "Ramappa Temple",
                  "Warangal Fort",
                  "Thousand Pillar Temple"
              ]
          }
      ]
  },
  'andhra-pradesh': {
      "id": "andhra-pradesh",
      "name": "Andhra Pradesh",
      "slug": "andhra-pradesh",
      "capital": "Amaravati",
      "population": "53 Million",
      "languages": [
          "Telugu",
          "Urdu",
          "Hindi",
          "English"
      ],
      "heritageCount": 15,
      "festivalsCount": 14,
      "cultureCount": 17,
      "topAttraction": "Tirumala Venkateswara Temple & Lepakshi Veerabhadra Temple",
      "heroImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80",
      "description": "The Sunrise State of India, Andhra Pradesh possesses India’s second longest coastline (974 km), the world’s most visited pilgrimage shrine at Tirupati Balaji atop the sacred Seven Hills, the monolithic Nandi and hanging pillar marvel of 16th-century Lepakshi, Kuchipudi classical dance, and spicy coastal Andhra gastronomy.",
      "historyOverview": "Birthplace of the Satavahana Empire, the Buddhist councils of Nagarjunakonda and Amaravati stupas, the Eastern Chalukyas, and the golden Vijayanagara Empire whose Emperor Sri Krishnadevaraya patronized literature and arts.",
      "dynasties": [
          "Satavahanas",
          "Ikshvakus of Vijayapuri",
          "Eastern Chalukyas",
          "Kakatiyas",
          "Vijayanagara Empire",
          "Reddi Kingdom"
      ],
      "cuisine": {
          "dishes": [
              "Andhra Thali with fiery Gongura Pachadi (sorrel leaf chutney)",
              "Chepala Pulusu (tangy fish curry cooked in tamarind gravy)",
              "Natukodi Pulusu with Garelu (country chicken with lentil fritters)",
              "Pesarattu with ginger chutney"
          ],
          "streetFood": [
              "Mirchi Bajji with crushed peanuts and lemon",
              "Punugulu with coconut chutney",
              "Kakinada Kaja"
          ],
          "sweets": [
              "Pootharekulu (Paper-thin rice starch sweet rolled with ghee and dry fruits)",
              "Bandar Laddu",
              "Kakinada Kaja",
              "Tirupati Laddu Prasadam"
          ],
          "description": "Bold, robust, fiery cuisine renowned for pungent Guntur red chillies, sour wild sorrel leaves (Gongura), freshly ground podis (gunpowders), and cold-pressed sesame oil."
      },
      "architectureStyle": "Vijayanagara Stone Architecture with monolithic carvings (Lepakshi), Ancient Buddhist Limestone Stupas (Amaravati, Nagarjunakonda), Dravidian Temple Towers",
      "traditionalDress": "Mangalagiri and Uppada Jamdani handloom silk sarees for women; Dhoti, Kurta with Kanduva scarf for men",
      "folkDance": [
          "Kuchipudi (Classical dance-drama originated in Kuchipudi village)",
          "Vilasini Natyam",
          "Kolattam",
          "Tappeta Gullu"
      ],
      "music": [
          "Carnatic Classical music of saint-composers Tyagaraja and Annamacharya",
          "Instruments: Veena, Mridangam, Ghatam, Nadaswaram"
      ],
      "bestTime": "October to March (Pleasant weather across coastal Andhra and the Seven Hills of Tirumala)",
      "estimatedDailyBudget": {
          "budget": "₹1,200 - ₹2,000 / day",
          "midRange": "₹3,500 - ₹7,000 / day",
          "luxury": "₹14,000 - ₹38,000+ / day"
      },
      "nearbyPlaces": [
          "Tirupati",
          "Visakhapatnam (Vizag)",
          "Amaravati (Vijayawada)",
          "Lepakshi",
          "Araku Valley",
          "Gandikota (Grand Canyon of India)"
      ],
      "hiddenGems": [
          "Gandikota gorge canyon over Pennar river",
          "Belum subterranean caves (second largest in India)",
          "Araku Valley tribal coffee plantations",
          "Borra million-year-old limestone caves"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Tirumala Venkateswara Temple is the most visited religious shrine on Earth, welcoming up to 100,000 pilgrims daily and preparing the GI-tagged Tirupati Laddu.",
          "Lepakshi Veerabhadra Temple features a famous \"Hanging Pillar\" that does not touch the ground; cloths and paper can be passed entirely underneath it.",
          "Gandikota in Kadapa district is acclaimed as the \"Grand Canyon of India\", sculpted by the Pennar River through red granite Erramala hills."
      ],
      "travelTips": [
          "Book Special Entry Darshan (SED) tickets for Tirupati Balaji at least 2 to 3 months in advance via the official TTD online portal.",
          "Taste authentic Pesarattu (green moong crepe) paired with tangy ginger chutney for a traditional Andhra breakfast.",
          "Purchase GI-tagged authentic Mangalagiri cotton sarees and Machilipatnam Kalamkari hand-block printed textiles directly from master artisans."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "1800-425-45454 (Andhra Pradesh Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "22°C - 33°C (Winter: 15°C - 28°C)",
          "condition": "Tropical Coastal Breeze",
          "aqi": "Good (45 AQI)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "The Gateway Hotel Beach Road, Visakhapatnam (Taj)",
              "type": "Coastal Bay View Luxury",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Beach Road, Vizag",
              "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Marasa Sarovar Premiere, Tirupati",
              "type": "Dashavatara Architectural Luxury",
              "rating": 4.8,
              "pricePerNight": "₹9,500",
              "location": "Upadhyayanagar, Karakambadi Road, Tirupati",
              "image": "https://images.unsplash.com/photo-1628107082933-07b23594f735?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Haritha Resort, Gandikota (APTDC)",
              "type": "Canyon Rim Cottages",
              "rating": 4.5,
              "pricePerNight": "₹3,500",
              "location": "Gandikota Fort Foot, Jammalamadugu",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Subbayya Gari Hotel, Kakinada / Vizag",
              "cuisineType": "Legendary Andhra Butta Bojanam (Banana Leaf Feast)",
              "rating": 4.9,
              "mustTry": "Gongura Rice, Pulusu & Pootharekulu",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Minerva Grand, Tirupati",
              "cuisineType": "Pure Vegetarian South Indian",
              "rating": 4.7,
              "mustTry": "Ghee Podi Dosa & Filter Coffee",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sea Inn (Raju Gari Dhaba), Vizag",
              "cuisineType": "Coastal Andhra Spicy Seafood",
              "rating": 4.8,
              "mustTry": "Royyala Vepudu (Prawn fry) & Crab Curry",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Sacred Tirumala Balaji & Seven Hills",
              "description": "Early morning darshan of Lord Venkateswara at Tirumala, visit Kapilatheertham waterfalls and Padmavathi Ammavari Temple.",
              "highlights": [
                  "Tirumala Balaji",
                  "Seven Hills",
                  "Tirupati Laddu"
              ]
          },
          {
              "day": 2,
              "title": "Monolithic Lepakshi & Grand Canyon Gandikota",
              "description": "Marvel at the hanging pillar and giant monolithic Nandi at Lepakshi, explore the sunset over the dramatic red canyon at Gandikota.",
              "highlights": [
                  "Lepakshi Veerabhadra",
                  "Hanging Pillar",
                  "Gandikota Canyon"
              ]
          },
          {
              "day": 3,
              "title": "Coastal Vizag & Submarine Museum",
              "description": "Visit Kailasagiri hill for Bay of Bengal panoramic views, tour INS Kursura (real submarine museum on beach), and drive along scenic Rushikonda beach.",
              "highlights": [
                  "INS Kursura",
                  "Kailasagiri Hill",
                  "Rushikonda Beach"
              ]
          }
      ]
  },
  'puducherry': {
      "id": "puducherry",
      "name": "Puducherry",
      "slug": "puducherry",
      "capital": "Puducherry (White Town)",
      "population": "1.4 Million",
      "languages": [
          "Tamil",
          "French",
          "English",
          "Malayalam",
          "Telugu"
      ],
      "heritageCount": 8,
      "festivalsCount": 11,
      "cultureCount": 14,
      "topAttraction": "French Quarter (White Town), Sri Aurobindo Ashram & Auroville Matrimandir",
      "heroImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
      "description": "The French Riviera of the East, Puducherry is a poetic seaside union territory where sun-drenched mustard-yellow colonial villas, bougainvillea-draped archways, French street names (Rues), and chic artisan bakeries harmoniously blend with ancient Tamil heritage and the universal spiritual city of Auroville.",
      "historyOverview": "Ancient Roman trade port of Poduke (Arikamedu). Purchased by François Martin in 1674, serving as the headquarters of the French East India Company (Compagnie des Indes) until the treaty of transfer to the Indian Union in 1954.",
      "dynasties": [
          "Chola Dynasty",
          "Pallava Dynasty",
          "French Colonial Empire (1674–1954)",
          "Sri Aurobindo & The Mother Spiritual Era"
      ],
      "cuisine": {
          "dishes": [
              "Pondicherry Creole Fish Curry with coconut cream and mustard seeds",
              "Bouillabaisse (French-Creole seafood stew)",
              "Coq au Vin",
              "Kothu Parotta with salna"
          ],
          "streetFood": [
              "Fresh French Croissants & Baguettes at Baker Street",
              "Promenade Beach Sundal",
              "Crepes with salted caramel"
          ],
          "sweets": [
              "Crème Brûlée",
              "Chocolate Croissants",
              "Mango Tart",
              "Carrot Halwa"
          ],
          "description": "Delectable Franco-Tamil Creole cuisine marrying delicate French culinary techniques (roux, slow reduction, clarified butter) with fragrant southern Indian spices, star anise, and fresh tamarind."
      },
      "architectureStyle": "French Colonial Neoclassical Architecture (White Town villas, Louvered shutters, Interior courtyards), Franco-Tamil Vernacular (Heritage Tamil Quarter), Futurist Geodesic Sphere (Auroville Matrimandir)",
      "traditionalDress": "Traditional Tamil Silk and Cotton Sarees alongside stylish Franco-chic linen shirts and dresses",
      "folkDance": [
          "Garadi (Traditional stick dance honoring Lord Rama)",
          "Bharatanatyam recitals",
          "Western Classical Ballets at Alliance Française"
      ],
      "music": [
          "Carnatic Classical vocal recitals",
          "French Chanson songs",
          "Choral singing at Sacred Heart Basilica"
      ],
      "bestTime": "October to March (Gentle ocean breezes, sunny skies, and pleasant cycling weather)",
      "estimatedDailyBudget": {
          "budget": "₹1,500 - ₹2,500 / day",
          "midRange": "₹4,500 - ₹8,500 / day",
          "luxury": "₹16,000 - ₹45,000+ / day"
      },
      "nearbyPlaces": [
          "Auroville",
          "Mahabalipuram",
          "Chidambaram Nataraja Temple",
          "Gingee Fort (Troy of the East)",
          "Pichavaram Mangrove Forest"
      ],
      "hiddenGems": [
          "Arikamedu ancient Roman trade excavation",
          "Pichavaram mangrove boating labyrinth",
          "Paradise Beach sandspit island",
          "Serenity Beach surfing breaks"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Auroville, the City of Dawn, was founded in 1968 by Mirra Alfassa (The Mother) as a universal township where men and women of all countries live in peace and progressive harmony.",
          "The Matrimandir in Auroville features the world’s largest optically worked glass globe (70 cm diameter) that projects a single ray of sunlight into its pure white marble meditation chamber.",
          "Arikamedu, just 4 km south of Puducherry, has revealed Roman amphorae, glassware, and coins proving direct maritime trade with the Roman Empire under Augustus Caesar."
      ],
      "travelTips": [
          "Rent a vintage pastel-colored bicycle or scooter to explore the quiet cobbled streets of White Town and Promenade Beach.",
          "Pre-book passes online to visit the inner meditation chamber of the golden Matrimandir in Auroville.",
          "Walk along Goubert Avenue (Promenade Beach) in the evening when it is completely closed to motorized vehicles."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "0413-2339497 (Puducherry Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "24°C - 32°C (Winter: 20°C - 29°C)",
          "condition": "Tropical Coastal Breeze",
          "aqi": "Good (34 AQI)",
          "bestSeason": "November to February"
      },
      "hotels": [
          {
              "name": "Palais de Mahe - CGH Earth, White Town",
              "type": "French Colonial Courtyard Luxury",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Bussy Street, White Town",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "La Villa, White Town",
              "type": "Designer Heritage Boutique Hotel",
              "rating": 4.8,
              "pricePerNight": "₹18,000",
              "location": "Rue Surcouf, White Town",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "The Promenade, Pondicherry",
              "type": "Oceanfront Luxury Hotel",
              "rating": 4.7,
              "pricePerNight": "₹11,000",
              "location": "Goubert Avenue, Promenade Beach",
              "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Carte Blanche, Hotel de L’Orient",
              "cuisineType": "Authentic Franco-Tamil Creole Fine Dining",
              "rating": 4.8,
              "mustTry": "Creole Prawn Curry, Duck Confit & Crème Brûlée",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Baker Street, Bussy Street",
              "cuisineType": "Artisan French Boulangerie & Patisserie",
              "rating": 4.9,
              "mustTry": "Almond Croissant, Quiche Lorraine & Eclairs",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Coromandel Cafe, Romain Rolland Street",
              "cuisineType": "Chic European Garden Bistro",
              "rating": 4.8,
              "mustTry": "Wood-fired Sourdough Pizzas, Gnocchi & Cocktails",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "French White Town & Promenade Sunset",
              "description": "Cycle through the mustard French Quarter, visit Sri Aurobindo Ashram, admire the Basilica of the Sacred Heart, walk Goubert Avenue.",
              "highlights": [
                  "French Quarter",
                  "Sri Aurobindo Ashram",
                  "Promenade Beach"
              ]
          },
          {
              "day": 2,
              "title": "Universal City of Auroville & Golden Matrimandir",
              "description": "Tour the experimental architectural township of Auroville, meditate at the golden sphere of Matrimandir, visit artisan ceramic studios.",
              "highlights": [
                  "Auroville",
                  "Matrimandir",
                  "Auroville Bakery"
              ]
          }
      ]
  },
  'lakshadweep': {
      "id": "lakshadweep",
      "name": "Lakshadweep",
      "slug": "lakshadweep",
      "capital": "Kavaratti",
      "population": "65,000",
      "languages": [
          "Malayalam",
          "Jesyari (Dweep Bhasha)",
          "Mahl (Minicoy)",
          "English"
      ],
      "heritageCount": 6,
      "festivalsCount": 8,
      "cultureCount": 11,
      "topAttraction": "Bangaram Atoll Coral Reefs & Agatti Island Turquoise Lagoons",
      "heroImage": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
      "description": "India’s coral jewel in the Arabian Sea, Lakshadweep (One Hundred Thousand Islands) is an archipelago of 36 pristine coral atolls with shallow crystal-turquoise lagoons, vibrant coral gardens sheltering sea turtles and manta rays, swaying coconut groves, and traditional boat-building craftsmanship.",
      "historyOverview": "Settled by seafaring Arab merchants and migrants from the Malabar coast in the 7th century. Governed by the Arakkal Kingdom of Cannanore (the only Muslim royal house of Kerala) until taken over by the British and integrated as a Union Territory in 1956.",
      "dynasties": [
          "Chera Maritime Outposts",
          "Arakkal Kingdom of Cannanore",
          "British East India Administration"
      ],
      "cuisine": {
          "dishes": [
              "Mus Kavaab (Spiced skewered skipjack tuna curry)",
              "Rayereha (Red tuna curry with coconut milk)",
              "Octopus Fry (Appam with spicy octopus roast)",
              "Avial with local green plantains"
          ],
          "streetFood": [
              "Tuna Cutlets at Kavaratti Jetty",
              "Kilanji (Paper-thin coconut crepes served with sweet coconut milk)"
          ],
          "sweets": [
              "Kadalakka sweet pudding",
              "Coconut Halwa",
              "Sukhiyan"
          ],
          "description": "Exquisite coconut-and-tuna ocean cuisine celebrating skipjack tuna (Maas), fresh scraped coconut milk, curry leaves, crushed black pepper, and unrefined coconut jaggery."
      },
      "architectureStyle": "Traditional Coral Stone and Timber Mosque Architecture (Ujra Mosque Kavaratti with carved floral ceilings), Thatched Beach Eco-Cabanas, Minicoy British Lighthouse (1885)",
      "traditionalDress": "Kachi cotton wrap skirt with gold brocade border and Thattam veil for women; White Lungi and shirt for men",
      "folkDance": [
          "Lava dance of Minicoy (Vibrant traditional rhythm dance with colorful drums)",
          "Parichakali (Shield and sword martial dance)",
          "Kolkali"
      ],
      "music": [
          "Sufi devotional Baith songs",
          "Minicoy seafaring chants",
          "Instruments: Dholu drum, Cymbals"
      ],
      "bestTime": "October to mid-May (Crystal calm lagoon waters, ideal for scuba diving and snorkeling)",
      "estimatedDailyBudget": {
          "budget": "₹2,500 - ₹4,000 / day",
          "midRange": "₹7,000 - ₹14,000 / day (Package includes boat transfers and permits)",
          "luxury": "₹22,000 - ₹50,000+ / day (Bangaram Private Island Beach Villa)"
      },
      "nearbyPlaces": [
          "Agatti Island",
          "Bangaram Island",
          "Thinnakara Island",
          "Kavaratti",
          "Kadmat (Diving Paradise)",
          "Minicoy"
      ],
      "hiddenGems": [
          "Thinnakara shipwreck diving site",
          "Kalpeni coral storm bank debris",
          "Minicoy 1885 historic stone lighthouse",
          "Pitti Bird Sanctuary oceanic islet"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Lakshadweep is India’s only coral atoll territory, composed entirely of biogenic calcium carbonate formations built over millennia by living coral polyps.",
          "Bangaram Island is an uninhabited teardrop-shaped paradise surrounded by a continuous shallow turquoise lagoon that glows with bioluminescent plankton at night.",
          "Minicoy Island culturally belongs to the Dhivehi (Maldivian) ethnic circle, possessing its own unique language (Mahl) and matriarchal village organization."
      ],
      "travelTips": [
          "Entry into Lakshadweep strictly requires an authorized ePermit issued through the official Lakshadweep administration portal or approved travel operators.",
          "Fly directly from Kochi (COK) to Agatti (AGX), which features one of the world’s most scenic airstrips jutting out directly into the turquoise sea.",
          "Respect the fragile marine ecosystem: picking, stepping on, or collecting live coral or sea shells is strictly prohibited by law."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "04896-262105 (Lakshadweep Tourism - SPORTS)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "26°C - 32°C",
          "condition": "Tropical Coral Breeze & Glass Lagoon",
          "aqi": "Pristine (5 AQI)",
          "bestSeason": "October to May"
      },
      "hotels": [
          {
              "name": "Bangaram Island Resort (SPORTS)",
              "type": "Private Atoll Beachfront Eco-Cabanas",
              "rating": 4.9,
              "pricePerNight": "₹22,000",
              "location": "Bangaram Atoll",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Agatti Island Beach Resort",
              "type": "Lagoon Edge Water Villas",
              "rating": 4.7,
              "pricePerNight": "₹14,000",
              "location": "Agatti Beach, Agatti",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Kadmat Island Beach Resort",
              "type": "Diving Academy Cottages",
              "rating": 4.6,
              "pricePerNight": "₹11,000",
              "location": "Kadmat Lagoon",
              "image": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Bangaram Lagoon Dining Shack",
              "cuisineType": "Fresh Oceanic Catch & Coconut Curries",
              "rating": 4.8,
              "mustTry": "Grilled Skipjack Tuna, Coconut Rayereha & Rice",
              "priceRange": "₹₹₹",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Agatti Coral Cafe",
              "cuisineType": "Local Malabar & Island Snacks",
              "rating": 4.6,
              "mustTry": "Mus Kavaab & Fresh Coconut Water",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Kavaratti Harbor Restaurant",
              "cuisineType": "Seafood Thali & Kerala Cuisine",
              "rating": 4.5,
              "mustTry": "Fish Fry Thali & Appam",
              "priceRange": "₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Flight into Agatti Lagoon & Sunset Cruise",
              "description": "Land at scenic Agatti airstrip surrounded by turquoise waves, transfer by speed catamaran to Bangaram Island, relax on virgin white sand.",
              "highlights": [
                  "Agatti Airstrip",
                  "Speed Boat Transfer",
                  "Bangaram Lagoon"
              ]
          },
          {
              "day": 2,
              "title": "Scuba Diving Bangaram Reefs & Shipwreck",
              "description": "PADI-certified scuba dive with sea turtles and spotted eagle rays, kayak in shallow emerald waters, stargaze under bioluminescent shoreline.",
              "highlights": [
                  "Coral Reef Scuba",
                  "Sea Turtles",
                  "Bioluminescence"
              ]
          }
      ]
  },
  'andaman-nicobar': {
      "id": "andaman-nicobar",
      "name": "Andaman & Nicobar Islands",
      "slug": "andaman-nicobar",
      "capital": "Port Blair (Sri Vijaya Puram)",
      "population": "420,000",
      "languages": [
          "Hindi",
          "Bengali",
          "Tamil",
          "Telugu",
          "Malayalam",
          "English",
          "Nicobarese"
      ],
      "heritageCount": 10,
      "festivalsCount": 11,
      "cultureCount": 14,
      "topAttraction": "Cellular Jail (National Memorial) & Radhanagar Beach (Havelock)",
      "heroImage": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=80",
      "description": "An emerald archipelago of 572 tropical islands bridging the Bay of Bengal and Andaman Sea, renowned for the poignant freedom struggle pilgrimage at the historic Cellular Jail (Kala Pani), the world-acclaimed turquoise powder sands of Radhanagar Beach on Havelock Island (Swaraj Dweep), vibrant coral wall scuba diving, and pristine rainforest canopies.",
      "historyOverview": "Inhabited for 60,000 years by indigenous Negrito and Mongoloid tribes (Great Andamanese, Onge, Jarawa, Sentinelese, Shompen). Naval base for the Chola Empire in the 11th century. Site of the British penal settlement where thousands of Indian freedom fighters endured harsh solitary confinement at Cellular Jail. Netaji Subhash Chandra Bose hoisted the first Indian flag here on December 30, 1943.",
      "dynasties": [
          "Chola Empire Maritime Outposts",
          "Indigenous Tribal Civilizations",
          "British Penal Settlement & Cellular Jail",
          "Netaji Provisional Azad Hind Government"
      ],
      "cuisine": {
          "dishes": [
              "Andaman King Prawn Curry with coconut milk and green chilies",
              "Grilled Red Snapper with lemon butter garlic",
              "Lobster Thermidor",
              "Amritsari Kulcha and Bengali Fish Thali in Port Blair"
          ],
          "streetFood": [
              "Prawn Tempura at Havelock Shacks",
              "Fried Calamari Rings",
              "Fresh Tender Coconut and Fruit Platters on Beach No. 7"
          ],
          "sweets": [
              "Coconut Jaggery Kheer",
              "Caramelized Banana Fritters",
              "Bengali Rosogolla of Port Blair"
          ],
          "description": "Spectacular pan-Indian coastal melting pot combining rich Bengali fish curries, spicy Tamil Nadu seasonings, fresh tropical coconuts, and freshly caught seafood platters."
      },
      "architectureStyle": "Panoptic Prison Architecture (Cellular Jail, Port Blair with seven radiating wings and central watchtower), Colonial Victorian Ruins on Ross Island (Netaji Subhash Chandra Bose Island), Eco-Luxury Bamboo Villas",
      "traditionalDress": "Contemporary light cottons, beach linen resort-wear, and pan-Indian attire alongside traditional Nicobarese festive wrap skirts",
      "folkDance": [
          "Nicobarese circle dance",
          "Great Andamanese ceremonial dances",
          "Pan-Indian cultural folk shows"
      ],
      "music": [
          "Nicobarese rhythmic chanting",
          "Island acoustic guitar ballads",
          "National patriotic songs at Cellular Jail memorial"
      ],
      "bestTime": "October to May (Calm azure seas, gentle tropical breezes, sunny clear days for scuba diving and island hopping)",
      "estimatedDailyBudget": {
          "budget": "₹1,800 - ₹2,800 / day",
          "midRange": "₹5,000 - ₹9,500 / day",
          "luxury": "₹22,000 - ₹65,000+ / day"
      },
      "nearbyPlaces": [
          "Havelock Island (Swaraj Dweep)",
          "Neil Island (Shaheed Dweep)",
          "Port Blair",
          "Ross Island",
          "Baratang Island (Mud Volcanoes)",
          "North Bay"
      ],
      "hiddenGems": [
          "Baratang limestone caves & mangrove tunnel boat safari",
          "Jolly Buoy coral island in Mahatma Gandhi Marine Park",
          "Natural Bridge formation on Neil Island",
          "Mount Harriet (Mount Manipur) National Park"
      ],
      "gallery": [
          "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],
      "facts": [
          "Cellular Jail (Kala Pani) was engineered with individual solitary confinement cells so that no prisoner could ever see or speak to another, holding legendary heroes like Veer Savarkar.",
          "Radhanagar Beach on Havelock Island was voted by TIME Magazine as the \"Best Beach in Asia\" and holds the prestigious international Blue Flag certification.",
          "Barren Island in the Andaman Sea is home to the only confirmed active volcano in all of South Asia."
      ],
      "travelTips": [
          "Book your private ferry tickets (Makruzz, Nautika, Green Ocean) between Port Blair, Havelock, and Neil Island in advance.",
          "Attend the evening Sound and Light Show (narrated in the stirring voice of Om Puri) at Cellular Jail in Port Blair.",
          "Experience night kayaking through the bioluminescent mangrove tunnels of Havelock Island during the new moon."
      ],
      "emergencyNumbers": {
          "police": "100 / 112",
          "touristHelpline": "03192-232694 (Andaman Tourism)",
          "ambulance": "108"
      },
      "weather": {
          "temp": "24°C - 31°C",
          "condition": "Tropical Island Breeze",
          "aqi": "Exceptional (6 AQI)",
          "bestSeason": "October to May"
      },
      "hotels": [
          {
              "name": "Taj Exotica Resort & Spa, Andamans",
              "type": "Ultra-Luxury Eco Villas on Radhanagar Beach",
              "rating": 5,
              "pricePerNight": "₹45,000",
              "location": "Radhanagar Beach No. 7, Havelock",
              "image": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Symphony Palms Beach Resort, Havelock",
              "type": "Private White Sand Beach Resort",
              "rating": 4.8,
              "pricePerNight": "₹14,000",
              "location": "Govind Nagar Beach No. 5",
              "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Sinclairs Bayview, Port Blair",
              "type": "Cantilever Oceanfront Hotel",
              "rating": 4.7,
              "pricePerNight": "₹9,500",
              "location": "Corbyn’s Cove Road, Port Blair",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "restaurants": [
          {
              "name": "Full Moon Cafe, Havelock Island",
              "cuisineType": "Beachfront Seafood & Global Comfort",
              "rating": 4.9,
              "mustTry": "Grilled Lobster with Garlic Butter, Prawn Curry & Smoothies",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "Something Different - A Beachside Cafe",
              "cuisineType": "Artisan Cafe & Pan-Asian Seafood",
              "rating": 4.8,
              "mustTry": "Crispy Calamari, Thin Crust Pizza & Cocktails",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
          },
          {
              "name": "New Lighthouse Restaurant, Port Blair",
              "cuisineType": "Open-Air Seafood Specialties",
              "rating": 4.7,
              "mustTry": "Tandoori Crab, Tiger Prawns & Fish Curry",
              "priceRange": "₹₹",
              "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
          }
      ],
      "aiSuggestedRoute": [
          {
              "day": 1,
              "title": "Cellular Jail Memorial & Ross Island Ruins",
              "description": "Tour the solitary cells and museum of Cellular Jail, take a short boat to Ross Island to explore British ruins overgrown by banyan trees.",
              "highlights": [
                  "Cellular Jail",
                  "Ross Island",
                  "Sound & Light Show"
              ]
          },
          {
              "day": 2,
              "title": "Havelock Island & Radhanagar Sunset",
              "description": "Take high-speed catamaran to Havelock Island, check into beach resort, swim and watch the legendary crimson sunset at Radhanagar Beach No. 7.",
              "highlights": [
                  "Radhanagar Beach",
                  "Havelock Catamaran",
                  "Elephant Beach Snorkeling"
              ]
          },
          {
              "day": 3,
              "title": "Scuba Diving at Elephant Beach & Coral Reefs",
              "description": "Morning boat to Elephant Beach for scuba diving and sea-walking among coral reefs, followed by evening beach shack feast.",
              "highlights": [
                  "Elephant Beach",
                  "Scuba Diving",
                  "Bioluminescent Kayaking"
              ]
          }
      ]
  }
};

export const ALL_INDIAN_STATES = [
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', capital: 'Amaravati', region: 'South' },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', capital: 'Itanagar', region: 'Northeast' },
  { id: 'assam', name: 'Assam', capital: 'Dispur', region: 'Northeast' },
  { id: 'bihar', name: 'Bihar', capital: 'Patna', region: 'East' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', capital: 'Raipur', region: 'Central' },
  { id: 'goa', name: 'Goa', capital: 'Panaji', region: 'West' },
  { id: 'gujarat', name: 'Gujarat', capital: 'Gandhinagar', region: 'West' },
  { id: 'haryana', name: 'Haryana', capital: 'Chandigarh', region: 'North' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', capital: 'Shimla', region: 'North' },
  { id: 'jharkhand', name: 'Jharkhand', capital: 'Ranchi', region: 'East' },
  { id: 'karnataka', name: 'Karnataka', capital: 'Bengaluru', region: 'South' },
  { id: 'kerala', name: 'Kerala', capital: 'Thiruvananthapuram', region: 'South' },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', capital: 'Bhopal', region: 'Central' },
  { id: 'maharashtra', name: 'Maharashtra', capital: 'Mumbai', region: 'West' },
  { id: 'manipur', name: 'Manipur', capital: 'Imphal', region: 'Northeast' },
  { id: 'meghalaya', name: 'Meghalaya', capital: 'Shillong', region: 'Northeast' },
  { id: 'mizoram', name: 'Mizoram', capital: 'Aizawl', region: 'Northeast' },
  { id: 'nagaland', name: 'Nagaland', capital: 'Kohima', region: 'Northeast' },
  { id: 'odisha', name: 'Odisha', capital: 'Bhubaneswar', region: 'East' },
  { id: 'punjab', name: 'Punjab', capital: 'Chandigarh', region: 'North' },
  { id: 'rajasthan', name: 'Rajasthan', capital: 'Jaipur', region: 'North' },
  { id: 'sikkim', name: 'Sikkim', capital: 'Gangtok', region: 'Northeast' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', capital: 'Chennai', region: 'South' },
  { id: 'telangana', name: 'Telangana', capital: 'Hyderabad', region: 'South' },
  { id: 'tripura', name: 'Tripura', capital: 'Agartala', region: 'Northeast' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', capital: 'Lucknow', region: 'North' },
  { id: 'uttarakhand', name: 'Uttarakhand', capital: 'Dehradun', region: 'North' },
  { id: 'west-bengal', name: 'West Bengal', capital: 'Kolkata', region: 'East' },
  { id: 'andaman-nicobar', name: 'Andaman & Nicobar Islands', capital: 'Port Blair', region: 'Islands' },
  { id: 'chandigarh', name: 'Chandigarh', capital: 'Chandigarh', region: 'North' },
  { id: 'dadra-nagar-haveli-daman-diu', name: 'Dadra & Nagar Haveli and Daman & Diu', capital: 'Daman', region: 'West' },
  { id: 'delhi', name: 'Delhi (NCT)', capital: 'New Delhi', region: 'North' },
  { id: 'jammu-kashmir', name: 'Jammu & Kashmir', capital: 'Srinagar / Jammu', region: 'North' },
  { id: 'ladakh', name: 'Ladakh', capital: 'Leh', region: 'North' },
  { id: 'lakshadweep', name: 'Lakshadweep', capital: 'Kavaratti', region: 'Islands' },
  { id: 'puducherry', name: 'Puducherry', capital: 'Puducherry', region: 'South' }
];

export function getStateData(slugOrId: string): StateData {
  if (STATES_DATA[slugOrId]) {
    return STATES_DATA[slugOrId];
  }
  const normalized = slugOrId.toLowerCase();
  const bySlug = Object.values(STATES_DATA).find(
    s => s.slug.toLowerCase() === normalized || s.id.toLowerCase() === normalized || s.name.toLowerCase() === normalized
  );
  if (bySlug) return bySlug;
  return STATES_DATA['rajasthan'];
}
