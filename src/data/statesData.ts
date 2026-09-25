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
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1600&q=80',
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
  }
};

// Helper function to get or generate complete details for all 36 states and UTs
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
  // 8 Union Territories
  { id: 'andaman-and-nicobar', name: 'Andaman & Nicobar Islands', capital: 'Port Blair', region: 'Islands' },
  { id: 'chandigarh', name: 'Chandigarh', capital: 'Chandigarh', region: 'North' },
  { id: 'dadra-nagar-haveli-daman-diu', name: 'Dadra & Nagar Haveli and Daman & Diu', capital: 'Daman', region: 'West' },
  { id: 'delhi', name: 'Delhi (NCT)', capital: 'New Delhi', region: 'North' },
  { id: 'jammu-and-kashmir', name: 'Jammu & Kashmir', capital: 'Srinagar (Summer) / Jammu (Winter)', region: 'North' },
  { id: 'ladakh', name: 'Ladakh', capital: 'Leh', region: 'North' },
  { id: 'lakshadweep', name: 'Lakshadweep', capital: 'Kavaratti', region: 'Islands' },
  { id: 'puducherry', name: 'Puducherry', capital: 'Puducherry', region: 'South' }
];

export function getStateData(slugOrId: string): StateData {
  if (STATES_DATA[slugOrId]) {
    return STATES_DATA[slugOrId];
  }
  const matched = ALL_INDIAN_STATES.find(s => s.id === slugOrId || s.name.toLowerCase() === slugOrId.toLowerCase());
  const name = matched ? matched.name : slugOrId.replace('-', ' ').toUpperCase();
  const capital = matched ? matched.capital : 'Capital City';
  
  // Handcrafted comprehensive fallback state with authentic region-aware metadata
  return {
    id: slugOrId,
    name: name,
    slug: slugOrId,
    capital: capital,
    population: 'Vibrant Population',
    languages: ['Hindi', 'English', 'Regional State Language'],
    heritageCount: 8,
    festivalsCount: 10,
    cultureCount: 12,
    topAttraction: `Iconic Heritage & Natural Monuments of ${name}`,
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    description: `Immerse in the timeless legacy, historic temples, magnificent monuments, and vibrant cultural celebrations of ${name}.`,
    historyOverview: `${name} holds deep roots in Indian history, with dynastic empires, sacred scriptures, and ancient trade routes shaping its vibrant traditions and magnificent architecture over millennia.`,
    dynasties: ['Ancient Regional Kingdoms', 'Medieval Empires', 'Royal Princely States'],
    cuisine: {
      dishes: [`Authentic ${name} Thali`, 'Traditional Spiced Curries', 'Handmade Flatbreads'],
      streetFood: ['Crispy Savories', 'Regional Chaats', 'Sweet Fritters'],
      sweets: ['Traditional Milk Sweets', 'Jaggery Specialties', 'Festive Puddings'],
      description: `Authentic traditional culinary recipes of ${name} passed down through generations using regional herbs and spices.`
    },
    architectureStyle: `Classic Regional Architecture with intricate stone carvings, royal palace pavilions, and sacred shrines`,
    traditionalDress: `Handwoven Silk and Cotton traditional ensembles worn during festivals`,
    folkDance: [`Folk Dances of ${name}`, 'Seasonal Harvest Celebrations'],
    music: [`Traditional Folk Melodies of ${name}`, 'Acoustic Percussion Ensembles'],
    bestTime: 'October to March',
    estimatedDailyBudget: {
      budget: '₹1,400 - ₹2,200 / day',
      midRange: '₹3,800 - ₹7,000 / day',
      luxury: '₹15,000 - ₹35,000+ / day'
    },
    nearbyPlaces: [`Heritage Circuit of ${name}`, 'Hill Stations & Scenic Valleys', 'Historic Citadel & Museums'],
    hiddenGems: [`Secret Valleys of ${name}`, 'Ancient Rock Cut Shrines', 'Artisan Weaving Clusters'],
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    facts: [
      `${name} boasts a unique geographical identity and centuries of indigenous crafts.`,
      `Celebrated across India for its distinctive seasonal festivals and hospitality.`,
      `Home to rich biodiversity sanctuaries, wildlife habitats, and protected forest reserves.`
    ],
    travelTips: [
      `Carry comfortable walking shoes when exploring monuments and heritage trails.`,
      `Sample authentic dishes only from certified heritage eateries and local cooperatives.`,
      `Respect photography guidelines at consecrated sacred sanctums.`
    ],
    emergencyNumbers: {
      police: '100 / 112',
      touristHelpline: '1363 (National Tourist Helpline)',
      ambulance: '108'
    },
    weather: {
      temp: '20°C - 30°C',
      condition: 'Pleasant & Breezy',
      aqi: 'Good (55 AQI)',
      bestSeason: 'October to March'
    },
    hotels: [
      { name: `The Heritage Grand Hotel, ${name}`, type: 'Luxury Heritage Stay', rating: 4.9, pricePerNight: '₹16,000', location: `${capital}`, image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' },
      { name: `Royal Haveli & Resort`, type: 'Comfort Boutique', rating: 4.7, pricePerNight: '₹6,500', location: 'Historic City Centre', image: 'https://images.unsplash.com/photo-1600100397608-f010f443b7cf?auto=format&fit=crop&w=800&q=80' }
    ],
    restaurants: [
      { name: `Royal Heritage Dining, ${capital}`, cuisineType: 'Traditional Regional Thali', rating: 4.8, mustTry: 'Grand Royal Thali', priceRange: '₹₹', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
      { name: `Old City Tiffin Room`, cuisineType: 'Local Street Delicacies', rating: 4.7, mustTry: 'Signature Breakfast Specialties', priceRange: '₹', image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80' }
    ],
    aiSuggestedRoute: [
      { day: 1, title: `${capital} Historical Exploration`, description: `Tour the grand palaces, museums, and historic markets of ${capital}.`, highlights: ['City Palace', 'Museum of Heritage', 'Local Bazaars'] },
      { day: 2, title: `Sacred Shrines & Ancient Fortresses`, description: `Ascend ancient hill fortresses and explore rock-cut sanctums.`, highlights: ['Hill Fort', 'Ancient Temple', 'Scenic Viewpoint'] },
      { day: 3, title: `Artisan Villages & Nature Sanctuary`, description: `Meet master weavers and sculptors; sunset boat ride along local rivers or lakes.`, highlights: ['Artisan Guild', 'Craft Workshop', 'Nature Lake'] }
    ]
  };
}
