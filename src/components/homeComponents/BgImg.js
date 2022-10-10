import React from "react";
import "../../App.css";
import "./BgImg.css";
import video from "../../videos/video.mp4";
import "./segment.css";
import { IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useRef } from "react";
import { Link } from "react-router-dom";

function BgImg() {
  const sMatches = useMediaQuery("(min-width:825px)");
  const smMatches = useMediaQuery("(min-width:1000px)");
  const mMatches = useMediaQuery("(min-width:1180px)");
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="hero-container"> */}
      <video className="homeVideo" src={video} autoPlay loop muted />

      <h1 style={{ fontFamily: "Montserrat" }}>Think before you click!</h1>

      <Box
        sx={{
          width: "100%",

          height: "100%",
          // position: "fixed",
          top: "70px",
          left: "0",
          bottom: "0",
          right: "0",
          overflow: "auto",
        }}
      >
        <Stack
          direction={sMatches ? "row" : "column"}
          spacing={sMatches ? 24 : 6}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              width: "300px",
              height: "260px",
              backgroundColor: "rgba(163,111,9,0.5)",
              // opacity: "0.2",
            }}
            className="box1"
          >
            <Typography
              sx={{ color: "#a36f09", fontSize: "70px", textAlign: "center" }}
            >
              58%
            </Typography>
            <Typography
              sx={{ color: "#FFFF", fontSize: "28px", textAlign: "center" }}
            >
              Have reported phishing mails compared to other scams
            </Typography>
          </Box>
          {/* <Box
            sx={{
              width: "300px",
              height: "260px",
              backgroundColor: "rgba(163,111,9,0.5)",
            }}
          >
            <Stack direction="column" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: "#FFF",
                  fontSize: "30px",
                }}
              >
                Navigation Panel
              </Typography>
              <Box sx={{ height: "20px" }}></Box>
              <Link to="/phishingDetector" style={{ width: "50%" }}>
                <button className="button1">Detector</button>
              </Link>
              <Box sx={{ height: "30px" }}></Box>
              <Link to="/report" style={{ width: "50%" }}>
                <button className="button1">Report</button>
              </Link>
              <Box sx={{ height: "30px" }}></Box>
              <Link to="/phishingSimulation" style={{ width: "50%" }}>
                <button className="button1">Simulation</button>
              </Link>
            </Stack>
          </Box> */}
        </Stack>
        <Stack alignItems="center">
          <Box sx={{ height: "45px" }}></Box>
          <Typography
            className="subtitle"
            sx={{ fontSize: "33px", fontFamily: "Montserrat Alternates" }}
          >
            Reduce scams done to graduates in Australia
          </Typography>
          <Box sx={{ height: "20px" }}></Box>
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
        </Stack>
        <Box sx={{ height: "50px" }}></Box>
      </Box>

      {/* <p className="subtitle">Reduce scams done to graduates in Australia</p> */}
      {/* IconButton to scroll down */}
      {/* <IconButton
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
      </IconButton> */}
      {/* </div> */}

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
          <Link to="/identify">
            <Box
              border={4}
              justifyContent="center"
              borderColor="#A36F09"
              sx={{
                width: "250px",
                height: "300px",
              }}
            >
              <Box
                className="picBox1"
                sx={{
                  width: "100%",
                  height: "80%",
                }}
              ></Box>

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
          </Link>
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
          <Link to="/phishingDetector">
            <Box
              alignContent="center"
              border={4}
              borderColor="#A36F09"
              sx={{
                width: "250px",
                height: "300px",
              }}
            >
              <Box
                className="picBox2"
                sx={{
                  // margin: "13px",
                  width: "70%",
                  height: "85%",
                }}
              ></Box>

              <Typography
                align="center"
                sx={{
                  color: "white",
                  fontSize: "35px",
                  fontFamily: "Montserrat",
                  marginTop: "-40px",
                }}
                variant="h1"
              >
                Detect
              </Typography>
            </Box>
          </Link>
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
          <Link to="/report">
            <Box
              border={4}
              borderColor="#A36F09"
              sx={{
                width: "250px",
                height: "300px",
              }}
            >
              <Box
                className="picBox3"
                sx={{
                  margin: "13px",
                  width: "90%",
                  height: "75%",
                }}
              ></Box>

              <Typography
                align="center"
                sx={{
                  color: "white",
                  fontSize: "35px",
                  fontFamily: "Montserrat",
                  marginTop: "-15px",
                }}
                variant="h1"
              >
                Report
              </Typography>
            </Box>
          </Link>
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
          <Box sx={{ width: "60%" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#A36F09",
                fontFamily: "Montserrat",
                fontSize: "40px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              Graduates have fallen to phishing mails during job seeking
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ height: "200px" }}></Box>
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
            <Link to="/phishingSimulation">
              <Box
                className="picBox8"
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
          {/* <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Montserrat Alternates",
              // fontSize: "40px",
              marginTop: "30px",
            }}
          >
            8,292
          </Typography> */}

          <Box sx={{ width: "60%" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#A36F09",
                fontFamily: "Montserrat",
                fontSize: "40px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              Visit our Phishing Simulator and gain experience of scam emails
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ height: "150px" }}></Box>
      </Box>
    </>
  );
}

export default BgImg;
