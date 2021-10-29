import React from "react";
import "./Topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Chat from "@material-ui/icons/Chat";
import { Badge, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";


const Topbar = () => {

  return (
    <div className="topbarContainer">
      <div className="logo">
        <Link to="/">
          <p>MNSocial</p>
        </Link>
      </div>
      <div className="searchbarContainer">
        <div className="searchbarWrapper">
          <SearchIcon style={{ color: "black", paddingLeft: "10px" }} />
          <input type="text" placeholder="Search for friend, post or video" />
        </div>
      </div>
        <div className="topbarRight">
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "20px" }}>Home Page</p>
            <p>Timeline</p>
          </div>

          <div className="notificationBar">
            <div style={{ marginRight: "20px" }}>
              <Badge badgeContent={1} color="error">
                <Person />
              </Badge>
            </div>
            <div style={{ marginRight: "20px" }}>
              <Badge badgeContent={2} color="error">
                <Chat />
              </Badge>
            </div>
            <div>
              <Badge badgeContent={1} color="error">
                <Notifications />
              </Badge>
            </div>
          </div>
          <div className="imageWrapper">
            <Avatar src="/assets/images/image_two.jpg" alt="profile_image" />
          </div>
        </div>
    </div>
  );
};

export default Topbar;
