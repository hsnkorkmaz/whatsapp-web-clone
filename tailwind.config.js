module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whatsApp: {
          base: "#282D31",
          dark: "#282D31",
          light: "#3E4247",
          lightest: "#B2B3B5"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}