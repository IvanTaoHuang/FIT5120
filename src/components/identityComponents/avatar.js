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
import { Link } from "react-router-dom";

export default function ImageAvatars() {
  const matches = useMediaQuery("(min-width:1250px)");
  const smatches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:655px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(1),
    fontSize: smatches ? "40px" : "25px",
    // marginLeft: smatches ? "10vw" : "4vw",
    textAlign: "center",
  }));
  return (
    <>
      <Zoom in={true} timeout={1000}>
        <Div>{"Identify Scams before you fall for them"}</Div>
      </Zoom>
      <Box sx={{ flexGrow: 1, marginTop: "80px" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Identify</title>
          <link rel="canonical" href="http://catchphish.org/identify" />
          <meta name="description" content="identify" />
        </Helmet>

        <Stack direction="row" marginLeft="100px">
          <Box
            justifyContent="center"
            sx={{
              width: "180px",
              height: "50px",
            }}
          >
            <Box
              className="picBox5"
              sx={{
                width: "30%",
                height: "80%",
                marginLeft: "10px",
                marginTop: "5px",
              }}
            ></Box>

            <Box
              sx={{
                width: "70%",
                height: "20%",
                marginLeft: "50px",
                marginTop: "-28px",
              }}
            >
              <Typography
                align="center"
                sx={{
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "Montserrat",
                }}
                variant="h1"
              >
                5 mins read
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box height="50px"></Box>

        <Stack
          direction={matches ? "row" : "column"}
          spacing={12}
          alignItems="center"
          justifyContent={matches ? "center" : "center"}
        >
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
        </Stack>
      </Box>

      <Box height="100px" backgroundColor="black"></Box>
      <Box sx={{ width: "100%", backgroundColor: "black" }}>
        <Stack direction={lMatches ? "row" : "column"}>
          <Box
            sx={{
              width: lMatches ? "50%" : "100%",
              backgroundColor: "black",
            }}
          >
            <Stack
              marginLeft={lMatches ? "5vw" : "0px"}
              direction="row"
              justifyContent={lMatches ? "flex-start" : "center"}
              alignItems="center"
            >
              <Box
                border={4}
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/phishingDetector">
                  <Box
                    className="picBox2"
                    sx={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "70%",
                      height: "20%",
                      marginLeft: "50px",
                      marginTop: "-28px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Scam Detector
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>

          <Box height={lMatches ? "0px" : "20px"}></Box>

          <Box
            sx={{
              width: lMatches ? "50%" : "100%",
              backgroundColor: "black",
            }}
          >
            <Stack
              alignItems={lMatches ? "flex-end" : "center"}
              marginRight={lMatches ? "5vw" : "0px"}
            >
              <Box
                border={4}
                justifyContent="center"
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/report">
                  <Box
                    className="picBox3"
                    sx={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "70%",
                      height: "20%",
                      marginLeft: "50px",
                      marginTop: "-28px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Report a scam
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box height="20px"></Box>

              <Box
                border={4}
                justifyContent="center"
                borderColor="#A36F09"
                sx={{
                  width: "180px",
                  height: "50px",
                }}
              >
                <Link to="/pastData">
                  <Box
                    className="picBox4"
                    sx={{
                      width: "30%",
                      height: "80%",
                      marginLeft: "10px",
                      marginTop: "5px",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "70%",
                      height: "20%",
                      marginLeft: "50px",
                      marginTop: "-28px",
                    }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "Montserrat",
                      }}
                      variant="h1"
                    >
                      Check Past Data
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box height="200px"></Box>
      </Box>
    </>
  );
}
