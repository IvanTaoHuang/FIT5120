import { Helmet } from "react-helmet";
import ControlledCheckbox from "../components/pastDataComponents/checkBox";
import React from "react";
import ScrollToTop from "../components/scroll";
import SimpleAccordion from "../components/pastDataComponents/accordion";
import { Box } from "@mui/system";
import Breadcrumb from "../components/breadCrumb";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function PastData(props) {
  const matches = useMediaQuery("(min-width:575px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    padding: theme.spacing(1),
    fontSize: matches ? "40px" : "25px",
    color: "white",

    textAlign: "center",
  }));
  return (
    <div>
      <Box
        sx={{
          background: "black",
          width: "100%",
          position: "fixed",
          top: "70px",
          left: "0",
          bottom: "0px",
          right: "0",
          overflow: "auto",
        }}
      >
        <Breadcrumb page="Visualisation" />
        <Zoom in={true} timeout={1000}>
          <Div>{"Statistics from ScamWatch and ABS"}</Div>
        </Zoom>
        <Box height="50px"></Box>
        {/* <SimpleAccordion /> */}

        {/* To change the title of page on browser */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Past Data</title>
          <link rel="canonical" href="http://catchphish.org/PastData" />
          <meta name="description" content="Past Data" />
        </Helmet>

        <ScrollToTop />

        {/* Component for check-boxes and charts */}
        <ControlledCheckbox />
      </Box>
    </div>
  );
}
export default PastData;
