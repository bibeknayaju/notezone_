/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    colors: {
      hero_color: "#FC5252",
    },
    height: {
      hero_height: "80vh",
      signup: "85vh",
      youcanshare: "11rem",
      learnwithus: "15rem",
      announcement: "16rem",
    },
    width: {
      hero_height: "80vh",
      signup: "90vh",

      youcanshare: "11rem",
      maxwidth: "1200px",
      fullwidth: "100%",
      learnwithus: "15rem",
      announcement: "16rem",
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans"],
        Montserrat: ["Montserrat"],
      },
    },
  },

  plugins: [],
};
