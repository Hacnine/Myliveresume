import React, { useState } from 'react'
import ContactMe from "./app/component/ContactMe/ContactMe";
import Hero from "./app/component/Hero";
import Navbar from "./app/component/Navbar";

import PortfolioTab from "./app/component/Portfolio/Portfolio";
import ProjectShowcase from "./app/component/ProjectShowcase/ProjectShowcase";
import ResumeTab from "./app/component/Resume/ResumeTab";
import ServicesSection from "./app/component/Service/ServicesSection";

import './App.css'

function App() {

  return (
    <div className=" bg-[#252526] container mx-auto max-w-[1800px]">
    <div className="min-h-fit bg-slate-900 wrapper text-white">
      <Navbar />
      <Hero />
    </div>
    <ServicesSection />
    <ResumeTab />
    <PortfolioTab />
    {/* <ProjectShowcase/> */}
    <ContactMe />
  </div>
  )
}

export default App
