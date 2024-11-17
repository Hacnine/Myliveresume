
import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileInfo, skills } from '../../constant/index';

const tabs = [
    { id: 1, label: 'Experience' },
    { id: 2, label: 'Education' },
    { id: 3, label: 'Skills' },
    { id: 4, label: 'About Me' },
];

const ResumeTab = forwardRef((props, ref) => {
    const [activeTab, setActiveTab] = useState(1);

    const renderContent = () => {
        switch (activeTab) {
            case 1:
                return (
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">My Experience</h3>
                        <div className="mb-4">
                            <p className="mb-2 text-gray-400 text-sm md:text-base font-semibold">
                                <strong className=' text-yellow-500 text-lg'>Datasoft</strong> - Intern Frontend Developer</p>
                            <span className="mb-4 text-sm font-semibold text-blue-200">May 2024 - October 2024
                            </span>
                        </div>
                        <p className="mb-4 text-gray-400 text-sm md:text-base ">During my internship at DataSoft, I developed two remittance management systems and analytics using React, Tailwind CSS, Bootstrap, and MUI as part of a five-person team. Additionally, I transformed an outdated Django application by rebuilding its frontend with React. I redesigned the application to reduce code duplication, enhance readability, and improve overall structure.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm md:text-base">
                            <li>Developed two remittance management systems and analytics using React, Tailwind CSS, Bootstrap, and MUI.

                            </li>
                            <li>Transformed an outdated Django application by rebuilding its frontend with React.
                            </li>
                            <li>Redesigned the application to reduce code duplication, enhance readability, and improve overall structure.
                            </li>
                        </ul>


                    </div>
                );
            case 2:
                return (

                    <div className=' gap-4 center  flex-col md:flex-row min-w-full'>
                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2010 - 2011</p>
                            <p className=' text-gray-100 mt-1 font-semibold'>SSC in Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Shandhani School and College</li>
                        </div>

                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2012 - 2014</p>
                            <p className=' text-gray-100 mt-1 font-semibold'>HSC in Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Shandhani School and College</li>
                        </div>



                        <div className=" bg-[#283240] w-fit p-4 rounded">
                            <p className=' text-yellow-500 text-sm font-semibold'>2015 - 2019</p>
                            <p className=' text-gray-100 mt-1 font-semibold text-sm'>BSc in Computer Science</p>
                            <li className=' text-gray-400 text-sm mt-2'>Northern University Bangladesh</li>
                        </div>
                    </div >


                );
            case 3:
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
                        <p className="text-gray-400 mb-4">Please take a look about my skills.</p>
                        <div className="grid md:grid-cols-5 grid-cols-2 gap-4 max-h-[250px] scrollable-container overflow-auto ">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-[#374152]/30 px-4 py-8 rounded text-[#5f8bd6] text-center flex flex-col items-center">
                                    {skill.icon && <div className="text-3xl mb-2">{skill.icon}</div>}
                                    <div className=" text-sm tracking-wider  text-[#8eb0eb] font-semibold font-roboto">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ); case 4:
                return (
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">About Me</h3>
                        <p className="text-gray-400 text-sm md:text-base mb-4">
                            I enjoy learning new technologies and constantly improving my skills.I am a frontend developer with six months of internship experience at Datasoft. I have expertise in modern tools like React, Tailwind CSS, Bootstrap, and MUI. I am eager to work on creative projects and thrive in collaborative environments.
                        </p>
                        <div className="grid grid-cols-2">
                            {profileInfo.map(({ title, info }, index) =>
                                <div className='space-x-2 my-5'>
                                    <span className=' text-gray-300 font-semibold tracking-wider font-roboto'>{title}: </span> <span className=' text-white text-sm'>{info}</span>
                                </div>
                            )}

                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-fit flex flex-wrap items-center flex-col justify-center  bg-gray-800 py-16 px-4" ref={ref}>
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
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
});

export default ResumeTab;
