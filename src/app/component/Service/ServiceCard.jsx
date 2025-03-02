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
            className="bg-gray-500/20 md:w-48 md:py-12 px-5 py-10 center flex-col text-center group text-yellow-500 rounded-md"
        >
            <div className="text-4xl mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {Icon}
            </div>
            <div className="bg-yellow-500  -mt-2.5 h-1 group-hover:w-[80%] transition-all duration-700 w-7"></div>
            <h3 className="md:text-lg text-sm text-nowrap font-medium mb-2 group-hover:text-blue-500 transition-colors duration-500">
                {title}
            </h3>
            <p className="text-yellow-500 text-sm group-hover:text-yebluellow-500 transition-colors duration-400">
                {projects}
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
