import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { FaDownload } from "react-icons/fa6";
import { socialLinks } from '../constant';

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
    <div className="flex wrapper flex-col md:mt-0 mt-20 container mx-auto md:flex-row items-center justify-center h-full px-6" ref={ref}>
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

          <div className="text-yellow-500 flex  font-roboto">
            {socialLinks.map((link, index, array) => (
              <span className=' group center flex-col'>
              <span key={index}>
                <a
                  href={link.url}
                  target="_parent"
                  rel="noopener noreferrer"
                  className=" ml-0.5"
                >
                  {link.name}
                </a>
                {" "}{index < array.length - 1 && " | "}
              </span>
              <div className="w-1 bg-transparent group-hover:bg-yellow-500  h-0.5 transition-all duration-500 group-hover:w-full"></div>
              </span>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1zmbMbtK0FkpjjFOEy799KFhl2oLV4R3N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500 uppercase font-helvetica flex items-center gap-3 hover:bg-yellow-500 transition duration-300 rounded-md"
          >
            Download My CV <FaDownload className="text-lg" />
          </a>
        </div>
      </motion.div>

      <img src="/images/profile.svg" className="w-[500px] mt-20" alt="Profile Illustration" />



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

        <div className="text-yellow-500 flex font-roboto">
        {socialLinks.map((link, index, array) => (
              <span className=' group center flex-col'>
              <span key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" ml-0.5"
                >
                  {link.name}
                </a>
                {" "}{index < array.length - 1 && " | "}
              </span>
              <div className="w-1 bg-transparent group-hover:bg-yellow-500  h-0.5 transition-all duration-500 group-hover:w-[80%]"></div>
              </span>
            ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1-s4V3DwRW0c4J2PFn4sBVBIj3O1WuVfn/view?usp=sharing"
          className="mt-4 px-6 py-3 border-2 border-yellow-500 hover:text-white text-xs font-semibold text-yellow-500 uppercase font-helvetica flex items-center gap-3 hover:bg-yellow-500 transition duration-300 rounded-md w-fit"
        >
          Download My CV <FaDownload className="text-lg" />
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1 }}

        initial={{ opacity: 0, x: +100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-left mt-8 md:mt-0 md:w-1/2 flex flex-col items-start"
      >
        <h2 className="text-yellow-500 uppercase text-sm tracking-wider">Introduction</h2>
        <h3 className="text-3xl font-bold mt-2 font-roboto">
          Full Stack Web Developer and Vector Designer.
        </h3>
        <p className="text-gray-400 mt-4 max-w-md">
        I am a dedicated developer who enjoys building interactive and user-friendly web applications with clean and efficient code. I have a passion for web development and love to create things that are visually appealing and functional. I am always eager to learn new technologies and improve my skills. I am also a vector designer and I love to create vector illustrations and designs.
        </p>
        <button className="mt-4 text-yellow-500 inline-block font-medium  hover:text-yellow-600" onClick={handleScroll} >
          Learn more &rarr;
        </button>
      </motion.div>
    </div>
  );
});

export default Hero;
