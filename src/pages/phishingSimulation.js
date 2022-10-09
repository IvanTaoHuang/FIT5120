import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Fade from "@mui/material/Fade";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Breadcrumb from "../components/breadCrumb";
import IconTopic from "../components/iconTopic";
import { Link } from "react-router-dom";
import ButtonsOnBot from "../components/buttonOnBot";

function PhishingSimulation() {
  const matches = useMediaQuery("(min-width:575px)");
  const mMatches = useMediaQuery("(min-width:670px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    padding: theme.spacing(1),
    fontSize: matches ? "40px" : "25px",
    color: "white",

    textAlign: "center",
  }));
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        height: "100%",
        position: "fixed",
        top: "70px",
        left: "0",
        bottom: "0",
        right: "0",
        overflow: "auto",
      }}
    >
      {/* Breadcrumb */}
      <Breadcrumb page="Phishing Simulator" />

      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phishing Simulation</title>
        <link rel="canonical" href="http://catchphish.org/PhishingSimulation" />
        <meta name="description" content="Phishing Simulation" />
      </Helmet>

      {/* Icon Title */}
      <IconTopic
        icon={require("../images/simulation.png")}
        iconName="Detector icon"
      />

      {/* Component for About Simulation and text animation */}
      <Fade in={true} timeout={1000}>
        <Div>{"Phishing Simulator"}</Div>
      </Fade>

      {/* Two Buttons for different simulators */}
      <Box sx={{ height: "100px" }}></Box>
      <Stack direction={mMatches ? "row" : "column"} alignItems="center">
        <Box
          sx={{
            width: "50%",
            backgroundColor: "black",
          }}
        >
          <Stack alignItems="center">
            <Box
              border={4}
              borderColor="#A36F09"
              sx={{
                width: "320px",
                height: "60px",
              }}
            >
              <Link to="/firstSimulator">
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Montserrat Alternates",
                    marginTop: "12px",
                  }}
                  variant="h1"
                >
                  First-Hand Simulator
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ height: mMatches ? "0px" : "30px" }}></Box>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "black",
          }}
        >
          <Stack alignItems="center">
            <Box
              border={4}
              borderColor="#A36F09"
              sx={{
                width: "320px",
                height: "60px",
              }}
            >
              <Link to="/quickExperience">
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Montserrat Alternates",
                    marginTop: "12px",
                  }}
                  variant="h1"
                >
                  Quick Experience
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box height="80px"></Box>
      {/* Two buttons */}
      <ButtonsOnBot />
    </Box>
  );
}

export default PhishingSimulation;
