import React from 'react';
import "./landing.css";

import Button from "../../../../Components/button/Button"

const Landing = () => {
    return (
      <div className="root-landing">
        <div className="top-landing">
          <h1>Tantra Fiesta 2021</h1>
          <a href="/Pages/events/Event">
            <Button buttonSize="btn-hero-size" buttonStyle="btn-hero">
              Browse Events
            </Button>
          </a>
        </div>
        <div className="bottom-landing">
          <p>Proudly Presented By</p>
          <h4>
            Indian Institute of Information <br /> Technology, Nagpur
          </h4>
        </div>
      </div>
    );
}

export default Landing