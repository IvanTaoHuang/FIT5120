import React from "react";
import ImageAvatars from "../components/identityComponents/avatar.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./breadCrumb.css";
import { useMediaQuery } from "@mui/material";

export default function Breadcrumb(props) {
  const matches = useMediaQuery("(min-width:450px)");
  const breadcrumbs = [
    <Link to="/" className="breadcrumb">
      Home
    </Link>,
    <Typography key="3" color="white" variant="h5" fontSize={matches ? 24 : 18}>
      {props.page}
    </Typography>,
  ];
  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="large" />}
          aria-label="breadcrumb"
          sx={{ margin: "30px" }}
          color="white"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}
