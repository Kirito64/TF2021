import React from 'react'
import "./Card.css"
import speaker1 from "../assets/speaker1.png";
import { HashLink } from 'react-router-hash-link';

import Button from '../../button/Button'

const Card = (props) => {
    
    const {speakerImage,title, speakerName, speakerDesignation, date, time, hasButton, joinLink, directTo} = props

    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -200;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };


    return (
      <div className="tech-talk-card">
        <div className="image">
          <img src={speakerImage} alt="" />
          <a href={joinLink} target="_blank">
            <Button buttonSize="btn-join-now-size" buttonStyle="btn-normal">
              Join Here
            </Button>
          </a>
        </div>
        <div className="content">
          <div className="heading">
            <HashLink
              smooth
              to={`/events#${directTo}`}
              scroll={(el) => scrollWithOffset(el)}
            >
              <h2 title={title}>{title}</h2>
            </HashLink>
          </div>
          <div className="speaker">
            <h3>{speakerName}</h3>
            <h4 title={speakerDesignation}>{speakerDesignation}</h4>
          </div>
          <div className="date-time">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
        </div>
      </div>
    );
}

export default Card
