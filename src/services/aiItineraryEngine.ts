import { ItineraryRequest, ItineraryResult, DayPlan } from '../types';
import { STATES_DATA, getStateData } from '../data/statesData';
import { HERITAGE_SITES } from '../data/heritageSites';
import { HIDDEN_GEMS } from '../data/hiddenGems';

// Helper interface for destination-specific micro knowledge
interface MicroDestinationKnowledge {
  name: string;
  state: string;
  tagline: string;
  bestMonths: string;
  dailyThemes: string[];
  morningPool: { activity: string; location: string; tip: string }[];
  afternoonPool: { activity: string; location: string; foodTip: string }[];
  eveningPool: { activity: string; location: string; sunsetSpot: string }[];
  routes: { from: string; to: string; distance: string; duration: string; mode: string }[];
  entryFees: { site: string; indians: string; foreigners: string }[];
  cuisines: string[];
  eateries: { name: string; speciality: string; price: string }[];
  stays: { name: string; style: string; price: string }[];
  hiddenGems: string[];
  photoSpots: { spot: string; bestTime: string; tip: string }[];
  shopping: { item: string; market: string; tip: string }[];
  culturalEtiquette: string[];
  facts: string[];
  emergency: { agency: string; phone: string }[];
}

const MICRO_DESTINATIONS: Record<string, MicroDestinationKnowledge> = {
  hampi: {
    name: 'Hampi (Vijayanagara)',
    state: 'Karnataka',
    tagline: 'The Forgotten Boulder Empire of Vijayanagara',
    bestMonths: 'October to March (Cool breezes among granite boulder hills)',
    dailyThemes: [
      'Sacred Center & Monolithic Shrines',
      'Royal Citadel & Lotus Enclosure',
      'Anegundi Across the Tungabhadra & Bouldering Trails',
      'Riverside Vittala Stone Chariot & Sunset Peaks'
    ],
    morningPool: [
      { activity: 'Sunrise trek up Matanga Hill for 360-degree golden dawn views over Virupaksha temple and granite boulder seas.', location: 'Matanga Hill Peak', tip: 'Start climbing at 5:30 AM with a headlamp; wear grippy trail shoes.' },
      { activity: 'Early morning darshan at the 7th-century Virupaksha Temple; receive blessing from temple elephant Lakshmi.', location: 'Virupaksha Temple Sanctum', tip: 'Enter before 7:30 AM to see the morning camphor aarti in silence.' },
      { activity: 'Explore the monumental monolithic Lakshmi Narasimha statue and giant Badavilinga carved from single stone blocks.', location: 'Sacred Center Monument Complex', tip: 'Soft morning light hits the Narasimha face best between 8:00 AM and 9:30 AM.' },
      { activity: 'Coracle boat crossing across the swirling Tungabhadra River to ancient Anegundi, mythic monkey kingdom of Kishkindha.', location: 'Tungabhadra River Coracle Crossing', tip: 'Take a round wicker coracle boat; negotiate fare in advance (approx ₹50-100).' }
    ],
    afternoonPool: [
      { activity: 'Explore the Indo-Islamic archways of Lotus Mahal, Elephant Stables, and Queen’s Bath inside the Royal Enclosure.', location: 'Royal Enclosure & Zenana Complex', foodTip: 'Savor South Indian plantain leaf meals with spicy rasam and freshly grated coconut.' },
      { activity: 'Visit the subterranean underground Shiva temple and stepwell stepped tank (Pushkarani) with geometric stone symmetry.', location: 'Stepped Tank (Pushkarani)', foodTip: 'Relish warm banana flower fritters and chilled fresh lime soda at nearby garden cafes.' },
      { activity: 'Tour the King’s Balance, Hazara Rama temple with 1,000 carved Ramayana bas-reliefs, and historic mint.', location: 'Hazara Rama Temple', foodTip: 'Sample traditional Jolada Roti (sorghum flatbread) with brinjal ennegayi curry.' },
      { activity: 'Hike through Sanapur boulder paths and visit Pampa Sarovar, one of the five sacred lakes of Hindu cosmology.', location: 'Sanapur Lake & Anegundi', foodTip: 'Try wood-fired thin crust pizzas and ginger lemon honey tea at Mango Tree cafe.' }
    ],
    eveningPool: [
      { activity: 'Golden hour walk along the stone bazaar colonnades to the world-famous Vittala Temple Stone Chariot and musical pillars.', location: 'Vittala Temple Complex', sunsetSpot: 'King’s Balance facing the Tungabhadra river' },
      { activity: 'Sunset gathering atop Hemakuta Hill overlooking a cluster of pre-Vijayanagara Jain temples with amber granite glow.', location: 'Hemakuta Hill Sunset Point', sunsetSpot: 'Hemakuta Hill upper stone mantapa' },
      { activity: 'Trek up Anjanadri Hill (575 whitewashed stone steps) to watch the sunset paint the entire Vijayanagara valley in purple.', location: 'Anjanadri Hill (Birthplace of Hanuman)', sunsetSpot: 'Anjanadri Hill summit mantapa' },
      { activity: 'Evening riverfront stroll along Kampa Bhupa’s path watching local fishermen and coracles gliding into twilight.', location: 'Tungabhadra Riverbank', sunsetSpot: 'Purandara Dasa Mantapa over river rapids' }
    ],
    routes: [
      { from: 'Hospet Junction', to: 'Hampi Bazaar', distance: '13 km', duration: '25 mins', mode: 'Auto-Rickshaw / Taxi' },
      { from: 'Virupaksha Temple', to: 'Vittala Temple', distance: '3.5 km', duration: '12 mins / 30 mins walk', mode: 'Electric Eco-Buggy / River Walk' },
      { from: 'Hampi Sacred Center', to: 'Anegundi (Hippie Side)', distance: '4 km', duration: '15 mins', mode: 'Coracle Boat + Auto' }
    ],
    entryFees: [
      { site: 'Vittala Temple & Lotus Mahal (Combined ASI Ticket)', indians: '₹40', foreigners: '₹600' },
      { site: 'Virupaksha Temple', indians: '₹5 (Camera: ₹50)', foreigners: '₹5 (Camera: ₹50)' },
      { site: 'Matanga Hill & Hemakuta Hill', indians: 'Free', foreigners: 'Free' },
      { site: 'Archaeological Museum Kamalapura', indians: '₹5', foreigners: '₹5' }
    ],
    cuisines: ['Karnataka Banana Leaf Thali', 'Jolada Roti Oota', 'Bisi Bele Bath', 'Akki Roti with Chutney', 'Filter Degree Coffee'],
    eateries: [
      { name: 'Mango Tree Restaurant, Kamalapur Road', speciality: 'South Indian Thali, Israeli platters & Fresh Juices', price: '₹350/person' },
      { name: 'Laughing Buddha Cafe, Anegundi', speciality: 'River view seating, wood-fired bakes & herbal tea', price: '₹400/person' },
      { name: 'Suresh Restaurant, Hampi Bazaar', speciality: 'Authentic morning Idli, Vada, Upma & Filter Coffee', price: '₹120/person' }
    ],
    stays: [
      { name: 'Evolve Back Kamalapura Palace, Hampi', style: 'Vijayanagara Imperial Fort-Palace Luxury', price: '₹32,000/night' },
      { name: 'Heritage Resort Hampi', style: 'Eco-Luxury Cottages with Coconut Groves', price: '₹9,500/night' },
      { name: 'Kishkinda Heritage Resort, Anegundi', style: 'Rustic Boulder-Facing Chalet', price: '₹4,500/night' }
    ],
    hiddenGems: ['Sanapur Lake turquoise reservoir & cliff views', 'Daroji Sloth Bear Sanctuary', 'Anegundi ancient stepwells', 'Kampa Bhupa riverside carved Shiva lingas'],
    photoSpots: [
      { spot: 'Vittala Stone Chariot', bestTime: '06:30 AM - 07:30 AM', tip: 'Use a wide-angle lens with low aperture to capture the chariot uncrowded in morning dawn.' },
      { spot: 'Hemakuta Hill Mantapas', bestTime: '05:30 PM - 06:15 PM', tip: 'Silhouette ancient pillars against the fiery orange sunset.' },
      { spot: 'Matanga Hill Panorama', bestTime: 'Sunrise 06:00 AM', tip: 'Watch the mist lift from banana plantations and illuminate Virupaksha gopuram.' }
    ],
    shopping: [
      { item: 'Handmade stone and soapstone miniature carvings', market: 'Kamalapura Artisan Guilds', tip: 'Buy only from certified local carvers.' },
      { item: 'Lambani tribal embroidered textiles & mirror-work bags', market: 'Sandur Kushala Kala Kendra', tip: 'Look for GI-tagged Sandur Lambani embroidery.' },
      { item: 'Handloom banana fiber bags and table mats', market: 'The Kishkinda Trust, Anegundi', tip: 'Eco-friendly and empowers local village women.' }
    ],
    culturalEtiquette: [
      'Virupaksha is an active living temple: footwear must be left outside at the shoe counter.',
      'Modest attire covering shoulders and knees is strictly required for sanctum visits.',
      'Do not climb or lean against fragile ancient granite pillars or the wheels of the stone chariot.'
    ],
    facts: [
      'In the 15th century, Vijayanagara was the second-largest city in the world after Beijing, with over 500,000 residents.',
      'The 56 musical pillars of the Vittala Temple emit distinct swaras (musical notes) when gently tapped.',
      'The stones of Hampi date back nearly 3 billion years, making them among the oldest rock formations on the surface of Earth.'
    ],
    emergency: [
      { agency: 'Hampi Police Station', phone: '08394-241224 / 112' },
      { agency: 'Karnataka Tourism Information Center Hampi', phone: '08394-241339' },
      { agency: 'Government Hospital Kamalapura', phone: '08394-241233' }
    ]
  },

  varanasi: {
    name: 'Varanasi (Kashi)',
    state: 'Uttar Pradesh',
    tagline: 'The Luminous City of Light & Immortality',
    bestMonths: 'October to March (Crisp winter mornings over the holy Ganga)',
    dailyThemes: [
      'Sacred Ganga Dawn & Ancient Ghats Pilgrimage',
      'Kashi Vishwanath Corridor & Old City Alleys (Galis)',
      'Sarnath: The Turning of the Wheel of Dharma',
      'Artisan Silk Weavers & Royal Ramnagar Citadel'
    ],
    morningPool: [
      { activity: 'Silent hand-rowed wooden boat ride from Assi Ghat to Manikarnika Ghat at sunrise, observing morning ablutions and Vedic chants.', location: 'Ganga River Ghats', tip: 'Hire a non-motorized wooden boat for tranquil photography; depart at 5:15 AM.' },
      { activity: 'VIP Sugam Darshan at the golden spires of Kashi Vishwanath Temple via the new riverfront corridor.', location: 'Kashi Vishwanath Temple', tip: 'Leave all electronic devices, belts, and leather items at locker counters outside.' },
      { activity: 'Morning meditation at Assi Ghat during Subah-e-Banaras with live Shehnai, Vedic yajna, and yoga by the water.', location: 'Assi Ghat', tip: 'Arrive by 5:00 AM; yoga mats are freely provided for travelers.' },
      { activity: 'Walk through narrow ancient labyrinthine Galis of Vishwanath Gali, discovering hidden centuries-old stone deities.', location: 'Kashi Old City Galis', tip: 'Follow the river current when disoriented; lanes always lead back to the Ghats.' }
    ],
    afternoonPool: [
      { activity: 'Excursion to Sarnath (10 km): Visit Dhamek Stupa where Lord Buddha delivered his first sermon in 528 BCE.', location: 'Sarnath Archaeological Complex', foodTip: 'Savor spicy Banarasi Tamatar Chaat and Palak Chaat served in terracotta purvas.' },
      { activity: 'Explore Sarnath Archaeological Museum, housing the original 3rd-century BCE Ashoka Lion Capital (National Emblem of India).', location: 'Sarnath Museum', foodTip: 'Indulge in sweet, saffron-laced Malaiyyo foam dessert (winter specialty).' },
      { activity: 'Visit the 18th-century Ramnagar Fort on the eastern bank of the Ganga, home to the Kashi Naresh royal family museum.', location: 'Ramnagar Fort', foodTip: 'Try cold Lassi topped with a thick layer of clotted malai and rabri in a clay kulhad.' },
      { activity: 'Tour the master Banarasi silk weaving workshops in Madanpura, watching jacquard looms weave pure gold zari sarees.', location: 'Madanpura Weavers Quarter', foodTip: 'Taste piping hot Bedmi Puri with spicy aloo sabzi and jalebi for lunch.' }
    ],
    eveningPool: [
      { activity: 'Experience the world-renowned Grand Ganga Aarti at Dashashwamedh Ghat with synchronized multi-tiered brass lamps.', location: 'Dashashwamedh Ghat', sunsetSpot: 'Boat anchored directly in front of the Aarti platform' },
      { activity: 'Evening sunset boat cruise to Manikarnika Ghat, witnessing the eternal cremation fires burning unbroken for 3,000 years.', location: 'Manikarnika Ghat', sunsetSpot: 'Mid-river facing the smoking stone pyres' },
      { activity: 'Attend classical evening Hindustani vocal or sitar recitals at Sangeet Parishad or Assi Ghat amphitheater.', location: 'Assi Cultural Center', sunsetSpot: 'Assi Ghat river stairs' },
      { activity: 'Culinary night trail tasting authentic Banarasi Paan at Keshav Tambool, followed by Kashi Chaat Bhandar.', location: 'Godowlia Chowk', sunsetSpot: 'Godowlia heritage pedestrian promenade' }
    ],
    routes: [
      { from: 'Varanasi Cantt Station', to: 'Godowlia (Old City)', distance: '4.5 km', duration: '20 mins', mode: 'Auto-Rickshaw / E-Rickshaw' },
      { from: 'Godowlia', to: 'Dashashwamedh Ghat', distance: '800 m', duration: '10 mins walk', mode: 'Pedestrian Walk Only' },
      { from: 'Varanasi Ghats', to: 'Sarnath', distance: '12 km', duration: '35 mins', mode: 'Taxi / Cab' }
    ],
    entryFees: [
      { site: 'Kashi Vishwanath Temple (General Darshan)', indians: 'Free', foreigners: 'Free' },
      { site: 'Sarnath Dhamek Stupa (ASI Ticket)', indians: '₹25', foreigners: '₹300' },
      { site: 'Sarnath Archaeological Museum', indians: '₹5', foreigners: '₹5' },
      { site: 'Ramnagar Fort Museum', indians: '₹50', foreigners: '₹300' }
    ],
    cuisines: ['Banarasi Tamatar Chaat', 'Bedmi Puri Sabzi', 'Banarasi Paan', 'Malaiyyo (Winter)', 'Blue Lassi', 'Baati Chokha'],
    eateries: [
      { name: 'Kashi Chaat Bhandar, Godowlia', speciality: 'Tamatar Chaat, Palak Chaat & Dahi Golgappe', price: '₹150/person' },
      { name: 'Blue Lassi Shop, Bangali Tola', speciality: 'Over 80 varieties of handcrafted artisanal fruit lassi', price: '₹120/person' },
      { name: 'Pappu Chai Stall, Assi Ghat', speciality: 'Lemon Tea & Banarasi intellectual debate hub', price: '₹30/person' }
    ],
    stays: [
      { name: 'BrijRama Palace - A Heritage Hotel, Darbhanga Ghat', style: '210-Year-Old Palace Directly on the River', price: '₹35,000/night' },
      { name: 'Taj Ganges, Varanasi', style: '5-Star Luxury Garden Estate', price: '₹22,000/night' },
      { name: 'Scindhia Guest House, Scindhia Ghat', style: 'River-Facing Traditional Haveli', price: '₹4,500/night' }
    ],
    hiddenGems: ['Kriti Gallery contemporary craft space', 'Samatva Ghat quiet sunrise spot', 'Chunar Fort on sandstone cliff', 'Lalita Ghat Nepali Temple carved with erotic woodwork'],
    photoSpots: [
      { spot: 'Dashashwamedh Ganga Aarti from Boat', bestTime: '06:45 PM - 07:30 PM', tip: 'Anchor boat 15 meters from the priests; use ISO 1600+ for lamp flame trails.' },
      { spot: 'Chet Singh Fort on Riverfront', bestTime: '06:15 AM - 07:00 AM', tip: 'Low morning sunlight illuminates the medieval battlements and river reflections.' },
      { spot: 'Dhamek Stupa Sarnath', bestTime: '03:30 PM - 05:00 PM', tip: 'Capture Buddhist monks in saffron robes circumambulating the giant 43-meter stupa.' }
    ],
    shopping: [
      { item: 'Authentic handwoven Banarasi Katan & Tanchoi silk sarees', market: 'Chowk & Peeli Kothi Weaver Mills', tip: 'Look for the Silk Mark and GI authentication tag.' },
      { item: 'Hand-turned wooden lacquer toys', market: 'Khojwa Artisan Quarter', tip: 'Traditional GI craft made with natural vegetable dyes.' },
      { item: 'Brass temple lamps and bells', market: 'Thatheri Bazaar', tip: 'Purchase by weight of brass.' }
    ],
    culturalEtiquette: [
      'Photography is strictly prohibited inside the burning grounds of Manikarnika and Harishchandra Ghats; put cameras away out of respect.',
      'Remove shoes outside all temple precincts; leather belts and bags are barred inside Kashi Vishwanath.',
      'Always circumambulate temples and stupas clockwise (Pradakshina).'
    ],
    facts: [
      'Varanasi is widely documented by historians as one of the oldest continuously inhabited cities on Earth, dating back over 3,000 years.',
      'Mark Twain famously wrote: "Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together!"',
      'The sacred city sits on the crescent bank of the Ganga, where the river uniquely turns backwards to flow North towards the Himalayas (Uttara-vahini).'
    ],
    emergency: [
      { agency: 'Varanasi Police Tourist Helpline', phone: '0542-2508000 / 112' },
      { agency: 'UP Tourism Office Dashashwamedh', phone: '0542-2505030' },
      { agency: 'Banaras Hindu University (BHU) Trauma Hospital', phone: '0542-2369001' }
    ]
  },

  meghalaya: {
    name: 'Meghalaya (Sohra & Shillong)',
    state: 'Meghalaya',
    tagline: 'The Abode of the Clouds & Living Root Bridges',
    bestMonths: 'September to May (Post-monsoon waterfalls & winter mirror rivers)',
    dailyThemes: [
      'Shillong Pine Ridges, Colonial Heritage & Laitlum Canyon',
      'Cherrapunji (Sohra): Nohkalikai Plunge & Arwah Caves',
      'The Double Decker Living Root Bridge Epic Trek',
      'Dawki Umngot Glass River & Mawlynnong Cleanest Village'
    ],
    morningPool: [
      { activity: 'Morning walk around pine-fringed Ward’s Lake and stroll through the colonial wooden cottages of Shillong.', location: 'Ward’s Lake & Shillong Peak', tip: 'Hire an authorized taxi early before peak morning mountain traffic.' },
      { activity: 'Descent through 3,500 ancient stone staircase steps through dense rainforest to the Double Decker Living Root Bridge.', location: 'Nongriat Living Root Bridges', tip: 'Carry trekking poles, 2 liters of water, and wear lightweight quick-dry clothing.' },
      { activity: 'Morning visit to Nohkalikai Falls, India’s tallest plunge waterfall (1,115 ft), dropping into a vibrant emerald pool.', location: 'Nohkalikai Viewpoint', tip: 'Best light before 10:30 AM before valley clouds drift up the gorge.' },
      { activity: 'Sunrise boating across the turquoise glass waters of the Umngot River in Dawki along the Bangladesh border.', location: 'Dawki Umngot River', tip: 'November to February offers maximum water transparency; boats appear suspended in air.' }
    ],
    afternoonPool: [
      { activity: 'Stand on the precipice of Laitlum Canyons, gazing down 3,000 feet into mist-blanketed tribal river valleys.', location: 'Laitlum Grand Canyon', foodTip: 'Savor traditional Jadoh (rice cooked with aromatic herbs and ginger) with tender pork.' },
      { activity: 'Explore the prehistoric fossils and limestone stalactites inside Arwah Cave and Mawsmai Cave.', location: 'Arwah & Mawsmai Caves', foodTip: 'Relish Dohkhlieh pork salad seasoned with chopped onions, chilies, and local herbs.' },
      { activity: 'Walk through Mawlynnong (voted Asia’s Cleanest Village), climbing bamboo treehouses overlooking Bangladesh.', location: 'Mawlynnong Village', foodTip: 'Try Pukhlein (crispy deep-fried sweet rice and jaggery snacks) with hill tea.' },
      { activity: 'Swim in the natural turquoise stepped pools at the base of Krang Shuri Waterfall in Jaintia Hills.', location: 'Krang Shuri Falls', foodTip: 'Sample Tungrymbai fermented soybean paste cooked with black sesame paste.' }
    ],
    eveningPool: [
      { activity: 'Sunset coffee and live indie rock and blues at Dylan’s Cafe or cloud terraces in Laitumkhrah, Shillong.', location: 'Laitumkhrah Cafe Quarter', sunsetSpot: 'Shillong Peak Viewpoint' },
      { activity: 'Evening sunset over the Seven Sisters Waterfalls (Nohsngithiang) cascading down purple limestone cliffs.', location: 'Cherrapunji Cliffs', sunsetSpot: 'Eco Park cliff edge' },
      { activity: 'Stroll through Police Bazar tasting Khasi street food, momos, and shopping for handmade bamboo cane items.', location: 'Police Bazar Night Market', sunsetSpot: 'Ward’s Lake bridge pavilion' },
      { activity: 'Bonfire under starry skies at an eco-resort in Cherrapunji listening to Khasi acoustic folk melodies.', location: 'Sohra Hilltop Resort', sunsetSpot: 'Cherrapunji Valley rim' }
    ],
    routes: [
      { from: 'Guwahati Airport (GAU)', to: 'Shillong', distance: '120 km', duration: '3 hrs', mode: 'Scenic Highway Taxi' },
      { from: 'Shillong', to: 'Cherrapunji (Sohra)', distance: '54 km', duration: '1 hr 45 mins', mode: 'Mountain Ridge Taxi' },
      { from: 'Cherrapunji', to: 'Dawki', distance: '85 km', duration: '2.5 hrs', mode: 'Private Cab' }
    ],
    entryFees: [
      { site: 'Nohkalikai Falls Viewpoint', indians: '₹20', foreigners: '₹50' },
      { site: 'Nongriat Living Root Bridge Community Fee', indians: '₹50', foreigners: '₹100' },
      { site: 'Mawsmai Limestone Cave', indians: '₹20', foreigners: '₹50' },
      { site: 'Dawki Umngot Country Boat Ride', indians: '₹800/boat (up to 4 people)', foreigners: '₹800/boat' }
    ],
    cuisines: ['Jadoh Rice with Pork/Chicken', 'Dohkhlieh Salad', 'Tungrymbai with Black Sesame', 'Pukhlein Sweet Bread', 'Khasi Pine Tea'],
    eateries: [
      { name: 'Trattoria, Police Bazar Shillong', speciality: 'Authentic Traditional Khasi Cuisine Thalis', price: '₹200/person' },
      { name: 'Dylan’s Cafe, Laitumkhrah', speciality: 'Artisan Pour-over Coffee, Pancakes & Roast Sandwiches', price: '₹450/person' },
      { name: 'Orange Roots, Sohra', speciality: 'Pure Vegetarian South Indian & North Indian Meals', price: '₹250/person' }
    ],
    stays: [
      { name: 'Ri Kynjai - Serenity by the Lake, Umiam', style: 'Luxury Khasi Architecture Overlooking Lake', price: '₹26,000/night' },
      { name: 'Polo Orchid Resort, Cherrapunji', style: 'Cliffside Waterfall View Chalet', price: '₹16,000/night' },
      { name: 'Serene Homestay, Nongriat Village', style: 'Basic Tribal Homestay near Root Bridge', price: '₹1,500/night' }
    ],
    hiddenGems: ['Wei Sawdong three-tiered emerald fall', 'Krang Shuri crystal blue lagoon', 'David Scott historical mountain trail', 'Mawphlang Sacred Grove protected ancient forest'],
    photoSpots: [
      { spot: 'Dawki Umngot River Surface', bestTime: '11:00 AM - 01:00 PM', tip: 'Shoot straight down from the suspension bridge or boat edge when the sun eliminates water glare.' },
      { spot: 'Nongriat Double Decker Root Bridge', bestTime: '08:00 AM - 10:00 AM', tip: 'Use long exposure (1/4s) with an ND filter for the natural waterfall spray behind the bridge.' },
      { spot: 'Laitlum Canyons', bestTime: '04:00 PM - 05:15 PM', tip: 'Capture rolling valley mists parting to reveal miniature river gorges below.' }
    ],
    shopping: [
      { item: 'Hand-woven bamboo dustbins & cane furniture', market: 'Bara Bazar (Iewduh), Shillong', tip: 'Asia’s largest traditional indigenous market.' },
      { item: 'Lakadong Turmeric (High Curcumin 7%+)', market: 'Jowai & Shillong Organic Markets', tip: 'World-famous for exceptional medicinal potency.' },
      { item: 'Sohiong indigenous wild blackberry wine', market: 'Shillong Artisan Stores', tip: 'Organic, locally brewed hill specialty.' }
    ],
    culturalEtiquette: [
      'Do not pick leaves, branches, or stones from the Mawphlang Sacred Forest; according to Khasi belief, nothing may be taken out of the sacred grove.',
      'Khasi society is strictly matrilineal; always show respect to matriarch elders and women entrepreneurs.',
      'Plastic littering is strictly banned across Mawlynnong, Dawki, and Nongriat; carry your waste back.'
    ],
    facts: [
      'The Living Root Bridges are grown over 15 to 30 years by guiding the aerial roots of Ficus elastica trees through hollowed betel nut trunks across raging monsoon torrents.',
      'Mawsynram in Meghalaya receives an annual rainfall of nearly 11,871 mm, recognized by Guinness World Records as the wettest place on Earth.',
      'The Khasi language belongs to the Austroasiatic language family, related to Mon-Khmer in Cambodia and Vietnam.'
    ],
    emergency: [
      { agency: 'Shillong Police Control Room', phone: '0364-2222214 / 112' },
      { agency: 'Meghalaya Tourism Helpline', phone: '1800-345-3739' },
      { agency: 'Civil Hospital Shillong', phone: '0364-2224100' }
    ]
  },

  ladakh: {
    name: 'Ladakh (Leh, Nubra Valley & Pangong Tso)',
    state: 'Ladakh',
    tagline: 'The Roof of the World & High Trans-Himalayan Monasteries',
    bestMonths: 'May to October (Pristine alpine passes and monastery mask dances)',
    dailyThemes: [
      'Acclimatization, Leh Palace & Shanti Stupa Golden Sunset',
      'Indus Valley Monasteries: Hemis, Thiksey & Shey Palace',
      'Conquering Khardung La Pass & Sand Dunes of Nubra (Hunder)',
      'Pangong Tso High-Altitude Turquoise Lake & Chang La Pass'
    ],
    morningPool: [
      { activity: 'Gentle sunrise stroll around Shanti Stupa, absorbing panoramic views of the Stok Kangri mountain range in crisp 3,500m mountain air.', location: 'Shanti Stupa, Leh', tip: 'Spend Day 1 resting completely for mandatory AMS altitude acclimatization.' },
      { activity: 'Attend morning prayer assembly at Thiksey Monastery, listening to deep monks chanting and long brass Dungchen horns.', location: 'Thiksey Monastery Sanctum', tip: 'Arrive at 06:15 AM sharp for morning tea with monks; remove shoes.' },
      { activity: 'Traverse the legendary Khardung La Pass (17,982 ft), one of the highest motorable roads in the world, descending into Nubra Valley.', location: 'Khardung La Summit', tip: 'Do not stay more than 15-20 minutes at the top to prevent acute mountain sickness.' },
      { activity: 'Awake to turquoise morning reflections on the shores of Pangong Tso (14,270 ft) as migratory bar-headed geese fly overhead.', location: 'Pangong Tso Shoreline (Lukung/Spangmik)', tip: 'Sunrise light between 6:00 AM and 7:30 AM illuminates brilliant shades of blue.' }
    ],
    afternoonPool: [
      { activity: 'Explore the 9-storey 17th-century Leh Palace, ancient Namgyal Tsemo fortress, and Tibetan craft galleries.', location: 'Leh Palace & Old Town Heritage Walk', foodTip: 'Savor steaming hot Tibetan Mutton Momos and Tingmo with spicy dip at local eateries.' },
      { activity: 'Explore the hidden copper-gold museum treasures and sacred thankas inside Hemis Monastery, largest gompa in Ladakh.', location: 'Hemis Gompa Museum', foodTip: 'Try traditional Skyu (slow-simmered Ladakhi root vegetable and pasta stew).' },
      { activity: 'Ride Bactrian double-humped camels through the white sand dunes of Hunder against snow-capped granite peaks.', location: 'Hunder Sand Dunes', foodTip: 'Sip hot butter tea (Gur Gur Chai) and fresh sea buckthorn juice at desert yurt stalls.' },
      { activity: 'Visit the 106-foot colossal outdoor golden statue of Maitreya Buddha overlooking the Nubra and Shyok river confluence.', location: 'Diskit Monastery Peak', foodTip: 'Relish warm Thukpa noodle soup with wild Himalayan herbs.' }
    ],
    eveningPool: [
      { activity: 'Golden hour photography from the stone terrace of Shanti Stupa as sunset turns the Zanskar peaks crimson and amber.', location: 'Shanti Stupa Hill', sunsetSpot: 'Stupa upper circumambulatory terrace' },
      { activity: 'Walk through Leh Main Market pedestrian mall, meeting Ladakhi women selling wild herbs, pashmina, and dried apricots.', location: 'Leh Main Bazaar', sunsetSpot: 'Old Town cafe rooftop' },
      { activity: 'Campfire under the clearest stargazing Milky Way sky in Asia at an eco-camp in Nubra Valley or Pangong lake.', location: 'Nubra / Pangong Stargazing Camp', sunsetSpot: 'Sand dunes ridge facing Shyok river' },
      { activity: 'Evening prayer circumambulation at Shey Palace with 12-meter copper-gilt Shakyamuni Buddha.', location: 'Shey Palace & Chortens', sunsetSpot: 'Shey fishpond willow trees' }
    ],
    routes: [
      { from: 'Kushok Bakula Rimpochee Airport (IXL)', to: 'Leh City Hotel', distance: '5 km', duration: '15 mins', mode: 'Prepaid Airport Taxi' },
      { from: 'Leh', to: 'Nubra Valley (via Khardung La)', distance: '125 km', duration: '4.5 hrs', mode: '4x4 SUV / Tourist Taxi' },
      { from: 'Nubra Valley', to: 'Pangong Tso (via Shyok River Route)', distance: '160 km', duration: '5.5 hrs', mode: 'Rugged SUV' }
    ],
    entryFees: [
      { site: 'Ladakh Inner Line Permit (Environmental & Red Cross Fee)', indians: '₹450 / person', foreigners: '₹650 / person' },
      { site: 'Leh Palace (ASI Ticket)', indians: '₹25', foreigners: '₹300' },
      { site: 'Hemis Monastery & Museum', indians: '₹50', foreigners: '₹100' },
      { site: 'Thiksey Gompa', indians: '₹30', foreigners: '₹50' },
      { site: 'Bactrian Camel Safari (15 mins)', indians: '₹350', foreigners: '₹350' }
    ],
    cuisines: ['Ladakhi Thukpa', 'Tingmo Steamed Breads', 'Skyu Pasta Stew', 'Butter Tea (Gur Gur)', 'Chhurpi Yak Cheese', 'Sea Buckthorn Juice'],
    eateries: [
      { name: 'The Tibetan Kitchen, Fort Road Leh', speciality: 'Authentic Shapta, Tingmo & Gyathuk', price: '₹450/person' },
      { name: 'Bon Appetit, Changspa', speciality: 'Local organic produce, Ladakhi wood-fired bread & pasta', price: '₹600/person' },
      { name: 'Gesmo Restaurant, Fort Road', speciality: 'Yak cheese sandwiches, walnut pie & cinnamon rolls', price: '₹300/person' }
    ],
    stays: [
      { name: 'The Grand Dragon Ladakh, Leh', style: '5-Star Trans-Himalayan Luxury with Mountain Views', price: '₹24,000/night' },
      { name: 'Chamba Camp Thiksey', style: 'Ultra-Luxury Custom Glamping beneath Monastery', price: '₹55,000/night' },
      { name: 'Nubra Organic Retreat, Hunder', style: 'Organic Apple Orchard Luxury Tented Camp', price: '₹7,500/night' }
    ],
    hiddenGems: ['Turtuk Balti village near LoC (apricot orchards)', 'Basgo Fortress mud-brick ruins', 'Alchi 11th-century Kashmiri-style murals', 'Uleytokpo apple village'],
    photoSpots: [
      { spot: 'Pangong Tso Shoreline Reflections', bestTime: '06:30 AM - 08:00 AM', tip: 'Use polarizing filter to cut surface glare and accentuate 7 shades of turquoise.' },
      { spot: 'Thiksey Monastery Sunrise', bestTime: '06:00 AM - 07:00 AM', tip: 'Position camera at the base road looking up; resembles Lhasa Potala Palace.' },
      { spot: 'Diskit 106-foot Maitreya Buddha', bestTime: '04:30 PM - 05:45 PM', tip: 'Wide angle capturing the golden face with the dramatic Nubra valley gorge behind.' }
    ],
    shopping: [
      { item: '100% Pure Hand-spun Changthangi Pashmina Shawls', market: 'Ladakh Arts & Media Organization / LEDeG', tip: 'Verify certified GI Ladakh Pashmina hologram.' },
      { item: 'Tibetan turquoise, coral & silver jewelry', market: 'Tibetan Refugee Market, Old Fort Road', tip: 'Test stone authenticity; bargain politely.' },
      { item: 'Organic sun-dried Halman apricots & seabuckthorn berry oil', market: 'Leh Farmers Cooperative', tip: 'Extremely nutrient-dense superfood.' }
    ],
    culturalEtiquette: [
      'Always walk clockwise (pradakshina) around Buddhist stupas, mani stone walls, and gompa sanctums.',
      'Never point your feet towards monks or Buddha idols when seated inside monastery prayer halls.',
      'Rest for at least 36 to 48 hours upon landing at Leh airport before undertaking high mountain passes.'
    ],
    facts: [
      'Ladakh hosts the Hemis National Park, possessing the highest density of wild Snow Leopards (Panthera uncia) in any protected area in the world.',
      'Pangong Tso is an endorheic lake at 4,350m that freezes completely solid in winter despite having saline water.',
      'The Magnetic Hill on the Leh-Kargil highway creates an optical illusion where stationary vehicles appear to roll uphill on neutral gear.'
    ],
    emergency: [
      { agency: 'Leh Police Tourist Wing', phone: '01982-252018 / 112' },
      { agency: 'Sonam Norboo Memorial (SNM) Hospital Leh (Hyperbaric Decompression Chamber)', phone: '01982-252014' },
      { agency: 'Ladakh Tourism Development Authority', phone: '01982-252297' }
    ]
  },

  kerala: {
    name: 'Kerala (Fort Kochi, Munnar & Alleppey)',
    state: 'Kerala',
    tagline: 'God’s Own Country: Emerald Backwaters & Spice Hills',
    bestMonths: 'September to March (Crisp post-monsoon greenery & calm lagoons)',
    dailyThemes: [
      'Colonial Fort Kochi, Chinese Fishing Nets & Kathakali Night',
      'Munnar Mist-Covered Tea Estates & Eravikulam Nilgiri Tahr',
      'Alleppey Houseboat Slow Cruise across Vembanad Lake',
      'Marari Beach Sunset & Authentic Ayurvedic Rejuvenation'
    ],
    morningPool: [
      { activity: 'Watch fishermen lower the monumental cantilevered Chinese Fishing Nets (Cheena Vala) at Fort Kochi beachfront.', location: 'Fort Kochi Beachfront Promenade', tip: 'Best light before 7:00 AM; tip fishermen ₹50 to help heave the timber ropes.' },
      { activity: 'Early morning hike through rolling green carpet tea plantations of Munnar to spot the endangered Nilgiri Tahr.', location: 'Eravikulam National Park', tip: 'Book national park safari slot online in advance; early morning offers highest wildlife sightings.' },
      { activity: 'Sunrise kayak or country canoe glide through narrow palm-fringed village canals of Kuttanad before houseboats wake.', location: 'Kuttanad Backwater Canals', tip: 'Quiet canoe paddles allow you to see kingfishers and village toddy tappers.' },
      { activity: 'Morning walk through spice plantations in Thekkady smelling fresh green cardamom pods, cinnamon bark, and vanilla beans.', location: 'Thekkady Spice Plantations', tip: 'Hire an estate botanist guide to identify rare healing Ayurvedic plants.' }
    ],
    afternoonPool: [
      { activity: 'Explore the 1568 Paradesi Synagogue with Belgian glass chandeliers, Jew Town spice lanes, and Mattancherry Dutch Palace murals.', location: 'Jew Town & Mattancherry', foodTip: 'Savor traditional Kerala Sadya on banana leaf with 24 vegetarian curries, avial, and payasam.' },
      { activity: 'Tour the Tata Tea Museum in Munnar, witnessing century-old orthodox tea rolling machinery and tasting orthodox black teas.', location: 'KDHP Tea Museum Munnar', foodTip: 'Enjoy hot Malabar Parotta with tender pepper chicken curry or vegetable stew.' },
      { activity: 'Board a traditional luxury Kettuvallam thatched houseboat in Alleppey, gliding past emerald paddy fields below sea level.', location: 'Vembanad Lake Waters', foodTip: 'Relish freshly caught Pearl Spot fish (Karimeen Pollichathu) marinated in red chillies and baked in banana leaves.' },
      { activity: 'Visit the world’s richest temple, Sree Padmanabhaswamy Temple in Thiruvananthapuram, admiring its 16th-century gopuram.', location: 'Sree Padmanabhaswamy Temple', foodTip: 'Sip fresh sweet tender coconut water and taste crisp hot banana chips fried in pure coconut oil.' }
    ],
    eveningPool: [
      { activity: 'Witness the mesmerizing Kathakali classical dance drama with elaborate facial makeup demonstration and drum rhythms.', location: 'Kerala Kathakali Centre, Fort Kochi', sunsetSpot: 'Fort Kochi heritage pier' },
      { activity: 'Watch the sunset ignite the mist over tea plantation peaks from Lockhart Gap viewpoint in Munnar.', location: 'Lockhart Gap Viewpoint', sunsetSpot: 'Anamudi Peak ridge' },
      { activity: 'Anchor the houseboat mid-lake as twilight reflects orange skies across Vembanad Lake, listening to backwater crickets.', location: 'Alleppey Backwaters Mid-Lake', sunsetSpot: 'Houseboat upper sun-deck' },
      { activity: 'Sunset stroll on Marari white sand beach under arching coconut palms, listening to Arabian Sea waves.', location: 'Marari Beach', sunsetSpot: 'Mararikulam fishing cove' }
    ],
    routes: [
      { from: 'Cochin International Airport (COK)', to: 'Fort Kochi', distance: '38 km', duration: '1 hr 15 mins', mode: 'Prepaid Taxi' },
      { from: 'Fort Kochi', to: 'Munnar Hill Station', distance: '130 km', duration: '3.5 hrs', mode: 'Scenic Mountain Ghat Highway' },
      { from: 'Munnar', to: 'Alleppey (Alappuzha)', distance: '160 km', duration: '4 hrs', mode: 'Private Cab' }
    ],
    entryFees: [
      { site: 'Mattancherry Palace (Dutch Palace)', indians: '₹5', foreigners: '₹5' },
      { site: 'Paradesi Synagogue Jew Town', indians: '₹10', foreigners: '₹10' },
      { site: 'Eravikulam National Park Safari', indians: '₹200', foreigners: '₹500' },
      { site: 'Kathakali Centre Evening Show + Makeup', indians: '₹400', foreigners: '₹400' }
    ],
    cuisines: ['Kerala Banana Leaf Sadya', 'Appam with Coconut Stew', 'Karimeen Pollichathu', 'Malabar Parotta with Pepper Fry', 'Ada Pradhaman Payasam'],
    eateries: [
      { name: 'Kashi Art Cafe, Fort Kochi', speciality: 'Artisan roast coffees, chocolate cake & French toast', price: '₹400/person' },
      { name: 'Paragon Restaurant, Kozhikode/Kochi', speciality: 'Legendary Malabar Biryani & Seafood', price: '₹450/person' },
      { name: 'Dhe Puttu, Edappally', speciality: 'Over 30 sweet and savory varieties of traditional steamed puttu', price: '₹300/person' }
    ],
    stays: [
      { name: 'Brunton Boatyard - CGH Earth, Fort Kochi', style: 'Colonial Maritime Heritage Luxury on Harbor', price: '₹28,000/night' },
      { name: 'Spice Village, Thekkady', style: 'Tribal Eco-Luxury Thatched Cottages', price: '₹18,000/night' },
      { name: 'Spice Coast Cruises Alleppey Houseboat', style: 'Private Eco-Solar Solarized Kettuvallam', price: '₹22,000/night' }
    ],
    hiddenGems: ['Muziris ancient port heritage excavation', 'Vagamon pine forests & rolling meadows', 'Silent Valley National Park virgin rainforest', 'Aranmula metal mirror artisan workshops'],
    photoSpots: [
      { spot: 'Chinese Fishing Nets at Sunset', bestTime: '05:45 PM - 06:30 PM', tip: 'Silhouette the intricate timber netting arms against the crimson Arabian Sea sun.' },
      { spot: 'Kolukkumalai Tea Sunrise', bestTime: '05:30 AM - 06:30 AM', tip: 'World’s highest organic tea estate; sea of clouds blanketing Tamil Nadu plains below.' },
      { spot: 'Alleppey Houseboat Golden Hour', bestTime: '05:00 PM - 06:00 PM', tip: 'Frame passing wooden country canoes against towering coconut palm reflections.' }
    ],
    shopping: [
      { item: 'Single-estate Wayanad black pepper & green cardamom', market: 'Jew Town Spice Markets, Kochi', tip: 'Buy whole unadulterated spice pods sealed in vacuum foil.' },
      { item: 'Kasavu Handloom Gold-Zari Mundu & Sarees', market: 'Balaramapuram Weavers Guild', tip: 'Look for certified Handloom Mark.' },
      { item: 'Aranmula Kannadi Hand-Cast Metal Mirror', market: 'Aranmula Heritage Trust', tip: '100% front reflection; verify master craftsman certificate.' }
    ],
    culturalEtiquette: [
      'Men must remove shirts and wear a traditional Mundu (dhoti) to enter traditional Kerala temple sanctums.',
      'Always use your right hand when eating traditional Kerala Sadya served on banana leaf.',
      'Do not throw plastic water bottles or trash into the backwater canals.'
    ],
    facts: [
      'Kerala is home to Kalaripayattu, widely regarded by martial historians as the oldest existing martial art in the world, dating back over 3,000 years.',
      'The backwaters of Kerala comprise an intricate network of more than 900 kilometers of brackish lagoons, rivers, and natural lakes.',
      'Kuttanad in Kerala is one of the only places in the world where farming is conducted 4 to 10 feet below sea level.'
    ],
    emergency: [
      { agency: 'Kerala Tourism Police Helpline', phone: '0471-2321132 / 112' },
      { agency: 'State Tourist Info Toll-Free', phone: '1-800-425-4747' },
      { agency: 'Medical Emergency Services Kerala', phone: '108' }
    ]
  },

  gujarat: {
    name: 'Gujarat (Rann of Kutch, Modhera & Rani ki Vav)',
    state: 'Gujarat',
    tagline: 'The Cradle of Harappan Civilizations & Sacred Stepwells',
    bestMonths: 'October to March (Rann Utsav full moon nights & pleasant desert air)',
    dailyThemes: [
      'Ahmedabad UNESCO Heritage City, Stepwells & Sabarmati Ashram',
      'Rani ki Vav Stepwell Subterranean Masterpiece & Modhera Sun Temple',
      'White Rann of Kutch: Endless Salt Desert & Rogan Artisan Villages',
      'Gir Asiatic Lion Wilderness & Ancient Somnath Shore Temple'
    ],
    morningPool: [
      { activity: 'Heritage walking tour through the 600-year-old walled city of Ahmedabad, exploring secret pols, bird feeders (chabutras), and havelis.', location: 'Old Ahmedabad Heritage Quarter', tip: 'Start at 07:30 AM from Kalupur Swaminarayan Temple with official AMC guide.' },
      { activity: 'Descend seven subterranean tiers into Rani ki Vav in Patan, marveling at over 800 intricately sculpted mythological Vishnu avatars.', location: 'Rani ki Vav Stepwell, Patan', tip: 'Morning light reaches down to the fourth tier best between 8:30 AM and 10:30 AM.' },
      { activity: 'Sunrise reflection photography at the geometric Sabha Mandap stepped water tank of Modhera Sun Temple.', location: 'Modhera Sun Temple', tip: 'Built in 1026 CE such that equinox rays illuminated the central sun idol.' },
      { activity: 'Early morning open 4x4 Gypsy safari in Sasan Gir National Park to track the majestic Asiatic Lion in its only wild home.', location: 'Gir National Park Buffer Zone', tip: 'Book Safari permits months ahead on official Gujarat Forest Department portal.' }
    ],
    afternoonPool: [
      { activity: 'Walk in the footsteps of Mahatma Gandhi at Sabarmati Ashram (Hriday Kunj), inspecting his original spinning wheel (Charkha).', location: 'Sabarmati Gandhi Ashram', foodTip: 'Savor an unlimited Gujarati Thali with sweet khatti-meethi dal, rotlis, and sprouted moong.' },
      { activity: 'Visit the master Salvi family workshop in Patan to see genuine double-ikat Patola silk weaving taking up to 6 months per saree.', location: 'Patan Patola Heritage Museum', foodTip: 'Relish warm Handvo (savory baked lentil cake) and spongy nylon Khaman Dhokla.' },
      { activity: 'Meet master artisans in Nirona village practicing the rare 400-year-old art of Rogan painting using boiled castor oil paste.', location: 'Nirona Craft Village, Kutch', foodTip: 'Taste Kutchi Dabeli with spicy roasted peanuts and sweet tamarind chutney.' },
      { activity: 'Explore the 4,500-year-old Harappan metropolis of Dholavira, inspecting advanced water reservoirs and stone inscriptions.', location: 'Dholavira UNESCO Archaeological Site', foodTip: 'Drink cold buttermilk (Chaas) seasoned with roasted cumin and fresh coriander.' }
    ],
    eveningPool: [
      { activity: 'Walk barefoot across the shimmering endless white salt crust of the Great Rann of Kutch under sunset and rising full moon.', location: 'White Desert of Kutch (Dhordo)', sunsetSpot: 'Rann Observation Watchtower' },
      { activity: 'Witness the laser sound & light show at Modhera Sun Temple illuminating ancient Solanki stone carvings.', location: 'Modhera Temple Courtyard', sunsetSpot: 'Sun Temple stepped tank colonnade' },
      { activity: 'Attend evening Aarti at the sacred Somnath Temple on the shore of the Arabian Sea as waves crash against temple bastions.', location: 'Somnath Shore Temple', sunsetSpot: 'Somnath Sagar Darshan promenade' },
      { activity: 'Stroll through Manek Chowk in Ahmedabad as the historic jewelry market transforms into a bustling street food haven after 9 PM.', location: 'Manek Chowk Night Market', sunsetSpot: 'Sabarmati Riverfront promenade' }
    ],
    routes: [
      { from: 'Ahmedabad (AMD)', to: 'Modhera & Patan', distance: '125 km', duration: '2.5 hrs', mode: 'Expressway Highway Cab' },
      { from: 'Ahmedabad', to: 'Bhuj (Gateway to Kutch)', distance: '330 km', duration: '6 hrs', mode: 'Vande Bharat Train / Highway Taxi' },
      { from: 'Bhuj', to: 'Dhordo (White Rann)', distance: '85 km', duration: '1.5 hrs', mode: 'Paved Desert Road Taxi' }
    ],
    entryFees: [
      { site: 'Rani ki Vav Stepwell (ASI Ticket)', indians: '₹40', foreigners: '₹600' },
      { site: 'Modhera Sun Temple (ASI Ticket)', indians: '₹40', foreigners: '₹600' },
      { site: 'White Rann of Kutch Tourism Permit', indians: '₹100 / person', foreigners: '₹100 / person' },
      { site: 'Dholavira Archaeological Site & Museum', indians: 'Free / ₹25', foreigners: '₹300' }
    ],
    cuisines: ['Grand Gujarati Thali', 'Khaman Dhokla & Khandvi', 'Kutchi Dabeli', 'Undhiyu with Puri', 'Jalebi & Fafda', 'Mohanthal Sweet'],
    eateries: [
      { name: 'Agashiye - The House of MG, Ahmedabad', speciality: 'Heritage terrace dining with royal Kansa thalis', price: '₹950/person' },
      { name: 'Swati Snacks, Ellisbridge', speciality: 'Panki steamed in banana leaf, Handvo & Fada Khichdi', price: '₹350/person' },
      { name: 'Toran Dining Hall, Bhuj', speciality: 'Authentic rustic Kutchi Thali with Bajra Roti and jaggery', price: '₹220/person' }
    ],
    stays: [
      { name: 'The House of MG, Ahmedabad', style: '1920s Restored Textile Merchant Heritage Mansion', price: '₹12,000/night' },
      { name: 'The Gateway Hotel Gir Forest', style: 'Wildlife Sanctuary Gateway Resort', price: '₹14,500/night' },
      { name: 'White Rann Resort / Tent City Dhordo', style: 'Luxury Desert Swiss Cottage with Folk Culture', price: '₹16,000/night' }
    ],
    hiddenGems: ['Lakhpat abandoned fortified desert ghost town', 'Pithalkhora stepwells', 'Polo Forest ancient temples', 'Mandvi 400-year-old wooden shipbuilding yard'],
    photoSpots: [
      { spot: 'White Rann at Twilight Full Moon', bestTime: '06:00 PM - 07:30 PM', tip: 'Wide angle showing horizon where white salt plains blur into lilac night sky.' },
      { spot: 'Rani ki Vav Vishnu Sculptures', bestTime: '09:00 AM - 10:30 AM', tip: 'Use prime 50mm or 85mm lens to capture deep relief depth of Sheshashayi Vishnu.' },
      { spot: 'Modhera Stepped Tank Geometry', bestTime: '07:00 AM - 08:00 AM', tip: 'Symmetrical composition framing the 108 miniature shrines reflecting in calm water.' }
    ],
    shopping: [
      { item: 'Authentic Patan Double-Ikat Patola Silk Scarves', market: 'Patan Master Weavers Workshop', tip: 'Reversible identical colors on both sides; lifelong vegetable dyes.' },
      { item: 'Kutch mirror-work embroidery & Ajrakh block prints', market: 'Ajrakhpur & Bhujodi Craft Villages', tip: 'Meet National Award-winning weavers directly.' },
      { item: 'Lacquered bells and copper bells of Nirona', market: 'Nirona Luhar Guilds', tip: 'Hand-tuned melodic bells forged from scrap iron.' }
    ],
    culturalEtiquette: [
      'Gujarat is a dry state; possession and consumption of alcohol is prohibited without official tourist liquor permits.',
      'Gujarati cuisine is almost universally vegetarian; respect temple towns where garlic and onions are omitted.',
      'Always obtain the White Rann entry permit at Bhirandiyara police checkpoint before proceeding to Dhordo.'
    ],
    facts: [
      'Rani ki Vav in Patan was built in 1063 CE not by a king, but by Queen Udayamati as a loving memorial for her deceased husband King Bhima I.',
      'Gir National Park in Gujarat is the only place outside the African continent where lions roam wild in nature.',
      'Dholavira contains the world’s oldest known sophisticated rainwater harvesting and storm-drain management system, engineered 4,500 years ago.'
    ],
    emergency: [
      { agency: 'Gujarat Police Emergency', phone: '100 / 112' },
      { agency: 'Gujarat Tourism Toll-Free Helpline', phone: '1800-200-5080' },
      { agency: 'Ahmedabad Civil Hospital', phone: '079-22683721' }
    ]
  },

  tamilnadu: {
    name: 'Tamil Nadu (Thanjavur, Madurai & Mahabalipuram)',
    state: 'Tamil Nadu',
    tagline: 'The Land of Great Living Chola Temples & Sangam Splendor',
    bestMonths: 'November to March (Cool winter season ideal for monumental granite temples)',
    dailyThemes: [
      'Mahabalipuram UNESCO Shore Temples, Pancha Rathas & Coastal Sculptures',
      'Thanjavur Brihadisvara 1000-Year-Old Chola Granite Colossus',
      'Madurai Meenakshi Amman Temple: Towering Gopurams & Night Procession',
      'Chettinad Heritage Mansions, Athangudi Tiles & Spice Palaces'
    ],
    morningPool: [
      { activity: 'Sunrise walk past the 7th-century Shore Temple at Mahabalipuram with sea spray glistening on granite monolithic carvings.', location: 'Shore Temple, Mahabalipuram', tip: 'Arrive at 06:00 AM; waves crash right beneath the temple sanctuary.' },
      { activity: 'Marvel at the 66-meter monolithic vimana tower of the Brihadisvara Temple in Thanjavur, built by Rajaraja Chola I in 1010 CE.', location: 'Brihadisvara Temple (Big Temple)', tip: 'Enter early at 07:00 AM to touch the cool granite stones before the tropical sun warms the courtyard.' },
      { activity: 'Early morning darshan at Madurai Meenakshi Amman Temple, admiring the Golden Lotus Tank (Porthamarai Kulam).', location: 'Meenakshi Amman Temple Sanctum', tip: 'No smartphones or cameras permitted inside; leave at cloakroom counters.' },
      { activity: 'Tour the sprawling 1,000-room heritage mansions of Chettinad in Kanadukathan, admiring Burmese teak columns and Italian marble floors.', location: 'Chettinad Heritage Quarter', tip: 'Visit Athangudi village to see master craftsmen make handmade floral cement tiles.' }
    ],
    afternoonPool: [
      { activity: 'Study the colossal bas-relief carving of Arjuna’s Penance (Descent of the Ganga) and test equilibrium at Krishna’s Butter Ball.', location: 'Mahabalipuram Rock Reliefs', foodTip: 'Enjoy fresh South Indian banana leaf meals with spicy rasam, kootu, and appalam.' },
      { activity: 'Visit the Thanjavur Royal Palace & Art Gallery, housing world-famous 10th-century Chola bronze statues of Nataraja (Dancing Shiva).', location: 'Thanjavur Palace Art Gallery', foodTip: 'Savor traditional Thanjavur Kadamba Sambar with ghee pongal and medu vada.' },
      { activity: 'Explore the 1,000-Pillar Hall of Meenakshi Temple, observing musical pillars that resonate when struck.', location: 'Hall of Thousand Pillars', foodTip: 'Cool down with Madurai’s signature chilled Jigarthanda (almond gum, sarsaparilla syrup, and basundi).' },
      { activity: 'Dine on authentic 7-course Chettinad feast at The Bangala, prepared with hand-ground spices and stone-ground curries.', location: 'Chettinad Mansion Dining', foodTip: 'Taste Chettinad Pepper Chicken, Kozhukattai, and fiery mutton Chukka.' }
    ],
    eveningPool: [
      { activity: 'Sunset stroll along the sandy fishing beach of Covelong or Mahabalipuram, watching traditional Catamaran boats return.', location: 'Mahabalipuram Beachfront', sunsetSpot: 'Lighthouse viewing platform' },
      { activity: 'Witness the evening illumination of Brihadisvara Temple as golden spotlights reveal every carved celestial dancer on the tower.', location: 'Brihadisvara Courtyard', sunsetSpot: 'Nandi Mandapa colonnade' },
      { activity: 'Attend the elaborate 09:00 PM Palliarai Pooja ceremony at Meenakshi Temple, where Lord Sundareswarar is carried to Goddess Meenakshi’s chamber in silver palanquin.', location: 'Meenakshi Temple Inner Corridor', sunsetSpot: 'Golden Lotus Tank steps' },
      { activity: 'Sunset cycling through quiet heritage villages of Chettinad past massive red-roofed aristocratic palaces.', location: 'Kanadukathan Village', sunsetSpot: 'Village lotus pond pavilion' }
    ],
    routes: [
      { from: 'Chennai International Airport (MAA)', to: 'Mahabalipuram', distance: '55 km', duration: '1 hr 15 mins', mode: 'Scenic East Coast Road (ECR)' },
      { from: 'Chennai', to: 'Thanjavur', distance: '340 km', duration: '6 hrs', mode: 'Cholan Express Train / Highway Taxi' },
      { from: 'Thanjavur', to: 'Madurai', distance: '190 km', duration: '3.5 hrs', mode: 'Expressway Highway Cab' }
    ],
    entryFees: [
      { site: 'Mahabalipuram Monuments (Shore Temple & Rathas)', indians: '₹40', foreigners: '₹600' },
      { site: 'Brihadisvara Temple Thanjavur (Active Temple)', indians: 'Free', foreigners: 'Free' },
      { site: 'Meenakshi Amman Temple 1,000 Pillar Hall', indians: '₹50', foreigners: '₹50' },
      { site: 'Thanjavur Maratha Palace & Bronze Gallery', indians: '₹30', foreigners: '₹150' }
    ],
    cuisines: ['Chettinad Pepper Fry', 'Thanjavur Kadamba Sambar', 'Crispy Ghee Roast Dosai', 'Madurai Jigarthanda', 'Filter Degree Coffee', 'Kumbakonam Degree Coffee'],
    eateries: [
      { name: 'The Bangala, Karaikudi', speciality: 'World-renowned authentic Chettinad culinary feasts', price: '₹950/person' },
      { name: 'Murugan Idli Shop, Madurai', speciality: 'Melt-in-mouth soft idlis with 4 distinct coconut chutneys', price: '₹180/person' },
      { name: 'Sree Krishna Sweets, Chennai/Thanjavur', speciality: 'Pure desi ghee Mysurpa that melts instantly on tongue', price: '₹200/person' }
    ],
    stays: [
      { name: 'Heritage Madurai, Madurai', style: 'Geoffrey Bawa Architecture Luxury Plunge Pool Resort', price: '₹16,000/night' },
      { name: 'Svatma - Relais & Châteaux, Thanjavur', style: 'Restored Chola Architecture Heritage Luxury', price: '₹22,000/night' },
      { name: 'Visalam - CGH Earth, Chettinad', style: 'Century-Old Chettiar Aristocratic Palace', price: '₹14,000/night' }
    ],
    hiddenGems: ['Gangaikonda Cholapuram grand capital temple', 'Darasuram Airavatesvara Temple exquisite miniature reliefs', 'Tranquebar (Tharangambadi) 1620 Danish coastal fort', 'Pichavaram mangrove water forest'],
    photoSpots: [
      { spot: 'Shore Temple with Crashing Waves', bestTime: '06:15 AM - 07:15 AM', tip: 'Use shutter speed 1/15s to capture motion blur of ocean spray against ancient stone.' },
      { spot: 'Brihadisvara Vimana Tower at Sunset', bestTime: '05:30 PM - 06:15 PM', tip: 'Shoot from the grassy lawn corner to show the 66-meter tower dominating the horizon.' },
      { spot: 'Madurai Meenakshi South Gopuram Facade', bestTime: '04:00 PM - 05:30 PM', tip: 'Capture the thousands of polychrome painted deities rising 52 meters into the sky.' }
    ],
    shopping: [
      { item: 'Authentic GI Thanjavur Gold-Foil Paintings', market: 'Thanjavur Royal Palace Artisan Studios', tip: 'Look for 22-karat gold leaf and Jaipur gem embellishments.' },
      { item: 'Handmade Athangudi patterned floral cement tiles', market: 'Athangudi Village Workshops', tip: 'Individually cast using natural mineral pigments and glass plates.' },
      { item: 'Kanchipuram pure mulberry silk sarees with heavy zari', market: 'Kanchipuram Weavers Cooperative Society', tip: 'Verify certified Silk Mark hologram.' }
    ],
    culturalEtiquette: [
      'Traditional dress code is strictly enforced at Meenakshi Temple: Men must wear dhotis/pyjamas and women sarees/churidars. Jeans/shorts are prohibited.',
      'Mobile phones and cameras are banned inside Meenakshi Temple premises; use the paid cloakrooms.',
      'Always circumambulate temple sanctums in a clockwise direction.'
    ],
    facts: [
      'The Kumbam dome atop Thanjavur Brihadisvara temple weighs approximately 80 tonnes and was carved from a single block of granite hauled up an inclined ramp over 6 km long.',
      'Tamil is recognized by global linguists as one of the oldest surviving classical languages in human history, with continuous literature dating back over 2,500 years.',
      'Madurai is often called "Thoonga Nagaram" (The City that Never Sleeps) because its night markets and food stalls stay open around the clock.'
    ],
    emergency: [
      { agency: 'Tamil Nadu Police Control Room', phone: '100 / 112' },
      { agency: 'Tamil Nadu Tourist Information Center', phone: '044-25383333' },
      { agency: 'Government Rajaji Hospital Madurai', phone: '0452-2532535' }
    ]
  },

  khajuraho: {
    name: 'Khajuraho & Panna (Madhya Pradesh)',
    state: 'Madhya Pradesh',
    tagline: 'The Poetry in Stone: Chandela Nagara Masterpieces',
    bestMonths: 'October to March (Pleasant sunny days for temple bas-relief photography)',
    dailyThemes: [
      'Western Group: Kandariya Mahadeva & Lakshmana Temple Spires',
      'Eastern & Southern Jain Group & Artisan Sculpture Quarter',
      'Panna National Park Tiger Safari & Ken River Gorge',
      'Raneh Falls Canyons & Ajaygarh Fort Mountain Citadel'
    ],
    morningPool: [
      { activity: 'Sunrise walk around the towering Kandariya Mahadeva Temple, marveling at over 800 celestial figures (apsaras) carved in sandstone.', location: 'Western Group of Temples', tip: 'Early morning light between 06:30 AM and 08:30 AM brings warm amber glow to temple spires.' },
      { activity: 'Morning visit to the tranquil Eastern Group, exploring the 10th-century Parsvanatha Jain temple with exquisite floral carvings.', location: 'Eastern Temple Group', tip: 'Much quieter than Western group; excellent for meditative architecture appreciation.' },
      { activity: 'Early morning open 4x4 Gypsy safari into Panna National Park (30 km) tracking Royal Bengal tigers and leopards.', location: 'Panna National Park Tiger Reserve', tip: 'Book the Madla gate morning safari for best chances of big cat sightings.' },
      { activity: 'Morning hike up to Ajaygarh Fort (35 km), an isolated Chandela hill fortress perched atop a flat-topped Vindhyan plateau.', location: 'Ajaygarh Hilltop Fort', tip: 'Wear sturdy walking boots; climb includes 500 ancient stone steps through dense forest.' }
    ],
    afternoonPool: [
      { activity: 'Detailed guided architectural study of the Lakshmana Temple plinth, depicting processions of war elephants and musicians.', location: 'Lakshmana Temple Plinth', foodTip: 'Savor traditional Bundelkhandi Dal Bafla with copious desi ghee and spicy garlic chutney.' },
      { activity: 'Visit the Archaeological Museum Khajuraho to see the reconstructed 10th-century Chandela stone sculptures and inscriptions.', location: 'ASI Khajuraho Museum', foodTip: 'Try Bhutte ka Kees (grated sweet corn simmered with milk, mustard seeds, and coconut).' },
      { activity: 'Boat ride through the dramatic Ken River Canyon, observing nesting long-billed vultures on sheer basalt cliffs.', location: 'Ken River Canyon & Gharial Sanctuary', foodTip: 'Taste sweet Mawa Bati and Malpua from local heritage sweetshops.' },
      { activity: 'Marvel at the Raneh Falls volcanic canyon, featuring a 30-meter deep gorge carved from multi-colored crystalline granite.', location: 'Raneh Falls Natural Canyon', foodTip: 'Relish warm Poha with Sev and spicy jalebis for afternoon high tea.' }
    ],
    eveningPool: [
      { activity: 'Experience the world-renowned Khajuraho Sound & Light Show on the lawns of the Western Group with narration by Amitabh Bachchan.', location: 'Western Group Lawns', sunsetSpot: 'Shivsagar Lake bank' },
      { activity: 'Sunset viewpoint walk near Dulhadeo Temple on the banks of the Khodar stream.', location: 'Dulhadeo Temple', sunsetSpot: 'Khodar river sandstone ledge' },
      { activity: 'Attend classical Indian dance performances at the Khajuraho Dance Festival amphitheater or local cultural center.', location: 'Kandariya Shilpgram', sunsetSpot: 'Matangeshwar Temple tower view' },
      { activity: 'Rooftop dinner overlooking the illuminated spires of the Western Group, sipping herbal infusions under starry skies.', location: 'Raja Cafe Terrace', sunsetSpot: 'Raja Cafe open rooftop' }
    ],
    routes: [
      { from: 'Khajuraho Airport (HJR) / Station', to: 'Khajuraho Village Center', distance: '4 km', duration: '10 mins', mode: 'Auto-Rickshaw / Hotel Car' },
      { from: 'Khajuraho', to: 'Panna National Park (Madla Gate)', distance: '32 km', duration: '45 mins', mode: 'Private Taxi' },
      { from: 'Khajuraho', to: 'Raneh Falls Canyon', distance: '20 km', duration: '30 mins', mode: 'Scenic Country Road Cab' }
    ],
    entryFees: [
      { site: 'Western Group of Temples (ASI Ticket)', indians: '₹40', foreigners: '₹600' },
      { site: 'Sound & Light Show (English / Hindi)', indians: '₹250', foreigners: '₹250' },
      { site: 'Panna Tiger Safari Vehicle + Permit', indians: '₹3,500 / gypsy', foreigners: '₹5,500 / gypsy' },
      { site: 'Raneh Falls Nature Reserve', indians: '₹100', foreigners: '₹100' }
    ],
    cuisines: ['Bundelkhandi Dal Bafla', 'Bhutte ka Kees', 'Mawa Bati', 'Poha Jalebi', 'Kadha Chai with Spices'],
    eateries: [
      { name: 'Raja Cafe, Opposite Western Group', speciality: 'Wood-fired pizzas, Indian curries & terrace monument view', price: '₹450/person' },
      { name: 'Agrasen Bhojnalaya, Main Bazaar', speciality: 'Authentic pure vegetarian Bundelkhandi Thalis', price: '₹150/person' },
      { name: 'Pinch of Salt, Sevagram Road', speciality: 'North Indian gravies, paneer specialities & tandoor breads', price: '₹350/person' }
    ],
    stays: [
      { name: 'The Lalit Temple View, Khajuraho', style: '5-Star Luxury with Direct Monument Views', price: '₹18,000/night' },
      { name: 'Sarai at Toria, near Panna', style: 'Eco-Luxury Mud-Cottage Retreat by Ken River', price: '₹22,000/night' },
      { name: 'Hotel Chandela Khajuraho', style: 'Expansive Garden Estate Heritage Hotel', price: '₹7,500/night' }
    ],
    hiddenGems: ['Raneh Falls 5-color granite volcanic canyon', 'Ajaygarh hilltop fort ruins in jungle', 'Ken Gharial wildlife sanctuary', 'Dhubela Chhatrasal Palace Museum'],
    photoSpots: [
      { spot: 'Kandariya Mahadeva Spire in Morning Dawn', bestTime: '06:45 AM - 07:45 AM', tip: 'Use telephoto lens to isolate intricate apsaras and vyalas carved on high shikharas.' },
      { spot: 'Raneh Falls Crystalline Granite Chasm', bestTime: '03:30 PM - 05:00 PM', tip: 'Capture the turquoise Ken river contrasting with pink, green, and grey volcanic rocks.' },
      { spot: 'Western Group Lawns at Sunset', bestTime: '05:30 PM - 06:15 PM', tip: 'Low golden rays silhouette the stepped plinths and lion statues.' }
    ],
    shopping: [
      { item: 'Hand-carved miniature sandstone sculptures', market: 'Crafts Bazaar Shilpgram', tip: 'Buy from state-certified master artisans.' },
      { item: 'Chanderi and Maheshwari handloom silk-cotton sarees', market: 'MP Government Mrignayani Emporium', tip: 'Famous for shimmering zari borders and sheer texture.' },
      { item: 'Dokra bell-metal tribal artifacts', market: 'Adivart Tribal Museum Shop', tip: 'Cast using ancient lost-wax metallurgy.' }
    ],
    culturalEtiquette: [
      'Matangeshwar Temple is an active living temple; footwear must be left outside.',
      'The sculptures depict profound human emotion, dharma, and kama; appreciate them with aesthetic and historical reverence.',
      'Do not touch or rub the porous sandstone carvings as skin oils degrade the fragile millennium-old details.'
    ],
    facts: [
      'Of the original 85 monumental Chandela temples built between 950 and 1050 CE, only 22 have survived the passage of centuries.',
      'Contrary to popular myth, only about 10% of the sculptures at Khajuraho are erotic; the remaining 90% depict everyday medieval life, dance, war, music, and divine harmony.',
      'The temples were buried beneath dense central Indian jungle for centuries until rediscovered by British surveyor T.S. Burt in 1838.'
    ],
    emergency: [
      { agency: 'Khajuraho Police Station', phone: '07686-274032 / 112' },
      { agency: 'MP Tourism Tourist Helpline', phone: '1800-233-7777' },
      { agency: 'Community Health Centre Khajuraho', phone: '07686-274044' }
    ]
  },

  amritsar: {
    name: 'Amritsar (Punjab)',
    state: 'Punjab',
    tagline: 'The Sacred Golden Citadel & Indomitable Spirit of Punjab',
    bestMonths: 'October to March (Cool winter season ideal for walking around the sacred Sarovar)',
    dailyThemes: [
      'Harmandir Sahib (Golden Temple) Dawn & Guru ka Langar Community Feast',
      'Jallianwala Bagh Historic Memorial & Partition Museum',
      'Wagah Border Beating Retreat Patriotic Ceremony',
      'Old City Culinary Heritage Trail & Katra Jaimal Singh Handlooms'
    ],
    morningPool: [
      { activity: 'Experience the divine Palki Sahib morning procession carrying the Guru Granth Sahib into the golden sanctum amidst sacred kirtan.', location: 'Harmandir Sahib (Golden Temple)', tip: 'Arrive by 04:30 AM; cover head with clean rumal scarf and wash feet at the water trough.' },
      { activity: 'Silent circumambulation around the sacred nectar pool (Amrit Sarovar) admiring 24-karat gold-plated dome reflections.', location: 'Golden Temple Parikrama', tip: 'Sunrise light between 06:00 AM and 07:15 AM illuminates the gold leaf brilliantly.' },
      { activity: 'Volunteer (Seva) at Guru ka Langar, helping roll rotis or wash dishes at the world’s largest free community kitchen serving 100,000 daily.', location: 'Langar Hall Complex', tip: 'Anyone of any faith can participate; a deeply humbling spiritual experience.' },
      { activity: 'Morning walk through the Heritage Street pedestrian walkway, admiring Rajput and Mughal-style facades leading to the shrine.', location: 'Amritsar Heritage Street', tip: 'Enjoy early morning piping hot Amritsari Kulcha with spicy chole.' }
    ],
    afternoonPool: [
      { activity: 'Pay solemn homage at Jallianwala Bagh, seeing the preserved bullet marks on brick walls and the historic Martyrs’ Well.', location: 'Jallianwala Bagh Memorial', foodTip: 'Savor crisp, multi-layered tandoori Amritsari Kulchas drenched in butter with tamarind chutney.' },
      { activity: 'Explore the poignant Partition Museum at the Town Hall, documenting the tragic 1947 division of Punjab through oral histories.', location: 'The Partition Museum, Town Hall', foodTip: 'Drink a tall glass of thick, creamy Amritsari Lassi topped with a dollop of malai peda.' },
      { activity: 'Visit the historic Gobindgarh Fort, exploring the Toshakhana treasury where the Koh-i-Noor diamond was once stored.', location: 'Gobindgarh Fort Complex', foodTip: 'Sample slow-simmered Maa ki Dal and crisp Laccha Paratha at Kesar Da Dhaba.' },
      { activity: 'Excursion to the Durgiana Temple (Lakshmi Narayan Temple), built inside a sacred pool with silver doors.', location: 'Durgiana Temple', foodTip: 'Relish winter Makki di Roti with spicy Sarson da Saag and fresh white butter.' }
    ],
    eveningPool: [
      { activity: 'Drive to the Attari-Wagah Border (30 km) to witness the world-famous electrifying Beating Retreat border ceremony.', location: 'Wagah Border Amphitheater', sunsetSpot: 'Wagah Border stadium stands' },
      { activity: 'Witness the Sukhasan ceremony at Harmandir Sahib as the holy book is reverently carried back to the Akal Takht at night.', location: 'Akal Takht Courtyard', sunsetSpot: 'Golden Temple Causeway' },
      { activity: 'Culinary night walk through Katra Ahluwalia, tasting traditional Gulab Jamuns, Jalebis fried in desi ghee, and mutton tikka.', location: 'Lawrence Road Food Street', sunsetSpot: 'Gobindgarh Fort illuminated battlements' },
      { activity: 'Evening boat ride or stroll around Ram Bagh gardens, summer palace grounds of Maharaja Ranjit Singh (Sher-e-Punjab).', location: 'Ram Bagh Palace Grounds', sunsetSpot: 'Ram Bagh heritage pavilion' }
    ],
    routes: [
      { from: 'Sri Guru Ram Dass Jee International Airport (ATQ)', to: 'Golden Temple Heritage Zone', distance: '12 km', duration: '25 mins', mode: 'Prepaid Taxi' },
      { from: 'Golden Temple', to: 'Wagah Border', distance: '32 km', duration: '50 mins', mode: 'Private Tourist Cab' },
      { from: 'Golden Temple', to: 'Gobindgarh Fort', distance: '3 km', duration: '12 mins', mode: 'Auto-Rickshaw / E-Rickshaw' }
    ],
    entryFees: [
      { site: 'Harmandir Sahib (Golden Temple)', indians: 'Free', foreigners: 'Free' },
      { site: 'Jallianwala Bagh Memorial', indians: 'Free', foreigners: 'Free' },
      { site: 'Partition Museum Town Hall', indians: '₹10', foreigners: '₹250' },
      { site: 'Wagah Border Ceremony Seating', indians: 'Free (Arrive by 03:30 PM)', foreigners: 'Free (Separate VIP foreign counter)' }
    ],
    cuisines: ['Amritsari Kulcha with Chole', 'Makki di Roti & Sarson da Saag', 'Kesar Da Dhaba Dal Makhani', 'Creamy Malai Lassi', 'Pinni & Jalebi'],
    eateries: [
      { name: 'Kesar Da Dhaba, Chowk Passian', speciality: 'Legendary 12-hour slow simmered Dal Makhani since 1916', price: '₹250/person' },
      { name: 'Kulcha Land, Ranjit Avenue', speciality: 'Crispy tandoori potato and paneer kulchas with white butter', price: '₹140/person' },
      { name: 'Ahuja Milk Centre, Near Hindu College', speciality: 'Famous thick kesar lassi with secret peda blend', price: '₹80/person' }
    ],
    stays: [
      { name: 'Taj Swarna, Amritsar', style: '5-Star Contemporary Luxury Estate', price: '₹14,000/night' },
      { name: 'Ranjit’s SVAASA, Mall Road', style: '200-Year-Old Eco-Luxury Ayurvedic Heritage Haveli', price: '₹8,500/night' },
      { name: 'Hyatt Regency Amritsar', style: 'Modern Luxury close to Golden Temple', price: '₹11,000/night' }
    ],
    hiddenGems: ['Pul Kanjri historic border outpost & pool of Maharaja Ranjit Singh', 'Saragarhi Memorial Gurudwara', 'Khaun Gali secret night food alley', 'Mata Lal Devi subterranean cave shrine'],
    photoSpots: [
      { spot: 'Golden Temple Night Illumination', bestTime: '08:00 PM - 09:30 PM', tip: 'Use a tripod or steady railing for a long exposure capturing golden reflections in mirror-still water.' },
      { spot: 'Wagah Border High-Kicking Soldiers', bestTime: '04:30 PM - 05:30 PM', tip: 'High shutter speed (1/1000s) to freeze the dynamic ceremonial kicks and flag lowering.' },
      { spot: 'Heritage Street Victorian-Sikh Architecture', bestTime: '06:30 AM - 07:30 AM', tip: 'Capture undisturbed red sandstone arcades before morning market crowds arrive.' }
    ],
    shopping: [
      { item: 'Authentic Phulkari hand-embroidered dupattas and suits', market: 'Katra Jaimal Singh Market', tip: 'Look for geometric silk thread needlework on coarse khaddar cotton.' },
      { item: 'Handcrafted Punjabi Juttis (leather shoes with tilla thread)', market: 'Raunak Jutti Bazaar near Golden Temple', tip: 'Test flexibility of pure leather soles.' },
      { item: 'Amritsari Papad & Wariyan (sun-dried spiced lentil nuggets)', market: 'Majith Mandi Spice Market', tip: 'Buy black pepper and hing varieties directly from spice merchants.' }
    ],
    culturalEtiquette: [
      'Head must remain covered at all times inside the Gurudwara premises for both men and women (scarves are freely available at the entrance).',
      'Remove shoes and socks and wash your feet in the shallow water channel before entering the holy marble parikrama.',
      'Smoking, tobacco, alcohol, and intoxicating substances are strictly barred anywhere within the sacred perimeter.'
    ],
    facts: [
      'The Golden Temple’s four open entrance doors in all four cardinal directions symbolize that people of all castes, creeds, genders, and religions are welcome equally.',
      'The foundation stone of the Harmandir Sahib was laid in December 1588 by the venerated Sufi Muslim saint Hazrat Mian Mir of Lahore.',
      'Over 750 kg of pure gold leaf gilds the upper floors and dome of the sanctum, sponsored by Maharaja Ranjit Singh in 1830.'
    ],
    emergency: [
      { agency: 'Amritsar Tourist Police Helpdesk', phone: '0183-2555555 / 112' },
      { agency: 'Golden Temple SGPC Information Office', phone: '0183-2553957' },
      { agency: 'Guru Nanak Dev Hospital Amritsar', phone: '0183-2573200' }
    ]
  },

  odisha: {
    name: 'Odisha (Bhubaneswar, Puri & Konark)',
    state: 'Odisha',
    tagline: 'The Golden Triangle of Kalinga Architecture & Sacred Coastal Shrines',
    bestMonths: 'October to March (Gentle coastal breeze and warm sunshine)',
    dailyThemes: [
      'Bhubaneswar: City of 500 Temples (Mukteshwar, Lingaraj & Rajarani)',
      'Konark Sun Temple: The Colossal 13th-Century Black Pagoda',
      'Puri Jagannath Temple Pilgrimage & Golden Beach Twilight',
      'Raghurajpur Heritage Pattachitra Artisan Village & Chilika Lagoon'
    ],
    morningPool: [
      { activity: 'Sunrise exploration of the 10th-century Mukteshwar Temple, hailed as the "Gem of Odishan Architecture" with its carved torana archway.', location: 'Mukteshwar Temple Complex', tip: 'Arrive at 06:15 AM to photograph intricate dancing figures carved on red sandstone.' },
      { activity: 'Sunrise walk around the gargantuan stone chariot wheels of the Konark Sun Temple, designed as 24 intricately carved wheels drawn by 7 galloping horses.', location: 'Konark Sun Temple', tip: 'Each spoke of the wheels functions as an accurate sundial telling exact local solar time.' },
      { activity: 'Early morning darshan at the 12th-century Jagannath Temple in Puri, experiencing the timeless spiritual energy of the sacred Dham.', location: 'Puri Jagannath Sanctum', tip: 'Strictly non-Hindus are not permitted inside the sanctum; can view from Raghunandan Library roof.' },
      { activity: 'Board a wooden boat at Satapada across Chilika Lake (Asia’s largest brackish lagoon) to spot elusive Irrawaddy Dolphins leaping in the dawn.', location: 'Chilika Lake (Satapada)', tip: 'Early morning boat trips offer 90% higher chance of spotting the blunt-nosed dolphins.' }
    ],
    afternoonPool: [
      { activity: 'Explore the 11th-century Lingaraj Temple and Rajarani Temple with sensuous stone figurines surrounded by manicured lawns.', location: 'Lingaraj & Rajarani Temples', foodTip: 'Savor traditional Dalma (lentils slow-cooked with pumpkin, raw banana, and roasted cumin) with hot rice.' },
      { activity: 'Tour the Konark Archaeological Museum and the Konark Interpretation Centre learning about King Narasimhadeva I’s master builder Bisu Maharana.', location: 'Konark Museum & Cultural Hub', foodTip: 'Taste iconic Chhena Poda (baked caramelized cottage cheese cake) warm from the earthen oven.' },
      { activity: 'Walk through Raghurajpur Heritage Crafts Village where every single home is an artisan studio painting palm-leaf Pattachitra scrolls.', location: 'Raghurajpur Artisan Village', foodTip: 'Relish Machha Besara (fish simmered in a pungent mustard paste with dried mangoes).' },
      { activity: 'Visit the rock-cut cave hermitage of Udayagiri and Khandagiri, carved for Jain monks by King Kharavela in 2nd century BCE.', location: 'Udayagiri & Khandagiri Caves', foodTip: 'Sample sweet crispy Puri Khaja snacks made with multi-layered refined flour and sugar glaze.' }
    ],
    eveningPool: [
      { activity: 'Attend the sunset flag-changing ritual (Chuna Ceremony) at Puri Jagannath Temple, watching a priest scale the 65-meter dome barefoot without ropes.', location: 'Jagannath Temple Perimeter', sunsetSpot: 'Badadanda Grand Road' },
      { activity: 'Sunset stroll along the golden sands of Chandrabhaga Beach near Konark, watching local fishermen haul their nets.', location: 'Chandrabhaga Beach', sunsetSpot: 'Chandrabhaga sand dunes' },
      { activity: 'Watch an authentic live Odissi classical dance performance at Rabindra Mandap or the Konark Natya Mandap.', location: 'Konark Natya Mandap', sunsetSpot: 'Mukteshwar temple pond steps' },
      { activity: 'Evening sunset over the tranquil waters of Bindu Sagar sacred lake in Old Bhubaneswar.', location: 'Bindu Sagar Sacred Tank', sunsetSpot: 'Ananta Vasudeva lakeside ghata' }
    ],
    routes: [
      { from: 'Biju Patnaik International Airport (BBI)', to: 'Bhubaneswar Old City', distance: '6 km', duration: '15 mins', mode: 'Prepaid Taxi' },
      { from: 'Bhubaneswar', to: 'Konark Sun Temple', distance: '65 km', duration: '1 hr 15 mins', mode: 'Scenic Marine Drive Highway' },
      { from: 'Konark', to: 'Puri', distance: '35 km', duration: '40 mins', mode: 'Paved Coastal Highway' }
    ],
    entryFees: [
      { site: 'Konark Sun Temple (ASI World Heritage Ticket)', indians: '₹40', foreigners: '₹600' },
      { site: 'Rajarani Temple (ASI Ticket)', indians: '₹25', foreigners: '₹300' },
      { site: 'Udayagiri & Khandagiri Caves', indians: '₹25', foreigners: '₹300' },
      { site: 'Chilika Lake Dolphin Boat Safari (3 hrs)', indians: '₹1,500 / boat', foreigners: '₹1,500 / boat' }
    ],
    cuisines: ['Chhena Poda (Caramelized Cheesecake)', 'Dalma with Ghee', 'Puri Mahaprasad Khaja', 'Machha Besara (Mustard Fish)', 'Crab Kalia', 'Pahal Rasagola'],
    eateries: [
      { name: 'Dalma Restaurant, Bhubaneswar', speciality: 'Authentic traditional Odia home-style thalis & seafood', price: '₹350/person' },
      { name: 'Wildgrass Restaurant, Puri', speciality: 'Fresh seafood, prawn malai curry & bamboo mutton', price: '₹550/person' },
      { name: 'Nrusimha Sweets, Puri Grand Road', speciality: 'Original Puri Khaja fried in pure desi ghee', price: '₹100/person' }
    ],
    stays: [
      { name: 'Mayfair Waves, Puri', style: 'Luxury Beachfront Resort Overlooking Sea', price: '₹14,000/night' },
      { name: 'Lotus Eco Resort Konark', style: 'Cottages on Pristine Ramchandi Lagoon Beach', price: '₹8,500/night' },
      { name: 'Trident Bhubaneswar', style: '5-Star Garden Estate in Temple City', price: '₹12,000/night' }
    ],
    hiddenGems: ['Chausath Yogini circular 9th-century tantric shrine at Hirapur', 'Pipili colorful applique artisan village', 'Dhauli Peace Pagoda where Ashoka embraced Buddhism', 'Mangalajodi bird wetland birding sanctuary'],
    photoSpots: [
      { spot: 'Konark Sun Chariot Wheel at Golden Hour', bestTime: '06:30 AM - 07:30 AM', tip: 'Low sunlight cuts across the 8 spokes revealing micro-carvings of dancers and hunters.' },
      { spot: 'Chandrabhaga Beach Sunrise', bestTime: '05:45 AM - 06:30 AM', tip: 'Catch the fiery sun rising directly from the Bay of Bengal ocean horizon.' },
      { spot: 'Raghurajpur Painted Murals Village Street', bestTime: '09:00 AM - 11:00 AM', tip: 'Photograph master artists hand-etching dried palm leaves using iron styluses.' }
    ],
    shopping: [
      { item: 'Authentic Palm Leaf Pattachitra & Tussar Silk paintings', market: 'Raghurajpur Crafts Village', tip: 'Buy directly from certified master Chitrakar families.' },
      { item: 'Pipili Applique lampshades, garden umbrellas & wall hangings', market: 'Pipili Crafts Bazaar on Highway', tip: 'Vibrant geometric fabric stitching with mirrors.' },
      { item: 'Silver Filigree (Tarakasi) delicate jewelry', market: 'Cuttack Silver Guilds', tip: 'Incredible micro-wire gossamer silver craft.' }
    ],
    culturalEtiquette: [
      'Puri Jagannath Temple has strict entry guidelines: non-Hindus and foreign nationals cannot enter the sanctum; please respect this ancient rule.',
      'Leather goods, shoes, wallets, and mobile phones are prohibited inside the Jagannath Temple enclosure.',
      'Always dress modestly with covered shoulders and knees at all active Kalinga shrines.'
    ],
    facts: [
      'The 24 stone wheels of the Konark Sun Temple are precise astronomical sundials; the shadow cast by the spokes tells time accurate to a minute!',
      'The massive Jagannath Temple kitchen in Puri is the largest in the world, where 7 earthen pots are placed on top of each other over firewood, and the topmost pot cooks first!',
      'Odissi is recognized as the oldest surviving classical dance tradition of India based on temple sculptures in the Udayagiri caves dating back to 2nd century BCE.'
    ],
    emergency: [
      { agency: 'Odisha Police Emergency Control', phone: '100 / 112' },
      { agency: 'Odisha Tourism Toll-Free Helpline', phone: '1800-208-1414' },
      { agency: 'Capital Hospital Bhubaneswar', phone: '0674-2391983' }
    ]
  },

  kashmir: {
    name: 'Kashmir Valley (Srinagar, Gulmarg & Pahalgam)',
    state: 'Jammu & Kashmir',
    tagline: 'Paradise on Earth: Alpine Meadows & Saffron Valleys',
    bestMonths: 'March to November (Spring blossoms, lush green summers & autumn chinars)',
    dailyThemes: [
      'Dal Lake Shikara Dawn & Mughal Terraced Garden Splendors',
      'Gulmarg: High Gondola Alps & Apharwat Snowfields',
      'Pahalgam: Betaab Valley, Aru Pine Valleys & Lidder Riverbank',
      'Old Srinagar Heritage Quarter: Jamia Masjid & Artisan Woodcarvers'
    ],
    morningPool: [
      { activity: 'Sunrise wooden Shikara glide across Dal Lake to the floating vegetable market where vendors trade produce boat-to-boat.', location: 'Dal Lake Floating Market', tip: 'Depart your houseboat by 05:15 AM; misty morning light over lotus gardens is magical.' },
      { activity: 'Take the Gulmarg Gondola Phase 2 to Apharwat Peak (13,780 ft) for breathtaking panoramas of the Pir Panjal and Nanga Parbat ranges.', location: 'Gulmarg Apharwat Peak', tip: 'Book Phase 1 & 2 tickets online weeks in advance; carry warm windproof jackets even in summer.' },
      { activity: 'Morning walk along the gushing glacier-fed turquoise waters of the Lidder River in Pahalgam through pine-scented mountain air.', location: 'Lidder River Valley, Pahalgam', tip: 'Great spot for fly-fishing brown trout with local authorized permits.' },
      { activity: 'Ascend the terraced fountains and cascading watercourses of Nishat Bagh and Shalimar Bagh, built by Mughal Emperor Jahangir.', location: 'Shalimar & Nishat Mughal Gardens', tip: 'Morning sunlight illuminates the Dal Lake water channel beneath giant Chinar trees.' }
    ],
    afternoonPool: [
      { activity: 'Explore the 378 monumental deodar wooden pillars inside the 14th-century Jamia Masjid in Old Srinagar.', location: 'Jamia Masjid, Nowhatta', foodTip: 'Savor a traditional 36-course Kashmiri Wazwan feast featuring Rogan Josh, Rista, Gushtaba, and Tabak Maaz.' },
      { activity: 'Horseback ride or hike through the pristine alpine meadows of Betaab Valley and Aru Valley in Pahalgam.', location: 'Betaab & Aru Valleys', foodTip: 'Drink hot Kashmiri Kahwa brewed with green tea, saffron, crushed green cardamom, and slivered almonds.' },
      { activity: 'Visit the master walnut woodcarving and papier-mâché craft ateliers in the historic downtown alleys of Srinagar.', location: 'Srinagar Craft Quarter', foodTip: 'Taste warm Kashmiri breads: Girda, Lavasa, and sweet Sheermal from traditional Kandur bakeries.' },
      { activity: 'Explore the high-altitude saffron fields of Pampore, smelling the delicate violet Crocus sativus flowers.', location: 'Pampore Saffron Fields', foodTip: 'Enjoy Nadru Yakhni (lotus stem simmered in mild spiced yogurt gravy).' }
    ],
    eveningPool: [
      { activity: 'Sunset Shikara ride around Char Chinar island on Dal Lake as the setting sun turns the Hari Parbat fort into gold.', location: 'Dal Lake Open Waters', sunsetSpot: 'Char Chinar Island Shikara mooring' },
      { activity: 'Relax on the cedar-carved veranda of your heritage luxury Houseboat sipping saffron tea as waterbirds glide by.', location: 'Nigeen / Dal Lake Houseboat', sunsetSpot: 'Houseboat carved rooftop sun-deck' },
      { activity: 'Sunset viewpoint walk atop Shankaracharya Hill, gazing across the entire oval bowl of Srinagar and winding Jhelum river.', location: 'Shankaracharya Temple Hill', sunsetSpot: 'Shankaracharya summit parapet' },
      { activity: 'Stroll around the lively Lal Chowk and Polo View pedestrian promenade shopping for dry fruits and Pashmina.', location: 'Polo View High Street', sunsetSpot: 'Jhelum River Zero Bridge wooden walkway' }
    ],
    routes: [
      { from: 'Sheikh ul-Alam International Airport (SXR)', to: 'Dal Lake Boulevard', distance: '14 km', duration: '30 mins', mode: 'Prepaid Airport Taxi' },
      { from: 'Srinagar', to: 'Gulmarg', distance: '51 km', duration: '1 hr 30 mins', mode: 'Mountain Highway Taxi (Chains required in winter)' },
      { from: 'Srinagar', to: 'Pahalgam', distance: '90 km', duration: '2.5 hrs', mode: 'Scenic Apple Valley Highway' }
    ],
    entryFees: [
      { site: 'Gulmarg Gondola Phase 1 (Kungdoor)', indians: '₹800', foreigners: '₹800' },
      { site: 'Gulmarg Gondola Phase 2 (Apharwat Summit)', indians: '₹1,000', foreigners: '₹1,000' },
      { site: 'Mughal Gardens (Nishat / Shalimar)', indians: '₹25', foreigners: '₹25' },
      { site: 'Shikara 2-Hour Heritage Lake Tour', indians: '₹800 - ₹1,200 / boat', foreigners: '₹800 - ₹1,200 / boat' }
    ],
    cuisines: ['Kashmiri Wazwan Rogan Josh', 'Rista & Gushtaba Meatballs', 'Saffron Kahwa with Almonds', 'Nadru Yakhni (Lotus Stem)', 'Kandur Traditional Breads', 'Modur Pulao'],
    eateries: [
      { name: 'Ahdoos Restaurant, Residency Road (Since 1918)', speciality: 'The gold standard for authentic Wazwan and mutton curries', price: '₹650/person' },
      { name: 'Mughal Darbar, Lal Chowk', speciality: 'Hearty traditional Kashmiri thalis and seekh kebabs', price: '₹450/person' },
      { name: 'Chai Jaai Tea Room, Dhanjibhoy Building', speciality: 'Artisan bakery, pink Nun Chai and over 20 global teas', price: '₹350/person' }
    ],
    stays: [
      { name: 'The Khyber Himalayan Resort & Spa, Gulmarg', style: '5-Star Pine Forest Alpine Luxury facing Peaks', price: '₹38,000/night' },
      { name: 'Sukoon Luxury Houseboat, Nigeen Lake', style: 'Eco-Luxury Handcrafted Cedar Houseboat', price: '₹22,000/night' },
      { name: 'Pahalgam Hotel, Lidder Riverbank', style: 'Historic Pine Riverside Heritage Estate', price: '₹12,500/night' }
    ],
    hiddenGems: ['Gurez Valley virgin Himalayan borderlands beneath Habba Khatoon peak', 'Doodhpathri emerald milk valley meadows', 'Aharbal roaring waterfall gorge', 'Yusmarg untouched alpine pastures'],
    photoSpots: [
      { spot: 'Dal Lake Floating Market Dawn', bestTime: '05:30 AM - 06:45 AM', tip: 'Low camera angle from the shikara gunwale capturing steam rising from lake water.' },
      { spot: 'Apharwat Peak Snowfields Gulmarg', bestTime: '10:00 AM - 12:00 PM', tip: 'High-contrast snow scene; use UV filter and dial exposure compensation +1 EV.' },
      { spot: 'Chinar Trees in Autumn (November)', bestTime: '04:00 PM - 05:15 PM', tip: 'Backlit fiery crimson and gold chinar leaves glowing against the Zabarwan mountains.' }
    ],
    shopping: [
      { item: 'Certified 100% Hand-woven Cashmere Pashmina Shawls', market: 'Government Arts Emporium, Residency Road', tip: 'Pass the ring test; verify certified GI Pashmina tag.' },
      { item: 'Hand-carved walnut wood furniture and jewelry boxes', market: 'Old City Artisan Workshops', tip: 'Carved from seasoned walnut root wood.' },
      { item: 'Grade-A Pure Mogra Saffron (Kesar) & Mamra Almonds', market: 'Pampore Saffron Cooperatives', tip: 'Deep red stigmas without yellow tails.' }
    ],
    culturalEtiquette: [
      'Dress modestly covering legs and arms in traditional towns and mosques.',
      'Always negotiate Shikara and pony rides according to official Jammu & Kashmir Tourism rate cards.',
      'Carry valid government photo IDs at all times for routine security checkposts.'
    ],
    facts: [
      'The Mughal Emperor Jahangir loved Kashmir so intensely that on his deathbed, when asked what he desired, he famously whispered: "Only Kashmir, and nothing else!"',
      'The houseboats of Srinagar were originally invented in the late 19th century by British civil servants who were legally forbidden by the Maharaja from owning land in the valley.',
      'Kashmir is the only place in the Indian subcontinent where the prized golden-red Saffron (Crocus sativus) is cultivated.'
    ],
    emergency: [
      { agency: 'J&K Tourist Police Srinagar', phone: '0194-2452227 / 112' },
      { agency: 'J&K Tourism Toll-Free Helpline', phone: '1800-103-1060' },
      { agency: 'Sher-i-Kashmir Institute of Medical Sciences (SKIMS)', phone: '0194-2401013' }
    ]
  },

  rajasthan: {
    name: 'Rajasthan (Jaipur, Udaipur & Jodhpur)',
    state: 'Rajasthan',
    tagline: 'The Land of Kings, Desert Fortresses & Mirror Palaces',
    bestMonths: 'October to March (Pleasant daytime temperatures and cool starry desert nights)',
    dailyThemes: [
      'Jaipur Pink City: Amer Fort, Hawa Mahal & City Palace',
      'Jodhpur Blue City: Mehrangarh Fort & Jaswant Thada Cenotaphs',
      'Udaipur City of Lakes: Lake Pichola Sunset & Jagmandir Island',
      'Jaisalmer Golden Living Fort & Sam Sand Dunes Camel Trek'
    ],
    morningPool: [
      { activity: 'Sunrise ascent to Amer Fort in Jaipur, admiring mirror mosaics inside Sheesh Mahal and grand courtyards.', location: 'Amer Fort & Maota Lake', tip: 'Arrive at opening at 08:00 AM before tour bus crowds.' },
      { activity: 'Early morning climb up the sheer cliff ramparts of Mehrangarh Fort in Jodhpur, admiring royal howdahs and palanquins.', location: 'Mehrangarh Fort, Jodhpur', tip: 'Gaze down from the ramparts onto the sea of indigo-blue Brahmin houses.' },
      { activity: 'Sunrise boat cruise across the mirror-calm waters of Lake Pichola in Udaipur, viewing the white marble City Palace facade.', location: 'Lake Pichola, Udaipur', tip: 'Soft morning light creates stunning reflections of island palaces.' },
      { activity: 'Walk through the 12th-century living fort of Jaisalmer (Sonar Qila), visiting exquisitely carved yellow sandstone Jain temples.', location: 'Jaisalmer Fort Lanes', tip: 'One of the only living forts in the world where 3,000 people reside inside.' }
    ],
    afternoonPool: [
      { activity: 'Photograph the 953 honeycombed jharokha windows of Hawa Mahal (Palace of Winds) and visit Jantar Mantar observatory.', location: 'Hawa Mahal & Jantar Mantar', foodTip: 'Savor authentic Dal Baati Churma served with generous ladle of desi ghee.' },
      { activity: 'Explore the delicate white marble filigree and royal cenotaphs at Jaswant Thada, the Taj Mahal of Marwar.', location: 'Jaswant Thada, Jodhpur', foodTip: 'Taste fiery Laal Maas (mutton simmered in Mathania red chillies) and Mirchi Vada.' },
      { activity: 'Tour the sprawling City Palace complex in Udaipur, inspecting crystal galleries, peacocks mosaics, and royal vintage cars.', location: 'Udaipur City Palace', foodTip: 'Enjoy Gatte ki Sabzi and Ker Sangri with bajra roti at traditional haveli dining halls.' },
      { activity: 'Visit the Patwon ki Haveli in Jaisalmer, a cluster of five interconnected merchant mansions carved like lace in stone.', location: 'Patwon ki Haveli', foodTip: 'Relish crisp Pyaaz Kachoris from heritage halwai shops.' }
    ],
    eveningPool: [
      { activity: 'Sunset viewpoint walk atop Nahargarh Fort overlooking the entire illuminated expanse of Jaipur city.', location: 'Nahargarh Fort Viewpoint', sunsetSpot: 'Padao open terrace bastion' },
      { activity: 'Sunset high tea atop Rao Jodha Desert Rock Park or a rooftop cafe facing the illuminated battlements of Mehrangarh.', location: 'Jodhpur Heritage Rooftop', sunsetSpot: 'Mehrangarh northern bastion' },
      { activity: 'Watch the Dharohar folk dance recital at Bagore ki Haveli with fire-dancers and puppet masters on the lakeside.', location: 'Bagore ki Haveli, Gangaur Ghat', sunsetSpot: 'Gangaur Ghat lake steps' },
      { activity: 'Camel safari into the golden Sam Sand Dunes of the Thar Desert for a sunset bonfire and Kalbelia folk performance.', location: 'Sam Sand Dunes, Jaisalmer', sunsetSpot: 'Crest of high sand dunes' }
    ],
    routes: [
      { from: 'Jaipur International Airport (JAI)', to: 'Jaipur Old City', distance: '12 km', duration: '25 mins', mode: 'Prepaid Taxi' },
      { from: 'Jaipur', to: 'Jodhpur', distance: '330 km', duration: '5.5 hrs', mode: 'Vande Bharat Express / Highway Taxi' },
      { from: 'Jodhpur', to: 'Udaipur', distance: '250 km', duration: '4.5 hrs', mode: 'Scenic Highway via Ranakpur Jain Temples' }
    ],
    entryFees: [
      { site: 'Amer Fort Jaipur (Composite Monument Ticket)', indians: '₹100', foreigners: '₹500' },
      { site: 'Mehrangarh Fort & Museum Jodhpur', indians: '₹100', foreigners: '₹600' },
      { site: 'Udaipur City Palace Complex', indians: '₹300', foreigners: '₹300' },
      { site: 'Lake Pichola Boat Ride', indians: '₹400', foreigners: '₹800' }
    ],
    cuisines: ['Dal Baati Churma with Desi Ghee', 'Laal Maas with Mathania Chillies', 'Ker Sangri Desert Beans', 'Pyaaz & Mawa Kachori', 'Saffron Ghewar', 'Mirchi Vada'],
    eateries: [
      { name: 'Rawat Mishthan Bhandar, Station Road Jaipur', speciality: 'World-famous piping hot Pyaaz Kachori and Mawa Kachori', price: '₹120/person' },
      { name: 'Gypsy Dining Hall, Sardarpura Jodhpur', speciality: 'Grand 31-dish authentic Rajasthani Thali experience', price: '₹450/person' },
      { name: '1559 AD, Near Lake Fateh Sagar Udaipur', speciality: 'Royal Rajput cuisine in a restored colonial garden bungalow', price: '₹750/person' }
    ],
    stays: [
      { name: 'Taj Lake Palace, Udaipur', style: '18th-Century Floating White Marble Palace Hotel', price: '₹48,000/night' },
      { name: 'Umaid Bhawan Palace, Jodhpur', style: 'Royal Art-Deco Palace Residence Luxury', price: '₹52,000/night' },
      { name: 'Samode Haveli, Jaipur', style: 'Intimate 175-Year-Old Aristocratic Mansion', price: '₹18,000/night' }
    ],
    hiddenGems: ['Kumbhalgarh Fort 36-km Great Wall of India', 'Bundi painted stepwells & Taragarh Fort', 'Jawai Leopard granite boulder wilderness', 'Shekhawati open-air fresco havelis'],
    photoSpots: [
      { spot: 'Hawa Mahal Facade from Wind View Cafe', bestTime: '07:00 AM - 08:30 AM', tip: 'Capture morning sunlight illuminating the pink sandstone honeycomb facade.' },
      { spot: 'Blue City Alleys of Navchokiya Jodhpur', bestTime: '07:30 AM - 09:00 AM', tip: 'Frame vibrant blue-washed houses with Mehrangarh fort looming high in the background.' },
      { spot: 'Lake Pichola Sunset from Boat', bestTime: '05:30 PM - 06:15 PM', tip: 'Golden hour backlight creating silhouettes of Jag Niwas and Aravali hills.' }
    ],
    shopping: [
      { item: 'Hand block-printed Sanganeri & Bagru bedsheets and quilts', market: 'Bapu Bazaar & Johari Bazaar, Jaipur', tip: 'Verify natural vegetable dyes and wooden block stamps.' },
      { item: 'Traditional Bandhani and Leheriya tie-and-dye sarees', market: 'Tripolia Bazaar, Jodhpur', tip: 'Hand-knotted silk and georgette fabrics.' },
      { item: 'Authentic camel leather mojris and footwear', market: 'Clock Tower Market, Jodhpur', tip: 'Comfortable hand-stitched leather.' }
    ],
    culturalEtiquette: [
      'Always ask permission before photographing local Rajput men in colorful turbans or women in traditional ghagras.',
      'Remove footwear before stepping onto the white marble floorings of Jain and Hindu sanctums.',
      'Haggling in bazaars should be respectful and friendly.'
    ],
    facts: [
      'Kumbhalgarh Fort in Rajasthan has a continuous stone wall extending 36 kilometers, recognized as the second-longest unbroken wall on Earth after the Great Wall of China.',
      'Jodhpur is known as the "Blue City" because Brahmins historically painted their houses indigo with copper sulphate to repel termites and reflect the desert heat.',
      'Jaisalmer Fort is entirely constructed from golden-yellow Jurassic sandstone without any cement or mortar, locking together through precision stone dovetailing.'
    ],
    emergency: [
      { agency: 'Rajasthan Police Helpline', phone: '100 / 112' },
      { agency: 'Rajasthan Tourism Toll-Free Helpline', phone: '1800-103-3500' },
      { agency: 'SMS Hospital Jaipur', phone: '0141-2560291' }
    ]
  }
};

export class AITripPlannerService {
  /**
   * Synthesize a 100% destination-specific itinerary
   */
  public static generateDestinationItinerary(req: ItineraryRequest): ItineraryResult {
    const rawDest = (req.destination || 'Rajasthan').trim();
    const destLower = rawDest.toLowerCase();
    const days = Math.max(1, Math.min(14, req.days || 3));
    const budget = req.budgetLevel || 'Comfort';
    const travelStyle = req.travelStyle || 'Royal Heritage & Forts';
    const companions = req.companions || 'Solo Wanderer';
    const month = req.monthOfTravel || 'October';

    // 1. Check if matches a curated micro-destination
    let micro: MicroDestinationKnowledge | null = null;
    for (const key of Object.keys(MICRO_DESTINATIONS)) {
      if (destLower.includes(key) || key.includes(destLower)) {
        micro = MICRO_DESTINATIONS[key];
        break;
      }
    }

    // 2. If no direct micro match, check if dest matches a monument or hidden gem to identify parent state
    let targetStateName = rawDest;
    if (!micro) {
      const monumentMatch = HERITAGE_SITES.find(
        s => s.name.toLowerCase().includes(destLower) || destLower.includes(s.name.toLowerCase()) || s.state.toLowerCase().includes(destLower)
      );
      if (monumentMatch) {
        targetStateName = monumentMatch.state;
      } else {
        const gemMatch = HIDDEN_GEMS.find(
          g => g.name.toLowerCase().includes(destLower) || destLower.includes(g.name.toLowerCase()) || g.region.toLowerCase().includes(destLower) || g.state.toLowerCase().includes(destLower)
        );
        if (gemMatch) {
          targetStateName = gemMatch.state;
        }
      }
    }

    // 3. Look up matching state data
    let matchedState = Object.values(STATES_DATA).find(
      s => s.name.toLowerCase() === targetStateName.toLowerCase() ||
           s.slug.toLowerCase() === targetStateName.toLowerCase() ||
           s.capital.toLowerCase().includes(destLower) ||
           s.nearbyPlaces.some(p => p.toLowerCase().includes(destLower))
    );
    if (!matchedState) {
      matchedState = getStateData(targetStateName);
    }

    // 4. Compute realistic dynamic budget
    const multiplier =
      budget === 'Backpacker'
        ? 1800
        : budget === 'Comfort'
        ? 4800
        : budget === 'Heritage Luxury'
        ? 16500
        : 42000;

    const companionFactor =
      companions.includes('Couple')
        ? 1.7
        : companions.includes('Family')
        ? 2.8
        : companions.includes('Friends')
        ? 2.2
        : 1.0;

    const totalEst = Math.round(days * multiplier * companionFactor);

    // 5. Generate Days dynamically
    const dayPlans: DayPlan[] = [];

    if (micro) {
      // Use micro destination specific pools
      for (let i = 0; i < days; i++) {
        const dNum = i + 1;
        const themeIndex = i % micro.dailyThemes.length;
        const morning = micro.morningPool[i % micro.morningPool.length];
        const afternoon = micro.afternoonPool[i % micro.afternoonPool.length];
        const evening = micro.eveningPool[i % micro.eveningPool.length];
        const fact = micro.facts[i % micro.facts.length];

        dayPlans.push({
          day: dNum,
          theme: `Day ${dNum}: ${micro.dailyThemes[themeIndex]}`,
          morning: { time: '07:30 AM', ...morning },
          afternoon: { time: '01:00 PM', ...afternoon },
          evening: { time: '05:30 PM', ...evening },
          heritageFact: fact
        });
      }

      return {
        destination: micro.name,
        durationDays: days,
        travelStyle,
        budgetLevel: budget,
        totalEstimatedCostINR: `₹${totalEst.toLocaleString('en-IN')}`,
        budgetBreakdown: {
          stay: Math.round(totalEst * 0.42),
          food: Math.round(totalEst * 0.24),
          transport: Math.round(totalEst * 0.18),
          monumentsGuide: Math.round(totalEst * 0.11),
          emergencyReserve: Math.round(totalEst * 0.05)
        },
        weatherForecast: {
          temp: month.includes('May') || month.includes('Jun') ? '28°C - 38°C' : '18°C - 28°C',
          climate: `Pleasant travel conditions for ${month}. Clear skies and gentle breezes.`,
          clothingAdvice: 'Breathable lightweight cottons for walking; conservative temple attire covering shoulders and knees; comfortable walking footwear.'
        },
        packingChecklist: [
          'Original Government-issued Photo ID (Aadhaar / Passport) for ASI monument verification',
          'Comfortable slip-on footwear (easy removal at active sacred shrines)',
          'Sun hat, polarized sunglasses, and non-greasy sunscreen',
          'High-capacity power bank and camera with wide-angle lens',
          'Electrolyte sachets and reusable stainless steel water bottle'
        ],
        days: dayPlans,
        localCuisineToTaste: micro.cuisines,
        heritageStays: micro.stays,
        authenticEateries: micro.eateries,
        hiddenGemsEnRoute: micro.hiddenGems,
        emergencyHelplines: micro.emergency,
        travelRoute: micro.routes,
        entryFees: micro.entryFees,
        culturalEtiquette: micro.culturalEtiquette,
        bestPhotoSpots: micro.photoSpots,
        shoppingRecommendations: micro.shopping,
        bestTimeToVisit: micro.bestMonths
      };
    }

    // Fallback: State-level dynamic synthesis
    const stateMonuments = HERITAGE_SITES.filter(s => s.state.toLowerCase() === matchedState.name.toLowerCase());
    const stateGems = HIDDEN_GEMS.filter(g => g.state.toLowerCase() === matchedState.name.toLowerCase());

    for (let i = 0; i < days; i++) {
      const dNum = i + 1;
      const mon = stateMonuments[i % Math.max(1, stateMonuments.length)];
      const gem = stateGems[i % Math.max(1, stateGems.length)];
      const monName = mon ? mon.name : `${matchedState.name} Heritage Quarter`;
      const gemName = gem ? gem.name : `${matchedState.capital} Cultural Center`;

      dayPlans.push({
        day: dNum,
        theme: `Day ${dNum}: ${monName} & Historic ${matchedState.capital}`,
        morning: {
          time: '07:30 AM',
          activity: `Sunrise photography and guided exploration of ${monName}. Marvel at ancient architectural carvings and sanctum halls.`,
          location: monName,
          tip: 'Arrive at opening gates before tour buses to enjoy tranquil courtyards in gentle morning light.'
        },
        afternoon: {
          time: '01:00 PM',
          activity: `Authentic regional feast featuring ${matchedState.cuisine.dishes[i % matchedState.cuisine.dishes.length]}, followed by visit to traditional artisan craft workshops.`,
          location: `Heritage Dining Quarter, ${matchedState.capital}`,
          foodTip: `Must try: ${matchedState.cuisine.streetFood[i % matchedState.cuisine.streetFood.length]} and ${matchedState.cuisine.sweets[i % matchedState.cuisine.sweets.length]}.`
        },
        evening: {
          time: '05:30 PM',
          activity: `Sunset viewpoint excursion near ${gemName}. Enjoy twilight riverfront aarti or traditional ${matchedState.folkDance[0] || 'folk'} dance recital.`,
          location: gemName,
          sunsetSpot: `Panoramic Viewpoint over ${matchedState.capital}`
        },
        heritageFact: matchedState.facts[i % matchedState.facts.length] || `Governed by historic dynasties: ${matchedState.dynasties.join(', ')}.`
      });
    }

    return {
      destination: rawDest.toLowerCase() === matchedState.name.toLowerCase() ? matchedState.name : `${rawDest} (${matchedState.name})`,
      durationDays: days,
      travelStyle,
      budgetLevel: budget,
      totalEstimatedCostINR: `₹${totalEst.toLocaleString('en-IN')}`,
      budgetBreakdown: {
        stay: Math.round(totalEst * 0.42),
        food: Math.round(totalEst * 0.24),
        transport: Math.round(totalEst * 0.18),
        monumentsGuide: Math.round(totalEst * 0.11),
        emergencyReserve: Math.round(totalEst * 0.05)
      },
      weatherForecast: {
        temp: matchedState.weather.temp,
        climate: `${matchedState.weather.condition}. Best Season: ${matchedState.weather.bestSeason}.`,
        clothingAdvice: 'Comfortable cottons, temple-appropriate knee and shoulder covering clothing, light evening layer.'
      },
      packingChecklist: [
        'Government Issued Photo ID for ASI monument verification',
        'Comfortable slip-on shoes for temple floors',
        'Sunglasses, sun hat, and mineral sunscreen',
        'Power bank for smartphone cameras',
        'Electrolyte sachets and reusable water bottle'
      ],
      days: dayPlans,
      localCuisineToTaste: matchedState.cuisine.dishes.concat(matchedState.cuisine.sweets.slice(0, 2)),
      heritageStays: matchedState.hotels.map(h => ({ name: h.name, style: h.type, price: h.pricePerNight })),
      authenticEateries: matchedState.restaurants.map(r => ({ name: r.name, speciality: `${r.cuisineType} (${r.mustTry})`, price: r.priceRange })),
      hiddenGemsEnRoute: stateGems.map(g => g.name).slice(0, 4).concat(matchedState.hiddenGems.slice(0, 2)),
      emergencyHelplines: [
        { agency: `${matchedState.name} Police Control`, phone: matchedState.emergencyNumbers.police },
        { agency: `${matchedState.name} Tourist Helpline`, phone: matchedState.emergencyNumbers.touristHelpline },
        { agency: 'Ambulance & Emergency Medical', phone: matchedState.emergencyNumbers.ambulance }
      ],
      travelRoute: [
        { from: `${matchedState.capital} Airport / Junction`, to: stateMonuments[0]?.name || matchedState.capital, distance: '15 km', duration: '35 mins', mode: 'Prepaid Taxi' },
        { from: stateMonuments[0]?.name || matchedState.capital, to: stateGems[0]?.name || 'Heritage Outskirts', distance: '45 km', duration: '1 hr 15 mins', mode: 'Scenic Highway Drive' }
      ],
      entryFees: [
        { site: stateMonuments[0]?.name || 'Primary ASI Monument', indians: stateMonuments[0]?.entryFeeIndians || '₹40', foreigners: stateMonuments[0]?.entryFeeForeigners || '₹600' },
        { site: 'State Protected Shrines', indians: 'Free / ₹25', foreigners: '₹100 - ₹300' }
      ],
      culturalEtiquette: [
        'Remove footwear and head coverings before entering sacred temple sanctums.',
        'Dress modestly with shoulders and knees covered at all heritage and spiritual sites.',
        'Always ask permission before photographing resident monks, priests, or artisans.'
      ],
      bestPhotoSpots: [
        { spot: `${stateMonuments[0]?.name || matchedState.capital} Grand Facade`, bestTime: '06:30 AM - 08:00 AM', tip: 'Catch the warm golden morning light before visitors arrive.' },
        { spot: `${matchedState.capital} Sunset Ridge`, bestTime: '05:45 PM - 06:30 PM', tip: 'Use sunset backlighting to capture silhouettes of palace ramparts.' }
      ],
      shoppingRecommendations: [
        { item: `Traditional ${matchedState.traditionalDress.split(' ')[0]} textiles & handlooms`, market: `${matchedState.capital} Central Government Emporium`, tip: 'Look for the certified Handloom Mark.' },
        { item: `Authentic regional sweets & dry savories`, market: `${matchedState.capital} Heritage Halwai Bazaar`, tip: 'Purchase fresh in traditional sealed boxes.' }
      ],
      bestTimeToVisit: matchedState.bestTime
    };
  }
}
