import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import TitleTheme from "./titleTheme";
import ReportScamButton from "./reportChatButton";

// To scroll to top

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

function About(props) {
  const Div = TitleTheme();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "90%",
          minWidth: "390px",
          marginTop: "5vh",
        }}
      >
        {/* Component for scroll to top button
        <Toolbar id="back-to-top-anchor" />
        <React.Fragment>
          <CssBaseline />
          <ScrollTop {...props}>
            <Fab color="secondary" size="large" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </React.Fragment> */}

        {/* To change the title of page on browser */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>About</title>
          <link rel="canonical" href="http://catchphish.org/about" />
          <meta name="description" content="About" />
        </Helmet>

        {/* Component for About and text with animation */}
        <Slide direction="right" in={true} timeout={1000}>
          <Div>{"About"}</Div>
        </Slide>
        <br></br>
        <Slide direction="right" in={true} timeout={2000}>
          <Typography
            variant="body2"
            gutterBottom
            fontSize={"30px"}
            marginLeft="15vw"
          >
            CatchPhish is a website dedicated to reduce phishing scams in
            Australia. 20% of young Australians have reported their experience
            of scam by entering URL which they usually recieve through mails.
            Through the website, we detect and educate about these phishing
            scams so that such scams can be reported. The features offered in
            the website is to detect any URL you are suspicious about and
            another is a simulation which offers an experience on how phishing
            scams usually occur. The website also links you to SCAMWatch to
            report any phishing scams you discovered.
          </Typography>
        </Slide>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/**
        
        <Fade in={true} timeout={2000}>
          <Div>{"Phishing Detector"}</Div>
        </Fade>
        <br></br>
        <Fade in={true} timeout={3500}>
          <Typography
            variant="body1"
            gutterBottom
            fontSize={"30px"}
            marginLeft="15vw"
          >
            The detection feature can be found in the tools dashboard on top.
            The detection model is created through deep learning therefore it
            provide you with the authenticity of a provided URL with accuracy in
            no time. Phising websites are being used widely therefore it is
            advised to look before you leap. The detection is free to use and
            can be helpful in clearing your doubts about any links you recieverd
            from an unknow source. We also provide some common signs to look for
            determing the validity of any content you recieve
          </Typography>
        </Fade>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
       // Component for Phishing Simulation and text with animation 
        <Grow in={true} timeout={2000}>
          <Div>{"Phishing Simulation"}</Div>
        </Grow>
        <br></br>
        <Grow in={true} timeout={4000}>
          <Typography
            variant="body1"
            gutterBottom
            fontSize={"30px"}
            marginLeft="15vw"
          >
            Experience is own’s on teacher. Learning about phishing scams by get
            a first hand experience will increase awareness and which will make
            you cautious in entering any unknown links.
          </Typography>
        </Grow>
        <Grow in={true} timeout={5000}>
          <Typography
            variant="body1"
            gutterBottom
            fontSize={"30px"}
            marginLeft="15vw"
          >
            We created a small simulation which provides an usual phishing mail
            content in the mail ID you provide. This exercise will help you
            determine on how to segregate a fake mail from the real one.
          </Typography>
        </Grow>

        <br></br>
        <br></br>
        <br></br>
    // Component for Report a scam and Chat with us buttons

        <ReportScamButton />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}
      </Box>
    </>
  );
}

export default About;
