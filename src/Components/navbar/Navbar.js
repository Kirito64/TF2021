import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-logo">
          <div className="tfSvg">
            <img
              src="/Assets/images/tantralogo_wh-01 1.svg"
              alt="tantrafiesta-logo"
            />
          </div>
          <div className="logo-text">
            <h1>Tantra Fiesta</h1>
          </div>
        </div>
        <div
          onClick={() => setShow((prevState) => !prevState)}
          className={`${show ? "hamburger-btn open" : "hamburger-btn"}`}
        >
          <div className="hamburger"></div>
        </div>
        <div className={`${show ? "nav-menu" : "nav-menu hide"}`}>
          <ul>
            <li className="menu-title" >Menu</li> 
            <li>
              <NavLink activeClassName="selected" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/events">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/about">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
