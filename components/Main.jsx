/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className=" w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-600">
            Let's find who I am
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Alireza</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end developer specializing in building exceptional
            digital experience. Currently, I'm focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/alireza-adabi-5a4b77208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/AlirezaAdabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:alireza.adabi78@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://twitter.com/Mehrab_Adabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
