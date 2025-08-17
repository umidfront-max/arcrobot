/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      colors: {
         primary: "#5459EA",
         "primary-400": "#667085",
         danger: "#E12C46",
         "danger-400": "#FFD4D4",
         "danger-100": "#F9D2D8",
         secondary: "#FF9533",
         "secondary-200": "#FFEAD7",
         black: "#000000",
         "black-800": "#2E3A59",
         "black-600": "#192A3E",
         "black-400": "#505470",
         success: "#25C418",
         white: "#ffffff",
         green: "#20a512",
         gray: "#090909",
         "gray-600": "#F2F4F7",
         "gray-500": "#ccc",
         "gray-200": "#F8F9FB",
         "gray-100": "#F7F7F7",
         "gray-300": "#E9ECEF",
         "gray-700": "#EFEFEF",
         "gray-800": "#90A0B7",
         "gray-900": "#98A2B3",
      },
      extend: {
         screens: {
            xs: '400px', // 💡 bu yerda xs ni qo‘shyapsiz
         },
         fontFamily: {
            "inter-400": ["inter-400"],
            "inter-500": ["inter-500"],
            "inter-600": ["inter-600"],
            "inter-700": ["inter-700"],
         }
      },
   },
   plugins: [],
}

