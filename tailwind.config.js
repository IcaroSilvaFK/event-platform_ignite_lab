/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          300: '#00b37e',
          500: '#00875f',
          700: '#015f43',
        },
        blue: {
          500: '#81d8f7',
        },
        orange: {
          500: '#fba94c',
        },
        ref: {
          500: '#f75a68',
        },
        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          300: '#8d8d99',
          500: '#323238',
          600: '#29292e',
          700: '#121214',
          900: '#09090a',
        },
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif;",
      },
      backgroundImage: {
        blur: "url('/src/assets/blurignite.png')",
        code: "url('/src/assets/code_mock.png')",
        react: "url('/src/assets/ReactJS.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
