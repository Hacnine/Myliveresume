import React from 'react'
import { skills } from '../../constant'
import { motion } from "framer-motion";

const Skills = () => {
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1, // Delay between cards
            },
        },
    };

    const itemVariants = {
        initial: { opacity: 0, rotateY: 0, visibility: "hidden" },
        animate: {
            opacity: 1,
            rotateY: 360, // Flip animation
            visibility: "visible",
            transition: { duration: 0.6, ease: "easeInOut" },
        },
        exit: { opacity: 0, visibility: "hidden" }, // Ensures it's hidden after animation
    };
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
            <p className="text-gray-400 mb-4">Please take a look about my skills.</p>
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="grid md:grid-cols-5 grid-cols-2 gap-4 max-h-[290px] scrollable-container overflow-auto "
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-[#374152]/30 hover:bg-[#374152]/50 px-4 py-8 rounded text-[#5f8bd6] text-center flex flex-col items-center"
                    >
                        {skill.icon && <div className="text-3xl mb-2">{skill.icon}</div>}
                        <div className="text-sm tracking-wider text-[#8eb0eb] font-semibold font-roboto">
                            {skill.name}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
