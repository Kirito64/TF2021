import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="content">
        <div className="query">
          <p className="for">For Queries Contact</p>
          <p className="light_whitetext">Event Co-ordinators &#129125;</p>
          <p className="light_whitetext">tantrahelp@iiitn.ac.in</p>
        </div>
        <div className="query">
          <p className="for">Follow us on</p>
          <p className="media_icons">
            <TwitterIcon
              className="icons_logo"
              style={{
                fontSize: 40,
                color: "white",
                marginTop: 5,
              }}
            />
            <FacebookIcon
              className="icons_logo"
              style={{
                fontSize: 40,
                color: "white",
                marginTop: 5,
                marginLeft: 3,
              }}
            />
            <InstagramIcon
              className="icons_logo"
              style={{
                fontSize: 40,
                color: "white",
                marginTop: 5,
                marginLeft: 3,
              }}
            />
          </p>
          <p className="light_whitetext">Connect with us here</p>
        </div>
      </div>
      <div className="content sponsors">
        <div className="box1">
          <p className="spon">Our Sponsors</p>
          <p className="Box">
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
          </p>
        </div>
        <div className="box1 box2">
          <p className="spon">Our Co-Sponsors</p>
          <p className="Box">
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              className="icons"
              style={{
                fontSize: 40,
                backgroundColor: "white",
                color: "white",
                borderRadius: 2,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
