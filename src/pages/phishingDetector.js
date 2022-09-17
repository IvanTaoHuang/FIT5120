import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";
import ReportScamButton from "../components/reportChatButton";
import Breadcrumb from "../components/breadCrumb";
import RobotHand from "../images/robotHand.png";
import "../components/phishingDetectorComponents/phishingDetector.css";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "@mui/material";

function PhishingDetector(props) {
  const matches = useMediaQuery("(min-width:575px)");
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    // setIsActive((current) => !current);
    console.log("hi");
    // const data = { url: `{props.url}` };
    const data = { url: "https//:www.catchphish.org" };
    fetch("https://api.isitphish.com/v2/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "7bViEf9asD8trUVHmhFRc7g5j048cMqH8CZBO8Cn",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: matches ? "40px" : "25px",
    marginLeft: "10vw",
    textAlign: "center",
  }));
  return (
    <Box
      className="box"
      sx={{
        width: "100%",
        width: "90%",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detector</title>
        <link rel="canonical" href="http://catchphish.org/phishingDetector" />
        <meta name="description" content="Detector" />
      </Helmet>
      <Breadcrumb page="Phishing Detector" />
      {/* Component for About Detector and text animation */}
      <Zoom in={true} timeout={1000}>
        <Div>{"Phishing Detector"}</Div>
      </Zoom>

      {/* <Zoom in={true} timeout={2500}>
        <Typography
          variant="body1"
          gutterBottom
          fontSize={"25px"}
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
      </Zoom> */}

      <br></br>
      <br></br>
      {/* Component for Enter URL and Check button */}
      <Stack spacing="2vw" direction="row" className="stack">
        <TextField
          id="outlined-basic"
          label="Enter an URL: https://www.example.com"
          variant="outlined"
          className="textField"
        />
        <Button
          startIcon={<CheckOutlinedIcon />}
          variant="contained"
          size={matches ? "large" : "small"}
          onClick={handleClick}
        >
          Check
        </Button>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      {/* Component for Common signs of Phshing button and text animation */}
      {/* <Stack marginLeft="20vw">
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
      </Slide> */}
      {/* <br></br>
      <br></br>
      <br></br>

      {/* Component for Report a scam and Chat with us buttons*/}
      {/* <ReportScamButton /> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}

export default PhishingDetector;
