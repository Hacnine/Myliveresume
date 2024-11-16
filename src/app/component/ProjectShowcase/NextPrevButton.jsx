
import React from "react";

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
        className="slider-arrow bg-white shadow-md shadow-gray-300 hover:bg-red-700 text-black hover:text-white rounded-full px-5 flex items-center justify-center font-extrabold text-2xl "
        onClick={handlePrevious}
      >
       &#8592;
      </button>
      <button
        className="slider-arrow bg-white shadow-md shadow-gray-300 hover:bg-red-700 text-customred hover:text-white rounded-full px-5 flex items-center justify-center font-extrabold text-2xl "
        onClick={handleNext}
      >
        &#8594;
      </button>
    </>
  );
};

export default NextPrevButton;
