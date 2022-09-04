import { Helmet } from "react-helmet";
import ControlledCheckbox from "./checkBox";
import ScrollTop from "./scrollTop";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";

function PastData(props) {
  return (
    <div>
      {/* To change the title of page on browser */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Past Data</title>
        <link rel="canonical" href="http://catchphish.org/PastData" />
        <meta name="description" content="Past Data" />
      </Helmet>

      {/* Component for check-boxes and charts */}
      <ControlledCheckbox />
    </div>
  );
}
export default PastData;
