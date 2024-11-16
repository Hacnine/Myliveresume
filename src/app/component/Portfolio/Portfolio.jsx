
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../constant/index';
import PortfolioModal from './PortfolioModal';

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState('FRONTEND PROJECTS');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => { setIsModalOpen(false); };

  // Filter projects based on the selected tab
  const filteredProjects = 
    selectedTab === 'ALL' 
      ? projects 
      : projects.filter((project) => project.category === selectedTab);

  return (
    <div className="bg-gray-800 wrapper text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">My Masterpiece Collection</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <div className="flex justify-center font-roboto font-semibold text-sm mb-8">
          {['FRONTEND PROJECTS', 'VECTOR ARTIST', 'ALL'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 ${selectedTab === tab ? 'bg-yellow-500 text-white border-transparent' : ' text-yellow-500'
                } border-2 border-yellow-500 border-t-0`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Check if project.projects exists and is an array */}
                {project.projects && project.projects.length > 0 && project.projects.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-gray-800 cursor-pointer transition-all duration-500 hover:scale-105"
                    onClick={openModal}
                  >
                    {/* Use Next.js Image component for optimized images */}
                    <img src={item.image} alt={item.title} className="md:w-[290px] md:h-[200px] w-full" />

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute top-4 left-5 size-[85%] bg-[#2d3038] flex items-center justify-center"
                    >
                      <div className="text-center text-white">
                        <p>Additional Information</p>
                        {/* Add more details or links here */}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <PortfolioModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Portfolio;
