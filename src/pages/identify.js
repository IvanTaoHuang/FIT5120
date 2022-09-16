import React from "react";
import ImageAvatars from "../components/identityComponents/avatar.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumb from "../components/breadCrumb.js";

export default function Identify() {
  // const breadcrumbs = [
  //   <Link to="/" className="breadcrumb">
  //     Home
  //   </Link>,
  //   <Typography key="3" color="text.primary" variant="h5">
  //     Identify
  //   </Typography>,
  // ];
  return (
    <>
      {/* <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
          sx={{ margin: "30px" }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack> */}
      <Breadcrumb page="Identify" />
      <ImageAvatars />
    </>
  );
}
