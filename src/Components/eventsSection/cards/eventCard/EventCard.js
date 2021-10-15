import React, {useState, useRef} from 'react'
import "./EventCard.css"

import Button from "../../../button/Button"

const EventCard = (props) => {

    const {title, para, deadline, registrationLink} = props;
    const headingRef = useRef(null)
    const btnd = useRef(null)
    const paraRef = useRef(null)
    const [show, setShow] = useState(false)

    const showInfo = ()=>{
      setShow(true);
      headingRef.current.style.transform = "translate(0,-220%)";
      btnd.current.style.transform = "translate(0,220%)";
      paraRef.current.classList.add("showInfo")
    }

    
    var x = window.matchMedia("(max-width: 850px)");
    var y = window.matchMedia("(min-width: 850px)");

    const hideInfo = ()=>{
      setShow(false);
      headingRef.current.style.transform = "translate(0,0)";
      btnd.current.style.transform = "translate(0,0)";
      paraRef.current.classList.remove("showInfo");
    }

    return (
      <div className="event-card" onClick={x.matches ? (show ? hideInfo : showInfo) : ()=>{}}>
        <div ref={headingRef} className="heading">
          <h2>{title}</h2>
        </div>
        <div
          ref={paraRef}
          onMouseOver={y.matches ? showInfo : ()=>{}}
          onMouseOut={y.matches ? hideInfo : ()=>{}}
          className="para"
        >
          {para}
        </div>
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
