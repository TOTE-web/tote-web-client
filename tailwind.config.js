/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#377DFF',
        white: '#FAFAFA',
        black: '#333333',
        grey: '#878787',
        red: '#FF5630',
        green: '#37CB87',
      },
    },
  },
  plugins: [],
}
