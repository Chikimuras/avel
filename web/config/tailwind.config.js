/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container:{
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    },
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
      'heading': ['Poppins', 'sans-serif'],
      'sans': ['Poppins', 'sans-serif'],
    },
    backgroundImage:{
      'dark-gradient' : 'linear-gradient(113.49deg, #984D38 -30.3%, #181E41 58.12%)',
      'light-gradient' : 'linear-gradient(214.02deg, #EA5F5F 6.04%, #EEAA55 92.95%)',
    },
    extend: {
    },
  },
  plugins: [],
}
