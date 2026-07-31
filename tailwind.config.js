/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          blue: '#0B1C39',
          gold: '#1FA463',
          light: '#F4F6F8',
          dark: '#020617',
        },
      },
    },
  },
  plugins: [],
};
