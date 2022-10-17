import { Button } from "@mui/material";
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
import "../components/simulationQuizComponents/simulationQuiz.css";
import ButtonsOnBot from "../components/buttonOnBot";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../components/quickExperienceComponents/quickExperience.css";

function QuickExperience() {
  const matches = useMediaQuery("(min-width:575px)");
  const sMatches = useMediaQuery("(min-width:660px)");
  const mMatches = useMediaQuery("(min-width:670px)");

  const breadcrumbs = [
    <Link to="/" className="breadcrumb">
      Home
    </Link>,
    <Link to="/phishingSimulation" className="breadcrumb1">
      Phishing Simulator
    </Link>,
    <Typography
      key="3"
      color="white"
      variant="h5"
      fontSize={sMatches ? 24 : 18}
    >
      Quick Experience
    </Typography>,
  ];
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
        <title>Quick Experience</title>
        <link rel="canonical" href="http://catchphish.org/quickExperience" />
        <meta name="description" content="quickExperience" />
      </Helmet>
      {/* Breadcrumb */}
      <Stack spacing={1}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
          sx={{ margin: "30px" }}
          color="white"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Box height="10px"></Box>

      {/* Title of the page */}
      <Stack alignItems="center">
        <Fade in={true} timeout={1000}>
          <Div>{"Quick Experience"}</Div>
        </Fade>
        <Box height="50px"></Box>
        <Stack alignItems="center">
          <Box width="100%">
            <Stack direction="row">
              <AccountCircleIcon
                sx={{
                  fontSize: "50px",
                  color: "white",
                  display: "block",
                }}
              />
              <Typography
                fontSize="20px"
                color="white"
                marginLeft="10px"
                marginTop="10px"
              >
                hr.official.seek@gmail.com
              </Typography>
            </Stack>
            <Box height="20px"></Box>
            <Typography
              fontSize="25px"
              fontFamily="Montserrat Alternates"
              color="white"
              marginTop="20px"
            >
              Hi there,
            </Typography>
            <Typography
              fontSize="20px"
              fontFamily="Montserrat Alternates"
              color="white"
              marginTop="20px"
            >
              Here's the info you requested to help you access your SEEK
              account.
              <br />
              But be quick! This link will expire in 24 hours time...
              <Box height="10px"></Box>
              Your username is:&nbsp;
              <Typography
                fontSize="20px"
                fontFamily="Montserrat Alternates"
                color="white"
                marginTop="20px"
                display="inline"
                sx={{ textDecoration: "underline" }}
              >
                robin
                <Box height="15px"></Box>
              </Typography>
            </Typography>

            <Link to="/hack">
              <button className="quickButton">Reset your password</button>
            </Link>
            <Typography
              fontSize="20px"
              fontFamily="Montserrat Alternates"
              color="white"
            >
              <Box height="15px"></Box>
              Didn't request this info? Don't worry, you can disregard this
              email.
              <br />
              Your details are safe with us.
              <Box height="10px"></Box>
              Kind regards,
              <br />
              The team at SEEK<Box height="10px"></Box> Need help?
              <Box height="10px"></Box>Please contact Customer Service on 1300
              658 700 <Box height="10px"></Box>This email was intended for{" "}
              <Typography
                fontSize="20px"
                fontFamily="Montserrat Alternates"
                color="white"
                marginTop="20px"
                display="inline"
                sx={{ textDecoration: "underline" }}
              >
                robin
                <Box height="15px"></Box>
              </Typography>
              <Box height="10px"></Box>Learn why we included this
              <Box height="10px"></Box>
            </Typography>
            <Stack direction="row" alignItems="center" spacing={24}>
              <Link to="/hack">
                <Typography
                  fontSize="20px"
                  fontFamily="Montserrat Alternates"
                  color="skyblue"
                  display="inline"
                  sx={{ textDecoration: "underline" }}
                >
                  Privacy
                </Typography>
              </Link>
              <Link to="/hack">
                <Typography
                  fontSize="20px"
                  fontFamily="Montserrat Alternates"
                  color="skyblue"
                  display="inline"
                  sx={{ textDecoration: "underline" }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Stack>

        <Box height="50px"></Box>
      </Stack>

      {/* Two buttons */}
      <ButtonsOnBot
        link1="/phishingSimulation"
        link2="/pastData"
        text1="Go back to Simulator"
        text2="What are the past phishing numbers?"
      />
    </Box>
  );
}
export default QuickExperience;
