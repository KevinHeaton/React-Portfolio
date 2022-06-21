import React from "react";
import phone from "../../assets/images/Phone.png";
import email from "../../assets/images/EmailLogo.png";
import linkedIn from "../../assets/images/LinkedIn.png";
import gitHub from "../../assets/images/GitHub.png";
import resume from "../../assets/images/MyResume.png";


function Contact() {

  return (
    <address id="contact">
      <div className="contacts">
        <h1>Contact Me</h1>
      </div>
      <div className="filler">
          <img src={phone} alt="Call Kevin at 5125789070" />
          <a href="mailto: williamkevinheaton@gmail.com"><img src={email} alt="Email Kevin at williamkevinheaton@gmail.com" /></a>
          <a href="https://www.linkedin.com/in/kevin-heaton-663b2ab5/" target="_blank" rel="noreferrer"><img src={linkedIn} alt="Go to Kevin's LinkedIn Profile" /></a>
          <a href="https://github.com/KevinHeaton" target="_blank" rel="noreferrer"><img src={gitHub} alt="Go to Kevin's GitHub profile" /></a>
          <a href="https://drive.google.com/file/d/1C6lS8hlS9RnEeMC87ZSWGL67QT-2Btxr/view?usp=sharing" target="_blank" rel="noreferrer"><img src={resume} alt="Go to Kevin's resume" /></a>
      </div>
    </address>
  );
}

export default Contact;