/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '460px',
      }
    },
  },
  plugins: [],
}