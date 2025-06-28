/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'custom-bg': '#1d1320',
        'custom-border': '#3d2843',
        'custom-purple': '#dfaeee',
        'custom-purple-hover': '#d299e6',
        'custom-button': '#4a2f50',
      },
      container: {
        queries: {
          'xs': '20rem',
          'sm': '24rem',
          'md': '28rem',
          'lg': '32rem',
          'xl': '36rem',
          '2xl': '42rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}