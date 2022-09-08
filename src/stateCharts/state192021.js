import Barchart from "../components/pastDataComponents/chart";
import State2019AL from "../Data/state2019AL";
import State2019NoR from "../Data/state2019NoR";
import State2020AL from "../Data/state2020AL";
import State2020NoR from "../Data/state2020NoR";
import State2021AL from "../Data/state2021AL";
import State2021NoR from "../Data/state2021NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const State192021 = () => {
  const state2019AL = State2019AL();
  const state2020AL = State2020AL();
  const state2021AL = State2021AL();
  const [state192021ALstate, setag2019Data1] = useState({
    labels: state2020AL.map((data) => data.state),
    datasets: [
      {
        label: "2019",
        data: state2019AL.map((data) => data.amountLost),
        backgroundColor: "#00FF00",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: state2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: state2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const state2019NoR = State2019NoR();
  const state2020NoR = State2020NoR();
  const state2021NoR = State2021NoR();
  const [state192021NoRstate, setag2019Data] = useState({
    labels: state2020NoR.map((data) => data.state),
    datasets: [
      {
        label: "2019",
        data: state2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "#00FF00",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: state2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: state2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to states in 2019, 2020 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={state192021NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according states in 2019, 2020 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={state192021ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default State192021;
