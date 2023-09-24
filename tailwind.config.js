/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RobotoLight': ['RobotoLight', 'sans-serif']
      }
    },
  },
  plugins: [],
}