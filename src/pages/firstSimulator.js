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
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleClear = (event) => {
    event.preventDefault();
    // setResult("");
    setEmail("");
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      console.log("Success");
    }
  };
  const handleClick = async () => {
    console.log("Success");
  };
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
        <title>Phishing Simulation</title>
        <link rel="canonical" href="http://catchphish.org/PhishingSimulation" />
        <meta name="description" content="Phishing Simulation" />
      </Helmet>

      {/* Icon Title */}
      <IconTopic
        icon={require("../images/detector.png")}
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
          <form onKeyPress={(e) => handleKeyPress(e)}>
            <input
              type="text"
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
    </Box>
  );
}

export default FirstSimulator;
