import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Description from "./Description";
import ImageSlider from "./ImageSlider";
import { projectDetails } from "../../constant";


const ProjectShowcase = ({ closeModal, title }) => {
    const project = projectDetails.find(
        (project) => project.title === title
    );
    console.log(project)
    // const [width, setWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setWidth(window.innerWidth);
    //     console.log('Current screen width:', window.innerWidth);
    //   };

    //   // Add event listener for window resize
    //   window.addEventListener('resize', handleResize);

    //   // Initial log for the first render
    //   console.log('Initial screen width:', width);

    //   // Cleanup listener on component unmount
    //   return () => window.removeEventListener('resize', handleResize);
    // }, [width]);


    return (
        <div className=" bg-[#1e2026]  wrapper py-16 ">

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1f2a38] relative p-8 rounded-md container mx-auto shadow-lg    flex md:flex-row flex-col gap-3 items-center justify-center md:w-fit md:h-fit sc-456:w-[440px] sc-456:h-[640px] sc-456:overflow-y-clip overflow-y-scroll z-50"
            >
                {/* <p>Current screen width: {width}px</p> */}
               
                    <div className="md:w-1/2 w-full p-4 md:hidden block">
                        <ImageSlider images={project.images}/>
                    </div>
                    <Description project={project} />
                    <div className="md:w-1/2 w-full p-4 md:block  hidden">
                        <ImageSlider  images={project.images}/>
                    </div>

                <button className=" absolute top-0 left-0" onClick={closeModal}><img src="/icon/close.svg" className="size-12" alt="" /></button>

            </motion.div>
        </div>
    );
};

export default ProjectShowcase;
