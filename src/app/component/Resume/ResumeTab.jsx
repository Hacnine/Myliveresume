
import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyExperience from './MyExperience';
import Education from './Education';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Certification from './Certification';

const tabs = [
    { id: 1, label: 'Experience' },
    { id: 2, label: 'Education' },
    { id: 3, label: 'Skills' },
    { id: 4, label: 'About Me' },
    { id: 5, label: 'Certifications' },

];

const ResumeTab = forwardRef((props, ref) => {
    const [activeTab, setActiveTab] = useState(1);

    const renderContent = () => {
        switch (activeTab) {
            case 1:
                return (<MyExperience />);
            case 2:
                return (<Education />);
            case 3:
                return (<Skills />);
            case 4:
                return (<AboutMe />);
            case 5: 
            return (<Certification />);
            
            default:
                return null;
        }
    };

    return (
        <div className="min-h-fit flex flex-wrap items-center flex-col justify-center  bg-gray-800 py-16 px-4" >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">My Resume</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Discover my journey, skills, education, and the experiences that have shaped me as a passionate frontend developer dedicated to delivering impactful web solutions.
                </p>
            </div>
            <div className=" p-6 rounded-md sm:min-h-[408px]   md:max-h-[408px] container mx-auto  flex flex-col sm:flex-row ">

                <div className="w-full sm:w-1/3 pr-0 sm:pr-8 border-b sm:border-b-0 sm:border-r border-gray-700">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-roboto">Why hire me?</h2>
                    <p className="text-gray-400 mb-6 text-sm md:text-sm font-roboto">With expertise in modern frontend technologies like React, Tailwind CSS, and Bootstrap, I bring creativity, responsiveness, and a passion for building user-friendly web solutions.</p>
                    <ul>
                        {tabs.map((tab) => (
                            <li key={tab.id} className="mb-2">
                                <button
                                    className={`w-full text-left py-2 px-4 rounded transition-all text-sm md:text-base ${activeTab === tab.id
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-[#374152]/30 text-gray-400'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full sm:w-2/3 pl-0 sm:pl-8 mt-4 sm:mt-0"
                        ref={ref}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
});

export default ResumeTab;
