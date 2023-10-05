/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'evmd': { 'max': '1300px' },
      // => @media (max-width: 1300px) { ... }

      'evsm': { 'max': '810px' },
      // => @media (max-width: 810px) { ... }
    },
    extend: {

    },
  },
  plugins: [],
}

