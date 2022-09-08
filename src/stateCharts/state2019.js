import Barchart from "../components/pastDataComponents/chart";
import State2019AL from "../Data/state2019AL";
import State2019NoR from "../Data/state2019NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const State2019 = () => {
  const state2019AL = State2019AL();
  const [state2019ALstate, setag2019Data1] = useState({
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

  const state2019NoR = State2019NoR();
  const [state2019NoRstate, setag2019Data] = useState({
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
  return (
    <>
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
    </>
  );
};
export default State2019;
