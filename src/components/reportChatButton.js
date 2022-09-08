import * as React from "react";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";

function ReportScamButton() {
  return (
    <Stack spacing="48vw" direction="row" marginLeft="15vw" marginRight="15vw">
      {/* Component for Report a scam and Chat with us buttons*/}
      <Button
        startIcon={<ReportOutlinedIcon />}
        variant="outlined"
        size="large"
        style={{
          maxWidth: "200px",
          maxHeight: "50px",
          minWidth: "200px",
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
          minWidth: "200px",
          minHeight: "50px",
        }}
      >
        Chat with us
      </Button>
    </Stack>
  );
}

export default ReportScamButton;
