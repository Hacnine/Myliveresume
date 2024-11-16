
import React from 'react';
import { motion } from 'framer-motion';
import { contactMethods } from '../../constant/index';

const ContactMe = () => {
    return (
        <div className="p-8 bg-slate-900 wrapper text-white center flex-col   contianer mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ways To Contact Me</h2>
            <p className="mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center md:mb-4">
                    {contactMethods.slice(0, 3).map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center mx-4 my-2 bg-[#282b33]  px-6 py-5 text-yellow-500"
                        >
                            <span className="mr-2 text-white text-xl">{method.icon}</span>
                            <span className="font-medium text-base">{method.type}</span> <span className="ml-1 text-base">{method.value}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center">
                    {contactMethods.slice(3, 5).map((method, index) => (
                        <motion.div
                            key={index + 3}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * (index + 3) }}
                            className="flex items-center mx-4 my-2 bg-[#282b33]  px-6 py-5 text-yellow-500"
                        >
                            <span className="mr-2 text-white text-xl">{method.icon}</span>
                            <span className="font-medium text-base">{method.type}</span> <span className="ml-1 text-base">{method.value}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
