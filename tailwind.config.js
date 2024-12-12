/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dis/index.html'],
  theme: {
    extend: {
      fontFamily: {
        san: ['Roboto, sans-serif'],
        afon: ['apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji']
      },
      backgroundImage: {
        'im': 'linear-gradient(270deg, #b2102f, #ff1744)',
        'it': 'linear-gradient(270deg, #b2102f, #ff1744)',
        'gr': 'linear-gradient(94deg,#b6842d,#ebda8d 55%,#b7862f)',
        'sk': 'linear-gradient(94deg,#b6842d,#ebda8d 55%,#b7862f)',
        'wrap': 'linear-gradient(94deg, rgb(182, 132, 45), rgb(235, 218, 141) 55%, rgb(183, 134, 47));'

      },
      skew: {
        '39': '39deg',
      },
      screens: {
        'ml': '1140px',
      },
    },
  },
  plugins: [],
}

