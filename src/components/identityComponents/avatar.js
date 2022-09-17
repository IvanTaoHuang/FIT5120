import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import phishingEmail from "../../images/phishingEmail.png";
import creditCard from "../../images/creditCard.jpg";
import identity from "../../images/identity.jpg";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./avatar.css";
import { useMediaQuery } from "@mui/material";

export default function ImageAvatars() {
  const matches = useMediaQuery("(min-width:1390px)");

  return (
    // <Box sx={{ marginLeft: "42vw", marginTop: "10vh" }}>
    <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
      <Grid
        container
        direction={matches ? "row" : "column"}
        // justifyContent="flex-end"
        alignItems={matches ? "none" : "center"}
        justifyContent={matches ? "center" : "center"}
        columns={matches ? 16 : 4}
        spacing={2}
      >
        <Grid item xs={4}>
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
                It is done by scammers to get access of your personal
                information usually through mail disguised as it is sent from a
                trusted source. The access to the victim’s device is gained when
                this malicious content is opened.
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
        </Grid>
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
      </Grid> */}

        <Grid item xs={4}>
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
                own benefit. It often utilizes public information such as name,
                birth date, social media etc.
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
        </Grid>
        {/* <Grid item xs={6}>
        <Box sx={{ width: "50%" }}>
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
        </Box>
      </Grid> */}
        <Grid item xs={4}>
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
              height="160"
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
                details they have obtained.
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
        </Grid>
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
      </Grid>
    </Box>
    // <Stack direction="row" spacing={3} className="avatars" >
    //   <Button>
    //     <Avatar
    //       alt="Phishing Fraud"
    //       src={phishingEmail}
    //       sx={{ width: 300, height: 300 }}
    //     />
    //   </Button>
    // </Stack>
    // <Stack direction="row" spacing={2}>
    //   <Button>
    //     <Avatar
    //       alt="Identity Fraud"
    //       src={identity}
    //       sx={{ width: "15vw", height: "15vw" }}
    //     />
    //   </Button>
    // </Stack>
    // <Stack direction="row" spacing={2}>
    //   <Button>
    //     <Avatar
    //       alt="Debit Card Fraud"
    //       src={creditCard}
    //       sx={{ width: "15vw", height: "15vw" }}
    //     />
    //   </Button>
    // </Stack>
  );
}
