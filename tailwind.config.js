/** @type {import('tailwindcss').Config} */
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
        roboto: ["Roboto Condensed", "serif"],
        glyphic: ["Faculty Glyphic", "sans-serif"],
        teko: ["Teko", "sans-serif"]
        
      },
      colors: {
        
        "customred": "#BD1F17",
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
