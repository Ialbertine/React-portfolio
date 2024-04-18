import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidMessage } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-3 flex items-center justify-between h-[5rem] w-full mx-auto py-[1rem] px-[2rem] lg:px-[6rem]">
      <span className="text-4xl font-bold">
        T<span className="text-[#8A2BE2]">.Alby</span>
      </span>
      <div className="hidden md:flex items-center gap-[1.5rem]">
        <Link
          to="/"
          className="pointer hover:text-[#8A2BE2] border-b-3 border-transparent hover:pb-1 hover:border-b-2 hover:border-b-[#8401ff]"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="pointer hover:text-[#8A2BE2] border-b-3 border-transparent hover:pb-1 hover:border-b-2 hover:border-b-[#8401ff]"
        >
          ABOUT
        </Link>
        <Link
          to="/resume"
          className="pointer hover:text-[#8A2BE2] border-b-3 border-transparent hover:pb-1 hover:border-b-2 hover:border-b-[#8401ff]"
        >
          RESUME
        </Link>
        <Link
          to="/portfolio"
          className="pointer hover:text-[#8A2BE2] border-b-3 border-transparent hover:pb-1 hover:border-b-2 hover:border-b-[#8401ff]"
        >
          PORTFOLIO
        </Link>
      </div>
      <button className="hidden md:flex items-center justify-center gap-2 py-3 px-6 bg-[#8A2BE2] text-white rounded-full ">
        <BiSolidMessage className="mt-[6px] text-xl" />
        Contact Me
      </button>
      <CgMenuRightAlt className="text-4xl block md:hidden text-[#8A2BE2]" />
    </nav>
  );
}

export default NavBar