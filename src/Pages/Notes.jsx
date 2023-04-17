import React from "react";
import AboutStudents from "../components/AboutStudents";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Notes() {
  return (
    <div className="m-auto">
      <div className="m-auto max-w-6xl mb-10">
        <NavBar />
        <AboutStudents />
      </div>
      <Footer className="bottom-0" />
    </div>
  );
}

export default Notes;
