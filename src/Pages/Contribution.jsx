import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
function Contribution() {
  return (
    <div className="m-auto">
      <NavBar />
      <div className="m-auto flex flex-col max-w-6xl mb-10">
        <div className="items-center text-center mt-6 mb-6">
          <h1 className="font-Montserrat mb-14 md:mb-0 lg:mb-0 text-4xl font-bold">
            Add Notes
          </h1>
        </div>
        <div className="flex justify-evenly mb-10 md:md-0 lg:md-0 flex-col md:flex-row lg:flex-row px-10 h-hero_height">
          <div className="w-1/2 w-full md:w-1/2 flex flex-col">
            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">Title</h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Title Goes Here..."
                name="title"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">Description</h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Description Goes Here..."
                name="description"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">
                Author/Source
              </h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Author/Source Goes Here..."
                name="author"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">Faculty</h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Faculty Goes Here..."
                name="author"
              />
            </div>
            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">
                Semester/Year
              </h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Semester/Year Goes Here..."
                name="author"
              />
            </div>

            <div className="mb-4">
              <h3 className="font-Poppins text-xl font-normal">Subject</h3>
              <input
                className="outline-none border-2 w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                type="text"
                placeholder="Subject Goes Here..."
                name="author"
              />
            </div>

            <div className="mb-4">
              <input
                className=" w-full px-4 py-2 rounded-md border-gray-300 cursor-pointer bg-hero_color text-white mt-2 mb-2"
                type="submit"
              />
            </div>
          </div>

          <div className="bg-hero_color p-5 rounded-lg flex items-center justify-center">
            <div className="">
              <input
                className=" mt-1 w-full appearance-none text-white hover:border-gray-500 px-4 py-2 pr-8 rounded"
                type="file"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer className="bottom-0" />
    </div>
  );
}

export default Contribution;
