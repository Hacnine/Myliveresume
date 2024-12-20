
import React from 'react'
import { motion } from 'framer-motion';
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const containerVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.5, staggerChildren: 0.2, }, }, };

const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };
const Description = ({ project }) => {

    return (
        <div className="md:w-1/2 md:h-fit h-full w-full p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="mb-4 text-sm tracking-wider">{project.description}</p>
            <div
                className="text-yellow-500 border-b-2 pb-8 w-full border-slate-100/40 flex flex-wrap gap-2">
                {project.technogies.map((property, index) => (
                    <motion.div key={index}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }} className="border-2 border-yellow-500 px-2 py-0.5 rounded-full text-sm font-semibold">
                        {property}
                    </motion.div>
                ))}
            </div >


            <div className="mt-4 flex items-center font-semibold text-yellow-500 font-sm">
                <div className="flex items-center relative group ">
                    Github :
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4 text-3xl text-blue-300 p-2 ml-2 hover:ring-2 transition-all duration-700 ring-blue-300 rounded-full"
                    >
                        <FaGithub />
                    </a>
                    {/* Tooltip for GitHub */}
                    <span className="absolute top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white bg-gray-800 p-2 rounded shadow-lg">
                        Visit GitHub Repo.
                    </span>
                </div>

                <div className="flex items-center relative group">
                    Livepreview :
                    <a
                        href={project.livepreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-blue-300 p-2 hover:ring-2 ring-blue-300 transition-all duration-700 rounded-full ml-2"
                    >
                        <SiNetlify />
                    </a>
                    {/* Tooltip for Netlify */}
                    <span className="absolute top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white bg-gray-800 p-2 rounded shadow-lg">
                        View Live on Netlify
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Description
