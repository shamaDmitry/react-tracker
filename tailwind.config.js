/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pt: ['PT Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        primary: {
          400: '#5ECAAA',
          500: '#03A473',
        },
        secondary: {
          100: '#F1F1F1',
          200: '#E5E5E5',
          300: '#DBDBDB',
          400: '#C4C4C4',
        },
        dark: {
          100: '#A0A0A0',
          200: '#9A9A9A',
          300: '#646464',
          400: '#363636',
        },
        danger: {
          400: '#F29090',
          500: '#EA5050',
        },
      },
    },
  },
  plugins: [],
};
