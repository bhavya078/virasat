import { CulturalExperience } from '../types';

export const CULTURAL_EXPERIENCES: CulturalExperience[] = [
  {
    id: 'garba',
    name: 'Garba of Gujarat: UNESCO Intangible Heritage',
    slug: 'garba',
    category: 'dance',
    state: 'Gujarat',
    region: 'Statewide',
    originCentury: 'Ancient antiquity (Vedic root in Garbha Deep)',
    keyInstrumentsOrMaterials: ['Dhol', 'Dholak', 'Zanj', 'Shehnai'],
    description: 'A devotional circular folk dance performed during the nine nights of Navratri around a perforated earthen pot containing an oil lamp (Garbha Deep) or an image of Goddess Amba. Symbolizes the cyclical nature of cosmic time, birth, and rebirth.',
    masterArtisansOrExponents: ['Traditional village guilds of Saurashtra & North Gujarat', 'Atul Purohit', 'Hemant Chauhan'],
    highlights: ['Recognized as UNESCO Intangible Cultural Heritage in 2023', 'Up to 50,000 dancers moving in mesmerizing synchrony in Vadodara', 'Two-beat, three-beat (Tran Tali), and revolving footwork'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Garba_%28dance%29.jpg/1920px-Garba_%28dance%29.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Gagra_choli.jpg/1920px-Gagra_choli.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Traditional_Folk_dance_garba_dress.jpg/1920px-Traditional_Folk_dance_garba_dress.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/14/UWoB2011.jpg'
    ]
  },
  {
    id: 'bharatanatyam',
    name: 'Bharatanatyam: Classical Temple Dance of Tamil Nadu',
    slug: 'bharatanatyam',
    state: 'Tamil Nadu',
    region: 'Thanjavur, Chennai, Chidambaram',
    originCentury: '2nd Century BCE (Codified in Natyashastra)',
    keyInstrumentsOrMaterials: ['Mridangam', 'Nattuvangam (Cymbals)', 'Flute', 'Violin', 'Veena'],
    description: 'The oldest classical dance tradition of India, originally performed by Devadasis in Hindu temples of Tamil Nadu. Characterized by a fixed upper torso, bent knees (Aramandi), intricate rhythmic footwork (Adavus), and expressive eye and hand mudras (Abhinaya).',
    masterArtisansOrExponents: ['Rukmini Devi Arundale', 'Padma Subrahmanyam', 'Yamini Krishnamurthy'],
    highlights: ['Strictly follows the ancient treatise Natyashastra of Bharata Muni', 'Chidambaram Nataraja Temple features 108 Karanas carved in stone', 'Geometric lines, crisp footwork, and spiritual bhakti repertoire'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Murugashankari_Leo.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/A_girl_performing_a_Bharatanatyam_dance_at_a_Pongal_Festival_in_Namakkal%2C_Tamil_Nadu%2C_India.jpg/1920px-A_girl_performing_a_Bharatanatyam_dance_at_a_Pongal_Festival_in_Namakkal%2C_Tamil_Nadu%2C_India.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Bharatanatyam_Mudras_-_Learn_Asamyuta_Hasta_Viniyoga_%28Video_Lesson_for_Beginners%29_2013.webm/1280px--Bharatanatyam_Mudras_-_Learn_Asamyuta_Hasta_Viniyoga_%28Video_Lesson_for_Beginners%29_2013.webm.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Bharatanatyam_danseuse.jpg'
    ]
  },
  {
    id: 'kathak',
    name: 'Kathak: The Storytelling Classical Dance',
    slug: 'kathak',
    state: 'Uttar Pradesh',
    region: 'Lucknow, Varanasi, Jaipur Gharanas',
    originCentury: '4th Century BCE (Origin from ancient Kathakars)',
    keyInstrumentsOrMaterials: ['Tabla', 'Pakhawaj', 'Sarangi', 'Ghungroos (Over 200 ankle bells)'],
    description: 'Derived from the Sanskrit word Katha (story), Kathak originated with traveling bards in northern Indian temples who narrated epics using song and movement. Under Mughal and Awadh royal patronage, it developed breathtaking lightning spins (Chakkars) and delicate subtle expressions.',
    masterArtisansOrExponents: ['Pandit Birju Maharaj', 'Sitara Devi', 'Shambhu Maharaj', 'Saswati Sen'],
    highlights: ['Padhant: Reciting complex rhythmic syllables (bols) before dancing them', 'Dancers wear 150 to 200 brass bells on each ankle with precise micro-control', 'Gharana styles: Lucknow (grace & abhinaya), Jaipur (speed & spins), Banaras'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Kathak_contemporary_03.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Kathak_3511900193_986f6440f6_b_retouched.jpg/1920px-Kathak_3511900193_986f6440f6_b_retouched.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Kathak_Dancers_Namrata_Rai_%26_Vishal_Krishna.jpg/1920px-Kathak_Dancers_Namrata_Rai_%26_Vishal_Krishna.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Kathak_Duet_Performance_%285%29.jpg/1920px-Kathak_Duet_Performance_%285%29.jpg'
    ]
  },
  {
    id: 'kathakali',
    name: 'Kathakali: The Classical Dance Drama of Kerala',
    slug: 'kathakali',
    state: 'Kerala',
    region: 'Central Kerala',
    originCentury: '17th Century CE (Kottarakkara Thampuran)',
    keyInstrumentsOrMaterials: ['Chenda', 'Maddalam', 'Chengila gong', 'Elathalam cymbals'],
    description: 'A stylized classical dance-drama noted for its elaborate face makeup (Chutti), towering headgear (Kireetam), billowing skirts, and non-verbal storytelling executed entirely through facial muscle control (Navarasas) and codified hand gestures (Mudras).',
    masterArtisansOrExponents: ['Kalamandalam Gopi', 'Kalamandalam Ramankutty Nair', 'Guru Kunju Kurup'],
    highlights: ['Makeup takes over 4 hours using natural mineral stones and rice paste', 'Character categories: Paccha (noble heroes), Kathi (villains), Thadi (bearded warriors), Kari (demons)', 'Actors communicate without speaking a single word on stage'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Kathakali_-Play_with_Kaurava.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/f/f9/Peking_Opera_Bao.jpg/1920px-Peking_Opera_Bao.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/MINUKKA%2C_the_feminine_character_of_Kathakali.jpg/1920px-MINUKKA%2C_the_feminine_character_of_Kathakali.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Chenda_1.JPG/1920px-Chenda_1.JPG'
    ]
  },
  {
    id: 'kuchipudi',
    name: 'Kuchipudi: Dance-Drama of Andhra Pradesh',
    slug: 'kuchipudi',
    state: 'Andhra Pradesh',
    region: 'Kuchipudi Village, Krishna District',
    originCentury: '10th Century CE (Organized by Siddhendra Yogi in 14th C)',
    keyInstrumentsOrMaterials: ['Mridangam', 'Cymbals', 'Veena', 'Flute', 'Brass plate (Tarangam)'],
    description: 'Originating in the village of Kuchelapuram, this classical dance-drama blends fast-paced footwork, dramatic character dialogue, and the famous Tarangam where the dancer balances gracefully on the rim of a raised brass plate holding a pot of water on the head.',
    masterArtisansOrExponents: ['Yamini Krishnamurthy', 'Raja and Radha Reddy', 'Vempati Chinna Satyam'],
    highlights: ['Tarangam: Dancing rhythmically while balancing on the edges of a brass plate', 'Bhamakalapam: Dramatic narrative piece portraying Queen Satyabhama’s love for Krishna', 'Historically performed by Brahmin male actors (Bhagavathalu)'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Kuchipudi_Performer_DS.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Dance_.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Flickr_-_dalbera_-_Danseuses_de_Kuchipudi_%28mus%C3%A9e_Guimet%29.jpg/1920px-Flickr_-_dalbera_-_Danseuses_de_Kuchipudi_%28mus%C3%A9e_Guimet%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Kuchipudi_Dancer%2C_Nitya_Yelamanchili%2C_Tarangam.jpg/1920px-Kuchipudi_Dancer%2C_Nitya_Yelamanchili%2C_Tarangam.jpg'
    ]
  },
  {
    id: 'mohiniyattam',
    name: 'Mohiniyattam: The Dance of the Celestial Enchantress',
    slug: 'mohiniyattam',
    state: 'Kerala',
    region: 'South & Central Kerala',
    originCentury: '16th Century CE (Revived by Maharaja Swathi Thirunal)',
    keyInstrumentsOrMaterials: ['Edakka drum', 'Mridangam', 'Violin', 'Veena', 'Kuzhithalam'],
    description: 'A solo classical dance performed exclusively by women, symbolizing Mohini, the celestial enchantress avatar of Lord Vishnu. Characterized by graceful, swaying body movements reminiscent of palm trees and ocean waves, draped in white and gold Kasavu sarees.',
    masterArtisansOrExponents: ['Kalamandalam Kalyanikutty Amma', 'Sunanda Nair', 'Bharati Shivaji'],
    highlights: ['Swaying movements evoking the backwaters and coconut fronds of Kerala', 'Performed exclusively in white Kasavu sarees with pleated gold borders', 'Accompanied by Sopana Sangeetham musical style and the Edakka hourglass drum'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/ANIMA_VP.jpg/1920px-ANIMA_VP.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Indian_classical_dance_by_Shagil_Kannur.jpg/1920px-Indian_classical_dance_by_Shagil_Kannur.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Mohiniyattam_Performance_in_Kerala_Bhavan%27s_Laying_the_Foundation_Stone_Event_02.jpg/1920px-Mohiniyattam_Performance_in_Kerala_Bhavan%27s_Laying_the_Foundation_Stone_Event_02.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Mohiniyattam_at_Kerala_School_Kalolsavam_2019_02.jpg/1920px-Mohiniyattam_at_Kerala_School_Kalolsavam_2019_02.jpg'
    ]
  },
  {
    id: 'odissi',
    name: 'Odissi: Classical Sculpture in Motion',
    slug: 'odissi',
    state: 'Odisha',
    region: 'Bhubaneswar, Puri, Cuttack',
    originCentury: '2nd Century BCE (Udayagiri Cave inscriptions)',
    keyInstrumentsOrMaterials: ['Mardala drum', 'Flute', 'Sitar', 'Gini cymbals', 'Manjira'],
    description: 'Carved directly from the stone sculptures of Konark and Jagannath temples, Odissi is distinguished by its two foundational postures: Chowk (a square masculine stance) and Tribhanga (a three-bend feminine S-shaped curve of the head, torso, and hips).',
    masterArtisansOrExponents: ['Guru Kelucharan Mohapatra', 'Sanjukta Panigrahi', 'Madhavi Mudgal'],
    highlights: ['Tribhanga: S-curve posture mirroring classical sculptures on temple walls', 'Dancers wear traditional Tarakasi silver filigree crown (Tahia) made of sola pith', 'Rooted in the ancient temple service of the Mahari temple dancers and Gotipua boys'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Odissi_dance_at_Nishagandi_Dance_Festival_2024_%28207%29.jpg/1920px-Odissi_dance_at_Nishagandi_Dance_Festival_2024_%28207%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/4/4a/Mrutyuh.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Kasturi_Pattanaik-Photo-3.jpg/1920px-Kasturi_Pattanaik-Photo-3.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Konark_Sun_Temple_Wheel.jpg/1920px-Konark_Sun_Temple_Wheel.jpg'
    ]
  },
  {
    id: 'manipuri-dance',
    name: 'Manipuri Raas Leela: The Sacred Devotional Dance',
    slug: 'manipuri-dance',
    state: 'Manipur',
    region: 'Imphal Valley',
    originCentury: '18th Century CE (King Bhagyachandra)',
    keyInstrumentsOrMaterials: ['Pung (cylindrical drum)', 'Kartal cymbals', 'Pena string lute', 'Flute'],
    description: 'A sacred Vaishnavite dance expressing the divine love of Radha, Krishna, and the Gopis. Dancers wear the Kumil—a stiff, bell-shaped embroidered skirt adorned with sequins and translucent veil—moving with serpentine, weightless grace.',
    masterArtisansOrExponents: ['Guru Bipin Singh', 'Jhaveri Sisters (Darshana, Nayana, Suverna, Ranjana)'],
    highlights: ['Dancers float without any stomping of feet, moving with ethereal lightness', 'Kumil: Barrel-shaped mirrored skirt engineered to hold its structure while revolving', 'Pung Cholom: Acrobatic drum dance where male dancers leap while playing drums'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/A_group_of_musicians_and_instruments_at_Jagoi%2C_the_Manipuri_dance.jpg/1920px-A_group_of_musicians_and_instruments_at_Jagoi%2C_the_Manipuri_dance.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Manippuri_dance_of_India_by_Shagil_Kannur.jpg/1920px-Manippuri_dance_of_India_by_Shagil_Kannur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Manipuri_Dance.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Manipuri_dance_of_India_by_Shagil_Kannur_01.jpg/1920px-Manipuri_dance_of_India_by_Shagil_Kannur_01.jpg'
    ]
  },
  {
    id: 'bhangra',
    name: 'Bhangra: The High-Energy Folk Dance of Punjab',
    slug: 'bhangra',
    state: 'Punjab',
    region: 'Majha, Doaba, Malwa',
    originCentury: '14th Century CE (Harvest folk celebration)',
    keyInstrumentsOrMaterials: ['Dhol drum', 'Chimta (Tongs)', 'Algoza (Double flute)', 'Bugchu'],
    description: 'An exuberant folk dance originally performed by Punjabi farmers to celebrate the spring harvest of wheat (Baisakhi). Features athletic leaps, shoulder shrugs, synchronized claps, and thunderous dhol percussion beats that have become a global music phenomenon.',
    masterArtisansOrExponents: ['Traditional village Akhadas of Punjab', 'Ustad Lal Chand Yamla Jatt'],
    highlights: ['Energetic boliyan verses sung to build crescendo tempos', 'Saap: Expanding and contracting wooden lattice clappers manipulated in unison', 'Universal symbol of Punjabi celebration, joy, and agricultural vigor'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Bagurumba_Dance_%28Butterfly_Dance_of_the_Bodo_People%29.webm/1920px--Bagurumba_Dance_%28Butterfly_Dance_of_the_Bodo_People%29.webm.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Bangda_dance.jpg/1920px-Bangda_dance.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Bhangra-dance.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/North_American_Live_Bhangra_Team.jpg/1920px-North_American_Live_Bhangra_Team.jpg'
    ]
  },
  {
    id: 'ghoomar',
    name: 'Ghoomar: Royal Whirl of the Desert',
    slug: 'ghoomar',
    state: 'Rajasthan',
    region: 'Marwar, Mewar & Shekhawati',
    originCentury: 'Originally developed by the Bhil tribe, later adopted by Rajput royal courts',
    keyInstrumentsOrMaterials: ['Dholak', 'Nagada', 'Shehnai', 'Manjira'],
    description: 'A graceful royal dance performed by women wearing expansive circular ghagra skirts. Dancers twirl smoothly clockwise and anti-clockwise (ghoomna) while covering their faces with translucent veils (Ghoonghat), creating a kaleidoscopic blooming flower effect.',
    masterArtisansOrExponents: ['Rajmata Goverdhan Kumari of Santrampur', 'Maharani of Jaipur court traditions'],
    highlights: ['The 80-kali flowing ghagra skirt expands outward into a spinning umbrella', 'Perched water pots or brass plates balanced on head while spinning', 'Ranked 4th in the world’s top local dances by international travel surveys'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg/1920px-Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f6/Ghoomar.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Ghoomar_Dancer_in_Chokhi_Rajasthan.jpg/1920px-Ghoomar_Dancer_in_Chokhi_Rajasthan.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/71/Rajput_Woman_performing_Ghoomar_01.jpg'
    ]
  },
  {
    id: 'chhau',
    name: 'Chhau Dance: UNESCO Martial Folk Dance',
    slug: 'chhau',
    state: 'West Bengal, Jharkhand & Odisha',
    region: 'Purulia, Seraikela, Mayurbhanj',
    originCentury: 'Indigenous martial arts origin (Pre-medieval)',
    keyInstrumentsOrMaterials: ['Dhol', 'Dhumsa (Huge kettle drum)', 'Mohuri (reed pipe)', 'Shehnai'],
    description: 'A semi-classical Indian dance that synthesizes martial arts, acrobatics, and athletic combat reenactments of scenes from the Mahabharata and Ramayana. Dancers in Purulia and Seraikela wear giant handcrafted paper-mâché masks adorned with feathers and tinsel.',
    masterArtisansOrExponents: ['Gambhir Singh Mura (Purulia mask master)', 'Guru Shashadhar Acharya'],
    highlights: ['Inscribed on UNESCO Representative List of Intangible Cultural Heritage', 'Purulia masks hand-molded using clay from Kasai river and papier-mâché', 'Combat movements mimic tigers, peacocks, and galloping war horses'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Chhau_Nritya_%281%29.jpg/1920px-Chhau_Nritya_%281%29.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Chhau_Dance_of_Purulia.ogv/500px--Chhau_Dance_of_Purulia.ogv.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Chhau_Dance_of_Purulia_-_Documentary_-_EZCC.webm/1280px--Chhau_Dance_of_Purulia_-_Documentary_-_EZCC.webm.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Chhau_Dancers.jpg/1920px-Chhau_Dancers.jpg'
    ]
  },
  {
    id: 'yakshagana',
    name: 'Yakshagana: Coastal Karnataka’s Mythological Theatre',
    slug: 'yakshagana',
    state: 'Karnataka',
    region: 'Coastal & Malenadu Karnataka',
    originCentury: '11th - 16th Century CE (Bhakti movement)',
    keyInstrumentsOrMaterials: ['Chande (High-pitched vertical drum)', 'Maddale drum', 'Taala cymbals'],
    description: 'An all-night traditional theatre form combining dance, music, improvised spoken dialogue, and dazzling face paint with towering headgear (Mundasu). Enacts mythological stories from the Puranas with high-energy footwork and acrobatic spins.',
    masterArtisansOrExponents: ['Keremane Shivarama Hegde', 'Kumble Sundar Rao', 'Chittani Ramachandra Hegde'],
    highlights: ['Performances traditionally begin at dusk and continue until dawn in open fields', 'Himmela (background musical troupe) and Mummela (foreground actors/dancers)', 'Distinguished styles: Badagutittu (Northern acrobatics) and Tenkutittu (Southern rhythm)'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Badagu_vesha.jpg/1920px-Badagu_vesha.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/c/cf/Jambavanta.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Chikkamela.webm/1280px--Chikkamela.webm.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/DSC_0447yakshagana.jpg/1920px-DSC_0447yakshagana.jpg'
    ]
  },
  {
    id: 'lavani',
    name: 'Lavani: The Vibrant Rhythm of Maharashtra',
    slug: 'lavani',
    state: 'Maharashtra',
    region: 'Solapur, Kolhapur, Pune',
    originCentury: '18th Century CE (Peshwa Empire)',
    keyInstrumentsOrMaterials: ['Dholki drum', 'Manjira', 'Tuntune (single-string pluck)', 'Daf'],
    description: 'A combination of traditional song and dance that is noted for its powerful rhythm and sensuous expressions, traditionally performed by women draped in nine-yard Nauvari sarees. Played a historic role in boosting morale of soldiers during Maratha military campaigns.',
    masterArtisansOrExponents: ['Surekha Punekar', 'Meghna Erande', 'Yamunabai Waikar'],
    highlights: ['Fast-paced 16-beat Dholki patterns matched with lightning-quick footwork', 'Baithakichi Lavani (Sitting contemplative style) and Phadachi Lavani (Theatrical public style)', 'Lyrical poetry tackling social critique, romance, and political commentary'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Lavani_1.jpg/1920px-Lavani_1.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/9/97/Lavani_Dancer.jpg',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'kalaripayattu',
    name: 'Kalaripayattu: Mother of All Martial Arts',
    slug: 'kalaripayattu',
    state: 'Kerala',
    region: 'Malabar & Central Kerala',
    originCentury: '3rd Century BCE (Ancient Sangam era)',
    keyInstrumentsOrMaterials: ['Urumi (Flexible whip-sword)', 'Val (Broadsword)', 'Paricha (Shield)', 'Kettukari (Staff)', 'Ottakol (Curved wooden horn)'],
    description: 'The oldest surviving martial art in the world, practiced in an earthen pit training hall called Kalari. Includes unarmed combat, strikes to 108 vital pressure points (Marmas), animal fighting postures, and razor-sharp flexible steel swords.',
    masterArtisansOrExponents: ['Meenakshi Amma (Padma Shri recipient)', 'CVN Kalari Sangham'],
    highlights: ['Legend records Buddhist monk Bodhidharma carried Kalaripayattu techniques to China to birth Shaolin Kung Fu', 'Marmavidya: Knowledge of 108 vital human pressure points for healing and self-defense', 'Urumi: Deadly 5-foot-long double-edged flexible steel ribbon sword'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Kalari_Pattu.jpg/1920px-Kalari_Pattu.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Kalari_poothara_pooja_-_cropped.jpg/1920px-Kalari_poothara_pooja_-_cropped.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e4/Kottakkal_Kanaran_Gurukkal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Urumi_in_Kalaripayattu.webm/500px--Urumi_in_Kalaripayattu.webm.jpg'
    ]
  },
  {
    id: 'theyyam',
    name: 'Theyyam: Where Men Transform into Gods',
    slug: 'theyyam',
    state: 'Kerala',
    region: 'Malabar (Kannur, Kasaragod)',
    originCentury: 'Neolithic prehistoric antiquity (Over 2,000 years)',
    keyInstrumentsOrMaterials: ['Chenda', 'Thudi', 'Kuzhal', 'Curd-stone white face paint', 'Coconut frond crowns'],
    description: 'An ancient ritual dance where performers belonging to subaltern communities undergo hours of trance, elaborate natural face painting, and towering headgear up to 50 feet high. Once the makeup is completed and the mirror is held, the dancer is believed to become the living embodiment of the deity.',
    masterArtisansOrExponents: ['Vannathan, Malayan, and Mavilan hereditary lineages of Malabar'],
    highlights: ['Over 400 distinct Theyyams exist, including Muchilot Bhagavathi and Gulikan', 'Dancers leap through burning wood ember bonfires without receiving third-degree burns', 'Village folk flock to receive prophetic personal blessings from the dancing deity'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/20240303141951_MG_6394_%281%29.jpg/1920px-20240303141951_MG_6394_%281%29.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Kathivanoor_Veeran_Theyyam_Eripuram_Kannur.jpg/1920px-Kathivanoor_Veeran_Theyyam_Eripuram_Kannur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/56/Muthappan.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Theyyam_of_Kerala_by_Shagil_Kannur_%2839%29.jpg/1920px-Theyyam_of_Kerala_by_Shagil_Kannur_%2839%29.jpg'
    ]
  },
  {
    id: 'pattachitra',
    name: 'Pattachitra: Sacred Scroll Paintings of Raghurajpur',
    slug: 'pattachitra',
    state: 'Odisha & West Bengal',
    region: 'Raghurajpur Heritage Crafts Village near Puri',
    originCentury: '5th Century BCE (Temple ritual art for Jagannath)',
    keyInstrumentsOrMaterials: ['Treated cotton cloth canvas (Patta)', 'Tamarind seed glue', 'Crushed conch shell white pigment', 'Lamp black', 'Hingula red stone'],
    description: 'An ancient art form of cloth-based scroll painting noted for its intricate details, mythological narratives of Lord Jagannath and Krishna, sharp black ink outlines, and 100% natural organic mineral and vegetable dyes prepared using centuries-old recipes.',
    masterArtisansOrExponents: ['Chitrakar family guild of Raghurajpur', 'Raghunath Mohapatra'],
    highlights: ['Every family in the heritage village of Raghurajpur is an artisan practicing this craft', 'Canvas made by bonding layers of cotton cloth with tamarind seed gum and powdered chalk stone', 'Brushes crafted using fine hair from mongoose tails and mouse fur for microscopic detailing'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'madhubani-art',
    name: 'Madhubani (Mithila) Painting: Ancient Folk Art',
    slug: 'madhubani-art',
    state: 'Bihar',
    region: 'Mithila Region (Madhubani, Darbhanga, Ranti)',
    originCentury: 'Epic Antiquity (Traced to King Janaka during Sita’s wedding)',
    keyInstrumentsOrMaterials: ['Handmade bamboo nibs', 'Matchsticks', 'Natural colors (turmeric, indigo, marigold, soot)'],
    description: 'Practiced by women in the Mithila region of Bihar, Madhubani paintings are characterized by complex geometric patterns, two-dimensional figures, absence of empty space (filled with birds, fish, and trees of life), and eye-popping natural pigment hues.',
    masterArtisansOrExponents: ['Ganga Devi', 'Sita Devi', 'Mahasundari Devi', 'Dulari Devi'],
    highlights: ['Originally painted directly on fresh mud and cow-dung plastered village walls (Kohbar)', 'Natural pigments: Yellow from turmeric, blue from indigo, black from chimney soot and cow dung', 'Five distinct styles: Bharni, Katchni, Tantrik, Godna, and Kohbar'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Madhubani_Mahavidyas.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'kalamkari',
    name: 'Kalamkari: Ancient Pen-Drawn Textile Art',
    slug: 'kalamkari',
    state: 'Andhra Pradesh',
    region: 'Srikalahasti & Machilipatnam',
    originCentury: '3,000 BCE (Traced in Mohenjo-Daro textile remnants)',
    keyInstrumentsOrMaterials: ['Tamarind bamboo reed pen (Kalam)', 'Myrobalan nut wash', 'Fermented jaggery-iron solution', 'Alum mordant'],
    description: 'Kalamkari (Kalam = Pen, Kari = Craftsmanship) is an ancient style of hand-drawn or block-printed cotton textile art. Srikalahasti style uses a bamboo pen to draw temple tapestries freehand, while Machilipatnam uses hand-carved wooden blocks with natural indigo and madder dyes.',
    masterArtisansOrExponents: ['J. Niranjan', 'Srikalahasti Temple Artisan Guilds'],
    highlights: ['Requires up to 23 laborious treatment stages including buffalo milk washes to prevent color bleeding', 'Black outlines drawn using fermented rusted iron nails soaked in molasses and water', 'Dyes derived 100% from pomegranate rinds, madder roots, and indigo leaves'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Dashavatara_de_kalamkari%2C_British_Museum.jpg/1920px-Dashavatara_de_kalamkari%2C_British_Museum.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/f9/Kalamkar-03.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Kalamkari_painting.jpg/1920px-Kalamkari_painting.jpg'
    ]
  },
  {
    id: 'warli-art',
    name: 'Warli Folk Painting: Primitive Harmony with Nature',
    slug: 'warli-art',
    state: 'Maharashtra',
    region: 'Sahyadri Range, Palghar & Thane',
    originCentury: '10th Century CE (Traced to 2,500 BCE Neolithic traditions)',
    keyInstrumentsOrMaterials: ['Bamboo stick brush', 'Rice paste white pigment', 'Red ochre mud wall (Geru)', 'Water & gum binder'],
    description: 'An indigenous tribal art form created by the Warli tribe using rudimentary geometric shapes: circle (sun and moon), triangle (mountains and trees), and square (sacred enclosure of goddess Palaghat). Depicts daily agrarian life, fishing, Tarpa dances, and communal unity without linear perspective.',
    masterArtisansOrExponents: ['Jivya Soma Mashe (Padma Shri)', 'Balu Jivya Mashe'],
    highlights: ['Uses only three geometric shapes: circle, triangle, and square', 'Tarpa Dance is the centerpiece: Men and women holding hands in an infinite spiral around the trumpeter', 'Paintings do not depict mythological deities but human harmony with Mother Nature'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Painted_prayers%2C_Warli_paintings%2C_at_Sanskriti_Kendra%2C_Anandagram%2C_New_Delhi.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/54/Stamp_of_India_-_2012_-_Colnect_392500_-_Warli_Painting_Maharashtra.jpeg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Warli_Paintings%2C_Mysore.jpg/1920px-Warli_Paintings%2C_Mysore.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Warli_painting_in_Warli.JPG'
    ]
  },
  {
    id: 'gond-art',
    name: 'Gond Tribal Art: Lines, Dots and Dreaming Spirits',
    slug: 'gond-art',
    state: 'Madhya Pradesh',
    region: 'Dindori, Mandla, Patangarh',
    originCentury: 'Prehistoric origin (1,400+ years antiquity)',
    keyInstrumentsOrMaterials: ['Hand-drawn pens', 'Fine liner brushes', 'Natural earth soils', 'Plant saps', 'Vibrant acrylics'],
    description: 'Practiced by the Gond tribe of central India, Gond art is founded on the animist belief that seeing a good image brings good luck. Every artist develops an individual signature filler pattern (dots, fine dashes, scales, or drops) that brings trees, birds, flying deer, and forest spirits to life.',
    masterArtisansOrExponents: ['Jangarh Singh Shyam (Pioneer of modern Gond art)', 'Venkat Raman Singh Shyam', 'Bhajju Shyam'],
    highlights: ['Signature patterns: Each master artisan has their own unique texture motif', 'Tree of Life: Central philosophical symbol linking underworld, earth, and heavens', 'Exhibited in premier museums including the Pompidou Centre in Paris and British Museum'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Gond_Mahal_S-MP-31_%289%29.jpg/1920px-Gond_Mahal_S-MP-31_%289%29.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Gond_art_IMG_8707.jpg/1920px-Gond_art_IMG_8707.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Kumuram_Bheem_statue.jpg/1920px-Kumuram_Bheem_statue.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Saila_and_Karma_dance_by_Gonds.jpg'
    ]
  },
  {
    id: 'phulkari',
    name: 'Phulkari: The Flower Embroidery of Punjab',
    slug: 'phulkari',
    state: 'Punjab',
    region: 'Amritsar, Patiala, Bathinda',
    originCentury: '15th Century CE (Mentioned in Waris Shah’s Heer Ranjha)',
    keyInstrumentsOrMaterials: ['Coarse handspun Khaddar cotton cloth', 'Untwisted glossy silk thread (Pat)', 'Darning needles'],
    description: 'Phulkari (literally Flower Work) is a traditional embroidery technique practiced by Punjabi women where geometrically complex floral motifs are embroidered from the reverse side of coarse cotton Khaddar fabric using untwisted pure silk floss.',
    masterArtisansOrExponents: ['Artisan grandmother guilds of rural Punjab', 'Lajwanti (Padma Shri)'],
    highlights: ['Embroidered entirely from the reverse side of the cloth without tracing patterns', 'Bagh (Garden): The entire surface of the fabric is completely covered with silk stitches', 'Traditionally gifted by maternal grandmothers to brides during wedding ceremonies'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Contemporary_Phulkari_design.jpg/1920px-Contemporary_Phulkari_design.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/A_Phulkari_with_traditional_flower_pattern_on_unworked_background.jpg/1920px-A_Phulkari_with_traditional_flower_pattern_on_unworked_background.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Award_winning_Phulkari_embroiderer_in_Patiala_shows_the_contemporary_embroidery_technique.jpg/1920px-Award_winning_Phulkari_embroiderer_in_Patiala_shows_the_contemporary_embroidery_technique.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Close-up_of_contemporary_Phulkari_embroidery_technique_.jpg/1920px-Close-up_of_contemporary_Phulkari_embroidery_technique_.jpg'
    ]
  },
  {
    id: 'bandhani',
    name: 'Bandhani: Tie and Dye Mastery of Kutch & Rajasthan',
    slug: 'bandhani',
    state: 'Gujarat & Rajasthan',
    region: 'Jamnagar, Bhuj, Jodhpur, Jaipur',
    originCentury: '6th Century CE (Depicted in Cave 1 frescoes of Ajanta)',
    keyInstrumentsOrMaterials: ['Fine silk, georgette, and cotton', 'Cotton binding thread', 'Pointed brass nails / ring tools', 'Natural and reactive dyes'],
    description: 'One of the oldest tie-and-dye techniques in the world, Bandhani (from Sanskrit Bandha = to tie) involves plucking thousands of tiny points on fabric with fingernails and tying them tightly with waxed thread before dyeing, producing patterns like Shikari, Ekdali, and Gharchola.',
    masterArtisansOrExponents: ['Khatri Muslim community of Kutch (Padma Shri Abduljabbar Khatri)', 'Rangrez guilds of Jaipur'],
    highlights: ['A single bridal Gharchola saree can contain over 50,000 individually hand-tied knots', 'Jamnagar is globally famous for its mineral-rich water that gives Bandhani exceptionally bright red and yellow dyes', 'Ajanta Cave 1 murals show queens wearing Bandhani textiles 1,500 years ago'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Bandhani%2C_Tie_dye_dresses_drying_in_Jaipur.jpg/1920px-Bandhani%2C_Tie_dye_dresses_drying_in_Jaipur.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Bandhani_%288356667237%29.jpg/1920px-Bandhani_%288356667237%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Bandhani_%288357715298%29.jpg/1920px-Bandhani_%288357715298%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Bandhani_%288357755412%29.jpg/1920px-Bandhani_%288357755412%29.jpg'
    ]
  },
  {
    id: 'chikankari',
    name: 'Chikankari: Royal Shadow-Work Embroidery of Lucknow',
    slug: 'chikankari',
    state: 'Uttar Pradesh',
    region: 'Lucknow (Awadh Court)',
    originCentury: '17th Century CE (Patronized by Mughal Empress Nur Jahan)',
    keyInstrumentsOrMaterials: ['Fine muslin, organza, and mulmul', 'White cotton thread', 'Woodblock stamping', 'Embroidery needles'],
    description: 'A delicate and artful shadow-work embroidery technique of Lucknow, traditionally executed in white thread on white sheer cotton muslin. Includes 32 distinct stitches such as Tepchi, Bakhiya (shadow work), Phanda (millet knot), and Jaali (open-mesh lattice made without cutting the fabric).',
    masterArtisansOrExponents: ['Master craftsmen of Chowk, Lucknow', 'Hasan Mirza', 'Ustad Faiyaz Khan'],
    highlights: ['Jaali stitch: The fabric threads are carefully parted with a blunt needle without cutting a single thread', 'Incorporates 32 unique stitches, of which 6 are foundational to Awadhi court aesthetics', 'Over 250,000 women artisans in rural Lucknow sustain their families through this craft'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/en/4/47/Kaitag.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Chikan_embroidery_from_the_back%2C_Lucknow.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Craft_Artisans_of_India_02.jpg/1920px-Craft_Artisans_of_India_02.jpg'
    ]
  },
  {
    id: 'banarasi-weaving',
    name: 'Banarasi Silk Weaving: Woven Gold of Kashi',
    slug: 'banarasi-weaving',
    state: 'Uttar Pradesh',
    region: 'Varanasi (Madanpura, Alaipura)',
    originCentury: 'Vedic Antiquity (Reached pinnacle during Mughal Akbar era)',
    keyInstrumentsOrMaterials: ['Pure mulberry silk', 'Fine gold and silver Zari threads', 'Pit looms', 'Jacquard punch cards'],
    description: 'Considered among the finest handwoven silks in the world, Banarasi sarees are famous for their gold and silver brocade (Zari), fine silk, opulent embroidery, and Mughal-inspired floral motifs like Kalga and Bel, Jhallar fringes, and Mina work.',
    masterArtisansOrExponents: ['Weavers of Madanpura and Peelo Kothi, Varanasi', 'Haji Munna', 'Bismillah Khan weavers'],
    highlights: ['A masterwork bridal Katan silk saree can take up to six months of painstaking handloom work', 'Zari was historically forged from genuine beaten gold and silver wires', 'Combines Persian floral arabesques with ancient Hindu spiritual icons'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/%27Sari%27_from_Varanasi_%28north-central_India%29%2C_silk_and_gold-wrapped_silk_yarn_with_supplementary_weft_brocade.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/20160629_044228800_iOS.jpg/1920px-20160629_044228800_iOS.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Banarasi_Sari_on_viewing_wooden_blocks_01.jpg/1920px-Banarasi_Sari_on_viewing_wooden_blocks_01.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Saree_on_display_at_Dilli_Haat.JPG/1920px-Saree_on_display_at_Dilli_Haat.JPG'
    ]
  },
  {
    id: 'kanjeevaram-silk',
    name: 'Kanjeevaram Silk: The Queen of Indian Silks',
    slug: 'kanjeevaram-silk',
    state: 'Tamil Nadu',
    region: 'Kanchipuram Temple Town',
    originCentury: '10th Century CE (Chola Dynasty & Sage Markandeya weavers)',
    keyInstrumentsOrMaterials: ['Pure mulberry silk twisted with three ply threads', 'Gold and silver dipped copper zari', 'Traditional three-shuttle looms'],
    description: 'Woven in the temple city of Kanchipuram, Kanjeevaram sarees are characterized by their heavy silk weight, vibrant contrasting borders, and motifs derived from temple stone carvings (Mayil peacock, Rudraksham, Temple towers, Malli moggu jasmine bud). Body and border are woven separately and joined seamlessly (Korvai).',
    masterArtisansOrExponents: ['Kanchipuram Cooperative Weavers Society', 'Padmashali and Devanga master weavers'],
    highlights: ['Korvai technique: The border and body are woven with separate shuttles and interlocked so tightly that if the saree tears, the border will not separate', 'Three-ply mulberry silk gives it exceptional lifetime durability and regal weight', 'Gold zari is tested for authenticity by burning a snippet to reveal pure silver residue'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Kanchipuram_sarees_%287642282772%29.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'blue-pottery-jaipur',
    name: 'Blue Pottery of Jaipur: Glazed Quartz Ceramic',
    slug: 'blue-pottery-jaipur',
    state: 'Rajasthan',
    region: 'Jaipur & Sanganer',
    originCentury: '19th Century CE (Maharaja Sawai Ram Singh II)',
    keyInstrumentsOrMaterials: ['Ground quartz stone', 'Fuller’s earth (Multani Mitti)', 'Glass cullet', 'Cobalt oxide (blue)', 'Copper oxide (turquoise)'],
    description: 'Unlike traditional pottery, Jaipur Blue Pottery uses no clay. The dough is formulated using crushed quartz stone powder, recycled glass, Multani Mitti, and natural gum. Glazed with brilliant cobalt blue and turquoise motifs of birds, peacocks, and floral arabesques.',
    masterArtisansOrExponents: ['Kripal Singh Shekhawat (Revival pioneer and Padma Shri)', 'Kripal Kumbh'],
    highlights: ['Does not use any clay whatsoever—made entirely of quartz powder and glass', 'Fired only once at low temperatures, creating delicate, translucent porcelain-like surfaces', 'Resurrected in the 1960s by master artist Kripal Singh Shekhawat'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Dr._Bhau_Daji_Lad_Museum_JEG1715.JPG/1920px-Dr._Bhau_Daji_Lad_Museum_JEG1715.JPG',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Blue_Pottery_Designer_Vase.jpg/1920px-Blue_Pottery_Designer_Vase.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Blue_Pottery_Dholak%2C_Jaipur.jpg/1920px-Blue_Pottery_Dholak%2C_Jaipur.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Blue_Pottery_Jaipur_Collection.jpg/1920px-Blue_Pottery_Jaipur_Collection.jpg'
    ]
  },
  {
    id: 'dhokra-art',
    name: 'Dhokra Metal Casting: 4,000-Year-Old Lost Wax Art',
    slug: 'dhokra-art',
    state: 'Chhattisgarh, Odisha, Jharkhand & West Bengal',
    region: 'Bastar, Kondagaon, Dhenkanal, Bikna',
    originCentury: '2,500 BCE (Mohenjo-Daro Dancing Girl bronze statue)',
    keyInstrumentsOrMaterials: ['Beeswax', 'Red clay', 'Termite hill mud', 'Brass metal scrap', 'Cow dung furnace'],
    description: 'An ancient lost-wax brass casting technique (Cire Perdue) practiced by indigenous metal-smith tribes. Because the clay mold is broken after every single firing to retrieve the metal sculpture, no two Dhokra statues in the world are ever identical.',
    masterArtisansOrExponents: ['Ghadwa craftsmen of Bastar', 'Jaidev Baghel (Padma Shri)'],
    highlights: ['Direct descendant of the technique used to cast the 4,500-year-old Dancing Girl of Mohenjo-Daro', 'Features rustic, elongated tribal figurines, elephants, horses, and musicians decorated with wire-like coils', 'Every piece is a unique 1-of-1 original because the outer clay mold is shattered during casting'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Village_lady_grinding_ants_for_her_family.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/%27Dokra%27_items_for_sale_at_the_West_Bengal_State_Handicrafts%27_Fair_in_ECO_Park%2C_New_Town%2C_Kolkata%2C_India%2C_photographed_December_10%2C_2023.jpg/1920px-%27Dokra%27_items_for_sale_at_the_West_Bengal_State_Handicrafts%27_Fair_in_ECO_Park%2C_New_Town%2C_Kolkata%2C_India%2C_photographed_December_10%2C_2023.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Dhokra.jpg/1920px-Dhokra.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Dhokra_%28Man%29.jpg/1920px-Dhokra_%28Man%29.jpg'
    ]
  },
  {
    id: 'bamboo-craft',
    name: 'Bamboo and Cane Craft of Northeast India',
    slug: 'bamboo-craft',
    state: 'Assam, Tripura, Meghalaya, Mizoram & Nagaland',
    region: 'Northeast Region',
    originCentury: 'Prehistoric indigenous heritage',
    keyInstrumentsOrMaterials: ['Muli bamboo', 'Cane stalks', 'Dao machete', 'Splitting knives'],
    description: 'Bamboo is the green gold of Northeast India, woven into the fabric of daily life. Artisans transform indigenous bamboo into architectural bridges, floating fish traps (Polo), grain baskets (Dala), fine floor mats (Sitalpati), hats (Japi), and modern sustainable furniture.',
    masterArtisansOrExponents: ['Tribal guild villages across Tripura, Assam, and Meghalaya'],
    highlights: ['Assam’s iconic Japi hat is adorned with red and white felt and woven bamboo strips', 'Tripura leads India in crafting ultra-fine bamboo sliver screens and lampshades', 'Zero-waste eco-sustainable architecture capable of earthquake flexibility'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Bamboo_forest.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/2021_Sagano_Bamboo_forest_in_Arashiyama%2C_Kyoto%2C_Japan.jpg/1920px-2021_Sagano_Bamboo_forest_in_Arashiyama%2C_Kyoto%2C_Japan.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Abucay%2CBataanjf3721_06.JPG/1920px-Abucay%2CBataanjf3721_06.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/African_Bamboo_Product_Innovation_Lab_%2812319080523%29.jpg/1920px-African_Bamboo_Product_Innovation_Lab_%2812319080523%29.jpg'
    ]
  },
  {
    id: 'rogan-art',
    name: 'Rogan Art of Nirona: Castor Oil Paint on Silk',
    slug: 'rogan-art',
    state: 'Gujarat',
    region: 'Nirona Village, Kutch',
    originCentury: '400+ years antiquity (Persian origin)',
    keyInstrumentsOrMaterials: ['Boiled castor seed oil', 'Natural mineral color pigments', 'Thin steel stylus rod (6 inches)'],
    description: 'A rare and miraculous textile painting technique preserved by a single family in Nirona village. Boiled castor oil is heated for two days until it forms a thick, sticky resinous paste mixed with mineral colors. The master artist uses a thin metal rod held above the fabric to pull glowing threads of paint into intricate floral and geometric motifs without touching the fabric.',
    masterArtisansOrExponents: ['Khatri Abdul Gafur (Padma Shri)', 'Khatri family of Nirona'],
    highlights: ['Preserved exclusively by one single family on the entire planet', 'The metal stylus never touches the cloth; the artist manipulates the thread of paint in mid-air', 'Folded in half to create an exact symmetrical mirror print on the opposite side of the cloth'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Buddhas_of_Bamiyan.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Nirmika_Rogan_Art_1.jpg/1920px-Nirmika_Rogan_Art_1.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Rogan-art-Tree-of-Life-Abdul-Gafur-Khatri-29-12-2013.jpg/1920px-Rogan-art-Tree-of-Life-Abdul-Gafur-Khatri-29-12-2013.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Rogan_Painting.jpg/1920px-Rogan_Painting.jpg'
    ]
  },
  {
    id: 'bidriware',
    name: 'Bidriware: Inlaid Silver on Blackened Metal',
    slug: 'bidriware',
    state: 'Karnataka & Telangana',
    region: 'Bidar & Hyderabad',
    originCentury: '14th Century CE (Bahmani Sultanate)',
    keyInstrumentsOrMaterials: ['Zinc and copper cast alloy', 'Pure silver wire and sheet', 'Chisels', 'Special soil from Bidar Fort courtyard'],
    description: 'A 600-year-old metal handicraft from Bidar where pure silver wire is inlaid into an alloy of zinc and copper, then blackened with a special soil found only in the unlit underground basements of the 15th-century Bidar Fort, resulting in a striking jet-black and shimmering silver contrast.',
    masterArtisansOrExponents: ['Shah Rasheed Ahmed Quadri (Padma Shri)', 'Artisan guilds of Bidar'],
    highlights: ['The jet black color is produced using soil collected only from inside the Bidar Fort ruins', 'Silver wire does not tarnish and retains its pristine white luster against the black zinc alloy forever', 'GI protected heritage handicraft admired globally for royal hookahs, vases, and jewelry boxes'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bidriware_Hookah.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Bidri_craft%2C_Hyderabad%2C_India.jpg/1920px-Bidri_craft%2C_Hyderabad%2C_India.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Making_Bidriware.jpg/1920px-Making_Bidriware.jpg'
    ]
  },
  {
    id: 'kolam',
    name: 'Kolam: Mathematical Threshold Art of South India',
    slug: 'kolam',
    state: 'Tamil Nadu & Kerala',
    region: 'South India',
    originCentury: 'Sangam Era (Over 2,000 years antiquity)',
    keyInstrumentsOrMaterials: ['Coarse rice flour powder', 'Red brick powder (Kaavi) for borders'],
    description: 'A geometric threshold drawing drawn every morning by women outside front doors using white rice flour. Formed of dots (Pulli) connected by looping continuous lines, it functions as a welcoming blessing to Goddess Lakshmi, an act of charity feeding ants and birds, and a complex mathematical knot theory exercise.',
    masterArtisansOrExponents: ['Millions of traditional South Indian homemakers and classical Kolam researchers'],
    highlights: ['Drawn with dry rice flour so tiny ants and insects are fed daily as an act of Bhootha Yajna', 'Studied by global computer scientists for its recursive fractal algorithms and array grammars', 'Margazhi month features colossal street-spanning multi-color Kolams outside temples'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Traditional_kolam.jpg/1920px-Traditional_kolam.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Color_in_authoor.jpg/1920px-Color_in_authoor.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Kk%E0%AE%95%E0%AF%8B%E0%AE%B2%E0%AE%AE%E0%AF%8D.jpg/1920px-Kk%E0%AE%95%E0%AF%8B%E0%AE%B2%E0%AE%AE%E0%AF%8D.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Scenes_from_Kollur_Mookambika_temple_-_2017_%283%29.jpg/1920px-Scenes_from_Kollur_Mookambika_temple_-_2017_%283%29.jpg'
    ]
  },
  {
    id: 'rangoli',
    name: 'Rangoli: Radiant Geometry of Divine Welcome',
    slug: 'rangoli',
    state: 'Maharashtra, Gujarat & Pan-India',
    region: 'Nationwide',
    originCentury: 'Vedic Antiquity (Chitralakshana treatise)',
    keyInstrumentsOrMaterials: ['Colored sand powder', 'Dried flower petals', 'Colored rice', 'Diya lamps'],
    description: 'An ancient decorative art drawn on courtyards and floors during Diwali and auspicious occasions. Designed with symmetrical floral, peacock, and geometric mandalas to channel positive cosmic energy and welcome deities into the household.',
    masterArtisansOrExponents: ['Sanskarti Bharati masters', 'Traditional home artists of India'],
    highlights: ['Sanskar Bharati style uses 5-finger powder dispersion to create giant vibrant street mandalas', 'Flower petal Rangolis (Pookkalam) are an integral centerpiece of Onam in Kerala', 'Never made with artificial plastics; relies on natural colored sands and flower petals'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Diya_deepak_Diwali_rangoli_in_goa.JPG',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/6/61/Rangoli.hrushikesh.3030.jpg/1920px-Rangoli.hrushikesh.3030.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/A_Beautiful_Rangoli.jpg/1920px-A_Beautiful_Rangoli.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Alpana_2.jpg'
    ]
  },
  {
    id: 'mehendi',
    name: 'Mehendi: Natural Henna Body Art',
    slug: 'mehendi',
    state: 'Rajasthan & Pan-India',
    region: 'Sojat (Henna City of India), Jaipur, Delhi',
    originCentury: 'Vedic Antiquity (Mentioned in Vedic ritual texts)',
    keyInstrumentsOrMaterials: ['Ground Lawsonia inermis (Henna) leaves', 'Eucalyptus & clove essential oils', 'Lemon-sugar syrup', 'Cellophane cones'],
    description: 'An ancient ceremonial art where paste made from the dried leaves of the henna shrub is applied in intricate lace-like patterns on hands and feet for weddings and festivals. As it oxidizes, it stains the skin a rich, cooling mahogany-crimson hue.',
    masterArtisansOrExponents: ['Sojat henna farming cooperatives', 'Master wedding henna artists of Rajasthan'],
    highlights: ['Sojat in Rajasthan supplies over 90% of India’s premium green henna powder', 'Cooling medicinal properties soothe nerves and lower body temperature during wedding stress', 'Popular belief holds that the darker the henna stain, the deeper the bond of love'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Henna_tattoo_%28Mehndi%29_at_a_wedding_in_India_01.jpg/1920px-Henna_tattoo_%28Mehndi%29_at_a_wedding_in_India_01.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Final_Mehndi_%28Henna_Tattoo%29.theora.ogv/500px--Final_Mehndi_%28Henna_Tattoo%29.theora.ogv.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Mehndi_02.JPG/1920px-Mehndi_02.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Mehndi_front.JPG/1920px-Mehndi_front.JPG'
    ]
  },
  {
    id: 'vedic-chanting',
    name: 'Vedic Chanting: UNESCO Masterpiece of Oral Tradition',
    slug: 'vedic-chanting',
    state: 'Pan-India',
    region: 'Varanasi, Kanchipuram, Kerala (Nambudiri tradition)',
    originCentury: '1500 BCE (Rigveda oral composition)',
    keyInstrumentsOrMaterials: ['Human voice and breath control', 'Hand gestures (Mudra accents: Udatta, Anudatta, Svarita)'],
    description: 'Inscribed on the UNESCO Representative List of Intangible Cultural Heritage. The sacred verses of the Vedas have been preserved and transmitted purely through oral recitation for over 3,500 years without changing a single syllable, vowel length, or pitch accent.',
    masterArtisansOrExponents: ['Veda Pathashalas of Kanchipuram, Varanasi, Sringeri, and Kerala Nambudiri reciters'],
    highlights: ['Preserved word-for-word for 3,500 years through 11 mnemonic recitation techniques (Jatapatha, Ghanapatha)', 'UNESCO recognized it in 2003 as one of the most supreme achievements of human memory', 'Tonal pitch: Three fundamental tonal accents—Udatta (raised), Anudatta (unraised), and Svarita (circumflex)'],
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'hindustani-classical',
    name: 'Hindustani Classical Music: The North Indian Raga Tradition',
    slug: 'hindustani-classical',
    state: 'Northern India',
    region: 'Gwalior, Kirana, Agra, Banaras, Maihar Gharanas',
    originCentury: '12th Century CE (Synthesis of Vedic Dhrupad and Persian elements)',
    keyInstrumentsOrMaterials: ['Sitar', 'Sarod', 'Tanpura', 'Tabla', 'Bansuri', 'Shehnai'],
    description: 'The classical art music tradition of northern India, organized around the melodic framework of Ragas and rhythmic cycles of Taalas. Rooted in spiritual improvisation, each Raga is associated with a specific time of day, season, and emotional mood (Rasa).',
    masterArtisansOrExponents: ['Ustad Bismillah Khan', 'Pandit Ravi Shankar', 'Ustad Zakir Hussain', 'Pandit Bhimsen Joshi'],
    highlights: ['Time theory of Ragas: Morning ragas (Bhairav), afternoon ragas (Bhimpalasi), night ragas (Darbari Kanada)', 'Dhrupad is the oldest surviving meditative form, sung with pure microtonal precision (Shrutis)', 'The Tanpura drone establishes the acoustic harmonic field for pure modal improvisation'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Raja_Ravi_Varma%2C_Goddess_Saraswati.jpg/1920px-Raja_Ravi_Varma%2C_Goddess_Saraswati.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c3/45_record.png'
    ]
  },
  {
    id: 'carnatic-music',
    name: 'Carnatic Music: Classical Melodic System of South India',
    slug: 'carnatic-music',
    state: 'Tamil Nadu, Karnataka, Andhra Pradesh & Kerala',
    region: 'Chennai (Madras Music Season), Thanjavur, Mysore',
    originCentury: '15th Century CE (Purandara Dasa & Trinity of Tyagaraja, Muthuswami Dikshitar, Syama Sastri)',
    keyInstrumentsOrMaterials: ['Saraswati Veena', 'Mridangam', 'Violin', 'Ghatam clay pot', 'Kanjira', 'Morsing'],
    description: 'The classical music system of Southern India, distinguished by its composition-centric structure (Kritis), complex mathematical rhythmic permutations (Solkattu and Konnakol), and the systematic 72 Melakarta parent scale framework formulated by Venkatamakhin.',
    masterArtisansOrExponents: ['M. S. Subbulakshmi', 'Semmangudi Srinivasa Iyer', 'Balamuralikrishna', 'L. Subramaniam'],
    highlights: ['Purandara Dasa is revered as the Pitamaha (grandfather) of Carnatic music who standardized the pedagogical exercises', 'The annual Chennai Music Season in December is the largest musical festival in the world with over 2,000 concerts', 'Mridangam and Ghatam percussionists play complex mathematical calculations (Korvai)'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Tanjore-style_Carnatic_tambura.JPG/1920px-Tanjore-style_Carnatic_tambura.JPG',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80'
    ]
  },
  {
    id: 'baul-music',
    name: 'Baul Music of Bengal: UNESCO Mystic Minstrels',
    slug: 'baul-music',
    state: 'West Bengal',
    region: 'Birbhum, Bolpur, Nadia, Murshidabad',
    originCentury: '15th Century CE (Bhakti and Sufi mystic union)',
    keyInstrumentsOrMaterials: ['Ektara (Single-string plucked lute)', 'Dotara', 'Dubki tambourine', 'Ghungroo ankle bells', 'Khamak drum'],
    description: 'Inscribed on the UNESCO Representative List of Intangible Cultural Heritage. The Bauls are mystic wandering minstrels of rural Bengal who renounce all organized religion and caste to seek the Divine inside the human body (Moner Manush—The Man of the Heart).',
    masterArtisansOrExponents: ['Lalon Fakir (Legendary 18th-century mystic)', 'Purna Das Baul', 'Parvathy Baul'],
    highlights: ['Lalon Fakir composed thousands of philosophical songs promoting communal harmony and oneness', 'Singers dance joyfully while simultaneously playing the Ektara with one hand and the Dubki drum with the other', 'Centered at the annual Kenduli Mela held on the banks of the sacred Ajay River'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/A_Soul_Unchained.jpg/1920px-A_Soul_Unchained.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Baul_Santiniketan.jpg/1920px-Baul_Santiniketan.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Bengali_dialects.png/1920px-Bengali_dialects.png',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Bhaba_Pagla.jpg/1920px-Bhaba_Pagla.jpg'
    ]
  },
  {
    id: 'folk-puppetry-rajasthan',
    name: 'Kathputli: String Puppetry of Rajasthan',
    slug: 'kathputli',
    state: 'Rajasthan',
    region: 'Nagaur, Jaipur, Jodhpur (Bhat community)',
    originCentury: '1,000+ years antiquity (Patronized by Vikramaditya & Rajput kings)',
    keyInstrumentsOrMaterials: ['Carved mango wood puppets', 'Multi-colored fabric dresses', 'Thin nylon/cotton strings', 'Boli (Bamboo reed whistle)'],
    description: 'Traditional string puppet theater performed by the nomadic Bhat community of Rajasthan. Carved from a single piece of wood (Kath = wood, Putli = doll), the puppets have no legs but wear flowing pleated skirts manipulated through strings attached to the puppeteer’s fingers.',
    masterArtisansOrExponents: ['Bhat puppeteer families of Kathputli Colony and Nagaur', 'Puran Bhat'],
    highlights: ['Puppeteers communicate and narrate dialogues using a bamboo whistle called Boli that creates a bird-like squeaking voice', 'Enacts legends of medieval warrior Amar Singh Rathore of Nagaur and courtly intrigues', 'A single puppeteer can operate multiple puppets with incredible dexterity using finger loops'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/India_Mandawa_marionetas_01_ni.JPG/1920px-India_Mandawa_marionetas_01_ni.JPG',
    gallery: [
      
    ]
  },
  {
    id: 'bhavai-theatre',
    name: 'Bhavai: Satirical Folk Theatre of Gujarat',
    slug: 'bhavai-theatre',
    state: 'Gujarat & Western Rajasthan',
    region: 'North Gujarat (Mehsana, Patan)',
    originCentury: '14th Century CE (Asaita Thakar)',
    keyInstrumentsOrMaterials: ['Bhungal (7-foot long copper trumpet)', 'Pakhavaj drum', 'Jhanjh cymbals', 'Sarangi'],
    description: 'A popular folk theatre form created by Asaita Thakar in the 14th century, blending humor, dance, music, and hard-hitting social commentary. Perched before village audiences, characters enter through a sacred circle (Chachar) announced by the piercing sound of long copper Bhungal trumpets.',
    masterArtisansOrExponents: ['Targala / Nayak traditional communities', 'Pransukh Nayak', 'Kailash Pandya'],
    highlights: ['Bhungal: The 7-foot copper trumpet produces a piercing drone heard across entire villages', 'The clown character Ranglo uses razor-sharp wit to satirize corrupt officials and social taboos', 'Female roles were historically played by male actors who balanced up to eight brass pots on their heads'],
    heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/en/0/05/BhavniBhavai.jpg'
    ]
  },
  {
    id: 'ram-leela',
    name: 'Ramlila: UNESCO Intangible Cultural Heritage',
    slug: 'ramlila',
    state: 'Uttar Pradesh & Pan-India',
    region: 'Ramnagar (Varanasi), Ayodhya, Delhi',
    originCentury: '16th Century CE (Initiated by Goswami Tulsidas)',
    keyInstrumentsOrMaterials: ['Nagada drums', 'Shehnai', 'Harmonium', 'Manjira', 'Effigies of Ravana'],
    description: 'The traditional theatrical enactment of the epic Ramayana based on Tulsidas’s Ramcharitmanas. In Ramnagar (Varanasi), the entire town transforms into a 31-day open-air theatre stage where the audience walks along with the royal family from one location to another as scenes progress.',
    masterArtisansOrExponents: ['Maharaja of Kashi royal patronage in Ramnagar', 'Ayodhya Shodh Sansthan'],
    highlights: ['Inscribed on UNESCO’s Representative List of Intangible Cultural Heritage in 2008', 'Ramnagar Ramlila uses no microphones or modern electric lights, illuminated solely by flaming mashal torches', 'Concludes on Vijayadashami with the dramatic burning of 80-foot giant firecracker-filled effigies of Ravana'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/1/16/An_Ramlila_Actor_In_The_Role_of_Ravana.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Fair_View.JPG/1920px-Fair_View.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/7/76/Javanese_Dance_Ramayana_Shinta_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d3/Rama_in_forest.jpg'
    ]
  },
  {
    id: 'boat-races-kerala',
    name: 'Vallamkali: Snake Boat Races of Kerala',
    slug: 'vallamkali',
    state: 'Kerala',
    region: 'Alappuzha, Punnamada Lake, Aranmula',
    originCentury: '13th Century CE (Chempakassery and Kayamkulam naval warfare)',
    keyInstrumentsOrMaterials: ['Chundan Vallam (100-foot teak snake boat)', 'Vanchi pattu (Rhythmic boat songs)', 'Elathalam', 'Paddle oars'],
    description: 'A traditional canoe racing sport held during the harvest season. The centerpiece is the Chundan Vallam (Snake Boat), measuring over 100 feet in length and manned by 100 to 120 synchronized oarsmen rowing in frantic tempo to the rhythm of fast-paced Vanchi Pattu songs.',
    masterArtisansOrExponents: ['Village boat clubs of Kuttanad and Aranmula', 'Master carpenter Koothali lineages'],
    highlights: ['Nehru Trophy Boat Race on Punnamada Lake is the world’s most competitive canoe race', 'The stern of the Chundan Vallam rises 20 feet into the air like a raised cobra hood', 'A full-sized Chundan takes over a year to hand-carve out of Anjili (wild jackfruit) timber'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Kerala_boatrace.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Nehru_Trophy_Boat_Race_-_%E0%B4%A8%E0%B5%86%E0%B4%B9%E0%B5%8D%E2%80%8C%E0%B4%B1%E0%B5%81_%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B5%8B%E0%B4%AB%E0%B4%BF_%E0%B4%B5%E0%B4%B3%E0%B5%8D%E0%B4%B3%E0%B4%82%E0%B4%95%E0%B4%B3%E0%B4%BF_-_Wiki_Loves_Onam_2024.webm/1920px--Nehru_Trophy_Boat_Race_-_%E0%B4%A8%E0%B5%86%E0%B4%B9%E0%B5%8D%E2%80%8C%E0%B4%B1%E0%B5%81_%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B5%8B%E0%B4%AB%E0%B4%BF_%E0%B4%B5%E0%B4%B3%E0%B5%8D%E0%B4%B3%E0%B4%82%E0%B4%95%E0%B4%B3%E0%B4%BF_-_Wiki_Loves_Onam_2024.webm.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/%E0%B4%A8%E0%B5%86%E0%B4%B9%E0%B5%8D%E0%B4%B1%E0%B5%81_%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B5%8B%E0%B4%AB%E0%B4%BF_Nehru_Trophy_Boat_Race_2012_7775.JPG/1920px-%E0%B4%A8%E0%B5%86%E0%B4%B9%E0%B5%8D%E0%B4%B1%E0%B5%81_%E0%B4%9F%E0%B5%8D%E0%B4%B0%E0%B5%8B%E0%B4%AB%E0%B4%BF_Nehru_Trophy_Boat_Race_2012_7775.JPG'
    ]
  },
  {
    id: 'yoga-tradition',
    name: 'Yoga Tradition of India: UNESCO Heritage of Wellness',
    slug: 'yoga-tradition',
    state: 'Pan-India',
    region: 'Rishikesh (World Capital of Yoga), Varanasi, Mysore',
    originCentury: '3,000 BCE (Patanjali’s Yoga Sutras & Indus Valley artifacts)',
    keyInstrumentsOrMaterials: ['Kusha grass mats', 'Meditation beads (Japamala)', 'Singing bowls', 'Pranayama breathing'],
    description: 'An ancient holistic science uniting mind, body, and consciousness through ethical observances (Yama & Niyama), physical postures (Asanas), breath control (Pranayama), and deep absorption (Samadhi). Inscribed on the UNESCO Representative List of Intangible Cultural Heritage.',
    masterArtisansOrExponents: ['Maharishi Patanjali', 'Swami Vivekananda', 'T. Krishnamacharya', 'B.K.S. Iyengar'],
    highlights: ['Celebrated worldwide on June 21 as the International Day of Yoga', 'Rooted in Patanjali’s classical Ashtanga (eight-limbed) spiritual framework', 'Rishikesh on the holy Ganges remains the undisputed global spiritual capital of Yoga'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Shiva_Bangalore.jpg',
    gallery: [
      
    ]
  },
  {
    id: 'ayurveda-tradition',
    name: 'Ayurveda: The 5,000-Year-Old Science of Life',
    slug: 'ayurveda-tradition',
    state: 'Kerala & Pan-India',
    region: 'Kerala (Ashtavaidya tradition), Haridwar, Varanasi',
    originCentury: 'Vedic Antiquity (Atharvaveda & Charaka Samhita)',
    keyInstrumentsOrMaterials: ['Medicinal herbal oils', 'Bronze Uruli pots', 'Dhara wooden tables', 'Triphala & Ashwagandha herbs'],
    description: 'The ancient Indian system of holistic natural medicine, based on balancing the three fundamental biological energies or doshas (Vata, Pitta, and Kapha). Centers on preventive living, diet, Panchakarma rejuvenation therapies, and herbal pharmacology.',
    masterArtisansOrExponents: ['Charaka and Sushruta (Foundational sages)', 'Ashtavaidya hereditary families of Kerala'],
    highlights: ['Sushruta Samhita is the world’s oldest documented text on surgical techniques and plastic surgery', 'Panchakarma: Five-fold clinical detoxification therapies including Shirodhara and Abhyanga', 'Kerala is globally celebrated for preserving authentic Ayurvedic hospitals and herbal medicinal gardens'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Dhanvantari-at-Ayurveda-expo.jpg',
    gallery: [
      
    ]
  },
  {
    id: 'tribal-cuisine',
    name: 'Indigenous Tribal Cuisine of India',
    slug: 'tribal-cuisine',
    state: 'Chhattisgarh, Jharkhand, Odisha & Northeast',
    region: 'Bastar, Chota Nagpur, Northeast Hills',
    originCentury: 'Thousands of years of forest foraging',
    keyInstrumentsOrMaterials: ['Clay handi pots', 'Sal leaf wraps', 'Wood-fire embers', 'Fermentation pots'],
    description: 'The hyper-local, organic culinary traditions of India’s 700+ indigenous tribes. Prepared without refined oils or processed chemicals, it harnesses wild forest tubers, bamboo shoots, fermented soybean, Mahua flowers, red ant chutney (Chaprah), and millet flatbreads cooked over wood embers.',
    masterArtisansOrExponents: ['Indigenous tribal grandmothers and forest foraging communities of Bastar and Northeast India'],
    highlights: ['Chaprah: Red ant chutney from Bastar awarded Geographical Indication (GI) tag for its high protein and formic acid benefits', 'Zero-oil cooking using steam inside bamboo hollows or wrapped in aromatic turmeric leaves', 'Preserves ancient drought-resistant millets like Kodo, Kutki, and Ragi'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Tradtional_Thali.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/3_types_of_lentil.jpg/1920px-3_types_of_lentil.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Achara.jpg/1920px-Achara.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Aran_Vada_Pav_Mumbai.jpg/1920px-Aran_Vada_Pav_Mumbai.jpg'
    ]
  },
  {
    id: 'temple-architecture',
    name: 'Indian Temple Architecture: Nagara, Dravida and Vesara',
    slug: 'temple-architecture',
    state: 'Pan-India',
    region: 'Tamil Nadu, Odisha, Karnataka, Madhya Pradesh',
    originCentury: '5th Century CE (Gupta period to Chola & Vijayanagara zeniths)',
    keyInstrumentsOrMaterials: ['Granite, sandstone, chloritic schist soapstone', 'Vastu Shastra manuscripts', 'Interlocking dry masonry joints'],
    description: 'One of the crowning achievements of world architectural history, structured according to ancient Vastu Shastra manuals. Features three major schools: Northern Nagara (curved beehive Shikhara), Southern Dravida (pyramidal stepped Vimana with towering Gopurams), and hybrid Vesara.',
    masterArtisansOrExponents: ['Traditional Sompura architects of Gujarat', 'Stapathis of Tamil Nadu'],
    highlights: ['Garba Griha: The dark womb-chamber sanctum representing the inner heart of consciousness', 'Assembled without any cement or mortar using ingenious mortise-and-tenon interlocking stone masonry', 'Every decorative element is symbolically aligned with cosmic geometries and equinox solar alignments'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/01AnnamalaiyarTemple%26Thiruvannamalai%26TamilNadu%26AerialViewfromVirupakshaCave.jpg/1920px-01AnnamalaiyarTemple%26Thiruvannamalai%26TamilNadu%26AerialViewfromVirupakshaCave.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/17th_century_Odisha_palm_leaf_manuscript_Hindu_temple_architecture_2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/7th_-_8th_century_Shiva_linga_at_the_Sangameswara_temple%2C_Pattadakal_Hindu_monuments_Karnataka.jpg/1920px-7th_-_8th_century_Shiva_linga_at_the_Sangameswara_temple%2C_Pattadakal_Hindu_monuments_Karnataka.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/8th_century_Galaganatha_temple_Amalaka%2C_Pattadakal_monuments_Karnataka.jpg/1920px-8th_century_Galaganatha_temple_Amalaka%2C_Pattadakal_monuments_Karnataka.jpg'
    ]
  },
  {
    id: 'mughal-architecture',
    name: 'Mughal Architecture: Gardens, Domes and Pietra Dura',
    slug: 'mughal-architecture',
    state: 'Delhi, Uttar Pradesh & Jammu & Kashmir',
    region: 'Agra, Delhi, Lahore, Srinagar',
    originCentury: '1526 - 1707 CE (Akbar to Shah Jahan)',
    keyInstrumentsOrMaterials: ['Red sandstone', 'Pure white Makrana marble', 'Pietra Dura semi-precious stone inlays', 'Jali screens'],
    description: 'A splendid synthesis of Persian, Islamic, Turkish, and Hindu architectural forms. Characterized by monumental bulbous onion domes, symmetrical quadripartite Charbagh gardens, delicate white marble pavilions, and intricate floral Pietra Dura inlay using lapis lazuli, jasper, and jade.',
    masterArtisansOrExponents: ['Ustad Ahmad Lahori (Chief architect of Taj Mahal and Red Fort)', 'Mirak Mirza Ghiyas'],
    highlights: ['Pietra Dura (Parchin Kari): Over 28 semi-precious stones inlaid into polished marble with zero gap', 'Charbagh Garden: Quadripartite layout with four channels symbolizing paradise rivers', 'Jali work: Intricate geometric marble screens providing cooling cross-ventilation and privacy'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal%2C_Agra%2C_India.jpg/1920px-Taj_Mahal%2C_Agra%2C_India.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/I%27tim%C4%81d-ud-Daulah%2C_Agra.jpg/1920px-I%27tim%C4%81d-ud-Daulah%2C_Agra.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Architecture_of_Jama_Masjid%2C_Fatehpur_Sikri%2C_Agra.jpg/1920px-Architecture_of_Jama_Masjid%2C_Fatehpur_Sikri%2C_Agra.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Awesome_look_of_Lalbagh_Fort.jpg/1920px-Awesome_look_of_Lalbagh_Fort.jpg'
    ]
  },
  {
    id: 'buddhist-monasteries',
    name: 'Himalayan Buddhist Monasteries (Gompas)',
    slug: 'buddhist-monasteries',
    state: 'Ladakh, Sikkim, Himachal Pradesh & Arunachal Pradesh',
    region: 'High Himalayas (Leh, Spiti, Tawang, Gangtok)',
    originCentury: '8th - 17th Century CE (Padmasambhava & Songtsen Gampo)',
    keyInstrumentsOrMaterials: ['Sun-dried mud brick', 'Pine timber beams', 'Crushed lapis and gold thangkas', 'Clay & copper gilded idols'],
    description: 'Perched atop sheer Himalayan crags and mountain passes, Gompas are centers of Buddhist learning, meditation, and art. They preserve centuries-old fresco murals, vast libraries of woodblock-printed scriptures (Kangyur and Tengyur), and monumental gilded statues of the Buddha.',
    masterArtisansOrExponents: ['Hereditary Lama thangka painters of Ladakh and Tibet', 'Tawang monastic university'],
    highlights: ['Dukhang (assembly hall) walls are painted with murals of the Wheel of Life (Bhavachakra)', 'Mani wheels and prayer flags inscribed with the sacred mantra Om Mani Padme Hum', 'Monastic libraries preserve manuscripts written in pure gold and silver ink on handmade bark paper'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Hemis_Mahasiddhas_2.jpg/1920px-Hemis_Mahasiddhas_2.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Hemis_Mahasiddhas_3.jpg/1920px-Hemis_Mahasiddhas_3.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Hemis_Mahasiddhas_4.jpg/1920px-Hemis_Mahasiddhas_4.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Hemis_Mahasiddhas_5.jpg/1920px-Hemis_Mahasiddhas_5.jpg'
    ]
  },
  {
    id: 'sikh-langar-tradition',
    name: 'Sikh Langar: The World’s Largest Free Community Kitchen',
    slug: 'sikh-langar',
    category: 'tradition',
    state: 'Punjab & Worldwide Gurdwaras',
    region: 'Amritsar (Golden Temple) & Pan-India',
    originCentury: '15th Century CE (Instituted by Guru Nanak Dev)',
    keyInstrumentsOrMaterials: ['Giant iron cauldrons (Degs)', 'Rolling pins', 'Firewood stoves', 'Brass plates and spoons'],
    description: 'Instituted by Guru Nanak Dev, Langar is a revolutionary community kitchen where free vegetarian food is served to all people regardless of religion, caste, gender, economic status, or nationality. Everyone sits side by side on the floor (Pangat) in total equality.',
    masterArtisansOrExponents: ['Millions of dedicated voluntary Sikh volunteers (Sevadars) around the world'],
    highlights: ['The Golden Temple Langar serves over 100,000 hot meals every single day of the year for free', 'All cooking, serving, and cleaning is done entirely by selfless volunteers (Seva)', 'A historic blow against the medieval caste system by forcing kings and peasants to eat from the same kitchen'],
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Langar.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Sikhs_paying_homage_to_Guru_Nanak_Wellcome_V0045987.jpg/1920px-Sikhs_paying_homage_to_Guru_Nanak_Wellcome_V0045987.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/The_Camp_of_Bhai_Bir_Singh_Naurangabad%2C_Punjab%2C_ca.1850.jpg/1920px-The_Camp_of_Bhai_Bir_Singh_Naurangabad%2C_Punjab%2C_ca.1850.jpg'
    ]
  },
  {
    id: 'sufi-qawwali',
    name: 'Sufi Qawwali: Ecstatic Music of Divine Mysticism',
    slug: 'sufi-qawwali',
    category: 'music',
    state: 'Delhi, Uttar Pradesh & Punjab',
    region: 'Dargah of Nizamuddin Auliya (Delhi) & Ajmer Sharif',
    originCentury: '13th Century CE (Pioneered by Amir Khusrau)',
    keyInstrumentsOrMaterials: ['Harmonium', 'Tabla', 'Dholak', 'Synchronized clapping (Taali)'],
    description: 'A devotional music tradition originating from the Chishti Sufi order in Delhi. Pioneered by poet Amir Khusrau, Qawwali uses soaring vocal improvisations, energetic hand clapping, and repetitive mystical poetry in Persian, Hindavi, and Urdu to induce spiritual ecstasy (Wajd).',
    masterArtisansOrExponents: ['Ustad Nusrat Fateh Ali Khan', 'Sabri Brothers', 'Wadali Brothers', 'Nizami Bandhu'],
    highlights: ['Performed live every Thursday evening at the historic Dargah of Hazrat Nizamuddin Auliya in Delhi', 'Amir Khusrau blended Persian musical scales with Indian classical ragas to invent modern Qawwali', 'Listeners experience trance-like ecstasy (Hal) through rhythmic clapping and intense lyrical repetitions'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Qawalli_at_Ajmer_Sharif_dargah.jpg/1920px-Qawalli_at_Ajmer_Sharif_dargah.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Baul_Song_Performance_-_Saturday_Haat_-_Sonajhuri_-_Birbhum_2014-06-28_5286.JPG/1920px-Baul_Song_Performance_-_Saturday_Haat_-_Sonajhuri_-_Birbhum_2014-06-28_5286.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Tyagaraja.jpg'
    ]
  },
  {
    id: 'handloom-traditions',
    name: 'Handloom Traditions of India: 5,000 Years of Weaving',
    slug: 'handloom-traditions',
    category: 'textile',
    state: 'Pan-India',
    region: 'Over 50 major weaving clusters across India',
    originCentury: 'Indus Valley Civilization (Mohenjo-Daro dyed cotton)',
    keyInstrumentsOrMaterials: ['Pit looms', 'Fly shuttle frame looms', 'Jacquard cards', 'Handspun cotton, silk, and wool'],
    description: 'India produces 95% of the world’s handwoven fabrics. From the golden Muga silks of Assam and fine Jamdani of Bengal to the Pochampally Ikats of Telangana and Pashmina shawls of Kashmir, India’s handloom heritage represents unmatched mathematical intricacy and artisanal pride.',
    masterArtisansOrExponents: ['Over 3.5 million handloom weavers across India organized into traditional weaver guilds'],
    highlights: ['India is the only country in the world that cultivates all four commercial silk varieties: Mulberry, Tussar, Eri, and golden Muga', 'Jamdani weaving was recognized by UNESCO as Intangible Cultural Heritage of Humanity', 'Every region has its own distinctive weave: Chanderi, Maheshwari, Paithani, Sambalpuri, Baluchari, and Kota Doria'],
    heroImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Banaras_weavers_from_handloom_looms_Bharatsthali.jpg/1920px-Banaras_weavers_from_handloom_looms_Bharatsthali.jpg',
    gallery: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Kanchipuram_silk_sareer.JPG/1920px-Kanchipuram_silk_sareer.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Thomas_hickey%2C_donna_indiana%2C_forse_jemdanee%2C_bibi_di_william_hickey%2C_1787_%28cropped%29.jpg/1920px-Thomas_hickey%2C_donna_indiana%2C_forse_jemdanee%2C_bibi_di_william_hickey%2C_1787_%28cropped%29.jpg'
    ]
  }
];
