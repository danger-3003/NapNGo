/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#BE2623",
        secondary:"#0E3746",
        accent:"#EAE8DC",
        bg:"#F4F2EC"
      }
    },
  },
  plugins: [],
}