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

function Home() {
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
      <Div>{"About"}</Div>
      <br></br>
      <Slide direction="right" in={true} timeout={1000}>
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
      <br></br>
      <Div>{"Phishing Detector"}</Div>
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
      <br></br>
      <Div>{"Phishing Simulation"}</Div>
      <br></br>
      <Grow in={true} timeout={4000}>
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
      </Grow>
      <Grow in={true} style={{ transformOrigin: "0 0 0" }} timeout={5000}>
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
