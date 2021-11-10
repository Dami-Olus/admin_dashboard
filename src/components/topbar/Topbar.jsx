import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">KarLytics</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topbarBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1642032000&v=beta&t=3pubYfvp1XoDok0WeBGsfYiEad9ZJmzIkGXHkovBvlQ" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
