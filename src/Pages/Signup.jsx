import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="h-screen m-auto items-center  justify-center flex bg-hero_color">
      <div className="flex-col">
        <h1 className="text-white font-Montserrat font-semibold text-4xl text-center mb-5">
          Sign Up
        </h1>
        <div className="w-signup h-signup border-2 border-white shadow-2xl bg-white opacity-80 p-5 rounded-2xl flex justify-around">
          <div className="flex-col gap-3 w-1/3">
            <Link to="/">
              <img
                className="sm:h-14 items-center justify-center m-auto object-contain cursor-pointer md:h-20 mt-5 mb-10"
                src="https://scontent.fktm19-1.fna.fbcdn.net/v/t1.15752-9/323928748_3123048007988284_1501040822897416533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=P69aMqgmf24AX9UedR4&_nc_ht=scontent.fktm19-1.fna&oh=03_AdRkpCReSrOW6b8qmlUiybD2i5Z2xIlUxwvVLP4IZrPzEA&oe=645DB661"
                alt="logo"
              />
            </Link>
            <div className="text-center">
              <h3 className="font-Poppins text-4xl mb-2 text-hero_color font-bold">
                Note Zone
              </h3>
              <h2 className="font-Montserrat text-1xl mb-2">
                Welcome to NotiZone Community{" "}
              </h2>
              <p className="mb-2 font-Poppins ">
                200+ students & learners worldwide use NotiZone to view and
                contribute the require notes everyday
              </p>
              <p className="mb-2 font-Poppins">
                Free Notes Available Valuable Reward Points Quick and Friendly
                Design 99% verified Notes
              </p>
            </div>
          </div>
          <div className="p-5 w-1/2">
            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Full Name
              </h2>
              <input
                type="text"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your Full Name Here..."
              />
            </div>

            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Email ID
              </h2>
              <input
                type="email"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your Email..."
              />
            </div>
            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Password
              </h2>
              <input
                type="password"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your Password..."
              />
            </div>

            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                College/ Institution you study in.
              </h2>
              <input
                type="text"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="Enter Your College..."
              />
            </div>

            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">
                Faculty/Level
              </h2>
              <input
                type="text"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="BICTE Eighth Sem"
              />
            </div>

            <div>
              <h2 className="text-2xl ml-4 font-medium font-Poppins">Phone</h2>
              <input
                type="text"
                class="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2"
                placeholder="(+977) 980000000"
              />
            </div>

            <button className="text-xl font-semibold border-2 rounded-lg ml-4 mb-4 border-orange-600	 p-4">
              CONTINUE
            </button>
            <p className="text-left font-Poppins font-light text-sm ml-4">
              Already have an account?{" "}
              <Link className="underline" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
