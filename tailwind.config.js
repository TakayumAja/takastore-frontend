/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        second: {
          blue: "#377DFF",
          green: "#38CB89",
          orange: "#FFAB00",
          red: "#FF5630",
        },
        natural: {
          100: "#FEFEFE",
          200: "#F3F5F7",
          300: "#E8ECEF",
          400: "#6C7275",
          500: "#343839",
          600: "#232627",
          700: "#141718",
        },
      },
    },
  },
  plugins: [],
};
