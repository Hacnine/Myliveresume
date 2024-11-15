import ContactMe from "./component/ContactMe/ContactMe";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

import PortfolioTab from "./component/Portfolio/Portfolio";
import ProjectShowcase from "./component/ProjectShowcase/ProjectShowcase";
import ResumeTab from "./component/Resume/ResumeTab";
import ServicesSection from "./component/Service/ServicesSection";

export default function Home() {
  return (
    <div className=" bg-[#252526] container mx-auto max-w-[1800px]">
      <div className="min-h-fit  bg-gray-900/50 wrapper text-white">
        <Navbar />
        <Hero />
      </div>
      <ServicesSection />
      <ResumeTab />
      <PortfolioTab />
      {/* <ProjectShowcase/> */}
      <ContactMe />
    </div>
  );
}
const closeModal = () => setIsModalOpen(false);
