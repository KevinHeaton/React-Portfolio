import React from "react";
import photo from "../../assets/images/portraite.png"

function About() {


  return (
    <article id="about-me">
      <div className="abtitle">
          <h1>About Me</h1>
      </div>
      <div className="abcontent">
          <img src={photo} alt="Kevin Heaton" />
          <p>
            Coding was never something that I imagined myself doing. I had preconceived notions regarding what it meant to be a developer and it felt somewhat out of reach for someone with my experience. However, once I let go of those ideas and gave it a shot I was instantly hooked. I loved being able to create something from scratch and seeing the endless possibilities that programming holds. The more I learned the more I realized you can never know it all and that further fueled my passion. I consider myself a lifelong learner and doing something where you can never stop growing excites me. 
          <br></br>
          <br></br>
            My previous work experience has allowed me to wear many hats and hone many skills. I have been able to work well under pressure and balance multiple priorities in a constantly evolving environment. Through my time in The Coding Boot Camp at UT Austin I have gained experience as a full stack developer, with in-depth knowledge of JavaScript and other widely used languages and a strong understanding of what it means to work in this field. Throughout my time as a teacher and in The Coding Boot Camp, I have also had the opportunity to work with a diverse group of individuals who come from all backgrounds and I pride myself on always maintaining positive and genuine relationships with my colleagues and superiors.
          </p>  
      </div>  
    </article>
  );
}

export default About;