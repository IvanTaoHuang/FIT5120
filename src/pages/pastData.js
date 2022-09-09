import { Helmet } from "react-helmet";
import ControlledCheckbox from "../components/pastDataComponents/checkBox";
import React from "react";
import ScrollToTop from "../components/scroll";
import SimpleAccordion from "../components/pastDataComponents/accordion";
import { Box } from "@mui/system";

function PastData(props) {
  return (
    <div>
      <Box sx={{ background: "black", width: "100vw", height: "330vh" }}>
        <SimpleAccordion />
        {/* Component for scroll to top button
      <Toolbar id="back-to-top-anchor" />
      <React.Fragment>
        <CssBaseline />
        <ScrollTop {...props}>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment> */}

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
