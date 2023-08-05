module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif'],
        serif:['Volkhov', 'serif']
      },
      colors: {
        "ascent-1" : "#F65E21",
      }
    },
  },
  plugins: [],
}

