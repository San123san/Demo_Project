/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-color': '0px -1px 10px rgba(241, 245, 249, 1)',
        'custom-color-1': '0px  3px 10px rgba(241, 245, 249, 1)',
      }
    },
  },
  plugins: [],
}