import React from "react";
import "./Carousel.css"
import Slider from "react-slick";

const CarouselComponent = (props) => {
  const { children } = props;

  const settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 800,
        },
      },
    ],
  };

  return (
    <div className="create-carousel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CarouselComponent;