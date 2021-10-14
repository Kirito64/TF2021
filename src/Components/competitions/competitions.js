import React from "react";
import "./competitions.css";
import arrow from "./assets/Arrow1.svg";
import Card from "./card/card";
import { HashLink } from "react-router-hash-link";


// import competitionData
import competitionData from "./competitionData";

import CarouselComponent from "../carousel/Carousel";

const Competitions = () => {
  return (
    <div className="competition-container">
      <div className="header">
        <h1>Competitions</h1>
        <HashLink smooth to="/events#competitions">
          <span className="view">
            <span>View All</span>
            <img src={arrow} alt="Arrow" />
          </span>
        </HashLink>
      </div>
      <CarouselComponent>
        {competitionData.map((competition) => {
          return <Card key={competition.id} {...competition}></Card>;
        })}
      </CarouselComponent>
    </div>
  );
};

export default Competitions;
