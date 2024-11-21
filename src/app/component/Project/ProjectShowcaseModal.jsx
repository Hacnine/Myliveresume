import React, { useState } from 'react';
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase';
import { RxCross2 } from "react-icons/rx";
import ReactDOM from 'react-dom';



const PortfolioModal = ({ isModalOpen, closeModal, project }) => {
  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
           {project.category === "VECTOR ARTIST" ? <div className="relative">
            <button className=" absolute top-3 left-3 z-50 rounded-md font-bold bg-red-500 text-white" onClick={closeModal}>
            <RxCross2 />
            </button>
            <img src={project.image} alt={project.title} />
          </div>

           :

            <div className="w-full" onClick={() => setShow(false)}>
              <ProjectShowcase closeModal={closeModal} title={project.title} />
            </div>
          }
    </div>,
    document.getElementById('modal-root') // This is where we attach the modal outside the normal React DOM hierarchy
  );
};

export default PortfolioModal;
