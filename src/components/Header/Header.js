import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Actions/User";
import Headeroptions from "./Headeroptions";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import avatar from "../../assets/images/user.png";
import { auth } from "../../Firebase";
import linkedin from "../../assets/images/linkedin.png";
const Header = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const logoutUserHandler = () => {
    auth.signOut();
    dispatch(logoutUser());
  };

  return (
    <div className="header-parent">
      <div className="header-container">
        <div className="header_left">
          <img src={linkedin} alt="linkedin " />

          <div className="searchbox">
            <SearchIcon />
            <input className="searchbox" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header_right">
          <Headeroptions title="home" icon={HomeIcon} />
          <Headeroptions title="My Network" icon={PeopleOutlineIcon} />
          <Headeroptions title="Jobs" icon={BusinessCenterIcon} />
          <Headeroptions title="Messaging" icon={CommentIcon} />
          <Headeroptions title="Notifications" icon={NotificationsIcon} />

          <img
            style={{ cursor: "pointer" }}
            onClick={logoutUserHandler}
            className="avatar"
            src={user.picurl ? `${user.picurl}` : avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
