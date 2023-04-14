/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.hmtl'],
  content: [""],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

