import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { ReactComponent as Square } from "./assets/square.svg";
import { ReactComponent as FacebookIcon } from "./assets/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/social/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./assets/social/linkedin.svg";
import { ReactComponent as DiscordIcon} from "./assets/social/discord.svg"
import { ReactComponent as YoutubeIcon} from "./assets/social/youtube.svg"
import SkillLync from "./assets/sponsors/skillync-icon.png"
import Dtoc from "./assets/sponsors/d2c-icon.png"
import Mentro from "./assets/sponsors/mentro-icon.png"
import Gfg from "./assets/sponsors/gfg-icon.png"
import MadeEasy from "./assets/sponsors/madeasy-icon.png"
import MathWorks from "./assets/sponsors/mathworks-icon.png"
import PrepBytes from "./assets/sponsors/prepbytes-icon.png"
import CodingNinjas from "./assets/sponsors/cn-icon.png"
import BlueLearn from "./assets/sponsors/bluelearn-icon.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="query-follow">
          <div className="query">
            <h2>For Queries Contact</h2>
            <HashLink smooth to="/about#team">
              <p>
                Event Co-ordinators <Arrow></Arrow>{" "}
              </p>
            </HashLink>
            <a href="mailto:tantrafiesta@iiitn.ac.in">
              <p>tantrafiesta@iiitn.ac.in</p>
            </a>
          </div>
          <div className="follow">
            <h2>Join us on</h2>
            <div className="icons">
              <a
                href=" https://www.instagram.com/tantrafiesta/"
                target="_blank"
              >
                <InstagramIcon></InstagramIcon>
              </a>
              <a
                href="https://business.facebook.com/iiitntantra/"
                target="_blank"
              >
                <FacebookIcon></FacebookIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/tantrafiesta-iiit-nagpur-53578b222/"
                target="_blank"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a href="https://discord.gg/4zWEYA5VZv" target="_blank">
                <DiscordIcon></DiscordIcon>
              </a>
              <a
                href="https://www.youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q/featured"
                target="_blank"
              >
                <YoutubeIcon></YoutubeIcon>
              </a>
            </div>
            <p>Connect with us here</p>
          </div>
        </div>
        <div className="sponsors1">
          <div className="event-sponsors">
            <h2>Event Sponsors</h2>
            <div className="square">
              <a href="https://in.mathworks.com/" target="_blank">
                <img src={MathWorks} alt="D2C" />
              </a>
              <a href="https://www.codingninjas.com/" target="_blank">
                <img src={CodingNinjas} alt="D2C" />
              </a>
              <a href="https://www.prepbytes.com/" target="_blank">
                <img src={PrepBytes} alt="D2C" />
              </a>
              <a href="https://www.bluelearn.in/" target="_blank">
                <img src={BlueLearn} alt="D2C" />
              </a>
            </div>
          </div>
          <div className="associate-sponsors">
            <h2>Associate Sponsors</h2>
            <div className="square">
              <a href="https://www.geeksforgeeks.org/" target="_blank">
                <img src={Gfg} alt="GFG" />
              </a>
              <a href="https://mentro.tech/" target="_blank">
                <img src={Mentro} alt="Mentro" />
              </a>
              <a href="https://www.madeeasy.in/" target="_blank">
                <img src={MadeEasy} alt="MadeEasy" />
              </a>
            </div>
          </div>
        </div>
        <div className="sponsors2">
          <div className="title-sponsor">
            <h2>Title Sponsor</h2>
            <div className="square">
              <a href="https://skill-lync.com/" target="_blank">
                <img src={SkillLync} alt="D2C" />
              </a>
            </div>
          </div>
          <div className="platform-sponsor">
            <h2>Platporm Sponsor</h2>
            <div className="square">
              <a href="https://dare2compete.com/" target="_blank">
                <img src={Dtoc} alt="GFG" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
