import React from "react";
import PeopleIcon from "@mui/icons-material/People";
function LearnWith() {
  return (
    <div className="m-auto items-center justify-center bg-hero_color mt-10">
      <div className="sm:m-auto flex-col items-center justify-center md:max-w-7xl">
        <h1 className="text-3xl text-white text-center font-Montserrat md:text-white font-bold p-4 mb-5 mt-5">
          Learn with US
        </h1>
        <div className="flex flex-col m-auto  text-center md:flex-row lg:flex">
          <div className="h-learnwithus border-2 w-learnwithus border-white rounded-3xl m-auto flex-col mb-10">
            <div className="m-auto items-center justify-center pt-12">
              <PeopleIcon
                style={{ fontSize: 70, color: "white" }}
                className=""
              />
            </div>
            <h4 className="text-white font-Montserrat font-semibold">
              Geniue Notes Only
            </h4>
          </div>

          <div className="h-learnwithus border-2 w-learnwithus border-white rounded-3xl m-auto flex-col mb-10">
            <div className="m-auto items-center justify-center pt-12">
              <PeopleIcon
                style={{ fontSize: 70, color: "white" }}
                className=""
              />
            </div>
            <h4 className="text-white font-Montserrat font-semibold">
              Updated Notes Only
            </h4>
          </div>

          <div className="h-learnwithus border-2 w-learnwithus border-white rounded-3xl m-auto flex-col mb-10">
            <div className="m-auto items-center justify-center pt-12">
              <PeopleIcon
                style={{ fontSize: 70, color: "white" }}
                className=""
              />
            </div>
            <h4 className="text-white font-Montserrat font-semibold">
              Verified Notes Only
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-white h-40 mt-5 text-center">
        <h1 className="pt-10 font-Poppins font-semibold  text-hero_color text-4xl">
          Get Rewards Points after contribution
        </h1>
      </div>
    </div>
  );
}

export default LearnWith;
