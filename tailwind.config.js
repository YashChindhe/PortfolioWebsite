/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        foreground: "#111111",
        "gray-light": "#F5F5F7",
        "gray-medium": "#86868B",
        "accent": "#000000",
      },
      fontFamily: {
        main: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.08em",
        tight: "-0.04em",
      },
      lineHeight: {
        tight: "0.85",
      },
    },
  },
  plugins: [],
}
