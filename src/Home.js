import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";

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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Div>{"Phishing Detector"}</Div>
      <br></br>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Div>{"Phishing Simulation"}</Div>
      <br></br>
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
