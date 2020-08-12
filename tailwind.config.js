module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightblue: '#458FF6'
      },
    },
    boxShadow: {
      'xl': '10px 40px 50px rgba(229, 233, 246, 0.4)'
    }
  },
  variants: {},
  plugins: [],
}
