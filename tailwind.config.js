/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      },
      backgroundImage:theme=>({
        "wave_form":"url(./sources/svg.png)",
      }),
    },
  },
  plugins: [],
}
