import React, { useState } from "react";
import Profile from "./components/Profile";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  const [bgStyle, setBgStyle] = useState("");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();

    // Calculate the percentage positions of the mouse within the container
    const xPercent = ((clientX - rect.left) / rect.width) * 100;
    const yPercent = ((clientY - rect.top) / rect.height) * 100;

    // Create a radial gradient based on mouse position
    const gradient = `radial-gradient(
      circle at ${xPercent}% ${yPercent}%, 
      rgba(7, 58, 90, 1),    
      rgba(5, 7, 28, 1) 7% 
    )`;
    
        setBgStyle(gradient);
  };

  return (
    <>
      <div
        className="w-full h-full text-white flex flex-col md:flex-row  p-10"
        style={{
          background: bgStyle|| "#05071c",
          transition: "background 0.1s ease",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* .....................Profile ................... */}
        <Profile />

        <div className="w-full md:w-1/2 md:top-1/4 flex flex-col p-4 mt-10 gap-20 relative">
          {/* ..................About section..................... */}
          <section id="about" className="">
            <About />
          </section>

          {/* ......................Skills Section...................... */}
          <section id="skills" className="">
            <Skills />
          </section>

          {/* ......................Projects Section...................... */}
          <section id="projects" className="">
            <Projects />
          </section>

          {/* ......................Contact Section...................... */}
          <section id="contact" className="h-screen">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
