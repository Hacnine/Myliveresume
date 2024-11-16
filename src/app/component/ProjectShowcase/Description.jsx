
import React from 'react'
import { motion } from 'framer-motion';
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Description = ({ project }) => {

    return (
        <div className="md:w-1/2 md:h-fit h-full w-full p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="mb-4 text-sm">{project.description}</p>
            <div className=" text-yellow-500 border-b-2 pb-8 border-slate-100/40">
                {project.technogies.map((property) => (
                    <span className=' border-2 border-yellow-500 px-2 py-0.5 mx-1 rounded-full text-sm font-semibold'>{property}</span>
                ))}


            </div>

            <div className="mt-4 flex items-center font-semibold text-yellow-500">
                Github :
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-3xl text-blue-300 p-2 ml-2 hover:ring-2 ring-blue-300 rounded-full"
                >
                    <FaGithub />
                </a>

                <div className="flex items-center">
                    Livepreview :
                    <a
                        href={project.livepreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-blue-300 p-2 hover:ring-2 ring-blue-300 rounded-full ml-2"
                    >
                        <SiNetlify />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Description
