import React from "react";
import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center minh-[100vh] w-full text-white">
      <h1 className="text-5xl lg:pt-[5rem] pt-[4rem] font-extrabold">
        ABOUT <span className="text-[#8A2BE2]">ME</span>
      </h1>
      <div className="flex items-center pt-[2rem]">
        <hr className="md:bg-[#8A2BE2] md:border-[3px] md:border-[#8A2BE2] md:w-[10%]" />
        <p className="lg:w-[35rem] md:w-[35rem] ml-2">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </p>
        <hr className="md:bg-[#8A2BE2] md:border-[3px] md:border-[#8A2BE2] md:w-[10%]" />
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row mt-[2rem]">
        <img
          src="img/Tina1.jpg"
          alt="tina"
          className="w-[23rem] h-[25rem] object-cover "
        />
        <div className="flex flex-col lg:pl-[1.5rem]">
          <p className="w-[30rem] text-center mt-[1rem] sm:flex sm:items-center sm:text-justify">
            I am a front-end developer, my passion is creating engaging and
            user-friendly digital experiences. I am driven to create websites
            that are both practical and visually appealing because I love the
            process of turning design thoughts into reality. and I like the
            challenge of keeping up with the ever changing web technology
          </p>
          <div class="flex flex-cols-2 items-center justify-center gap-x-[10rem] mt-4 lg:mt-4">
            <div class="text-left">
              <span class="block">
                <span  className="text-xl">First Name</span>
                <br />
                Albertine
              </span>
              <span class="block mt-4">
                <span className="text-xl">Last Name</span>
                <br />
                Ingabire
              </span>
            </div>
            <div class="text-left">
              <span class="block">
                <span className="text-xl">Nationality</span>
                <br />
                Rwandan
              </span>
              <span class="block mt-4">
                <span className="text-xl">Birthdate</span>
                <br />
                19 Sept 2024
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[2rem]">
            <button className="py-2 px-6 gap-2 bg-[#8A2BE2] flex items-center justify-center rounded-xl">
              <BiDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
