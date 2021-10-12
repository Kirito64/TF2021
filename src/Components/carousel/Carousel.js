import React from "react";
import "./Carousel.css"
import Slider from "react-slick";

const CarouselComponent = ({ children}) => {

  const settings = {
    dots: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div>
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          variableWidth: true,
          arrows: false,
        },
      },
      {
        breakpoint: 774,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 800,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          variableWidth: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 800,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CarouselComponent;