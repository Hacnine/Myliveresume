import ContactMe from "./component/ContactMe/ContactMe";
import Hero from "./component/Hero";
import PortfolioTab from "./component/Portfolio/Portfolio";
import ProjectShowcase from "./component/ProjectShowcase/ProjectShowcase";
import ServicesSection from "./component/Service/ServicesSection";

export default function Home() {
  return (
    <div  className=" bg-[#252526] ">
      <Hero/>
      <ServicesSection/>
      <PortfolioTab/>
      {/* <ProjectShowcase/> */}
      <ContactMe/>
    </div>
  );
}
