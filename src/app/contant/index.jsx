import { LuPenTool } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { FaSearchengin } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuBarChart } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


export const contactMethods = [
  { type: 'Email', value: 'hacninetusar@gmail.com', icon: <MdEmail /> },
  { type: 'Phone', value: '+8801403041607', icon: <IoCallSharp /> },
  { type: 'Skype', value: 'live:hacninetusar_1', icon: <FaSkype /> },
  { type: 'Whatsapp', value: 'https://wa.me/01403041607', icon: <IoLogoWhatsapp /> },
  { type: 'Github', value: 'Github.com/Hacnine', icon: <BsGithub /> },
  { type: 'Linkedin', value: 'Linkedin.com/in/hacnine/', icon: <FaLinkedin /> },
];

export const stats = [
  { value: 2, label: 'Years of Experience' },
  { value: 55, label: 'Satisfied Customers' },
  { value: 211, label: 'Design Items' },
  { value: 34, label: 'Clients Served' },
];

export const services = [
  { title: 'UI/UX Design', projects: 129, Icon: <LuPenTool /> },
  { title: 'Web Development', projects: 221, Icon: <LuCode2 /> },
  { title: 'Web Research', projects: 450, Icon: <IoSearchOutline /> },
  { title: 'Marketing', projects: 331, Icon: <LuBarChart /> },
];


export const projects = [
  {
    id: 1, category: 'VECTOR ARTIST',
    projects: [
      { title: "Jazez Mart", image: 'images/projects/project2.png', github: "", livepreview: "" }
    ]
  },
  {
    id: 2, category: 'FRONTEND PROJECTS',
    projects:
      [
        { title: "Jahez Mart", image: 'images/projects/project1.png', github: "https://github.com/Hacnine/jahezmart", livepreview: "https://jahezmart.netlify.app" },

        { title: "Swift Cart", image: 'images/projects/project2.png', github: "https://github.com/Hacnine/Swiftcart", livepreview: "https://swiftcarts.netlify.app" },

        { title: "Car Hive", image: 'images/projects/project3.png', github: " https://github.com/Hacnine/CarHive", livepreview: " https://carhive.netlify.app" },

        { title: "Arab Cuisine", image: 'images/projects/project4.png', github: "https://github.com/Hacnine/Restaurant", livepreview: " https://arabcuisineresturant.netlify.app/" },
      ]
  }

];