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
import { SlVector } from "react-icons/sl";

import React from 'react';
import { LiaReact } from 'react-icons/lia';
import { SiNextdotjs, SiTailwindcss, SiMui, SiDjango } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { FaSass, FaPython } from 'react-icons/fa';
import { IoLogoHtml5 } from "react-icons/io";
import { SiRedux } from "react-icons/si";

export const contactMethods = [
  { type: '', value: 'hacninetusar@gmail.com', icon: <MdEmail /> },
  { type: '', value: '+8801403041607', icon: <IoCallSharp /> },
  { type: '', value: 'live:hacninetusar_1', icon: <FaSkype /> },
  { type: '', value: 'https://wa.me/01403041607', icon: <IoLogoWhatsapp /> },
  { type: '', value: 'Github.com/Hacnine', icon: <BsGithub /> },
  { type: '', value: 'Linkedin.com/in/hacnine/', icon: <FaLinkedin /> },
];

export const stats = [
  { value: 6, label: 'Months of Experience' },
  { value: 2, label: 'Year of Experience' },

];

export const services = [
  { title: 'Web Development', projects: 10, Icon: <LuCode2 /> },
  { title: 'Vector Design', projects: 29, Icon: <SlVector /> },


];

export const profileInfo = [
  {title: 'Name', info: 'Md. Hasnain Tushar'},
  {title: 'Experience', info: 'Almost six months'},
  {title: 'Address', info: 'Kallyanpur, Dhaka'},
  {title: 'Nationality', info: 'Bangladeshi'},
  {title: 'Languages', info: 'Bangla, English'},
  {title: 'Phone', info: '+8801403041607'},
  {title: 'Email', info: 'hacninetusar@gmail.com'},

  
]




export const skills = [
    { name: 'React', icon: <LiaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
    { name: 'JavaScript', icon: <IoLogoJavascript /> },
    { name: 'HTML & CSS', icon: <IoLogoHtml5/> },
    { name: 'MUI', icon: <SiMui /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Redux', icon: <SiRedux /> },

    { name: 'Django', icon: <SiDjango /> },
    { name: 'Python', icon: <FaPython /> },
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