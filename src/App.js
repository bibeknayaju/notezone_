import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./components/Pages/Notes";
import Announcements from "./components/Pages/Announcements";
import Contribution from "./components/Pages/Contribution";
import Signup from "./components/Pages/Signup";

function App() {
  return (
    <div className="m-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/announcement" element={<Announcements />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
