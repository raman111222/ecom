"use client";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaHashnode, FaMedium } from "react-icons/fa6";
import { useEffect } from "react";
import { useRef } from "react";
import Navbar from "@/Components/navbar";
export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const company_nameref = useRef();
  const mssgref = useRef();

  return (
    <div className="flex  flex-col  text-white overflow-hidden ">
      <Navbar />
      <div className="lg:mt-[10%] mt-[20%] p-5  text-7xl lg:ml-[15%] ">
        Contact Us
      </div>
      <div>
        <form className="flex  flex-col ">
          <div className="w-full flex items-center justify-center ">
            <hr className="h-px w-5/6  my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="flex flex-col ml-[10%] ">
            <div className="flex gap-10 items-center ">
              <div className=" text-gray-500">01</div>
              <div className="text-2xl" id="inputs">
                Whats your name?
              </div>
            </div>
            <div>
              <input
                type="text"
                // ref={nameRef}
                name="name"
                placeholder="Ramandeep Singh"
                className=" ml-[60px] bg-black  border-0 border-black focus:outline-none text-2xl"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-center ">
            <hr className="h-px w-5/6  my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="flex flex-col ml-[10%] ">
            <div className="flex gap-10 items-center ">
              <div className=" text-gray-500">03</div>
              <div className="text-2xl" id="inputs">
                What's your email?
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Raman@gmail.com"
                name="email"
                // ref={emailRef}
                className=" ml-[60px] bg-black  border-0 border-black focus:outline-none text-2xl"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center ">
            <hr className="h-px w-5/6  my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
          <div className="flex flex-col ml-[10%] ">
            <div className="flex gap-10 items-center ">
              <div className=" text-gray-500">01</div>
              <div className="text-2xl" id="inputs">
                Your message
              </div>
            </div>
            <div className="flex flex-wrap">
              <textarea
                name="text"
                // type="text"
                rows={10}
                // ref={mssgref}
                cols={40}
                placeholder="Hey Raman We would like to talk about"
                className=" p-2 ml-[60px] bg-black  border-0 resize-none border-black focus:outline-none text-2xl"
              />
            </div>
          </div>
        </form>
        <div className="w-full relative flex items-center justify-center ">
          <button className="text-white absolute bottom-[-50%] lg:bottom-[-90%] right-[20%] w-[140px] h-[140px] lg:w-[200px] lg:h-[200px] flex items-center justify-center rounded-full  bg-indigo-600 ">
            Send it
          </button>
          <hr className="h-px w-5/6  my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="w-full flex items-center justify-center mb-[200px]"></div>
      </div>
      {/* <footer className="mt-[200px]">
        <div className="flex border-t-2 border-white h-[60px] lg:justify-between justify-center   text-white items-center">
          <div className="flex items-center justify-center pl-5">
            © 2023 Ramandeep Singh
          </div>
          <div className="flex p-5 gap-3 mr-10">
            <a
              href="https://linkedin.com/in/ramandeep-singh-741b41225"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/Ramande08968430" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://github.com/raman111222e" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://yourusername.hashnode.dev/" aria-label="Hashnode">
              <FaHashnode />
            </a>
            <a href="https://medium.com/@singhraman313004" aria-label="Medium">
              <FaMedium />
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
