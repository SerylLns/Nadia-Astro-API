const env = process.env.NODE_ENV;

module.exports = {
  purge: {
    enable: env !== 'development',
    content: ["./app/views/**/*.html.erb"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
