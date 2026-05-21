/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#111214",
        mist: "#f4f0e8",
        gold: "#c8a96a",
        copper: "#b66b42"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Manrope", "ui-serif", "serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(200, 169, 106, 0.18)"
      }
    }
  },
  plugins: []
};
