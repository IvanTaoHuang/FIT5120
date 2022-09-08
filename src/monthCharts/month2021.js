import Barchart from "../components/pastDataComponents/chart";
import Month2021AL from "../Data/month2021AL";
import Month2021NoR from "../Data/month2021NoR";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Month2021 = () => {
  const month2021AL = Month2021AL();
  const [month2021ALstate, setag2019Data1] = useState({
    labels: month2021AL.map((data) => data.month),
    datasets: [
      {
        label: "Amount Lost",
        data: month2021AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const month2021NoR = Month2021NoR();
  const [month2021NoRstate, setag2019Data] = useState({
    labels: month2021NoR.map((data) => data.month),
    datasets: [
      {
        label: "Number of Reports",
        data: month2021NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Month in 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2021NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Month in 2021
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2021ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Month2021;
