/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yellow:{
          500:'#FFBD3E',
        },
        brown:{
          500:'#2C2222',
        },
    },
  },
  plugins: [],
}
}