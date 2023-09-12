/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"], //in which file i want to use tailwind css - all html, css & jsx file which are in src folder, ',' use it to add any seperate folder - ["./src/**/*.{html,js}", "..."]
  theme: {
    extend: {},
  },
  plugins: [],
}

