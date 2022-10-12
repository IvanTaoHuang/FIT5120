import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import "./timeToRead.css";

export default function TimeToRead(props) {
  return (
    <>
      <Stack direction="row" marginLeft="100px">
        <Box
          justifyContent="center"
          sx={{
            width: "180px",
            height: "50px",
          }}
        >
          <Box
            className="picBox5"
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
              {props.time}
            </Typography>
          </Box>
        </Box>
      </Stack>
      ;
    </>
  );
}
