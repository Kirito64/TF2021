import React from 'react'
import "./FromTheTeam.css"
import "./Slider.css"
import arrow from "./assets/arrow.svg";
import Slider from "react-slick";
import { ReactComponent as LeftActive } from "./assets/leftActive.svg";
import { ReactComponent as RightActive } from "./assets/rightActive.svg";
import { HashLink } from "react-router-hash-link";

// importing data
import FromTheTeamData from './FromTheTeamData';
import Card from "./card/Card";

const ArrowLeft = (props)=>{
  const { className, style, onClick } = props;
  return (
     <LeftActive
     className={className}
     style={{ ...style, display: "block"}}
     onClick={onClick}
   />
  );
}

const ArrowRight = (props)=>{
     const { className, style, onClick } = props;
     return (
       <RightActive
         className={className}
         style={{ ...style, display: "block"}}
         onClick={onClick}
       />
     );
}


const FromTheTeam = () => {

    const settings = {
      dots: true,
      swipeToSlide: true,
      variableWidth: true,
      adaptiveHeight: true,
      infinite: false,
      slidesToShow: 1,
      initialSlide: 0,
      slidesToScroll: 1,
      arrow: true,
      autoplay: false,
      speed: 400,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />,
      appendDots: (dots) => (
        <div>
          <ul style={{ marginTop: "0px" }}> {dots} </ul>
        </div>
      ),
    };

    return (
      <div className="container">
        <div className="header">
          <h1>From The Team</h1>
          <HashLink smooth to="/about#fromTheTeam">
            <span className="view">
              <span>View All</span>
              <img src={arrow} alt="Arrow" />
            </span>
          </HashLink>
        </div>
        <div className="from-carousel-container">
          <Slider {...settings}>
            {FromTheTeamData.map((card) => {
              return <Card key={card.id} {...card}></Card>;
            })}
          </Slider>
        </div>
      </div>
    );
}

export default FromTheTeam
