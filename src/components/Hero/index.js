import React from "react";
import backgroundVid from "../../assets/videos/BackgroundVideo.mp4";
import logo from "../../assets/images/Logo.png";

function Hero() {


  return (
    <section id="hero">
      <video autoPlay muted loop id="video">
          <source src={backgroundVid} type="video/mp4" />
      </video>
      <div className="overlay" id="overlay">
          <img src={logo} alt="Kevin Heaton Software Engineer" />
      </div>
    </section>
  )
}

export default Hero;