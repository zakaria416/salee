/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c6cb',
          300: '#9d9fa7',
          400: '#6e717b',
          500: '#4f535e',
          600: '#3c3f48',
          700: '#33363e',
          800: '#272a31',
          900: '#1c1e24',
          950: '#121317',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f6efd8',
          200: '#ecdda9',
          300: '#e0c578',
          400: '#d4ad4f',
          500: '#c69738',
          600: '#a87a2e',
          700: '#855e28',
          800: '#6e4b27',
          900: '#5d4025',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
