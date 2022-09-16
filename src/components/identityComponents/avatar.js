import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import phishingEmail from "../../images/phishingEmail.png";
import creditCard from "../../images/creditCard.jpg";
import identity from "../../images/identity.jpg";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

export default function ImageAvatars() {
  return (
    // <Box sx={{ marginLeft: "42vw", marginTop: "10vh" }}>
    <Grid
      container
      direction="column-reverse"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item xs>
        <Button>
          <Avatar
            alt="Phishing Fraud"
            src={phishingEmail}
            sx={{ width: 300, height: 300 }}
          />
        </Button>
      </Grid>
      <Grid item xs>
        <Button>
          <Avatar
            alt="Identity Fraud"
            src={identity}
            sx={{ width: 300, height: 300 }}
          />
        </Button>
      </Grid>
      <Grid item xs>
        <Button>
          <Avatar
            alt="Debit Card Fraud"
            src={creditCard}
            sx={{ width: 300, height: 300 }}
          />
        </Button>
      </Grid>
    </Grid>
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
