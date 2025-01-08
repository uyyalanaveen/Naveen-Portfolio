import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ image, title, description, technologies, Link }) => {
  return (
    <div className="rounded-lg flex flex-col lg:flex-row  gap-10 p-4 hover:bg-[#11223993] hover:text-[#4dd0e4f2] items-center">

      <img src={image} alt="Project" className="w-64 h-32 md:w-40 xl:w-64" />

      <div className="flex flex-col gap-4 text-center md:text-left xl:text-center">
        <div className="flex items-center gap-2 justify-center md:justify-start xl:justify-center">
          <h2 className="font-bold text-lg">{title}</h2>
          <a href={Link} target="_blank" rel="noopener noreferrer">
            <span className="mt-1 font-bold">
              <MdArrowOutward size={20} />
            </span>
          </a>
        </div>

        <p className="text-gray-500">{description}</p>

 
        <div className="flex gap-3 flex-wrap justify-center md:justify-start xl:justify-center mt-4">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="bg-[#2d666f7f] text-[#4dd0e4f2] px-3 text-sm font-semibold rounded-3xl cursor-pointer"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
