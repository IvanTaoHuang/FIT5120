import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Stack } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Barchart from "./chart";
import { useState } from "react";
import Age2019 from "../../ageCharts/age2019";
import Age2020 from "../../ageCharts/age2020";
import Age2021 from "../../ageCharts/age2021";
import Age1920 from "../../ageCharts/age1920";
import Age1921 from "../../ageCharts/age1921";
import Age2120 from "../../ageCharts/age2120";
import Age192021 from "../../ageCharts/age192021";
import Month1920 from "../../monthCharts/month1920";
import Month2019 from "../../monthCharts/month2019";
import Month2020 from "../../monthCharts/month2020";
import Month2021 from "../../monthCharts/month2021";
import Month2120 from "../../monthCharts/month2120";
import Month1921 from "../../monthCharts/month1921";
import Month192021 from "../../monthCharts/month192021";
import State1920 from "../../stateCharts/state1920";
import State192021 from "../../stateCharts/state192021";
import State1921 from "../../stateCharts/state1921";
import State2019 from "../../stateCharts/state2019";
import State2020 from "../../stateCharts/state2020";
import State2021 from "../../stateCharts/state2021";
import State2120 from "../../stateCharts/state2120";
import { Button, Typography } from "@mui/material";
import TypesAgeGroupExp from "../../Data/typesAgeGroupExp";
import TypesAgeGroupRes from "../../Data/typesAgeGroupRes";
import TypesMenPF from "../../Data/typesMenPF";
import TypesWomenPF from "../../Data/typesWomenPF";
import TypesStateCF from "../../Data/typesStateCF";
import TypesStateIT from "../../Data/typesStateIT";
import TypesStateScams from "../../Data/typesStateScams";
import StatisticDialog from "./statisticDialog";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AgeAnalysis from "./ageAnalysis";
import Radio from "@mui/material/Radio";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export default function ControlledCheckbox() {
  //Breadcrumbs
  const breadcrumbs = [
    <Link to="/" className="breadcrumb">
      Home
    </Link>,
    <Typography key="3" color="text.primary" variant="h5">
      Identify
    </Typography>,
  ];

  //Breakpoints
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1000px)");
  const smMatches = useMediaQuery("(min-width:1000px)");
  const mMatches = useMediaQuery("(min-width:1250px)");

  // Data from Types of Scams datasets
  const typesAgeGroupExp = TypesAgeGroupExp();
  const typesAgeGroupRes = TypesAgeGroupRes();
  const typesMenPF = TypesMenPF();
  const typesWomenPF = TypesWomenPF();
  const typesStateCF = TypesStateCF();
  const typesStateIT = TypesStateIT();
  const typesStateScams = TypesStateScams();

  //data for Types of Scams Age Group
  const [typesAgeGroupExpState, setAGES] = useState({
    labels: typesAgeGroupExp.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Rate of Exposed",
        data: typesAgeGroupExp.map((data) => data.rateOfExposed),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "Rate of Respond",
        data: typesAgeGroupRes.map((data) => data.rateOfRespond),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Types of Scams Gender
  const [typesMenPFState, setGender] = useState({
    labels: typesMenPF.map((data) => data.typesOfPersonalFraud),
    datasets: [
      {
        label: "Men",
        data: typesMenPF.map((data) => data.Men),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "Women",
        data: typesWomenPF.map((data) => data.Women),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Types of Scams State
  const [typesStateState, setState] = useState({
    labels: typesStateCF.map((data) => data.state),
    datasets: [
      {
        label: "Card Fraud",
        data: typesStateCF.map((data) => data.cardFraud),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "Identity Theft",
        data: typesStateIT.map((data) => data.identityTheft),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "Scams",
        data: typesStateScams.map((data) => data.scams),
        backgroundColor: "rgba(78,492,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  // state for type of data
  const [typeChecked, typeSetChecked] = React.useState({
    reports: false,
    exposed: false,
  });

  const typeHandleChange = (event) => {
    typeSetChecked({
      ...typeChecked,
      reports: false,
      exposed: false,
      [event.target.name]: event.target.checked,
    });
    attrSetChecked({
      ...attrChecked,
      ageGroup: false,
      month: false,
      state: false,
    });
    ageYearChecked({
      ...ageYear,
      age2019: false,
      age2020: false,
      age2021: false,
    });
    monthYearChecked({
      ...monthYear,
      month2019: false,
      month2020: false,
      month2021: false,
    });
    stateYearChecked({
      ...stateYear,
      state2019: false,
      state2020: false,
      state2021: false,
    });
    typesSetChecked({
      ...typesChecked,
      ageGroupType: false,
      genderType: false,
      stateType: false,
    });
  };

  const { reports, exposed } = typeChecked;

  // State for Reported Scams
  const [attrChecked, attrSetChecked] = React.useState({
    ageGroup: false,
    month: false,
    state: false,
  });

  const attrHandleChange = (event) => {
    attrSetChecked({
      ...attrChecked,
      ageGroup: false,
      month: false,
      state: false,
      [event.target.name]: event.target.checked,
    });
    ageYearChecked({
      ...ageYear,
      age2019: false,
      age2020: false,
      age2021: false,
    });
    monthYearChecked({
      ...monthYear,
      month2019: false,
      month2020: false,
      month2021: false,
    });
    stateYearChecked({
      ...stateYear,
      state2019: false,
      state2020: false,
      state2021: false,
    });
  };

  const { ageGroup, month, state } = attrChecked;

  // state for Types of Scams
  const [typesChecked, typesSetChecked] = React.useState({
    ageGroupType: false,
    genderType: false,
    stateType: false,
  });

  const typesHandleChange = (event) => {
    typesSetChecked({
      ...typesChecked,
      ageGroupType: false,
      genderType: false,
      stateType: false,
      [event.target.name]: event.target.checked,
    });
  };
  const { ageGroupType, genderType, stateType } = typesChecked;

  const [ageYear, ageYearChecked] = React.useState({
    age2019: false,
    age2020: false,
    age2021: false,
  });
  const ageYearHandleChange = (event) => {
    ageYearChecked({
      ...ageYear,
      [event.target.name]: event.target.checked,
    });
  };
  const { age2019, age2020, age2021 } = ageYear;

  const [monthYear, monthYearChecked] = React.useState({
    month2019: false,
    month2020: false,
    month2021: false,
  });
  const monthYearHandleChange = (event) => {
    monthYearChecked({
      ...monthYear,
      [event.target.name]: event.target.checked,
    });
  };
  const { month2019, month2020, month2021 } = monthYear;

  const [stateYear, stateYearChecked] = React.useState({
    state2019: false,
    state2020: false,
    state2021: false,
  });
  const stateYearHandleChange = (event) => {
    stateYearChecked({
      ...stateYear,
      [event.target.name]: event.target.checked,
    });
  };
  const { state2019, state2020, state2021 } = stateYear;

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2} sx={{ marginLeft: "5vw" }}>
          <Card sx={{ width: "23vw" }}>
            <Box>
              <Stack direction="row" spacing={0.2}>
                <StatisticDialog />
                <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                  Please select one of the following:
                </Typography>
              </Stack>
              <Box sx={{ marginLeft: "2.7vw" }}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={reports}
                        onChange={typeHandleChange}
                        name="reports"
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "1vw" }}
                        color="textSecondary"
                      >
                        Reported Scams
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={exposed}
                        onChange={typeHandleChange}
                        name="exposed"
                      />
                    }
                    label={
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "1vw" }}
                        color="textSecondary"
                      >
                        Types of Personal fraud
                      </Typography>
                    }
                  />
                </FormGroup>
              </Box>
            </Box>
          </Card>

          <Box sx={{ width: "8vw" }}></Box>

          <Card
            sx={{
              width: "23vw",
              display: typeChecked.reports ? "block" : "none",
            }}
          >
            <Box
              sx={{
                // display: typeChecked.reports ? "block" : "none",
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                Please select another one:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      checked={ageGroup}
                      onChange={attrHandleChange}
                      name="ageGroup"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      Age Group
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={month}
                      onChange={attrHandleChange}
                      name="month"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      Month
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={state}
                      onChange={attrHandleChange}
                      name="state"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      State
                    </Typography>
                  }
                />
              </FormGroup>
            </Box>
          </Card>

          <Card
            sx={{
              width: "23vw",
              display: typeChecked.exposed ? "block" : "none",
            }}
          >
            <Box
              sx={{
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                Please select another one:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      checked={ageGroupType}
                      onChange={typesHandleChange}
                      name="ageGroupType"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      Age Group
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={genderType}
                      onChange={typesHandleChange}
                      name="genderType"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      Gender
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={stateType}
                      onChange={typesHandleChange}
                      name="stateType"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1vw" }}
                      color="textSecondary"
                    >
                      State
                    </Typography>
                  }
                />
              </FormGroup>
              <br />
              <Button
                variant="contained"
                onClick={typeHandleChange}
                sx={{
                  marginBottom: "1vw",
                }}
                size={smMatches ? "large" : "small"}
              >
                Reset
              </Button>
            </Box>
          </Card>

          <Box sx={{ width: "8vw" }}></Box>

          <Card
            sx={{
              width: "23vw",
              display: attrChecked.ageGroup ? "block" : "none",
            }}
          >
            <Box
              sx={{
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                Please select a year:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={age2019}
                      onChange={ageYearHandleChange}
                      name="age2019"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2019
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={age2020}
                      onChange={ageYearHandleChange}
                      name="age2020"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2020
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={age2021}
                      onChange={ageYearHandleChange}
                      name="age2021"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2021
                    </Typography>
                  }
                />
              </FormGroup>
              <br />
              <Button
                variant="contained"
                onClick={typeHandleChange}
                sx={{ marginBottom: "1vw" }}
                size={smMatches ? "large" : "small"}
              >
                Reset
              </Button>
            </Box>
          </Card>

          <Card
            sx={{
              width: "23vw",
              display: attrChecked.month ? "block" : "none",
            }}
          >
            <Box
              sx={{
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                Please select a year
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={month2019}
                      onChange={monthYearHandleChange}
                      name="month2019"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2019
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={month2020}
                      onChange={monthYearHandleChange}
                      name="month2020"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2020
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={month2021}
                      onChange={monthYearHandleChange}
                      name="month2021"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2021
                    </Typography>
                  }
                />
              </FormGroup>
              <br />
              <Button
                variant="contained"
                onClick={typeHandleChange}
                sx={{ marginBottom: "1vw" }}
                size={smMatches ? "large" : "small"}
              >
                Reset
              </Button>
            </Box>
          </Card>

          <Card
            sx={{
              width: "23vw",
              display: attrChecked.state ? "block" : "none",
            }}
          >
            <Box
              sx={{
                marginLeft: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "1.3vw" }}>
                Please select a year
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state2019}
                      onChange={stateYearHandleChange}
                      name="state2019"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2019
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state2020}
                      onChange={stateYearHandleChange}
                      name="state2020"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2020
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state2021}
                      onChange={stateYearHandleChange}
                      name="state2021"
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "1.2vw" }}
                      color="textSecondary"
                    >
                      2021
                    </Typography>
                  }
                />
              </FormGroup>
              <br />
              <Button
                variant="contained"
                onClick={typeHandleChange}
                sx={{
                  marginBottom: "1vw",
                }}
                size={smMatches ? "large" : "small"}
              >
                Reset
              </Button>
            </Box>
          </Card>
        </Stack>

        <Box sx={{ width: "5vw" }}></Box>
        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              age2019 && age2020 === false && age2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age2019 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              age2020 && age2019 === false && age2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age2020 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              age2021 && age2019 === false && age2020 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age2021 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        {/** Age 2019 2020 */}
        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: age2019 && age2020 && age2021 === false ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age1920 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        {/** Age 2019 2021 */}
        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: age2019 && age2021 && age2020 === false ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age1921 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        {/** Age 2020 2021 */}
        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: age2020 && age2021 && age2019 === false ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age2120 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        {/** Age 2019 2020 2021 */}
        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: age2019 && age2021 && age2020 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Age192021 />
            {/* <AgeAnalysis /> */}
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 && month2020 === false && month2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month2019 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 === false && month2020 && month2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month2020 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 === false && month2020 === false && month2021
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month2021 />
            {/* <Box
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
                    Based on the provided tables, the first thing which is worth
                    mentioning is the amount of money lost in May 2021. This
                    trend dramatically increased in one month by over 20%. The
                    reason was the huge smishing attack (SMS phishing attack)
                    which affects many Aussie families in one month.
                    <br />
                    <br />
                    If you want to find more about the details, you can click{" "}
                    <a href="https://www.9news.com.au/technology/what-is-smishing-the-new-scam-fleecing-australians-of-hundreds-of-thousands/553671fc-5067-4094-9252-b1bf6919cec8">
                      here
                    </a>
                    .
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box> */}
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 && month2020 && month2021 === false ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month1920 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 && month2020 === false && month2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month1921 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              month2019 === false && month2020 && month2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month2120 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: month2019 && month2020 && month2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <Month192021 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 && state2020 === false && state2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State2019 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 === false && state2020 && state2021 === false
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State2020 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 === false && state2020 === false && state2021
                ? "block"
                : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State2021 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 && state2020 && state2021 === false ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State1920 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 && state2020 === false && state2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State1921 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display:
              state2019 === false && state2020 && state2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State2120 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: mMatches ? "58vw" : "68vw",
            marginLeft: "7.5vw",
            display: state2019 && state2020 && state2021 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
            }}
          >
            <State192021 />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: "33vw",
            marginLeft: "7.5vw",
            display: typesChecked.ageGroupType ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
              marginTop: "2vw",
            }}
          >
            <Typography variant="h4" fontSize={"2vw"}>
              Exposed Rate and Respond Rate according to Age groups
            </Typography>
            <Box sx={{ height: "4vh" }}></Box>
            <Barchart chartData={typesAgeGroupExpState} />
            <Box sx={{ height: "4vh" }}></Box>
            {/* <Box
              sx={{
                paddingTop: "5vh",
                paddingLeft: "17vw",
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
                    Analysis
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography fontSize={matches ? "1vw" : "2vw"}>
                    Based on the provided information in the above graph, an
                    estimated 55% of Australians aged 15 years and over were
                    exposed to a scam. The lowest age group is 15-24 with 39.5 %
                    exposure rate while this rate is slightly higher in all
                    other age groups. However, the rate of response is
                    dramatically lower than exposure. It means from 10 people
                    who are exposed to scams, only 1 of them respond to that.
                    <br></br>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box> */}
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: "33vw",
            marginLeft: "7.5vw",
            display: typesChecked.genderType ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
              marginTop: "2vw",
            }}
          >
            <Typography variant="h4" fontSize={"2vw"}>
              Number of different types of scams according to genders
            </Typography>
            <Box sx={{ height: "4vh" }}></Box>
            <Barchart chartData={typesMenPFState} />
          </Box>
        </Card>

        <Card
          sx={{
            width: "50vw",
            height: "33vw",
            marginLeft: "7.5vw",
            display: typesChecked.stateType ? "block" : "none",
          }}
        >
          <Box
            sx={{
              width: "35vw",
              height: "40vh",
              marginLeft: "8vw",
              marginTop: "2vw",
            }}
          >
            <Typography variant="h4" fontSize={"2vw"}>
              Number of different types of scams according to states
            </Typography>
            <Box sx={{ height: "4vh" }}></Box>
            <Barchart chartData={typesStateState} />
          </Box>
        </Card>
      </Stack>
    </div>
  );
}
