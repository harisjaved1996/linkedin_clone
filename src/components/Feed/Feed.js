import React from "react";
import Feedinputpost from "./Feedinputpost";
import Feedposts from "./Feedposts";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed-container">
      <Feedinputpost />
      <Feedposts />
    </div>
  );
};

export default Feed;
