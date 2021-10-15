import React, {useEffect} from "react";
import "./Home.css";
import Landing from "./Components/Landing/landing";
import FromTheTeam from "../../Components/fromTheTeam/FromTheTeam";
import Competitions from "../../Components/competitions/competitions";
import TechTalks from "../../Components/techTalks/TechTalks";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="home-container">
      <Landing></Landing>
      <div data-aos="zoom-in-up">
        <FromTheTeam></FromTheTeam>
      </div>
      <div data-aos-duration="800" data-aos="fade-in">
        <Competitions></Competitions>
      </div>
      <div data-aos-duration="500" data-aos="fade-down">
        <TechTalks></TechTalks>
      </div>
    </div>
  );
};

export default Home;
