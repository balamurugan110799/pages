/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '766px' },
      // => @media (min-width: 640px) { ... }
      'mdsm': '641px',
      // => @media (min-width: 768px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lgmd': '1200px',
      // => @media (min-width: 1024px) { ... }
      'lg': '1201px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      'sm': '14px',
      'tiny': '12px',
      'base': '16px',
      'h6': '16px',
      'h5': '18px',
      'h4': '20px',
      'h3': '22px',
      'h2': '24px',
      'h1': '36px',
    },
    colors: {
      'primary': 'hsl(4, 100%, 67%)',
      'secondary': 'hsl(234, 29%, 20%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '8px',
      'lg': '16px',
    },
    extend: {},
  },
  plugins: [],
}