import React from 'react'
import "./SpeakerCard.css"
import img from "../../speakerLineUp/assets/speaker1.png";
import Button from '../../../button/Button';

const SpeakerCard = (props) => {

    const {speakerImage, speakerName, speakerDesignation, speakerDetails, isLive, date, time, animation, joinLink} = props;

    return (
      <div data-aos={animation} className="speaker-card">
        <div className="image">
          <img src={speakerImage} alt={speakerName} />
        </div>
        <div className="content">
          <div className="speaker">
            <h2>{speakerName}</h2>
            <h4>{speakerDesignation}</h4>
          </div>
          <div className="speaker-details">{speakerDetails}</div>
          <div className="date-time">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
        </div>
        <div></div>
        <div className="btn-para">
          <a href={joinLink} target="_blank" >
            <Button buttonStyle="btn-normal" buttonSize="btn-join-now-size">
              Register
            </Button>
          </a>
        </div>
      </div>
    );
}

export default SpeakerCard
