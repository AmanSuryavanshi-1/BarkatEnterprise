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

          // white: '',
          // bg: '#FFFFFF',
          // dark: '#403F45',
          // primary: '#FDEC00',
          // primaryLight: '#F4DD08',
          // primaryDark: '#E6CE1D',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cinzel', 'serif'],
      },
    },
  },
}