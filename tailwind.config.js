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
        '#a34cdb': '#a34cdb',
        '#e6ecf1': '#e6ecf1'
      },
      screens : {
        'custom-sm': '480px',
        'custom-md': '990px',
        'custom-lg': '1100px',
      }
    },
  },
  plugins: [],
}

