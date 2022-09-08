import Barchart from "../components/pastDataComponents/chart";
import AgeGroup2019AL from "../Data/ageGroup2019AL";
import AgeGroup2021AL from "../Data/ageGroup2021AL";
import AgeGroup2019NoR from "../Data/ageGroup2019NoR";
import AgeGroup2021NoR from "../Data/ageGroup2021NoR";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Age1921 = () => {
  const age2019AL = AgeGroup2019AL();
  const age2021AL = AgeGroup2021AL();
  const [age1921ALstate, setag2019Data1] = useState({
    labels: age2019AL.map((data) => data.ageGroup),
    datasets: [
      {
        label: "2019",
        data: age2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: age2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const age2019NoR = AgeGroup2019NoR();
  const age2021NoR = AgeGroup2021NoR();
  const [age1921NoRstate, setag1920Data1] = useState({
    labels: age2021NoR.map((data) => data.ageGroup),
    datasets: [
      {
        label: "2019",
        data: age2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2021",
        data: age2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Age Groups in 2019 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age1921NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Age Groups in 2019 and 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={age1921ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Age1921;
