module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

    colors: {
      'light_pink': '#ffffff',
      'burgundy':'#874356',
      'para': '#a9546c',
      'error': '#ff767f',
      'error2':'#c43f46'
    },
    zIndex:{
        '100':'100',
      },
    spacing: {
      '580': '580px',
    },
    screens:{
      'mobile': '360px'
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
