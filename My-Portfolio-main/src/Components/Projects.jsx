// import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/Film.png";
import GymImage from "../images/gym.png";
import ColourImage from "../images/colour.png";
import BackpackImage from "../images/backpack.png";
import BackpacImage from "../images/backpac.png"
import ColouImage from  '../images/6.png'
import GyImage from '../images/7.png'
import FilImage from '../images/8.png'

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GyImage} projectName="LiveDocs" />
        <ProjectBox projectPhoto={FilmImage} projectName="DSW" />
        <ProjectBox projectPhoto={ColouImage} projectName="StateQuiz" />
        <ProjectBox projectPhoto={BackpacImage} projectName="StonePaperGame" />



        <ProjectBox projectPhoto={GymImage} projectName="EcommerceWebsite" />
        <ProjectBox projectPhoto={FilImage} projectName="Swadeshintern" />
        <ProjectBox projectPhoto={ColourImage} projectName="Startupportal" />
        <ProjectBox projectPhoto={BackpackImage} projectName="WeatherApp" />



      </div>
    </div>
  );
};

export default Projects;
