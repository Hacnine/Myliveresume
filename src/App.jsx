import React, { useRef } from 'react'
import ContactMe from "./app/component/ContactMe/ContactMe";
import Hero from "./app/component/Hero";
import Navbar from "./app/component/Navbar";
import ProjectShowcase from "./app/component/Project/ProjectShowcase";
// import ProjectShowcase from "./app/component/ProjectShowcase/ProjectShowcase";
import ResumeTab from "./app/component/Resume/ResumeTab";
import ServicesSection from "./app/component/Service/ServicesSection";
import './App.css'
import './index.css'
import References from './app/component/References/References';

export default function App() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = {
    Home: homeRef,
    Resume: resumeRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <div className=" bg-[#252526]  ">
      <div className="min-h-fit  bg-slate-900 wrapper text-white">
        <Navbar  refs={refs}/>
        <Hero ref={homeRef} scrollToRef={resumeRef}/>
        </div>
      <ResumeTab ref={resumeRef}/>
      <ServicesSection />

      <ProjectShowcase ref={projectsRef}/>
      {/* <References/> */}
      {/* <ProjectShowcase/> */}
      <ContactMe ref={contactRef}/>
    </div>
  );
}