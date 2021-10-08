import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="container">
        <Carousel>
          <div className="felxi">
            <div className="abso">
              <img
                classname="abs"
                style={{ height: "437px", width: "530px" }}
                src=""
              />
            </div>
            <div className="about">
              <h1 className="head">About Tantra Fiesta</h1>
              <p className="para">
                Tantra Fiesta is the Annual Technical Fest of Indian Institute
                of Nagpur. With Tantra comes learning, exploration blah blah. If
                you are a student looking for blah this is the right place for
                you. Tantra Fiesta is the Annual Technical Fest of Indian
                Institute of Nagpur. With Tantra comes learning, exploration
                blah blah. If you are a student looking for blah this is the
                right place for you. Tantra Fiesta is the Annual Technical Fest
                of Indian Institute of Nagpur. With Tantra comes learning,
                exploration blah blah. If you are a student looking for blah
                this is the right place for you. Tantra Fiesta is the Annual
                Technical Fest of Indian Institute of Nagpur. With Tantra comes
                learning, exploration blah blah. If you are a student looking
                for blah this is the right place for you.{" "}
              </p>
            </div>
          </div>
          <div className="abso">
            <img classname="abs" src="" />
          </div>
          <div className="abso">
            <img classname="abs" src="assets/3.jpeg" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default Slider;
