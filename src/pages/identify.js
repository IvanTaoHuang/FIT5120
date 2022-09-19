import React from "react";
import ImageAvatars from "../components/identityComponents/avatar.js";
import Breadcrumb from "../components/breadCrumb.js";
import { Box } from "@mui/system";
export default function Identify() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          position: "fixed",
          top: "70px",
          left: "0",
          bottom: "0",
          right: "0",
          overflow: "auto",
        }}
      >
        <Breadcrumb page="Identify" />
        <ImageAvatars />
      </Box>
    </>
  );
}
