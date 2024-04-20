import React, { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [hover, setHover] = useState();

  const handleProjectHover = (projectId) => {
    setHover(projectId);
  };

  const handleProjectLeave = () => {
    setHover(null);
  };

  const projects = [
    {
      id: 1,
      title: "Random Emoji Generator",
      link: "https://ialbertine.github.io/random-emoji/",
      image: "img/random.png",
    },
    {
      id: 2,
      title: "Age Calculator",
      link: "https://ialbertine.github.io/Age_Calculator/",
      image: "img/agecalculator.png",
    },
    {
      id: 3,
      title: "Dice Roll Project",
      link: "https://ialbertine.github.io/Dice_roll_project/",
      image: "img/rollingdice.png",
    },
    {
      id: 4,
      title: "Rock Paper Scissors",
      link: "https://ialbertine.github.io/Dom-paper_scissor/",
      image: "img/rockpaper.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] w-full bg-gray-900 text-white">
      <h1 className="text-5xl pt-8 lg:pt-12 font-extrabold mt-5">
        Port<span className="text-[#8A2BE2]">folio</span>
      </h1>
      <div className="flex items-center pt-[2rem]">
        <hr className="md:bg-[#8A2BE2] md:border-[3px] md:border-[#8A2BE2] md:w-[50%]" />{" "}
        <p className="lg:w-[35rem] md:w-[35rem] ml-2 text-center">
          HERE ARE SOME OF MY PROJECTS.
        </p>
        <hr className=" md:border-[3px] md:border-[#8A2BE2] md:w-[50%]" />{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center py-10 lg:px-10 lg:mt-9">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            className="w-[80%] lg:w-[70%] relative hover:shadow-md hover:bg-gray-800 rounded-lg"
            onMouseEnter={() => handleProjectHover(project.id)}
            onMouseLeave={handleProjectLeave}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
            {hover === project.id && (
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-center text-gray-300 p-4">
                {project.title}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
