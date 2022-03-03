import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { db } from "../../Firebase";
import Feeditems from "./Feeditems";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import FeedIcon from "@mui/icons-material/Feed";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import "./Feedinputpost.css";
const Feedinputpost = () => {
  const [postMessage, setPostMessage] = useState("");
  const user = useSelector((store) => store.user.user);
  const postHandler = (e) => {
    e.preventDefault();
    if (postMessage === "") {
      alert("Sorry!You cannot put the post empty");
      return false;
    }
    db.collection("posts")
      .add({
        name: user.name,
        description: "Software Engineer",
        avatar: user.picurl,
        postMessage: postMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => setPostMessage(""))
      .catch(() => alert("data not saved successfully"));
  };
  return (
    <div>
      <div className="feed-post-container">
        <form onSubmit={postHandler}>
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            type="text"
            placeholder="Start a Post"
          />
          <button type="submit">submit</button>
        </form>
        <div className="feed-items-container">
          <Feeditems title="Photo" icon={CameraAltIcon} />
          <Feeditems title="Video" icon={SwitchVideoIcon} />
          <Feeditems title="Celebrate" icon={FeedIcon} />
          <Feeditems
            title="Write Article"
            icon={SettingsApplicationsSharpIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedinputpost;
