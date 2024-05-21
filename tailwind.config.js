/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {},
      maxWidth: {
        mainContainer: '1440px',
      },
      fontSize: {
        xs10: ['10px', '12px'],
        xs12: ['12px', '16px'],
        s14: ['14px', '20px'],
        sm16: ['16px', '24px'],
        sm18: ['18px', '24px'],
        md20: ['20px', '28px'],
        md24: ['24px', '32px'],
        md25: ['25px', '32px'],
        l30: ['30px', '38px'],
        l35: ['35px', '40px'],
        xL40: ['40px', '52px'],
        xL50: ['50px', '52px'],
        xxL46: ['46px', 'normal'],
        lg64: ['64px', 'normal'],
      },
    },
  },
  plugins: [],
};
