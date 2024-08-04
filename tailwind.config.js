/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'border':'#b7babc',
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Raleway': ['Raleway', 'sans-serif'],
        'GFS': ['GFS+Didot', 'serif']
      },
    },
    screens: {
      'xs': '320px',
      'sm': '720px',
      'md': '820px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}


