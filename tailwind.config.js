/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0050E6',
        'brand-dark-blue': '#002366',
        'brand-green': '#00CC66',
        'brand-red': '#E60000',
        'brand-orange': '#FF9933',
        'brand-gray': '#586A8D',
        'brand-gray-blue': '#E6EEFF'
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       }
    },
  },
  plugins: [],
}