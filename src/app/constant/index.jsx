import {
  LuPenTool, LuCode2, LuBarChart
} from "react-icons/lu";
import {
  FaSearchengin, FaJava, FaSkype, FaLinkedin, FaSass, FaPython, FaReact,
  FaNodeJs
} from "react-icons/fa";
import {
  IoSearchOutline, IoCallSharp, IoLogoWhatsapp, IoLogoJavascript, IoLogoHtml5
} from "react-icons/io5";
import {
  MdEmail, MdLinkedCamera
} from "react-icons/md";
import {
  BsGithub
} from "react-icons/bs";
import {
  SlVector
} from "react-icons/sl";
import {
  SiNextdotjs, SiTailwindcss, SiMui, SiDjango, SiRedux, SiReactquery,
  SiMongodb
} from "react-icons/si";
import {
  TbBrandFramerMotion
} from "react-icons/tb";
import React from 'react';


export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/hacninetusar/" },
  { name: "GitHub", url: "https://github.com/hacnine" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/hacnine/" },
]

export const contactMethods = [
  { type: '', value: 'hacninetusar@gmail.com', icon: <MdEmail /> },
  { type: '', value: '+8801403041607', icon: <IoCallSharp /> },
  { type: '', value: 'live:hacninetusar_1', icon: <FaSkype /> },
  { type: '', value: 'https://wa.me/01403041607', icon: <IoLogoWhatsapp /> },
  { type: '', value: 'Github.com/Hacnine', icon: <BsGithub /> },
  { type: '', value: 'Linkedin.com/in/hacnine/', icon: <FaLinkedin /> },
];

export const stats = [
  { value: 5, label: 'Months of Experience' },
  { value: 2, label: 'Year of Experience' },

];

export const services = [
  { title: 'Web Development', projects: "10+ Projects", Icon: <LuCode2 /> },
  { title: 'Vector Art', projects: "29+ Works", Icon: <SlVector /> },
  { title: 'Photography', projects: "100+ Works", Icon: <MdLinkedCamera /> },


];

export const profileInfo = [
  { title: 'Name', info: 'Md. Hasnain Tushar' },
  { title: 'Experience', info: 'Almost six months' },
  { title: 'Address', info: 'Kallyanpur, Dhaka' },
  { title: 'Nationality', info: 'Bangladeshi' },
  { title: 'Languages', info: 'Bangla, English' },
  { title: 'Phone', info: '+8801403041607' },
  { title: 'Email', info: 'hacninetusar@gmail.com' },


]




export const skills = [
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs/>},
  { name: 'MongoDB', icon: <SiMongodb/>},
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'MUI', icon: <SiMui /> },
  { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },
  { name: 'Tanstack Query', icon: <SiReactquery /> },
  { name: 'Sass', icon: <FaSass /> },
  // { name: 'Redux', icon: <SiRedux /> },
  // { name: 'Django', icon: <SiDjango /> },
  // { name: 'Python', icon: <FaPython /> },
  // { name: 'Java', icon: <FaJava /> },

];


export const projects = [
  {
    id: 1,
    category: 'VECTOR ARTS',
    projects: [
      { title: "Believe In My Ideas.", category: 'VECTOR ARTIST', image: 'images/vector/Believe.png' },
      { title: "Elephant In The Dust", category: 'VECTOR ARTIST', image: 'images/vector/Elephant.png' },
      { title: "Ghost", category: 'VECTOR ARTIST', image: 'images/vector/Ghost.png' },
      { title: "Kingdom of Rhinoceros", category: 'VECTOR ARTIST', image: 'images/vector/Rhinoceros.png' },
      { title: "Breaking Down", category: 'VECTOR ARTIST', image: 'images/vector/Hill.png' },
      { title: "Deer is in the fog", category: 'VECTOR ARTIST', image: 'images/vector/Deer.png' },
      { title: "City of Arab", category: 'VECTOR ARTIST', image: 'images/vector/Dubai.png' },
      { title: "Valaday", category: 'VECTOR ARTIST', image: 'images/vector/Valaday.png' }
    ]
  },
  {
    id: 2,
    category: 'PROJECTS',
    projects: [
      { title: "Jahez Mart", category: 'PROJECTS', image: 'images/projects/project1.png' },
      { title: "Swift Cart", category: 'PROJECTS', image: 'images/projects/project2.png' },
      { title: "Car Hive", category: 'PROJECTS', image: 'images/projects/project3.png' },
      { title: "Arab Cuisine", category: 'PROJECTS', image: 'images/projects/project4.png' }
    ]
  }
];


export const projectDetails = [
  {
    title: "Jahez Mart",
    description: "This is a responsive web project where you can explore products, add items to your wishlist or cart, and even place orders. It includes handy features like automatic wishlist updates, search, and filters. Check out the live preview!",
    technogies: ["Next.js", "Tailwind CSS", "Material-UI"],
    github: 'https://github.com/Hacnine/jahezmart',
    livepreview: 'https://jahezmart.netlify.app',
    images: [
      '/images/projects/jahez/img1.png',
      '/images/projects/jahez/img2.png',
      '/images/projects/jahez/img3.png',
      '/images/projects/jahez/img4.png',
    ]
  },
  {
    title: "Swift Cart",
    description: "This responsive e-commerce project features a clean, pixel-perfect design. It fetches product details like price and stock from a RESTful API. Users can easily manage their cart—add, remove, or adjust quantities. Check out the live preview!",
    technogies: ["React.js", "Vite", "React Router", "Restful API"],
    github: 'https://github.com/Hacnine/Swiftcart',
    livepreview: 'https://swiftcarts.netlify.app',
    images: [
      '/images/projects/swift/img1.png',
      '/images/projects/swift/img2.png',
      '/images/projects/swift/img3.png',
      '/images/projects/swift/img4.png',
    ]
  },
  {
    title: "Car Hive",
    description: "It is a responsive frontend car rental project with a pixel-perfect design. Users can browse cars, view detailed features and rental prices, and manage their rental list by adding or removing cars. Visit the live preview link for more details.",
    technogies: ["React.js", "React Router", "React Slick", "Vite"],
    github: ' https://github.com/Hacnine/CarHive',
    livepreview: 'https://carhive.netlify.app',
    images: [
      '/images/projects/car/img1.png',
      '/images/projects/car/img2.png',
      '/images/projects/car/img3.png',
      '/images/projects/car/img4.png',
    ]
  },
  {
    title: "Arab Cuisine",
    description: "This restaurant website delivers a full user experience. With the Context API, users can manage their OrderList seamlessly—add or remove items without duplicates. It features About, Portfolio, Clients, Blog, Contact, and OrderList pages, plus a working contact form.",
    technogies: ["React.js", "Vite", "SVG Customization"],
    github: 'https://github.com/Hacnine/Restaurant',
    livepreview: 'https://arabcuisineresturant.netlify.app/',
    images: [
      '/images/projects/arab/img1.png',
      '/images/projects/arab/img2.png',
      '/images/projects/arab/img3.png',
      '/images/projects/arab/img4.png',
    ]
  },
]