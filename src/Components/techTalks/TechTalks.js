import React from "react";
import "./TechTalks.css";
import arrow from "./assets/Arrow1.svg";
import Card from "./card/Card";

import CarouselComponent from "../carousel/Carousel";
import TechTalksData from "./TechTalksData";

const TechTalks = () => {

  return (
    <div className="tech-talk-container">
      <div className="header">
        <h1>Technical Talks</h1>
        <a href="">
          <span className="view">
            <span>View All</span>
            <img src={arrow} alt="Arrow" />
          </span>
        </a>
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