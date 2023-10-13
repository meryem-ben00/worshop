/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'evnavmd': { 'max': '950px' },
      'evnavsm': { 'max': '815px' },
      'evmd': { 'max': '1300px' },
      'evsm': { 'max': '810px' },
    },
    extend: {

    },
  },
  plugins: [],
}