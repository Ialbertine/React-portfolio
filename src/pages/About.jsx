import React from "react";
import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#232323] min-h-[100vh] w-full text-white">
      <h1 className="text-5xl mb-[2rem] mt-[2rem] font-extrabold">
        ABOUT <span className="text-[#8A2BE2]">ME</span>
      </h1>
      <div className="flex items-center mb-[2rem]">
        <hr className="md:bg-[#8A2BE2] md:border-[3px] md:border-[#8A2BE2] md:w-[50%]" />
        <p className="">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </p>
        <hr className="md:bg-[#8A2BE2] md:border-[3px] md:border-[#8A2BE2] md:w-[50%]" />
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <img
          src="img/Tina1.jpg"
          alt="tina"
          className="w-[23rem] h-[25rem] object-cover "
        />
        <div className="flex flex-col lg:pl-[1.5rem]">
          <p className="w-[30rem] text-center mt-[1rem]">
            I am a front-end developer, my passion is creating engaging and
            user-friendly digital experiences. I am driven to create websites
            that are both practical and visually appealing because I love the
            process of turning design thoughts into reality. and I like the
            challenge of keeping up with the ever changing web technology. The
            power to bring imagination to life and bridge the gap between design
            and functionality is what I like most
          </p>
          <div class="grid grid-cols-2 gap-x-[10rem] lg:mt-4">
            <div class="text-left">
              <span class="block">
                First Name
                <br />
                <span>Albertine</span>
              </span>
              <span class="block mt-4">
                Last Name
                <br />
                <span>Ingabire</span>
              </span>
            </div>
            <div class="text-left">
              <span class="block">
                Nationality
                <br />
                <span>Rwandan</span>
              </span>
              <span class="block mt-4">
                Birthdate
                <br />
                <span>19 Sept 2024</span>
              </span>
            </div>
            <div className="flex  mt-[1rem]">
            <button className="py-2 px-6 gap-2 bg-[#8A2BE2] flex items-center justify-center rounded-xl">
              <BiDownload />
              <span>Download CV</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
