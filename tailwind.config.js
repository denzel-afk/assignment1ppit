/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:'#FF6363',
        secondary:{
          100: '#e2e2d5',
          200: '#888883',
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

