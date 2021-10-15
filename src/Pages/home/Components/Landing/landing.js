import React from "react";
import "./landing.css";
import Button from "../../../../Components/button/Button";
import { HashLink } from "react-router-hash-link";
import { Spring, animated } from "react-spring";

const Landing = () => {
  return (
    <div className="root-landing">
      <div className="top-landing">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(styles) => (
            <animated.div style={styles}>
              <h1>Tantra Fiesta 2021</h1>
            </animated.div>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "scale(0)" }}
          to={{ opacity: 1, transform: "scale(1)" }}
          delay={100}
        >
          {(styles) => (
            <animated.div style={styles}>
              <HashLink smooth to="/events">
                <Button buttonSize="btn-hero-size" buttonStyle="btn-hero">
                  Browse Events
                </Button>
              </HashLink>
            </animated.div>
          )}
        </Spring>
        {/* <HashLink smooth to="/events">
          <Button buttonSize="btn-hero-size" buttonStyle="btn-hero">
            Browse Events
          </Button>
        </HashLink> */}
      </div>
      <Spring
        from={{ opacity: 0, transform: "scale(0)" }}
        to={{ opacity: 1, transform: "scale(1.1)" }}
        delay={100}
      >
        {(styles) => (
          <animated.div style={styles}>
            <div className="bottom-landing">
              <p>Proudly Presented By</p>
              <h3>
                Indian Institute of Information <br /> Technology, Nagpur
              </h3>
            </div>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default Landing;
