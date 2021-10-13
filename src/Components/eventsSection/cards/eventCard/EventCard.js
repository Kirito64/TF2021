import React, {useRef} from 'react'
import "./EventCard.css"

import Button from "../../../button/Button"

const EventCard = (props) => {

    const {title, para, deadline, registrationLink} = props;
    const headingRef = useRef(null)
    const btnd = useRef(null)
    const paraRef = useRef(null)

    const showInfo = ()=>{
      headingRef.current.style.transform = "translate(0,-220%)";
      btnd.current.style.transform = "translate(0,220%)";
      paraRef.current.classList.add("showInfo")
    }

    // showInfo()

    const hideInfo = ()=>{
      headingRef.current.style.transform = "translate(0,0)";
      btnd.current.style.transform = "translate(0,0)";
      paraRef.current.classList.remove("showInfo");
    }

    return (
      <div className="event-card" onMouseOver={showInfo} onMouseOut={hideInfo}>
        <div ref={headingRef} className="heading">
          <h2>{title}</h2>
        </div>
        <div ref={paraRef} className="para">{para}</div>
        <div ref={btnd} className="button-deadline">
          <div className="button">
            <a href={registrationLink} target="_blank">
              <Button buttonSize="btn-join-now-size" buttonStyle="btn-normal">
                Register Now
              </Button>
            </a>
          </div>
          <div className="deadline">
            <p>Registration Ends On</p>
            <p>{deadline}</p>
          </div>
        </div>
      </div>
    );
}

export default EventCard
