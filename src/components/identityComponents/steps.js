import React from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import Typography from "@mui/material/Typography";
import "./steps.css";

export default function Steps(props) {
  return (
    <Box
      border={4}
      borderColor="#A36F09"
      sx={{
        width: "80vw",

        maxHeight: "3000px",
        marginLeft: props.margin,
      }}
    >
      <Stack direction="row">
        <Stack direction="column">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "15px",
              fontFamily: "Montserrat",
              marginLeft: "1vw",
            }}
          >
            {props.information1}
          </Typography>
          <br />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "15px",
              fontFamily: "Montserrat",
              marginLeft: "1vw",
            }}
          >
            {props.information2}
            <a
              className="boxLink"
              rel="noopener noreferrer"
              target="_blank"
              href={props.link}
            >
              {props.linkName}
            </a>
            .
          </Typography>
          <br />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "15px",
              fontFamily: "Montserrat",
              marginLeft: "1vw",
            }}
          >
            {props.information3}
            <a
              className="boxLink"
              rel="noopener noreferrer"
              target="_blank"
              href={props.link1}
            >
              {props.linkName1}
            </a>
            {props.information4}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
