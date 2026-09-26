import { HERITAGE_SITES } from '../data/heritageSites';
import { HIDDEN_GEMS } from '../data/hiddenGems';
import { FESTIVALS } from '../data/festivals';
import { CULTURAL_EXPERIENCES } from '../data/culturalExperiences';
import { STATES_DATA } from '../data/statesData';
import { HeritageSite, HiddenGem, Festival, CulturalExperience } from '../types';

export interface HeritageGuideAnswer {
  headline: string;
  badge?: string;
  summary: string;
  image?: string;
  imageCaption?: string;
  facts: string[];
  historicalTimeline?: { period: string; event: string }[];
  keyHighlights?: { title: string; desc: string }[];
  relatedItems?: { title: string; subtitle: string; link?: string; tag?: string; image?: string }[];
  locationInfo?: { state: string; nearestHub?: string; bestSeason?: string };
  actionSuggestions: string[];
}

export class HeritageAIQueryEngine {
  /**
   * Main query resolver
   */
  public static answerQuery(rawQuery: string): HeritageGuideAnswer {
    const query = rawQuery.trim().toLowerCase();

    // 1. Check for specific high-interest questions (Taj tilt, Brihadeeswara dome, Aranmula mirror, Maitreya Buddha)
    if (query.includes('tilt') || (query.includes('taj') && query.includes('minaret'))) {
      const taj = HERITAGE_SITES.find(s => s.slug === 'taj-mahal') || HERITAGE_SITES[0];
      return {
        headline: "Why the Taj Mahal's Minarets Tilt Outwards",
        badge: "Architectural Marvel",
        summary: "The four 40-meter minarets flanking the Taj Mahal were deliberately engineered with an outward tilt of approximately 2 degrees. This stroke of Mughal engineering genius ensures that in the event of a catastrophic earthquake, the massive stone towers will collapse outwards into the gardens rather than falling onto the precious central marble crypt housing Mumtaz Mahal and Shah Jahan.",
        image: taj.heroImage,
        imageCaption: "Taj Mahal, Agra — Built between 1632 and 1648 CE",
        facts: [
          "The minarets stand at 130 feet (40 meters) and feature three hexagonal balconies each.",
          "The central dome rests upon a massive underground timber well system that relies on moisture from the Yamuna river.",
          "The minarets are calibrated to look perfectly vertical from ground view due to an optical perspective correction."
        ],
        historicalTimeline: [
          { period: "1631 CE", event: "Empress Mumtaz Mahal passes away; Emperor Shah Jahan vows an immortal memorial." },
          { period: "1632 CE", event: "Construction commences with over 20,000 artisans under Ustad Ahmad Lahori." },
          { period: "1648 CE", event: "Main mausoleum completed; minarets aligned with seismic safeguards." }
        ],
        keyHighlights: [
          { title: "Architect", desc: "Ustad Ahmad Lahori & Mir Abd-ul Karim" },
          { title: "Location", desc: "Agra, Uttar Pradesh (Yamuna Riverbank)" },
          { title: "Entry Passes", desc: `${taj.entryFeeIndians} (Indians) / ${taj.entryFeeForeigners} (Foreigners)` }
        ],
        relatedItems: [
          { title: "Agra Fort", subtitle: "Mughal Red Sandstone Citadel", link: "/heritage/agra-fort", tag: "UNESCO" },
          { title: "Fatehpur Sikri", subtitle: "Ghost City of Emperor Akbar", link: "/heritage/fatehpur-sikri", tag: "UNESCO" }
        ],
        locationInfo: { state: "Uttar Pradesh", nearestHub: "Agra Cantt / Kheria Airport", bestSeason: "October to March" },
        actionSuggestions: ["Plan trip to Agra", "Tell me about Fatehpur Sikri", "Explore Mughal Architecture"]
      };
    }

    if (query.includes('brihadeeswara') || query.includes('brihadisvara') || query.includes('thanjavur dome') || query.includes('big temple dome')) {
      const site = HERITAGE_SITES.find(s => s.name.toLowerCase().includes('brihadisvara') || s.name.toLowerCase().includes('chola')) || HERITAGE_SITES[2];
      return {
        headline: "The 80-Tonne Monolithic Granite Kumbam of Brihadeeswara",
        badge: "Chola Engineering Wonder",
        summary: "The colossal Vimana tower of the Brihadeeswara Temple in Thanjavur rises 66 meters into the sky. At its summit sits the single monolithic Kumbam dome weighing an astounding 80 tonnes (80,000 kg), carved from a solitary granite block. In 1010 CE, with no granite quarries within 60 km, Rajaraja Chola's master engineers constructed a 6-kilometer inclined earthen ramp, using thousands of royal war elephants and timber log rollers to haul this crown stone to the pinnacle!",
        image: site.heroImage,
        imageCaption: "Brihadeeswara Temple, Thanjavur — Consecrated in 1010 CE by Rajaraja Chola I",
        facts: [
          "Constructed entirely from interlocking granite without any binding mortar or cement.",
          "The temple courtyard hosts a monolithic Nandi bull carved from a single stone, weighing 25 tonnes.",
          "The shadow of the main cupola never falls outside the sanctum compound at solar noon."
        ],
        historicalTimeline: [
          { period: "1003 CE", event: "Rajaraja Chola I decrees construction of the world's tallest granite temple." },
          { period: "1010 CE", event: "Consecration of the 66-meter Vimana on the 275th day of the 25th regnal year." },
          { period: "1987 CE", event: "Inscribed as UNESCO World Heritage Site under Great Living Chola Temples." }
        ],
        keyHighlights: [
          { title: "Dynasty", desc: "Imperial Cholas (Rajaraja Chola I)" },
          { title: "Material", desc: "130,000 tonnes of hard granite" },
          { title: "Living Shrine", desc: "Continuous daily worship for over 1,000 unbroken years" }
        ],
        relatedItems: [
          { title: "Gangaikonda Cholapuram", subtitle: "Chola Capital of Rajendra I", link: "/heritage", tag: "UNESCO" },
          { title: "Airavatesvara Temple", subtitle: "Miniature Chola Stone Chariot", link: "/heritage", tag: "UNESCO" }
        ],
        locationInfo: { state: "Tamil Nadu", nearestHub: "Tiruchirappalli (TRZ) Airport (55 km)", bestSeason: "November to March" },
        actionSuggestions: ["Tell me about Chola Temples", "Explore Tamil Nadu culture", "Plan 4 days in Thanjavur"]
      };
    }

    if (query.includes('aranmula') || (query.includes('mirror') && query.includes('metal'))) {
      const exp = CULTURAL_EXPERIENCES.find(e => e.name.toLowerCase().includes('aranmula') || e.slug.includes('aranmula')) || CULTURAL_EXPERIENCES[0];
      return {
        headline: "The Secret Metallurgical Wonder of Aranmula Metal Mirrors",
        badge: "GI Craft & Ancient Metallurgy",
        summary: "Unlike modern mirrors that use glass coated with silver or mercury, the UNESCO-acknowledged Aranmula Kannadi from Kerala is crafted entirely from an ancient metallurgical alloy of copper, tin, and secret medicinal herbs. Hand-cast by a single hereditary artisan family guild in Pathanamthitta, it produces a 100% distortion-free front-surface reflection without the double-refraction of glass!",
        image: exp.heroImage,
        imageCaption: "Aranmula Kannadi — Hand-cast in Aranmula, Kerala",
        facts: [
          "The exact alloy ratio has been guarded as a sacred family secret passed through oral tradition for over 500 years.",
          "A single mirror requires up to 14 days of continuous manual polishing with velvet cloth and specialized clay powders.",
          "It holds the prestigious Geographical Indication (GI) status under Indian intellectual property law."
        ],
        keyHighlights: [
          { title: "Origin", desc: "Aranmula village, Pathanamthitta, Kerala" },
          { title: "Reflection Type", desc: "True front-surface optical reflection (zero glass parallax)" },
          { title: "Artisan Guild", desc: "Vishwa Brahmana artisan lineage" }
        ],
        relatedItems: [
          { title: "Kathakali Classical Drama", subtitle: "Living Temple Theatre of Kerala", link: "/culture/kathakali", tag: "Intangible" },
          { title: "Kalaripayattu Martial Art", subtitle: "Mother of Asian Martial Arts", link: "/culture", tag: "Heritage" }
        ],
        locationInfo: { state: "Kerala", nearestHub: "Thiruvananthapuram (TRV) / Kochi (COK)", bestSeason: "August to March" },
        actionSuggestions: ["Explore Kerala Hidden Gems", "Tell me about Kathakali", "Plan trip to Kerala"]
      };
    }

    if (query.includes('maitreya') || (query.includes('buddha') && query.includes('ladakh'))) {
      const ladakh = STATES_DATA['ladakh'];
      return {
        headline: "The 49-Foot Sacred Maitreya Buddha of Thiksey",
        badge: "Trans-Himalayan Buddhist Sacred Art",
        summary: "The colossal two-storey, 49-foot (15-meter) high Maitreya Buddha statue at Thiksey Monastery in Ladakh was sculpted over four years and consecrated in 1970 by His Holiness the 14th Dalai Lama. Depicting the Buddha of the Future seated in the lotus posture (Padmasana), the statue is crowned with a gold-leaf tiara and gazes serenely across the upper Indus valley.",
        image: ladakh?.heroImage || 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
        imageCaption: "Maitreya Buddha Sanctum, Thiksey Gompa, Ladakh",
        facts: [
          "Took four master Ladakhi and Tibetan sculptors four continuous years to complete using clay, gold leaf, and copper.",
          "Thiksey Monastery is perched on an isolated hill resembling the Potala Palace of Lhasa, Tibet.",
          "Morning prayers inside the hall feature traditional monks chanting with long Dungchen brass horns at 06:15 AM."
        ],
        keyHighlights: [
          { title: "Monastery", desc: "Thiksey Gompa (Gelug Sect / Yellow Hat)" },
          { title: "Altitude", desc: "3,600 meters (11,800 feet) above sea level" },
          { title: "Annual Festival", desc: "Thiksey Gustor Mask Dance (October/November)" }
        ],
        relatedItems: [
          { title: "Hemis Monastery", subtitle: "Largest Monastic Citadel in Ladakh", link: "/heritage", tag: "Buddhist" },
          { title: "Pangong Tso", subtitle: "High Altitude Turquoise Lake", link: "/destinations", tag: "Nature" }
        ],
        locationInfo: { state: "Ladakh", nearestHub: "Leh Airport (IXL)", bestSeason: "May to October" },
        actionSuggestions: ["Plan trip to Ladakh", "Tell me about Hemis Festival", "What is Pangong Tso?"]
      };
    }

    // 2. Chola Dynasty Query
    if (query.includes('chola')) {
      const cholaSites = HERITAGE_SITES.filter(s => s.dynasty.toLowerCase().includes('chola') || s.name.toLowerCase().includes('chola') || s.description.toLowerCase().includes('chola'));
      return {
        headline: "The Imperial Cholas & Great Living Chola Temples",
        badge: "UNESCO World Heritage Cluster",
        summary: "The Imperial Chola Dynasty (9th–13th century CE) created one of maritime Asia's greatest maritime empires and architectural golden ages. Their master architects achieved unprecedented heights in monolithic granite stone masonry and bronze lost-wax casting, best embodied by the Great Living Chola Temples in Thanjavur, Gangaikonda Cholapuram, and Darasuram.",
        image: cholaSites[0]?.heroImage || 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
        imageCaption: "Brihadeeswara Temple, Thanjavur — Rajaraja Chola I's architectural masterpiece",
        facts: [
          "The Chola navy was one of the world's most formidable medieval armadas, conducting expeditions as far as Sri Lanka, the Maldives, Malaysia, and the Srivijaya Empire in Indonesia.",
          "Chola bronze sculptures of Nataraja (Dancing Shiva) are celebrated by global art historians as the apex of figurative metal sculpture.",
          "All three primary Chola temples remain active living shrines where rituals recorded in 1,000-year-old stone inscriptions are still practiced."
        ],
        keyHighlights: [
          { title: "Brihadeeswara (Thanjavur)", desc: "Built by Rajaraja I in 1010 CE; 66m Vimana tower" },
          { title: "Gangaikonda Cholapuram", desc: "Built by Rajendra I in 1035 CE celebrating Ganges victory" },
          { title: "Airavatesvara (Darasuram)", desc: "Built by Rajaraja II; stone chariot with musical steps" }
        ],
        relatedItems: [
          { title: "Brihadisvara Temple", subtitle: "Thanjavur, Tamil Nadu", link: "/heritage/brihadisvara", tag: "UNESCO" },
          { title: "Madurai Meenakshi", subtitle: "Pandyan Architecture Splendor", link: "/heritage", tag: "Dravidian" }
        ],
        locationInfo: { state: "Tamil Nadu", nearestHub: "Tiruchirappalli / Chennai", bestSeason: "November to March" },
        actionSuggestions: ["Why does Brihadeeswara dome weigh 80 tonnes?", "Plan 4 days in Tamil Nadu", "Explore Chola Bronzes"]
      };
    }

    // 3. Konark Query
    if (query.includes('konark') || query.includes('sun temple')) {
      const konark = HERITAGE_SITES.find(s => s.name.toLowerCase().includes('konark')) || HERITAGE_SITES[3];
      return {
        headline: "History & Astronomical Genius of Konark Sun Temple",
        badge: "UNESCO World Heritage (1984)",
        summary: "Erected on the shores of the Bay of Bengal around 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty, the Konark Sun Temple (known as the Black Pagoda by European sailors) was conceptualized as a monumental stone chariot for Surya, the Sun God. Twenty-four carved stone wheels, each nearly 10 feet in diameter, are drawn by seven galloping stone steeds.",
        image: konark.heroImage,
        imageCaption: "Konark Sun Temple Stone Chariot Wheels, Odisha",
        facts: [
          "The 24 wheels function as precision sundials; the shadows cast by the 8 major spokes tell the exact time down to the minute.",
          "Ancient European sailors navigated the Bay of Bengal using the temple's dark tower as a landmark, naming it the 'Black Pagoda'.",
          "The temple contains three life-sized green chlorite stone statues of Surya positioned to catch the sun at dawn, noon, and sunset."
        ],
        historicalTimeline: [
          { period: "1238–1264 CE", event: "Reign of King Narasimhadeva I; 1,200 sculptors work 12 years under master builder Bisu Maharana." },
          { period: "1984 CE", event: "Inscribed as UNESCO World Heritage Site." },
          { period: "Present Day", event: "Annual Konark Dance Festival held every December against the illuminated temple facade." }
        ],
        keyHighlights: [
          { title: "Dynasty", desc: "Eastern Ganga Dynasty (13th Century CE)" },
          { title: "Style", desc: "Kalinga Architectural Style (Pidhadeul & Vimana)" },
          { title: "Entry Passes", desc: `${konark.entryFeeIndians} (Indians) / ${konark.entryFeeForeigners} (Foreigners)` }
        ],
        relatedItems: [
          { title: "Puri Jagannath Temple", subtitle: "Sacred Dham on the Coast", link: "/destinations/odisha", tag: "Spiritual" },
          { title: "Raghurajpur Crafts Village", subtitle: "Living Pattachitra Village", link: "/hidden-gems", tag: "Artisans" }
        ],
        locationInfo: { state: "Odisha", nearestHub: "Bhubaneswar (BBI) Airport (65 km)", bestSeason: "October to March" },
        actionSuggestions: ["Plan trip to Odisha", "How do Konark sundials work?", "Explore Puri Jagannath"]
      };
    }

    // 4. State + Festivals Query (e.g., "Gujarat festivals in October")
    if (query.includes('festival') || query.includes('festivals')) {
      const stateMatch = Object.values(STATES_DATA).find(s => query.includes(s.name.toLowerCase()) || query.includes(s.slug.toLowerCase()));
      const matchedFestivals = FESTIVALS.filter(f => {
        const matchesState = stateMatch ? f.state.toLowerCase().includes(stateMatch.name.toLowerCase()) : true;
        const matchesMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].some(
          m => query.includes(m) && f.month.toLowerCase().includes(m)
        );
        return stateMatch ? matchesState : matchesMonth;
      });

      if (matchedFestivals.length > 0) {
        const primary = matchedFestivals[0];
        return {
          headline: `${stateMatch ? stateMatch.name : 'Upcoming'} Festivals: ${primary.name}`,
          badge: `${primary.month} Celebration`,
          summary: `${primary.name} is one of ${primary.state}'s most vibrant cultural milestones. ${primary.significance}`,
          image: primary.heroImage,
          imageCaption: `${primary.name} — ${primary.region}`,
          facts: [
            `Key Rituals: ${primary.rituals.slice(0, 3).join(', ')}.`,
            `Authentic Foods: ${primary.authenticFood.join(', ')}.`,
            `Traditional Attire: ${primary.traditionalDress}.`
          ],
          keyHighlights: [
            { title: "Best Locations", desc: primary.bestLocations.join(', ') },
            { title: "Instruments", desc: primary.musicInstruments.join(', ') },
            { title: "Date Range", desc: primary.dateRange }
          ],
          relatedItems: matchedFestivals.slice(1, 3).map(f => ({
            title: f.name,
            subtitle: `${f.state} (${f.month})`,
            link: `/festivals/${f.slug}`,
            tag: f.month,
            image: f.heroImage
          })),
          locationInfo: { state: primary.state, bestSeason: primary.month },
          actionSuggestions: [`Tell me about ${primary.name} rituals`, `Foods of ${primary.state}`, `Plan trip during ${primary.month}`]
        };
      }
    }

    // 5. State + Hidden Places Query (e.g., "hidden places in Kerala")
    if (query.includes('hidden') || query.includes('untouched') || query.includes('offbeat')) {
      const stateMatch = Object.values(STATES_DATA).find(s => query.includes(s.name.toLowerCase()) || query.includes(s.slug.toLowerCase()));
      const gems = HIDDEN_GEMS.filter(g => stateMatch ? g.state.toLowerCase().includes(stateMatch.name.toLowerCase()) : true);

      if (gems.length > 0) {
        const topGems = gems.slice(0, 3);
        return {
          headline: `Untouched Hidden Gems of ${stateMatch ? stateMatch.name : 'India'}`,
          badge: "Off-the-Beaten-Track",
          summary: `Beyond tourist buses lie pristine sanctuaries of authentic heritage, ancient geological formations, and serene tribal settlements with uncrowded scores up to 90%+.`,
          image: topGems[0].heroImage,
          imageCaption: `${topGems[0].name} — ${topGems[0].state}`,
          facts: topGems.map(g => `${g.name}: ${g.whyVisit}`),
          keyHighlights: topGems.map(g => ({
            title: g.name,
            desc: `Best time: ${g.bestTimeToVisit}. Reach: ${g.howToReach.slice(0, 80)}...`
          })),
          relatedItems: topGems.map(g => ({
            title: g.name,
            subtitle: `${g.state} • Uncrowded Score ${g.uncrowdedScore}%`,
            link: `/hidden-gems/${g.slug}`,
            tag: g.adventureLevel,
            image: g.heroImage
          })),
          locationInfo: { state: stateMatch ? stateMatch.name : topGems[0].state, bestSeason: topGems[0].bestTimeToVisit },
          actionSuggestions: [`Tell me more about ${topGems[0].name}`, `Plan a hidden gem trip`, `Show me UNESCO sites nearby`]
        };
      }
    }

    // 6. State + UNESCO Sites Query (e.g., "Karnataka UNESCO sites")
    if (query.includes('unesco') || (query.includes('heritage') && Object.values(STATES_DATA).some(s => query.includes(s.name.toLowerCase())))) {
      const stateMatch = Object.values(STATES_DATA).find(s => query.includes(s.name.toLowerCase()) || query.includes(s.slug.toLowerCase()));
      if (stateMatch) {
        const stateSites = HERITAGE_SITES.filter(s => s.state.toLowerCase() === stateMatch.name.toLowerCase());
        const displaySites = stateSites.length > 0 ? stateSites : HERITAGE_SITES.slice(0, 3);

        return {
          headline: `UNESCO & Monumental Heritage of ${stateMatch.name}`,
          badge: "Sovereign Heritage Registry",
          summary: `${stateMatch.name} is a historic cradle of civilizations spanning ancient empires: ${stateMatch.dynasties.join(', ')}. Featuring ${stateMatch.heritageCount} world-renowned monuments and monumental temples.`,
          image: displaySites[0]?.heroImage || stateMatch.heroImage,
          imageCaption: `${displaySites[0]?.name || stateMatch.name} — ${stateMatch.architectureStyle}`,
          facts: stateMatch.facts,
          keyHighlights: displaySites.map(s => ({
            title: s.name,
            desc: `${s.dynasty} (${s.period}). ${s.architectureStyle}.`
          })),
          relatedItems: displaySites.map(s => ({
            title: s.name,
            subtitle: `${s.dynasty} • ${s.period}`,
            link: `/heritage/${s.slug}`,
            tag: "UNESCO",
            image: s.heroImage
          })),
          locationInfo: { state: stateMatch.name, nearestHub: stateMatch.capital, bestSeason: stateMatch.bestTime },
          actionSuggestions: [`Plan ${stateMatch.name} 4-day itinerary`, `Cuisine of ${stateMatch.name}`, `Hidden gems in ${stateMatch.name}`]
        };
      }
    }

    // 7. General Monument Match across all 74 heritage sites
    const matchedSite = HERITAGE_SITES.find(s =>
      query.includes(s.slug) || query.includes(s.name.toLowerCase()) || (s.hindiName && query.includes(s.hindiName))
    );
    if (matchedSite) {
      return {
        headline: `${matchedSite.name} (${matchedSite.hindiName || matchedSite.dynasty})`,
        badge: `${matchedSite.dynasty} • ${matchedSite.period}`,
        summary: matchedSite.description,
        image: matchedSite.heroImage,
        imageCaption: `${matchedSite.name}, ${matchedSite.state} — UNESCO Year: ${matchedSite.unescoYear || 'National Protected'}`,
        facts: matchedSite.facts,
        keyHighlights: [
          { title: "Architecture", desc: matchedSite.architectureStyle },
          { title: "Timings", desc: matchedSite.timings },
          { title: "Entry Fees", desc: `Indians: ${matchedSite.entryFeeIndians} | Foreigners: ${matchedSite.entryFeeForeigners}` }
        ],
        relatedItems: matchedSite.nearbyAttractions.map(a => ({
          title: a,
          subtitle: `Near ${matchedSite.name}`,
          link: '/heritage',
          tag: 'Nearby'
        })),
        locationInfo: { state: matchedSite.state, bestSeason: matchedSite.bestMonths },
        actionSuggestions: [`Plan trip to ${matchedSite.name}`, `What are the nearby places?`, `Tell me about ${matchedSite.state} cuisine`]
      };
    }

    // 8. General Hidden Gem Match across all 50 gems
    const matchedGem = HIDDEN_GEMS.find(g => query.includes(g.slug) || query.includes(g.name.toLowerCase()));
    if (matchedGem) {
      return {
        headline: matchedGem.name,
        badge: `Hidden Gem • ${matchedGem.adventureLevel} Trail`,
        summary: matchedGem.description,
        image: matchedGem.heroImage,
        imageCaption: `${matchedGem.name}, ${matchedGem.state} (Uncrowded Score: ${matchedGem.uncrowdedScore}%)`,
        facts: [
          `Why Visit: ${matchedGem.whyVisit}`,
          `How to Reach: ${matchedGem.howToReach}`,
          `Best Time: ${matchedGem.bestTimeToVisit}`
        ],
        keyHighlights: [
          { title: "Region", desc: `${matchedGem.region}, ${matchedGem.state}` },
          { title: "Uncrowded Score", desc: `${matchedGem.uncrowdedScore}% Peaceful & Intimate` },
          { title: "Tags", desc: matchedGem.tags.join(', ') }
        ],
        locationInfo: { state: matchedGem.state, bestSeason: matchedGem.bestTimeToVisit },
        actionSuggestions: [`How to reach ${matchedGem.name}?`, `Plan an offbeat trip to ${matchedGem.state}`, `Explore similar hidden places`]
      };
    }

    // 9. General State Match across all 36 States & UTs
    const state = Object.values(STATES_DATA).find(s => query.includes(s.name.toLowerCase()) || query.includes(s.slug.toLowerCase()));
    if (state) {
      return {
        headline: `${state.name} — ${state.description.split('.')[0]}.`,
        badge: `Capital: ${state.capital}`,
        summary: `${state.description} Historic dynasties include ${state.dynasties.join(', ')}.`,
        image: state.heroImage,
        imageCaption: `${state.name} Heritage Panorama (${state.bestTime})`,
        facts: state.facts,
        keyHighlights: [
          { title: "Architecture", desc: state.architectureStyle },
          { title: "Gastronomy", desc: `${state.cuisine.dishes.slice(0, 3).join(', ')}, ${state.cuisine.sweets[0] || ''}` },
          { title: "Traditional Dress", desc: state.traditionalDress }
        ],
        relatedItems: state.nearbyPlaces.slice(0, 4).map(p => ({
          title: p,
          subtitle: `Key destination in ${state.name}`,
          link: `/destinations/${state.slug}`,
          tag: "Explore"
        })),
        locationInfo: { state: state.name, nearestHub: state.capital, bestSeason: state.bestTime },
        actionSuggestions: [`Plan ${state.name} Itinerary`, `Top festivals in ${state.name}`, `Hidden places in ${state.name}`]
      };
    }

    // 10. Fallback: Intelligent Bharat Heritage Synthesis
    const randomSite = HERITAGE_SITES[Math.floor(Math.random() * HERITAGE_SITES.length)];
    return {
      headline: `Exploring Indian Heritage: ${randomSite.name}`,
      badge: "Virasat Cultural Guide",
      summary: `Bharat's cultural repository spans over five millennia of continuous architectural, artistic, and philosophical wisdom. For your query "${rawQuery}", we recommend exploring the monumental heritage of ${randomSite.name} in ${randomSite.state}.`,
      image: randomSite.heroImage,
      imageCaption: `${randomSite.name}, ${randomSite.state}`,
      facts: randomSite.facts,
      keyHighlights: [
        { title: "Dynasty", desc: randomSite.dynasty },
        { title: "Architecture", desc: randomSite.architectureStyle },
        { title: "Timings", desc: randomSite.timings }
      ],
      locationInfo: { state: randomSite.state, bestSeason: randomSite.bestMonths },
      actionSuggestions: [
        "History of Konark",
        "Gujarat festivals in October",
        "Hidden places in Kerala",
        "Chola temples",
        "Karnataka UNESCO sites"
      ]
    };
  }
}
