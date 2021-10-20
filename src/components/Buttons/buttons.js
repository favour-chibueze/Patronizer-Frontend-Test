import React from "react";

import "./button.scss";


const Button = (props) => (
    <button
      className={props.type}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  )
  Button.defaultProps = {
    type: "secondary",
    type: "danger",
    type: "primary"
  };
  export default Button;