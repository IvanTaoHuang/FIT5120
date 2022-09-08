import Barchart from "../components/pastDataComponents/chart";
import AgeGroup2020AL from "../Data/ageGroup2020AL";
import AgeGroup2020NoR from "../Data/ageGroup2020NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Age2020 = () => {
  const age2020AL = AgeGroup2020AL();
  const [age2020ALstate, setag2019Data1] = useState({
    labels: age2020AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: age2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const ageGroup2020NoR = AgeGroup2020NoR();
  const [age2020NoRstate, setag2019Data] = useState({
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
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Age Groups in 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2020NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Age Groups in 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2020ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Age2020;
