import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
function Aboutus() {
  return (
    <div className=" bg-aboutus h-full">
      <div className="flex flex-col ">
        <div className="z-10 md:hidden lg:hidden">
          <NavBar />
        </div>
        <div className="flex flex-row items-center justify-between mt-0">
          <div className="p-3">
            <Link to="/">
              <img
                className="sm:h-14 h-11 items-center justify-center m-auto object-contain ml-4 cursor-pointer"
                src="https://scontent.fktm19-1.fna.fbcdn.net/v/t1.15752-9/323928748_3123048007988284_1501040822897416533_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=P69aMqgmf24AX9UedR4&_nc_ht=scontent.fktm19-1.fna&oh=03_AdRkpCReSrOW6b8qmlUiybD2i5Z2xIlUxwvVLP4IZrPzEA&oe=645DB661"
                alt="logo"
              />
            </Link>
          </div>

          <div className="rounded-md flex-1 ml-8 h-aboutus bg-hero_color justify-center text-center items-center flex">
            <h2 className="ml-3 font-Montserrat font-bold text-3xl text-white">
              About Us
            </h2>
          </div>
        </div>

        <div className="w-aboutus flex-col flex mt-10 m-auto">
          <div>
            <h3 className="font-bold mb-3 text-4xl font-Poppins text-white">
              About Us
            </h3>
          </div>
          <div>
            <p className="font-normal leading-9 text-xl font-Montserrat text-white">
              Hi Everyone. This is a project created by BICTE 2075 Students of
              Aadikavi Bhanubhakta Campus, TU i.e Aananda Soti, Bibek Nayaju,
              Bikal Shreshta and Milan Sunar. Our Teammate had a collaborative
              work to complete this task. All the process of System Analyasis
              and Design and Software Engineering and Project Management is done
              to create this project. Thankyou Mr. Er. Ghan Bahadur Thapa
              Sir(Project Coordinator) and Mr. Er. Sulov Kumar Shrestha(Program
              Coorinator) to give guidelines and verify this project. Have a
              Great Experience with Figma, Documentation Process, JS, React,
              Native, Node js and Of Course Figma. Feel free to Connect with us.
            </p>
          </div>
        </div>
      </div>

      <div className="h-fit w-aboutus m-auto mt-10">
        <div className="flex flex-col md:flex-row lg:flex-row gap-5">
          <div className="">
            <img
              className="object-contain mb-5 grayscale hover:grayscale-0 transition-all duration-700 rounded-xl h-72 md:h-fit"
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/29196349_973276076157972_6121917478864945152_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Knqx9FuAt88AX_ff6vz&_nc_ht=scontent.fktm1-1.fna&oh=00_AfDDnN-7Ix056TbU3d9phVyNHCcg-guNFNhEc_7lOYr46Q&oe=645DDB4D"
              alt="alpha biram"
            />
            <h3 className="text-white font-Montserrat text-xl text-left md:text-center lg:text-center font-medium">
              Aananda Soti
            </h3>
          </div>

          <div>
            <img
              className="object-contain mb-5 grayscale hover:grayscale-0 transition-all duration-700 rounded-xl h-72 md:h-fit"
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/339649651_587987623363731_7542433183925994904_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qeVnNDqlsEYAX8kb6to&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCq0e_BJunUzNZkpokQrIlmxYjNRwMRalstXTz0Z6KzKw&oe=643C5719"
              alt="bibek"
            />
            <h3 className="text-white font-Montserrat text-xl text-left md:text-center lg:text-center font-medium">
              Bikal Shrestha
            </h3>
          </div>

          <div>
            <img
              className="object-contain mb-5 grayscale hover:grayscale-0 transition-all duration-700 rounded-xl h-72 md:h-fit"
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/333206470_2626021304207352_4445035252622896070_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vyADzFMYcVcAX_JyCai&_nc_ht=scontent.fktm1-1.fna&oh=00_AfCZfR-xmhvg_D-VMSoRUWYFDKAMCXKKMYenQQqQrG2sPw&oe=643B9BB0"
              alt="bibek"
            />
            <h3 className="text-white font-Montserrat text-xl text-left md:text-center lg:text-center font-medium">
              Bibek Nayaju
            </h3>
          </div>

          <div>
            <img
              className="object-contain mb-5 grayscale hover:grayscale-0 transition-all duration-700 rounded-xl h-72 md:h-fit"
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/121692146_2807583656183159_2995029777939127118_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=CCxFkFGgligAX_Ui7N7&_nc_ht=scontent.fktm1-1.fna&oh=00_AfBEM2zVE_kswoc9voyKu1H3XyDyjTDrvKUWyiZJtdrBQw&oe=645DD826"
              alt="bibek"
            />
            <h3 className="text-white font-Montserrat text-xl text-left md:text-center lg:text-center font-medium">
              Milan Sunar
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
