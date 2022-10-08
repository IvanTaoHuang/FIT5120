import React from "react";
import video from "../images/hackImg.gif";
import "../components/hackComponents/hack.css";
import { IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { useRef } from "react";
import { Link } from "react-router-dom";

function Hack() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>You've been hacked!</title>
        <link rel="canonical" href="http://catchphish.org/hack" />
        <meta name="description" content="Hack" />
      </Helmet>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "70px",
          left: "0",
          bottom: "0",
          right: "0",
          overflow: "auto",
        }}
      >
        <Link to="/simulationQuiz">
          <Stack alignItems="center">
            {/* <Box sx={{ height: "50%" }}></Box> */}

            <button
              className="quizButton"
              style={{
                position: "fixed",
                marginTop: "60vh",
              }}
            >
              Escape Simulation
            </button>
          </Stack>
        </Link>
        <img
          src={video}
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          autoPlay
          loop
          muted
        ></img>
      </Box>
    </>
  );
}

export default Hack;
