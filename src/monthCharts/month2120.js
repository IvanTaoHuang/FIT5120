import Barchart from "../components/pastDataComponents/chart";
import Month2021AL from "../Data/month2021AL";
import Month2021NoR from "../Data/month2021NoR";
import Month2020AL from "../Data/month2020AL";
import Month2020NoR from "../Data/month2020NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";

import { Typography } from "@mui/material";

const Month2120 = () => {
  const month2021AL = Month2021AL();
  const month2020AL = Month2020AL();
  const [month2120ALstate, setag2019Data1] = useState({
    labels: month2020AL.map((data) => data.month),
    datasets: [
      {
        label: "2020",
        data: month2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: month2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const month2021NoR = Month2021NoR();
  const month2020NoR = Month2020NoR();
  const [month2120NoRstate, setag2019Data] = useState({
    labels: month2020NoR.map((data) => data.month),
    datasets: [
      {
        label: "2020",
        data: month2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: month2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Month in 2020 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2120NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Month in 2020 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2120ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Month2120;
