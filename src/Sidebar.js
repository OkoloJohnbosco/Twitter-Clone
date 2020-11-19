import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GavelIcon from "@material-ui/icons/Gavel";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button, Avatar } from "@material-ui/core";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={GavelIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsIcon} />
      <SidebarOption text="Message" Icon={MessageIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="List" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <Button variant="contained" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileInfo">
          <h4>JohnBosco Stone</h4>
          <p>@JohnboscoOkolo</p>
        </div>
        <MoreHorizIcon className="sidebar__profileInfo" />
      </div>
    </div>
  );
}

export default Sidebar;
