import React from "react";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { ReactComponent as Square } from "./assets/square.svg";
import { ReactComponent as TwitterIcon } from "./assets/twitter.svg";
import { ReactComponent as FacebookIcon } from "./assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="query-follow">
          <div className="query">
            <h2>For Queries Contact</h2>
            <a href="">
              <p>
                Event Co-ordinators <Arrow></Arrow>{" "}
              </p>
            </a>
            <a href="mailto:tantrahelp@iiitn.ac.in">
              <p>tantrahelp@iiitn.ac.in</p>
            </a>
          </div>
          <div className="follow">
            <h2>Follow us on</h2>
            <div className="icons">
              <a href="/" target="_blank">
                <TwitterIcon></TwitterIcon>
              </a>
              <a href="https://www.facebook.com/iiitntantra/" target="_blank">
                <FacebookIcon></FacebookIcon>
              </a>
              <a
                href="https://www.instagram.com/tantrafiesta/?hl=en"
                target="_blank"
              >
                <InstagramIcon></InstagramIcon>
              </a>
            </div>
            <p>Connect with us here</p>
          </div>
        </div>
        <div className="sponsors">
          <div className="main-sponsors">
            <h2>Our Sponsors</h2>
            <div className="square">
              <Square></Square>
              <Square></Square>
              <Square></Square>
              <Square></Square>
              <Square></Square>
            </div>
          </div>
          <div className="co-sponsors">
            <h2>Our Co-Sponsors</h2>
            <div className="square">
              <Square></Square>
              <Square></Square>
              <Square></Square>
              <Square></Square>
              <Square></Square>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
