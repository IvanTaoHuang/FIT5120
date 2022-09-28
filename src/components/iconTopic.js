import React from "react";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import "./iconTopic.css";

export default function IconTopic(props) {
  return (
    <>
      <Stack direction="column" alignItems="center">
        <Box sx={{ width: "200px", height: "180px" }}>
          <img className="icon" src={props.icon} alt={props.iconName} />
        </Box>
      </Stack>
    </>
  );
}
