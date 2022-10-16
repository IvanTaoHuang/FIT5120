import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Breadcrumb from "../components/breadCrumb";
import "../components/phishingDetectorComponents/phishingDetector.css";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";
import Alert from "@mui/material/Alert";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import IconTopic from "../components/iconTopic";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import tutVideo from "../images/detectorTut.mp4";
import poster from "../images/poster.PNG";
import { useTheme } from "@mui/material/styles";
import ButtonsOnBot from "../components/buttonOnBot";

function PhishingDetector() {
  const matches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:750px)");
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

  const [phishRate, setPhishRate] = useState(0);

  const [legitRate, setLegitRate] = useState(0);

  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  let phishRate1 = 0;
  let legitRate1 = 0;
  const [buttonText, setButtonText] = React.useState("Check");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };
  const handleClear = (event) => {
    event.preventDefault();
    setResult("");
    setUrl("");
  };
  const [closeAlert, setCloseAlert] = useState(false);
  const handleCloseAlert = () => {
    setCloseAlert(false);
    setResult("");
  };

  const handleClick = async () => {
    // setIsActive((current) => !current);
    console.log("hi");
    await setResult("");
    await setButtonText("Processing...");
    setLoading(true);
    const data = { url: url };
    await fetch("https://api.isitphish.com/v2/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "7bViEf9asD8trUVHmhFRc7g5j048cMqH8CZBO8Cn",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())

      .then((data) => {
        // console.log("Success:", data);

        phishRate1 = data.body.phish;
        legitRate1 = data.body.legit;

        if (phishRate1 < legitRate1) {
          // console.log("legitimate");
          setResult("legit");
          setCloseAlert(true);
        }
        if (phishRate1 > legitRate1) {
          // console.log("phish");
          setResult("phish");
          setCloseAlert(true);
        }
        if (
          phishRate1 === (0 || undefined) &&
          legitRate1 === (0 || undefined)
        ) {
          // console.log("invalid");
          setResult("invalid");
          setCloseAlert(true);
        }
        setPhishRate(parseFloat((phishRate1 * 100).toFixed(3)));
        setLegitRate(parseFloat((legitRate1 * 100).toFixed(3)));
      })

      .catch((error) => {
        console.error("Error:", error);
      });
    setLoading(false);
    setButtonText("Check");
  };

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    padding: theme.spacing(1),
    fontSize: matches ? "40px" : "25px",
    color: "white",

    textAlign: "center",
  }));

  const handleKeyPress = async (event) => {
    // on enter run this function
    if (event.key === "Enter") {
      event.preventDefault();
      await setResult("");
      await setButtonText("Processing...");
      console.log("hi");
      setLoading(true);
      const data = { url: url };
      await fetch("https://api.isitphish.com/v2/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "7bViEf9asD8trUVHmhFRc7g5j048cMqH8CZBO8Cn",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())

        .then((data) => {
          // console.log("Success:", data);

          phishRate1 = data.body.phish;
          legitRate1 = data.body.legit;

          if (phishRate1 < legitRate1) {
            // console.log("legitimate");
            setResult("legit");
            setCloseAlert(true);
          }
          if (phishRate1 > legitRate1) {
            // console.log("phish");
            setResult("phish");
            setCloseAlert(true);
          }
          if (
            phishRate1 === (0 || undefined) &&
            legitRate1 === (0 || undefined)
          ) {
            // console.log("invalid");
            setResult("invalid");
            setCloseAlert(true);
          }
          setPhishRate(parseFloat((phishRate1 * 100).toFixed(3)));
          setLegitRate(parseFloat((legitRate1 * 100).toFixed(3)));
        })

        .catch((error) => {
          console.error("Error:", error);
        });
      setLoading(false);
      setButtonText("Check");
    } else {
      console.log("Failure");
    }
  };

  return (
    <>
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
        <Box
          className="box"
          sx={{
            width: "100%",
            backgroundColor: "black",
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>Detector</title>
            <link
              rel="canonical"
              href="http://catchphish.org/phishingDetector"
            />
            <meta name="description" content="Detector" />
          </Helmet>
          <Breadcrumb page="Phishing Detector" />

          {/* Detector Icon on the top */}
          <IconTopic
            icon={require("../images/detector.png")}
            iconName="Detector icon"
          />

          {/* Component for About Detector and text animation */}
          <Zoom in={true} timeout={1000}>
            <Div>{"Phishing Detector"}</Div>
          </Zoom>

          <br></br>
          <br></br>
          {/* watch tutorial */}
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Box
              border={4}
              borderColor="#59CE8F"
              sx={{
                width: "180px",
                height: "50px",
              }}
              onClick={handleClickOpen}
              className="tutBox"
              borderRadius="18px"
            >
              <Box
                className="picBox10"
                sx={{
                  width: "20%",
                  height: "80%",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              ></Box>

              <Box
                sx={{
                  width: "70%",
                  height: "20%",
                  marginLeft: "50px",
                  marginTop: "-33px",
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Montserrat",
                  }}
                  variant="h1"
                  className="watchTutorial"
                >
                  Watch Tutorial
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
              {"Phishing Detector Tutorial"}
            </DialogTitle>
            <Stack alignItems="center">
              <Box width="90%" height="90%">
                <video
                  // autoPlay="false"
                  loop
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
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
          <div className="popup">
            <div></div>
          </div>

          {/* Component for Enter URL and Check button */}

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
                  value={url}
                  label="Enter an URL starting with https://"
                  onChange={handleChange}
                  border={4}
                  placeholder="Enter an URL starting with https://"
                  borderColor="green"
                />
                <button onClick={handleClear}>{<ClearIcon />}</button>
              </form>
            </div>
            <button className="submit" onClick={handleClick}>
              {buttonText}
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
              display={result === "legit" ? "block" : "none"}
            >
              <br />
              <Alert severity="success">
                This URL is safe!
                {/* <br />
                {legitRate}% legitimate
                <br />
                {phishRate}% phishing */}
              </Alert>

              <br />
            </Stack>

            <Stack
              spacing={2}
              className="stack1"
              display={result === "phish" ? "block" : "none"}
            >
              <br />
              <Alert severity="error">
                This URL has a high risk of being phishing!
                {/* <br />
                {legitRate}% legitimate
                <br />
                {phishRate}% phishing */}
              </Alert>
              <br />
            </Stack>

            <Stack
              spacing={2}
              className="stack1"
              display={result === "invalid" ? "block" : "none"}
            >
              <br />
              <Alert severity="warning">
                This is an invalid URL ！
                <br /> Please include https:// at the beginning.{" "}
              </Alert>
              <br />
            </Stack>

            {/* <IconButton
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
            </IconButton> */}
          </Stack>
        </Box>

        <Box sx={{ height: "70px" }}></Box>

        <Stack direction={lMatches ? "row" : "column"}>
          <Box
            sx={{
              width: lMatches ? "50%" : "100%",
              backgroundColor: "black",
            }}
          >
            <Link to="/signs">
              <Stack
                marginLeft={lMatches ? "3vw" : "0px"}
                direction="row"
                justifyContent={lMatches ? "flex-start" : "center"}
                alignItems="center"
              >
                <Box
                  justifyContent="center"
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Box
                    className="picBox6"
                    sx={{
                      marginTop: "14px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                      width: "100%",
                      height: "100%",
                    }}
                  ></Box>
                </Box>
                <Box width="30px"></Box>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Montserrat Alternates",
                    fontSize: "18px",
                  }}
                >
                  <br />
                  <br />
                  Phishing signs to
                  <br />
                  look out in your mail
                </Typography>
              </Stack>
            </Link>
          </Box>

          <Box height={lMatches ? "0px" : "30px"}></Box>
        </Stack>
        {/* three buttons */}
        {/* <Box
          sx={{ width: "100%", backgroundColor: "black", marginTop: "50px" }}
        >
          <Stack direction={lMatches ? "row" : "column"}>
            <Box
              sx={{
                width: lMatches ? "50%" : "100%",
                backgroundColor: "black",
              }}
            >
              <Stack
                marginLeft={lMatches ? "5vw" : "0px"}
                direction="row"
                justifyContent={lMatches ? "flex-start" : "center"}
                alignItems="center"
              >
                <Box
                  border={4}
                  borderColor="#59CE8F"
                  sx={{
                    width: "180px",
                    height: "50px",
                  }}
                  borderRadius="18px"
                  className="identifyBox"
                >
                  <Link to="/identify">
                    <Box
                      className="picBox1"
                      sx={{
                        width: "20%",
                        height: "80%",
                        marginLeft: "10px",
                        marginTop: "5px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "70%",
                        height: "20%",
                        marginLeft: "50px",
                        marginTop: "-33px",
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "white",
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                        }}
                        variant="h1"
                        className="identifyText"
                      >
                        Identify Scams
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Stack>
            </Box>

            <Box height={lMatches ? "0px" : "20px"}></Box>

            <Box
              sx={{
                width: lMatches ? "50%" : "100%",
                backgroundColor: "black",
              }}
            >
              <Stack
                alignItems={lMatches ? "flex-end" : "center"}
                marginRight={lMatches ? "5vw" : "0px"}
              >
                <Link to="/report">
                  <Box
                    border={4}
                    justifyContent="center"
                    borderColor="#59CE8F"
                    sx={{
                      width: "180px",
                      height: "50px",
                    }}
                    borderRadius="18px"
                    className="reportBox"
                  >
                    <Box
                      className="picBox3"
                      sx={{
                        width: "25%",
                        height: "80%",
                        marginLeft: "10px",
                        marginTop: "5px",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "75%",
                        height: "20%",
                        marginLeft: "50px",
                        marginTop: "-33px",
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{
                          color: "white",
                          fontSize: "20px",
                          fontFamily: "Montserrat",
                        }}
                        variant="h1"
                        className="reportText"
                      >
                        Report a scam
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Stack>
            </Box>
          </Stack>
          <Box height="130px"></Box>
        </Box> */}
        <Box sx={{ height: "60px" }}></Box>
        <ButtonsOnBot link1="/identify" link2="/report" />
      </Box>
    </>
  );
}

export default PhishingDetector;
