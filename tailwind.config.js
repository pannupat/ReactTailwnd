/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    backgroundImage:{
      'hero': "url('../src/img/bgnew.jpg')",
      'hero2': "url('../src/img/bg2.jpg')",

    }
  },
  plugins: [],
}