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
        'hero-bg':  "url('/bg/hero.png')",
        
     
      },
      
      fontFamily: {
        sans: ['Helvetica', ...fontFamily.sans], // Set Helvetica as the default sans-serif
        helvetica: ['Helvetica', 'Arial', 'sans-serif'], // Define a separate class for Helvetica
        roboto: ["Roboto Condensed", "serif"],
        glyphic: ["Faculty Glyphic", "sans-serif"],
        teko: ["Teko", "sans-serif"]
        
      },
      colors: {
        
        "slate-200": "#252933",
        "yellow-500": "#5f8bd6",
        "gray-800":"#1e2026",
        "slate-900":"#1a1d26"
        
      },
      screens: {
        "sc-456": "456px",
        
     
      },
    },
  },
  plugins: [],
};
