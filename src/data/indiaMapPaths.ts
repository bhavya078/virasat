/**
 * INDIA POLITICAL MAP — Calibrated to Official Uploaded Political Map
 * Source of Truth: media_1790499214413.jpg (768 x 768 viewBox)
 * Contains all 28 States and 8 Union Territories with official stateIds,
 * slugs, capitals, authentic pastel colors, and center coordinates.
 */

export interface IndiaRegion {
  stateId: string;
  id: string; // slug matching STATES_DATA key
  name: string;
  slug: string;
  capital: string;
  isUT?: boolean;
  zone: 'North' | 'South' | 'West' | 'East' | 'Central' | 'Northeast' | 'Islands';
  cx: number;
  cy: number;
  labelX?: number;
  labelY?: number;
  path: string;
  originalColor: string; // Pastel palette from uploaded map
  unescoCount: number;
  topAttraction: string;
}

// Convert geographic GPS coordinates to exact pixel (x, y) on 768x768 canvas
export function geo(lat: number, lon: number): string {
  const x = Math.round(22.501271 * lon + 0.492386 * lat - 1497.702259);
  const y = Math.round(-0.548874 * lon - 23.918181 * lat + 966.381202);
  return `${x} ${y}`;
}

export function geoXY(lat: number, lon: number): { cx: number; cy: number; x: number; y: number } {
  const x = Math.round(22.501271 * lon + 0.492386 * lat - 1497.702259);
  const y = Math.round(-0.548874 * lon - 23.918181 * lat + 966.381202);
  return { cx: x, cy: y, x, y };
}

// All 28 States + 8 Union Territories calibrated to the uploaded 768x768 image
export const INDIA_REGIONS: IndiaRegion[] = [
  {
    stateId: 'LA',
    id: 'ladakh',
    name: 'Ladakh',
    slug: 'ladakh',
    capital: 'Leh',
    isUT: true,
    zone: 'North',
    cx: 263,
    cy: 94,
    originalColor: '#C2E28F',
    path: 'M 204 38 L 219 42 L 242 51 L 264 63 L 286 74 L 302 86 L 297 98 L 285 110 L 292 122 L 278 134 L 269 146 L 256 139 L 247 130 L 240 116 L 247 106 L 234 92 L 230 83 L 212 69 L 203 52 Z',
    unescoCount: 1,
    topAttraction: 'Hemis Gompa & Pangong Tso'
  },
  {
    stateId: 'JK',
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    slug: 'jammu-kashmir',
    capital: 'Srinagar / Jammu',
    isUT: true,
    zone: 'North',
    cx: 222,
    cy: 122,
    originalColor: '#CADF9E',
    path: 'M 181 70 L 196 84 L 207 93 L 189 108 L 184 117 L 195 131 L 202 141 L 210 150 L 224 155 L 228 145 L 224 135 L 233 123 L 240 116 L 247 106 L 234 92 L 230 83 L 212 69 L 196 64 Z',
    unescoCount: 1,
    topAttraction: 'Dal Lake & Mughal Gardens'
  },
  {
    stateId: 'HP',
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    slug: 'himachal-pradesh',
    capital: 'Shimla',
    isUT: false,
    zone: 'North',
    cx: 259,
    cy: 160,
    originalColor: '#B8A9D3',
    path: 'M 224 131 L 217 140 L 224 155 L 228 164 L 239 173 L 250 183 L 261 192 L 273 184 L 284 177 L 295 167 L 291 158 L 278 146 L 262 139 L 247 130 Z',
    unescoCount: 2,
    topAttraction: 'Great Himalayan National Park'
  },
  {
    stateId: 'PB',
    id: 'punjab',
    name: 'Punjab',
    slug: 'punjab',
    capital: 'Chandigarh',
    isUT: false,
    zone: 'North',
    cx: 223,
    cy: 199,
    originalColor: '#E8A4C8',
    path: 'M 210 150 L 197 160 L 192 172 L 194 184 L 187 196 L 200 208 L 214 212 L 227 202 L 239 195 L 237 183 L 239 173 L 228 164 L 224 155 Z',
    unescoCount: 1,
    topAttraction: 'Golden Temple, Amritsar'
  },
  {
    stateId: 'CH',
    id: 'chandigarh',
    name: 'Chandigarh',
    slug: 'chandigarh',
    capital: 'Chandigarh',
    isUT: true,
    zone: 'North',
    cx: 236,
    cy: 195,
    originalColor: '#E8A4C8',
    path: 'M 243 187 L 247 187 L 247 191 L 243 191 Z',
    unescoCount: 1,
    topAttraction: 'Capitol Complex'
  },
  {
    stateId: 'UK',
    id: 'uttarakhand',
    name: 'Uttarakhand',
    slug: 'uttarakhand',
    capital: 'Dehradun',
    isUT: false,
    zone: 'North',
    cx: 304,
    cy: 208,
    originalColor: '#92D2C9',
    path: 'M 295 167 L 284 177 L 273 184 L 261 192 L 263 201 L 277 211 L 290 220 L 306 224 L 321 217 L 335 209 L 340 195 L 331 185 L 318 176 L 307 169 Z',
    unescoCount: 2,
    topAttraction: 'Valley of Flowers & Nanda Devi'
  },
  {
    stateId: 'HR',
    id: 'haryana',
    name: 'Haryana',
    slug: 'haryana',
    capital: 'Chandigarh',
    isUT: false,
    zone: 'North',
    cx: 241,
    cy: 231,
    originalColor: '#C5C384',
    path: 'M 239 195 L 227 202 L 214 212 L 204 220 L 215 231 L 226 243 L 237 255 L 249 250 L 256 245 L 254 235 L 249 226 L 259 211 L 254 202 L 261 192 L 250 187 L 237 183 Z',
    unescoCount: 0,
    topAttraction: 'Kurukshetra & Sultanpur'
  },
  {
    stateId: 'DL',
    id: 'delhi',
    name: 'Delhi',
    slug: 'delhi',
    capital: 'New Delhi',
    isUT: true,
    zone: 'North',
    cx: 242,
    cy: 236,
    originalColor: '#5D7052',
    path: 'M 248 233 L 257 233 L 257 245 L 248 245 Z',
    unescoCount: 3,
    topAttraction: 'Red Fort, Qutub Minar, Humayun Tomb'
  },
  {
    stateId: 'RJ',
    id: 'rajasthan',
    name: 'Rajasthan',
    slug: 'rajasthan',
    capital: 'Jaipur',
    isUT: false,
    zone: 'West',
    cx: 178,
    cy: 296,
    originalColor: '#A0D9D9',
    path: 'M 200 208 L 178 213 L 159 228 L 136 245 L 109 258 L 91 270 L 86 287 L 95 306 L 108 325 L 112 341 L 134 348 L 152 357 L 168 352 L 183 364 L 202 361 L 220 346 L 229 327 L 243 312 L 257 297 L 253 283 L 248 269 L 237 255 L 226 243 L 215 231 L 204 220 L 214 212 Z',
    unescoCount: 5,
    topAttraction: 'Amer Fort, Thar Desert & Chittorgarh'
  },
  {
    stateId: 'GJ',
    id: 'gujarat',
    name: 'Gujarat',
    slug: 'gujarat',
    capital: 'Gandhinagar',
    isUT: false,
    zone: 'West',
    cx: 149,
    cy: 373,
    originalColor: '#B3AEDB',
    path: 'M 112 341 L 134 348 L 152 357 L 168 352 L 179 364 L 174 376 L 167 388 L 160 400 L 155 414 L 160 429 L 150 441 L 144 436 L 137 424 L 137 413 L 129 401 L 111 392 L 89 383 L 70 390 L 63 407 L 77 421 L 92 428 L 110 420 L 115 406 L 106 397 L 93 383 L 71 369 L 85 359 L 100 354 Z',
    unescoCount: 4,
    topAttraction: 'Rani ki Vav & Dholavira'
  },
  {
    stateId: 'DH',
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    slug: 'dadra-nagar-haveli-daman-diu',
    capital: 'Daman',
    isUT: true,
    zone: 'West',
    cx: 160,
    cy: 425,
    originalColor: '#B3AEDB',
    path: 'M 150 436 L 159 436 L 159 445 L 150 446 Z',
    unescoCount: 0,
    topAttraction: 'Moti Daman Fort & Jampore Beach'
  },
  {
    stateId: 'UP',
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    capital: 'Lucknow',
    isUT: false,
    zone: 'North',
    cx: 353,
    cy: 294,
    originalColor: '#F8AE9D',
    path: 'M 259 211 L 290 220 L 306 224 L 321 217 L 335 228 L 350 240 L 366 252 L 388 265 L 406 279 L 414 293 L 401 303 L 387 318 L 378 333 L 355 343 L 332 336 L 315 325 L 297 315 L 284 301 L 270 287 L 253 283 L 248 269 L 249 250 L 254 235 L 249 226 Z',
    unescoCount: 3,
    topAttraction: 'Taj Mahal, Agra Fort & Varanasi'
  },
  {
    stateId: 'MP',
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    slug: 'madhya-pradesh',
    capital: 'Bhopal',
    isUT: false,
    zone: 'Central',
    cx: 277,
    cy: 388,
    originalColor: '#D3E98E',
    path: 'M 270 287 L 284 301 L 297 315 L 315 325 L 332 336 L 355 343 L 370 347 L 363 362 L 354 376 L 336 391 L 318 401 L 295 411 L 272 409 L 250 403 L 235 393 L 219 399 L 201 389 L 197 375 L 183 364 L 202 361 L 220 346 L 229 327 L 243 312 L 257 297 Z',
    unescoCount: 3,
    topAttraction: 'Khajuraho, Sanchi & Bhimbetka'
  },
  {
    stateId: 'CT',
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    slug: 'chhattisgarh',
    capital: 'Raipur',
    isUT: false,
    zone: 'Central',
    cx: 380,
    cy: 404,
    originalColor: '#F1B5D8',
    path: 'M 370 347 L 386 356 L 392 370 L 385 383 L 376 395 L 369 407 L 362 424 L 357 438 L 353 455 L 357 467 L 345 479 L 334 472 L 323 463 L 330 444 L 340 424 L 318 401 L 336 391 L 354 376 L 363 362 Z',
    unescoCount: 0,
    topAttraction: 'Bastar Palace & Chitrakote Falls'
  },
  {
    stateId: 'BR',
    id: 'bihar',
    name: 'Bihar',
    slug: 'bihar',
    capital: 'Patna',
    isUT: false,
    zone: 'East',
    cx: 452,
    cy: 300,
    originalColor: '#9CD8D5',
    path: 'M 388 265 L 417 269 L 439 274 L 469 278 L 484 287 L 491 301 L 477 316 L 461 326 L 445 336 L 427 334 L 405 327 L 394 318 L 401 303 L 414 293 L 406 279 Z',
    unescoCount: 2,
    topAttraction: 'Mahabodhi Temple & Nalanda'
  },
  {
    stateId: 'JH',
    id: 'jharkhand',
    name: 'Jharkhand',
    slug: 'jharkhand',
    capital: 'Ranchi',
    isUT: false,
    zone: 'East',
    cx: 433,
    cy: 349,
    originalColor: '#C5BE7A',
    path: 'M 405 327 L 427 334 L 445 336 L 461 326 L 477 321 L 490 332 L 483 349 L 467 364 L 453 381 L 437 393 L 415 389 L 404 375 L 399 358 L 393 347 Z',
    unescoCount: 0,
    topAttraction: 'Baidyanath Dham & Parasnath'
  },
  {
    stateId: 'OD',
    id: 'odisha',
    name: 'Odisha',
    slug: 'odisha',
    capital: 'Bhubaneswar',
    isUT: false,
    zone: 'East',
    cx: 423,
    cy: 416,
    originalColor: '#CFE58A',
    path: 'M 453 381 L 466 393 L 475 404 L 466 421 L 447 436 L 429 451 L 420 465 L 406 478 L 391 466 L 380 454 L 384 438 L 376 423 L 385 406 L 403 394 L 430 381 Z',
    unescoCount: 1,
    topAttraction: 'Konark Sun Temple & Puri'
  },
  {
    stateId: 'WB',
    id: 'west-bengal',
    name: 'West Bengal',
    slug: 'west-bengal',
    capital: 'Kolkata',
    isUT: false,
    zone: 'East',
    cx: 479,
    cy: 357,
    originalColor: '#E79E8B',
    path: 'M 500 267 L 514 277 L 507 286 L 500 296 L 495 308 L 506 320 L 508 339 L 512 356 L 512 372 L 507 392 L 498 401 L 482 397 L 471 388 L 467 373 L 471 357 L 481 340 L 490 325 L 490 308 L 495 291 Z',
    unescoCount: 2,
    topAttraction: 'Sundarbans & Darjeeling Railway'
  },
  {
    stateId: 'SK',
    id: 'sikkim',
    name: 'Sikkim',
    slug: 'sikkim',
    capital: 'Gangtok',
    isUT: false,
    zone: 'Northeast',
    cx: 460,
    cy: 256,
    originalColor: '#BBA8D2',
    path: 'M 501 246 L 514 248 L 518 260 L 514 269 L 500 267 L 496 258 Z',
    unescoCount: 1,
    topAttraction: 'Khangchendzonga National Park'
  },
  {
    stateId: 'AS',
    id: 'assam',
    name: 'Assam',
    slug: 'assam',
    capital: 'Dispur',
    isUT: false,
    zone: 'Northeast',
    cx: 589,
    cy: 275,
    originalColor: '#CDE885',
    path: 'M 541 266 L 554 276 L 545 285 L 558 295 L 581 299 L 596 303 L 607 317 L 625 312 L 635 298 L 644 283 L 658 268 L 671 256 L 658 249 L 635 257 L 620 264 L 595 270 L 574 275 Z',
    unescoCount: 2,
    topAttraction: 'Kaziranga & Majuli River Island'
  },
  {
    stateId: 'AR',
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    slug: 'arunachal-pradesh',
    capital: 'Itanagar',
    isUT: false,
    zone: 'Northeast',
    cx: 636,
    cy: 231,
    originalColor: '#F4A28C',
    path: 'M 581 258 L 597 246 L 620 231 L 643 221 L 672 225 L 688 239 L 703 248 L 687 263 L 664 268 L 649 257 L 626 264 L 599 260 Z',
    unescoCount: 0,
    topAttraction: 'Tawang Monastery & Ziro Valley'
  },
  {
    stateId: 'NL',
    id: 'nagaland',
    name: 'Nagaland',
    slug: 'nagaland',
    capital: 'Kohima',
    isUT: false,
    zone: 'Northeast',
    cx: 662,
    cy: 278,
    originalColor: '#A1D7D7',
    path: 'M 649 269 L 662 273 L 657 287 L 644 302 L 630 305 L 635 288 Z',
    unescoCount: 0,
    topAttraction: 'Hornbill Festival & Dzukou'
  },
  {
    stateId: 'MN',
    id: 'manipur',
    name: 'Manipur',
    slug: 'manipur',
    capital: 'Imphal',
    isUT: false,
    zone: 'Northeast',
    cx: 652,
    cy: 324,
    originalColor: '#B7A5D2',
    path: 'M 635 302 L 648 307 L 643 321 L 629 336 L 611 344 L 612 327 L 625 317 Z',
    unescoCount: 0,
    topAttraction: 'Loktak Floating Lake'
  },
  {
    stateId: 'MZ',
    id: 'mizoram',
    name: 'Mizoram',
    slug: 'mizoram',
    capital: 'Aizawl',
    isUT: false,
    zone: 'Northeast',
    cx: 631,
    cy: 363,
    originalColor: '#F39F8A',
    path: 'M 602 334 L 616 336 L 616 351 L 611 370 L 601 389 L 592 380 L 593 361 L 598 346 Z',
    unescoCount: 0,
    topAttraction: 'Blue Mountain & Reiek'
  },
  {
    stateId: 'TR',
    id: 'tripura',
    name: 'Tripura',
    slug: 'tripura',
    capital: 'Agartala',
    isUT: false,
    zone: 'Northeast',
    cx: 531,
    cy: 350,
    originalColor: '#B5BC71',
    path: 'M 573 333 L 589 332 L 593 346 L 579 361 L 566 366 L 566 352 L 573 342 Z',
    unescoCount: 0,
    topAttraction: 'Unakoti Rock Colossi'
  },
  {
    stateId: 'ML',
    id: 'meghalaya',
    name: 'Meghalaya',
    slug: 'meghalaya',
    capital: 'Shillong',
    isUT: false,
    zone: 'Northeast',
    cx: 536,
    cy: 321,
    originalColor: '#BCABD5',
    path: 'M 540 295 L 558 295 L 581 299 L 596 303 L 596 318 L 574 316 L 551 316 L 540 309 Z',
    unescoCount: 0,
    topAttraction: 'Mawlynnong & Living Root Bridges'
  },
  {
    stateId: 'MH',
    id: 'maharashtra',
    name: 'Maharashtra',
    slug: 'maharashtra',
    capital: 'Mumbai',
    isUT: false,
    zone: 'West',
    cx: 221,
    cy: 454,
    originalColor: '#F5A894',
    path: 'M 156 405 L 178 414 L 205 411 L 234 403 L 263 412 L 295 416 L 317 425 L 321 444 L 312 463 L 294 478 L 275 493 L 257 505 L 243 518 L 225 532 L 193 547 L 171 548 L 162 531 L 153 515 L 149 496 L 150 477 L 150 453 L 150 438 Z',
    unescoCount: 5,
    topAttraction: 'Ajanta, Ellora, Elephanta & Maratha Forts'
  },
  {
    stateId: 'GA',
    id: 'goa',
    name: 'Goa',
    slug: 'goa',
    capital: 'Panaji',
    isUT: false,
    zone: 'South',
    cx: 162,
    cy: 558,
    originalColor: '#8CD0BC',
    path: 'M 168 548 L 180 548 L 182 567 L 175 569 L 168 567 Z',
    unescoCount: 1,
    topAttraction: 'Churches of Old Goa'
  },
  {
    stateId: 'KA',
    id: 'karnataka',
    name: 'Karnataka',
    slug: 'karnataka',
    capital: 'Bengaluru',
    isUT: false,
    zone: 'South',
    cx: 224,
    cy: 595,
    originalColor: '#E2E984',
    path: 'M 243 518 L 257 505 L 270 517 L 265 536 L 260 555 L 253 575 L 260 594 L 268 608 L 259 622 L 241 642 L 218 647 L 200 638 L 192 619 L 183 595 L 179 572 L 184 548 L 209 533 L 232 523 Z',
    unescoCount: 4,
    topAttraction: 'Hampi, Pattadakal & Hoysala Temples'
  },
  {
    stateId: 'TG',
    id: 'telangana',
    name: 'Telangana',
    slug: 'telangana',
    capital: 'Hyderabad',
    isUT: false,
    zone: 'South',
    cx: 301,
    cy: 495,
    originalColor: '#B8BA67',
    path: 'M 278 464 L 301 456 L 316 468 L 329 487 L 322 506 L 311 521 L 292 535 L 274 541 L 261 522 L 257 505 L 275 493 Z',
    unescoCount: 1,
    topAttraction: 'Ramappa Kakatiya Temple & Golconda'
  },
  {
    stateId: 'AP',
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    capital: 'Amaravati',
    isUT: false,
    zone: 'South',
    cx: 286,
    cy: 559,
    originalColor: '#95D5CE',
    path: 'M 316 468 L 345 477 L 368 486 L 406 478 L 390 495 L 365 515 L 344 534 L 321 551 L 314 576 L 314 597 L 298 602 L 275 593 L 260 577 L 260 555 L 265 536 L 292 535 L 311 521 L 322 506 L 329 487 Z',
    unescoCount: 0,
    topAttraction: 'Gandikota Canyon & Lepakshi'
  },
  {
    stateId: 'TN',
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    slug: 'tamil-nadu',
    capital: 'Chennai',
    isUT: false,
    zone: 'South',
    cx: 276,
    cy: 663,
    originalColor: '#AEAAD7',
    path: 'M 314 597 L 313 611 L 308 631 L 304 648 L 296 664 L 289 684 L 280 703 L 262 723 L 250 730 L 239 721 L 244 704 L 240 685 L 240 666 L 241 649 L 241 642 L 259 622 L 268 608 L 275 593 L 298 602 Z',
    unescoCount: 5,
    topAttraction: 'Great Chola Temples & Mahabalipuram'
  },
  {
    stateId: 'KL',
    id: 'kerala',
    name: 'Kerala',
    slug: 'kerala',
    capital: 'Thiruvananthapuram',
    isUT: false,
    zone: 'South',
    cx: 197,
    cy: 681,
    originalColor: '#F39E88',
    path: 'M 192 619 L 200 638 L 218 647 L 222 661 L 226 680 L 228 697 L 239 714 L 250 730 L 239 721 L 244 704 L 240 685 L 240 666 L 241 649 L 229 642 L 209 633 Z',
    unescoCount: 1,
    topAttraction: 'Western Ghats & Padmanabhaswamy'
  },
  {
    stateId: 'PY',
    id: 'puducherry',
    name: 'Puducherry',
    slug: 'puducherry',
    capital: 'Puducherry',
    isUT: true,
    zone: 'South',
    cx: 328,
    cy: 615,
    originalColor: '#AEAAD7',
    path: 'M 303 636 L 308 635 L 308 641 L 303 642 Z',
    unescoCount: 0,
    topAttraction: 'Auroville & French Colony'
  },
  {
    stateId: 'LD',
    id: 'lakshadweep',
    name: 'Lakshadweep',
    slug: 'lakshadweep',
    capital: 'Kavaratti',
    isUT: true,
    zone: 'Islands',
    cx: 175,
    cy: 620,
    originalColor: '#95D5CE',
    path: 'M 133 645 L 151 644 L 150 682 L 158 720 L 140 721 L 132 683 Z',
    unescoCount: 0,
    topAttraction: 'Agatti & Coral Lagoons'
  },
  {
    stateId: 'AN',
    id: 'andaman-nicobar',
    name: 'Andaman and Nicobar Islands',
    slug: 'andaman-nicobar',
    capital: 'Port Blair',
    isUT: true,
    zone: 'Islands',
    cx: 640,
    cy: 600,
    originalColor: '#F4A28C',
    path: 'M 593 590 L 606 590 L 606 616 L 601 633 L 594 652 L 595 688 L 617 736 L 621 750 L 610 752 L 598 743 L 590 719 L 586 676 L 587 629 Z',
    unescoCount: 0,
    topAttraction: 'Cellular Jail & Radhanagar Beach'
  },

];

// Outer boundary path for Bharat
export const INDIA_OUTER_BOUNDARY = 'M 204 38 L 219 42 L 264 63 L 302 86 L 285 110 L 278 134 L 269 146 L 295 167 L 340 195 L 335 209 L 350 240 L 388 265 L 439 274 L 484 287 L 500 267 L 501 246 L 514 248 L 581 258 L 620 231 L 643 221 L 703 248 L 664 268 L 657 287 L 648 307 L 629 336 L 611 370 L 601 389 L 592 380 L 566 352 L 573 333 L 551 316 L 500 296 L 508 339 L 507 392 L 498 401 L 475 404 L 429 451 L 406 478 L 365 515 L 321 551 L 314 597 L 308 631 L 289 684 L 250 730 L 239 714 L 226 680 L 218 647 L 192 619 L 179 572 L 168 548 L 153 515 L 150 477 L 150 441 L 137 424 L 63 407 L 89 383 L 71 369 L 100 354 L 112 341 L 108 325 L 86 287 L 109 258 L 178 213 L 200 208 L 194 184 L 197 160 L 202 141 L 184 117 L 196 84 L 181 70 Z';

export function getLocatorBoundary(): string {
  return INDIA_OUTER_BOUNDARY;
}
