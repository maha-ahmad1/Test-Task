/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#060606',
        'green':'#A2AA7B',
        'gray':'#556260',
        'blue':'#0F172A',
        'gray-100':'#E4E4E7'
      },
      textTransform: {
        uppercase: 'uppercase',
      },
    },
  },
  plugins: [],
};
