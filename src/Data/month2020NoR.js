import { useState } from "react";

const Month2020NoR = (props) => {
  const [data, setData] = useState([
    { month: "Jan", numberOfReports: 2399 },
    { month: "Feb", numberOfReports: 2943 },
    { month: "Mar", numberOfReports: 2195 },
    { month: "Apr", numberOfReports: 3155 },
    { month: "May", numberOfReports: 2363 },
    { month: "Jun", numberOfReports: 3009 },
    { month: "Jul", numberOfReports: 3707 },
    { month: "Aug", numberOfReports: 4220 },
    { month: "Sep", numberOfReports: 5419 },
    { month: "Oct", numberOfReports: 5358 },
    { month: "Nov", numberOfReports: 4903 },
    { month: "Dec", numberOfReports: 4407 },
  ]);

  return data;
};

export default Month2020NoR;
