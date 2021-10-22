import React, {useState, useRef} from 'react'
import "./SpeakerCard.css"
import Button from '../../../button/Button';

const SpeakerCard = (props) => {

    const [readMore, setReadMore] = useState(true)
    const {speakerImage, speakerName, speakerDesignation, speakerDetails, isLive, date, time, animation, joinLink, additionalId} = props;

    const card = useRef(null);
    const details = useRef(null);

    const More = ()=>{
    setReadMore(!readMore)
    let paraObj = details.current.children;
    let paraTag = Object.values(paraObj)[0];
    paraTag.scrollTo(0,0)
    if(card.current.classList.contains("is-reading-more")){
      card.current.classList.remove("is-reading-more")
    }
    else{
      card.current.classList.add("is-reading-more")
    }
  }

    return (
      <div ref={card} data-aos={animation} id={additionalId} className="speaker-card">
        <div className="image">
          <img src={speakerImage} alt={speakerName} />
        </div>
        <div className="content">
          <div className="speaker">
            <h2>{speakerName}</h2>
            <h4>{speakerDesignation}</h4>
          </div>
          <div ref={details} className="speaker-details">
            {speakerDetails}
          </div>
          <div className="date-time">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
          <div className="mobile-read-more">
            <button onClick={More}>
              {readMore ? "Read More" : "Read Less"}
            </button>
          </div>
        </div>
        <div></div>
        <div className="btn-para">
          <a href={joinLink} target="_blank">
            <Button buttonStyle="btn-normal" buttonSize="btn-join-now-size">
              Register
            </Button>
          </a>
        </div>
      </div>
    );
}

export default SpeakerCard
