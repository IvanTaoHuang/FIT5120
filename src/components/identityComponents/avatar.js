import * as React from "react";
import Stack from "@mui/material/Stack";
import phishingEmail from "../../images/phishingEmail.png";
import creditCard from "../../images/debitCardFraud.png";
import identity from "../../images/identityFraud.png";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./avatar.css";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet";
import Zoom from "@mui/material/Zoom";

export default function ImageAvatars() {
  const matches = useMediaQuery("(min-width:1250px)");
  const smatches = useMediaQuery("(min-width:575px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: smatches ? "40px" : "25px",
    // marginLeft: smatches ? "10vw" : "4vw",
    textAlign: "center",
  }));
  return (
    <>
      <Zoom in={true} timeout={1000}>
        <Div>{"Identify"}</Div>
      </Zoom>
      <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Identify</title>
          <link rel="canonical" href="http://catchphish.org/identify" />
          <meta name="description" content="identify" />
        </Helmet>

        <Stack
          direction={matches ? "row" : "column"}
          spacing={12}
          alignItems="center"
          justifyContent={matches ? "center" : "center"}
        >
          {/* <Grid item xs={4}> */}
          {/* <Button>
          <Avatar
            alt="Phishing Fraud"
            src={phishingEmail}
            sx={{ width: 200, height: 200 }}
          />
        </Button> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="160"
              image={phishingEmail}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Phishing Fraud
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is done by scammers to get access to your personal
                information usually through mail disguised as it is sent from a
                trusted source. The access to the victim’s device is gained when
                this malicious content is opened. <br />
                <br />
                When receiving mail from an anonymous source or from an unknown
                agent, be careful of the links provided. Attackers cannot access
                your system through mail, but they can use external links so
                that you come out of your secure dome.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://ovic.vic.gov.au/privacy/phishing-attacks-and-how-to-protect-against-them/#:~:text=WHAT%20IS%20PHISHING%3F,or%20to%20make%20it%20unavailable."
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>

          {/* <Grid item xs={6}>
        <Box sx={{ width: "50%" }}>
          <Typography color={"black"}>
            It is done by scammers to get access of your personal information
            usually through mail disguised as it is sent from a trusted source.
            The access to the victim’s device is gained when this malicious
            content is opened.
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
        </Box>
      

        
        {/* <Button>
          <Avatar
            alt="Identity Fraud"
            src={identity}
            sx={{ width: 200, height: 200 }}
          />
        </Button> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="180"
              image={identity}
              alt="Identity Fraud"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Identity Fraud
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It involves using another individual’s personal information for
                their own benefit. It often utilizes public information such as
                name, birth date, social media etc.
                <br />
                <br />
                Many job seekers fall as victim of identity fraud. Before you
                register or give your details to any agency, be in mind of this
                fraud and do a background search on the organisation. If found
                reliable you can share your data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.oaic.gov.au/privacy/data-breaches/identity-fraud"
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>

          {/* <Box sx={{ width: "50%" }}>
          <Typography color={"black"}>
            <br />
            <br />
            It involves using another individual’s personal information for own
            benefit. It often utilizes public information such as name, birth
            date, social media etc.
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
        </Box> */}

          {/* <Button>
          <Avatar
            alt="Debit Card Fraud"
            src={creditCard}
            sx={{ width: 200, height: 200 }}
          />
        </Button> */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={creditCard}
              alt="Debit Card Fraud"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Debit Card Fraud
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It occurs when someone uses your card to make a purchase without
                your consent or authorization. This illegal purchase can be done
                through your lost or stolen physical card or through your bank
                details they have obtained. <br />
                They often request for your debit card as it is easy to take
                money from your bank account and the transaction is completed
                quickly. If this fraud is found it would be too late. Therefore,
                if the payment details are necessary but you are still in doubt,
                provide your credit card details and you can cancel the
                transaction later.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.commbank.com.au/support/security/card-fraud.html#:~:text=Card%20fraud%20occurs%20when%20someone,hold%20of%20without%20your%20knowledge."
                >
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
          {/* </Grid> */}
        </Stack>
        {/* <Grid item xs={6}>
        <Box sx={{ width: "50%" }}>
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
        </Box>
      </Grid> */}
      </Box>
    </>
  );
}
