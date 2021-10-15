import React from "react";
import "./Timeline.css";

// importing timeline data
import timelineData from "./timlineData";

// importing SVGs
import { ReactComponent as InnerCircle } from "./assets/ellipse1.svg";
import { ReactComponent as OuterCircle } from "./assets/ellipse2.svg";
import { Spring, animated } from "react-spring";
import {ReactComponent as SearchSvg} from "./assets/search.svg"
import {HashLink} from "react-router-hash-link"

const Timeline = () => {

  const showOverlay = ()=>{
    
  }

  return (
    <>
      <div className="timeline-container">
        <div className="heading">
          <h1 className="large-only">
            Events Line up{" "}
            <HashLink smooth to="/calendar">
              <SearchSvg onClick={showOverlay}></SearchSvg>
            </HashLink>
          </h1>
          <h1 className="mobile-only">Events Schedule</h1>
        </div>
        <Spring from={{ width: "0%" }} to={{ width: "100%" }}>
          {(styles) => (
            <animated.div style={styles}>
              <div className="timeline large-only">
                {timelineData.map((timeEvent) => {
                  return (
                    <div key={timeEvent.id} className="time-event">
                      <div className="time">
                        <p>{timeEvent.time}</p>
                      </div>
                      <div className="event">
                        <h3>{timeEvent.event}</h3>
                      </div>
                    </div>
                  );
                })}

                {/* making line */}
                <div className="circle-container">
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                  <div className="circle">
                    <OuterCircle className="outer-circle"></OuterCircle>
                    <InnerCircle className="inner-circle"></InnerCircle>
                  </div>
                </div>
              </div>
            </animated.div>
          )}
        </Spring>
        <div className="mobile-only">
          <HashLink smooth to="/calendar">
            <button onClick={showOverlay} className="mobile-timeline-btn">
              click
            </button>
          </HashLink>
        </div>
      </div>
    </>
  );
};

export default Timeline;
