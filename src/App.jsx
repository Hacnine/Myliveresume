import React, { useEffect, useRef, useState } from 'react'
import ContactMe from "./app/component/ContactMe/ContactMe";
import Hero from "./app/component/Hero";
import Navbar from "./app/component/Navbar";
import ProjectShowcase from "./app/component/Project/ProjectShowcase";
import ResumeTab from "./app/component/Resume/ResumeTab";
import ServicesSection from "./app/component/Service/ServicesSection";
import References from './app/component/References/References';
import SkeletonLoader from './app/component/SkeletonLoader';
import './App.css'
import './index.css'

export default function App() {
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const referencesRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const refs = {
    Home: homeRef,
    Resume: resumeRef,
    Projects: projectsRef,
    References: referencesRef,
    Contact: contactRef,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-[#252526]">
      <div className="min-h-fit flex flex-col items-center bg-slate-900 text-white">
        <Navbar refs={refs} />
        <Hero ref={homeRef} scrollToRef={resumeRef} />
      </div>
      <ResumeTab ref={resumeRef} />
      <ServicesSection />
      <ProjectShowcase ref={projectsRef} />
      <References ref={referencesRef} />
      <ContactMe ref={contactRef} />
    </div>
  );
}