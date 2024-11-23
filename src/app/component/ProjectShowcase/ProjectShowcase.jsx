import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Description from "./Description";
import ImageSlider from "./ImageSlider";
import { projectDetails } from "../../constant";
import { RxCross2 } from "react-icons/rx";
import ReactDOM from 'react-dom';

const ProjectShowcase = ({ closeModal, title }) => {
    const project = projectDetails.find(
        (project) => project.title === title
    );

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 }
        }
    };

    return (<AnimatePresence> <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
        onClick={closeModal}
    >
        <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-[#1f2a38] relative p-6 rounded-md container mx-auto shadow-lg flex md:flex-row flex-col gap-3 items-center justify-center md:w-fit md:h-fit sc-456:w-[440px] sc-456:h-[540px] overflow-y-scroll z-30 scrollable-container md:pt-4"
            onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the overlay
        >
            <div className="md:w-1/2 w-full p-4 md:hidden block">
                <ImageSlider images={project.images} />
            </div>
            <Description project={project} />
            <div className="md:w-1/2 w-full p-4 md:block hidden">
                <ImageSlider images={project.images} />
            </div>
            <button className="absolute sm:top-2 sc-456:top-4 top-10 left-2 text-lg rounded-md font-bold bg-red-500 text-white" onClick={closeModal}>
                <RxCross2 />
            </button>
        </motion.div>
    </div></AnimatePresence>
    );
};

export default ProjectShowcase;