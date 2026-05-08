/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './utils/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1f2340',
        body: '#686b79',
        primary: '#4b41ab',
        secondary: '#ffac1d',
        surface: '#f4f4ff',
        success: '#2dbb2b',
        night: '#121129'
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 22px 55px rgba(86, 76, 171, 0.15)',
        panel: '0 32px 60px rgba(22, 18, 56, 0.2)'
      }
    }
  },
  plugins: []
}
