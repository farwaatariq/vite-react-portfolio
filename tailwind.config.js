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
        cream: {
          100: "#F4EEEA",
          200: "#D0B9A9",
        },
        pie: "#E6D9D0",
        sage: {
          100: "#FAFCED",
          200: "#EEF7C7",
          300: "#dcef8d",
        },
      }
    },
  },
  plugins: [],
}

