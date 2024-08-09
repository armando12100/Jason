/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      // => @media (min-width: 576px) { ... }
    },
    extend: {
      colors: {
        'brown': '#210002'
      }
    }
  },
  plugins: [],
}