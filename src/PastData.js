import { Helmet } from "react-helmet";
import ControlledCheckbox from "./checkBox";
import ScrollTop from "./ScrollTop";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

function PastData(props) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Past Data</title>
        <link rel="canonical" href="http://catchphish.org/PastData" />
        <meta name="description" content="Past Data" />
      </Helmet>
      <Toolbar id="back-to-top-anchor" />
      <React.Fragment>
        <CssBaseline />
        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
      <ControlledCheckbox />
    </div>
  );
}
export default PastData;
