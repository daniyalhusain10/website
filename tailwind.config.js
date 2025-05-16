/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roxborough: ["Roxborough", "serif"], // add your custom font
        greatVibes: ["Great Vibes", "cursive"], // add your custom font
        // You can add more custom fonts here, separated by commas
      },
    },
  },
  plugins: [],
};