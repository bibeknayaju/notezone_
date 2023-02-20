import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
function NavBar() {
  return (
    <div className="flex justify-between items-center md:items-center p-5 mt-3 max-w-7xl m-auto">
      <div className="">
        <Link to="/">
          <img
            className="sm:h-14 h-11 items-center justify-center m-auto object-contain cursor-pointer ml-7"
            src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.15752-9/323928748_3123048007988284_1501040822897416533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Kr0zstMQnqEAX9-qTuI&_nc_ht=scontent.fktm1-1.fna&oh=03_AdSnNgCvqlHWYzvawa6np7oQip6YDigaKAire6Xm6Nzzew&oe=641177A1"
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex md:items-center">
        <ul className="ml-3 hidden items-center gap-6 md:flex">
          <li className="text-lg cursor-pointer font-bold hover:text-orange-600">
            <Link to="/notes">Notes</Link>
          </li>
          <li className="text-lg cursor-pointer font-bold hover:text-orange-600">
            <Link to="/announcement">Announcement</Link>
          </li>
          <li className="text-lg cursor-pointer font-bold hover:text-orange-600">
            <Link to="/contribution">Contribution</Link>
          </li>
          <li className=" text-lg cursor-pointer font-bold hover:text-orange-600">
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>

      <div className="hidden gap-2 md:flex items-center justify-center">
        <Link to="/login">
          <button className="text-xl font-semibold">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-orange-600	 p-4">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
