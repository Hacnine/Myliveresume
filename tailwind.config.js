/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg':  "url('/src/assets/images/background/bg2.svg')",
        
     
      },
      
      fontFamily: {
        sans: ['Helvetica', ...fontFamily.sans], // Set Helvetica as the default sans-serif
        helvetica: ['Helvetica', 'Arial', 'sans-serif'], // Define a separate class for Helvetica
        roboto: ["Roboto Condensed", "serif"],
        glyphic: ["Faculty Glyphic", "sans-serif"],
        teko: ["Teko", "sans-serif"]
        
      },
      colors: {
        
        "customgray": "#252526",
        "ligherpink": "#faf7f2"
      
        
        
      },
      screens: {
        "sc-390": "390px",
        "sc-414": "410px",
        "sc-430": "430px",
        "max-sm": "778px",
        "min-sm": "500px"
     
      },
    },
  },
  plugins: [],
};
