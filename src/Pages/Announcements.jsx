import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import announcementData from "../components/AnnouncementData";

function Announcements() {
  const [announceData, setAnnouncetData] = useState(announcementData);
  return (
    <>
      <NavBar />
      <div className="flex mt-10 md:mt-0 lg:mt-0 flex-col">
        <div className="m-auto mb-10">
          <div className=" flex-col">
            <h1 className="text-hero_color font-Montserrat text-center font-bold text-2xl mt-1 md:text-5xl lg:text-5xl">
              Announcements
            </h1>
            <div className="flex gap-2 max-w-7xl m-auto flex-wrap ml-5 mr-5">
              {announceData.map((item) => (
                <div className="m-auto justify-center items-center mt-10 flex">
                  <Announcement
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    notice={item.notice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Announcements;
