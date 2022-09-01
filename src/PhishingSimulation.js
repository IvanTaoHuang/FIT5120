import { Button } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import SendIcon from "@mui/icons-material/Send";
import Fade from "@mui/material/Fade";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./ScrollTop";

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function PhishingSimulation(props) {
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
        <title>Phishing Simulation</title>
        <link rel="canonical" href="http://catchphish.org/PhishingSimulation" />
        <meta name="description" content="Phishing Simulation" />
      </Helmet>
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
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Fade>

      <br></br>
      <br></br>
      <br></br>
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

export default PhishingSimulation;
