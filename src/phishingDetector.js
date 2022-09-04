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
import { Helmet } from "react-helmet";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";
import ReportScamButton from "./reportChatButton";

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
        marginTop: "5vh",
      }}
    >
      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phishing Detector</title>
        <link rel="canonical" href="http://catchphish.org/PhishingDetector" />
        <meta name="description" content="Phishing Detector" />
      </Helmet>

      {/* Component for About Detector and text animation */}
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
      {/* Component for Enter URL and Check button */}
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
      {/* Component for Common signs of Phshing button and text animation*/}
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

export default PhishingDetector;
