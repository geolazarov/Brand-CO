/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // TT Hoves is a commercial font — place files in src/assets/fonts/
        // and add @font-face rules in src/index.css
        sans: ['"TT Hoves"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}