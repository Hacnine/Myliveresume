"use client";
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa6";
import Image from 'next/image';

export default function Home() {
  return (


    <div className="flex flex-col md:flex-row items-center justify-center h-full px-6">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start space-y-4 md:w-1/2"
      >
        <h1 className="text-[55px] font-bold font-poppins leading-tight">
          Hasnain
          <span className="block -mt-3 ">
            Tushar<span className="text-yellow-500">.</span>
          </span>
          <div className="w-6 ml-2.5 bg-yellow-500 h-0.5"></div>
        </h1>


        <p className="text-yellow-500  font-roboto">
          <a href="https://github.com/hacnine">Github</a> | <a href='https://www.linkedin.com/in/hacnine/'>LinkedIn</a>
        </p>
        <a href="https://drive.google.com/file/d/1-s4V3DwRW0c4J2PFn4sBVBIj3O1WuVfn/view?usp=sharing" className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500  uppercase font-helvetica  between  gap-3 hover:bg-yellow-500 transition duration-300"> Download My CV <FaDownload className=' text-lg' /></a>


        <button className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500  uppercase font-helvetica hover:bg-yellow-500 transition duration-300">
          Contact Me
        </button>
      </motion.div>
      <Image width={500} height={250} src="/images/profile.svg" className=' w-[500px]' alt="" />
      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left mt-8 md:mt-0 md:w-1/2 flex flex-col items-start"
      >
        <h2 className="text-yellow-500 uppercase text-sm tracking-wider">Introduction</h2>
        <h3 className="text-3xl font-bold mt-2 font-roboto">Web Developer and Vector Designer.</h3>
        <p className="text-gray-400 mt-4 max-w-md">
          I am a passionate developer with a love for creating dynamic and engaging web applications.
        </p>
        <a href="#" className="mt-4 text-yellow-500 inline-block font-medium">
          Learn more &rarr;
        </a>
      </motion.div>
    </div>

  );
}
