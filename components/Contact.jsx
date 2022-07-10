/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import ContactImg from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import useUpdateInputs from "../hooks/useUpdateInputs";
import { api } from "../lib/contactService";

const initialState = {
  name: "",
  number: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [fields, updateFields, setFields] = useUpdateInputs(initialState);

  const submitContactInfo = async (e) => {
    e.preventDefault();

    if (fields.email.length < 3 || fields.message.length < 3) {
      return alert("Please fill out email and message fields.");
    }

    try {
      const { data } = await api(fields);
      setFields(initialState);
      alert(data.message);
    } catch (error) {
      alert("something is wrong!");
    }
  };

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

          <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className=" p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      onChange={updateFields}
                      value={fields.name}
                    />
                  </div>
                  <div className=" flex flex-col">
                    <label className=" uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="number"
                      onChange={updateFields}
                      value={fields.number}
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    onChange={updateFields}
                    value={fields.email}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Subject</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    onChange={updateFields}
                    value={fields.subject}
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300 "
                    rows="10"
                    name="message"
                    onChange={updateFields}
                    value={fields.message}
                  ></textarea>
                </div>
                <button
                  className=" w-full p-4 text-gray-100 mt-4"
                  onClick={submitContactInfo}
                >
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
