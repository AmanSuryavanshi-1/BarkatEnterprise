/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          // white: '#FFFFFF',
          // bg: '#1A120B',
          // bgLight: '#2C1E12',
          // bgVariant: '#3C2A21',
          // primary: '#D5CEA3',
          // primaryLight: '#E5E5CB',
          // primaryDark: '#C2B280',

          white: '#FFFFFF',
          bg: '#F0F8FF',
          bgLight: '#F8FBFF',
          bgVariant: '#E6F3FF',
          primary: '#1E3A8A',
          primaryLight: '#3B82F6',
          primaryDark: '#1E40AF',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Cinzel', 'serif'],
      },
    },
  },
}