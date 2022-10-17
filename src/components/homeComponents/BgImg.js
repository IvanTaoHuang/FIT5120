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
import AnimatedNumbers from "react-animated-numbers";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function BgImg() {
  const sMatches = useMediaQuery("(min-width:825px)");
  const smMatches = useMediaQuery("(min-width:760px)");
  const mMatches = useMediaQuery("(min-width:1180px)");
  const ref = useRef(null);
  const [num, setNum] = React.useState(8292);
  const [num1, setNum1] = React.useState(58);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <div className="hero-container"> */}

      <Box
        sx={{
          width: "100%",
          height: "100%",
          // position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0",
          overflow: "auto",
        }}
      >
        <video className="homeVideo" src={video} autoPlay loop muted />
        <Box height="10px"></Box>
        <h1 style={{ fontFamily: "Montserrat" }}>Think before you click!</h1>
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
              backgroundColor: "rgba(89,206,143,0.5)",
              // opacity: "0.2",
            }}
            className="box1"
            border={4}
            borderColor="rgba(89,206,143,0.5)"
            borderRadius="18px"
          >
            <Stack alignItems="center">
              <h3
                // sx={{
                //   color: "#E8F9FD",
                //   fontSize: "70px",
                //   textAlign: "center",
                // }}
                className="numberInBox"
              >
                <AnimatedNumbers
                  includeComma
                  animateToNumber={num}
                  fontStyle={{ fontSize: 70, color: "white" }}
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                    { mass: 1, tension: 280, friction: 90 },
                    { mass: 1, tension: 180, friction: 135 },
                    { mass: 1, tension: 260, friction: 100 },
                    { mass: 1, tension: 210, friction: 180 },
                  ]}
                ></AnimatedNumbers>
              </h3>
            </Stack>
            <Typography
              sx={{
                color: "#FFFF",
                fontSize: "27px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Graduates have fallen to phishing mails during job seeking in 2021
            </Typography>
          </Box>
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

      {/* <AnimatedNumbers
        animateToNumber={num}
        fontStyle={{ fontSize: 32, color: "white" }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers> */}

      {/* Cards to different pages */}
      <Box sx={{ backgroundColor: "black", width: "100%" }}>
        {/* margin box */}
        <Box sx={{ height: "50px" }}></Box>
        <Typography color="#BDB39F" fontSize="35px" textAlign="center">
          Start your journey by identifying the types of scams
        </Typography>
        <Box sx={{ height: "50px" }}></Box>
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
              borderColor="#59CE8F "
              sx={{
                width: "250px",
                height: "300px",
              }}
              borderRadius="18px"
            >
              <Box
                className="picBox1"
                sx={{
                  width: "70%",
                  height: "70%",
                  marginTop: "14px",
                  marginLeft: "37px",
                }}
              ></Box>

              <Typography
                align="center"
                sx={{
                  color: "white",
                  fontSize: "35px",
                  fontFamily: "Montserrat",
                  marginTop: "10px",
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
              borderColor="#59CE8F "
              sx={{
                width: "250px",
                height: "300px",
              }}
              borderRadius="18px"
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
              borderColor="#59CE8F "
              sx={{
                width: "250px",
                height: "300px",
              }}
              borderRadius="18px"
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
        <Box sx={{ height: "150px" }}></Box>

        <Typography color="#BDB39F" fontSize="35px" textAlign="center">
          Gain Awareness through past trends or from our simulated environment{" "}
        </Typography>
        <Box sx={{ height: "50px" }}></Box>
        {/* card for data Visualisation */}
        <Stack
          justifyContent="center"
          alignItems="center"
          direction={smMatches ? "row" : "column"}
          spacing={smMatches ? 0 : 24}
        >
          <Box width="50%">
            <Stack alignItems="center">
              <Box
                border={4}
                justifyContent="center"
                // borderColor="#A36F09"
                sx={{
                  minWidth: "320px",
                  maxWidth: "360px",
                  height: "470px",
                  backgroundColor: "rgba(89,206,143,0.5)",
                }}
                borderRadius="18px"
              >
                <Link to="/pastData">
                  <Box
                    className="picBox4"
                    sx={{
                      marginTop: "23px",
                      marginLeft: "47px",
                      marginBottom: "20px",
                      width: "90%",
                      height: "75%",
                    }}
                  ></Box>
                  <Stack alignItems="center" direction="column">
                    <Typography
                      variant="h1"
                      sx={{
                        color: "#FFFFFF",
                        fontFamily: "Montserrat Alternates",
                        fontSize: "35px",
                        marginTop: "-40px",
                      }}
                    >
                      <Stack direction="row">
                        <AnimatedNumbers
                          includeComma
                          animateToNumber={num1}
                          fontStyle={{ fontSize: 37, color: "white" }}
                          configs={[
                            { mass: 1, tension: 220, friction: 100 },
                            { mass: 1, tension: 180, friction: 130 },
                            { mass: 1, tension: 280, friction: 90 },
                            { mass: 1, tension: 180, friction: 135 },
                            { mass: 1, tension: 260, friction: 100 },
                            { mass: 1, tension: 210, friction: 180 },
                          ]}
                        ></AnimatedNumbers>{" "}
                        %
                      </Stack>
                    </Typography>
                    <Box sx={{ width: "90%" }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white ",
                          fontFamily: "Montserrat",
                          fontSize: "15px",
                          marginTop: "5px",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        Have reported phishing mails compared to other scams
                      </Typography>
                    </Box>
                  </Stack>
                </Link>
              </Box>
            </Stack>
          </Box>

          <Box width="50%">
            <Stack alignItems="center">
              <Box
                border={4}
                justifyContent="center"
                // borderColor="#A36F09"
                sx={{
                  minWidth: "320px",
                  maxWidth: "360px",
                  height: "470px",
                  backgroundColor: "rgba(89,206,143,0.5)",
                }}
                borderRadius="18px"
              >
                <Link to="/pastData">
                  <Box
                    className="picBox8"
                    sx={{
                      marginTop: "23px",
                      marginLeft: "32px",
                      marginBottom: "20px",
                      width: "90%",
                      height: "75%",
                    }}
                  ></Box>

                  <Box sx={{ width: "100%" }}>
                    <Stack alignItems="center">
                      <Typography
                        variant="body1"
                        sx={{
                          color: "white ",
                          fontFamily: "Montserrat",
                          fontSize: "15px",
                          marginTop: "-25px",
                          textAlign: "center",
                          width: "90%",
                        }}
                      >
                        Visit our Phishing Simulator and gain experience of scam
                        emails
                      </Typography>
                    </Stack>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box sx={{ height: "150px" }}></Box>
        {/* <Stack justifyContent="center" alignItems="center" direction="column">
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
          </Box> */}
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

        {/* <Box sx={{ width: "60%" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#59CE8F ",
                fontFamily: "Montserrat",
                fontSize: "40px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              Visit our Phishing Simulator and gain experience of scam emails
            </Typography>
          </Box>
        </Stack> */}
        <Box backgroundColor="#59CE8F " height="120px">
          <Box height="30px"></Box>
          <Box width="100%">
            <Stack alignItems="flex-end">
              <Stack direction="row" alignItems="flex-end">
                <Link to="/identify">
                  <Typography color="white" fontSize="35px">
                    What are the types of scams?
                  </Typography>
                </Link>
                <Link to="/identify">
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      fontSize: "50px",
                      color: "white",
                      display: "block",
                    }}
                    className="buttonIcons"
                  />
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BgImg;
