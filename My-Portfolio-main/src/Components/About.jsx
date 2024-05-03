import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Sushant Verma</b> and I am from Greater Noida , India. I'm a <b> web developer</b> and a Third  year
             student pursuing <b>BTECH in Computer Science</b>. <br />
            <br />
             Proficient in a wide range of technologies including <b>HTML, CSS, PHP, Bootstrap, Python, and JavaScript MERN stack</b>, he excels in hunting bugs and crafting innovative solutions to complex problems. His expertise in Python extends to libraries such as <b>Pandas, Numpy, Matplotlib, and frameworks like Tkinter </b>.dedication to creating responsive websites ensures seamless user interaction across various devices. He has already developed a website showcasing his skills and aims to continue pushing the boundaries of web development with his creativity and technical prowess.
            <br/>
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            
           
          </p>
          <a href="https://drive.google.com/file/d/1FAKDdL434naB3eWpbkLwpDAQdWxBc5fj/view?usp=sharing" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Python" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
  
        
      </div>
    </>
  );
};

export default About;
