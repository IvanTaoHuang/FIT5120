import React from "react";
import "./App.css";
import { Button } from "./Button";
import "./BgImg.css";

function BgImg() {
  return (
    <div className="bg-container">
      <video src="./videos/video.mp4" autoPlay loop muted />
      <h1>Think before you click!</h1>
      <p>What are you waiting for?</p>
      <div className="bg-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          KNOW MORE
        </Button>
        {/**<Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default BgImg;
