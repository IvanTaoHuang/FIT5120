import React from "react";
import Breadcrumb from "../components/breadCrumb.js";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import Zoom from "@mui/material/Zoom";
import { useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import SignInfo from "../components/signsComponents/signInfo.js";
import { Link } from "react-router-dom";
import TimeToRead from "../components/timeToRead.js";
import "../components/signsComponents/signs.css";

export default function Signs() {
  const matches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:655px)");
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
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Detector</title>
          <link rel="canonical" href="http://catchphish.org/phishingDetector" />
          <meta name="description" content="Detector" />
        </Helmet>
        <Breadcrumb page="Signs to look for" />

        {/* Component for About Detector and text animation */}
        <Zoom in={true} timeout={1000}>
          <Div>{"Signs of Phishing you can notice in your mail"}</Div>
        </Zoom>

        {/* clock */}
        <TimeToRead time="5 mins read"></TimeToRead>

        <Box height="50px"></Box>
        {/* GIF with signs */}
        <Stack direction="column" alignItems="center">
          <SignInfo
            number="1."
            name="Unusual tone"
            information="If your recruiter is too informal with his/her greeting or content of mail then it is a red flag. Mails sent are documented therefore they would ensure that it is official and legitimate."
            gif={require("../images/firstSign.gif")}
            margin="-8vw"
          />

          <Box height="50px"></Box>
          <SignInfo
            number="2."
            name="Grammar and Spelling"
            information="One most used sign to identify phishing scams is to check for the grammatical 
            errors including spelling mistakes. All recruitment agencies used third party tools 
            to verify their content before they send any mail. "
            gif={require("../images/secondSign.gif")}
            margin="8vw"
          />
          <Box height="50px"></Box>
          <SignInfo
            number="3."
            name="The mail ID, domain name and website"
            information="Checking the mail ID of the sender is another easy way to detect scam. Usually, 
            the scammers use suspicious ID or the website link they provide would hint some 
            suspicious activity."
            gif={require("../images/thirdSign.gif")}
            margin="-8vw"
          />
          <Box height="50px"></Box>
          <SignInfo
            number="4."
            name="Making you respond fast"
            information="As a job seeker, patience is a virtue to follow. Phishing mails would target you to 
            open the external URL provided quickly so that you would fall into their trap. It is 
            never too late to confirm with the agent you received the mail from, if the action 
            needs to be done immediately."
            gif={require("../images/fourthSign.gif")}
            margin="8vw"
          />
          <Box height="50px"></Box>
          <SignInfo
            number="5."
            name="Providing your payment details"
            information="The objective of conducting scams is to obtain your information and money. 
            Therefore, you must be cautious on the details you provide. Most recruiters in 
            Australia will not ask for payment when searching for a job. If they do so, you 
            can always pay in person or after receiving your job. "
            gif={require("../images/fifthSign.gif")}
            margin="-8vw"
          />
        </Stack>

        <Box height="100px"></Box>

        {/* Simulation link */}

        <Box>
          <Stack alignItems="center">
            <Typography
              sx={{
                fontFamily: "Montserrat",
                color: "white",
                fontSize: lMatches ? "30px" : "25px",
                textAlign: "center",
              }}
            >
              Practice these techniques with our simulation
            </Typography>
            <Box sx={{ height: "50px" }}></Box>
            <button className="simulationButton"> Enter Simulation</button>
          </Stack>
        </Box>
        <Box sx={{ height: "100px" }}></Box>

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
                  <Link to="/phishingDetector">
                    <Box
                      className="picBox2"
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
                        marginTop: "-28px",
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "white",
                          fontSize: "15px",
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
                  <Link to="/report">
                    <Box
                      className="picBox3"
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
                        marginTop: "-28px",
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "white",
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                        variant="h1"
                      >
                        Report a scam
                      </Typography>
                    </Box>
                  </Link>
                </Box>
                <Box height="20px"></Box>

                <Box
                  border={4}
                  justifyContent="center"
                  borderColor="#A36F09"
                  sx={{
                    width: "180px",
                    height: "50px",
                  }}
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
                        marginTop: "-28px",
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "white",
                          fontSize: "15px",
                          fontFamily: "Montserrat",
                        }}
                        variant="h1"
                      >
                        Check Past Data
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box height="100px"></Box>
      </Box>
    </>
  );
}
