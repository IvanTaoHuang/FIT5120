import Barchart from "../components/pastDataComponents/chart";
import Month2019AL from "../Data/month2019AL";
import Month2019NoR from "../Data/month2019NoR";
import Month2020AL from "../Data/month2020AL";
import Month2020NoR from "../Data/month2020NoR";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Month1920 = () => {
  const month2019AL = Month2019AL();
  const month2020AL = Month2020AL();
  const [month1920ALstate, setag2019Data1] = useState({
    labels: month2019AL.map((data) => data.month),
    datasets: [
      {
        label: "2019",
        data: month2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: month2020AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const month2019NoR = Month2019NoR();
  const month2020NoR = Month2020NoR();
  const [month1920NoRstate, setag2019Data] = useState({
    labels: month2019NoR.map((data) => data.month),
    datasets: [
      {
        label: "2019",
        data: month2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
      {
        label: "2020",
        data: month2020NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(255,234,122,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Month in 2019 and 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month1920NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Month in 2019 and 2020
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month1920ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Month1920;
