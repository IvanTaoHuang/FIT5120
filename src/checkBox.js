import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Stack } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Barchart from "./chart";
import { useState } from "react";
import AgeGroup2019NoR from "./Data/ageGroup2019NoR";
import AgeGroup2019AL from "./Data/ageGroup2019AL";
import AgeGroup2020NoR from "./Data/ageGroup2020NoR";
import AgeGroup2020AL from "./Data/ageGroup2020AL";
import AgeGroup2021NoR from "./Data/ageGroup2021NoR";
import AgeGroup2021AL from "./Data/ageGroup2021AL";
import { Button, Typography } from "@mui/material";
import Month2019AL from "./Data/month2019AL";
import Month2019NoR from "./Data/month2019NoR";
import Month2020AL from "./Data/month2020AL";
import Month2020NoR from "./Data/month2020NoR";
import Month2021AL from "./Data/month2021AL";
import Month2021NoR from "./Data/month2021NoR";
import State2019AL from "./Data/state2019AL";
import State2019NoR from "./Data/state2019NoR";
import State2020AL from "./Data/state2020AL";
import State2020NoR from "./Data/state2020NoR";
import State2021AL from "./Data/state2021AL";
import State2021NoR from "./Data/state2021NoR";
import TypesAgeGroupExp from "./Data/typesAgeGroupExp";
import TypesAgeGroupRes from "./Data/typesAgeGroupRes";
import TypesMenPF from "./Data/typesMenPF";
import TypesWomenPF from "./Data/typesWomenPF";
import TypesStateCF from "./Data/typesStateCF";
import TypesStateIT from "./Data/typesStateIT";
import TypesStateScams from "./Data/typesStateScams";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTheme } from "styled-components";
import { useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Radio from "@mui/material/Radio";

// Transition for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ControlledCheckbox() {
  //Breakpoints
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1000px)");
  // Open state for dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Data from Reported Scams datasets
  const ageGroup2019AL = AgeGroup2019AL();
  const ageGroup2019NoR = AgeGroup2019NoR();
  const ageGroup2020AL = AgeGroup2020AL();
  const ageGroup2020NoR = AgeGroup2020NoR();
  const ageGroup2021AL = AgeGroup2021AL();
  const ageGroup2021NoR = AgeGroup2021NoR();
  const month2019AL = Month2019AL();
  const month2019NoR = Month2019NoR();
  const month2020AL = Month2020AL();
  const month2020NoR = Month2020NoR();
  const month2021AL = Month2021AL();
  const month2021NoR = Month2021NoR();
  const state2019AL = State2019AL();
  const state2019NoR = State2019NoR();
  const state2020AL = State2020AL();
  const state2020NoR = State2020NoR();
  const state2021AL = State2021AL();
  const state2021NoR = State2021NoR();

  // Data from Types of Scams datasets
  const typesAgeGroupExp = TypesAgeGroupExp();
  const typesAgeGroupRes = TypesAgeGroupRes();
  const typesMenPF = TypesMenPF();
  const typesWomenPF = TypesWomenPF();
  const typesStateCF = TypesStateCF();
  const typesStateIT = TypesStateIT();
  const typesStateScams = TypesStateScams();

  //data for Reported Scams Age Group 2019
  const [ageGroup2019ALstate, setag2019Data1] = useState({
    labels: ageGroup2019AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: ageGroup2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [ageGroup2019NoRstate, setag2019Data2] = useState({
    labels: ageGroup2019NoR.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Number of Reports",
        data: ageGroup2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams Age Group 2020
  const [ageGroup2020ALstate, setag2020Data1] = useState({
    labels: ageGroup2020AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: ageGroup2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [ageGroup2020NoRstate, setag2020Data2] = useState({
    labels: ageGroup2020NoR.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Number of Reports",
        data: ageGroup2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams Age Group 2021
  const [ageGroup2021ALstate, setag2021Data1] = useState({
    labels: ageGroup2021AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: ageGroup2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [ageGroup2021NoRstate, setag2021Data2] = useState({
    labels: ageGroup2021NoR.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Number of Reports",
        data: ageGroup2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams Month 2019
  const [month2019ALstate, setmonth2019Data1] = useState({
    labels: month2019AL.map((data) => data.month),
    datasets: [
      {
        label: "Amount Lost",
        data: month2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [month2019NoRstate, setmonth2019Data2] = useState({
    labels: month2019NoR.map((data) => data.month),
    datasets: [
      {
        label: "Number of Reports",
        data: month2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams Month 2020
  const [month2020ALstate, setmonth2020Data1] = useState({
    labels: month2020AL.map((data) => data.month),
    datasets: [
      {
        label: "Amount Lost",
        data: month2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [month2020NoRstate, setmonth2020Data2] = useState({
    labels: month2020NoR.map((data) => data.month),
    datasets: [
      {
        label: "Number of Reports",
        data: month2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams Month 2021
  const [month2021ALstate, setmonth2021Data1] = useState({
    labels: month2021AL.map((data) => data.month),
    datasets: [
      {
        label: "Amount Lost",
        data: month2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [month2021NoRstate, setmonth2021Data2] = useState({
    labels: month2021NoR.map((data) => data.month),
    datasets: [
      {
        label: "Number of Reports",
        data: month2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams state 2019
  const [state2019ALstate, setstate2019Data1] = useState({
    labels: state2019AL.map((data) => data.state),
    datasets: [
      {
        label: "Amount Lost",
        data: state2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [state2019NoRstate, setstate2019Data2] = useState({
    labels: state2019NoR.map((data) => data.state),
    datasets: [
      {
        label: "Number of Reports",
        data: state2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams State 2020
  const [state2020ALstate, setstate2020Data1] = useState({
    labels: state2020AL.map((data) => data.state),
    datasets: [
      {
        label: "Amount Lost",
        data: state2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [state2020NoRstate, setstate2020Data2] = useState({
    labels: state2020NoR.map((data) => data.state),
    datasets: [
      {
        label: "Number of Reports",
        data: state2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  //data for Reported Scams State 2021
  const [state2021ALstate, setstate2021Data1] = useState({
    labels: state2021AL.map((data) => data.state),
    datasets: [
      {
        label: "Amount Lost",
        data: state2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  const [state2021NoRstate, setstate2021Data2] = useState({
    labels: state2021NoR.map((data) => data.state),
    datasets: [
      {
        label: "Number of Reports",
        data: state2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

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
    ageGroupSetChecked({
      ...ageGroupChecked,
      agfirst: false,
      agsecond: false,
      agthird: false,
    });
    monthSetChecked({
      ...monthChecked,
      monthFirst: false,
      monthSecond: false,
      monthThird: false,
    });
    stateSetChecked({
      ...stateChecked,
      stateFirst: false,
      stateSecond: false,
      stateThird: false,
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
    ageGroupSetChecked({
      ...ageGroupChecked,
      agfirst: false,
      agsecond: false,
      agthird: false,
    });
    monthSetChecked({
      ...monthChecked,
      monthFirst: false,
      monthSecond: false,
      monthThird: false,
    });
    stateSetChecked({
      ...stateChecked,
      stateFirst: false,
      stateSecond: false,
      stateThird: false,
    });
  };

  const { ageGroup, month, state } = attrChecked;

  // State for age group graph
  const [ageGroupChecked, ageGroupSetChecked] = React.useState({
    agfirst: false,
    agsecond: false,
    agthird: false,
  });

  const ageGroupHandleChange = (event) => {
    ageGroupSetChecked({
      ...ageGroupChecked,
      agfirst: false,
      agsecond: false,
      agthird: false,
      [event.target.name]: event.target.checked,
    });
  };

  const { agfirst, agsecond, agthird } = ageGroupChecked;

  // set for month graphs
  const [monthChecked, monthSetChecked] = React.useState({
    monthFirst: false,
    monthSecond: false,
    monthThird: false,
  });

  const monthHandleChange = (event) => {
    monthSetChecked({
      ...monthChecked,
      monthFirst: false,
      monthSecond: false,
      monthThird: false,
      [event.target.name]: event.target.checked,
    });
  };

  const { monthFirst, monthSecond, monthThird } = monthChecked;

  // set state graphs
  const [stateChecked, stateSetChecked] = React.useState({
    stateFirst: false,
    stateSecond: false,
    stateThird: false,
  });

  const stateHandleChange = (event) => {
    stateSetChecked({
      ...stateChecked,
      stateFirst: false,
      stateSecond: false,
      stateThird: false,
      [event.target.name]: event.target.checked,
    });
  };

  const { stateFirst, stateSecond, stateThird } = stateChecked;

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

  // const [ageYear, ageYearChecked] = React.useState({
  //   age2019: false,
  //   age2020: false,
  //   age2021: false,
  // });
  // const ageYearHandleChange = (event) => {
  //   ageYearSetChecked({
  //     ...ageYear,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
  // const { age2019, age2020, age2021 } = ageYear;

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: "10vw" }}></Box>
        <Box>
          <Stack direction="row" spacing={0.2}>
            <IconButton size="small" onClick={handleClickOpen} color="primary">
              <HelpIcon />
            </IconButton>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Description "}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Here you can see the past statistics related to fraud
                  conducted through internet. You would be able to see the
                  Reported scams and the types of Personal Fraud according to
                  Age, Gender and State. <br />
                  <br />
                  To see your desired visualization simply select which option
                  you would like to see. All analysis is supported through
                  articles if a significant trend can be seen.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>CLOSE</Button>
              </DialogActions>
            </Dialog>
            <Typography variant="h6">
              Please select one of the following:
            </Typography>
          </Stack>
          <Box sx={{ marginLeft: "33px" }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Radio
                    checked={reports}
                    onChange={typeHandleChange}
                    name="reports"
                  />
                }
                label="Reported Scams"
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={exposed}
                    onChange={typeHandleChange}
                    name="exposed"
                  />
                }
                label="Types of Personal fraud"
              />
            </FormGroup>
          </Box>
        </Box>
        <Box sx={{ width: "12vw" }}></Box>
        <Box sx={{ display: typeChecked.reports ? "block" : "none" }}>
          <Typography variant="h6">Please select another one:</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Radio
                  checked={ageGroup}
                  onChange={attrHandleChange}
                  name="ageGroup"
                />
              }
              label="Age Group"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={month}
                  onChange={attrHandleChange}
                  name="month"
                />
              }
              label="Month"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={state}
                  onChange={attrHandleChange}
                  name="state"
                />
              }
              label="State"
            />
          </FormGroup>
        </Box>
        <Box sx={{ display: typeChecked.exposed ? "block" : "none" }}>
          <Typography variant="h6">Please select another one:</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Radio
                  checked={ageGroupType}
                  onChange={typesHandleChange}
                  name="ageGroupType"
                />
              }
              label="Age Group"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={genderType}
                  onChange={typesHandleChange}
                  name="genderType"
                />
              }
              label="Gender"
            />
            <FormControlLabel
              control={
                <Radio
                  checked={stateType}
                  onChange={typesHandleChange}
                  name="stateType"
                />
              }
              label="State"
            />
          </FormGroup>
          <br />
          <Button variant="contained" onClick={typeHandleChange}>
            Reset
          </Button>
        </Box>
        <Box sx={{ width: "12vw" }}></Box>
        <Box sx={{ display: attrChecked.ageGroup ? "block" : "none" }}>
          <Typography variant="h6">Please select a year:</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agfirst}
                  onChange={ageGroupHandleChange}
                  name="agfirst"
                />
              }
              label="2019"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={agsecond}
                  onChange={ageGroupHandleChange}
                  name="agsecond"
                />
              }
              label="2020"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={agthird}
                  onChange={ageGroupHandleChange}
                  name="agthird"
                />
              }
              label="2021"
            />
          </FormGroup>
          <br />
          <Button variant="contained" onClick={typeHandleChange}>
            Reset
          </Button>
        </Box>

        <Box sx={{ display: attrChecked.month ? "block" : "none" }}>
          <Typography variant="h6">Please select a year</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={monthFirst}
                  onChange={monthHandleChange}
                  name="monthFirst"
                />
              }
              label="2019"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={monthSecond}
                  onChange={monthHandleChange}
                  name="monthSecond"
                />
              }
              label="2020"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={monthThird}
                  onChange={monthHandleChange}
                  name="monthThird"
                />
              }
              label="2021"
            />
          </FormGroup>
          <br />
          <Button variant="contained" onClick={typeHandleChange}>
            Reset
          </Button>
        </Box>

        <Box sx={{ display: attrChecked.state ? "block" : "none" }}>
          <Typography variant="h6">Please select a year</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={stateFirst}
                  onChange={stateHandleChange}
                  name="stateFirst"
                />
              }
              label="2019"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={stateSecond}
                  onChange={stateHandleChange}
                  name="stateSecond"
                />
              }
              label="2020"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={stateThird}
                  onChange={stateHandleChange}
                  name="stateThird"
                />
              }
              label="2021"
            />
          </FormGroup>
          <br />
          <Button variant="contained" onClick={typeHandleChange}>
            Reset
          </Button>
        </Box>
      </Stack>
      <Box sx={{ marginTop: "10vh" }}></Box>
      <Box
        sx={{
          display: ageGroupChecked.agfirst ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to Age Groups in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2019NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to Age Groups in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2019ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
        <Box
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
              <Typography>
                Based on the provided tables above, people aged 65 and more are
                the most vulnerable group among the other generation, this is
                followed by the fact that this group is not engaged as same as
                the other age groups in the online world. Besides, there are a
                couple of biomedical reasons that put them in danger.
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
      </Box>

      <Box
        sx={{
          display: ageGroupChecked.agsecond ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to Age Groups in 2020
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2020NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to Age Groups in 2020
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2020ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
        <Box
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
              <Typography>
                Based on the provided tables above, people aged 65 and more are
                the most vulnerable group among the other generation, this is
                followed by the fact that this group is not engaged as same as
                the other age groups in the online world. Besides, there are a
                couple of biomedical reasons that put them in danger.
                <br />
                <br />
                If you are interested in more about the reasons click{" "}
                <a href="https://www.socialworktoday.com/news/dn_040617.shtml">
                  here
                </a>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Box
        sx={{
          display: ageGroupChecked.agthird ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to Age Groups in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2021NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to Age Groups in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={ageGroup2021ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
        <Box
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
              <Typography>
                Based on the provided tables above, people aged 65 and more are
                the most vulnerable group among the other generation, this is
                followed by the fact that this group is not engaged as same as
                the other age groups in the online world. Besides, there are a
                couple of biomedical reasons that put them in danger.
                <br />
                <br />
                If you are interested in more about the reasons click{" "}
                <a href="https://www.socialworktoday.com/news/dn_040617.shtml">
                  here
                </a>
                .
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>

      <Box
        sx={{
          display: monthChecked.monthFirst ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to months in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={month2019NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to months in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={month2019ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
      </Box>
      <Box
        sx={{
          display: monthChecked.monthSecond ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to months in 2020
        </Typography>
        <Barchart chartData={month2020NoRstate} />
        <Box sx={{ height: "4vh" }}></Box>
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to months in 2020
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={month2020ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
      </Box>
      <Box
        sx={{
          display: monthChecked.monthThird ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to months in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={month2021NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to months in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={month2021ALstate} />
        <Box sx={{ height: "4vh" }}></Box>
        <Box
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
              <Typography>
                Based on the provided tables, the first thing which is worth
                mentioning is the amount of money lost in May 2021. This trend
                dramatically increased in one month by over 20%. The reason was
                the huge smishing attack (SMS phishing attack) which affects
                many Aussie families in one month.
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
        </Box>
      </Box>

      <Box
        sx={{
          display: stateChecked.stateFirst ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to states in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2019NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to states in 2019
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2019ALstate} />
      </Box>
      <Box
        sx={{
          display: stateChecked.stateSecond ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to states in 2020
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2020NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to states in 2020
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2020ALstate} />
      </Box>
      <Box
        sx={{
          display: stateChecked.stateThird ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of scams reported according to states in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2021NoRstate} />
        <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
          Reported amount lost in AUD according to states in 2021
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={state2021ALstate} />
      </Box>
      <Box
        sx={{
          display: typesChecked.ageGroupType ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Exposed Rate and Respond Rate according to Age groups
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={typesAgeGroupExpState} />
        <Box sx={{ height: "4vh" }}></Box>
        <Box
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
              <Typography>
                Based on the provided information in the above graph, an
                estimated 55% of Australians aged 15 years and over were exposed
                to a scam. The lowest age group is 15-24 with 39.5 % exposure
                rate while this rate is slightly higher in all other age groups.
                However, the rate of response is dramatically lower than
                exposure. It means from 10 people who are exposed to scams, only
                1 of them respond to that.
                <br></br>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Box
        sx={{
          display: typesChecked.genderType ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of different types of scams according to genders
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={typesMenPFState} />
      </Box>
      <Box
        sx={{
          display: typesChecked.stateType ? "block" : "none",
          width: "70vw",
          height: "40vh",
          marginLeft: "12vw",
        }}
      >
        <Typography variant="h4" fontSize={"2vw"}>
          Number of different types of scams according to states
        </Typography>
        <Box sx={{ height: "4vh" }}></Box>
        <Barchart chartData={typesStateState} />
      </Box>
    </div>
  );
}
