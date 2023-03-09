/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tiltNeon': "Tilt Neon",
        "golos-text": "Golos Text",
      },
    },
  },
  plugins: [],
};
