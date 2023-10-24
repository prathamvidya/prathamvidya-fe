module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  jit: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        primaryLight: '#ffffff',
        secondaryLight: '#211b61', // Blue

        // Dark Theme
        primaryDark: '#0b0b0b',
        secondaryDark: '#f79518', // Orange
      },
      boxShadow: {
        nft: '0 .625rem 1.25rem rgba(0, 0, 0, 0.25)',
        nftDark: '0 0.625rem 1.25rem rgba(256, 256, 256, 0.10)',
      },
    },
  },
  plugins: [],
};
