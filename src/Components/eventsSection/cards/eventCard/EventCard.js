import React from 'react'
import "./EventCard.css"

import Button from "../../../button/Button"

const eventCard = (props) => {

    const {title, para, deadline} = props;

    return (
      <div className="event-card">
        <div className="heading">
          <h2>{title}</h2>
        </div>
        <div className="para">
            {para}
        </div>
        <div className="button-deadline">
            <div className="button">
                <Button buttonSize="btn-join-now-size" buttonStyle="btn-normal" >Register Now</Button>
            </div>
            <div className="deadline">
                <p>Registration Ends On</p>
                <p>{deadline}</p>
            </div>
        </div>
      </div>
    );
}

export default eventCard
