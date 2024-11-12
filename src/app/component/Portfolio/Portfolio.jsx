"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/app/contant';

const PortfolioTab = () => {
  const [selectedTab, setSelectedTab] = useState('FRONTEND PROJECTS');



  const filteredProjects =
    selectedTab === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedTab);

  return (
    <div className="bg-gray-900/50 wrapper text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">My Masterpiece Collection</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <div className="flex justify-center font-roboto font-semibold text-sm mb-8">
          {[ 'FRONTEND PROJECTS', 'BACKEND PROJECTS', 'VECTOR ARTIST', 'ALL' ].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2  mx-2 ${
                selectedTab === tab ? 'bg-yellow-500 text-white' : 'border border-t-0 text-gray-400'
              } `}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
             <>
             {project.projects.map((project)=>(
              <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800  cursor-pointer hover:scale-105 transition-all duration-500"
            >
              <img src={project.image} alt={project.title} className=" mb-4" />
              <h3 className="text-xl font-semibold ">{project.title}</h3>
              <p className="text-gray-400 p-4">{project.category}</p>
            </motion.div>
             ))}
             </>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
