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
        minHeight: "300px",
        maxHeight: "600px",
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
      <Stack direction="column" alignItems="center">
        <div
          // width={props.width}
          // marginLeft={props.left}
          // className={`${props.sign}`}
          // className="sign1"
          // backgroundImage={props.img}
          style={{
            // backgroundImage: props.img,
            width: "80%",
            // height: "10%",
          }}
        >
          <img className="animated-gif" src={props.gif} alt={props.gitName} />
        </div>
      </Stack>
    </Box>
  );
}
