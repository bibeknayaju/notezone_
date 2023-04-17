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
      aboutus: "#31303B",
      navbar: "#FFFFFF",
    },
    height: {
      hero_height: "80vh",
      signup: "85vh",
      youcanshare: "11rem",
      learnwithus: "15rem",
      announcement: "16rem",
      aboutus: "4rem",
      aboutus_image: "2rem",
      login: "60vh",
      navbar: "4rem",
      fullheight: "100%",
      halfheight: "50px",
      quaterheight: "25%",
    },
    width: {
      hero_height: "80vh",
      signup: "90vh",
      youcanshare: "11rem",
      maxwidth: "1200px",
      fullwidth: "100%",
      learnwithus: "15rem",
      announcement: "16rem",
      aboutus: "80%",
      DehazeIcon: "100%",
      contribution_input: "200px",
      halfwidth: "50%",
      zerowidth: "0%",
      quaterwidth: "25%",
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
