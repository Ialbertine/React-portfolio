import React from "react";
import { RiSchoolLine } from "react-icons/ri";

const skillsData = [
  { name: "HTML", icon: "img/html-icon.svg", alt: "HTML" },
  { name: "CSS3", icon: "img/css-icon.svg", alt: "CSS3" },
  {
    name: "JAVASCRIPT",
    icon: "img/javascript-programming-language-icon.svg",
    alt: "JavaScript",
  },
  { name: "REACT JS", icon: "img/react-js-icon.svg", alt: "React JS" },
  {
    name: "TAILWINDCSS",
    icon: "img/tailwind-css-icon.svg",
    alt: "Tailwind CSS",
  },
  { name: "GITHUB", icon: "img/github.svg", alt: "GitHub" },
];

const Resume = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-5xl pt-[2rem] lg:pt-[4rem] font-extrabold">
        RESU<spna className="text-[#8A2BE2]">ME</spna>
      </h1>
      <hr className="border-[1px] border-[#8A2BE2] w-[70%] lg:w-[60%] mt-10 lg:max-auto" />
      <div class="flex flex-col md:flex-row md:w-[90%] gap-[5rem] items-center justify-center mt-11">
        <div class=" w-[90%] lg:w-[35%]">
          <h1 className="text-3xl font-bold ">EDUCATION</h1>
          <div class="border-b border-gray-200 py-4 lg:mb-4">
            <div class="flex items-center">
              <RiSchoolLine class="mr-2 text-[#8A2BE2]" />
              <h4 class="text-gray-600">2023-2026</h4>
            </div>
            <h1 className="text-xl font-bold pt-3">BACHELOR DEGREE - ALU</h1>
            <p className="pt-3">
              I'm currently enrolled in African Leadership University Software
              Engineering, Specialization in Full stack development
            </p>
          </div>
          <div class="border-b border-gray-200 py-4">
            <div class="flex items-center">
              <RiSchoolLine class="mr-2 text-[#8A2BE2]" />
              <h4 class="text-gray-600">2018-2021</h4>
            </div>
            <h1 className="text-xl font-bold pt-3">
              HIGH-SCHOOL DEGREE - ESSI NYAMIRAMBO
            </h1>
            <p className="pt-3">
              Studied at Ecole Secondaire Scientific Islamique persuied Degree
              in Mathematics, Economics and Computer Science
            </p>
          </div>
        </div>
        <div class="w-[90%] lg:w-[35%]">
          <h1 className="text-3xl font-bold">CERTIFICATE</h1>
          <div class="border-b border-gray-200 py-4 lg:mb-4">
            <div class="flex items-center">
              <RiSchoolLine class="mr-2 text-[#8A2BE2]" />
              <h4 class="text-gray-600">february 2022-May 2022</h4>
            </div>
            <h1 class="text-xl font-bold p-3">TECH-EXPERT</h1>
            <p>
              Got trainings on site at Tech Expert in Microsoft 365 and Elev8
            </p>
          </div>
          <div class="border-b border-gray-200 py-4">
            <div class="flex items-center">
              <RiSchoolLine class="mr-2 text-[#8A2BE2]" />
              <h4 class="text-gray-600">April 2023-June 2023</h4>
            </div>
            <h1 className="text-xl font-bold pt-3">
              STANFOLD UNIVERSITY'S COURSE
            </h1>
            <p className="pt-3">
              Certificate of Completion of code in place programming course that
              covered three unit, of Karel the Robots, console Programming and
              Graphic and Animation
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg max-auto p-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-6">SKILLS</h1>
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 lg:gap-x-[2rem] lg:gap-y-[2rem] mt-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="w-[8.5rem] md:w-[12rem] lg:w-[18rem] shadow-md hover:shadow-[#694888] duration-500 py-2 rounded-lg flex flex-col items-center"
            >
              <img
                src={skill.icon}
                alt={skill.alt}
                className="w-20 max-auto mt-6"
              />
              <span className="text-center mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
