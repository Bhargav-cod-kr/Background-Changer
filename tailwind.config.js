/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-red-500",
    "bg-yellow-500",
    "bg-white"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

