/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#f0f0f0ed",
        tertiary: "#161b22",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px ##4dba87",
      },
      screens: {
        xs: "450px",
        xxs: "640px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
