import Barchart from "../components/pastDataComponents/chart";
import State2021AL from "../Data/state2021AL";
import State2021NoR from "../Data/state2021NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const State2021 = () => {
  const state2021AL = State2021AL();
  const [state2021ALstate, setag2020Data1] = useState({
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

  const state2021NoR = State2021NoR();
  const [state2021NoRstate, setag2019Data] = useState({
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
  return (
    <>
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
    </>
  );
};
export default State2021;
