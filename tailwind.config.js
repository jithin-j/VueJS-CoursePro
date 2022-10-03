/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'green': {
          DEFAULT: '#01CB63',
          '50': '#85FEC0',
          '100': '#71FEB5',
          '200': '#48FEA1',
          '300': '#20FE8B',
          '400': '#01F477',
          '500': '#01CB63',
          '600': '#019348',
          '700': '#005B2D',
          '800': '#002411',
          '900': '#000000'
        },
      },
    },
  },
  plugins: [],
}
