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
import Steps from "./steps.js";
import TimeToRead from "../timeToRead";
import DonutChart from "./donutChart";
import Slider from "@mui/material/Slider";
import { Second2021 } from "../../Data/2021Second";
import { First2021 } from "../../Data/2021First";
import { Second2020 } from "../../Data/2020Second";
import { First2020 } from "../../Data/2020First";
import { Second2019 } from "../../Data/2019Second";
import { First2019 } from "../../Data/2019First";
import { Second2018 } from "../../Data/2018Second";
import { useState } from "react";
import ButtonsOnBot from "../buttonOnBot";
// import { HashLink } from "react-router-hash-link";

export default function ImageAvatars() {
  const matches = useMediaQuery("(min-width:1250px)");
  const smatches = useMediaQuery("(min-width:575px)");
  const lMatches = useMediaQuery("(min-width:655px)");
  const ssmatches = useMediaQuery("(min-width:700px)");
  const sssmatches = useMediaQuery("(min-width:701px)");
  const Mmatches = useMediaQuery("(max-width:835px)");
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(1),
    fontSize: smatches ? "40px" : "25px",
    // marginLeft: smatches ? "10vw" : "4vw",
    textAlign: "center",
  }));
  const [sliderValue, setSliderValue] = useState(0);
  const [data, setData] = useState(Second2018);
  const [title, setTitle] = useState("Cyber incident breaches");
  const handleChange = async (event, sliderValue) => {
    await setSliderValue(sliderValue);

    // await setData("");
    console.log(sliderValue);
    if (sliderValue === 0) {
      setData(Second2018);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 16.66667) {
      setData(First2019);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 33.33333) {
      setData(Second2019);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 50) {
      setData(First2020);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 66.66668) {
      setData(Second2020);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 83.33335) {
      setData(First2021);
      setTitle("Cyber incident breaches");
    }
    if (sliderValue === 100) {
      setData(Second2021);
      setTitle("Cyber incident breaches");
    }
  };

  const marks = [
    {
      value: 0,
      label: ssmatches ? "2nd half-2018" : "",
    },
    {
      value: 16.66667,
      label: Mmatches && sssmatches ? "" : "1st half-2019",
    },
    {
      value: 33.33333,
      label: ssmatches ? "2nd half-2019" : "",
    },
    {
      value: 50,
      label: Mmatches && sssmatches ? "" : "1st half-2020",
    },
    {
      value: 66.66668,
      label: ssmatches ? "2nd half-2020" : "",
    },
    {
      value: 83.33335,
      label: Mmatches && sssmatches ? "" : "1st half-2021",
    },
    {
      value: 100,
      label: ssmatches ? "2nd half-2021" : "",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
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
        <section id="typesOfScam"></section>
        <TimeToRead time="5 mins read"></TimeToRead>

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
                  className="cardLink"
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
                  className="cardLink"
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
                  className="cardLink"
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
      <section id="phishingData"></section>
      <Box sx={{ height: "80px" }}></Box>
      <Stack alignItems="center">
        <Typography
          color="white"
          fontFamily="Montserrat Subrayada"
          fontSize="30px"
        >
          Cyber incident breaches
        </Typography>
      </Stack>
      <Box sx={{ height: "30px" }}></Box>
      {/* Date slider */}
      <Stack alignItems="center">
        <Box
          sx={{
            width: ssmatches ? "80vw" : "340px",
            backgroundColor: "#FFF",
          }}
        >
          <Stack alignItems="center">
            <Slider
              size="medium"
              aria-label="Restricted values"
              defaultValue={0}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
              style={{ width: ssmatches ? "80%" : "300px" }}
              value={sliderValue}
              onChange={handleChange}
              sx={{ color: "black" }}
            />
          </Stack>
        </Box>
      </Stack>
      <Box sx={{ height: "30px" }}></Box>
      {/* DonutChart */}
      <Stack alignItems="center">
        <Box sx={{ width: "90%" }}>
          <Box display="block">
            <DonutChart
              data={data}
              title={title}
              markerSize={ssmatches ? "25" : "15"}
            />
          </Box>
        </Box>
      </Stack>
      <Box sx={{ height: "40px" }}></Box>

      {/* Steps to do if I fail into a scam */}
      <section id="steps"></section>
      <Box sx={{ height: "80px" }}></Box>
      <Box sx={{ marginLeft: "100px" }}>
        <Typography
          sx={{ color: "white", fontFamily: "Montserrat", fontSize: "30px" }}
        >
          What to do if I fall into a scam?
        </Typography>
      </Box>
      <Box sx={{ height: "40px" }}></Box>
      <TimeToRead time="10 mins read"></TimeToRead>
      <Box sx={{ height: "20px" }}></Box>
      <Steps
        stepImg={require("../../images/step1.png")}
        margin="6vw"
        information1="Check the damage done: Scams would be traps to get yourn money in the bank or even worse, your personal information. The information the scammers obtain from the scam you fell would be used to conduct other scams. This can damage your identity and reputation. "
        information2="Therefore, note down all the information you provided when you accessed the phishing recruitment URL. It will include your bank details, address, National ID card, phone number etc. This can be used for conducting a follow up.
"
      ></Steps>
      <Box sx={{ height: "60px" }}></Box>
      <Steps
        stepImg={require("../../images/step2.png")}
        margin="12vw"
        information1="Contact your financial institution: Informing your bank about the scam and the information you provided during the scam is important. Chances of scams is less with credit cards when compared to debit cards. However, it is mandatory to convey it to your bank."
        information2="After providing them the necessary information they would act like blocking your card. If any of your card details were provided to your fake agent, it will be wise to do this step. The institution will provide you with your new card details after a while."
      ></Steps>
      <Box sx={{ height: "60px" }}></Box>
      <Steps
        stepImg={require("../../images/step3.png")}
        margin="6vw"
        information1="Reporting to the concerned authorities: Not every phishing scams would target your money. Most scams done to graduates are with the objective of getting their personal information which can be used for identity theft, blackmail and other violent cyber abuse. The Australian government provide agencies to take action for you."
        information2="If you have your identity stolen, please contact IDCARE on 1800 595 160 or use their cyber tools on "
        link="https://www.idcare.org/learning-centre/apps-and-tools"
        linkName="IDCARE"
        information3="Our website is linked with ScamWatch and assists in reducing scams done in Australia. Please "
        link1="https://www.catchphish.org/report/"
        linkName1="click here"
        information4=" and report your experience caused by phishing to help elimination the chances happening to another graduate."
      ></Steps>
      <Box height="50px"></Box>
      {/* Two buttons on bottom */}
      <ButtonsOnBot />
    </>
  );
}
