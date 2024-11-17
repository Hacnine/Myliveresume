

import React, { useRef } from 'react';
import Slider from 'react-slick';
import NextPrevButton from "./NextPrevButton";
import { motion } from 'framer-motion';

const ImageSlider = ({images}) => {
    console.log(images)
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
        <>

            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * index }}
                        className="   md:w-[400px] w-[100px] md:h-[400px] h-[300px]"
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="" />
                    </motion.div>
                ))}
            </Slider>
            <div className="flex items-center md:mt-3 mt-6 justify-center gap-4 ">
                <NextPrevButton sliderRef={sliderRef} />
            </div>
        </>
    )
}

export default ImageSlider
