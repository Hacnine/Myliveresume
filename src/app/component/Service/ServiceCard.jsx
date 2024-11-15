import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

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
            className="bg-gray-500/20 md:w-48 md:py-12 px-5 py-10 center flex-col text-center group"
        >
            <div className="text-4xl mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                {Icon}
            </div>
            <h3 className="text-lg font-medium mb-2 group-hover:text-yellow-500 transition-colors duration-500">
                {title}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-yellow-500 transition-colors duration-400">
                {projects} projects
            </p>
        </motion.div>
    );
};

// ServiceCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     projects: PropTypes.number.isRequired,
//     Icon: PropTypes.element.isRequired,
// };

export default ServiceCard;
