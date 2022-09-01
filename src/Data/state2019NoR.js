import { useState } from "react";

const State2019NoR = (props) => {
  const [data, setData] = useState([
    { state: "VIC", numberOfReports: 5719 },
    { state: "NSW", numberOfReports: 6996 },
    { state: "QLD", numberOfReports: 4705 },
    { state: "WA", numberOfReports: 3278 },
    { state: "SA", numberOfReports: 1770 },
    { state: "Overseas", numberOfReports: 380 },
    { state: "ACT", numberOfReports: 929 },
    { state: "TAS", numberOfReports: 534 },
    { state: "Not supplied", numberOfReports: 661 },
    { state: "NT", numberOfReports: 198 },
  ]);

  return data;
};

export default State2019NoR;
