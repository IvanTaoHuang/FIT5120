import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

const AgeAnalysis = () => {
  //Breakpoints
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      sx={{
        paddingTop: matches ? "5vh" : "3vh",
        paddingLeft: matches ? "17vw" : "14vw",
        paddingBottom: "5vw",
        width: matches ? "40vw" : "50vw",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            variant="h2"
            fontSize={matches ? "2vw" : "4vw"}
            paddingLeft={matches ? "38%" : "33%"}
            fontFamily="Helvetica Neue"
          >
            Analysis
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={matches ? "1vw" : "2vw"}>
            Based on the provided tables above, people aged 65 and more are the
            most vulnerable group among the other generation, this is followed
            by the fact that this group is not engaged as same as the other age
            groups in the online world. Besides, there are a couple of
            biomedical reasons that put them in danger.
            <br />
            <br />
            couple of biomedical reasons that put them in danger.<br></br>
            If you are interested in more about the reasons click{" "}
            <a href="https://www.socialworktoday.com/news/dn_040617.shtml">
              here
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AgeAnalysis;
