/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'jktsans' : '"Plus Jakarta Sans", Roboto, Arial, sans-serif',
      },
      keyframes: {
        'slide-f-l':{
          '0%': { translate: '-100% 0' },
          '100%': { translate: '0' }
        },
        'float-f-b' : {
          '0%': { translate: '0 50%', opacity: '0' },
          '100%': { translate: '0', opacity: '1' }
        },
      },
      animation: {
        "slide-f-l": 'slide-f-l 1s ease-out',
        'float-f-b': "float-f-b 1s ease-out",
      }
    },
  },
  plugins: [],
}

