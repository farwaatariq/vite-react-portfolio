/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fade: "#222222",
        cream: "#F4EEEA",
      }
    },
  },
  plugins: [],
}

