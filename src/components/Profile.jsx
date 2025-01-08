import React from 'react';
import { Navbar } from './Navbar';

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/uyyalanaveen', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/uyyalanaveen', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/uyyalanavin', icon: <FaInstagram />, label: 'Instagram' },
];

const Profile = () => {
  return (
    <div className="mx-auto md:w-1/2 w-full md:h-screen md:sticky md:top-[15%] flex flex-col md:left-[5%] p-4 items-center md:items-start ">
      {/* Profile Section */}
      <div className="flex flex-col gap-3 w-full text-center md:text-left items-center md:items-start">
        <h2 className="text-3xl md:text-6xl font-bold"><span className="text-[#4dd0e4f2]">N</span>aveen <span className='text-[#4dd0e4f2]'>U</span>yyala</h2>
        <h3 className="md:text-2xl text-xl font-semibold opacity-80">Frontend Developer</h3>
        <p className="opacity-50 text-sm md:text-base lg:max-w-md">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      {/* Side Navigation */}
      <div className="hidden md:flex w-full mt-8">
        <Navbar />
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-10 justify-center md:justify-start">
        {socialLinks.map((item, index) => (
          <a
            href={item.href}
            key={index}
            aria-label={item.label}
            className="text-3xl hover:text-[#4dd7e4f2] transition-colors duration-300 outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
