const env = process.env.NODE_ENV;

module.exports = {
  purge: [
    "./app/**/*.html",
    "./app/**/*.erb",
    "./app/**/*.vue",
    "./app/**/*.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
