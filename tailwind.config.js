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
    },
  },
  plugins: [],
}
