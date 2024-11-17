import React, { useState } from 'react';
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase';
import { RxCross2 } from "react-icons/rx";
const PortfolioModal = ({ isModalOpen, closeModal, project }) => {

  const [show, setShow] = useState(true);
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1d26] flex items-center justify-center ">
          
            
          {project.category === "VECTOR ARTIST" ? <div className="relative">
            <button className=" absolute top-3 left-3 z-50" onClick={closeModal}>
            <RxCross2 />
            </button>
            <img src={project.image} alt={project.title} />
          </div>

           :

            <div className="w-full" onClick={() => setShow(false)}>
              <ProjectShowcase closeModal={closeModal} title={project.title} />
            </div>
          }

        </div>
      )}
    </>
  );
};

export default PortfolioModal;
