import { useState } from "react";

const Month2021NoR = (props) => {
  const [data, setData] = useState([
    { month: "Jan", numberOfReports: 4499 },
    { month: "Feb", numberOfReports: 4385 },
    { month: "Mar", numberOfReports: 5342 },
    { month: "Apr", numberOfReports: 4462 },
    { month: "May", numberOfReports: 4365 },
    { month: "Jun", numberOfReports: 5444 },
    { month: "Jul", numberOfReports: 6324 },
    { month: "Aug", numberOfReports: 11059 },
    { month: "Sep", numberOfReports: 8660 },
    { month: "Oct", numberOfReports: 7954 },
    { month: "Nov", numberOfReports: 4417 },
    { month: "Dec", numberOfReports: 4388 },
  ]);

  return data;
};

export default Month2021NoR;
