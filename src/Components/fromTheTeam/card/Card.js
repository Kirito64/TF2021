import React, { useState, useRef } from "react";
import "./Card.css";
import polygon from "../assets/polygon.png";

const Card = (props) => {
  const [readMore, setReadMore] = useState(true);

  const {img, cardTitle, cardPara, animation} = props;

  const media = useRef(null)
  const content = useRef(null)
  const paraRef = useRef(null)

  const More = ()=>{
    setReadMore(!readMore)
    console.log("lol")
    media.current.style.color = "";
    if(readMore){
      content.current.style.height = "100%";
      media.current.style.height = "0%";
      paraRef.current.style.overflow = "auto"
      paraRef.current.style.height = "23rem";
    }
    else{
      content.current.style.height = "60%";
      media.current.style.height = "40%";
      paraRef.current.scrollTo(0,0)
      paraRef.current.style.overflow = "hidden";
      paraRef.current.style.height = "8em";
    }
  }

  return (
    <div data-aos={animation} className="card-container">
      <div className="card">
        <div ref={media} className="card-media">
          <img src={img} alt="media" />
        </div>
        <div ref={content} className="card-content">
          <div className="card-title">
            <h2>{cardTitle}</h2>
          </div>
          <div className="card-para">
            <p ref={paraRef}>{cardPara}</p>
          </div>
          <button className="read-btn" onClick={More}>
            {readMore ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
