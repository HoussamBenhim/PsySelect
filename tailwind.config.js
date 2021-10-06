module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        "top-bar": "100px",
      },
      colors: {
        primary: "#00A6FF",
        secondary: "#F4DC72",
        dark: "#383F77",
        elevated: "#dfe8ef",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
