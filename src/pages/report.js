import React from "react";
import Breadcrumb from "../components/breadCrumb.js";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import Zoom from "@mui/material/Zoom";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../components/reportComponents/report.css";
import IconTopic from "../components/iconTopic";
import ScrollToTop from "../components/scroll.js";
// import { HashLink } from "react-router-hash-link";
import ButtonsOnBot from "../components/buttonOnBot";

export default function Signs() {
  const matches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:750px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    padding: theme.spacing(1),
    fontSize: matches ? "40px" : "25px",
    color: "white",

    textAlign: "center",
  }));

  return (
    <>
      <ScrollToTop />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          // height: "100%",
          position: "fixed",
          top: "70px",
          left: "0",
          bottom: "0",
          right: "0",
          overflow: "auto",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Report</title>
          <link rel="canonical" href="http://catchphish.org/report" />
          <meta name="description" content="Report" />
        </Helmet>
        <Breadcrumb page="Report" />

        {/* Report Icon on the top */}
        <IconTopic
          icon={require("../images/report.png")}
          iconName="Detector icon"
        />

        {/* Component for About Detector and text animation */}
        <Zoom in={true} timeout={1000}>
          <Div>{"Report and cut the spread of Scams"}</Div>
        </Zoom>

        <Box height="50px"></Box>
        {/* introduction */}
        <Box width="80%" marginLeft="10vw">
          <Stack direction="column">
            <Typography
              sx={{
                fontSize: "36px",
                fontFamily: "Montserrat",
                color: "#59CE8F",
              }}
            >
              Report a scam
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "27px",
                fontFamily: "Montserrat",
              }}
            >
              The Australian Competition and Consumer Commision (ACCC) uses
              ScamWatch to help consumers and organisations in countering scams
              conducted in Australia.
            </Typography>
          </Stack>
        </Box>
        <section id="reportButton"></section>
        <Box height="75px"></Box>
        {/* Report Button */}
        <Box backgroundColor="black" height="100px">
          <Stack alignItems="center">
            <a
              href="https://www.scamwatch.gov.au/report-a-scam"
              target="_blank"
              rel="noreferrer"
            >
              <button className="reportButton">
                Complete ScamWatch report form
              </button>
            </a>
          </Stack>
        </Box>

        {/* steps */}
        <Box width="80%" marginLeft="10vw">
          <Stack direction="column">
            <Typography
              sx={{
                fontSize: "36px",
                fontFamily: "Montserrat",
                color: "#59CE8F",
              }}
            >
              Required details to be provided
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "27px",
                fontFamily: "Montserrat",
              }}
            >
              1. Type of Scam
              <br />
              2. How the contact was made by scammer
              <br />
              3. When was the event of scam <br />
              4. Brief summary of the experience
            </Typography>
          </Stack>
        </Box>

        <Box height="100px"></Box>

        {/* three buttons
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
                  borderColor="#59CE8F"
                  sx={{
                    width: "180px",
                    height: "50px",
                  }}
                  borderRadius="18px"
                  className="detectorBox"
                >
                  <Link to="/phishingDetector">
                    <Box
                      className="picBox7"
                      sx={{
                        width: "20%",
                        height: "80%",
                        // marginLeft: "10px",
                        marginTop: "8px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "70%",
                        height: "20%",
                        marginLeft: "50px",
                        marginTop: "-35px",
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
                        className="detectorText"
                      >
                        Scam Detector
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
                  borderColor="#59CE8F"
                  sx={{
                    width: "180px",
                    height: "50px",
                  }}
                  borderRadius="18px"
                  className="pastDataBox"
                >
                  <Link to="/pastData">
                    <Box
                      className="picBox4"
                      sx={{
                        width: "30%",
                        height: "80%",
                        marginLeft: "10px",
                        marginTop: "5px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "70%",
                        height: "20%",
                        marginLeft: "50px",
                        marginTop: "-31px",
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
                        className="pastDataText"
                      >
                        Past Data
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Box height="180px"></Box>
        </Box> */}
        <ButtonsOnBot link1="/phishingDetector" link2="/phishingSimulation" />
      </Box>
    </>
  );
}
