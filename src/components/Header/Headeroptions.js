import React from "react";

const Headeroptions = (props) => {
  return (
    <>
      <div className="navoption">
        <props.icon />
        {props.title}
      </div>
    </>
  );
};

export default Headeroptions;
