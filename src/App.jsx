import React from 'react'
import ContactMe from "./app/component/ContactMe/ContactMe";
import Hero from "./app/component/Hero";
import Navbar from "./app/component/Navbar";
import PortfolioTab from "./app/component/Project/ProjectShowcase";
import ProjectShowcase from "./app/component/ProjectShowcase/ProjectShowcase";
import ResumeTab from "./app/component/Resume/ResumeTab";
import ServicesSection from "./app/component/Service/ServicesSection";

import './App.css'
import './index.css'

function App() {

  return (
    <div className=" bg-[#252526]  ">
    <div className="min-h-fit  bg-slate-900 wrapper text-white">
      <Navbar />
      <Hero />
    </div>
    <ResumeTab />
    <PortfolioTab />
    {/* <ProjectShowcase/> */}
    <ServicesSection />

    <ContactMe />
  </div>
  )
}

export default App
