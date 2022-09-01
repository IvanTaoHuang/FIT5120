import { useState } from "react";

const Month2019NoR = (props) => {
  const [data, setData] = useState([
    { month: "Jan", numberOfReports: 2225 },
    { month: "Feb", numberOfReports: 2211 },
    { month: "Mar", numberOfReports: 1974 },
    { month: "Apr", numberOfReports: 1664 },
    { month: "May", numberOfReports: 1826 },
    { month: "Jun", numberOfReports: 1577 },
    { month: "Jul", numberOfReports: 2223 },
    { month: "Aug", numberOfReports: 2385 },
    { month: "Sep", numberOfReports: 1974 },
    { month: "Oct", numberOfReports: 2730 },
    { month: "Nov", numberOfReports: 2617 },
    { month: "Dec", numberOfReports: 1764 },
  ]);

  return data;
};

export default Month2019NoR;
