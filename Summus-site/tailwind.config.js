/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        paper: "#F5F3EF",
        gold: "#C9A96E",
        terra: "#B85C38",
        sage: "#7A8B6F",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        "fluid-h1": "clamp(2rem, 7vw, 5.5rem)",
        "fluid-h2": "clamp(1.5rem, 4.5vw, 3.25rem)",
        "fluid-h3": "clamp(1.25rem, 3vw, 2rem)",
        "fluid-body": "clamp(0.95rem, 1.6vw, 1.15rem)",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};