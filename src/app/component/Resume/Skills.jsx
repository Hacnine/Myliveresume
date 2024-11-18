import React from 'react'
import { skills } from '../../constant'

const Skills = () => {
    return (
        <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
            <p className="text-gray-400 mb-4">Please take a look about my skills.</p>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4 max-h-[290px] scrollable-container overflow-auto ">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-[#374152]/30 hover:bg-[#374152]/50 px-4 py-8 rounded text-[#5f8bd6] text-center flex flex-col items-center">
                        {skill.icon && <div className="text-3xl mb-2">{skill.icon}</div>}
                        <div className=" text-sm tracking-wider  text-[#8eb0eb] font-semibold font-roboto">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
