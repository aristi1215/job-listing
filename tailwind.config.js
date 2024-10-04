/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Primary': ["League Spartan", 'sans-serif']
      },
      colors: {
        'dark-cyan': 'hsl(180, 29%, 50%)',
        'very-dark-grayish-cyan' : 'hsl(180, 14%, 20%)',
        'dark-grayish-cyan' : 'hsl(180, 8%, 52%)',
        'light-cyan': 'hsl(180, 31%, 95%)',
        'cyan-bg' : 'hsl(180, 52%, 96%)',
        'cyan-bg-filter' : '',


      }
    },
  },
  plugins: [],
}

