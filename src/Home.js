import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;
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
  window: PropTypes.func,
};

function Home(props) {
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
        minWidth: "390px",
        marginTop: "5vh",
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
        <title>Home Page</title>
        <link rel="canonical" href="http://catchphish.org/home" />
        <meta name="description" content="Home page" />
      </Helmet>
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
          CatchPhish is a website dedicated to reduce phising scams in
          Australia. 20% of young Australians have reported their experience of
          scam by entering URL which they usually recieve through mails. Through
          the website, we detect and educate about these phishing scams so that
          such scams can be reported. The features offered in the website is to
          detect any URL you are suspicious about and another is a simulation
          which offers an experience on how phishing scams usually occur. The
          website also links you to SCAMWatch to report any phishing scams you
          discovered.
        </Typography>
      </Slide>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
          The detection feature can be found in the tools dashboard on top. The
          detection model is created through deep learning therefore it provide
          you with the authenticity of a provided URL with accuracy in no time.
          Phising websites are being used widely therefore it is advised to look
          before you leap. The detection is free to use and can be helpful in
          clearing your doubts about any links you recieverd from an unknow
          source. We also provide some common signs to look for determing the
          validity of any content you recieve
        </Typography>
      </Fade>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
          Experience is own’s on teacher. Learning about phishing scams by get a
          first hand experience will increase awareness and which will make you
          cautious in entering any unknown links.
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
            minWidth: "220px",
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
            minWidth: "220px",
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
      <br></br>
    </Box>
  );
}

export default Home;
