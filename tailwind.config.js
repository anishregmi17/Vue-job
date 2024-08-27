/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Corrected braces
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Capitalized the font name
      },
      gridTemplateColumns: {
        "70/30": "70% 30%", // Added space between percentages
      },
    },
  },
  plugins: [],
};
