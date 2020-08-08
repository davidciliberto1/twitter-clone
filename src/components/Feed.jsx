import React from "react";
import StarsOutlinedIcon from "@material-ui/icons/StarsOutlined";
import ImageSearchOutlinedIcon from "@material-ui/icons/ImageSearchOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import TodayOutlinedIcon from "@material-ui/icons/TodayOutlined";
import "../css/feed.css";

function Feed() {
  return (
    <div className="allfeed">
        
      <div className="feed">
      <div className="header">
          <h1>Home</h1>
          <div className="iconStars">
            <StarsOutlinedIcon />
          </div>
        </div>
        
        <div className="twitterBox">
          <div className="imagenPerfil"></div>
          <div className="inputTweet">
            <input
              className="inputTweet"
              type="text"
              placeholder="Whats happening?"
              
            />
          </div>
          <div className="opcionesTweet">
            <div className="iconImagen">
              <button className="optionButton">
                <ImageSearchOutlinedIcon />
              </button>
            </div>
            <div className="iconGif">
              <button className="optionButton">
                <GifOutlinedIcon />
              </button>
            </div>
            <div className="iconChart">
              <button className="optionButton">
                <EqualizerOutlinedIcon />
              </button>
            </div>
            <div className="emoticon">
              <button className="optionButton">
                <SentimentVeryDissatisfiedOutlinedIcon />
              </button>
            </div>
            <div className="calendar">
              <button className="optionButton">
                <TodayOutlinedIcon />
              </button>
            </div>
            <button className="buttonTweet">Tweet</button>
          </div>
        </div>
        
      </div>
      <div className="newsFeed">
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>
          <h1>Feeeeeeed!!!</h1>

      </div>
    </div>
  );
}

export default Feed;
