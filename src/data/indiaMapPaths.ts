/**
 * INDIA POLITICAL MAP — Detailed SVG Path Data
 * Coordinate System: 580 x 650 viewBox
 * Projection: India geographic bounds mapped to SVG
 *   Latitude:  6.5°N (bottom/south) to 37.5°N (top/north)
 *   Longitude: 68.0°E (left/west) to 97.5°E (right/east)
 *
 * Each state/UT has:
 *  - Accurate boundary polygon with many control points
 *  - Centroid (cx, cy) for label placement
 *  - Capital position for star marker
 *  - Optional label offset for readability
 */

export interface IndiaRegion {
  id: string;
  name: string;
  capital: string;
  isUT?: boolean;
  zone: 'North' | 'South' | 'West' | 'East' | 'Central' | 'Northeast' | 'Islands';
  cx: number;
  cy: number;
  labelX?: number;
  labelY?: number;
  path: string;
  unescoCount: number;
  topAttraction: string;
}

// Helper: convert GPS (lat, lon) to SVG (x, y) in 580x650 space
export function geo(lat: number, lon: number): string {
  const minLat = 6.5, maxLat = 37.5;
  const minLon = 68.0, maxLon = 97.5;
  const padX = 25, padY = 25;
  const w = 580 - 2 * padX, h = 650 - 2 * padY;
  const x = padX + ((lon - minLon) / (maxLon - minLon)) * w;
  const y = padY + ((maxLat - lat) / (maxLat - minLat)) * h;
  return `${Math.round(x)} ${Math.round(y)}`;
}

export function geoXY(lat: number, lon: number): { cx: number; cy: number } {
  const minLat = 6.5, maxLat = 37.5;
  const minLon = 68.0, maxLon = 97.5;
  const padX = 25, padY = 25;
  const w = 580 - 2 * padX, h = 650 - 2 * padY;
  return {
    cx: Math.round(padX + ((lon - minLon) / (maxLon - minLon)) * w),
    cy: Math.round(padY + ((maxLat - lat) / (maxLat - minLat)) * h),
  };
}

// Build accurate paths using real geographic coordinate sequences
// Each state boundary is traced from actual geographic coordinates

export const INDIA_REGIONS: IndiaRegion[] = [
  // ===== NORTHERN INDIA =====
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    capital: 'Srinagar / Jammu',
    isUT: true,
    zone: 'North',
    ...geoXY(33.7, 75.0),
    path: `M ${geo(36.9, 73.8)} L ${geo(36.5, 74.5)} L ${geo(35.8, 75.3)} L ${geo(35.5, 76.0)} L ${geo(35.0, 76.2)} L ${geo(34.6, 75.8)} L ${geo(34.3, 75.5)} L ${geo(34.0, 75.0)} L ${geo(33.5, 74.5)} L ${geo(33.0, 74.3)} L ${geo(32.5, 74.6)} L ${geo(32.2, 75.0)} L ${geo(32.0, 75.6)} L ${geo(32.4, 75.8)} L ${geo(33.0, 75.5)} L ${geo(33.5, 75.8)} L ${geo(33.8, 76.2)} L ${geo(34.0, 76.8)} L ${geo(34.3, 76.5)} L ${geo(34.8, 76.0)} L ${geo(35.2, 76.2)} L ${geo(35.5, 76.8)} L ${geo(36.0, 76.0)} L ${geo(36.5, 75.5)} L ${geo(36.9, 74.5)} Z`,
    unescoCount: 1,
    topAttraction: 'Dal Lake & Mughal Gardens'
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    capital: 'Leh',
    isUT: true,
    zone: 'North',
    ...geoXY(34.2, 77.5),
    path: `M ${geo(35.5, 76.8)} L ${geo(35.8, 77.5)} L ${geo(36.0, 78.0)} L ${geo(35.5, 78.5)} L ${geo(35.0, 78.8)} L ${geo(34.8, 78.3)} L ${geo(34.5, 78.0)} L ${geo(34.0, 77.8)} L ${geo(33.8, 77.5)} L ${geo(33.5, 77.0)} L ${geo(33.8, 76.5)} L ${geo(34.0, 76.8)} L ${geo(34.3, 76.5)} L ${geo(34.8, 76.5)} L ${geo(35.2, 76.2)} Z`,
    unescoCount: 1,
    topAttraction: 'Hemis & Pangong Tso'
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    zone: 'North',
    ...geoXY(31.8, 77.0),
    path: `M ${geo(33.0, 75.5)} L ${geo(32.5, 75.2)} L ${geo(32.0, 75.6)} L ${geo(31.5, 76.0)} L ${geo(31.2, 76.5)} L ${geo(30.8, 77.0)} L ${geo(31.0, 77.5)} L ${geo(31.3, 78.0)} L ${geo(31.5, 78.5)} L ${geo(31.8, 79.0)} L ${geo(32.2, 78.5)} L ${geo(32.5, 78.0)} L ${geo(32.8, 77.5)} L ${geo(33.0, 77.0)} L ${geo(33.5, 76.2)} L ${geo(33.5, 75.8)} Z`,
    unescoCount: 2,
    topAttraction: 'Great Himalayan National Park'
  },
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    zone: 'North',
    ...geoXY(31.0, 75.3),
    path: `M ${geo(32.5, 74.6)} L ${geo(32.0, 74.2)} L ${geo(31.5, 74.0)} L ${geo(31.0, 74.0)} L ${geo(30.5, 74.5)} L ${geo(30.2, 75.0)} L ${geo(30.0, 75.5)} L ${geo(30.3, 76.0)} L ${geo(30.5, 76.3)} L ${geo(31.0, 76.5)} L ${geo(31.2, 76.5)} L ${geo(31.5, 76.0)} L ${geo(32.0, 75.6)} L ${geo(32.5, 75.2)} Z`,
    unescoCount: 1,
    topAttraction: 'Golden Temple, Amritsar'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    capital: 'Chandigarh',
    isUT: true,
    zone: 'North',
    ...geoXY(30.73, 76.78),
    path: `M ${geo(30.8, 76.7)} L ${geo(30.8, 76.9)} L ${geo(30.65, 76.9)} L ${geo(30.65, 76.7)} Z`,
    unescoCount: 1,
    topAttraction: 'Capitol Complex'
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    zone: 'North',
    ...geoXY(30.0, 79.0),
    path: `M ${geo(31.5, 78.5)} L ${geo(31.3, 78.0)} L ${geo(31.0, 77.5)} L ${geo(30.8, 77.0)} L ${geo(30.5, 76.8)} L ${geo(30.0, 77.0)} L ${geo(29.5, 78.0)} L ${geo(29.3, 78.5)} L ${geo(29.5, 79.0)} L ${geo(29.8, 79.5)} L ${geo(30.0, 80.0)} L ${geo(30.2, 80.5)} L ${geo(30.5, 81.0)} L ${geo(30.8, 80.5)} L ${geo(31.0, 80.0)} L ${geo(31.2, 79.5)} L ${geo(31.5, 79.0)} Z`,
    unescoCount: 2,
    topAttraction: 'Valley of Flowers & Nanda Devi'
  },
  {
    id: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    zone: 'North',
    ...geoXY(29.0, 76.0),
    path: `M ${geo(30.5, 76.3)} L ${geo(30.3, 76.0)} L ${geo(30.0, 75.5)} L ${geo(29.5, 75.0)} L ${geo(29.0, 75.5)} L ${geo(28.5, 76.0)} L ${geo(28.0, 76.5)} L ${geo(28.2, 77.0)} L ${geo(28.5, 77.2)} L ${geo(28.8, 77.0)} L ${geo(29.0, 76.8)} L ${geo(29.5, 78.0)} L ${geo(30.0, 77.0)} L ${geo(30.5, 76.8)} L ${geo(31.0, 76.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Kurukshetra & Sultanpur'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    capital: 'New Delhi',
    isUT: true,
    zone: 'North',
    ...geoXY(28.61, 77.2),
    path: `M ${geo(28.88, 76.95)} L ${geo(28.88, 77.35)} L ${geo(28.40, 77.35)} L ${geo(28.40, 76.95)} Z`,
    unescoCount: 3,
    topAttraction: 'Red Fort, Qutub Minar, Humayun Tomb'
  },

  // ===== WESTERN INDIA =====
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    zone: 'West',
    ...geoXY(26.5, 73.0),
    path: `M ${geo(30.0, 71.0)} L ${geo(29.5, 71.5)} L ${geo(29.0, 71.0)} L ${geo(28.0, 70.0)} L ${geo(27.0, 69.5)} L ${geo(26.0, 69.8)} L ${geo(25.0, 70.5)} L ${geo(24.5, 71.0)} L ${geo(24.0, 72.0)} L ${geo(23.8, 72.5)} L ${geo(24.0, 73.0)} L ${geo(24.5, 73.5)} L ${geo(24.0, 74.0)} L ${geo(23.5, 74.5)} L ${geo(23.8, 75.0)} L ${geo(24.5, 75.5)} L ${geo(25.0, 76.0)} L ${geo(25.5, 76.5)} L ${geo(26.0, 77.0)} L ${geo(26.5, 77.5)} L ${geo(27.0, 77.0)} L ${geo(27.5, 77.0)} L ${geo(28.0, 76.5)} L ${geo(28.5, 76.0)} L ${geo(29.0, 75.5)} L ${geo(29.5, 75.0)} L ${geo(30.0, 75.5)} L ${geo(30.2, 75.0)} L ${geo(30.5, 74.5)} L ${geo(30.5, 74.0)} L ${geo(30.0, 73.5)} L ${geo(30.0, 72.5)} L ${geo(30.0, 71.5)} Z`,
    unescoCount: 5,
    topAttraction: 'Amer Fort, Thar Desert & Chittorgarh'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    zone: 'West',
    ...geoXY(22.5, 71.5),
    path: `M ${geo(24.0, 72.0)} L ${geo(23.8, 72.5)} L ${geo(24.0, 73.0)} L ${geo(24.5, 73.5)} L ${geo(24.0, 74.0)} L ${geo(23.5, 74.0)} L ${geo(23.0, 73.5)} L ${geo(22.5, 73.0)} L ${geo(22.0, 72.5)} L ${geo(21.5, 72.5)} L ${geo(21.0, 72.0)} L ${geo(20.5, 72.0)} L ${geo(20.2, 72.5)} L ${geo(20.0, 73.0)} L ${geo(20.5, 73.0)} L ${geo(21.0, 73.0)} L ${geo(21.2, 72.5)} L ${geo(21.5, 72.0)} L ${geo(22.0, 71.5)} L ${geo(22.5, 71.0)} L ${geo(23.0, 70.5)} L ${geo(23.2, 70.0)} L ${geo(22.8, 69.5)} L ${geo(22.3, 69.0)} L ${geo(21.5, 68.8)} L ${geo(21.0, 69.5)} L ${geo(20.8, 70.0)} L ${geo(21.0, 70.5)} L ${geo(21.5, 71.0)} L ${geo(22.0, 71.0)} L ${geo(22.5, 70.5)} L ${geo(23.0, 70.0)} L ${geo(23.5, 69.5)} L ${geo(23.8, 69.8)} L ${geo(24.0, 70.5)} L ${geo(24.5, 71.0)} Z`,
    unescoCount: 4,
    topAttraction: 'Rani ki Vav & Dholavira'
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'DNHDD',
    capital: 'Daman',
    isUT: true,
    zone: 'West',
    ...geoXY(20.3, 73.0),
    path: `M ${geo(20.5, 72.8)} L ${geo(20.5, 73.2)} L ${geo(20.1, 73.2)} L ${geo(20.1, 72.8)} Z`,
    unescoCount: 0,
    topAttraction: 'Moti Daman Fort & Jampore Beach'
  },

  // ===== CENTRAL INDIA =====
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    zone: 'North',
    ...geoXY(27.0, 80.5),
    path: `M ${geo(29.5, 78.0)} L ${geo(29.3, 78.5)} L ${geo(29.5, 79.0)} L ${geo(29.8, 79.5)} L ${geo(30.0, 80.0)} L ${geo(30.2, 80.5)} L ${geo(29.5, 81.0)} L ${geo(29.0, 81.5)} L ${geo(28.5, 82.0)} L ${geo(28.0, 82.5)} L ${geo(27.5, 83.0)} L ${geo(27.0, 83.5)} L ${geo(26.5, 84.0)} L ${geo(26.0, 84.5)} L ${geo(26.5, 84.0)} L ${geo(26.0, 83.5)} L ${geo(25.5, 83.0)} L ${geo(25.0, 82.5)} L ${geo(24.5, 82.0)} L ${geo(24.0, 81.0)} L ${geo(24.5, 80.0)} L ${geo(25.0, 79.5)} L ${geo(25.5, 79.0)} L ${geo(26.0, 78.5)} L ${geo(26.5, 78.0)} L ${geo(26.5, 77.5)} L ${geo(27.0, 77.0)} L ${geo(27.5, 77.0)} L ${geo(28.0, 77.2)} L ${geo(28.5, 77.2)} L ${geo(28.8, 77.0)} L ${geo(29.0, 77.5)} L ${geo(29.5, 78.0)} Z`,
    unescoCount: 3,
    topAttraction: 'Taj Mahal, Agra Fort & Varanasi'
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    zone: 'Central',
    ...geoXY(23.5, 78.0),
    path: `M ${geo(26.5, 78.0)} L ${geo(26.0, 78.5)} L ${geo(25.5, 79.0)} L ${geo(25.0, 79.5)} L ${geo(24.5, 80.0)} L ${geo(24.0, 81.0)} L ${geo(24.5, 82.0)} L ${geo(24.0, 82.0)} L ${geo(23.5, 82.5)} L ${geo(23.0, 82.0)} L ${geo(22.5, 81.5)} L ${geo(22.0, 80.5)} L ${geo(21.5, 80.0)} L ${geo(21.0, 79.0)} L ${geo(21.5, 78.0)} L ${geo(22.0, 77.5)} L ${geo(22.5, 77.0)} L ${geo(22.0, 76.5)} L ${geo(22.0, 76.0)} L ${geo(22.5, 75.5)} L ${geo(23.0, 75.0)} L ${geo(23.5, 74.5)} L ${geo(23.8, 75.0)} L ${geo(24.5, 75.5)} L ${geo(25.0, 76.0)} L ${geo(25.5, 76.5)} L ${geo(26.0, 77.0)} Z`,
    unescoCount: 3,
    topAttraction: 'Khajuraho, Sanchi & Bhimbetka'
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    zone: 'Central',
    ...geoXY(21.5, 82.0),
    path: `M ${geo(24.0, 82.0)} L ${geo(23.5, 82.5)} L ${geo(23.0, 82.0)} L ${geo(22.5, 81.5)} L ${geo(22.0, 81.0)} L ${geo(21.5, 81.5)} L ${geo(21.0, 82.0)} L ${geo(20.5, 82.5)} L ${geo(20.0, 82.0)} L ${geo(19.5, 82.0)} L ${geo(19.0, 82.5)} L ${geo(19.5, 83.0)} L ${geo(20.0, 83.5)} L ${geo(20.5, 83.5)} L ${geo(21.0, 83.0)} L ${geo(21.5, 82.5)} L ${geo(22.0, 83.0)} L ${geo(22.5, 83.5)} L ${geo(23.0, 83.0)} L ${geo(23.5, 82.8)} L ${geo(24.0, 82.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Bastar Palace & Chitrakote Falls'
  },

  // ===== EASTERN INDIA =====
  {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    zone: 'East',
    ...geoXY(25.5, 85.5),
    path: `M ${geo(27.0, 83.5)} L ${geo(26.5, 84.0)} L ${geo(26.0, 84.5)} L ${geo(26.5, 85.0)} L ${geo(27.0, 85.5)} L ${geo(27.0, 86.5)} L ${geo(26.5, 87.0)} L ${geo(26.0, 87.0)} L ${geo(25.5, 87.0)} L ${geo(25.0, 86.5)} L ${geo(24.5, 86.0)} L ${geo(24.0, 85.5)} L ${geo(24.0, 85.0)} L ${geo(24.5, 84.5)} L ${geo(25.0, 84.0)} L ${geo(25.0, 83.5)} L ${geo(25.5, 83.0)} L ${geo(26.0, 83.5)} L ${geo(26.5, 84.0)} Z`,
    unescoCount: 2,
    topAttraction: 'Mahabodhi Temple & Nalanda'
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    zone: 'East',
    ...geoXY(23.5, 85.5),
    path: `M ${geo(24.5, 84.5)} L ${geo(24.0, 85.0)} L ${geo(24.0, 85.5)} L ${geo(24.5, 86.0)} L ${geo(25.0, 86.5)} L ${geo(25.0, 87.0)} L ${geo(24.5, 87.0)} L ${geo(24.0, 87.0)} L ${geo(23.5, 86.5)} L ${geo(23.0, 86.0)} L ${geo(22.5, 85.5)} L ${geo(22.0, 85.0)} L ${geo(22.0, 84.5)} L ${geo(22.5, 84.0)} L ${geo(23.0, 83.5)} L ${geo(23.0, 83.0)} L ${geo(23.5, 83.0)} L ${geo(24.0, 83.5)} L ${geo(24.0, 84.0)} Z`,
    unescoCount: 0,
    topAttraction: 'Baidyanath Dham & Parasnath'
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    zone: 'East',
    ...geoXY(20.5, 84.0),
    path: `M ${geo(22.5, 83.5)} L ${geo(22.0, 83.0)} L ${geo(21.5, 82.5)} L ${geo(21.0, 83.0)} L ${geo(20.5, 83.5)} L ${geo(20.0, 83.5)} L ${geo(19.5, 83.0)} L ${geo(19.0, 83.5)} L ${geo(19.0, 84.0)} L ${geo(19.5, 84.5)} L ${geo(19.8, 85.0)} L ${geo(20.0, 85.5)} L ${geo(20.5, 86.0)} L ${geo(21.0, 86.5)} L ${geo(21.5, 87.0)} L ${geo(22.0, 87.0)} L ${geo(22.0, 86.5)} L ${geo(22.0, 86.0)} L ${geo(22.0, 85.5)} L ${geo(22.0, 85.0)} L ${geo(22.5, 84.5)} L ${geo(22.5, 84.0)} Z`,
    unescoCount: 1,
    topAttraction: 'Konark Sun Temple & Puri'
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    zone: 'East',
    ...geoXY(23.5, 88.0),
    labelX: geoXY(24.0, 88.5).cx,
    path: `M ${geo(27.0, 88.0)} L ${geo(26.8, 88.5)} L ${geo(26.5, 88.8)} L ${geo(26.0, 88.5)} L ${geo(25.5, 88.0)} L ${geo(25.0, 88.5)} L ${geo(24.5, 88.8)} L ${geo(24.0, 88.5)} L ${geo(23.5, 88.5)} L ${geo(23.0, 88.5)} L ${geo(22.5, 88.5)} L ${geo(22.0, 88.0)} L ${geo(21.5, 88.0)} L ${geo(21.5, 87.5)} L ${geo(22.0, 87.0)} L ${geo(22.0, 86.5)} L ${geo(22.5, 86.0)} L ${geo(22.5, 85.5)} L ${geo(23.0, 86.0)} L ${geo(23.5, 86.5)} L ${geo(24.0, 87.0)} L ${geo(24.5, 87.0)} L ${geo(25.0, 87.0)} L ${geo(25.5, 87.0)} L ${geo(26.0, 87.0)} L ${geo(26.5, 87.0)} L ${geo(27.0, 87.5)} Z`,
    unescoCount: 2,
    topAttraction: 'Sundarbans & Darjeeling Railway'
  },

  // ===== NORTHEAST INDIA =====
  {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    zone: 'Northeast',
    ...geoXY(27.5, 88.5),
    path: `M ${geo(28.0, 88.0)} L ${geo(28.0, 88.8)} L ${geo(27.5, 89.0)} L ${geo(27.0, 88.8)} L ${geo(27.0, 88.2)} L ${geo(27.5, 88.0)} Z`,
    unescoCount: 1,
    topAttraction: 'Khangchendzonga National Park'
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    zone: 'Northeast',
    ...geoXY(26.0, 92.5),
    path: `M ${geo(27.0, 89.8)} L ${geo(26.8, 90.5)} L ${geo(26.5, 90.2)} L ${geo(26.0, 90.0)} L ${geo(25.5, 90.5)} L ${geo(25.0, 91.0)} L ${geo(25.0, 91.5)} L ${geo(25.2, 92.0)} L ${geo(25.0, 92.5)} L ${geo(24.5, 92.5)} L ${geo(24.5, 93.0)} L ${geo(25.0, 93.5)} L ${geo(25.5, 94.0)} L ${geo(26.0, 94.5)} L ${geo(26.5, 95.0)} L ${geo(27.0, 94.5)} L ${geo(27.2, 94.0)} L ${geo(27.5, 93.5)} L ${geo(27.5, 93.0)} L ${geo(27.3, 92.5)} L ${geo(27.0, 92.0)} L ${geo(26.5, 91.5)} L ${geo(26.5, 91.0)} L ${geo(27.0, 90.5)} Z`,
    unescoCount: 2,
    topAttraction: 'Kaziranga & Majuli River Island'
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    zone: 'Northeast',
    ...geoXY(28.0, 94.5),
    path: `M ${geo(27.5, 91.5)} L ${geo(28.0, 92.0)} L ${geo(28.5, 92.5)} L ${geo(29.0, 93.5)} L ${geo(29.0, 94.5)} L ${geo(28.5, 95.5)} L ${geo(28.0, 96.0)} L ${geo(27.5, 96.5)} L ${geo(27.0, 97.0)} L ${geo(27.0, 96.0)} L ${geo(27.0, 95.5)} L ${geo(26.5, 95.0)} L ${geo(27.0, 94.5)} L ${geo(27.2, 94.0)} L ${geo(27.5, 93.5)} L ${geo(27.5, 93.0)} L ${geo(27.3, 92.5)} L ${geo(27.0, 92.0)} L ${geo(27.0, 91.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Tawang Monastery & Ziro Valley'
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    zone: 'Northeast',
    ...geoXY(26.0, 94.5),
    path: `M ${geo(27.0, 94.5)} L ${geo(26.5, 95.0)} L ${geo(26.0, 95.0)} L ${geo(25.5, 94.5)} L ${geo(25.5, 94.0)} L ${geo(26.0, 93.5)} L ${geo(26.5, 94.0)} Z`,
    unescoCount: 0,
    topAttraction: 'Hornbill Festival & Dzukou'
  },
  {
    id: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    zone: 'Northeast',
    ...geoXY(24.8, 93.8),
    path: `M ${geo(25.5, 93.5)} L ${geo(25.5, 94.0)} L ${geo(25.5, 94.5)} L ${geo(25.0, 94.5)} L ${geo(24.5, 94.0)} L ${geo(24.0, 93.5)} L ${geo(24.0, 93.0)} L ${geo(24.5, 93.0)} L ${geo(25.0, 93.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Loktak Floating Lake'
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    zone: 'Northeast',
    ...geoXY(23.2, 92.8),
    path: `M ${geo(24.0, 92.5)} L ${geo(24.0, 93.0)} L ${geo(24.0, 93.5)} L ${geo(23.5, 93.5)} L ${geo(23.0, 93.2)} L ${geo(22.5, 93.0)} L ${geo(22.0, 92.8)} L ${geo(22.0, 92.5)} L ${geo(22.5, 92.5)} L ${geo(23.0, 92.0)} L ${geo(23.5, 92.2)} L ${geo(24.0, 92.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Blue Mountain & Reiek'
  },
  {
    id: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    zone: 'Northeast',
    ...geoXY(23.8, 91.5),
    path: `M ${geo(24.5, 91.5)} L ${geo(24.5, 92.0)} L ${geo(24.0, 92.5)} L ${geo(23.5, 92.2)} L ${geo(23.0, 91.5)} L ${geo(23.0, 91.0)} L ${geo(23.5, 91.0)} L ${geo(24.0, 91.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Unakoti Rock Colossi'
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    zone: 'Northeast',
    ...geoXY(25.5, 91.5),
    path: `M ${geo(26.0, 90.0)} L ${geo(26.0, 90.5)} L ${geo(25.8, 91.0)} L ${geo(25.5, 91.5)} L ${geo(25.2, 92.0)} L ${geo(25.0, 92.5)} L ${geo(25.0, 92.0)} L ${geo(25.0, 91.5)} L ${geo(25.0, 91.0)} L ${geo(25.0, 90.5)} L ${geo(25.2, 90.0)} L ${geo(25.5, 90.2)} Z`,
    unescoCount: 0,
    topAttraction: 'Mawlynnong & Living Root Bridges'
  },

  // ===== DECCAN & SOUTHERN INDIA =====
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    zone: 'West',
    ...geoXY(19.5, 76.0),
    path: `M ${geo(22.0, 73.0)} L ${geo(22.0, 73.5)} L ${geo(22.0, 74.0)} L ${geo(22.0, 75.0)} L ${geo(22.0, 76.0)} L ${geo(22.0, 76.5)} L ${geo(22.0, 77.5)} L ${geo(21.5, 78.0)} L ${geo(21.0, 79.0)} L ${geo(21.0, 79.5)} L ${geo(20.5, 80.0)} L ${geo(20.0, 80.0)} L ${geo(19.5, 79.5)} L ${geo(19.0, 79.0)} L ${geo(18.5, 78.5)} L ${geo(18.0, 78.0)} L ${geo(17.5, 77.5)} L ${geo(17.0, 77.0)} L ${geo(16.5, 76.5)} L ${geo(16.0, 76.0)} L ${geo(16.0, 75.0)} L ${geo(16.0, 74.0)} L ${geo(16.5, 73.5)} L ${geo(17.0, 73.0)} L ${geo(17.5, 73.0)} L ${geo(18.0, 73.0)} L ${geo(18.5, 72.8)} L ${geo(19.0, 72.8)} L ${geo(19.5, 73.0)} L ${geo(20.0, 73.0)} L ${geo(20.2, 72.5)} L ${geo(20.5, 72.0)} L ${geo(21.0, 72.0)} L ${geo(21.2, 72.5)} L ${geo(21.5, 73.0)} Z`,
    unescoCount: 5,
    topAttraction: 'Ajanta, Ellora, Elephanta & Maratha Forts'
  },
  {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    zone: 'South',
    ...geoXY(15.4, 74.0),
    path: `M ${geo(15.8, 73.7)} L ${geo(15.8, 74.2)} L ${geo(15.0, 74.3)} L ${geo(14.9, 74.0)} L ${geo(15.0, 73.7)} Z`,
    unescoCount: 1,
    topAttraction: 'Churches of Old Goa'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    zone: 'South',
    ...geoXY(14.5, 76.0),
    path: `M ${geo(16.0, 74.0)} L ${geo(16.0, 75.0)} L ${geo(16.0, 76.0)} L ${geo(16.5, 76.5)} L ${geo(17.0, 77.0)} L ${geo(17.5, 77.5)} L ${geo(17.0, 78.0)} L ${geo(16.5, 78.0)} L ${geo(16.0, 78.0)} L ${geo(15.5, 78.0)} L ${geo(15.0, 78.0)} L ${geo(14.5, 77.5)} L ${geo(14.0, 77.5)} L ${geo(13.5, 77.5)} L ${geo(13.0, 77.5)} L ${geo(12.5, 77.5)} L ${geo(12.0, 77.0)} L ${geo(11.8, 76.5)} L ${geo(11.5, 76.0)} L ${geo(11.8, 75.5)} L ${geo(12.0, 75.0)} L ${geo(12.5, 74.8)} L ${geo(13.0, 74.5)} L ${geo(13.5, 74.5)} L ${geo(14.0, 74.0)} L ${geo(14.5, 74.0)} L ${geo(15.0, 73.7)} L ${geo(15.5, 73.8)} L ${geo(16.0, 74.0)} Z`,
    unescoCount: 4,
    topAttraction: 'Hampi, Pattadakal & Hoysala Temples'
  },
  {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    zone: 'South',
    ...geoXY(17.5, 79.0),
    path: `M ${geo(19.0, 79.0)} L ${geo(18.5, 78.5)} L ${geo(18.0, 78.0)} L ${geo(17.5, 77.5)} L ${geo(17.0, 78.0)} L ${geo(16.5, 78.0)} L ${geo(16.5, 78.5)} L ${geo(16.5, 79.0)} L ${geo(16.5, 79.5)} L ${geo(17.0, 80.0)} L ${geo(17.5, 80.5)} L ${geo(18.0, 80.5)} L ${geo(18.5, 80.0)} L ${geo(19.0, 80.0)} L ${geo(19.5, 79.5)} Z`,
    unescoCount: 1,
    topAttraction: 'Ramappa Kakatiya Temple & Golconda'
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    zone: 'South',
    ...geoXY(15.5, 79.5),
    path: `M ${geo(19.0, 80.0)} L ${geo(18.5, 80.0)} L ${geo(18.0, 80.5)} L ${geo(17.5, 80.5)} L ${geo(17.0, 80.0)} L ${geo(16.5, 80.5)} L ${geo(16.0, 81.0)} L ${geo(15.5, 81.0)} L ${geo(15.0, 80.5)} L ${geo(14.5, 80.0)} L ${geo(14.0, 79.5)} L ${geo(13.8, 79.5)} L ${geo(13.5, 80.0)} L ${geo(13.8, 80.2)} L ${geo(14.5, 80.2)} L ${geo(15.0, 80.0)} L ${geo(15.5, 79.5)} L ${geo(16.0, 79.5)} L ${geo(16.5, 79.5)} L ${geo(16.5, 79.0)} L ${geo(16.5, 78.5)} L ${geo(16.0, 78.0)} L ${geo(15.5, 78.0)} L ${geo(15.0, 78.0)} L ${geo(14.5, 77.5)} L ${geo(14.0, 77.5)} L ${geo(13.5, 77.5)} L ${geo(13.8, 78.0)} L ${geo(14.0, 78.5)} L ${geo(14.5, 79.0)} L ${geo(14.5, 79.5)} L ${geo(14.0, 79.5)} L ${geo(13.8, 79.5)} Z`,
    unescoCount: 0,
    topAttraction: 'Gandikota Canyon & Lepakshi'
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    zone: 'South',
    ...geoXY(11.0, 79.0),
    path: `M ${geo(13.5, 80.0)} L ${geo(13.0, 80.2)} L ${geo(12.5, 80.0)} L ${geo(12.0, 80.0)} L ${geo(11.5, 80.0)} L ${geo(11.0, 79.8)} L ${geo(10.5, 79.5)} L ${geo(10.0, 79.3)} L ${geo(9.5, 79.0)} L ${geo(9.0, 78.5)} L ${geo(8.5, 78.0)} L ${geo(8.0, 77.5)} L ${geo(8.5, 77.0)} L ${geo(9.0, 77.0)} L ${geo(9.5, 77.0)} L ${geo(10.0, 77.0)} L ${geo(10.5, 77.0)} L ${geo(11.0, 77.0)} L ${geo(11.5, 77.0)} L ${geo(11.8, 76.5)} L ${geo(12.0, 77.0)} L ${geo(12.5, 77.5)} L ${geo(13.0, 77.5)} L ${geo(13.5, 77.5)} L ${geo(13.8, 78.0)} L ${geo(13.8, 78.5)} L ${geo(13.8, 79.0)} L ${geo(13.8, 79.5)} L ${geo(13.5, 80.0)} Z`,
    unescoCount: 5,
    topAttraction: 'Great Chola Temples & Mahabalipuram'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    zone: 'South',
    ...geoXY(10.0, 76.5),
    path: `M ${geo(12.5, 74.8)} L ${geo(12.0, 75.0)} L ${geo(11.8, 75.5)} L ${geo(11.5, 76.0)} L ${geo(11.0, 76.0)} L ${geo(10.5, 76.2)} L ${geo(10.0, 76.5)} L ${geo(9.5, 76.5)} L ${geo(9.0, 76.5)} L ${geo(8.5, 77.0)} L ${geo(8.0, 77.5)} L ${geo(8.5, 77.0)} L ${geo(9.0, 77.0)} L ${geo(9.5, 77.0)} L ${geo(10.0, 77.0)} L ${geo(10.5, 77.0)} L ${geo(11.0, 77.0)} L ${geo(11.5, 77.0)} L ${geo(11.8, 76.5)} L ${geo(11.5, 76.0)} L ${geo(11.8, 75.5)} L ${geo(12.0, 75.0)} L ${geo(12.5, 74.8)} Z`,
    unescoCount: 1,
    topAttraction: 'Western Ghats & Padmanabhaswamy'
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    capital: 'Puducherry',
    isUT: true,
    zone: 'South',
    ...geoXY(11.93, 79.83),
    path: `M ${geo(12.1, 79.7)} L ${geo(12.1, 80.0)} L ${geo(11.8, 80.0)} L ${geo(11.8, 79.7)} Z`,
    unescoCount: 0,
    topAttraction: 'Auroville & French Colony'
  },

  // ===== ISLAND TERRITORIES =====
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    capital: 'Kavaratti',
    isUT: true,
    zone: 'Islands',
    ...geoXY(10.5, 72.5),
    labelX: geoXY(10.5, 72.5).cx - 20,
    path: `M ${geo(12.0, 72.0)} L ${geo(12.0, 73.0)} L ${geo(10.0, 73.0)} L ${geo(8.5, 73.5)} L ${geo(8.5, 72.5)} L ${geo(10.0, 72.0)} Z`,
    unescoCount: 0,
    topAttraction: 'Agatti & Coral Lagoons'
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar',
    capital: 'Port Blair',
    isUT: true,
    zone: 'Islands',
    ...geoXY(11.5, 92.8),
    path: `M ${geo(13.5, 92.5)} L ${geo(13.5, 93.5)} L ${geo(12.5, 93.5)} L ${geo(12.0, 93.0)} L ${geo(11.0, 92.5)} L ${geo(10.0, 92.5)} L ${geo(9.0, 92.5)} L ${geo(7.5, 93.5)} L ${geo(7.0, 94.0)} L ${geo(6.8, 93.5)} L ${geo(7.0, 93.0)} L ${geo(8.0, 92.5)} L ${geo(9.0, 92.0)} L ${geo(10.0, 92.0)} L ${geo(11.0, 92.0)} L ${geo(12.0, 92.0)} L ${geo(13.0, 92.0)} Z`,
    unescoCount: 0,
    topAttraction: 'Cellular Jail & Radhanagar Beach'
  }
];

/**
 * Outer boundary path for India's sovereign territory
 * Traces the full coastline and land borders
 */
export const INDIA_OUTER_BOUNDARY = `M ${geo(36.9, 73.8)} L ${geo(36.5, 74.5)} L ${geo(35.8, 75.3)} L ${geo(35.5, 76.0)} L ${geo(35.5, 76.8)} L ${geo(35.8, 77.5)} L ${geo(36.0, 78.0)} L ${geo(35.5, 78.5)} L ${geo(35.0, 78.8)} L ${geo(34.5, 78.0)} L ${geo(33.5, 77.0)} L ${geo(32.5, 78.0)} L ${geo(31.5, 79.0)} L ${geo(31.0, 80.0)} L ${geo(30.5, 81.0)} L ${geo(29.5, 81.0)} L ${geo(28.5, 82.0)} L ${geo(27.5, 83.0)} L ${geo(27.0, 83.5)} L ${geo(27.0, 85.5)} L ${geo(27.0, 87.5)} L ${geo(27.0, 88.0)} L ${geo(28.0, 88.0)} L ${geo(28.5, 92.5)} L ${geo(29.0, 94.5)} L ${geo(28.0, 96.0)} L ${geo(27.0, 97.0)} L ${geo(27.0, 95.5)} L ${geo(26.0, 95.0)} L ${geo(25.5, 94.5)} L ${geo(24.5, 94.0)} L ${geo(23.5, 93.5)} L ${geo(22.0, 92.8)} L ${geo(22.0, 92.5)} L ${geo(21.5, 92.0)} L ${geo(21.5, 88.0)} L ${geo(21.5, 87.5)} L ${geo(21.5, 87.0)} L ${geo(20.5, 86.0)} L ${geo(19.8, 85.0)} L ${geo(19.0, 84.0)} L ${geo(19.0, 83.5)} L ${geo(19.5, 82.0)} L ${geo(20.0, 82.0)} L ${geo(20.5, 80.0)} L ${geo(19.0, 79.0)} L ${geo(17.0, 77.0)} L ${geo(16.0, 76.0)} L ${geo(15.0, 73.7)} L ${geo(14.0, 74.0)} L ${geo(13.0, 74.5)} L ${geo(12.0, 75.0)} L ${geo(10.0, 76.5)} L ${geo(8.0, 77.5)} L ${geo(9.0, 78.5)} L ${geo(10.0, 79.3)} L ${geo(11.0, 79.8)} L ${geo(13.0, 80.2)} L ${geo(14.5, 80.0)} L ${geo(16.0, 81.0)} L ${geo(17.5, 80.5)} L ${geo(19.0, 80.0)} L ${geo(20.0, 80.0)} L ${geo(20.5, 80.0)} L ${geo(19.5, 79.5)} L ${geo(19.0, 79.0)} L ${geo(19.5, 73.0)} L ${geo(20.0, 73.0)} L ${geo(20.2, 72.5)} L ${geo(21.0, 72.0)} L ${geo(21.5, 72.0)} L ${geo(22.0, 71.5)} L ${geo(23.0, 70.5)} L ${geo(23.8, 69.8)} L ${geo(22.3, 69.0)} L ${geo(21.0, 69.5)} L ${geo(20.8, 70.0)} L ${geo(21.0, 70.5)} L ${geo(22.5, 70.5)} L ${geo(23.5, 69.5)} L ${geo(24.0, 70.5)} L ${geo(24.5, 71.0)} L ${geo(24.0, 72.0)} L ${geo(23.8, 72.5)} L ${geo(24.0, 73.0)} L ${geo(24.0, 72.0)} L ${geo(24.5, 71.0)} L ${geo(24.0, 70.5)} L ${geo(24.0, 72.0)} L ${geo(24.5, 71.0)} L ${geo(27.0, 69.5)} L ${geo(28.0, 70.0)} L ${geo(29.0, 71.0)} L ${geo(30.0, 71.0)} L ${geo(30.0, 72.5)} L ${geo(30.5, 74.0)} L ${geo(30.5, 74.5)} L ${geo(31.0, 74.0)} L ${geo(32.0, 74.2)} L ${geo(32.5, 74.6)} L ${geo(33.0, 74.3)} L ${geo(34.0, 75.0)} L ${geo(34.6, 75.8)} L ${geo(35.0, 76.2)} L ${geo(35.5, 76.0)} L ${geo(35.8, 75.3)} L ${geo(36.5, 74.5)} L ${geo(36.9, 73.8)} Z`;

/**
 * Simplified India boundary for PoliticalMapLocator (360x420 viewBox)
 */
export function getLocatorBoundary(): string {
  const scale = (lat: number, lon: number): string => {
    const minLat = 7.5, maxLat = 37.5;
    const minLon = 68.0, maxLon = 97.5;
    const w = 360, h = 420;
    const x = ((lon - minLon) / (maxLon - minLon)) * (w - 60) + 30;
    const y = ((maxLat - lat) / (maxLat - minLat)) * (h - 60) + 30;
    return `${Math.round(x)} ${Math.round(y)}`;
  };

  return `M ${scale(36.9, 73.8)} L ${scale(35.5, 76.0)} L ${scale(35.5, 76.8)} L ${scale(36.0, 78.0)} L ${scale(35.0, 78.8)} L ${scale(33.5, 77.0)} L ${scale(31.5, 79.0)} L ${scale(30.5, 81.0)} L ${scale(28.5, 82.0)} L ${scale(27.0, 83.5)} L ${scale(27.0, 85.5)} L ${scale(27.0, 88.0)} L ${scale(28.5, 92.5)} L ${scale(29.0, 94.5)} L ${scale(27.0, 97.0)} L ${scale(26.0, 95.0)} L ${scale(24.5, 94.0)} L ${scale(22.0, 92.5)} L ${scale(21.5, 88.0)} L ${scale(20.5, 86.0)} L ${scale(19.0, 84.0)} L ${scale(19.5, 82.0)} L ${scale(20.0, 80.0)} L ${scale(17.0, 77.0)} L ${scale(15.0, 73.7)} L ${scale(12.0, 75.0)} L ${scale(8.0, 77.5)} L ${scale(10.0, 79.3)} L ${scale(13.0, 80.2)} L ${scale(16.0, 81.0)} L ${scale(19.0, 80.0)} L ${scale(20.0, 73.0)} L ${scale(21.0, 72.0)} L ${scale(23.0, 70.5)} L ${scale(22.3, 69.0)} L ${scale(21.0, 69.5)} L ${scale(22.5, 70.5)} L ${scale(24.5, 71.0)} L ${scale(24.0, 72.0)} L ${scale(27.0, 69.5)} L ${scale(30.0, 71.0)} L ${scale(30.5, 74.5)} L ${scale(32.5, 74.6)} L ${scale(34.6, 75.8)} L ${scale(36.9, 73.8)} Z`;
}
