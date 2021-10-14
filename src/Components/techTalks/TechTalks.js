import React from "react";
import "./TechTalks.css";
import arrow from "./assets/Arrow1.svg";
import Card from "./card/Card";

import CarouselComponent from "../carousel/Carousel";
import TechTalksData from "./TechTalksData";
import { HashLink } from "react-router-hash-link";


const TechTalks = () => {

  return (
    <div className="tech-talk-container">
      <div className="header">
        <h1>Technical Talks</h1>
        <HashLink smooth to="/events#techTalks">
          <span className="view">
            <span>View All</span>
            <img src={arrow} alt="Arrow" />
          </span>
        </HashLink>
      </div>
      <CarouselComponent>
        {
          TechTalksData.map((techTalk)=>{
              return <Card key={techTalk.id} {...techTalk}></Card>;
          })
        }
      </CarouselComponent>
    </div>
  );
};

export default TechTalks;