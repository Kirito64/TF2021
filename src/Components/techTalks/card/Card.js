import React from 'react'
import "./Card.css"
import speaker1 from "../assets/speaker1.png";

import Button from '../../button/Button'

const Card = (props) => {
    
    const {speakerImage,title, speakerName, speakerDesignation, date, time, hasButton} = props

    return (
        <div className="tech-talk-card">
            <div className="image">
                <img src={speaker1} alt="" />
                {hasButton ? "" : <Button buttonSize="btn-join-now-size" buttonStyle="btn-normal">Join Now</Button>}
            </div>
            <div className="content">
                <div className="heading">
                    <h2>{title}</h2>
                </div>
                <div className="speaker">
                    <h3>{speakerName}</h3>
                    <h4>{speakerDesignation}</h4>
                </div>
                <div className="date-time">
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
