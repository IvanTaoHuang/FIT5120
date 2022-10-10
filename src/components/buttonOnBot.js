import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import Fade from "@mui/material/Fade";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumb from "../components/breadCrumb";
import IconTopic from "../components/iconTopic";
import { Link } from "react-router-dom";
import "./buttonOnBot.css";

function ButtonsOnBot() {
  const lMatches = useMediaQuery("(min-width:655px)");
  return (
    <>
      {/* three buttons */}
      <Box sx={{ width: "100%", backgroundColor: "black" }}>
        <Stack direction={lMatches ? "row" : "column"}>
          <Box
            sx={{
              width: lMatches ? "50%" : "100%",
              backgroundColor: "black",
            }}
          >
            <Stack
              marginLeft={lMatches ? "5vw" : "0px"}
              direction="row"
              justifyContent={lMatches ? "flex-start" : "center"}
              alignItems="center"
            >
              <Box
                border={4}
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/">
                  <Box
                    // className="picBox2"
                    sx={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  >
                    <KeyboardDoubleArrowLeftIcon
                      sx={{
                        fontSize: "40px",
                        color: "white",
                        display: "block",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "70%",
                      height: "20%",
                      marginLeft: "30px",
                      marginTop: "-33px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                        marginTop: "2px",
                      }}
                      variant="h1"
                    >
                      Home
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>

          <Box height={lMatches ? "0px" : "20px"}></Box>

          <Box
            sx={{
              width: lMatches ? "50%" : "100%",
              backgroundColor: "black",
            }}
          >
            <Stack
              alignItems={lMatches ? "flex-end" : "center"}
              marginRight={lMatches ? "5vw" : "0px"}
            >
              <Box
                border={4}
                justifyContent="center"
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/phishingDetector">
                  <Box
                    className="picBox7"
                    sx={{
                      width: "20%",
                      height: "80%",
                      //   marginLeft: "10px",
                      //   marginTop: "5px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "70%",
                      height: "20%",
                      marginLeft: "52px",
                      marginTop: "-33px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "20px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Scam Detector
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box height="180px"></Box>
      </Box>
    </>
  );
}

export default ButtonsOnBot;
