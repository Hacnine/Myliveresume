"use client";
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { FaDownload } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900/50 wrapper text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
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


          <p className="text-yellow-500  font-roboto">Instagram | LinkedIn | Behance | Dribbble</p>

          <button className="mt-4 px-6 py-3 border border-yellow-500 hover:text-black text-xs font-semibold text-yellow-500  uppercase font-helvetica  between  gap-3 hover:bg-yellow-600 transition duration-300">
            Download My CV <FaDownload className=' text-lg'/>
          </button>

          <button className="mt-4 px-6 py-3 border border-yellow-500 hover:text-black text-xs font-semibold text-yellow-500  uppercase font-helvetica hover:bg-yellow-600 transition duration-300">
            Contact Me
          </button>
        </motion.div>
        <img src="/images/profile.svg" className=' w-[500px]' alt="" />
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left mt-8 md:mt-0 md:w-1/2 flex flex-col items-start"
        >
          <h2 className="text-yellow-500 uppercase text-sm tracking-wider">Introduction</h2>
          <h3 className="text-3xl font-bold mt-2 font-roboto">Content creator, Freelance writer, Developer</h3>
          <p className="text-gray-400 mt-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" className="mt-4 text-yellow-500 inline-block font-medium">
            Learn more &rarr;
          </a>
        </motion.div>
      </div>
    </div>
  );
}
