import React from "react";
import logo from "../../assets/images/Logo.png";
import about from "../../assets/images/AboutMe.png";
import projects from "../../assets/images/MyProjects.png";
import contact from "../../assets/images/ContactMe.png";
import mission from "../../assets/images/Mission.png";

function Nav() {
  
  return (
    <div className="nav" id="nav">
      <a href="#hero"><img src={logo} alt="Kevin Heaton Software Engineer" /></a>
      <a href="#about-me"><img src={about} alt="About Me" /></a>
      <a href="#mission"><img src={mission} alt="My Mission" /></a>
      <a href="#projects"><img src={projects} alt="My Projects" /></a>
      <a href="#contact"><img src={contact} alt="Contact Me" /></a>
    </div>
  );
}

export default Nav;