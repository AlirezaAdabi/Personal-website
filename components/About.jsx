/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/skills/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className=" col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className=" py-4">Who I Am</h2>
          <p className=" py-2 text-gray-600">// I am not a normal developer</p>
          <p className=" py-2 text-gray-600">
            I started programming in 2018 in university because I'm a computer
            Engineer and I worked in different aspects like network, sysadmin
            and Programming with some languages like C++, C#, Java and python but I became
            interested in web development.
          </p>
          <p className=" py-2 text-gray-600">
            In 2020 I start learning HTML ,CSS and Javascript and then I try to
            learn React.js and Next.js. For now I'm focused on building
            Front-End Web applications and try to learn the Node.js and back-end
            technologies.
          </p>
        </div>
        <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className=" rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
