
import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

const NextPrevButton = ({ sliderRef }) => {
  const handlePrevious = () => {
    sliderRef.current.slickPrev(); // Use the ref to control slider
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Use the ref to control slider
  };

  return (
    <>
      <button
  className="slider-arrow bg-yellow-500 text-white py-1 -md shadow-gray-300 hover:text-white rounded-full px-5 flex items-center justify-center font-extrabold text-lg "
  onClick={handlePrevious}
>
  <MdOutlineDoubleArrow className="mirror-arrow" />
</button>
      <button
        className="slider-arrow bg-yellow-500 shadow-md -gray-300  text-customred hover:text-white rounded-full px-5 py-1 flex items-center justify-center font-extrabold text-lg "
        onClick={handleNext} 
      >
       <MdOutlineDoubleArrow/>
      </button>
    </>
  );
};

export default NextPrevButton;
