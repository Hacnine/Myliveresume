// References.jsx
import React, { forwardRef } from 'react';
import ReferenceCard from './ReferenceCard';

const references = [
    {
        name: 'Monowar Hossain',
        position: 'DevOps Engineer',
        company: 'Arogga',
        linkedin: "https://www.linkedin.com/in/md-monowar-hossain-4247bb122/",
        testimonial: 'This person is incredibly skilled and a pleasure to work with.',
        img: "/images/testimonal/1657550256676.jfif"
    },
    {
        name: 'Maksudur Rahman',
        position: 'Product Manager',
        company: 'DataSoft Systems Bangladesh Limited',
        linkedin: "https://www.linkedin.com/in/maksudur-rahman-sohel-1532611b/",
        testimonial: 'A fantastic team player and brilliant at problem-solving.',
        img: "/images/testimonal/1516864609041.jfif"
    },
    {
        name: 'Mahidul Moon',
        position: 'Software Engineer',
        company: 'DataSoft Systems Bangladesh Limited',
        linkedin: "https://www.linkedin.com/in/mahidul-moon-281509144/",
        testimonial: 'A fantastic team player and brilliant at problem-solving.',
        img: "/images/testimonal/1723645170440.jfif"
    },
];

const References = forwardRef((props, ref) => {
    return (
        <section className="py-8 px-4  wrapper bg-slate-900" ref={ref}>

            <div className="container mx-auto"> <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">References</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                Find professional references who can attest to my skills, work ethic, and contributions in frontend development.
                </p>
            </div>
                <h2 className="text-3xl text-white font-bold text-center mb-6"></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {references.map((reference, index) => (
                        <ReferenceCard key={index} {...reference} />
                    ))}
                </div></div>
        </section>
    );
});

export default References;
