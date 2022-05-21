module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './integrations/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#285BA1',
        },
      },
    },
    fontFamily: {
      sans: ['GothamRounded', 'sans-serif'],
      serif: ['serif'],
    },
  },
  plugins: [],
}
