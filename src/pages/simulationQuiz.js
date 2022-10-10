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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { hover } from "@testing-library/user-event/dist/hover";

function SimulationQuiz() {
  const matches = useMediaQuery("(min-width:575px)");
  const sMatches = useMediaQuery("(min-width:660px)");
  const mMatches = useMediaQuery("(min-width:700px)");

  const breadcrumbs = [
    <Link to="/" className="breadcrumb">
      Home
    </Link>,
    <Link to="/phishingSimulation" className="breadcrumb1">
      Phishing Simulator
    </Link>,
    <Link to="/simulationFeedback" className="breadcrumb1">
      Simulation Feedback
    </Link>,
    <Typography
      key="3"
      color="white"
      variant="h5"
      fontSize={sMatches ? 24 : 18}
    >
      Pop-Quiz
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

  const [questionState, setState] = React.useState(0);
  const [answerReal, setAnswerReal] = React.useState("");
  const [answerFake, setAnswerFake] = React.useState("");
  const [feedback, setFeedback] = React.useState(false);
  const handleFeedback = () => {
    setAnswerReal(true);
    setState(6);
    setFeedback(true);
  };
  const handleNextQuestion = () => {
    setAnswerReal("");
    setAnswerFake("");
    setState(questionState + 1);
    console.log(questionState);
  };
  const handleLastQuestion = async () => {
    setAnswerReal("");
    setAnswerFake("");
    setState(questionState - 1);
    console.log(questionState);
  };
  useEffect(() => {
    console.log(questionState);
  }, [questionState]);
  if (questionState === 5) {
    setState(4);
  }
  if (questionState === -1) {
    setState(0);
  }
  const handleReal = () => {
    setAnswerReal(true);
    console.log(answerReal);
  };

  const handleFake = () => {
    setAnswerFake(true);

    console.log(answerFake);
  };
  useEffect(() => {
    console.log(answerReal);
  }, [answerReal]);
  useEffect(() => {
    console.log(answerFake);
  }, [answerFake]);

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
        <title>Simulation Quiz</title>
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
          <Div>{"Pop-Quiz"}</Div>
        </Fade>
        <Box height="50px"></Box>

        <Box
          border={4}
          borderColor="#A36F09"
          justifyContent="center"
          sx={{ maxWidth: "600px", maxHeight: "500px" }}
        >
          {/* First quiz */}
          <Box
            display={
              questionState === 0 && answerReal === "" && answerFake === ""
                ? "block"
                : "none"
            }
          >
            <Quiz img={question1} width="90%" noOfQuiz="First question" />
          </Box>
          {/* Second quiz */}
          <Box
            display={
              questionState === 1 && answerReal === "" && answerFake === ""
                ? "block"
                : "none"
            }
          >
            <Quiz img={question2} width="68%" noOfQuiz="Second question" />
          </Box>

          {/* Third quiz */}
          <Box
            display={
              questionState === 2 && answerReal === "" && answerFake === ""
                ? "block"
                : "none"
            }
          >
            <Quiz img={question3} width="28%" noOfQuiz="Third question" />
          </Box>
          {/* 4th quiz */}
          <Box
            display={
              questionState === 3 && answerReal === "" && answerFake === ""
                ? "block"
                : "none"
            }
          >
            <Quiz img={question4} width="52%" noOfQuiz="Fourth question" />
          </Box>
          {/* fifth quiz */}
          <Box
            display={
              questionState === 4 && answerReal === "" && answerFake === ""
                ? "block"
                : "none"
            }
          >
            <Quiz img={question5} width="74%" noOfQuiz="Fifth question" />
          </Box>
          {/* First quiz - answer */}
          <Box
            display={
              questionState === 0 && (answerReal || answerFake)
                ? "block"
                : "none"
            }
          >
            <Quiz img={Q1} width="98%" noOfQuiz="This is fake" />
          </Box>
          {/* Second quiz - answer */}
          <Box
            display={
              questionState === 1 && (answerReal || answerFake)
                ? "block"
                : "none"
            }
          >
            <Quiz img={Q2} width="98%" noOfQuiz="This is fake" />
          </Box>
          {/* Third quiz - answer */}
          <Box
            display={
              questionState === 2 && (answerReal || answerFake)
                ? "block"
                : "none"
            }
          >
            <Quiz img={Q3} width="97%" noOfQuiz="This is fake" />
          </Box>
          {/* Fourth quiz - answer */}
          <Box
            display={
              questionState === 3 && (answerReal || answerFake)
                ? "block"
                : "none"
            }
          >
            <Quiz img={Q4} width="100%" noOfQuiz="This is fake" />
          </Box>
          {/* Fifth quiz - answer */}
          <Box
            display={
              questionState === 4 && (answerReal || answerFake)
                ? "block"
                : "none"
            }
          >
            <Quiz img={Q5} width="98%" noOfQuiz="This is legitimate" />
          </Box>
          {/* Quiz Feedback */}
          <Box display={feedback ? "block" : "none"}>
            <Typography
              color="white"
              fontFamily="Montserrat Subrayada"
              fontSize="32px"
            >
              {" "}
              All done. Thank you for taking part.
              <br />
              <br />
              Hope you would reduce the interactions with phishing mails.
              <br /> <br />
              You can visit the common signs of phishing to understand what to
              look for.{" "}
            </Typography>
          </Box>

          {/* Buttons */}
          <Stack
            direction="row"
            spacing={10}
            justifyContent="center"
            marginTop="20px"
          >
            <Box display={answerReal || answerFake ? "none" : "block"}>
              <button className="answerButton1" onClick={handleReal}>
                Real
              </button>

              <button className="answerButton2" onClick={handleFake}>
                Fake
              </button>
            </Box>
          </Stack>
          <Box height="20px"></Box>
        </Box>
        <Box height="60px"></Box>

        <Box
          display={
            (questionState === 4 && (answerReal || answerFake)) || feedback
              ? "none"
              : "block"
          }
        >
          <Stack
            direction={mMatches ? "row" : "column"}
            spacing={mMatches ? 18 : 1}
          >
            <button className="questionButton" onClick={handleLastQuestion}>
              <KeyboardArrowLeftIcon
                sx={{
                  fontSize: "45px",
                  color: "black",
                }}
              />
            </button>
            <Box height="20px"></Box>
            <button className="questionButton" onClick={handleNextQuestion}>
              <ChevronRightIcon
                sx={{
                  fontSize: "45px",
                  color: "black",
                }}
              />
            </button>
          </Stack>
        </Box>
        <Box
          display={
            questionState === 4 && (answerReal || answerFake) ? "block" : "none"
          }
        >
          <Stack
            direction={mMatches ? "row" : "column"}
            spacing={mMatches ? 18 : 1}
          >
            <button className="questionButton" onClick={handleFeedback}>
              Finish
            </button>
          </Stack>
        </Box>
        <Box display={feedback ? "block" : "none"}>
          <Stack
            direction={mMatches ? "row" : "column"}
            spacing={mMatches ? 18 : 1}
          >
            <Link to="/phishingSimulation">
              <button
                className="feedbackButton"
                onClick={handleFeedback}
                width="500px"
              >
                Try the Simulation again
              </button>
            </Link>
          </Stack>
        </Box>

        <Box height="50px"></Box>
      </Stack>

      {/* Two buttons */}
      <ButtonsOnBot />
    </Box>
  );
}
export default SimulationQuiz;
