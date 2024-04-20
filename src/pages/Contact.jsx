import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
    
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[100vh]">
      <h1 className="text-5xl font-extrabold">
        GET <span className="text-[#8A2BE2]">IN TOUCH</span>
      </h1>
      <div className="flex items-center pt-[2rem]">
        <hr className="md:bg-[#8A2BE2] md:border-[2px] md:border-[#8A2BE2] md:w-[20%]" />{" "}
        <p className="lg:w-[35rem] md:w-[35rem] text-center">
          I’M ALWAYS OPEN TO DISCUSS REACH OUT ME.
        </p>
        <hr className=" md:border-[2px] md:border-[#8A2BE2] md:w-[20%] " />{" "}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-4 pl-10 lg:mt-5">
        <div className="lg:w-1/2">
          <div>
            <span className="text-xl">Phone</span>
            <span className="flex pt-2">
              <BsWhatsapp className="text-xl mr-3 text-[#8A2BE2]" /> +250 785
              512 714
            </span>
          </div>
          <div className="py-4">
            {" "}
            <span className="text-xl">Email</span>
            <span className="flex pt-2">
              <AiOutlineMail className="text-xl mr-3 text-[#8A2BE2]" />{" "}
              tinaalby250@gmail.com
            </span>
          </div>
          <div className="py-4">
            {" "}
            <span className="text-xl mb-2">Instagram</span>
            <span className="flex pt-2">
              <BsInstagram className="text-xl mr-3 text-[#8A2BE2]" /> __i.tinah
            </span>
          </div>

          <div>
            <span className="text-xl">Github</span>
            <span className="flex pt-2">
              <BsGithub className="text-xl mr-3 text-[#8A2BE2]" /> Ialbertine
            </span>
          </div>

          <p className="pt-3">Social profiles</p>
          <div className="flex gap-2">
            <div className="hover:bg-purple-600 bg- rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
              <BsLinkedin className="text-xl" />
            </div>
            <div className="hover:bg-purple-600 rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
              <BsPinterest className="text-xl" />
            </div>
            <div className="hover:bg-purple-600 rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
              <BsTwitterX className="text-xl" />
            </div>
            <div className="hover:bg-purple-600 bg-gray-900 rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center">
              <BsGithub className="text-xl" />
            </div>
          </div>
        </div>

        <div className="mt-3 lg:w-[100%] lg:flex justify-center">
          <div className="lg:w-[100%] w-[90%]">
            <p className="leading-8 text-[18px]">
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <div className="mt-3 lg:mt-5">
            
              <form className="flex flex-col gap-4 pb-5">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <div className="flex items-center bg-[#1f1e1e] py-3 px-5 rounded-full lg:w-[50%] hover:border-[1px] hover:border-[#949494]">
                    <BiSolidUser className=" text-[#999696]" />
                    <input
                      type="text"
                      placeholder="YOUR NAME"
                      className=" w-[50%] px-2 bg-[#1f1e1e] border-none"
                      
                    />
                  </div>
                  <div className="flex items-center bg-[#1f1e1e] py-3 px-5 rounded-full lg:w-[50%] hover:border-[1px] hover:border-[#949494]">
                    <AiOutlineMail className=" text-[#999696]" />
                    <input
                      type="text"
                      placeholder="YOUR EMAIL"
                      className="w-[50%] px-2 bg-[#1f1e1e]"
                    />

                  </div>
                </div>
                <div className="flex items-center bg-[#1f1e1e] py-3 px-5 rounded-3xl lg:mt-4 hover:border-[1px] hover:border-[#949494]">
                  <textarea
                    type="text"
                    placeholder="YOUR MESSAGE"
                    className="bg-transparent border-none focus:outline-none w-full"
                  />
                </div>
              </form>
              <button
                type="submit"
                className="flex items-center gap-2 py-3 px-8 rounded-full bg-[#8A2BE2] lg:mt-3"
              >
                <BsFillSendFill />
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact