const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  jit: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        primaryLight: '#eef2fd',
        secondaryLight: '#211b61', // Blue

        // Dark Theme
        primaryDark: '#0b0b0b',
        secondaryDark: '#f79518', // Orange
      },
      boxShadow: {
        nft: '0 .625rem 1.25rem rgba(0, 0, 0, 0.25)',
        nftHover: '0 1rem 2rem rgba(0, 0, 0, 0.25)',
        nftDark: '0 0.625rem 1.25rem rgba(256, 256, 256, 0.10)',
        nftDarkHover: '0 1rem 2rem rgba(256, 256, 256, 0.25)',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
