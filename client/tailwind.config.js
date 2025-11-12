/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      backgroundImage: {
        'cafeDesign5' : "url('./src/assets/cafeDesign5.jpg')",
      }
    },
  },
  plugins: [],
}

