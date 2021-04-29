const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...defaultConfig.theme.colors,
        lightblue: '#458FF6'
      },
    },
    boxShadow: {
      ...defaultConfig.theme.boxShadow,
      'lg': '0 10px 15px -3px rgba(229, 233, 246, 0.4), 0 4px 6px -2px rgba(229, 233, 246, 0.2)',
      'xl': '10px 40px 50px rgba(229, 233, 246, 0.4)'
    }
  },
  variants: {},
  plugins: [],
}
