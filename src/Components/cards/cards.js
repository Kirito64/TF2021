import React from "react";
import "./Cards.css";

const Cards = function(props) {
  return (
    <div>
      <div className="gallery">
        <img src={props.img} alt="img"/>
        <div className="desc">
            <p className="one">{props.eventName}</p>
            <div className="same">
            <button className="button">Register</button>
            <p className="two">Registration ends on 15th Oct 11:59pm IST</p>
            </div>
            <p className="three">Download rule book</p>
        </div>
			</div>
    </div> 
  );
};

export default Cards;
