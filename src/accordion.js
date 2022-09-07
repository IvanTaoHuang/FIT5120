import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box } from "@mui/system";

import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";

export default function SimpleAccordion() {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <div>
      <Typography variant="h2" sx={{ paddingTop: "2vh", textAlign: "center" }}>
        {" "}
        Learn about Frauds
      </Typography>
      <Box
        sx={{
          paddingTop: "3vw",
          paddingLeft: "30vw",
          paddingBottom: "5vw",
          width: "40vw",
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
              Phishing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It is done by scammers to get access of your personal information
              usually through mail disguised as it is sent from a trusted
              source. The access to the victim’s device is gained when this
              malicious content is opened. <br />
              <br />
              When receiving a mail from anonymous source, be careful on the
              links provided. Attackers cannot access your system through mail,
              but they can using external links so that you come out of your
              secure dome.
              <br />
              <br />
              To report such suspicious phishing mail visit:{" "}
              <a href="https://www.scamwatch.gov.au/report-a-scam">ScamWatch</a>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              variant="h2"
              fontSize={matches ? "2vw" : "4vw"}
              paddingLeft={matches ? "34%" : "24%"}
              fontFamily="Helvetica Neue"
            >
              Identity fraud
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It involves using another individual’s personal information for
              own benefit. It often utilizes public information such as name,
              birth date, social media etc. <br />
              <br />
              Many job seekers fall as victim of identity fraud. To ensure that
              the person you are communicating I valid, you can hit the reply
              button or contact their office directly.
              <br />
              <br />
              To know more visit:{" "}
              <a href="https://www.oaic.gov.au/privacy/data-breaches/identity-fraud">
                Identity fraud - Home (oaic.gov.au)
              </a>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h2"
              fontSize={matches ? "2vw" : "4vw"}
              paddingLeft={matches ? "36%" : "30%"}
              fontFamily="Helvetica Neue"
            >
              Card fraud
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It occurs when someone uses your card to make a purchase without
              your consent or authorization. This illegal purchase can be done
              through your lost or stolen physical card or through your bank
              details they have obtained. <br />
              <br />
              No advertisements for job and other mails would openly ask to
              provide your card or bank details. You should not provide your
              card or bank details to any anonymous person. If you find any then
              you can report that as a scam in{" "}
              <a href="https://www.scamwatch.gov.au/report-a-scam">ScamWatch</a>
              .
              <br />
              <br />
              To know more about card fraud visit:{" "}
              <a href="https://www.commbank.com.au/support/security/card-fraud.html#:~:text=Card%20fraud%20occurs%20when%20someone,hold%20of%20without%20your%20knowledge.">
                Card fraud - CommBank
              </a>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
