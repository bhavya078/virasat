/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#083B2D',
          50: '#F0F7F4',
          100: '#D9ECE4',
          200: '#B0D7C8',
          300: '#7EBD9F',
          400: '#4F9E75',
          500: '#2A7D52',
          600: '#185F3B',
          700: '#0E482C',
          800: '#083B2D', // Primary
          900: '#052A20',
          950: '#021812',
        },
        gold: {
          DEFAULT: '#C49A3A',
          50: '#FAF6ED',
          100: '#F3E9CE',
          200: '#E6D39D',
          300: '#D9BC6C',
          400: '#C49A3A', // Secondary
          500: '#AA7F27',
          600: '#8A631B',
          700: '#694913',
          800: '#4A320C',
          900: '#2D1D06',
        },
        ivory: '#FAF8F4',
        stone: {
          beige: '#F2EEE6',
        },
        saffron: {
          DEFAULT: '#E67E22',
          light: '#F39C12',
          dark: '#D35400',
        },
        charcoal: '#111827',
        forest: '#1E7E34',
        vermillion: '#D9381E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        subheading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '24': '24px',
        'virasat': '24px',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(8, 59, 45, 0.08), 0 0 25px 0 rgba(196, 154, 58, 0.12)',
        'luxury-hover': '0 30px 60px -12px rgba(8, 59, 45, 0.16), 0 0 35px 2px rgba(196, 154, 58, 0.25)',
        'gold-glow': '0 0 25px rgba(196, 154, 58, 0.4)',
        'emerald-glow': '0 0 30px rgba(8, 59, 45, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
