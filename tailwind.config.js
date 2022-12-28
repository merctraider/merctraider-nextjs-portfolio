/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'prism-pattern' : "url(/assets/prism.png)", 
        'vintage-pattern' : "url(/assets/vintage-wallpaper.png)"
      }
    },
  },
  plugins: [],
}
