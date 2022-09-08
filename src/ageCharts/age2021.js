import Barchart from "../components/pastDataComponents/chart";
import AgeGroup2021AL from "../Data/ageGroup2021AL";
import AgeGroup2021NoR from "../Data/ageGroup2021NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Age2021 = () => {
  const age2021AL = AgeGroup2021AL();
  const [age2021ALstate, setag2019Data1] = useState({
    labels: age2021AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: age2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const ageGroup2021NoR = AgeGroup2021NoR();
  const [age2021NoRstate, setag2019Data] = useState({
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
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Age Groups in 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2021NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Age Groups in 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2021ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Age2021;
