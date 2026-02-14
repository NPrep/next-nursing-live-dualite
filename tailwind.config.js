import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D32F2F',    // Approximate from logo upper semicircle
          blue: '#1A237E',   // Approximate from logo 'N' in ONE
          gold: '#C5A059',   // Approximate from logo border
          dark: '#0D1B2A',   // Darker variant for text/footer
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
};
