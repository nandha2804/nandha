/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--background-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--background-secondary)",
        accent: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-color-dark)",
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundColor: {
        primary: "var(--background-primary)",
        secondary: "var(--background-secondary)",
        accent: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-color-dark)",
        },
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-color-dark)",
        },
      },
      borderColor: {
        accent: {
          DEFAULT: "var(--primary-color)",
          dark: "var(--primary-color-dark)",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px var(--primary-color)",
        button: "0 4px 15px rgba(77, 186, 135, 0.2)",
        "button-hover": "0 6px 20px rgba(77, 186, 135, 0.3)",
      },
      screens: {
        xs: "450px",
        xxs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Assets/herobg.png')",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
