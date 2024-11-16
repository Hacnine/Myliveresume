
import React from 'react'
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <div className="md:w-1/2 md:h-fit h-full w-full p-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Frontend Project</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
             <div className=" text-sky-400 pb-3 border-b-2">
                <span>Html 5</span>
                
             </div>
        
            <div className="flex mt-4">
                <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                    >
                        <img src="/icon/github.svg" alt="GitHub" className=" size-10" />
                    </motion.div>
                </a>

                <a href={''}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                    >
                        <img src="/icon/preview.svg" alt="Preview a" className=" size-10" />
                    </motion.div>
                </a>
            </div>
        </div>
    )
}

export default Description
