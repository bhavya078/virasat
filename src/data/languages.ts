import { Language } from '../types';
import { enTranslations } from './translations/en';
import { hiTranslations } from './translations/hi';
import { guTranslations } from './translations/gu';
import { mrTranslations } from './translations/mr';
import { taTranslations } from './translations/ta';
import { teTranslations } from './translations/te';
import { knTranslations } from './translations/kn';
import { mlTranslations } from './translations/ml';
import { paTranslations } from './translations/pa';
import { bnTranslations } from './translations/bn';

export const LANGUAGES: Record<string, Language> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇮🇳',
    greeting: 'Welcome to Virasat',
    translations: enTranslations
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    greeting: 'विरासत में आपका स्वागत है',
    translations: hiTranslations
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    greeting: 'વિરાસતમાં આપનું સ્વાગત છે',
    translations: guTranslations
  },
  mr: {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    greeting: 'विरासत मध्ये आपले स्वागत आहे',
    translations: mrTranslations
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    greeting: 'பாரம்பரியத்திற்கு நல்வரவு',
    translations: taTranslations
  },
  te: {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    greeting: 'విరాసత్‌కు స్వాగతం',
    translations: teTranslations
  },
  kn: {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    greeting: 'ವಿರಾಸತ್‌ಗೆ ಸ್ವಾಗತ',
    translations: knTranslations
  },
  ml: {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    flag: '🇮🇳',
    greeting: 'വിരാസത്തിലേക്ക് സ്വാഗതം',
    translations: mlTranslations
  },
  pa: {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    flag: '🇮🇳',
    greeting: 'ਵਿਰਾਸਤ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ',
    translations: paTranslations
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    greeting: 'বিরাসতে আপনাকে স্বাগতম',
    translations: bnTranslations
  }
};
