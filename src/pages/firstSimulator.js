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
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import ButtonsOnBot from "../components/buttonOnBot";
function FirstSimulator() {
  const sMatches = useMediaQuery("(min-width:660px)");
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
      First-Hand Simulator
    </Typography>,
  ];
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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = useState("");
  const [buttonText, setButtonText] = React.useState("Check");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClear = (event) => {
    event.preventDefault();
    setResult("");
    setEmail("");
  };
  const form = useRef();
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await setResult("");
      await setButtonText("Processing...");
      setLoading(true);
      await emailjs
        .sendForm(
          "service_t9vx6ao",
          "template_3q2ngq4",
          form.current,
          "YxOK-qh-YoAG4eSrF"
        )
        .then(
          (result) => {
            console.log(result.text);
            setResult(result.text);
          },
          (error) => {
            console.log(error.text);
            setResult(error.text);
          }
        );
      console.log("Success");
    }
    setLoading(false);
    setButtonText("Check");
  };
  const handleClick = async () => {
    await setResult("");
    await setButtonText("Processing...");
    setLoading(true);
    await emailjs
      .sendForm(
        "service_t9vx6ao",
        "template_3q2ngq4",
        form.current,
        "YxOK-qh-YoAG4eSrF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setResult(result.text);
        },
        (error) => {
          console.log(error.text);
          setResult(error.text);
        }
      );
    console.log("Success");
    setLoading(false);
    setButtonText("Check");
  };
  const [closeAlert, setCloseAlert] = useState(false);
  const handleCloseAlert = () => {
    setCloseAlert(false);
    setResult("");
  };
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

      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>First-Hand Simulator</title>
        <link rel="canonical" href="http://catchphish.org/firstSimulator" />
        <meta name="description" content="First-Hand Simulator" />
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

      {/* Title for first-hand simulator */}
      <Box sx={{ height: "50px" }}></Box>
      <Box>
        <Stack>
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
        </Stack>
      </Box>

      <Box sx={{ height: "40px" }}></Box>
      {/* Component for Enter an email and Submit button */}
      <Stack
        spacing="2vw"
        direction="row"
        className="stack"
        justifyContent="center"
      >
        {/* Input field */}
        <div className="field">
          <form ref={form} onKeyPress={(e) => handleKeyPress(e)}>
            <input
              type="email"
              name="user_email"
              value={email}
              label="Enter an email address"
              onChange={handleChange}
              border={4}
              placeholder="Enter an email address"
              borderColor="green"
            />
            <button onClick={handleClear}>{<ClearIcon />}</button>
          </form>
        </div>
        <button className="submit" onClick={handleClick}>
          Submit
        </button>
      </Stack>

      <Stack
        justifyContent="center"
        direction="row"
        width="100%"
        alignitems="center"
        align="center"
      >
        {/* Progress */}
        <div
          style={{
            width: "500px",
            height: "100px",
            marginTop: "40px",
            display: loading ? "block" : "none",
          }}
        >
          <CircularProgress size="75px" sx={{ color: "#59CE8F" }} />
        </div>

        <Stack
          spacing={2}
          className="stack1"
          display={result === "OK" ? "block" : "none"}
        >
          <br />
          <Alert severity="success">
            The email has been succssfully sent to your email address. Please
            check your email.
          </Alert>

          <br />
        </Stack>

        <Stack
          spacing={2}
          className="stack1"
          display={
            result === "The recipient address is empty" ? "block" : "none"
          }
        >
          <br />
          <Alert severity="warning">This is an invalid Email address！！</Alert>
          <br />
        </Stack>
        <Stack
          spacing={2}
          className="stack1"
          display={
            result === "Gmail_API: Recipient address required"
              ? "block"
              : "none"
          }
        >
          <br />
          <Alert severity="warning">This is an invalid Email address！！</Alert>
          <br />
        </Stack>

        <IconButton
          variant="contained"
          size="large"
          sx={{
            height: "45px",
            marginTop: "38px",
            marginLeft: "2vw",
            display: closeAlert ? "block" : "none",
          }}
          onClick={handleCloseAlert}
          display={closeAlert ? "block" : "none"}
        >
          <CloseIcon
            sx={{ width: "40px", height: "40px", marginBottom: "25px" }}
          />
        </IconButton>
      </Stack>
      <Box sx={{ height: "100px" }}></Box>
      {/* Two buttons */}
      <ButtonsOnBot link1="/phishingDetector" link2="/pastData" />
    </Box>
  );
}

export default FirstSimulator;
