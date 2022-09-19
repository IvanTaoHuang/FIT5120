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
import FirstGif from "../images/firstSign.gif";
import SecondGif from "../images/secondSign.gif";
import ThirdGif from "../images/thirdSign.gif";
import FourthGif from "../images/fourthSign.gif";
import FifthGif from "../images/fifthSign.gif";
import { Link } from "react-router-dom";

export default function Signs() {
  const matches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:1150px)");
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
        <Stack direction="row" marginLeft="100px">
          <Box
            justifyContent="center"
            sx={{
              width: "180px",
              height: "50px",
            }}
          >
            <Box
              className="picBox5"
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
                marginTop: "-60px",
              }}
            >
              <Typography
                align="center"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat Alternates",
                  marginTop: "30px",
                }}
              >
                5 mins read
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box height="100px"></Box>
        {/* GIF with signs */}
        <Stack direction="row" justifyContent="center">
          <SignInfo
            number="1"
            name="Unusual tone"
            information="If your recruiter is too informal with his/her greeting or content of mail then it is a red flag. Mails sent are documented therefore they would ensure that it is official and legitimate."
            gif={require("../images/firstSign.gif")}
          />
        </Stack>

        <Box height="100px"></Box>

        <Box sx={{ width: "100%", backgroundColor: "black" }}>
          <Stack
            direction={lMatches ? "row" : "column"}
            spacing={lMatches ? "60vw" : "30px"}
            alignItems="center"
          >
            <Stack
              marginLeft={lMatches ? "5vw" : "0px"}
              direction="row"
              justifyContent="center"
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
                </Link>
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
              </Box>
            </Stack>
            <Stack>
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
                </Link>
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
                <Link to="/identify">
                  <Box
                    className="picBox4"
                    sx={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  ></Box>
                </Link>
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
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box height="100px"></Box>
      </Box>
    </>
  );
}
