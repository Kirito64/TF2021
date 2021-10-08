import React from 'react';
import "./landing.css";
import {Link} from "react-router-dom"

import Button from "../../../../Components/button/Button"

const Landing = () => {
    return (
      <div className="root-landing">
        <div className="top-landing">
          <h1>Tantra Fiesta 2021</h1>
          <Link to="/events" >
            <Button buttonSize="btn-hero-size" buttonStyle="btn-hero">
              Browse Events
            </Button>
          </Link>
        </div>
        <div className="bottom-landing">
          <p>Proudly Presented By</p>
          <h3>
            Indian Institute of Information <br /> Technology, Nagpur
          </h3>
        </div>
      </div>
    );
}

export default Landing