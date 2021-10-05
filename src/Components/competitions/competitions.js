import React from "react";
import "./Competitions.css";
import Cards from "../cards/Cards.js"

const Competitions = () => {
  return (
    <div className="competition-container">
      <div className="header">
        <h1>Competitions</h1>
        <div className="view">
          <span>View All</span>
          <img src="/Assets/images/Arrow1.svg"
          alt="Arrow" />
        </div>
      </div>
      <div class="card">
      <Cards 
      img="Assets/images/Asset41.svg"
      eventName="Hackathon"
      />
      <Cards 
      img="Assets/images/Asset11.svg"
      eventName="Hackathon"
      />
      <Cards 
      img="Assets/images/Asset51.svg"
      eventName="Hackathon"
      />
      </div>
    </div>
  );
};

export default Competitions;
