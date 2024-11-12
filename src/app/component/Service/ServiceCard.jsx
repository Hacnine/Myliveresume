"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, projects, Icon }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-gray-600/20 w-48   py-12 center flex-col  text-center group "
      >
        <div className="text-4xl mb-4 group-hover:text-yellow-600 transition-colors duration-400 ">{Icon}</div>
        <h3 className="text-lg font-medium mb-2 group-hover:text-yellow-600 transition-colors duration-600">{title}</h3>
        <p className="text-gray-400 text-sm group-hover:text-yellow-600 transition-colors duration-400">{projects} projects</p>
      </motion.div>
    );
  };

export default ServiceCard
