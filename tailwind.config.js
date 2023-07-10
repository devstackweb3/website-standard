/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: { max: '350px' },
      xxs: { max: '638px', min: '351px' }, // mobile landscape and smaller
      sm: { max: '639px' }, // tablet portrait up to small laptop
      md: { max: '767px', min: '640px' }, //
      lg: { max: '1279px', min: '768px' },
      xl: { min: '1280px' },
    },
  },
  plugins: [],
}
