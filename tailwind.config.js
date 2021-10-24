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
        },
        "w-500": "#333739",
        "w-600": "#2E3134",
        "w-700": "#2B2F32",
        "w-900": "#161C21"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}