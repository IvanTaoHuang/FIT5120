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
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "../components/scrollTop";
import TitleTheme from "../components/titleTheme";
import ReportScamButton from "../components/reportChatButton";
import Q1 from "../images/Q1.png";
import Q2 from "../images/Q2.png";
import Q3 from "../images/Q3.png";
import Q4 from "../images/Q4.png";
import Q5 from "../images/Q5.png";
import question1 from "../images/question1.jpg";
import question2 from "../images/question2.jpg";
import question3 from "../images/question3.jpg";
import question4 from "../images/question4.jpg";
import question5 from "../images/question5.png";
import "../components/simulationQuizComponents/simulationQuiz.css";
import Quiz from "../components/simulationQuizComponents/quiz";
import ButtonsOnBot from "../components/buttonOnBot";

function SimulationFeedback() {
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
      Simulation Feedback
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
        <title>Simulation Feedback</title>
        <link rel="canonical" href="http://catchphish.org/phishingDetector" />
        <meta name="description" content="Detector" />
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

      {/* Title of the page */}
      <Stack alignItems="center">
        <Fade in={true} timeout={1000}>
          <Div>{"Simulation Feedback"}</Div>
        </Fade>
        <Box height="50px"></Box>
        <Box
          border={4}
          borderColor="#59CE8F"
          justifyContent="center"
          sx={{ minWidth: "320px", maxWidth: "700px", minHeight: "300px" }}
        >
          <Typography
            fontSize="22px"
            fontFamily="Montserrat Alternates"
            color="white"
            marginTop="10px"
          >
            Now, you have experienced a simulated phishing email attack, and you
            have learned the whole process of the phishing attack. Please do not
            directly click any link provided in the email sent by strangers.
            What you need to do is to judge the authenticity of this email
            through some common signs. In addition, you can also use the
            detection function provided by our website to check the URL links
            you are not sure about. Although the above methods cannot ensure
            that you will never be attacked by phishing emails, the risk of
            being attacked by phishing can be greatly reduced by enhancing the
            awareness of fraud prevention.
            <Box height="10px"></Box>
            Next, you can take the following test to check whether you have
            found some common signs in the phishing email just sent to you.
          </Typography>
        </Box>
        <Box height="50px"></Box>
        <Link to="/simulationQuiz">
          <button className="quizButton"> Quiz</button>
        </Link>
      </Stack>
      <Box height="50px"></Box>

      {/* Two buttons */}
      <ButtonsOnBot />
    </Box>
  );
}
export default SimulationFeedback;
