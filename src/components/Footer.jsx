import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <div className="bg-aboutus mb-14 md:mb-0 lg:mb-0">
      <div className="px-10 flex flex-col md:flex-row pt-8 justify-between max-w-7xl m-auto">
        <div className="max-w-xs">
          <div className="">
            <Link to="/">
              <img
                className="h-12 w-16 mb-5 md:h-20 md:w-20 lg:h-20 lg:w-20 object-contain cursor-pointer"
                src="https://scontent.fktm19-1.fna.fbcdn.net/v/t1.15752-9/323928748_3123048007988284_1501040822897416533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=P69aMqgmf24AX9UedR4&_nc_ht=scontent.fktm19-1.fna&oh=03_AdRkpCReSrOW6b8qmlUiybD2i5Z2xIlUxwvVLP4IZrPzEA&oe=645DB661"
                alt="logo"
              />
            </Link>
          </div>

          <div className="">
            <h4 className="text-white">
              NoteZone is a project made by BICTE students from Aadikavi
              Bhanubhakta Campus. They created it in 2079 as a BICT Blog to help
              students in Nepal without access to study materials. Later, they
              made NotiZone for Bachelor Level content that everyone can
              contribute to and view.
            </h4>
          </div>
        </div>

        <div className="mt-1 flex flex-col mb-6 md:flex-col md:text-left gap-1">
          <h3 className="text-white font-bold text-xl text-hero_color mb-2">
            Semester/Year
          </h3>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            First Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Second Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Third Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Fourth Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Fifth Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Sixth Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Seventh Semester
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Eighth Semester
          </a>
        </div>

        <div className="mt-1 flex flex-col mb-6 md:flex-col md:text-left gap-1">
          <h3 className="text-white font-bold text-xl text-hero_color mb-2">
            Our Services
          </h3>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            PDF Notes
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Question Bank
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Students PPT
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Written Notes
          </a>
          <a
            className="text-white font-Poppins text-base font-normal decoration-0"
            href="/">
            Assignment
          </a>
        </div>

        <div className=" mt-1 flex flex-col mb-6 md:flex-col md:text-left gap-1">
          <h3 className="text-white font-bold text-xl text-hero_color mb-2">
            Follow US
          </h3>

          <div>
            <FacebookIcon style={{ color: "whitesmoke" }} />
            <InstagramIcon style={{ color: "whitesmoke", marginLeft: "8px" }} />
            <TwitterIcon style={{ color: "whitesmoke", marginLeft: "8px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
