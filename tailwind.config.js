/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'std': {
            DEFAULT: '#e3d3ba',
            dark: '#d4bc96',
            comp: '#4267A2',
            text: '#e5ebf5',
            red: '#ab0a0a',
            grey: '#F7F7F7',
            turq: '#A6D1CB',
        },
        rotate: {
          '30': '30deg',
          '60': '60deg',
        },
      },
      minHeight: {
        '30': '30vh'
      },
      dropShadow: {
        'standard': '2px 5px 2px grey'
      },
      animation: {
        'fade': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },

      },

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-3d'),
  ],
}



