import React from 'react'
import ProjectCard from '../components/ProjectCard'
import gfinder from '../assets/gfinder.png'
import Loop from '../assets/Loop.png'
import countrysearch from '../assets/Countrysearch.png'
const projectItems = [
  {
    image: Loop,
    title: "Loop",
    description: "Developing a MERN stack platform for DSA questions, Arch Linux installation, and Neovim guides, with real-time chat, screen sharing, and secure authentication.",
    technologies: ["JavaScript", "React", "Tailwind CSS","Express js","Framer Motion"],
    Link:"https://loop-vert.vercel.app/"
  },
  {
    image: gfinder,
    title: "Gfinder",
    description: "Allows users to search GitHub profiles by username, displaying repositories, followers, and other public data. Features include error handling, responsive design, and an intuitive UI.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    Link:"https://g-finder.vercel.app/"
  },
  {
    image: countrysearch,
    title: "countrysearch",
    description: "A web application to search for country details, including population, region, capital, and flag. Features include responsive design, an intuitive UI, and efficient API integration for seamless user experience.",
    technologies: ["JavaScript", "React", "Tailwind CSS"],
    Link: "https://country-scope-rho.vercel.app/"
}
]

const Projects = () => {
  return (
    <div className='mt-10'>
      <h2 className='text-[#4dd0e4f2] text-3xl font-bold'>Projects</h2>
      <div className='flex flex-col gap-10 mt-10'>
        {
          projectItems.map((Items, index) => (
            <ProjectCard
              key={index}
              image={Items.image}
              title={Items.title}
              description={Items.description}
              technologies={Items.technologies}
              Link={Items.Link}
            />

            
          ))
        }
      </div>

    </div>
  )
}

export default Projects
