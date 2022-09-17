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
      <Box
        sx={{
          paddingTop: "5vw",
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
            <Typography color={"black"}>
              It is done by scammers to get access of your personal information
              usually through mail disguised as it is sent from a trusted
              source. The access to the victim’s device is gained when this
              malicious content is opened.
              <br />
              <br />
              To know more visit:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ovic.vic.gov.au/privacy/phishing-attacks-and-how-to-protect-against-them/#:~:text=WHAT%20IS%20PHISHING%3F,or%20to%20make%20it%20unavailable."
              >
                Phishing Attacks and How to Protect Against Them -
                (ovic.vic.gov.au)
              </a>
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
            <Typography color={"black"}>
              It involves using another individual’s personal information for
              own benefit. It often utilizes public information such as name,
              birth date, social media etc.
              <br />
              <br />
              To know more visit:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.oaic.gov.au/privacy/data-breaches/identity-fraud"
              >
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
            <Typography color={"black"}>
              It occurs when someone uses your card to make a purchase without
              your consent or authorization. This illegal purchase can be done
              through your lost or stolen physical card or through your bank
              details they have obtained.
              <br />
              <br />
              To know more visit:{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.commbank.com.au/support/security/card-fraud.html#:~:text=Card%20fraud%20occurs%20when%20someone,hold%20of%20without%20your%20knowledge."
              >
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
