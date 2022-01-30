const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      fontFamily: {
        'sans': ['dongle', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
}
