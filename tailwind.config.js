/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'green': '#4b9b5c',
        'blackdinamyc': '#1C1C1C',
        'whitedinamyc': '#FAFAFA'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};