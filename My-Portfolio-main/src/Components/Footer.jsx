// import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Vermasushant144" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_sushant___verma___/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/sushant-verma-b53171226/" target="_blank">
          <FaLinkedin/>
        </a>
        <a href="https://twitter.com/sushant61745976" target="_blank">
          <FaTwitter/>
        </a>

        <a href="https://youtube.com/@DailyCodingbysushant" target="_blank">
          <FaYoutube/>
        </a>

        <a href="mailTo:vermasushant144@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
