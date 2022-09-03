import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import Fade from "@mui/material/Fade";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import TitleTheme from "./titleTheme";
import ReportScamButton from "./reportChatButton";


//To scroll to top
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function PhishingSimulation(props) {
  const Div = TitleTheme();
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "90%",
        marginTop: "5vh",
      }}
    >
      {/* Component for scroll to top button */}
      <Toolbar id="back-to-top-anchor" />
      <React.Fragment>
        <CssBaseline />
        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>

      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phishing Simulation</title>
        <link rel="canonical" href="http://catchphish.org/PhishingSimulation" />
        <meta name="description" content="Phishing Simulation" />
      </Helmet>

      {/* Component for About Simulation and text animation */}
      <Fade in={true} timeout={1000}>
        <Div>{"About Simulation"}</Div>
      </Fade>

      <br></br>
      <br></br>
      <Fade in={true} timeout={3000}>
        <Typography
          variant="body1"
          gutterBottom
          fontSize={"30px"}
          marginLeft="15vw"
        >
          Experience is own’s on teacher. Learning about phishing scams by get a
          first hand experience will increase awareness and which will make you

          cautious in entering any unknown links. We created a small simulation
          which provides an usual phishing mail content in the mail ID you
          provide. This exercise will help you determine on how to segregate a
          fake mail from the real one.

        </Typography>
      </Fade>

      <br></br>
      <br></br>
      <br></br>
      {/* Component for Enter Email Address text field and Submit button */}
      <Stack marginLeft="35vw" spacing="2vw" direction="row">
        <TextField
          id="outlined-basic"
          label="Enter Email Address"
          variant="outlined"
          style={{
            maxWidth: "500px",
            maxHeight: "30px",
            minWidth: "500px",
            minHeight: "30px",
          }}
        />
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          size="large"
          style={{
            maxWidth: "110px",
            maxHeight: "56px",
            minWidth: "110px",
            minHeight: "56px",
          }}
        >
          Submit
        </Button>
      </Stack>

      <br></br>
      <br></br>
      <br></br>

      {/* Component for Report a scam and Chat with us buttons*/}
      <ReportScamButton />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}

export default PhishingSimulation;
