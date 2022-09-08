import Barchart from "../components/pastDataComponents/chart";
import AgeGroup2019AL from "../Data/ageGroup2019AL";
import AgeGroup2019NoR from "../Data/ageGroup2019NoR";
import { useState } from "react";
import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Age2019 = () => {
  const age2019AL = AgeGroup2019AL();
  const [age2019ALstate, setag2019Data1] = useState({
    labels: age2019AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "Amount Lost",
        data: age2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const ageGroup2019NoR = AgeGroup2019NoR();
  const [age2019NoRstate, setag2019Data] = useState({
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
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Age Groups in 2019
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2019NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Age Groups in 2019
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age2019ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Age2019;
