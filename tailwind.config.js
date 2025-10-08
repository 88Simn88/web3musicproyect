// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        synthWhite: "#FFFFFF",
        synthGray96: "#606060", 
        synthGray38: "#262626", 
        synthBlack: "#000000",
        synthBlue: "#3E81F6", 
        synthPink: "#E748A2", 
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(90deg, #3E81F6 0%, #E748A2 100%)",
      },
    },
  },
  plugins: [],
};
