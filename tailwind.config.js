
const colors = require('tailwindcss/colors')

module.exports = {
  future: {},
  purge: {
    content: ['./src/**/*.svelte', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
