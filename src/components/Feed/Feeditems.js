import React from "react";
import "./Feeditems.css";
const Feeditems = (props) => {
  return (
    <div className="feed-items-data">
      <props.icon />
      <span>{props.title}</span>
    </div>
  );
};

export default Feeditems;
