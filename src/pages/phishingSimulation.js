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
import ButtonsOnBot from "../components/buttonOnBot";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import tutVideo from "../images/simulatorTut.mp4";
import poster from "../images/poster.PNG";
import { useTheme } from "@mui/material/styles";
import "../components/phishingSimulationComponents/phishingSimulation.css";

function PhishingSimulation() {
  const matches = useMediaQuery("(min-width:575px)");
  const mMatches = useMediaQuery("(min-width:670px)");
  const lMatches = useMediaQuery("(min-width:655px)");
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
    console.log("open");
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      {/* Breadcrumb */}
      <Breadcrumb page="Phishing Simulator" />

      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phishing Simulation</title>
        <link rel="canonical" href="http://catchphish.org/PhishingSimulation" />
        <meta name="description" content="Phishing Simulation" />
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
      <br></br>
      <br></br>
      {/* watch tutorial */}
      <Stack
        // marginLeft={lMatches ? "5vw" : "0px"}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          border={4}
          borderColor="#59CE8F"
          sx={{
            width: "320px",
            height: "50px",
          }}
          onClick={handleClickOpen}
          className="tutBox"
          borderRadius="18px"
        >
          <Box
            className="picBox10"
            sx={{
              width: "12%",
              height: "80%",
              marginLeft: "10px",
              marginTop: "5px",
            }}
          ></Box>

          <Box
            sx={{
              width: "80%",
              height: "20%",
              marginLeft: "53px",
              marginTop: "-30px",
            }}
          >
            <Typography
              align="center"
              sx={{
                color: "white",
                fontSize: "19px",
                fontFamily: "Montserrat",
              }}
              variant="h1"
              className="watchTutorial"
            >
              How to use the Phishing Simulator
            </Typography>
          </Box>
        </Box>
      </Stack>
      {/* Dialog to show tutorial video */}
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
        fullWidth="true"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Phishing Simulator Tutorial"}
        </DialogTitle>
        <Stack alignItems="center">
          <Box width="90%" height="90%">
            <video
              // autoPlay="false"
              loop
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              poster={poster}
              src={tutVideo}
            ></video>
          </Box>
        </Stack>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
      <br></br>
      <br></br>

      {/* Two Buttons for different simulators */}
      <Box sx={{ height: "50px" }}></Box>
      <Stack direction={mMatches ? "row" : "column"} alignItems="center">
        <Box
          sx={{
            width: "50%",
            backgroundColor: "black",
          }}
        >
          <Stack alignItems="center">
            <Box
              border={4}
              borderColor="#59CE8F"
              sx={{
                width: "320px",
                height: "60px",
              }}
              borderRadius="18px"
              className="firstHandBox"
            >
              <Link to="/firstSimulator">
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Montserrat Alternates",
                    marginTop: "12px",
                  }}
                  variant="h1"
                  className="firstHandText"
                >
                  First-Hand Simulator
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ height: mMatches ? "0px" : "30px" }}></Box>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "black",
          }}
        >
          <Stack alignItems="center">
            <Box
              border={4}
              borderColor="#59CE8F"
              sx={{
                width: "320px",
                height: "60px",
              }}
              borderRadius="18px"
              className="quickBox"
            >
              <Link to="/quickExperience">
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    fontFamily: "Montserrat Alternates",
                    marginTop: "12px",
                  }}
                  variant="h1"
                  className="quickText"
                >
                  Quick Experience
                </Typography>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box height="80px"></Box>
      {/* Two buttons */}
      <ButtonsOnBot
        link1="/report"
        link2="/pastData"
        text1="How do I report a Phishing URL?"
        text2="What are the past phishing numbers?"
      />
    </Box>
  );
}

export default PhishingSimulation;
