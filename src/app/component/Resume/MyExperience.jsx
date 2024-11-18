import React from 'react'

const MyExperience = () => {
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
    )
}

export default MyExperience
