import React from 'react'
import "./CompetitionFunContest.css"
import Slider from 'react-slick';
import "./Slider.css"

import EventCard from '../cards/eventCard/EventCard';

import competitionsCardData from "./competitionsCardData";
import funCardData from "./funCardData";

const CompetitionFunContest = (props) => {

    const {sectionName} = props;

    const settings = {
      dots: true,
      swipeToSlide: true,
      variableWidth: true,
      adaptiveHeight: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 800,
      arrows: false,
      appendDots: (dots) => (
        <div>
          <ul style={{ marginTop: "0px" }}> {dots} </ul>
        </div>
      ),
    };

    return (
      <div id={sectionName.toLowerCase()} className="competition-fun-section">
        <div className="header">
          <h1>{sectionName}</h1>
        </div>
        <div className="event-carousel">
          <Slider {...settings}>
            {sectionName === "Competitions"
              ? competitionsCardData.map((event) => {
                  return <EventCard key={event.id} {...event}></EventCard>;
                })
              : funCardData.map((event) => {
                  return <EventCard key={event.id} {...event}></EventCard>;
                })}
          </Slider>
        </div>
      </div>
    );
}

export default CompetitionFunContest
