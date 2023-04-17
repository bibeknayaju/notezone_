import React, { useState } from "react";
import { Link } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);
  const navLinks = [
    { name: "Notes", path: "/notes" },
    { name: "Announcement", path: "/announcement" },
    { name: "Contribution", path: "/contribution" },
    { name: "About Us", path: "/aboutus" },
  ];
  return (
    <div className="flex flex-row bottom-0 h-navbar bg-hero_color md:bg-navbar w-fullwidth fixed items-center max-w-7xl justify-between px-4 m-auto md:justify-between md:items-center md:relative md:h-0 lg:h-0 md:flex md:flex-row lg:justify-between md:my-5 md:bg-white lg:bg-white	">
      <Link to="/">
        <img
          className="h-12 w-16 md:ml-0 md:h-20 md:w-20 lg:h-20 lg:w-20 object-contain cursor-pointer"
          src="https://scontent.fktm19-1.fna.fbcdn.net/v/t1.15752-9/323928748_3123048007988284_1501040822897416533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=P69aMqgmf24AX9UedR4&_nc_ht=scontent.fktm19-1.fna&oh=03_AdRkpCReSrOW6b8qmlUiybD2i5Z2xIlUxwvVLP4IZrPzEA&oe=645DB661"
          alt="logo"
        />
      </Link>

      <div
        className={`flex fixed flex-col mb-52 w-full px-14 md:w-fit right-10 md:mb-0 md:block md:pb-0 md:mt-0  lg:relative md:relative ${
          isMenuOpen ? "block" : "hidden"
        }`}>
        <ul className="flex bg-aboutus md:h-0 lg:h-0  h-40 mb-4 px-6 md:px-0 lg:px-0 py-5 md:py-0 lg:py-0 flex-col md:mb-0 md:flex-row gap-2 md:gap-11">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className="text-lg text-white md:text-black lg:text-black cursor-pointer font-bold hover:text-orange-600">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex md:items-center md:gap-4 lg:gap-4">
        <Link to="/login">
          <button className="text-xl font-semibold border-2 rounded-lg ml-4 border-orange-600	 p-4">
            Login In
          </button>
        </Link>
        <Link to="/signup">
          <button className=" font-Poppins font-medium">Sign UP</button>
        </Link>
      </div>

      {/* <div className="md:hidden lg:hidden">
        <DehazeIcon onClick={handleMenuClick}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </DehazeIcon>
      </div> */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
