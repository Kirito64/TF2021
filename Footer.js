import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer_container1">
        <div className="query">
          <p className="for">For Queries Contact</p>
          <p className="light_whitetext">Event Co-ordinators &#129125;</p>
          <p className="light_whitetext">tantrahelp@iiitn.ac.in</p>
        </div>
        <div className="for">
          <p>Our Sponsors</p>
          <p>
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                // marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
                borderRadius: 2,
              }}
            />
          </p>
        </div>
      </div>
      <div className="footer_container2">
        <div className="query">
          <p className="for">Follow us on</p>
          <p>
            <TwitterIcon
              style={{
                fontSize: 40,
                color: "white",
                marginTop: -10,
              }}
            />
            <FacebookIcon
              style={{
                fontSize: 40,
                marginLeft: 15,
                color: "white",
                marginTop: -10,
              }}
            />
            <InstagramIcon
              style={{
                fontSize: 40,
                marginLeft: 15,
                color: "white",
                marginTop: -10,
              }}
            />
          </p>
          <p className="light_whitetext">Connect with us here</p>
        </div>
        <div className="for">
          <p>Our Co-Sponsors</p>
          <p>
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                // marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
                borderRadius: 2,
              }}
            />
            <CheckBoxOutlineBlankIcon
              style={{
                fontSize: 40,
                backgroundColor: "white",
                marginLeft: 15,
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
