import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useState } from "react";
import Slide from "@mui/material/Slide";

function PastData() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
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

      <Slide direction="up" in={!isActive}>
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
    </div>
  );
}
export default PastData;
