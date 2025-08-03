// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: { extend: {} },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(-8px)" },
          "50%": { transform: "translateX(8px)" },
        },
      },
      animation: {
        slide: "slide 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};











// // tailwind.config.js
// module.exports = {
//   content: ['./src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       animation: {
//         backgroundMove: 'backgroundMove 30s linear infinite',
//       },
//       keyframes: {
//         backgroundMove: {
//           '0%': { transform: 'translate(0, 0)' },
//           '100%': { transform: 'translate(-25%, -25%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }