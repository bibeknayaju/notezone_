import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./Pages/Notes";
import Announcements from "./Pages/Announcements";
import Contribution from "./Pages/Contribution";
import Signup from "./Pages/Signup";
import Aboutus from "./Pages/Aboutus";
import Login from "./Pages/Login";
import Newone from "./Pages/Newone";

function App() {
  return (
    <div className="m-auto relative">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed md:bottom-4 md:right-4 md:p-3 md:rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 bottom-20 right-2 p-2 w-12 h-12 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/announcement" element={<Announcements />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/demo" element={<Newone />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
