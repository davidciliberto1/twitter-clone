import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* {Twitter Icon} */}
      <div className="twitterIcon">
        <TwitterIcon  />
      </div>
      <div className="homeIcon">
        <button className="optionIcon"><HomeOutlinedIcon /> Home</button>
      </div>
      <div className="exploreIcon">
        <button className="optionIcon"><SearchOutlinedIcon /> Explore</button>
      </div>
      <div className="notificationsIcon">
        <button className="optionIcon"><NotificationsNoneOutlinedIcon /> Notifications</button>
      </div>
      <div className="messagesIcon">
        <button className="optionIcon"><MailOutlineIcon /> Messages</button>
      </div>
      <div className="bookmarsIcon">
       <button className="optionIcon"> <BookmarkBorderIcon /> Bookmark</button>
      </div>
      <div className="listIcon">
        <button className='optionIcon'><ListAltOutlinedIcon /> List</button>
      </div>
      <div className="profileIcon">
        <button className="optionIcon"><PersonOutlineOutlinedIcon /> Profile</button>
      </div>
      <div className="moreIcon">
        <button className="optionIcon"><MoreHorizIcon /> More</button>
      </div>
      <button className="buttonTweet">Tweet</button>
    </div>
  );
}

export default Sidebar;
