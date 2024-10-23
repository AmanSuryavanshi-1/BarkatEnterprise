/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          white: '#FFFFFF',
          bg: '#C5C1C0',  // grey
          bgVariant: '#F7CE3E',  //yellow
          primary: '#0A1612',
          primaryVariant: '#1A2930', 
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cinzel', 'serif'],
      },
    },
  },
}