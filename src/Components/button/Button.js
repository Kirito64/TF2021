import React from "react";
import "./Button.css";

const STYLES = ["btn-hero", "btn-normal"];

const SIZES = [
  "btn-hero-size",
  "btn-register-size",
  "btn-register-now-size",
  "btn-join-now-size",
];

const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button
        className={`${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
