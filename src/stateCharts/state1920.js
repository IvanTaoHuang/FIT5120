import Barchart from "../components/pastDataComponents/chart";
import State2019AL from "../Data/state2019AL";
import State2019NoR from "../Data/state2019NoR";
import State2020AL from "../Data/state2020AL";
import State2020NoR from "../Data/state2020NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const State1920 = () => {
  const state2019AL = State2019AL();
  const state2020AL = State2020AL();
  const [state1920ALstate, setag2019Data1] = useState({
    labels: state2019AL.map((data) => data.state),
    datasets: [
      {
        label: "2019",
        data: state2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: state2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const state2019NoR = State2019NoR();
  const state2020NoR = State2020NoR();
  const [state1920NoRstate, setag2019Data] = useState({
    labels: state2019NoR.map((data) => data.state),
    datasets: [
      {
        label: "2019",
        data: state2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: state2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to states in 2019 and 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={state1920NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to states in 2019 and 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={state1920ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default State1920;
