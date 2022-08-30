import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function PhishingDetector(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "40px",
    marginLeft: "10vw",
  }));
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "90%",
        marginTop: "15vh",
      }}
    >
      <Toolbar id="back-to-top-anchor" />
      <React.Fragment>
        <CssBaseline />
        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phishing Detector</title>
        <link rel="canonical" href="http://catchphish.org/PhishingDetector" />
        <meta name="description" content="Phishing Detector" />
      </Helmet>
      <Zoom in={true} timeout={1000}>
        <Div>{"About Detector"}</Div>
      </Zoom>

      <br></br>
      <br></br>
      <Zoom in={true} timeout={2500}>
        <Typography
          variant="body1"
          gutterBottom
          fontSize={"30px"}
          marginLeft="15vw"
        >
          The detection feature can be found in the tools dashboard on top. The
          detection model is created through deep learning therefore it provide
          you with the authenticity of a provided URL with accuracy in no time.
          Phising websites are being used widely therefore it is advised to look
          before you leap. The detection is free to use and can be helpful in
          clearing your doubts about any links you recieverd from an unknow
          source. We also provide some common signs to look for determing the
          validity of any content you recieve
        </Typography>
      </Zoom>

      <br></br>
      <br></br>
      <br></br>
      <Stack marginLeft="35vw" spacing="2vw" direction="row">
        <TextField
          id="outlined-basic"
          label="Enter URL"
          variant="outlined"
          style={{
            maxWidth: "500px",
            maxHeight: "30px",
            minWidth: "500px",
            minHeight: "30px",
          }}
        />
        <Button
          startIcon={<CheckOutlinedIcon />}
          variant="contained"
          size="large"
          style={{
            maxWidth: "110px",
            maxHeight: "56px",
            minWidth: "110px",
            minHeight: "56px",
          }}
        >
          Check
        </Button>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <Stack marginLeft="20vw">
        <Button
          startIcon={<WarningAmberOutlinedIcon />}
          variant="contained"
          style={{
            maxWidth: "270px",
            maxHeight: "50px",
            minWidth: "270px",
            minHeight: "50px",
          }}
          onClick={handleClick}
        >
          Common signs of Phshing
        </Button>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <Slide direction="up" in={isActive}>
        <Typography
          variant="body1"
          gutterBottom
          fontSize={"30px"}
          marginLeft="15vw"
        >
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Slide>
      <br></br>
      <br></br>
      <br></br>

      <Stack
        spacing="48vw"
        direction="row"
        marginLeft="15vw"
        marginRight="15vw"
      >
        <Button
          startIcon={<ReportOutlinedIcon />}
          variant="outlined"
          size="large"
          style={{
            maxWidth: "200px",
            maxHeight: "50px",
            minWidth: "200px",
            minHeight: "50px",
          }}
        >
          Report a scam
        </Button>
        <Button
          startIcon={<ChatOutlinedIcon />}
          variant="outlined"
          size="large"
          style={{
            maxWidth: "200px",
            maxHeight: "50px",
            minWidth: "200px",
            minHeight: "50px",
          }}
        >
          Chat with us
        </Button>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}

export default PhishingDetector;
