import React, { useEffect, useState } from "react";

const navItems = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handlescroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Offset for sticky navbar
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-3 mt-6 items-center md:items-start">
      {navItems.map((item, index) => (
        <a
          href={item.path}
          key={index}
          className={`relative flex items-center text-lg font-medium transition ${
            activeSection === item.path.slice(1)
              ? "text-white"
              : "text-gray-700 hover:text-blue-700"
          }`}
        >
          {/* Line/Indicator */}
          <span
            className={`h-1 border-none rounded-r-lg transition ${
              activeSection === item.path.slice(1) ? "bg-[#4dd0e4f2] w-16" : "bg-gray-700 w-6"
            }`}
          ></span>

          <span className="ml-4">{item.name}</span>
        </a>
      ))}
    </div>
  );
};
