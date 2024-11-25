import React from 'react'
import { profileInfo } from '../../constant'

const AboutMe = () => {
    return (

        <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">About Me</h3>
            <p className="text-gray-400 text-sm md:text-base mb-4">
                I enjoy learning new technologies and constantly improving my skills.I am a frontend developer with six months of internship experience at Datasoft. I have expertise in modern tools like React, Tailwind CSS, Bootstrap, and MUI. I am eager to work on creative projects and thrive in collaborative environments.
            </p>
            <div className="grid grid-cols-2">
                {profileInfo.map(({ title, info }, index) =>
                    <div className='space-x-2 my-5'>
                        <span className=' text-gray-300 font-semibold tracking-wider text-sm font-roboto pl-2 border-l-[6px] border-yellow-500'>{title}:</span> <span className=' text-white text-sm'>{info}</span>
                    </div>
                )}

            </div>
        </div>

    )
}

export default AboutMe
