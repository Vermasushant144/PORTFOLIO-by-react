import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LiveDocsDesc:
      "The Patent-Hospital Connection Platform is an innovative web and mobile application designed to facilitate seamless communication between patients and hospitals. This platform aims to provide convenient access to medical assistance and consultation.",
    LevelsGithub: "https://github.com/Vermasushant144/livedoc",
    // LevelsWebsite: "https://gym-website-pink.vercel.app/",

    DSWDesc:
      "Collaborated in a team to successfully design and develop a Dean Student Website(DSW) for NIET, enhancing user experience and functionality.",

    MovieGithub: "https://github.com/Vermasushant144/DSW-website",
    // MovieWebsite: "https://film-mania.vercel.app/",

    StateQuizDesc:
      "This is a quiz game that tests your knowledge of the 50 states of the United States. The game uses Python and Tkinter to create a graphical user interface that displays a map of the United States. ",
    ColourPaletteGithub: "https://github.com/Vermasushant144/50-States-Quiz-Game",
    // ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    StonePaperGameDesc:
      "I've created a stone-paper-scissors game in Python for you to play with your friends and enjoy.",
    BackpackGithub: "https://github.com/Vermasushant144/stone-paper-game",
    // BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
    EcommerceWebsiteDesc:
    "This website is based on the Tshirt Selling product and built on the MERN stack.",
  WebsiteGithub: "https://github.com/Vermasushant144/Client_Work",
  // BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  SwadeshinternDesc:
    "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
  swadeshGithub: "https://github.com/Vermasushant144/SwadeshIntern",
  // BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  StartupportalDesc:
  "This project contains comprehensive details about various startups. Here, you can register your startup and apply for funding from the government.",
startupGithub: "https://github.com/Vermasushant144/Startup_potal_SIH",
// BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
WeatherAppDesc:
  "I developed a weather app using the MERN stack to display detailed weather information in the app.",
WeatherGithub: "https://github.com/Vermasushant144/Weather-app",
// BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
