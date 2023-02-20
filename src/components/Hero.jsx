import React from "react";
// import "./Hero.css";

function Hero() {
  return (
    <div className="h-hero_height m-10 flex bg-hero_color rounded-lg w-100% md:w-auto md:m-auto max-w-7xl">
      <div className="ml-9 mr-8 m-auto justify-center items-center md:text-white">
        <h2 className=" text-white font-semibold text-left md:font-extrabold text-3xl md:text-5xl">
          Welcome to
        </h2>
        <h1 className="text-5xl font-bold font-Poppins mt-3 text-white md:text-7xl">
          Study Material Sharing Portal
        </h1>
      </div>
    </div>
  );
}

export default Hero;
