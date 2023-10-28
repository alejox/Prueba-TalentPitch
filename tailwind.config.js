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
        xs: '9px',
        sm: '14px',
        base: '16px',
        lg: '24px',
        xl: '1.25rem'
      },

      colors: {
        primary: '#1A237E',
        secondary: '#DE1C7D',
        tertiary: '#9FA8DA',
        success: '#8BC34A',
        info: '#E3F2FD',
        infoText: '#2196F3'
      }
    }
  }
  // plugins: [require('flowbite/plugin')]
};
