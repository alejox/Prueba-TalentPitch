/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif']
      },
      fontSize: {
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      },

      colors: {
        primary: '#1A237E',
        secondary: '#DE1C7D',
        tertiary: '#9FA8DA',
        success: '#8BC34A'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
