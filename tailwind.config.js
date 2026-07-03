/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lbap: {
          teal: '#0B96AC',
          dark: '#191C1E',
          gray: '#475569',
          muted: '#595959',
          border: '#E2E8F0',
          light: '#F8FAFC'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],   // 13px (was 12px)
        'sm': ['0.9375rem', { lineHeight: '1.5rem' }],    // 15px (was 14px)
        'base': ['1.0625rem', { lineHeight: '1.625rem' }], // 17px (was 16px)
        'lg': ['1.1875rem', { lineHeight: '1.75rem' }],    // 19px (was 18px)
        'xl': ['1.375rem', { lineHeight: '1.875rem' }],   // 22px (was 20px)
        '2xl': ['1.625rem', { lineHeight: '2.125rem' }],   // 26px (was 24px)
        '3xl': ['2rem', { lineHeight: '2.5rem' }],        // 32px (was 30px)
        '4xl': ['2.5rem', { lineHeight: '3rem' }],        // 40px (was 36px)
        '5xl': ['3.25rem', { lineHeight: '3.75rem' }],    // 52px (was 48px)
        '6xl': ['4.25rem', { lineHeight: '4.75rem' }],    // 68px (was 60px)
      },
    },
  },
  plugins: [],
}
