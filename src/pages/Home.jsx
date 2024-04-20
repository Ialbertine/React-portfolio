import React from "react";
import NavBar from "../components/NavBar";
import { BiSolidUser } from "react-icons/bi";
import { BsBagHeartFill } from "react-icons/bs";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-[100vh]">
      <div
        className="bg-no-repeat bg-cover h-[100vh] md:h-[100vh] w-full bg bg-center text-black"
        style={{ backgroundImage: "url('img/photo2.jpg')" }}
      >
        <div>
          <NavBar />
        </div>
        <div className="flex flex-col items-center md: lg:flex-row lg:ml-[15rem] lg:w-[70%] lg:h-[80vh] gap-[1rem] mt-[2rem] ">
          <div className="w-[100%] flex items-center justify-center">
            <img
              src="img/Tina1.jpg"
              alt="tina"
              className="rounded-[100%] w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem]  lg:w-[20rem] lg:h-[20rem] object-cover border-[10px] border-[#dadada]"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:flex lg:items-start">
              <span className="text-[20px] font-medium">HI THERE!</span>
              <span className="text-[2rem]">
                I'M
                <span className=" text-[#8A2BE2] font-bold">
                  {" "}
                  ALBERTINE INGABIRE
                </span>
              </span>
              <span className="text-[2rem] font-bold">
                a Front-End Developer
              </span>
              <p className="text-xl text-center w-[80%] md:w-[80%] lg:text-left">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
            </div>
            <div className="flex gap-[3rem] pt-5 mb-[3rem] md:mb-[2rem]">
              <button className="text-white py-4 px-6 rounded-full bg-purple-600 flex items-center gap-2 md:flex md:flex-row lg:py-[1rem] lg:px-[1.5rem]">
                <BiSolidUser />
                MORE ABOUT ME
              </button>
              <button className="text-white py-4 px-6 rounded-full bg-purple-600 flex  items-center gap-2 md:flex md:flex-row lg:py[1rem] lg:px-[1.5rem]">
                <BsBagHeartFill />
                PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
