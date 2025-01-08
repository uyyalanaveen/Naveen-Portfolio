import React from 'react';
import SkillCard from '../components/SkillCard';
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaC } from "react-icons/fa6";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaJs,
  FaGit,
} from "react-icons/fa";

const skillItems = [
  { id: 1, icon: <FaHtml5 />, title: "Html5" },
  { id: 2, icon: <FaCss3 />, title: "Css" },
  { id: 3, icon: <FaJs />, title: "JavaScript" },
  { id: 4, icon: <FaReact />, title: "React.js" },
  { id: 5, icon: <FaC />, title: "C" },
  { id: 6, icon: <TbBrandCpp />, title: "C++" },
  { id: 7, icon: <FaPython />, title: "Python" },
  { id: 8, icon: <FaNodeJs />, title: "Node.js" },
  { id: 9, icon: <SiPostman />, title: "Postman" },
  { id:10, icon: <FaGithub />, title:"Git"}
];

const Skills = () => {
  return (
    <div className='flex flex-col  mt-10'>
      <h1 className='text-2xl md:text-3xl font-bold mb-8 text-[#4dd0e4f2]'>
        Skills
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {skillItems.map((data) => (
          <SkillCard
            key={data.id}
            icon={data.icon}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
