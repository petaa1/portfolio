/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },

      colors: {
        background: '#0D1117',    // Dark background (slightly softer than pure black)
        surface: '#161B22',       // Slightly lighter black for cards/sections
        hover: '#21262D',         // Hover states/highlights
        primary: '#58A6FF',       // Primary blue
        secondary: '#60CDFF',     // Brighter blue
        text: {
          primary: '#F0F6FC',     // Brightest white
          secondary: '#C9D1D9',   // Medium white/gray
          tertiary: '#8B949E'     // Subtle gray
        }
      }
    },
  },
  plugins: [],
}