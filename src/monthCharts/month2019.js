import Barchart from "../components/pastDataComponents/chart";
import Month2019AL from "../Data/month2019AL";
import Month2019NoR from "../Data/month2019NoR";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Month2019 = () => {
  const month2019AL = Month2019AL();
  const [month2019ALstate, setag2019Data1] = useState({
    labels: month2019AL.map((data) => data.month),
    datasets: [
      {
        label: "Amount Lost",
        data: month2019AL.map((data) => data.amountLost),
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  const month2019NoR = Month2019NoR();
  const [month2019NoRstate, setag2019Data] = useState({
    labels: month2019NoR.map((data) => data.month),
    datasets: [
      {
        label: "Number of Reports",
        data: month2019NoR.map((data) => data.numberOfReports),
        backgroundColor: "rgba(53,162,235,0.5)",
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });
  return (
    <>
      <Typography variant="h4" fontSize={"2vw"}>
        Number of scams reported according to Month in 2019
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2019NoRstate} />
      <Typography variant="h4" fontSize={"2vw"} marginTop={"5vh"}>
        Reported amount lost in AUD according to Month in 2019
      </Typography>
      <Box sx={{ height: "4vh" }}></Box>
      <Barchart chartData={month2019ALstate} />
      <Box sx={{ height: "4vh" }}></Box>
    </>
  );
};
export default Month2019;
