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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import IconTopic from "../components/iconTopic";

function PhishingDetector() {
  const matches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:655px)");
  const [loading, setLoading] = React.useState(false);

  const [phishRate, setPhishRate] = useState(0);

  const [legitRate, setLegitRate] = useState(0);

  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  let phishRate1 = 0;
  let legitRate1 = 0;

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
          height: "100%",
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
                  label="Enter an URL: https://www.example.com"
                  onChange={handleChange}
                  border={4}
                  placeholder="Enter an URL: https://www.example.com"
                  borderColor="green"
                />
                <button onClick={handleClear}>{<ClearIcon />}</button>
              </form>
            </div>
            <button className="submit" onClick={handleClick}>
              Check
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
              <CircularProgress size="75px" sx={{ color: "#A36F09" }} />
            </div>

            <Stack
              spacing={2}
              className="stack1"
              display={result === "legit" ? "block" : "none"}
            >
              <br />
              <Alert severity="success">
                This URL is safe!
                <br />
                {legitRate}% legitimate
                <br />
                {phishRate}% phishing
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
                <br />
                {legitRate}% legitimate
                <br />
                {phishRate}% phishing
              </Alert>
              <br />
            </Stack>

            <Stack
              spacing={2}
              className="stack1"
              display={result === "invalid" ? "block" : "none"}
            >
              <br />
              <Alert severity="warning">This is an invalid URL ！！</Alert>
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
        </Box>

        <Box sx={{ height: "70px" }}></Box>
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
                justifyContent="center"
                sx={{
                  width: "100px",
                  height: "100px",
                }}
              >
                <Link to="/signs">
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
                </Link>
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
          </Box>

          <Box height={lMatches ? "0px" : "30px"}></Box>

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
              <Box
                border={4}
                justifyContent="center"
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/report">
                  <Box
                    className="picBox3"
                    sx={{
                      width: "30%",
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
                      marginTop: "-28px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Report a scam
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box height="20px"></Box>

              <Box
                border={4}
                justifyContent="center"
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/pastData">
                  <Box
                    className="picBox4"
                    sx={{
                      width: "30%",
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
                      marginTop: "-28px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Check Past Data
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default PhishingDetector;
