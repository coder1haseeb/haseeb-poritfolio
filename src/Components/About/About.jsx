import React from "react";
import Intro from "./Intro/Intro";
import './About.css'
import Skills from "./Skills/Skills";
import Clients from "./Clients/Clients";
import ContactLink from "./ContactLink/ContactLink";
const About = () => {
  return (
    <div style={{background : " #191527"}}>
      <div className="about_heading_on_top_page">
        Hi there!
      </div>
      <Intro />
      <Skills />
      <Clients />
      <ContactLink />
    </div>
  );
};

export default About;
