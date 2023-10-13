module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  jit: true,
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        nft: '0 .625rem 1.25rem rgba(0, 0, 0, 0.25)',
        nftDark: '0 .625rem 1.25rem rgba(256, 256, 256, 0.25)',
      },
    },
  },
  plugins: [],
};
