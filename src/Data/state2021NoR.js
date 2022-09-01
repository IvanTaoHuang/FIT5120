import { useState } from "react";

const State2021NoR = (props) => {
  const [data, setData] = useState([
    { state: "VIC", numberOfReports: 19359 },
    { state: "NSW", numberOfReports: 22752 },
    { state: "QLD", numberOfReports: 12601 },
    { state: "WA", numberOfReports: 6051 },
    { state: "SA", numberOfReports: 5288 },
    { state: "Overseas", numberOfReports: 386 },
    { state: "ACT", numberOfReports: 2788 },
    { state: "TAS", numberOfReports: 1323 },
    { state: "Not supplied", numberOfReports: 47 },
    { state: "NT", numberOfReports: 704 },
  ]);

  return data;
};

export default State2021NoR;
