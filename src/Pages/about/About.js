import React from "react";
import "./About.css";

import Teams from "../../Components/aboutsSection/teams/Teams";
import AboutFromTheTeam from "../../Components/aboutsSection/aboutFromTheTeam/AboutFromTheTeam";

const About = () => {
  return (
    <div>
      <Teams></Teams>
      <AboutFromTheTeam></AboutFromTheTeam>
    </div>
  );
};

export default About;
