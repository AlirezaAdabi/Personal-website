/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import ContactImg from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
const Contact = () => {
  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className=" py-4">Get In Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 p-4">
            <div className=" lg:p-4 h-full ">
              <div>
                <Image
                  src={ContactImg}
                  className=" rounded-xl hover:scale-105 ease-in  duration-300"
                  alt="/"
                />
              </div>
              <div>
                <h2 className=" py-2">Alireza Adabi</h2>
                <p>Front-End Developer</p>
                <p className=" py-4">
                  I am available for freelance. Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className=" uppercase pt-8">Contact With Me</p>
                <div className=" flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                    <Link href="https://www.linkedin.com/in/alireza-adabi-5a4b77208/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                    <Link href="https://github.com/AlirezaAdabi">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                    <Link href="mailto:alireza.adabi78@gmail.com">
                      <AiOutlineMail />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-[#5651e5]">
                    <Link href="https://twitter.com/Mehrab_Adabi">
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Subject</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300 "
                    rows="10"
                  ></textarea>
                </div>
                <button className=" w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=" flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className=" text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
        <p>
          Created by me <BiCodeAlt className=" inline" /> | All Reserved!
        </p>
      </div>
    </div>
  );
};

export default Contact;
