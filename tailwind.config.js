/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#060606',
        'green':'#A2AA7B',
        'gray':'#556260'
      },
      textTransform: {
        uppercase: 'uppercase',
      },
    },
  },
  plugins: [],
};
