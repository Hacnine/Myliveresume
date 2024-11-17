import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { FaDownload } from "react-icons/fa6";

const Hero = forwardRef(({ scrollToRef }, ref) => {

  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <div className="flex flex-col md:mt-0 mt-20 container mx-auto md:flex-row items-center justify-center h-full px-6" ref={ref}>
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:flex hidden flex-col items-end space-y-4 md:w-1/2"
      >
        <div className="md:flex hidden flex-col items-start space-y-4">
        <h1 className="text-[55px] font-bold font-poppins leading-tight">
          Hasnain
          <span className="block -mt-3">
            Tushar<span className="text-yellow-500">.</span>
          </span>
          <div className="w-6 ml-2.5 bg-yellow-500 h-0.5"></div>
        </h1>

        <p className="text-yellow-500 font-roboto">
          <a
            href="https://github.com/hacnine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/hacnine/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <a
          href="https://drive.google.com/file/d/1-s4V3DwRW0c4J2PFn4sBVBIj3O1WuVfn/view?usp=sharing"
          className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500 uppercase font-helvetica flex items-center gap-3 hover:bg-yellow-500 transition duration-300 rounded-md"
        >
          Download My CV <FaDownload className="text-lg" />
        </a>
        </div>
      </motion.div>

      <img src="/images/profile.svg" className="w-[500px]" alt="Profile Illustration" />

      {/* Right Section */}
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full space-y-4 mt-10 md:hidden "
      >
        <h1 className="text-5xl font-bold font-poppins leading-tight text-yellow-500">
          Hasnain
          <span className="block text-white">
            Tushar<span className="text-yellow-500">.</span>
          </span>
          <div className="w-6 ml-2.5 bg-yellow-500 h-0.5"></div>
        </h1>

        <p className="text-yellow-500 font-roboto">
          <a
            href="https://github.com/hacnine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/hacnine/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <a
          href="https://drive.google.com/file/d/1-s4V3DwRW0c4J2PFn4sBVBIj3O1WuVfn/view?usp=sharing"
          className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500 uppercase font-helvetica flex items-center gap-3 hover:bg-yellow-500 transition duration-300 rounded-md w-fit"
        >
          Download My CV <FaDownload className="text-lg" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left mt-8 md:mt-0 md:w-1/2 flex flex-col items-start"
      >
        <h2 className="text-yellow-500 uppercase text-sm tracking-wider">Introduction</h2>
        <h3 className="text-3xl font-bold mt-2 font-roboto">
          Web Developer and Vector Designer.
        </h3>
        <p className="text-gray-400 mt-4 max-w-md">
          I am a passionate developer with a love for creating dynamic and engaging web applications.
        </p>
        <button className="mt-4 text-yellow-500 inline-block font-medium  hover:text-yellow-600" onClick={handleScroll} >
          Learn more &rarr;
        </button>
      </motion.div>
    </div>
  );
});

export default Hero;
