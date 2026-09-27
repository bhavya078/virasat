import { geoXY } from './indiaMapPaths';

export interface MapMarker {
  id: string;
  name: string;
  hindiName?: string;
  category: 'unesco' | 'temple' | 'fort' | 'museum' | 'wildlife' | 'beach' | 'mountain' | 'gem' | 'festival' | 'cuisine';
  state: string;
  stateId: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  image: string;
  description: string;
  link: string;
  tags: string[];
}

export interface OdysseyStop {
  step: number;
  id: string;
  stateId: string;
  title: string;
  subtitle: string;
  state: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  image: string;
  narrative: string;
  dynasty: string;
  century: string;
  mustSee: string;
  audioText: string;
  routeLink: string;
}

// Curated authentic real landmark markers across India
export const MAP_HERITAGE_MARKERS: MapMarker[] = [
  // UNESCO & Imperial Forts / Temples
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    hindiName: 'ताज महल',
    category: 'unesco',
    state: 'Uttar Pradesh',
    stateId: 'uttar-pradesh',
    lat: 27.1751,
    lng: 78.0421,
    ...(() => { const p = geoXY(27.1751, 78.0421); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1920px-Taj_Mahal_%28Edited%29.jpeg',
    description: 'Shah Jahan’s timeless ivory marble mausoleum on the sacred Yamuna riverbank, world masterpiece of Mughal symmetry.',
    link: '/heritage/taj-mahal',
    tags: ['UNESCO', 'Mughal', 'Monument', 'Marble']
  },
  {
    id: 'hampi',
    name: 'Group of Monuments at Hampi',
    hindiName: 'हम्पी स्मारक',
    category: 'unesco',
    state: 'Karnataka',
    stateId: 'karnataka',
    lat: 15.3350,
    lng: 76.4600,
    ...(() => { const p = geoXY(15.3350, 76.4600); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Stone_Chariot_at_Vittala_Temple%2C_Hampi.jpg/1920px-Stone_Chariot_at_Vittala_Temple%2C_Hampi.jpg',
    description: 'Magnificent ruins of the Vijayanagara Empire with monolithic granite boulder temples, musical pillars, and stone chariots.',
    link: '/heritage/hampi',
    tags: ['UNESCO', 'Vijayanagara', 'Temples', 'Granite']
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    hindiName: 'कोणार्क सूर्य मंदिर',
    category: 'unesco',
    state: 'Odisha',
    stateId: 'odisha',
    lat: 19.8876,
    lng: 86.0945,
    ...(() => { const p = geoXY(19.8876, 86.0945); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Konark_Sun_Temple_2022.jpg/1920px-Konark_Sun_Temple_2022.jpg',
    description: '13th-century astronomical marvel sculpted as Surya’s cosmic 24-wheeled chariot pulled by seven celestial horses.',
    link: '/heritage/konark-sun-temple',
    tags: ['UNESCO', 'Kalinga', 'Sun Temple', 'Chariot']
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Group of Temples',
    hindiName: 'खजुराहो मंदिर',
    category: 'temple',
    state: 'Madhya Pradesh',
    stateId: 'madhya-pradesh',
    lat: 24.8318,
    lng: 79.9199,
    ...(() => { const p = geoXY(24.8318, 79.9199); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Kandariya_Mahadeva_Temple.jpg/1920px-Kandariya_Mahadeva_Temple.jpg',
    description: 'Chandela dynasty sandstone masterpieces celebrating divine cosmic union, life, devotion, and celestial nymphs (Apsaras).',
    link: '/heritage/khajuraho',
    tags: ['UNESCO', 'Chandela', 'Nagara', 'Sculptures']
  },
  {
    id: 'mehrangarh',
    name: 'Mehrangarh Fort',
    hindiName: 'मेहरानगढ़ दुर्ग',
    category: 'fort',
    state: 'Rajasthan',
    stateId: 'rajasthan',
    lat: 26.2980,
    lng: 73.0188,
    ...(() => { const p = geoXY(26.2980, 73.0188); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Mehrangarh_Fort_in_Jodhpur.jpg/1920px-Mehrangarh_Fort_in_Jodhpur.jpg',
    description: 'Towering 400 feet above the Blue City of Jodhpur on sheer volcanic cliffs, Rao Jodha’s impregnable fortress citadel.',
    link: '/heritage/mehrangarh-fort',
    tags: ['Fort', 'Rathore', 'Jodhpur', 'Palace']
  },
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Corridor',
    hindiName: 'काशी विश्वनाथ',
    category: 'temple',
    state: 'Uttar Pradesh',
    stateId: 'uttar-pradesh',
    lat: 25.3109,
    lng: 83.0107,
    ...(() => { const p = geoXY(25.3109, 83.0107); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1920px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg',
    description: 'The luminous Jyotirlinga shrine on sacred Ganga ghats in the oldest continuously inhabited spiritual capital of the world.',
    link: '/heritage/kashi-vishwanath',
    tags: ['Jyotirlinga', 'Shiva', 'Varanasi', 'Ganga']
  },
  {
    id: 'golden-temple',
    name: 'Harmandir Sahib (Golden Temple)',
    hindiName: 'श्री हरिमंदिर साहिब',
    category: 'temple',
    state: 'Punjab',
    stateId: 'punjab',
    lat: 31.6200,
    lng: 74.8765,
    ...(() => { const p = geoXY(31.6200, 74.8765); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amritsar_01.jpg/1920px-The_Golden_Temple_of_Amritsar_01.jpg',
    description: 'The sanctum sanctorum of Sikhism floating within the Amrit Sarovar lake, plated in pure 24-karat gold with 24-hour Guru Ka Langar.',
    link: '/heritage/golden-temple',
    tags: ['Sikh', 'Amritsar', 'Gold', 'Langar']
  },
  {
    id: 'ellora-caves',
    name: 'Kailash Temple (Ellora Cave 16)',
    hindiName: 'कैलाश मंदिर एलोरा',
    category: 'unesco',
    state: 'Maharashtra',
    stateId: 'maharashtra',
    lat: 20.0268,
    lng: 75.1790,
    ...(() => { const p = geoXY(20.0268, 75.1790); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Kailasa_temple_at_Ellora_caves.jpg/1920px-Kailasa_temple_at_Ellora_caves.jpg',
    description: 'The world’s largest monolithic rock-cut monument, carved top-down from a single basalt cliff face by Rashtrakuta kings.',
    link: '/heritage/ellora-caves',
    tags: ['UNESCO', 'Rashtrakuta', 'Monolith', 'Basalt']
  },
  {
    id: 'meenakshi-temple',
    name: 'Meenakshi Amman Temple',
    hindiName: 'मीनाक्षी अम्मन मंदिर',
    category: 'temple',
    state: 'Tamil Nadu',
    stateId: 'tamil-nadu',
    lat: 9.9195,
    lng: 78.1193,
    ...(() => { const p = geoXY(9.9195, 78.1193); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Madurai_Meenakshi_Amman_Temple_East_Gopuram.jpg/1920px-Madurai_Meenakshi_Amman_Temple_East_Gopuram.jpg',
    description: 'Dravidian architectural wonder featuring 14 soaring multi-tiered gopurams encrusted with thousands of painted mythological figures.',
    link: '/heritage/meenakshi-temple',
    tags: ['Dravidian', 'Gopuram', 'Madurai', 'Pandya']
  },
  {
    id: 'red-fort',
    name: 'Red Fort (Lal Qila)',
    hindiName: 'लाल किला',
    category: 'fort',
    state: 'Delhi',
    stateId: 'delhi',
    lat: 28.6562,
    lng: 77.2410,
    ...(() => { const p = geoXY(28.6562, 77.2410); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg/1920px-Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg',
    description: 'The red sandstone imperial stronghold of Shahjahanabad, symbol of Indian sovereignty and historic seat of Mughal rule.',
    link: '/heritage/red-fort',
    tags: ['UNESCO', 'Delhi', 'Mughal', 'Sovereignty']
  },

  // Untouched Hidden Gems
  {
    id: 'mawlynnong',
    name: 'Mawlynnong Living Root Sanctuary',
    hindiName: 'मावल्यान्नॉन्ग',
    category: 'gem',
    state: 'Meghalaya',
    stateId: 'meghalaya',
    lat: 25.2016,
    lng: 91.9056,
    ...(() => { const p = geoXY(25.2016, 91.9056); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Mawlynnong_-_Cleanest_village_of_Asia.jpg/1920px-Mawlynnong_-_Cleanest_village_of_Asia.jpg',
    description: 'Cleanest village in Asia with bio-engineered Ficus elastica living root bridges woven over centuries across rainforest streams.',
    link: '/hidden-gems/mawlynnong',
    tags: ['Hidden Gem', 'Eco', 'Root Bridges', 'Rainforest']
  },
  {
    id: 'gandikota',
    name: 'Gandikota Canyon & Fort',
    hindiName: 'गंडीकोटा महाखड्ड',
    category: 'gem',
    state: 'Andhra Pradesh',
    stateId: 'andhra-pradesh',
    lat: 14.8153,
    lng: 78.2863,
    ...(() => { const p = geoXY(14.8153, 78.2863); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Gorge_view_at_Gandikota.jpg/1920px-Gorge_view_at_Gandikota.jpg',
    description: 'The Grand Canyon of India carved by the Pennar river through 300-foot red sandstone cliffs crowned with a 13th-century fort.',
    link: '/hidden-gems/gandikota',
    tags: ['Hidden Gem', 'Canyon', 'Pennar', 'Red Cliffs']
  },
  {
    id: 'ziro-valley',
    name: 'Ziro Highland Valley',
    hindiName: 'ज़ीरो घाटी',
    category: 'gem',
    state: 'Arunachal Pradesh',
    stateId: 'arunachal-pradesh',
    lat: 27.5936,
    lng: 93.8340,
    ...(() => { const p = geoXY(27.5936, 93.8340); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg/1920px-A_cross_section_of_luch_green_valley_of_Ziro.jpg',
    description: 'Pristine Apatani tribal valley with zero-waste wet rice-cum-fish cultivation and lush bamboo forests under Eastern Himalayan clouds.',
    link: '/hidden-gems/ziro-valley',
    tags: ['Hidden Gem', 'Apatani', 'Highlands', 'Culture']
  },
  {
    id: 'hemis-pangong',
    name: 'Hemis Gompa & Pangong Tso',
    hindiName: 'हेमिस एवं पैंगोंग त्सो',
    category: 'mountain',
    state: 'Ladakh',
    stateId: 'ladakh',
    lat: 34.0200,
    lng: 77.7000,
    ...(() => { const p = geoXY(34.0200, 77.7000); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Pangong_Tso_Lake_Ladakh.jpg/1920px-Pangong_Tso_Lake_Ladakh.jpg',
    description: 'High-altitude Tibetan Buddhist monastery and shifting turquoise saline lake at 14,270 ft surrounded by snowcapped Himalayan crags.',
    link: '/state/ladakh',
    tags: ['Ladakh', 'Mountains', 'Monastery', 'Alpine Lake']
  },
  {
    id: 'alleppey-backwaters',
    name: 'Vembanad Palm Backwaters',
    hindiName: 'वेम्बनाड पश्चजल',
    category: 'beach',
    state: 'Kerala',
    stateId: 'kerala',
    lat: 9.4981,
    lng: 76.3388,
    ...(() => { const p = geoXY(9.4981, 76.3388); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/1920px-Alappuzha_Boat_Beauty_W.jpg',
    description: 'Tranquil emerald canal labyrinth woven with traditional thatched Kettuvallam houseboats, coconut fringes, and Ayurvedic spices.',
    link: '/state/kerala',
    tags: ['Backwaters', 'Houseboat', 'Spice', 'Lagoon']
  },
  {
    id: 'rann-utsav',
    name: 'Great Rann of Kutch White Desert',
    hindiName: 'कच्छ का रण',
    category: 'festival',
    state: 'Gujarat',
    stateId: 'gujarat',
    lat: 23.8340,
    lng: 69.8350,
    ...(() => { const p = geoXY(23.8340, 69.8350); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/White_Rann_of_Kutch.jpg/1920px-White_Rann_of_Kutch.jpg',
    description: 'Endless white salt expanse shimmering like silver under the desert full moon, epicenter of the world-famous Rann Utsav celebrations.',
    link: '/state/gujarat',
    tags: ['Salt Desert', 'Festival', 'Kutch', 'Handicraft']
  },
  {
    id: 'pushkar-mela',
    name: 'Pushkar Sacred Lake & Camel Fair',
    hindiName: 'पुष्कर मेला',
    category: 'festival',
    state: 'Rajasthan',
    stateId: 'rajasthan',
    lat: 26.4899,
    lng: 74.5511,
    ...(() => { const p = geoXY(26.4899, 74.5511); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Pushkar_Camel_Fair%2C_Rajasthan.jpg/1920px-Pushkar_Camel_Fair%2C_Rajasthan.jpg',
    description: 'Ancient Brahma temple lake hosting India’s most colourful desert carnival with tens of thousands of decorated camels, folk bards, and sadhus.',
    link: '/festivals/pushkar-fair',
    tags: ['Festival', 'Brahma', 'Camels', 'Desert']
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    hindiName: 'काजीरंगा राष्ट्रीय उद्यान',
    category: 'wildlife',
    state: 'Assam',
    stateId: 'assam',
    lat: 26.5775,
    lng: 93.1711,
    ...(() => { const p = geoXY(26.5775, 93.1711); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Indian_Rhinoceros_at_Kaziranga.jpg/1920px-Indian_Rhinoceros_at_Kaziranga.jpg',
    description: 'Brahmaputra floodplain grasslands safeguarding two-thirds of the world’s Great One-horned Rhinoceroses, wild elephants, and tigers.',
    link: '/state/assam',
    tags: ['UNESCO', 'Wildlife', 'Rhino', 'Brahmaputra']
  }
];

// 7 Iconic Odyssey Stops connecting India
export const ODYSSEY_STOPS: OdysseyStop[] = [
  {
    step: 1,
    id: 'delhi',
    stateId: 'delhi',
    title: 'Delhi: The Crown of Dynasties',
    subtitle: 'From Indraprastha to Shahjahanabad',
    state: 'National Capital Territory of Delhi',
    lat: 28.6562,
    lng: 77.2410,
    ...(() => { const p = geoXY(28.6562, 77.2410); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg/1920px-Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg',
    narrative: 'Where eight historic imperial cities rose and fell. Marvel at the soaring 73-meter Qutub Minar, Humayun’s garden tomb, and the red battlements of Shah Jahan’s Lal Qila.',
    dynasty: 'Tomaras, Chauhans, Delhi Sultanate, Mughals',
    century: '12th - 17th Century CE',
    mustSee: 'Red Fort, Qutub Minar & Chandni Chowk street food',
    audioText: 'Welcome to Delhi, the timeless imperial pivot of Bharat. Here red sandstone meets Islamic calligraphy, presiding over the sovereign heartbeat of modern India.',
    routeLink: '/state/delhi'
  },
  {
    step: 2,
    id: 'jaipur',
    stateId: 'rajasthan',
    title: 'Jaipur: The Chivalric Pink Citadel',
    subtitle: 'Astronomical Genius of Maharaja Sawai Jai Singh II',
    state: 'Rajasthan',
    lat: 26.9124,
    lng: 75.7873,
    ...(() => { const p = geoXY(26.9124, 75.7873); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Amber_palace%2C_Jaipur.jpg/1920px-Amber_palace%2C_Jaipur.jpg',
    narrative: 'Planned strictly on Vastu Shastra grid principles in 1727. Encompasses Amer’s mirror palaces, Jantar Mantar’s stone sundials, and Hawa Mahal’s 953 honeycomb windows.',
    dynasty: 'Kachwaha Rajput Dynasty',
    century: '18th Century CE',
    mustSee: 'Amer Fort, Hawa Mahal, Jantar Mantar & Pyaaz Kachori',
    audioText: 'You arrive in Jaipur, where terracotta-pink walls embrace Rajput honour and astronomical brilliance carved into colossal stone instruments.',
    routeLink: '/state/rajasthan'
  },
  {
    step: 3,
    id: 'varanasi',
    stateId: 'uttar-pradesh',
    title: 'Varanasi: The Luminous City of Light',
    subtitle: 'Where Shiva Smiled Upon the Cosmic River',
    state: 'Uttar Pradesh',
    lat: 25.3176,
    lng: 83.0062,
    ...(() => { const p = geoXY(25.3176, 83.0062); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1920px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg',
    narrative: 'Mark Twain noted: "Older than history, older than tradition, older even than legend, and looks twice as old as all of them put together." Sacred Ganga Aarti at Dashashwamedh.',
    dynasty: 'Kashi Kingdom & Eternal Vedic Tirtha',
    century: '1500 BCE - Present',
    mustSee: 'Subah-e-Banaras, Kashi Vishwanath & Evening Maha Aarti',
    audioText: 'Feel the chanting of the Rigveda echoing over 84 riverfront ghats. Varanasi is the spiritual compass of Bharat where life and transcendence meet.',
    routeLink: '/state/uttar-pradesh'
  },
  {
    step: 4,
    id: 'hampi',
    stateId: 'karnataka',
    title: 'Hampi: The Golden Empire of Vijayanagara',
    subtitle: 'Where Granite Boulders Speak Medieval Poetry',
    state: 'Karnataka',
    lat: 15.3350,
    lng: 76.4600,
    ...(() => { const p = geoXY(15.3350, 76.4600); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Stone_Chariot_at_Vittala_Temple%2C_Hampi.jpg/1920px-Stone_Chariot_at_Vittala_Temple%2C_Hampi.jpg',
    narrative: 'In the 16th century, Hampi was the second largest city in the world. Persian traveler Abdur Razzaq wrote: "The pupil of the eye has never seen a place like it on earth."',
    dynasty: 'Sangama, Saluva, Tuluva & Aravidu Dynasties',
    century: '14th - 16th Century CE',
    mustSee: 'Vittala Stone Chariot, Virupaksha Temple & Coracle ride',
    audioText: 'Witness the towering monoliths of Hampi on the banks of Tungabhadra, where diamonds were once sold in open street bazaars.',
    routeLink: '/state/karnataka'
  },
  {
    step: 5,
    id: 'kerala',
    stateId: 'kerala',
    title: 'Kerala: The Emerald Spice Coast',
    subtitle: 'Ayurvedic Sanctuaries & Marine Silk Route',
    state: 'Kerala',
    lat: 9.9312,
    lng: 76.2673,
    ...(() => { const p = geoXY(9.9312, 76.2673); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/1920px-Alappuzha_Boat_Beauty_W.jpg',
    narrative: 'Ancient Muziris trade port welcomed Phoenicians, Romans, and Arabs for cardamom and black gold pepper. Home to Kathakali dance, Kalaripayattu martial arts, and backwater serenity.',
    dynasty: 'Chera Empire, Zamorins & Travancore Royalty',
    century: '3rd Century BCE - 19th Century CE',
    mustSee: 'Houseboat cruise, Kathakali recital & Padmanabhaswamy Temple',
    audioText: 'Surrender to the swaying coconut palms and monsoon rhythm of Kerala, where holistic healing and classical dance have flourished unbroken.',
    routeLink: '/state/kerala'
  },
  {
    step: 6,
    id: 'meghalaya',
    stateId: 'meghalaya',
    title: 'Meghalaya: The Living Root Bridges',
    subtitle: 'Where Clouds Dwell and Trees Are Engineered by Elders',
    state: 'Meghalaya',
    lat: 25.2016,
    lng: 91.9056,
    ...(() => { const p = geoXY(25.2016, 91.9056); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Mawlynnong_-_Cleanest_village_of_Asia.jpg/1920px-Mawlynnong_-_Cleanest_village_of_Asia.jpg',
    narrative: 'Deep in wet subtropical canyons, the Khasi people train aerial roots of rubber fig trees across rushing torrential rivers, creating living suspension bridges that strengthen with age.',
    dynasty: 'Indigenous Khasi & Jaintia Matrilineal Chieftaincies',
    century: '500+ Years Living Tradition',
    mustSee: 'Nohkalikai Falls, Double Decker Root Bridge & Mawlynnong',
    audioText: 'Breathe the pure mountain mist of Meghalaya, where sacred groves remain untouched and nature is treated as family.',
    routeLink: '/state/meghalaya'
  },
  {
    step: 7,
    id: 'ladakh',
    stateId: 'ladakh',
    title: 'Ladakh: The Celestial Throne of the Himalayas',
    subtitle: 'High Altitude Monasteries & Stargazing Frontiers',
    state: 'Ladakh',
    lat: 34.1526,
    lng: 77.5771,
    ...(() => { const p = geoXY(34.1526, 77.5771); return { x: p.cx, y: p.cy }; })(),
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Pangong_Tso_Lake_Ladakh.jpg/1920px-Pangong_Tso_Lake_Ladakh.jpg',
    narrative: 'The Land of High Passes on the ancient Silk Route. Wind-carved moonscapes dotted with whitewashed chortens, fluttering prayer flags, and monks chanting Tibetan sutras at dawn.',
    dynasty: 'Namgyal Dynasty of Maryul',
    century: '10th Century CE - Present',
    mustSee: 'Hemis Festival, Thiksey Gompa, Khardung La & Pangong Lake',
    audioText: 'Stand atop the crown of India in Ladakh, where prayer flags carry blessings to every corner of the cosmos under indigo Himalayan skies.',
    routeLink: '/state/ladakh'
  }
];
