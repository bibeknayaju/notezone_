import React from "react";
import AboutStudents from "./AboutStudents";
import Footer from "./Footer";
import Hero from "./Hero";
import LearnWith from "./LearnWith";
import NavBar from "./NavBar";
import YouCanShare from "./YouCanShare";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutStudents />
      <YouCanShare />
      <LearnWith />
      <Footer />
    </div>
  );
}

export default Home;
