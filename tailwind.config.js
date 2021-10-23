module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whatsApp: {
          base: "#282D31",
          dark: "#282D31",
          light: "#3E4247"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}