/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#EBEBEB",
        secondary : "#000000",
        dimWhite : "rgb(249,250,253,100)",
      },
      fontFamily:{
         outfit : ["Outfit", "sans-serif"], 
      },
      screens:{
        xs : "480px",
        ss : "620px",
        sm : "760px",
        md : "1060px",
        lg : "1200px",
        xl : "1700px",
      }
    },
  },
  plugins: [],
}

