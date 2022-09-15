import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import phishingEmail from "../../images/phishingEmail.png";
import creditCard from "../../images/creditCard.jpg";
import identity from "../../images/identity.jpg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export default function ImageAvatars() {
  return (
    <Box sx={{ marginLeft: "42vw", marginTop: "10vh" }}>
      <Stack direction="row" spacing={2}>
        <Button>
          <Avatar
            alt="Phishing Fraud"
            src={phishingEmail}
            sx={{ width: "15vw", height: "15vw" }}
          />
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>
          <Avatar
            alt="Identity Fraud"
            src={identity}
            sx={{ width: "15vw", height: "15vw" }}
          />
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button>
          <Avatar
            alt="Debit Card Fraud"
            src={creditCard}
            sx={{ width: "15vw", height: "15vw" }}
          />
        </Button>
      </Stack>
    </Box>
  );
}
