/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors:{
      talprimary: '#B9D948',
      talhoverpri: '#3e4e19',
      tittle1: '#f9fce9',
      bgprimary: '#f9fce9b8',
      primarytxt: '#f1f8cf',
      bggreym: '#202b08',
      secundarytxt: '#cee76f',
      tittle2: '#779719',
      hoverbg: '#f1f8cf4a',

    },
    extend: {},
  },
  plugins: [(require('preline/plugin')),
],
}

