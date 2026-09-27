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
export const INDIA_OUTER_BOUNDARY = 'M 199 36 L 213 38 L 226 45 L 239 51 L 264 63 L 302 86 L 285 110 L 278 134 L 269 146 L 295 167 L 340 195 L 335 209 L 350 240 L 388 265 L 439 274 L 484 287 L 500 267 L 501 246 L 514 248 L 581 258 L 620 231 L 643 221 L 703 248 L 664 268 L 657 287 L 648 307 L 629 336 L 611 370 L 601 389 L 592 380 L 566 352 L 573 333 L 551 316 L 500 296 L 508 339 L 507 392 L 498 401 L 475 404 L 429 451 L 406 478 L 365 515 L 321 551 L 314 597 L 308 631 L 289 684 L 250 730 L 239 714 L 226 680 L 218 647 L 192 619 L 179 572 L 168 548 L 153 515 L 150 477 L 150 441 L 137 424 L 63 407 L 89 383 L 71 369 L 100 354 L 112 341 L 108 325 L 86 287 L 109 258 L 178 213 L 200 208 L 194 184 L 197 160 L 202 141 L 184 117 L 196 84 L 181 70 Z';

export function getLocatorBoundary(): string {
  return INDIA_OUTER_BOUNDARY;
}
