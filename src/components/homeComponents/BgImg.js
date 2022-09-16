import React from "react";
import "../../App.css";
import { Button } from "./Button";
import "./BgImg.css";
import video from "../../videos/video.mp4";
import "./segment.css";
import SegmentItem from "./segmentItem";
import identify from "../../images/identify.jpg";
import detector from "../../images/detector.jpg";
import report from "../../images/report.jpg";
import { Card } from "@mui/material";

function BgImg() {
  return (
    <div className="bg-container">
      <video src={video} autoPlay loop muted />
      <h1>Think before you click!</h1>
      <p>Reduce scams in Australia</p>
      <div className="segments">
        <div className="segments__container">
          <div className="segments__wrapper">
            <ul className="segments__items">
              <SegmentItem
                src={identify}
                text="Identify various scams"
                label="Identify"
                path="/identify"
              />
              <></>
              {/* <SegmentItem
                src={detector}
                text="Phishing Detector"
                label="Detect"
                path="/phishingDetector"
              /> */}
              <SegmentItem
                src={detector}
                text="Phishing Detector"
                label="Visualisation"
                path="/pastData"
              />
              <SegmentItem
                src={report}
                text="Report scams"
                label="Report"
                path="/report"
              />
            </ul>
          </div>
        </div>
      </div>

      <Card sx={{ width: "40vw", height: "23vw" }}></Card>
      {/* <div className="bg-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          KNOW MORE
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> 
      </div> */}
    </div>
  );
}

export default BgImg;
