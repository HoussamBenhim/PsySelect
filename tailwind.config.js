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
        "top-bar": "55px",
      },
      colors: {
        primary: "#00A6FF",
        secondary: "#F4DC72",
        dark: "#383F77",
        elevated: "#726365",
        lightGray: "#8190A5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
