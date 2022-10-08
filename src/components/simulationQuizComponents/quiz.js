import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

export default function Quiz(props) {
  return (
    <Stack direction="column" alignItems="center">
      <Typography
        color="white"
        marginTop="10px"
        marginBottom="10px"
        fontSize="25px"
      >
        {props.noOfQuiz}
      </Typography>
      <Box width={props.width} height={props.height}>
        <img src={props.img} width="100%" height="100%"></img>
      </Box>
    </Stack>
  );
}
