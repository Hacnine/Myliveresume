// ReferenceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const ReferenceCard = ({ name, linkedin, position, company, testimonial, img }) => {
  return (
    <a href={linkedin}
      target="_blank"
      rel="noopener noreferrer">
      <motion.div
        className="bg-gray-500/20 min-h-[140px] shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center mb-4">
          <img
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <div className="flex items-center gap-2"><FaLinkedin className=' text-2xl text-yellow-500  ' /><h3 className="text-lg font-semibold text-gray-300">{name}</h3></div>
            <p className="text-gray-400">{position} at {company}</p>
          </div>
        </div>
        {/* <p className="mt-4 text-gray-200 italic">"{testimonial}"</p> */}
      </motion.div></a>
  );
};

export default ReferenceCard;
