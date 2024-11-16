
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ value, label }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      if (inView && typeof value === 'number') {  // Add typeof check
        controls.start('visible');
        let start = 0;
        const end = value;
        if (start === end) return;
    
        let incrementTime = (2 / (end - start)) * 1000;
    
        let timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, incrementTime);
      }
    }, [controls, inView, value]);
    
  
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
        className="text-center md:w-48 w-36  "
      >
        <h3 className="text-2xl font-semibold  text-yellow-500">{count} +</h3>
        <p className="text-gray-400">{label}</p>
      </motion.div>
    );
  };

export default StatCard
