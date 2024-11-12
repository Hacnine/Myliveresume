"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import NextPrevButton from "./NextPrevButton";
import Link from "next/link";

const images = [
    '/images/projects/jahez/img1.png',
    '/images/projects/jahez/img2.png',
    '/images/projects/jahez/img3.png',
    '/images/projects/jahez/img4.png',
    '/images/projects/jahez/img5.png',
];

const ProjectShowcase = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };


    return (
        <div className="min-h-screen bg-[#1e2026] flex items-center justify-center \ p-8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1f2a38] p-8 rounded-md shadow-lg max-w-4xl mx-auto flex"
            >
                <div className="w-1/2 p-4 text-white">
                    <h2 className="text-2xl font-bold mb-4">Frontend Project</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque consequat, faucibus et, et.</p>
                    <ul className="mb-4">
                        <li>Html 5</li>
                        <li>Css 3</li>
                        <li>Javascript</li>
                    </ul>
                    <div className="flex">
                        <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer" className="mr-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                            >
                                <img src="/path/to/github-icon.png" alt="GitHub" />
                            </motion.div>
                        </a>
                       
                       <Link href={''}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="cursor-pointer"
                            >
                                <img src="/path/to/website-icon.png" alt="Website" />
                            </motion.div>
                            </Link>
                    </div>
                </div>
                <div className="w-1/2 p-4 ce">

                    <Slider  ref={sliderRef} {...settings}>
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 * index }}
                            >
                                <img src={image} alt={`Slide ${index + 1}`} className="rounded-md" />
                            </motion.div>
                        ))}
                    </Slider>
                    <div className="lg:flex items-end justify-end gap-4 hidden">
                        <NextPrevButton sliderRef={sliderRef} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectShowcase;
