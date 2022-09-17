import React from "react";
import "../../App.css";
// import { Button } from "./Button";
import Button from "@mui/material/Button";
import "./BgImg.css";
import video from "../../videos/video.mp4";
import "./segment.css";
import SegmentItem from "./segmentItem";
import identify from "../../images/identify.jpg";
import detector from "../../images/detector.jpg";
import report from "../../images/report.jpg";
import dataVisual from "../../images/dataVisual.jpeg";
import { Card } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

function BgImg() {
  const smMatches = useMediaQuery("(min-width:1000px)");
  const mMatches = useMediaQuery("(min-width:550px)");

  return (
    <>
      <video src={video} autoPlay loop muted />
      <h1>Think before you click!</h1>
      <p className="subtitle">Reduce scams in Australia</p>

      {/* <h1>Think before you click!</h1>
        <p>Reduce scams in Australia</p> */}
      <div className="segments">
        <div className="segments__container">
          <div className="segments__wrapper">
            <ul className="segments__items">
              <Stack>
                <Stack direction={smMatches ? "row" : "column"}>
                  <SegmentItem
                    src={identify}
                    text="Identify various scams"
                    label="Identify"
                    path="/identify"
                  />
                  {/* <SegmentItem
                src={detector}
                text="Phishing Detector"
                label="Detect"
                path="/phishingDetector"
              /> */}
                  <SegmentItem
                    src={detector}
                    text="Phishing Detector"
                    label="Detect"
                    path="/phishingDetector"
                  />
                  <SegmentItem
                    src={report}
                    text="Report scams"
                    label="Report"
                    path="/report"
                  />
                </Stack>
                <Box sx={{ height: "3vw" }}></Box>
                <Stack direction={"row"}>
                  <Box
                    sx={{
                      display: smMatches ? "block" : "none",
                      // width: if(mMatches){ "30vw" : "28vw"},
                    }}
                    className="margin_box"
                  ></Box>
                  <Card
                    sx={{
                      width: mMatches ? 350 : 320,
                      height: mMatches ? 300 : 300,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={dataVisual}
                      alt="Data Visualisation"
                      className="data_img"
                    />

                    {/* <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography> */}
                    {/* <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography> */}

                    <CardActions>
                      <Button size="small" variant="contained">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                  {/* <div>
                    <Card
                      sx={{
                        width: "500px",
                        height: "400px",
                        marginLeft: "20vw",
                      }}
                      onClick={() => alert("Hello from here")}
                    >
                      <img src={dataVisual} className="data_img"></img>
                      <Button>Test</Button>
                    </Card>
                  </div> */}
                </Stack>
              </Stack>
            </ul>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default BgImg;
