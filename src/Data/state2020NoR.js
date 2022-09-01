import { useState } from "react";

const State2020NoR = (props) => {
  const [data, setData] = useState([
    { state: "VIC", numberOfReports: 12009 },
    { state: "NSW", numberOfReports: 14018 },
    { state: "QLD", numberOfReports: 7778 },
    { state: "WA", numberOfReports: 3991 },
    { state: "SA", numberOfReports: 2903 },
    { state: "Overseas", numberOfReports: 460 },
    { state: "ACT", numberOfReports: 1748 },
    { state: "TAS", numberOfReports: 744 },
    { state: "Not supplied", numberOfReports: 28 },
    { state: "NT", numberOfReports: 399 },
  ]);

  return data;
};

export default State2020NoR;
