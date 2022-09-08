import Barchart from "../components/pastDataComponents/chart";
import State2020AL from "../Data/state2020AL";
import State2020NoR from "../Data/state2020NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const State2020 = () => {
  const state2020AL = State2020AL();
  const [state2020ALstate, setag2020Data1] = useState({
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

  const state2020NoR = State2020NoR();
  const [state2020NoRstate, setag2019Data] = useState({
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
  return (
    <>
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
    </>
  );
};
export default State2020;
