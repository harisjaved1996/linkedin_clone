import React from "react";
import "./Feedpostaction.css";
const Feedpostaction = (props) => {
  return (
    <div>
      <span>{<props.icon />}</span>
      <span>{props.title}</span>
    </div>
  );
};

export default Feedpostaction;
