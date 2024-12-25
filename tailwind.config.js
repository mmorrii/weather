const { nextui } = require("@nextui-org/react")

/** @type {import("tailwindcss").Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         keyframes: {
            starGlow: {
               "0%, 100%": { opacity: "0.6", strokeWidth: "5" },
               "50%": { opacity: "1", strokeWidth: "8" },
            },
            starGlowReverse: {
               "0%, 100%": { opacity: "1", strokeWidth: "8" },
               "50%": { opacity: "0.6", strokeWidth: "5" },
            },
            starGlow2: {
               "0%, 100%": { opacity: "0.6" },
               "50%": { opacity: "1", strokeWidth: "5" },
            },
            starGlow2Reverse: {
               "0%, 100%": { opacity: "1", strokeWidth: "5" },
               "50%": { opacity: "0.6" },
            },
         },
         animation: {
            starGlow: "starGlow 1.5s ease-in-out infinite",
            starGlowReverse: "starGlowReverse 1.5s ease-in-out infinite",
            starGlow2: "starGlow2 1s ease-in-out infinite",
            starGlow2Reverse: "starGlow2Reverse 1s ease-in-out infinite",
         },
      },
   },
   darkMode: "class",
   plugins: [nextui()],
}