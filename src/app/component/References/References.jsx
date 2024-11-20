// References.jsx
import React from 'react';
import ReferenceCard from './ReferenceCard';

const references = [
    {
        name: 'John Doe',
        position: 'Software Engineer',
        company: 'Tech Company',
        testimonial: 'This person is incredibly skilled and a pleasure to work with.',
    },
    {
        name: 'Jane Smith',
        position: 'Product Manager',
        company: 'Innovative Solutions',
        testimonial: 'A fantastic team player and brilliant at problem-solving.',
    },
    {
        name: 'Jane Smith',
        position: 'Product Manager',
        company: 'Innovative Solutions',
        testimonial: 'A fantastic team player and brilliant at problem-solving.',
    },
];

const References = () => {
    return (
        <section className="py-8 px-4 wrapper bg-slate-900">

            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white">References</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Discover what professionals say about my work. These testimonials showcase my dedication to excellence and collaboration in the field of frontend development.
                </p>
            </div>
            <h2 className="text-3xl text-white font-bold text-center mb-6"></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {references.map((reference, index) => (
                    <ReferenceCard key={index} {...reference} />
                ))}
            </div>
        </section>
    );
};

export default References;
