import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import NotesIcon from "@mui/icons-material/Notes";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LaptopIcon from "@mui/icons-material/Laptop";

function YouCanShare() {
  return (
    <div className="max-w-5xl m-auto text-center items-center mt-7  md:flex-col">
      <h1 className="text-hero_color font-Montserrat mb-4 font-bold text-3xl md:text-5xl ">
        You can Share
      </h1>

      <div className="flex flex-col m-auto items-center justify-center gap-3 md:flex-auto  lg:flex-row">
        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <AssignmentIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: "45px" }}
            />
          </div>
          <p className="font-Montserrat font-medium">Assignment</p>
        </div>

        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <PictureAsPdfIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: 40 }}
            />
          </div>
          <p className="font-Montserrat font-medium">PDF Files</p>
        </div>

        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <LaptopIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: 40 }}
            />
          </div>
          <p className="font-Montserrat font-medium">Practical</p>
        </div>

        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <NotesIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: 30 }}
            />
          </div>
          <p className="font-Montserrat font-medium">Class Notes</p>
        </div>

        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <SlideshowIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: 40 }}
            />
          </div>
          <p className="font-Montserrat font-medium">PPT</p>
        </div>
        <div className="h-youcanshare border-2 border-hero_color p-3 rounded-3xl w-youcanshare">
          <div className="flex items-center m-auto justify-center p-7">
            <QuestionAnswerIcon
              className="text-hero_color font-extrabold"
              style={{ fontSize: 40 }}
            />
          </div>
          <p className="font-Montserrat font-medium">Question Banks</p>
        </div>
      </div>
    </div>
  );
}

export default YouCanShare;
