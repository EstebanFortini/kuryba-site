/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',             // <- agrega esta línea
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
