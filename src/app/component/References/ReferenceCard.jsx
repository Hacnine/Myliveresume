// ReferenceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ReferenceCard = ({ name, position, company, testimonial }) => {
  return (
    <motion.div 
      className="bg-gray-500/20 shadow-lg rounded-lg p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src="https://via.placeholder.com/50" 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-300">{name}</h3>
          <p className="text-gray-400">{position} at {company}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-200 italic">"{testimonial}"</p>
    </motion.div>
  );
};

export default ReferenceCard;
