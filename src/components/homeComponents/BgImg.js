import React from "react";
import "../../App.css";
// import { Button } from "./Button";
import Button from "@mui/material/Button";
import "./BgImg.css";
import video from "../../videos/video.mp4";
import "./segment.css";
import SegmentItem from "./segmentItem";
import identify from "../../images/identify.png";
import detector from "../../images/detector.png";
import report from "../../images/report.png";
import dataVisual from "../../images/graph.png";
import { Card, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useRef } from "react";
import { Link } from "react-router-dom";

function BgImg() {
  const smMatches = useMediaQuery("(min-width:1000px)");
  const mMatches = useMediaQuery("(min-width:1335px)");
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-container">
        <video src={video} autoPlay loop muted />

        <h1>Think before you click!</h1>
        <Box sx={{ height: "220px" }}></Box>
        <p className="subtitle">Reduce scams in Australia</p>
        {/* IconButton to scroll down */}
        <IconButton
          style={{
            color: "white",
            width: "100px",
            height: "100px",
          }}
          sx={{
            "&:hover": {
              background: "white",
            },
          }}
          onClick={handleClick}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{
              fontSize: "100px",
              "&:hover": {
                color: "black",
              },
            }}
          />
        </IconButton>
      </div>

      <div ref={ref}></div>

      {/* Cards to different pages */}
      <Box sx={{ backgroundColor: "black", width: "100%" }}>
        {/* margin box */}
        <Box sx={{ height: "100px" }}></Box>
        <Stack
          direction={mMatches ? "row" : "column"}
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          {/* card for Identify page */}
          <Box
            border={4}
            justifyContent="center"
            borderColor="#A36F09"
            sx={{
              width: "300px",
              height: "300px",
            }}
          >
            <Link to="/identify">
              <Box
                className="picBox1"
                sx={{
                  width: "100%",
                  height: "80%",
                }}
              ></Box>
            </Link>
            <Typography
              align="center"
              sx={{
                color: "white",
                fontSize: "35px",
                fontFamily: "Montserrat",
              }}
              variant="h1"
            >
              Identify
            </Typography>
          </Box>
          <Stack direction="column" justifyContent="center">
            <KeyboardDoubleArrowRightOutlinedIcon
              sx={{
                fontSize: "100px",
                color: "white",
                display: mMatches ? "block" : "none",
              }}
            />
            <KeyboardDoubleArrowDownIcon
              sx={{
                fontSize: "100px",
                color: "white",
                display: mMatches ? "none" : "block",
              }}
            />
          </Stack>

          {/* card for Detect page */}
          <Box
            alignContent="center"
            border={4}
            borderColor="#A36F09"
            sx={{
              width: "300px",
              height: "300px",
            }}
          >
            <Link to="/phishingDetector">
              <Box
                className="picBox2"
                sx={{
                  margin: "13px",
                  width: "90%",
                  height: "75%",
                }}
              ></Box>
            </Link>
            <Typography
              align="center"
              sx={{
                color: "white",
                fontSize: "35px",
                fontFamily: "Montserrat",
              }}
              variant="h1"
            >
              Detect
            </Typography>
          </Box>
          <Stack direction="column" justifyContent="center">
            <KeyboardDoubleArrowRightOutlinedIcon
              sx={{
                fontSize: "100px",
                color: "white",
                display: mMatches ? "block" : "none",
              }}
            />
            <KeyboardDoubleArrowDownIcon
              sx={{
                fontSize: "100px",
                color: "white",
                display: mMatches ? "none" : "block",
              }}
            />
          </Stack>

          {/* card for Report  */}
          <Box
            border={4}
            borderColor="#A36F09"
            sx={{
              width: "300px",
              height: "300px",
            }}
          >
            <Link to="/report">
              <Box
                className="picBox3"
                sx={{
                  margin: "13px",
                  width: "90%",
                  height: "75%",
                }}
              ></Box>
            </Link>
            <Typography
              align="center"
              sx={{
                color: "white",
                fontSize: "35px",
                fontFamily: "Montserrat",
              }}
              variant="h1"
            >
              Report
            </Typography>
          </Box>
        </Stack>

        {/* margin box */}
        <Box sx={{ height: "200px" }}></Box>

        {/* card for data Visualisation */}
        <Stack justifyContent="center" alignItems="center" direction="column">
          <Box
            // border={4}
            justifyContent="center"
            // borderColor="#A36F09"
            sx={{
              width: "300px",
              height: "300px",
            }}
            onClick
          >
            <Link to="/pastData">
              <Box
                className="picBox4"
                sx={{
                  marginTop: "14px",
                  marginLeft: "20px",
                  marginBottom: "20px",
                  width: "100%",
                  height: "100%",
                }}
              ></Box>
            </Link>
          </Box>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat Alternates",
              // fontSize: "40px",
              marginTop: "30px",
            }}
          >
            8,292
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#A36F09",
              fontFamily: "Montserrat",
              fontSize: "50px",
              marginTop: "30px",
            }}
          >
            Graduates have fallen to phishing mails
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#A36F09",
              fontFamily: "Montserrat",
              fontSize: "50px",
            }}
          >
            during job seeking
          </Typography>
        </Stack>
      </Box>
    </>
  );
}

export default BgImg;
