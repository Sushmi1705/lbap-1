/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0B96AC', // primary teal from logo
          50: '#e5f7fb',
          100: '#cdeff7',
          200: '#9be0ef',
          300: '#68d0e6',
          400: '#35c1de',
          500: '#0B96AC',
          600: '#0a8196',
          700: '#086680',
          800: '#075069',
          900: '#053953'
        },
        accent: '#00A7FF', // secondary bright blue from logo assets
        orange: '#FF5C00',
        dark: '#03072c',
        lbap: {
          teal: '#0B96AC',
          dark: '#191C1E',
          gray: '#475569',
          muted: '#595959',
          border: '#E2E8F0',
          light: '#F8FAFC'
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B96AC 0%, #00A7FF 100%)'
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 12px rgba(11,150,172,0.6)'
      }
    }
  },
  plugins: []
};
