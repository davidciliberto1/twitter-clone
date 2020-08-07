import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "../sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* {Twitter Icon} */}
      <div className="twitterIcon">
        <TwitterIcon />
      </div>
      <div className="homeIcon">
        <HomeOutlinedIcon /> Home
      </div>
      <div className="exploreIcon">
        <SearchOutlinedIcon /> Explore
      </div>
      <div className="notificationsIcon">
        <NotificationsNoneOutlinedIcon /> Notifications
      </div>
      <div className="messagesIcon">
        <MailOutlineIcon /> Messages
      </div>
      <div className="bookmarsIcon">
        <BookmarkBorderIcon /> Bookmark
      </div>
      <div className="listIcon">
        <ListAltOutlinedIcon /> List
      </div>
      <div className="profileIcon">
        <PersonOutlineOutlinedIcon /> Profile
      </div>
      <div className="moreIcon">
        <MoreHorizIcon /> More
      </div>
        <button
        className='buttonTweet'
        >Tweet
        </button> 
    </div>
  );
}

export default Sidebar;
