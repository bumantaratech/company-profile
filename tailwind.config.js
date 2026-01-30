/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f1ff",
          100: "#cfe2ff",
          200: "#9fc5ff",
          300: "#6ea8ff",
          400: "#3e8bff",
          500: "#0e6cff",
          600: "#0b56cc",
          700: "#084199",
          800: "#052b66",
          900: "#031633",
        },
        industrial: {
          navy: "#0b1f3a",
          steel: "#2b2f36",
          graphite: "#1f2329",
          yellow: "#f5c518",
          concrete: "#6b7280",
        },
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        "hero-industrial": "url('./src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
