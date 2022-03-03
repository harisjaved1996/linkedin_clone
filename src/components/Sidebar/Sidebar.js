import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import avatar_cover_image from "../../assets/images/cover_avatar.jpg";
import avatar from "../../assets/images/user.png";
import Recentitems from "./Recentitems";
const Sidebar = () => {
  const user = useSelector((store) => store.user.user);
  console.log(user);
  return (
    <div className="sidebar-container">
      <div className="user-information">
        <div className="avatar-cover">
          <img src={avatar_cover_image} alt="bg-avatar" />
        </div>
        <div className="avatar-cotnainer">
          <div className="avatar-user">
            <img
              className="avatar-user-image"
              src={user.picurl ? `${user.picurl}` : avatar}
              alt="bg-avatar"
            />
          </div>
          <div className="">
            <h4 className="avatar-name">{user.name}</h4>
            <h5 className="avatar-email">{user.email}</h5>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <div className="view-detail">
            <div className="view-profile">
              <span>Who viewed your profile</span>
              <span className="porfile-stat">200</span>
            </div>
            <div className="view-post">
              <span>Who viewed your post</span>
              <span className="post-stat">215</span>
            </div>
          </div>
          <br />
          <div></div>
        </div>
      </div>
      <div className="recent-items">
        <h4>Recent</h4>
        <div className="recent-items-title">
          <Recentitems title="#programming" />
          <Recentitems title="#Html" />
          <Recentitems title="#CSS" />
          <Recentitems title="#JAVASCRIPT" />
          <Recentitems title="#PYTHON" />
          <Recentitems title="#PHP" />
          <Recentitems title="#REACT" />
          <Recentitems title="#NODE" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
