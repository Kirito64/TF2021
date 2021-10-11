import React from 'react'
import "./SpeakerCard.css"
import img from "../../speakerLineUp/assets/speaker1.png";
import Button from '../../../button/Button';

const SpeakerCard = (props) => {

    const {speakerImage, speakerName, speakerDesignation, speakerDetails, isLive, date, time} = props;

    return (
      <div className="speaker-card">
        <div className="image">
          <img src={img} alt={speakerName} />
        </div>
        <div className="content">
          <div className="speaker">
            <h2>{speakerName}</h2>
            <h4>{speakerDesignation}</h4>
          </div>
          <div className="speaker-details">
            <p>
              {speakerDetails}
            </p>
          </div>
          <div className="date-time">
            {isLive ? (
              <>
                <div className="btn-para">
                  <Button
                    buttonStyle="btn-normal"
                    buttonSize="btn-join-now-size"
                  >
                    Join Now
                  </Button>
                  <p>Live Now</p>
                </div>
              </>
            ) : (
              <>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default SpeakerCard
