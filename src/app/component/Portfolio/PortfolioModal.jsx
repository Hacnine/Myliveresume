import React from 'react';
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase';

const PortfolioModal = ({ isModalOpen, closeModal, title }) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1a1d26] flex items-center justify-center z-50">
         <ProjectShowcase closeModal={closeModal}/>
       
        </div>
      )}
    </>
  );
};

export default PortfolioModal;
