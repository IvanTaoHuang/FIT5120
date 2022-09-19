import React from "react";

import { Box } from "@mui/system";

import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import "./signInfo.css";

export default function SignInfo(props) {
  return (
    <Box
      border={4}
      borderColor="#A36F09"
      sx={{
        width: "80vw",
        height: "300px",
      }}
    >
      <Stack direction="row">
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "50px",
            fontFamily: "Montserrat Alternates",
            marginLeft: "1vw",
          }}
        >
          {props.number}
        </Typography>
        <Stack direction="column">
          <Typography
            sx={{
              color: "#A36F09",
              fontSize: "35px",
              fontFamily: "Montserrat",
              marginLeft: "1vw",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "27px",
              fontFamily: "Montserrat",
              marginLeft: "1vw",
            }}
          >
            {props.information}
          </Typography>
        </Stack>
      </Stack>
      <Box width="80vw">
        {" "}
        <img className="animated-gif" src={props.gif} alt={props.gitName} />
      </Box>
    </Box>
  );
}
