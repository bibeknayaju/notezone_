import React from "react";
import PeopleIcon from "@mui/icons-material/People";
function Announcement({ title, id, date, notice }) {
  return (
    <div className="h-announcement w-announcement border rounded-xl justify-center items-center text-center p-3 flex flex-row gap-3 md:flex lg:flex">
      <div key={id} className="h-youcanshare p-2 pt-1 w-youcanshare">
        <div className="mb-2">
          <PeopleIcon
            className="text-hero_color font-extrabold"
            style={{ fontSize: "50px" }}
          />
        </div>
        <div className="font-Montserrat text-xl mt-0 font-bold">
          <h3>{title}</h3>
        </div>
        <div className="font-Poppins text-xs font-light text-gray-600">
          <p>{date}</p>
        </div>
        <div className="font-Montserrat font-semibold text-sm">{notice}</div>
      </div>
    </div>
  );
}

export default Announcement;
