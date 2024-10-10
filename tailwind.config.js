/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '1rem': '1rem'
      },
      colors: {
        '#a34cdb': '#a34cdb'
      },
      screens : {
        'below-md': {'max': '767px'},
        'below-lg': {'max': '991px'}
      }
    },
  },
  plugins: [],
}

