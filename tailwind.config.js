/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      'health':'#0052FF',
      'education':'#FF444A',
      'clothing':'#79C23F',
      'food':'#F87147',
      

    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

