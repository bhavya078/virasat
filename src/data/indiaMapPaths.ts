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
    path: 'M 199 36 L 213 38 L 226 45 L 239 51 L 253 58 L 271 67 L 284 74 L 295 81 L 304 91 L 299 100 L 288 108 L 285 115 L 294 122 L 287 129 L 276 137 L 269 146 L 256 139 L 249 135 L 242 125 L 238 116 L 247 106 L 238 97 L 232 87 L 225 78 L 212 69 L 203 59 L 195 45 Z',
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
    path: 'M 181 70 L 189 77 L 198 86 L 207 93 L 198 100 L 186 108 L 184 117 L 191 124 L 197 131 L 202 141 L 206 148 L 215 152 L 224 155 L 228 145 L 224 135 L 236 126 L 238 116 L 247 106 L 238 97 L 232 87 L 225 78 L 212 69 L 196 64 Z',
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
    path: 'M 224 131 L 220 138 L 222 147 L 224 155 L 228 162 L 235 169 L 241 176 L 250 183 L 261 192 L 268 187 L 277 182 L 286 175 L 295 167 L 293 160 L 287 153 L 276 146 L 262 139 L 249 135 L 238 130 Z',
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
    path: 'M 206 148 L 197 155 L 190 165 L 192 175 L 194 184 L 187 191 L 182 201 L 196 210 L 209 215 L 220 207 L 230 200 L 239 192 L 239 183 L 241 176 L 233 166 L 224 157 Z',
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
    path: 'M 295 167 L 286 175 L 277 182 L 268 187 L 261 194 L 266 201 L 274 208 L 285 215 L 297 222 L 310 227 L 324 219 L 335 212 L 342 202 L 340 192 L 329 183 L 313 174 L 304 169 Z',
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
    path: 'M 239 192 L 230 200 L 220 207 L 209 215 L 202 222 L 211 231 L 222 241 L 233 250 L 244 257 L 253 252 L 258 245 L 254 238 L 249 228 L 256 216 L 256 206 L 259 197 L 250 187 L 241 185 Z',
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
    path: 'M 182 203 L 164 213 L 146 228 L 125 243 L 105 258 L 86 273 L 79 287 L 90 301 L 101 318 L 112 334 L 125 343 L 143 353 L 161 359 L 175 354 L 186 366 L 202 361 L 220 348 L 231 331 L 243 317 L 257 302 L 255 288 L 251 273 L 244 259 L 231 248 L 218 236 L 207 224 L 200 215 Z',
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
    path: 'M 112 334 L 125 343 L 143 353 L 161 359 L 175 354 L 183 368 L 174 381 L 167 395 L 160 410 L 155 424 L 157 436 L 150 443 L 144 439 L 137 429 L 135 417 L 131 406 L 115 394 L 95 387 L 75 393 L 61 407 L 72 421 L 88 430 L 106 425 L 115 411 L 109 399 L 93 387 L 71 373 L 80 361 L 98 351 L 107 342 Z',
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
    path: 'M 148 436 L 162 436 L 161 448 L 148 448 Z',
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
    path: 'M 259 211 L 281 218 L 299 224 L 317 222 L 332 231 L 348 242 L 363 254 L 386 265 L 403 277 L 414 291 L 407 303 L 391 315 L 382 330 L 364 345 L 341 338 L 319 329 L 301 320 L 288 308 L 273 294 L 257 285 L 251 273 L 253 257 L 256 242 L 251 228 Z',
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
    path: 'M 257 285 L 273 294 L 288 308 L 301 320 L 319 329 L 341 338 L 364 345 L 368 357 L 359 371 L 345 386 L 324 398 L 302 411 L 277 412 L 255 405 L 239 396 L 221 401 L 203 392 L 192 380 L 183 366 L 197 356 L 215 344 L 227 327 L 241 312 L 255 297 Z',
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
    path: 'M 364 345 L 384 354 L 395 366 L 390 380 L 381 392 L 372 404 L 364 419 L 360 433 L 355 448 L 359 462 L 350 477 L 336 472 L 325 461 L 328 446 L 337 429 L 322 408 L 338 396 L 350 381 L 361 366 Z',
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
    path: 'M 386 265 L 410 267 L 435 271 L 460 276 L 482 282 L 491 296 L 481 311 L 465 321 L 449 333 L 431 334 L 411 327 L 396 320 L 403 306 L 414 291 L 403 277 Z',
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
    path: 'M 411 327 L 431 334 L 449 333 L 465 321 L 481 318 L 490 330 L 485 347 L 471 361 L 458 378 L 442 391 L 419 389 L 408 377 L 402 361 L 395 346 Z',
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
    path: 'M 458 378 L 469 390 L 477 402 L 468 419 L 452 434 L 434 448 L 424 463 L 408 478 L 393 468 L 382 457 L 387 440 L 378 426 L 387 409 L 405 396 L 433 384 Z',
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
    path: 'M 500 265 L 514 274 L 509 284 L 502 294 L 497 306 L 508 317 L 510 336 L 514 353 L 514 370 L 509 389 L 500 401 L 484 399 L 473 390 L 469 376 L 474 359 L 483 342 L 492 327 L 493 311 L 498 294 Z',
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
    cx: 507,
    cy: 258,
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
    path: 'M 541 266 L 554 273 L 547 283 L 561 292 L 581 297 L 599 301 L 610 315 L 628 310 L 637 295 L 646 281 L 660 266 L 672 254 L 660 249 L 638 254 L 622 262 L 597 267 L 577 273 Z',
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
    cx: 646,
    cy: 287,
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
    cx: 630,
    cy: 323,
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
    cx: 604,
    cy: 360,
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
    cx: 577,
    cy: 349,
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
    cx: 568,
    cy: 307,
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
    path: 'M 158 402 L 180 411 L 207 408 L 237 401 L 266 409 L 297 413 L 319 422 L 324 441 L 314 461 L 296 476 L 278 490 L 259 503 L 246 515 L 227 530 L 195 545 L 171 548 L 162 531 L 153 515 L 149 496 L 150 477 L 150 453 L 150 436 L 153 419 Z',
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
    cx: 174,
    cy: 559,
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
    path: 'M 246 515 L 259 503 L 273 514 L 268 534 L 263 553 L 256 572 L 262 591 L 271 605 L 261 620 L 243 639 L 218 647 L 200 638 L 192 619 L 183 595 L 179 572 L 184 548 L 209 533 L 232 523 Z',
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
    path: 'M 278 464 L 301 454 L 316 466 L 329 484 L 322 504 L 311 518 L 292 533 L 274 538 L 261 522 L 257 505 L 275 493 Z',
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
    path: 'M 316 466 L 345 474 L 368 483 L 406 475 L 390 492 L 365 512 L 344 532 L 321 549 L 314 573 L 314 595 L 298 602 L 275 593 L 260 577 L 260 555 L 265 536 L 292 535 L 311 521 L 322 506 L 329 487 Z',
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
    path: 'M 314 595 L 313 609 L 308 628 L 304 645 L 297 662 L 289 681 L 280 701 L 262 720 L 250 730 L 239 721 L 244 704 L 240 685 L 240 666 L 241 649 L 241 639 L 259 620 L 268 605 L 275 593 L 298 600 Z',
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
    cx: 306,
    cy: 638,
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
    cy: 570,
    originalColor: '#95D5CE',
    path: 'M 162 500 L 165 500 L 168 500 L 171 500 L 174 500 L 177 500 L 180 500 L 183 500 L 186 500 L 189 500 L 192 500 L 195 500 L 198 500 L 199 502 L 199 505 L 199 508 L 199 511 L 199 514 L 199 517 L 199 520 L 199 523 L 199 526 L 199 529 L 199 532 L 199 535 L 199 538 L 199 541 L 199 544 L 199 547 L 199 550 L 199 553 L 199 556 L 199 559 L 199 562 L 199 565 L 199 568 L 199 571 L 199 574 L 199 577 L 199 580 L 199 583 L 199 586 L 199 589 L 199 592 L 199 595 L 199 598 L 199 601 L 199 604 L 199 607 L 199 610 L 199 613 L 199 616 L 199 619 L 199 622 L 199 625 L 199 628 L 198 629 L 197 626 L 196 624 L 197 623 L 196 620 L 195 617 L 193 614 L 192 612 L 193 609 L 193 606 L 194 603 L 193 600 L 192 597 L 192 594 L 191 591 L 190 588 L 189 586 L 188 583 L 187 582 L 188 579 L 186 577 L 185 575 L 182 576 L 181 579 L 181 580 L 180 577 L 181 574 L 184 573 L 184 570 L 181 567 L 179 566 L 180 565 L 179 563 L 178 561 L 175 562 L 173 562 L 171 560 L 169 562 L 167 562 L 164 562 L 163 565 L 162 566 L 163 565 L 162 563 L 159 564 L 160 563 L 159 560 L 157 561 L 155 563 L 155 566 L 154 563 L 151 562 L 150 564 L 149 565 L 148 562 L 148 561 L 150 558 L 151 555 L 151 553 L 154 554 L 157 553 L 158 552 L 161 554 L 164 554 L 166 556 L 169 556 L 169 553 L 170 554 L 173 553 L 175 551 L 175 548 L 174 545 L 172 546 L 173 544 L 172 542 L 172 539 L 170 536 L 168 539 L 167 536 L 167 534 L 167 531 L 165 528 L 162 527 L 162 524 L 163 522 L 165 521 L 164 518 L 164 515 L 164 512 L 164 509 L 163 507 L 163 504 L 162 501 Z',
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
    cy: 585,
    originalColor: '#F4A28C',
    path: 'M 639 534 L 642 535 L 645 537 L 646 536 L 647 538 L 647 541 L 647 544 L 646 547 L 646 550 L 644 551 L 647 552 L 646 555 L 645 557 L 647 559 L 645 562 L 645 565 L 646 568 L 646 571 L 649 570 L 650 567 L 651 565 L 651 568 L 652 571 L 653 574 L 652 577 L 652 580 L 653 583 L 650 585 L 652 586 L 653 588 L 656 587 L 659 588 L 659 591 L 658 592 L 657 590 L 655 591 L 653 592 L 650 592 L 647 592 L 647 595 L 645 595 L 647 594 L 645 591 L 643 592 L 642 595 L 644 598 L 645 601 L 644 601 L 642 599 L 639 600 L 640 602 L 642 603 L 644 605 L 645 608 L 644 611 L 643 614 L 642 615 L 640 617 L 637 616 L 634 615 L 635 612 L 633 613 L 632 610 L 634 611 L 633 608 L 631 606 L 633 605 L 634 608 L 635 605 L 636 602 L 634 601 L 632 603 L 634 600 L 633 599 L 635 597 L 637 599 L 640 599 L 643 598 L 641 596 L 638 594 L 636 593 L 635 590 L 634 590 L 633 588 L 634 588 L 634 585 L 634 582 L 633 581 L 634 578 L 632 577 L 633 576 L 632 573 L 635 573 L 632 570 L 633 571 L 636 571 L 635 568 L 634 565 L 632 564 L 632 561 L 634 562 L 634 559 L 633 556 L 634 553 L 632 550 L 634 549 L 634 546 L 633 543 L 633 540 L 634 539 L 634 536 L 637 536 Z',
    unescoCount: 0,
    topAttraction: 'Cellular Jail & Radhanagar Beach'
  },

];

// Outer boundary path for Bharat
export const INDIA_OUTER_BOUNDARY = 'M 212 34 L 217 37 L 221 35 L 224 37 L 228 37 L 229 39 L 234 35 L 235 38 L 230 39 L 234 44 L 238 50 L 244 53 L 250 57 L 255 60 L 259 64 L 261 68 L 267 70 L 270 76 L 274 75 L 279 73 L 285 71 L 290 68 L 285 66 L 291 66 L 297 66 L 303 65 L 309 64 L 315 64 L 321 68 L 324 72 L 324 78 L 326 84 L 322 90 L 321 96 L 317 102 L 312 103 L 310 109 L 308 114 L 305 118 L 301 122 L 300 128 L 306 128 L 308 131 L 312 134 L 308 137 L 310 143 L 311 147 L 308 151 L 303 153 L 299 155 L 294 156 L 292 152 L 289 149 L 286 149 L 289 153 L 291 159 L 293 163 L 294 169 L 296 171 L 302 171 L 305 177 L 308 181 L 313 184 L 319 186 L 323 188 L 326 193 L 329 195 L 334 192 L 331 195 L 336 199 L 342 201 L 341 204 L 339 207 L 333 210 L 329 215 L 327 220 L 325 224 L 323 229 L 325 235 L 331 239 L 337 240 L 341 241 L 342 243 L 347 247 L 350 248 L 352 253 L 358 256 L 363 258 L 369 260 L 375 261 L 380 264 L 383 261 L 389 264 L 393 266 L 398 264 L 400 263 L 406 266 L 412 267 L 415 271 L 421 275 L 425 278 L 431 280 L 437 279 L 442 283 L 448 284 L 454 283 L 456 284 L 462 284 L 467 282 L 472 287 L 478 286 L 481 284 L 486 282 L 483 282 L 482 278 L 481 272 L 482 270 L 485 266 L 485 262 L 487 256 L 488 251 L 494 248 L 499 247 L 502 253 L 502 259 L 505 264 L 511 264 L 517 266 L 523 264 L 529 265 L 533 264 L 535 268 L 539 271 L 545 273 L 551 271 L 557 271 L 561 266 L 561 260 L 556 257 L 553 255 L 553 251 L 558 246 L 564 245 L 568 244 L 570 245 L 574 242 L 579 239 L 581 236 L 585 233 L 583 231 L 587 231 L 591 227 L 596 223 L 600 221 L 603 220 L 608 216 L 612 211 L 618 208 L 624 209 L 630 207 L 633 207 L 636 202 L 640 201 L 646 201 L 651 203 L 654 208 L 660 208 L 660 211 L 661 217 L 659 223 L 664 223 L 670 226 L 676 227 L 679 232 L 676 238 L 672 241 L 676 246 L 678 252 L 678 254 L 673 257 L 667 254 L 661 254 L 656 255 L 654 260 L 651 260 L 647 265 L 645 268 L 639 269 L 639 274 L 644 278 L 645 276 L 648 278 L 651 276 L 654 282 L 650 281 L 647 284 L 642 281 L 639 281 L 638 286 L 644 289 L 642 291 L 640 293 L 638 295 L 634 295 L 630 301 L 631 307 L 628 313 L 627 319 L 623 325 L 624 331 L 621 337 L 615 337 L 609 337 L 604 336 L 607 340 L 606 343 L 606 349 L 607 352 L 606 358 L 608 364 L 612 360 L 615 363 L 618 360 L 624 360 L 630 359 L 633 364 L 630 369 L 624 368 L 620 368 L 615 368 L 611 367 L 609 369 L 605 366 L 602 369 L 607 373 L 605 376 L 603 382 L 599 387 L 596 390 L 592 388 L 586 388 L 585 382 L 586 376 L 585 370 L 580 367 L 582 364 L 581 358 L 578 359 L 581 355 L 577 349 L 576 354 L 575 358 L 576 363 L 572 365 L 568 367 L 562 365 L 558 359 L 556 355 L 554 353 L 549 355 L 543 355 L 542 351 L 540 353 L 534 354 L 530 351 L 526 355 L 524 351 L 523 354 L 519 354 L 514 354 L 515 348 L 512 351 L 512 357 L 512 361 L 512 367 L 515 371 L 513 377 L 515 383 L 515 386 L 516 392 L 515 398 L 511 401 L 509 405 L 505 403 L 502 405 L 496 404 L 495 401 L 489 399 L 489 401 L 483 404 L 489 405 L 484 407 L 482 404 L 477 406 L 476 412 L 475 407 L 471 410 L 471 416 L 472 422 L 471 428 L 469 433 L 467 438 L 462 441 L 459 443 L 453 445 L 447 449 L 443 449 L 439 455 L 433 456 L 429 462 L 429 467 L 427 471 L 427 471 L 425 469 L 420 472 L 423 476 L 420 478 L 419 474 L 415 479 L 413 483 L 409 485 L 403 488 L 397 491 L 399 495 L 405 497 L 409 495 L 414 494 L 420 496 L 426 496 L 430 498 L 425 499 L 419 499 L 415 499 L 409 499 L 403 499 L 398 498 L 393 500 L 387 504 L 381 507 L 376 510 L 372 511 L 372 517 L 372 522 L 370 527 L 364 529 L 358 531 L 352 533 L 347 535 L 346 540 L 342 545 L 338 549 L 333 549 L 331 545 L 327 550 L 323 555 L 323 559 L 324 565 L 324 571 L 325 576 L 325 582 L 325 588 L 327 594 L 329 600 L 327 606 L 329 610 L 331 609 L 329 614 L 326 613 L 323 618 L 326 623 L 321 623 L 318 629 L 315 633 L 310 637 L 312 642 L 314 647 L 313 653 L 313 658 L 314 662 L 314 668 L 316 673 L 313 676 L 309 674 L 303 675 L 299 677 L 300 683 L 296 686 L 294 687 L 293 692 L 295 696 L 301 697 L 304 701 L 301 700 L 296 699 L 290 699 L 286 703 L 283 703 L 277 704 L 276 709 L 274 711 L 272 715 L 269 720 L 265 723 L 260 727 L 256 728 L 250 725 L 244 723 L 242 719 L 237 716 L 234 719 L 233 715 L 233 709 L 231 703 L 228 698 L 227 692 L 224 690 L 227 685 L 226 679 L 223 674 L 220 670 L 219 664 L 218 658 L 215 656 L 216 651 L 211 647 L 213 644 L 209 639 L 203 635 L 198 629 L 196 624 L 196 618 L 192 613 L 193 607 L 194 601 L 192 595 L 191 589 L 188 584 L 187 578 L 184 575 L 181 580 L 180 576 L 185 572 L 181 566 L 181 564 L 179 560 L 176 555 L 174 549 L 172 544 L 171 538 L 168 538 L 168 533 L 164 527 L 162 523 L 165 520 L 164 514 L 163 508 L 162 503 L 162 497 L 160 491 L 157 486 L 156 481 L 154 475 L 155 469 L 155 465 L 156 459 L 156 453 L 153 448 L 154 444 L 154 438 L 156 432 L 160 426 L 160 420 L 158 415 L 157 409 L 161 403 L 156 403 L 154 408 L 153 406 L 155 403 L 155 397 L 154 391 L 150 387 L 148 393 L 146 396 L 150 401 L 148 407 L 144 410 L 138 413 L 132 415 L 126 418 L 124 419 L 120 422 L 114 423 L 109 417 L 103 415 L 99 411 L 96 406 L 90 405 L 88 399 L 83 397 L 79 393 L 78 388 L 75 383 L 76 378 L 81 378 L 85 378 L 91 378 L 95 377 L 101 376 L 107 372 L 112 368 L 114 363 L 108 365 L 102 368 L 97 369 L 91 371 L 85 371 L 80 370 L 78 365 L 72 361 L 68 358 L 68 352 L 64 348 L 64 342 L 68 340 L 73 339 L 76 336 L 80 333 L 86 334 L 92 333 L 98 335 L 104 337 L 106 332 L 110 330 L 115 333 L 120 337 L 125 333 L 122 327 L 122 324 L 122 318 L 121 312 L 117 309 L 116 304 L 111 301 L 109 299 L 108 293 L 108 287 L 104 284 L 99 284 L 99 282 L 96 277 L 96 271 L 97 265 L 100 262 L 105 259 L 106 254 L 109 250 L 114 247 L 120 246 L 126 250 L 131 252 L 137 252 L 143 251 L 146 250 L 150 249 L 152 243 L 153 237 L 157 233 L 163 230 L 168 227 L 172 224 L 176 219 L 180 213 L 182 208 L 185 203 L 191 201 L 195 196 L 196 191 L 199 187 L 203 184 L 208 180 L 207 174 L 207 168 L 208 162 L 212 159 L 218 157 L 217 152 L 211 150 L 208 145 L 202 142 L 197 137 L 192 133 L 187 131 L 187 125 L 187 119 L 187 113 L 183 107 L 182 101 L 186 97 L 192 95 L 196 91 L 196 85 L 193 83 L 189 79 L 183 74 L 178 69 L 172 68 L 170 64 L 170 58 L 171 56 L 173 51 L 178 48 L 182 44 L 188 43 L 194 40 L 200 39 L 206 39 L 211 36 Z';

export function getLocatorBoundary(): string {
  return INDIA_OUTER_BOUNDARY;
}
